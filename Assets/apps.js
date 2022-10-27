var currentDate = document.getElementById('currentDay');
var plannerEl = document.getElementById('')

var today = moment()

currentDate.textContent = today.format('ddd, MMMM Do');
