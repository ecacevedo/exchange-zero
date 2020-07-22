import React from "react";
import "./App.css";

export default function ShowBasicItems(props) {
  return (
    <div className="basic-item-map">
      {props.items.map((items) => (
        <React.Fragment key={items.id}>
          <div className="individual-item">
            <p>
              {items.item_name} - {items.locationdetails}{" "}
            </p>
            <img className="items-Image" src={items.image_url} />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
