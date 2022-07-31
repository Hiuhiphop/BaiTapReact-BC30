import React, { Component } from "react";
import "../../assets/css/BaiTapThuKinh.css";
import model from "./glassesImage/model.jpg";
import RenderGlasses from "./RenderGlasses";
const glassesData = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "assets/glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "assets/glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "assets/glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "assets/glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "assets/glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "assets/glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "assets/glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "assets/glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "assets/glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];



export default class BaiTapThuKinh extends Component {
  state = {
    glassesModel: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "assets/glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  changeGlasses = (glassesClick) => {
    console.log(glassesClick)
    this.setState({
      glassesModel: glassesClick,
    });
  } 

  RenderGlasses = () => {
    return glassesData.map((glasses, index) => {
      return (
        <div className="img-glasses col-4" key={index}>
          <RenderGlasses glasses={glasses} changeGlasses = {this.changeGlasses}/>
        </div>
      );
    });
  };
  render() {
    let {name, url, desc} = this.state.glassesModel
    return (
      <div className="wrap">
        <header className="header">
          <h3>TRY GLASSES APP ONLINE</h3>
        </header>
        <div className="model">
          <div className="container d-flex justify-content-around">
            <div className="img-left w-25">
              <img src={url} alt="" className="img-glasses" />
              <div className="glasses-info">
                <h3 className="text-start p-2">{name}</h3>
                <p className="text-start px-2">
                  {desc}
                </p>
              </div>
            </div>
            <div className="img-right w-25">
              <img src={model} alt="" className="img-model w-100" />
            </div>
          </div>
        </div>
        <div className="glasses">
          <div className="container">
            <div className="row">{this.RenderGlasses()}</div>
          </div>
        </div>
      </div>
    );
  }
}
