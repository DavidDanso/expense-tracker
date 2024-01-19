/* eslint-disable react/prop-types */

import "./Card.css";

const Card = ({ title, icon, value, icon_ }) => {
  // Determine if the value is negative
  const isNegativeValue = typeof value !== "number" && value.includes("-");

  // Create class for conditional styling
  const cardSpanStyle = isNegativeValue ? "span--color" : "";

  return (
    <div className="col-md-4">
      <div className="card" id="card--background">
        <div className="card-body">
          <img src={icon} className="card_icons" alt="card_icons" />
          <h2>
            {title}
            <span className={cardSpanStyle}>{value}</span>
          </h2>
          <img
            src={icon_}
            className="base_icons d-flex mx-auto"
            alt="card_icons"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
