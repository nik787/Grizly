const smartgrid = require('smart-grid');
 
/* It's principal settings in smart grid project */
const settings = {
    outputStyle: 'less', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '16px', /* gutter width px || % || rem */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1640px', /* max-width оn very large screen */
        fields: '140px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1088px',
            fields: '40px' 
        },
        slg: {
            width: '1004px'
        },
        sm: {
            width: '780px',
            fields: '15px'
        },
        xs: {
            width: '560px',
            fields: '15px'
        },
        xxs: {
            width: '320px'
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