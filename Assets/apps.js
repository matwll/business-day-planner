//hooks into the DOM
var currentDate = document.getElementById('currentDay');
var plannerEl = document.querySelectorAll('.row');
var plannedEvent = document.getElementById('planned-event');
var saveBtn = $(document.querySelectorAll('.saveBtn'));

//variable to store current time/date information
var today = moment()
//variable to store the current hour
var currentHour = today.format('hA');

//display todays date in the header
currentDate.textContent = today.format('ddd, MMMM Do');

//event listener to save inputted event
saveBtn.on('click', saveEvent);

//loop through the time slots to determine if they are past/present/future and asign a class for formating based on that
for(var i = 0; i < plannerEl.length; i++){

    var hours = plannerEl[i].children[0].innerText;
    console.log(currentHour);
    console.log(hours);

    if (currentHour > hours){
        plannerEl[i].children[1].classList.add('past');
    }else if (currentHour < hours){
        plannerEl[i].children[1].classList.add('future');
    }else {
        plannerEl[i].children[1].classList.add('present');
    }
}

function saveEvent(event){
    event.preventDefault;
}