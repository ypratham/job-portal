import React, { useState, useRef, useEffect } from 'react'
import "./dashboardJobBoard.css"
function DropDown({ selected, setSelected, onChanges, options, keys }) {

    const [isActive, setIsActive] = useState(false);
    const [optionSelected, setOptionSelected] = useState("")
    const [query, setQuery] = useState("")
    const ref = useRef(null)

    function filter(options) {
        return options.filter(
            (option) => option.toLowerCase().indexOf(query.toLowerCase()) > -1
        );
    }

    useEffect(() => {
        document.addEventListener("click", close);
        return () => document.removeEventListener("click", close)
    }, [])

    function close(e) {
        setIsActive(e && e.target === ref.current)
    }

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => { setIsActive(!isActive); }}>
                <input type="text" placeholder={selected} value={!isActive ? optionSelected : query} ref={ref}
                    onChange={e => {
                        setSelected(null)
                        setQuery(e.target.value)
                    }}
                    onClick={e => {
                        setIsActive(!isActive)
                    }}
                />
                <img onClick={(e) => { setIsActive(!isActive); }} src="/job-portal/assets/icons/bx-chevron-down.svg" alt="" />
            </div>

            {/* TODO: There is issue with the array indexing,
                When we search then the array key is not updating
                Need to fix this
                
                Check filter function and more */}
            {isActive && (
                <div className="dropdown-content">
                    {
                        filter(options).map((option, index) => {
                            return (
                                <div key={index} onClick={e => {
                                    setSelected(keys[index])
                                    setOptionSelected(option)
                                    setIsActive(false)
                                    if (onChanges) {
                                        onChanges(keys[index])
                                        console.log(keys[index])
                                    }
                                }} className="dropdown-item" > {option}</div>
                            )
                        })
                    }
                </div>
            )}
        </div>
    )
}

export default DropDown
