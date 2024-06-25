import { ToggleControl } from "@wordpress/components";
import "./MRSToggle.scss";

const MRSToggle = ({ label, attributes, setAttributes, attributesKey }) => {
  return (
    <div className="mrs-products-toggle">
        <ToggleControl
            label={label}
            checked={attributes}
            onChange={() => setAttributes({ [attributesKey] : ! attributes })}
        />
    </div>
  )
}

export default MRSToggle;