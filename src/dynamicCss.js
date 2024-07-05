import cssString, { useDeviceType } from './controls/controls';
import { cssDataCheck } from './controls/controls';

const dynamicCss = (attributes, deviceType = 'Desktop') => {
    const { uniqueID, productTitleSize, productContentAlign, productsBGColor, productsContentPadding, productTitleColor, productPriceSize, productPriceColor, productRatingStarSize, productRatingStarColor, addToCartFontSize, addToCartBGColor, addToCartTextColor, mrsProductImageBorderRadius, addToCartWidth, saleBadgeAlign, productSpacing, saleBadgeBorderWidth, saleBadgeBorderStyle, saleBadgeBorderColor, saleBadgeBorderRadius, saleBadgeTextColor, saleBadgeBGColor, productsGridMargin, productsGridPadding, productsBorderWidth, productsBorderStyle, productsBorderColor, productsBorderRadius, productsBorderRadiusHover, productsBorderWidthHover, productsBorderColorHover, productsBorderStyleHover, productsBorderTransition, productsColumn } = attributes;

    const unit = (attributes, deviceType) => {
        if( 'object' !== typeof attributes.unit ) {
            return attributes.unit;
        } else {
            return attributes.unit[deviceType];
        }
    }
    const flexTextAlign = ( value ) => {
        if ( value == 'flex-start' ) {
            return 'left';
        } else if ( value === 'flex-end' ) {
            return 'right';
        } else {
            return 'center';
        }
    }

  
    let desktopCss = {
        [`.mrs-block-mrs-products-grid .mrs-product-${uniqueID}`] : {
            'display' : 'block',
            'box-sizing' : 'border-box'
        },
        [`.mrs-product-${uniqueID} .mrs-products-grid-wrapper`] : {
            'margin': cssDataCheck(productsGridMargin.device.Desktop, unit(productsGridMargin, 'Desktop')),
            'padding': cssDataCheck(productsGridPadding.device.Desktop, unit(productsGridPadding, 'Desktop')),
            'border-style': productsBorderStyle,
            'border-color' : productsBorderColor,
            'border-width' : cssDataCheck(productsBorderWidth.device.Desktop, unit(productsBorderWidth, 'Desktop')),
            'border-radius' : cssDataCheck(productsBorderRadius.device.Desktop, unit(productsBorderRadius, 'Desktop')),
            'transition' : `all ${productsBorderTransition}s ease-out`,
        },
        [`.mrs-product-${uniqueID} .mrs-products-grid-wrapper:hover`] : {
            'border-style': productsBorderStyleHover,
            'border-color' : productsBorderColorHover,
            'border-width' : cssDataCheck(productsBorderWidthHover.device.Desktop, unit(productsBorderWidth, 'Desktop')),
            'border-radius' : cssDataCheck(productsBorderRadiusHover.device.Desktop, unit(productsBorderRadius, 'Desktop')),
            
        },
        [`.mrs-product-${uniqueID} .mrs-products-grid-content`] : {
            'display' : 'flex',
            'flex-wrap': 'wrap'
        },
        [`.mrs-product-${uniqueID} .mrs-products-grid-content .mrs-product-col`] : {
            'box-sizing' : 'border-box',
        },
        // [`.mrs-product-${uniqueID} .mrs-product-col.has-1-col`] : {
        //     'width': '100%',
        // },
        // [`.mrs-product-${uniqueID} .mrs-product-col.has-2-col`] : {
        //     'width': `calc(100% / 2 - ${productSpacing * 2 }px)`,
        //     'margin': '5px ' + productSpacing + 'px',
        // },
        // [`.mrs-product-${uniqueID} .mrs-product-col.has-3-col`] : {
        //     'width': `calc(100% / 3 - ${productSpacing * 2 }px)`,
        //     'margin': '5px ' + productSpacing + 'px',
        // },
        // [`.mrs-product-${uniqueID} .mrs-product-col.has-4-col`] : {
        //     'width': `calc(100% / 4 - ${productSpacing * 2 }px)`,
        //     'margin': '5px ' + productSpacing + 'px',
        // },
        // [`.mrs-product-${uniqueID} .mrs-product-col.has-5-col`] : {
        //     'width': `calc(100% / 5 - ${productSpacing * 2 }px)`,
        //     'margin': '5px ' + productSpacing + 'px',
        // },
        // [`.mrs-product-${uniqueID} .mrs-product-col.has-6-col`] : {
        //     'width': `calc(100% / 6 - ${productSpacing * 2 }px)`,
        //     'margin': '5px ' + productSpacing + 'px',
        // },
        [`.mrs-product-${uniqueID} .mrs-product-col.${[deviceType]}-has-${productsColumn.device[deviceType]}-col`] : {
            'width': `calc(100% / ${productsColumn.device[deviceType]} - ${productSpacing * 2 }px)`,
            'margin': '5px ' + productSpacing + 'px',
        },
        [`.mrs-product-${uniqueID} .mrs-product .mrs-product-img-wrapper`] : {
            'position': 'relative',
            'overflow': 'hidden'
        },
        [`.mrs-product-${uniqueID} .mrs-product-img-wrapper .mrs-product-img img`] : {
            'width': '100%',
			'height': 'auto',
        },
        [`.mrs-product-${uniqueID} .mrs-product-img-wrapper .mrs-product-img-overlay.simple`] : {
            'position': 'absolute',
            'top': '5px',
            'right': `${saleBadgeAlign === 'Right' ? '0px' : 'auto'}`,
            'left': `${saleBadgeAlign === 'Left' ? '0px' : 'auto'}`,
            'color': saleBadgeTextColor,
            'background': saleBadgeBGColor,
            'padding': '5px 10px',
            'border-top': `${saleBadgeBorderWidth?.top} ${saleBadgeBorderStyle} ${saleBadgeBorderColor}`,
            'border-right': `${saleBadgeBorderWidth?.right} ${saleBadgeBorderStyle} ${saleBadgeBorderColor}`,
            'border-bottom': `${saleBadgeBorderWidth?.bottom} ${saleBadgeBorderStyle} ${saleBadgeBorderColor}`,
            'border-left': `${saleBadgeBorderWidth?.left} ${saleBadgeBorderStyle} ${saleBadgeBorderColor}`,
            'border-top-left-radius': saleBadgeBorderRadius.top,
            'border-top-right-radius': saleBadgeBorderRadius.right,
            'border-bottom-right-radius': saleBadgeBorderRadius.bottom,
            'border-bottom-left-radius': saleBadgeBorderRadius.left,
            'font-size': '14px',
        },
        [`.mrs-product-${uniqueID} .mrs-product-img-wrapper .mrs-product-img-overlay.rTopLeft`] : {
            'position': 'absolute',
            'inset': '0 auto auto 0',
            'transform-origin': '100% 0',
            'transform': 'translate(-29.3%) rotate(-45deg)',
            'box-shadow': `0 0 0 999px ${saleBadgeBGColor}`,
            'clip-path': 'inset(0 -100%)',
            'color': saleBadgeTextColor,
            'background': saleBadgeBGColor,
            'border-top': `${saleBadgeBorderWidth?.top} ${saleBadgeBorderStyle} ${saleBadgeBorderColor}`,
            'border-right': `${saleBadgeBorderWidth?.right} ${saleBadgeBorderStyle} ${saleBadgeBorderColor}`,
            'border-bottom': `${saleBadgeBorderWidth?.bottom} ${saleBadgeBorderStyle} ${saleBadgeBorderColor}`,
            'border-left': `${saleBadgeBorderWidth?.left} ${saleBadgeBorderStyle} ${saleBadgeBorderColor}`,
            'border-top-left-radius': saleBadgeBorderRadius.top,
            'border-top-right-radius': saleBadgeBorderRadius.right,
            'border-bottom-right-radius': saleBadgeBorderRadius.bottom,
            'border-bottom-left-radius': saleBadgeBorderRadius.left,
            'font-size': '14px',
        },
        [`.mrs-product-${uniqueID} .mrs-product-img-wrapper .mrs-product-img-overlay.rTopRight`] : {
            'position': 'absolute',
            'inset': '0 0 auto auto',
            'transform-origin': '0 100%',
            'transform': 'translate(-29.3%) rotate(45deg)',
            'box-shadow': '0 0 0 999px #d8613c',
            'clip-path': 'inset(0 -100%)',
            'color': saleBadgeTextColor,
            'background': saleBadgeBGColor,
            'border-top': `${saleBadgeBorderWidth?.top} ${saleBadgeBorderStyle} ${saleBadgeBorderColor}`,
            'border-right': `${saleBadgeBorderWidth?.right} ${saleBadgeBorderStyle} ${saleBadgeBorderColor}`,
            'border-bottom': `${saleBadgeBorderWidth?.bottom} ${saleBadgeBorderStyle} ${saleBadgeBorderColor}`,
            'border-left': `${saleBadgeBorderWidth?.left} ${saleBadgeBorderStyle} ${saleBadgeBorderColor}`,
            'border-top-left-radius': saleBadgeBorderRadius.top,
            'border-top-right-radius': saleBadgeBorderRadius.right,
            'border-bottom-right-radius': saleBadgeBorderRadius.bottom,
            'border-bottom-left-radius': saleBadgeBorderRadius.left,
            'font-size': '14px',
        },
        [`.mrs-product-${uniqueID} .mrs-product .mrs-product-content-wrapper`] : {
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': productContentAlign,
            'background': productsBGColor,
            'padding': `${productsContentPadding.top} ${productsContentPadding.right} ${productsContentPadding.bottom} ${productsContentPadding.left}`,
        },
        [`.mrs-product-${uniqueID} .mrs-product-content-wrapper .mrs-product-title h4`] : {
            'margin': '10px',
            'font-size': productTitleSize + 'px',
            'font-weight': '700',
            'color': productTitleColor,
            'text-align': flexTextAlign(productContentAlign),
        },
        [`.mrs-product-${uniqueID} .mrs-product-content-wrapper .mrs-product-price`] : {
            'font-size': productPriceSize + 'px',
            'color': productPriceColor
        },
        [`.mrs-product-${uniqueID} .mrs-products-grid-wrapper .mrs-products-grid-content`] : {
            'margin-left': '-' + productSpacing + 'px',
		    'margin-right': '-' + productSpacing +'px',
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

    let tabletCss = {
        [`.mrs-product-${uniqueID} .mrs-product-col.Tablet-has-${productsColumn.device.Tablet}-col`] : {
            'width': `calc(100% / ${productsColumn.device.Tablet} - ${productSpacing * 2 }px)`,
            'margin': '5px ' + productSpacing + 'px',
        },
    }
    let mobileCss = {
        [`.mrs-product-${uniqueID} .mrs-product-col.Mobile-has-${productsColumn.device.Mobile}-col`] : {
            'width': `calc(100% / ${productsColumn.device.Mobile} - ${productSpacing * 2 }px)`,
            'margin': '5px ' + productSpacing + 'px',
        },
    }

    desktopCss = cssString(desktopCss);
    tabletCss = '' !== cssString(tabletCss) ? `@media only screen and (max-width: 780px) {${cssString(tabletCss)}}` : '';
    mobileCss = '' !== cssString(mobileCss) ? `@media only screen and (max-width: 360px) {${cssString(mobileCss)}}` : '';

    const styling = `${desktopCss + tabletCss + mobileCss}`;
    return styling;
}

export default dynamicCss;