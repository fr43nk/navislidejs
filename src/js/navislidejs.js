'use strict';

import "./iethings.js";
import AddClickOrTouch from "./addclickortouch.js";
import DedectTransitionEvents from "./dedecttransitionevents.js";

function NaviSlideJs(iOptions){
	var lThat = this;
	this.options = {
		navigationListId: "navigation_list",
		navigationButtonId: "navigation_button",
		rotateLeftClass: "rot-45",
		rotateRightClass: "rot--45",
		opacityClass: "opacity-0",
		blurParentId: ""
	};
	this.doHide = false;
	this.isReady = true;
	this.isAnimating = false;
	this.navList = null;
	this.navButton = null;
	this.blurParentElm = null;
	this.transEvs = DedectTransitionEvents();
	this.hasTransitionEvs = (lThat.transEvs.start !== "" && lThat.transEvs.end !== "")
	this.blurElem = document.createElement("div");

	this.blurElem.classList.add("blur");
	this.blurElem.classList.add("hide-blur");
	this.init(iOptions);
};

NaviSlideJs.prototype.init = function(iOptions){
	var lThat = this;
	if( iOptions !== undefined )
	{
		Object.keys(iOptions).forEach(function(key, index){
			Object.keys(lThat.options).forEach(function(key2, index2){
				if( key === key2 )
				{
					lThat.options[key] = iOptions[key];
				}
			});
		});
	}
	lThat.navList = document.getElementById(lThat.options.navigationListId);
	lThat.navButton = document.getElementById(lThat.options.navigationButtonId);
	var lNav = null;
	if( lThat.options.blurParentId === "" )
	{
		lNav = document.getElementsByTagName("body");
		lThat.blurParentElm = (typeof lNav !== "undefined" && lNav !== null && lNav.length > 0) ? lNav[0] : null;
	}
	else
	{
		lThat.blurParentElm = document.getElementById(lThat.options.blurParentId);
	}
	if( lThat.blurParentElm )
	{
		var fC = lThat.blurParentElm.children[0];
		lThat.blurParentElm.insertBefore(lThat.blurElem, fC);
		if( lThat.hasTransitionEvs )
		{
			lThat.blurElem.addEventListener(lThat.transEvs.end, function(){
				lThat.isAnimating = true;
			});
			lThat.blurElem.addEventListener(lThat.transEvs.end, function(){
				if( lThat.isAnimating === true )
				{
					if( lThat.doHide === false )
					{
						lThat.blurElem.classList.remove("hide-blur");
					}
					else
					{
						lThat.blurElem.classList.remove("show-blur");
						lThat.blurElem.classList.add("hide-blur");
					}
					lThat.isAnimating = false;
					lThat.isReady = true;
				}
			});
		}
	}
	lThat.setupEvents();
};

NaviSlideJs.prototype.setupEvents = function(){
	var lThat = this;
	AddClickOrTouch( this.navButton, function(){
		if( lThat.isReady === true || lThat.hasTransitionEvs === false )
		{
			lThat.isReady = false;
			if( lThat.navList.classList.contains("show") )
			{
				lThat.doHide = true;
				lThat.navList.classList.remove("show");
				lThat.blurElem.classList.remove("opacity-1");
				lThat.navButton.classList.remove("bg-none");
				lThat.navButton.children[0].classList.remove(lThat.options.rotateLeftClass);
				lThat.navButton.children[1].classList.remove(lThat.options.opacityClass);
				lThat.navButton.children[2].classList.remove(lThat.options.rotateRightClass);
			}
			else
			{
				lThat.doHide = false;
				lThat.blurElem.classList.add("show-blur");
				window.setTimeout(function(){
					lThat.blurElem.classList.add("opacity-1");
				}, 23);
				lThat.navList.classList.add("show");
				lThat.navButton.classList.add("bg-none");
				lThat.navButton.children[0].classList.add(lThat.options.rotateLeftClass);
				lThat.navButton.children[1].classList.add(lThat.options.opacityClass);
				lThat.navButton.children[2].classList.add(lThat.options.rotateRightClass);
			}
		}
	});
};

export { NaviSlideJs };
