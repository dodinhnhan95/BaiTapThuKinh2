import React, { Component } from "react";
import style from "./Project.module.css";
import ListProduct from "./data.json";
export default class Models extends Component {
  render() {
    return (
      <div>
        <div className={`${style.ModelsEdit}`}>
          <div
            className={`${style.ketQua}`}
            style={{
              backgroundImage: "url(./img/model.jpg)",
              width: "350px",
              height: "400px",
              backgroundSize: "cover",
            }}
          >
            <div className={`${style.text}`}>
              <h3 style={{ color: "blue" }}>{this.props.Glasses.name}</h3>
              <p style={{ color: "white" }}>{this.props.Glasses.desc}</p>
            </div>
            <div className={`${style.kinhThu}`}>
              <img
                src={this.props.Glasses.hinhAnh}
                style={{ width: "200px", height: "80px" }}
                alt="model"
              />
            </div>
          </div>

          <img
            src="./img/model.jpg"
            className=""
            style={{ width: "350px", height: "400px" }}
            alt="model"
          />
        </div>
      </div>
    );
  }
}
