$(function () {
  const slider = $("#slider-range");
  const gamesListBtn = $("#gamesListBtn");
  const createAnonymousGameBtn = $("#createAnonymousGameBtn");
  const anonymousPlayersPanel = $("#anonymousPlayers");
  const createAnonymousGamePanel = $("#createAnonymousGame");

  $(document).ready(function () {
    updateRangeValues(slider);
    anonymousPlayersPanel.show();
    createAnonymousGamePanel.hide();
  });

  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 1000,
    step: 10,
    values: [0, 300],
    slide: function (event, ui) {
      updateRangeValues(slider);
    },
  });

  gamesListBtn.on("click", () => {
    gamesListBtn.addClass("active");
    createAnonymousGameBtn.removeClass("active");
    anonymousPlayersPanel.show();
    createAnonymousGamePanel.hide();
  });

  createAnonymousGameBtn.on("click", () => {
    createAnonymousGameBtn.addClass("active");
    gamesListBtn.removeClass("active");
    anonymousPlayersPanel.hide();
    createAnonymousGamePanel.show();
  });

  function updateRangeValues(slider) {
    const ranges = $(".ui-slider-range");
    const minValueLabel = $("#minValue");
    const maxValueLabel = $("#maxValue");
    const currentMinPos = Number.parseFloat(ranges.css("left"));
    const currentMaxPos = currentMinPos + ranges.width();
    const currentMinValue = slider.slider("values", 0);
    const currentMaxValue = slider.slider("values", 1);
    minValueLabel.css("left", `${currentMinPos}px`);
    maxValueLabel.css("left", `${currentMaxPos}px`);

    if (currentMinValue > 10) {
      minValueLabel.show();
      minValueLabel.text(Math.round(currentMinValue));
    } else {
      minValueLabel.hide();
    }
    if (currentMaxValue < 990) {
      maxValueLabel.show();
      maxValueLabel.text(Math.round(currentMaxValue));
    } else {
      maxValueLabel.hide();
    }
  }

  $(function () {
    var choosenLang = localStorage.getItem("lang") || "ru";
    $("#" + choosenLang + "-sw").addClass("visible");
    $("." + choosenLang).show();
    $(".lang").on("click", function () {
      $(".visible").removeClass("visible");
      $(this).addClass("visible");
      var lang = $(this).data("lang");
      $(".lang-text").hide();
      $("." + lang).show();
      localStorage.setItem("lang", lang);
    });
  });

  $(function () {
    var choosenLang = localStorage.getItem("lang") || "mb-ru";
    $("#" + choosenLang + "-sw-mb").addClass("visible");
    $("." + choosenLang).show();
    $(".lang").on("click", function () {
      $(".visible").removeClass("visible");
      $(this).addClass("visible");
      var lang = $(this).data("lang");
      $(".lang-text").hide();
      $("." + lang).show();
      localStorage.setItem("lang", lang);
    });
  });

  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  $(".menu-toggle").click(function () {
    $("ul").toggleClass("opening");
    $(this).toggleClass("open");
  });

  $(".next").on("click", function (e) {
    $(document).scrollTop($(this).parent().next().offset().top);
    // $(this).parent().next() // this is the next div container.
    return false;
  });
});
