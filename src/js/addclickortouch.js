"use strict";

var isTouchFirst = false;

function AddClickOrTouch(elem, handler)
{
	if( elem !== null && handler !== null )
	{
		elem.addEventListener("touchend", function(e){
			e.preventDefault();
			if( isTouchFirst === false )
			{
				isTouchFirst = true;
				handler();
				window.setTimeout(function(){
					isTouchFirst = false;
					console.log("Reset");
				}, 600);
			}
		});
		elem.addEventListener("click", function(e){
			e.preventDefault();
			if(isTouchFirst === false)
				handler();
		});
	}
};

export default AddClickOrTouch;