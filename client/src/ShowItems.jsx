import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default function ShowItems(props) {
  return (
    <>
      <div className="create-item">
        <Link to="/items/new">
          <button>Click here to Add new Item!</button>
        </Link>
      </div>
      <div className="basic-item-map">
        {props.items.map((items) => (
          <React.Fragment key={items.id}>
            {items.user_id == props.currentUser.id && (
              <div className="individual-item">
                <p>
                  {items.item_name} - {items.locationdetails}{" "}
                </p>
                <img className="items-Image" src={items.image_url} />
                <div>
                  <Link to={`/items/${items.id}/edit`}>
                    <button className="Button">Edit</button>
                  </Link>

                  <button
                    className="Button"
                    onClick={() => props.handleItemDelete(items.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
        <br></br>
      </div>
    </>
  );
}
