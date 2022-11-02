// Used moment.js to format today's date under the header
var currentDay = moment().format('dddd, MMM Do YYYY');
$("#currentDay").text(currentDay);

function timeTracker() {
        var currentTime = moment().hour();

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id"));

            // This will check if the block time is less than the current time to color code the time blocks
            if (blockTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            // This will check if the block time is equal to the current time to color code the time blocks
            else if (blockTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            // If blockTime is not less than or equal to the current time the future class will be added
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }
    // On-click to listen for an event and execute function once save button is clicked
$(function () {
    $(".saveBtn").on("click", function () {
        var textInput = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // This will save the text the user inputs in the local storage
        localStorage.setItem(time, textInput);
    })

    // This will get the designated text input for the specific item from the local storage
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

    timeTracker();
})

