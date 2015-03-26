$(function(){
	var testButton = $( "<button class='test-runner-button'>Run Tests</button>" );
	$( "body" ).append( testButton );
	testButton.on( "click", function(){
		$( "#qunit" ).show();
		runTests();
	});
});