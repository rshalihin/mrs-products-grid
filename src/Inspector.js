import { InspectorControls } from '@wordpress/block-editor';
import GeneralTab from './GeneralTab';
import StyleTab from './StyleTab';
import AdvanceTab from './AdvanceTab';
import TabControl from './components/tabControl/tabControl';

const Inspector = ({attributes, setAttributes}) => {
    return(
        <InspectorControls>
            <TabControl
                GeneralTab={GeneralTab}
                StyleTab={StyleTab}
                AdvanceTab={AdvanceTab}
                attributes={attributes}
                setAttributes={setAttributes}
            />
        </InspectorControls>
    );
}

export default Inspector;