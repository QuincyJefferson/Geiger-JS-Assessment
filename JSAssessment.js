$(document).ready(function() {
    // Checks if favorite song input is filled with content
    $("input[name='question1']").on("input", function() {
        var re = /^ *$/;
        let input=$(this);
        var isBlank = re.test(input.val());
        let is_name=input.val();
        if(is_name && !isBlank){input.removeClass("invalid").addClass("valid");}
        else {input.removeClass("valid").addClass("invalid");}
    });
    // Checks if favorite color input is filled with content
    $("input[name='question2']:first").on("input", function() {
        let input=$(this);
        let is_name=input.val();
        if(is_name){input.removeClass("invalid").addClass("valid");}
        else {input.removeClass("valid").addClass("invalid");}
    });
    // Verify the first two questions have content
    $("input[type='submit']").click(function(event) {
        var re = /^ *$/;
        var isSongBlank = re.test($("input[name='question1']").val());
        var isColorBlank = re.test($("input[name='question2']:first").val());
        if($("input[name='question1']").val() && $("input[name='question2']:first").val() && !isSongBlank && !isColorBlank) {
            return;
        } else { 
            event.preventDefault();
            $("#content").append("<div class='error'><h2>Error</h2><p>Please fill out questions 1 and 2 before trying to submit again.</p><button class='okayBtn'>Okay</button></div>")
            $(".okayBtn").click(function() {
                $(".error").hide();
            })
        }
    });
    // Using replaceWith to change favorite movie input with select menu instead
    $("input[name='question2']").eq(1).replaceWith("<select name='question2' id='movies'> <option value='starWars'>Star Wars </option> <option value='lordOfTheRings'>Lord of the Rings</option> <option value='harryPotter'>Harry Potter</option> <option value='hungerGames'>Hunger Games </option>");

});