import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl, SelectControl, __experimentalDivider as Divider } from '@wordpress/components';

const GeneralTab = ({attributes, setAttributes}) => {
    const { postsPerPage, orderBy, order, productsColumn } = attributes;
    return(
        <>
        <PanelBody title={__('Layout Settings', 'mrs-products-grid')} initialOpen={true} className={'mrs-product-grid-panel-body'}>
            <RangeControl
                label={__('Column(s)', 'mrs-products-grid')}
                value={productsColumn}
                min={1}
                max={6}
                onChange={(newValue) => setAttributes({productsColumn: newValue})}
            />
            <RangeControl
                label={__('Limit', 'mrs-products-grid')}
                help={__('Set number of total products to show.', 'mrs-products-grid')}
                value={postsPerPage}
                onChange={(newValue) => setAttributes({postsPerPage: newValue})}
            />
            </PanelBody>
            <PanelBody title={__('Layout Settings', 'mrs-products-grid')} initialOpen={true} className={'mrs-product-grid-panel-body'}>
            <SelectControl
                label={__('Order By', 'mrs-products-grid')}
                help={__('Set a order by option.', 'mrs-products-grid')}
                options={[
                    { label: __('ID', 'mrs-products-grid'), value: 'id'},
                    { label: __('Date', 'mrs-products-grid'), value: 'date'},
                    { label: __('Title', 'mrs-products-grid'), value: 'title'},
                    { label: __('Modified', 'mrs-products-grid'), value: 'modified'}
                ]}
                value={orderBy}
                onChange={(newValue)=> setAttributes({orderBy: newValue})}
            />
            <SelectControl
                label={__('Order', 'mrs-products-grid')}
                help={__('Set product order.', 'mrs-products-grid')}
                options={[
                    { label: __('Ascending', 'mrs-products-grid'), value: 'asc'},
                    { label: __('Descending', 'mrs-products-grid'), value: 'desc'}
                ]}
                value={order}
                onChange={(newValue)=> setAttributes({order: newValue})}
            />
        </PanelBody>		
        </>
    );
}

export default GeneralTab;