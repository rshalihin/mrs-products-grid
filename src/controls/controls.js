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



export default cssString;