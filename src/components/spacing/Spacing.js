import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useDeviceType } from '../../controls/controls';
import { ResetIcon, SpacingControlIcon, SpacingControlActiveIcon } from '../../controls/svgIcon';
import Responsive from '../responsive/Responsive';
import './editor.scss';

const Spacing = ({ label, attributes, attributesKey, setAttributes, units, linkButton = true, labelItem = {
    'top': __('Top', 'mrs-products-grid'),
    'right': __('Right', 'mrs-products-grid'),
    'bottom': __('Bottom', 'mrs-products-grid'),
    'left': __('Left', 'mrs-products-grid'),
}, defaultValue = { 'unit': 'px', 'value': {
    'top': '0px',
    'right': '0px',
    'bottom': '0px',
    'left': '0px'
}}}) => {

    const deviceType = useDeviceType();
    const SpacingAllChangeIcon = attributes?.allChange ? <SpacingControlActiveIcon /> : <SpacingControlIcon />;
    const value = attributes?.device ? attributes?.device[deviceType] : attributes;
    
    

    const setDefaultValue = () => {
        if ( attributes?.device ) {
            let data = {
                ...attributes?.device[deviceType],
                'top': defaultValue?.value?.top,
                'right': defaultValue?.value?.right,
                'bottom': defaultValue?.value?.bottom,
                'left': defaultValue?.value?.left
            }
            setAttributes({ [attributesKey] : { ...attributes, 'device': { ...attributes?.device, [deviceType] : data }, 'unit': { ...attributes?.unit, [deviceType] : defaultValue.unit }}})
        } else {
            let data = {
                ...attributes,
                'top': defaultValue?.value?.top,
                'right': defaultValue?.value?.right,
                'bottom': defaultValue?.value?.bottom,
                'left': defaultValue?.value?.left
            }
            setAttributes({[attributesKey] : { data , 'unit' : { ...attributes?.unit, [deviceType] : defaultValue.unit }}})
        }
    }

    const setSpacingData = ( newValue, typeKey ) => {
        if ( attributes.device && !attributes.allChange ) {
            setAttributes({ [attributesKey] : {...attributes, 'device': { ...attributes.device, [deviceType] : {...attributes.device[deviceType], [typeKey] : newValue }}}});
        }
        if ( !attributes.device && !attributes.allChange ) {
            setAttributes({ [attributesKey] : {...attributes, [typeKey] : newValue }});
        }
        if ( attributes.device && attributes.allChange ) {
            let data = {
                ...attributes?.device[deviceType],
                'top': newValue,
                'right': newValue,
                'bottom': newValue,
                'left': newValue,
            };
            setAttributes({ [attributesKey] : {...attributes, 'device' : { ...attributes.device, [deviceType] : data }}});
        }
        if ( !attributes.device && attributes.allChange ) {
            let data = {
                ...attributes,
                'top': newValue,
                'right': newValue,
                'bottom': newValue,
                'left': newValue,
            }
            setAttributes({ [attributesKey] : data })
        }
    }

    // Set Unit Function
    const setUnit = (newValue) => {
        setAttributes({ [attributesKey] : { ...attributes, 'unit': { ...attributes?.unit, [deviceType] : newValue.toLowerCase()}}})
    }

    // When the reset button active and not-active.
    const activeResetButton = () => {
        if( defaultValue?.unit !== attributes?.unit || JSON.stringify(defaultValue.value) != JSON.stringify(value) ) {
            return 'active';
        }
        return '';
    }

    return (
        <>
        <div className='mrs-component-spacing mrs-components-mb'>
            <div className='mrs-spacing-part-1'>
                <div className='mrs-header-control'>
                    <div className='mrs-header-control-left'>
                        <label className='mrs-component-title'>{label}</label>
                        { attributes?.device && <Responsive />}
                    </div>
                    <div className='mrs-header-control-right'>
                        <Button onClick={() => setDefaultValue()} className={`mrs-header-control-reset ${activeResetButton()}`}><ResetIcon /></Button>
                        <div className='mrs-units'>
                        <span>{( 'object' !== typeof attributes.unit) ? attributes?.unit : attributes.unit[deviceType]}</span>
                            <div className='mrs-units-btn'>
                                {units?.map(( item, i ) => (
                                    <Button className={attributes?.unit[deviceType] === item.toLowerCase() ? 'active' : ''} key={i} value={item} onClick={(e) => setUnit(e.target.value)}>{item}</Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mrs-spacing-part-2'>
                <div className='mrs-spacing-top'>
                    <input id='mrs-spacing-top' type='number' value={value?.top} onChange={(e)=>setSpacingData(e.target.value, 'top')} />
                    <label htmlFor='mrs-spacing-top'>{labelItem?.top}</label>
                </div>
                <div className='mrs-spacing-right'>
                    <input id='mrs-spacing-right' type='number' value={value?.right} onChange={(e)=>setSpacingData(e.target.value, 'right')} />
                    <label htmlFor='mrs-spacing-right'>{labelItem?.right}</label>
                </div>
                <div className='mrs-spacing-bottom'>
                    <input id='mrs-spacing-bottom' type='number' value={value?.bottom} onChange={(e)=>setSpacingData(e.target.value, 'bottom')} />
                    <label htmlFor='mrs-spacing-bottom'>{labelItem?.bottom}</label>
                </div>
                <div className='mrs-spacing-left'>
                    <input id='mrs-spacing-left' type='number' value={value?.left} onChange={(e)=>setSpacingData(e.target.value, 'left')} />
                    <label htmlFor='mrs-spacing-left'>{labelItem?.left}</label>
                </div>
                {linkButton && <div className='mrs-spacing-all'>
                    <Button className={attributes?.allChange ? 'active' : ''} onClick={() => setAttributes({ [attributesKey] : { ...attributes, 'allChange' : !attributes?.allChange }})}>{SpacingAllChangeIcon}</Button>
                </div>
                }
            </div>
        </div>
        </>
    )

}

export default Spacing;