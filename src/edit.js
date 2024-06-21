import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, SelectControl, Icon } from '@wordpress/components';
import { useState, useEffect, RawHTML } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import dynamicCss from "./dynamicCss";
import Inspector from './Inspector';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
	const { postsPerPage, orderBy, order, uniqueID, frontendCss, productsColumn } = attributes;
	const [ firstTLoad, setFirstTLoad ] = useState(true);
	// console.log(mrsProductsGrid.products);

	const selectProduct = useSelect((select)=> {
		return select('core').getEntityRecords('postType', 'product', {per_page: postsPerPage, _embed: true, orderby: orderBy, order });
	}, [postsPerPage, orderBy, order]);

	const starRating = (ratingCount) => {
		let rating = parseInt(ratingCount);
		switch (rating) {
			case 1:
				return(
					<>
					<Icon icon={'star-filled'} />
					<Icon icon={'star-empty'} />
					<Icon icon={'star-empty'} />
					<Icon icon={'star-empty'} />
					<Icon icon={'star-empty'} />
					</>
				);
				
			case 2:
				return(
					<>
					<Icon icon={'star-filled'} />
					<Icon icon={'star-filled'} />
					<Icon icon={'star-empty'} />
					<Icon icon={'star-empty'} />
					<Icon icon={'star-empty'} />
					</>
				);
			
				case 3:
					return(
						<>
						<Icon icon={'star-filled'} />
						<Icon icon={'star-filled'} />
						<Icon icon={'star-filled'} />
						<Icon icon={'star-empty'} />
						<Icon icon={'star-empty'} />
						</>
					);
				case 4:
					return(
						<>
						<Icon icon={'star-filled'} />
						<Icon icon={'star-filled'} />
						<Icon icon={'star-filled'} />
						<Icon icon={'star-filled'} />
						<Icon icon={'star-empty'} />
						</>
					);
				case 5:
					return(
						<>
						<Icon icon={'star-filled'} />
						<Icon icon={'star-filled'} />
						<Icon icon={'star-filled'} />
						<Icon icon={'star-filled'} />
						<Icon icon={'star-filled'} />
						</>
					)
			default:
				return(
					<>
					<Icon icon={'star-empty'} />
					<Icon icon={'star-empty'} />
					<Icon icon={'star-empty'} />
					<Icon icon={'star-empty'} />
					<Icon icon={'star-empty'} />
					</>
				);
		}
	}

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
											{mrsProductsGrid?.products?.map( (v, i) =>{
											if( parseInt(v.id) === parseInt(item.id) && v.onSale === true ){
												return (
													<div key={i} className='mrs-product-img-overlay'>
														<span>Sale</span>
													</div>
												);
											}
											})}
										</div>
										<div className='mrs-product-content-wrapper'>
											<div className='mrs-product-title'>
												<h4>{item?.title?.rendered}</h4>
											</div>
											<div className='mrs-product-ratting'>
											{mrsProductsGrid?.products?.map( (v,i) =>{
												if( parseInt(v.id) === parseInt(item.id)){
													return (
														<div key={i}>{ starRating(v.rating) }</div>
													);
												}
												})}
											</div>
											<div className='mrs-product-price'>
												{mrsProductsGrid?.products?.map( ( v, i) =>{
													if( parseInt(v.id) === parseInt(item.id)){
														return (
															<RawHTML key={i}>
																{v.price ? v.price : 'Out of Stock'}
															</RawHTML>
														);
													}
												})}
											</div>
											<div className='mrs-product-add-to-cart'>
												<p className='product woocommerce add_to_cart_inline mrs-product-buy-btn-cart'>
													<a data-quantity="1" className='wp-block-button__link wp-element-button add_to_cart_button wc-block-components-product-button__button mrs-product-add-to-cart-button' aria-label={`Add to cart: “${item?.title?.raw}”`} aria-describedby rel='nofollow'>Add to cart</a>
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
