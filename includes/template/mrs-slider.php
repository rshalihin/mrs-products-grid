<?php
/**
 * Template for MRS Product Grid showcase.
 */

?>
<?php
$desktop_column_class = isset( $attributes['productsColumn']['device']['Desktop'] ) ? $attributes['productsColumn']['device']['Desktop'] : 4;
$tablet_column_class  = isset( $attributes['productsColumn']['device']['Tablet'] ) ? $attributes['productsColumn']['device']['Tablet'] : 3;
$mobile_column_class  = isset( $attributes['productsColumn']['device']['Mobile'] ) ? $attributes['productsColumn']['device']['Mobile'] : 1;

$device_columns_strings = '{"desktop":' . $desktop_column_class . ', "tablet": ' . $tablet_column_class . ', "mobile":' . $mobile_column_class . '}';
json_decode( $device_columns_strings );

?>
<div class="swiper mrs-products-slider" data-products-column="<?php echo esc_attr( $device_columns_strings ); ?>">
    <div class="swiper-nav-btns">
        <button class="mrs-slider-btn-prev"><span class="dashicons dashicons-arrow-left-alt2"></span></button>
        <button class="mrs-slider-btn-next"><span class="dashicons dashicons-arrow-right-alt2"></span></button>
      </div>
	<div class="swiper-wrapper">

	<?php
	if ( $mrs_products_grid_query ) {
		while ( $mrs_products_grid_query->have_posts() ) {
			$mrs_products_grid_query->the_post();

			global $product;

			$post_thumbnail_id = $product->get_image_id();

			if ( $post_thumbnail_id ) {
				$mrs_product_image_url = wp_get_attachment_url( intval( $post_thumbnail_id ) );
			}
			$mrs_product_price   = $product->get_price_html() ? $product->get_price_html() : 'Out of stock';
			$is_on_sale_product  = $product->is_on_sale() ? true : false;
			$mrs_ratings         = $product->get_average_rating();
			$mrs_avg_rating      = '';
			$mrs_categories_name = wp_get_post_terms( $product->id, 'product_cat' )[0]->name;

			for ( $i = 0; $i < intval( $mrs_ratings ); $i++ ) {
				$mrs_avg_rating .= '<span class="dashicons dashicons-star-filled"></span>';
			}
			for ( $i = intval( $mrs_ratings ); $i < 5; $i++ ) {
				$mrs_avg_rating .= '<span class="dashicons dashicons-star-empty"></span>';
			}

			?>
			<div class="swiper-slide mrs-product-single-wrapper">
				<div class="mrs-product <?php echo esc_attr( $attributes['mrsProductStyle'] ); ?>">
					<div class="mrs-product-img-wrapper">
						<div class="mrs-product-img">
							<a href="<?php echo esc_url( get_the_permalink() ); ?>">
								<img src="<?php echo esc_url( $mrs_product_image_url ); ?>" alt="" />
								<?php if ( $attributes['saleBadgeShow'] ) : ?>
									<?php if ( $is_on_sale_product ) { ?>
							<div>
								<div class="mrs-product-img-overlay <?php echo esc_attr( $attributes['mrsProductSaleBadgeStyle'] ); ?>">
									<span><?php echo wp_kses_post( $attributes['saleBadgeText'] ); ?></span>
								</div>
							</div>
							<?php } ?>
						<?php endif; ?>
							</a>
						</div>
					</div>
					<div class="mrs-product-content-wrapper">
						<?php if ( $attributes['productTitleShow'] ) : ?>
							<span><?php echo esc_html( '-' . $mrs_categories_name ); ?></span>
							<div class="mrs-product-title">
								<h4><?php echo wp_kses_post( get_the_title() ); ?></h4>
							</div>
							<?php endif; ?>
							<?php if ( $attributes['showProductRatingStar'] ) : ?>
								<?php
								if ( $attributes['hideProductEmptyRatingStar'] === true && $mrs_ratings === '0' ) {
									?>
									<span></span>
									<?php
								} else {
									?>
									<div class='mrs-product-ratting'>
										<div><?php echo wp_kses_post( $mrs_avg_rating ); ?></div>
									</div>
									<?php
								}
								?>
							<?php endif; ?>
							<?php if ( $attributes['productPriceShow'] ) : ?>
							<div class="mrs-product-price"><?php echo wp_kses_post( $mrs_product_price ); ?></div>
							<?php endif; ?>
							<?php if ( $attributes['showAddToCart'] ) : ?>
							<div class="mrs-product-add-to-cart">
								<?php
								$add_to_cart = do_shortcode( '[add_to_cart id="' . get_the_ID() . '" show_price="false" style="" class="mrs-product-buy-btn-cart"]' );
								echo wp_kses_post( $add_to_cart );
								?>
							</div>
							<?php endif; ?>
						</div>
					</div>
				</div>
			<?php
		}
	}
	?>
	</div>
    <div class="swiper-pagination"></div>
</div>
