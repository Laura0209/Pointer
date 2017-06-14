# Pointer.js
Pointers.js is a library for animations based on pointer location. The library needs the raphael.js library to function, you can download this library here: [Raphael.js](http://dmitrybaranovskiy.github.io/raphael/)

### Examples
  - [Scatter circles](http://i345755.iris.fhict.nl/library/)

### Installation

Pointer.js requires [Raphael.js](http://dmitrybaranovskiy.github.io/raphael/) to run.

Install the libraries and use pointer.js as follow:

In javascript
```sh
var kleur = new pointer();
kleur.colour("circle01","#ffff00");
kleur.colour("circle02","#00ffff");

document.getElementById("x") = kleur.Drawcircle();
```
Circle01 is the circle you want to change the color from, in this library I use 4 circles. 
"x" is the object you want to bind the hover animation to.

In Html

```sh
<div id="art" onmousemove="kleur.Drawcircle()"></div>
```

Feel free to change the onmousemove to onclick or any desired mouse action to change the behavior of the animation.
