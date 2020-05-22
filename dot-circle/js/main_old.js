(function ($) {
  // window.alert("Эта версия сайта находится в разработке !");

  $("#numbers").carousel({
    // interval: 2000
  });

  $(document).ready(function () {
    $("#myModal").modal("show");
  });

  // $('.comm-item').on("click", ".more", function () {
  //     $('.more-text').css({'height': 'auto'});
  // });

  //----------------------Slick----------------------
  $(document).ready(function () {
    $(".mySlider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1170,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });

  $(document).ready(function () {
    $(".Slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1170,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });

  $(document).ready(function () {
    $("#comments").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 1170,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });

  //----------------------Slick----------------------

  // $('.dropdown-toggle').click(function (e) {
  //     if ($(document).width() > 768) {
  //         e.preventDefault();
  //         var url = $(this).attr('href');
  //         if (url !== '#') {
  //             window.location.href = url;
  //         }
  //     }
  // });

  // -------------scroll------------------------------
  $(document).ready(function () {
    var butt = $("#btn1");

    $(butt).click(function () {
      $("body,html").animate(
        {
          scrollTop: $(".top-block").offset().top,
        },
        1000
      );
    });

    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $(butt).fadeIn();
      } else {
        $(butt).fadeOut();
      }
    });

    // scroll body to 0px on click
    $(butt).click(function () {
      $("#back-to-top").tooltip("hide");
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        400
      );
      return false;
    });

    $(butt).tooltip("show");

    // $('#btn1').tooltip('show');
  });
  // -------------scroll------------------------------

  // -------------form validation--------------------
  $(document).ready(function ($) {
    // Добавляем маску для поля с номера телефона
    // $('#phone').mask('+7 (999) 999-99-99');

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
        loader = $("#loader"),
        firstName = $("#name"),
        surName = $("#lastname"),
        email = $("#email");

      $.ajax({
        url: "./php/backend.php",
        type: "POST",
        data: (data = {
          firstName: firstName.val(),
          surName: surName.val(),
          email: email.val(),
        }),
        beforeSend: function () {
          answer.empty();
          button.attr("disabled", true).css("margin-bottom", "20px");
          loader.fadeIn();
        },
        success: function (result) {
          loader.fadeOut(300, function () {
            answer.text("Thanks for your treatment");
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
  // -------------form validation--------------------

  // -------------text!!------------------------------
  var doc = $("body");

  $(doc).attr("oncopy", "return false;");

  $(doc).on("contextmenu", false);
  // -------------text!!------------------------------

  // -------------работа с меню------------------------

  var tabs = $(".navbar");
  var doc = $("#main");

  $(tabs).on("click", "#tab-main", function () {
    $("body .tabs").removeClass("active");
    $("#main").addClass("active");
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });

  $(tabs).on("click", "#tab-logo", function () {
    $("body .tabs").removeClass("active");
    $("#main").addClass("active");
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });

  $(tabs).on("click", "#tab-lifeManagement", function () {
    $("body .tabs").removeClass("active");
    $("#lifeManagement").addClass("active");
    $("#dropdown-menuSecond").removeClass("show");
    $(".navbar-collapse").removeClass("show");
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });

  $(tabs).on("click", "#tab-timeManagement", function () {
    $("body .tabs").removeClass("active");
    $("#timeManagement").addClass("active");
    $("#dropdown-menuFirst").removeClass("show");
    $(".navbar-collapse").removeClass("show");
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });

  $(tabs).on("click", "#tab-vebinars", function () {
    $("body .tabs").removeClass("active");
    $("#vebinars").addClass("active");
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });

  $(tabs).on("click", "#tab-gallery", function () {
    $("body .tabs").removeClass("active");
    $("#gallery").addClass("active");
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });

  $(tabs).on("click", "#tab-personalProductivity", function () {
    $("body .tabs").removeClass("active");
    $("#personalProductivity").addClass("active");
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });

  $(tabs).on("click", "#tab-stressControl", function () {
    $("body .tabs").removeClass("active");
    $("#stressControl").addClass("active");
    $("#dropdown-menuFirst").removeClass("show");
    $(".navbar-collapse").removeClass("show");
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });

  $(tabs).on("click", "#tab-intuitiveManagement", function () {
    $("body .tabs").removeClass("active");
    $("#intuitiveManagement").addClass("active");
    $("#dropdown-menuFirst").removeClass("show");
    $(".navbar-collapse").removeClass("show");
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });

  $(tabs).on("click", "#tab-motivationLecture", function () {
    $("body .tabs").removeClass("active");
    $("#motivationLecture").addClass("active");
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });

  $(tabs).on("click", "#tab-selfDev", function () {
    $("body .tabs").removeClass("active");
    $("#selfDev").addClass("active");
    $("#dropdown-menuFirst").removeClass("show");
    $(".navbar-collapse").removeClass("show");
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });

  $(tabs).on("click", "#tab-transformation", function () {
    $("body .tabs").removeClass("active");
    $("#transformation").addClass("active");
    $("#dropdown-menuSecond").removeClass("show");
    $(".navbar-collapse").removeClass("show");
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });

  $(tabs).on("click", "#tab-better", function () {
    $("body .tabs").removeClass("active");
    $("#better").addClass("active");
    $("#dropdown-menuSecond").removeClass("show");
    $(".navbar-collapse").removeClass("show");
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });

  $(tabs).on("click", "#tab-power", function () {
    $("body .tabs").removeClass("active");
    $("#power").addClass("active");
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });

  $(tabs).on("click", "#tab-FAQ", function () {
    $("body .tabs").removeClass("active");
    $("#FAQ").addClass("active");
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });

  $(tabs).on("click", "#tab-consulting", function () {
    $("body .tabs").removeClass("active");
    $("#consulting").addClass("active");
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });

  $(tabs).on("click", "#tab-individual-consulting", function () {
    $("body .tabs").removeClass("active");
    $("#individual-consulting").addClass("active");
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });

  $(tabs).on("click", "#tab-openPrograms", function () {
    $("body .tabs").removeClass("active");
    $("#openPrograms").addClass("active");
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });

  //-------------------------------------cards section seven--------------------------

  $(document).on("mouseenter", "#rc-first", function () {
    $("body #dt-first").css("display", "flex");
    $("body #dt-second").css("display", "none");
    $("body #dt-third").css("display", "none");
  });
  $(document).on("mouseenter", "#rc-second", function () {
    $("body #dt-second").css("display", "flex");
    $("body #dt-first").css("display", "none");
    $("body #dt-third").css("display", "none");
  });
  $(document).on("mouseenter", "#rc-third", function () {
    $("body #dt-third").css("display", "flex");
    $("body #dt-first").css("display", "none");
    $("body #dt-second").css("display", "none");
  });

  $(doc).on("click", "#card-FAQ", function () {
    $("body .tabs").removeClass("active");
    $("#FAQ").addClass("active");
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
  $(doc).on("click", "#card-vebinars", function () {
    $("body .tabs").removeClass("active");
    $("#vebinars").addClass("active");
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });

  //-----------------------lang----------------

  // $(tabs).on("click", "#lang-eng", function () {
  //     $(".eng").removeClass("dn").addClass("vis");
  //     $(".ru").removeClass("vis").addClass("dn");
  //     $(".az").removeClass("vis").addClass("dn");
  // });
  //
  // $(tabs).on("click", "#lang-ru", function () {
  //     $(".ru").removeClass("dn").addClass("vis");
  //     $(".eng").removeClass("vis").addClass("dn");
  //     $(".az").removeClass("vis").addClass("dn");
  // });
  //
  // $(tabs).on("click", "#lang-az", function () {
  //     $(".az").removeClass("dn").addClass("vis");
  //     $(".eng").removeClass("vis").addClass("dn");
  //     $(".ru").removeClass("vis").addClass("dn")
  // });

  $(function () {
    var choosenLang = localStorage.getItem("lang") || "eng";
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

  //-----------------------lang----------------------------

  // --------------------------comments-------------------

  $(".more").on("click", function () {
    // declare text for read more label
    var text_more;
    // declare target collapsible content
    var content_collapse = $(this).data("target");
    // declare text for close label
    var text_close = $("[data-collapse=" + content_collapse + "]").data(
      "text-close"
    );

    // if content is not collapsed
    if (!$(this).hasClass("collapse-open")) {
      $(this).data("text-more", $(this).html());
      text_more = $(this).data("text-more");
      $(this).addClass("collapse-open");
      $(this).html(text_close);
      $("[data-collapse=" + content_collapse + "]").slideDown(300);
    } else {
      // if content is collapsed
      text_more = $(this).data("text-more");
      $(this).html(text_more);
      $(this).removeClass("collapse-open");
      $("[data-collapse=" + content_collapse + "]").slideUp(300);
    }
  });

  //--------------------------------------comments----------------------------

  AOS.init();
})(jQuery);
