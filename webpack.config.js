const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
module.exports = {
	...defaultConfig,
	entry: {
		'accordion': './includes/block-editor/blocks/accordion',
		'accordion-inner': './includes/block-editor/blocks/accordion-inner',
	},
};
