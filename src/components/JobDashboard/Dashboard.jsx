import React, { useState } from 'react'
import './dashboard.css'
import Header from './DashboardHeader'
import Footer from './DashboardFooter'
import Home from './DashboardHome'
import JobBoard from './DashboardJobBoard'

function Dashboard() {
    const [HomeIsVisible, setHomeIsVisible] = useState(true)

    function changeDashboard(type) {
        if (type === "home") setHomeIsVisible(true);
        else if (type === "jobBoard") setHomeIsVisible(false);
    }

    return (
        <div className="dashboardLayout">
            <Header changeDashboard={changeDashboard} />
            <div className="main">
                {HomeIsVisible ? <Home /> : <JobBoard />}
            </div>
            <Footer />
        </div>
    )
}
export default Dashboard
