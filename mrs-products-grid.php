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

// Makes sure the plugin is defined before trying to use it.
if ( ! function_exists( 'is_plugin_active_for_network' ) ) {
    require_once( ABSPATH . '/wp-admin/includes/plugin.php' );
}

// Determines whether the plugin is active for the entire network. If not call error notice.
if ( ! is_plugin_active_for_network( 'woocommerce/woocommerce.php' ) && ! in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ), true ) ) {
	add_action( 'admin_notices', 'error_admin_notice' );
}

/**
 * Shortcode
 *
 * @param array $attributes shortcode attributes.
 * @return string
 */
function mrs_block_products_grid_rendering( $attributes ) {

	$is_custom_btn = $attributes['customAddToCartText'];
	if ( $is_custom_btn ) {
		add_filter( 'woocommerce_product_add_to_cart_text', 'mrs_products_grid_custom_text', 10, 1 );
	}

	$addToCartText      = $attributes['addToCartText'];
	$addToCartTextGroup = $attributes['addToCartTextGroup'];
	$addToCartTextVariable = $attributes['addToCartTextVariable'];
	$addToCartTextExternal = $attributes['addToCartTextExternal'];
	$addToCartTextDefault = $attributes['addToCartTextDefault'];

	global $sample_cart_text;
	$sample_cart_text = [ $addToCartText, $addToCartTextGroup, $addToCartTextVariable, $addToCartTextExternal, $addToCartTextDefault ];

	$args = array(
		'post_type'   => 'product',
		'post_status' => 'publish',
	);

	if ( isset( $attributes['postsPerPage'] ) ) {
		$args['posts_per_page'] = $attributes['postsPerPage'];
	} else {
		$args['posts_per_page'] = 100;
	}

	if ( ! empty( $attributes['hideOutOfStock'] ) ) {
		$args['meta_query'] = array(
			array(
				'key'   => '_stock_status',
				'value' => 'instock',
			),
		);
	}

	if ( isset( $attributes['orderBy'] ) ) {
		if ( $attributes['orderBy'] === 'rating' ) {
			$args['orderby']  = 'meta_value_num';
			$args['meta_key'] = '_wc_average_rating';

		} elseif ( $attributes['orderBy'] === 'id' ) {
			$args['orderby'] = 'ID';

		} else {
			$args['orderby'] = $attributes['orderBy'];
		}
	}
	if ( isset( $attributes['order'] ) ) {
		$args['order'] = strtoupper( $attributes['order'] );
	}

	$mrs_products_grid_query = new \WP_Query( $args );


	ob_start();

	?>

	<div <?php echo wp_kses_post( get_block_wrapper_attributes() ); ?>>
	<div class="mrs-block-mrs-products-grid mrs-product-<?php echo esc_attr( $attributes['uniqueID'] ); ?>">
		<div class="mrs-products-grid-wrapper">
			<div class="mrs-products-grid-content">

	<?php
	if ( $mrs_products_grid_query ) {
		while ( $mrs_products_grid_query->have_posts() ) {
			$mrs_products_grid_query->the_post();
			global $product;

			$post_thumbnail_id = $product->get_image_id();
			if ( $post_thumbnail_id ) {
				$mrs_product_image_url = wp_get_attachment_url( intval( $post_thumbnail_id ) );
			}
			$mrs_product_price  = $product->get_price_html() ? $product->get_price_html() : 'Out of stock';
			$is_on_sale_product = $product->is_on_sale() ? true : false;
			$mrs_ratings        = $product->get_average_rating();
			$mrs_avg_rating     = '';

			for ( $i = 0; $i < intval( $mrs_ratings ); $i++ ) {
				$mrs_avg_rating .= '<span class="dashicons dashicons-star-filled"></span>';
			}
			for ( $i = intval( $mrs_ratings ); $i < 5; $i++ ) {
				$mrs_avg_rating .= '<span class="dashicons dashicons-star-empty"></span>';
			}

			?>
			<div class="mrs-product-col has-<?php echo esc_attr( $attributes['productsColumn'] ); ?>-col">
				<div class="mrs-product">
					<div class="mrs-product-img-wrapper">
						<div class="mrs-product-img">
							<a href="<?php echo esc_url( get_the_permalink() ); ?>">
								<img src="<?php echo esc_url( $mrs_product_image_url ); ?>" alt="" />
							</a>
						</div>
						<?php if ( $attributes['saleBadgeShow'] ) : ?>
						<?php if ( $is_on_sale_product ) { ?>
						<div>
							<div class="mrs-product-img-overlay <?php echo esc_attr( $attributes['mrsProductSaleBadgeStyle'] ); ?>">
								<span><?php echo wp_kses_post( $attributes['saleBadgeText'] ); ?></span>
							</div>
						</div>
						<?php } ?>
						<?php endif; ?>
					</div>
					<div class="mrs-product-content-wrapper">
						<?php if ( $attributes['productTitleShow']) : ?>
							<div class="mrs-product-title">
								<h4><?php echo wp_kses_post( get_the_title() ); ?></h4>
							</div>
							<?php endif; ?>
							<?php if ( $attributes['showProductRatingStar'] ) : ?>
								<?php if ( $attributes['hideProductEmptyRatingStar'] === true && $mrs_ratings === '0' ) {
									?>
									<span></span>
									<?php
								} else {
									?>
									<div class='mrs-product-ratting'>
										<div><?php echo wp_kses_post( $mrs_avg_rating ); ?></div>
									</div>
									<?php
								} ?>
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
		</div>
	</div>
</div>
	<?php

	if ( $is_custom_btn ) {
		remove_filter( 'woocommerce_product_add_to_cart_text', 'mrs_products_grid_custom_text', 10, 1 );
	}
	wp_reset_postdata();
	return ob_get_clean();
}

/**
 * WooCommerce not installed error message
 */
function error_admin_notice() {
$link    = esc_url(
	add_query_arg(
		array(
			'tab'       => 'plugin-information',
			'plugin'    => 'woocommerce',
			'TB_iframe' => 'true',
			'width'     => '772',
			'height'    => '446',
		),
		admin_url( 'plugin-install.php' )
	)
);
$outline = '<div class="error"><p>You must install and activate <a class="thickbox open-plugin-details-modal" href="' . $link . '"><strong>WooCommerce</strong></a> plugin to make the <strong>MRS Product Grid</strong> work.</p></div>';
echo wp_kses_post( $outline );
}


/**
 * Changing add to cart button text.
 *
 * @param [type] $text
 * @return String
 */
function mrs_products_grid_custom_text( $text ) {
	global $product;
	global $sample_cart_text;

	list( $addToCartText, $addToCartTextGroup, $addToCartTextVariable, $addToCartTextExternal, $addToCartTextDefault ) = $sample_cart_text;

	$product_type = $product->get_type();

	$product_types = array(
		'simple' => $addToCartText,
		'grouped'  => $addToCartTextGroup,
		'external' => $addToCartTextExternal,
		'variable' => $addToCartTextVariable,
	);
	return isset( $product_types[ $product_type ] ) ? esc_html( $product_types[ $product_type ] ) : esc_html( $addToCartTextDefault );

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
 * Enqueue style.
 *
 * @return void
 */
function mrs_products_grid_script_enqueue() {
	wp_enqueue_style( 'mrs-products-grid-style-enqueue', plugin_dir_url( __FILE__ ) . 'assets/css/mrs-products-grid.css', array(), '0.1.0', 'all' );
}

add_action( 'wp_enqueue_scripts', 'mrs_products_grid_script_enqueue' );


/**
 * Function for taking products meta key and id for localization.
 *
 * @return array
 */
function mrs_products_grid_product_data() {
	$args          = array(
		'limit'  => -1,
		'status' => 'publish',
	);
	$query         = new WC_Product_Query( $args );
	$products      = $query->get_products();
	$products_data = array();

	foreach ( $products as $product ) {
		$product_id    = $product->get_id();
		$product_obj   = wc_get_product( $product_id );
		$group_product = $product_obj->get_children() ? true : false;

		$product_data[] = array(
			'id'           => $product_id,
			'price'        => $product_obj->get_price_html(),
			'rating'       => $product_obj->get_average_rating(),
			'onSale'       => $product_obj->is_on_sale() ? true : false,
			'groupProduct' => $group_product,
		);
	}

	return $product_data;
}

/**
 * Localize products meta key and id.
 *
 * @return void
 */
function mrs_products_grid_script_enqueue_localize() {

	wp_enqueue_script( 'mrs-products-grid', plugin_dir_url( __FILE__ ) . 'assets/js/mrs-products-grid.js', array(), filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' ), true );
	wp_localize_script(
		'mrs-products-grid',
		'mrsProductsGrid',
		array(
			'products' => mrs_products_grid_product_data(),
		)
	);
}
add_action( 'enqueue_block_editor_assets', 'mrs_products_grid_script_enqueue_localize' );

/**
 * Get Blocks Attributes
 *
 * @param int    $post_id post id.
 * @param string $block_name block name.
 *
 * @return array
 */
function mrs_products_grid_get_blocks_attributes( $post_id, $block_name ) {
	$blocks     = parse_blocks( get_post_field( 'post_content', $post_id ) );
	$attributes = array();

	foreach ( $blocks as $block ) {
		if ( $block['blockName'] === $block_name ) {
			$attributes = $block['attrs'];
			break;
		}
	}
	return $attributes;
}

if ( ! is_admin() ) {
	add_action( 'wp_enqueue_scripts', 'mrs_products_grid_single_page_dynamic_css' );
}


/**
 * Add Dynamic CSS in frontend.
 *
 * @return void
 */
function mrs_products_grid_single_page_dynamic_css() {
	$block_name = 'mrs-block/mrs-products-grid';
	$attributes = mrs_products_grid_get_blocks_attributes( get_the_ID(), $block_name );

	if ( isset( $attributes['frontendCss'] ) ) {
		$mrs_attr = substr( $attributes['frontendCss'], 1, ( strlen( $attributes['frontendCss'] ) - 2 ) );

		$mrs_bool = wp_add_inline_style( 'mrs-products-grid-style-enqueue', $mrs_attr );
	}
}
