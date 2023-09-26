function RandomRGB() {
  var randomR = Math.round(Math.random() * 255);
  var randomG = Math.round(Math.random() * 255);
  var randomB = Math.round(Math.random() * 255);
  return `rgb(${randomR},${randomG},${randomB})`;
}

$("#start").click(() => {
  $(".box").html(`
        <h1 class="h1">${RandomRGB()}</h1>
        <h3>Score: 0</h3>
        <div class="color-boxes">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    `);

  colorBox();
 
});

function colorBox() {
  $(".color-boxes div").each(function () {
    $(this).css("background-color", RandomRGB());
  });
  var indexRandom = Math.round(Math.random() * 5);
//   console.log(indexRandom);
  var h1Value = $(".h1").text();
//   console.log(h1Value);
  $(".color-boxes div").eq(indexRandom).css("background-color", h1Value);

  $(".color-boxes div").click(()=>{
    console.log("click")
    var backgroundColor = $(this).css("background-color");

    console.log(backgroundColor)
})
}


