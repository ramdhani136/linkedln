import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsAcricle = (heading, subtile) => (
    <div className="widgets__article">
      <div className="widget__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widget__articleRight">
        <h4>{heading}</h4>
        <p>{subtile}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsAcricle("PAPA React is back", "Top news - 9899 readers")}
      {newsAcricle("React JS fundamental free for everyone!", "Top news - 9898 readers")}
      {newsAcricle("Vue JS is good library", "Top news - 7000 readers")}
      {newsAcricle("Is Redux too good", "Top news - 4000 readers")}
      {newsAcricle("Node JS make with Javascipt", "Top news - 6000 readers")}
      {newsAcricle("Laravel is php framwork", "Top news - 5000 readers")}
    </div>
  );
}

export default Widgets;
