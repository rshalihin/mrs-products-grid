import cssString from './controls/controls';

const dynamicCss = (attributes) => {
    const { uniqueID, productTitleSize, productTitleColor, productPriceSize, productPriceColor, productRatingStarSize, productRatingStarColor, addToCartFontSize, addToCartBGColor, addToCartTextColor, mrsProductImageBorderRadius, addToCartWidth } = attributes;
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
            'box-sizing' : 'border-box',
        },
        [`.mrs-product-${uniqueID} .mrs-product-col.has-1-col`] : {
            'width': '100%',
        },
        [`.mrs-product-${uniqueID} .mrs-product-col.has-2-col`] : {
            'width': 'calc(100% / 2 - 20px)',
            'margin': '10px',
        },
        [`.mrs-product-${uniqueID} .mrs-product-col.has-3-col`] : {
            'width': 'calc(100% / 3 - 20px)',
            'margin': '10px',
        },
        [`.mrs-product-${uniqueID} .mrs-product-col.has-4-col`] : {
            'width': 'calc(100% / 4 - 20px)',
            'margin': '10px',
        },
        [`.mrs-product-${uniqueID} .mrs-product-col.has-5-col`] : {
            'width': 'calc(100% / 5 - 20px)',
            'margin': '10px',
        },
        [`.mrs-product-${uniqueID} .mrs-product-col.has-6-col`] : {
            'width': 'calc(100% / 6 - 20px)',
            'margin': '10px',
        },
        [`.mrs-product-${uniqueID} .mrs-product .mrs-product-img-wrapper`] : {
            'position': 'relative',
        },
        [`.mrs-product-${uniqueID} .mrs-product-img-wrapper .mrs-product-img img`] : {
            'width': '100%',
			'height': 'auto',
        },
        [`.mrs-product-${uniqueID} .mrs-product-img-wrapper .mrs-product-img-overlay`] : {
            'position': 'absolute',
            'top': '5px',
            'right': '10px',
            'background': '#fff',
            'padding': '5px 10px',
            'border': '1px solid',
            'border-radius': '5px',
            'font-size': '14px',
        },
        [`.mrs-product-${uniqueID} .mrs-product .mrs-product-content-wrapper`] : {
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
        },
        [`.mrs-product-${uniqueID} .mrs-product-content-wrapper .mrs-product-title h4`] : {
            'margin': '10px',
            'font-size': productTitleSize + 'px',
            'font-weight': '700',
            'color': productTitleColor
        },
        [`.mrs-product-${uniqueID} .mrs-product-content-wrapper .mrs-product-price`] : {
            'font-size': productPriceSize + 'px',
            'color': productPriceColor
        },
        [`.mrs-product-${uniqueID} .mrs-product-content-wrapper`] : {
            'margin-left': '-10px',
		    'margin-right': '-10px',
        },
        [`.mrs-product-${uniqueID} .mrs-product-ratting .dashicons.dashicons-star-filled, .dashicons.dashicons-star-empty`] : {
            'width': productRatingStarSize + 'px',
		    'font-size': productRatingStarSize + 'px',
            'color': productRatingStarColor,
            'font-weight' : '700'
        },
        [`.mrs-product-${uniqueID} .mrs-product-add-to-cart .mrs-product-buy-btn-cart .wp-element-button`] : {
            'font-size': addToCartFontSize + 'px',
            'color' : addToCartTextColor,
            'background' : addToCartBGColor
        },
        [`.mrs-product-${uniqueID} .mrs-product-img-wrapper .mrs-product-img`] : {
            'border-radius' : `${mrsProductImageBorderRadius.top ? mrsProductImageBorderRadius.top : 0} ${mrsProductImageBorderRadius.right ? mrsProductImageBorderRadius.right : 0} ${mrsProductImageBorderRadius.bottom ? mrsProductImageBorderRadius.bottom : 0} ${mrsProductImageBorderRadius.left ? mrsProductImageBorderRadius.left : 0}`,
        },
        [`.mrs-product-${uniqueID} .mrs-product-img-wrapper .mrs-product-img img`] : {
            'border-radius' : 'inherit',
            'width' : '100%',
            'border-radius' : `${mrsProductImageBorderRadius.top ? mrsProductImageBorderRadius.top : 0} ${mrsProductImageBorderRadius.right ? mrsProductImageBorderRadius.right : 0} ${mrsProductImageBorderRadius.bottom ? mrsProductImageBorderRadius.bottom : 0} ${mrsProductImageBorderRadius.left ? mrsProductImageBorderRadius.left : 0}`,
        },
        [`.mrs-product-${uniqueID} .mrs-product-content-wrapper .mrs-product-add-to-cart`] : {
            'width': '100%',
            'display': 'flex',
            'align-items': 'center',
            'justify-content': 'center',
        },
        [`.mrs-product-${uniqueID} .mrs-product-add-to-cart .mrs-product-buy-btn-cart`] : {
            'width': '100%',
            'display': 'flex',
            'justify-content': 'center',
        },
        [`.mrs-product-${uniqueID} .mrs-product-buy-btn-cart .mrs-product-add-to-cart-button`] : {
            'width': addToCartWidth,
        },
        [`.mrs-product-${uniqueID} .mrs-product-content-wrapper .mrs-product-price ins`] : {
            'text-decoration': 'none',
        },
        


    };

    desktopCss = cssString(desktopCss);
    const styling = `${desktopCss}`;
    return styling;
}

export default dynamicCss;