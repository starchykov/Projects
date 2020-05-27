(function ($) {
  $("#blogCarousel").carousel({
    interval: 2000,
  });

  $(document).ready(function () {
    $("#btn1").click(function () {
      $("body,html").animate(
        {
          scrollTop: $("#top").offset().top,
        },
        1000
      );
    });
  });

  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $("#btn1").fadeIn();
      } else {
        $("#btn1").fadeOut();
      }
    });
    // scroll body to 0px on click
    $("#btn1").click(function () {
      $("#back-to-top").tooltip("hide");
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        400
      );
      return false;
    });

    $("#btn1").tooltip("show");
  });
  // $('#btn1').tooltip('show');

  $(document).ready(function ($) {
    // Добавляем маску для поля с номера телефона
    $("#phone").mask("+7 (999) 999-99-99");

    // Проверяет отмечен ли чекбокс согласия
    // с обработкой персональных данных
    $("#check").on("click", function () {
      if ($("#check").prop("checked")) {
        $("#button").attr("disabled", false);
      } else {
        $("#button").attr("disabled", true);
      }
    });

    // Отправляет данные из формы на сервер и получает ответ
    $("#contactForm").on("submit", function (event) {
      event.preventDefault();

      var form = $("#contactForm"),
        button = $("#button"),
        answer = $("#answer"),
        loader = $("#loader");

      $.ajax({
        url: "handler.php",
        type: "POST",
        data: form.serialize(),
        beforeSend: function () {
          answer.empty();
          button.attr("disabled", true).css("margin-bottom", "20px");
          loader.fadeIn();
        },
        success: function (result) {
          loader.fadeOut(300, function () {
            answer.text(result);
          });
          form.find(".form-control").val("");
          button.attr("disabled", false);
        },
        error: function () {
          loader.fadeOut(300, function () {
            answer.text("Произошла ошибка! Попробуйте позже.");
          });
          button.attr("disabled", false);
        },
      });
    });
  });
})(jQuery);
