import cssString, { useDeviceType, cssDataCheck } from './controls/controls';
// import {  } from './controls/controls';

const dynamicCss = (attributes, deviceType = 'Desktop') => {
    const { uniqueID, titleFontSize, productContentAlign, productsBGColor, productsContentPadding, productTitleColor, priceTypography, priceFontSize, priceFontSpacing, priceLineHeight, productPriceColor, productRatingStarSize, productRatingStarColor, addToCartBGColor, addToCartTextColor, productImageBorderRadius, callToActionMargin, callToActionPadding, saleBadgeAlign, productSpacing, productRowGap, saleBadgeBorderWidth, saleBadgeBorderStyle, saleBadgeBorderColor, saleBadgeBorderRadius, saleBadgeTextColor, saleBadgeBGColor, productsGridMargin, productsGridPadding, productsBorderWidth, productsBorderStyle, productsBorderColor, productsBorderRadius, productsBorderRadiusHover, productsBorderWidthHover, productsBorderColorHover, productsBorderStyleHover, productsBorderTransition, productsColumn, titleTypography, titleFontSpacing, titleLineHeight, callToActionBorderWeight , callToActionBorderStyle, callToActionBorderColor, callToActionBorderRadius, categoryTypography, mrsCategoryColor, categoryLetterSpacing, categoryLineHeight, categoryFontSize, callToActionTypography, callToActionFontSize, ctaLineHeight, ctaLetterSpacing } = attributes;

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
        [`.mrs-product-${uniqueID} .mrs-products-grid-wrapper .mrs-products-slider`] : {
            'padding': '40px 0',
        },
        [`.mrs-product-${uniqueID} .mrs-products-grid-wrapper .mrs-products-slider .swiper-nav-btns`] : {
            'position': 'absolute',
            'background-image': 'none',
            'z-index': '9',
            'top': '0',
            'text-align': 'center',
            'font-size': '18px',
            'line-height': '28px',
            '-webkit-transition': 'all .3s',
            '-moz-transition': 'all .3s',
            '-ms-transition': 'all .3s',
            '-o-transition': 'all .3s',
            'transition': 'all .3s',
        },
        [`.mrs-product-${uniqueID} .mrs-products-grid-wrapper .mrs-products-slider .swiper-nav-btns button`] : {
            'border': '1px solid',
            'outline': 'none',
            'cursor': 'pointer',
            'padding': '4px',
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
        [`.mrs-product-${uniqueID} .mrs-product-col.${[deviceType]}-has-${productsColumn.device[deviceType]}-col .mrs-product-single-wrapper`] : {
            'width': `calc(100% / ${productsColumn.device[deviceType]} - ${productSpacing * 2 }px)`,
            'margin': '0 ' + productSpacing + 'px ' + productRowGap + 'px',
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
            'border-width': cssDataCheck( saleBadgeBorderWidth.device.Desktop, unit(saleBadgeBorderWidth, 'Desktop') ),
            'border-radius': cssDataCheck( saleBadgeBorderRadius.device.Desktop, unit(saleBadgeBorderRadius, 'Desktop') ),
            'border-style': saleBadgeBorderStyle,
            'border-color': saleBadgeBorderColor,
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
            'font-size': '14px',
        },
        [`.mrs-product-${uniqueID} .mrs-product-img-wrapper .mrs-product-img-overlay.rTopRight`] : {
            'position': 'absolute',
            'inset': '0 0 auto auto',
            'transform-origin': '0 100%',
            'transform': 'translate(-29.3%) rotate(45deg)',
            'box-shadow': `0 0 0 999px ${saleBadgeBGColor}`,
            'clip-path': 'inset(0 -100%)',
            'color': saleBadgeTextColor,
            'background': saleBadgeBGColor,
            'font-size': '14px',
        },
        [`.mrs-product-${uniqueID} .mrs-product .mrs-product-content-wrapper`] : {
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': productContentAlign,
            'background': productsBGColor,
            'padding': cssDataCheck(productsContentPadding.device.Desktop, unit(productsContentPadding, 'Desktop')),
        },
        [`.mrs-product-${uniqueID} .mrs-product-content-wrapper .mrs-product-title h4`] : {
            'font-size': cssDataCheck( titleFontSize.device.Desktop, unit( titleFontSize , 'Desktop') ),
            'font-weight': titleTypography?.typography?.fontWeight,
            'color': productTitleColor.color,
            'text-align': flexTextAlign(productContentAlign),
            'text-decoration': titleTypography?.typography?.decoration,
            'text-transform': titleTypography?.typography?.transform,
            'letter-spacing': cssDataCheck( titleFontSpacing.device.Desktop, unit( titleFontSpacing, 'Desktop' ) ),
            'line-height': cssDataCheck( titleLineHeight.device.Desktop, unit( titleLineHeight, 'Desktop' ) ),
            'font-style': titleTypography?.typography?.style,
            'font-family': titleTypography?.typography?.family,
            'margin': '0',
            'padding': '0',
        },
        [`.mrs-product-${uniqueID} .mrs-product-content-wrapper .mrs-product-category`] : {
            'font-size': cssDataCheck( categoryFontSize.device.Desktop, unit( titleFontSize , 'Desktop') ),
            'font-weight': categoryTypography?.typography?.fontWeight,
            'color': mrsCategoryColor,
            'text-align': flexTextAlign(productContentAlign),
            'text-decoration': categoryTypography?.typography?.decoration,
            'text-transform': categoryTypography?.typography?.transform,
            'letter-spacing': cssDataCheck( categoryLetterSpacing.device.Desktop, unit( categoryLetterSpacing, 'Desktop' ) ),
            'line-height': cssDataCheck( categoryLineHeight.device.Desktop, unit( categoryLineHeight, 'Desktop' ) ),
            'font-style': categoryTypography?.typography?.style,
            'font-family': categoryTypography?.typography?.family,
            'margin': '0',
            'padding': '0'
        },
        [`.mrs-product-${uniqueID} .mrs-product-content-wrapper .mrs-product-title h4:hover`] : {
            'color': productTitleColor.hover,
        },
        [`.mrs-product-${uniqueID} .mrs-product-content-wrapper .mrs-product-price`] : {
            'color': productPriceColor,
            'font-size': cssDataCheck( priceFontSize.device.Desktop, unit( priceFontSize, 'Desktop' ) ),
            'font-weight': priceTypography?.typography?.fontWeight,
            'text-decoration': priceTypography?.typography?.decoration,
            'text-transform': priceTypography?.typography?.transform,
            'letter-spacing': cssDataCheck( priceFontSpacing.device.Desktop, unit( priceFontSpacing, 'Desktop' ) ),
            'line-height': cssDataCheck( priceLineHeight.device.Desktop, unit( priceLineHeight, 'Desktop') ),
            'font-style': priceTypography?.typography.style,
            'font-family': titleTypography.typography.family,
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
            'font-family': callToActionTypography.typography.family,
            'font-size': cssDataCheck(callToActionFontSize.device.Desktop, unit(callToActionFontSize, 'Desktop')),
            'font-weight': callToActionTypography.typography.fontWeight,
            'font-style': callToActionTypography.typography.style,
            'text-transform': callToActionTypography.typography.transform,
            'text-decoration': callToActionTypography.typography.decoration,
            'letter-spacing': cssDataCheck(ctaLetterSpacing.device.Desktop, unit(ctaLetterSpacing, 'Desktop')),
            'line-height': cssDataCheck(ctaLineHeight.device.Desktop, unit(ctaLineHeight, 'Desktop')),
            'color' : addToCartTextColor.color,
            'background' : addToCartBGColor.color,
            'padding': cssDataCheck( callToActionPadding.device.Desktop, unit(callToActionPadding, 'Desktop') ),
            'border-width': cssDataCheck(callToActionBorderWeight.device.Desktop, unit(callToActionBorderWeight, 'Desktop')),
            'border-style': callToActionBorderStyle,
            'border-color': callToActionBorderColor.color,
            'border-radius': cssDataCheck( callToActionBorderRadius.device.Desktop, unit(callToActionBorderRadius, 'Desktop')),
            'text-align': 'center',
            'transition': '0.3s'
        },
        [`.mrs-product-${uniqueID} .mrs-product-content-wrapper .mrs-product-add-to-cart .mrs-product-buy-btn-cart`] : {
            'margin': cssDataCheck(callToActionMargin.device.Desktop, unit(callToActionMargin, 'Desktop')),
        },
        [`.mrs-product-${uniqueID} .mrs-product-add-to-cart .mrs-product-buy-btn-cart .wp-element-button:hover`] : {
            'color' : addToCartTextColor.hover,
            'background' : addToCartBGColor.hover,
            'border-color': callToActionBorderColor.hover,
        },
        [`.mrs-product-${uniqueID} .mrs-product-img-wrapper .mrs-product-img`] : {
            'border-radius' : cssDataCheck( productImageBorderRadius.device.Desktop, unit(productImageBorderRadius, 'Desktop')),
        },
        [`.mrs-product-${uniqueID} .mrs-product-img-wrapper .mrs-product-img img`] : {
            'border-radius' : 'inherit',
            'width' : '100%',
            'border-radius' : cssDataCheck( productImageBorderRadius.device.Desktop, unit(productImageBorderRadius, 'Desktop')),
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
            'justify-content': productContentAlign,
        },
        [`.mrs-product-${uniqueID} .mrs-product-content-wrapper .mrs-product-price ins`] : {
            'text-decoration': 'none',
        },
        [`.mrs-product-${uniqueID} .mrs-product.style-2`] : {
            'overflow': 'hidden',
        },
        [`.mrs-product-${uniqueID} .mrs-product.style-2 .mrs-product-content-wrapper`] : {
            'position': 'relative',
        },
        [`.mrs-product-${uniqueID} .mrs-product.style-2 .mrs-product-content-wrapper .mrs-product-add-to-cart`] : {
            'height': '10px',
        },
        [`.mrs-product-${uniqueID} .mrs-product.style-2 .mrs-product-content-wrapper .mrs-product-add-to-cart .wp-element-button`] : {
            'position': 'absolute',
            'top': '-52px',
            'width': '100%',
            'border-radius': '0',
            'background': addToCartBGColor.color + '9f',
            'color': addToCartTextColor.color,
            'opacity': '0',
            'visibility': 'hidden',
            'transition': '0.3s'
        },
        [`.mrs-product-${uniqueID} .mrs-product.style-2 .mrs-product-content-wrapper .mrs-product-add-to-cart .wp-element-button:hover`] : {
            'background': addToCartBGColor.hover + '9f',
            'color': addToCartTextColor.hover,
        },
        [`.mrs-product-${uniqueID} .mrs-product.style-2:hover .mrs-product-content-wrapper .mrs-product-add-to-cart .wp-element-button`] : {
            'opacity': '1',
            'visibility' : 'visible',
        },
        [`.mrs-product-${uniqueID} .mrs-product.style-3`] : {
            'position': 'relative',
        },
        [`.mrs-product-${uniqueID} .mrs-product.style-3 .mrs-product-content-wrapper`] : {
            'position': 'absolute',
            'top': '0',
            'width': '100%',
            'height': '100%',
            'background': '#0000006f',
            'opacity': '0',
            'visibility' : 'hidden',
            'transition': '0.5s',
        },
        [`.mrs-product-${uniqueID} .mrs-product.style-3:hover .mrs-product-content-wrapper`] : {
            'opacity': '1',
            'visibility' : 'visible',
        },
    };

    let tabletCss = {
        [`.mrs-product-${uniqueID} .mrs-product-col.Tablet-has-${productsColumn.device.Tablet}-col`] : {
            'width': `calc(100% / ${productsColumn.device.Tablet} - ${productSpacing * 2 }px)`,
            'margin': '0 ' + productSpacing + 'px ' + productRowGap + 'px',
        },
    }
    let mobileCss = {
        [`.mrs-product-${uniqueID} .mrs-product-col.Mobile-has-${productsColumn.device.Mobile}-col`] : {
            'width': `calc(100% / ${productsColumn.device.Mobile} - ${productSpacing * 2 }px)`,
            'margin': '0 ' + productSpacing + 'px ' + productRowGap + 'px',
        },
    }

    desktopCss = cssString(desktopCss);
    tabletCss = '' !== cssString(tabletCss) ? `@media only screen and (max-width: 780px) {${cssString(tabletCss)}}` : '';
    mobileCss = '' !== cssString(mobileCss) ? `@media only screen and (max-width: 360px) {${cssString(mobileCss)}}` : '';

    const styling = `${desktopCss + tabletCss + mobileCss}`;
    return styling;
}

export default dynamicCss;