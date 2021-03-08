// Setting the current date at the top of HTML document
var currentDay = moment();
// Converts text in my <p> element to display current date
$("#currentDay").text(currentDay.format("MMMM Do, YYYY"));

// An array of standard business hours to append to time blocks
var hoursArray = ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

// Create a new list element for each hour and append to the timeblock
function stdBusHrs (){
    for(i = 0; i <= hoursArray.length; i++){
    var hoursEl = $("#time-block");
    var hoursListEl = document.createElement("li");
    var textArea = document.createElement("textarea");
    moment(hoursArray[i], "HHmm A").format("hh:mm A");
    hoursListEl.textContent = hoursArray[i];
    hoursEl.append(hoursArray[i]);
    hoursEl.append(textArea);
    };
};

stdBusHrs();

// function timeBlockColor() {
//     for(i = 0; i <= 3; i++){
//     moment(hoursArray[i], "HHmm A").format("hh:mm A");
//     hoursArray[i].backgroundColor
// }