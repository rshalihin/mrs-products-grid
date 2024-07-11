import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl, SelectControl, __experimentalDivider as Divider, ButtonGroup, Button, TextControl } from '@wordpress/components';
import MRSToggle from "./components/mrsToggle/MRSToggle";
import MRSRangeControl from './components/mrsRangControl/MRSRangeControl';
import { useEffect, useState } from '@wordpress/element';
import { select, useSelect } from "@wordpress/data";
import productStyle1 from '../assets/image/product-style-1.png';
import productStyle2 from '../assets/image/product-style-2.png';
import productStyle3 from '../assets/image/product-style-3.png';


const GeneralTab = ({attributes, setAttributes}) => {
    const { postsPerPage, orderBy, order, productsColumn, productTitleShow, productPriceShow, showProductRatingStar, showAddToCart, saleBadgeShow, saleBadgeText, customAddToCartText, addToCartText, addToCartTextGroup, hideOutOfStock, addToCartTextExternal, addToCartTextDefault, addToCartTextVariable, hideProductEmptyRatingStar, searchByCategory, showCategory, productFilterBy, mrsProductStyle } = attributes;
    
        const [ cateOptions, setCateOptions ] = useState([]);

    const productsCategory = useSelect((select) => {
		return select('core').getEntityRecords('taxonomy', 'product_cat');
	},[])

    useEffect(() => {
            let options = productsCategory?.map(v => ({ label: v.name, value: v.id }));
            if ( options ) {
                let allOpt = [ {label: "All", value: "all"}, ...options ];
                setCateOptions(allOpt);
            }
    }, [])


    return(
        <>
        <PanelBody title={__('Layout Settings', 'mrs-products-grid')} initialOpen={true} className={'mrs-product-grid-panel-body'}>
            <div className='mrs-products-style-select'>
                <div className='mrs-products-style-title'>Select a Product Style</div>
                <div className='mrs-products-style-image-group'>
                    <div className={`mrs-products-style-image-single ${mrsProductStyle === 'style-1' && 'mrs-is-active'}`}>
                        <figure  onClick={() => setAttributes({ mrsProductStyle: 'style-1'})}>
                            <img src={productStyle1} alt='style-1' />
                            <input type='radio' />
                        </figure>
                        <div className='mrs-products-single-style-title'>Straight</div>
                    </div>
                    <div  className={`mrs-products-style-image-single ${mrsProductStyle === 'style-2' && 'mrs-is-active'}`}>
                        <figure  onClick={() => setAttributes({ mrsProductStyle: 'style-2'})}>
                            <img src={productStyle2} alt='style-2' />
                            <input type='radio' />
                        </figure>
                        <div className='mrs-products-single-style-title'>Hover Btn</div>
                    </div>
                    <div  className={`mrs-products-style-image-single ${mrsProductStyle === 'style-3' && 'mrs-is-active'}`}>
                        <figure  onClick={() => setAttributes({ mrsProductStyle: 'style-3'})} >
                            <img src={productStyle3} alt='style-3' />
                            <input type='radio' />
                        </figure>
                        <div className='mrs-products-single-style-title'>Hover Text</div>
                    </div>
                </div>
            </div>
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
            <div className='mrs-products-mb'>
            <RangeControl
                label={__('Limit', 'mrs-products-grid')}
                help={__('Set number of total products to show.', 'mrs-products-grid')}
                value={postsPerPage}
                onChange={(newValue) => setAttributes({postsPerPage: newValue})}
            />
            </div>
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
            <SelectControl
                label={__('Show Products By Specific Category', 'mrs-products-grid')}
                options={cateOptions}
                value={searchByCategory}
                onChange={(v)=> setAttributes({ searchByCategory: v })}
            />
            <div className='mrs-products-mb'>
                <SelectControl
                    label={__('Filter Products', 'mrs-products-grid')}
                    options={[
                        { label: 'All', value: 'all' },
                        { label: 'Featured', value: 'featured' },
                        { label: 'On Sale', value: 'onSale' }
                    ]}
                    value={productFilterBy}
                    onChange={(v)=> setAttributes({ productFilterBy: v })}
                />
            </div>
        </PanelBody>
        <PanelBody title={__('Template Settings', 'mrs-products-grid')} initialOpen={false} className={'mrs-product-grid-panel-body'}>
            <MRSToggle
                label={__('Hide Out Of Stock Product', 'mrs-products-grid')}
                attributes={hideOutOfStock}
                attributesKey={'hideOutOfStock'}
                setAttributes={setAttributes}
            />
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
            <MRSToggle
                label={__('Show Category', 'mrs-products-grid')}
                attributes={showCategory}
                attributesKey={'showCategory'}
                setAttributes={setAttributes}
            />
        </PanelBody>
        { saleBadgeShow && 
        <PanelBody title={__('Sale Badge', 'mrs-products-grid')} initialOpen={false} className={'mrs-product-grid-panel-body'}>
            <div className='mrs-products-mb'>
            <TextControl
                label={__('Sale Text', 'mrs-products-grid')}
                value={saleBadgeText}
                onChange={(newValue)=>setAttributes({saleBadgeText: newValue})}
            />
            </div>
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