'use strict';

import AddClickOrTouch from "./addclickortouch.js";

function NaviSlideJs(iOptions){
	this.options = {
		navigationListId: "navigation",
		navigationButtonId: "navigation_button",
		rotateLeftClass: "rot--45",
		rotateRightClass: "rot-45",
		opacityClass: "opac-0"
	};
	this.navList = null;
	this.navButton = null;
	this.bodyElm = null;
	this.blurElem = document.createElement("div");

	this.blurElem.classList.add("blur");
	this.blurElem.classList.add("hide-blur");

	this.init(iOptions);
};

NaviSlideJs.prototype.init = function(iOptions){
	var lThat = this;
	Object.keys(iOptions).forEach(function(key, index){
		Object.keys(lThat.options).forEach(function(key2, index2){
			if( key === key2 )
			{
				lThat.options[key] = iOptions[key];
			}
		});
	});

	lThat.navList = document.getElementById(lThat.options.navigationListId);
	lThat.navButton = document.getElementById(lThat.options.navigationButtonId);
	var body = document.getElementsByTagName("body");
	lThat.bodyElm = (typeof body !== "undefined" && body !== null && body.length > 0) ? body[0] : null;

	lThat.setupEvents();
};

NaviSlideJs.prototype.setupEvents = function(){
	var lThat = this;
	AddClickOrTouch( this.navButton, function(){
		if( lThat.navList.classList.contains("show") )
		{
			if( lThat.bodyElm )
				lThat.bodyElm.removeChild(lThat.blurElem);
			lThat.navList.classList.remove("show");
			lThat.blurElem.classList.remove("show-blur");
			lThat.blurElem.classList.add("hide-blur");
			lThat.navButton.children[0].classList.remove(lThat.options.rotateRightClass);
			lThat.navButton.children[1].classList.remove(lThat.options.opacityClass);
			lThat.navButton.children[2].classList.remove(lThat.options.rotateLeftClass);
		}
		else
		{
			if( lThat.bodyElm )
			{
				var fC = lThat.bodyElm.children[0];
				lThat.bodyElm.insertBefore(lThat.blurElem, fC);
			}
			lThat.navList.classList.add("show");
			lThat.blurElem.classList.remove("hide-blur");
			lThat.blurElem.classList.add("show-blur");
			lThat.navButton.children[0].classList.add(lThat.options.rotateRightClass);
			lThat.navButton.children[1].classList.add(lThat.options.opacityClass);
			lThat.navButton.children[2].classList.add(lThat.options.rotateLeftClass);
		}
	});
};

export { NaviSlideJs };
