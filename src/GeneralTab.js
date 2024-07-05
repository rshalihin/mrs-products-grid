import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl, SelectControl, __experimentalDivider as Divider, ButtonGroup, Button, TextControl } from '@wordpress/components';
import MRSToggle from "./components/mrsToggle/MRSToggle";
import MRSRangeControl from './components/mrsRangControl/MRSRangeControl';

const GeneralTab = ({attributes, setAttributes}) => {
    const { postsPerPage, orderBy, order, productsColumn, productTitleShow, productPriceShow, showProductRatingStar, showAddToCart, saleBadgeShow, saleBadgeText, customAddToCartText, addToCartText, addToCartTextGroup,hideOutOfStock, addToCartTextExternal, addToCartTextDefault, addToCartTextVariable, hideProductEmptyRatingStar } = attributes;
    return(
        <>
        <PanelBody title={__('Layout Settings', 'mrs-products-grid')} initialOpen={true} className={'mrs-product-grid-panel-body'}>
            <MRSRangeControl
                label={__('Column(s)', 'mrs-products-grid')}
                help={__('Set the number of column(s) you want to show.', 'mrs-products-grid')}
                attributes={productsColumn}
                attributesKey={'productsColumn'}
                setAttributes={setAttributes}
                min={1}
                max={6}
                step={1}
            />
            <RangeControl
                label={__('Limit', 'mrs-products-grid')}
                help={__('Set number of total products to show.', 'mrs-products-grid')}
                value={postsPerPage}
                onChange={(newValue) => setAttributes({postsPerPage: newValue})}
            />
            <MRSToggle
                label={__('Hide Out Of Stock Product', 'mrs-products-grid')}
                attributes={hideOutOfStock}
                attributesKey={'hideOutOfStock'}
                setAttributes={setAttributes}
            />
        </PanelBody>
        <PanelBody title={__('Filter Settings', 'mrs-products-grid')} initialOpen={false} className={'mrs-product-grid-panel-body'}>
            <SelectControl
                label={__('Order By', 'mrs-products-grid')}
                help={__('Set a order by option.', 'mrs-products-grid')}
                options={[
                    { label: __('ID', 'mrs-products-grid'), value: 'id'},
                    { label: __('Date', 'mrs-products-grid'), value: 'date'},
                    { label: __('Title', 'mrs-products-grid'), value: 'title'},
                    { label: __('Rating', 'mrs-products-grid'), value: 'rating'},
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
        <PanelBody title={__('Template Settings', 'mrs-products-grid')} initialOpen={false} className={'mrs-product-grid-panel-body'}>
            <MRSToggle
                label={__('Show Products Name', 'mrs-products-grid')}
                attributes={productTitleShow}
                attributesKey={'productTitleShow'}
                setAttributes={setAttributes}
            />
            <MRSToggle
                label={__('Show Products Price', 'mrs-products-grid')}
                attributes={productPriceShow}
                attributesKey={'productPriceShow'}
                setAttributes={setAttributes}
            />
            <MRSToggle
                label={__('Show Products Rating', 'mrs-products-grid')}
                attributes={showProductRatingStar}
                attributesKey={'showProductRatingStar'}
                setAttributes={setAttributes}
            />
            {showProductRatingStar && 
            <MRSToggle
                label={__('Hide Products Empty Rating', 'mrs-products-grid')}
                attributes={hideProductEmptyRatingStar}
                attributesKey={'hideProductEmptyRatingStar'}
                setAttributes={setAttributes}
            />
            }
            <MRSToggle
                label={__('Sale Badge', 'mrs-products-grid')}
                attributes={saleBadgeShow}
                attributesKey={'saleBadgeShow'}
                setAttributes={setAttributes}
            />
            <MRSToggle
                label={__('Show Add To Cart', 'mrs-products-grid')}
                attributes={showAddToCart}
                attributesKey={'showAddToCart'}
                setAttributes={setAttributes}
            />
        </PanelBody>
        { saleBadgeShow && 
        <PanelBody title={__('Sale Badge', 'mrs-products-grid')} initialOpen={false} className={'mrs-product-grid-panel-body'}>
            <TextControl
                label={__('Sale Text', 'mrs-products-grid')}
                value={saleBadgeText}
                onChange={(newValue)=>setAttributes({saleBadgeText: newValue})}
            />
        </PanelBody>
        }
        { showAddToCart && 
        <PanelBody title={__('Cart Text', 'mrs-products-grid')} initialOpen={false} className={'mrs-product-grid-panel-body'}>
            <MRSToggle
                label={__('Use custom cart button text', 'mrs-products-grid')}
                attributes={customAddToCartText}
                attributesKey={'customAddToCartText'}
                setAttributes={setAttributes}
            />
            {customAddToCartText &&
            <>
            <Divider />
            <TextControl
                label={__('Simple Product', 'mrs-products-grid')}
                value={addToCartText}
                onChange={(newValue)=>setAttributes({addToCartText: newValue})}
            />
            <TextControl
                label={__('Group Product', 'mrs-products-grid')}
                value={addToCartTextGroup}
                onChange={(newValue)=>setAttributes({addToCartTextGroup: newValue})}
            />
            <TextControl
                label={__('Variable Product', 'mrs-products-grid')}
                value={addToCartTextVariable}
                onChange={(newValue)=>setAttributes({addToCartTextVariable: newValue})}
            />
            <TextControl
                label={__('External Product', 'mrs-products-grid')}
                value={addToCartTextExternal}
                onChange={(newValue)=>setAttributes({addToCartTextExternal: newValue})}
            />
            <TextControl
                label={__('Default Product', 'mrs-products-grid')}
                value={addToCartTextDefault}
                onChange={(newValue)=>setAttributes({addToCartTextDefault: newValue})}
            />
            </>
            }
        </PanelBody>
        }

        </>
    );
}

export default GeneralTab;