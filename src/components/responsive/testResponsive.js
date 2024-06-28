import { useDeviceType } from "../../controls/controlsTest";
import { dispatch } from "@wordpress/data";
import { DesktopIcon, TabletIcon, MobileIcon } from "../../controls/svgIcon";
import { Button } from "@wordpress/components";


const TestResponsive = () => {

    const device = (e) => {
        const canvas = document.getElementsByClassName('edit-site-visual-editor__editor-canvas');
        if( canvas.length > 0 ) {
            dispatch('core/editor').setDeviceType(e.target.closest('button').value);
        }else{
            dispatch('core/edit-post').__experimentalSetPreviewDeviceType(e.target.closest('button').value);
        }
    }

    const deviceType = useDeviceType();

    const DeviceIcon = () => {
        if( 'Desktop' === deviceType ) {
            return <DesktopIcon />
        }
        if( 'Tablet' === deviceType ) {
            return <TabletIcon />
        }
        if( 'Mobile' === deviceType ) {
            return <MobileIcon />
        }
    }

    return (
        <>
        <div className="mrs-responsive">
            <div className="mrs-responsive-units">
                <span><DeviceIcon /></span>
                <div className="mrs-responsive-units-btn" style={{display: "flex"}}>
                    <Button className={('Desktop' === deviceType) ? 'active' : '' } value={'Desktop'} onClick={device}><DesktopIcon /></Button>
                    <Button className={('Tablet' === deviceType) ? 'active' : '' } value={'Tablet'} onClick={device}><TabletIcon /></Button>
                    <Button className={('Mobile' === deviceType) ? 'active' : '' } value={'Mobile'} onClick={device}><MobileIcon /></Button>
                </div>
            </div>
        </div>
        </>
    )
}
