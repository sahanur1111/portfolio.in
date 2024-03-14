import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Jadavpur University"
            date="2021 — 2025"
            description="Bachelor of Engineering."
          />
          <TimelineItem
            title="Higher Secondary (WBCHSE)"
            date="2019-2021"
            description="Ujirpur High School,(Sceince) WB."
          />
          <TimelineItem
            title="Secondary (WBBSE)"
            date="2019"
            description="Bhagaldigh High School,WB"
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Advanced Software Engineering Virtual Experience Program"
            company="Walmart Global Tech"
            date="Over the period of May 2023"
            description="Advanced Data Structures Software Architecture Rela tional Database Design Data Munging"
          />
          <TimelineItem
            title="Web Development and Designing"
            company="Oasis Infobyte"
            date="May 2023 onwards"
            description="Front-end web development and Worked on the Design and Development part of a fully responsive web- page."
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="C++" value={85} />
          <SkillItem title="DSA" value={80} />
          <SkillItem title="javaScript" value={75} />
          <SkillItem title="HTML" value={80} />
          <SkillItem title="CSS" value={75} />
          <SkillItem title="Tailwind" value={90} />
          <SkillItem title="React" value={75} />
          <SkillItem title="Redux" value={75} />
          <SkillItem title="MongoDB" value={80} />
          <SkillItem title="Node.js" value={75} />
          <SkillItem title="Express" value={75} />
          <SkillItem title="MySQL" value={80} />
          <SkillItem title="Firebase" value={60} />
          <SkillItem title="OOPs" value={60} />
          <SkillItem title="DBMS" value={60} />
          <SkillItem title="Operating System" value={60} />
          <SkillItem title="Git" value={60} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
