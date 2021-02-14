import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./Widget.css";

function Widget() {
  const newsArticle = (heading, subtitle) => (
    <div className="widget__article">
      <div className="widget__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widget__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widget">
      <div className="widget__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Google got down", "Top news - 505 readers")}
      {newsArticle("Corona virus", "Top news - 505 readers")}
      {newsArticle("React", "Top news - 505 readers")}
      {newsArticle("Datascience", "Top news - 505 readers")}
    </div>
  );
}

export default Widget;
