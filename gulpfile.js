const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const del = require('del');
const browserSync = require('browser-sync').create();

const paths = {
    html: {
        src: 'src/**/*.html',
        dest:  'docs'
    },
    pug: {
        src: 'src/**/*.pug',
        dest: 'docs'
    },
    styles: {
        src: 'src/styles/**/main.less',
        dest: 'docs/styles/'
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'docs/scripts/'
    },
    images: {
        src: 'src/images/*',
        dest: 'docs/images/'
    },
    fonts: {
        src: 'src/fonts/*',
        dest: 'docs/fonts/'
    }
  };


function clean() {
    return del([ 'docs/*' ]);
}

function html() {
    return gulp.src(paths.html.src)
        .pipe(gulp.dest(paths.html.dest))
        .pipe(browserSync.stream());
}
function pugg() {
    return gulp.src(paths.pug.src)
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(paths.pug.dest))
        .pipe(browserSync.stream());
}

function styles(){
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(less())
        // .pipe(autoprefixer({
        //     browsers: ['> 0.1%'],
        //     cascade: false
        // }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

function scripts(){
    return gulp.src(['src/scripts/jquery-3.4.1.min.js', 'src/scripts/owl.carousel.js', 'src/scripts/main.js'])
        .pipe(babel({
            presets: ['@babel/env']
        }))    
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream());
}

function images() {
    return gulp.src(paths.images.src, { sourcemaps: true })
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest(paths.images.dest))
        .pipe(browserSync.stream());
}
function fonts() {
    return gulp.src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dest))
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./docs"
        }
    });

    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.html.src, html);
    gulp.watch(paths.pug.src, pugg);
    gulp.watch(paths.fonts.src, fonts);
}

gulp.task('clean', clean);
gulp.task('html', html);
gulp.task('pug', pugg);
gulp.task('styles', styles);
gulp.task('script', scripts);
gulp.task('images', images);
gulp.task('fonts', fonts);
gulp.task('watch', watch);

gulp.task('build', gulp.series(clean,
                        gulp.parallel(html, fonts, styles, scripts, images)
                        ));
gulp.task('dev', gulp.series('build', 'watch'));