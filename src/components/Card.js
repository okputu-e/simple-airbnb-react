import React from "react";

function Card(props) {
  let badgeText;
  if (props.openspot === 0) {
    badgeText = "SOLD OUT";
  } else {
    badgeText = props.location;
  }
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <div className="image-container">
        <img src={`../images/${props.img}`} alt="" className="card-image" />
      </div>

      <div className="content-container">
        <div className="card-stats">
          <img src="../images/Star.png" alt="" className="stats-star" />
          <span> {props.rating} </span>
          <span className="grey"> ({props.reviewCount}). </span>
          <span className="grey"> {props.location} </span>
        </div>

        <div className="card-details">
          <p>{props.title}</p>
          <p>
            <span className="bold">From ${props.price} </span> / person
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
