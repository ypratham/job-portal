import React from 'react';

function DashboardHeader(props) {

    function changeToHome() {

        props.changeDashboard("home");

    }

    function changeToJobBoard() {
        props.changeDashboard("jobBoard")
    }

    return (
        <header className="dashboardHeader">
            <ul>
                <li className="title">
                    <h1>PobWork</h1>
                </li>
                <li className="navigation">
                    <ul>
                        <li onClick={changeToHome}>
                            <img src="job-portal/assets/icons/bx-home.svg" alt="" width="32px" />
                            <p>Home</p>
                        </li>
                        <li onClick={changeToJobBoard}>
                            <img src="job-portal/assets/icons/bx-tv.svg" alt="" width="32px" />
                            <p>Job Board</p>
                        </li>
                    </ul>
                </li>
                <li className="notification">
                    <img src="job-portal/assets/icons/bx-bell.svg" alt="Notifications" width="32px" />
                </li>
                <li className="userProfile">
                    <p>PY</p>
                    <img src="job-portal/assets/icons/bx-chevron-down.svg" alt="home-icon" />
                </li>
            </ul>
        </header>
    )
}

export default DashboardHeader
