$(document).ready(function() {

    $("input[name='question1']").on("input", function() {
        let input=$(this);
        let is_name=input.val();
        if(is_name){input.removeClass("invalid").addClass("valid");}
        else {input.removeClass("valid").addClass("invalid");}
    });
    //
    $("input[name='question2']:first").on("input", function() {
        let input=$(this);
        let is_name=input.val();
        if(is_name){input.removeClass("invalid").addClass("valid");}
        else {input.removeClass("valid").addClass("invalid");}
    });
    // Verify the first two questions have any content (need to check for blank spaces)
    $("input[type='submit']").click(function(event) {
        if($("input[name='question1']").val() && $("input[name='question2']:first").val()) {
            return;
        } else { 
            event.preventDefault();
            alert('Please make sure questions 1 and 2 are filled out.');
        }
    });
    // Using replaceWith to change favorite movie input with dropdown menu instead
    $("input[name='question2']").eq(1).replaceWith("<select name='question2' id='movies'> <option value='starWars'>Star Wars </option> <option value='lordOfTheRings'>Lord of the Rings</option> <option value='harryPotter'>Harry Potter</option> <option value='hungerGames'>Hunger Games </option>");

});