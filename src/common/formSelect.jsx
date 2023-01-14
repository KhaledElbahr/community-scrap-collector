import { useState, useEffect, useCallback } from 'react';
import Form from 'react-bootstrap/Form';
import "./formControl.css";
import { Select, Page, setOptions, localeAr } from '@mobiscroll/react';

function FormSelect(props) {    
    setOptions({
        locale: localeAr,
        theme: 'ios',
        themeVariant: 'light'
    });

    const regions = [
        { value: 'reg-1', text: 'Northeast' },
        { value: 'reg-2', text: 'Midwest' },
        { value: 'reg-3', text: 'South' },
        { value: 'reg-4', text: 'West' }
    ];
    const divisions = {
        'reg-1': [
            { value: 'div-1', text: 'New England' },
            { value: 'div-2', text: 'Mid-Atlantic' }
        ],
        'reg-2': [
            { value: 'div-3', text: 'East North Central' },
            { value: 'div-4', text: 'West North Central' }
        ],
        'reg-3': [
            { value: 'div-5', text: 'South Atlantic' },
            { value: 'div-6', text: 'East South Central' },
            { value: 'div-7', text: 'West South Central' }
        ],
        'reg-4': [
            { value: 'div-8', text: 'Mountain' },
            { value: 'div-9', text: 'Pacific' }
        ]
    };
    
    const [divDisabled, setDivDisabled] = useState(true);
    const [subDisabled, setSubDisabled] = useState(true);
    const [divData, setDivData] = useState([]);
    const [subData, setSubData] = useState([]);
    
    const inputProps = {
        placeholder: 'Please select...'
    };

    const getData = useCallback((region, division) => {
        let arr = [];
        
        if (region) {
            arr = divisions[region];
        } else {
            arr = regions;
        }
        return arr;
    }, []);

    const regChange = useCallback((event) => {
        setDivData(getData(event.value, null));
        setDivDisabled(false);
        setSubDisabled(true);
    }, [getData]);

    const divChange = useCallback((event) => {
        const val = event.value;
        if (val) {
            setSubData(getData(null, event.value));
            setSubDisabled(false);
        } else {
            setSubData([]);
            setSubDisabled(true);
        }
    }, [getData]);




    // const [city, setCity] = useState({});

    // const { label, errorMessage, onChange, id, ...inputProps } = props;

    // const cities = [
    //     {
    //         value: 'Cairo', zones: ['one', 'dfdfs'],
    //     },
    //     {
    //         value: 'Alexandria', zones: ['two', 'érfvr'],
    //     },
    //     {
    //         value: 'Giza', zones: ['three', 'ththt'],
    //     },
    //     {
    //         value: 'Kafr al-Sheikh', zones: ['four', 'thtjhy']
    //     },
    // ];

    // const zones = [
    //     {  }
    //     ['one', 'dfdfs'],
    //     ['two', 'érfvr'],
    //     ['three', 'ththt'],
    //     ['four', 'thtjhy']
    // ];

    // const handleZoneChange = (e) => {
    //     let cityInd = e.target.value;
    //     console.log(cityInd);
    //     let selectedZones = cities.filter((city, i) => {
    //         return i === (+cityInd) ? true : false;
    //     });
    //     console.log(selectedZones[0]);
    //     setCity(selectedZones[0]);
    //     onChange(e);
    // }
    // console.log(city.zones);

    return (
        <>
    {/* // <div className="form-group"> */}
            {/* {inputProps.name === 'city' ?
        (
            <Form.Select {...inputProps} onChange={(e) => handleZoneChange(e)}>
            {cities.map((city, i) => (
                <option key={i} value={i}>{city.value}</option>
            ))}
            </Form.Select>
        )
        :
        (
            <Form.Select {...inputProps} onChange={onChange}>
              {city.zones.map((zone, i) => (
                    <option key={i} value={i}>{zone}</option>
                ))}
            </Form.Select>
        )
        } */}
    {/* // </div> */}
    <Page>
    <div className="mbsc-grid mbsc-grid-fixed mbsc-no-padding">
        <div className="mbsc-row">
            <div className="mbsc-col-sm-12">
                <div className="mbsc-form-group-inset">
                            <Select
                                data={getData(null, null)}
                                touchUi={false}
                                label="Region"
                                inputProps={inputProps}
                                onChange={regChange}
                            />
                            <Select
                                data={divData}
                                touchUi={false}
                                disabled={divDisabled}
                                label="Division"
                                inputProps={inputProps}
                                onChange={divChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Page>
        </>
    )
}

export default FormSelect;