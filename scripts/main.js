
//(function ($, viewport) {

//    // Executes only in XS breakpoint
//    if (viewport.is('xs')) {
//        console.log("Xtra SMall")
//    }

//    // Executes in SM, MD and LG breakpoints
//    if (viewport.is('>=sm')) {
//        // ...
//    }

//    // Executes in XS and SM breakpoints
//    if (viewport.is('<md')) {
//        // ...
//    }

//    // Execute only after document has fully loaded
//    $(document).ready(function () {
//        if (viewport.is('xs')) {
//            // ...
//        }
//    });

//    // Execute code each time window size changes
//    $(window).resize(
//        viewport.changed(function () {
//            console.log("The view port is: " + viewport);
//            if (viewport.is('xs')) {
//                // ...
//            }
//        })
//    );

//});

$(document).ready(function () {
    $('#MainHamMenu').on('click', function () {
        console.log("Toggle Pressed");
        $('#navCol').toggleClass('active');
        $(this).toggleClass('active');
    });
    $("#sectionAccount").hide();
   // $("#sectionMain").hide();
    $("#sectionSwaps").hide();
    $("#sectionSignOut").hide();
});

$(".logoImg").click(function () {

    $("#HomeButton").parent().addClass("active");
    $("#AccountButton").parent().removeClass("active");
    $("#SwapButton").parent().removeClass("active");
    $("#SignOutButton").parent().removeClass("active");
    $("#sectionAccount").slideUp();
    $("#sectionMain").slideDown();
    $("#sectionSwaps").slideUp();
    $("#sectionSignOut").slideUp();
});


$("#HomeButton").click(function () {

    $("#HomeButton").parent().addClass("active");
    $("#AccountButton").parent().removeClass("active");
    $("#SwapButton").parent().removeClass("active");
    $("#SignOutButton").parent().removeClass("active");
    $("#sectionAccount").slideUp();
    $("#sectionMain").slideDown();
    $("#sectionSwaps").slideUp();
    $("#sectionSignOut").slideUp();

});


$("#AccountButton").click(function () {

    $("#HomeButton").parent().removeClass("active");
    $("#AccountButton").parent().addClass("active");
    $("#SwapButton").parent().removeClass("active");
    $("#SignOutButton").parent().removeClass("active");
    $("#sectionAccount").slideDown();
    $("#sectionMain").slideUp();
    $("#sectionSwaps").slideUp();
    $("#sectionSignOut").slideUp();
});



$("#SwapButton").click(function () {

    $("#HomeButton").parent().removeClass("active");
    $("#AccountButton").parent().removeClass("active");
    $("#SwapButton").parent().addClass("active");
    $("#SignOutButton").parent().removeClass("active");
    $("#sectionAccount").slideUp();
    $("#sectionMain").slideUp();
    $("#sectionSwaps").slideDown();
    $("#sectionSignOut").slideUp();
});

$("#SignOutButton").click(function () {

    $("#HomeButton").parent().removeClass("active");
    $("#AccountButton").parent().removeClass("active");
    $("#SwapButton").parent().removeClass("active");
    $("#SignOutButton").parent().addClass("active");
    $("#sectionAccount").slideUp();
    $("#sectionMain").slideUp();
    $("#sectionSwaps").slideUp();
    $("#sectionSignOut").slideDown();
});


/* comment this out to do mail to */
$("#emailForm").on("submit", function () {
    checkWayneEmail($("#InputEmail1").val());
    return false;
})

function checkWayneEmail(email) {
    var valid = email.endsWith("@wayne.edu");
    if (!valid) {
        $("#emailHelp").html("Must enter a wayne.edu email address")
    }
    else {
        $("#HomeButton").parent().addClass("active");
        $("#AccountButton").parent().removeClass("active");
        $("#SwapButton").parent().removeClass("active");
        $("#SignOutButton").parent().removeClass("active");
        $("#sectionAccount").slideUp();
        $("#sectionMain").slideDown();
        $("#sectionSwaps").slideUp();
        $("#sectionSignOut").slideUp();
    }
}