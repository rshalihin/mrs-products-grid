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