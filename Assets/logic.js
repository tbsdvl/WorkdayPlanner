// Setting the current date at the top of HTML document
var currentDay = moment();
// Converts text in my <p> element to display current date
$("#currentDay").text(currentDay.format("MMMM Do, YYYY"));

// An array of standard business hours to append to time blocks
var hoursArray = ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

// Create a new list element for each hour and append to the timeblock
function stdBusHrs (){
    for(i = 0; i <= hoursArray.length; i++){
    var hoursEl = $("#time-list");
    var hoursListEl = document.createElement("li");
    var textArea = document.createElement("textarea");
    var inputText = document.createElement("input");
    var saveBtn = document.createElement("button");
    moment(hoursArray[i], "HHmm A").format("hh:mm A");
    hoursListEl.textContent = hoursArray[i];
    saveBtn.textContent = "Submit";
    textArea.setAttribute("id", "text");
    saveBtn.setAttribute("id", "submit");
    inputText.setAttribute("id", "textinput");
    hoursEl.append(hoursArray[i]);
    hoursEl.append(saveBtn);
    hoursEl.append(textArea);
    textArea.append(inputText);
    };
};


// Apply the hours text to my document
stdBusHrs();

var currentTime = moment();
// var testTime = moment('12:00:00', "HHmm A");

// Set background color of textareas to different colors that correspond to the time of day
function timeBlockColor() {
    var timeBlock = $("#text");
    for(i = 0; i <= hoursArray.length; i++){
        if(moment(hoursArray[i], "HHmm A").isBefore(currentTime)){
        timeBlock.append(timeBlock.css("background-color", "grey")); 
        };
    };
};

timeBlockColor();

// Submit timeblock text to local storage
function submitButton(e){
    e.preventDefault();
    var submitText = $("#text").value;
    var submitButton = $("#submit");
    submitButton.addEventListener("click", function(){
        localStorage.setItem("Text", submitText);
        });
};

submitButton();
