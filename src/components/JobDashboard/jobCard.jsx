import React from 'react'
import './dashboardHome.css'

function JobCard(props) {
    return (
        <div className="jobCardsLayout">
            <h6>{props.cardTitle}</h6>
            <p className="companyName">{props.jobCompany}</p>
            <p className="jobAddress">{props.jobAddress}</p>
            <button>
                Read more...
            </button>
            <p className="postedOn">{props.date}</p>

        </div>
    )
}

export default JobCard
