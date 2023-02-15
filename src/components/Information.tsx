import React from "react";
import { NewHotelType } from "../types/hotel";
import { Link } from "react-router-dom";

interface IProps {
  hotel: NewHotelType;
  detailsPage?: boolean;
}

function Information({ hotel, detailsPage }: IProps) {
  console.log(hotel, "hotel");
  return (
    <div className="hotel-preview">
      <div className="image-container">
        <img src={hotel.location} alt="Hotel" className="location-image" />
        <div className="highlights">
          <div className="hightlights-text">
            <h2>{hotel.title}</h2>
            <p className="region">{hotel.region}</p>
          </div>
          <div className="hightlights-price">
            <h2 className="per-night">${hotel.perNight}</h2>
            <p>per night</p>
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="description">
        <span className="reviews">
          <strong className="review-number">{hotel.stars}</strong>(based on{" "}
          {hotel.review}reviews)
        </span>
        <hr />
        <span className="feature">Main Feature: {hotel?.feature}</span>
        <Link to={`/hotels/${hotel.id}`}>
          <button className="moreinfo-btn">View More Information</button>
        </Link>
      </div>
    </div>
  );
}

export default Information;
