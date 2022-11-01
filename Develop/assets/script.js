// Used moment.js to format today's date under the header
var currentDay = moment().format('dddd, MMM Do YYYY');
$("#currentDay").text(currentDay);

    // Created on-click to listen for an event and execute function once save button is clicked
    $(function () {
    $(".saveBtn").on("click", function () {
        var textInput = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // This will save the text the user inputs in the local storage
        localStorage.setItem(time, textInput);
    })

    // This will get the designated text input for the specific item from the local storage
    $("#nine .description").val(localStorage.getItem("nine"));
    $("#ten .description").val(localStorage.getItem("ten"));
    $("#eleven .description").val(localStorage.getItem("eleven"));
    $("#twelve .description").val(localStorage.getItem("twelve"));
    $("#one .description").val(localStorage.getItem("one"));
    $("#two .description").val(localStorage.getItem("two"));
    $("#three .description").val(localStorage.getItem("three"));
    $("#four .description").val(localStorage.getItem("four"));
    $("#five .description").val(localStorage.getItem("five"));


})

