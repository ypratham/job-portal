import React from 'react';
import './dashboardHome.css'

import Carousel from 'react-elastic-carousel';
import JobCard from './jobCard';


function DashboardHome() {

    const breakpoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ]

    return (
        <main className="homeDashboardLayout">
            <section className="recommendJobLayout">
                <h2>Recommended Jobs</h2>

                <Carousel breakPoints={breakpoints}>

                    {
                        jobCard.map((element, key) => {
                            return (

                                <JobCard key={key} cardTitle={element.title} jobCompany={element.company} jobAddress={element.address} date={element.datePosted} />

                            )

                        })
                    }
                </Carousel>
            </section>

            <section className="utilityCard">
                <ul>
                    <li>
                        <img className="thumbsUp" width="34px" src="/job-portal/assets/icons/bx-like.svg" alt="" />
                        <p className="cardTitle">Job Applied</p>
                        <p className="cardInfo">2</p>
                    </li>
                    <li>
                        <img className="savedJobs" width="34px" src="/job-portal/assets/icons/bx-save.svg" alt="" />
                        <p className="cardTitle">Job Saved</p>
                        <p className="cardInfo">2</p>
                    </li>
                    <li>
                        <img className="drafts" width="34px" src="/job-portal/assets/icons/bx-note.svg" alt="" />
                        <p className="cardTitle">Drafts</p>
                        <p className="cardInfo">2</p>
                    </li>
                </ul>
            </section>
        </main>
    )
}

var jobCard = [
    {
        "title": "React frontend developer",
        "company": "Google",
        "address": "Bangalore, India",
        "datePosted": "2 days ago"
    }, {
        "title": "React frontend developer",
        "company": "Google",
        "address": "Bangalore, India",
        "datePosted": "2 days ago"
    }, {
        "title": "React frontend developer",
        "company": "Google",
        "address": "Bangalore, India",
        "datePosted": "2 days ago ago"
    }, {
        "title": "React frontend developer",
        "company": "Google",
        "address": "Bangalore, India",
        "datePosted": "2 days ago"
    }, {
        "title": "React frontend developer",
        "company": "Google",
        "address": "Bangalore, India",
        "datePosted": "2 days ago"
    }, {
        "title": "React frontend developer",
        "company": "Google",
        "address": "Bangalore, India",
        "datePosted": "2 days ago"
    }, {
        "title": "React frontend developer",
        "company": "Google",
        "address": "Bangalore, India",
        "datePosted": "2 days ago"
    }, {
        "title": "React frontend developer",
        "company": "Google",
        "address": "Bangalore, India",
        "datePosted": "2 days ago"
    }, {
        "title": "React frontend developer",
        "company": "Google",
        "address": "Bangalore, India",
        "datePosted": "2 days ago"
    }, {
        "title": "React frontend developer",
        "company": "Google",
        "address": "Bangalore, India",
        "datePosted": "2 days ago"
    }
]
export default DashboardHome
