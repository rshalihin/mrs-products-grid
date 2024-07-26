<?php
/**
 * Template for MRS Product Grid showcase.
 */

?>
<div class="mrs-products-grid-content mrs-product-col Desktop-has-<?php echo esc_attr( $desktop_column_class ); ?>-col Tablet-has-<?php echo esc_attr( $tablet_column_class ); ?>-col Mobile-has-<?php echo esc_attr( $mobile_column_class ); ?>-col mrs-product-layout-<?php echo esc_attr( $attributes['mrsProductsLayout'] ); ?>">

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
			<div class="mrs-product-single-wrapper">
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
