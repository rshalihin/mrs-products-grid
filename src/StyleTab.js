import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl, SelectControl } from '@wordpress/components';

const StyleTab = ({attributes, setAttributes}) => {
    const { postsPerPage, orderBy, order, productsColumn } = attributes;
    return(
        <>
        <PanelBody title={__('Layout Settings', 'mrs-products-grid')} initialOpen={true}>
            <p>Style Tab</p>
        </PanelBody>		
        </>
    );
}

export default StyleTab;