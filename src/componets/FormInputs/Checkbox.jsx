import { useState } from 'react';

function Checkbox(props) {
    let [check, setCheck] = useState(false);
    const { label } = props;

    const toggleCheckboxChange = () => {
        let isChecked = !check;
        setCheck(isChecked);
    }

    return(
        <div className="checkbox">
            <label>
                <input
                className="checkbox-input"
                type="checkbox"
                value={label}
                checked={check}
                onChange={toggleCheckboxChange}
                />
                {label}
            </label>
        </div>
    );
}

export default Checkbox;