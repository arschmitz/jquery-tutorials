# Getting Started With Selectors

The most basic concept of jQuery is to "select some elements and do something with them." jQuery supports most CSS3 selectors, as well as some non-standard selectors. For a complete selector reference, visit the Selectors documentation on api.jquery.com.

### Selecting Elements

Just as in CSS, you can select elements now.

```js
$( "button" ); // This selects all button elements on your page.
```

__Right now you can try to fix the first challenge. Don't worry, it's fairly easy: just write a selector for all `<a>` elements. When you're ready, hit the "run tests" button and see if it's correct.__

### Selecting Elements by ID

Just as in CSS, you can select elements by id using the `#` sign.

```js
$( "#myId" ); // Note that IDs must be unique per page.
```

__Normally you should be able to solve the second test now.__

### Selecting Elements by Class Name

You can select elements by their class name as well:

```js
$( ".myClass" );
```

__Try to solve the second test: write a selector which selects all elements with the class `button`.__

### Selecting Elements by Attribute

Let's start writing a little more complicated selectors. You can select all elements with a given attribute, for example.

```js
$( "[href]" ); // Selects all elements with an `href` attribute
```

But if you like to be specific you can even combine this with a given element selector:

```js
$( "a[href]" ); // Selects all links with an `href` attribute
```

If you want all `<a>` tags linking to Facebook, you can use the equal sign and an attribute value.

```js
$( "a[href='http://facebook.com']" );
```

__Normally you should be able to solve the next tests now, success!__

### Pseudo-selectors

You can as well use pseudo-selectors in jQuery. Some of them:

* `:first` - Selects only the first matched element
* `:visible` - Selects only the visible elements
* `:last` - Selects only the last matched element
* `:empty` - Selects all empty elements
* `:eq(3)` - Only selects the third matched element

__We also included some tests on pseudo-selectors. Have fun! Once you solved all tests you can go read the next article :)__
