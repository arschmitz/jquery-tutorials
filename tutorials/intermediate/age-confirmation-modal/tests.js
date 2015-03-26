runTests = function() {
    test( "markup and initalization of widgets", function(){
        var fixture = $( "#test-fixture" ),
            button = fixture.find( "button" ),
            dialog = $( "body" ).find( ".ui-dialog" ),
            dialogButtons = dialog.find( "button" );

        strictEqual( fixture.find( "button" ).length, 1, "there is one buttton" );
        ok( button.is( ":ui-button" ), "button is a button widget" );

        strictEqual( dialog.length, 1, "one dialog widget created" );
        strictEqual( dialogButtons.length, 3, "Dialog has 2 buttons added" );
        strictEqual( dialogButtons.eq( 1 ).find( ".ui-button-text" ).text(), "Yes", "First button contains the word 'Yes'");
        strictEqual( dialogButtons.eq( 2 ).find( ".ui-button-text" ).text(), "No", "First button contains the word 'No'");

    });

    test( "functionality", function(){
        var fixture = $( "#test-fixture" ),
            button = fixture.find( "button" ),
            dialog = $( "body" ).find( ".ui-dialog" ),
            dialogButtons = dialog.find( "button" );

        console.log( dialogButtons );
        ok( !dialog.is( ":visible" ), "Dialog is initally hidden" );
        button.click();
        ok( dialog.is( ":visible" ), "Clicking button opens dialog" );
        dialogButtons.eq( 0 ).click();
        strictEqual( dialog.is( ":visible" ), false, "Dialog buttons close dialog" );
        button.click();
        ok( dialog.is( ":visible" ), "Clicking button opens dialog" );
        dialogButtons.eq( 1 ).click();
        strictEqual( dialog.is( ":visible" ), false, "Dialog Yes button closes dialog" );
        strictEqual( fixture.hasClass( "pass" ), true, "Dialog Yes button adds class pass to fixture" );
        button.click();
        ok( dialog.is( ":visible" ), "Clicking button opens dialog" );
        dialogButtons.eq( 2 ).click();
        strictEqual( fixture.hasClass( "fail" ), true, "Dialog No button adds class fail to fixture" );
        strictEqual( dialog.is( ":visible" ), false, "Dialog No button closes dialog" );
    });
}
