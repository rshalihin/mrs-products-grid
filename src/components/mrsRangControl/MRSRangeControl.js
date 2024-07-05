import {__} from '@wordpress/i18n';
import { RadioControl, SelectControl, Button, RangeControl } from '@wordpress/components';
import { useDeviceType } from '../../controls/controls';
import { ResetIcon } from '../../controls/svgIcon';
import './editor.scss';
import Responsive from '../responsive/Responsive';

const MRSRangeControl = (props) => {

    const { label, attributes, attributesKey, setAttributes, units, min = 0, max = 100, step = 1, defaultValue = { unit: 'px', value: 10 } } = props;

    const deviceType = useDeviceType();
    const value = attributes?.device ? attributes?.device[deviceType] : attributes?.value;

    const setDefault = () => {
        if ( attributes.device ) {
            setAttributes({ [attributesKey] : {...attributes, 'device' : { ...attributes.device, [deviceType] : defaultValue.value }, 'unit' : { ...attributes.unit, [deviceType] : defaultValue.unit } }});
        }
        if ( 'number' === attributes.value ) {
            setAttributes({ [attributesKey] : { ...attributes, 'value': defaultValue.value, 'unit' : defaultValue.value } });
        }
    }

    const setNewValue = (newValue) => {
        if ( attributes.device ) {
            setAttributes({[attributesKey] : {...attributes, 'device' : { ...attributes.device, [deviceType] : newValue } } });
        }
        if ( 'number' === typeof attributes.value ) {
            setAttributes({ [attributesKey] : {...attributes, 'value' : newValue } });
        }
    }
    
    const setUnit = (newValue) => {
        setAttributes({ [attributesKey] : {...attributes, 'unit': {...attributes.unit, [deviceType] : newValue.toLowerCase()}}});
    }

  return (
    <>
    <div className='mrs-range-control mrs-component-mb'>
        <div className='mrs-range-control-part-1'>
            <div className='mrs-header-control'>
                <div className='mrs-header-control-left'>
                    <label className='mrs-ranger-title'>{label}</label>
                    {attributes.device && <Responsive />}
                </div>
                <div className='mrs-header-control-right'>
                    <Button className='mrs-header-control-reset' onClick={() => setDefault()}><ResetIcon /></Button>
                   {units && <div className='mrs-units'>
                        <span>{ ('object' !== typeof attributes.unit) ? attributes.unit : attributes.unit[deviceType] }</span>
                        <span className='mrs-units-btn'>
                            { units && units.map((item, i) => 
                            <Button className={`${attributes.unit[deviceType] === item.toLowerCase() ? 'active' : ''}`} key={i} value={item} onClick={(e)=> setUnit(e.target.value)}>{item}</Button>
                            )}
                        </span>
                    </div>
                    }
                </div>
            </div>
        </div>
        <div className='mrs-range-control-part-1'>
            <RangeControl
                min={min}
                max={( 'object' === attributes.unit && '%' === attributes?.unit[deviceType] ) ? 100 : max }
                step={step}
                onChange={ (newValue) => setNewValue(newValue) }
                value={value}
            />
        </div>
    </div>
    </>    
  )
}

export default MRSRangeControl