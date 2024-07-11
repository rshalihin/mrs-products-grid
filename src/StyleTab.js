import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl, __experimentalDivider as Divider, __experimentalBoxControl as BoxControl, ButtonGroup, Button } from '@wordpress/components';
import { PanelColorSettings } from '@wordpress/block-editor';
import MRSToggle from './components/mrsToggle/MRSToggle';
import { SelectControl } from '@wordpress/components';
import Responsive from './components/responsive/Responsive';
import MRSTypography from './components/mrsTypography/MRSTypography';
import { useEffect, useState } from '@wordpress/element';
import Spacing from './components/spacing/Spacing';

const StyleTab = ({attributes, setAttributes}) => {
    const { mrsProductImageBorderRadiusSet, mrsProductImageBorderRadius, productTitleShow, titleTypography, titleFontSize, titleFontSpacing, titleLineHeight, productTitleColor, productPriceShow, productPriceColor, showProductRatingStar, productRatingStarSize, productRatingStarColor, showAddToCart, addToCartFontSize, addToCartTextColor, addToCartBGColor, callToActionPadding, productContentAlign, productsBGColor, productsContentPadding, productSpacing, saleBadgeBorderStyle, saleBadgeShow, saleBadgeTextColor, saleBadgeBGColor, saleBadgeBorderColor, saleBadgeBorderWidth, saleBadgeBorderRadius, mrsProductSaleBadgeStyle, saleBadgeAlign, productRowGap, priceTypography, priceFontSize, priceFontSpacing, priceLineHeight, callToActionBorderRadius, mrsCategoryColor, showCategory, categoryTypography, categoryFontSize, categoryLineHeight, categoryLetterSpacing } = attributes;

    const [cartColorBtn, setCartColorBtn] = useState('normal');

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

    useEffect(() => {
        if ( mrsProductSaleBadgeStyle !== 'simple' ){
            setAttributes({saleBadgeBorderStyle: 'none'});
        } else {
            setAttributes({saleBadgeBorderStyle: 'solid'});
        }
    },[mrsProductSaleBadgeStyle])

    return(
        <>        
        <PanelBody title={__('Products', 'mrs-products-grid')} initialOpen={true} className={'mrs-product-grid-panel-body'}>
        <h4>{__('Content Alignment', 'mrs-products-grid')}</h4>
            <ButtonGroup className={'mrs-products-btn-group'}>
                <Button className={`mrs-products-btn ${productContentAlign === 'flex-start' ? 'is-active': ''}`} onClick={() => setAttributes({productContentAlign: 'flex-start'})}>Left</Button>
                <Button className={`mrs-products-btn ${productContentAlign === 'center' ? 'is-active': ''}`} onClick={() => setAttributes({productContentAlign: 'center'})}>Center</Button>
                <Button className={`mrs-products-btn ${productContentAlign === 'flex-end' ? 'is-active': ''}`} onClick={() => setAttributes({productContentAlign: 'flex-end'})}>Right</Button>
            </ButtonGroup>
            <PanelColorSettings
                className='mrs-color-settings-panel'
                colorSettings={[
                    {
                        label: __('Content Background Color', 'mrs-products-grid'),
                        value: productsBGColor,
                        onChange: newValue => setAttributes({productsBGColor: newValue})
                    }
                ]}
            />
            <Spacing
                label={__('Padding', 'mrs-products-grid')}
                attributes={productsContentPadding}
                attributesKey={'productsContentPadding'}
                setAttributes={setAttributes}
                units={['px', '%', 'rem', 'em']}
                labelItem={{
                    'top': __('Top', 'mrs-products-grid'),
                    'right': __('Right', 'mrs-products-grid'),
                    'bottom': __('Bottom', 'mrs-products-grid'),
                    'left': __('Left', 'mrs-products-grid'),
                }}
                defaultValue={{
                    unit: 'px', value: {
                        'top': '0',
                        'right': '0',
                        'bottom': '0',
                        'left': '0'
                    }
                }}
            />
            <RangeControl
                label={__('Column Gap', 'mrs-products-grid')}
                value={productSpacing}
                onChange={(newValue)=>setAttributes({productSpacing: newValue})}
            />
            <div className='mrs-products-mb'>
            <RangeControl
                label={__('Row Gap', 'mrs-products-grid')}
                value={productRowGap}
                onChange={(newValue)=>setAttributes({productRowGap: newValue})}
            />
            </div>
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
        <PanelBody title={__('Product Title Settings', 'mrs-products-grid' )} initialOpen={false} className={'mrs-product-grid-panel-body'}>
            <PanelColorSettings
                className='mrs-color-settings-panel'
                colorSettings={[
                    {
                        label: __( 'Title Color', 'mrs-product-grid' ),
                        value: productTitleColor.color,
                        onChange: newValue => setAttributes({productTitleColor: {...productTitleColor, 'color': newValue}})
                    },
                    {
                        label: __( 'Title Hover Color', 'mrs-product-grid' ),
                        value: productTitleColor.hover,
                        onChange: newValue => setAttributes({productTitleColor: {...productTitleColor, 'hover': newValue}})
                    },
                ]}
            />
            <MRSTypography
                attributes={{
                    family: titleTypography,
                    familyKey: 'titleTypography',
                    fontSize: titleFontSize,
                    fontSizeKey: 'titleFontSize',
                    fontSpacing: titleFontSpacing,
                    fontSpacingKey: 'titleFontSpacing',
                    lineHeight: titleLineHeight,
                    lineHeightKey: 'titleLineHeight'
                }}
                setAttributes={setAttributes}
                fontSizeDefault={{unit: 'px', value: 16 }}
                spacingDefaultValue={{ unit: 'px', value: 0 }}
                lineHeightDefault={{ unit: 'px', value: 0 }}
            />
        </PanelBody>
        }

        { productPriceShow && 
        <PanelBody title={__('Product Price', 'mrs-products-grid')} initialOpen={false} className={'mrs-product-grid-panel-body'}>
            <PanelColorSettings
                className='mrs-color-settings-panel'
                colorSettings={[
                    {
                        label: __( 'Product Price Color', 'mrs-product-grid' ),
                        value: productPriceColor,
                        onChange: newValue => setAttributes({productPriceColor: newValue}),
                    }
                ]}
            />
            <MRSTypography
                attributes={{
                    family: priceTypography,
                    familyKey: 'priceTypography',
                    fontSize: priceFontSize,
                    fontSizeKey: 'priceFontSize',
                    fontSpacing: priceFontSpacing,
                    fontSpacingKey: 'priceFontSpacing',
                    lineHeight: priceLineHeight,
                    lineHeightKey: 'priceLineHeight'
                }}
                setAttributes={setAttributes}
                fontSizeDefault={{ unit: 'px', value: 16 }}
                spacingDefaultValue={{ unit: 'px', value: 0 }}
                lineHeightDefault={{ unit: 'px', value: 0 }}
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
                className='mrs-color-settings-panel'
                colorSettings={[
                    {
                        label: __( 'Fill Rating Star Color', 'mrs-product-grid' ),
                        value: productRatingStarColor,
                        onChange: newValue => setAttributes({productRatingStarColor: newValue})
                    }
                ]}
            />
        </PanelBody>
        }

        { showAddToCart && 
        <PanelBody title={__('Call to Action', 'mrs-products-grid')} initialOpen={false} className={'mrs-product-grid-panel-body'}>
            <RangeControl
                label={__('Call To Action Font Size', 'mrs-products-grid' )}
                value={addToCartFontSize}
                onChange={newValue => setAttributes({addToCartFontSize: newValue})}
                min={10}
                max={50}
            />
            <ButtonGroup className={'mrs-products-btn-group'}>
                <Button className={`mrs-products-btn ${cartColorBtn === 'normal'? 'is-active':''}`} onClick={()=> setCartColorBtn('normal')}>Normal</Button>
                <Button className={`mrs-products-btn ${cartColorBtn === 'hover'? 'is-active':''}`} onClick={()=> setCartColorBtn('hover')}>Hover</Button>
            </ButtonGroup>
          <div>
          { 'normal' === cartColorBtn &&  <PanelColorSettings
                className='mrs-color-settings-panel'
                colorSettings={[
                    {
                        label: __('Text Color', 'mrs-products-grid'),
                        value: addToCartTextColor.color,
                        onChange: newValue => setAttributes({ addToCartTextColor : {...addToCartTextColor, "color": newValue}})
                    },
                    {
                        label: __('Background Color', 'mrs-products-grid'),
                        value: addToCartBGColor.color,
                        onChange: newValue => setAttributes({ addToCartBGColor : {...addToCartBGColor, "color": newValue}})
                    }
                ]}
            />}
            { 'hover' === cartColorBtn && <PanelColorSettings
                className='mrs-color-settings-panel'
                colorSettings={[
                    {
                        label: __('Text Hover Color', 'mrs-products-grid'),
                        value: addToCartTextColor.hover,
                        onChange: newValue => setAttributes({ addToCartTextColor : {...addToCartTextColor, "hover": newValue} })
                    },
                    {
                        label: __('Background Hover Color', 'mrs-products-grid'),
                        value: addToCartBGColor.hover,
                        onChange: newValue => setAttributes({ addToCartBGColor : {...addToCartBGColor, "hover": newValue} })
                    }
                ]}
            />}
          </div>

            <Divider />
            <Spacing
                label={__('Padding', 'mrs-products-grid')}
                attributes={callToActionPadding}
                attributesKey={'callToActionPadding'}
                setAttributes={setAttributes}
                units={['px', 'em', 'rem', '%']}
                labelItem={{
                    'top': __('Top', 'mrs-products-grid'),
                    'right': __('Right', 'mrs-products-grid'),
                    'bottom': __('Bottom', 'mrs-products-grid'),
                    'left': __('Left', 'mrs-products-grid')
                }}
                defaultValue={{
                    unit: 'px',
                    value: { 'top': '5px', 'right': '20px', 'bottom': '5px', 'left': '20px' }
                }}
            />
            <Spacing
                label={__('Border Radius', 'mrs-products-grid')}
                attributes={callToActionBorderRadius}
                attributesKey={'callToActionBorderRadius'}
                setAttributes={setAttributes}
                units={['px', 'em', 'rem', '%']}
                labelItem={{
                    'top': __('T-Left', 'mrs-products-grid'),
                    'right': __('T-Right', 'mrs-products-grid'),
                    'bottom': __('B-Right', 'mrs-products-grid'),
                    'left': __('B-Left', 'mrs-products-grid')
                }}
                defaultValue={{ unit: 'px', value: { 'top': '5', 'right': '5', 'bottom': '5', 'left': '5' } }}
            />
        </PanelBody>
        }

        { saleBadgeShow && 
        <PanelBody title={__('Sale Badge Style', 'mrs-products-grid')} initialOpen={false} className={'mrs-product-grid-panel-body'}>
            <SelectControl
                label={__( 'Select a Sale Badge Style', 'mrs-products-grid' )}
                value={mrsProductSaleBadgeStyle}
                options={[
                    { label: 'Simple', value: 'simple' },
                    { label: 'Rotate Top Left', value: 'rTopLeft' },
                    { label: 'Rotate Top Right', value: 'rTopRight' },
                ]}
                onChange={(newValue)=> setAttributes({mrsProductSaleBadgeStyle: newValue})}
            />
            { mrsProductSaleBadgeStyle === 'simple' && (
                <>
                <label className='mrs-product-grid-btn-label'>Alignment</label>
                <ButtonGroup className={'mrs-products-btn-group'}>
                    <Button className={`mrs-products-btn ${saleBadgeAlign === 'Left' ? 'is-active' : ''}`} onClick={() => setAttributes({ saleBadgeAlign: 'Left'})}>Left</Button>
                    <Button className={`mrs-products-btn ${saleBadgeAlign === 'Right' ? 'is-active' : ''}`} onClick={() => setAttributes({ saleBadgeAlign: 'Right'})}>Right</Button>
                </ButtonGroup>
                <Divider />
                </>
            )}
            <PanelColorSettings
                className='mrs-color-settings-panel'
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
            { mrsProductSaleBadgeStyle === 'simple' && (
                <>
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
                { (saleBadgeBorderStyle !== 'none') &&
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
                    </>}
                </>
            )}
            
        </PanelBody>
        }
        { showCategory && 
        <PanelBody title={__('Category', 'mrs-products-grid')} initialOpen={false} className={'mrs-product-grid-panel-body'}>
            <PanelColorSettings
                className='mrs-color-settings-panel'
                colorSettings={[
                    {
                        label: __('Category Color', 'mrs-products-grid'),
                        value: mrsCategoryColor,
                        onChange: (newValue) => setAttributes({ mrsCategoryColor: newValue })
                    }
                ]}
            />
            <MRSTypography
               attributes={{
                    family: categoryTypography,
                    familyKey: 'categoryTypography',
                    fontSize: categoryFontSize,
                    fontSizeKey: 'categoryFontSize',
                    fontSpacing: categoryLetterSpacing,
                    fontSpacingKey: 'categoryLetterSpacing',
                    lineHeight: categoryLineHeight,
                    lineHeightKey: 'categoryLineHeight'
                    
               }}
               setAttributes={setAttributes}
               fontSizeDefault={{ unit: 'px', value: 12 }}
               lineHeightDefault={{ unit: 'px', value: 0 }}
               spacingDefaultValue={{ unit: 'px', value: 0 }}
            />
        </PanelBody>}
        </>
    );
}

export default StyleTab;