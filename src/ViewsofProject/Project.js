import React, { Component } from "react";
import Models from "./Models";
import ListProduct from "./data.json";
import style from "./Project.module.css";
export default class Project extends Component {
  state = {
    sanPham: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      hinhAnh: "./img/v1.png",
      desc:
        " Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  changeGlasses = (sanPham) => {
    this.setState({
      sanPham,
    });
  };
  renderListProduct = () => {
    return ListProduct.map((sanPham, index) => {
      return (
        <img
          onClick={() => {
            this.changeGlasses(sanPham);
          }}
          key="{index}"
          src={sanPham.hinhAnh}
          className={`${style.Items}`}
          style={{ width: "120px", height: "80px" }}
          alt="model"
        />
      );
    });
  };
  render() {
    return (
      <div>
        <Models Glasses={this.state.sanPham} />
        <div className={`${style.ChinhSuaSanPham}`}>
          <div>{this.renderListProduct()}</div>
        </div>
      </div>
    );
  }
}
