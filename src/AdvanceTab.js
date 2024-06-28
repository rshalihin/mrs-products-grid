import { __ } from '@wordpress/i18n';
import { PanelBody, __experimentalDivider as Divider } from '@wordpress/components';
import Spacing from './components/spacing/Spacing';

const AdvanceTab = ({attributes, setAttributes}) => {
    const { productsGridMargin, productsGridPadding } = attributes;
    console.log(productsGridMargin);
    console.log(productsGridPadding);
    return(
        <>
        <PanelBody title={__('Spacing Settings', 'mrs-products-grid')} initialOpen={true}>
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
        </>
    );
}

export default AdvanceTab;