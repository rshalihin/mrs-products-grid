import { __ } from '@wordpress/i18n';
import { PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, __experimentalDivider as Divider, ButtonGroup, Button, SelectControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import Spacing from './components/spacing/Spacing';

const AdvanceTab = ({attributes, setAttributes}) => {
    const { productsGridMargin, productsGridPadding, productsBorderStyle, productsBorderColor, productsBorderWidth, productsBorderRadius } = attributes;
    const [borderHover, setBorderHover] = useState('Normal');
    // console.log(productsGridMargin);
    // console.log(productsGridPadding);

    return(
        <>
        <PanelBody title={__('Spacing Settings', 'mrs-products-grid')} initialOpen={true} className='mrs-product-grid-panel-body'>
            <Spacing
                label={__('Margin', 'mrs-products-grid')}
                attributes={productsGridMargin}
                attributesKey={'productsGridMargin'}
                setAttributes={setAttributes}
                units={['px', '%', 'em']}
                labelItem={{
                    'top': __('Top', 'mrs-products-grid'),
                    'right': __('Right', 'mrs-products-grid'),
                    'bottom': __('Bottom', 'mrs-products-grid'),
                    'left': __('Left', 'mrs-products-grid'),
                }}
            />
            <Divider />
            <Spacing
                label={__('Padding', 'mrs-products-grid')}
                attributes={productsGridPadding}
                attributesKey={'productsGridPadding'}
                setAttributes={setAttributes}
                units={['px', '%', 'em']}
                labelItem={{
                    'top': __('Top', 'mrs-products-grid'),
                    'right': __('Right', 'mrs-products-grid'),
                    'bottom': __('Bottom', 'mrs-products-grid'),
                    'left': __('Left', 'mrs-products-grid'),
                }}
            />
        </PanelBody>
        <PanelBody title={__('Border and Shadow', 'mrs-products-grid')} initialOpen={false} className='mrs-product-grid-panel-body'>
            <ButtonGroup className={'mrs-products-btn-group'}>
                <Button className={`mrs-products-btn ${borderHover === 'Normal' ? 'is-active' : ''}`} onClick={() => setBorderHover('Normal')}>Normal</Button>
                <Button className={`mrs-products-btn ${borderHover === 'Hover' ? 'is-active' : ''}`} onClick={() => setBorderHover('Hover')}>Hover</Button>
            </ButtonGroup>
            <Divider />
            {borderHover === 'Normal' && (<>
            <SelectControl
                label={__('Border Style', 'mrs-products-grid')}
                value={productsBorderStyle}
                options={[
                    { label: "None", value: "none" },
                    { label: "Solid", value: "solid" },
                    { label: "Dashed", value: "Dashed" },
                    { label: "Dotted", value: "dotted" },
                    { label: "Double", value: "double" },
                    { label: "Groove", value: "groove" },
                    { label: "Inset", value: "inset" },
                    { label: "Outset", value: "outset" },
                    { label: "Ridge", value: "ridge" }
                ]}
                onChange={(value)=> setAttributes({productsBorderStyle: value})}
            />
            <Divider />
            <PanelColorSettings
                colorSettings={[
                    {
                        label: __('Border Color', 'mrs-products-grid'),
                        value: productsBorderColor,
                        onChange: (value) => setAttributes({productsBorderColor: value})
                    }
                ]}
            />
            <Divider />
            <Spacing
                label={__('Border Width', 'mrs-products-grid')}
                attributes={productsBorderWidth}
                attributesKey={'productsBorderWidth'}
                setAttributes={setAttributes}
                units={['px', '%', 'em', 'rem']}
                labelItem={{
                    'top': __('Top', 'mrs-products-grid'),
                    'left': __('Left', 'mrs-products-grid'),
                    'bottom': __('Bottom', 'mrs-products-grid'),
                    'right': __('Right', 'mrs-products-grid')
                }}
            />
            </>)}
            {borderHover === 'Hover' && 'Hover Section'}
            <Divider />
            <Spacing
                label={__('Border Radius', 'mrs-products-grid')}
                attributes={productsBorderRadius}
                attributesKey={'productsBorderRadius'}
                setAttributes={setAttributes}
                units={['px', '%', 'em', 'rem']}
                labelItem={{
                    'top': __('Top', 'mrs-products-grid'),
                    'left': __('Left', 'mrs-products-grid'),
                    'bottom': __('Bottom', 'mrs-products-grid'),
                    'right': __('Right', 'mrs-products-grid')
                }}
            />
        </PanelBody>
        </>
    );
}

export default AdvanceTab;