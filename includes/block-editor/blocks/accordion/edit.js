import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks, } from '@wordpress/block-editor';
import './editor.scss';


export default function Edit() {
	const blockProps = useBlockProps();
	return (
		<ul className='accordion-parent'>
			<li { ...blockProps }>			
			<InnerBlocks
			  className='accordion-children'
		      template={ [['gutenaccordion/accordion-inner']] }
		      allowedBlocks={['gutenaccordion/accordion-inner']}
	        />
		 </li>
		</ul>
	);
}
