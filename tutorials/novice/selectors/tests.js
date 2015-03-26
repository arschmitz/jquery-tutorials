function runTests() {
	test( "Selector for all `<a>` elements", function() {
		ok( $( "#element-selector" ).val() === "a", "Correct selector used" );
	});

	test( "selector for the element with the id `zoom`", function() {
		ok( $( "#id-selector" ).val() === "#zoom", "Correct selector used" );
	});

	test( "selector for the elements with the class `button`", function() {
		ok( $( "#class-selector" ).val() === ".button", "Correct selector used" );
	});

	test( "Attribute selectors", function() {
		ok( $( "#attr-selector-1" ).val() === "[type]", "Correct selector used" );
		ok( $( "#attr-selector-2" ).val() === "input[type]", "Correct selector used" );
		ok( $( "#attr-selector-3" ).val() === "input[type='text']", "Correct selector used" );
	});

	test( "Pseudo-Selectors", function() {
		ok( $( "#pseudos-first-input" ).val() === "input:first", "Correct selector used" );
		ok( $( "#pseudos-last-link" ).val() === "a:last", "Correct selector used" );
		ok( $( "#pseudos-eq" ).val() === "img:eq(3)", "Correct selector used" );
		ok( $( "#pseudos-empty" ).val() === "span:empty", "Correct selector used" );
	});
}
