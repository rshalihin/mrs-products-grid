import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl, SelectControl, __experimentalBoxControl as BoxControl } from '@wordpress/components';
import { PanelColorSettings } from '@wordpress/block-editor';

const StyleTab = ({attributes, setAttributes}) => {
    const { mrsProductImageBorder, productTitleSize, productTitleColor } = attributes;

    const onChangeProductImage = ( newValue ) => {
        setAttributes({ mrsProductImageBorder: newValue })
    }
    return(
        <>
        <PanelBody title={__('Image Settings', 'mrs-products-grid')} initialOpen={true} className={'mrs-product-grid-panel-body'}>
            <BoxControl
                label={__('Image border', 'mrs-products-grid')}
                onChange={onChangeProductImage}
                values={mrsProductImageBorder}
                units={[{ value: 'px', label: 'px'}]}
            />
        </PanelBody>
        <PanelBody title={__('Product Name Settings', 'mrs-products-grid' )} className={'mrs-product-grid-panel-body'}>
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
        </>
    );
}

export default StyleTab;