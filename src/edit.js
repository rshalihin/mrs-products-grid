import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Icon, Spinner } from '@wordpress/components';
import { useState, useEffect, RawHTML } from "@wordpress/element";
import { select, useSelect } from "@wordpress/data";
import dynamicCss from "./dynamicCss";
import Inspector from './Inspector';
import './editor.scss';
import { useDeviceType } from './controls/controls';


export default function Edit({ attributes, setAttributes, clientId }) {
	const { postsPerPage, orderBy, order, uniqueID, frontendCss, productsColumn, productTitleShow, productPriceShow, showProductRatingStar, showAddToCart, saleBadgeShow, saleBadgeText, customAddToCartText, addToCartText, addToCartTextGroup, hideOutOfStock, hideProductEmptyRatingStar, mrsProductSaleBadgeStyle, searchByCategory, showCategory, productFilterBy, mrsProductStyle } = attributes;

	const [ firstTLoad, setFirstTLoad ] = useState(true);
	const [ loading, setLoading ] = useState(false);
	const [mrsPro, setMrsPro] = useState([]);
	const [ proCategory, setProCategory ] = useState([]);

	const selectProduct = useSelect((select)=> {
		if ( searchByCategory !== 'all' ){
			return select('core').getEntityRecords('postType', 'product', {per_page: postsPerPage, _embed: true, orderby: orderBy, order, product_cat: parseInt(searchByCategory) });
		} else {
			return select('core').getEntityRecords('postType', 'product', {per_page: postsPerPage, _embed: true, orderby: orderBy, order });
		}
	}, [postsPerPage, orderBy, order, searchByCategory]);

	const productsCategory = useSelect((select) => {
		return select('core').getEntityRecords('taxonomy', 'product_cat');
	},[])

	// console.log(proCategory);


	const deviceType = useDeviceType();
	
	useEffect(() => {
		if (productsCategory && proCategory.length === 0 ) {
			setProCategory(productsCategory);
		}
	}, [productsCategory])
	

	useEffect(() => {
		if ( selectProduct ) {
			const copyProduct = selectProduct;
			copyProduct?.map((item) =>{
				mrsProductsGrid?.products?.map( (v) =>{
					if( parseInt(v.id) === parseInt(item.id) ){
						item.stock = v.price ? 'instock' : 'out of stock';
						item.featured = v.featured ? true : false;
						item.onSale = v.onSale ? true : false;
					}
				})
			})
			if ( productFilterBy === 'all' ) {
				if( hideOutOfStock ) {
					const filterPro = copyProduct?.filter( v => v.stock === 'instock' );
					setMrsPro(filterPro);
				} else {
					setMrsPro(copyProduct);
				}
			} else {
				if ( hideOutOfStock ){
					const filterProduct = copyProduct?.filter( v => v.stock === 'instock' );
					const filterType = filterProduct?.filter( v => v[productFilterBy] === true );
					setMrsPro(filterType);
				} else {
					const filterType = copyProduct?.filter( v => v[productFilterBy] === true );
					setMrsPro(filterType);
				}
			}
		}
	},[selectProduct, hideOutOfStock, productFilterBy])
	

	const starRating = (ratingCount) => {
		let rating = parseInt(ratingCount);
		let starRatings = [];

		for ( let i = 0; i < rating; i++) {
			starRatings.push( <Icon icon={'star-filled'} /> );
		}
		for ( let i = rating; i < 5; i++ ) {
			starRatings.push( <Icon icon={'star-empty'} /> );
		}
		return starRatings;

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

	useEffect( () => {
		if ( selectProduct === null ) {
			setLoading(true)
		} else {
			setLoading(false)
		}
	}, [selectProduct])
	
	return (
	<>
		<Inspector
			attributes={attributes}
			setAttributes={setAttributes}
		/>
		
		<style>{dynamicCss(attributes)}</style>
		<div { ...useBlockProps({
			className: `mrs-block-mrs-products-grid mrs-product-${uniqueID}`
		}) }>
			{ loading && <p>Loading Products...  {<Spinner />}</p>}
			<div className="mrs-products-grid-wrapper">
				<div className="mrs-products-grid-content">
					{mrsPro && mrsPro.length > 0 ? (							
						mrsPro.map((item, i) => {
							return(
								<div className={`mrs-product-col ${[deviceType]}-has-${productsColumn.device[deviceType]}-col`} key={i}>
									<div className={`mrs-product ${mrsProductStyle}`}>
										<div className='mrs-product-img-wrapper'>
											<div className='mrs-product-img'>
												<a><img src={item._embedded['wp:featuredmedia'][0]?.source_url} alt='' /></a>
											</div>
											{mrsProductsGrid?.products?.map( (v, i) =>{
											if( parseInt(v.id) === parseInt(item.id) && v.onSale === true ){
												return (
													<div key={i}>
														{ saleBadgeShow && saleBadgeText && <div className={`mrs-product-img-overlay ${mrsProductSaleBadgeStyle}`}>
															<span>{saleBadgeText}</span>
														</div>}
													</div>
												);
											}
											})}
										</div>
										<div className='mrs-product-content-wrapper'>
											{ showCategory && proCategory?.map( (v, i) => { 
												if(parseInt(v.id) === item.product_cat[0]) {
												return <span className='mrs-product-category' key={i}>-{v.name}</span>;
											} } )}
											{/* { categoryName(item.id) } */}
											{productTitleShow &&
											<div className='mrs-product-title'>
												<h4>{item?.title?.rendered}</h4>
											</div>
											}
											{ showProductRatingStar && 
											<div className='mrs-product-ratting'>
											{mrsProductsGrid?.products?.map( (v,i) =>{
												if( parseInt(v.id) === parseInt(item.id)){
													if ( hideProductEmptyRatingStar && v.rating == 0 ) { return '' }
													return (
														<div key={i}>
															{ starRating(v.rating).map( (v, i) => {
														return (
														<span key={i}>{v}</span>
													)})}
													</div>
													);
												}
												})}
											</div>
											}
											
											{ productPriceShow && 
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
											}

											{ showAddToCart && 
											<div className='mrs-product-add-to-cart'>
												{mrsProductsGrid?.products?.map( ( v, i) =>{
													if( parseInt(v.id) === parseInt(item.id)){
													return (
														<p className='product woocommerce add_to_cart_inline mrs-product-buy-btn-cart' key={i}>
															<a data-quantity="1" className='wp-block-button__link wp-element-button add_to_cart_button wc-block-components-product-button__button' aria-label={`Add to cart: “${item?.title?.raw}”`} aria-describedby rel='nofollow'>
															{  customAddToCartText ?  v.groupProduct ? addToCartTextGroup : addToCartText : v.groupProduct ? 'View Products' : v.price ? 'Add To Cart' : 'View Product'}
															</a>
														</p>
													);
													}})}
											</div>
											}
										</div>
									</div>
								</div>
							)
						})
					) :  loading ? '' : <div>No Product Found!!! Please Check product filter section.</div>
					}
				</div>
			</div>
		</div>
	</>
	);
}
