import React from 'react';
import Raphael from 'webpack-raphael';
import data from './data';

class PRMap extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    fill: React.PropTypes.string,
    stroke: React.PropTypes.string,
    'stroke-miterlimit': React.PropTypes.number,
    'stroke-width': React.PropTypes.number,
    'stroke-opacity': React.PropTypes.number,
    handleClick: React.PropTypes.func,
    handleHover: React.PropTypes.func,
    handleMouseOver: React.PropTypes.func,
    handleMouseOut: React.PropTypes.func,
    handleMouseUp: React.PropTypes.func,
    handleMouseDown: React.PropTypes.func,
    handleMouseMove: React.PropTypes.func
  }

  static defaultProps = {
    data: data,
    fill: 'lightgreen',
    stroke: 'white',
    'stroke-miterlimit': 10,
    'stroke-width': 0,
    'stroke-opacity': 1,
    handleClick: () => { return; },
    handleHover: () => { return; },
    handleMouseOver: () => { return; },
    handleMouseOut: () => { return; },
    handleMouseUp: () => { return; },
    handleMouseDown: () => { return; },
    handleMouseMove: () => { return; }
  };

  drawMap() {
    this.paper = Raphael('map', '800', '300')
                      .setViewBox(100, 100, 1000, 400);

    const component = this;

    for (let key of Object.keys(this.props.data)) {
      let value = this.props.data[key];

      this.paper.path(value.path)
        .attr({
          fill: this.props.fill,
          stroke: this.props.stroke,
          'stroke-miterlimit': this.props['stroke-miterlimit'],
          'stroke-width': this.props['stroke-width'],
          'stroke-opacity': this.props['stroke-opacity']
        })
        .data({
          id: key,
          town: value.town
        })
        .click(function(evt) { component.props.handleClick(evt, this); })
        .hover(function(evt) { component.props.handleHover(evt, this); })
        .mouseover(function(evt) { component.props.handleMouseOver(evt, this); })
        .mouseout(function(evt) { component.props.handleMouseOut(evt, this); })
        .mouseup(function(evt) { component.props.handleMouseUp(evt, this); })
        .mousedown(function(evt) { component.props.handleMouseDown(evt, this); })
        .mousemove(function(evt) { component.props.handleMouseDown(evt, this); });
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
