import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Icon, Spinner } from '@wordpress/components';
import { useState, useEffect, RawHTML } from "@wordpress/element";
import { select, useSelect } from "@wordpress/data";
import dynamicCss from "./dynamicCss";
import Inspector from './Inspector';
import './editor.scss';
import { useDeviceType } from './controls/controls';
import MRSTemplateGrid from './components/template/mrsTemplateGrid';
import MRSTemplateSlider from './components/template/mrsTemplateSlider';


export default function Edit({ attributes, setAttributes, clientId }) {
	const { postsPerPage, orderBy, order, uniqueID, frontendCss, productsColumn, productTitleShow, productPriceShow, showProductRatingStar, showAddToCart, saleBadgeShow, saleBadgeText, customAddToCartText, addToCartText, addToCartTextGroup, hideOutOfStock, hideProductEmptyRatingStar, mrsProductSaleBadgeStyle, searchByCategory, showCategory, productFilterBy, mrsProductStyle, cateIds, mrsProductsLayout } = attributes;

	const [ firstTLoad, setFirstTLoad ] = useState(true);
	const [ loading, setLoading ] = useState(true);
	const [mrsPro, setMrsPro] = useState([]);
	const [ proCategory, setProCategory ] = useState([]);

	const selectProduct = useSelect((select)=> {
				
		return select('core').getEntityRecords('postType', 'product', {per_page: postsPerPage, _embed: true, orderby: orderBy, order, product_cat: cateIds });
		
	}, [postsPerPage, orderBy, order, cateIds]);

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
		if ( selectProduct !== null ) {
			setLoading(false)
		} else {
			setLoading(true)
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
			<div className={`mrs-products-grid-wrapper mrs-${mrsProductsLayout}`}>
				{mrsProductsLayout && mrsProductsLayout === 'grid' &&
				<MRSTemplateGrid
					attributes={attributes}
					mrsPro={mrsPro}
					starRating={starRating}
					loading={loading}
					/> }
				{ mrsProductsLayout && mrsProductsLayout === 'slider' && 
				<MRSTemplateSlider
					attributes={attributes}
					mrsPro={mrsPro}
					starRating={starRating}
					loading={loading}
				/>
				}
			</div>
		</div>
	</>
	);
}
