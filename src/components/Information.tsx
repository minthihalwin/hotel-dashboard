import React, { useState } from "react";
import { NewHotelType } from "../types/hotel";
import { Link, useNavigate } from "react-router-dom";
import Edit from "./Edit";
import { deleteHotel } from "../lib/controller";

interface IProps {
  hotel: NewHotelType;
  detailsPage?: boolean;
}

function Information({ hotel, detailsPage }: IProps) {


  const [editDescription, setEditDescription] = useState(false);
  const navigate = useNavigate();

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
        {detailsPage ? (
          <>
            <p className="description-text">
              {hotel.description}{" "}
              <strong
                className="edit-text"
                onClick={() => setEditDescription(!editDescription)}
              >
                Edit Description
              </strong>
              {editDescription ? (
                <Edit
                  editDescription={editDescription}
                  setEditDescription={setEditDescription}
                  id={hotel.id}
                />
              ) : null}
            </p>
            <button onClick={() => deleteHotel(hotel.id, navigate)}>
              Delete Hotel
            </button>
          </>
        ) : (
          <Link to={`/hotels/${hotel.id}`}>
            <button className="moreinfo-btn">View More Information</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Information;
