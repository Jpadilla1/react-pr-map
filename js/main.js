var PRMap = window['PRMap.js'];

var SimpleExample = React.createClass({
  render: function() {
    return (
      <div>
        <PRMap />
      </div>
    );
  }
});

var PropertiesExample = React.createClass({
  render: function() {
    return (
      <div><PRMap fill='red' stroke='black' stroke-width='3' /></div>
    );
  }
});

var EventsExample = React.createClass({
  handleMouseOver: function(evt, elem) {
    document.getElementById('event-text').innerHTML = elem.data('town');
  },
  handleClick: function(evt, elem) {
    elem.attr('fill', 'red');
  },
  render: function() {
    return (
      <div>
        <p id='event-text'></p>
        <PRMap
          handleMouseOver={this.handleMouseOver}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
});

var data = [
{
    id: 'canovanas',
    fill: 'red',
    stroke: 'yellow',
    'stroke-width': 3
  },
  {
    id: 'san_juan',
    fill: 'green',
  },
  {
    id: 'carolina',
    fill: 'blue',
  }
];

var DataExample = React.createClass({
  render: function() {
    return (
      <div><PRMap data={data} /></div>
    );
  }
});

var AllInOneExample = React.createClass({
  handleMouseOver: function(evt, elem) {
    elem.attr('fill', 'blue');
  },
  render: function() {
    return (
      <div>
        <PRMap
          fill='black'
          stroke-width='2'
          data={data}
          handleMouseOver={this.handleMouseOver}
        />
      </div>
    );
  }
});

React.render(<AllInOneExample />, document.getElementById('all-in-one'));
React.render(<DataExample />, document.getElementById('passing-data'));
React.render(<EventsExample />, document.getElementById('events'));
React.render(<PropertiesExample />, document.getElementById('properties'));
React.render(<SimpleExample />, document.getElementById('simple'));
