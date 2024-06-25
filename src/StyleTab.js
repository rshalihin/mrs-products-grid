import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl, __experimentalDivider as Divider, __experimentalBoxControl as BoxControl, ButtonGroup, Button } from '@wordpress/components';
import { PanelColorSettings } from '@wordpress/block-editor';
import MRSToggle from './components/mrsToggle/MRSToggle';

const StyleTab = ({attributes, setAttributes}) => {
    const { mrsProductImageBorderRadiusSet, mrsProductImageBorderRadius, productTitleShow, productTitleSize, productTitleColor, productPriceShow, productPriceSize, productPriceColor, showProductRatingStar, productRatingStarSize, productRatingStarColor, productRatingEmptyStarColor, showAddToCart, addToCartFontSize, addToCartTextColor, addToCartBGColor, addToCartWidth } = attributes;

    const pxCheck = (newObj) => {        
        for ( let side in newObj ) {
            if ( newObj[side] === undefined ) {
                newObj[side] = '0px';
            }
            let unitCheck = newObj[side].slice(newObj[side].length - 2 );
            if ( 'px' !== unitCheck ) {
                newObj[side] = newObj[side] + 'px';
            }
        }
    }
    const onChangeProductImage = ( newValue ) => {
        pxCheck(newValue);
        setAttributes({ mrsProductImageBorderRadius: newValue });
    }
    return(
        <>
        <PanelBody title={__('Image Settings', 'mrs-products-grid')} initialOpen={true} className={'mrs-product-grid-panel-body'}>
            <MRSToggle
                label={__('Set Image Border Radius')}
                attributes={mrsProductImageBorderRadiusSet}
                attributesKey={'mrsProductImageBorderRadiusSet'}
                setAttributes={setAttributes}
            />
            { mrsProductImageBorderRadiusSet && 
            <BoxControl
                label={__('Image border Radius', 'mrs-products-grid')}
                onChange={onChangeProductImage}
                values={mrsProductImageBorderRadius}
                units={[{ value: 'px', label: 'px'}]}
            />
            }
        </PanelBody>
        { productTitleShow && 
        <PanelBody title={__('Product Name Settings', 'mrs-products-grid' )} initialOpen={false} className={'mrs-product-grid-panel-body'}>
            <RangeControl
                label={__('Product Name Font Size', 'mrs-products-grid' )}
                value={productTitleSize}
                onChange={newValue => setAttributes({productTitleSize: newValue})}
                min={10}
                max={100}
            />
            <PanelColorSettings
                colorSettings={[
                    {
                        label: __( 'Product Name Color', 'mrs-product-grid' ),
                        value: productTitleColor,
                        onChange: newValue => setAttributes({productTitleColor: newValue})
                    }
                ]}
            />
        </PanelBody>
        }

        { productPriceShow && 
        <PanelBody title={__('Product Price', 'mrs-products-grid')} initialOpen={false} className={'mrs-product-grid-panel-body'}>
        <RangeControl
                label={__('Product Price Font Size', 'mrs-products-grid' )}
                value={productPriceSize}
                onChange={newValue => setAttributes({productPriceSize: newValue})}
                min={10}
                max={100}
            />
            <PanelColorSettings
                colorSettings={[
                    {
                        label: __( 'Product Price Color', 'mrs-product-grid' ),
                        value: productPriceColor,
                        onChange: newValue => setAttributes({productPriceColor: newValue})
                    }
                ]}
            />
        </PanelBody>
        }

        { showProductRatingStar && 
        <PanelBody title={__('Product Rating', 'mrs-products-grid')} initialOpen={false} className={'mrs-product-grid-panel-body'}>
             <RangeControl
                label={__('Product Rating Star Size', 'mrs-products-grid' )}
                value={productRatingStarSize}
                onChange={newValue => setAttributes({productRatingStarSize: newValue})}
                min={10}
                max={100}
            />
            <PanelColorSettings
                colorSettings={[
                    {
                        label: __( 'Fill Rating Star Color', 'mrs-product-grid' ),
                        value: productRatingStarColor,
                        onChange: newValue => setAttributes({productRatingStarColor: newValue})
                    },
                    {
                        label: __( 'Empty Rating Star Color', 'mrs-product-grid' ),
                        value: productRatingEmptyStarColor,
                        onChange: newValue => setAttributes({ productRatingEmptyStarColor: newValue })
                    }
                ]}
            />
        </PanelBody>
        }

        { showAddToCart && 
        <PanelBody title={__('Add To Cart', 'mrs-products-grid')} initialOpen={false} className={'mrs-product-grid-panel-body'}>
            <RangeControl
                label={__('Add To Cart Font Size', 'mrs-products-grid' )}
                value={addToCartFontSize}
                onChange={newValue => setAttributes({addToCartFontSize: newValue})}
                min={10}
                max={100}
            />
            <PanelColorSettings
                colorSettings={[
                    {
                        label: __('Text Color', 'mrs-products-grid'),
                        value: addToCartTextColor,
                        onChange: newValue => setAttributes({ addToCartTextColor : newValue})
                    },
                    {
                        label: __('Background Color', 'mrs-products-grid'),
                        value: addToCartBGColor,
                        onChange: newValue => setAttributes({ addToCartBGColor : newValue})
                    }
                ]}
            />
            <Divider />            
            <h4>{__('Add To Cart Button Width', 'mrs-products-grid')}</h4>
            <ButtonGroup className={'mrs-products-btn-group'}>
                <Button className={`mrs-products-btn ${addToCartWidth === '25%' ? 'is-active': ''}`} onClick={() => setAttributes({addToCartWidth: '25%'})}>25%</Button>
                <Button className={`mrs-products-btn ${addToCartWidth === '50%' ? 'is-active': ''}`} onClick={() => setAttributes({addToCartWidth: '50%'})}>50%</Button>
                <Button className={`mrs-products-btn ${addToCartWidth === '75%' ? 'is-active': ''}`} onClick={() => setAttributes({addToCartWidth: '75%'})}>75%</Button>
                <Button className={`mrs-products-btn ${addToCartWidth === '100%' ? 'is-active': ''}`} onClick={() => setAttributes({addToCartWidth: '100%'})}>100%</Button>
            </ButtonGroup>
        </PanelBody>
        }
        </>
    );
}

export default StyleTab;