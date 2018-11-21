$(function() {
  // let meter1 = 0;
  // let meter2 = 0;
  // let meter3 = 0;
  let meterNumber = [0, 0, 0];
  let flag = 0;
  $("h1").css("color", "blue");

  // $("#item1").on("click", () => {
  //   meter1++;
  // });
  //
  // $("#item2").on("click", () => {
  //   meter2++;
  // });
  //
  // $("#item3").on("click", () => {
  //   meter3++;
  // });

  $(".item").on("click", () => {
    meterNumber[flag - 1]++;
    let meter = Math.max.apply(null, meterNumber);
    let props1 = {
      width: (meterNumber[0] / meter) * 80 + "%",
      "background-color": "red"
    };
    let props2 = {
      width: (meterNumber[1] / meter) * 80 + "%",
      "background-color": "blue"
    };
    let props3 = {
      width: (meterNumber[2] / meter) * 80 + "%",
      "background-color": "green"
    };
    $(".koumoku1-background").css(props1);
    $(".count1").text(meterNumber[0]);
    $(".koumoku2-background").css(props2);
    $(".count2").text(meterNumber[1]);
    $(".koumoku3-background").css(props3);
    $(".count3").text(meterNumber[2]);
  });

  let flagCount = () => {
    if (flag === 3) {
      flag = 1;
    } else {
      flag++;
    }
  };

  let Roop = () => {
    flagCount();
    $(".koumoku").css("background-color", "#ffffff");
    $("#koumoku" + flag).css("background-color", "yellow");
  };

  setInterval(Roop, 1200);
});
