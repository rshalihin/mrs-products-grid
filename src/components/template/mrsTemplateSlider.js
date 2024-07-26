import { RawHTML } from "@wordpress/element";
import { useDeviceType } from '../../controls/controls';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
    const swiper = useSwiper();
  
    return (
      <div className="swiper-nav-btns">
        <button onClick={() => swiper.slidePrev() }><span className="dashicons dashicons-arrow-left-alt2"></span></button>
        <button onClick={() => swiper.slideNext() }><span className="dashicons dashicons-arrow-right-alt2"></span></button>
      </div>
    );
  };


const MRSTemplateSlider = ({attributes, mrsPro, starRating, loading}) => {
    const { productsColumn, mrsProductsLayout,  mrsProductStyle, saleBadgeShow, saleBadgeText, mrsProductSaleBadgeStyle, showCategory, proCategory, productTitleShow, showProductRatingStar, hideProductEmptyRatingStar, productPriceShow, showAddToCart, customAddToCartText, addToCartTextGroup, addToCartText, productSpacing } = attributes;

    const deviceType = useDeviceType();

  return (
    <>
    <Swiper
    slidesPerView={productsColumn.device[deviceType]}
    spaceBetween={productSpacing}
    loop={true}
    touchStartPreventDefault={false}
    pagination={{
      clickable: true,
    }}
    autoplay={{
        delay: 2000,
    }}
    modules={[Pagination, Navigation]}
    className="mrs-products-slider"
    >
    {mrsPro && mrsPro.length > 0 ? (							
        mrsPro.map((item, i) => {
            return(
                <SwiperSlide className={`mrs-product-single-wrapper`} key={i}>
                    <div className={`mrs-product ${mrsProductStyle}`}>
                        <div className='mrs-product-img-wrapper'>
                            <div className='mrs-product-img'>
                                <a>
                                    <img src={item._embedded['wp:featuredmedia'][0]?.source_url} alt='' />
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
                                    </a>
                            </div>
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
                </SwiperSlide>
            )
        })
    ) :  (!loading && !mrsPro) ? <div>No Product Found!!! Please Check product filter section.</div> : ''
    }
    { !loading && mrsPro && 
    <SwiperNavButtons /> }
    </Swiper>
    </>
  )
}

export default MRSTemplateSlider;