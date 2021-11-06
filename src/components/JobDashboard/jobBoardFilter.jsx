import React, { useEffect, useState } from 'react';
import { State, City } from 'country-state-city';

import "./dashboardJobBoard.css";

import DropDown from './dropDown';

function JobBoardFilter() {

    const [selectedJobType, setSelectedJobType] = useState()
    const [selectedState, setSelectedState] = useState();
    const [selectedCity, setSelectedCity] = useState();

    const statesList = State.getStatesOfCountry("IN")


    const [states, setStates] = useState({
        label: [],
        key: [],
    })
    const [cities, setCities] = useState({
        label: [],
        key: [],
    })
    const jobType = {
        label: ["Full-time", "Part-time", "Internship", "Contract", "Others"],
        key: ["FT", "PT", "IS", "CT", "OT"]
    }


    useEffect(() => {
        var stateName = []
        var stateCode = []
        statesList.forEach(element => {
            stateName.push(element.name)
            stateCode.push(element.isoCode)
        });
        setStates({
            label: stateName,
            key: stateCode
        })
    }, [])




    function handleChange(bool) {
        var tempCityList = City.getCitiesOfState("IN", bool)
        console.log("Cities List");
        console.log(selectedState);
        console.log(tempCityList);
        var cityName = [];
        var cityCode = [];
        tempCityList.forEach(element => {
            cityName.push(element.name);
            cityCode.push(element.isoCode);
        });

        setCities({
            label: cityName,
            key: cityCode
        })

    }

    return (
        <div className="filterCard">
            <h4>FILTER</h4>
            <ul>
                <li className="jobType">
                    <p>Job Type</p>
                    <DropDown selected={selectedJobType} setSelected={setSelectedJobType} options={jobType.label} keys={jobType.key} />
                </li>
                <li className="location">
                    <p>Location</p>
                    <div className="state">
                        <p>State</p>
                        <DropDown selected={selectedState} setSelected={setSelectedState} onChanges={handleChange} options={states.label} keys={states.key} />
                    </div>
                    <div className="City">
                        <p>City</p>
                        {
                            cities !== null ? <DropDown selected={selectedCity} setSelected={setSelectedCity} options={cities.label} keys={cities.key} /> : null
                        }

                    </div>
                </li>
            </ul>
        </div>
    )
}

export default JobBoardFilter
