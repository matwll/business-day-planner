//hooks into the DOM
var currentDate = document.getElementById("currentDay");
var plannerEl = $(document.querySelectorAll(".row"));
var plannedEvent = $(document.getElementById("planned-event"));
var saveBtn = $(".saveBtn");

var storageInfo = [];

//variable to store current time/date information
var today = moment();
//variable to store the current hour
var currentHour = today.format("hA");

//display todays date in the header
currentDate.textContent = today.format("ddd, MMMM Do");

//event listener to save inputted event
saveBtn.on("click", saveEvent);

//loop through the time slots to determine if they are past/present/future and asign a class for formating based on that
function init() {
  for (var i = 0; i < plannerEl.length; i++) {
    var hours = plannerEl[i].children[0].innerText;

    if (currentHour > hours) {
      plannerEl[i].children[1].classList.add("past");
    } else if (currentHour < hours) {
      plannerEl[i].children[1].classList.add("future");
    } else {
      plannerEl[i].children[1].classList.add("present");
    }
  }

    //get the event from local storage and display in the correct time slot.
    var itemEl = JSON.parse(localStorage.getItem('Planned Event'))||[];
    for( var i = 0; i < itemEl.length; i++){
        $(`#planned-event-${itemEl[i].time}`).val(itemEl[i].text);
    }
}
//save event information to local storage
function saveEvent(e) {
  e.preventDefault;
  var clickTarget = $(this).siblings(".planned-event");
  var textValue = $(this).siblings(".planned-event").val();
  var timeValue = $(this).siblings(".planned-event").attr('data-id');

  var storageEL = {
    text: textValue,
    time: timeValue,
  }
  storageInfo.push(storageEL);

  //disable the text area from editing and enable it on a second click
  if (clickTarget[0].disabled) {
    clickTarget[0].disabled = false;
  } else {
    clickTarget[0].disabled = true;
  }

  localStorage.setItem("Planned Event", JSON.stringify(storageInfo));

}

init();
