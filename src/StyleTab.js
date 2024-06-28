import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl, __experimentalDivider as Divider, __experimentalBoxControl as BoxControl, ButtonGroup, Button } from '@wordpress/components';
import { PanelColorSettings } from '@wordpress/block-editor';
import MRSToggle from './components/mrsToggle/MRSToggle';
import { SelectControl } from '@wordpress/components';
import Responsive from './components/responsive/Responsive';

const StyleTab = ({attributes, setAttributes}) => {
    const { mrsProductImageBorderRadiusSet, mrsProductImageBorderRadius, productTitleShow, productTitleSize, productTitleColor, productPriceShow, productPriceSize, productPriceColor, showProductRatingStar, productRatingStarSize, productRatingStarColor, productRatingEmptyStarColor, showAddToCart, addToCartFontSize, addToCartTextColor, addToCartBGColor, addToCartWidth, productContentAlign, productsBGColor, productsContentPadding, productSpacing, saleBadgeBorderStyle, saleBadgeShow, saleBadgeTextColor, saleBadgeBGColor, saleBadgeBorderColor, saleBadgeBorderWidth, saleBadgeBorderRadius } = attributes;

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
        return newObj;
    }
    const onChangeProductImage = ( newValue ) => {
        let checkValue = pxCheck(newValue);
        setAttributes({ mrsProductImageBorderRadius: checkValue });
    }
    const productsContentPaddingHandle = ( newValues ) => {
        let checkValue = pxCheck(newValues);
        setAttributes({ productsContentPadding: checkValue})
    }
    const saleBadgeBorderWidthOnChangeHandle = ( newValues ) => {
        let checkValues = pxCheck(newValues);
        setAttributes({saleBadgeBorderWidth: checkValues});
    }
    const saleBadgeBorderRadiusOnChangeHandle = ( newValues ) => {
        let checkValues = pxCheck(newValues);
        setAttributes({saleBadgeBorderRadius: checkValues})
    }
    return(
        <>        
        <PanelBody title={__('Products', 'mrs-products-grid')} initialOpen={true} className={'mrs-product-grid-panel-body'}>
        <h4>{__('Content Alignment', 'mrs-products-grid')}</h4>
            <ButtonGroup className={'mrs-products-btn-group'}>
                <Button className={`mrs-products-btn ${productContentAlign === 'Left' ? 'is-active': ''}`} onClick={() => setAttributes({productContentAlign: 'Left'})}>Left</Button>
                <Button className={`mrs-products-btn ${productContentAlign === 'Center' ? 'is-active': ''}`} onClick={() => setAttributes({productContentAlign: 'Center'})}>Center</Button>
                <Button className={`mrs-products-btn ${productContentAlign === 'Right' ? 'is-active': ''}`} onClick={() => setAttributes({productContentAlign: 'Right'})}>Right</Button>
            </ButtonGroup>
            <Divider />
            <PanelColorSettings
                colorSettings={[
                    {
                        label: __('Content Background Color', 'mrs-products-grid'),
                        value: productsBGColor,
                        onChange: newValue => setAttributes({productsBGColor: newValue})
                    }
                ]}
            />
            <Divider />
            <BoxControl
                label={__('Padding', 'mrs-products-grid')}
                values={productsContentPadding}
                onChange={productsContentPaddingHandle}
            />
            <RangeControl
                label={__('Spacing', 'mrs-products-grid')}
                value={productSpacing}
                onChange={(newValue)=>setAttributes({productSpacing: newValue})}
            />
        </PanelBody>
        <PanelBody title={__('Image Settings', 'mrs-products-grid')} initialOpen={false} className={'mrs-product-grid-panel-body'}>
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

        { saleBadgeShow && 
        <PanelBody title={__('Sale Badge Style', 'mrs-products-grid')} initialOpen={false} className={'mrs-product-grid-panel-body'}>
            <PanelColorSettings
                colorSettings={[
                    {
                        label: __('Sale Text Color', 'mrs-products-grid'),
                        value: saleBadgeTextColor,
                        onChange: newValue => setAttributes({ saleBadgeTextColor : newValue})
                    },
                    {
                        label: __('Sale Text Background Color', 'mrs-products-grid'),
                        value: saleBadgeBGColor,
                        onChange: newValue => setAttributes({ saleBadgeBGColor : newValue})
                    }
                ]}
            />
            <Divider />            
            <SelectControl
                label={__('Border', 'mrs-products-grid')}
                value={saleBadgeBorderStyle}
                options={[
                    { label: 'None', value: 'none' },
                    { label: 'Solid', value: 'solid' },
                    { label: 'Dashed', value: 'dashed' },
                    { label: 'Dotted', value: 'dotted' },
                    { label: 'Double', value: 'Double' },
                    { label: 'Groove', value: 'Groove' },
                    { label: 'Inset', value: 'inset' },
                    { label: 'Outset', value: 'outset' },
                    { label: 'Ridge', value: 'ridge' }
                ]}
                onChange={(newValue)=>setAttributes({saleBadgeBorderStyle: newValue})}
            />
            { (saleBadgeBorderStyle !== 'none') ?
            <>
            <Divider />
            <PanelColorSettings
                colorSettings={[
                    {
                        label: __('Border Color', 'mrs-products-grid'),
                        value: saleBadgeBorderColor,
                        onChange: newValue => setAttributes({saleBadgeBorderColor: newValue})
                    }
                ]}
            />
            <Divider />
            <BoxControl
                label={__('Border Width', 'mrs-products-grid')}
                values={saleBadgeBorderWidth}
                onChange={saleBadgeBorderWidthOnChangeHandle}
                units={[{ label: 'px', value: 'px'}]}
            />
            <Divider />
            <BoxControl
                label={__('Border Radius', 'mrs-products-grid')}
                values={saleBadgeBorderRadius}
                onChange={saleBadgeBorderRadiusOnChangeHandle}                
                units={[{ label: 'px', value: 'px'}]}
            />
            </> : ''}
        </PanelBody>
        }
        </>
    );
}

export default StyleTab;