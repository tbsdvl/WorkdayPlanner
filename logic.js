// Setting the current date at the top of HTML document
var currentDay = moment();
// Converts text in my <p> element to display current date
$("#currentDay").text(currentDay.format("MMMM Do, YYYY"));

// An array of standard business hours to append to time blocks
var hoursArray = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM",
                "3:00 PM", "4:00 PM", "5:00 PM"]

// Create a new list element for each hour and append to the timeblock
// function stdBusHrs (){
    for(i = 0; i <= hoursArray.length; i++){
    var hoursEl = $("#time-block");
    var hoursListEl = document.createElement("li");
    var textArea = document.createElement("textarea");
    hoursListEl.textContent = hoursArray[i];
    hoursEl.append(hoursArray[i]);
    hoursEl.append(textArea);
    };

    // var currentTime = moment().format('LT');

    // for(i = 0; i <= hoursArray.length; i++){
    //     if(hoursArray[i] < currentTime){
    //         textArea.back
    //     }
    // }
// };

// stdBusHrs();
