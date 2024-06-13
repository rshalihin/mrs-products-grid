import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, SelectControl } from '@wordpress/components';
import { useState, useEffect } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import dynamicCss from "./dynamicCss";
import Inspector from './Inspector';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
	const { postsPerPage, orderBy, order, uniqueID, frontendCss, productsColumn } = attributes;
	const [ firstTLoad, setFirstTLoad ] = useState(true);

	const selectProduct = useSelect((select)=> {
		return select('core').getEntityRecords('postType', 'product', {per_page: postsPerPage, _embed: true, orderby: orderBy, order });
	}, [postsPerPage, orderBy, order]);


	useEffect(() => {
		if(uniqueID && !firstTLoad ) {
			setFirstTLoad(false);
		}
	},[]);

	useEffect(() => {	
		if( firstTLoad && !uniqueID ) {
			setAttributes({uniqueID: clientId});
		}		
	},[firstTLoad])

	useEffect( () => {
		setAttributes({ frontendCss: JSON.stringify(dynamicCss(attributes)) });
	}, [attributes]);
	
	return (
	<>
		<Inspector
			attributes={attributes}
			setAttributes={setAttributes}
		/>
		
		{/* <style>{dynamicCss(attributes)}</style>		 */}
		<div { ...useBlockProps({
			className: `mrs-block-mrs-products-grid mrs-product-${uniqueID}`
		}) }>
			<div className="mrs-products-grid-wrapper">
				<div className="mrs-products-grid-content">
					{selectProduct && selectProduct.length > 0 && (							
						selectProduct.map((item, i) => {
							return(
								<div className={`mrs-product-col has-${productsColumn}-col`} key={i}>
									<div className='mrs-product'>
										<div className='mrs-product-img-wrapper'>
											<div className='mrs-product-img'>
												<img src={item._embedded['wp:featuredmedia'][0]?.source_url} alt='' />
											</div>
											<div className='mrs-product-img-overlay'></div>
										</div>
										<div className='mrs-product-content-wrapper'>
											<div className='mrs-product-title'>
												<h4>{item?.title?.rendered}</h4>
											</div>
											<div className='mrs-product-ratting'></div>
											<div className='mrs-product-price'>
												<p>Price will show in frontend</p>
											</div>
											<div className='mrs-product-add-to-cart'>
												<p className='product woocommerce add_to_cart_inline mrs-product-buy-btn-cart'>
													<a data-quantity="1" className='button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart' aria-label={`Add to cart: “${item.title}”`} aria-describedby rel='nofollow'>Add to cart</a>
												</p>
											</div>
										</div>
									</div>
								</div>
							)
						})
					)}
				</div>
			</div>
		</div>
	</>
	);
}
