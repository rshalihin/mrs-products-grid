import { useSelect, select } from '@wordpress/data';

// Device type fn
export const useDeviceType = () => {
    const canvas = document.getElementsByClassName( 'edit-site-visual-editor__editor-canvas' );
    const { deviceType } = useSelect(
        select => {
            if ( canvas.length > 0 ) {
                return {
                    deviceType: select( 'core/editor' ).getDeviceType() || 'Desktop',
                }
            } else {
                return {
                    deviceType: select( 'core/edit-post' )?.__experimentalGetPreviewDeviceType() || 'Desktop',
                }
            }
        }, [])
    return deviceType || '';
}


const cssString = (css) => {
    let results = '';
    for ( let selector in css ) {
        let cssProps = '';
        for ( let property in css[selector] ) {
            if ( css[selector][property] && css[selector][property].length > 0 ) {
                cssProps += property + ':' + css[selector][property] + ';'
            }
        }
        results += '' !== cssProps ? selector + '{' + cssProps + '}' : '';
    }
    return results;
}

export const cssDataCheck = ( value, unit = '' ) => {
    let data = '';
    if ( 'object' === typeof value ) {
        for(let single in value ) {
            if( value[single].length > 0 ) {
                data += ` ${value[single]}${unit}`;
            }
        }
    } else {
        if ( value && value.toString().length > 0 ) {
            data += ` ${value}${unit}`;
        }
    }
    // console.log(data);
    return data;
}



export default cssString;