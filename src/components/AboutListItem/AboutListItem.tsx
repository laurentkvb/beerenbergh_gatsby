import React from "react";

interface Props {
  header: any;
  list: string[];
}

const AboutListItem: React.FC<Props> = ({ header, list } : Props) => (
  <div>
    <h3>
      <b>{`${header}`}</b>
    </h3>

    {list.map((topic: string, i: number) => (
      <p key={i}>
        <span className="highlight">{`• ${topic}`}</span>
      </p>
    ))}
  </div>
);

export default AboutListItem;
