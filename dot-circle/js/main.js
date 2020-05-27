(function ($) {
  // window.alert("Эта версия сайта находится в разработке !");

  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 50) {
  //     $(".navbar, .dropdown-menu").css("background-color", "white");
  //   } else {
  //     $(".navbar").css("background-color", "unset");
  //   }
  // });

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

  //--------------------Slick---------------------

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
        first_name = $("#name"),
        last_name = $("#lastname"),
        email = $("#email");
      phone = $("#phone");
      message = $("#message");

      $.ajax({
        url: "./php/backend.php",
        type: "POST",
        data: (data = {
          first_name: first_name.val(),
          last_name: last_name.val(),
          email: email.val(),
          phone: phone.val(),
          message: message.val(),
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

    $("#contactForm2").on("submit", function (event) {
      event.preventDefault();

      var form = $("#contactForm2"),
        button = $("#button2"),
        answer = $("#answer2"),
        loader = $("#loader2"),
        first_name = $("#name2"),
        last_name = $("#lastname2"),
        email = $("#email2");
      phone = $("#phone2");
      message = $("#message2");

      $.ajax({
        url: "./php/backend.php",
        type: "POST",
        data: (data = {
          first_name: first_name.val(),
          last_name: last_name.val(),
          email: email.val(),
          phone: phone.val(),
          message: message.val(),
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

    $("#contactForm3").on("submit", function (event) {
      event.preventDefault();

      var form = $("#contactForm3"),
        button = $("#button3"),
        answer = $("#answer3"),
        loader = $("#loader3"),
        first_name = $("#name3"),
        last_name = $("#lastname3"),
        email = $("#email3"),
        phone = $("#phone3"),
        message = $("#message3");

      $.ajax({
        url: "./php/backend.php",
        type: "POST",
        data: (data = {
          first_name: first_name.val(),
          last_name: last_name.val(),
          email: email.val(),
          phone: phone.val(),
          message: message.val(),
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

  $(doc).attr("oncopy", "return true;");

  $(doc).on("contextmenu", true);
  // -------------text!!------------------------------

  // -------------работа с меню------------------------

  // var tabs = $(".navbar");
  // var doc = $("#main");
  //
  //
  // $(tabs).on("click", "#tab-main", function () {
  //     $("body .tabs").removeClass("active");
  //     $("#main").addClass("active");
  //     $('body,html').animate({
  //         scrollTop: 0
  //     }, 400);
  //     return false;
  // });
  //
  // $(tabs).on("click", "#tab-logo", function () {
  //     $("body .tabs").removeClass("active");
  //     $("#main").addClass("active");
  //     $('body,html').animate({
  //         scrollTop: 0
  //     }, 400);
  //     return false;
  // });
  //
  // $(tabs).on("click", "#tab-lifeManagement", function () {
  //     $("body .tabs").removeClass("active");
  //     $("#lifeManagement").addClass("active");
  //     $("#dropdown-menuSecond").removeClass("show");
  //     $(".navbar-collapse").removeClass("show");
  //     $('body,html').animate({
  //         scrollTop: 0
  //     }, 400);
  //     return false;
  // });
  //
  // $(tabs).on("click", "#tab-timeManagement", function () {
  //     $("body .tabs").removeClass("active");
  //     $("#timeManagement").addClass("active");
  //     $("#dropdown-menuFirst").removeClass("show");
  //     $(".navbar-collapse").removeClass("show");
  //     $('body,html').animate({
  //         scrollTop: 0
  //     }, 400);
  //     return false;
  // });
  //
  // $(tabs).on("click", "#tab-vebinars", function () {
  //     $("body .tabs").removeClass("active");
  //     $("#vebinars").addClass("active");
  //     $('body,html').animate({
  //         scrollTop: 0
  //     }, 400);
  //     return false;
  // });
  //
  // $(tabs).on("click", "#tab-gallery", function () {
  //     $("body .tabs").removeClass("active");
  //     $("#gallery").addClass("active");
  //     $('body,html').animate({
  //         scrollTop: 0
  //     }, 400);
  //     return false;
  // });
  //
  // $(tabs).on("click", "#tab-personalProductivity", function () {
  //     $("body .tabs").removeClass("active");
  //     $("#personalProductivity").addClass("active");
  //     $('body,html').animate({
  //         scrollTop: 0
  //     }, 400);
  //     return false;
  // });
  //
  // $(tabs).on("click", "#tab-stressControl", function () {
  //     $("body .tabs").removeClass("active");
  //     $("#stressControl").addClass("active");
  //     $("#dropdown-menuFirst").removeClass("show");
  //     $(".navbar-collapse").removeClass("show");
  //     $('body,html').animate({
  //         scrollTop: 0
  //     }, 400);
  //     return false;
  // });
  //
  // $(tabs).on("click", "#tab-intuitiveManagement", function () {
  //     $("body .tabs").removeClass("active");
  //     $("#intuitiveManagement").addClass("active");
  //     $("#dropdown-menuFirst").removeClass("show");
  //     $(".navbar-collapse").removeClass("show");
  //     $('body,html').animate({
  //         scrollTop: 0
  //     }, 400);
  //     return false;
  // });
  //
  // $(tabs).on("click", "#tab-motivationLecture", function () {
  //     $("body .tabs").removeClass("active");
  //     $("#motivationLecture").addClass("active");
  //     $('body,html').animate({
  //         scrollTop: 0
  //     }, 400);
  //     return false;
  // });
  //
  // $(tabs).on("click", "#tab-selfDev", function () {
  //     $("body .tabs").removeClass("active");
  //     $("#selfDev").addClass("active");
  //     $("#dropdown-menuFirst").removeClass("show");
  //     $(".navbar-collapse").removeClass("show");
  //     $('body,html').animate({
  //         scrollTop: 0
  //     }, 400);
  //     return false;
  // });
  //
  // $(tabs).on("click", "#tab-transformation", function () {
  //     $("body .tabs").removeClass("active");
  //     $("#transformation").addClass("active");
  //     $("#dropdown-menuSecond").removeClass("show");
  //     $(".navbar-collapse").removeClass("show");
  //     $('body,html').animate({
  //         scrollTop: 0
  //     }, 400);
  //     return false;
  // });
  //
  // $(tabs).on("click", "#tab-better", function () {
  //     $("body .tabs").removeClass("active");
  //     $("#better").addClass("active");
  //     $("#dropdown-menuSecond").removeClass("show");
  //     $(".navbar-collapse").removeClass("show");
  //     $('body,html').animate({
  //         scrollTop: 0
  //     }, 400);
  //     return false;
  // });
  //
  // $(tabs).on("click", "#tab-power", function () {
  //     $("body .tabs").removeClass("active");
  //     $("#power").addClass("active");
  //     $('body,html').animate({
  //         scrollTop: 0
  //     }, 400);
  //     return false;
  // });
  //
  // $(tabs).on("click", "#tab-FAQ", function () {
  //     $("body .tabs").removeClass("active");
  //     $("#FAQ").addClass("active");
  //     $('body,html').animate({
  //         scrollTop: 0
  //     }, 400);
  //     return false;
  // });
  //
  // $(tabs).on("click", "#tab-consulting", function () {
  //     $("body .tabs").removeClass("active");
  //     $("#consulting").addClass("active");
  //     $('body,html').animate({
  //         scrollTop: 0
  //     }, 400);
  //     return false;
  // });
  //
  // $(tabs).on("click", "#tab-individual-consulting", function () {
  //     $("body .tabs").removeClass("active");
  //     $("#individual-consulting").addClass("active");
  //     $('body,html').animate({
  //         scrollTop: 0
  //     }, 400);
  //     return false;
  // });
  //
  //
  //
  // $(tabs).on("click", "#tab-openPrograms", function () {
  //     $("body .tabs").removeClass("active");
  //     $("#openPrograms").addClass("active");
  //     $('body,html').animate({
  //         scrollTop: 0
  //     }, 400);
  //     return false;
  // });

  //-------------------cards section seven--------------------------

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

  var delay = 15000; //in milleseconds

  jQuery(document).ready(function ($) {
    setTimeout(function () {
      showNewsletterPopup();
    }, delay);

    $(".popup-close").click(function () {
      $(".newsletter-overlay").hide();

      //when closed create a cookie to prevent popup to show again on refresh
      //setCookie('newsletter-popup', 'popped', 30);
    });
  });

  function showNewsletterPopup() {
    $(".newsletter-overlay").show();
    if (getCookie("newsletter-popup") == "") {
      setCookie("newsletter-popup", "popped", 30);
    } else {
      console.log("Newsletter popup blocked.");
      $(".newsletter-overlay").hide();
    }
  }

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = jQuery.trim(ca[i]);
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
  }

  $(document).ready(function () {
    $("video").each(function (i, obj) {
      $(this).on("mouseover", function () {
        hoverVideo(i);
      });
      $(this).on("mouseout", function () {
        hideVideo(i);
      });
    });
  });

  function hoverVideo(i) {
    $(".video")[i].play();
  }

  function hideVideo(i) {
    $(".video")[i].pause();
  }
})(jQuery);
