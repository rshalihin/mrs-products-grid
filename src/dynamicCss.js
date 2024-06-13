import cssString from './controls/controls';

const dynamicCss = (attributes) => {
    const { uniqueID, productsColumn } = attributes;
    let desktopCss = {
        [`.mrs-block-mrs-products-grid .mrs-product-${uniqueID}`] : {
            'display' : 'block',
            'box-sizing' : 'border-box'
        },
        [`.mrs-product-${uniqueID} .mrs-products-grid-content`] : {
            'display' : 'flex',
            'flex-wrap': 'wrap'
        },
        [`.mrs-product-${uniqueID} .mrs-products-grid-content .mrs-product-col`] : {
            // 'width': `calc(100% / ${productsColumn})`,
            'box-sizing' : 'border-box',
        }

    };

    desktopCss = cssString(desktopCss);
    const styling = `${desktopCss}`;
    return styling;
}

export default dynamicCss;