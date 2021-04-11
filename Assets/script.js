// Current Time on top of page
let displayTime = moment();
$("#currentDay").text(displayTime.format("dddd, MMM Do, YYYY"));
let hours;

function Times() {
    $(".form-control").each(function () {
        let testTime = parseInt($(this).attr("id"));
        
        let date = new Date();
        let currentHour = date.getHours();
       
        if (testTime < currentHour) {
            $(this).addClass("past");
        }
        else if (testTime === currentHour) {
            $(this).addClass("present");
        }
        else if (testTime > currentHour) {
            $(this).addClass("future");
        }
    });
}

$(document).ready(function () {
    Times();
    reload();
});


// Save Behavior
$(".saveBtn").on("click", function () {
    inputText = $(this).siblings(".form-control").val().trim();
    hours = $(this).siblings(".input-group-text").text().trim();
    localStorage.setItem(hours, JSON.stringify(inputText));
})

// Saving to local Storage
function reload(){

    let nineAm = $("#9am");
    let reload9am = JSON.parse(localStorage.getItem("09:00am"));
    nineAm.val(reload9am);
  
  
    let tenAm = $("#10am");
    let reload10am = JSON.parse(localStorage.getItem("10:00am"));
    tenAm.val(reload10am);
  
  
    let elevenAm = $("#11am");
    let reload11am = JSON.parse(localStorage.getItem("11:00am"));
    elevenAm.val(reload11am);
  
  
    let twelvePm = $("#12pm");
    let reload12pm = JSON.parse(localStorage.getItem("12:00pm"));
    twelvePm.val(reload12pm);
  
  
    let onePm = $("#1pm"); 
    let reload1pm = JSON.parse(localStorage.getItem("01:00pm"));
    onePm.val(reload1pm);
  
    let twoPm = $("#2pm");
    let reload2pm = JSON.parse(localStorage.getItem("02:00pm"));
    twoPm.val(reload2pm);
  
  
    let threePm = $("#3pm");
    let reload3pm = JSON.parse(localStorage.getItem("03:00pm"));
    threePm.val(reload3pm);
  
  
    let fourPm = $("#4pm");
    let reload4pm = JSON.parse(localStorage.getItem("04:00pm"));
    fourPm.val(reload4pm);
  
  
    let fivePm = $("#5pm");
    let reload5pm = JSON.parse(localStorage.getItem("05:00pm"));
    fivePm.val(reload5pm);
  }
  











