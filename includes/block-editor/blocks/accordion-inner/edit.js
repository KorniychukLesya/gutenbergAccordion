import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

let classNames = require('classnames');

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
  const {content, count, titleinner, toglTexst, controlCount} = attributes;
  let checknumberCount;

     
    checknumberCount = (count) => {
    
      if (!Number.isFinite(+count)) {
        setAttributes( { controlCount: true }  );

        } else {  
          setAttributes( { controlCount: false }  ); 
          setAttributes( { count }  );
        }
 
    }
 
  

	return (
    <div className="accordion" tabindex='-1'>
      <div { ...blockProps }>
        <div className="accordion-back" >
          <div className="accordion-back__content">
            <div>
              <RichText 
                className={classNames('accordion-back__count', { 'accordion-back__count--eror': controlCount })}
                tagName="div" 
                value={ count } 
                onChange={ ( count ) => checknumberCount( count ) } 
                placeholder={ __( '00' ) } 
             
              /> 
            </div>
          <div>
            <RichText
              
              className="accordion-back__title"
              tagName="h3" 
              value={ titleinner } 
              allowedFormats={ [ 'core/bold', 'core/italic' ] }  
              onChange={ ( titleinner ) => setAttributes( { titleinner } ) } 
              placeholder={ __( 'Title' ) } 
            /> 
            {toglTexst && ( 
              
              <RichText
                
                className="accordion-back__text"
                tagName="p" 
                value={ content } 
                allowedFormats={ [ 'core/bold', 'core/link', 'core/italic', 'core/strikethrough', 'core/text-color' ] }  
                onChange={ ( content ) => setAttributes( { content } ) } 
                placeholder={ __( 'Text' ) } 
              />
            )}
          </div>
        </div>
          <div>
            <button
        
              className={classNames('accordion-back__button', { 'accordion-back__button--acive': toglTexst })}
              value={ toglTexst }
              onClick={() => setAttributes(  {toglTexst: !toglTexst}  )}
            >
            </button>  
          </div>
        </div>
      </div>
    </div>
	);
}
