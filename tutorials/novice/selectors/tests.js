function runTests() {
	test( "All elements with a class of `header-button`", function() {
		ok( $( "#class-selector" ).val() === ".header-button", "Correct selector used" )
	});
	test( "Element with an id of `zoom`", function() {
		ok( $( "#id-selector" ).val() === "#zoom", "Correct selector used" )
	});
	test( "All elements with a class of `fizz` within an element with a class of `buzz`", function() {
		ok(
			$( "#nested-class-selector" ).val() === ".buzz .fizz",
			"Correct selector used"
		);
	});
	test( "All elements containing both the classes `foo` and `bar`", function() {
		ok(
			$( "#compound-class-selector" ).val() === ".foo.bar" ||
			$( "#cpmpound-class-selector" ).val() === ".boo.bar",
			"Correct selector used"
		);
	});
}