import { __ } from '@wordpress/i18n';
import Select from 'react-select'; 
import { SelectControl, Button, __experimentalDivider as Divider, ButtonGroup } from '@wordpress/components';
import { useState, useEffect, useRef } from '@wordpress/element';
import MRSRangeControl from '../mrsRangControl/MRSRangeControl';
import { TypographyIcon, DecorationNone, DecorationUnderline, DecorationLineThrough, DecorationOverLine } from '../../controls/svgIcon';
import './editor.scss';

const fontFetch = async () => {
    try {
        const response = await fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCJIzfKoHlACqsmK1zDzl-OAsgtJPk8BtI');
        if ( response.status === 200 ) {
            return response.json();
        }
    } catch (error) {
        console.error( 'Error Fetching google fonts', error );        
    }
}

const MRSTypography = ({attributes, setAttributes, fontSizeDefault={ unit: 'px', value: 16}, spacingDefaultValue={ unit: 'px', value : 0}, lineHeightDefault = { unit : 'px', value : 0} }) => {

    const [ typographyOpen, setTypographyOpen ] = useState(false);
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const [ allFonts, setAllFonts ] = useState([]);
    const [ fontList, setFontList ] = useState([]);
    const onMenuOpen = () => setIsMenuOpen(true);
    const onMenuClose = () => setIsMenuOpen(false);
    const typoBtn = useRef();

    const { family, familyKey, fontSize, fontSizeKey, fontSpacing, fontSpacingKey, lineHeight, lineHeightKey } = attributes;

    const fontSearch = (inputValue) => {
        let googleFonts = allFonts.filter((font)=>{
            return font.label.toLowerCase().includes(inputValue.toLowerCase())
        }).filter((font, i) => (i < 30) && font);
        setFontList(googleFonts);
    }

    useEffect(() => {
        if ( typographyOpen && allFonts.length === 0 ) {
            fontFetch().then((data) => {
                let fonts = data.items.map((item) =>{
                    return { label: item.family, value : { family: item.family, variants: item.variants } };
                })
                setAllFonts(fonts);
                setFontList(fonts.filter((font, i) => (i < 50 ) && font ));
            })
        }
    });


    const fontWCheck = [ '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'];
    const fontW = family?.googleFont?.variants?.map( value => {
        if ( fontWCheck.includes(value) || '100' === value ) {
            return '';
        }
        if ( 'regular' === value ) {
            value = '400';
        }
        return { label: value, value: value }
    })
    
    let fontWeightList = [];
    if ( fontW ) {
        fontWeightList = fontW.filter((item, pos) => {
            return '' !== item;
        })
    }
  return (
        <>
        <div className='mrs-typography mrs-components-mb'>
            <div className={`mrs-typography-btn ${typographyOpen ? 'active' : ''}`} onClick={(e) => {typographyOpen  && setTypographyOpen(false)}}>
                <p className='mrs-component-title'>Typography</p>
                <Button onClick={()=> setTypographyOpen(!typographyOpen)}><TypographyIcon /></Button>
            </div>
            <div className={`mrs-typography-fonts ${typographyOpen ? 'open' : ''}`}>
                <div className='mrs-typography-family mrs-components-mb'>
                    <Select
                        options={[{ label: 'Default', value: { family: 'Default', variants: ['regular']}}, ...fontList]}
                        placeholder={family?.googleFont?.family}
                        onChange={(nextFont) => setAttributes({ [familyKey] : { ...family, 'googleFont': nextFont.value, 'typography': { ...family.typography, 'family' : ( 'Default' !== nextFont?.value?.family) ? nextFont?.value?.family : '', 'fontWeight': ('regular' === nextFont?.value?.variants[0]) ? '400' : nextFont?.value?.variants[0]}} })}
                        onInputChange={(inputValue) => fontSearch(inputValue) }
                    />
                </div>
                <MRSRangeControl
                    label={__('Font Size', 'mrs-products-grid')}
                    attributes={fontSize}
                    attributesKey={fontSizeKey}
                    setAttributes={setAttributes}
                    units={['px', 'em', 'rem']}
                    defaultValue={fontSizeDefault}
                />
                <Divider />
                <SelectControl
                    label={__('Font Style', 'mrs-products-grid')}
                    value={family.typography.style}
                    options={[
                        { label: 'Default', value: 'default', disabled: true},
                        { label: 'Normal', value: 'normal' },
                        { label: 'Italic', value: 'italic' },
                        { label: 'Oblique', value: 'oblique' }
                    ]}
                    onChange={(newStyle) => setAttributes({ [familyKey]: {...family, 'typography': {...family.typography, 'style': newStyle } } })}
                />
                <SelectControl
                    label={__('Font Weight', 'mrs-products-grid')}
                    value={family.typography.fontWeight}
                    options={fontWeightList}
                    onChange={(newFontWeight) => setAttributes({ [familyKey]: {...family, 'typography': {...family.typography, 'fontWeight': newFontWeight }} })}
                />
                <Divider />
                <MRSRangeControl
                    label={__('Title Later Spacing', 'mrs-products-grid')}
                    attributes= {fontSpacing}
                    attributesKey={fontSpacingKey}
                    setAttributes={setAttributes}
                    defaultValue={spacingDefaultValue}
                    units={['px', 'em', 'rem']}
                />
                <Divider />
                <MRSRangeControl
                    label={__('Line Height', 'mrs-products-grid')}
                    attributes={lineHeight}
                    attributesKey={lineHeightKey}
                    setAttributes={setAttributes}
                    units={['px', 'em', 'rem']}
                    defaultValue={lineHeightDefault}
                />
                <Divider />
                <div className='typography-btn-group-label'>Text Decoration</div>
                <ButtonGroup className='mrs-products-btn-group'>
                    <Button className={`mrs-products-btn ${family?.typography?.decoration === 'none' ? 'is-active' : ''}`}
                    onClick={()=> setAttributes({[familyKey]: {...family, 'typography': {...family.typography, 'decoration': 'none'}}})}><DecorationNone /></Button>

                    <Button className={`mrs-products-btn ${family?.typography?.decoration === 'underline' ? 'is-active' : ''}`}onClick={()=> setAttributes({[familyKey]: {...family, 'typography': {...family.typography, 'decoration': 'underline'}}})}><DecorationUnderline /></Button>

                    <Button className={`mrs-products-btn ${family?.typography?.decoration === 'line-through' ? 'is-active' : ''}`}onClick={()=> setAttributes({[familyKey]: {...family, 'typography': {...family.typography, 'decoration': 'line-through'}}})}><DecorationLineThrough /></Button>

                    <Button className={`mrs-products-btn ${family?.typography?.decoration === 'overline' ? 'is-active' : ''}`}onClick={()=> setAttributes({[familyKey]: {...family, 'typography': {...family.typography, 'decoration': 'overline'}}})}><DecorationOverLine /></Button>
                </ButtonGroup>
                <Divider />
                <div className='typography-btn-group-label'>Latter Case</div>
                <ButtonGroup className='mrs-products-btn-group'>
                    <Button className={`mrs-products-btn ${family?.typography?.transform === 'none' ? 'is-active' : ''}`} onClick={()=> setAttributes({[familyKey]: {...family, 'typography': {...family.typography, 'transform': 'none'}}})}>None</Button>
                    <Button className={`mrs-products-btn ${family?.typography?.transform === 'uppercase' ? 'is-active' : ''}`} onClick={()=> setAttributes({[familyKey]: {...family, 'typography': {...family.typography, 'transform': 'uppercase'}}})}>AB</Button>
                    <Button className={`mrs-products-btn ${family?.typography?.transform === 'lowercase' ? 'is-active' : ''}`} onClick={()=> setAttributes({[familyKey]: {...family, 'typography': {...family.typography, 'transform': 'lowercase'}}})}>ab</Button>
                    <Button className={`mrs-products-btn ${family?.typography?.transform === 'capitalize' ? 'is-active' : ''}`} onClick={()=> setAttributes({[familyKey]: {...family, 'typography': {...family.typography, 'transform': 'capitalize'}}})}>Ab</Button>
                </ButtonGroup>
                
                
            </div>
        </div>
        </>
  )
}

export default MRSTypography