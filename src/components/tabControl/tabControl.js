import { TabPanel } from '@wordpress/components';
import './editor.scss';

const TabControl = ({ attributes, setAttributes, GeneralTab = '', StyleTab='', AdvanceTab='' }) => {

    const Tabs = [];
    if(GeneralTab) {
        Tabs.push({
            name: 'general',
            title: <span className='mrs-products-tab-panel-title'>General</span>,
            className: 'mrs-products-general-tab'
        })
    }

    if(StyleTab) {
        Tabs.push({
            name: 'style',
            title: <span className='mrs-products-tab-panel-title'>Style</span>,
            className: 'mrs-products-style-tab'
        })
    }

    if(AdvanceTab) {
        Tabs.push({
            name: 'Advance',
            title: <span className='mrs-products-tab-panel-title'>Advance</span>,
            className: 'mrs-products-advance-tab'
        })
    }

    return(
        <TabPanel
            className={'mrs-products-tab-panel'}
            activeClass={'active-tab'}
            tabs={ Tabs }
        >
            { (tab) => {
                return(
                    <>
                    {
                    (tab.name === 'general') && GeneralTab &&
                        <GeneralTab
                            attributes={attributes}
                            setAttributes={setAttributes}
                        />
                    }
                    {(tab.name === 'style') && StyleTab && 
                        <StyleTab
                            attributes={attributes}
                            setAttributes={setAttributes}
                        />
                    }
                    {(tab.name === 'advance') && AdvanceTab &&
                        <AdvanceTab
                            attributes={attributes}
                            setAttributes={setAttributes}
                        />
                    }
                    </>
                )
            }}
        </TabPanel>
        
    )
}

export default TabControl;