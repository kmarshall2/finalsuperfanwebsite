// variables to help shorten code
var a= document.getElementById("r6")
var b= document.getElementById("rl")
var c= document.getElementById("fort")
var d= document.getElementById("reset")
var e= document.getElementById("ash")
var f= document.getElementById("ela")
var g= document.getElementById("breakout")
var h= document.getElementById("oct")
var i= document.getElementById("rocketride")
var j= document.getElementById("farming")
var k= document.getElementById("r6logo")
var l= document.getElementById("rllogo")
var m= document.getElementById("fortlogo")



//resets the columns

function resetColumn1 () {
	e.classList.add("hidebox")
	f.classList.add("hidebox")
	a.classList.toggle("pulse1");
	a.classList.add("cursor");
	e.classList.remove("r6info")
	
}

function resetColumn2 () {
	g.classList.add("hidebox")
	h.classList.add("hidebox")
	b.classList.toggle("pulse1");
	b.classList.add("cursor");
	g.classList.remove("rlinfo")
}

function resetColumn3 () {
	i.classList.add("hidebox")
	j.classList.add("hidebox")
	c.classList.toggle("pulse1");
	c.classList.add("cursor");
	i.classList.remove("fortinfo")	
}




//when clicked, will add pics

function addPics () {
	e.classList.remove("hidebox");
	f.classList.remove("hidebox");
	a.classList.remove("pulse1");
	a.classList.remove("cursor");
}

function addPics1 () {
	g.classList.remove("hidebox");
	h.classList.remove("hidebox");
	b.classList.remove("pulse1");
	b.classList.remove("cursor");
}

function addPics2 () {
	i.classList.remove("hidebox");
	j.classList.remove("hidebox");
	c.classList.remove("pulse1");
	c.classList.remove("cursor");
}


//Adds info when second box is clicked

function addr6Info () {
	e.classList.toggle("r6info")
	e.classList.toggle("pulse1");
}

function addrlInfo () {
	g.classList.toggle("rlinfo")
	g.classList.toggle("pulse1");
}

function addfortInfo () {
	i.classList.toggle("fortinfo")
	i.classList.toggle("pulse1");
}