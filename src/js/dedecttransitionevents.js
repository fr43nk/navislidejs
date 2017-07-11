// https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/
// Function from David Walsh: http://davidwalsh.name/css-animation-callback

"use strict";

function DedectTransitionEvents()
{
	var t, el = document.createElement("fakeelement");

  var endTransitions = {
    "transition"      : "transitionend",
    "OTransition"     : "oTransitionEnd",
    "MozTransition"   : "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  }
  var startTransitions = {
    "transition"      : "transitionstart",
    "OTransition"     : "oTransitionStart",
    "MozTransition"   : "transitionstart",
    "WebkitTransition": "webkitTransitionStart"
  }

  var transitionEv = {
    start: "",
    end: ""
  };

  for (t in endTransitions){
    if (el.style[t] !== undefined){
       transitionEv.end = endTransitions[t];
       break;
    }
  }

  for (t in startTransitions){
    if (el.style[t] !== undefined){
       transitionEv.start = startTransitions[t];
       break;
    }
  }
  return transitionEv;
}

export default DedectTransitionEvents;
