# lesscssarrowplease

This is a simple exercise made by [comlaterra](https://github.com/comlaterra) to share a nice less code made for [calendar42](https://github.com/calendar42/).

Based on the solution made by [hojberg](https://github.com/hojberg) : [cssarrowplease](https://github.com/hojberg/cssarrowplease) shown at [cssarrowplease.com](http://cssarrowplease.com/), I've created a simple web page where to try the code I'm sharing.

No [npm](https://www.npmjs.com/) no [Yeoman](http://yeoman.io/). This is too simple to do anything like that.

P.S: For the demostration I'm using [jscolor](http://jscolor.com/).

# How to use

you can always clone this project (completly useless) or just take the [lesscssarrowplease.less](https://github.com/comlaterra/lesscssarrowplease/blob/master/css/arrowplease.less) file.

Import it in your less project.

<pre>
	import csslessarrowplease
</pre>

And start to use it. As in the example:

<pre>
	@place : "bottom";
	@arrow-size : 30px;
	@background-color: #C2E1F5;
	@border-width : 4px;
	@border-color: #88B7D5;
	.box_arrow(
		@border-width,
		@border-color, 
		@arrow-size, 
		@background-color,
		@place
	);
</pre>

Or just calling to the less mixin every time you need to add an arrow.

<pre>
	.my_class{
		.box_arrow(3px,#88B7D5,30px,#C2E1F5,"bottom");
	}
</pre>

Of course there is much more complex (or complet) projects around.
Feel free to improve, add functionalities and make grow this less file. 
But remember that sometimes, only what we *need* is what we should *do*.

Hope you all will enjoy this code.