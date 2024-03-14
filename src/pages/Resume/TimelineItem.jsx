

const TimelineItem = ({ title, date,company, description }) => {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{title}</h4>
      <span>{date}</span>
      <p className="timeline-text">{company}</p>
      <p className="timeline-text">{description}</p>
    </li>
  );
}

export default TimelineItem;