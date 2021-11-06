import React, { useState, useRef } from 'react'


function AccordionContent(props) {
    const accordion = useRef(null)
    return (
        <div className="accordionContent"
            ref={accordion}
            style={
                props.isActive
                    ? { height: accordion.current.scrollHeight, padding: "10px" }
                    : { height: "0px" }
            }
        >
            <section className="companyBackground">
                <p>Company Background</p>
                <p>{props.companyBackground}</p>
            </section>
            <section className="post">
                <p>Post</p>
                <p>{props.companyPost}</p>
            </section>
            <section className="requirements">
                <p>Requirements</p>
                <p>{props.requirements}</p>
            </section>
        </div>
    )
}

export default function JobAccordion(props) {

    const [isActive, setIsActive] = useState(false);
    function handleClick() {
        setIsActive(!isActive);
    }

    return (
        <>
            <div className="accordion" onClick={handleClick}>
                <img src="job-portal/assets/icons/bxl-facebook-circle.svg" alt="Company Logo" />
                <h2>{props.jobTitle}</h2>
                <h6>{props.companyName}</h6>
                <p className="address">{props.companyAddress}</p>
                <div className="button">

                    <button>
                        <p>Apply</p>
                        <img src="/job-portal/assets/icons/bx-link-external.svg" width="20px" alt="" />
                    </button>
                </div>
                <section className="chips">
                    <p>MERN STACK</p>
                    <p>MERN STACK</p>
                    <p>MERN STACK</p>
                </section>
                <p className="date">{props.date}</p>
            </div>
            <AccordionContent companyBackground={props.accordionContent.companyBackground} companyPost={props.accordionContent.post} requirements={props.accordionContent.requirements} isActive={isActive} setIsActive={setIsActive} />
        </>
    )
}
