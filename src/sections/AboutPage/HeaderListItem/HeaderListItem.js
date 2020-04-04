import React from "react";

export const HeaderListItem = ({ header, list }) => (
  <div>
    <h3>
      <b>{`${header}`}</b>
    </h3>

    {list.map((topic, i) => (
      <p key={i}>
        <span className="highlight">{`• ${topic}`}</span>
      </p>
    ))}
  </div>
);
