<?php
/**
 * Plugin Name:       MRS Products Grid
 * Description:       A simple Gutenberg form widget.
 * Requires at least: 6.1
 * Requires PHP:      7.3
 * Version:           0.1.0
 * Author:            Md. Readush Shalihin
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * WC requires at least: 4.5
 * WC tested up to: 8.9.2
 * Text Domain:       mrs-products-grid
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Shortcode
 *
 * @param array $attributes shortcode attributes.
 * @return string
 */
function mrs_block_products_grid_rendering( $attributes ) {

	if ( ! is_plugin_active_for_network( 'woocommerce/woocommerce.php' ) && ! in_array( 'woocommerce/woocommerce.php', apply_Filters( 'active_plugins', get_option( 'active_plugins' ) ), true ) ) {
		return '<div class="error"><p>You must install and activate the <a target="_blank" href="https://wordpress.org/plugins/woocommerce/"><strong>Woocommerce</strong></a> plugins to make the <strong>MRS Products Gird</strong> plugin work</p></div>';
	}

	$args = array(
		'post_type'   => 'product',
		'post_status' => 'publish',
	);

	if ( isset( $attributes['postsPerPage'] ) ) {
		$args['posts_per_page'] = $attributes['postsPerPage'];
	} else {
		$args['posts_per_page'] = 100;
	}

	if ( isset( $attributes['orderBy'] ) ) {
		$args['order_by'] = $attributes['orderBy'];
	}
	if ( isset( $attributes['order'] ) ) {
		$args['order'] = $attributes['order'];
	}

	$mrs_products_grid_query = new \WP_Query( $args );

	ob_start();

	?>
	<style><?php echo  substr($attributes['frontendCss'], 1, (strlen($attributes['frontendCss']) - 2) ) ; ?></style>
	<div class="mrs-block-mrs-products-grid mrs-product-<?php echo esc_attr( $attributes['uniqueID'] ); ?>">
		<div class="mrs-products-grid-wrapper">
			<div class="mrs-products-grid-content">

	<?php
	if ( $mrs_products_grid_query ) {
		while ( $mrs_products_grid_query->have_posts() ) {
			$mrs_products_grid_query->the_post();
			global $product;
			// echo '<pre>';
			// var_dump($product);
			// echo '</pre>';
			// wp_die();

			$post_thumbnail_id = $product->get_image_id();
			if ( $post_thumbnail_id ) {
				$mrs_product_image_url = wp_get_attachment_url( intval( $post_thumbnail_id ) );
			}
			$mrs_product_price = $product->get_price_html() ? $product->get_price_html() : 'Out of stock';

			?>
			<div class="mrs-product-col has-<?php echo $attributes['productsColumn']; ?>-col">
				<div class="mrs-product">
					<div class="mrs-product-img-wrapper">
						<div class="mrs-product-img">
							<a href="<?php echo esc_url( get_the_permalink() ); ?>">
								<img src="<?php echo esc_url( $mrs_product_image_url ); ?>" alt="" />
							</a>
						</div>
						<div class="mrs-product-overlay"></div>
					</div>
					<div class="mrs-product-content-wrapper">
						<div class="mrs-product-content">
							<div class="mrs-product-title"><?php echo wp_kses_post( get_the_title() ); ?></div>
							<div class="mrs-product-price"><?php echo wp_kses_post( $mrs_product_price ); ?></div>
							<div class="mrs-product-buy-btn">
								<?php
								$add_to_cart = do_shortcode( '[add_to_cart id="' . get_the_ID() . '" show_price="false" style="" class="mrs-product-buy-btn-cart"]' );
								echo wp_kses_post( $add_to_cart );
								?>
							</div>
						</div>
					</div>
				</div>
			</div>

			<?php
		}
	}
	?>
			</div>
		</div>
	</div>
	<?php

	return ob_get_clean();

}


/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_mrs_form_block_init() {
	register_block_type( __DIR__ . '/build', array( 'render_callback' => 'mrs_block_products_grid_rendering' ) );
}
add_action( 'init', 'create_block_mrs_form_block_init' );

/**
 * Undocumented function
 *
 * @return void
 */
function mrs_products_grid_script_enqueue() {
	wp_enqueue_style( 'mrs-products-grid-style-enqueue', plugin_dir_url( __FILE__ ) . 'assets/css/mrs-products-grid.css', array(), '0.1.0', 'all' );
}


add_action( 'wp_enqueue_scripts', 'mrs_products_grid_script_enqueue' );
