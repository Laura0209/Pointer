function pointer(){

// Default settings for the Drawcircle function.
// These variables can be changed from outside this file trought the the colour function below

var col01 = "#77d290";
var col02 = "#ffffff";
var col03 = "#ffffff";
var col04 = "#ffffff";


    this.Drawcircle = function(){

//locate the position of the pointer
        var px = event.clientX;
        var py = event.clientY;

//Get the size of the window
        var sw = window.innerWidth;
        var sh = window.innerHeight;

//Generate random variables
        var ran01 = Math.floor((Math.random() * 4) + 1);
        var ran02 = Math.floor((Math.random() * sw) + 1);
        var ran03 = Math.floor((Math.random() * sh) + 1);
        var ran04 = Math.floor((Math.random() * sw) + 1);
        var ran05 = Math.floor((Math.random() * sh) + 1);
        var ran06 = Math.floor((Math.random() * sh) + 1);

//Prepare Raphael (this is another library)
        var p = Raphael(0, 0, sw, sh);

//Set the Raphael canvas to stay fixed and behind the objects on the page.
        p.canvas.style.position = "fixed";
        p.canvas.style.zIndex = "-100";

//Create the circles that will be spawned on mousemove using the position of the mouse (px, py) and the given colors (col01 etc.).
	   circle01 = p.circle( px, py, 7)
        .attr({
            fill : col01, // #00FFFF cyan
            stroke : "none",
            opacity: "0.5",
            cursor :  "pointer"
            });

	   circle02 = p.circle( px, py, 7)
        .attr({
            fill : col02, // #00FFFF cyan
            stroke : "none",
            opacity: "0.5",
            cursor :  "pointer"
            });

	   circle03 = p.circle( px, py, 7)
        .attr({
            fill : col03, // #00FFFF cyan
            stroke : "none",
            opacity: "0.5",
            cursor :  "pointer"
            });	

        circle04 = p.circle( px, py, 15)
        .attr({
            fill : col04, // #00FFFF cyan
            stroke : "none",
            opacity: "0.5",
            cursor :  "pointer"
            });

//Create the animations using the mouse position (px, py) and the random values (ran01 etc.)
	   var anim = Raphael.animation({cx: px, cx: ran02, cy: py, cy: ran03}, 2000, "elastic");
         var anim02 = Raphael.animation({cx: px, cx: ran02, cy: py, cy: ran06}, 2000, "elastic");
	   var anim03 = Raphael.animation({cx: px, cx: ran04 + 20, cy: py, cy: ran03}, 2000, "elastic");
	   var anim04 = Raphael.animation({cx: px, cx: ran02 + 30, cy: py, cy: ran05}, 2000, "elastic");

//Link the created circles to the animations
	       circle01.animate(anim);
	       circle02.animate(anim02);
	       circle03.animate(anim03);
	       circle04.animate(anim04);
        
    };

//The function to set the color from outside this file.
//Element = the circle you want to change, Color01 = the color your want the element to have.

    this.colour = function(element, color01){

//Check witch element needs to be changed.
//If the given name is circle01, the value of color01 will be transmitted to col01.
        if (element === "circle01") {
            col01 = color01;
        };

        if (element === "circle02") {
            col02 = color01;
        };

        if (element === "circle03") {
            col03 = color01;
        };

        if (element === "circle04") {
            col04 = color01;
        };

    
    };

};