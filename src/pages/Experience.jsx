import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";

function Experience() {
  return (
    <div className="experience">
        <VerticalTimeline lineColor="#3e497a">
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="1992 - 2003"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                    US Marines
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Infantry, Security Forces
                </h4>
                <p>Iceland, Africa, Europe</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="1997 - 2016"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                    Law Enforcement Career
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Special Agent-Investigator
                </h4>
                <p>Florida, South Carolina, Afghanistan</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="05/2019 - 05/2021"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                    Florida State College Jacksonville
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    AS Computer Science- with honors
                </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="05/2021 - 11/2022"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<SchoolIcon />}
            >
                <h4 className="vertical-timeline-element-title">
                    Bloom Institute of Techonology (Formerly Lambda School)
                </h4>
                <h4 className="vertical-timeline-element-title">
                    Full Stack Web Cooding Bootcamp
                </h4>
                <h4 className="vertical-timeline-element-subtitle">
                    Graduated with diploma
                </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="11/2021 - 10/2022"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                    Junior Software Engineer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    NLP Logix: Jacksonville, FL
                </h4>
                <h4 className="vertical-timeline-element-subtitle">
                    Stand Up for Students (SUFS)
                </h4>
                <p>Large multi-state educational platform in .NET/C#</p>
                <p>Client support/db management</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="10/2022 - 01/2024"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                    Junior Software Engineer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    ACS Technologies: remote
                </h4>
                <h4 className="vertical-timeline-element-subtitle">
                    PocketPlatform Mobile App
                </h4>
                <p>
                    Built and customized Android and iOS mobile apps 
                    from a core repo using React Native, xCode, Android Studio
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Experience