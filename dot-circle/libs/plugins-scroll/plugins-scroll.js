(function (e) {
  e.extend({
    browserSelector: function () {
      var e = navigator.userAgent,
        t = e.toLowerCase(),
        n = function (e) {
          return t.indexOf(e) > -1;
        },
        r = "gecko",
        i = "webkit",
        s = "safari",
        o = "opera",
        u = document.documentElement,
        a = [
          !/opera|webtv/i.test(t) && /msie\s(\d)/.test(t)
            ? "ie ie" + parseFloat(navigator.appVersion.split("MSIE")[1])
            : n("firefox/2")
            ? r + " ff2"
            : n("firefox/3.5")
            ? r + " ff3 ff3_5"
            : n("firefox/3")
            ? r + " ff3"
            : n("gecko/")
            ? r
            : n("opera")
            ? o +
              (/version\/(\d+)/.test(t)
                ? " " + o + RegExp.jQuery1
                : /opera(\s|\/)(\d+)/.test(t)
                ? " " + o + RegExp.jQuery2
                : "")
            : n("konqueror")
            ? "konqueror"
            : n("chrome")
            ? i + " chrome"
            : n("iron")
            ? i + " iron"
            : n("applewebkit/")
            ? i +
              " " +
              s +
              (/version\/(\d+)/.test(t) ? " " + s + RegExp.jQuery1 : "")
            : n("mozilla/")
            ? r
            : "",
          n("j2me")
            ? "mobile"
            : n("iphone")
            ? "iphone"
            : n("ipod")
            ? "ipod"
            : n("mac")
            ? "mac"
            : n("darwin")
            ? "mac"
            : n("webtv")
            ? "webtv"
            : n("win")
            ? "win"
            : n("freebsd")
            ? "freebsd"
            : n("x11") || n("linux")
            ? "linux"
            : "",
          "js",
        ];
      c = a.join(" ");
      u.className += " " + c;
    },
  });
})(jQuery);
(function (e) {
  e.extend({
    smoothScroll: function () {
      function c() {
        var e = false;
        if (document.URL.indexOf("google.com/reader/view") > -1) {
          e = true;
        }
        if (t.excluded) {
          var r = t.excluded.split(/[,\n] ?/);
          r.push("mail.google.com");
          for (var i = r.length; i--; ) {
            if (document.URL.indexOf(r[i]) > -1) {
              a && a.disconnect();
              N("mousewheel", g);
              e = true;
              n = true;
              break;
            }
          }
        }
        if (e) {
          N("keydown", y);
        }
        if (t.keyboardSupport && !e) {
          T("keydown", y);
        }
      }
      function h() {
        if (!document.body) return;
        var e = document.body;
        var i = document.documentElement;
        var f = window.innerHeight;
        var l = e.scrollHeight;
        o = document.compatMode.indexOf("CSS") >= 0 ? i : e;
        u = e;
        c();
        s = true;
        if (top != self) {
          r = true;
        } else if (l > f && (e.offsetHeight <= f || i.offsetHeight <= f)) {
          var h = false;
          var p = function () {
            if (!h && i.scrollHeight != document.height) {
              h = true;
              setTimeout(function () {
                i.style.height = document.height + "px";
                h = false;
              }, 500);
            }
          };
          i.style.height = "auto";
          setTimeout(p, 10);
          var d = { attributes: true, childList: true, characterData: false };
          a = new _(p);
          a.observe(e, d);
          if (o.offsetHeight <= f) {
            var v = document.createElement("div");
            v.style.clear = "both";
            e.appendChild(v);
          }
        }
        if (document.URL.indexOf("mail.google.com") > -1) {
          var m = document.createElement("style");
          m.innerHTML = ".iu { visibility: hidden }";
          (document.getElementsByTagName("head")[0] || i).appendChild(m);
        } else if (document.URL.indexOf("www.facebook.com") > -1) {
          var g = document.getElementById("home_stream");
          g && (g.style.webkitTransform = "translateZ(0)");
        }
        if (!t.fixedBackground && !n) {
          e.style.backgroundAttachment = "scroll";
          i.style.backgroundAttachment = "scroll";
        }
      }
      function m(e, n, r, i) {
        i || (i = 1e3);
        k(n, r);
        if (t.accelerationMax != 1) {
          var s = +new Date();
          var o = s - v;
          if (o < t.accelerationDelta) {
            var u = (1 + 30 / o) / 2;
            if (u > 1) {
              u = Math.min(u, t.accelerationMax);
              n *= u;
              r *= u;
            }
          }
          v = +new Date();
        }
        p.push({
          x: n,
          y: r,
          lastX: n < 0 ? 0.99 : -0.99,
          lastY: r < 0 ? 0.99 : -0.99,
          start: +new Date(),
        });
        if (d) {
          return;
        }
        var a = e === document.body;
        var f = function (s) {
          var o = +new Date();
          var u = 0;
          var l = 0;
          for (var c = 0; c < p.length; c++) {
            var h = p[c];
            var v = o - h.start;
            var m = v >= t.animationTime;
            var g = m ? 1 : v / t.animationTime;
            if (t.pulseAlgorithm) {
              g = P(g);
            }
            var y = (h.x * g - h.lastX) >> 0;
            var b = (h.y * g - h.lastY) >> 0;
            u += y;
            l += b;
            h.lastX += y;
            h.lastY += b;
            if (m) {
              p.splice(c, 1);
              c--;
            }
          }
          if (a) {
            window.scrollBy(u, l);
          } else {
            if (u) e.scrollLeft += u;
            if (l) e.scrollTop += l;
          }
          if (!n && !r) {
            p = [];
          }
          if (p.length) {
            M(f, e, i / t.frameRate + 1);
          } else {
            d = false;
          }
        };
        M(f, e, 0);
        d = true;
      }
      function g(e) {
        if (!s) {
          h();
        }
        var n = e.target;
        var r = x(n);
        if (
          !r ||
          e.defaultPrevented ||
          C(u, "embed") ||
          (C(n, "embed") && /\.pdf/i.test(n.src))
        ) {
          return true;
        }
        var i = e.wheelDeltaX || 0;
        var o = e.wheelDeltaY || 0;
        if (!i && !o) {
          o = e.wheelDelta || 0;
        }
        if (!t.touchpadSupport && A(o)) {
          return true;
        }
        if (Math.abs(i) > 1.2) {
          i *= t.stepSize / 120;
        }
        if (Math.abs(o) > 1.2) {
          o *= t.stepSize / 120;
        }
        m(r, -i, -o);
        e.preventDefault();
      }
      function y(e) {
        var n = e.target;
        var r =
          e.ctrlKey ||
          e.altKey ||
          e.metaKey ||
          (e.shiftKey && e.keyCode !== l.spacebar);
        if (
          /input|textarea|select|embed/i.test(n.nodeName) ||
          n.isContentEditable ||
          e.defaultPrevented ||
          r
        ) {
          return true;
        }
        if (C(n, "button") && e.keyCode === l.spacebar) {
          return true;
        }
        var i,
          s = 0,
          o = 0;
        var a = x(u);
        var f = a.clientHeight;
        if (a == document.body) {
          f = window.innerHeight;
        }
        switch (e.keyCode) {
          case l.up:
            o = -t.arrowScroll;
            break;
          case l.down:
            o = t.arrowScroll;
            break;
          case l.spacebar:
            i = e.shiftKey ? 1 : -1;
            o = -i * f * 0.9;
            break;
          case l.pageup:
            o = -f * 0.9;
            break;
          case l.pagedown:
            o = f * 0.9;
            break;
          case l.home:
            o = -a.scrollTop;
            break;
          case l.end:
            var c = a.scrollHeight - a.scrollTop - f;
            o = c > 0 ? c + 10 : 0;
            break;
          case l.left:
            s = -t.arrowScroll;
            break;
          case l.right:
            s = t.arrowScroll;
            break;
          default:
            return true;
        }
        m(a, s, o);
        e.preventDefault();
      }
      function b(e) {
        u = e.target;
      }
      function S(e, t) {
        for (var n = e.length; n--; ) w[E(e[n])] = t;
        return t;
      }
      function x(e) {
        var t = [];
        var n = o.scrollHeight;
        do {
          var i = w[E(e)];
          if (i) {
            return S(t, i);
          }
          t.push(e);
          if (n === e.scrollHeight) {
            if (!r || o.clientHeight + 10 < n) {
              return S(t, document.body);
            }
          } else if (e.clientHeight + 10 < e.scrollHeight) {
            overflow = getComputedStyle(e, "").getPropertyValue("overflow-y");
            if (overflow === "scroll" || overflow === "auto") {
              return S(t, e);
            }
          }
        } while ((e = e.parentNode));
      }
      function T(e, t, n) {
        window.addEventListener(e, t, n || false);
      }
      function N(e, t, n) {
        window.removeEventListener(e, t, n || false);
      }
      function C(e, t) {
        return (e.nodeName || "").toLowerCase() === t.toLowerCase();
      }
      function k(e, t) {
        e = e > 0 ? 1 : -1;
        t = t > 0 ? 1 : -1;
        if (i.x !== e || i.y !== t) {
          i.x = e;
          i.y = t;
          p = [];
          v = 0;
        }
      }
      function A(e) {
        if (!e) return;
        e = Math.abs(e);
        f.push(e);
        f.shift();
        clearTimeout(L);
        var t = f[0] == f[1] && f[1] == f[2];
        var n = O(f[0], 120) && O(f[1], 120) && O(f[2], 120);
        return !(t || n);
      }
      function O(e, t) {
        return Math.floor(e / t) == e / t;
      }
      function D(e) {
        var n, r, i;
        e = e * t.pulseScale;
        if (e < 1) {
          n = e - (1 - Math.exp(-e));
        } else {
          r = Math.exp(-1);
          e -= 1;
          i = 1 - Math.exp(-e);
          n = r + i * (1 - r);
        }
        return n * t.pulseNormalize;
      }
      function P(e) {
        if (e >= 1) return 1;
        if (e <= 0) return 0;
        if (t.pulseNormalize == 1) {
          t.pulseNormalize /= D(1);
        }
        return D(e);
      }
      var e = {
        frameRate: 150,
        animationTime: 700,
        stepSize: 80,
        pulseAlgorithm: true,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 50,
        touchpadSupport: true,
        fixedBackground: true,
        excluded: "",
      };
      var t = e;
      var n = false;
      var r = false;
      var i = { x: 0, y: 0 };
      var s = false;
      var o = document.documentElement;
      var u;
      var a;
      var f = [120, 120, 120];
      var l = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        spacebar: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36,
      };
      var p = [];
      var d = false;
      var v = +new Date();
      var w = {};
      setInterval(function () {
        w = {};
      }, 10 * 1e3);
      var E = (function () {
        var e = 0;
        return function (t) {
          return t.uniqueID || (t.uniqueID = e++);
        };
      })();
      var L;
      var M = (function () {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          function (e, t, n) {
            window.setTimeout(e, n || 1e3 / 60);
          }
        );
      })();
      var _ = window.MutationObserver || window.WebKitMutationObserver;
      T("mousedown", b);
      T("mousewheel", g);
      T("load", h);
    },
  });
})(jQuery);
