#PRMap

React Component Map of Puerto Rico

#Installing

```bash
npm i --save react-pr-map
```

#Usage

###Simple Example

```Javascript
import React from 'react';
import PRMap from 'react-pr-map';

React.render(<PRMap />, document.getElementById('app'));
```

###Example with properties

```Javascript
import React from 'react';
import PRMap from 'react-pr-map';

React.render(<PRMap fill='red' stroke='blue'/>, document.getElementById('app'));
```

###Events

```Javascript
import React from 'react';
import PRMap from 'react-pr-map';

var onClick = function(evt, elem) {
  console.log(elem.data('town')); // Example: San Juan
}

React.render(<PRMap handleClick={onClick}/>, document.getElementById('app'));
```

#Properties

###fill
The fill color of the map. Default is 'lightgreen'.

###stroke
The stroke color of the map. Default is 'white'.

###strokeMiterlimit
[stroke-miterlimit](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-miterlimit). Default is 10.

###stroke-width
The width of the stroke. Default is 0.

###stroke-opacity
The opacity of the stroke. Default is 1.

#Events

All of these events are from the event system in **RaphaelJS**.

- handleClick
- handleHover
- handleMouseOver
- handleMouseOut
- handleMouseUp
- handleMouseDown
- handleMouseMove
