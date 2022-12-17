<?php
/**
 * Plugin Name:       gutenaccordion
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Lesya Korniyhuk

 * License URI:       https://github.com/KorniychukLesya?tab=repositories
 * Text Domain:       example-plugin
 *
 * @package           create-block
 */


function create_gutenaccordion_plugin_block_init() {

	$blocks = array(
		'accordion',
		'accordion-inner'		
	);

	foreach ( $blocks as $block ) {
		$callback = str_replace( '-', '_', $block );
		register_block_type(
			plugin_dir_path( __FILE__ ) . 'includes/block-editor/blocks/' . $block . '/',
			array( 'render_callback' => "render_{$callback }_block" )
		);
	}

	wp_enqueue_script(
		'accordion-script',
		plugin_dir_url(__FILE__) . '/assets/script.js',
		array(),
		'1.0.0',
		true
	);
}
add_action( 'init', 'create_gutenaccordion_plugin_block_init' );

function render_accordion_block($attributes, $inner_block_content, $block) {
	
	ob_start();
	?>
		<?php echo wp_kses_post($inner_block_content) ?>
	<?php
 return ob_get_clean();	
}

function render_accordion_inner_block( $attributes, $content, $block ) {
	$count   = isset( $attributes['count'] ) ? $attributes['count'] : '';
	$title   = isset( $attributes['titleinner'] ) ? $attributes['titleinner'] : '';
	$content = isset( $attributes['content'] ) ? $attributes['content'] : '';

	ob_start();

	?>
	<div class="accordion-front">
		<div class="accordion-front__content" >
		   <div class="accordion-front__count"><?php echo esc_html( $count );?></div>
		   <div>
		      <h3 class="accordion-front__title"><?php echo esc_html( $title );?></h3>
			  <div class="accordion-front__text">
			    <p class="accordion-front__text-item"><?php echo wp_kses_post( $content ); ?> </p>
			  </div>
  	          
		   </div>
		   
		</div>
		<div>
		  <button class="accordion-front__button" ></button>	
		</div>	
		
	</div>
	
	<?php
	
	return ob_get_clean();
}