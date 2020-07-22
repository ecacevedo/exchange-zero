import React, { Component } from "react";

export default class CategoryPage extends Component {
  state = {
    oneCategory: null,
  };

  componentDidMount = () => {
    const oneCategory = this.props.categories.find(
      (category) =>
      category.id === parseInt(this.props.match.params.id)
    );
    this.setState({ oneCategory });
  };

  render() {
    return (
      <>
        {" "}
        {this.state.oneCategory && (
          <div>
            {this.state.oneCategory.items.map((item) => (
              <div
                className="individual-item">
                <p>
                  {item.item_name} - {item.locationdetails}
                </p>
                <img c
                  lassName="items-Image"
                  src={item.image_url} />
              </div>
            ))}
          </div>
        )}
      </>
    );
  }
}
