import React, { Component } from "react";
import "./App.css";
import ReadMoreReact from 'read-more-react';

class Detail extends Component {
 
  componentDidMount() {
    console.log("this.props.trips.tags.length", this.props.trips.tags.length);
  }

  onClick = (val) => {
    console.log(val);
    this.props.onClick(val);
  };


  render() {
    return (
      <div class="detailL">
        <table>
          <tbody>
            <tr>
              <td>
                <img src={this.props.trips.photos[0]} class="img"></img>
              </td>
              <td>
                <tr>
                  <a href={this.props.trips.url} class="paragraph">
                    <strong>{this.props.trips.title}</strong>
                  </a>
                  <div class="container">
                  <ReadMoreReact text={this.props.trips.description}
                    min={100}
                    ideal={100}
                    max={400}
                    readMoreText="อ่านต่อ"/>
                   
                  </div>
                  <div class = "tags">
                    <p class="font">หมวด&nbsp;</p>
                    {this.props.trips.tags.map((val, index) => (
                      <button class="button" onClick = {this.onClick.bind(this , val)}>
                        {index === this.props.trips.tags.length - 1
                          ? " และ " :" "} {val}
                      </button>
                    ))}
                  </div>

                </tr>
                <tr>
                  <div class="photosL">
                    <td class="tData">
                      <img src={this.props.trips.photos[1]} class="img2" alt=""></img>
                    </td>
                    <td class="tData">
                      <img src={this.props.trips.photos[2]} class="img2" alt=""></img>
                    </td>
                    <td class="tData">
                      <img src={this.props.trips.photos[3]} class="img2" alt=""></img>
                    </td>
                  </div>
                </tr>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Detail;
