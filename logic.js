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
    var saveBtn = document.createElement("button");
    moment(hoursArray[i], "HHmm A").format("hh:mm A");
    hoursListEl.textContent = hoursArray[i];
    saveBtn.textContent = "Submit";
    textArea.setAttribute("id", "text")
    saveBtn.setAttribute("id", "submit")
    hoursEl.append(hoursArray[i]);
    hoursEl.append(saveBtn);
    hoursEl.append(textArea);
    };
};

// Apply the hours text to my document
stdBusHrs();

// var saveBtn = document.createElement("button");
// var hoursListEl = document.createElement("li");
// hoursListEl.append(saveBtn);

var currentTime = moment();
// var testTime = moment('12:00:00', "HHmm A");

// Set background color of textareas to different colors that correspond to the time of day
function timeBlockColor() {
    var timeBlock = $("#text");
    for(i = 0; i <= hoursArray.length; i++){
    if(moment(hoursArray[i], "HHmm A").isBefore(moment())){
        timeBlock.css("background-color", "grey");
        };
    };
};

timeBlockColor();

function submitButton() {
var saveBtn = $("#submit");

saveBtn.addEventListener("click", function(){
    localStorage($("#text").value);
    });
};

submitButton();

// var handleFormSubmit = function (event) {
//     event.preventDefault();
  
//     var nameInput = nameInputEl.val();
//     var dateInput = dateInputEl.val();
  
//     if (!nameInput || !dateInput) {
//       console.log('You need to fill out the form!');
//       return;
//     }