import React from 'react'
import JobBoardFilter from './jobBoardFilter';
import JobAccordion from './JobAccordion';
import Footer from "./DashboardFooter"

function DashboardJobBoard() {
    return (
        <div className="jobBoardLayout">
            <JobBoardFilter />
            <section className="jobsArea">
                <form>
                    <img src="/job-portal/assets/icons/search.svg" alt="" />
                    <input type="text" placeholder="Search by job title or company name" />
                </form>
                <section className="jobLists">
                    <JobAccordion jobTitle="Frontend developer (React.Js)" companyName="Facebook" companyAddress="Pune, India" date="3 days ago" accordionContent={accordionDummyContent} />
                    <JobAccordion jobTitle="Frontend developer (React.Js)" companyName="Facebook" companyAddress="Pune, India" date="3 days ago" accordionContent={accordionDummyContent} />
                    <JobAccordion jobTitle="Frontend developer (React.Js)" companyName="Facebook" companyAddress="Pune, India" date="3 days ago" accordionContent={accordionDummyContent} />
                    <JobAccordion jobTitle="Frontend developer (React.Js)" companyName="Facebook" companyAddress="Pune, India" date="3 days ago" accordionContent={accordionDummyContent} />
                </section>
            </section>
            <Footer />
        </div>
    )
}

const accordionDummyContent = {
    companyBackground: "Platea eget ornare mauris ullamcorper laoreet est etiam volutpat. Aliquet duis tristique vitae, aliquam sem orci semper elit. Et tempus ultricies eu cras. Nibh elit, condimentum faucibus elementum sollicitudin urna parturient facilisis. Volutpat tristique nisi, senectus neque. Lectus leo, diam malesuada id massa lacus. Dignissim ut enim porttitor sit lobortis amet. Nibh pellentesque massa sit in. Vitae tempor ac, cras consectetur eu. Morbi risus, sed vel netus turpis mattis adipiscing nulla. Facilisi enim in blandit nunc.",
    post: "Platea eget ornare mauris ullamcorper laoreet est etiam volutpat. Aliquet duis tristique vitae, aliquam",
    requirements: "Platea eget ornare mauris ullamcorper laoreet est etiam volutpat. Aliquet duis tristique vitae, aliquam"
}

export default DashboardJobBoard

