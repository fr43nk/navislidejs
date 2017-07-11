# navislidejs
Simple responsive slider navigation

This is a simple java script navigation slider.
It comes with a simple set of css rules to be resonsive.

## Install

To use the slider in your webside just add the following:

```
<script type="text/javascript" src="navisliderjs.min.js">
  var nav = new NaviSliderJs();
</script>
```

### Options

To use different id names it is possible to pass them into the constructor.
Valid properties with their default values are:
```
{
  navigationListId: "navigation_list",
  navigationButtonId: "navigation_button",
  rotateLeftClass: "rot--45",
  rotateRightClass: "rot-45",
  opacityClass: "opacity-0",
  blurParentId: ""
}
```

* `navigationListId`: the list that contains the navigation links
* `navigationButtonId`: the button that fires the event
* `rotateLeftClass`: class name of the rotation left style
* `rotateRightClass`: class name of the rotation right style
* `opacityClass`: class name to hide the middle stroke
* `blurParentId`: id of the parent element where the darken/blur layer is inserted. If empty, the body tag is used

## Example

You can have a look at the index.html of this project to see the full usage of the plugin.

In short, just create something like:
```
<nav>
  <div id="navigation_button">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div id="navigation_list">
    <ul>
      <li><a href="/#">Home</a></li>
      <li><a href="/#">About</a></li>
      <li><a href="/#">Imprint</a></li>
    </ul>
  </div>
</nav>
```

To make the buttom work, passe the name to the constructor of the NaviSlideJs Object like:
```
  var nav = new NaviSlideJs({navigationButtonId: "navigation_button"});
```
