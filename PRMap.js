import React from 'react';
import Raphael from 'webpack-raphael';
import data from './data';

class PRMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
      attrs: {
        fill: this.props.fill ? this.props.fill : 'lightgreen',
        stroke: this.props.stroke ? this.props.stroke : 'white',
        'stroke-miterlimit': this.props.strokeMiterlimit ? this.props.strokeMiterlimit : '10',
        'stroke-width': this.props.strokeWidth ? this.props.strokeWidth : '0',
        'stroke-opacity': this.props.strokeOpacity ? this.props.strokeOpacity : '1'
      }
    };
  }
  handleClick(evt, elem) {
    if (this.props.handleClick) {
      this.props.handleClick(evt, elem);
    }
  }
  handleHover(evt, elem) {
    if (this.props.handleHover) {
      this.props.handleHover(evt, elem);
    }
  }
  handleMouseOver(evt, elem) {
    if (this.props.handleMouseOver) {
      this.props.handleMouseOver(evt, elem);
    }
  }
  handleMouseOut(evt, elem) {
    if (this.props.handleMouseOut) {
      this.props.handleMouseOut(evt, elem);
    }
  }
  handleMouseUp(evt, elem) {
    if (this.props.handleMouseUp) {
      this.props.handleMouseUp(evt, elem);
    }
  }
  handleMouseDown(evt, elem) {
    if (this.props.handleMouseDown) {
      this.props.handleMouseDown(evt, elem);
    }
  }
  handleMouseMove(evt, elem) {
    if (this.props.handleMouseMove) {
      this.props.handleMouseMove(evt, elem);
    }
  }
  drawMap() {
    this.state.paper = Raphael('map', '800', '300')
                      .setViewBox(100, 100, 1000, 400);

    for (let key of Object.keys(this.state.data)) {
      let value = this.state.data[key];

      this.state.paper.path(value.path)
        .attr(this.state.attrs)
        .data({
          id: key,
          town: value.town
        })
        .click((evt) => {
          this.handleClick(
           evt,
           this.state.paper.getById(evt.target.raphaelid)
          );
        }).hover((evt) => {
          this.handleHover(
            evt,
            this.state.paper.getById(evt.target.raphaelid)
          );
        }).mouseover((evt) => {
          this.handleMouseOver(
            evt,
            this.state.paper.getById(evt.target.raphaelid)
          );
        }).mouseout((evt) => {
          this.handleMouseOut(
            evt,
            this.state.paper.getById(evt.target.raphaelid)
          );
        }).mouseup((evt) => {
          this.handleMouseUp(
            evt,
            this.state.paper.getById(evt.target.raphaelid)
          );
        }).mousedown((evt) => {
          this.handleMouseDown(
            evt,
            this.state.paper.getById(evt.target.raphaelid)
          );
        }).mousemove((evt) => {
          this.handleMouseDown(
            evt,
            this.state.paper.getById(evt.target.raphaelid)
           );
        });
    }
  }
  componentDidMount() {
    this.drawMap();
  }
  render() {
    return <div id='map'></div>;
  }
}

export default PRMap;
