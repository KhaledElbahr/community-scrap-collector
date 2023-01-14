import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import "./formControl.css";

function FormSelect(props) {
    const [zone, setZone] = useState([]);

    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const cities = [
        {
            value: 'Cairo', zones: ['one', 'dfdfs'],
        },
        {
            value: 'Alexandria', zones: ['two', 'érfvr'],
        },
        {
            value: 'Giza', zones: ['three', 'ththt'],
        },
        {
            value: 'Kafr al-Sheikh', zones: ['four', 'thtjhy']
        },
    ];

    const handleZoneChange = (e) => {
        let cityInd = e.target.value;
        let selectedZones = cities.filter((city, i) => {
            return i === (+cityInd) ? true : false;
        });
        setZone(selectedZones[0].zonested);
        onChange(e);
    }

    return (
    <div className="form-group">
        {inputProps.name === 'city' ?
        (
            <>
            <label>{label}</label>
            <Form.Select {...inputProps} onChange={(e) => handleZoneChange(e)}>
            {cities.map((city, i) => (
                <option key={i} value={i}>{city.value}</option>
            ))}
            </Form.Select>
            </>
        )
        :
        (
            <>
            <label>{label}</label>
            <Form.Select {...inputProps} onChange={onChange}>
              {zone.map((z, i) => (
                    <option key={i} value={i}>{z}</option>
                ))}
            </Form.Select>
            </>
        )
        }
    </div>
    )
};

export default FormSelect;