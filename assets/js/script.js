$(document).ready(function () {
  // textarea elements
  let saveBtn = $(".save-icon");
  let containerEl = $(".container");
  let schedule9am = $("#hour-9");
  let schedule10am = $("#hour-10");
  let schedule11am = $("#hour-11");
  let schedule12pm = $("#hour-12");
  let schedule1pm = $("#hour-1");
  let schedule2pm = $("#hour-2");
  let schedule3pm = $("#hour-3");
  let schedule4pm = $("#hour-4");
  let schedule5pm = $("#hour-5");

  let hourElArray = [
    schedule9am,
    schedule10am,
    schedule11am,
    schedule12pm,
    schedule1pm,
    schedule2pm,
    schedule3pm,
    schedule4pm,
    schedule5pm,
  ];
  function saveTime() {
    console.log("saveTime");
  }
  function getCurrentTime() {
    var today = moment();

    //displays time in header
    $("#timeNow").text(today.format("dddd MMMM Do YYYY, h:mm:ss a"));

    //change appearance of past, present, and future schedule blocks
    let now = Number(moment().format("kk"));

    for (let i = 0; i < hourElArray.length; i++) {
      var hourEl = hourElArray[i];

      var hourId = hourEl.attr("id");
      var hour = Number(hourEl.attr("data-hour"));
      var savedEvent = window.localStorage.getItem(hourId);
      console.log(hourEl);
      if (savedEvent) {
        hourEl.children("textarea").val(savedEvent);
      }
      if (now > hour) {
        console.log(typeof now, typeof hourEl.attr("data-hour"));
        hourEl.addClass("past");
      } else if (now === hour) {
        hourEl.addClass("present");
      } else {
        hourEl.addClass("future");
      }
    }
  }
  getCurrentTime();
  // console.log(currentTime);

  $(".saveBtn").on("click", function () {
    var $textarea = $(this).siblings("textarea");
    var $parent = $(this).parent().attr("id");
    window.localStorage.setItem($parent, $textarea.val());
    console.log($parent);
    console.log($textarea.val());
  });
});
