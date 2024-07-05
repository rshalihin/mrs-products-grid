import { __ } from '@wordpress/i18n';
import Select from 'react-select'; 
import { SelectControl, Button } from '@wordpress/components';
import { useState, useEffect, useRef } from '@wordpress/element';
import { MRSRangeControl } from '../mrsRangControl/MRSRangeControl';
import { TypographyIcon } from '../../controls/svgIcon';
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
    console.log(fontList);

  return (
        <>
        <div className='mrs-typography mrs-components-mb' onClick={() => {typographyOpen && setTypographyOpen(false)}}>
            <div className={`mrs-typography-btn ${typographyOpen ? 'active' : ''}`}>
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
                
            </div>
        </div>
        </>
  )
}

export default MRSTypography