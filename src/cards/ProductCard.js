import React, { Component } from 'react';

class ProductCard extends Component {
  
  render() {
   
    const { name, year, thumbnail, id } = this.props;
    const clickFunction = (id) => {
      //redirect to project-detail page
      window.location.href = `/project-detail/${id}`;
    };

    return (
      <div className="work-item" onClick={() => clickFunction(id)}>
        <img src={thumbnail} alt="work" />
        <div className="work-item-content">
          <h3>{name}</h3>
          <span>{year}</span>
        </div>
      </div>
    );
  }
}

export default ProductCard;
