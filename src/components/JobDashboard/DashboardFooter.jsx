import React, { useState, useEffect } from 'react'
import './DashboardFooter.css'

function DashboardFooter() {

    const [year, setYear] = useState(null);

    useEffect(() => {
        var currentYear = new Date().getFullYear();

        setYear(currentYear);
    }, [])

    return (
        <footer>
            <ul>
                <li>
                    <ul>
                        <li>About</li>
                        <li className="githubLink">GitHub</li>
                        <li>Developers</li>
                    </ul>
                </li>
                <li className="privacyLink">Privacy & Policy</li>
                <li>Terms & Condition</li>
                <li className="copyright">PDC © {year}</li>
            </ul>
        </footer>
    )
}

export default DashboardFooter
