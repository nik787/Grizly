const smartgrid = require('smart-grid');
 
/* It's principal settings in smart grid project */
const settings = {
    outputStyle: 'less', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '1.875em', /* gutter width px || % || rem */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '100em', /* max-width оn very large screen */
        fields: '1.875em' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '68.75em', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '60em'
        },
        sm: {
            width: '48.75em',
            fields: '1em' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '35em'
        }
        /* 
        We can create any quantity of break points.

        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};
 
smartgrid('./src/styles', settings);