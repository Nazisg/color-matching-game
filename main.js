function RandomRGB() {
  var randomR = Math.round(Math.random() * 255);
  var randomG = Math.round(Math.random() * 255);
  var randomB = Math.round(Math.random() * 255);
  return `rgb(${randomR}, ${randomG}, ${randomB})`;
}
var score = 0;
var selectedValue = $("select").val();
$("select").on("change", () => {
  selectedValue = $("select").val();
});
var time = +selectedValue * 60;
console.log(time);

function Start(){
  $("#start").click(() => {
    Box();
    colorBox();
    var interval = setInterval(() => {
      time--;
      console.log(time);
      if (time === 0) {
        ResultBox();
        clearInterval(interval);
      }
    }, 1000);
  });
}
function Box() {
  $(".box").html(`
        <h1 class="h1">${RandomRGB()}</h1>
        <h3 class="h3Score">Score: ${score}</h3>
        <div class="color-boxes">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    `);
}
function ResultBox() {
  $(".box").html(`
  <h2>End!</h2>
  <h2>Result: ${score}</h2>
  <h3>Selected time: ${selectedValue} minute(s)</h3>
  <button id="again">Play again</button>
    `);
  $("#again").click(() => {
    $(".box").html(`
      <select>
        <option value="1">1 minute</option>
        <option value="3">3 minute</option>
        <option value="5">5 minute</option>
      </select>
      <button id="start">Start</button>
      `);
    score = 0;
    time = +selectedValue * 60;
   Start()
  });
}
function colorBox() {
  $(".color-boxes div").each(function () {
    $(this).css("background-color", RandomRGB());
  });
  var indexRandom = Math.round(Math.random() * 5);
  var h1Value = $(".h1").text();
  $(".color-boxes div").eq(indexRandom).css("background-color", h1Value);
  var colorBoxes = document.querySelectorAll(".color-boxes div");
  colorBoxes.forEach(function (box) {
    box.addEventListener("click", function () {
      var bgColor = box.style.backgroundColor;
      console.log("Background color: " + bgColor);
      console.log("h1Value:" + h1Value);
      if (bgColor == h1Value) {
        console.log("success");
        score++;
        $(".h3Score").html(`Score: ${score}`);
        $(".success").css("display", "flex");
        setTimeout(function () {
          $(".success").css("display", "none");
        }, 1000);
        Box();
        colorBox();
      } else {
        console.log("fail");
        $(".fail").css("display", "flex");
        setTimeout(function () {
          $(".fail").css("display", "none");
        }, 1000);
        Box();
        colorBox();
      }
    });
  });
}