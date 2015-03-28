! function() {
    function a(a) {
        return null != a && !isNaN(a)
    }

    function b(a) {
        return a.length
    }

    function c(a) {
        for (var b = 1; a * b % 1;) b *= 10;
        return b
    }

    function d(a, b) {
        try {
            for (var c in b) Object.defineProperty(a.prototype, c, {
                value: b[c],
                enumerable: !1
            })
        } catch (d) {
            a.prototype = b
        }
    }

    function e() {}

    function f(a) {
        return hh + a in this
    }

    function g(a) {
        return a = hh + a, a in this && delete this[a]
    }

    function h() {
        var a = [];
        return this.forEach(function(b) {
            a.push(b)
        }), a
    }

    function i() {
        var a = 0;
        for (var b in this) b.charCodeAt(0) === ih && ++a;
        return a
    }

    function j() {
        for (var a in this)
            if (a.charCodeAt(0) === ih) return !1;
        return !0
    }

    function k() {}

    function l(a, b, c) {
        return function() {
            var d = c.apply(b, arguments);
            return d === b ? a : d
        }
    }

    function m(a, b) {
        if (b in a) return b;
        b = b.charAt(0).toUpperCase() + b.substring(1);
        for (var c = 0, d = jh.length; d > c; ++c) {
            var e = jh[c] + b;
            if (e in a) return e
        }
    }

    function n() {}

    function o() {}

    function p(a) {
        function b() {
            for (var b, d = c, e = -1, f = d.length; ++e < f;)(b = d[e].on) && b.apply(this, arguments);
            return a
        }
        var c = [],
            d = new e;
        return b.on = function(b, e) {
            var f, g = d.get(b);
            return arguments.length < 2 ? g && g.on : (g && (g.on = null, c = c.slice(0, f = c.indexOf(g)).concat(c.slice(f + 1)), d.remove(b)), e && c.push(d.set(b, {
                on: e
            })), a)
        }, b
    }

    function q() {
        Ug.event.preventDefault()
    }

    function r() {
        for (var a, b = Ug.event; a = b.sourceEvent;) b = a;
        return b
    }

    function s(a) {
        for (var b = new o, c = 0, d = arguments.length; ++c < d;) b[arguments[c]] = p(b);
        return b.of = function(c, d) {
            return function(e) {
                try {
                    var f = e.sourceEvent = Ug.event;
                    e.target = a, Ug.event = e, b[e.type].apply(c, d)
                } finally {
                    Ug.event = f
                }
            }
        }, b
    }

    function t(a) {
        return lh(a, qh), a
    }

    function u(a) {
        return "function" == typeof a ? a : function() {
            return mh(a, this)
        }
    }

    function v(a) {
        return "function" == typeof a ? a : function() {
            return nh(a, this)
        }
    }

    function w(a, b) {
        function c() {
            this.removeAttribute(a)
        }

        function d() {
            this.removeAttributeNS(a.space, a.local)
        }

        function e() {
            this.setAttribute(a, b)
        }

        function f() {
            this.setAttributeNS(a.space, a.local, b)
        }

        function g() {
            var c = b.apply(this, arguments);
            null == c ? this.removeAttribute(a) : this.setAttribute(a, c)
        }

        function h() {
            var c = b.apply(this, arguments);
            null == c ? this.removeAttributeNS(a.space, a.local) : this.setAttributeNS(a.space, a.local, c)
        }
        return a = Ug.ns.qualify(a), null == b ? a.local ? d : c : "function" == typeof b ? a.local ? h : g : a.local ? f : e
    }

    function x(a) {
        return a.trim().replace(/\s+/g, " ")
    }

    function y(a) {
        return new RegExp("(?:^|\\s+)" + Ug.requote(a) + "(?:\\s+|$)", "g")
    }

    function z(a) {
        return a.trim().split(/^|\s+/)
    }

    function A(a, b) {
        function c() {
            for (var c = -1; ++c < e;) a[c](this, b)
        }

        function d() {
            for (var c = -1, d = b.apply(this, arguments); ++c < e;) a[c](this, d)
        }
        a = z(a).map(B);
        var e = a.length;
        return "function" == typeof b ? d : c
    }

    function B(a) {
        var b = y(a);
        return function(c, d) {
            if (e = c.classList) return d ? e.add(a) : e.remove(a);
            var e = c.getAttribute("class") || "";
            d ? (b.lastIndex = 0, b.test(e) || c.setAttribute("class", x(e + " " + a))) : c.setAttribute("class", x(e.replace(b, " ")))
        }
    }

    function C(a, b, c) {
        function d() {
            this.style.removeProperty(a)
        }

        function e() {
            this.style.setProperty(a, b, c)
        }

        function f() {
            var d = b.apply(this, arguments);
            null == d ? this.style.removeProperty(a) : this.style.setProperty(a, d, c)
        }
        return null == b ? d : "function" == typeof b ? f : e
    }

    function D(a, b) {
        function c() {
            delete this[a]
        }

        function d() {
            this[a] = b
        }

        function e() {
            var c = b.apply(this, arguments);
            null == c ? delete this[a] : this[a] = c
        }
        return null == b ? c : "function" == typeof b ? e : d
    }

    function E(a) {
        return "function" == typeof a ? a : (a = Ug.ns.qualify(a)).local ? function() {
            return this.ownerDocument.createElementNS(a.space, a.local)
        } : function() {
            return this.ownerDocument.createElementNS(this.namespaceURI, a)
        }
    }

    function F(a) {
        return {
            __data__: a
        }
    }

    function G(a) {
        return function() {
            return ph(this, a)
        }
    }

    function H(a) {
        return arguments.length || (a = Ug.ascending),
            function(b, c) {
                return b && c ? a(b.__data__, c.__data__) : !b - !c
            }
    }

    function I(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            for (var e, f = a[c], g = 0, h = f.length; h > g; g++)(e = f[g]) && b(e, g, c);
        return a
    }

    function J(a) {
        return lh(a, sh), a
    }

    function K(a) {
        var b, c;
        return function(d, e, f) {
            var g, h = a[f].update,
                i = h.length;
            for (f != c && (c = f, b = 0), e >= b && (b = e + 1); !(g = h[b]) && ++b < i;);
            return g
        }
    }

    function L() {
        var a = this.__transition__;
        a && ++a.active
    }

    function M(a, b, c) {
        function d() {
            var b = this[g];
            b && (this.removeEventListener(a, b, b.$), delete this[g])
        }

        function e() {
            var e = i(b, Wg(arguments));
            d.call(this), this.addEventListener(a, this[g] = e, e.$ = c), e._ = b
        }

        function f() {
            var b, c = new RegExp("^__on([^.]+)" + Ug.requote(a) + "$");
            for (var d in this)
                if (b = d.match(c)) {
                    var e = this[d];
                    this.removeEventListener(b[1], e, e.$), delete this[d]
                }
        }
        var g = "__on" + a,
            h = a.indexOf("."),
            i = N;
        h > 0 && (a = a.substring(0, h));
        var j = uh.get(a);
        return j && (a = j, i = O), h ? b ? e : d : b ? n : f
    }

    function N(a, b) {
        return function(c) {
            var d = Ug.event;
            Ug.event = c, b[0] = this.__data__;
            try {
                a.apply(this, b)
            } finally {
                Ug.event = d
            }
        }
    }

    function O(a, b) {
        var c = N(a, b);
        return function(a) {
            var b = this,
                d = a.relatedTarget;
            d && (d === b || 8 & d.compareDocumentPosition(b)) || c.call(b, a)
        }
    }

    function P() {
        var a = ".dragsuppress-" + ++wh,
            b = "click" + a,
            c = Ug.select(Zg).on("touchmove" + a, q).on("dragstart" + a, q).on("selectstart" + a, q);
        if (vh) {
            var d = Yg.style,
                e = d[vh];
            d[vh] = "none"
        }
        return function(f) {
            function g() {
                c.on(b, null)
            }
            c.on(a, null), vh && (d[vh] = e), f && (c.on(b, function() {
                q(), g()
            }, !0), setTimeout(g, 0))
        }
    }

    function Q(a, b) {
        b.changedTouches && (b = b.changedTouches[0]);
        var c = a.ownerSVGElement || a;
        if (c.createSVGPoint) {
            var d = c.createSVGPoint();
            if (0 > xh && (Zg.scrollX || Zg.scrollY)) {
                c = Ug.select("body").append("svg").style({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    margin: 0,
                    padding: 0,
                    border: "none"
                }, "important");
                var e = c[0][0].getScreenCTM();
                xh = !(e.f || e.e), c.remove()
            }
            return xh ? (d.x = b.pageX, d.y = b.pageY) : (d.x = b.clientX, d.y = b.clientY), d = d.matrixTransform(a.getScreenCTM().inverse()), [d.x, d.y]
        }
        var f = a.getBoundingClientRect();
        return [b.clientX - f.left - a.clientLeft, b.clientY - f.top - a.clientTop]
    }

    function R(a) {
        return a > 0 ? 1 : 0 > a ? -1 : 0
    }

    function S(a, b, c) {
        return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])
    }

    function T(a) {
        return a > 1 ? 0 : -1 > a ? yh : Math.acos(a)
    }

    function U(a) {
        return a > 1 ? Ah : -1 > a ? -Ah : Math.asin(a)
    }

    function V(a) {
        return ((a = Math.exp(a)) - 1 / a) / 2
    }

    function W(a) {
        return ((a = Math.exp(a)) + 1 / a) / 2
    }

    function X(a) {
        return ((a = Math.exp(2 * a)) - 1) / (a + 1)
    }

    function Y(a) {
        return (a = Math.sin(a / 2)) * a
    }

    function Z() {}

    function $(a, b, c) {
        return new _(a, b, c)
    }

    function _(a, b, c) {
        this.h = a, this.s = b, this.l = c
    }

    function ab(a, b, c) {
        function d(a) {
            return a > 360 ? a -= 360 : 0 > a && (a += 360), 60 > a ? f + (g - f) * a / 60 : 180 > a ? g : 240 > a ? f + (g - f) * (240 - a) / 60 : f
        }

        function e(a) {
            return Math.round(255 * d(a))
        }
        var f, g;
        return a = isNaN(a) ? 0 : (a %= 360) < 0 ? a + 360 : a, b = isNaN(b) ? 0 : 0 > b ? 0 : b > 1 ? 1 : b, c = 0 > c ? 0 : c > 1 ? 1 : c, g = .5 >= c ? c * (1 + b) : c + b - c * b, f = 2 * c - g, nb(e(a + 120), e(a), e(a - 120))
    }

    function bb(a, b, c) {
        return new cb(a, b, c)
    }

    function cb(a, b, c) {
        this.h = a, this.c = b, this.l = c
    }

    function db(a, b, c) {
        return isNaN(a) && (a = 0), isNaN(b) && (b = 0), eb(c, Math.cos(a *= Dh) * b, Math.sin(a) * b)
    }

    function eb(a, b, c) {
        return new fb(a, b, c)
    }

    function fb(a, b, c) {
        this.l = a, this.a = b, this.b = c
    }

    function gb(a, b, c) {
        var d = (a + 16) / 116,
            e = d + b / 500,
            f = d - c / 200;
        return e = ib(e) * Oh, d = ib(d) * Ph, f = ib(f) * Qh, nb(kb(3.2404542 * e - 1.5371385 * d - .4985314 * f), kb(-.969266 * e + 1.8760108 * d + .041556 * f), kb(.0556434 * e - .2040259 * d + 1.0572252 * f))
    }

    function hb(a, b, c) {
        return a > 0 ? bb(Math.atan2(c, b) * Eh, Math.sqrt(b * b + c * c), a) : bb(0 / 0, 0 / 0, a)
    }

    function ib(a) {
        return a > .206893034 ? a * a * a : (a - 4 / 29) / 7.787037
    }

    function jb(a) {
        return a > .008856 ? Math.pow(a, 1 / 3) : 7.787037 * a + 4 / 29
    }

    function kb(a) {
        return Math.round(255 * (.00304 >= a ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - .055))
    }

    function lb(a) {
        return nb(a >> 16, 255 & a >> 8, 255 & a)
    }

    function mb(a) {
        return lb(a) + ""
    }

    function nb(a, b, c) {
        return new ob(a, b, c)
    }

    function ob(a, b, c) {
        this.r = a, this.g = b, this.b = c
    }

    function pb(a) {
        return 16 > a ? "0" + Math.max(0, a).toString(16) : Math.min(255, a).toString(16)
    }

    function qb(a, b, c) {
        var d, e, f, g = 0,
            h = 0,
            i = 0;
        if (d = /([a-z]+)\((.*)\)/i.exec(a)) switch (e = d[2].split(","), d[1]) {
            case "hsl":
                return c(parseFloat(e[0]), parseFloat(e[1]) / 100, parseFloat(e[2]) / 100);
            case "rgb":
                return b(ub(e[0]), ub(e[1]), ub(e[2]))
        }
        return (f = Th.get(a)) ? b(f.r, f.g, f.b) : (null != a && "#" === a.charAt(0) && (4 === a.length ? (g = a.charAt(1), g += g, h = a.charAt(2), h += h, i = a.charAt(3), i += i) : 7 === a.length && (g = a.substring(1, 3), h = a.substring(3, 5), i = a.substring(5, 7)), g = parseInt(g, 16), h = parseInt(h, 16), i = parseInt(i, 16)), b(g, h, i))
    }

    function rb(a, b, c) {
        var d, e, f = Math.min(a /= 255, b /= 255, c /= 255),
            g = Math.max(a, b, c),
            h = g - f,
            i = (g + f) / 2;
        return h ? (e = .5 > i ? h / (g + f) : h / (2 - g - f), d = a == g ? (b - c) / h + (c > b ? 6 : 0) : b == g ? (c - a) / h + 2 : (a - b) / h + 4, d *= 60) : (d = 0 / 0, e = i > 0 && 1 > i ? 0 : d), $(d, e, i)
    }

    function sb(a, b, c) {
        a = tb(a), b = tb(b), c = tb(c);
        var d = jb((.4124564 * a + .3575761 * b + .1804375 * c) / Oh),
            e = jb((.2126729 * a + .7151522 * b + .072175 * c) / Ph),
            f = jb((.0193339 * a + .119192 * b + .9503041 * c) / Qh);
        return eb(116 * e - 16, 500 * (d - e), 200 * (e - f))
    }

    function tb(a) {
        return (a /= 255) <= .04045 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)
    }

    function ub(a) {
        var b = parseFloat(a);
        return "%" === a.charAt(a.length - 1) ? Math.round(2.55 * b) : b
    }

    function vb(a) {
        return "function" == typeof a ? a : function() {
            return a
        }
    }

    function wb(a) {
        return a
    }

    function xb(a) {
        return function(b, c, d) {
            return 2 === arguments.length && "function" == typeof c && (d = c, c = null), yb(b, c, a, d)
        }
    }

    function yb(a, b, c, d) {
        function e() {
            var a, b = i.status;
            if (!b && i.responseText || b >= 200 && 300 > b || 304 === b) {
                try {
                    a = c.call(f, i)
                } catch (d) {
                    return g.error.call(f, d), void 0
                }
                g.load.call(f, a)
            } else g.error.call(f, i)
        }
        var f = {},
            g = Ug.dispatch("beforesend", "progress", "load", "error"),
            h = {},
            i = new XMLHttpRequest,
            j = null;
        return !Zg.XDomainRequest || "withCredentials" in i || !/^(http(s)?:)?\/\//.test(a) || (i = new XDomainRequest), "onload" in i ? i.onload = i.onerror = e : i.onreadystatechange = function() {
            i.readyState > 3 && e()
        }, i.onprogress = function(a) {
            var b = Ug.event;
            Ug.event = a;
            try {
                g.progress.call(f, i)
            } finally {
                Ug.event = b
            }
        }, f.header = function(a, b) {
            return a = (a + "").toLowerCase(), arguments.length < 2 ? h[a] : (null == b ? delete h[a] : h[a] = b + "", f)
        }, f.mimeType = function(a) {
            return arguments.length ? (b = null == a ? null : a + "", f) : b
        }, f.responseType = function(a) {
            return arguments.length ? (j = a, f) : j
        }, f.response = function(a) {
            return c = a, f
        }, ["get", "post"].forEach(function(a) {
            f[a] = function() {
                return f.send.apply(f, [a].concat(Wg(arguments)))
            }
        }), f.send = function(c, d, e) {
            if (2 === arguments.length && "function" == typeof d && (e = d, d = null), i.open(c, a, !0), null == b || "accept" in h || (h.accept = b + ",*/*"), i.setRequestHeader)
                for (var k in h) i.setRequestHeader(k, h[k]);
            return null != b && i.overrideMimeType && i.overrideMimeType(b), null != j && (i.responseType = j), null != e && f.on("error", e).on("load", function(a) {
                e(null, a)
            }), g.beforesend.call(f, i), i.send(null == d ? null : d), f
        }, f.abort = function() {
            return i.abort(), f
        }, Ug.rebind(f, g, "on"), null == d ? f : f.get(zb(d))
    }

    function zb(a) {
        return 1 === a.length ? function(b, c) {
            a(null == b ? c : null)
        } : a
    }

    function Ab() {
        var a = Bb(),
            b = Cb() - a;
        b > 24 ? (isFinite(b) && (clearTimeout(Xh), Xh = setTimeout(Ab, b)), Wh = 0) : (Wh = 1, Zh(Ab))
    }

    function Bb() {
        var a = Date.now();
        for (Yh = Uh; Yh;) a >= Yh.t && (Yh.f = Yh.c(a - Yh.t)), Yh = Yh.n;
        return a
    }

    function Cb() {
        for (var a, b = Uh, c = 1 / 0; b;) b.f ? b = a ? a.n = b.n : Uh = b.n : (b.t < c && (c = b.t), b = (a = b).n);
        return Vh = a, c
    }

    function Db(a, b) {
        return b - (a ? Math.ceil(Math.log(a) / Math.LN10) : 1)
    }

    function Eb(a, b) {
        var c = Math.pow(10, 3 * gh(8 - b));
        return {
            scale: b > 8 ? function(a) {
                return a / c
            } : function(a) {
                return a * c
            },
            symbol: a
        }
    }

    function Fb(a) {
        var b = a.decimal,
            c = a.thousands,
            d = a.grouping,
            e = a.currency,
            f = d ? function(a) {
                for (var b = a.length, e = [], f = 0, g = d[0]; b > 0 && g > 0;) e.push(a.substring(b -= g, b + g)), g = d[f = (f + 1) % d.length];
                return e.reverse().join(c)
            } : wb;
        return function(a) {
            var c = _h.exec(a),
                d = c[1] || " ",
                g = c[2] || ">",
                h = c[3] || "",
                i = c[4] || "",
                j = c[5],
                k = +c[6],
                l = c[7],
                m = c[8],
                n = c[9],
                o = 1,
                p = "",
                q = "",
                r = !1;
            switch (m && (m = +m.substring(1)), (j || "0" === d && "=" === g) && (j = d = "0", g = "=", l && (k -= Math.floor((k - 1) / 4))), n) {
                case "n":
                    l = !0, n = "g";
                    break;
                case "%":
                    o = 100, q = "%", n = "f";
                    break;
                case "p":
                    o = 100, q = "%", n = "r";
                    break;
                case "b":
                case "o":
                case "x":
                case "X":
                    "#" === i && (p = "0" + n.toLowerCase());
                case "c":
                case "d":
                    r = !0, m = 0;
                    break;
                case "s":
                    o = -1, n = "r"
            }
            "$" === i && (p = e[0], q = e[1]), "r" != n || m || (n = "g"), null != m && ("g" == n ? m = Math.max(1, Math.min(21, m)) : ("e" == n || "f" == n) && (m = Math.max(0, Math.min(20, m)))), n = ai.get(n) || Gb;
            var s = j && l;
            return function(a) {
                if (r && a % 1) return "";
                var c = 0 > a || 0 === a && 0 > 1 / a ? (a = -a, "-") : h;
                if (0 > o) {
                    var e = Ug.formatPrefix(a, m);
                    a = e.scale(a), q = e.symbol
                } else a *= o;
                a = n(a, m);
                var i = a.lastIndexOf("."),
                    t = 0 > i ? a : a.substring(0, i),
                    u = 0 > i ? "" : b + a.substring(i + 1);
                !j && l && (t = f(t));
                var v = p.length + t.length + u.length + (s ? 0 : c.length),
                    w = k > v ? new Array(v = k - v + 1).join(d) : "";
                return s && (t = f(w + t)), c += p, a = t + u, ("<" === g ? c + a + w : ">" === g ? w + c + a : "^" === g ? w.substring(0, v >>= 1) + c + a + w.substring(v) : c + (s ? a : w + a)) + q
            }
        }
    }

    function Gb(a) {
        return a + ""
    }

    function Hb() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
    }

    function Ib(a, b, c) {
        function d(b) {
            var c = a(b),
                d = f(c, 1);
            return d - b > b - c ? c : d
        }

        function e(c) {
            return b(c = a(new ci(c - 1)), 1), c
        }

        function f(a, c) {
            return b(a = new ci(+a), c), a
        }

        function g(a, d, f) {
            var g = e(a),
                h = [];
            if (f > 1)
                for (; d > g;) c(g) % f || h.push(new Date(+g)), b(g, 1);
            else
                for (; d > g;) h.push(new Date(+g)), b(g, 1);
            return h
        }

        function h(a, b, c) {
            try {
                ci = Hb;
                var d = new Hb;
                return d._ = a, g(d, b, c)
            } finally {
                ci = Date
            }
        }
        a.floor = a, a.round = d, a.ceil = e, a.offset = f, a.range = g;
        var i = a.utc = Jb(a);
        return i.floor = i, i.round = Jb(d), i.ceil = Jb(e), i.offset = Jb(f), i.range = h, a
    }

    function Jb(a) {
        return function(b, c) {
            try {
                ci = Hb;
                var d = new Hb;
                return d._ = b, a(d, c)._
            } finally {
                ci = Date
            }
        }
    }

    function Kb(a) {
        function b(a) {
            function b(b) {
                for (var c, e, f, g = [], h = -1, i = 0; ++h < d;) 37 === a.charCodeAt(h) && (g.push(a.substring(i, h)), null != (e = ei[c = a.charAt(++h)]) && (c = a.charAt(++h)), (f = C[c]) && (c = f(b, null == e ? "e" === c ? " " : "0" : e)), g.push(c), i = h + 1);
                return g.push(a.substring(i, h)), g.join("")
            }
            var d = a.length;
            return b.parse = function(b) {
                var d = {
                        y: 1900,
                        m: 0,
                        d: 1,
                        H: 0,
                        M: 0,
                        S: 0,
                        L: 0,
                        Z: null
                    },
                    e = c(d, a, b, 0);
                if (e != b.length) return null;
                "p" in d && (d.H = d.H % 12 + 12 * d.p);
                var f = null != d.Z && ci !== Hb,
                    g = new(f ? Hb : ci);
                return "j" in d ? g.setFullYear(d.y, 0, d.j) : "w" in d && ("W" in d || "U" in d) ? (g.setFullYear(d.y, 0, 1), g.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + 7 * d.W - (g.getDay() + 5) % 7 : d.w + 7 * d.U - (g.getDay() + 6) % 7)) : g.setFullYear(d.y, d.m, d.d), g.setHours(d.H + Math.floor(d.Z / 100), d.M + d.Z % 100, d.S, d.L), f ? g._ : g
            }, b.toString = function() {
                return a
            }, b
        }

        function c(a, b, c, d) {
            for (var e, f, g, h = 0, i = b.length, j = c.length; i > h;) {
                if (d >= j) return -1;
                if (e = b.charCodeAt(h++), 37 === e) {
                    if (g = b.charAt(h++), f = D[g in ei ? b.charAt(h++) : g], !f || (d = f(a, c, d)) < 0) return -1
                } else if (e != c.charCodeAt(d++)) return -1
            }
            return d
        }

        function d(a, b, c) {
            w.lastIndex = 0;
            var d = w.exec(b.substring(c));
            return d ? (a.w = x.get(d[0].toLowerCase()), c + d[0].length) : -1
        }

        function e(a, b, c) {
            u.lastIndex = 0;
            var d = u.exec(b.substring(c));
            return d ? (a.w = v.get(d[0].toLowerCase()), c + d[0].length) : -1
        }

        function f(a, b, c) {
            A.lastIndex = 0;
            var d = A.exec(b.substring(c));
            return d ? (a.m = B.get(d[0].toLowerCase()), c + d[0].length) : -1
        }

        function g(a, b, c) {
            y.lastIndex = 0;
            var d = y.exec(b.substring(c));
            return d ? (a.m = z.get(d[0].toLowerCase()), c + d[0].length) : -1
        }

        function h(a, b, d) {
            return c(a, C.c.toString(), b, d)
        }

        function i(a, b, d) {
            return c(a, C.x.toString(), b, d)
        }

        function j(a, b, d) {
            return c(a, C.X.toString(), b, d)
        }

        function k(a, b, c) {
            var d = t.get(b.substring(c, c += 2).toLowerCase());
            return null == d ? -1 : (a.p = d, c)
        }
        var l = a.dateTime,
            m = a.date,
            n = a.time,
            o = a.periods,
            p = a.days,
            q = a.shortDays,
            r = a.months,
            s = a.shortMonths;
        b.utc = function(a) {
            function c(a) {
                try {
                    ci = Hb;
                    var b = new ci;
                    return b._ = a, d(b)
                } finally {
                    ci = Date
                }
            }
            var d = b(a);
            return c.parse = function(a) {
                try {
                    ci = Hb;
                    var b = d.parse(a);
                    return b && b._
                } finally {
                    ci = Date
                }
            }, c.toString = d.toString, c
        }, b.multi = b.utc.multi = cc;
        var t = Ug.map(),
            u = Mb(p),
            v = Nb(p),
            w = Mb(q),
            x = Nb(q),
            y = Mb(r),
            z = Nb(r),
            A = Mb(s),
            B = Nb(s);
        o.forEach(function(a, b) {
            t.set(a.toLowerCase(), b)
        });
        var C = {
                a: function(a) {
                    return q[a.getDay()]
                },
                A: function(a) {
                    return p[a.getDay()]
                },
                b: function(a) {
                    return s[a.getMonth()]
                },
                B: function(a) {
                    return r[a.getMonth()]
                },
                c: b(l),
                d: function(a, b) {
                    return Lb(a.getDate(), b, 2)
                },
                e: function(a, b) {
                    return Lb(a.getDate(), b, 2)
                },
                H: function(a, b) {
                    return Lb(a.getHours(), b, 2)
                },
                I: function(a, b) {
                    return Lb(a.getHours() % 12 || 12, b, 2)
                },
                j: function(a, b) {
                    return Lb(1 + bi.dayOfYear(a), b, 3)
                },
                L: function(a, b) {
                    return Lb(a.getMilliseconds(), b, 3)
                },
                m: function(a, b) {
                    return Lb(a.getMonth() + 1, b, 2)
                },
                M: function(a, b) {
                    return Lb(a.getMinutes(), b, 2)
                },
                p: function(a) {
                    return o[+(a.getHours() >= 12)]
                },
                S: function(a, b) {
                    return Lb(a.getSeconds(), b, 2)
                },
                U: function(a, b) {
                    return Lb(bi.sundayOfYear(a), b, 2)
                },
                w: function(a) {
                    return a.getDay()
                },
                W: function(a, b) {
                    return Lb(bi.mondayOfYear(a), b, 2)
                },
                x: b(m),
                X: b(n),
                y: function(a, b) {
                    return Lb(a.getFullYear() % 100, b, 2)
                },
                Y: function(a, b) {
                    return Lb(a.getFullYear() % 1e4, b, 4)
                },
                Z: ac,
                "%": function() {
                    return "%"
                }
            },
            D = {
                a: d,
                A: e,
                b: f,
                B: g,
                c: h,
                d: Wb,
                e: Wb,
                H: Yb,
                I: Yb,
                j: Xb,
                L: _b,
                m: Vb,
                M: Zb,
                p: k,
                S: $b,
                U: Pb,
                w: Ob,
                W: Qb,
                x: i,
                X: j,
                y: Sb,
                Y: Rb,
                Z: Tb,
                "%": bc
            };
        return b
    }

    function Lb(a, b, c) {
        var d = 0 > a ? "-" : "",
            e = (d ? -a : a) + "",
            f = e.length;
        return d + (c > f ? new Array(c - f + 1).join(b) + e : e)
    }

    function Mb(a) {
        return new RegExp("^(?:" + a.map(Ug.requote).join("|") + ")", "i")
    }

    function Nb(a) {
        for (var b = new e, c = -1, d = a.length; ++c < d;) b.set(a[c].toLowerCase(), c);
        return b
    }

    function Ob(a, b, c) {
        fi.lastIndex = 0;
        var d = fi.exec(b.substring(c, c + 1));
        return d ? (a.w = +d[0], c + d[0].length) : -1
    }

    function Pb(a, b, c) {
        fi.lastIndex = 0;
        var d = fi.exec(b.substring(c));
        return d ? (a.U = +d[0], c + d[0].length) : -1
    }

    function Qb(a, b, c) {
        fi.lastIndex = 0;
        var d = fi.exec(b.substring(c));
        return d ? (a.W = +d[0], c + d[0].length) : -1
    }

    function Rb(a, b, c) {
        fi.lastIndex = 0;
        var d = fi.exec(b.substring(c, c + 4));
        return d ? (a.y = +d[0], c + d[0].length) : -1
    }

    function Sb(a, b, c) {
        fi.lastIndex = 0;
        var d = fi.exec(b.substring(c, c + 2));
        return d ? (a.y = Ub(+d[0]), c + d[0].length) : -1
    }

    function Tb(a, b, c) {
        return /^[+-]\d{4}$/.test(b = b.substring(c, c + 5)) ? (a.Z = +b, c + 5) : -1
    }

    function Ub(a) {
        return a + (a > 68 ? 1900 : 2e3)
    }

    function Vb(a, b, c) {
        fi.lastIndex = 0;
        var d = fi.exec(b.substring(c, c + 2));
        return d ? (a.m = d[0] - 1, c + d[0].length) : -1
    }

    function Wb(a, b, c) {
        fi.lastIndex = 0;
        var d = fi.exec(b.substring(c, c + 2));
        return d ? (a.d = +d[0], c + d[0].length) : -1
    }

    function Xb(a, b, c) {
        fi.lastIndex = 0;
        var d = fi.exec(b.substring(c, c + 3));
        return d ? (a.j = +d[0], c + d[0].length) : -1
    }

    function Yb(a, b, c) {
        fi.lastIndex = 0;
        var d = fi.exec(b.substring(c, c + 2));
        return d ? (a.H = +d[0], c + d[0].length) : -1
    }

    function Zb(a, b, c) {
        fi.lastIndex = 0;
        var d = fi.exec(b.substring(c, c + 2));
        return d ? (a.M = +d[0], c + d[0].length) : -1
    }

    function $b(a, b, c) {
        fi.lastIndex = 0;
        var d = fi.exec(b.substring(c, c + 2));
        return d ? (a.S = +d[0], c + d[0].length) : -1
    }

    function _b(a, b, c) {
        fi.lastIndex = 0;
        var d = fi.exec(b.substring(c, c + 3));
        return d ? (a.L = +d[0], c + d[0].length) : -1
    }

    function ac(a) {
        var b = a.getTimezoneOffset(),
            c = b > 0 ? "-" : "+",
            d = ~~(gh(b) / 60),
            e = gh(b) % 60;
        return c + Lb(d, "0", 2) + Lb(e, "0", 2)
    }

    function bc(a, b, c) {
        gi.lastIndex = 0;
        var d = gi.exec(b.substring(c, c + 1));
        return d ? c + d[0].length : -1
    }

    function cc(a) {
        for (var b = a.length, c = -1; ++c < b;) a[c][0] = this(a[c][0]);
        return function(b) {
            for (var c = 0, d = a[c]; !d[1](b);) d = a[++c];
            return d[0](b)
        }
    }

    function dc() {}

    function ec(a, b, c) {
        var d = c.s = a + b,
            e = d - a,
            f = d - e;
        c.t = a - f + (b - e)
    }

    function fc(a, b) {
        a && ki.hasOwnProperty(a.type) && ki[a.type](a, b)
    }

    function gc(a, b, c) {
        var d, e = -1,
            f = a.length - c;
        for (b.lineStart(); ++e < f;) d = a[e], b.point(d[0], d[1], d[2]);
        b.lineEnd()
    }

    function hc(a, b) {
        var c = -1,
            d = a.length;
        for (b.polygonStart(); ++c < d;) gc(a[c], b, 1);
        b.polygonEnd()
    }

    function ic() {
        function a(a, b) {
            a *= Dh, b = b * Dh / 2 + yh / 4;
            var c = a - d,
                g = Math.cos(b),
                h = Math.sin(b),
                i = f * h,
                j = e * g + i * Math.cos(c),
                k = i * Math.sin(c);
            mi.add(Math.atan2(k, j)), d = a, e = g, f = h
        }
        var b, c, d, e, f;
        ni.point = function(g, h) {
            ni.point = a, d = (b = g) * Dh, e = Math.cos(h = (c = h) * Dh / 2 + yh / 4), f = Math.sin(h)
        }, ni.lineEnd = function() {
            a(b, c)
        }
    }

    function jc(a) {
        var b = a[0],
            c = a[1],
            d = Math.cos(c);
        return [d * Math.cos(b), d * Math.sin(b), Math.sin(c)]
    }

    function kc(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
    }

    function lc(a, b) {
        return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
    }

    function mc(a, b) {
        a[0] += b[0], a[1] += b[1], a[2] += b[2]
    }

    function nc(a, b) {
        return [a[0] * b, a[1] * b, a[2] * b]
    }

    function oc(a) {
        var b = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
        a[0] /= b, a[1] /= b, a[2] /= b
    }

    function pc(a) {
        return [Math.atan2(a[1], a[0]), U(a[2])]
    }

    function qc(a, b) {
        return gh(a[0] - b[0]) < Bh && gh(a[1] - b[1]) < Bh
    }

    function rc(a, b) {
        a *= Dh;
        var c = Math.cos(b *= Dh);
        sc(c * Math.cos(a), c * Math.sin(a), Math.sin(b))
    }

    function sc(a, b, c) {
        ++oi, qi += (a - qi) / oi, ri += (b - ri) / oi, si += (c - si) / oi
    }

    function tc() {
        function a(a, e) {
            a *= Dh;
            var f = Math.cos(e *= Dh),
                g = f * Math.cos(a),
                h = f * Math.sin(a),
                i = Math.sin(e),
                j = Math.atan2(Math.sqrt((j = c * i - d * h) * j + (j = d * g - b * i) * j + (j = b * h - c * g) * j), b * g + c * h + d * i);
            pi += j, ti += j * (b + (b = g)), ui += j * (c + (c = h)), vi += j * (d + (d = i)), sc(b, c, d)
        }
        var b, c, d;
        zi.point = function(e, f) {
            e *= Dh;
            var g = Math.cos(f *= Dh);
            b = g * Math.cos(e), c = g * Math.sin(e), d = Math.sin(f), zi.point = a, sc(b, c, d)
        }
    }

    function uc() {
        zi.point = rc
    }

    function vc() {
        function a(a, b) {
            a *= Dh;
            var c = Math.cos(b *= Dh),
                g = c * Math.cos(a),
                h = c * Math.sin(a),
                i = Math.sin(b),
                j = e * i - f * h,
                k = f * g - d * i,
                l = d * h - e * g,
                m = Math.sqrt(j * j + k * k + l * l),
                n = d * g + e * h + f * i,
                o = m && -T(n) / m,
                p = Math.atan2(m, n);
            wi += o * j, xi += o * k, yi += o * l, pi += p, ti += p * (d + (d = g)), ui += p * (e + (e = h)), vi += p * (f + (f = i)), sc(d, e, f)
        }
        var b, c, d, e, f;
        zi.point = function(g, h) {
            b = g, c = h, zi.point = a, g *= Dh;
            var i = Math.cos(h *= Dh);
            d = i * Math.cos(g), e = i * Math.sin(g), f = Math.sin(h), sc(d, e, f)
        }, zi.lineEnd = function() {
            a(b, c), zi.lineEnd = uc, zi.point = rc
        }
    }

    function wc() {
        return !0
    }

    function xc(a, b, c, d, e) {
        var f = [],
            g = [];
        if (a.forEach(function(a) {
                if (!((b = a.length - 1) <= 0)) {
                    var b, c = a[0],
                        d = a[b];
                    if (qc(c, d)) {
                        e.lineStart();
                        for (var h = 0; b > h; ++h) e.point((c = a[h])[0], c[1]);
                        return e.lineEnd(), void 0
                    }
                    var i = new zc(c, a, null, !0),
                        j = new zc(c, null, i, !1);
                    i.o = j, f.push(i), g.push(j), i = new zc(d, a, null, !1), j = new zc(d, null, i, !0), i.o = j, f.push(i), g.push(j)
                }
            }), g.sort(b), yc(f), yc(g), f.length) {
            for (var h = 0, i = c, j = g.length; j > h; ++h) g[h].e = i = !i;
            for (var k, l, m = f[0];;) {
                for (var n = m, o = !0; n.v;)
                    if ((n = n.n) === m) return;
                k = n.z, e.lineStart();
                do {
                    if (n.v = n.o.v = !0, n.e) {
                        if (o)
                            for (var h = 0, j = k.length; j > h; ++h) e.point((l = k[h])[0], l[1]);
                        else d(n.x, n.n.x, 1, e);
                        n = n.n
                    } else {
                        if (o) {
                            k = n.p.z;
                            for (var h = k.length - 1; h >= 0; --h) e.point((l = k[h])[0], l[1])
                        } else d(n.x, n.p.x, -1, e);
                        n = n.p
                    }
                    n = n.o, k = n.z, o = !o
                } while (!n.v);
                e.lineEnd()
            }
        }
    }

    function yc(a) {
        if (b = a.length) {
            for (var b, c, d = 0, e = a[0]; ++d < b;) e.n = c = a[d], c.p = e, e = c;
            e.n = c = a[0], c.p = e
        }
    }

    function zc(a, b, c, d) {
        this.x = a, this.z = b, this.o = c, this.e = d, this.v = !1, this.n = this.p = null
    }

    function Ac(a, b, c, d) {
        return function(e, f) {
            function g(b, c) {
                var d = e(b, c);
                a(b = d[0], c = d[1]) && f.point(b, c)
            }

            function h(a, b) {
                var c = e(a, b);
                q.point(c[0], c[1])
            }

            function i() {
                s.point = h, q.lineStart()
            }

            function j() {
                s.point = g, q.lineEnd()
            }

            function k(a, b) {
                p.push([a, b]);
                var c = e(a, b);
                u.point(c[0], c[1])
            }

            function l() {
                u.lineStart(), p = []
            }

            function m() {
                k(p[0][0], p[0][1]), u.lineEnd();
                var a, b = u.clean(),
                    c = t.buffer(),
                    d = c.length;
                if (p.pop(), o.push(p), p = null, d) {
                    if (1 & b) {
                        a = c[0];
                        var e, d = a.length - 1,
                            g = -1;
                        for (f.lineStart(); ++g < d;) f.point((e = a[g])[0], e[1]);
                        return f.lineEnd(), void 0
                    }
                    d > 1 && 2 & b && c.push(c.pop().concat(c.shift())), n.push(c.filter(Bc))
                }
            }
            var n, o, p, q = b(f),
                r = e.invert(d[0], d[1]),
                s = {
                    point: g,
                    lineStart: i,
                    lineEnd: j,
                    polygonStart: function() {
                        s.point = k, s.lineStart = l, s.lineEnd = m, n = [], o = [], f.polygonStart()
                    },
                    polygonEnd: function() {
                        s.point = g, s.lineStart = i, s.lineEnd = j, n = Ug.merge(n);
                        var a = Ec(r, o);
                        n.length ? xc(n, Dc, a, c, f) : a && (f.lineStart(), c(null, null, 1, f), f.lineEnd()), f.polygonEnd(), n = o = null
                    },
                    sphere: function() {
                        f.polygonStart(), f.lineStart(), c(null, null, 1, f), f.lineEnd(), f.polygonEnd()
                    }
                },
                t = Cc(),
                u = b(t);
            return s
        }
    }

    function Bc(a) {
        return a.length > 1
    }

    function Cc() {
        var a, b = [];
        return {
            lineStart: function() {
                b.push(a = [])
            },
            point: function(b, c) {
                a.push([b, c])
            },
            lineEnd: n,
            buffer: function() {
                var c = b;
                return b = [], a = null, c
            },
            rejoin: function() {
                b.length > 1 && b.push(b.pop().concat(b.shift()))
            }
        }
    }

    function Dc(a, b) {
        return ((a = a.x)[0] < 0 ? a[1] - Ah - Bh : Ah - a[1]) - ((b = b.x)[0] < 0 ? b[1] - Ah - Bh : Ah - b[1])
    }

    function Ec(a, b) {
        var c = a[0],
            d = a[1],
            e = [Math.sin(c), -Math.cos(c), 0],
            f = 0,
            g = 0;
        mi.reset();
        for (var h = 0, i = b.length; i > h; ++h) {
            var j = b[h],
                k = j.length;
            if (k)
                for (var l = j[0], m = l[0], n = l[1] / 2 + yh / 4, o = Math.sin(n), p = Math.cos(n), q = 1;;) {
                    q === k && (q = 0), a = j[q];
                    var r = a[0],
                        s = a[1] / 2 + yh / 4,
                        t = Math.sin(s),
                        u = Math.cos(s),
                        v = r - m,
                        w = gh(v) > yh,
                        x = o * t;
                    if (mi.add(Math.atan2(x * Math.sin(v), p * u + x * Math.cos(v))), f += w ? v + (v >= 0 ? zh : -zh) : v, w ^ m >= c ^ r >= c) {
                        var y = lc(jc(l), jc(a));
                        oc(y);
                        var z = lc(e, y);
                        oc(z);
                        var A = (w ^ v >= 0 ? -1 : 1) * U(z[2]);
                        (d > A || d === A && (y[0] || y[1])) && (g += w ^ v >= 0 ? 1 : -1)
                    }
                    if (!q++) break;
                    m = r, o = t, p = u, l = a
                }
        }
        return (-Bh > f || Bh > f && 0 > mi) ^ 1 & g
    }

    function Fc(a) {
        var b, c = 0 / 0,
            d = 0 / 0,
            e = 0 / 0;
        return {
            lineStart: function() {
                a.lineStart(), b = 1
            },
            point: function(f, g) {
                var h = f > 0 ? yh : -yh,
                    i = gh(f - c);
                gh(i - yh) < Bh ? (a.point(c, d = (d + g) / 2 > 0 ? Ah : -Ah), a.point(e, d), a.lineEnd(), a.lineStart(), a.point(h, d), a.point(f, d), b = 0) : e !== h && i >= yh && (gh(c - e) < Bh && (c -= e * Bh), gh(f - h) < Bh && (f -= h * Bh), d = Gc(c, d, f, g), a.point(e, d), a.lineEnd(), a.lineStart(), a.point(h, d), b = 0), a.point(c = f, d = g), e = h
            },
            lineEnd: function() {
                a.lineEnd(), c = d = 0 / 0
            },
            clean: function() {
                return 2 - b
            }
        }
    }

    function Gc(a, b, c, d) {
        var e, f, g = Math.sin(a - c);
        return gh(g) > Bh ? Math.atan((Math.sin(b) * (f = Math.cos(d)) * Math.sin(c) - Math.sin(d) * (e = Math.cos(b)) * Math.sin(a)) / (e * f * g)) : (b + d) / 2
    }

    function Hc(a, b, c, d) {
        var e;
        if (null == a) e = c * Ah, d.point(-yh, e), d.point(0, e), d.point(yh, e), d.point(yh, 0), d.point(yh, -e), d.point(0, -e), d.point(-yh, -e), d.point(-yh, 0), d.point(-yh, e);
        else if (gh(a[0] - b[0]) > Bh) {
            var f = a[0] < b[0] ? yh : -yh;
            e = c * f / 2, d.point(-f, e), d.point(0, e), d.point(f, e)
        } else d.point(b[0], b[1])
    }

    function Ic(a) {
        function b(a, b) {
            return Math.cos(a) * Math.cos(b) > f
        }

        function c(a) {
            var c, f, i, j, k;
            return {
                lineStart: function() {
                    j = i = !1, k = 1
                },
                point: function(l, m) {
                    var n, o = [l, m],
                        p = b(l, m),
                        q = g ? p ? 0 : e(l, m) : p ? e(l + (0 > l ? yh : -yh), m) : 0;
                    if (!c && (j = i = p) && a.lineStart(), p !== i && (n = d(c, o), (qc(c, n) || qc(o, n)) && (o[0] += Bh, o[1] += Bh, p = b(o[0], o[1]))), p !== i) k = 0, p ? (a.lineStart(), n = d(o, c), a.point(n[0], n[1])) : (n = d(c, o), a.point(n[0], n[1]), a.lineEnd()), c = n;
                    else if (h && c && g ^ p) {
                        var r;
                        q & f || !(r = d(o, c, !0)) || (k = 0, g ? (a.lineStart(), a.point(r[0][0], r[0][1]), a.point(r[1][0], r[1][1]), a.lineEnd()) : (a.point(r[1][0], r[1][1]), a.lineEnd(), a.lineStart(), a.point(r[0][0], r[0][1])))
                    }!p || c && qc(c, o) || a.point(o[0], o[1]), c = o, i = p, f = q
                },
                lineEnd: function() {
                    i && a.lineEnd(), c = null
                },
                clean: function() {
                    return k | (j && i) << 1
                }
            }
        }

        function d(a, b, c) {
            var d = jc(a),
                e = jc(b),
                g = [1, 0, 0],
                h = lc(d, e),
                i = kc(h, h),
                j = h[0],
                k = i - j * j;
            if (!k) return !c && a;
            var l = f * i / k,
                m = -f * j / k,
                n = lc(g, h),
                o = nc(g, l),
                p = nc(h, m);
            mc(o, p);
            var q = n,
                r = kc(o, q),
                s = kc(q, q),
                t = r * r - s * (kc(o, o) - 1);
            if (!(0 > t)) {
                var u = Math.sqrt(t),
                    v = nc(q, (-r - u) / s);
                if (mc(v, o), v = pc(v), !c) return v;
                var w, x = a[0],
                    y = b[0],
                    z = a[1],
                    A = b[1];
                x > y && (w = x, x = y, y = w);
                var B = y - x,
                    C = gh(B - yh) < Bh,
                    D = C || Bh > B;
                if (!C && z > A && (w = z, z = A, A = w), D ? C ? z + A > 0 ^ v[1] < (gh(v[0] - x) < Bh ? z : A) : z <= v[1] && v[1] <= A : B > yh ^ (x <= v[0] && v[0] <= y)) {
                    var E = nc(q, (-r + u) / s);
                    return mc(E, o), [v, pc(E)]
                }
            }
        }

        function e(b, c) {
            var d = g ? a : yh - a,
                e = 0;
            return -d > b ? e |= 1 : b > d && (e |= 2), -d > c ? e |= 4 : c > d && (e |= 8), e
        }
        var f = Math.cos(a),
            g = f > 0,
            h = gh(f) > Bh,
            i = id(a, 6 * Dh);
        return Ac(b, c, i, g ? [0, -a] : [-yh, a - yh])
    }

    function Jc(a, b, c, d) {
        return function(e) {
            var f, g = e.a,
                h = e.b,
                i = g.x,
                j = g.y,
                k = h.x,
                l = h.y,
                m = 0,
                n = 1,
                o = k - i,
                p = l - j;
            if (f = a - i, o || !(f > 0)) {
                if (f /= o, 0 > o) {
                    if (m > f) return;
                    n > f && (n = f)
                } else if (o > 0) {
                    if (f > n) return;
                    f > m && (m = f)
                }
                if (f = c - i, o || !(0 > f)) {
                    if (f /= o, 0 > o) {
                        if (f > n) return;
                        f > m && (m = f)
                    } else if (o > 0) {
                        if (m > f) return;
                        n > f && (n = f)
                    }
                    if (f = b - j, p || !(f > 0)) {
                        if (f /= p, 0 > p) {
                            if (m > f) return;
                            n > f && (n = f)
                        } else if (p > 0) {
                            if (f > n) return;
                            f > m && (m = f)
                        }
                        if (f = d - j, p || !(0 > f)) {
                            if (f /= p, 0 > p) {
                                if (f > n) return;
                                f > m && (m = f)
                            } else if (p > 0) {
                                if (m > f) return;
                                n > f && (n = f)
                            }
                            return m > 0 && (e.a = {
                                x: i + m * o,
                                y: j + m * p
                            }), 1 > n && (e.b = {
                                x: i + n * o,
                                y: j + n * p
                            }), e
                        }
                    }
                }
            }
        }
    }

    function Kc(a, b, c, d) {
        function e(d, e) {
            return gh(d[0] - a) < Bh ? e > 0 ? 0 : 3 : gh(d[0] - c) < Bh ? e > 0 ? 2 : 1 : gh(d[1] - b) < Bh ? e > 0 ? 1 : 0 : e > 0 ? 3 : 2
        }

        function f(a, b) {
            return g(a.x, b.x)
        }

        function g(a, b) {
            var c = e(a, 1),
                d = e(b, 1);
            return c !== d ? c - d : 0 === c ? b[1] - a[1] : 1 === c ? a[0] - b[0] : 2 === c ? a[1] - b[1] : b[0] - a[0]
        }
        return function(h) {
            function i(a) {
                for (var b = 0, c = q.length, d = a[1], e = 0; c > e; ++e)
                    for (var f, g = 1, h = q[e], i = h.length, j = h[0]; i > g; ++g) f = h[g], j[1] <= d ? f[1] > d && S(j, f, a) > 0 && ++b : f[1] <= d && S(j, f, a) < 0 && --b, j = f;
                return 0 !== b
            }

            function j(f, h, i, j) {
                var k = 0,
                    l = 0;
                if (null == f || (k = e(f, i)) !== (l = e(h, i)) || g(f, h) < 0 ^ i > 0) {
                    do j.point(0 === k || 3 === k ? a : c, k > 1 ? d : b); while ((k = (k + i + 4) % 4) !== l)
                } else j.point(h[0], h[1])
            }

            function k(e, f) {
                return e >= a && c >= e && f >= b && d >= f
            }

            function l(a, b) {
                k(a, b) && h.point(a, b)
            }

            function m() {
                D.point = o, q && q.push(r = []), y = !0, x = !1, v = w = 0 / 0
            }

            function n() {
                p && (o(s, t), u && x && B.rejoin(), p.push(B.buffer())), D.point = l, x && h.lineEnd()
            }

            function o(a, b) {
                a = Math.max(-Bi, Math.min(Bi, a)), b = Math.max(-Bi, Math.min(Bi, b));
                var c = k(a, b);
                if (q && r.push([a, b]), y) s = a, t = b, u = c, y = !1, c && (h.lineStart(), h.point(a, b));
                else if (c && x) h.point(a, b);
                else {
                    var d = {
                        a: {
                            x: v,
                            y: w
                        },
                        b: {
                            x: a,
                            y: b
                        }
                    };
                    C(d) ? (x || (h.lineStart(), h.point(d.a.x, d.a.y)), h.point(d.b.x, d.b.y), c || h.lineEnd(), z = !1) : c && (h.lineStart(), h.point(a, b), z = !1)
                }
                v = a, w = b, x = c
            }
            var p, q, r, s, t, u, v, w, x, y, z, A = h,
                B = Cc(),
                C = Jc(a, b, c, d),
                D = {
                    point: l,
                    lineStart: m,
                    lineEnd: n,
                    polygonStart: function() {
                        h = B, p = [], q = [], z = !0
                    },
                    polygonEnd: function() {
                        h = A, p = Ug.merge(p);
                        var b = i([a, d]),
                            c = z && b,
                            e = p.length;
                        (c || e) && (h.polygonStart(), c && (h.lineStart(), j(null, null, 1, h), h.lineEnd()), e && xc(p, f, b, j, h), h.polygonEnd()), p = q = r = null
                    }
                };
            return D
        }
    }

    function Lc(a, b) {
        function c(c, d) {
            return c = a(c, d), b(c[0], c[1])
        }
        return a.invert && b.invert && (c.invert = function(c, d) {
            return c = b.invert(c, d), c && a.invert(c[0], c[1])
        }), c
    }

    function Mc(a) {
        var b = 0,
            c = yh / 3,
            d = ad(a),
            e = d(b, c);
        return e.parallels = function(a) {
            return arguments.length ? d(b = a[0] * yh / 180, c = a[1] * yh / 180) : [180 * (b / yh), 180 * (c / yh)]
        }, e
    }

    function Nc(a, b) {
        function c(a, b) {
            var c = Math.sqrt(f - 2 * e * Math.sin(b)) / e;
            return [c * Math.sin(a *= e), g - c * Math.cos(a)]
        }
        var d = Math.sin(a),
            e = (d + Math.sin(b)) / 2,
            f = 1 + d * (2 * e - d),
            g = Math.sqrt(f) / e;
        return c.invert = function(a, b) {
            var c = g - b;
            return [Math.atan2(a, c) / e, U((f - (a * a + c * c) * e * e) / (2 * e))]
        }, c
    }

    function Oc() {
        function a(a, b) {
            Di += e * a - d * b, d = a, e = b
        }
        var b, c, d, e;
        Ii.point = function(f, g) {
            Ii.point = a, b = d = f, c = e = g
        }, Ii.lineEnd = function() {
            a(b, c)
        }
    }

    function Pc(a, b) {
        Ei > a && (Ei = a), a > Gi && (Gi = a), Fi > b && (Fi = b), b > Hi && (Hi = b)
    }

    function Qc() {
        function a(a, b) {
            g.push("M", a, ",", b, f)
        }

        function b(a, b) {
            g.push("M", a, ",", b), h.point = c
        }

        function c(a, b) {
            g.push("L", a, ",", b)
        }

        function d() {
            h.point = a
        }

        function e() {
            g.push("Z")
        }
        var f = Rc(4.5),
            g = [],
            h = {
                point: a,
                lineStart: function() {
                    h.point = b
                },
                lineEnd: d,
                polygonStart: function() {
                    h.lineEnd = e
                },
                polygonEnd: function() {
                    h.lineEnd = d, h.point = a
                },
                pointRadius: function(a) {
                    return f = Rc(a), h
                },
                result: function() {
                    if (g.length) {
                        var a = g.join("");
                        return g = [], a
                    }
                }
            };
        return h
    }

    function Rc(a) {
        return "m0," + a + "a" + a + "," + a + " 0 1,1 0," + -2 * a + "a" + a + "," + a + " 0 1,1 0," + 2 * a + "z"
    }

    function Sc(a, b) {
        qi += a, ri += b, ++si
    }

    function Tc() {
        function a(a, d) {
            var e = a - b,
                f = d - c,
                g = Math.sqrt(e * e + f * f);
            ti += g * (b + a) / 2, ui += g * (c + d) / 2, vi += g, Sc(b = a, c = d)
        }
        var b, c;
        Ki.point = function(d, e) {
            Ki.point = a, Sc(b = d, c = e)
        }
    }

    function Uc() {
        Ki.point = Sc
    }

    function Vc() {
        function a(a, b) {
            var c = a - d,
                f = b - e,
                g = Math.sqrt(c * c + f * f);
            ti += g * (d + a) / 2, ui += g * (e + b) / 2, vi += g, g = e * a - d * b, wi += g * (d + a), xi += g * (e + b), yi += 3 * g, Sc(d = a, e = b)
        }
        var b, c, d, e;
        Ki.point = function(f, g) {
            Ki.point = a, Sc(b = d = f, c = e = g)
        }, Ki.lineEnd = function() {
            a(b, c)
        }
    }

    function Wc(a) {
        function b(b, c) {
            a.moveTo(b, c), a.arc(b, c, g, 0, zh)
        }

        function c(b, c) {
            a.moveTo(b, c), h.point = d
        }

        function d(b, c) {
            a.lineTo(b, c)
        }

        function e() {
            h.point = b
        }

        function f() {
            a.closePath()
        }
        var g = 4.5,
            h = {
                point: b,
                lineStart: function() {
                    h.point = c
                },
                lineEnd: e,
                polygonStart: function() {
                    h.lineEnd = f
                },
                polygonEnd: function() {
                    h.lineEnd = e, h.point = b
                },
                pointRadius: function(a) {
                    return g = a, h
                },
                result: n
            };
        return h
    }

    function Xc(a) {
        function b(a) {
            return (h ? d : c)(a)
        }

        function c(b) {
            return $c(b, function(c, d) {
                c = a(c, d), b.point(c[0], c[1])
            })
        }

        function d(b) {
            function c(c, d) {
                c = a(c, d), b.point(c[0], c[1])
            }

            function d() {
                t = 0 / 0, y.point = f, b.lineStart()
            }

            function f(c, d) {
                var f = jc([c, d]),
                    g = a(c, d);
                e(t, u, s, v, w, x, t = g[0], u = g[1], s = c, v = f[0], w = f[1], x = f[2], h, b), b.point(t, u)
            }

            function g() {
                y.point = c, b.lineEnd()
            }

            function i() {
                d(), y.point = j, y.lineEnd = k
            }

            function j(a, b) {
                f(l = a, m = b), n = t, o = u, p = v, q = w, r = x, y.point = f
            }

            function k() {
                e(t, u, s, v, w, x, n, o, l, p, q, r, h, b), y.lineEnd = g, g()
            }
            var l, m, n, o, p, q, r, s, t, u, v, w, x, y = {
                point: c,
                lineStart: d,
                lineEnd: g,
                polygonStart: function() {
                    b.polygonStart(), y.lineStart = i
                },
                polygonEnd: function() {
                    b.polygonEnd(), y.lineStart = d
                }
            };
            return y
        }

        function e(b, c, d, h, i, j, k, l, m, n, o, p, q, r) {
            var s = k - b,
                t = l - c,
                u = s * s + t * t;
            if (u > 4 * f && q--) {
                var v = h + n,
                    w = i + o,
                    x = j + p,
                    y = Math.sqrt(v * v + w * w + x * x),
                    z = Math.asin(x /= y),
                    A = gh(gh(x) - 1) < Bh || gh(d - m) < Bh ? (d + m) / 2 : Math.atan2(w, v),
                    B = a(A, z),
                    C = B[0],
                    D = B[1],
                    E = C - b,
                    F = D - c,
                    G = t * E - s * F;
                (G * G / u > f || gh((s * E + t * F) / u - .5) > .3 || g > h * n + i * o + j * p) && (e(b, c, d, h, i, j, C, D, A, v /= y, w /= y, x, q, r), r.point(C, D), e(C, D, A, v, w, x, k, l, m, n, o, p, q, r))
            }
        }
        var f = .5,
            g = Math.cos(30 * Dh),
            h = 16;
        return b.precision = function(a) {
            return arguments.length ? (h = (f = a * a) > 0 && 16, b) : Math.sqrt(f)
        }, b
    }

    function Yc(a) {
        var b = Xc(function(b, c) {
            return a([b * Eh, c * Eh])
        });
        return function(a) {
            return bd(b(a))
        }
    }

    function Zc(a) {
        this.stream = a
    }

    function $c(a, b) {
        return {
            point: b,
            sphere: function() {
                a.sphere()
            },
            lineStart: function() {
                a.lineStart()
            },
            lineEnd: function() {
                a.lineEnd()
            },
            polygonStart: function() {
                a.polygonStart()
            },
            polygonEnd: function() {
                a.polygonEnd()
            }
        }
    }

    function _c(a) {
        return ad(function() {
            return a
        })()
    }

    function ad(a) {
        function b(a) {
            return a = h(a[0] * Dh, a[1] * Dh), [a[0] * m + i, j - a[1] * m]
        }

        function c(a) {
            return a = h.invert((a[0] - i) / m, (j - a[1]) / m), a && [a[0] * Eh, a[1] * Eh]
        }

        function d() {
            h = Lc(g = ed(r, s, t), f);
            var a = f(p, q);
            return i = n - a[0] * m, j = o + a[1] * m, e()
        }

        function e() {
            return k && (k.valid = !1, k = null), b
        }
        var f, g, h, i, j, k, l = Xc(function(a, b) {
                return a = f(a, b), [a[0] * m + i, j - a[1] * m]
            }),
            m = 150,
            n = 480,
            o = 250,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = Ai,
            v = wb,
            w = null,
            x = null;
        return b.stream = function(a) {
                return k && (k.valid = !1), k = bd(u(g, l(v(a)))), k.valid = !0, k
            }, b.clipAngle = function(a) {
                return arguments.length ? (u = null == a ? (w = a, Ai) : Ic((w = +a) * Dh), e()) : w
            }, b.clipExtent = function(a) {
                return arguments.length ? (x = a, v = a ? Kc(a[0][0], a[0][1], a[1][0], a[1][1]) : wb, e()) : x
            }, b.scale = function(a) {
                return arguments.length ? (m = +a, d()) : m
            }, b.translate = function(a) {
                return arguments.length ? (n = +a[0], o = +a[1], d()) : [n, o]
            }, b.center = function(a) {
                return arguments.length ? (p = a[0] % 360 * Dh, q = a[1] % 360 * Dh, d()) : [p * Eh, q * Eh]
            }, b.rotate = function(a) {
                return arguments.length ? (r = a[0] % 360 * Dh, s = a[1] % 360 * Dh, t = a.length > 2 ? a[2] % 360 * Dh : 0, d()) : [r * Eh, s * Eh, t * Eh]
            }, Ug.rebind(b, l, "precision"),
            function() {
                return f = a.apply(this, arguments), b.invert = f.invert && c, d()
            }
    }

    function bd(a) {
        return $c(a, function(b, c) {
            a.point(b * Dh, c * Dh)
        })
    }

    function cd(a, b) {
        return [a, b]
    }

    function dd(a, b) {
        return [a > yh ? a - zh : -yh > a ? a + zh : a, b]
    }

    function ed(a, b, c) {
        return a ? b || c ? Lc(gd(a), hd(b, c)) : gd(a) : b || c ? hd(b, c) : dd
    }

    function fd(a) {
        return function(b, c) {
            return b += a, [b > yh ? b - zh : -yh > b ? b + zh : b, c]
        }
    }

    function gd(a) {
        var b = fd(a);
        return b.invert = fd(-a), b
    }

    function hd(a, b) {
        function c(a, b) {
            var c = Math.cos(b),
                h = Math.cos(a) * c,
                i = Math.sin(a) * c,
                j = Math.sin(b),
                k = j * d + h * e;
            return [Math.atan2(i * f - k * g, h * d - j * e), U(k * f + i * g)]
        }
        var d = Math.cos(a),
            e = Math.sin(a),
            f = Math.cos(b),
            g = Math.sin(b);
        return c.invert = function(a, b) {
            var c = Math.cos(b),
                h = Math.cos(a) * c,
                i = Math.sin(a) * c,
                j = Math.sin(b),
                k = j * f - i * g;
            return [Math.atan2(i * f + j * g, h * d + k * e), U(k * d - h * e)]
        }, c
    }

    function id(a, b) {
        var c = Math.cos(a),
            d = Math.sin(a);
        return function(e, f, g, h) {
            var i = g * b;
            null != e ? (e = jd(c, e), f = jd(c, f), (g > 0 ? f > e : e > f) && (e += g * zh)) : (e = a + g * zh, f = a - .5 * i);
            for (var j, k = e; g > 0 ? k > f : f > k; k -= i) h.point((j = pc([c, -d * Math.cos(k), -d * Math.sin(k)]))[0], j[1])
        }
    }

    function jd(a, b) {
        var c = jc(b);
        c[0] -= a, oc(c);
        var d = T(-c[1]);
        return ((-c[2] < 0 ? -d : d) + 2 * Math.PI - Bh) % (2 * Math.PI)
    }

    function kd(a, b, c) {
        var d = Ug.range(a, b - Bh, c).concat(b);
        return function(a) {
            return d.map(function(b) {
                return [a, b]
            })
        }
    }

    function ld(a, b, c) {
        var d = Ug.range(a, b - Bh, c).concat(b);
        return function(a) {
            return d.map(function(b) {
                return [b, a]
            })
        }
    }

    function md(a) {
        return a.source
    }

    function nd(a) {
        return a.target
    }

    function od(a, b, c, d) {
        var e = Math.cos(b),
            f = Math.sin(b),
            g = Math.cos(d),
            h = Math.sin(d),
            i = e * Math.cos(a),
            j = e * Math.sin(a),
            k = g * Math.cos(c),
            l = g * Math.sin(c),
            m = 2 * Math.asin(Math.sqrt(Y(d - b) + e * g * Y(c - a))),
            n = 1 / Math.sin(m),
            o = m ? function(a) {
                var b = Math.sin(a *= m) * n,
                    c = Math.sin(m - a) * n,
                    d = c * i + b * k,
                    e = c * j + b * l,
                    g = c * f + b * h;
                return [Math.atan2(e, d) * Eh, Math.atan2(g, Math.sqrt(d * d + e * e)) * Eh]
            } : function() {
                return [a * Eh, b * Eh]
            };
        return o.distance = m, o
    }

    function pd() {
        function a(a, e) {
            var f = Math.sin(e *= Dh),
                g = Math.cos(e),
                h = gh((a *= Dh) - b),
                i = Math.cos(h);
            Li += Math.atan2(Math.sqrt((h = g * Math.sin(h)) * h + (h = d * f - c * g * i) * h), c * f + d * g * i), b = a, c = f, d = g
        }
        var b, c, d;
        Mi.point = function(e, f) {
            b = e * Dh, c = Math.sin(f *= Dh), d = Math.cos(f), Mi.point = a
        }, Mi.lineEnd = function() {
            Mi.point = Mi.lineEnd = n
        }
    }

    function qd(a, b) {
        function c(b, c) {
            var d = Math.cos(b),
                e = Math.cos(c),
                f = a(d * e);
            return [f * e * Math.sin(b), f * Math.sin(c)]
        }
        return c.invert = function(a, c) {
            var d = Math.sqrt(a * a + c * c),
                e = b(d),
                f = Math.sin(e),
                g = Math.cos(e);
            return [Math.atan2(a * f, d * g), Math.asin(d && c * f / d)]
        }, c
    }

    function rd(a, b) {
        function c(a, b) {
            var c = gh(gh(b) - Ah) < Bh ? 0 : g / Math.pow(e(b), f);
            return [c * Math.sin(f * a), g - c * Math.cos(f * a)]
        }
        var d = Math.cos(a),
            e = function(a) {
                return Math.tan(yh / 4 + a / 2)
            },
            f = a === b ? Math.sin(a) : Math.log(d / Math.cos(b)) / Math.log(e(b) / e(a)),
            g = d * Math.pow(e(a), f) / f;
        return f ? (c.invert = function(a, b) {
            var c = g - b,
                d = R(f) * Math.sqrt(a * a + c * c);
            return [Math.atan2(a, c) / f, 2 * Math.atan(Math.pow(g / d, 1 / f)) - Ah]
        }, c) : td
    }

    function sd(a, b) {
        function c(a, b) {
            var c = f - b;
            return [c * Math.sin(e * a), f - c * Math.cos(e * a)]
        }
        var d = Math.cos(a),
            e = a === b ? Math.sin(a) : (d - Math.cos(b)) / (b - a),
            f = d / e + a;
        return gh(e) < Bh ? cd : (c.invert = function(a, b) {
            var c = f - b;
            return [Math.atan2(a, c) / e, f - R(e) * Math.sqrt(a * a + c * c)]
        }, c)
    }

    function td(a, b) {
        return [a, Math.log(Math.tan(yh / 4 + b / 2))]
    }

    function ud(a) {
        var b, c = _c(a),
            d = c.scale,
            e = c.translate,
            f = c.clipExtent;
        return c.scale = function() {
            var a = d.apply(c, arguments);
            return a === c ? b ? c.clipExtent(null) : c : a
        }, c.translate = function() {
            var a = e.apply(c, arguments);
            return a === c ? b ? c.clipExtent(null) : c : a
        }, c.clipExtent = function(a) {
            var g = f.apply(c, arguments);
            if (g === c) {
                if (b = null == a) {
                    var h = yh * d(),
                        i = e();
                    f([
                        [i[0] - h, i[1] - h],
                        [i[0] + h, i[1] + h]
                    ])
                }
            } else b && (g = null);
            return g
        }, c.clipExtent(null)
    }

    function vd(a, b) {
        return [Math.log(Math.tan(yh / 4 + b / 2)), -a]
    }

    function wd(a) {
        return a[0]
    }

    function xd(a) {
        return a[1]
    }

    function yd(a) {
        for (var b = a.length, c = [0, 1], d = 2, e = 2; b > e; e++) {
            for (; d > 1 && S(a[c[d - 2]], a[c[d - 1]], a[e]) <= 0;) --d;
            c[d++] = e
        }
        return c.slice(0, d)
    }

    function zd(a, b) {
        return a[0] - b[0] || a[1] - b[1]
    }

    function Ad(a, b, c) {
        return (c[0] - b[0]) * (a[1] - b[1]) < (c[1] - b[1]) * (a[0] - b[0])
    }

    function Bd(a, b, c, d) {
        var e = a[0],
            f = c[0],
            g = b[0] - e,
            h = d[0] - f,
            i = a[1],
            j = c[1],
            k = b[1] - i,
            l = d[1] - j,
            m = (h * (i - j) - l * (e - f)) / (l * g - h * k);
        return [e + m * g, i + m * k]
    }

    function Cd(a) {
        var b = a[0],
            c = a[a.length - 1];
        return !(b[0] - c[0] || b[1] - c[1])
    }

    function Dd() {
        Yd(this), this.edge = this.site = this.circle = null
    }

    function Ed(a) {
        var b = Yi.pop() || new Dd;
        return b.site = a, b
    }

    function Fd(a) {
        Pd(a), Vi.remove(a), Yi.push(a), Yd(a)
    }

    function Gd(a) {
        var b = a.circle,
            c = b.x,
            d = b.cy,
            e = {
                x: c,
                y: d
            },
            f = a.P,
            g = a.N,
            h = [a];
        Fd(a);
        for (var i = f; i.circle && gh(c - i.circle.x) < Bh && gh(d - i.circle.cy) < Bh;) f = i.P, h.unshift(i), Fd(i), i = f;
        h.unshift(i), Pd(i);
        for (var j = g; j.circle && gh(c - j.circle.x) < Bh && gh(d - j.circle.cy) < Bh;) g = j.N, h.push(j), Fd(j), j = g;
        h.push(j), Pd(j);
        var k, l = h.length;
        for (k = 1; l > k; ++k) j = h[k], i = h[k - 1], Vd(j.edge, i.site, j.site, e);
        i = h[0], j = h[l - 1], j.edge = Td(i.site, j.site, null, e), Od(i), Od(j)
    }

    function Hd(a) {
        for (var b, c, d, e, f = a.x, g = a.y, h = Vi._; h;)
            if (d = Id(h, g) - f, d > Bh) h = h.L;
            else {
                if (e = f - Jd(h, g), !(e > Bh)) {
                    d > -Bh ? (b = h.P, c = h) : e > -Bh ? (b = h, c = h.N) : b = c = h;
                    break
                }
                if (!h.R) {
                    b = h;
                    break
                }
                h = h.R
            }
        var i = Ed(a);
        if (Vi.insert(b, i), b || c) {
            if (b === c) return Pd(b), c = Ed(b.site), Vi.insert(i, c), i.edge = c.edge = Td(b.site, i.site), Od(b), Od(c), void 0;
            if (!c) return i.edge = Td(b.site, i.site), void 0;
            Pd(b), Pd(c);
            var j = b.site,
                k = j.x,
                l = j.y,
                m = a.x - k,
                n = a.y - l,
                o = c.site,
                p = o.x - k,
                q = o.y - l,
                r = 2 * (m * q - n * p),
                s = m * m + n * n,
                t = p * p + q * q,
                u = {
                    x: (q * s - n * t) / r + k,
                    y: (m * t - p * s) / r + l
                };
            Vd(c.edge, j, o, u), i.edge = Td(j, a, null, u), c.edge = Td(a, o, null, u), Od(b), Od(c)
        }
    }

    function Id(a, b) {
        var c = a.site,
            d = c.x,
            e = c.y,
            f = e - b;
        if (!f) return d;
        var g = a.P;
        if (!g) return -1 / 0;
        c = g.site;
        var h = c.x,
            i = c.y,
            j = i - b;
        if (!j) return h;
        var k = h - d,
            l = 1 / f - 1 / j,
            m = k / j;
        return l ? (-m + Math.sqrt(m * m - 2 * l * (k * k / (-2 * j) - i + j / 2 + e - f / 2))) / l + d : (d + h) / 2
    }

    function Jd(a, b) {
        var c = a.N;
        if (c) return Id(c, b);
        var d = a.site;
        return d.y === b ? d.x : 1 / 0
    }

    function Kd(a) {
        this.site = a, this.edges = []
    }

    function Ld(a) {
        for (var b, c, d, e, f, g, h, i, j, k, l = a[0][0], m = a[1][0], n = a[0][1], o = a[1][1], p = Ui, q = p.length; q--;)
            if (f = p[q], f && f.prepare())
                for (h = f.edges, i = h.length, g = 0; i > g;) k = h[g].end(), d = k.x, e = k.y, j = h[++g % i].start(), b = j.x, c = j.y, (gh(d - b) > Bh || gh(e - c) > Bh) && (h.splice(g, 0, new Wd(Ud(f.site, k, gh(d - l) < Bh && o - e > Bh ? {
                    x: l,
                    y: gh(b - l) < Bh ? c : o
                } : gh(e - o) < Bh && m - d > Bh ? {
                    x: gh(c - o) < Bh ? b : m,
                    y: o
                } : gh(d - m) < Bh && e - n > Bh ? {
                    x: m,
                    y: gh(b - m) < Bh ? c : n
                } : gh(e - n) < Bh && d - l > Bh ? {
                    x: gh(c - n) < Bh ? b : l,
                    y: n
                } : null), f.site, null)), ++i)
    }

    function Md(a, b) {
        return b.angle - a.angle
    }

    function Nd() {
        Yd(this), this.x = this.y = this.arc = this.site = this.cy = null
    }

    function Od(a) {
        var b = a.P,
            c = a.N;
        if (b && c) {
            var d = b.site,
                e = a.site,
                f = c.site;
            if (d !== f) {
                var g = e.x,
                    h = e.y,
                    i = d.x - g,
                    j = d.y - h,
                    k = f.x - g,
                    l = f.y - h,
                    m = 2 * (i * l - j * k);
                if (!(m >= -Ch)) {
                    var n = i * i + j * j,
                        o = k * k + l * l,
                        p = (l * n - j * o) / m,
                        q = (i * o - k * n) / m,
                        l = q + h,
                        r = Zi.pop() || new Nd;
                    r.arc = a, r.site = e, r.x = p + g, r.y = l + Math.sqrt(p * p + q * q), r.cy = l, a.circle = r;
                    for (var s = null, t = Xi._; t;)
                        if (r.y < t.y || r.y === t.y && r.x <= t.x) {
                            if (!t.L) {
                                s = t.P;
                                break
                            }
                            t = t.L
                        } else {
                            if (!t.R) {
                                s = t;
                                break
                            }
                            t = t.R
                        }
                    Xi.insert(s, r), s || (Wi = r)
                }
            }
        }
    }

    function Pd(a) {
        var b = a.circle;
        b && (b.P || (Wi = b.N), Xi.remove(b), Zi.push(b), Yd(b), a.circle = null)
    }

    function Qd(a) {
        for (var b, c = Ti, d = Jc(a[0][0], a[0][1], a[1][0], a[1][1]), e = c.length; e--;) b = c[e], (!Rd(b, a) || !d(b) || gh(b.a.x - b.b.x) < Bh && gh(b.a.y - b.b.y) < Bh) && (b.a = b.b = null, c.splice(e, 1))
    }

    function Rd(a, b) {
        var c = a.b;
        if (c) return !0;
        var d, e, f = a.a,
            g = b[0][0],
            h = b[1][0],
            i = b[0][1],
            j = b[1][1],
            k = a.l,
            l = a.r,
            m = k.x,
            n = k.y,
            o = l.x,
            p = l.y,
            q = (m + o) / 2,
            r = (n + p) / 2;
        if (p === n) {
            if (g > q || q >= h) return;
            if (m > o) {
                if (f) {
                    if (f.y >= j) return
                } else f = {
                    x: q,
                    y: i
                };
                c = {
                    x: q,
                    y: j
                }
            } else {
                if (f) {
                    if (f.y < i) return
                } else f = {
                    x: q,
                    y: j
                };
                c = {
                    x: q,
                    y: i
                }
            }
        } else if (d = (m - o) / (p - n), e = r - d * q, -1 > d || d > 1)
            if (m > o) {
                if (f) {
                    if (f.y >= j) return
                } else f = {
                    x: (i - e) / d,
                    y: i
                };
                c = {
                    x: (j - e) / d,
                    y: j
                }
            } else {
                if (f) {
                    if (f.y < i) return
                } else f = {
                    x: (j - e) / d,
                    y: j
                };
                c = {
                    x: (i - e) / d,
                    y: i
                }
            } else if (p > n) {
            if (f) {
                if (f.x >= h) return
            } else f = {
                x: g,
                y: d * g + e
            };
            c = {
                x: h,
                y: d * h + e
            }
        } else {
            if (f) {
                if (f.x < g) return
            } else f = {
                x: h,
                y: d * h + e
            };
            c = {
                x: g,
                y: d * g + e
            }
        }
        return a.a = f, a.b = c, !0
    }

    function Sd(a, b) {
        this.l = a, this.r = b, this.a = this.b = null
    }

    function Td(a, b, c, d) {
        var e = new Sd(a, b);
        return Ti.push(e), c && Vd(e, a, b, c), d && Vd(e, b, a, d), Ui[a.i].edges.push(new Wd(e, a, b)), Ui[b.i].edges.push(new Wd(e, b, a)), e
    }

    function Ud(a, b, c) {
        var d = new Sd(a, null);
        return d.a = b, d.b = c, Ti.push(d), d
    }

    function Vd(a, b, c, d) {
        a.a || a.b ? a.l === c ? a.b = d : a.a = d : (a.a = d, a.l = b, a.r = c)
    }

    function Wd(a, b, c) {
        var d = a.a,
            e = a.b;
        this.edge = a, this.site = b, this.angle = c ? Math.atan2(c.y - b.y, c.x - b.x) : a.l === b ? Math.atan2(e.x - d.x, d.y - e.y) : Math.atan2(d.x - e.x, e.y - d.y)
    }

    function Xd() {
        this._ = null
    }

    function Yd(a) {
        a.U = a.C = a.L = a.R = a.P = a.N = null
    }

    function Zd(a, b) {
        var c = b,
            d = b.R,
            e = c.U;
        e ? e.L === c ? e.L = d : e.R = d : a._ = d, d.U = e, c.U = d, c.R = d.L, c.R && (c.R.U = c), d.L = c
    }

    function $d(a, b) {
        var c = b,
            d = b.L,
            e = c.U;
        e ? e.L === c ? e.L = d : e.R = d : a._ = d, d.U = e, c.U = d, c.L = d.R, c.L && (c.L.U = c), d.R = c
    }

    function _d(a) {
        for (; a.L;) a = a.L;
        return a
    }

    function ae(a, b) {
        var c, d, e, f = a.sort(be).pop();
        for (Ti = [], Ui = new Array(a.length), Vi = new Xd, Xi = new Xd;;)
            if (e = Wi, f && (!e || f.y < e.y || f.y === e.y && f.x < e.x))(f.x !== c || f.y !== d) && (Ui[f.i] = new Kd(f), Hd(f), c = f.x, d = f.y), f = a.pop();
            else {
                if (!e) break;
                Gd(e.arc)
            }
        b && (Qd(b), Ld(b));
        var g = {
            cells: Ui,
            edges: Ti
        };
        return Vi = Xi = Ti = Ui = null, g
    }

    function be(a, b) {
        return b.y - a.y || b.x - a.x
    }

    function ce(a, b, c) {
        return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y)
    }

    function de(a) {
        return a.x
    }

    function ee(a) {
        return a.y
    }

    function fe() {
        return {
            leaf: !0,
            nodes: [],
            point: null,
            x: null,
            y: null
        }
    }

    function ge(a, b, c, d, e, f) {
        if (!a(b, c, d, e, f)) {
            var g = .5 * (c + e),
                h = .5 * (d + f),
                i = b.nodes;
            i[0] && ge(a, i[0], c, d, g, h), i[1] && ge(a, i[1], g, d, e, h), i[2] && ge(a, i[2], c, h, g, f), i[3] && ge(a, i[3], g, h, e, f)
        }
    }

    function he(a, b) {
        a = Ug.rgb(a), b = Ug.rgb(b);
        var c = a.r,
            d = a.g,
            e = a.b,
            f = b.r - c,
            g = b.g - d,
            h = b.b - e;
        return function(a) {
            return "#" + pb(Math.round(c + f * a)) + pb(Math.round(d + g * a)) + pb(Math.round(e + h * a))
        }
    }

    function ie(a, b) {
        var c, d = {},
            e = {};
        for (c in a) c in b ? d[c] = le(a[c], b[c]) : e[c] = a[c];
        for (c in b) c in a || (e[c] = b[c]);
        return function(a) {
            for (c in d) e[c] = d[c](a);
            return e
        }
    }

    function je(a, b) {
        return b -= a = +a,
            function(c) {
                return a + b * c
            }
    }

    function ke(a, b) {
        var c, d, e, f, g, h = 0,
            i = 0,
            j = [],
            k = [];
        for (a += "", b += "", _i.lastIndex = 0, d = 0; c = _i.exec(b); ++d) c.index && j.push(b.substring(h, i = c.index)), k.push({
            i: j.length,
            x: c[0]
        }), j.push(null), h = _i.lastIndex;
        for (h < b.length && j.push(b.substring(h)), d = 0, f = k.length;
            (c = _i.exec(a)) && f > d; ++d)
            if (g = k[d], g.x == c[0]) {
                if (g.i)
                    if (null == j[g.i + 1])
                        for (j[g.i - 1] += g.x, j.splice(g.i, 1), e = d + 1; f > e; ++e) k[e].i--;
                    else
                        for (j[g.i - 1] += g.x + j[g.i + 1], j.splice(g.i, 2), e = d + 1; f > e; ++e) k[e].i -= 2;
                else if (null == j[g.i + 1]) j[g.i] = g.x;
                else
                    for (j[g.i] = g.x + j[g.i + 1], j.splice(g.i + 1, 1), e = d + 1; f > e; ++e) k[e].i--;
                k.splice(d, 1), f--, d--
            } else g.x = je(parseFloat(c[0]), parseFloat(g.x));
        for (; f > d;) g = k.pop(), null == j[g.i + 1] ? j[g.i] = g.x : (j[g.i] = g.x + j[g.i + 1], j.splice(g.i + 1, 1)), f--;
        return 1 === j.length ? null == j[0] ? (g = k[0].x, function(a) {
            return g(a) + ""
        }) : function() {
            return b
        } : function(a) {
            for (d = 0; f > d; ++d) j[(g = k[d]).i] = g.x(a);
            return j.join("")
        }
    }

    function le(a, b) {
        for (var c, d = Ug.interpolators.length; --d >= 0 && !(c = Ug.interpolators[d](a, b)););
        return c
    }

    function me(a, b) {
        var c, d = [],
            e = [],
            f = a.length,
            g = b.length,
            h = Math.min(a.length, b.length);
        for (c = 0; h > c; ++c) d.push(le(a[c], b[c]));
        for (; f > c; ++c) e[c] = a[c];
        for (; g > c; ++c) e[c] = b[c];
        return function(a) {
            for (c = 0; h > c; ++c) e[c] = d[c](a);
            return e
        }
    }

    function ne(a) {
        return function(b) {
            return 0 >= b ? 0 : b >= 1 ? 1 : a(b)
        }
    }

    function oe(a) {
        return function(b) {
            return 1 - a(1 - b)
        }
    }

    function pe(a) {
        return function(b) {
            return .5 * (.5 > b ? a(2 * b) : 2 - a(2 - 2 * b))
        }
    }

    function qe(a) {
        return a * a
    }

    function re(a) {
        return a * a * a
    }

    function se(a) {
        if (0 >= a) return 0;
        if (a >= 1) return 1;
        var b = a * a,
            c = b * a;
        return 4 * (.5 > a ? c : 3 * (a - b) + c - .75)
    }

    function te(a) {
        return function(b) {
            return Math.pow(b, a)
        }
    }

    function ue(a) {
        return 1 - Math.cos(a * Ah)
    }

    function ve(a) {
        return Math.pow(2, 10 * (a - 1))
    }

    function we(a) {
        return 1 - Math.sqrt(1 - a * a)
    }

    function xe(a, b) {
        var c;
        return arguments.length < 2 && (b = .45), arguments.length ? c = b / zh * Math.asin(1 / a) : (a = 1, c = b / 4),
            function(d) {
                return 1 + a * Math.pow(2, -10 * d) * Math.sin((d - c) * zh / b)
            }
    }

    function ye(a) {
        return a || (a = 1.70158),
            function(b) {
                return b * b * ((a + 1) * b - a)
            }
    }

    function ze(a) {
        return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
    }

    function Ae(a, b) {
        a = Ug.hcl(a), b = Ug.hcl(b);
        var c = a.h,
            d = a.c,
            e = a.l,
            f = b.h - c,
            g = b.c - d,
            h = b.l - e;
        return isNaN(g) && (g = 0, d = isNaN(d) ? b.c : d), isNaN(f) ? (f = 0, c = isNaN(c) ? b.h : c) : f > 180 ? f -= 360 : -180 > f && (f += 360),
            function(a) {
                return db(c + f * a, d + g * a, e + h * a) + ""
            }
    }

    function Be(a, b) {
        a = Ug.hsl(a), b = Ug.hsl(b);
        var c = a.h,
            d = a.s,
            e = a.l,
            f = b.h - c,
            g = b.s - d,
            h = b.l - e;
        return isNaN(g) && (g = 0, d = isNaN(d) ? b.s : d), isNaN(f) ? (f = 0, c = isNaN(c) ? b.h : c) : f > 180 ? f -= 360 : -180 > f && (f += 360),
            function(a) {
                return ab(c + f * a, d + g * a, e + h * a) + ""
            }
    }

    function Ce(a, b) {
        a = Ug.lab(a), b = Ug.lab(b);
        var c = a.l,
            d = a.a,
            e = a.b,
            f = b.l - c,
            g = b.a - d,
            h = b.b - e;
        return function(a) {
            return gb(c + f * a, d + g * a, e + h * a) + ""
        }
    }

    function De(a, b) {
        return b -= a,
            function(c) {
                return Math.round(a + b * c)
            }
    }

    function Ee(a) {
        var b = [a.a, a.b],
            c = [a.c, a.d],
            d = Ge(b),
            e = Fe(b, c),
            f = Ge(He(c, b, -e)) || 0;
        b[0] * c[1] < c[0] * b[1] && (b[0] *= -1, b[1] *= -1, d *= -1, e *= -1), this.rotate = (d ? Math.atan2(b[1], b[0]) : Math.atan2(-c[0], c[1])) * Eh, this.translate = [a.e, a.f], this.scale = [d, f], this.skew = f ? Math.atan2(e, f) * Eh : 0
    }

    function Fe(a, b) {
        return a[0] * b[0] + a[1] * b[1]
    }

    function Ge(a) {
        var b = Math.sqrt(Fe(a, a));
        return b && (a[0] /= b, a[1] /= b), b
    }

    function He(a, b, c) {
        return a[0] += c * b[0], a[1] += c * b[1], a
    }

    function Ie(a, b) {
        var c, d = [],
            e = [],
            f = Ug.transform(a),
            g = Ug.transform(b),
            h = f.translate,
            i = g.translate,
            j = f.rotate,
            k = g.rotate,
            l = f.skew,
            m = g.skew,
            n = f.scale,
            o = g.scale;
        return h[0] != i[0] || h[1] != i[1] ? (d.push("translate(", null, ",", null, ")"), e.push({
                i: 1,
                x: je(h[0], i[0])
            }, {
                i: 3,
                x: je(h[1], i[1])
            })) : i[0] || i[1] ? d.push("translate(" + i + ")") : d.push(""), j != k ? (j - k > 180 ? k += 360 : k - j > 180 && (j += 360), e.push({
                i: d.push(d.pop() + "rotate(", null, ")") - 2,
                x: je(j, k)
            })) : k && d.push(d.pop() + "rotate(" + k + ")"), l != m ? e.push({
                i: d.push(d.pop() + "skewX(", null, ")") - 2,
                x: je(l, m)
            }) : m && d.push(d.pop() + "skewX(" + m + ")"), n[0] != o[0] || n[1] != o[1] ? (c = d.push(d.pop() + "scale(", null, ",", null, ")"), e.push({
                i: c - 4,
                x: je(n[0], o[0])
            }, {
                i: c - 2,
                x: je(n[1], o[1])
            })) : (1 != o[0] || 1 != o[1]) && d.push(d.pop() + "scale(" + o + ")"), c = e.length,
            function(a) {
                for (var b, f = -1; ++f < c;) d[(b = e[f]).i] = b.x(a);
                return d.join("")
            }
    }

    function Je(a, b) {
        return b = b - (a = +a) ? 1 / (b - a) : 0,
            function(c) {
                return (c - a) * b
            }
    }

    function Ke(a, b) {
        return b = b - (a = +a) ? 1 / (b - a) : 0,
            function(c) {
                return Math.max(0, Math.min(1, (c - a) * b))
            }
    }

    function Le(a) {
        for (var b = a.source, c = a.target, d = Ne(b, c), e = [b]; b !== d;) b = b.parent, e.push(b);
        for (var f = e.length; c !== d;) e.splice(f, 0, c), c = c.parent;
        return e
    }

    function Me(a) {
        for (var b = [], c = a.parent; null != c;) b.push(a), a = c, c = c.parent;
        return b.push(a), b
    }

    function Ne(a, b) {
        if (a === b) return a;
        for (var c = Me(a), d = Me(b), e = c.pop(), f = d.pop(), g = null; e === f;) g = e, e = c.pop(), f = d.pop();
        return g
    }

    function Oe(a) {
        a.fixed |= 2
    }

    function Pe(a) {
        a.fixed &= -7
    }

    function Qe(a) {
        a.fixed |= 4, a.px = a.x, a.py = a.y
    }

    function Re(a) {
        a.fixed &= -5
    }

    function Se(a, b, c) {
        var d = 0,
            e = 0;
        if (a.charge = 0, !a.leaf)
            for (var f, g = a.nodes, h = g.length, i = -1; ++i < h;) f = g[i], null != f && (Se(f, b, c), a.charge += f.charge, d += f.charge * f.cx, e += f.charge * f.cy);
        if (a.point) {
            a.leaf || (a.point.x += Math.random() - .5, a.point.y += Math.random() - .5);
            var j = b * c[a.point.index];
            a.charge += a.pointCharge = j, d += j * a.point.x, e += j * a.point.y
        }
        a.cx = d / a.charge, a.cy = e / a.charge
    }

    function Te(a, b) {
        return Ug.rebind(a, b, "sort", "children", "value"), a.nodes = a, a.links = Xe, a
    }

    function Ue(a) {
        return a.children
    }

    function Ve(a) {
        return a.value
    }

    function We(a, b) {
        return b.value - a.value
    }

    function Xe(a) {
        return Ug.merge(a.map(function(a) {
            return (a.children || []).map(function(b) {
                return {
                    source: a,
                    target: b
                }
            })
        }))
    }

    function Ye(a) {
        return a.x
    }

    function Ze(a) {
        return a.y
    }

    function $e(a, b, c) {
        a.y0 = b, a.y = c
    }

    function _e(a) {
        return Ug.range(a.length)
    }

    function af(a) {
        for (var b = -1, c = a[0].length, d = []; ++b < c;) d[b] = 0;
        return d
    }

    function bf(a) {
        for (var b, c = 1, d = 0, e = a[0][1], f = a.length; f > c; ++c)(b = a[c][1]) > e && (d = c, e = b);
        return d
    }

    function cf(a) {
        return a.reduce(df, 0)
    }

    function df(a, b) {
        return a + b[1]
    }

    function ef(a, b) {
        return ff(a, Math.ceil(Math.log(b.length) / Math.LN2 + 1))
    }

    function ff(a, b) {
        for (var c = -1, d = +a[0], e = (a[1] - d) / b, f = []; ++c <= b;) f[c] = e * c + d;
        return f
    }

    function gf(a) {
        return [Ug.min(a), Ug.max(a)]
    }

    function hf(a, b) {
        return a.parent == b.parent ? 1 : 2
    }

    function jf(a) {
        var b = a.children;
        return b && b.length ? b[0] : a._tree.thread
    }

    function kf(a) {
        var b, c = a.children;
        return c && (b = c.length) ? c[b - 1] : a._tree.thread
    }

    function lf(a, b) {
        var c = a.children;
        if (c && (e = c.length))
            for (var d, e, f = -1; ++f < e;) b(d = lf(c[f], b), a) > 0 && (a = d);
        return a
    }

    function mf(a, b) {
        return a.x - b.x
    }

    function nf(a, b) {
        return b.x - a.x
    }

    function of(a, b) {
        return a.depth - b.depth
    }

    function pf(a, b) {
        function c(a, d) {
            var e = a.children;
            if (e && (g = e.length))
                for (var f, g, h = null, i = -1; ++i < g;) f = e[i], c(f, h), h = f;
            b(a, d)
        }
        c(a, null)
    }

    function qf(a) {
        for (var b, c = 0, d = 0, e = a.children, f = e.length; --f >= 0;) b = e[f]._tree, b.prelim += c, b.mod += c, c += b.shift + (d += b.change)
    }

    function rf(a, b, c) {
        a = a._tree, b = b._tree;
        var d = c / (b.number - a.number);
        a.change += d, b.change -= d, b.shift += c, b.prelim += c, b.mod += c
    }

    function sf(a, b, c) {
        return a._tree.ancestor.parent == b.parent ? a._tree.ancestor : c
    }

    function tf(a, b) {
        return a.value - b.value
    }

    function uf(a, b) {
        var c = a._pack_next;
        a._pack_next = b, b._pack_prev = a, b._pack_next = c, c._pack_prev = b
    }

    function vf(a, b) {
        a._pack_next = b, b._pack_prev = a
    }

    function wf(a, b) {
        var c = b.x - a.x,
            d = b.y - a.y,
            e = a.r + b.r;
        return .999 * e * e > c * c + d * d
    }

    function xf(a) {
        function b(a) {
            k = Math.min(a.x - a.r, k), l = Math.max(a.x + a.r, l), m = Math.min(a.y - a.r, m), n = Math.max(a.y + a.r, n)
        }
        if ((c = a.children) && (j = c.length)) {
            var c, d, e, f, g, h, i, j, k = 1 / 0,
                l = -1 / 0,
                m = 1 / 0,
                n = -1 / 0;
            if (c.forEach(yf), d = c[0], d.x = -d.r, d.y = 0, b(d), j > 1 && (e = c[1], e.x = e.r, e.y = 0, b(e), j > 2))
                for (f = c[2], Bf(d, e, f), b(f), uf(d, f), d._pack_prev = f, uf(f, e), e = d._pack_next, g = 3; j > g; g++) {
                    Bf(d, e, f = c[g]);
                    var o = 0,
                        p = 1,
                        q = 1;
                    for (h = e._pack_next; h !== e; h = h._pack_next, p++)
                        if (wf(h, f)) {
                            o = 1;
                            break
                        }
                    if (1 == o)
                        for (i = d._pack_prev; i !== h._pack_prev && !wf(i, f); i = i._pack_prev, q++);
                    o ? (q > p || p == q && e.r < d.r ? vf(d, e = h) : vf(d = i, e), g--) : (uf(d, f), e = f, b(f))
                }
            var r = (k + l) / 2,
                s = (m + n) / 2,
                t = 0;
            for (g = 0; j > g; g++) f = c[g], f.x -= r, f.y -= s, t = Math.max(t, f.r + Math.sqrt(f.x * f.x + f.y * f.y));
            a.r = t, c.forEach(zf)
        }
    }

    function yf(a) {
        a._pack_next = a._pack_prev = a
    }

    function zf(a) {
        delete a._pack_next, delete a._pack_prev
    }

    function Af(a, b, c, d) {
        var e = a.children;
        if (a.x = b += d * a.x, a.y = c += d * a.y, a.r *= d, e)
            for (var f = -1, g = e.length; ++f < g;) Af(e[f], b, c, d)
    }

    function Bf(a, b, c) {
        var d = a.r + c.r,
            e = b.x - a.x,
            f = b.y - a.y;
        if (d && (e || f)) {
            var g = b.r + c.r,
                h = e * e + f * f;
            g *= g, d *= d;
            var i = .5 + (d - g) / (2 * h),
                j = Math.sqrt(Math.max(0, 2 * g * (d + h) - (d -= h) * d - g * g)) / (2 * h);
            c.x = a.x + i * e + j * f, c.y = a.y + i * f - j * e
        } else c.x = a.x + d, c.y = a.y
    }

    function Cf(a) {
        return 1 + Ug.max(a, function(a) {
            return a.y
        })
    }

    function Df(a) {
        return a.reduce(function(a, b) {
            return a + b.x
        }, 0) / a.length
    }

    function Ef(a) {
        var b = a.children;
        return b && b.length ? Ef(b[0]) : a
    }

    function Ff(a) {
        var b, c = a.children;
        return c && (b = c.length) ? Ff(c[b - 1]) : a
    }

    function Gf(a) {
        return {
            x: a.x,
            y: a.y,
            dx: a.dx,
            dy: a.dy
        }
    }

    function Hf(a, b) {
        var c = a.x + b[3],
            d = a.y + b[0],
            e = a.dx - b[1] - b[3],
            f = a.dy - b[0] - b[2];
        return 0 > e && (c += e / 2, e = 0), 0 > f && (d += f / 2, f = 0), {
            x: c,
            y: d,
            dx: e,
            dy: f
        }
    }

    function If(a) {
        var b = a[0],
            c = a[a.length - 1];
        return c > b ? [b, c] : [c, b]
    }

    function Jf(a) {
        return a.rangeExtent ? a.rangeExtent() : If(a.range())
    }

    function Kf(a, b, c, d) {
        var e = c(a[0], a[1]),
            f = d(b[0], b[1]);
        return function(a) {
            return f(e(a))
        }
    }

    function Lf(a, b) {
        var c, d = 0,
            e = a.length - 1,
            f = a[d],
            g = a[e];
        return f > g && (c = d, d = e, e = c, c = f, f = g, g = c), a[d] = b.floor(f), a[e] = b.ceil(g), a
    }

    function Mf(a) {
        return a ? {
            floor: function(b) {
                return Math.floor(b / a) * a
            },
            ceil: function(b) {
                return Math.ceil(b / a) * a
            }
        } : kj
    }

    function Nf(a, b, c, d) {
        var e = [],
            f = [],
            g = 0,
            h = Math.min(a.length, b.length) - 1;
        for (a[h] < a[0] && (a = a.slice().reverse(), b = b.slice().reverse()); ++g <= h;) e.push(c(a[g - 1], a[g])), f.push(d(b[g - 1], b[g]));
        return function(b) {
            var c = Ug.bisect(a, b, 1, h) - 1;
            return f[c](e[c](b))
        }
    }

    function Of(a, b, c, d) {
        function e() {
            var e = Math.min(a.length, b.length) > 2 ? Nf : Kf,
                i = d ? Ke : Je;
            return g = e(a, b, i, c), h = e(b, a, i, le), f
        }

        function f(a) {
            return g(a)
        }
        var g, h;
        return f.invert = function(a) {
            return h(a)
        }, f.domain = function(b) {
            return arguments.length ? (a = b.map(Number), e()) : a
        }, f.range = function(a) {
            return arguments.length ? (b = a, e()) : b
        }, f.rangeRound = function(a) {
            return f.range(a).interpolate(De)
        }, f.clamp = function(a) {
            return arguments.length ? (d = a, e()) : d
        }, f.interpolate = function(a) {
            return arguments.length ? (c = a, e()) : c
        }, f.ticks = function(b) {
            return Sf(a, b)
        }, f.tickFormat = function(b, c) {
            return Tf(a, b, c)
        }, f.nice = function(b) {
            return Qf(a, b), e()
        }, f.copy = function() {
            return Of(a, b, c, d)
        }, e()
    }

    function Pf(a, b) {
        return Ug.rebind(a, b, "range", "rangeRound", "interpolate", "clamp")
    }

    function Qf(a, b) {
        return Lf(a, Mf(Rf(a, b)[2]))
    }

    function Rf(a, b) {
        null == b && (b = 10);
        var c = If(a),
            d = c[1] - c[0],
            e = Math.pow(10, Math.floor(Math.log(d / b) / Math.LN10)),
            f = b / d * e;
        return .15 >= f ? e *= 10 : .35 >= f ? e *= 5 : .75 >= f && (e *= 2), c[0] = Math.ceil(c[0] / e) * e, c[1] = Math.floor(c[1] / e) * e + .5 * e, c[2] = e, c
    }

    function Sf(a, b) {
        return Ug.range.apply(Ug, Rf(a, b))
    }

    function Tf(a, b, c) {
        var d = Rf(a, b);
        return Ug.format(c ? c.replace(_h, function(a, b, c, e, f, g, h, i, j, k) {
            return [b, c, e, f, g, h, i, j || "." + Vf(k, d), k].join("")
        }) : ",." + Uf(d[2]) + "f")
    }

    function Uf(a) {
        return -Math.floor(Math.log(a) / Math.LN10 + .01)
    }

    function Vf(a, b) {
        var c = Uf(b[2]);
        return a in lj ? Math.abs(c - Uf(Math.max(Math.abs(b[0]), Math.abs(b[1])))) + +("e" !== a) : c - 2 * ("%" === a)
    }

    function Wf(a, b, c, d) {
        function e(a) {
            return (c ? Math.log(0 > a ? 0 : a) : -Math.log(a > 0 ? 0 : -a)) / Math.log(b)
        }

        function f(a) {
            return c ? Math.pow(b, a) : -Math.pow(b, -a)
        }

        function g(b) {
            return a(e(b))
        }
        return g.invert = function(b) {
            return f(a.invert(b))
        }, g.domain = function(b) {
            return arguments.length ? (c = b[0] >= 0, a.domain((d = b.map(Number)).map(e)), g) : d
        }, g.base = function(c) {
            return arguments.length ? (b = +c, a.domain(d.map(e)), g) : b
        }, g.nice = function() {
            var b = Lf(d.map(e), c ? Math : nj);
            return a.domain(b), d = b.map(f), g
        }, g.ticks = function() {
            var a = If(d),
                g = [],
                h = a[0],
                i = a[1],
                j = Math.floor(e(h)),
                k = Math.ceil(e(i)),
                l = b % 1 ? 2 : b;
            if (isFinite(k - j)) {
                if (c) {
                    for (; k > j; j++)
                        for (var m = 1; l > m; m++) g.push(f(j) * m);
                    g.push(f(j))
                } else
                    for (g.push(f(j)); j++ < k;)
                        for (var m = l - 1; m > 0; m--) g.push(f(j) * m);
                for (j = 0; g[j] < h; j++);
                for (k = g.length; g[k - 1] > i; k--);
                g = g.slice(j, k)
            }
            return g
        }, g.tickFormat = function(a, b) {
            if (!arguments.length) return mj;
            arguments.length < 2 ? b = mj : "function" != typeof b && (b = Ug.format(b));
            var d, h = Math.max(.1, a / g.ticks().length),
                i = c ? (d = 1e-12, Math.ceil) : (d = -1e-12, Math.floor);
            return function(a) {
                return a / f(i(e(a) + d)) <= h ? b(a) : ""
            }
        }, g.copy = function() {
            return Wf(a.copy(), b, c, d)
        }, Pf(g, a)
    }

    function Xf(a, b, c) {
        function d(b) {
            return a(e(b))
        }
        var e = Yf(b),
            f = Yf(1 / b);
        return d.invert = function(b) {
            return f(a.invert(b))
        }, d.domain = function(b) {
            return arguments.length ? (a.domain((c = b.map(Number)).map(e)), d) : c
        }, d.ticks = function(a) {
            return Sf(c, a)
        }, d.tickFormat = function(a, b) {
            return Tf(c, a, b)
        }, d.nice = function(a) {
            return d.domain(Qf(c, a))
        }, d.exponent = function(g) {
            return arguments.length ? (e = Yf(b = g), f = Yf(1 / b), a.domain(c.map(e)), d) : b
        }, d.copy = function() {
            return Xf(a.copy(), b, c)
        }, Pf(d, a)
    }

    function Yf(a) {
        return function(b) {
            return 0 > b ? -Math.pow(-b, a) : Math.pow(b, a)
        }
    }

    function Zf(a, b) {
        function c(c) {
            return g[((f.get(c) || "range" === b.t && f.set(c, a.push(c))) - 1) % g.length]
        }

        function d(b, c) {
            return Ug.range(a.length).map(function(a) {
                return b + c * a
            })
        }
        var f, g, h;
        return c.domain = function(d) {
            if (!arguments.length) return a;
            a = [], f = new e;
            for (var g, h = -1, i = d.length; ++h < i;) f.has(g = d[h]) || f.set(g, a.push(g));
            return c[b.t].apply(c, b.a)
        }, c.range = function(a) {
            return arguments.length ? (g = a, h = 0, b = {
                t: "range",
                a: arguments
            }, c) : g
        }, c.rangePoints = function(e, f) {
            arguments.length < 2 && (f = 0);
            var i = e[0],
                j = e[1],
                k = (j - i) / (Math.max(1, a.length - 1) + f);
            return g = d(a.length < 2 ? (i + j) / 2 : i + k * f / 2, k), h = 0, b = {
                t: "rangePoints",
                a: arguments
            }, c
        }, c.rangeBands = function(e, f, i) {
            arguments.length < 2 && (f = 0), arguments.length < 3 && (i = f);
            var j = e[1] < e[0],
                k = e[j - 0],
                l = e[1 - j],
                m = (l - k) / (a.length - f + 2 * i);
            return g = d(k + m * i, m), j && g.reverse(), h = m * (1 - f), b = {
                t: "rangeBands",
                a: arguments
            }, c
        }, c.rangeRoundBands = function(e, f, i) {
            arguments.length < 2 && (f = 0), arguments.length < 3 && (i = f);
            var j = e[1] < e[0],
                k = e[j - 0],
                l = e[1 - j],
                m = Math.floor((l - k) / (a.length - f + 2 * i)),
                n = l - k - (a.length - f) * m;
            return g = d(k + Math.round(n / 2), m), j && g.reverse(), h = Math.round(m * (1 - f)), b = {
                t: "rangeRoundBands",
                a: arguments
            }, c
        }, c.rangeBand = function() {
            return h
        }, c.rangeExtent = function() {
            return If(b.a[0])
        }, c.copy = function() {
            return Zf(a, b)
        }, c.domain(a)
    }

    function $f(a, b) {
        function c() {
            var c = 0,
                f = b.length;
            for (e = []; ++c < f;) e[c - 1] = Ug.quantile(a, c / f);
            return d
        }

        function d(a) {
            return isNaN(a = +a) ? void 0 : b[Ug.bisect(e, a)]
        }
        var e;
        return d.domain = function(b) {
            return arguments.length ? (a = b.filter(function(a) {
                return !isNaN(a)
            }).sort(Ug.ascending), c()) : a
        }, d.range = function(a) {
            return arguments.length ? (b = a, c()) : b
        }, d.quantiles = function() {
            return e
        }, d.invertExtent = function(c) {
            return c = b.indexOf(c), 0 > c ? [0 / 0, 0 / 0] : [c > 0 ? e[c - 1] : a[0], c < e.length ? e[c] : a[a.length - 1]]
        }, d.copy = function() {
            return $f(a, b)
        }, c()
    }

    function _f(a, b, c) {
        function d(b) {
            return c[Math.max(0, Math.min(g, Math.floor(f * (b - a))))]
        }

        function e() {
            return f = c.length / (b - a), g = c.length - 1, d
        }
        var f, g;
        return d.domain = function(c) {
            return arguments.length ? (a = +c[0], b = +c[c.length - 1], e()) : [a, b]
        }, d.range = function(a) {
            return arguments.length ? (c = a, e()) : c
        }, d.invertExtent = function(b) {
            return b = c.indexOf(b), b = 0 > b ? 0 / 0 : b / f + a, [b, b + 1 / f]
        }, d.copy = function() {
            return _f(a, b, c)
        }, e()
    }

    function ag(a, b) {
        function c(c) {
            return c >= c ? b[Ug.bisect(a, c)] : void 0
        }
        return c.domain = function(b) {
            return arguments.length ? (a = b, c) : a
        }, c.range = function(a) {
            return arguments.length ? (b = a, c) : b
        }, c.invertExtent = function(c) {
            return c = b.indexOf(c), [a[c - 1], a[c]]
        }, c.copy = function() {
            return ag(a, b)
        }, c
    }

    function bg(a) {
        function b(a) {
            return +a
        }
        return b.invert = b, b.domain = b.range = function(c) {
            return arguments.length ? (a = c.map(b), b) : a
        }, b.ticks = function(b) {
            return Sf(a, b)
        }, b.tickFormat = function(b, c) {
            return Tf(a, b, c)
        }, b.copy = function() {
            return bg(a)
        }, b
    }

    function cg(a) {
        return a.innerRadius
    }

    function dg(a) {
        return a.outerRadius
    }

    function eg(a) {
        return a.startAngle
    }

    function fg(a) {
        return a.endAngle
    }

    function gg(a) {
        function b(b) {
            function g() {
                j.push("M", f(a(k), h))
            }
            for (var i, j = [], k = [], l = -1, m = b.length, n = vb(c), o = vb(d); ++l < m;) e.call(this, i = b[l], l) ? k.push([+n.call(this, i, l), +o.call(this, i, l)]) : k.length && (g(), k = []);
            return k.length && g(), j.length ? j.join("") : null
        }
        var c = wd,
            d = xd,
            e = wc,
            f = hg,
            g = f.key,
            h = .7;
        return b.x = function(a) {
            return arguments.length ? (c = a, b) : c
        }, b.y = function(a) {
            return arguments.length ? (d = a, b) : d
        }, b.defined = function(a) {
            return arguments.length ? (e = a, b) : e
        }, b.interpolate = function(a) {
            return arguments.length ? (g = "function" == typeof a ? f = a : (f = uj.get(a) || hg).key, b) : g
        }, b.tension = function(a) {
            return arguments.length ? (h = a, b) : h
        }, b
    }

    function hg(a) {
        return a.join("L")
    }

    function ig(a) {
        return hg(a) + "Z"
    }

    function jg(a) {
        for (var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]]; ++b < c;) e.push("H", (d[0] + (d = a[b])[0]) / 2, "V", d[1]);
        return c > 1 && e.push("H", d[0]), e.join("")
    }

    function kg(a) {
        for (var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]]; ++b < c;) e.push("V", (d = a[b])[1], "H", d[0]);
        return e.join("")
    }

    function lg(a) {
        for (var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]]; ++b < c;) e.push("H", (d = a[b])[0], "V", d[1]);
        return e.join("")
    }

    function mg(a, b) {
        return a.length < 4 ? hg(a) : a[1] + pg(a.slice(1, a.length - 1), qg(a, b))
    }

    function ng(a, b) {
        return a.length < 3 ? hg(a) : a[0] + pg((a.push(a[0]), a), qg([a[a.length - 2]].concat(a, [a[1]]), b))
    }

    function og(a, b) {
        return a.length < 3 ? hg(a) : a[0] + pg(a, qg(a, b))
    }

    function pg(a, b) {
        if (b.length < 1 || a.length != b.length && a.length != b.length + 2) return hg(a);
        var c = a.length != b.length,
            d = "",
            e = a[0],
            f = a[1],
            g = b[0],
            h = g,
            i = 1;
        if (c && (d += "Q" + (f[0] - 2 * g[0] / 3) + "," + (f[1] - 2 * g[1] / 3) + "," + f[0] + "," + f[1], e = a[1], i = 2), b.length > 1) {
            h = b[1], f = a[i], i++, d += "C" + (e[0] + g[0]) + "," + (e[1] + g[1]) + "," + (f[0] - h[0]) + "," + (f[1] - h[1]) + "," + f[0] + "," + f[1];
            for (var j = 2; j < b.length; j++, i++) f = a[i], h = b[j], d += "S" + (f[0] - h[0]) + "," + (f[1] - h[1]) + "," + f[0] + "," + f[1]
        }
        if (c) {
            var k = a[i];
            d += "Q" + (f[0] + 2 * h[0] / 3) + "," + (f[1] + 2 * h[1] / 3) + "," + k[0] + "," + k[1]
        }
        return d
    }

    function qg(a, b) {
        for (var c, d = [], e = (1 - b) / 2, f = a[0], g = a[1], h = 1, i = a.length; ++h < i;) c = f, f = g, g = a[h], d.push([e * (g[0] - c[0]), e * (g[1] - c[1])]);
        return d
    }

    function rg(a) {
        if (a.length < 3) return hg(a);
        var b = 1,
            c = a.length,
            d = a[0],
            e = d[0],
            f = d[1],
            g = [e, e, e, (d = a[1])[0]],
            h = [f, f, f, d[1]],
            i = [e, ",", f, "L", vg(xj, g), ",", vg(xj, h)];
        for (a.push(a[c - 1]); ++b <= c;) d = a[b], g.shift(), g.push(d[0]), h.shift(), h.push(d[1]), wg(i, g, h);
        return a.pop(), i.push("L", d), i.join("")
    }

    function sg(a) {
        if (a.length < 4) return hg(a);
        for (var b, c = [], d = -1, e = a.length, f = [0], g = [0]; ++d < 3;) b = a[d], f.push(b[0]), g.push(b[1]);
        for (c.push(vg(xj, f) + "," + vg(xj, g)), --d; ++d < e;) b = a[d], f.shift(), f.push(b[0]), g.shift(), g.push(b[1]), wg(c, f, g);
        return c.join("")
    }

    function tg(a) {
        for (var b, c, d = -1, e = a.length, f = e + 4, g = [], h = []; ++d < 4;) c = a[d % e], g.push(c[0]), h.push(c[1]);
        for (b = [vg(xj, g), ",", vg(xj, h)], --d; ++d < f;) c = a[d % e], g.shift(), g.push(c[0]), h.shift(), h.push(c[1]), wg(b, g, h);
        return b.join("")
    }

    function ug(a, b) {
        var c = a.length - 1;
        if (c)
            for (var d, e, f = a[0][0], g = a[0][1], h = a[c][0] - f, i = a[c][1] - g, j = -1; ++j <= c;) d = a[j], e = j / c, d[0] = b * d[0] + (1 - b) * (f + e * h), d[1] = b * d[1] + (1 - b) * (g + e * i);
        return rg(a)
    }

    function vg(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
    }

    function wg(a, b, c) {
        a.push("C", vg(vj, b), ",", vg(vj, c), ",", vg(wj, b), ",", vg(wj, c), ",", vg(xj, b), ",", vg(xj, c))
    }

    function xg(a, b) {
        return (b[1] - a[1]) / (b[0] - a[0])
    }

    function yg(a) {
        for (var b = 0, c = a.length - 1, d = [], e = a[0], f = a[1], g = d[0] = xg(e, f); ++b < c;) d[b] = (g + (g = xg(e = f, f = a[b + 1]))) / 2;
        return d[b] = g, d
    }

    function zg(a) {
        for (var b, c, d, e, f = [], g = yg(a), h = -1, i = a.length - 1; ++h < i;) b = xg(a[h], a[h + 1]), gh(b) < Bh ? g[h] = g[h + 1] = 0 : (c = g[h] / b, d = g[h + 1] / b, e = c * c + d * d, e > 9 && (e = 3 * b / Math.sqrt(e), g[h] = e * c, g[h + 1] = e * d));
        for (h = -1; ++h <= i;) e = (a[Math.min(i, h + 1)][0] - a[Math.max(0, h - 1)][0]) / (6 * (1 + g[h] * g[h])), f.push([e || 0, g[h] * e || 0]);
        return f
    }

    function Ag(a) {
        return a.length < 3 ? hg(a) : a[0] + pg(a, zg(a))
    }

    function Bg(a) {
        for (var b, c, d, e = -1, f = a.length; ++e < f;) b = a[e], c = b[0], d = b[1] + sj, b[0] = c * Math.cos(d), b[1] = c * Math.sin(d);
        return a
    }

    function Cg(a) {
        function b(b) {
            function i() {
                p.push("M", h(a(r), l), k, j(a(q.reverse()), l), "Z")
            }
            for (var m, n, o, p = [], q = [], r = [], s = -1, t = b.length, u = vb(c), v = vb(e), w = c === d ? function() {
                    return n
                } : vb(d), x = e === f ? function() {
                    return o
                } : vb(f); ++s < t;) g.call(this, m = b[s], s) ? (q.push([n = +u.call(this, m, s), o = +v.call(this, m, s)]), r.push([+w.call(this, m, s), +x.call(this, m, s)])) : q.length && (i(), q = [], r = []);
            return q.length && i(), p.length ? p.join("") : null
        }
        var c = wd,
            d = wd,
            e = 0,
            f = xd,
            g = wc,
            h = hg,
            i = h.key,
            j = h,
            k = "L",
            l = .7;
        return b.x = function(a) {
            return arguments.length ? (c = d = a, b) : d
        }, b.x0 = function(a) {
            return arguments.length ? (c = a, b) : c
        }, b.x1 = function(a) {
            return arguments.length ? (d = a, b) : d
        }, b.y = function(a) {
            return arguments.length ? (e = f = a, b) : f
        }, b.y0 = function(a) {
            return arguments.length ? (e = a, b) : e
        }, b.y1 = function(a) {
            return arguments.length ? (f = a, b) : f
        }, b.defined = function(a) {
            return arguments.length ? (g = a, b) : g
        }, b.interpolate = function(a) {
            return arguments.length ? (i = "function" == typeof a ? h = a : (h = uj.get(a) || hg).key, j = h.reverse || h, k = h.closed ? "M" : "L", b) : i
        }, b.tension = function(a) {
            return arguments.length ? (l = a, b) : l
        }, b
    }

    function Dg(a) {
        return a.radius
    }

    function Eg(a) {
        return [a.x, a.y]
    }

    function Fg(a) {
        return function() {
            var b = a.apply(this, arguments),
                c = b[0],
                d = b[1] + sj;
            return [c * Math.cos(d), c * Math.sin(d)]
        }
    }

    function Gg() {
        return 64
    }

    function Hg() {
        return "circle"
    }

    function Ig(a) {
        var b = Math.sqrt(a / yh);
        return "M0," + b + "A" + b + "," + b + " 0 1,1 0," + -b + "A" + b + "," + b + " 0 1,1 0," + b + "Z"
    }

    function Jg(a, b) {
        return lh(a, Dj), a.id = b, a
    }

    function Kg(a, b, c, d) {
        var e = a.id;
        return I(a, "function" == typeof c ? function(a, f, g) {
            a.__transition__[e].tween.set(b, d(c.call(a, a.__data__, f, g)))
        } : (c = d(c), function(a) {
            a.__transition__[e].tween.set(b, c)
        }))
    }

    function Lg(a) {
        return null == a && (a = ""),
            function() {
                this.textContent = a
            }
    }

    function Mg(a, b, c, d) {
        var f = a.__transition__ || (a.__transition__ = {
                active: 0,
                count: 0
            }),
            g = f[c];
        if (!g) {
            var h = d.time;
            g = f[c] = {
                tween: new e,
                time: h,
                ease: d.ease,
                delay: d.delay,
                duration: d.duration
            }, ++f.count, Ug.timer(function(d) {
                function e(d) {
                    return f.active > c ? j() : (f.active = c, g.event && g.event.start.call(a, k, b), g.tween.forEach(function(c, d) {
                        (d = d.call(a, k, b)) && p.push(d)
                    }), Ug.timer(function() {
                        return o.c = i(d || 1) ? wc : i, 1
                    }, 0, h), void 0)
                }

                function i(d) {
                    if (f.active !== c) return j();
                    for (var e = d / n, h = l(e), i = p.length; i > 0;) p[--i].call(a, h);
                    return e >= 1 ? (g.event && g.event.end.call(a, k, b), j()) : void 0
                }

                function j() {
                    return --f.count ? delete f[c] : delete a.__transition__, 1
                }
                var k = a.__data__,
                    l = g.ease,
                    m = g.delay,
                    n = g.duration,
                    o = Yh,
                    p = [];
                return o.t = m + h, d >= m ? e(d - m) : (o.c = e, void 0)
            }, 0, h)
        }
    }

    function Ng(a, b) {
        a.attr("transform", function(a) {
            return "translate(" + b(a) + ",0)"
        })
    }

    function Og(a, b) {
        a.attr("transform", function(a) {
            return "translate(0," + b(a) + ")"
        })
    }

    function Pg(a) {
        return a.toISOString()
    }

    function Qg(a, b, c) {
        function d(b) {
            return a(b)
        }

        function e(a, c) {
            var d = a[1] - a[0],
                e = d / c,
                f = Ug.bisect(Mj, e);
            return f == Mj.length ? [b.year, Rf(a.map(function(a) {
                return a / 31536e6
            }), c)[2]] : f ? b[e / Mj[f - 1] < Mj[f] / e ? f - 1 : f] : [Pj, Rf(a, c)[2]]
        }
        return d.invert = function(b) {
            return Rg(a.invert(b))
        }, d.domain = function(b) {
            return arguments.length ? (a.domain(b), d) : a.domain().map(Rg)
        }, d.nice = function(a, b) {
            function c(c) {
                return !isNaN(c) && !a.range(c, Rg(+c + 1), b).length
            }
            var f = d.domain(),
                g = If(f),
                h = null == a ? e(g, 10) : "number" == typeof a && e(g, a);
            return h && (a = h[0], b = h[1]), d.domain(Lf(f, b > 1 ? {
                floor: function(b) {
                    for (; c(b = a.floor(b));) b = Rg(b - 1);
                    return b
                },
                ceil: function(b) {
                    for (; c(b = a.ceil(b));) b = Rg(+b + 1);
                    return b
                }
            } : a))
        }, d.ticks = function(a, b) {
            var c = If(d.domain()),
                f = null == a ? e(c, 10) : "number" == typeof a ? e(c, a) : !a.range && [{
                    range: a
                }, b];
            return f && (a = f[0], b = f[1]), a.range(c[0], Rg(+c[1] + 1), 1 > b ? 1 : b)
        }, d.tickFormat = function() {
            return c
        }, d.copy = function() {
            return Qg(a.copy(), b, c)
        }, Pf(d, a)
    }

    function Rg(a) {
        return new Date(a)
    }

    function Sg(a) {
        return JSON.parse(a.responseText)
    }

    function Tg(a) {
        var b = Xg.createRange();
        return b.selectNode(Xg.body), b.createContextualFragment(a.responseText)
    }
    var Ug = {
        version: "3.4.1"
    };
    Date.now || (Date.now = function() {
        return +new Date
    });
    var Vg = [].slice,
        Wg = function(a) {
            return Vg.call(a)
        },
        Xg = document,
        Yg = Xg.documentElement,
        Zg = window;
    try {
        Wg(Yg.childNodes)[0].nodeType
    } catch ($g) {
        Wg = function(a) {
            for (var b = a.length, c = new Array(b); b--;) c[b] = a[b];
            return c
        }
    }
    try {
        Xg.createElement("div").style.setProperty("opacity", 0, "")
    } catch (_g) {
        var ah = Zg.Element.prototype,
            bh = ah.setAttribute,
            ch = ah.setAttributeNS,
            dh = Zg.CSSStyleDeclaration.prototype,
            eh = dh.setProperty;
        ah.setAttribute = function(a, b) {
            bh.call(this, a, b + "")
        }, ah.setAttributeNS = function(a, b, c) {
            ch.call(this, a, b, c + "")
        }, dh.setProperty = function(a, b, c) {
            eh.call(this, a, b + "", c)
        }
    }
    Ug.ascending = function(a, b) {
        return b > a ? -1 : a > b ? 1 : a >= b ? 0 : 0 / 0
    }, Ug.descending = function(a, b) {
        return a > b ? -1 : b > a ? 1 : b >= a ? 0 : 0 / 0
    }, Ug.min = function(a, b) {
        var c, d, e = -1,
            f = a.length;
        if (1 === arguments.length) {
            for (; ++e < f && !(null != (c = a[e]) && c >= c);) c = void 0;
            for (; ++e < f;) null != (d = a[e]) && c > d && (c = d)
        } else {
            for (; ++e < f && !(null != (c = b.call(a, a[e], e)) && c >= c);) c = void 0;
            for (; ++e < f;) null != (d = b.call(a, a[e], e)) && c > d && (c = d)
        }
        return c
    }, Ug.max = function(a, b) {
        var c, d, e = -1,
            f = a.length;
        if (1 === arguments.length) {
            for (; ++e < f && !(null != (c = a[e]) && c >= c);) c = void 0;
            for (; ++e < f;) null != (d = a[e]) && d > c && (c = d)
        } else {
            for (; ++e < f && !(null != (c = b.call(a, a[e], e)) && c >= c);) c = void 0;
            for (; ++e < f;) null != (d = b.call(a, a[e], e)) && d > c && (c = d)
        }
        return c
    }, Ug.extent = function(a, b) {
        var c, d, e, f = -1,
            g = a.length;
        if (1 === arguments.length) {
            for (; ++f < g && !(null != (c = e = a[f]) && c >= c);) c = e = void 0;
            for (; ++f < g;) null != (d = a[f]) && (c > d && (c = d), d > e && (e = d))
        } else {
            for (; ++f < g && !(null != (c = e = b.call(a, a[f], f)) && c >= c);) c = void 0;
            for (; ++f < g;) null != (d = b.call(a, a[f], f)) && (c > d && (c = d), d > e && (e = d))
        }
        return [c, e]
    }, Ug.sum = function(a, b) {
        var c, d = 0,
            e = a.length,
            f = -1;
        if (1 === arguments.length)
            for (; ++f < e;) isNaN(c = +a[f]) || (d += c);
        else
            for (; ++f < e;) isNaN(c = +b.call(a, a[f], f)) || (d += c);
        return d
    }, Ug.mean = function(b, c) {
        var d, e = b.length,
            f = 0,
            g = -1,
            h = 0;
        if (1 === arguments.length)
            for (; ++g < e;) a(d = b[g]) && (f += (d - f) / ++h);
        else
            for (; ++g < e;) a(d = c.call(b, b[g], g)) && (f += (d - f) / ++h);
        return h ? f : void 0
    }, Ug.quantile = function(a, b) {
        var c = (a.length - 1) * b + 1,
            d = Math.floor(c),
            e = +a[d - 1],
            f = c - d;
        return f ? e + f * (a[d] - e) : e
    }, Ug.median = function(b, c) {
        return arguments.length > 1 && (b = b.map(c)), b = b.filter(a), b.length ? Ug.quantile(b.sort(Ug.ascending), .5) : void 0
    }, Ug.bisector = function(a) {
        return {
            left: function(b, c, d, e) {
                for (arguments.length < 3 && (d = 0), arguments.length < 4 && (e = b.length); e > d;) {
                    var f = d + e >>> 1;
                    a.call(b, b[f], f) < c ? d = f + 1 : e = f
                }
                return d
            },
            right: function(b, c, d, e) {
                for (arguments.length < 3 && (d = 0), arguments.length < 4 && (e = b.length); e > d;) {
                    var f = d + e >>> 1;
                    c < a.call(b, b[f], f) ? e = f : d = f + 1
                }
                return d
            }
        }
    };
    var fh = Ug.bisector(function(a) {
        return a
    });
    Ug.bisectLeft = fh.left, Ug.bisect = Ug.bisectRight = fh.right, Ug.shuffle = function(a) {
        for (var b, c, d = a.length; d;) c = 0 | Math.random() * d--, b = a[d], a[d] = a[c], a[c] = b;
        return a
    }, Ug.permute = function(a, b) {
        for (var c = b.length, d = new Array(c); c--;) d[c] = a[b[c]];
        return d
    }, Ug.pairs = function(a) {
        for (var b, c = 0, d = a.length - 1, e = a[0], f = new Array(0 > d ? 0 : d); d > c;) f[c] = [b = e, e = a[++c]];
        return f
    }, Ug.zip = function() {
        if (!(e = arguments.length)) return [];
        for (var a = -1, c = Ug.min(arguments, b), d = new Array(c); ++a < c;)
            for (var e, f = -1, g = d[a] = new Array(e); ++f < e;) g[f] = arguments[f][a];
        return d
    }, Ug.transpose = function(a) {
        return Ug.zip.apply(Ug, a)
    }, Ug.keys = function(a) {
        var b = [];
        for (var c in a) b.push(c);
        return b
    }, Ug.values = function(a) {
        var b = [];
        for (var c in a) b.push(a[c]);
        return b
    }, Ug.entries = function(a) {
        var b = [];
        for (var c in a) b.push({
            key: c,
            value: a[c]
        });
        return b
    }, Ug.merge = function(a) {
        for (var b, c, d, e = a.length, f = -1, g = 0; ++f < e;) g += a[f].length;
        for (c = new Array(g); --e >= 0;)
            for (d = a[e], b = d.length; --b >= 0;) c[--g] = d[b];
        return c
    };
    var gh = Math.abs;
    Ug.range = function(a, b, d) {
        if (arguments.length < 3 && (d = 1, arguments.length < 2 && (b = a, a = 0)), 1 / 0 === (b - a) / d) throw new Error("infinite range");
        var e, f = [],
            g = c(gh(d)),
            h = -1;
        if (a *= g, b *= g, d *= g, 0 > d)
            for (;
                (e = a + d * ++h) > b;) f.push(e / g);
        else
            for (;
                (e = a + d * ++h) < b;) f.push(e / g);
        return f
    }, Ug.map = function(a) {
        var b = new e;
        if (a instanceof e) a.forEach(function(a, c) {
            b.set(a, c)
        });
        else
            for (var c in a) b.set(c, a[c]);
        return b
    }, d(e, {
        has: f,
        get: function(a) {
            return this[hh + a]
        },
        set: function(a, b) {
            return this[hh + a] = b
        },
        remove: g,
        keys: h,
        values: function() {
            var a = [];
            return this.forEach(function(b, c) {
                a.push(c)
            }), a
        },
        entries: function() {
            var a = [];
            return this.forEach(function(b, c) {
                a.push({
                    key: b,
                    value: c
                })
            }), a
        },
        size: i,
        empty: j,
        forEach: function(a) {
            for (var b in this) b.charCodeAt(0) === ih && a.call(this, b.substring(1), this[b])
        }
    });
    var hh = "\0",
        ih = hh.charCodeAt(0);
    Ug.nest = function() {
        function a(b, h, i) {
            if (i >= g.length) return d ? d.call(f, h) : c ? h.sort(c) : h;
            for (var j, k, l, m, n = -1, o = h.length, p = g[i++], q = new e; ++n < o;)(m = q.get(j = p(k = h[n]))) ? m.push(k) : q.set(j, [k]);
            return b ? (k = b(), l = function(c, d) {
                k.set(c, a(b, d, i))
            }) : (k = {}, l = function(c, d) {
                k[c] = a(b, d, i)
            }), q.forEach(l), k
        }

        function b(a, c) {
            if (c >= g.length) return a;
            var d = [],
                e = h[c++];
            return a.forEach(function(a, e) {
                d.push({
                    key: a,
                    values: b(e, c)
                })
            }), e ? d.sort(function(a, b) {
                return e(a.key, b.key)
            }) : d
        }
        var c, d, f = {},
            g = [],
            h = [];
        return f.map = function(b, c) {
            return a(c, b, 0)
        }, f.entries = function(c) {
            return b(a(Ug.map, c, 0), 0)
        }, f.key = function(a) {
            return g.push(a), f
        }, f.sortKeys = function(a) {
            return h[g.length - 1] = a, f
        }, f.sortValues = function(a) {
            return c = a, f
        }, f.rollup = function(a) {
            return d = a, f
        }, f
    }, Ug.set = function(a) {
        var b = new k;
        if (a)
            for (var c = 0, d = a.length; d > c; ++c) b.add(a[c]);
        return b
    }, d(k, {
        has: f,
        add: function(a) {
            return this[hh + a] = !0, a
        },
        remove: function(a) {
            return a = hh + a, a in this && delete this[a]
        },
        values: h,
        size: i,
        empty: j,
        forEach: function(a) {
            for (var b in this) b.charCodeAt(0) === ih && a.call(this, b.substring(1))
        }
    }), Ug.behavior = {}, Ug.rebind = function(a, b) {
        for (var c, d = 1, e = arguments.length; ++d < e;) a[c = arguments[d]] = l(a, b, b[c]);
        return a
    };
    var jh = ["webkit", "ms", "moz", "Moz", "o", "O"];
    Ug.dispatch = function() {
        for (var a = new o, b = -1, c = arguments.length; ++b < c;) a[arguments[b]] = p(a);
        return a
    }, o.prototype.on = function(a, b) {
        var c = a.indexOf("."),
            d = "";
        if (c >= 0 && (d = a.substring(c + 1), a = a.substring(0, c)), a) return arguments.length < 2 ? this[a].on(d) : this[a].on(d, b);
        if (2 === arguments.length) {
            if (null == b)
                for (a in this) this.hasOwnProperty(a) && this[a].on(d, null);
            return this
        }
    }, Ug.event = null, Ug.requote = function(a) {
        return a.replace(kh, "\\$&")
    };
    var kh = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
        lh = {}.__proto__ ? function(a, b) {
            a.__proto__ = b
        } : function(a, b) {
            for (var c in b) a[c] = b[c]
        },
        mh = function(a, b) {
            return b.querySelector(a)
        },
        nh = function(a, b) {
            return b.querySelectorAll(a)
        },
        oh = Yg[m(Yg, "matchesSelector")],
        ph = function(a, b) {
            return oh.call(a, b)
        };
    "function" == typeof Sizzle && (mh = function(a, b) {
        return Sizzle(a, b)[0] || null
    }, nh = function(a, b) {
        return Sizzle.uniqueSort(Sizzle(a, b))
    }, ph = Sizzle.matchesSelector), Ug.selection = function() {
        return th
    };
    var qh = Ug.selection.prototype = [];
    qh.select = function(a) {
        var b, c, d, e, f = [];
        a = u(a);
        for (var g = -1, h = this.length; ++g < h;) {
            f.push(b = []), b.parentNode = (d = this[g]).parentNode;
            for (var i = -1, j = d.length; ++i < j;)(e = d[i]) ? (b.push(c = a.call(e, e.__data__, i, g)), c && "__data__" in e && (c.__data__ = e.__data__)) : b.push(null)
        }
        return t(f)
    }, qh.selectAll = function(a) {
        var b, c, d = [];
        a = v(a);
        for (var e = -1, f = this.length; ++e < f;)
            for (var g = this[e], h = -1, i = g.length; ++h < i;)(c = g[h]) && (d.push(b = Wg(a.call(c, c.__data__, h, e))), b.parentNode = c);
        return t(d)
    };
    var rh = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    Ug.ns = {
        prefix: rh,
        qualify: function(a) {
            var b = a.indexOf(":"),
                c = a;
            return b >= 0 && (c = a.substring(0, b), a = a.substring(b + 1)), rh.hasOwnProperty(c) ? {
                space: rh[c],
                local: a
            } : a
        }
    }, qh.attr = function(a, b) {
        if (arguments.length < 2) {
            if ("string" == typeof a) {
                var c = this.node();
                return a = Ug.ns.qualify(a), a.local ? c.getAttributeNS(a.space, a.local) : c.getAttribute(a)
            }
            for (b in a) this.each(w(b, a[b]));
            return this
        }
        return this.each(w(a, b))
    }, qh.classed = function(a, b) {
        if (arguments.length < 2) {
            if ("string" == typeof a) {
                var c = this.node(),
                    d = (a = z(a)).length,
                    e = -1;
                if (b = c.classList) {
                    for (; ++e < d;)
                        if (!b.contains(a[e])) return !1
                } else
                    for (b = c.getAttribute("class"); ++e < d;)
                        if (!y(a[e]).test(b)) return !1; return !0
            }
            for (b in a) this.each(A(b, a[b]));
            return this
        }
        return this.each(A(a, b))
    }, qh.style = function(a, b, c) {
        var d = arguments.length;
        if (3 > d) {
            if ("string" != typeof a) {
                2 > d && (b = "");
                for (c in a) this.each(C(c, a[c], b));
                return this
            }
            if (2 > d) return Zg.getComputedStyle(this.node(), null).getPropertyValue(a);
            c = ""
        }
        return this.each(C(a, b, c))
    }, qh.property = function(a, b) {
        if (arguments.length < 2) {
            if ("string" == typeof a) return this.node()[a];
            for (b in a) this.each(D(b, a[b]));
            return this
        }
        return this.each(D(a, b))
    }, qh.text = function(a) {
        return arguments.length ? this.each("function" == typeof a ? function() {
            var b = a.apply(this, arguments);
            this.textContent = null == b ? "" : b
        } : null == a ? function() {
            this.textContent = ""
        } : function() {
            this.textContent = a
        }) : this.node().textContent
    }, qh.html = function(a) {
        return arguments.length ? this.each("function" == typeof a ? function() {
            var b = a.apply(this, arguments);
            this.innerHTML = null == b ? "" : b
        } : null == a ? function() {
            this.innerHTML = ""
        } : function() {
            this.innerHTML = a
        }) : this.node().innerHTML
    }, qh.append = function(a) {
        return a = E(a), this.select(function() {
            return this.appendChild(a.apply(this, arguments))
        })
    }, qh.insert = function(a, b) {
        return a = E(a), b = u(b), this.select(function() {
            return this.insertBefore(a.apply(this, arguments), b.apply(this, arguments) || null)
        })
    }, qh.remove = function() {
        return this.each(function() {
            var a = this.parentNode;
            a && a.removeChild(this)
        })
    }, qh.data = function(a, b) {
        function c(a, c) {
            var d, f, g, h = a.length,
                l = c.length,
                m = Math.min(h, l),
                n = new Array(l),
                o = new Array(l),
                p = new Array(h);
            if (b) {
                var q, r = new e,
                    s = new e,
                    t = [];
                for (d = -1; ++d < h;) q = b.call(f = a[d], f.__data__, d), r.has(q) ? p[d] = f : r.set(q, f), t.push(q);
                for (d = -1; ++d < l;) q = b.call(c, g = c[d], d), (f = r.get(q)) ? (n[d] = f, f.__data__ = g) : s.has(q) || (o[d] = F(g)), s.set(q, g), r.remove(q);
                for (d = -1; ++d < h;) r.has(t[d]) && (p[d] = a[d])
            } else {
                for (d = -1; ++d < m;) f = a[d], g = c[d], f ? (f.__data__ = g, n[d] = f) : o[d] = F(g);
                for (; l > d; ++d) o[d] = F(c[d]);
                for (; h > d; ++d) p[d] = a[d]
            }
            o.update = n, o.parentNode = n.parentNode = p.parentNode = a.parentNode, i.push(o), j.push(n), k.push(p)
        }
        var d, f, g = -1,
            h = this.length;
        if (!arguments.length) {
            for (a = new Array(h = (d = this[0]).length); ++g < h;)(f = d[g]) && (a[g] = f.__data__);
            return a
        }
        var i = J([]),
            j = t([]),
            k = t([]);
        if ("function" == typeof a)
            for (; ++g < h;) c(d = this[g], a.call(d, d.parentNode.__data__, g));
        else
            for (; ++g < h;) c(d = this[g], a);
        return j.enter = function() {
            return i
        }, j.exit = function() {
            return k
        }, j
    }, qh.datum = function(a) {
        return arguments.length ? this.property("__data__", a) : this.property("__data__")
    }, qh.filter = function(a) {
        var b, c, d, e = [];
        "function" != typeof a && (a = G(a));
        for (var f = 0, g = this.length; g > f; f++) {
            e.push(b = []), b.parentNode = (c = this[f]).parentNode;
            for (var h = 0, i = c.length; i > h; h++)(d = c[h]) && a.call(d, d.__data__, h, f) && b.push(d)
        }
        return t(e)
    }, qh.order = function() {
        for (var a = -1, b = this.length; ++a < b;)
            for (var c, d = this[a], e = d.length - 1, f = d[e]; --e >= 0;)(c = d[e]) && (f && f !== c.nextSibling && f.parentNode.insertBefore(c, f), f = c);
        return this
    }, qh.sort = function(a) {
        a = H.apply(this, arguments);
        for (var b = -1, c = this.length; ++b < c;) this[b].sort(a);
        return this.order()
    }, qh.each = function(a) {
        return I(this, function(b, c, d) {
            a.call(b, b.__data__, c, d)
        })
    }, qh.call = function(a) {
        var b = Wg(arguments);
        return a.apply(b[0] = this, b), this
    }, qh.empty = function() {
        return !this.node()
    }, qh.node = function() {
        for (var a = 0, b = this.length; b > a; a++)
            for (var c = this[a], d = 0, e = c.length; e > d; d++) {
                var f = c[d];
                if (f) return f
            }
        return null
    }, qh.size = function() {
        var a = 0;
        return this.each(function() {
            ++a
        }), a
    };
    var sh = [];
    Ug.selection.enter = J, Ug.selection.enter.prototype = sh, sh.append = qh.append, sh.empty = qh.empty, sh.node = qh.node, sh.call = qh.call, sh.size = qh.size, sh.select = function(a) {
        for (var b, c, d, e, f, g = [], h = -1, i = this.length; ++h < i;) {
            d = (e = this[h]).update, g.push(b = []), b.parentNode = e.parentNode;
            for (var j = -1, k = e.length; ++j < k;)(f = e[j]) ? (b.push(d[j] = c = a.call(e.parentNode, f.__data__, j, h)), c.__data__ = f.__data__) : b.push(null)
        }
        return t(g)
    }, sh.insert = function(a, b) {
        return arguments.length < 2 && (b = K(this)), qh.insert.call(this, a, b)
    }, qh.transition = function() {
        for (var a, b, c = zj || ++Ej, d = [], e = Aj || {
                time: Date.now(),
                ease: se,
                delay: 0,
                duration: 250
            }, f = -1, g = this.length; ++f < g;) {
            d.push(a = []);
            for (var h = this[f], i = -1, j = h.length; ++i < j;)(b = h[i]) && Mg(b, i, c, e), a.push(b)
        }
        return Jg(d, c)
    }, qh.interrupt = function() {
        return this.each(L)
    }, Ug.select = function(a) {
        var b = ["string" == typeof a ? mh(a, Xg) : a];
        return b.parentNode = Yg, t([b])
    }, Ug.selectAll = function(a) {
        var b = Wg("string" == typeof a ? nh(a, Xg) : a);
        return b.parentNode = Yg, t([b])
    };
    var th = Ug.select(Yg);
    qh.on = function(a, b, c) {
        var d = arguments.length;
        if (3 > d) {
            if ("string" != typeof a) {
                2 > d && (b = !1);
                for (c in a) this.each(M(c, a[c], b));
                return this
            }
            if (2 > d) return (d = this.node()["__on" + a]) && d._;
            c = !1
        }
        return this.each(M(a, b, c))
    };
    var uh = Ug.map({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    });
    uh.forEach(function(a) {
        "on" + a in Xg && uh.remove(a)
    });
    var vh = "onselectstart" in Xg ? null : m(Yg.style, "userSelect"),
        wh = 0;
    Ug.mouse = function(a) {
        return Q(a, r())
    };
    var xh = /WebKit/.test(Zg.navigator.userAgent) ? -1 : 0;
    Ug.touches = function(a, b) {
        return arguments.length < 2 && (b = r().touches), b ? Wg(b).map(function(b) {
            var c = Q(a, b);
            return c.identifier = b.identifier, c
        }) : []
    }, Ug.behavior.drag = function() {
        function a() {
            this.on("mousedown.drag", g).on("touchstart.drag", h)
        }

        function b() {
            return Ug.event.changedTouches[0].identifier
        }

        function c(a, b) {
            return Ug.touches(a).filter(function(a) {
                return a.identifier === b
            })[0]
        }

        function d(a, b, c, d) {
            return function() {
                function g() {
                    var a = b(k, n),
                        c = a[0] - p[0],
                        d = a[1] - p[1];
                    q |= c | d, p = a, l({
                        type: "drag",
                        x: a[0] + i[0],
                        y: a[1] + i[1],
                        dx: c,
                        dy: d
                    })
                }

                function h() {
                    r.on(c + "." + o, null).on(d + "." + o, null), s(q && Ug.event.target === m), l({
                        type: "dragend"
                    })
                }
                var i, j = this,
                    k = j.parentNode,
                    l = e.of(j, arguments),
                    m = Ug.event.target,
                    n = a(),
                    o = null == n ? "drag" : "drag-" + n,
                    p = b(k, n),
                    q = 0,
                    r = Ug.select(Zg).on(c + "." + o, g).on(d + "." + o, h),
                    s = P();
                f ? (i = f.apply(j, arguments), i = [i.x - p[0], i.y - p[1]]) : i = [0, 0], l({
                    type: "dragstart"
                })
            }
        }
        var e = s(a, "drag", "dragstart", "dragend"),
            f = null,
            g = d(n, Ug.mouse, "mousemove", "mouseup"),
            h = d(b, c, "touchmove", "touchend");
        return a.origin = function(b) {
            return arguments.length ? (f = b, a) : f
        }, Ug.rebind(a, e, "on")
    };
    var yh = Math.PI,
        zh = 2 * yh,
        Ah = yh / 2,
        Bh = 1e-6,
        Ch = Bh * Bh,
        Dh = yh / 180,
        Eh = 180 / yh,
        Fh = Math.SQRT2,
        Gh = 2,
        Hh = 4;
    Ug.interpolateZoom = function(a, b) {
        function c(a) {
            var b = a * s;
            if (r) {
                var c = W(p),
                    g = f / (Gh * m) * (c * X(Fh * b + p) - V(p));
                return [d + g * j, e + g * k, f * c / W(Fh * b + p)]
            }
            return [d + a * j, e + a * k, f * Math.exp(Fh * b)]
        }
        var d = a[0],
            e = a[1],
            f = a[2],
            g = b[0],
            h = b[1],
            i = b[2],
            j = g - d,
            k = h - e,
            l = j * j + k * k,
            m = Math.sqrt(l),
            n = (i * i - f * f + Hh * l) / (2 * f * Gh * m),
            o = (i * i - f * f - Hh * l) / (2 * i * Gh * m),
            p = Math.log(Math.sqrt(n * n + 1) - n),
            q = Math.log(Math.sqrt(o * o + 1) - o),
            r = q - p,
            s = (r || Math.log(i / f)) / Fh;
        return c.duration = 1e3 * s, c
    }, Ug.behavior.zoom = function() {
        function a(a) {
            a.on(B, j).on(Kh + ".zoom", l).on(C, m).on("dblclick.zoom", n).on(E, k)
        }

        function b(a) {
            return [(a[0] - y.x) / y.k, (a[1] - y.y) / y.k]
        }

        function c(a) {
            return [a[0] * y.k + y.x, a[1] * y.k + y.y]
        }

        function d(a) {
            y.k = Math.max(A[0], Math.min(A[1], a))
        }

        function e(a, b) {
            b = c(b), y.x += a[0] - b[0], y.y += a[1] - b[1]
        }

        function f() {
            v && v.domain(u.range().map(function(a) {
                return (a - y.x) / y.k
            }).map(u.invert)), x && x.domain(w.range().map(function(a) {
                return (a - y.y) / y.k
            }).map(w.invert))
        }

        function g(a) {
            a({
                type: "zoomstart"
            })
        }

        function h(a) {
            f(), a({
                type: "zoom",
                scale: y.k,
                translate: [y.x, y.y]
            })
        }

        function i(a) {
            a({
                type: "zoomend"
            })
        }

        function j() {
            function a() {
                k = 1, e(Ug.mouse(d), n), h(f)
            }

            function c() {
                l.on(C, Zg === d ? m : null).on(D, null), o(k && Ug.event.target === j), i(f)
            }
            var d = this,
                f = F.of(d, arguments),
                j = Ug.event.target,
                k = 0,
                l = Ug.select(Zg).on(C, a).on(D, c),
                n = b(Ug.mouse(d)),
                o = P();
            L.call(d), g(f)
        }

        function k() {
            function a() {
                var a = Ug.touches(n);
                return m = y.k, a.forEach(function(a) {
                    a.identifier in p && (p[a.identifier] = b(a))
                }), a
            }

            function c() {
                for (var b = Ug.event.changedTouches, c = 0, f = b.length; f > c; ++c) p[b[c].identifier] = null;
                var g = a(),
                    i = Date.now();
                if (1 === g.length) {
                    if (500 > i - t) {
                        var j = g[0],
                            k = p[j.identifier];
                        d(2 * y.k), e(j, k), q(), h(o)
                    }
                    t = i
                } else if (g.length > 1) {
                    var j = g[0],
                        l = g[1],
                        m = j[0] - l[0],
                        n = j[1] - l[1];
                    r = m * m + n * n
                }
            }

            function f() {
                for (var a, b, c, f, g = Ug.touches(n), i = 0, j = g.length; j > i; ++i, f = null)
                    if (c = g[i], f = p[c.identifier]) {
                        if (b) break;
                        a = c, b = f
                    }
                if (f) {
                    var k = (k = c[0] - a[0]) * k + (k = c[1] - a[1]) * k,
                        l = r && Math.sqrt(k / r);
                    a = [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2], b = [(b[0] + f[0]) / 2, (b[1] + f[1]) / 2], d(l * m)
                }
                t = null, e(a, b), h(o)
            }

            function l() {
                if (Ug.event.touches.length) {
                    for (var b = Ug.event.changedTouches, c = 0, d = b.length; d > c; ++c) delete p[b[c].identifier];
                    for (var e in p) return void a()
                }
                w.on(u, null).on(v, null), x.on(B, j).on(E, k), z(), i(o)
            }
            var m, n = this,
                o = F.of(n, arguments),
                p = {},
                r = 0,
                s = Ug.event.changedTouches[0].identifier,
                u = "touchmove.zoom-" + s,
                v = "touchend.zoom-" + s,
                w = Ug.select(Zg).on(u, f).on(v, l),
                x = Ug.select(n).on(B, null).on(E, c),
                z = P();
            L.call(n), c(), g(o)
        }

        function l() {
            var a = F.of(this, arguments);
            r ? clearTimeout(r) : (L.call(this), g(a)), r = setTimeout(function() {
                r = null, i(a)
            }, 50), q();
            var c = p || Ug.mouse(this);
            o || (o = b(c)), d(Math.pow(2, .002 * Ih()) * y.k), e(c, o), h(a)
        }

        function m() {
            o = null
        }

        function n() {
            var a = F.of(this, arguments),
                c = Ug.mouse(this),
                f = b(c),
                j = Math.log(y.k) / Math.LN2;
            g(a), d(Math.pow(2, Ug.event.shiftKey ? Math.ceil(j) - 1 : Math.floor(j) + 1)), e(c, f), h(a), i(a)
        }
        var o, p, r, t, u, v, w, x, y = {
                x: 0,
                y: 0,
                k: 1
            },
            z = [960, 500],
            A = Jh,
            B = "mousedown.zoom",
            C = "mousemove.zoom",
            D = "mouseup.zoom",
            E = "touchstart.zoom",
            F = s(a, "zoomstart", "zoom", "zoomend");
        return a.event = function(a) {
            a.each(function() {
                var a = F.of(this, arguments),
                    b = y;
                zj ? Ug.select(this).transition().each("start.zoom", function() {
                    y = this.__chart__ || {
                        x: 0,
                        y: 0,
                        k: 1
                    }, g(a)
                }).tween("zoom:zoom", function() {
                    var c = z[0],
                        d = z[1],
                        e = c / 2,
                        f = d / 2,
                        g = Ug.interpolateZoom([(e - y.x) / y.k, (f - y.y) / y.k, c / y.k], [(e - b.x) / b.k, (f - b.y) / b.k, c / b.k]);
                    return function(b) {
                        var d = g(b),
                            i = c / d[2];
                        this.__chart__ = y = {
                            x: e - d[0] * i,
                            y: f - d[1] * i,
                            k: i
                        }, h(a)
                    }
                }).each("end.zoom", function() {
                    i(a)
                }) : (this.__chart__ = y, g(a), h(a), i(a))
            })
        }, a.translate = function(b) {
            return arguments.length ? (y = {
                x: +b[0],
                y: +b[1],
                k: y.k
            }, f(), a) : [y.x, y.y]
        }, a.scale = function(b) {
            return arguments.length ? (y = {
                x: y.x,
                y: y.y,
                k: +b
            }, f(), a) : y.k
        }, a.scaleExtent = function(b) {
            return arguments.length ? (A = null == b ? Jh : [+b[0], +b[1]], a) : A
        }, a.center = function(b) {
            return arguments.length ? (p = b && [+b[0], +b[1]], a) : p
        }, a.size = function(b) {
            return arguments.length ? (z = b && [+b[0], +b[1]], a) : z
        }, a.x = function(b) {
            return arguments.length ? (v = b, u = b.copy(), y = {
                x: 0,
                y: 0,
                k: 1
            }, a) : v
        }, a.y = function(b) {
            return arguments.length ? (x = b, w = b.copy(), y = {
                x: 0,
                y: 0,
                k: 1
            }, a) : x
        }, Ug.rebind(a, F, "on")
    };
    var Ih, Jh = [0, 1 / 0],
        Kh = "onwheel" in Xg ? (Ih = function() {
            return -Ug.event.deltaY * (Ug.event.deltaMode ? 120 : 1)
        }, "wheel") : "onmousewheel" in Xg ? (Ih = function() {
            return Ug.event.wheelDelta
        }, "mousewheel") : (Ih = function() {
            return -Ug.event.detail
        }, "MozMousePixelScroll");
    Z.prototype.toString = function() {
        return this.rgb() + ""
    }, Ug.hsl = function(a, b, c) {
        return 1 === arguments.length ? a instanceof _ ? $(a.h, a.s, a.l) : qb("" + a, rb, $) : $(+a, +b, +c)
    };
    var Lh = _.prototype = new Z;
    Lh.brighter = function(a) {
        return a = Math.pow(.7, arguments.length ? a : 1), $(this.h, this.s, this.l / a)
    }, Lh.darker = function(a) {
        return a = Math.pow(.7, arguments.length ? a : 1), $(this.h, this.s, a * this.l)
    }, Lh.rgb = function() {
        return ab(this.h, this.s, this.l)
    }, Ug.hcl = function(a, b, c) {
        return 1 === arguments.length ? a instanceof cb ? bb(a.h, a.c, a.l) : a instanceof fb ? hb(a.l, a.a, a.b) : hb((a = sb((a = Ug.rgb(a)).r, a.g, a.b)).l, a.a, a.b) : bb(+a, +b, +c)
    };
    var Mh = cb.prototype = new Z;
    Mh.brighter = function(a) {
        return bb(this.h, this.c, Math.min(100, this.l + Nh * (arguments.length ? a : 1)))
    }, Mh.darker = function(a) {
        return bb(this.h, this.c, Math.max(0, this.l - Nh * (arguments.length ? a : 1)))
    }, Mh.rgb = function() {
        return db(this.h, this.c, this.l).rgb()
    }, Ug.lab = function(a, b, c) {
        return 1 === arguments.length ? a instanceof fb ? eb(a.l, a.a, a.b) : a instanceof cb ? db(a.l, a.c, a.h) : sb((a = Ug.rgb(a)).r, a.g, a.b) : eb(+a, +b, +c)
    };
    var Nh = 18,
        Oh = .95047,
        Ph = 1,
        Qh = 1.08883,
        Rh = fb.prototype = new Z;
    Rh.brighter = function(a) {
        return eb(Math.min(100, this.l + Nh * (arguments.length ? a : 1)), this.a, this.b)
    }, Rh.darker = function(a) {
        return eb(Math.max(0, this.l - Nh * (arguments.length ? a : 1)), this.a, this.b)
    }, Rh.rgb = function() {
        return gb(this.l, this.a, this.b)
    }, Ug.rgb = function(a, b, c) {
        return 1 === arguments.length ? a instanceof ob ? nb(a.r, a.g, a.b) : qb("" + a, nb, ab) : nb(~~a, ~~b, ~~c)
    };
    var Sh = ob.prototype = new Z;
    Sh.brighter = function(a) {
        a = Math.pow(.7, arguments.length ? a : 1);
        var b = this.r,
            c = this.g,
            d = this.b,
            e = 30;
        return b || c || d ? (b && e > b && (b = e), c && e > c && (c = e), d && e > d && (d = e), nb(Math.min(255, ~~(b / a)), Math.min(255, ~~(c / a)), Math.min(255, ~~(d / a)))) : nb(e, e, e)
    }, Sh.darker = function(a) {
        return a = Math.pow(.7, arguments.length ? a : 1), nb(~~(a * this.r), ~~(a * this.g), ~~(a * this.b))
    }, Sh.hsl = function() {
        return rb(this.r, this.g, this.b)
    }, Sh.toString = function() {
        return "#" + pb(this.r) + pb(this.g) + pb(this.b)
    };
    var Th = Ug.map({
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    });
    Th.forEach(function(a, b) {
        Th.set(a, lb(b))
    }), Ug.functor = vb, Ug.xhr = xb(wb), Ug.dsv = function(a, b) {
        function c(a, c, f) {
            arguments.length < 3 && (f = c, c = null);
            var g = yb(a, b, null == c ? d : e(c), f);
            return g.row = function(a) {
                return arguments.length ? g.response(null == (c = a) ? d : e(a)) : c
            }, g
        }

        function d(a) {
            return c.parse(a.responseText)
        }

        function e(a) {
            return function(b) {
                return c.parse(b.responseText, a)
            }
        }

        function f(b) {
            return b.map(g).join(a)
        }

        function g(a) {
            return h.test(a) ? '"' + a.replace(/\"/g, '""') + '"' : a
        }
        var h = new RegExp('["' + a + "\n]"),
            i = a.charCodeAt(0);
        return c.parse = function(a, b) {
            var d;
            return c.parseRows(a, function(a, c) {
                if (d) return d(a, c - 1);
                var e = new Function("d", "return {" + a.map(function(a, b) {
                    return JSON.stringify(a) + ": d[" + b + "]"
                }).join(",") + "}");
                d = b ? function(a, c) {
                    return b(e(a), c)
                } : e
            })
        }, c.parseRows = function(a, b) {
            function c() {
                if (k >= j) return g;
                if (e) return e = !1, f;
                var b = k;
                if (34 === a.charCodeAt(b)) {
                    for (var c = b; c++ < j;)
                        if (34 === a.charCodeAt(c)) {
                            if (34 !== a.charCodeAt(c + 1)) break;
                            ++c
                        }
                    k = c + 2;
                    var d = a.charCodeAt(c + 1);
                    return 13 === d ? (e = !0, 10 === a.charCodeAt(c + 2) && ++k) : 10 === d && (e = !0), a.substring(b + 1, c).replace(/""/g, '"')
                }
                for (; j > k;) {
                    var d = a.charCodeAt(k++),
                        h = 1;
                    if (10 === d) e = !0;
                    else if (13 === d) e = !0, 10 === a.charCodeAt(k) && (++k, ++h);
                    else if (d !== i) continue;
                    return a.substring(b, k - h)
                }
                return a.substring(b)
            }
            for (var d, e, f = {}, g = {}, h = [], j = a.length, k = 0, l = 0;
                (d = c()) !== g;) {
                for (var m = []; d !== f && d !== g;) m.push(d), d = c();
                (!b || (m = b(m, l++))) && h.push(m)
            }
            return h
        }, c.format = function(b) {
            if (Array.isArray(b[0])) return c.formatRows(b);
            var d = new k,
                e = [];
            return b.forEach(function(a) {
                for (var b in a) d.has(b) || e.push(d.add(b))
            }), [e.map(g).join(a)].concat(b.map(function(b) {
                return e.map(function(a) {
                    return g(b[a])
                }).join(a)
            })).join("\n")
        }, c.formatRows = function(a) {
            return a.map(f).join("\n")
        }, c
    }, Ug.csv = Ug.dsv(",", "text/csv"), Ug.tsv = Ug.dsv("	", "text/tab-separated-values");
    var Uh, Vh, Wh, Xh, Yh, Zh = Zg[m(Zg, "requestAnimationFrame")] || function(a) {
        setTimeout(a, 17)
    };
    Ug.timer = function(a, b, c) {
        var d = arguments.length;
        2 > d && (b = 0), 3 > d && (c = Date.now());
        var e = c + b,
            f = {
                c: a,
                t: e,
                f: !1,
                n: null
            };
        Vh ? Vh.n = f : Uh = f, Vh = f, Wh || (Xh = clearTimeout(Xh), Wh = 1, Zh(Ab))
    }, Ug.timer.flush = function() {
        Bb(), Cb()
    }, Ug.round = function(a, b) {
        return b ? Math.round(a * (b = Math.pow(10, b))) / b : Math.round(a)
    };
    var $h = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Eb);
    Ug.formatPrefix = function(a, b) {
        var c = 0;
        return a && (0 > a && (a *= -1), b && (a = Ug.round(a, Db(a, b))), c = 1 + Math.floor(1e-12 + Math.log(a) / Math.LN10), c = Math.max(-24, Math.min(24, 3 * Math.floor((0 >= c ? c + 1 : c - 1) / 3)))), $h[8 + c / 3]
    };
    var _h = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
        ai = Ug.map({
            b: function(a) {
                return a.toString(2)
            },
            c: function(a) {
                return String.fromCharCode(a)
            },
            o: function(a) {
                return a.toString(8)
            },
            x: function(a) {
                return a.toString(16)
            },
            X: function(a) {
                return a.toString(16).toUpperCase()
            },
            g: function(a, b) {
                return a.toPrecision(b)
            },
            e: function(a, b) {
                return a.toExponential(b)
            },
            f: function(a, b) {
                return a.toFixed(b)
            },
            r: function(a, b) {
                return (a = Ug.round(a, Db(a, b))).toFixed(Math.max(0, Math.min(20, Db(a * (1 + 1e-15), b))))
            }
        }),
        bi = Ug.time = {},
        ci = Date;
    Hb.prototype = {
        getDate: function() {
            return this._.getUTCDate()
        },
        getDay: function() {
            return this._.getUTCDay()
        },
        getFullYear: function() {
            return this._.getUTCFullYear()
        },
        getHours: function() {
            return this._.getUTCHours()
        },
        getMilliseconds: function() {
            return this._.getUTCMilliseconds()
        },
        getMinutes: function() {
            return this._.getUTCMinutes()
        },
        getMonth: function() {
            return this._.getUTCMonth()
        },
        getSeconds: function() {
            return this._.getUTCSeconds()
        },
        getTime: function() {
            return this._.getTime()
        },
        getTimezoneOffset: function() {
            return 0
        },
        valueOf: function() {
            return this._.valueOf()
        },
        setDate: function() {
            di.setUTCDate.apply(this._, arguments)
        },
        setDay: function() {
            di.setUTCDay.apply(this._, arguments)
        },
        setFullYear: function() {
            di.setUTCFullYear.apply(this._, arguments)
        },
        setHours: function() {
            di.setUTCHours.apply(this._, arguments)
        },
        setMilliseconds: function() {
            di.setUTCMilliseconds.apply(this._, arguments)
        },
        setMinutes: function() {
            di.setUTCMinutes.apply(this._, arguments)
        },
        setMonth: function() {
            di.setUTCMonth.apply(this._, arguments)
        },
        setSeconds: function() {
            di.setUTCSeconds.apply(this._, arguments)
        },
        setTime: function() {
            di.setTime.apply(this._, arguments)
        }
    };
    var di = Date.prototype;
    bi.year = Ib(function(a) {
        return a = bi.day(a), a.setMonth(0, 1), a
    }, function(a, b) {
        a.setFullYear(a.getFullYear() + b)
    }, function(a) {
        return a.getFullYear()
    }), bi.years = bi.year.range, bi.years.utc = bi.year.utc.range, bi.day = Ib(function(a) {
        var b = new ci(2e3, 0);
        return b.setFullYear(a.getFullYear(), a.getMonth(), a.getDate()), b
    }, function(a, b) {
        a.setDate(a.getDate() + b)
    }, function(a) {
        return a.getDate() - 1
    }), bi.days = bi.day.range, bi.days.utc = bi.day.utc.range, bi.dayOfYear = function(a) {
        var b = bi.year(a);
        return Math.floor((a - b - 6e4 * (a.getTimezoneOffset() - b.getTimezoneOffset())) / 864e5)
    }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(a, b) {
        b = 7 - b;
        var c = bi[a] = Ib(function(a) {
            return (a = bi.day(a)).setDate(a.getDate() - (a.getDay() + b) % 7), a
        }, function(a, b) {
            a.setDate(a.getDate() + 7 * Math.floor(b))
        }, function(a) {
            var c = bi.year(a).getDay();
            return Math.floor((bi.dayOfYear(a) + (c + b) % 7) / 7) - (c !== b)
        });
        bi[a + "s"] = c.range, bi[a + "s"].utc = c.utc.range, bi[a + "OfYear"] = function(a) {
            var c = bi.year(a).getDay();
            return Math.floor((bi.dayOfYear(a) + (c + b) % 7) / 7)
        }
    }), bi.week = bi.sunday, bi.weeks = bi.sunday.range, bi.weeks.utc = bi.sunday.utc.range, bi.weekOfYear = bi.sundayOfYear;
    var ei = {
            "-": "",
            _: " ",
            0: "0"
        },
        fi = /^\s*\d+/,
        gi = /^%/;
    Ug.locale = function(a) {
        return {
            numberFormat: Fb(a),
            timeFormat: Kb(a)
        }
    };
    var hi = Ug.locale({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""],
        dateTime: "%a %b %e %X %Y",
        date: "%m/%d/%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    Ug.format = hi.numberFormat, Ug.geo = {}, dc.prototype = {
        s: 0,
        t: 0,
        add: function(a) {
            ec(a, this.t, ii), ec(ii.s, this.s, this), this.s ? this.t += ii.t : this.s = ii.t
        },
        reset: function() {
            this.s = this.t = 0
        },
        valueOf: function() {
            return this.s
        }
    };
    var ii = new dc;
    Ug.geo.stream = function(a, b) {
        a && ji.hasOwnProperty(a.type) ? ji[a.type](a, b) : fc(a, b)
    };
    var ji = {
            Feature: function(a, b) {
                fc(a.geometry, b)
            },
            FeatureCollection: function(a, b) {
                for (var c = a.features, d = -1, e = c.length; ++d < e;) fc(c[d].geometry, b)
            }
        },
        ki = {
            Sphere: function(a, b) {
                b.sphere()
            },
            Point: function(a, b) {
                a = a.coordinates, b.point(a[0], a[1], a[2])
            },
            MultiPoint: function(a, b) {
                for (var c = a.coordinates, d = -1, e = c.length; ++d < e;) a = c[d], b.point(a[0], a[1], a[2])
            },
            LineString: function(a, b) {
                gc(a.coordinates, b, 0)
            },
            MultiLineString: function(a, b) {
                for (var c = a.coordinates, d = -1, e = c.length; ++d < e;) gc(c[d], b, 0)
            },
            Polygon: function(a, b) {
                hc(a.coordinates, b)
            },
            MultiPolygon: function(a, b) {
                for (var c = a.coordinates, d = -1, e = c.length; ++d < e;) hc(c[d], b)
            },
            GeometryCollection: function(a, b) {
                for (var c = a.geometries, d = -1, e = c.length; ++d < e;) fc(c[d], b)
            }
        };
    Ug.geo.area = function(a) {
        return li = 0, Ug.geo.stream(a, ni), li
    };
    var li, mi = new dc,
        ni = {
            sphere: function() {
                li += 4 * yh
            },
            point: n,
            lineStart: n,
            lineEnd: n,
            polygonStart: function() {
                mi.reset(), ni.lineStart = ic
            },
            polygonEnd: function() {
                var a = 2 * mi;
                li += 0 > a ? 4 * yh + a : a, ni.lineStart = ni.lineEnd = ni.point = n
            }
        };
    Ug.geo.bounds = function() {
        function a(a, b) {
            t.push(u = [k = a, m = a]), l > b && (l = b), b > n && (n = b)
        }

        function b(b, c) {
            var d = jc([b * Dh, c * Dh]);
            if (r) {
                var e = lc(r, d),
                    f = [e[1], -e[0], 0],
                    g = lc(f, e);
                oc(g), g = pc(g);
                var i = b - o,
                    j = i > 0 ? 1 : -1,
                    p = g[0] * Eh * j,
                    q = gh(i) > 180;
                if (q ^ (p > j * o && j * b > p)) {
                    var s = g[1] * Eh;
                    s > n && (n = s)
                } else if (p = (p + 360) % 360 - 180, q ^ (p > j * o && j * b > p)) {
                    var s = -g[1] * Eh;
                    l > s && (l = s)
                } else l > c && (l = c), c > n && (n = c);
                q ? o > b ? h(k, b) > h(k, m) && (m = b) : h(b, m) > h(k, m) && (k = b) : m >= k ? (k > b && (k = b), b > m && (m = b)) : b > o ? h(k, b) > h(k, m) && (m = b) : h(b, m) > h(k, m) && (k = b)
            } else a(b, c);
            r = d, o = b
        }

        function c() {
            v.point = b
        }

        function d() {
            u[0] = k, u[1] = m, v.point = a, r = null
        }

        function e(a, c) {
            if (r) {
                var d = a - o;
                s += gh(d) > 180 ? d + (d > 0 ? 360 : -360) : d
            } else p = a, q = c;
            ni.point(a, c), b(a, c)
        }

        function f() {
            ni.lineStart()
        }

        function g() {
            e(p, q), ni.lineEnd(), gh(s) > Bh && (k = -(m = 180)), u[0] = k, u[1] = m, r = null
        }

        function h(a, b) {
            return (b -= a) < 0 ? b + 360 : b
        }

        function i(a, b) {
            return a[0] - b[0]
        }

        function j(a, b) {
            return b[0] <= b[1] ? b[0] <= a && a <= b[1] : a < b[0] || b[1] < a
        }
        var k, l, m, n, o, p, q, r, s, t, u, v = {
            point: a,
            lineStart: c,
            lineEnd: d,
            polygonStart: function() {
                v.point = e, v.lineStart = f, v.lineEnd = g, s = 0, ni.polygonStart()
            },
            polygonEnd: function() {
                ni.polygonEnd(), v.point = a, v.lineStart = c, v.lineEnd = d, 0 > mi ? (k = -(m = 180), l = -(n = 90)) : s > Bh ? n = 90 : -Bh > s && (l = -90), u[0] = k, u[1] = m
            }
        };
        return function(a) {
            n = m = -(k = l = 1 / 0), t = [], Ug.geo.stream(a, v);
            var b = t.length;
            if (b) {
                t.sort(i);
                for (var c, d = 1, e = t[0], f = [e]; b > d; ++d) c = t[d], j(c[0], e) || j(c[1], e) ? (h(e[0], c[1]) > h(e[0], e[1]) && (e[1] = c[1]), h(c[0], e[1]) > h(e[0], e[1]) && (e[0] = c[0])) : f.push(e = c);
                for (var g, c, o = -1 / 0, b = f.length - 1, d = 0, e = f[b]; b >= d; e = c, ++d) c = f[d], (g = h(e[1], c[0])) > o && (o = g, k = c[0], m = e[1])
            }
            return t = u = null, 1 / 0 === k || 1 / 0 === l ? [
                [0 / 0, 0 / 0],
                [0 / 0, 0 / 0]
            ] : [
                [k, l],
                [m, n]
            ]
        }
    }(), Ug.geo.centroid = function(a) {
        oi = pi = qi = ri = si = ti = ui = vi = wi = xi = yi = 0, Ug.geo.stream(a, zi);
        var b = wi,
            c = xi,
            d = yi,
            e = b * b + c * c + d * d;
        return Ch > e && (b = ti, c = ui, d = vi, Bh > pi && (b = qi, c = ri, d = si), e = b * b + c * c + d * d, Ch > e) ? [0 / 0, 0 / 0] : [Math.atan2(c, b) * Eh, U(d / Math.sqrt(e)) * Eh]
    };
    var oi, pi, qi, ri, si, ti, ui, vi, wi, xi, yi, zi = {
            sphere: n,
            point: rc,
            lineStart: tc,
            lineEnd: uc,
            polygonStart: function() {
                zi.lineStart = vc
            },
            polygonEnd: function() {
                zi.lineStart = tc
            }
        },
        Ai = Ac(wc, Fc, Hc, [-yh, -yh / 2]),
        Bi = 1e9;
    Ug.geo.clipExtent = function() {
        var a, b, c, d, e, f, g = {
            stream: function(a) {
                return e && (e.valid = !1), e = f(a), e.valid = !0, e
            },
            extent: function(h) {
                return arguments.length ? (f = Kc(a = +h[0][0], b = +h[0][1], c = +h[1][0], d = +h[1][1]), e && (e.valid = !1, e = null), g) : [
                    [a, b],
                    [c, d]
                ]
            }
        };
        return g.extent([
            [0, 0],
            [960, 500]
        ])
    }, (Ug.geo.conicEqualArea = function() {
        return Mc(Nc)
    }).raw = Nc, Ug.geo.albers = function() {
        return Ug.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
    }, Ug.geo.albersUsa = function() {
        function a(a) {
            var f = a[0],
                g = a[1];
            return b = null, c(f, g), b || (d(f, g), b) || e(f, g), b
        }
        var b, c, d, e, f = Ug.geo.albers(),
            g = Ug.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
            h = Ug.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
            i = {
                point: function(a, c) {
                    b = [a, c]
                }
            };
        return a.invert = function(a) {
            var b = f.scale(),
                c = f.translate(),
                d = (a[0] - c[0]) / b,
                e = (a[1] - c[1]) / b;
            return (e >= .12 && .234 > e && d >= -.425 && -.214 > d ? g : e >= .166 && .234 > e && d >= -.214 && -.115 > d ? h : f).invert(a)
        }, a.stream = function(a) {
            var b = f.stream(a),
                c = g.stream(a),
                d = h.stream(a);
            return {
                point: function(a, e) {
                    b.point(a, e), c.point(a, e), d.point(a, e)
                },
                sphere: function() {
                    b.sphere(), c.sphere(), d.sphere()
                },
                lineStart: function() {
                    b.lineStart(), c.lineStart(), d.lineStart()
                },
                lineEnd: function() {
                    b.lineEnd(), c.lineEnd(), d.lineEnd()
                },
                polygonStart: function() {
                    b.polygonStart(), c.polygonStart(), d.polygonStart()
                },
                polygonEnd: function() {
                    b.polygonEnd(), c.polygonEnd(), d.polygonEnd()
                }
            }
        }, a.precision = function(b) {
            return arguments.length ? (f.precision(b), g.precision(b), h.precision(b), a) : f.precision()
        }, a.scale = function(b) {
            return arguments.length ? (f.scale(b), g.scale(.35 * b), h.scale(b), a.translate(f.translate())) : f.scale()
        }, a.translate = function(b) {
            if (!arguments.length) return f.translate();
            var j = f.scale(),
                k = +b[0],
                l = +b[1];
            return c = f.translate(b).clipExtent([
                [k - .455 * j, l - .238 * j],
                [k + .455 * j, l + .238 * j]
            ]).stream(i).point, d = g.translate([k - .307 * j, l + .201 * j]).clipExtent([
                [k - .425 * j + Bh, l + .12 * j + Bh],
                [k - .214 * j - Bh, l + .234 * j - Bh]
            ]).stream(i).point, e = h.translate([k - .205 * j, l + .212 * j]).clipExtent([
                [k - .214 * j + Bh, l + .166 * j + Bh],
                [k - .115 * j - Bh, l + .234 * j - Bh]
            ]).stream(i).point, a
        }, a.scale(1070)
    };
    var Ci, Di, Ei, Fi, Gi, Hi, Ii = {
            point: n,
            lineStart: n,
            lineEnd: n,
            polygonStart: function() {
                Di = 0, Ii.lineStart = Oc
            },
            polygonEnd: function() {
                Ii.lineStart = Ii.lineEnd = Ii.point = n, Ci += gh(Di / 2)
            }
        },
        Ji = {
            point: Pc,
            lineStart: n,
            lineEnd: n,
            polygonStart: n,
            polygonEnd: n
        },
        Ki = {
            point: Sc,
            lineStart: Tc,
            lineEnd: Uc,
            polygonStart: function() {
                Ki.lineStart = Vc
            },
            polygonEnd: function() {
                Ki.point = Sc, Ki.lineStart = Tc, Ki.lineEnd = Uc
            }
        };
    Ug.geo.path = function() {
        function a(a) {
            return a && ("function" == typeof h && f.pointRadius(+h.apply(this, arguments)), g && g.valid || (g = e(f)), Ug.geo.stream(a, g)), f.result()
        }

        function b() {
            return g = null, a
        }
        var c, d, e, f, g, h = 4.5;
        return a.area = function(a) {
            return Ci = 0, Ug.geo.stream(a, e(Ii)), Ci
        }, a.centroid = function(a) {
            return qi = ri = si = ti = ui = vi = wi = xi = yi = 0, Ug.geo.stream(a, e(Ki)), yi ? [wi / yi, xi / yi] : vi ? [ti / vi, ui / vi] : si ? [qi / si, ri / si] : [0 / 0, 0 / 0]
        }, a.bounds = function(a) {
            return Gi = Hi = -(Ei = Fi = 1 / 0), Ug.geo.stream(a, e(Ji)), [
                [Ei, Fi],
                [Gi, Hi]
            ]
        }, a.projection = function(a) {
            return arguments.length ? (e = (c = a) ? a.stream || Yc(a) : wb, b()) : c
        }, a.context = function(a) {
            return arguments.length ? (f = null == (d = a) ? new Qc : new Wc(a), "function" != typeof h && f.pointRadius(h), b()) : d
        }, a.pointRadius = function(b) {
            return arguments.length ? (h = "function" == typeof b ? b : (f.pointRadius(+b), +b), a) : h
        }, a.projection(Ug.geo.albersUsa()).context(null)
    }, Ug.geo.transform = function(a) {
        return {
            stream: function(b) {
                var c = new Zc(b);
                for (var d in a) c[d] = a[d];
                return c
            }
        }
    }, Zc.prototype = {
        point: function(a, b) {
            this.stream.point(a, b)
        },
        sphere: function() {
            this.stream.sphere()
        },
        lineStart: function() {
            this.stream.lineStart()
        },
        lineEnd: function() {
            this.stream.lineEnd()
        },
        polygonStart: function() {
            this.stream.polygonStart()
        },
        polygonEnd: function() {
            this.stream.polygonEnd()
        }
    }, Ug.geo.projection = _c, Ug.geo.projectionMutator = ad, (Ug.geo.equirectangular = function() {
        return _c(cd)
    }).raw = cd.invert = cd, Ug.geo.rotation = function(a) {
        function b(b) {
            return b = a(b[0] * Dh, b[1] * Dh), b[0] *= Eh, b[1] *= Eh, b
        }
        return a = ed(a[0] % 360 * Dh, a[1] * Dh, a.length > 2 ? a[2] * Dh : 0), b.invert = function(b) {
            return b = a.invert(b[0] * Dh, b[1] * Dh), b[0] *= Eh, b[1] *= Eh, b
        }, b
    }, dd.invert = cd, Ug.geo.circle = function() {
        function a() {
            var a = "function" == typeof d ? d.apply(this, arguments) : d,
                b = ed(-a[0] * Dh, -a[1] * Dh, 0).invert,
                e = [];
            return c(null, null, 1, {
                point: function(a, c) {
                    e.push(a = b(a, c)), a[0] *= Eh, a[1] *= Eh
                }
            }), {
                type: "Polygon",
                coordinates: [e]
            }
        }
        var b, c, d = [0, 0],
            e = 6;
        return a.origin = function(b) {
            return arguments.length ? (d = b, a) : d
        }, a.angle = function(d) {
            return arguments.length ? (c = id((b = +d) * Dh, e * Dh), a) : b
        }, a.precision = function(d) {
            return arguments.length ? (c = id(b * Dh, (e = +d) * Dh), a) : e
        }, a.angle(90)
    }, Ug.geo.distance = function(a, b) {
        var c, d = (b[0] - a[0]) * Dh,
            e = a[1] * Dh,
            f = b[1] * Dh,
            g = Math.sin(d),
            h = Math.cos(d),
            i = Math.sin(e),
            j = Math.cos(e),
            k = Math.sin(f),
            l = Math.cos(f);
        return Math.atan2(Math.sqrt((c = l * g) * c + (c = j * k - i * l * h) * c), i * k + j * l * h)
    }, Ug.geo.graticule = function() {
        function a() {
            return {
                type: "MultiLineString",
                coordinates: b()
            }
        }

        function b() {
            return Ug.range(Math.ceil(f / q) * q, e, q).map(m).concat(Ug.range(Math.ceil(j / r) * r, i, r).map(n)).concat(Ug.range(Math.ceil(d / o) * o, c, o).filter(function(a) {
                return gh(a % q) > Bh
            }).map(k)).concat(Ug.range(Math.ceil(h / p) * p, g, p).filter(function(a) {
                return gh(a % r) > Bh
            }).map(l))
        }
        var c, d, e, f, g, h, i, j, k, l, m, n, o = 10,
            p = o,
            q = 90,
            r = 360,
            s = 2.5;
        return a.lines = function() {
            return b().map(function(a) {
                return {
                    type: "LineString",
                    coordinates: a
                }
            })
        }, a.outline = function() {
            return {
                type: "Polygon",
                coordinates: [m(f).concat(n(i).slice(1), m(e).reverse().slice(1), n(j).reverse().slice(1))]
            }
        }, a.extent = function(b) {
            return arguments.length ? a.majorExtent(b).minorExtent(b) : a.minorExtent()
        }, a.majorExtent = function(b) {
            return arguments.length ? (f = +b[0][0], e = +b[1][0], j = +b[0][1], i = +b[1][1], f > e && (b = f, f = e, e = b), j > i && (b = j, j = i, i = b), a.precision(s)) : [
                [f, j],
                [e, i]
            ]
        }, a.minorExtent = function(b) {
            return arguments.length ? (d = +b[0][0], c = +b[1][0], h = +b[0][1], g = +b[1][1], d > c && (b = d, d = c, c = b), h > g && (b = h, h = g, g = b), a.precision(s)) : [
                [d, h],
                [c, g]
            ]
        }, a.step = function(b) {
            return arguments.length ? a.majorStep(b).minorStep(b) : a.minorStep()
        }, a.majorStep = function(b) {
            return arguments.length ? (q = +b[0], r = +b[1], a) : [q, r]
        }, a.minorStep = function(b) {
            return arguments.length ? (o = +b[0], p = +b[1], a) : [o, p]
        }, a.precision = function(b) {
            return arguments.length ? (s = +b, k = kd(h, g, 90), l = ld(d, c, s), m = kd(j, i, 90), n = ld(f, e, s), a) : s
        }, a.majorExtent([
            [-180, -90 + Bh],
            [180, 90 - Bh]
        ]).minorExtent([
            [-180, -80 - Bh],
            [180, 80 + Bh]
        ])
    }, Ug.geo.greatArc = function() {
        function a() {
            return {
                type: "LineString",
                coordinates: [b || d.apply(this, arguments), c || e.apply(this, arguments)]
            }
        }
        var b, c, d = md,
            e = nd;
        return a.distance = function() {
            return Ug.geo.distance(b || d.apply(this, arguments), c || e.apply(this, arguments))
        }, a.source = function(c) {
            return arguments.length ? (d = c, b = "function" == typeof c ? null : c, a) : d
        }, a.target = function(b) {
            return arguments.length ? (e = b, c = "function" == typeof b ? null : b, a) : e
        }, a.precision = function() {
            return arguments.length ? a : 0
        }, a
    }, Ug.geo.interpolate = function(a, b) {
        return od(a[0] * Dh, a[1] * Dh, b[0] * Dh, b[1] * Dh)
    }, Ug.geo.length = function(a) {
        return Li = 0, Ug.geo.stream(a, Mi), Li
    };
    var Li, Mi = {
            sphere: n,
            point: n,
            lineStart: pd,
            lineEnd: n,
            polygonStart: n,
            polygonEnd: n
        },
        Ni = qd(function(a) {
            return Math.sqrt(2 / (1 + a))
        }, function(a) {
            return 2 * Math.asin(a / 2)
        });
    (Ug.geo.azimuthalEqualArea = function() {
        return _c(Ni)
    }).raw = Ni;
    var Oi = qd(function(a) {
        var b = Math.acos(a);
        return b && b / Math.sin(b)
    }, wb);
    (Ug.geo.azimuthalEquidistant = function() {
        return _c(Oi)
    }).raw = Oi, (Ug.geo.conicConformal = function() {
        return Mc(rd)
    }).raw = rd, (Ug.geo.conicEquidistant = function() {
        return Mc(sd)
    }).raw = sd;
    var Pi = qd(function(a) {
        return 1 / a
    }, Math.atan);
    (Ug.geo.gnomonic = function() {
        return _c(Pi)
    }).raw = Pi, td.invert = function(a, b) {
        return [a, 2 * Math.atan(Math.exp(b)) - Ah]
    }, (Ug.geo.mercator = function() {
        return ud(td)
    }).raw = td;
    var Qi = qd(function() {
        return 1
    }, Math.asin);
    (Ug.geo.orthographic = function() {
        return _c(Qi)
    }).raw = Qi;
    var Ri = qd(function(a) {
        return 1 / (1 + a)
    }, function(a) {
        return 2 * Math.atan(a)
    });
    (Ug.geo.stereographic = function() {
        return _c(Ri)
    }).raw = Ri, vd.invert = function(a, b) {
        return [-b, 2 * Math.atan(Math.exp(a)) - Ah]
    }, (Ug.geo.transverseMercator = function() {
        var a = ud(vd),
            b = a.center,
            c = a.rotate;
        return a.center = function(a) {
            return a ? b([-a[1], a[0]]) : (a = b(), [-a[1], a[0]])
        }, a.rotate = function(a) {
            return a ? c([a[0], a[1], a.length > 2 ? a[2] + 90 : 90]) : (a = c(), [a[0], a[1], a[2] - 90])
        }, a.rotate([0, 0])
    }).raw = vd, Ug.geom = {}, Ug.geom.hull = function(a) {
        function b(a) {
            if (a.length < 3) return [];
            var b, e = vb(c),
                f = vb(d),
                g = a.length,
                h = [],
                i = [];
            for (b = 0; g > b; b++) h.push([+e.call(this, a[b], b), +f.call(this, a[b], b), b]);
            for (h.sort(zd), b = 0; g > b; b++) i.push([h[b][0], -h[b][1]]);
            var j = yd(h),
                k = yd(i),
                l = k[0] === j[0],
                m = k[k.length - 1] === j[j.length - 1],
                n = [];
            for (b = j.length - 1; b >= 0; --b) n.push(a[h[j[b]][2]]);
            for (b = +l; b < k.length - m; ++b) n.push(a[h[k[b]][2]]);
            return n
        }
        var c = wd,
            d = xd;
        return arguments.length ? b(a) : (b.x = function(a) {
            return arguments.length ? (c = a, b) : c
        }, b.y = function(a) {
            return arguments.length ? (d = a, b) : d
        }, b)
    }, Ug.geom.polygon = function(a) {
        return lh(a, Si), a
    };
    var Si = Ug.geom.polygon.prototype = [];
    Si.area = function() {
        for (var a, b = -1, c = this.length, d = this[c - 1], e = 0; ++b < c;) a = d, d = this[b], e += a[1] * d[0] - a[0] * d[1];
        return .5 * e
    }, Si.centroid = function(a) {
        var b, c, d = -1,
            e = this.length,
            f = 0,
            g = 0,
            h = this[e - 1];
        for (arguments.length || (a = -1 / (6 * this.area())); ++d < e;) b = h, h = this[d], c = b[0] * h[1] - h[0] * b[1], f += (b[0] + h[0]) * c, g += (b[1] + h[1]) * c;
        return [f * a, g * a]
    }, Si.clip = function(a) {
        for (var b, c, d, e, f, g, h = Cd(a), i = -1, j = this.length - Cd(this), k = this[j - 1]; ++i < j;) {
            for (b = a.slice(), a.length = 0, e = this[i], f = b[(d = b.length - h) - 1], c = -1; ++c < d;) g = b[c], Ad(g, k, e) ? (Ad(f, k, e) || a.push(Bd(f, g, k, e)), a.push(g)) : Ad(f, k, e) && a.push(Bd(f, g, k, e)), f = g;
            h && a.push(a[0]), k = e
        }
        return a
    };
    var Ti, Ui, Vi, Wi, Xi, Yi = [],
        Zi = [];
    Kd.prototype.prepare = function() {
        for (var a, b = this.edges, c = b.length; c--;) a = b[c].edge, a.b && a.a || b.splice(c, 1);
        return b.sort(Md), b.length
    }, Wd.prototype = {
        start: function() {
            return this.edge.l === this.site ? this.edge.a : this.edge.b
        },
        end: function() {
            return this.edge.l === this.site ? this.edge.b : this.edge.a
        }
    }, Xd.prototype = {
        insert: function(a, b) {
            var c, d, e;
            if (a) {
                if (b.P = a, b.N = a.N, a.N && (a.N.P = b), a.N = b, a.R) {
                    for (a = a.R; a.L;) a = a.L;
                    a.L = b
                } else a.R = b;
                c = a
            } else this._ ? (a = _d(this._), b.P = null, b.N = a, a.P = a.L = b, c = a) : (b.P = b.N = null, this._ = b, c = null);
            for (b.L = b.R = null, b.U = c, b.C = !0, a = b; c && c.C;) d = c.U, c === d.L ? (e = d.R, e && e.C ? (c.C = e.C = !1, d.C = !0, a = d) : (a === c.R && (Zd(this, c), a = c, c = a.U), c.C = !1, d.C = !0, $d(this, d))) : (e = d.L, e && e.C ? (c.C = e.C = !1, d.C = !0, a = d) : (a === c.L && ($d(this, c), a = c, c = a.U), c.C = !1, d.C = !0, Zd(this, d))), c = a.U;
            this._.C = !1
        },
        remove: function(a) {
            a.N && (a.N.P = a.P), a.P && (a.P.N = a.N), a.N = a.P = null;
            var b, c, d, e = a.U,
                f = a.L,
                g = a.R;
            if (c = f ? g ? _d(g) : f : g, e ? e.L === a ? e.L = c : e.R = c : this._ = c, f && g ? (d = c.C, c.C = a.C, c.L = f, f.U = c, c !== g ? (e = c.U, c.U = a.U, a = c.R, e.L = a, c.R = g, g.U = c) : (c.U = e, e = c, a = c.R)) : (d = a.C, a = c), a && (a.U = e), !d) {
                if (a && a.C) return a.C = !1, void 0;
                do {
                    if (a === this._) break;
                    if (a === e.L) {
                        if (b = e.R, b.C && (b.C = !1, e.C = !0, Zd(this, e), b = e.R), b.L && b.L.C || b.R && b.R.C) {
                            b.R && b.R.C || (b.L.C = !1, b.C = !0, $d(this, b), b = e.R), b.C = e.C, e.C = b.R.C = !1, Zd(this, e), a = this._;
                            break
                        }
                    } else if (b = e.L, b.C && (b.C = !1, e.C = !0, $d(this, e), b = e.L), b.L && b.L.C || b.R && b.R.C) {
                        b.L && b.L.C || (b.R.C = !1, b.C = !0, Zd(this, b), b = e.L), b.C = e.C, e.C = b.L.C = !1, $d(this, e), a = this._;
                        break
                    }
                    b.C = !0, a = e, e = e.U
                } while (!a.C);
                a && (a.C = !1)
            }
        }
    }, Ug.geom.voronoi = function(a) {
        function b(a) {
            var b = new Array(a.length),
                d = h[0][0],
                e = h[0][1],
                f = h[1][0],
                g = h[1][1];
            return ae(c(a), h).cells.forEach(function(c, h) {
                var i = c.edges,
                    j = c.site,
                    k = b[h] = i.length ? i.map(function(a) {
                        var b = a.start();
                        return [b.x, b.y]
                    }) : j.x >= d && j.x <= f && j.y >= e && j.y <= g ? [
                        [d, g],
                        [f, g],
                        [f, e],
                        [d, e]
                    ] : [];
                k.point = a[h]
            }), b
        }

        function c(a) {
            return a.map(function(a, b) {
                return {
                    x: Math.round(f(a, b) / Bh) * Bh,
                    y: Math.round(g(a, b) / Bh) * Bh,
                    i: b
                }
            })
        }
        var d = wd,
            e = xd,
            f = d,
            g = e,
            h = $i;
        return a ? b(a) : (b.links = function(a) {
            return ae(c(a)).edges.filter(function(a) {
                return a.l && a.r
            }).map(function(b) {
                return {
                    source: a[b.l.i],
                    target: a[b.r.i]
                }
            })
        }, b.triangles = function(a) {
            var b = [];
            return ae(c(a)).cells.forEach(function(c, d) {
                for (var e, f, g = c.site, h = c.edges.sort(Md), i = -1, j = h.length, k = h[j - 1].edge, l = k.l === g ? k.r : k.l; ++i < j;) e = k, f = l, k = h[i].edge, l = k.l === g ? k.r : k.l, d < f.i && d < l.i && ce(g, f, l) < 0 && b.push([a[d], a[f.i], a[l.i]])
            }), b
        }, b.x = function(a) {
            return arguments.length ? (f = vb(d = a), b) : d
        }, b.y = function(a) {
            return arguments.length ? (g = vb(e = a), b) : e
        }, b.clipExtent = function(a) {
            return arguments.length ? (h = null == a ? $i : a, b) : h === $i ? null : h
        }, b.size = function(a) {
            return arguments.length ? b.clipExtent(a && [
                [0, 0], a
            ]) : h === $i ? null : h && h[1]
        }, b)
    };
    var $i = [
        [-1e6, -1e6],
        [1e6, 1e6]
    ];
    Ug.geom.delaunay = function(a) {
        return Ug.geom.voronoi().triangles(a)
    }, Ug.geom.quadtree = function(a, b, c, d, e) {
        function f(a) {
            function f(a, b, c, d, e, f, g, h) {
                if (!isNaN(c) && !isNaN(d))
                    if (a.leaf) {
                        var i = a.x,
                            k = a.y;
                        if (null != i)
                            if (gh(i - c) + gh(k - d) < .01) j(a, b, c, d, e, f, g, h);
                            else {
                                var l = a.point;
                                a.x = a.y = a.point = null, j(a, l, i, k, e, f, g, h), j(a, b, c, d, e, f, g, h)
                            } else a.x = c, a.y = d, a.point = b
                    } else j(a, b, c, d, e, f, g, h)
            }

            function j(a, b, c, d, e, g, h, i) {
                var j = .5 * (e + h),
                    k = .5 * (g + i),
                    l = c >= j,
                    m = d >= k,
                    n = (m << 1) + l;
                a.leaf = !1, a = a.nodes[n] || (a.nodes[n] = fe()), l ? e = j : h = j, m ? g = k : i = k, f(a, b, c, d, e, g, h, i)
            }
            var k, l, m, n, o, p, q, r, s, t = vb(h),
                u = vb(i);
            if (null != b) p = b, q = c, r = d, s = e;
            else if (r = s = -(p = q = 1 / 0), l = [], m = [], o = a.length, g)
                for (n = 0; o > n; ++n) k = a[n], k.x < p && (p = k.x), k.y < q && (q = k.y), k.x > r && (r = k.x), k.y > s && (s = k.y), l.push(k.x), m.push(k.y);
            else
                for (n = 0; o > n; ++n) {
                    var v = +t(k = a[n], n),
                        w = +u(k, n);
                    p > v && (p = v), q > w && (q = w), v > r && (r = v), w > s && (s = w), l.push(v), m.push(w)
                }
            var x = r - p,
                y = s - q;
            x > y ? s = q + x : r = p + y;
            var z = fe();
            if (z.add = function(a) {
                    f(z, a, +t(a, ++n), +u(a, n), p, q, r, s)
                }, z.visit = function(a) {
                    ge(a, z, p, q, r, s)
                }, n = -1, null == b) {
                for (; ++n < o;) f(z, a[n], l[n], m[n], p, q, r, s);
                --n
            } else a.forEach(z.add);
            return l = m = a = k = null, z
        }
        var g, h = wd,
            i = xd;
        return (g = arguments.length) ? (h = de, i = ee, 3 === g && (e = c, d = b, c = b = 0), f(a)) : (f.x = function(a) {
            return arguments.length ? (h = a, f) : h
        }, f.y = function(a) {
            return arguments.length ? (i = a, f) : i
        }, f.extent = function(a) {
            return arguments.length ? (null == a ? b = c = d = e = null : (b = +a[0][0], c = +a[0][1], d = +a[1][0], e = +a[1][1]), f) : null == b ? null : [
                [b, c],
                [d, e]
            ]
        }, f.size = function(a) {
            return arguments.length ? (null == a ? b = c = d = e = null : (b = c = 0, d = +a[0], e = +a[1]), f) : null == b ? null : [d - b, e - c]
        }, f)
    }, Ug.interpolateRgb = he, Ug.interpolateObject = ie, Ug.interpolateNumber = je, Ug.interpolateString = ke;
    var _i = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
    Ug.interpolate = le, Ug.interpolators = [function(a, b) {
        var c = typeof b;
        return ("string" === c ? Th.has(b) || /^(#|rgb\(|hsl\()/.test(b) ? he : ke : b instanceof Z ? he : "object" === c ? Array.isArray(b) ? me : ie : je)(a, b)
    }], Ug.interpolateArray = me;
    var aj = function() {
            return wb
        },
        bj = Ug.map({
            linear: aj,
            poly: te,
            quad: function() {
                return qe
            },
            cubic: function() {
                return re
            },
            sin: function() {
                return ue
            },
            exp: function() {
                return ve
            },
            circle: function() {
                return we
            },
            elastic: xe,
            back: ye,
            bounce: function() {
                return ze
            }
        }),
        cj = Ug.map({
            "in": wb,
            out: oe,
            "in-out": pe,
            "out-in": function(a) {
                return pe(oe(a))
            }
        });
    Ug.ease = function(a) {
        var b = a.indexOf("-"),
            c = b >= 0 ? a.substring(0, b) : a,
            d = b >= 0 ? a.substring(b + 1) : "in";
        return c = bj.get(c) || aj, d = cj.get(d) || wb, ne(d(c.apply(null, Vg.call(arguments, 1))))
    }, Ug.interpolateHcl = Ae, Ug.interpolateHsl = Be, Ug.interpolateLab = Ce, Ug.interpolateRound = De, Ug.transform = function(a) {
        var b = Xg.createElementNS(Ug.ns.prefix.svg, "g");
        return (Ug.transform = function(a) {
            if (null != a) {
                b.setAttribute("transform", a);
                var c = b.transform.baseVal.consolidate()
            }
            return new Ee(c ? c.matrix : dj)
        })(a)
    }, Ee.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    };
    var dj = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
    };
    Ug.interpolateTransform = Ie, Ug.layout = {}, Ug.layout.bundle = function() {
        return function(a) {
            for (var b = [], c = -1, d = a.length; ++c < d;) b.push(Le(a[c]));
            return b
        }
    }, Ug.layout.chord = function() {
        function a() {
            var a, j, l, m, n, o = {},
                p = [],
                q = Ug.range(f),
                r = [];
            for (c = [], d = [], a = 0, m = -1; ++m < f;) {
                for (j = 0, n = -1; ++n < f;) j += e[m][n];
                p.push(j), r.push(Ug.range(f)), a += j
            }
            for (g && q.sort(function(a, b) {
                    return g(p[a], p[b])
                }), h && r.forEach(function(a, b) {
                    a.sort(function(a, c) {
                        return h(e[b][a], e[b][c])
                    })
                }), a = (zh - k * f) / a, j = 0, m = -1; ++m < f;) {
                for (l = j, n = -1; ++n < f;) {
                    var s = q[m],
                        t = r[s][n],
                        u = e[s][t],
                        v = j,
                        w = j += u * a;
                    o[s + "-" + t] = {
                        index: s,
                        subindex: t,
                        startAngle: v,
                        endAngle: w,
                        value: u
                    }
                }
                d[s] = {
                    index: s,
                    startAngle: l,
                    endAngle: j,
                    value: (j - l) / a
                }, j += k
            }
            for (m = -1; ++m < f;)
                for (n = m - 1; ++n < f;) {
                    var x = o[m + "-" + n],
                        y = o[n + "-" + m];
                    (x.value || y.value) && c.push(x.value < y.value ? {
                        source: y,
                        target: x
                    } : {
                        source: x,
                        target: y
                    })
                }
            i && b()
        }

        function b() {
            c.sort(function(a, b) {
                return i((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2)
            })
        }
        var c, d, e, f, g, h, i, j = {},
            k = 0;
        return j.matrix = function(a) {
            return arguments.length ? (f = (e = a) && e.length, c = d = null, j) : e
        }, j.padding = function(a) {
            return arguments.length ? (k = a, c = d = null, j) : k
        }, j.sortGroups = function(a) {
            return arguments.length ? (g = a, c = d = null, j) : g
        }, j.sortSubgroups = function(a) {
            return arguments.length ? (h = a, c = null, j) : h
        }, j.sortChords = function(a) {
            return arguments.length ? (i = a, c && b(), j) : i
        }, j.chords = function() {
            return c || a(), c
        }, j.groups = function() {
            return d || a(), d
        }, j
    }, Ug.layout.force = function() {
        function a(a) {
            return function(b, c, d, e) {
                if (b.point !== a) {
                    var f = b.cx - a.x,
                        g = b.cy - a.y,
                        h = e - c,
                        i = f * f + g * g;
                    if (i > h * h / q) {
                        if (o > i) {
                            var j = b.charge / i;
                            a.px -= f * j, a.py -= g * j
                        }
                        return !0
                    }
                    if (b.point && i && o > i) {
                        var j = b.pointCharge / i;
                        a.px -= f * j, a.py -= g * j
                    }
                }
                return !b.charge
            }
        }

        function b(a) {
            a.px = Ug.event.x, a.py = Ug.event.y, h.resume()
        }
        var c, d, e, f, g, h = {},
            i = Ug.dispatch("start", "tick", "end"),
            j = [1, 1],
            k = .9,
            l = ej,
            m = fj,
            n = -30,
            o = gj,
            p = .1,
            q = .64,
            r = [],
            s = [];
        return h.tick = function() {
            if ((d *= .99) < .005) return i.end({
                type: "end",
                alpha: d = 0
            }), !0;
            var b, c, h, l, m, o, q, t, u, v = r.length,
                w = s.length;
            for (c = 0; w > c; ++c) h = s[c], l = h.source, m = h.target, t = m.x - l.x, u = m.y - l.y, (o = t * t + u * u) && (o = d * f[c] * ((o = Math.sqrt(o)) - e[c]) / o, t *= o, u *= o, m.x -= t * (q = l.weight / (m.weight + l.weight)), m.y -= u * q, l.x += t * (q = 1 - q), l.y += u * q);
            if ((q = d * p) && (t = j[0] / 2, u = j[1] / 2, c = -1, q))
                for (; ++c < v;) h = r[c], h.x += (t - h.x) * q, h.y += (u - h.y) * q;
            if (n)
                for (Se(b = Ug.geom.quadtree(r), d, g), c = -1; ++c < v;)(h = r[c]).fixed || b.visit(a(h));
            for (c = -1; ++c < v;) h = r[c], h.fixed ? (h.x = h.px, h.y = h.py) : (h.x -= (h.px - (h.px = h.x)) * k, h.y -= (h.py - (h.py = h.y)) * k);
            i.tick({
                type: "tick",
                alpha: d
            })
        }, h.nodes = function(a) {
            return arguments.length ? (r = a, h) : r
        }, h.links = function(a) {
            return arguments.length ? (s = a, h) : s
        }, h.size = function(a) {
            return arguments.length ? (j = a, h) : j
        }, h.linkDistance = function(a) {
            return arguments.length ? (l = "function" == typeof a ? a : +a, h) : l
        }, h.distance = h.linkDistance, h.linkStrength = function(a) {
            return arguments.length ? (m = "function" == typeof a ? a : +a, h) : m
        }, h.friction = function(a) {
            return arguments.length ? (k = +a, h) : k
        }, h.charge = function(a) {
            return arguments.length ? (n = "function" == typeof a ? a : +a, h) : n
        }, h.chargeDistance = function(a) {
            return arguments.length ? (o = a * a, h) : Math.sqrt(o)
        }, h.gravity = function(a) {
            return arguments.length ? (p = +a, h) : p
        }, h.theta = function(a) {
            return arguments.length ? (q = a * a, h) : Math.sqrt(q)
        }, h.alpha = function(a) {
            return arguments.length ? (a = +a, d ? d = a > 0 ? a : 0 : a > 0 && (i.start({
                type: "start",
                alpha: d = a
            }), Ug.timer(h.tick)), h) : d
        }, h.start = function() {
            function a(a, d) {
                if (!c) {
                    for (c = new Array(i), h = 0; i > h; ++h) c[h] = [];
                    for (h = 0; j > h; ++h) {
                        var e = s[h];
                        c[e.source.index].push(e.target), c[e.target.index].push(e.source)
                    }
                }
                for (var f, g = c[b], h = -1, j = g.length; ++h < j;)
                    if (!isNaN(f = g[h][a])) return f;
                return Math.random() * d
            }
            var b, c, d, i = r.length,
                k = s.length,
                o = j[0],
                p = j[1];
            for (b = 0; i > b; ++b)(d = r[b]).index = b, d.weight = 0;
            for (b = 0; k > b; ++b) d = s[b], "number" == typeof d.source && (d.source = r[d.source]), "number" == typeof d.target && (d.target = r[d.target]), ++d.source.weight, ++d.target.weight;
            for (b = 0; i > b; ++b) d = r[b], isNaN(d.x) && (d.x = a("x", o)), isNaN(d.y) && (d.y = a("y", p)), isNaN(d.px) && (d.px = d.x), isNaN(d.py) && (d.py = d.y);
            if (e = [], "function" == typeof l)
                for (b = 0; k > b; ++b) e[b] = +l.call(this, s[b], b);
            else
                for (b = 0; k > b; ++b) e[b] = l;
            if (f = [], "function" == typeof m)
                for (b = 0; k > b; ++b) f[b] = +m.call(this, s[b], b);
            else
                for (b = 0; k > b; ++b) f[b] = m;
            if (g = [], "function" == typeof n)
                for (b = 0; i > b; ++b) g[b] = +n.call(this, r[b], b);
            else
                for (b = 0; i > b; ++b) g[b] = n;
            return h.resume()
        }, h.resume = function() {
            return h.alpha(.1)
        }, h.stop = function() {
            return h.alpha(0)
        }, h.drag = function() {
            return c || (c = Ug.behavior.drag().origin(wb).on("dragstart.force", Oe).on("drag.force", b).on("dragend.force", Pe)), arguments.length ? (this.on("mouseover.force", Qe).on("mouseout.force", Re).call(c), void 0) : c
        }, Ug.rebind(h, i, "on")
    };
    var ej = 20,
        fj = 1,
        gj = 1 / 0;
    Ug.layout.hierarchy = function() {
        function a(b, g, h) {
            var i = e.call(c, b, g);
            if (b.depth = g, h.push(b), i && (j = i.length)) {
                for (var j, k, l = -1, m = b.children = new Array(j), n = 0, o = g + 1; ++l < j;) k = m[l] = a(i[l], o, h), k.parent = b, n += k.value;
                d && m.sort(d), f && (b.value = n)
            } else delete b.children, f && (b.value = +f.call(c, b, g) || 0);
            return b
        }

        function b(a, d) {
            var e = a.children,
                g = 0;
            if (e && (h = e.length))
                for (var h, i = -1, j = d + 1; ++i < h;) g += b(e[i], j);
            else f && (g = +f.call(c, a, d) || 0);
            return f && (a.value = g), g
        }

        function c(b) {
            var c = [];
            return a(b, 0, c), c
        }
        var d = We,
            e = Ue,
            f = Ve;
        return c.sort = function(a) {
            return arguments.length ? (d = a, c) : d
        }, c.children = function(a) {
            return arguments.length ? (e = a, c) : e
        }, c.value = function(a) {
            return arguments.length ? (f = a, c) : f
        }, c.revalue = function(a) {
            return b(a, 0), a
        }, c
    }, Ug.layout.partition = function() {
        function a(b, c, d, e) {
            var f = b.children;
            if (b.x = c, b.y = b.depth * e, b.dx = d, b.dy = e, f && (g = f.length)) {
                var g, h, i, j = -1;
                for (d = b.value ? d / b.value : 0; ++j < g;) a(h = f[j], c, i = h.value * d, e), c += i
            }
        }

        function b(a) {
            var c = a.children,
                d = 0;
            if (c && (e = c.length))
                for (var e, f = -1; ++f < e;) d = Math.max(d, b(c[f]));
            return 1 + d
        }

        function c(c, f) {
            var g = d.call(this, c, f);
            return a(g[0], 0, e[0], e[1] / b(g[0])), g
        }
        var d = Ug.layout.hierarchy(),
            e = [1, 1];
        return c.size = function(a) {
            return arguments.length ? (e = a, c) : e
        }, Te(c, d)
    }, Ug.layout.pie = function() {
        function a(f) {
            var g = f.map(function(c, d) {
                    return +b.call(a, c, d)
                }),
                h = +("function" == typeof d ? d.apply(this, arguments) : d),
                i = (("function" == typeof e ? e.apply(this, arguments) : e) - h) / Ug.sum(g),
                j = Ug.range(f.length);
            null != c && j.sort(c === hj ? function(a, b) {
                return g[b] - g[a]
            } : function(a, b) {
                return c(f[a], f[b])
            });
            var k = [];
            return j.forEach(function(a) {
                var b;
                k[a] = {
                    data: f[a],
                    value: b = g[a],
                    startAngle: h,
                    endAngle: h += b * i
                }
            }), k
        }
        var b = Number,
            c = hj,
            d = 0,
            e = zh;
        return a.value = function(c) {
            return arguments.length ? (b = c, a) : b
        }, a.sort = function(b) {
            return arguments.length ? (c = b, a) : c
        }, a.startAngle = function(b) {
            return arguments.length ? (d = b, a) : d
        }, a.endAngle = function(b) {
            return arguments.length ? (e = b, a) : e
        }, a
    };
    var hj = {};
    Ug.layout.stack = function() {
        function a(h, i) {
            var j = h.map(function(c, d) {
                    return b.call(a, c, d)
                }),
                k = j.map(function(b) {
                    return b.map(function(b, c) {
                        return [f.call(a, b, c), g.call(a, b, c)]
                    })
                }),
                l = c.call(a, k, i);
            j = Ug.permute(j, l), k = Ug.permute(k, l);
            var m, n, o, p = d.call(a, k, i),
                q = j.length,
                r = j[0].length;
            for (n = 0; r > n; ++n)
                for (e.call(a, j[0][n], o = p[n], k[0][n][1]), m = 1; q > m; ++m) e.call(a, j[m][n], o += k[m - 1][n][1], k[m][n][1]);
            return h
        }
        var b = wb,
            c = _e,
            d = af,
            e = $e,
            f = Ye,
            g = Ze;
        return a.values = function(c) {
            return arguments.length ? (b = c, a) : b
        }, a.order = function(b) {
            return arguments.length ? (c = "function" == typeof b ? b : ij.get(b) || _e, a) : c
        }, a.offset = function(b) {
            return arguments.length ? (d = "function" == typeof b ? b : jj.get(b) || af, a) : d
        }, a.x = function(b) {
            return arguments.length ? (f = b, a) : f
        }, a.y = function(b) {
            return arguments.length ? (g = b, a) : g
        }, a.out = function(b) {
            return arguments.length ? (e = b, a) : e
        }, a
    };
    var ij = Ug.map({
            "inside-out": function(a) {
                var b, c, d = a.length,
                    e = a.map(bf),
                    f = a.map(cf),
                    g = Ug.range(d).sort(function(a, b) {
                        return e[a] - e[b]
                    }),
                    h = 0,
                    i = 0,
                    j = [],
                    k = [];
                for (b = 0; d > b; ++b) c = g[b], i > h ? (h += f[c], j.push(c)) : (i += f[c], k.push(c));
                return k.reverse().concat(j)
            },
            reverse: function(a) {
                return Ug.range(a.length).reverse()
            },
            "default": _e
        }),
        jj = Ug.map({
            silhouette: function(a) {
                var b, c, d, e = a.length,
                    f = a[0].length,
                    g = [],
                    h = 0,
                    i = [];
                for (c = 0; f > c; ++c) {
                    for (b = 0, d = 0; e > b; b++) d += a[b][c][1];
                    d > h && (h = d), g.push(d)
                }
                for (c = 0; f > c; ++c) i[c] = (h - g[c]) / 2;
                return i
            },
            wiggle: function(a) {
                var b, c, d, e, f, g, h, i, j, k = a.length,
                    l = a[0],
                    m = l.length,
                    n = [];
                for (n[0] = i = j = 0, c = 1; m > c; ++c) {
                    for (b = 0, e = 0; k > b; ++b) e += a[b][c][1];
                    for (b = 0, f = 0, h = l[c][0] - l[c - 1][0]; k > b; ++b) {
                        for (d = 0, g = (a[b][c][1] - a[b][c - 1][1]) / (2 * h); b > d; ++d) g += (a[d][c][1] - a[d][c - 1][1]) / h;
                        f += g * a[b][c][1]
                    }
                    n[c] = i -= e ? f / e * h : 0, j > i && (j = i)
                }
                for (c = 0; m > c; ++c) n[c] -= j;
                return n
            },
            expand: function(a) {
                var b, c, d, e = a.length,
                    f = a[0].length,
                    g = 1 / e,
                    h = [];
                for (c = 0; f > c; ++c) {
                    for (b = 0, d = 0; e > b; b++) d += a[b][c][1];
                    if (d)
                        for (b = 0; e > b; b++) a[b][c][1] /= d;
                    else
                        for (b = 0; e > b; b++) a[b][c][1] = g
                }
                for (c = 0; f > c; ++c) h[c] = 0;
                return h
            },
            zero: af
        });
    Ug.layout.histogram = function() {
        function a(a, f) {
            for (var g, h, i = [], j = a.map(c, this), k = d.call(this, j, f), l = e.call(this, k, j, f), f = -1, m = j.length, n = l.length - 1, o = b ? 1 : 1 / m; ++f < n;) g = i[f] = [], g.dx = l[f + 1] - (g.x = l[f]), g.y = 0;
            if (n > 0)
                for (f = -1; ++f < m;) h = j[f], h >= k[0] && h <= k[1] && (g = i[Ug.bisect(l, h, 1, n) - 1], g.y += o, g.push(a[f]));
            return i
        }
        var b = !0,
            c = Number,
            d = gf,
            e = ef;
        return a.value = function(b) {
            return arguments.length ? (c = b, a) : c
        }, a.range = function(b) {
            return arguments.length ? (d = vb(b), a) : d
        }, a.bins = function(b) {
            return arguments.length ? (e = "number" == typeof b ? function(a) {
                return ff(a, b)
            } : vb(b), a) : e
        }, a.frequency = function(c) {
            return arguments.length ? (b = !!c, a) : b
        }, a
    }, Ug.layout.tree = function() {
        function a(a, f) {
            function g(a, b) {
                var d = a.children,
                    e = a._tree;
                if (d && (f = d.length)) {
                    for (var f, h, j, k = d[0], l = k, m = -1; ++m < f;) j = d[m], g(j, h), l = i(j, h, l), h = j;
                    qf(a);
                    var n = .5 * (k._tree.prelim + j._tree.prelim);
                    b ? (e.prelim = b._tree.prelim + c(a, b), e.mod = e.prelim - n) : e.prelim = n
                } else b && (e.prelim = b._tree.prelim + c(a, b))
            }

            function h(a, b) {
                a.x = a._tree.prelim + b;
                var c = a.children;
                if (c && (d = c.length)) {
                    var d, e = -1;
                    for (b += a._tree.mod; ++e < d;) h(c[e], b)
                }
            }

            function i(a, b, d) {
                if (b) {
                    for (var e, f = a, g = a, h = b, i = a.parent.children[0], j = f._tree.mod, k = g._tree.mod, l = h._tree.mod, m = i._tree.mod; h = kf(h), f = jf(f), h && f;) i = jf(i), g = kf(g), g._tree.ancestor = a, e = h._tree.prelim + l - f._tree.prelim - j + c(h, f), e > 0 && (rf(sf(h, a, d), a, e), j += e, k += e), l += h._tree.mod, j += f._tree.mod, m += i._tree.mod, k += g._tree.mod;
                    h && !kf(g) && (g._tree.thread = h, g._tree.mod += l - k), f && !jf(i) && (i._tree.thread = f, i._tree.mod += j - m, d = a)
                }
                return d
            }
            var j = b.call(this, a, f),
                k = j[0];
            pf(k, function(a, b) {
                a._tree = {
                    ancestor: a,
                    prelim: 0,
                    mod: 0,
                    change: 0,
                    shift: 0,
                    number: b ? b._tree.number + 1 : 0
                }
            }), g(k), h(k, -k._tree.prelim);
            var l = lf(k, nf),
                m = lf(k, mf),
                n = lf(k, of),
                o = l.x - c(l, m) / 2,
                p = m.x + c(m, l) / 2,
                q = n.depth || 1;
            return pf(k, e ? function(a) {
                a.x *= d[0], a.y = a.depth * d[1], delete a._tree
            } : function(a) {
                a.x = (a.x - o) / (p - o) * d[0], a.y = a.depth / q * d[1], delete a._tree
            }), j
        }
        var b = Ug.layout.hierarchy().sort(null).value(null),
            c = hf,
            d = [1, 1],
            e = !1;
        return a.separation = function(b) {
            return arguments.length ? (c = b, a) : c
        }, a.size = function(b) {
            return arguments.length ? (e = null == (d = b), a) : e ? null : d
        }, a.nodeSize = function(b) {
            return arguments.length ? (e = null != (d = b), a) : e ? d : null
        }, Te(a, b)
    }, Ug.layout.pack = function() {
        function a(a, f) {
            var g = c.call(this, a, f),
                h = g[0],
                i = e[0],
                j = e[1],
                k = null == b ? Math.sqrt : "function" == typeof b ? b : function() {
                    return b
                };
            if (h.x = h.y = 0, pf(h, function(a) {
                    a.r = +k(a.value)
                }), pf(h, xf), d) {
                var l = d * (b ? 1 : Math.max(2 * h.r / i, 2 * h.r / j)) / 2;
                pf(h, function(a) {
                    a.r += l
                }), pf(h, xf), pf(h, function(a) {
                    a.r -= l
                })
            }
            return Af(h, i / 2, j / 2, b ? 1 : 1 / Math.max(2 * h.r / i, 2 * h.r / j)), g
        }
        var b, c = Ug.layout.hierarchy().sort(tf),
            d = 0,
            e = [1, 1];
        return a.size = function(b) {
            return arguments.length ? (e = b, a) : e
        }, a.radius = function(c) {
            return arguments.length ? (b = null == c || "function" == typeof c ? c : +c, a) : b
        }, a.padding = function(b) {
            return arguments.length ? (d = +b, a) : d
        }, Te(a, c)
    }, Ug.layout.cluster = function() {
        function a(a, f) {
            var g, h = b.call(this, a, f),
                i = h[0],
                j = 0;
            pf(i, function(a) {
                var b = a.children;
                b && b.length ? (a.x = Df(b), a.y = Cf(b)) : (a.x = g ? j += c(a, g) : 0, a.y = 0, g = a)
            });
            var k = Ef(i),
                l = Ff(i),
                m = k.x - c(k, l) / 2,
                n = l.x + c(l, k) / 2;
            return pf(i, e ? function(a) {
                a.x = (a.x - i.x) * d[0], a.y = (i.y - a.y) * d[1]
            } : function(a) {
                a.x = (a.x - m) / (n - m) * d[0], a.y = (1 - (i.y ? a.y / i.y : 1)) * d[1]
            }), h
        }
        var b = Ug.layout.hierarchy().sort(null).value(null),
            c = hf,
            d = [1, 1],
            e = !1;
        return a.separation = function(b) {
            return arguments.length ? (c = b, a) : c
        }, a.size = function(b) {
            return arguments.length ? (e = null == (d = b), a) : e ? null : d
        }, a.nodeSize = function(b) {
            return arguments.length ? (e = null != (d = b), a) : e ? d : null
        }, Te(a, b)
    }, Ug.layout.treemap = function() {
        function a(a, b) {
            for (var c, d, e = -1, f = a.length; ++e < f;) d = (c = a[e]).value * (0 > b ? 0 : b), c.area = isNaN(d) || 0 >= d ? 0 : d
        }

        function b(c) {
            var f = c.children;
            if (f && f.length) {
                var g, h, i, j = l(c),
                    k = [],
                    m = f.slice(),
                    o = 1 / 0,
                    p = "slice" === n ? j.dx : "dice" === n ? j.dy : "slice-dice" === n ? 1 & c.depth ? j.dy : j.dx : Math.min(j.dx, j.dy);
                for (a(m, j.dx * j.dy / c.value), k.area = 0;
                    (i = m.length) > 0;) k.push(g = m[i - 1]), k.area += g.area, "squarify" !== n || (h = d(k, p)) <= o ? (m.pop(), o = h) : (k.area -= k.pop().area, e(k, p, j, !1), p = Math.min(j.dx, j.dy), k.length = k.area = 0, o = 1 / 0);
                k.length && (e(k, p, j, !0), k.length = k.area = 0), f.forEach(b)
            }
        }

        function c(b) {
            var d = b.children;
            if (d && d.length) {
                var f, g = l(b),
                    h = d.slice(),
                    i = [];
                for (a(h, g.dx * g.dy / b.value), i.area = 0; f = h.pop();) i.push(f), i.area += f.area, null != f.z && (e(i, f.z ? g.dx : g.dy, g, !h.length), i.length = i.area = 0);
                d.forEach(c)
            }
        }

        function d(a, b) {
            for (var c, d = a.area, e = 0, f = 1 / 0, g = -1, h = a.length; ++g < h;)(c = a[g].area) && (f > c && (f = c), c > e && (e = c));
            return d *= d, b *= b, d ? Math.max(b * e * o / d, d / (b * f * o)) : 1 / 0
        }

        function e(a, b, c, d) {
            var e, f = -1,
                g = a.length,
                h = c.x,
                j = c.y,
                k = b ? i(a.area / b) : 0;
            if (b == c.dx) {
                for ((d || k > c.dy) && (k = c.dy); ++f < g;) e = a[f], e.x = h, e.y = j, e.dy = k, h += e.dx = Math.min(c.x + c.dx - h, k ? i(e.area / k) : 0);
                e.z = !0, e.dx += c.x + c.dx - h, c.y += k, c.dy -= k
            } else {
                for ((d || k > c.dx) && (k = c.dx); ++f < g;) e = a[f], e.x = h, e.y = j, e.dx = k, j += e.dy = Math.min(c.y + c.dy - j, k ? i(e.area / k) : 0);
                e.z = !1, e.dy += c.y + c.dy - j, c.x += k, c.dx -= k
            }
        }

        function f(d) {
            var e = g || h(d),
                f = e[0];
            return f.x = 0, f.y = 0, f.dx = j[0], f.dy = j[1], g && h.revalue(f), a([f], f.dx * f.dy / f.value), (g ? c : b)(f), m && (g = e), e
        }
        var g, h = Ug.layout.hierarchy(),
            i = Math.round,
            j = [1, 1],
            k = null,
            l = Gf,
            m = !1,
            n = "squarify",
            o = .5 * (1 + Math.sqrt(5));
        return f.size = function(a) {
            return arguments.length ? (j = a, f) : j
        }, f.padding = function(a) {
            function b(b) {
                var c = a.call(f, b, b.depth);
                return null == c ? Gf(b) : Hf(b, "number" == typeof c ? [c, c, c, c] : c)
            }

            function c(b) {
                return Hf(b, a)
            }
            if (!arguments.length) return k;
            var d;
            return l = null == (k = a) ? Gf : "function" == (d = typeof a) ? b : "number" === d ? (a = [a, a, a, a], c) : c, f
        }, f.round = function(a) {
            return arguments.length ? (i = a ? Math.round : Number, f) : i != Number
        }, f.sticky = function(a) {
            return arguments.length ? (m = a, g = null, f) : m
        }, f.ratio = function(a) {
            return arguments.length ? (o = a, f) : o
        }, f.mode = function(a) {
            return arguments.length ? (n = a + "", f) : n
        }, Te(f, h)
    }, Ug.random = {
        normal: function(a, b) {
            var c = arguments.length;
            return 2 > c && (b = 1), 1 > c && (a = 0),
                function() {
                    var c, d, e;
                    do c = 2 * Math.random() - 1, d = 2 * Math.random() - 1, e = c * c + d * d; while (!e || e > 1);
                    return a + b * c * Math.sqrt(-2 * Math.log(e) / e)
                }
        },
        logNormal: function() {
            var a = Ug.random.normal.apply(Ug, arguments);
            return function() {
                return Math.exp(a())
            }
        },
        bates: function(a) {
            var b = Ug.random.irwinHall(a);
            return function() {
                return b() / a
            }
        },
        irwinHall: function(a) {
            return function() {
                for (var b = 0, c = 0; a > c; c++) b += Math.random();
                return b
            }
        }
    }, Ug.scale = {};
    var kj = {
        floor: wb,
        ceil: wb
    };
    Ug.scale.linear = function() {
        return Of([0, 1], [0, 1], le, !1)
    };
    var lj = {
        s: 1,
        g: 1,
        p: 1,
        r: 1,
        e: 1
    };
    Ug.scale.log = function() {
        return Wf(Ug.scale.linear().domain([0, 1]), 10, !0, [1, 10])
    };
    var mj = Ug.format(".0e"),
        nj = {
            floor: function(a) {
                return -Math.ceil(-a)
            },
            ceil: function(a) {
                return -Math.floor(-a)
            }
        };
    Ug.scale.pow = function() {
        return Xf(Ug.scale.linear(), 1, [0, 1])
    }, Ug.scale.sqrt = function() {
        return Ug.scale.pow().exponent(.5)
    }, Ug.scale.ordinal = function() {
        return Zf([], {
            t: "range",
            a: [
                []
            ]
        })
    }, Ug.scale.category10 = function() {
        return Ug.scale.ordinal().range(oj)
    }, Ug.scale.category20 = function() {
        return Ug.scale.ordinal().range(pj)
    }, Ug.scale.category20b = function() {
        return Ug.scale.ordinal().range(qj)
    }, Ug.scale.category20c = function() {
        return Ug.scale.ordinal().range(rj)
    };
    var oj = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(mb),
        pj = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(mb),
        qj = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(mb),
        rj = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(mb);
    Ug.scale.quantile = function() {
        return $f([], [])
    }, Ug.scale.quantize = function() {
        return _f(0, 1, [0, 1])
    }, Ug.scale.threshold = function() {
        return ag([.5], [0, 1])
    }, Ug.scale.identity = function() {
        return bg([0, 1])
    }, Ug.svg = {}, Ug.svg.arc = function() {
        function a() {
            var a = b.apply(this, arguments),
                f = c.apply(this, arguments),
                g = d.apply(this, arguments) + sj,
                h = e.apply(this, arguments) + sj,
                i = (g > h && (i = g, g = h, h = i), h - g),
                j = yh > i ? "0" : "1",
                k = Math.cos(g),
                l = Math.sin(g),
                m = Math.cos(h),
                n = Math.sin(h);
            return i >= tj ? a ? "M0," + f + "A" + f + "," + f + " 0 1,1 0," + -f + "A" + f + "," + f + " 0 1,1 0," + f + "M0," + a + "A" + a + "," + a + " 0 1,0 0," + -a + "A" + a + "," + a + " 0 1,0 0," + a + "Z" : "M0," + f + "A" + f + "," + f + " 0 1,1 0," + -f + "A" + f + "," + f + " 0 1,1 0," + f + "Z" : a ? "M" + f * k + "," + f * l + "A" + f + "," + f + " 0 " + j + ",1 " + f * m + "," + f * n + "L" + a * m + "," + a * n + "A" + a + "," + a + " 0 " + j + ",0 " + a * k + "," + a * l + "Z" : "M" + f * k + "," + f * l + "A" + f + "," + f + " 0 " + j + ",1 " + f * m + "," + f * n + "L0,0" + "Z"
        }
        var b = cg,
            c = dg,
            d = eg,
            e = fg;
        return a.innerRadius = function(c) {
            return arguments.length ? (b = vb(c), a) : b
        }, a.outerRadius = function(b) {
            return arguments.length ? (c = vb(b), a) : c
        }, a.startAngle = function(b) {
            return arguments.length ? (d = vb(b), a) : d
        }, a.endAngle = function(b) {
            return arguments.length ? (e = vb(b), a) : e
        }, a.centroid = function() {
            var a = (b.apply(this, arguments) + c.apply(this, arguments)) / 2,
                f = (d.apply(this, arguments) + e.apply(this, arguments)) / 2 + sj;
            return [Math.cos(f) * a, Math.sin(f) * a]
        }, a
    };
    var sj = -Ah,
        tj = zh - Bh;
    Ug.svg.line = function() {
        return gg(wb)
    };
    var uj = Ug.map({
        linear: hg,
        "linear-closed": ig,
        step: jg,
        "step-before": kg,
        "step-after": lg,
        basis: rg,
        "basis-open": sg,
        "basis-closed": tg,
        bundle: ug,
        cardinal: og,
        "cardinal-open": mg,
        "cardinal-closed": ng,
        monotone: Ag
    });
    uj.forEach(function(a, b) {
        b.key = a, b.closed = /-closed$/.test(a)
    });
    var vj = [0, 2 / 3, 1 / 3, 0],
        wj = [0, 1 / 3, 2 / 3, 0],
        xj = [0, 1 / 6, 2 / 3, 1 / 6];
    Ug.svg.line.radial = function() {
        var a = gg(Bg);
        return a.radius = a.x, delete a.x, a.angle = a.y, delete a.y, a
    }, kg.reverse = lg, lg.reverse = kg, Ug.svg.area = function() {
        return Cg(wb)
    }, Ug.svg.area.radial = function() {
        var a = Cg(Bg);
        return a.radius = a.x, delete a.x, a.innerRadius = a.x0, delete a.x0, a.outerRadius = a.x1, delete a.x1, a.angle = a.y, delete a.y, a.startAngle = a.y0, delete a.y0, a.endAngle = a.y1, delete a.y1, a
    }, Ug.svg.chord = function() {
        function a(a, h) {
            var i = b(this, f, a, h),
                j = b(this, g, a, h);
            return "M" + i.p0 + d(i.r, i.p1, i.a1 - i.a0) + (c(i, j) ? e(i.r, i.p1, i.r, i.p0) : e(i.r, i.p1, j.r, j.p0) + d(j.r, j.p1, j.a1 - j.a0) + e(j.r, j.p1, i.r, i.p0)) + "Z"
        }

        function b(a, b, c, d) {
            var e = b.call(a, c, d),
                f = h.call(a, e, d),
                g = i.call(a, e, d) + sj,
                k = j.call(a, e, d) + sj;
            return {
                r: f,
                a0: g,
                a1: k,
                p0: [f * Math.cos(g), f * Math.sin(g)],
                p1: [f * Math.cos(k), f * Math.sin(k)]
            }
        }

        function c(a, b) {
            return a.a0 == b.a0 && a.a1 == b.a1
        }

        function d(a, b, c) {
            return "A" + a + "," + a + " 0 " + +(c > yh) + ",1 " + b
        }

        function e(a, b, c, d) {
            return "Q 0,0 " + d
        }
        var f = md,
            g = nd,
            h = Dg,
            i = eg,
            j = fg;
        return a.radius = function(b) {
            return arguments.length ? (h = vb(b), a) : h
        }, a.source = function(b) {
            return arguments.length ? (f = vb(b), a) : f
        }, a.target = function(b) {
            return arguments.length ? (g = vb(b), a) : g
        }, a.startAngle = function(b) {
            return arguments.length ? (i = vb(b), a) : i
        }, a.endAngle = function(b) {
            return arguments.length ? (j = vb(b), a) : j
        }, a
    }, Ug.svg.diagonal = function() {
        function a(a, e) {
            var f = b.call(this, a, e),
                g = c.call(this, a, e),
                h = (f.y + g.y) / 2,
                i = [f, {
                    x: f.x,
                    y: h
                }, {
                    x: g.x,
                    y: h
                }, g];
            return i = i.map(d), "M" + i[0] + "C" + i[1] + " " + i[2] + " " + i[3]
        }
        var b = md,
            c = nd,
            d = Eg;
        return a.source = function(c) {
            return arguments.length ? (b = vb(c), a) : b
        }, a.target = function(b) {
            return arguments.length ? (c = vb(b), a) : c
        }, a.projection = function(b) {
            return arguments.length ? (d = b, a) : d
        }, a
    }, Ug.svg.diagonal.radial = function() {
        var a = Ug.svg.diagonal(),
            b = Eg,
            c = a.projection;
        return a.projection = function(a) {
            return arguments.length ? c(Fg(b = a)) : b
        }, a
    }, Ug.svg.symbol = function() {
        function a(a, d) {
            return (yj.get(b.call(this, a, d)) || Ig)(c.call(this, a, d))
        }
        var b = Hg,
            c = Gg;
        return a.type = function(c) {
            return arguments.length ? (b = vb(c), a) : b
        }, a.size = function(b) {
            return arguments.length ? (c = vb(b), a) : c
        }, a
    };
    var yj = Ug.map({
        circle: Ig,
        cross: function(a) {
            var b = Math.sqrt(a / 5) / 2;
            return "M" + -3 * b + "," + -b + "H" + -b + "V" + -3 * b + "H" + b + "V" + -b + "H" + 3 * b + "V" + b + "H" + b + "V" + 3 * b + "H" + -b + "V" + b + "H" + -3 * b + "Z"
        },
        diamond: function(a) {
            var b = Math.sqrt(a / (2 * Cj)),
                c = b * Cj;
            return "M0," + -b + "L" + c + ",0" + " 0," + b + " " + -c + ",0" + "Z"
        },
        square: function(a) {
            var b = Math.sqrt(a) / 2;
            return "M" + -b + "," + -b + "L" + b + "," + -b + " " + b + "," + b + " " + -b + "," + b + "Z"
        },
        "triangle-down": function(a) {
            var b = Math.sqrt(a / Bj),
                c = b * Bj / 2;
            return "M0," + c + "L" + b + "," + -c + " " + -b + "," + -c + "Z"
        },
        "triangle-up": function(a) {
            var b = Math.sqrt(a / Bj),
                c = b * Bj / 2;
            return "M0," + -c + "L" + b + "," + c + " " + -b + "," + c + "Z"
        }
    });
    Ug.svg.symbolTypes = yj.keys();
    var zj, Aj, Bj = Math.sqrt(3),
        Cj = Math.tan(30 * Dh),
        Dj = [],
        Ej = 0;
    Dj.call = qh.call, Dj.empty = qh.empty, Dj.node = qh.node, Dj.size = qh.size, Ug.transition = function(a) {
        return arguments.length ? zj ? a.transition() : a : th.transition()
    }, Ug.transition.prototype = Dj, Dj.select = function(a) {
        var b, c, d, e = this.id,
            f = [];
        a = u(a);
        for (var g = -1, h = this.length; ++g < h;) {
            f.push(b = []);
            for (var i = this[g], j = -1, k = i.length; ++j < k;)(d = i[j]) && (c = a.call(d, d.__data__, j, g)) ? ("__data__" in d && (c.__data__ = d.__data__), Mg(c, j, e, d.__transition__[e]), b.push(c)) : b.push(null)
        }
        return Jg(f, e)
    }, Dj.selectAll = function(a) {
        var b, c, d, e, f, g = this.id,
            h = [];
        a = v(a);
        for (var i = -1, j = this.length; ++i < j;)
            for (var k = this[i], l = -1, m = k.length; ++l < m;)
                if (d = k[l]) {
                    f = d.__transition__[g], c = a.call(d, d.__data__, l, i), h.push(b = []);
                    for (var n = -1, o = c.length; ++n < o;)(e = c[n]) && Mg(e, n, g, f), b.push(e)
                }
        return Jg(h, g)
    }, Dj.filter = function(a) {
        var b, c, d, e = [];
        "function" != typeof a && (a = G(a));
        for (var f = 0, g = this.length; g > f; f++) {
            e.push(b = []);
            for (var c = this[f], h = 0, i = c.length; i > h; h++)(d = c[h]) && a.call(d, d.__data__, h, f) && b.push(d)
        }
        return Jg(e, this.id)
    }, Dj.tween = function(a, b) {
        var c = this.id;
        return arguments.length < 2 ? this.node().__transition__[c].tween.get(a) : I(this, null == b ? function(b) {
            b.__transition__[c].tween.remove(a)
        } : function(d) {
            d.__transition__[c].tween.set(a, b)
        })
    }, Dj.attr = function(a, b) {
        function c() {
            this.removeAttribute(h)
        }

        function d() {
            this.removeAttributeNS(h.space, h.local)
        }

        function e(a) {
            return null == a ? c : (a += "", function() {
                var b, c = this.getAttribute(h);
                return c !== a && (b = g(c, a), function(a) {
                    this.setAttribute(h, b(a))
                })
            })
        }

        function f(a) {
            return null == a ? d : (a += "", function() {
                var b, c = this.getAttributeNS(h.space, h.local);
                return c !== a && (b = g(c, a), function(a) {
                    this.setAttributeNS(h.space, h.local, b(a))
                })
            })
        }
        if (arguments.length < 2) {
            for (b in a) this.attr(b, a[b]);
            return this
        }
        var g = "transform" == a ? Ie : le,
            h = Ug.ns.qualify(a);
        return Kg(this, "attr." + a, b, h.local ? f : e)
    }, Dj.attrTween = function(a, b) {
        function c(a, c) {
            var d = b.call(this, a, c, this.getAttribute(e));
            return d && function(a) {
                this.setAttribute(e, d(a))
            }
        }

        function d(a, c) {
            var d = b.call(this, a, c, this.getAttributeNS(e.space, e.local));
            return d && function(a) {
                this.setAttributeNS(e.space, e.local, d(a))
            }
        }
        var e = Ug.ns.qualify(a);
        return this.tween("attr." + a, e.local ? d : c)
    }, Dj.style = function(a, b, c) {
        function d() {
            this.style.removeProperty(a)
        }

        function e(b) {
            return null == b ? d : (b += "", function() {
                var d, e = Zg.getComputedStyle(this, null).getPropertyValue(a);
                return e !== b && (d = le(e, b), function(b) {
                    this.style.setProperty(a, d(b), c)
                })
            })
        }
        var f = arguments.length;
        if (3 > f) {
            if ("string" != typeof a) {
                2 > f && (b = "");
                for (c in a) this.style(c, a[c], b);
                return this
            }
            c = ""
        }
        return Kg(this, "style." + a, b, e)
    }, Dj.styleTween = function(a, b, c) {
        function d(d, e) {
            var f = b.call(this, d, e, Zg.getComputedStyle(this, null).getPropertyValue(a));
            return f && function(b) {
                this.style.setProperty(a, f(b), c)
            }
        }
        return arguments.length < 3 && (c = ""), this.tween("style." + a, d)
    }, Dj.text = function(a) {
        return Kg(this, "text", a, Lg)
    }, Dj.remove = function() {
        return this.each("end.transition", function() {
            var a;
            this.__transition__.count < 2 && (a = this.parentNode) && a.removeChild(this)
        })
    }, Dj.ease = function(a) {
        var b = this.id;
        return arguments.length < 1 ? this.node().__transition__[b].ease : ("function" != typeof a && (a = Ug.ease.apply(Ug, arguments)), I(this, function(c) {
            c.__transition__[b].ease = a
        }))
    }, Dj.delay = function(a) {
        var b = this.id;
        return I(this, "function" == typeof a ? function(c, d, e) {
            c.__transition__[b].delay = +a.call(c, c.__data__, d, e)
        } : (a = +a, function(c) {
            c.__transition__[b].delay = a
        }))
    }, Dj.duration = function(a) {
        var b = this.id;
        return I(this, "function" == typeof a ? function(c, d, e) {
            c.__transition__[b].duration = Math.max(1, a.call(c, c.__data__, d, e))
        } : (a = Math.max(1, a), function(c) {
            c.__transition__[b].duration = a
        }))
    }, Dj.each = function(a, b) {
        var c = this.id;
        if (arguments.length < 2) {
            var d = Aj,
                e = zj;
            zj = c, I(this, function(b, d, e) {
                Aj = b.__transition__[c], a.call(b, b.__data__, d, e)
            }), Aj = d, zj = e
        } else I(this, function(d) {
            var e = d.__transition__[c];
            (e.event || (e.event = Ug.dispatch("start", "end"))).on(a, b)
        });
        return this
    }, Dj.transition = function() {
        for (var a, b, c, d, e = this.id, f = ++Ej, g = [], h = 0, i = this.length; i > h; h++) {
            g.push(a = []);
            for (var b = this[h], j = 0, k = b.length; k > j; j++)(c = b[j]) && (d = Object.create(c.__transition__[e]), d.delay += d.duration, Mg(c, j, f, d)), a.push(c)
        }
        return Jg(g, f)
    }, Ug.svg.axis = function() {
        function a(a) {
            a.each(function() {
                var a, j = Ug.select(this),
                    k = this.__chart__ || c,
                    l = this.__chart__ = c.copy(),
                    m = null == i ? l.ticks ? l.ticks.apply(l, h) : l.domain() : i,
                    n = null == b ? l.tickFormat ? l.tickFormat.apply(l, h) : wb : b,
                    o = j.selectAll(".tick").data(m, l),
                    p = o.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Bh),
                    q = Ug.transition(o.exit()).style("opacity", Bh).remove(),
                    r = Ug.transition(o).style("opacity", 1),
                    s = Jf(l),
                    t = j.selectAll(".domain").data([0]),
                    u = (t.enter().append("path").attr("class", "domain"), Ug.transition(t));
                p.append("line"), p.append("text");
                var v = p.select("line"),
                    w = r.select("line"),
                    x = o.select("text").text(n),
                    y = p.select("text"),
                    z = r.select("text");
                switch (d) {
                    case "bottom":
                        a = Ng, v.attr("y2", e), y.attr("y", Math.max(e, 0) + g), w.attr("x2", 0).attr("y2", e), z.attr("x", 0).attr("y", Math.max(e, 0) + g), x.attr("dy", ".71em").style("text-anchor", "middle"), u.attr("d", "M" + s[0] + "," + f + "V0H" + s[1] + "V" + f);
                        break;
                    case "top":
                        a = Ng, v.attr("y2", -e), y.attr("y", -(Math.max(e, 0) + g)), w.attr("x2", 0).attr("y2", -e), z.attr("x", 0).attr("y", -(Math.max(e, 0) + g)), x.attr("dy", "0em").style("text-anchor", "middle"), u.attr("d", "M" + s[0] + "," + -f + "V0H" + s[1] + "V" + -f);
                        break;
                    case "left":
                        a = Og, v.attr("x2", -e), y.attr("x", -(Math.max(e, 0) + g)), w.attr("x2", -e).attr("y2", 0), z.attr("x", -(Math.max(e, 0) + g)).attr("y", 0), x.attr("dy", ".32em").style("text-anchor", "end"), u.attr("d", "M" + -f + "," + s[0] + "H0V" + s[1] + "H" + -f);
                        break;
                    case "right":
                        a = Og, v.attr("x2", e), y.attr("x", Math.max(e, 0) + g), w.attr("x2", e).attr("y2", 0), z.attr("x", Math.max(e, 0) + g).attr("y", 0), x.attr("dy", ".32em").style("text-anchor", "start"), u.attr("d", "M" + f + "," + s[0] + "H0V" + s[1] + "H" + f)
                }
                if (l.rangeBand) {
                    var A = l,
                        B = A.rangeBand() / 2;
                    k = l = function(a) {
                        return A(a) + B
                    }
                } else k.rangeBand ? k = l : q.call(a, l);
                p.call(a, k), r.call(a, l)
            })
        }
        var b, c = Ug.scale.linear(),
            d = Fj,
            e = 6,
            f = 6,
            g = 3,
            h = [10],
            i = null;
        return a.scale = function(b) {
            return arguments.length ? (c = b, a) : c
        }, a.orient = function(b) {
            return arguments.length ? (d = b in Gj ? b + "" : Fj, a) : d
        }, a.ticks = function() {
            return arguments.length ? (h = arguments, a) : h
        }, a.tickValues = function(b) {
            return arguments.length ? (i = b, a) : i
        }, a.tickFormat = function(c) {
            return arguments.length ? (b = c, a) : b
        }, a.tickSize = function(b) {
            var c = arguments.length;
            return c ? (e = +b, f = +arguments[c - 1], a) : e
        }, a.innerTickSize = function(b) {
            return arguments.length ? (e = +b, a) : e
        }, a.outerTickSize = function(b) {
            return arguments.length ? (f = +b, a) : f
        }, a.tickPadding = function(b) {
            return arguments.length ? (g = +b, a) : g
        }, a.tickSubdivide = function() {
            return arguments.length && a
        }, a
    };
    var Fj = "bottom",
        Gj = {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1
        };
    Ug.svg.brush = function() {
        function a(f) {
            f.each(function() {
                var f = Ug.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", e).on("touchstart.brush", e),
                    g = f.selectAll(".background").data([0]);
                g.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), f.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                var h = f.selectAll(".resize").data(o, wb);
                h.exit().remove(), h.enter().append("g").attr("class", function(a) {
                    return "resize " + a
                }).style("cursor", function(a) {
                    return Hj[a]
                }).append("rect").attr("x", function(a) {
                    return /[ew]$/.test(a) ? -3 : null
                }).attr("y", function(a) {
                    return /^[ns]/.test(a) ? -3 : null
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), h.style("display", a.empty() ? "none" : null);
                var k, l = Ug.transition(f),
                    m = Ug.transition(g);
                i && (k = Jf(i), m.attr("x", k[0]).attr("width", k[1] - k[0]), c(l)), j && (k = Jf(j), m.attr("y", k[0]).attr("height", k[1] - k[0]), d(l)), b(l)
            })
        }

        function b(a) {
            a.selectAll(".resize").attr("transform", function(a) {
                return "translate(" + k[+/e$/.test(a)] + "," + l[+/^s/.test(a)] + ")"
            })
        }

        function c(a) {
            a.select(".extent").attr("x", k[0]), a.selectAll(".extent,.n>rect,.s>rect").attr("width", k[1] - k[0])
        }

        function d(a) {
            a.select(".extent").attr("y", l[0]), a.selectAll(".extent,.e>rect,.w>rect").attr("height", l[1] - l[0])
        }

        function e() {
            function e() {
                32 == Ug.event.keyCode && (C || (t = null, E[0] -= k[1], E[1] -= l[1], C = 2), q())
            }

            function o() {
                32 == Ug.event.keyCode && 2 == C && (E[0] += k[1], E[1] += l[1], C = 0, q())
            }

            function p() {
                var a = Ug.mouse(v),
                    e = !1;
                u && (a[0] += u[0], a[1] += u[1]), C || (Ug.event.altKey ? (t || (t = [(k[0] + k[1]) / 2, (l[0] + l[1]) / 2]), E[0] = k[+(a[0] < t[0])], E[1] = l[+(a[1] < t[1])]) : t = null), A && r(a, i, 0) && (c(y), e = !0), B && r(a, j, 1) && (d(y), e = !0), e && (b(y), x({
                    type: "brush",
                    mode: C ? "move" : "resize"
                }))
            }

            function r(a, b, c) {
                var d, e, h = Jf(b),
                    i = h[0],
                    j = h[1],
                    o = E[c],
                    p = c ? l : k,
                    q = p[1] - p[0];
                return C && (i -= o, j -= q + o), d = (c ? n : m) ? Math.max(i, Math.min(j, a[c])) : a[c], C ? e = (d += o) + q : (t && (o = Math.max(i, Math.min(j, 2 * t[c] - d))), d > o ? (e = d, d = o) : e = o), p[0] != d || p[1] != e ? (c ? g = null : f = null, p[0] = d, p[1] = e, !0) : void 0
            }

            function s() {
                p(), y.style("pointer-events", "all").selectAll(".resize").style("display", a.empty() ? "none" : null), Ug.select("body").style("cursor", null), F.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), D(), x({
                    type: "brushend"
                })
            }
            var t, u, v = this,
                w = Ug.select(Ug.event.target),
                x = h.of(v, arguments),
                y = Ug.select(v),
                z = w.datum(),
                A = !/^(n|s)$/.test(z) && i,
                B = !/^(e|w)$/.test(z) && j,
                C = w.classed("extent"),
                D = P(),
                E = Ug.mouse(v),
                F = Ug.select(Zg).on("keydown.brush", e).on("keyup.brush", o);
            if (Ug.event.changedTouches ? F.on("touchmove.brush", p).on("touchend.brush", s) : F.on("mousemove.brush", p).on("mouseup.brush", s), y.interrupt().selectAll("*").interrupt(), C) E[0] = k[0] - E[0], E[1] = l[0] - E[1];
            else if (z) {
                var G = +/w$/.test(z),
                    H = +/^n/.test(z);
                u = [k[1 - G] - E[0], l[1 - H] - E[1]], E[0] = k[G], E[1] = l[H]
            } else Ug.event.altKey && (t = E.slice());
            y.style("pointer-events", "none").selectAll(".resize").style("display", null), Ug.select("body").style("cursor", w.style("cursor")), x({
                type: "brushstart"
            }), p()
        }
        var f, g, h = s(a, "brushstart", "brush", "brushend"),
            i = null,
            j = null,
            k = [0, 0],
            l = [0, 0],
            m = !0,
            n = !0,
            o = Ij[0];
        return a.event = function(a) {
            a.each(function() {
                var a = h.of(this, arguments),
                    b = {
                        x: k,
                        y: l,
                        i: f,
                        j: g
                    },
                    c = this.__chart__ || b;
                this.__chart__ = b, zj ? Ug.select(this).transition().each("start.brush", function() {
                    f = c.i, g = c.j, k = c.x, l = c.y, a({
                        type: "brushstart"
                    })
                }).tween("brush:brush", function() {
                    var c = me(k, b.x),
                        d = me(l, b.y);
                    return f = g = null,
                        function(e) {
                            k = b.x = c(e), l = b.y = d(e), a({
                                type: "brush",
                                mode: "resize"
                            })
                        }
                }).each("end.brush", function() {
                    f = b.i, g = b.j, a({
                        type: "brush",
                        mode: "resize"
                    }), a({
                        type: "brushend"
                    })
                }) : (a({
                    type: "brushstart"
                }), a({
                    type: "brush",
                    mode: "resize"
                }), a({
                    type: "brushend"
                }))
            })
        }, a.x = function(b) {
            return arguments.length ? (i = b, o = Ij[!i << 1 | !j], a) : i
        }, a.y = function(b) {
            return arguments.length ? (j = b, o = Ij[!i << 1 | !j], a) : j
        }, a.clamp = function(b) {
            return arguments.length ? (i && j ? (m = !!b[0], n = !!b[1]) : i ? m = !!b : j && (n = !!b), a) : i && j ? [m, n] : i ? m : j ? n : null
        }, a.extent = function(b) {
            var c, d, e, h, m;
            return arguments.length ? (i && (c = b[0], d = b[1], j && (c = c[0], d = d[0]), f = [c, d], i.invert && (c = i(c), d = i(d)), c > d && (m = c, c = d, d = m), (c != k[0] || d != k[1]) && (k = [c, d])), j && (e = b[0], h = b[1], i && (e = e[1], h = h[1]), g = [e, h], j.invert && (e = j(e), h = j(h)), e > h && (m = e, e = h, h = m), (e != l[0] || h != l[1]) && (l = [e, h])), a) : (i && (f ? (c = f[0], d = f[1]) : (c = k[0], d = k[1], i.invert && (c = i.invert(c), d = i.invert(d)), c > d && (m = c, c = d, d = m))), j && (g ? (e = g[0], h = g[1]) : (e = l[0], h = l[1], j.invert && (e = j.invert(e), h = j.invert(h)), e > h && (m = e, e = h, h = m))), i && j ? [
                [c, e],
                [d, h]
            ] : i ? [c, d] : j && [e, h])
        }, a.clear = function() {
            return a.empty() || (k = [0, 0], l = [0, 0], f = g = null), a
        }, a.empty = function() {
            return !!i && k[0] == k[1] || !!j && l[0] == l[1]
        }, Ug.rebind(a, h, "on")
    };
    var Hj = {
            n: "ns-resize",
            e: "ew-resize",
            s: "ns-resize",
            w: "ew-resize",
            nw: "nwse-resize",
            ne: "nesw-resize",
            se: "nwse-resize",
            sw: "nesw-resize"
        },
        Ij = [
            ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
            ["e", "w"],
            ["n", "s"],
            []
        ],
        Jj = bi.format = hi.timeFormat,
        Kj = Jj.utc,
        Lj = Kj("%Y-%m-%dT%H:%M:%S.%LZ");
    Jj.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? Pg : Lj, Pg.parse = function(a) {
        var b = new Date(a);
        return isNaN(b) ? null : b
    }, Pg.toString = Lj.toString, bi.second = Ib(function(a) {
        return new ci(1e3 * Math.floor(a / 1e3))
    }, function(a, b) {
        a.setTime(a.getTime() + 1e3 * Math.floor(b))
    }, function(a) {
        return a.getSeconds()
    }), bi.seconds = bi.second.range, bi.seconds.utc = bi.second.utc.range, bi.minute = Ib(function(a) {
        return new ci(6e4 * Math.floor(a / 6e4))
    }, function(a, b) {
        a.setTime(a.getTime() + 6e4 * Math.floor(b))
    }, function(a) {
        return a.getMinutes()
    }), bi.minutes = bi.minute.range, bi.minutes.utc = bi.minute.utc.range, bi.hour = Ib(function(a) {
        var b = a.getTimezoneOffset() / 60;
        return new ci(36e5 * (Math.floor(a / 36e5 - b) + b))
    }, function(a, b) {
        a.setTime(a.getTime() + 36e5 * Math.floor(b))
    }, function(a) {
        return a.getHours()
    }), bi.hours = bi.hour.range, bi.hours.utc = bi.hour.utc.range, bi.month = Ib(function(a) {
        return a = bi.day(a), a.setDate(1), a
    }, function(a, b) {
        a.setMonth(a.getMonth() + b)
    }, function(a) {
        return a.getMonth()
    }), bi.months = bi.month.range, bi.months.utc = bi.month.utc.range;
    var Mj = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
        Nj = [
            [bi.second, 1],
            [bi.second, 5],
            [bi.second, 15],
            [bi.second, 30],
            [bi.minute, 1],
            [bi.minute, 5],
            [bi.minute, 15],
            [bi.minute, 30],
            [bi.hour, 1],
            [bi.hour, 3],
            [bi.hour, 6],
            [bi.hour, 12],
            [bi.day, 1],
            [bi.day, 2],
            [bi.week, 1],
            [bi.month, 1],
            [bi.month, 3],
            [bi.year, 1]
        ],
        Oj = Jj.multi([
            [".%L", function(a) {
                return a.getMilliseconds()
            }],
            [":%S", function(a) {
                return a.getSeconds()
            }],
            ["%I:%M", function(a) {
                return a.getMinutes()
            }],
            ["%I %p", function(a) {
                return a.getHours()
            }],
            ["%a %d", function(a) {
                return a.getDay() && 1 != a.getDate()
            }],
            ["%b %d", function(a) {
                return 1 != a.getDate()
            }],
            ["%B", function(a) {
                return a.getMonth()
            }],
            ["%Y", wc]
        ]),
        Pj = {
            range: function(a, b, c) {
                return Ug.range(+a, +b, c).map(Rg)
            },
            floor: wb,
            ceil: wb
        };
    Nj.year = bi.year, bi.scale = function() {
        return Qg(Ug.scale.linear(), Nj, Oj)
    };
    var Qj = Nj.map(function(a) {
            return [a[0].utc, a[1]]
        }),
        Rj = Kj.multi([
            [".%L", function(a) {
                return a.getUTCMilliseconds()
            }],
            [":%S", function(a) {
                return a.getUTCSeconds()
            }],
            ["%I:%M", function(a) {
                return a.getUTCMinutes()
            }],
            ["%I %p", function(a) {
                return a.getUTCHours()
            }],
            ["%a %d", function(a) {
                return a.getUTCDay() && 1 != a.getUTCDate()
            }],
            ["%b %d", function(a) {
                return 1 != a.getUTCDate()
            }],
            ["%B", function(a) {
                return a.getUTCMonth()
            }],
            ["%Y", wc]
        ]);
    Qj.year = bi.year.utc, bi.scale.utc = function() {
        return Qg(Ug.scale.linear(), Qj, Rj)
    }, Ug.text = xb(function(a) {
        return a.responseText
    }), Ug.json = function(a, b) {
        return yb(a, "application/json", Sg, b)
    }, Ug.html = function(a, b) {
        return yb(a, "text/html", Tg, b)
    }, Ug.xml = xb(function(a) {
        return a.responseXML
    }), "function" == typeof define && define.amd ? define(Ug) : "object" == typeof module && module.exports ? module.exports = Ug : this.d3 = Ug
}(), d3.slider = function() {
        "use strict";

        function a(a) {
            a.each(function() {
                function a(a) {
                    "boolean" == typeof k && (k = d3.svg.axis().ticks(Math.round(e / 100)).tickFormat(o).orient("horizontal" === j ? "bottom" : "right")), d = c.copy().range([0, e]), k.scale(d);
                    var b = a.append("svg").classed("d3-slider-axis d3-slider-axis-" + k.orient(), !0).on("click", v),
                        f = b.append("g");
                    "horizontal" === j ? (b.style("left", -l), b.attr({
                        width: e + 2 * l,
                        height: l
                    }), "top" === k.orient() ? (b.style("top", -l), f.attr("transform", "translate(" + l + "," + l + ")")) : f.attr("transform", "translate(" + l + ",0)")) : (b.style("top", -l), b.attr({
                        width: l,
                        height: e + 2 * l
                    }), "left" === k.orient() ? (b.style("left", -l), f.attr("transform", "translate(" + l + "," + l + ")")) : f.attr("transform", "translate(0," + l + ")")), f.call(k)
                }

                function p(a) {
                    var d = q(c.invert(a / e));
                    if (b !== d) {
                        var f = n(c(q(b))),
                            g = n(c(q(d))),
                            h = "horizontal" === j ? "left" : "bottom";
                        m.slide(d3.event.sourceEvent || d3.event, b = d), i ? y.transition().styleTween(h, function() {
                            return d3.interpolate(f, g)
                        }).duration("number" == typeof i ? i : 250) : y.style(h, g)
                    }
                }

                function q(a) {
                    var b = (a - c.domain()[0]) % h,
                        d = a - b;
                    return 2 * Math.abs(b) >= h && (d += b > 0 ? h : -h), d
                }

                function r() {
                    p(d3.event.offsetX || d3.event.layerX)
                }

                function s() {
                    p(e - d3.event.offsetY || d3.event.layerY)
                }

                function t() {
                    p(Math.max(0, Math.min(e, d3.event.x)))
                }

                function u() {
                    p(e - Math.max(0, Math.min(e, d3.event.y)))
                }

                function v() {
                    d3.event.stopPropagation()
                }
                c || (c = d3.scale.linear().domain([f, g])), b = b || c.domain()[0];
                var w = d3.select(this).classed("d3-slider d3-slider-" + j, !0),
                    x = d3.behavior.drag(),
                    y = w.append("a").classed("d3-slider-handle", !0).attr("xlink:href", "#").on("click", v).call(x);
                "horizontal" === j ? (w.on("click", r), x.on("drag", t), y.style("left", n(c(b))), e = parseInt(w.style("width"), 10)) : (w.on("click", s), x.on("drag", u), y.style("bottom", n(c(b))), e = parseInt(w.style("height"), 10)), k && a(w)
            })
        }
        var b, c, d, e, f = 0,
            g = 100,
            h = 1,
            i = !0,
            j = "horizontal",
            k = !1,
            l = 50,
            m = d3.dispatch("slide"),
            n = d3.format(".2%"),
            o = d3.format(".0");
        return a.min = function(b) {
            return arguments.length ? (f = b, a) : f
        }, a.max = function(b) {
            return arguments.length ? (g = b, a) : g
        }, a.step = function(b) {
            return arguments.length ? (h = b, a) : h
        }, a.animate = function(b) {
            return arguments.length ? (i = b, a) : i
        }, a.orientation = function(b) {
            return arguments.length ? (j = b, a) : j
        }, a.axis = function(b) {
            return arguments.length ? (k = b, a) : k
        }, a.margin = function(b) {
            return arguments.length ? (l = b, a) : l
        }, a.value = function(c) {
            return arguments.length ? (b = c, a) : b
        }, a.scale = function(b) {
            return arguments.length ? (c = b, a) : c
        }, d3.rebind(a, m, "on"), a
    },
    function(a) {
        function b(b) {
            if ("string" == typeof b.data && (b.data = {
                    keys: b.data
                }), b.data && b.data.keys && "string" == typeof b.data.keys) {
                var c = b.handler,
                    d = b.data.keys.toLowerCase().split(" "),
                    e = ["text", "password", "number", "email", "url", "range", "date", "month", "week", "time", "datetime", "datetime-local", "search", "color", "tel"];
                b.handler = function(b) {
                    if (this === b.target || !(/textarea|select/i.test(b.target.nodeName) || a.inArray(b.target.type, e) > -1)) {
                        var f = a.hotkeys.specialKeys[b.keyCode],
                            g = "keypress" === b.type && String.fromCharCode(b.which).toLowerCase(),
                            h = "",
                            i = {};
                        b.altKey && "alt" !== f && (h += "alt+"), b.ctrlKey && "ctrl" !== f && (h += "ctrl+"), b.metaKey && !b.ctrlKey && "meta" !== f && (h += "meta+"), b.shiftKey && "shift" !== f && (h += "shift+"), f && (i[h + f] = !0), g && (i[h + g] = !0, i[h + a.hotkeys.shiftNums[g]] = !0, "shift+" === h && (i[a.hotkeys.shiftNums[g]] = !0));
                        for (var j = 0, k = d.length; k > j; j++)
                            if (i[d[j]]) return c.apply(this, arguments)
                    }
                }
            }
        }
        a.hotkeys = {
            version: "0.8",
            specialKeys: {
                8: "backspace",
                9: "tab",
                10: "return",
                13: "return",
                16: "shift",
                17: "ctrl",
                18: "alt",
                19: "pause",
                20: "capslock",
                27: "esc",
                32: "space",
                33: "pageup",
                34: "pagedown",
                35: "end",
                36: "home",
                37: "left",
                38: "up",
                39: "right",
                40: "down",
                45: "insert",
                46: "del",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9",
                106: "*",
                107: "+",
                109: "-",
                110: ".",
                111: "/",
                112: "f1",
                113: "f2",
                114: "f3",
                115: "f4",
                116: "f5",
                117: "f6",
                118: "f7",
                119: "f8",
                120: "f9",
                121: "f10",
                122: "f11",
                123: "f12",
                144: "numlock",
                145: "scroll",
                186: ";",
                191: "/",
                220: "\\",
                222: "'",
                224: "meta"
            },
            shiftNums: {
                "`": "~",
                1: "!",
                2: "@",
                3: "#",
                4: "$",
                5: "%",
                6: "^",
                7: "&",
                8: "*",
                9: "(",
                0: ")",
                "-": "_",
                "=": "+",
                ";": ": ",
                "'": '"',
                ",": "<",
                ".": ">",
                "/": "?",
                "\\": "|"
            }
        }, a.each(["keydown", "keyup", "keypress"], function() {
            a.event.special[this] = {
                add: b
            }
        })
    }(this.jQuery), ! function(a, b, c) {
        var d = a.L,
            e = {};
        e.version = "0.7.1", "object" == typeof module && "object" == typeof module.exports ? module.exports = e : "function" == typeof define && define.amd && define(e), e.noConflict = function() {
                return a.L = d, this
            }, a.L = e, e.Util = {
                extend: function(a) {
                    var b, c, d, e, f = Array.prototype.slice.call(arguments, 1);
                    for (c = 0, d = f.length; d > c; c++) {
                        e = f[c] || {};
                        for (b in e) e.hasOwnProperty(b) && (a[b] = e[b])
                    }
                    return a
                },
                bind: function(a, b) {
                    var c = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
                    return function() {
                        return a.apply(b, c || arguments)
                    }
                },
                stamp: function() {
                    var a = 0,
                        b = "_leaflet_id";
                    return function(c) {
                        return c[b] = c[b] || ++a, c[b]
                    }
                }(),
                invokeEach: function(a, b, c) {
                    var d, e;
                    if ("object" == typeof a) {
                        e = Array.prototype.slice.call(arguments, 3);
                        for (d in a) b.apply(c, [d, a[d]].concat(e));
                        return !0
                    }
                    return !1
                },
                limitExecByInterval: function(a, b, c) {
                    var d, e;
                    return function f() {
                        var g = arguments;
                        return d ? (e = !0, void 0) : (d = !0, setTimeout(function() {
                            d = !1, e && (f.apply(c, g), e = !1)
                        }, b), a.apply(c, g), void 0)
                    }
                },
                falseFn: function() {
                    return !1
                },
                formatNum: function(a, b) {
                    var c = Math.pow(10, b || 5);
                    return Math.round(a * c) / c
                },
                trim: function(a) {
                    return a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "")
                },
                splitWords: function(a) {
                    return e.Util.trim(a).split(/\s+/)
                },
                setOptions: function(a, b) {
                    return a.options = e.extend({}, a.options, b), a.options
                },
                getParamString: function(a, b, c) {
                    var d = [];
                    for (var e in a) d.push(encodeURIComponent(c ? e.toUpperCase() : e) + "=" + encodeURIComponent(a[e]));
                    return (b && -1 !== b.indexOf("?") ? "&" : "?") + d.join("&")
                },
                template: function(a, b) {
                    return a.replace(/\{ *([\w_]+) *\}/g, function(a, d) {
                        var e = b[d];
                        if (e === c) throw new Error("No value provided for variable " + a);
                        return "function" == typeof e && (e = e(b)), e
                    })
                },
                isArray: Array.isArray || function(a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                },
                emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
            },
            function() {
                function b(b) {
                    var c, d, e = ["webkit", "moz", "o", "ms"];
                    for (c = 0; c < e.length && !d; c++) d = a[e[c] + b];
                    return d
                }

                function c(b) {
                    var c = +new Date,
                        e = Math.max(0, 16 - (c - d));
                    return d = c + e, a.setTimeout(b, e)
                }
                var d = 0,
                    f = a.requestAnimationFrame || b("RequestAnimationFrame") || c,
                    g = a.cancelAnimationFrame || b("CancelAnimationFrame") || b("CancelRequestAnimationFrame") || function(b) {
                        a.clearTimeout(b)
                    };
                e.Util.requestAnimFrame = function(b, d, g, h) {
                    return b = e.bind(b, d), g && f === c ? (b(), void 0) : f.call(a, b, h)
                }, e.Util.cancelAnimFrame = function(b) {
                    b && g.call(a, b)
                }
            }(), e.extend = e.Util.extend, e.bind = e.Util.bind, e.stamp = e.Util.stamp, e.setOptions = e.Util.setOptions, e.Class = function() {}, e.Class.extend = function(a) {
                var b = function() {
                        this.initialize && this.initialize.apply(this, arguments), this._initHooks && this.callInitHooks()
                    },
                    c = function() {};
                c.prototype = this.prototype;
                var d = new c;
                d.constructor = b, b.prototype = d;
                for (var f in this) this.hasOwnProperty(f) && "prototype" !== f && (b[f] = this[f]);
                a.statics && (e.extend(b, a.statics), delete a.statics), a.includes && (e.Util.extend.apply(null, [d].concat(a.includes)), delete a.includes), a.options && d.options && (a.options = e.extend({}, d.options, a.options)), e.extend(d, a), d._initHooks = [];
                var g = this;
                return b.__super__ = g.prototype, d.callInitHooks = function() {
                    if (!this._initHooksCalled) {
                        g.prototype.callInitHooks && g.prototype.callInitHooks.call(this), this._initHooksCalled = !0;
                        for (var a = 0, b = d._initHooks.length; b > a; a++) d._initHooks[a].call(this)
                    }
                }, b
            }, e.Class.include = function(a) {
                e.extend(this.prototype, a)
            }, e.Class.mergeOptions = function(a) {
                e.extend(this.prototype.options, a)
            }, e.Class.addInitHook = function(a) {
                var b = Array.prototype.slice.call(arguments, 1),
                    c = "function" == typeof a ? a : function() {
                        this[a].apply(this, b)
                    };
                this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(c)
            };
        var f = "_leaflet_events";
        e.Mixin = {}, e.Mixin.Events = {
                addEventListener: function(a, b, c) {
                    if (e.Util.invokeEach(a, this.addEventListener, this, b, c)) return this;
                    var d, g, h, i, j, k, l, m = this[f] = this[f] || {},
                        n = c && c !== this && e.stamp(c);
                    for (a = e.Util.splitWords(a), d = 0, g = a.length; g > d; d++) h = {
                        action: b,
                        context: c || this
                    }, i = a[d], n ? (j = i + "_idx", k = j + "_len", l = m[j] = m[j] || {}, l[n] || (l[n] = [], m[k] = (m[k] || 0) + 1), l[n].push(h)) : (m[i] = m[i] || [], m[i].push(h));
                    return this
                },
                hasEventListeners: function(a) {
                    var b = this[f];
                    return !!b && (a in b && b[a].length > 0 || a + "_idx" in b && b[a + "_idx_len"] > 0)
                },
                removeEventListener: function(a, b, c) {
                    if (!this[f]) return this;
                    if (!a) return this.clearAllEventListeners();
                    if (e.Util.invokeEach(a, this.removeEventListener, this, b, c)) return this;
                    var d, g, h, i, j, k, l, m, n, o = this[f],
                        p = c && c !== this && e.stamp(c);
                    for (a = e.Util.splitWords(a), d = 0, g = a.length; g > d; d++)
                        if (h = a[d], k = h + "_idx", l = k + "_len", m = o[k], b) {
                            if (i = p && m ? m[p] : o[h]) {
                                for (j = i.length - 1; j >= 0; j--) i[j].action !== b || c && i[j].context !== c || (n = i.splice(j, 1), n[0].action = e.Util.falseFn);
                                c && m && 0 === i.length && (delete m[p], o[l]--)
                            }
                        } else delete o[h], delete o[k], delete o[l];
                    return this
                },
                clearAllEventListeners: function() {
                    return delete this[f], this
                },
                fireEvent: function(a, b) {
                    if (!this.hasEventListeners(a)) return this;
                    var c, d, g, h, i, j = e.Util.extend({}, b, {
                            type: a,
                            target: this
                        }),
                        k = this[f];
                    if (k[a])
                        for (c = k[a].slice(), d = 0, g = c.length; g > d; d++) c[d].action.call(c[d].context, j);
                    h = k[a + "_idx"];
                    for (i in h)
                        if (c = h[i].slice())
                            for (d = 0, g = c.length; g > d; d++) c[d].action.call(c[d].context, j);
                    return this
                },
                addOneTimeEventListener: function(a, b, c) {
                    if (e.Util.invokeEach(a, this.addOneTimeEventListener, this, b, c)) return this;
                    var d = e.bind(function() {
                        this.removeEventListener(a, b, c).removeEventListener(a, d, c)
                    }, this);
                    return this.addEventListener(a, b, c).addEventListener(a, d, c)
                }
            }, e.Mixin.Events.on = e.Mixin.Events.addEventListener, e.Mixin.Events.off = e.Mixin.Events.removeEventListener, e.Mixin.Events.once = e.Mixin.Events.addOneTimeEventListener, e.Mixin.Events.fire = e.Mixin.Events.fireEvent,
            function() {
                var d = "ActiveXObject" in a,
                    f = d && !b.addEventListener,
                    g = navigator.userAgent.toLowerCase(),
                    h = -1 !== g.indexOf("webkit"),
                    i = -1 !== g.indexOf("chrome"),
                    j = -1 !== g.indexOf("phantom"),
                    k = -1 !== g.indexOf("android"),
                    l = -1 !== g.search("android [23]"),
                    m = -1 !== g.indexOf("gecko"),
                    n = typeof orientation != c + "",
                    o = a.navigator && a.navigator.msPointerEnabled && a.navigator.msMaxTouchPoints && !a.PointerEvent,
                    p = a.PointerEvent && a.navigator.pointerEnabled && a.navigator.maxTouchPoints || o,
                    q = "devicePixelRatio" in a && a.devicePixelRatio > 1 || "matchMedia" in a && a.matchMedia("(min-resolution:144dpi)") && a.matchMedia("(min-resolution:144dpi)").matches,
                    r = b.documentElement,
                    s = d && "transition" in r.style,
                    t = "WebKitCSSMatrix" in a && "m11" in new a.WebKitCSSMatrix && !l,
                    u = "MozPerspective" in r.style,
                    v = "OTransition" in r.style,
                    w = !a.L_DISABLE_3D && (s || t || u || v) && !j,
                    x = !a.L_NO_TOUCH && !j && function() {
                        var a = "ontouchstart";
                        if (p || a in r) return !0;
                        var c = b.createElement("div"),
                            d = !1;
                        return c.setAttribute ? (c.setAttribute(a, "return;"), "function" == typeof c[a] && (d = !0), c.removeAttribute(a), c = null, d) : !1
                    }();
                e.Browser = {
                    ie: d,
                    ielt9: f,
                    webkit: h,
                    gecko: m && !h && !a.opera && !d,
                    android: k,
                    android23: l,
                    chrome: i,
                    ie3d: s,
                    webkit3d: t,
                    gecko3d: u,
                    opera3d: v,
                    any3d: w,
                    mobile: n,
                    mobileWebkit: n && h,
                    mobileWebkit3d: n && t,
                    mobileOpera: n && a.opera,
                    touch: x,
                    msPointer: o,
                    pointer: p,
                    retina: q
                }
            }(), e.Point = function(a, b, c) {
                this.x = c ? Math.round(a) : a, this.y = c ? Math.round(b) : b
            }, e.Point.prototype = {
                clone: function() {
                    return new e.Point(this.x, this.y)
                },
                add: function(a) {
                    return this.clone()._add(e.point(a))
                },
                _add: function(a) {
                    return this.x += a.x, this.y += a.y, this
                },
                subtract: function(a) {
                    return this.clone()._subtract(e.point(a))
                },
                _subtract: function(a) {
                    return this.x -= a.x, this.y -= a.y, this
                },
                divideBy: function(a) {
                    return this.clone()._divideBy(a)
                },
                _divideBy: function(a) {
                    return this.x /= a, this.y /= a, this
                },
                multiplyBy: function(a) {
                    return this.clone()._multiplyBy(a)
                },
                _multiplyBy: function(a) {
                    return this.x *= a, this.y *= a, this
                },
                round: function() {
                    return this.clone()._round()
                },
                _round: function() {
                    return this.x = Math.round(this.x), this.y = Math.round(this.y), this
                },
                floor: function() {
                    return this.clone()._floor()
                },
                _floor: function() {
                    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
                },
                distanceTo: function(a) {
                    a = e.point(a);
                    var b = a.x - this.x,
                        c = a.y - this.y;
                    return Math.sqrt(b * b + c * c)
                },
                equals: function(a) {
                    return a = e.point(a), a.x === this.x && a.y === this.y
                },
                contains: function(a) {
                    return a = e.point(a), Math.abs(a.x) <= Math.abs(this.x) && Math.abs(a.y) <= Math.abs(this.y)
                },
                toString: function() {
                    return "Point(" + e.Util.formatNum(this.x) + ", " + e.Util.formatNum(this.y) + ")"
                }
            }, e.point = function(a, b, d) {
                return a instanceof e.Point ? a : e.Util.isArray(a) ? new e.Point(a[0], a[1]) : a === c || null === a ? a : new e.Point(a, b, d)
            }, e.Bounds = function(a, b) {
                if (a)
                    for (var c = b ? [a, b] : a, d = 0, e = c.length; e > d; d++) this.extend(c[d])
            }, e.Bounds.prototype = {
                extend: function(a) {
                    return a = e.point(a), this.min || this.max ? (this.min.x = Math.min(a.x, this.min.x), this.max.x = Math.max(a.x, this.max.x), this.min.y = Math.min(a.y, this.min.y), this.max.y = Math.max(a.y, this.max.y)) : (this.min = a.clone(), this.max = a.clone()), this
                },
                getCenter: function(a) {
                    return new e.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, a)
                },
                getBottomLeft: function() {
                    return new e.Point(this.min.x, this.max.y)
                },
                getTopRight: function() {
                    return new e.Point(this.max.x, this.min.y)
                },
                getSize: function() {
                    return this.max.subtract(this.min)
                },
                contains: function(a) {
                    var b, c;
                    return a = "number" == typeof a[0] || a instanceof e.Point ? e.point(a) : e.bounds(a), a instanceof e.Bounds ? (b = a.min, c = a.max) : b = c = a, b.x >= this.min.x && c.x <= this.max.x && b.y >= this.min.y && c.y <= this.max.y
                },
                intersects: function(a) {
                    a = e.bounds(a);
                    var b = this.min,
                        c = this.max,
                        d = a.min,
                        f = a.max,
                        g = f.x >= b.x && d.x <= c.x,
                        h = f.y >= b.y && d.y <= c.y;
                    return g && h
                },
                isValid: function() {
                    return !(!this.min || !this.max)
                }
            }, e.bounds = function(a, b) {
                return !a || a instanceof e.Bounds ? a : new e.Bounds(a, b)
            }, e.Transformation = function(a, b, c, d) {
                this._a = a, this._b = b, this._c = c, this._d = d
            }, e.Transformation.prototype = {
                transform: function(a, b) {
                    return this._transform(a.clone(), b)
                },
                _transform: function(a, b) {
                    return b = b || 1, a.x = b * (this._a * a.x + this._b), a.y = b * (this._c * a.y + this._d), a
                },
                untransform: function(a, b) {
                    return b = b || 1, new e.Point((a.x / b - this._b) / this._a, (a.y / b - this._d) / this._c)
                }
            }, e.DomUtil = {
                get: function(a) {
                    return "string" == typeof a ? b.getElementById(a) : a
                },
                getStyle: function(a, c) {
                    var d = a.style[c];
                    if (!d && a.currentStyle && (d = a.currentStyle[c]), (!d || "auto" === d) && b.defaultView) {
                        var e = b.defaultView.getComputedStyle(a, null);
                        d = e ? e[c] : null
                    }
                    return "auto" === d ? null : d
                },
                getViewportOffset: function(a) {
                    var c, d = 0,
                        f = 0,
                        g = a,
                        h = b.body,
                        i = b.documentElement;
                    do {
                        if (d += g.offsetTop || 0, f += g.offsetLeft || 0, d += parseInt(e.DomUtil.getStyle(g, "borderTopWidth"), 10) || 0, f += parseInt(e.DomUtil.getStyle(g, "borderLeftWidth"), 10) || 0, c = e.DomUtil.getStyle(g, "position"), g.offsetParent === h && "absolute" === c) break;
                        if ("fixed" === c) {
                            d += h.scrollTop || i.scrollTop || 0, f += h.scrollLeft || i.scrollLeft || 0;
                            break
                        }
                        if ("relative" === c && !g.offsetLeft) {
                            var j = e.DomUtil.getStyle(g, "width"),
                                k = e.DomUtil.getStyle(g, "max-width"),
                                l = g.getBoundingClientRect();
                            ("none" !== j || "none" !== k) && (f += l.left + g.clientLeft), d += l.top + (h.scrollTop || i.scrollTop || 0);
                            break
                        }
                        g = g.offsetParent
                    } while (g);
                    g = a;
                    do {
                        if (g === h) break;
                        d -= g.scrollTop || 0, f -= g.scrollLeft || 0, g = g.parentNode
                    } while (g);
                    return new e.Point(f, d)
                },
                documentIsLtr: function() {
                    return e.DomUtil._docIsLtrCached || (e.DomUtil._docIsLtrCached = !0, e.DomUtil._docIsLtr = "ltr" === e.DomUtil.getStyle(b.body, "direction")), e.DomUtil._docIsLtr
                },
                create: function(a, c, d) {
                    var e = b.createElement(a);
                    return e.className = c, d && d.appendChild(e), e
                },
                hasClass: function(a, b) {
                    if (a.classList !== c) return a.classList.contains(b);
                    var d = e.DomUtil._getClass(a);
                    return d.length > 0 && new RegExp("(^|\\s)" + b + "(\\s|$)").test(d)
                },
                addClass: function(a, b) {
                    if (a.classList !== c)
                        for (var d = e.Util.splitWords(b), f = 0, g = d.length; g > f; f++) a.classList.add(d[f]);
                    else if (!e.DomUtil.hasClass(a, b)) {
                        var h = e.DomUtil._getClass(a);
                        e.DomUtil._setClass(a, (h ? h + " " : "") + b)
                    }
                },
                removeClass: function(a, b) {
                    a.classList !== c ? a.classList.remove(b) : e.DomUtil._setClass(a, e.Util.trim((" " + e.DomUtil._getClass(a) + " ").replace(" " + b + " ", " ")))
                },
                _setClass: function(a, b) {
                    a.className.baseVal === c ? a.className = b : a.className.baseVal = b
                },
                _getClass: function(a) {
                    return a.className.baseVal === c ? a.className : a.className.baseVal
                },
                setOpacity: function(a, b) {
                    if ("opacity" in a.style) a.style.opacity = b;
                    else if ("filter" in a.style) {
                        var c = !1,
                            d = "DXImageTransform.Microsoft.Alpha";
                        try {
                            c = a.filters.item(d)
                        } catch (e) {
                            if (1 === b) return
                        }
                        b = Math.round(100 * b), c ? (c.Enabled = 100 !== b, c.Opacity = b) : a.style.filter += " progid:" + d + "(opacity=" + b + ")"
                    }
                },
                testProp: function(a) {
                    for (var c = b.documentElement.style, d = 0; d < a.length; d++)
                        if (a[d] in c) return a[d];
                    return !1
                },
                getTranslateString: function(a) {
                    var b = e.Browser.webkit3d,
                        c = "translate" + (b ? "3d" : "") + "(",
                        d = (b ? ",0" : "") + ")";
                    return c + a.x + "px," + a.y + "px" + d
                },
                getScaleString: function(a, b) {
                    var c = e.DomUtil.getTranslateString(b.add(b.multiplyBy(-1 * a))),
                        d = " scale(" + a + ") ";
                    return c + d
                },
                setPosition: function(a, b, c) {
                    a._leaflet_pos = b, !c && e.Browser.any3d ? a.style[e.DomUtil.TRANSFORM] = e.DomUtil.getTranslateString(b) : (a.style.left = b.x + "px", a.style.top = b.y + "px")
                },
                getPosition: function(a) {
                    return a._leaflet_pos
                }
            }, e.DomUtil.TRANSFORM = e.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]), e.DomUtil.TRANSITION = e.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), e.DomUtil.TRANSITION_END = "webkitTransition" === e.DomUtil.TRANSITION || "OTransition" === e.DomUtil.TRANSITION ? e.DomUtil.TRANSITION + "End" : "transitionend",
            function() {
                if ("onselectstart" in b) e.extend(e.DomUtil, {
                    disableTextSelection: function() {
                        e.DomEvent.on(a, "selectstart", e.DomEvent.preventDefault)
                    },
                    enableTextSelection: function() {
                        e.DomEvent.off(a, "selectstart", e.DomEvent.preventDefault)
                    }
                });
                else {
                    var c = e.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
                    e.extend(e.DomUtil, {
                        disableTextSelection: function() {
                            if (c) {
                                var a = b.documentElement.style;
                                this._userSelect = a[c], a[c] = "none"
                            }
                        },
                        enableTextSelection: function() {
                            c && (b.documentElement.style[c] = this._userSelect, delete this._userSelect)
                        }
                    })
                }
                e.extend(e.DomUtil, {
                    disableImageDrag: function() {
                        e.DomEvent.on(a, "dragstart", e.DomEvent.preventDefault)
                    },
                    enableImageDrag: function() {
                        e.DomEvent.off(a, "dragstart", e.DomEvent.preventDefault)
                    }
                })
            }(), e.LatLng = function(a, b, d) {
                if (a = parseFloat(a), b = parseFloat(b), isNaN(a) || isNaN(b)) throw new Error("Invalid LatLng object: (" + a + ", " + b + ")");
                this.lat = a, this.lng = b, d !== c && (this.alt = parseFloat(d))
            }, e.extend(e.LatLng, {
                DEG_TO_RAD: Math.PI / 180,
                RAD_TO_DEG: 180 / Math.PI,
                MAX_MARGIN: 1e-9
            }), e.LatLng.prototype = {
                equals: function(a) {
                    if (!a) return !1;
                    a = e.latLng(a);
                    var b = Math.max(Math.abs(this.lat - a.lat), Math.abs(this.lng - a.lng));
                    return b <= e.LatLng.MAX_MARGIN
                },
                toString: function(a) {
                    return "LatLng(" + e.Util.formatNum(this.lat, a) + ", " + e.Util.formatNum(this.lng, a) + ")"
                },
                distanceTo: function(a) {
                    a = e.latLng(a);
                    var b = 6378137,
                        c = e.LatLng.DEG_TO_RAD,
                        d = (a.lat - this.lat) * c,
                        f = (a.lng - this.lng) * c,
                        g = this.lat * c,
                        h = a.lat * c,
                        i = Math.sin(d / 2),
                        j = Math.sin(f / 2),
                        k = i * i + j * j * Math.cos(g) * Math.cos(h);
                    return 2 * b * Math.atan2(Math.sqrt(k), Math.sqrt(1 - k))
                },
                wrap: function(a, b) {
                    var c = this.lng;
                    return a = a || -180, b = b || 180, c = (c + b) % (b - a) + (a > c || c === b ? b : a), new e.LatLng(this.lat, c)
                }
            }, e.latLng = function(a, b) {
                return a instanceof e.LatLng ? a : e.Util.isArray(a) ? "number" == typeof a[0] || "string" == typeof a[0] ? new e.LatLng(a[0], a[1], a[2]) : null : a === c || null === a ? a : "object" == typeof a && "lat" in a ? new e.LatLng(a.lat, "lng" in a ? a.lng : a.lon) : b === c ? null : new e.LatLng(a, b)
            }, e.LatLngBounds = function(a, b) {
                if (a)
                    for (var c = b ? [a, b] : a, d = 0, e = c.length; e > d; d++) this.extend(c[d])
            }, e.LatLngBounds.prototype = {
                extend: function(a) {
                    if (!a) return this;
                    var b = e.latLng(a);
                    return a = null !== b ? b : e.latLngBounds(a), a instanceof e.LatLng ? this._southWest || this._northEast ? (this._southWest.lat = Math.min(a.lat, this._southWest.lat), this._southWest.lng = Math.min(a.lng, this._southWest.lng), this._northEast.lat = Math.max(a.lat, this._northEast.lat), this._northEast.lng = Math.max(a.lng, this._northEast.lng)) : (this._southWest = new e.LatLng(a.lat, a.lng), this._northEast = new e.LatLng(a.lat, a.lng)) : a instanceof e.LatLngBounds && (this.extend(a._southWest), this.extend(a._northEast)), this
                },
                pad: function(a) {
                    var b = this._southWest,
                        c = this._northEast,
                        d = Math.abs(b.lat - c.lat) * a,
                        f = Math.abs(b.lng - c.lng) * a;
                    return new e.LatLngBounds(new e.LatLng(b.lat - d, b.lng - f), new e.LatLng(c.lat + d, c.lng + f))
                },
                getCenter: function() {
                    return new e.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
                },
                getSouthWest: function() {
                    return this._southWest
                },
                getNorthEast: function() {
                    return this._northEast
                },
                getNorthWest: function() {
                    return new e.LatLng(this.getNorth(), this.getWest())
                },
                getSouthEast: function() {
                    return new e.LatLng(this.getSouth(), this.getEast())
                },
                getWest: function() {
                    return this._southWest.lng
                },
                getSouth: function() {
                    return this._southWest.lat
                },
                getEast: function() {
                    return this._northEast.lng
                },
                getNorth: function() {
                    return this._northEast.lat
                },
                contains: function(a) {
                    a = "number" == typeof a[0] || a instanceof e.LatLng ? e.latLng(a) : e.latLngBounds(a);
                    var b, c, d = this._southWest,
                        f = this._northEast;
                    return a instanceof e.LatLngBounds ? (b = a.getSouthWest(), c = a.getNorthEast()) : b = c = a, b.lat >= d.lat && c.lat <= f.lat && b.lng >= d.lng && c.lng <= f.lng
                },
                intersects: function(a) {
                    a = e.latLngBounds(a);
                    var b = this._southWest,
                        c = this._northEast,
                        d = a.getSouthWest(),
                        f = a.getNorthEast(),
                        g = f.lat >= b.lat && d.lat <= c.lat,
                        h = f.lng >= b.lng && d.lng <= c.lng;
                    return g && h
                },
                toBBoxString: function() {
                    return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
                },
                equals: function(a) {
                    return a ? (a = e.latLngBounds(a), this._southWest.equals(a.getSouthWest()) && this._northEast.equals(a.getNorthEast())) : !1
                },
                isValid: function() {
                    return !(!this._southWest || !this._northEast)
                }
            }, e.latLngBounds = function(a, b) {
                return !a || a instanceof e.LatLngBounds ? a : new e.LatLngBounds(a, b)
            }, e.Projection = {}, e.Projection.SphericalMercator = {
                MAX_LATITUDE: 85.0511287798,
                project: function(a) {
                    var b = e.LatLng.DEG_TO_RAD,
                        c = this.MAX_LATITUDE,
                        d = Math.max(Math.min(c, a.lat), -c),
                        f = a.lng * b,
                        g = d * b;
                    return g = Math.log(Math.tan(Math.PI / 4 + g / 2)), new e.Point(f, g)
                },
                unproject: function(a) {
                    var b = e.LatLng.RAD_TO_DEG,
                        c = a.x * b,
                        d = (2 * Math.atan(Math.exp(a.y)) - Math.PI / 2) * b;
                    return new e.LatLng(d, c)
                }
            }, e.Projection.LonLat = {
                project: function(a) {
                    return new e.Point(a.lng, a.lat)
                },
                unproject: function(a) {
                    return new e.LatLng(a.y, a.x)
                }
            }, e.CRS = {
                latLngToPoint: function(a, b) {
                    var c = this.projection.project(a),
                        d = this.scale(b);
                    return this.transformation._transform(c, d)
                },
                pointToLatLng: function(a, b) {
                    var c = this.scale(b),
                        d = this.transformation.untransform(a, c);
                    return this.projection.unproject(d)
                },
                project: function(a) {
                    return this.projection.project(a)
                },
                scale: function(a) {
                    return 256 * Math.pow(2, a)
                },
                getSize: function(a) {
                    var b = this.scale(a);
                    return e.point(b, b)
                }
            }, e.CRS.Simple = e.extend({}, e.CRS, {
                projection: e.Projection.LonLat,
                transformation: new e.Transformation(1, 0, -1, 0),
                scale: function(a) {
                    return Math.pow(2, a)
                }
            }), e.CRS.EPSG3857 = e.extend({}, e.CRS, {
                code: "EPSG:3857",
                projection: e.Projection.SphericalMercator,
                transformation: new e.Transformation(.5 / Math.PI, .5, -.5 / Math.PI, .5),
                project: function(a) {
                    var b = this.projection.project(a),
                        c = 6378137;
                    return b.multiplyBy(c)
                }
            }), e.CRS.EPSG900913 = e.extend({}, e.CRS.EPSG3857, {
                code: "EPSG:900913"
            }), e.CRS.EPSG4326 = e.extend({}, e.CRS, {
                code: "EPSG:4326",
                projection: e.Projection.LonLat,
                transformation: new e.Transformation(1 / 360, .5, -1 / 360, .5)
            }), e.Map = e.Class.extend({
                includes: e.Mixin.Events,
                options: {
                    crs: e.CRS.EPSG3857,
                    fadeAnimation: e.DomUtil.TRANSITION && !e.Browser.android23,
                    trackResize: !0,
                    markerZoomAnimation: e.DomUtil.TRANSITION && e.Browser.any3d
                },
                initialize: function(a, b) {
                    b = e.setOptions(this, b), this._initContainer(a), this._initLayout(), this._onResize = e.bind(this._onResize, this), this._initEvents(), b.maxBounds && this.setMaxBounds(b.maxBounds), b.center && b.zoom !== c && this.setView(e.latLng(b.center), b.zoom, {
                        reset: !0
                    }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._tileLayersNum = 0, this.callInitHooks(), this._addLayers(b.layers)
                },
                setView: function(a, b) {
                    return b = b === c ? this.getZoom() : b, this._resetView(e.latLng(a), this._limitZoom(b)), this
                },
                setZoom: function(a, b) {
                    return this._loaded ? this.setView(this.getCenter(), a, {
                        zoom: b
                    }) : (this._zoom = this._limitZoom(a), this)
                },
                zoomIn: function(a, b) {
                    return this.setZoom(this._zoom + (a || 1), b)
                },
                zoomOut: function(a, b) {
                    return this.setZoom(this._zoom - (a || 1), b)
                },
                setZoomAround: function(a, b, c) {
                    var d = this.getZoomScale(b),
                        f = this.getSize().divideBy(2),
                        g = a instanceof e.Point ? a : this.latLngToContainerPoint(a),
                        h = g.subtract(f).multiplyBy(1 - 1 / d),
                        i = this.containerPointToLatLng(f.add(h));
                    return this.setView(i, b, {
                        zoom: c
                    })
                },
                fitBounds: function(a, b) {
                    b = b || {}, a = a.getBounds ? a.getBounds() : e.latLngBounds(a);
                    var c = e.point(b.paddingTopLeft || b.padding || [0, 0]),
                        d = e.point(b.paddingBottomRight || b.padding || [0, 0]),
                        f = this.getBoundsZoom(a, !1, c.add(d)),
                        g = d.subtract(c).divideBy(2),
                        h = this.project(a.getSouthWest(), f),
                        i = this.project(a.getNorthEast(), f),
                        j = this.unproject(h.add(i).divideBy(2).add(g), f);
                    return f = b && b.maxZoom ? Math.min(b.maxZoom, f) : f, this.setView(j, f, b)
                },
                fitWorld: function(a) {
                    return this.fitBounds([
                        [-90, -180],
                        [90, 180]
                    ], a)
                },
                panTo: function(a, b) {
                    return this.setView(a, this._zoom, {
                        pan: b
                    })
                },
                panBy: function(a) {
                    return this.fire("movestart"), this._rawPanBy(e.point(a)), this.fire("move"), this.fire("moveend")
                },
                setMaxBounds: function(a) {
                    return a = e.latLngBounds(a), this.options.maxBounds = a, a ? (this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds, this)) : this.off("moveend", this._panInsideMaxBounds, this)
                },
                panInsideBounds: function(a, b) {
                    var c = this.getCenter(),
                        d = this._limitCenter(c, this._zoom, a);
                    return c.equals(d) ? this : this.panTo(d, b)
                },
                addLayer: function(a) {
                    var b = e.stamp(a);
                    return this._layers[b] ? this : (this._layers[b] = a, !a.options || isNaN(a.options.maxZoom) && isNaN(a.options.minZoom) || (this._zoomBoundLayers[b] = a, this._updateZoomLevels()), this.options.zoomAnimation && e.TileLayer && a instanceof e.TileLayer && (this._tileLayersNum++, this._tileLayersToLoad++, a.on("load", this._onTileLayerLoad, this)), this._loaded && this._layerAdd(a), this)
                },
                removeLayer: function(a) {
                    var b = e.stamp(a);
                    return this._layers[b] ? (this._loaded && a.onRemove(this), delete this._layers[b], this._loaded && this.fire("layerremove", {
                        layer: a
                    }), this._zoomBoundLayers[b] && (delete this._zoomBoundLayers[b], this._updateZoomLevels()), this.options.zoomAnimation && e.TileLayer && a instanceof e.TileLayer && (this._tileLayersNum--, this._tileLayersToLoad--, a.off("load", this._onTileLayerLoad, this)), this) : this
                },
                hasLayer: function(a) {
                    return a ? e.stamp(a) in this._layers : !1
                },
                eachLayer: function(a, b) {
                    for (var c in this._layers) a.call(b, this._layers[c]);
                    return this
                },
                invalidateSize: function(a) {
                    if (!this._loaded) return this;
                    a = e.extend({
                        animate: !1,
                        pan: !0
                    }, a === !0 ? {
                        animate: !0
                    } : a);
                    var b = this.getSize();
                    this._sizeChanged = !0, this._initialCenter = null;
                    var c = this.getSize(),
                        d = b.divideBy(2).round(),
                        f = c.divideBy(2).round(),
                        g = d.subtract(f);
                    return g.x || g.y ? (a.animate && a.pan ? this.panBy(g) : (a.pan && this._rawPanBy(g), this.fire("move"), a.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(e.bind(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                        oldSize: b,
                        newSize: c
                    })) : this
                },
                addHandler: function(a, b) {
                    if (!b) return this;
                    var c = this[a] = new b(this);
                    return this._handlers.push(c), this.options[a] && c.enable(), this
                },
                remove: function() {
                    this._loaded && this.fire("unload"), this._initEvents("off");
                    try {
                        delete this._container._leaflet
                    } catch (a) {
                        this._container._leaflet = c
                    }
                    return this._clearPanes(), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this
                },
                getCenter: function() {
                    return this._checkIfLoaded(), this._initialCenter && !this._moved() ? this._initialCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
                },
                getZoom: function() {
                    return this._zoom
                },
                getBounds: function() {
                    var a = this.getPixelBounds(),
                        b = this.unproject(a.getBottomLeft()),
                        c = this.unproject(a.getTopRight());
                    return new e.LatLngBounds(b, c)
                },
                getMinZoom: function() {
                    return this.options.minZoom === c ? this._layersMinZoom === c ? 0 : this._layersMinZoom : this.options.minZoom
                },
                getMaxZoom: function() {
                    return this.options.maxZoom === c ? this._layersMaxZoom === c ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
                },
                getBoundsZoom: function(a, b, c) {
                    a = e.latLngBounds(a);
                    var d, f = this.getMinZoom() - (b ? 1 : 0),
                        g = this.getMaxZoom(),
                        h = this.getSize(),
                        i = a.getNorthWest(),
                        j = a.getSouthEast(),
                        k = !0;
                    c = e.point(c || [0, 0]);
                    do f++, d = this.project(j, f).subtract(this.project(i, f)).add(c), k = b ? d.x < h.x || d.y < h.y : h.contains(d); while (k && g >= f);
                    return k && b ? null : b ? f : f - 1
                },
                getSize: function() {
                    return (!this._size || this._sizeChanged) && (this._size = new e.Point(this._container.clientWidth, this._container.clientHeight), this._sizeChanged = !1), this._size.clone()
                },
                getPixelBounds: function() {
                    var a = this._getTopLeftPoint();
                    return new e.Bounds(a, a.add(this.getSize()))
                },
                getPixelOrigin: function() {
                    return this._checkIfLoaded(), this._initialTopLeftPoint
                },
                getPanes: function() {
                    return this._panes
                },
                getContainer: function() {
                    return this._container
                },
                getZoomScale: function(a) {
                    var b = this.options.crs;
                    return b.scale(a) / b.scale(this._zoom)
                },
                getScaleZoom: function(a) {
                    return this._zoom + Math.log(a) / Math.LN2
                },
                project: function(a, b) {
                    return b = b === c ? this._zoom : b, this.options.crs.latLngToPoint(e.latLng(a), b)
                },
                unproject: function(a, b) {
                    return b = b === c ? this._zoom : b, this.options.crs.pointToLatLng(e.point(a), b)
                },
                layerPointToLatLng: function(a) {
                    var b = e.point(a).add(this.getPixelOrigin());
                    return this.unproject(b)
                },
                latLngToLayerPoint: function(a) {
                    var b = this.project(e.latLng(a))._round();
                    return b._subtract(this.getPixelOrigin())
                },
                containerPointToLayerPoint: function(a) {
                    return e.point(a).subtract(this._getMapPanePos())
                },
                layerPointToContainerPoint: function(a) {
                    return e.point(a).add(this._getMapPanePos())
                },
                containerPointToLatLng: function(a) {
                    var b = this.containerPointToLayerPoint(e.point(a));
                    return this.layerPointToLatLng(b)
                },
                latLngToContainerPoint: function(a) {
                    return this.layerPointToContainerPoint(this.latLngToLayerPoint(e.latLng(a)))
                },
                mouseEventToContainerPoint: function(a) {
                    return e.DomEvent.getMousePosition(a, this._container)
                },
                mouseEventToLayerPoint: function(a) {
                    return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(a))
                },
                mouseEventToLatLng: function(a) {
                    return this.layerPointToLatLng(this.mouseEventToLayerPoint(a))
                },
                _initContainer: function(a) {
                    var b = this._container = e.DomUtil.get(a);
                    if (!b) throw new Error("Map container not found.");
                    if (b._leaflet) throw new Error("Map container is already initialized.");
                    b._leaflet = !0
                },
                _initLayout: function() {
                    var a = this._container;
                    e.DomUtil.addClass(a, "leaflet-container" + (e.Browser.touch ? " leaflet-touch" : "") + (e.Browser.retina ? " leaflet-retina" : "") + (e.Browser.ielt9 ? " leaflet-oldie" : "") + (this.options.fadeAnimation ? " leaflet-fade-anim" : ""));
                    var b = e.DomUtil.getStyle(a, "position");
                    "absolute" !== b && "relative" !== b && "fixed" !== b && (a.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
                },
                _initPanes: function() {
                    var a = this._panes = {};
                    this._mapPane = a.mapPane = this._createPane("leaflet-map-pane", this._container), this._tilePane = a.tilePane = this._createPane("leaflet-tile-pane", this._mapPane), a.objectsPane = this._createPane("leaflet-objects-pane", this._mapPane), a.shadowPane = this._createPane("leaflet-shadow-pane"), a.overlayPane = this._createPane("leaflet-overlay-pane"), a.markerPane = this._createPane("leaflet-marker-pane"), a.popupPane = this._createPane("leaflet-popup-pane");
                    var b = " leaflet-zoom-hide";
                    this.options.markerZoomAnimation || (e.DomUtil.addClass(a.markerPane, b), e.DomUtil.addClass(a.shadowPane, b), e.DomUtil.addClass(a.popupPane, b))
                },
                _createPane: function(a, b) {
                    return e.DomUtil.create("div", a, b || this._panes.objectsPane)
                },
                _clearPanes: function() {
                    this._container.removeChild(this._mapPane)
                },
                _addLayers: function(a) {
                    a = a ? e.Util.isArray(a) ? a : [a] : [];
                    for (var b = 0, c = a.length; c > b; b++) this.addLayer(a[b])
                },
                _resetView: function(a, b, c, d) {
                    var f = this._zoom !== b;
                    d || (this.fire("movestart"), f && this.fire("zoomstart")), this._zoom = b, this._initialCenter = a, this._initialTopLeftPoint = this._getNewTopLeftPoint(a), c ? this._initialTopLeftPoint._add(this._getMapPanePos()) : e.DomUtil.setPosition(this._mapPane, new e.Point(0, 0)), this._tileLayersToLoad = this._tileLayersNum;
                    var g = !this._loaded;
                    this._loaded = !0, g && (this.fire("load"), this.eachLayer(this._layerAdd, this)), this.fire("viewreset", {
                        hard: !c
                    }), this.fire("move"), (f || d) && this.fire("zoomend"), this.fire("moveend", {
                        hard: !c
                    })
                },
                _rawPanBy: function(a) {
                    e.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(a))
                },
                _getZoomSpan: function() {
                    return this.getMaxZoom() - this.getMinZoom()
                },
                _updateZoomLevels: function() {
                    var a, b = 1 / 0,
                        d = -1 / 0,
                        e = this._getZoomSpan();
                    for (a in this._zoomBoundLayers) {
                        var f = this._zoomBoundLayers[a];
                        isNaN(f.options.minZoom) || (b = Math.min(b, f.options.minZoom)), isNaN(f.options.maxZoom) || (d = Math.max(d, f.options.maxZoom))
                    }
                    a === c ? this._layersMaxZoom = this._layersMinZoom = c : (this._layersMaxZoom = d, this._layersMinZoom = b), e !== this._getZoomSpan() && this.fire("zoomlevelschange")
                },
                _panInsideMaxBounds: function() {
                    this.panInsideBounds(this.options.maxBounds)
                },
                _checkIfLoaded: function() {
                    if (!this._loaded) throw new Error("Set map center and zoom first.")
                },
                _initEvents: function(b) {
                    if (e.DomEvent) {
                        b = b || "on", e.DomEvent[b](this._container, "click", this._onMouseClick, this);
                        var c, d, f = ["dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "contextmenu"];
                        for (c = 0, d = f.length; d > c; c++) e.DomEvent[b](this._container, f[c], this._fireMouseEvent, this);
                        this.options.trackResize && e.DomEvent[b](a, "resize", this._onResize, this)
                    }
                },
                _onResize: function() {
                    e.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = e.Util.requestAnimFrame(function() {
                        this.invalidateSize({
                            debounceMoveend: !0
                        })
                    }, this, !1, this._container)
                },
                _onMouseClick: function(a) {
                    !this._loaded || !a._simulated && (this.dragging && this.dragging.moved() || this.boxZoom && this.boxZoom.moved()) || e.DomEvent._skipped(a) || (this.fire("preclick"), this._fireMouseEvent(a))
                },
                _fireMouseEvent: function(a) {
                    if (this._loaded && !e.DomEvent._skipped(a)) {
                        var b = a.type;
                        if (b = "mouseenter" === b ? "mouseover" : "mouseleave" === b ? "mouseout" : b, this.hasEventListeners(b)) {
                            "contextmenu" === b && e.DomEvent.preventDefault(a);
                            var c = this.mouseEventToContainerPoint(a),
                                d = this.containerPointToLayerPoint(c),
                                f = this.layerPointToLatLng(d);
                            this.fire(b, {
                                latlng: f,
                                layerPoint: d,
                                containerPoint: c,
                                originalEvent: a
                            })
                        }
                    }
                },
                _onTileLayerLoad: function() {
                    this._tileLayersToLoad--, this._tileLayersNum && !this._tileLayersToLoad && this.fire("tilelayersload")
                },
                _clearHandlers: function() {
                    for (var a = 0, b = this._handlers.length; b > a; a++) this._handlers[a].disable()
                },
                whenReady: function(a, b) {
                    return this._loaded ? a.call(b || this, this) : this.on("load", a, b), this
                },
                _layerAdd: function(a) {
                    a.onAdd(this), this.fire("layeradd", {
                        layer: a
                    })
                },
                _getMapPanePos: function() {
                    return e.DomUtil.getPosition(this._mapPane)
                },
                _moved: function() {
                    var a = this._getMapPanePos();
                    return a && !a.equals([0, 0])
                },
                _getTopLeftPoint: function() {
                    return this.getPixelOrigin().subtract(this._getMapPanePos())
                },
                _getNewTopLeftPoint: function(a, b) {
                    var c = this.getSize()._divideBy(2);
                    return this.project(a, b)._subtract(c)._round()
                },
                _latLngToNewLayerPoint: function(a, b, c) {
                    var d = this._getNewTopLeftPoint(c, b).add(this._getMapPanePos());
                    return this.project(a, b)._subtract(d)
                },
                _getCenterLayerPoint: function() {
                    return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
                },
                _getCenterOffset: function(a) {
                    return this.latLngToLayerPoint(a).subtract(this._getCenterLayerPoint())
                },
                _limitCenter: function(a, b, c) {
                    if (!c) return a;
                    var d = this.project(a, b),
                        f = this.getSize().divideBy(2),
                        g = new e.Bounds(d.subtract(f), d.add(f)),
                        h = this._getBoundsOffset(g, c, b);
                    return this.unproject(d.add(h), b)
                },
                _limitOffset: function(a, b) {
                    if (!b) return a;
                    var c = this.getPixelBounds(),
                        d = new e.Bounds(c.min.add(a), c.max.add(a));
                    return a.add(this._getBoundsOffset(d, b))
                },
                _getBoundsOffset: function(a, b, c) {
                    var d = this.project(b.getNorthWest(), c).subtract(a.min),
                        f = this.project(b.getSouthEast(), c).subtract(a.max),
                        g = this._rebound(d.x, -f.x),
                        h = this._rebound(d.y, -f.y);
                    return new e.Point(g, h)
                },
                _rebound: function(a, b) {
                    return a + b > 0 ? Math.round(a - b) / 2 : Math.max(0, Math.ceil(a)) - Math.max(0, Math.floor(b))
                },
                _limitZoom: function(a) {
                    var b = this.getMinZoom(),
                        c = this.getMaxZoom();
                    return Math.max(b, Math.min(c, a))
                }
            }), e.map = function(a, b) {
                return new e.Map(a, b)
            }, e.Projection.Mercator = {
                MAX_LATITUDE: 85.0840591556,
                R_MINOR: 6356752.314245179,
                R_MAJOR: 6378137,
                project: function(a) {
                    var b = e.LatLng.DEG_TO_RAD,
                        c = this.MAX_LATITUDE,
                        d = Math.max(Math.min(c, a.lat), -c),
                        f = this.R_MAJOR,
                        g = this.R_MINOR,
                        h = a.lng * b * f,
                        i = d * b,
                        j = g / f,
                        k = Math.sqrt(1 - j * j),
                        l = k * Math.sin(i);
                    l = Math.pow((1 - l) / (1 + l), .5 * k);
                    var m = Math.tan(.5 * (.5 * Math.PI - i)) / l;
                    return i = -f * Math.log(m), new e.Point(h, i)
                },
                unproject: function(a) {
                    for (var b, c = e.LatLng.RAD_TO_DEG, d = this.R_MAJOR, f = this.R_MINOR, g = a.x * c / d, h = f / d, i = Math.sqrt(1 - h * h), j = Math.exp(-a.y / d), k = Math.PI / 2 - 2 * Math.atan(j), l = 15, m = 1e-7, n = l, o = .1; Math.abs(o) > m && --n > 0;) b = i * Math.sin(k), o = Math.PI / 2 - 2 * Math.atan(j * Math.pow((1 - b) / (1 + b), .5 * i)) - k, k += o;
                    return new e.LatLng(k * c, g)
                }
            }, e.CRS.EPSG3395 = e.extend({}, e.CRS, {
                code: "EPSG:3395",
                projection: e.Projection.Mercator,
                transformation: function() {
                    var a = e.Projection.Mercator,
                        b = a.R_MAJOR,
                        c = .5 / (Math.PI * b);
                    return new e.Transformation(c, .5, -c, .5)
                }()
            }), e.TileLayer = e.Class.extend({
                includes: e.Mixin.Events,
                options: {
                    minZoom: 0,
                    maxZoom: 18,
                    tileSize: 256,
                    subdomains: "abc",
                    errorTileUrl: "",
                    attribution: "",
                    zoomOffset: 0,
                    opacity: 1,
                    unloadInvisibleTiles: e.Browser.mobile,
                    updateWhenIdle: e.Browser.mobile
                },
                initialize: function(a, b) {
                    b = e.setOptions(this, b), b.detectRetina && e.Browser.retina && b.maxZoom > 0 && (b.tileSize = Math.floor(b.tileSize / 2), b.zoomOffset++, b.minZoom > 0 && b.minZoom--, this.options.maxZoom--), b.bounds && (b.bounds = e.latLngBounds(b.bounds)), this._url = a;
                    var c = this.options.subdomains;
                    "string" == typeof c && (this.options.subdomains = c.split(""))
                },
                onAdd: function(a) {
                    this._map = a, this._animated = a._zoomAnimated, this._initContainer(), a.on({
                        viewreset: this._reset,
                        moveend: this._update
                    }, this), this._animated && a.on({
                        zoomanim: this._animateZoom,
                        zoomend: this._endZoomAnim
                    }, this), this.options.updateWhenIdle || (this._limitedUpdate = e.Util.limitExecByInterval(this._update, 150, this), a.on("move", this._limitedUpdate, this)), this._reset(), this._update()
                },
                addTo: function(a) {
                    return a.addLayer(this), this
                },
                onRemove: function(a) {
                    this._container.parentNode.removeChild(this._container), a.off({
                        viewreset: this._reset,
                        moveend: this._update
                    }, this), this._animated && a.off({
                        zoomanim: this._animateZoom,
                        zoomend: this._endZoomAnim
                    }, this), this.options.updateWhenIdle || a.off("move", this._limitedUpdate, this), this._container = null, this._map = null
                },
                bringToFront: function() {
                    var a = this._map._panes.tilePane;
                    return this._container && (a.appendChild(this._container), this._setAutoZIndex(a, Math.max)), this
                },
                bringToBack: function() {
                    var a = this._map._panes.tilePane;
                    return this._container && (a.insertBefore(this._container, a.firstChild), this._setAutoZIndex(a, Math.min)), this
                },
                getAttribution: function() {
                    return this.options.attribution
                },
                getContainer: function() {
                    return this._container
                },
                setOpacity: function(a) {
                    return this.options.opacity = a, this._map && this._updateOpacity(), this
                },
                setZIndex: function(a) {
                    return this.options.zIndex = a, this._updateZIndex(), this
                },
                setUrl: function(a, b) {
                    return this._url = a, b || this.redraw(), this
                },
                redraw: function() {
                    return this._map && (this._reset({
                        hard: !0
                    }), this._update()), this
                },
                _updateZIndex: function() {
                    this._container && this.options.zIndex !== c && (this._container.style.zIndex = this.options.zIndex)
                },
                _setAutoZIndex: function(a, b) {
                    var c, d, e, f = a.children,
                        g = -b(1 / 0, -1 / 0);
                    for (d = 0, e = f.length; e > d; d++) f[d] !== this._container && (c = parseInt(f[d].style.zIndex, 10), isNaN(c) || (g = b(g, c)));
                    this.options.zIndex = this._container.style.zIndex = (isFinite(g) ? g : 0) + b(1, -1)
                },
                _updateOpacity: function() {
                    var a, b = this._tiles;
                    if (e.Browser.ielt9)
                        for (a in b) e.DomUtil.setOpacity(b[a], this.options.opacity);
                    else e.DomUtil.setOpacity(this._container, this.options.opacity)
                },
                _initContainer: function() {
                    var a = this._map._panes.tilePane;
                    if (!this._container) {
                        if (this._container = e.DomUtil.create("div", "leaflet-layer"), this._updateZIndex(), this._animated) {
                            var b = "leaflet-tile-container";
                            this._bgBuffer = e.DomUtil.create("div", b, this._container), this._tileContainer = e.DomUtil.create("div", b, this._container)
                        } else this._tileContainer = this._container;
                        a.appendChild(this._container), this.options.opacity < 1 && this._updateOpacity()
                    }
                },
                _reset: function(a) {
                    for (var b in this._tiles) this.fire("tileunload", {
                        tile: this._tiles[b]
                    });
                    this._tiles = {}, this._tilesToLoad = 0, this.options.reuseTiles && (this._unusedTiles = []), this._tileContainer.innerHTML = "", this._animated && a && a.hard && this._clearBgBuffer(), this._initContainer()
                },
                _getTileSize: function() {
                    var a = this._map,
                        b = a.getZoom() + this.options.zoomOffset,
                        c = this.options.maxNativeZoom,
                        d = this.options.tileSize;
                    return c && b > c && (d = Math.round(a.getZoomScale(b) / a.getZoomScale(c) * d)), d
                },
                _update: function() {
                    if (this._map) {
                        var a = this._map,
                            b = a.getPixelBounds(),
                            c = a.getZoom(),
                            d = this._getTileSize();
                        if (!(c > this.options.maxZoom || c < this.options.minZoom)) {
                            var f = e.bounds(b.min.divideBy(d)._floor(), b.max.divideBy(d)._floor());
                            this._addTilesFromCenterOut(f), (this.options.unloadInvisibleTiles || this.options.reuseTiles) && this._removeOtherTiles(f)
                        }
                    }
                },
                _addTilesFromCenterOut: function(a) {
                    var c, d, f, g = [],
                        h = a.getCenter();
                    for (c = a.min.y; c <= a.max.y; c++)
                        for (d = a.min.x; d <= a.max.x; d++) f = new e.Point(d, c), this._tileShouldBeLoaded(f) && g.push(f);
                    var i = g.length;
                    if (0 !== i) {
                        g.sort(function(a, b) {
                            return a.distanceTo(h) - b.distanceTo(h)
                        });
                        var j = b.createDocumentFragment();
                        for (this._tilesToLoad || this.fire("loading"), this._tilesToLoad += i, d = 0; i > d; d++) this._addTile(g[d], j);
                        this._tileContainer.appendChild(j)
                    }
                },
                _tileShouldBeLoaded: function(a) {
                    if (a.x + ":" + a.y in this._tiles) return !1;
                    var b = this.options;
                    if (!b.continuousWorld) {
                        var c = this._getWrapTileNum();
                        if (b.noWrap && (a.x < 0 || a.x >= c.x) || a.y < 0 || a.y >= c.y) return !1
                    }
                    if (b.bounds) {
                        var d = b.tileSize,
                            e = a.multiplyBy(d),
                            f = e.add([d, d]),
                            g = this._map.unproject(e),
                            h = this._map.unproject(f);
                        if (b.continuousWorld || b.noWrap || (g = g.wrap(), h = h.wrap()), !b.bounds.intersects([g, h])) return !1
                    }
                    return !0
                },
                _removeOtherTiles: function(a) {
                    var b, c, d, e;
                    for (e in this._tiles) b = e.split(":"), c = parseInt(b[0], 10), d = parseInt(b[1], 10), (c < a.min.x || c > a.max.x || d < a.min.y || d > a.max.y) && this._removeTile(e)
                },
                _removeTile: function(a) {
                    var b = this._tiles[a];
                    this.fire("tileunload", {
                        tile: b,
                        url: b.src
                    }), this.options.reuseTiles ? (e.DomUtil.removeClass(b, "leaflet-tile-loaded"), this._unusedTiles.push(b)) : b.parentNode === this._tileContainer && this._tileContainer.removeChild(b), e.Browser.android || (b.onload = null, b.src = e.Util.emptyImageUrl), delete this._tiles[a]
                },
                _addTile: function(a, b) {
                    var c = this._getTilePos(a),
                        d = this._getTile();
                    e.DomUtil.setPosition(d, c, e.Browser.chrome), this._tiles[a.x + ":" + a.y] = d, this._loadTile(d, a), d.parentNode !== this._tileContainer && b.appendChild(d)
                },
                _getZoomForUrl: function() {
                    var a = this.options,
                        b = this._map.getZoom();
                    return a.zoomReverse && (b = a.maxZoom - b), b += a.zoomOffset, a.maxNativeZoom ? Math.min(b, a.maxNativeZoom) : b
                },
                _getTilePos: function(a) {
                    var b = this._map.getPixelOrigin(),
                        c = this._getTileSize();
                    return a.multiplyBy(c).subtract(b)
                },
                getTileUrl: function(a) {
                    return e.Util.template(this._url, e.extend({
                        s: this._getSubdomain(a),
                        z: a.z,
                        x: a.x,
                        y: a.y
                    }, this.options))
                },
                _getWrapTileNum: function() {
                    var a = this._map.options.crs,
                        b = a.getSize(this._map.getZoom());
                    return b.divideBy(this.options.tileSize)
                },
                _adjustTilePoint: function(a) {
                    var b = this._getWrapTileNum();
                    this.options.continuousWorld || this.options.noWrap || (a.x = (a.x % b.x + b.x) % b.x), this.options.tms && (a.y = b.y - a.y - 1), a.z = this._getZoomForUrl()
                },
                _getSubdomain: function(a) {
                    var b = Math.abs(a.x + a.y) % this.options.subdomains.length;
                    return this.options.subdomains[b]
                },
                _getTile: function() {
                    if (this.options.reuseTiles && this._unusedTiles.length > 0) {
                        var a = this._unusedTiles.pop();
                        return this._resetTile(a), a
                    }
                    return this._createTile()
                },
                _resetTile: function() {},
                _createTile: function() {
                    var a = e.DomUtil.create("img", "leaflet-tile");
                    return a.style.width = a.style.height = this._getTileSize() + "px", a.galleryimg = "no", a.onselectstart = a.onmousemove = e.Util.falseFn, e.Browser.ielt9 && this.options.opacity !== c && e.DomUtil.setOpacity(a, this.options.opacity), e.Browser.mobileWebkit3d && (a.style.WebkitBackfaceVisibility = "hidden"), a
                },
                _loadTile: function(a, b) {
                    a._layer = this, a.onload = this._tileOnLoad, a.onerror = this._tileOnError, this._adjustTilePoint(b), a.src = this.getTileUrl(b), this.fire("tileloadstart", {
                        tile: a,
                        url: a.src
                    })
                },
                _tileLoaded: function() {
                    this._tilesToLoad--, this._animated && e.DomUtil.addClass(this._tileContainer, "leaflet-zoom-animated"), this._tilesToLoad || (this.fire("load"), this._animated && (clearTimeout(this._clearBgBufferTimer), this._clearBgBufferTimer = setTimeout(e.bind(this._clearBgBuffer, this), 500)))
                },
                _tileOnLoad: function() {
                    var a = this._layer;
                    this.src !== e.Util.emptyImageUrl && (e.DomUtil.addClass(this, "leaflet-tile-loaded"), a.fire("tileload", {
                        tile: this,
                        url: this.src
                    })), a._tileLoaded()
                },
                _tileOnError: function() {
                    var a = this._layer;
                    a.fire("tileerror", {
                        tile: this,
                        url: this.src
                    });
                    var b = a.options.errorTileUrl;
                    b && (this.src = b), a._tileLoaded()
                }
            }), e.tileLayer = function(a, b) {
                return new e.TileLayer(a, b)
            }, e.TileLayer.WMS = e.TileLayer.extend({
                defaultWmsParams: {
                    service: "WMS",
                    request: "GetMap",
                    version: "1.1.1",
                    layers: "",
                    styles: "",
                    format: "image/jpeg",
                    transparent: !1
                },
                initialize: function(a, b) {
                    this._url = a;
                    var c = e.extend({}, this.defaultWmsParams),
                        d = b.tileSize || this.options.tileSize;
                    c.width = c.height = b.detectRetina && e.Browser.retina ? 2 * d : d;
                    for (var f in b) this.options.hasOwnProperty(f) || "crs" === f || (c[f] = b[f]);
                    this.wmsParams = c, e.setOptions(this, b)
                },
                onAdd: function(a) {
                    this._crs = this.options.crs || a.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
                    var b = this._wmsVersion >= 1.3 ? "crs" : "srs";
                    this.wmsParams[b] = this._crs.code, e.TileLayer.prototype.onAdd.call(this, a)
                },
                getTileUrl: function(a) {
                    var b = this._map,
                        c = this.options.tileSize,
                        d = a.multiplyBy(c),
                        f = d.add([c, c]),
                        g = this._crs.project(b.unproject(d, a.z)),
                        h = this._crs.project(b.unproject(f, a.z)),
                        i = this._wmsVersion >= 1.3 && this._crs === e.CRS.EPSG4326 ? [h.y, g.x, g.y, h.x].join(",") : [g.x, h.y, h.x, g.y].join(","),
                        j = e.Util.template(this._url, {
                            s: this._getSubdomain(a)
                        });
                    return j + e.Util.getParamString(this.wmsParams, j, !0) + "&BBOX=" + i
                },
                setParams: function(a, b) {
                    return e.extend(this.wmsParams, a), b || this.redraw(), this
                }
            }), e.tileLayer.wms = function(a, b) {
                return new e.TileLayer.WMS(a, b)
            }, e.TileLayer.Canvas = e.TileLayer.extend({
                options: {
                    async: !1
                },
                initialize: function(a) {
                    e.setOptions(this, a)
                },
                redraw: function() {
                    this._map && (this._reset({
                        hard: !0
                    }), this._update());
                    for (var a in this._tiles) this._redrawTile(this._tiles[a]);
                    return this
                },
                _redrawTile: function(a) {
                    this.drawTile(a, a._tilePoint, this._map._zoom)
                },
                _createTile: function() {
                    var a = e.DomUtil.create("canvas", "leaflet-tile");
                    return a.width = a.height = this.options.tileSize, a.onselectstart = a.onmousemove = e.Util.falseFn, a
                },
                _loadTile: function(a, b) {
                    a._layer = this, a._tilePoint = b, this._redrawTile(a), this.options.async || this.tileDrawn(a)
                },
                drawTile: function() {},
                tileDrawn: function(a) {
                    this._tileOnLoad.call(a)
                }
            }), e.tileLayer.canvas = function(a) {
                return new e.TileLayer.Canvas(a)
            }, e.ImageOverlay = e.Class.extend({
                includes: e.Mixin.Events,
                options: {
                    opacity: 1
                },
                initialize: function(a, b, c) {
                    this._url = a, this._bounds = e.latLngBounds(b), e.setOptions(this, c)
                },
                onAdd: function(a) {
                    this._map = a, this._image || this._initImage(), a._panes.overlayPane.appendChild(this._image), a.on("viewreset", this._reset, this), a.options.zoomAnimation && e.Browser.any3d && a.on("zoomanim", this._animateZoom, this), this._reset()
                },
                onRemove: function(a) {
                    a.getPanes().overlayPane.removeChild(this._image), a.off("viewreset", this._reset, this), a.options.zoomAnimation && a.off("zoomanim", this._animateZoom, this)
                },
                addTo: function(a) {
                    return a.addLayer(this), this
                },
                setOpacity: function(a) {
                    return this.options.opacity = a, this._updateOpacity(), this
                },
                bringToFront: function() {
                    return this._image && this._map._panes.overlayPane.appendChild(this._image), this
                },
                bringToBack: function() {
                    var a = this._map._panes.overlayPane;
                    return this._image && a.insertBefore(this._image, a.firstChild), this
                },
                setUrl: function(a) {
                    this._url = a, this._image.src = this._url
                },
                getAttribution: function() {
                    return this.options.attribution
                },
                _initImage: function() {
                    this._image = e.DomUtil.create("img", "leaflet-image-layer"), this._map.options.zoomAnimation && e.Browser.any3d ? e.DomUtil.addClass(this._image, "leaflet-zoom-animated") : e.DomUtil.addClass(this._image, "leaflet-zoom-hide"), this._updateOpacity(), e.extend(this._image, {
                        galleryimg: "no",
                        onselectstart: e.Util.falseFn,
                        onmousemove: e.Util.falseFn,
                        onload: e.bind(this._onImageLoad, this),
                        src: this._url
                    })
                },
                _animateZoom: function(a) {
                    var b = this._map,
                        c = this._image,
                        d = b.getZoomScale(a.zoom),
                        f = this._bounds.getNorthWest(),
                        g = this._bounds.getSouthEast(),
                        h = b._latLngToNewLayerPoint(f, a.zoom, a.center),
                        i = b._latLngToNewLayerPoint(g, a.zoom, a.center)._subtract(h),
                        j = h._add(i._multiplyBy(.5 * (1 - 1 / d)));
                    c.style[e.DomUtil.TRANSFORM] = e.DomUtil.getTranslateString(j) + " scale(" + d + ") "
                },
                _reset: function() {
                    var a = this._image,
                        b = this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
                        c = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(b);
                    e.DomUtil.setPosition(a, b), a.style.width = c.x + "px", a.style.height = c.y + "px"
                },
                _onImageLoad: function() {
                    this.fire("load")
                },
                _updateOpacity: function() {
                    e.DomUtil.setOpacity(this._image, this.options.opacity)
                }
            }), e.imageOverlay = function(a, b, c) {
                return new e.ImageOverlay(a, b, c)
            }, e.Icon = e.Class.extend({
                options: {
                    className: ""
                },
                initialize: function(a) {
                    e.setOptions(this, a)
                },
                createIcon: function(a) {
                    return this._createIcon("icon", a)
                },
                createShadow: function(a) {
                    return this._createIcon("shadow", a)
                },
                _createIcon: function(a, b) {
                    var c = this._getIconUrl(a);
                    if (!c) {
                        if ("icon" === a) throw new Error("iconUrl not set in Icon options (see the docs).");
                        return null
                    }
                    var d;
                    return d = b && "IMG" === b.tagName ? this._createImg(c, b) : this._createImg(c), this._setIconStyles(d, a), d
                },
                _setIconStyles: function(a, b) {
                    var c, d = this.options,
                        f = e.point(d[b + "Size"]);
                    c = "shadow" === b ? e.point(d.shadowAnchor || d.iconAnchor) : e.point(d.iconAnchor), !c && f && (c = f.divideBy(2, !0)), a.className = "leaflet-marker-" + b + " " + d.className, c && (a.style.marginLeft = -c.x + "px", a.style.marginTop = -c.y + "px"), f && (a.style.width = f.x + "px", a.style.height = f.y + "px")
                },
                _createImg: function(a, c) {
                    return c = c || b.createElement("img"), c.src = a, c
                },
                _getIconUrl: function(a) {
                    return e.Browser.retina && this.options[a + "RetinaUrl"] ? this.options[a + "RetinaUrl"] : this.options[a + "Url"]
                }
            }), e.icon = function(a) {
                return new e.Icon(a)
            }, e.Icon.Default = e.Icon.extend({
                options: {
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41]
                },
                _getIconUrl: function(a) {
                    var b = a + "Url";
                    if (this.options[b]) return this.options[b];
                    e.Browser.retina && "icon" === a && (a += "-2x");
                    var c = e.Icon.Default.imagePath;
                    if (!c) throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");
                    return c + "/marker-" + a + ".png"
                }
            }), e.Icon.Default.imagePath = function() {
                var a, c, d, e, f, g = b.getElementsByTagName("script"),
                    h = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;
                for (a = 0, c = g.length; c > a; a++)
                    if (d = g[a].src, e = d.match(h)) return f = d.split(h)[0], (f ? f + "/" : "") + "images"
            }(), e.Marker = e.Class.extend({
                includes: e.Mixin.Events,
                options: {
                    icon: new e.Icon.Default,
                    title: "",
                    alt: "",
                    clickable: !0,
                    draggable: !1,
                    keyboard: !0,
                    zIndexOffset: 0,
                    opacity: 1,
                    riseOnHover: !1,
                    riseOffset: 250
                },
                initialize: function(a, b) {
                    e.setOptions(this, b), this._latlng = e.latLng(a)
                },
                onAdd: function(a) {
                    this._map = a, a.on("viewreset", this.update, this), this._initIcon(), this.update(), this.fire("add"), a.options.zoomAnimation && a.options.markerZoomAnimation && a.on("zoomanim", this._animateZoom, this)
                },
                addTo: function(a) {
                    return a.addLayer(this), this
                },
                onRemove: function(a) {
                    this.dragging && this.dragging.disable(), this._removeIcon(), this._removeShadow(), this.fire("remove"), a.off({
                        viewreset: this.update,
                        zoomanim: this._animateZoom
                    }, this), this._map = null
                },
                getLatLng: function() {
                    return this._latlng
                },
                setLatLng: function(a) {
                    return this._latlng = e.latLng(a), this.update(), this.fire("move", {
                        latlng: this._latlng
                    })
                },
                setZIndexOffset: function(a) {
                    return this.options.zIndexOffset = a, this.update(), this
                },
                setIcon: function(a) {
                    return this.options.icon = a, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup), this
                },
                update: function() {
                    if (this._icon) {
                        var a = this._map.latLngToLayerPoint(this._latlng).round();
                        this._setPos(a)
                    }
                    return this
                },
                _initIcon: function() {
                    var a = this.options,
                        b = this._map,
                        c = b.options.zoomAnimation && b.options.markerZoomAnimation,
                        d = c ? "leaflet-zoom-animated" : "leaflet-zoom-hide",
                        f = a.icon.createIcon(this._icon),
                        g = !1;
                    f !== this._icon && (this._icon && this._removeIcon(), g = !0, a.title && (f.title = a.title), a.alt && (f.alt = a.alt)), e.DomUtil.addClass(f, d), a.keyboard && (f.tabIndex = "0"), this._icon = f, this._initInteraction(), a.riseOnHover && e.DomEvent.on(f, "mouseover", this._bringToFront, this).on(f, "mouseout", this._resetZIndex, this);
                    var h = a.icon.createShadow(this._shadow),
                        i = !1;
                    h !== this._shadow && (this._removeShadow(), i = !0), h && e.DomUtil.addClass(h, d), this._shadow = h, a.opacity < 1 && this._updateOpacity();
                    var j = this._map._panes;
                    g && j.markerPane.appendChild(this._icon), h && i && j.shadowPane.appendChild(this._shadow)
                },
                _removeIcon: function() {
                    this.options.riseOnHover && e.DomEvent.off(this._icon, "mouseover", this._bringToFront).off(this._icon, "mouseout", this._resetZIndex), this._map._panes.markerPane.removeChild(this._icon), this._icon = null
                },
                _removeShadow: function() {
                    this._shadow && this._map._panes.shadowPane.removeChild(this._shadow), this._shadow = null
                },
                _setPos: function(a) {
                    e.DomUtil.setPosition(this._icon, a), this._shadow && e.DomUtil.setPosition(this._shadow, a), this._zIndex = a.y + this.options.zIndexOffset, this._resetZIndex()
                },
                _updateZIndex: function(a) {
                    this._icon.style.zIndex = this._zIndex + a
                },
                _animateZoom: function(a) {
                    var b = this._map._latLngToNewLayerPoint(this._latlng, a.zoom, a.center).round();
                    this._setPos(b)
                },
                _initInteraction: function() {
                    if (this.options.clickable) {
                        var a = this._icon,
                            b = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
                        e.DomUtil.addClass(a, "leaflet-clickable"), e.DomEvent.on(a, "click", this._onMouseClick, this), e.DomEvent.on(a, "keypress", this._onKeyPress, this);
                        for (var c = 0; c < b.length; c++) e.DomEvent.on(a, b[c], this._fireMouseEvent, this);
                        e.Handler.MarkerDrag && (this.dragging = new e.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable())
                    }
                },
                _onMouseClick: function(a) {
                    var b = this.dragging && this.dragging.moved();
                    (this.hasEventListeners(a.type) || b) && e.DomEvent.stopPropagation(a), b || (this.dragging && this.dragging._enabled || !this._map.dragging || !this._map.dragging.moved()) && this.fire(a.type, {
                        originalEvent: a,
                        latlng: this._latlng
                    })
                },
                _onKeyPress: function(a) {
                    13 === a.keyCode && this.fire("click", {
                        originalEvent: a,
                        latlng: this._latlng
                    })
                },
                _fireMouseEvent: function(a) {
                    this.fire(a.type, {
                        originalEvent: a,
                        latlng: this._latlng
                    }), "contextmenu" === a.type && this.hasEventListeners(a.type) && e.DomEvent.preventDefault(a), "mousedown" !== a.type ? e.DomEvent.stopPropagation(a) : e.DomEvent.preventDefault(a)
                },
                setOpacity: function(a) {
                    return this.options.opacity = a, this._map && this._updateOpacity(), this
                },
                _updateOpacity: function() {
                    e.DomUtil.setOpacity(this._icon, this.options.opacity), this._shadow && e.DomUtil.setOpacity(this._shadow, this.options.opacity)
                },
                _bringToFront: function() {
                    this._updateZIndex(this.options.riseOffset)
                },
                _resetZIndex: function() {
                    this._updateZIndex(0)
                }
            }), e.marker = function(a, b) {
                return new e.Marker(a, b)
            }, e.DivIcon = e.Icon.extend({
                options: {
                    iconSize: [12, 12],
                    className: "leaflet-div-icon",
                    html: !1
                },
                createIcon: function(a) {
                    var c = a && "DIV" === a.tagName ? a : b.createElement("div"),
                        d = this.options;
                    return c.innerHTML = d.html !== !1 ? d.html : "", d.bgPos && (c.style.backgroundPosition = -d.bgPos.x + "px " + -d.bgPos.y + "px"), this._setIconStyles(c, "icon"), c
                },
                createShadow: function() {
                    return null
                }
            }), e.divIcon = function(a) {
                return new e.DivIcon(a)
            }, e.Map.mergeOptions({
                closePopupOnClick: !0
            }), e.Popup = e.Class.extend({
                includes: e.Mixin.Events,
                options: {
                    minWidth: 50,
                    maxWidth: 300,
                    autoPan: !0,
                    closeButton: !0,
                    offset: [0, 7],
                    autoPanPadding: [5, 5],
                    keepInView: !1,
                    className: "",
                    zoomAnimation: !0
                },
                initialize: function(a, b) {
                    e.setOptions(this, a), this._source = b, this._animated = e.Browser.any3d && this.options.zoomAnimation, this._isOpen = !1
                },
                onAdd: function(a) {
                    this._map = a, this._container || this._initLayout();
                    var b = a.options.fadeAnimation;
                    b && e.DomUtil.setOpacity(this._container, 0), a._panes.popupPane.appendChild(this._container), a.on(this._getEvents(), this), this.update(), b && e.DomUtil.setOpacity(this._container, 1), this.fire("open"), a.fire("popupopen", {
                        popup: this
                    }), this._source && this._source.fire("popupopen", {
                        popup: this
                    })
                },
                addTo: function(a) {
                    return a.addLayer(this), this
                },
                openOn: function(a) {
                    return a.openPopup(this), this
                },
                onRemove: function(a) {
                    a._panes.popupPane.removeChild(this._container), e.Util.falseFn(this._container.offsetWidth), a.off(this._getEvents(), this), a.options.fadeAnimation && e.DomUtil.setOpacity(this._container, 0), this._map = null, this.fire("close"), a.fire("popupclose", {
                        popup: this
                    }), this._source && this._source.fire("popupclose", {
                        popup: this
                    })
                },
                getLatLng: function() {
                    return this._latlng
                },
                setLatLng: function(a) {
                    return this._latlng = e.latLng(a), this._map && (this._updatePosition(), this._adjustPan()), this
                },
                getContent: function() {
                    return this._content
                },
                setContent: function(a) {
                    return this._content = a, this.update(), this
                },
                update: function() {
                    this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
                },
                _getEvents: function() {
                    var a = {
                        viewreset: this._updatePosition
                    };
                    return this._animated && (a.zoomanim = this._zoomAnimation), ("closeOnClick" in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (a.preclick = this._close), this.options.keepInView && (a.moveend = this._adjustPan), a
                },
                _close: function() {
                    this._map && this._map.closePopup(this)
                },
                _initLayout: function() {
                    var a, b = "leaflet-popup",
                        c = b + " " + this.options.className + " leaflet-zoom-" + (this._animated ? "animated" : "hide"),
                        d = this._container = e.DomUtil.create("div", c);
                    this.options.closeButton && (a = this._closeButton = e.DomUtil.create("a", b + "-close-button", d), a.href = "#close", a.innerHTML = "&#215;", e.DomEvent.disableClickPropagation(a), e.DomEvent.on(a, "click", this._onCloseButtonClick, this));
                    var f = this._wrapper = e.DomUtil.create("div", b + "-content-wrapper", d);
                    e.DomEvent.disableClickPropagation(f), this._contentNode = e.DomUtil.create("div", b + "-content", f), e.DomEvent.disableScrollPropagation(this._contentNode), e.DomEvent.on(f, "contextmenu", e.DomEvent.stopPropagation), this._tipContainer = e.DomUtil.create("div", b + "-tip-container", d), this._tip = e.DomUtil.create("div", b + "-tip", this._tipContainer)
                },
                _updateContent: function() {
                    if (this._content) {
                        if ("string" == typeof this._content) this._contentNode.innerHTML = this._content;
                        else {
                            for (; this._contentNode.hasChildNodes();) this._contentNode.removeChild(this._contentNode.firstChild);
                            this._contentNode.appendChild(this._content)
                        }
                        this.fire("contentupdate")
                    }
                },
                _updateLayout: function() {
                    var a = this._contentNode,
                        b = a.style;
                    b.width = "", b.whiteSpace = "nowrap";
                    var c = a.offsetWidth;
                    c = Math.min(c, this.options.maxWidth), c = Math.max(c, this.options.minWidth), b.width = c + 1 + "px", b.whiteSpace = "", b.height = "";
                    var d = a.offsetHeight,
                        f = this.options.maxHeight,
                        g = "leaflet-popup-scrolled";
                    f && d > f ? (b.height = f + "px", e.DomUtil.addClass(a, g)) : e.DomUtil.removeClass(a, g), this._containerWidth = this._container.offsetWidth
                },
                _updatePosition: function() {
                    if (this._map) {
                        var a = this._map.latLngToLayerPoint(this._latlng),
                            b = this._animated,
                            c = e.point(this.options.offset);
                        b && e.DomUtil.setPosition(this._container, a), this._containerBottom = -c.y - (b ? 0 : a.y), this._containerLeft = -Math.round(this._containerWidth / 2) + c.x + (b ? 0 : a.x), this._container.style.bottom = this._containerBottom + "px", this._container.style.left = this._containerLeft + "px"
                    }
                },
                _zoomAnimation: function(a) {
                    var b = this._map._latLngToNewLayerPoint(this._latlng, a.zoom, a.center);
                    e.DomUtil.setPosition(this._container, b)
                },
                _adjustPan: function() {
                    if (this.options.autoPan) {
                        var a = this._map,
                            b = this._container.offsetHeight,
                            c = this._containerWidth,
                            d = new e.Point(this._containerLeft, -b - this._containerBottom);
                        this._animated && d._add(e.DomUtil.getPosition(this._container));
                        var f = a.layerPointToContainerPoint(d),
                            g = e.point(this.options.autoPanPadding),
                            h = e.point(this.options.autoPanPaddingTopLeft || g),
                            i = e.point(this.options.autoPanPaddingBottomRight || g),
                            j = a.getSize(),
                            k = 0,
                            l = 0;
                        f.x + c + i.x > j.x && (k = f.x + c - j.x + i.x), f.x - k - h.x < 0 && (k = f.x - h.x), f.y + b + i.y > j.y && (l = f.y + b - j.y + i.y), f.y - l - h.y < 0 && (l = f.y - h.y), (k || l) && a.fire("autopanstart").panBy([k, l])
                    }
                },
                _onCloseButtonClick: function(a) {
                    this._close(), e.DomEvent.stop(a)
                }
            }), e.popup = function(a, b) {
                return new e.Popup(a, b)
            }, e.Map.include({
                openPopup: function(a, b, c) {
                    if (this.closePopup(), !(a instanceof e.Popup)) {
                        var d = a;
                        a = new e.Popup(c).setLatLng(b).setContent(d)
                    }
                    return a._isOpen = !0, this._popup = a, this.addLayer(a)
                },
                closePopup: function(a) {
                    return a && a !== this._popup || (a = this._popup, this._popup = null), a && (this.removeLayer(a), a._isOpen = !1), this
                }
            }), e.Marker.include({
                openPopup: function() {
                    return this._popup && this._map && !this._map.hasLayer(this._popup) && (this._popup.setLatLng(this._latlng), this._map.openPopup(this._popup)), this
                },
                closePopup: function() {
                    return this._popup && this._popup._close(), this
                },
                togglePopup: function() {
                    return this._popup && (this._popup._isOpen ? this.closePopup() : this.openPopup()), this
                },
                bindPopup: function(a, b) {
                    var c = e.point(this.options.icon.options.popupAnchor || [0, 0]);
                    return c = c.add(e.Popup.prototype.options.offset), b && b.offset && (c = c.add(b.offset)), b = e.extend({
                        offset: c
                    }, b), this._popupHandlersAdded || (this.on("click", this.togglePopup, this).on("remove", this.closePopup, this).on("move", this._movePopup, this), this._popupHandlersAdded = !0), a instanceof e.Popup ? (e.setOptions(a, b), this._popup = a) : this._popup = new e.Popup(b, this).setContent(a), this
                },
                setPopupContent: function(a) {
                    return this._popup && this._popup.setContent(a), this
                },
                unbindPopup: function() {
                    return this._popup && (this._popup = null, this.off("click", this.togglePopup, this).off("remove", this.closePopup, this).off("move", this._movePopup, this), this._popupHandlersAdded = !1), this
                },
                getPopup: function() {
                    return this._popup
                },
                _movePopup: function(a) {
                    this._popup.setLatLng(a.latlng)
                }
            }), e.LayerGroup = e.Class.extend({
                initialize: function(a) {
                    this._layers = {};
                    var b, c;
                    if (a)
                        for (b = 0, c = a.length; c > b; b++) this.addLayer(a[b])
                },
                addLayer: function(a) {
                    var b = this.getLayerId(a);
                    return this._layers[b] = a, this._map && this._map.addLayer(a), this
                },
                removeLayer: function(a) {
                    var b = a in this._layers ? a : this.getLayerId(a);
                    return this._map && this._layers[b] && this._map.removeLayer(this._layers[b]), delete this._layers[b], this
                },
                hasLayer: function(a) {
                    return a ? a in this._layers || this.getLayerId(a) in this._layers : !1
                },
                clearLayers: function() {
                    return this.eachLayer(this.removeLayer, this), this
                },
                invoke: function(a) {
                    var b, c, d = Array.prototype.slice.call(arguments, 1);
                    for (b in this._layers) c = this._layers[b], c[a] && c[a].apply(c, d);
                    return this
                },
                onAdd: function(a) {
                    this._map = a, this.eachLayer(a.addLayer, a)
                },
                onRemove: function(a) {
                    this.eachLayer(a.removeLayer, a), this._map = null
                },
                addTo: function(a) {
                    return a.addLayer(this), this
                },
                eachLayer: function(a, b) {
                    for (var c in this._layers) a.call(b, this._layers[c]);
                    return this
                },
                getLayer: function(a) {
                    return this._layers[a]
                },
                getLayers: function() {
                    var a = [];
                    for (var b in this._layers) a.push(this._layers[b]);
                    return a
                },
                setZIndex: function(a) {
                    return this.invoke("setZIndex", a)
                },
                getLayerId: function(a) {
                    return e.stamp(a)
                }
            }), e.layerGroup = function(a) {
                return new e.LayerGroup(a)
            }, e.FeatureGroup = e.LayerGroup.extend({
                includes: e.Mixin.Events,
                statics: {
                    EVENTS: "click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"
                },
                addLayer: function(a) {
                    return this.hasLayer(a) ? this : ("on" in a && a.on(e.FeatureGroup.EVENTS, this._propagateEvent, this), e.LayerGroup.prototype.addLayer.call(this, a), this._popupContent && a.bindPopup && a.bindPopup(this._popupContent, this._popupOptions), this.fire("layeradd", {
                        layer: a
                    }))
                },
                removeLayer: function(a) {
                    return this.hasLayer(a) ? (a in this._layers && (a = this._layers[a]), a.off(e.FeatureGroup.EVENTS, this._propagateEvent, this), e.LayerGroup.prototype.removeLayer.call(this, a), this._popupContent && this.invoke("unbindPopup"), this.fire("layerremove", {
                        layer: a
                    })) : this
                },
                bindPopup: function(a, b) {
                    return this._popupContent = a, this._popupOptions = b, this.invoke("bindPopup", a, b)
                },
                openPopup: function(a) {
                    for (var b in this._layers) {
                        this._layers[b].openPopup(a);
                        break
                    }
                    return this
                },
                setStyle: function(a) {
                    return this.invoke("setStyle", a)
                },
                bringToFront: function() {
                    return this.invoke("bringToFront")
                },
                bringToBack: function() {
                    return this.invoke("bringToBack")
                },
                getBounds: function() {
                    var a = new e.LatLngBounds;
                    return this.eachLayer(function(b) {
                        a.extend(b instanceof e.Marker ? b.getLatLng() : b.getBounds())
                    }), a
                },
                _propagateEvent: function(a) {
                    a = e.extend({
                        layer: a.target,
                        target: this
                    }, a), this.fire(a.type, a)
                }
            }), e.featureGroup = function(a) {
                return new e.FeatureGroup(a)
            }, e.Path = e.Class.extend({
                includes: [e.Mixin.Events],
                statics: {
                    CLIP_PADDING: function() {
                        var b = e.Browser.mobile ? 1280 : 2e3,
                            c = (b / Math.max(a.outerWidth, a.outerHeight) - 1) / 2;
                        return Math.max(0, Math.min(.5, c))
                    }()
                },
                options: {
                    stroke: !0,
                    color: "#0033ff",
                    dashArray: null,
                    lineCap: null,
                    lineJoin: null,
                    weight: 5,
                    opacity: .5,
                    fill: !1,
                    fillColor: null,
                    fillOpacity: .2,
                    clickable: !0
                },
                initialize: function(a) {
                    e.setOptions(this, a)
                },
                onAdd: function(a) {
                    this._map = a, this._container || (this._initElements(), this._initEvents()), this.projectLatlngs(), this._updatePath(), this._container && this._map._pathRoot.appendChild(this._container), this.fire("add"), a.on({
                        viewreset: this.projectLatlngs,
                        moveend: this._updatePath
                    }, this)
                },
                addTo: function(a) {
                    return a.addLayer(this), this
                },
                onRemove: function(a) {
                    a._pathRoot.removeChild(this._container), this.fire("remove"), this._map = null, e.Browser.vml && (this._container = null, this._stroke = null, this._fill = null), a.off({
                        viewreset: this.projectLatlngs,
                        moveend: this._updatePath
                    }, this)
                },
                projectLatlngs: function() {},
                setStyle: function(a) {
                    return e.setOptions(this, a), this._container && this._updateStyle(), this
                },
                redraw: function() {
                    return this._map && (this.projectLatlngs(), this._updatePath()), this
                }
            }), e.Map.include({
                _updatePathViewport: function() {
                    var a = e.Path.CLIP_PADDING,
                        b = this.getSize(),
                        c = e.DomUtil.getPosition(this._mapPane),
                        d = c.multiplyBy(-1)._subtract(b.multiplyBy(a)._round()),
                        f = d.add(b.multiplyBy(1 + 2 * a)._round());
                    this._pathViewport = new e.Bounds(d, f)
                }
            }), e.Path.SVG_NS = "http://www.w3.org/2000/svg", e.Browser.svg = !(!b.createElementNS || !b.createElementNS(e.Path.SVG_NS, "svg").createSVGRect), e.Path = e.Path.extend({
                statics: {
                    SVG: e.Browser.svg
                },
                bringToFront: function() {
                    var a = this._map._pathRoot,
                        b = this._container;
                    return b && a.lastChild !== b && a.appendChild(b), this
                },
                bringToBack: function() {
                    var a = this._map._pathRoot,
                        b = this._container,
                        c = a.firstChild;
                    return b && c !== b && a.insertBefore(b, c), this
                },
                getPathString: function() {},
                _createElement: function(a) {
                    return b.createElementNS(e.Path.SVG_NS, a)
                },
                _initElements: function() {
                    this._map._initPathRoot(), this._initPath(), this._initStyle()
                },
                _initPath: function() {
                    this._container = this._createElement("g"), this._path = this._createElement("path"), this.options.className && e.DomUtil.addClass(this._path, this.options.className), this._container.appendChild(this._path)
                },
                _initStyle: function() {
                    this.options.stroke && (this._path.setAttribute("stroke-linejoin", "round"), this._path.setAttribute("stroke-linecap", "round")), this.options.fill && this._path.setAttribute("fill-rule", "evenodd"), this.options.pointerEvents && this._path.setAttribute("pointer-events", this.options.pointerEvents), this.options.clickable || this.options.pointerEvents || this._path.setAttribute("pointer-events", "none"), this._updateStyle()
                },
                _updateStyle: function() {
                    this.options.stroke ? (this._path.setAttribute("stroke", this.options.color), this._path.setAttribute("stroke-opacity", this.options.opacity), this._path.setAttribute("stroke-width", this.options.weight), this.options.dashArray ? this._path.setAttribute("stroke-dasharray", this.options.dashArray) : this._path.removeAttribute("stroke-dasharray"), this.options.lineCap && this._path.setAttribute("stroke-linecap", this.options.lineCap), this.options.lineJoin && this._path.setAttribute("stroke-linejoin", this.options.lineJoin)) : this._path.setAttribute("stroke", "none"), this.options.fill ? (this._path.setAttribute("fill", this.options.fillColor || this.options.color), this._path.setAttribute("fill-opacity", this.options.fillOpacity)) : this._path.setAttribute("fill", "none")
                },
                _updatePath: function() {
                    var a = this.getPathString();
                    a || (a = "M0 0"), this._path.setAttribute("d", a)
                },
                _initEvents: function() {
                    if (this.options.clickable) {
                        (e.Browser.svg || !e.Browser.vml) && e.DomUtil.addClass(this._path, "leaflet-clickable"), e.DomEvent.on(this._container, "click", this._onMouseClick, this);
                        for (var a = ["dblclick", "mousedown", "mouseover", "mouseout", "mousemove", "contextmenu"], b = 0; b < a.length; b++) e.DomEvent.on(this._container, a[b], this._fireMouseEvent, this)
                    }
                },
                _onMouseClick: function(a) {
                    this._map.dragging && this._map.dragging.moved() || this._fireMouseEvent(a)
                },
                _fireMouseEvent: function(a) {
                    if (this.hasEventListeners(a.type)) {
                        var b = this._map,
                            c = b.mouseEventToContainerPoint(a),
                            d = b.containerPointToLayerPoint(c),
                            f = b.layerPointToLatLng(d);
                        this.fire(a.type, {
                            latlng: f,
                            layerPoint: d,
                            containerPoint: c,
                            originalEvent: a
                        }), "contextmenu" === a.type && e.DomEvent.preventDefault(a), "mousemove" !== a.type && e.DomEvent.stopPropagation(a)
                    }
                }
            }), e.Map.include({
                _initPathRoot: function() {
                    this._pathRoot || (this._pathRoot = e.Path.prototype._createElement("svg"), this._panes.overlayPane.appendChild(this._pathRoot), this.options.zoomAnimation && e.Browser.any3d ? (e.DomUtil.addClass(this._pathRoot, "leaflet-zoom-animated"), this.on({
                        zoomanim: this._animatePathZoom,
                        zoomend: this._endPathZoom
                    })) : e.DomUtil.addClass(this._pathRoot, "leaflet-zoom-hide"), this.on("moveend", this._updateSvgViewport), this._updateSvgViewport())
                },
                _animatePathZoom: function(a) {
                    var b = this.getZoomScale(a.zoom),
                        c = this._getCenterOffset(a.center)._multiplyBy(-b)._add(this._pathViewport.min);
                    this._pathRoot.style[e.DomUtil.TRANSFORM] = e.DomUtil.getTranslateString(c) + " scale(" + b + ") ", this._pathZooming = !0
                },
                _endPathZoom: function() {
                    this._pathZooming = !1
                },
                _updateSvgViewport: function() {
                    if (!this._pathZooming) {
                        this._updatePathViewport();
                        var a = this._pathViewport,
                            b = a.min,
                            c = a.max,
                            d = c.x - b.x,
                            f = c.y - b.y,
                            g = this._pathRoot,
                            h = this._panes.overlayPane;
                        e.Browser.mobileWebkit && h.removeChild(g), e.DomUtil.setPosition(g, b), g.setAttribute("width", d), g.setAttribute("height", f), g.setAttribute("viewBox", [b.x, b.y, d, f].join(" ")), e.Browser.mobileWebkit && h.appendChild(g)
                    }
                }
            }), e.Path.include({
                bindPopup: function(a, b) {
                    return a instanceof e.Popup ? this._popup = a : ((!this._popup || b) && (this._popup = new e.Popup(b, this)), this._popup.setContent(a)), this._popupHandlersAdded || (this.on("click", this._openPopup, this).on("remove", this.closePopup, this), this._popupHandlersAdded = !0), this
                },
                unbindPopup: function() {
                    return this._popup && (this._popup = null, this.off("click", this._openPopup).off("remove", this.closePopup), this._popupHandlersAdded = !1), this
                },
                openPopup: function(a) {
                    return this._popup && (a = a || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)], this._openPopup({
                        latlng: a
                    })), this
                },
                closePopup: function() {
                    return this._popup && this._popup._close(), this
                },
                _openPopup: function(a) {
                    this._popup.setLatLng(a.latlng), this._map.openPopup(this._popup)
                }
            }), e.Browser.vml = !e.Browser.svg && function() {
                try {
                    var a = b.createElement("div");
                    a.innerHTML = '<v:shape adj="1"/>';
                    var c = a.firstChild;
                    return c.style.behavior = "url(#default#VML)", c && "object" == typeof c.adj
                } catch (d) {
                    return !1
                }
            }(), e.Path = e.Browser.svg || !e.Browser.vml ? e.Path : e.Path.extend({
                statics: {
                    VML: !0,
                    CLIP_PADDING: .02
                },
                _createElement: function() {
                    try {
                        return b.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                            function(a) {
                                return b.createElement("<lvml:" + a + ' class="lvml">')
                            }
                    } catch (a) {
                        return function(a) {
                            return b.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                        }
                    }
                }(),
                _initPath: function() {
                    var a = this._container = this._createElement("shape");
                    e.DomUtil.addClass(a, "leaflet-vml-shape" + (this.options.className ? " " + this.options.className : "")), this.options.clickable && e.DomUtil.addClass(a, "leaflet-clickable"), a.coordsize = "1 1", this._path = this._createElement("path"), a.appendChild(this._path), this._map._pathRoot.appendChild(a)
                },
                _initStyle: function() {
                    this._updateStyle()
                },
                _updateStyle: function() {
                    var a = this._stroke,
                        b = this._fill,
                        c = this.options,
                        d = this._container;
                    d.stroked = c.stroke, d.filled = c.fill, c.stroke ? (a || (a = this._stroke = this._createElement("stroke"), a.endcap = "round", d.appendChild(a)), a.weight = c.weight + "px", a.color = c.color, a.opacity = c.opacity, a.dashStyle = c.dashArray ? e.Util.isArray(c.dashArray) ? c.dashArray.join(" ") : c.dashArray.replace(/( *, *)/g, " ") : "", c.lineCap && (a.endcap = c.lineCap.replace("butt", "flat")), c.lineJoin && (a.joinstyle = c.lineJoin)) : a && (d.removeChild(a), this._stroke = null), c.fill ? (b || (b = this._fill = this._createElement("fill"), d.appendChild(b)), b.color = c.fillColor || c.color, b.opacity = c.fillOpacity) : b && (d.removeChild(b), this._fill = null)
                },
                _updatePath: function() {
                    var a = this._container.style;
                    a.display = "none", this._path.v = this.getPathString() + " ", a.display = ""
                }
            }), e.Map.include(e.Browser.svg || !e.Browser.vml ? {} : {
                _initPathRoot: function() {
                    if (!this._pathRoot) {
                        var a = this._pathRoot = b.createElement("div");
                        a.className = "leaflet-vml-container", this._panes.overlayPane.appendChild(a), this.on("moveend", this._updatePathViewport), this._updatePathViewport()
                    }
                }
            }), e.Browser.canvas = function() {
                return !!b.createElement("canvas").getContext
            }(), e.Path = e.Path.SVG && !a.L_PREFER_CANVAS || !e.Browser.canvas ? e.Path : e.Path.extend({
                statics: {
                    CANVAS: !0,
                    SVG: !1
                },
                redraw: function() {
                    return this._map && (this.projectLatlngs(), this._requestUpdate()), this
                },
                setStyle: function(a) {
                    return e.setOptions(this, a), this._map && (this._updateStyle(), this._requestUpdate()), this
                },
                onRemove: function(a) {
                    a.off("viewreset", this.projectLatlngs, this).off("moveend", this._updatePath, this), this.options.clickable && (this._map.off("click", this._onClick, this), this._map.off("mousemove", this._onMouseMove, this)), this._requestUpdate(), this._map = null
                },
                _requestUpdate: function() {
                    this._map && !e.Path._updateRequest && (e.Path._updateRequest = e.Util.requestAnimFrame(this._fireMapMoveEnd, this._map))
                },
                _fireMapMoveEnd: function() {
                    e.Path._updateRequest = null, this.fire("moveend")
                },
                _initElements: function() {
                    this._map._initPathRoot(), this._ctx = this._map._canvasCtx
                },
                _updateStyle: function() {
                    var a = this.options;
                    a.stroke && (this._ctx.lineWidth = a.weight, this._ctx.strokeStyle = a.color), a.fill && (this._ctx.fillStyle = a.fillColor || a.color)
                },
                _drawPath: function() {
                    var a, b, c, d, f, g;
                    for (this._ctx.beginPath(), a = 0, c = this._parts.length; c > a; a++) {
                        for (b = 0, d = this._parts[a].length; d > b; b++) f = this._parts[a][b], g = (0 === b ? "move" : "line") + "To", this._ctx[g](f.x, f.y);
                        this instanceof e.Polygon && this._ctx.closePath()
                    }
                },
                _checkIfEmpty: function() {
                    return !this._parts.length
                },
                _updatePath: function() {
                    if (!this._checkIfEmpty()) {
                        var a = this._ctx,
                            b = this.options;
                        this._drawPath(), a.save(), this._updateStyle(), b.fill && (a.globalAlpha = b.fillOpacity, a.fill()), b.stroke && (a.globalAlpha = b.opacity, a.stroke()), a.restore()
                    }
                },
                _initEvents: function() {
                    this.options.clickable && (this._map.on("mousemove", this._onMouseMove, this), this._map.on("click", this._onClick, this))
                },
                _onClick: function(a) {
                    this._containsPoint(a.layerPoint) && this.fire("click", a)
                },
                _onMouseMove: function(a) {
                    this._map && !this._map._animatingZoom && (this._containsPoint(a.layerPoint) ? (this._ctx.canvas.style.cursor = "pointer", this._mouseInside = !0, this.fire("mouseover", a)) : this._mouseInside && (this._ctx.canvas.style.cursor = "", this._mouseInside = !1, this.fire("mouseout", a)))
                }
            }), e.Map.include(e.Path.SVG && !a.L_PREFER_CANVAS || !e.Browser.canvas ? {} : {
                _initPathRoot: function() {
                    var a, c = this._pathRoot;
                    c || (c = this._pathRoot = b.createElement("canvas"), c.style.position = "absolute", a = this._canvasCtx = c.getContext("2d"), a.lineCap = "round", a.lineJoin = "round", this._panes.overlayPane.appendChild(c), this.options.zoomAnimation && (this._pathRoot.className = "leaflet-zoom-animated", this.on("zoomanim", this._animatePathZoom), this.on("zoomend", this._endPathZoom)), this.on("moveend", this._updateCanvasViewport), this._updateCanvasViewport())
                },
                _updateCanvasViewport: function() {
                    if (!this._pathZooming) {
                        this._updatePathViewport();
                        var a = this._pathViewport,
                            b = a.min,
                            c = a.max.subtract(b),
                            d = this._pathRoot;
                        e.DomUtil.setPosition(d, b), d.width = c.x, d.height = c.y, d.getContext("2d").translate(-b.x, -b.y)
                    }
                }
            }), e.LineUtil = {
                simplify: function(a, b) {
                    if (!b || !a.length) return a.slice();
                    var c = b * b;
                    return a = this._reducePoints(a, c), a = this._simplifyDP(a, c)
                },
                pointToSegmentDistance: function(a, b, c) {
                    return Math.sqrt(this._sqClosestPointOnSegment(a, b, c, !0))
                },
                closestPointOnSegment: function(a, b, c) {
                    return this._sqClosestPointOnSegment(a, b, c)
                },
                _simplifyDP: function(a, b) {
                    var d = a.length,
                        e = typeof Uint8Array != c + "" ? Uint8Array : Array,
                        f = new e(d);
                    f[0] = f[d - 1] = 1, this._simplifyDPStep(a, f, b, 0, d - 1);
                    var g, h = [];
                    for (g = 0; d > g; g++) f[g] && h.push(a[g]);
                    return h
                },
                _simplifyDPStep: function(a, b, c, d, e) {
                    var f, g, h, i = 0;
                    for (g = d + 1; e - 1 >= g; g++) h = this._sqClosestPointOnSegment(a[g], a[d], a[e], !0), h > i && (f = g, i = h);
                    i > c && (b[f] = 1, this._simplifyDPStep(a, b, c, d, f), this._simplifyDPStep(a, b, c, f, e))
                },
                _reducePoints: function(a, b) {
                    for (var c = [a[0]], d = 1, e = 0, f = a.length; f > d; d++) this._sqDist(a[d], a[e]) > b && (c.push(a[d]), e = d);
                    return f - 1 > e && c.push(a[f - 1]), c
                },
                clipSegment: function(a, b, c, d) {
                    var e, f, g, h = d ? this._lastCode : this._getBitCode(a, c),
                        i = this._getBitCode(b, c);
                    for (this._lastCode = i;;) {
                        if (!(h | i)) return [a, b];
                        if (h & i) return !1;
                        e = h || i, f = this._getEdgeIntersection(a, b, e, c), g = this._getBitCode(f, c), e === h ? (a = f, h = g) : (b = f, i = g)
                    }
                },
                _getEdgeIntersection: function(a, b, c, d) {
                    var f = b.x - a.x,
                        g = b.y - a.y,
                        h = d.min,
                        i = d.max;
                    return 8 & c ? new e.Point(a.x + f * (i.y - a.y) / g, i.y) : 4 & c ? new e.Point(a.x + f * (h.y - a.y) / g, h.y) : 2 & c ? new e.Point(i.x, a.y + g * (i.x - a.x) / f) : 1 & c ? new e.Point(h.x, a.y + g * (h.x - a.x) / f) : void 0
                },
                _getBitCode: function(a, b) {
                    var c = 0;
                    return a.x < b.min.x ? c |= 1 : a.x > b.max.x && (c |= 2), a.y < b.min.y ? c |= 4 : a.y > b.max.y && (c |= 8), c
                },
                _sqDist: function(a, b) {
                    var c = b.x - a.x,
                        d = b.y - a.y;
                    return c * c + d * d
                },
                _sqClosestPointOnSegment: function(a, b, c, d) {
                    var f, g = b.x,
                        h = b.y,
                        i = c.x - g,
                        j = c.y - h,
                        k = i * i + j * j;
                    return k > 0 && (f = ((a.x - g) * i + (a.y - h) * j) / k, f > 1 ? (g = c.x, h = c.y) : f > 0 && (g += i * f, h += j * f)), i = a.x - g, j = a.y - h, d ? i * i + j * j : new e.Point(g, h)
                }
            }, e.Polyline = e.Path.extend({
                initialize: function(a, b) {
                    e.Path.prototype.initialize.call(this, b), this._latlngs = this._convertLatLngs(a)
                },
                options: {
                    smoothFactor: 1,
                    noClip: !1
                },
                projectLatlngs: function() {
                    this._originalPoints = [];
                    for (var a = 0, b = this._latlngs.length; b > a; a++) this._originalPoints[a] = this._map.latLngToLayerPoint(this._latlngs[a])
                },
                getPathString: function() {
                    for (var a = 0, b = this._parts.length, c = ""; b > a; a++) c += this._getPathPartStr(this._parts[a]);
                    return c
                },
                getLatLngs: function() {
                    return this._latlngs
                },
                setLatLngs: function(a) {
                    return this._latlngs = this._convertLatLngs(a), this.redraw()
                },
                addLatLng: function(a) {
                    return this._latlngs.push(e.latLng(a)), this.redraw()
                },
                spliceLatLngs: function() {
                    var a = [].splice.apply(this._latlngs, arguments);
                    return this._convertLatLngs(this._latlngs, !0), this.redraw(), a
                },
                closestLayerPoint: function(a) {
                    for (var b, c, d = 1 / 0, f = this._parts, g = null, h = 0, i = f.length; i > h; h++)
                        for (var j = f[h], k = 1, l = j.length; l > k; k++) {
                            b = j[k - 1], c = j[k];
                            var m = e.LineUtil._sqClosestPointOnSegment(a, b, c, !0);
                            d > m && (d = m, g = e.LineUtil._sqClosestPointOnSegment(a, b, c))
                        }
                    return g && (g.distance = Math.sqrt(d)), g
                },
                getBounds: function() {
                    return new e.LatLngBounds(this.getLatLngs())
                },
                _convertLatLngs: function(a, b) {
                    var c, d, f = b ? a : [];
                    for (c = 0, d = a.length; d > c; c++) {
                        if (e.Util.isArray(a[c]) && "number" != typeof a[c][0]) return;
                        f[c] = e.latLng(a[c])
                    }
                    return f
                },
                _initEvents: function() {
                    e.Path.prototype._initEvents.call(this)
                },
                _getPathPartStr: function(a) {
                    for (var b, c = e.Path.VML, d = 0, f = a.length, g = ""; f > d; d++) b = a[d], c && b._round(), g += (d ? "L" : "M") + b.x + " " + b.y;
                    return g
                },
                _clipPoints: function() {
                    var a, b, c, d = this._originalPoints,
                        f = d.length;
                    if (this.options.noClip) return this._parts = [d], void 0;
                    this._parts = [];
                    var g = this._parts,
                        h = this._map._pathViewport,
                        i = e.LineUtil;
                    for (a = 0, b = 0; f - 1 > a; a++) c = i.clipSegment(d[a], d[a + 1], h, a), c && (g[b] = g[b] || [], g[b].push(c[0]), (c[1] !== d[a + 1] || a === f - 2) && (g[b].push(c[1]), b++))
                },
                _simplifyPoints: function() {
                    for (var a = this._parts, b = e.LineUtil, c = 0, d = a.length; d > c; c++) a[c] = b.simplify(a[c], this.options.smoothFactor)
                },
                _updatePath: function() {
                    this._map && (this._clipPoints(), this._simplifyPoints(), e.Path.prototype._updatePath.call(this))
                }
            }), e.polyline = function(a, b) {
                return new e.Polyline(a, b)
            }, e.PolyUtil = {}, e.PolyUtil.clipPolygon = function(a, b) {
                var c, d, f, g, h, i, j, k, l, m = [1, 4, 2, 8],
                    n = e.LineUtil;
                for (d = 0, j = a.length; j > d; d++) a[d]._code = n._getBitCode(a[d], b);
                for (g = 0; 4 > g; g++) {
                    for (k = m[g], c = [], d = 0, j = a.length, f = j - 1; j > d; f = d++) h = a[d], i = a[f], h._code & k ? i._code & k || (l = n._getEdgeIntersection(i, h, k, b), l._code = n._getBitCode(l, b), c.push(l)) : (i._code & k && (l = n._getEdgeIntersection(i, h, k, b), l._code = n._getBitCode(l, b), c.push(l)), c.push(h));
                    a = c
                }
                return a
            }, e.Polygon = e.Polyline.extend({
                options: {
                    fill: !0
                },
                initialize: function(a, b) {
                    e.Polyline.prototype.initialize.call(this, a, b), this._initWithHoles(a)
                },
                _initWithHoles: function(a) {
                    var b, c, d;
                    if (a && e.Util.isArray(a[0]) && "number" != typeof a[0][0])
                        for (this._latlngs = this._convertLatLngs(a[0]), this._holes = a.slice(1), b = 0, c = this._holes.length; c > b; b++) d = this._holes[b] = this._convertLatLngs(this._holes[b]), d[0].equals(d[d.length - 1]) && d.pop();
                    a = this._latlngs, a.length >= 2 && a[0].equals(a[a.length - 1]) && a.pop()
                },
                projectLatlngs: function() {
                    if (e.Polyline.prototype.projectLatlngs.call(this), this._holePoints = [], this._holes) {
                        var a, b, c, d;
                        for (a = 0, c = this._holes.length; c > a; a++)
                            for (this._holePoints[a] = [], b = 0, d = this._holes[a].length; d > b; b++) this._holePoints[a][b] = this._map.latLngToLayerPoint(this._holes[a][b])
                    }
                },
                setLatLngs: function(a) {
                    return a && e.Util.isArray(a[0]) && "number" != typeof a[0][0] ? (this._initWithHoles(a), this.redraw()) : e.Polyline.prototype.setLatLngs.call(this, a)
                },
                _clipPoints: function() {
                    var a = this._originalPoints,
                        b = [];
                    if (this._parts = [a].concat(this._holePoints), !this.options.noClip) {
                        for (var c = 0, d = this._parts.length; d > c; c++) {
                            var f = e.PolyUtil.clipPolygon(this._parts[c], this._map._pathViewport);
                            f.length && b.push(f)
                        }
                        this._parts = b
                    }
                },
                _getPathPartStr: function(a) {
                    var b = e.Polyline.prototype._getPathPartStr.call(this, a);
                    return b + (e.Browser.svg ? "z" : "x")
                }
            }), e.polygon = function(a, b) {
                return new e.Polygon(a, b)
            },
            function() {
                function a(a) {
                    return e.FeatureGroup.extend({
                        initialize: function(a, b) {
                            this._layers = {}, this._options = b, this.setLatLngs(a)
                        },
                        setLatLngs: function(b) {
                            var c = 0,
                                d = b.length;
                            for (this.eachLayer(function(a) {
                                    d > c ? a.setLatLngs(b[c++]) : this.removeLayer(a)
                                }, this); d > c;) this.addLayer(new a(b[c++], this._options));
                            return this
                        },
                        getLatLngs: function() {
                            var a = [];
                            return this.eachLayer(function(b) {
                                a.push(b.getLatLngs())
                            }), a
                        }
                    })
                }
                e.MultiPolyline = a(e.Polyline), e.MultiPolygon = a(e.Polygon), e.multiPolyline = function(a, b) {
                    return new e.MultiPolyline(a, b)
                }, e.multiPolygon = function(a, b) {
                    return new e.MultiPolygon(a, b)
                }
            }(), e.Rectangle = e.Polygon.extend({
                initialize: function(a, b) {
                    e.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(a), b)
                },
                setBounds: function(a) {
                    this.setLatLngs(this._boundsToLatLngs(a))
                },
                _boundsToLatLngs: function(a) {
                    return a = e.latLngBounds(a), [a.getSouthWest(), a.getNorthWest(), a.getNorthEast(), a.getSouthEast()]
                }
            }), e.rectangle = function(a, b) {
                return new e.Rectangle(a, b)
            }, e.Circle = e.Path.extend({
                initialize: function(a, b, c) {
                    e.Path.prototype.initialize.call(this, c), this._latlng = e.latLng(a), this._mRadius = b
                },
                options: {
                    fill: !0
                },
                setLatLng: function(a) {
                    return this._latlng = e.latLng(a), this.redraw()
                },
                setRadius: function(a) {
                    return this._mRadius = a, this.redraw()
                },
                projectLatlngs: function() {
                    var a = this._getLngRadius(),
                        b = this._latlng,
                        c = this._map.latLngToLayerPoint([b.lat, b.lng - a]);
                    this._point = this._map.latLngToLayerPoint(b), this._radius = Math.max(this._point.x - c.x, 1)
                },
                getBounds: function() {
                    var a = this._getLngRadius(),
                        b = 360 * (this._mRadius / 40075017),
                        c = this._latlng;
                    return new e.LatLngBounds([c.lat - b, c.lng - a], [c.lat + b, c.lng + a])
                },
                getLatLng: function() {
                    return this._latlng
                },
                getPathString: function() {
                    var a = this._point,
                        b = this._radius;
                    return this._checkIfEmpty() ? "" : e.Browser.svg ? "M" + a.x + "," + (a.y - b) + "A" + b + "," + b + ",0,1,1," + (a.x - .1) + "," + (a.y - b) + " z" : (a._round(), b = Math.round(b), "AL " + a.x + "," + a.y + " " + b + "," + b + " 0,23592600")
                },
                getRadius: function() {
                    return this._mRadius
                },
                _getLatRadius: function() {
                    return 360 * (this._mRadius / 40075017)
                },
                _getLngRadius: function() {
                    return this._getLatRadius() / Math.cos(e.LatLng.DEG_TO_RAD * this._latlng.lat)
                },
                _checkIfEmpty: function() {
                    if (!this._map) return !1;
                    var a = this._map._pathViewport,
                        b = this._radius,
                        c = this._point;
                    return c.x - b > a.max.x || c.y - b > a.max.y || c.x + b < a.min.x || c.y + b < a.min.y
                }
            }), e.circle = function(a, b, c) {
                return new e.Circle(a, b, c)
            }, e.CircleMarker = e.Circle.extend({
                options: {
                    radius: 10,
                    weight: 2
                },
                initialize: function(a, b) {
                    e.Circle.prototype.initialize.call(this, a, null, b), this._radius = this.options.radius
                },
                projectLatlngs: function() {
                    this._point = this._map.latLngToLayerPoint(this._latlng)
                },
                _updateStyle: function() {
                    e.Circle.prototype._updateStyle.call(this), this.setRadius(this.options.radius)
                },
                setLatLng: function(a) {
                    return e.Circle.prototype.setLatLng.call(this, a), this._popup && this._popup._isOpen && this._popup.setLatLng(a), this
                },
                setRadius: function(a) {
                    return this.options.radius = this._radius = a, this.redraw()
                },
                getRadius: function() {
                    return this._radius
                }
            }), e.circleMarker = function(a, b) {
                return new e.CircleMarker(a, b)
            }, e.Polyline.include(e.Path.CANVAS ? {
                _containsPoint: function(a, b) {
                    var c, d, f, g, h, i, j, k = this.options.weight / 2;
                    for (e.Browser.touch && (k += 10), c = 0, g = this._parts.length; g > c; c++)
                        for (j = this._parts[c], d = 0, h = j.length, f = h - 1; h > d; f = d++)
                            if ((b || 0 !== d) && (i = e.LineUtil.pointToSegmentDistance(a, j[f], j[d]), k >= i)) return !0;
                    return !1
                }
            } : {}), e.Polygon.include(e.Path.CANVAS ? {
                _containsPoint: function(a) {
                    var b, c, d, f, g, h, i, j, k = !1;
                    if (e.Polyline.prototype._containsPoint.call(this, a, !0)) return !0;
                    for (f = 0, i = this._parts.length; i > f; f++)
                        for (b = this._parts[f], g = 0, j = b.length, h = j - 1; j > g; h = g++) c = b[g], d = b[h], c.y > a.y != d.y > a.y && a.x < (d.x - c.x) * (a.y - c.y) / (d.y - c.y) + c.x && (k = !k);
                    return k
                }
            } : {}), e.Circle.include(e.Path.CANVAS ? {
                _drawPath: function() {
                    var a = this._point;
                    this._ctx.beginPath(), this._ctx.arc(a.x, a.y, this._radius, 0, 2 * Math.PI, !1)
                },
                _containsPoint: function(a) {
                    var b = this._point,
                        c = this.options.stroke ? this.options.weight / 2 : 0;
                    return a.distanceTo(b) <= this._radius + c
                }
            } : {}), e.CircleMarker.include(e.Path.CANVAS ? {
                _updateStyle: function() {
                    e.Path.prototype._updateStyle.call(this)
                }
            } : {}), e.GeoJSON = e.FeatureGroup.extend({
                initialize: function(a, b) {
                    e.setOptions(this, b), this._layers = {}, a && this.addData(a)
                },
                addData: function(a) {
                    var b, c, d, f = e.Util.isArray(a) ? a : a.features;
                    if (f) {
                        for (b = 0, c = f.length; c > b; b++) d = f[b], (d.geometries || d.geometry || d.features || d.coordinates) && this.addData(f[b]);
                        return this
                    }
                    var g = this.options;
                    if (!g.filter || g.filter(a)) {
                        var h = e.GeoJSON.geometryToLayer(a, g.pointToLayer, g.coordsToLatLng, g);
                        return h.feature = e.GeoJSON.asFeature(a), h.defaultOptions = h.options, this.resetStyle(h), g.onEachFeature && g.onEachFeature(a, h), this.addLayer(h)
                    }
                },
                resetStyle: function(a) {
                    var b = this.options.style;
                    b && (e.Util.extend(a.options, a.defaultOptions), this._setLayerStyle(a, b))
                },
                setStyle: function(a) {
                    this.eachLayer(function(b) {
                        this._setLayerStyle(b, a)
                    }, this)
                },
                _setLayerStyle: function(a, b) {
                    "function" == typeof b && (b = b(a.feature)), a.setStyle && a.setStyle(b)
                }
            }), e.extend(e.GeoJSON, {
                geometryToLayer: function(a, b, c, d) {
                    var f, g, h, i, j = "Feature" === a.type ? a.geometry : a,
                        k = j.coordinates,
                        l = [];
                    switch (c = c || this.coordsToLatLng, j.type) {
                        case "Point":
                            return f = c(k), b ? b(a, f) : new e.Marker(f);
                        case "MultiPoint":
                            for (h = 0, i = k.length; i > h; h++) f = c(k[h]), l.push(b ? b(a, f) : new e.Marker(f));
                            return new e.FeatureGroup(l);
                        case "LineString":
                            return g = this.coordsToLatLngs(k, 0, c), new e.Polyline(g, d);
                        case "Polygon":
                            if (2 === k.length && !k[1].length) throw new Error("Invalid GeoJSON object.");
                            return g = this.coordsToLatLngs(k, 1, c), new e.Polygon(g, d);
                        case "MultiLineString":
                            return g = this.coordsToLatLngs(k, 1, c), new e.MultiPolyline(g, d);
                        case "MultiPolygon":
                            return g = this.coordsToLatLngs(k, 2, c), new e.MultiPolygon(g, d);
                        case "GeometryCollection":
                            for (h = 0, i = j.geometries.length; i > h; h++) l.push(this.geometryToLayer({
                                geometry: j.geometries[h],
                                type: "Feature",
                                properties: a.properties
                            }, b, c, d));
                            return new e.FeatureGroup(l);
                        default:
                            throw new Error("Invalid GeoJSON object.")
                    }
                },
                coordsToLatLng: function(a) {
                    return new e.LatLng(a[1], a[0], a[2])
                },
                coordsToLatLngs: function(a, b, c) {
                    var d, e, f, g = [];
                    for (e = 0, f = a.length; f > e; e++) d = b ? this.coordsToLatLngs(a[e], b - 1, c) : (c || this.coordsToLatLng)(a[e]), g.push(d);
                    return g
                },
                latLngToCoords: function(a) {
                    var b = [a.lng, a.lat];
                    return a.alt !== c && b.push(a.alt), b
                },
                latLngsToCoords: function(a) {
                    for (var b = [], c = 0, d = a.length; d > c; c++) b.push(e.GeoJSON.latLngToCoords(a[c]));
                    return b
                },
                getFeature: function(a, b) {
                    return a.feature ? e.extend({}, a.feature, {
                        geometry: b
                    }) : e.GeoJSON.asFeature(b)
                },
                asFeature: function(a) {
                    return "Feature" === a.type ? a : {
                        type: "Feature",
                        properties: {},
                        geometry: a
                    }
                }
            });
        var g = {
            toGeoJSON: function() {
                return e.GeoJSON.getFeature(this, {
                    type: "Point",
                    coordinates: e.GeoJSON.latLngToCoords(this.getLatLng())
                })
            }
        };
        e.Marker.include(g), e.Circle.include(g), e.CircleMarker.include(g), e.Polyline.include({
                toGeoJSON: function() {
                    return e.GeoJSON.getFeature(this, {
                        type: "LineString",
                        coordinates: e.GeoJSON.latLngsToCoords(this.getLatLngs())
                    })
                }
            }), e.Polygon.include({
                toGeoJSON: function() {
                    var a, b, c, d = [e.GeoJSON.latLngsToCoords(this.getLatLngs())];
                    if (d[0].push(d[0][0]), this._holes)
                        for (a = 0, b = this._holes.length; b > a; a++) c = e.GeoJSON.latLngsToCoords(this._holes[a]), c.push(c[0]), d.push(c);
                    return e.GeoJSON.getFeature(this, {
                        type: "Polygon",
                        coordinates: d
                    })
                }
            }),
            function() {
                function a(a) {
                    return function() {
                        var b = [];
                        return this.eachLayer(function(a) {
                            b.push(a.toGeoJSON().geometry.coordinates)
                        }), e.GeoJSON.getFeature(this, {
                            type: a,
                            coordinates: b
                        })
                    }
                }
                e.MultiPolyline.include({
                    toGeoJSON: a("MultiLineString")
                }), e.MultiPolygon.include({
                    toGeoJSON: a("MultiPolygon")
                }), e.LayerGroup.include({
                    toGeoJSON: function() {
                        var b, c = this.feature && this.feature.geometry,
                            d = [];
                        if (c && "MultiPoint" === c.type) return a("MultiPoint").call(this);
                        var f = c && "GeometryCollection" === c.type;
                        return this.eachLayer(function(a) {
                            a.toGeoJSON && (b = a.toGeoJSON(), d.push(f ? b.geometry : e.GeoJSON.asFeature(b)))
                        }), f ? e.GeoJSON.getFeature(this, {
                            geometries: d,
                            type: "GeometryCollection"
                        }) : {
                            type: "FeatureCollection",
                            features: d
                        }
                    }
                })
            }(), e.geoJson = function(a, b) {
                return new e.GeoJSON(a, b)
            }, e.DomEvent = {
                addListener: function(a, b, c, d) {
                    var f, g, h, i = e.stamp(c),
                        j = "_leaflet_" + b + i;
                    return a[j] ? this : (f = function(b) {
                        return c.call(d || a, b || e.DomEvent._getEvent())
                    }, e.Browser.pointer && 0 === b.indexOf("touch") ? this.addPointerListener(a, b, f, i) : (e.Browser.touch && "dblclick" === b && this.addDoubleTapListener && this.addDoubleTapListener(a, f, i), "addEventListener" in a ? "mousewheel" === b ? (a.addEventListener("DOMMouseScroll", f, !1), a.addEventListener(b, f, !1)) : "mouseenter" === b || "mouseleave" === b ? (g = f, h = "mouseenter" === b ? "mouseover" : "mouseout", f = function(b) {
                        return e.DomEvent._checkMouse(a, b) ? g(b) : void 0
                    }, a.addEventListener(h, f, !1)) : "click" === b && e.Browser.android ? (g = f, f = function(a) {
                        return e.DomEvent._filterClick(a, g)
                    }, a.addEventListener(b, f, !1)) : a.addEventListener(b, f, !1) : "attachEvent" in a && a.attachEvent("on" + b, f), a[j] = f, this))
                },
                removeListener: function(a, b, c) {
                    var d = e.stamp(c),
                        f = "_leaflet_" + b + d,
                        g = a[f];
                    return g ? (e.Browser.pointer && 0 === b.indexOf("touch") ? this.removePointerListener(a, b, d) : e.Browser.touch && "dblclick" === b && this.removeDoubleTapListener ? this.removeDoubleTapListener(a, d) : "removeEventListener" in a ? "mousewheel" === b ? (a.removeEventListener("DOMMouseScroll", g, !1), a.removeEventListener(b, g, !1)) : "mouseenter" === b || "mouseleave" === b ? a.removeEventListener("mouseenter" === b ? "mouseover" : "mouseout", g, !1) : a.removeEventListener(b, g, !1) : "detachEvent" in a && a.detachEvent("on" + b, g), a[f] = null, this) : this
                },
                stopPropagation: function(a) {
                    return a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0, e.DomEvent._skipped(a), this
                },
                disableScrollPropagation: function(a) {
                    var b = e.DomEvent.stopPropagation;
                    return e.DomEvent.on(a, "mousewheel", b).on(a, "MozMousePixelScroll", b)
                },
                disableClickPropagation: function(a) {
                    for (var b = e.DomEvent.stopPropagation, c = e.Draggable.START.length - 1; c >= 0; c--) e.DomEvent.on(a, e.Draggable.START[c], b);
                    return e.DomEvent.on(a, "click", e.DomEvent._fakeStop).on(a, "dblclick", b)
                },
                preventDefault: function(a) {
                    return a.preventDefault ? a.preventDefault() : a.returnValue = !1, this
                },
                stop: function(a) {
                    return e.DomEvent.preventDefault(a).stopPropagation(a)
                },
                getMousePosition: function(a, c) {
                    var d = b.body,
                        f = b.documentElement,
                        g = e.DomUtil.documentIsLtr() ? a.pageX ? a.pageX - d.scrollLeft - f.scrollLeft : a.clientX : e.Browser.gecko ? a.pageX - d.scrollLeft - f.scrollLeft : a.pageX ? a.pageX - d.scrollLeft + f.scrollLeft : a.clientX,
                        h = a.pageY ? a.pageY - d.scrollTop - f.scrollTop : a.clientY,
                        i = new e.Point(g, h);
                    if (!c) return i;
                    var j = c.getBoundingClientRect(),
                        k = j.left - c.clientLeft,
                        l = j.top - c.clientTop;
                    return i._subtract(new e.Point(k, l))
                },
                getWheelDelta: function(a) {
                    var b = 0;
                    return a.wheelDelta && (b = a.wheelDelta / 120), a.detail && (b = -a.detail / 3), b
                },
                _skipEvents: {},
                _fakeStop: function(a) {
                    e.DomEvent._skipEvents[a.type] = !0
                },
                _skipped: function(a) {
                    var b = this._skipEvents[a.type];
                    return this._skipEvents[a.type] = !1, b
                },
                _checkMouse: function(a, b) {
                    var c = b.relatedTarget;
                    if (!c) return !0;
                    try {
                        for (; c && c !== a;) c = c.parentNode
                    } catch (d) {
                        return !1
                    }
                    return c !== a
                },
                _getEvent: function() {
                    var b = a.event;
                    if (!b)
                        for (var c = arguments.callee.caller; c && (b = c.arguments[0], !b || a.Event !== b.constructor);) c = c.caller;
                    return b
                },
                _filterClick: function(a, b) {
                    var c = a.timeStamp || a.originalEvent.timeStamp,
                        d = e.DomEvent._lastClick && c - e.DomEvent._lastClick;
                    return d && d > 100 && 1e3 > d || a.target._simulatedClick && !a._simulated ? (e.DomEvent.stop(a), void 0) : (e.DomEvent._lastClick = c, b(a))
                }
            }, e.DomEvent.on = e.DomEvent.addListener, e.DomEvent.off = e.DomEvent.removeListener, e.Draggable = e.Class.extend({
                includes: e.Mixin.Events,
                statics: {
                    START: e.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
                    END: {
                        mousedown: "mouseup",
                        touchstart: "touchend",
                        pointerdown: "touchend",
                        MSPointerDown: "touchend"
                    },
                    MOVE: {
                        mousedown: "mousemove",
                        touchstart: "touchmove",
                        pointerdown: "touchmove",
                        MSPointerDown: "touchmove"
                    }
                },
                initialize: function(a, b) {
                    this._element = a, this._dragStartTarget = b || a
                },
                enable: function() {
                    if (!this._enabled) {
                        for (var a = e.Draggable.START.length - 1; a >= 0; a--) e.DomEvent.on(this._dragStartTarget, e.Draggable.START[a], this._onDown, this);
                        this._enabled = !0
                    }
                },
                disable: function() {
                    if (this._enabled) {
                        for (var a = e.Draggable.START.length - 1; a >= 0; a--) e.DomEvent.off(this._dragStartTarget, e.Draggable.START[a], this._onDown, this);
                        this._enabled = !1, this._moved = !1
                    }
                },
                _onDown: function(a) {
                    if (this._moved = !1, !(a.shiftKey || 1 !== a.which && 1 !== a.button && !a.touches || (e.DomEvent.stopPropagation(a), e.Draggable._disabled || (e.DomUtil.disableImageDrag(), e.DomUtil.disableTextSelection(), this._moving)))) {
                        var c = a.touches ? a.touches[0] : a;
                        this._startPoint = new e.Point(c.clientX, c.clientY), this._startPos = this._newPos = e.DomUtil.getPosition(this._element), e.DomEvent.on(b, e.Draggable.MOVE[a.type], this._onMove, this).on(b, e.Draggable.END[a.type], this._onUp, this)
                    }
                },
                _onMove: function(a) {
                    if (a.touches && a.touches.length > 1) return this._moved = !0, void 0;
                    var c = a.touches && 1 === a.touches.length ? a.touches[0] : a,
                        d = new e.Point(c.clientX, c.clientY),
                        f = d.subtract(this._startPoint);
                    (f.x || f.y) && (e.DomEvent.preventDefault(a), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = e.DomUtil.getPosition(this._element).subtract(f), e.DomUtil.addClass(b.body, "leaflet-dragging"), e.DomUtil.addClass(a.target || a.srcElement, "leaflet-drag-target")), this._newPos = this._startPos.add(f), this._moving = !0, e.Util.cancelAnimFrame(this._animRequest), this._animRequest = e.Util.requestAnimFrame(this._updatePosition, this, !0, this._dragStartTarget))
                },
                _updatePosition: function() {
                    this.fire("predrag"), e.DomUtil.setPosition(this._element, this._newPos), this.fire("drag")
                },
                _onUp: function(a) {
                    e.DomUtil.removeClass(b.body, "leaflet-dragging"), e.DomUtil.removeClass(a.target || a.srcElement, "leaflet-drag-target");
                    for (var c in e.Draggable.MOVE) e.DomEvent.off(b, e.Draggable.MOVE[c], this._onMove).off(b, e.Draggable.END[c], this._onUp);
                    e.DomUtil.enableImageDrag(), e.DomUtil.enableTextSelection(), this._moved && this._moving && (e.Util.cancelAnimFrame(this._animRequest), this.fire("dragend", {
                        distance: this._newPos.distanceTo(this._startPos)
                    })), this._moving = !1
                }
            }), e.Handler = e.Class.extend({
                initialize: function(a) {
                    this._map = a
                },
                enable: function() {
                    this._enabled || (this._enabled = !0, this.addHooks())
                },
                disable: function() {
                    this._enabled && (this._enabled = !1, this.removeHooks())
                },
                enabled: function() {
                    return !!this._enabled
                }
            }), e.Map.mergeOptions({
                dragging: !0,
                inertia: !e.Browser.android23,
                inertiaDeceleration: 3400,
                inertiaMaxSpeed: 1 / 0,
                inertiaThreshold: e.Browser.touch ? 32 : 18,
                easeLinearity: .25,
                worldCopyJump: !1
            }), e.Map.Drag = e.Handler.extend({
                addHooks: function() {
                    if (!this._draggable) {
                        var a = this._map;
                        this._draggable = new e.Draggable(a._mapPane, a._container), this._draggable.on({
                            dragstart: this._onDragStart,
                            drag: this._onDrag,
                            dragend: this._onDragEnd
                        }, this), a.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDrag, this), a.on("viewreset", this._onViewReset, this), a.whenReady(this._onViewReset, this))
                    }
                    this._draggable.enable()
                },
                removeHooks: function() {
                    this._draggable.disable()
                },
                moved: function() {
                    return this._draggable && this._draggable._moved
                },
                _onDragStart: function() {
                    var a = this._map;
                    a._panAnim && a._panAnim.stop(), a.fire("movestart").fire("dragstart"), a.options.inertia && (this._positions = [], this._times = [])
                },
                _onDrag: function() {
                    if (this._map.options.inertia) {
                        var a = this._lastTime = +new Date,
                            b = this._lastPos = this._draggable._newPos;
                        this._positions.push(b), this._times.push(a), a - this._times[0] > 200 && (this._positions.shift(), this._times.shift())
                    }
                    this._map.fire("move").fire("drag")
                },
                _onViewReset: function() {
                    var a = this._map.getSize()._divideBy(2),
                        b = this._map.latLngToLayerPoint([0, 0]);
                    this._initialWorldOffset = b.subtract(a).x, this._worldWidth = this._map.project([0, 180]).x
                },
                _onPreDrag: function() {
                    var a = this._worldWidth,
                        b = Math.round(a / 2),
                        c = this._initialWorldOffset,
                        d = this._draggable._newPos.x,
                        e = (d - b + c) % a + b - c,
                        f = (d + b + c) % a - b - c,
                        g = Math.abs(e + c) < Math.abs(f + c) ? e : f;
                    this._draggable._newPos.x = g
                },
                _onDragEnd: function(a) {
                    var b = this._map,
                        c = b.options,
                        d = +new Date - this._lastTime,
                        f = !c.inertia || d > c.inertiaThreshold || !this._positions[0];
                    if (b.fire("dragend", a), f) b.fire("moveend");
                    else {
                        var g = this._lastPos.subtract(this._positions[0]),
                            h = (this._lastTime + d - this._times[0]) / 1e3,
                            i = c.easeLinearity,
                            j = g.multiplyBy(i / h),
                            k = j.distanceTo([0, 0]),
                            l = Math.min(c.inertiaMaxSpeed, k),
                            m = j.multiplyBy(l / k),
                            n = l / (c.inertiaDeceleration * i),
                            o = m.multiplyBy(-n / 2).round();
                        o.x && o.y ? (o = b._limitOffset(o, b.options.maxBounds), e.Util.requestAnimFrame(function() {
                            b.panBy(o, {
                                duration: n,
                                easeLinearity: i,
                                noMoveStart: !0
                            })
                        })) : b.fire("moveend")
                    }
                }
            }), e.Map.addInitHook("addHandler", "dragging", e.Map.Drag), e.Map.mergeOptions({
                doubleClickZoom: !0
            }), e.Map.DoubleClickZoom = e.Handler.extend({
                addHooks: function() {
                    this._map.on("dblclick", this._onDoubleClick, this)
                },
                removeHooks: function() {
                    this._map.off("dblclick", this._onDoubleClick, this)
                },
                _onDoubleClick: function(a) {
                    var b = this._map,
                        c = b.getZoom() + (a.originalEvent.shiftKey ? -1 : 1);
                    "center" === b.options.doubleClickZoom ? b.setZoom(c) : b.setZoomAround(a.containerPoint, c)
                }
            }), e.Map.addInitHook("addHandler", "doubleClickZoom", e.Map.DoubleClickZoom), e.Map.mergeOptions({
                scrollWheelZoom: !0
            }), e.Map.ScrollWheelZoom = e.Handler.extend({
                addHooks: function() {
                    e.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this), e.DomEvent.on(this._map._container, "MozMousePixelScroll", e.DomEvent.preventDefault), this._delta = 0
                },
                removeHooks: function() {
                    e.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll), e.DomEvent.off(this._map._container, "MozMousePixelScroll", e.DomEvent.preventDefault)
                },
                _onWheelScroll: function(a) {
                    var b = e.DomEvent.getWheelDelta(a);
                    this._delta += b, this._lastMousePos = this._map.mouseEventToContainerPoint(a), this._startTime || (this._startTime = +new Date);
                    var c = Math.max(40 - (+new Date - this._startTime), 0);
                    clearTimeout(this._timer), this._timer = setTimeout(e.bind(this._performZoom, this), c), e.DomEvent.preventDefault(a), e.DomEvent.stopPropagation(a)
                },
                _performZoom: function() {
                    var a = this._map,
                        b = this._delta,
                        c = a.getZoom();
                    b = b > 0 ? Math.ceil(b) : Math.floor(b), b = Math.max(Math.min(b, 4), -4), b = a._limitZoom(c + b) - c, this._delta = 0, this._startTime = null, b && ("center" === a.options.scrollWheelZoom ? a.setZoom(c + b) : a.setZoomAround(this._lastMousePos, c + b))
                }
            }), e.Map.addInitHook("addHandler", "scrollWheelZoom", e.Map.ScrollWheelZoom), e.extend(e.DomEvent, {
                _touchstart: e.Browser.msPointer ? "MSPointerDown" : e.Browser.pointer ? "pointerdown" : "touchstart",
                _touchend: e.Browser.msPointer ? "MSPointerUp" : e.Browser.pointer ? "pointerup" : "touchend",
                addDoubleTapListener: function(a, c, d) {
                    function f(a) {
                        var b;
                        if (e.Browser.pointer ? (o.push(a.pointerId), b = o.length) : b = a.touches.length, !(b > 1)) {
                            var c = Date.now(),
                                d = c - (h || c);
                            i = a.touches ? a.touches[0] : a, j = d > 0 && k >= d, h = c
                        }
                    }

                    function g(a) {
                        if (e.Browser.pointer) {
                            var b = o.indexOf(a.pointerId);
                            if (-1 === b) return;
                            o.splice(b, 1)
                        }
                        if (j) {
                            if (e.Browser.pointer) {
                                var d, f = {};
                                for (var g in i) d = i[g], f[g] = "function" == typeof d ? d.bind(i) : d;
                                i = f
                            }
                            i.type = "dblclick", c(i), h = null
                        }
                    }
                    var h, i, j = !1,
                        k = 250,
                        l = "_leaflet_",
                        m = this._touchstart,
                        n = this._touchend,
                        o = [];
                    a[l + m + d] = f, a[l + n + d] = g;
                    var p = e.Browser.pointer ? b.documentElement : a;
                    return a.addEventListener(m, f, !1), p.addEventListener(n, g, !1), e.Browser.pointer && p.addEventListener(e.DomEvent.POINTER_CANCEL, g, !1), this
                },
                removeDoubleTapListener: function(a, c) {
                    var d = "_leaflet_";
                    return a.removeEventListener(this._touchstart, a[d + this._touchstart + c], !1), (e.Browser.pointer ? b.documentElement : a).removeEventListener(this._touchend, a[d + this._touchend + c], !1), e.Browser.pointer && b.documentElement.removeEventListener(e.DomEvent.POINTER_CANCEL, a[d + this._touchend + c], !1), this
                }
            }), e.extend(e.DomEvent, {
                POINTER_DOWN: e.Browser.msPointer ? "MSPointerDown" : "pointerdown",
                POINTER_MOVE: e.Browser.msPointer ? "MSPointerMove" : "pointermove",
                POINTER_UP: e.Browser.msPointer ? "MSPointerUp" : "pointerup",
                POINTER_CANCEL: e.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
                _pointers: [],
                _pointerDocumentListener: !1,
                addPointerListener: function(a, b, c, d) {
                    switch (b) {
                        case "touchstart":
                            return this.addPointerListenerStart(a, b, c, d);
                        case "touchend":
                            return this.addPointerListenerEnd(a, b, c, d);
                        case "touchmove":
                            return this.addPointerListenerMove(a, b, c, d);
                        default:
                            throw "Unknown touch event type"
                    }
                },
                addPointerListenerStart: function(a, c, d, f) {
                    var g = "_leaflet_",
                        h = this._pointers,
                        i = function(a) {
                            e.DomEvent.preventDefault(a);
                            for (var b = !1, c = 0; c < h.length; c++)
                                if (h[c].pointerId === a.pointerId) {
                                    b = !0;
                                    break
                                }
                            b || h.push(a), a.touches = h.slice(), a.changedTouches = [a], d(a)
                        };
                    if (a[g + "touchstart" + f] = i, a.addEventListener(this.POINTER_DOWN, i, !1), !this._pointerDocumentListener) {
                        var j = function(a) {
                            for (var b = 0; b < h.length; b++)
                                if (h[b].pointerId === a.pointerId) {
                                    h.splice(b, 1);
                                    break
                                }
                        };
                        b.documentElement.addEventListener(this.POINTER_UP, j, !1), b.documentElement.addEventListener(this.POINTER_CANCEL, j, !1), this._pointerDocumentListener = !0
                    }
                    return this
                },
                addPointerListenerMove: function(a, b, c, d) {
                    function e(a) {
                        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType || 0 !== a.buttons) {
                            for (var b = 0; b < g.length; b++)
                                if (g[b].pointerId === a.pointerId) {
                                    g[b] = a;
                                    break
                                }
                            a.touches = g.slice(), a.changedTouches = [a], c(a)
                        }
                    }
                    var f = "_leaflet_",
                        g = this._pointers;
                    return a[f + "touchmove" + d] = e, a.addEventListener(this.POINTER_MOVE, e, !1), this
                },
                addPointerListenerEnd: function(a, b, c, d) {
                    var e = "_leaflet_",
                        f = this._pointers,
                        g = function(a) {
                            for (var b = 0; b < f.length; b++)
                                if (f[b].pointerId === a.pointerId) {
                                    f.splice(b, 1);
                                    break
                                }
                            a.touches = f.slice(), a.changedTouches = [a], c(a)
                        };
                    return a[e + "touchend" + d] = g, a.addEventListener(this.POINTER_UP, g, !1), a.addEventListener(this.POINTER_CANCEL, g, !1), this
                },
                removePointerListener: function(a, b, c) {
                    var d = "_leaflet_",
                        e = a[d + b + c];
                    switch (b) {
                        case "touchstart":
                            a.removeEventListener(this.POINTER_DOWN, e, !1);
                            break;
                        case "touchmove":
                            a.removeEventListener(this.POINTER_MOVE, e, !1);
                            break;
                        case "touchend":
                            a.removeEventListener(this.POINTER_UP, e, !1), a.removeEventListener(this.POINTER_CANCEL, e, !1)
                    }
                    return this
                }
            }), e.Map.mergeOptions({
                touchZoom: e.Browser.touch && !e.Browser.android23,
                bounceAtZoomLimits: !0
            }), e.Map.TouchZoom = e.Handler.extend({
                addHooks: function() {
                    e.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this)
                },
                removeHooks: function() {
                    e.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this)
                },
                _onTouchStart: function(a) {
                    var c = this._map;
                    if (a.touches && 2 === a.touches.length && !c._animatingZoom && !this._zooming) {
                        var d = c.mouseEventToLayerPoint(a.touches[0]),
                            f = c.mouseEventToLayerPoint(a.touches[1]),
                            g = c._getCenterLayerPoint();
                        this._startCenter = d.add(f)._divideBy(2), this._startDist = d.distanceTo(f), this._moved = !1, this._zooming = !0, this._centerOffset = g.subtract(this._startCenter), c._panAnim && c._panAnim.stop(), e.DomEvent.on(b, "touchmove", this._onTouchMove, this).on(b, "touchend", this._onTouchEnd, this), e.DomEvent.preventDefault(a)
                    }
                },
                _onTouchMove: function(a) {
                    var b = this._map;
                    if (a.touches && 2 === a.touches.length && this._zooming) {
                        var c = b.mouseEventToLayerPoint(a.touches[0]),
                            d = b.mouseEventToLayerPoint(a.touches[1]);
                        this._scale = c.distanceTo(d) / this._startDist, this._delta = c._add(d)._divideBy(2)._subtract(this._startCenter), 1 !== this._scale && (b.options.bounceAtZoomLimits || !(b.getZoom() === b.getMinZoom() && this._scale < 1 || b.getZoom() === b.getMaxZoom() && this._scale > 1)) && (this._moved || (e.DomUtil.addClass(b._mapPane, "leaflet-touching"), b.fire("movestart").fire("zoomstart"), this._moved = !0), e.Util.cancelAnimFrame(this._animRequest), this._animRequest = e.Util.requestAnimFrame(this._updateOnMove, this, !0, this._map._container), e.DomEvent.preventDefault(a))
                    }
                },
                _updateOnMove: function() {
                    var a = this._map,
                        b = this._getScaleOrigin(),
                        c = a.layerPointToLatLng(b),
                        d = a.getScaleZoom(this._scale);
                    a._animateZoom(c, d, this._startCenter, this._scale, this._delta)
                },
                _onTouchEnd: function() {
                    if (!this._moved || !this._zooming) return this._zooming = !1, void 0;
                    var a = this._map;
                    this._zooming = !1, e.DomUtil.removeClass(a._mapPane, "leaflet-touching"), e.Util.cancelAnimFrame(this._animRequest), e.DomEvent.off(b, "touchmove", this._onTouchMove).off(b, "touchend", this._onTouchEnd);
                    var c = this._getScaleOrigin(),
                        d = a.layerPointToLatLng(c),
                        f = a.getZoom(),
                        g = a.getScaleZoom(this._scale) - f,
                        h = g > 0 ? Math.ceil(g) : Math.floor(g),
                        i = a._limitZoom(f + h),
                        j = a.getZoomScale(i) / this._scale;
                    a._animateZoom(d, i, c, j)
                },
                _getScaleOrigin: function() {
                    var a = this._centerOffset.subtract(this._delta).divideBy(this._scale);
                    return this._startCenter.add(a)
                }
            }), e.Map.addInitHook("addHandler", "touchZoom", e.Map.TouchZoom), e.Map.mergeOptions({
                tap: !0,
                tapTolerance: 15
            }), e.Map.Tap = e.Handler.extend({
                addHooks: function() {
                    e.DomEvent.on(this._map._container, "touchstart", this._onDown, this)
                },
                removeHooks: function() {
                    e.DomEvent.off(this._map._container, "touchstart", this._onDown, this)
                },
                _onDown: function(a) {
                    if (a.touches) {
                        if (e.DomEvent.preventDefault(a), this._fireClick = !0, a.touches.length > 1) return this._fireClick = !1, clearTimeout(this._holdTimeout), void 0;
                        var c = a.touches[0],
                            d = c.target;
                        this._startPos = this._newPos = new e.Point(c.clientX, c.clientY), d.tagName && "a" === d.tagName.toLowerCase() && e.DomUtil.addClass(d, "leaflet-active"), this._holdTimeout = setTimeout(e.bind(function() {
                            this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", c))
                        }, this), 1e3), e.DomEvent.on(b, "touchmove", this._onMove, this).on(b, "touchend", this._onUp, this)
                    }
                },
                _onUp: function(a) {
                    if (clearTimeout(this._holdTimeout), e.DomEvent.off(b, "touchmove", this._onMove, this).off(b, "touchend", this._onUp, this), this._fireClick && a && a.changedTouches) {
                        var c = a.changedTouches[0],
                            d = c.target;
                        d && d.tagName && "a" === d.tagName.toLowerCase() && e.DomUtil.removeClass(d, "leaflet-active"), this._isTapValid() && this._simulateEvent("click", c)
                    }
                },
                _isTapValid: function() {
                    return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
                },
                _onMove: function(a) {
                    var b = a.touches[0];
                    this._newPos = new e.Point(b.clientX, b.clientY)
                },
                _simulateEvent: function(c, d) {
                    var e = b.createEvent("MouseEvents");
                    e._simulated = !0, d.target._simulatedClick = !0, e.initMouseEvent(c, !0, !0, a, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), d.target.dispatchEvent(e)
                }
            }), e.Browser.touch && !e.Browser.pointer && e.Map.addInitHook("addHandler", "tap", e.Map.Tap), e.Map.mergeOptions({
                boxZoom: !0
            }), e.Map.BoxZoom = e.Handler.extend({
                initialize: function(a) {
                    this._map = a, this._container = a._container, this._pane = a._panes.overlayPane, this._moved = !1
                },
                addHooks: function() {
                    e.DomEvent.on(this._container, "mousedown", this._onMouseDown, this)
                },
                removeHooks: function() {
                    e.DomEvent.off(this._container, "mousedown", this._onMouseDown), this._moved = !1
                },
                moved: function() {
                    return this._moved
                },
                _onMouseDown: function(a) {
                    return this._moved = !1, !a.shiftKey || 1 !== a.which && 1 !== a.button ? !1 : (e.DomUtil.disableTextSelection(), e.DomUtil.disableImageDrag(), this._startLayerPoint = this._map.mouseEventToLayerPoint(a), e.DomEvent.on(b, "mousemove", this._onMouseMove, this).on(b, "mouseup", this._onMouseUp, this).on(b, "keydown", this._onKeyDown, this), void 0)
                },
                _onMouseMove: function(a) {
                    this._moved || (this._box = e.DomUtil.create("div", "leaflet-zoom-box", this._pane), e.DomUtil.setPosition(this._box, this._startLayerPoint), this._container.style.cursor = "crosshair", this._map.fire("boxzoomstart"));
                    var b = this._startLayerPoint,
                        c = this._box,
                        d = this._map.mouseEventToLayerPoint(a),
                        f = d.subtract(b),
                        g = new e.Point(Math.min(d.x, b.x), Math.min(d.y, b.y));
                    e.DomUtil.setPosition(c, g), this._moved = !0, c.style.width = Math.max(0, Math.abs(f.x) - 4) + "px", c.style.height = Math.max(0, Math.abs(f.y) - 4) + "px"
                },
                _finish: function() {
                    this._moved && (this._pane.removeChild(this._box), this._container.style.cursor = ""), e.DomUtil.enableTextSelection(), e.DomUtil.enableImageDrag(), e.DomEvent.off(b, "mousemove", this._onMouseMove).off(b, "mouseup", this._onMouseUp).off(b, "keydown", this._onKeyDown)
                },
                _onMouseUp: function(a) {
                    this._finish();
                    var b = this._map,
                        c = b.mouseEventToLayerPoint(a);
                    if (!this._startLayerPoint.equals(c)) {
                        var d = new e.LatLngBounds(b.layerPointToLatLng(this._startLayerPoint), b.layerPointToLatLng(c));
                        b.fitBounds(d), b.fire("boxzoomend", {
                            boxZoomBounds: d
                        })
                    }
                },
                _onKeyDown: function(a) {
                    27 === a.keyCode && this._finish()
                }
            }), e.Map.addInitHook("addHandler", "boxZoom", e.Map.BoxZoom), e.Map.mergeOptions({
                keyboard: !0,
                keyboardPanOffset: 80,
                keyboardZoomOffset: 1
            }), e.Map.Keyboard = e.Handler.extend({
                keyCodes: {
                    left: [37],
                    right: [39],
                    down: [40],
                    up: [38],
                    zoomIn: [187, 107, 61, 171],
                    zoomOut: [189, 109, 173]
                },
                initialize: function(a) {
                    this._map = a, this._setPanOffset(a.options.keyboardPanOffset), this._setZoomOffset(a.options.keyboardZoomOffset)
                },
                addHooks: function() {
                    var a = this._map._container; - 1 === a.tabIndex && (a.tabIndex = "0"), e.DomEvent.on(a, "focus", this._onFocus, this).on(a, "blur", this._onBlur, this).on(a, "mousedown", this._onMouseDown, this), this._map.on("focus", this._addHooks, this).on("blur", this._removeHooks, this)
                },
                removeHooks: function() {
                    this._removeHooks();
                    var a = this._map._container;
                    e.DomEvent.off(a, "focus", this._onFocus, this).off(a, "blur", this._onBlur, this).off(a, "mousedown", this._onMouseDown, this), this._map.off("focus", this._addHooks, this).off("blur", this._removeHooks, this)
                },
                _onMouseDown: function() {
                    if (!this._focused) {
                        var c = b.body,
                            d = b.documentElement,
                            e = c.scrollTop || d.scrollTop,
                            f = c.scrollLeft || d.scrollLeft;
                        this._map._container.focus(), a.scrollTo(f, e)
                    }
                },
                _onFocus: function() {
                    this._focused = !0, this._map.fire("focus")
                },
                _onBlur: function() {
                    this._focused = !1, this._map.fire("blur")
                },
                _setPanOffset: function(a) {
                    var b, c, d = this._panKeys = {},
                        e = this.keyCodes;
                    for (b = 0, c = e.left.length; c > b; b++) d[e.left[b]] = [-1 * a, 0];
                    for (b = 0, c = e.right.length; c > b; b++) d[e.right[b]] = [a, 0];
                    for (b = 0, c = e.down.length; c > b; b++) d[e.down[b]] = [0, a];
                    for (b = 0, c = e.up.length; c > b; b++) d[e.up[b]] = [0, -1 * a]
                },
                _setZoomOffset: function(a) {
                    var b, c, d = this._zoomKeys = {},
                        e = this.keyCodes;
                    for (b = 0, c = e.zoomIn.length; c > b; b++) d[e.zoomIn[b]] = a;
                    for (b = 0, c = e.zoomOut.length; c > b; b++) d[e.zoomOut[b]] = -a
                },
                _addHooks: function() {
                    e.DomEvent.on(b, "keydown", this._onKeyDown, this)
                },
                _removeHooks: function() {
                    e.DomEvent.off(b, "keydown", this._onKeyDown, this)
                },
                _onKeyDown: function(a) {
                    var b = a.keyCode,
                        c = this._map;
                    if (b in this._panKeys) {
                        if (c._panAnim && c._panAnim._inProgress) return;
                        c.panBy(this._panKeys[b]), c.options.maxBounds && c.panInsideBounds(c.options.maxBounds)
                    } else {
                        if (!(b in this._zoomKeys)) return;
                        c.setZoom(c.getZoom() + this._zoomKeys[b])
                    }
                    e.DomEvent.stop(a)
                }
            }), e.Map.addInitHook("addHandler", "keyboard", e.Map.Keyboard), e.Handler.MarkerDrag = e.Handler.extend({
                initialize: function(a) {
                    this._marker = a
                },
                addHooks: function() {
                    var a = this._marker._icon;
                    this._draggable || (this._draggable = new e.Draggable(a, a)), this._draggable.on("dragstart", this._onDragStart, this).on("drag", this._onDrag, this).on("dragend", this._onDragEnd, this), this._draggable.enable(), e.DomUtil.addClass(this._marker._icon, "leaflet-marker-draggable")
                },
                removeHooks: function() {
                    this._draggable.off("dragstart", this._onDragStart, this).off("drag", this._onDrag, this).off("dragend", this._onDragEnd, this), this._draggable.disable(), e.DomUtil.removeClass(this._marker._icon, "leaflet-marker-draggable")
                },
                moved: function() {
                    return this._draggable && this._draggable._moved
                },
                _onDragStart: function() {
                    this._marker.closePopup().fire("movestart").fire("dragstart")
                },
                _onDrag: function() {
                    var a = this._marker,
                        b = a._shadow,
                        c = e.DomUtil.getPosition(a._icon),
                        d = a._map.layerPointToLatLng(c);
                    b && e.DomUtil.setPosition(b, c), a._latlng = d, a.fire("move", {
                        latlng: d
                    }).fire("drag")
                },
                _onDragEnd: function(a) {
                    this._marker.fire("moveend").fire("dragend", a)
                }
            }), e.Control = e.Class.extend({
                options: {
                    position: "topright"
                },
                initialize: function(a) {
                    e.setOptions(this, a)
                },
                getPosition: function() {
                    return this.options.position
                },
                setPosition: function(a) {
                    var b = this._map;
                    return b && b.removeControl(this), this.options.position = a, b && b.addControl(this), this
                },
                getContainer: function() {
                    return this._container
                },
                addTo: function(a) {
                    this._map = a;
                    var b = this._container = this.onAdd(a),
                        c = this.getPosition(),
                        d = a._controlCorners[c];
                    return e.DomUtil.addClass(b, "leaflet-control"), -1 !== c.indexOf("bottom") ? d.insertBefore(b, d.firstChild) : d.appendChild(b), this
                },
                removeFrom: function(a) {
                    var b = this.getPosition(),
                        c = a._controlCorners[b];
                    return c.removeChild(this._container), this._map = null, this.onRemove && this.onRemove(a), this
                },
                _refocusOnMap: function() {
                    this._map && this._map.getContainer().focus()
                }
            }), e.control = function(a) {
                return new e.Control(a)
            }, e.Map.include({
                addControl: function(a) {
                    return a.addTo(this), this
                },
                removeControl: function(a) {
                    return a.removeFrom(this), this
                },
                _initControlPos: function() {
                    function a(a, f) {
                        var g = c + a + " " + c + f;
                        b[a + f] = e.DomUtil.create("div", g, d)
                    }
                    var b = this._controlCorners = {},
                        c = "leaflet-",
                        d = this._controlContainer = e.DomUtil.create("div", c + "control-container", this._container);
                    a("top", "left"), a("top", "right"), a("bottom", "left"), a("bottom", "right")
                },
                _clearControlPos: function() {
                    this._container.removeChild(this._controlContainer)
                }
            }), e.Control.Zoom = e.Control.extend({
                options: {
                    position: "topleft",
                    zoomInText: "+",
                    zoomInTitle: "Zoom in",
                    zoomOutText: "-",
                    zoomOutTitle: "Zoom out"
                },
                onAdd: function(a) {
                    var b = "leaflet-control-zoom",
                        c = e.DomUtil.create("div", b + " leaflet-bar");
                    return this._map = a, this._zoomInButton = this._createButton(this.options.zoomInText, this.options.zoomInTitle, b + "-in", c, this._zoomIn, this), this._zoomOutButton = this._createButton(this.options.zoomOutText, this.options.zoomOutTitle, b + "-out", c, this._zoomOut, this), this._updateDisabled(), a.on("zoomend zoomlevelschange", this._updateDisabled, this), c
                },
                onRemove: function(a) {
                    a.off("zoomend zoomlevelschange", this._updateDisabled, this)
                },
                _zoomIn: function(a) {
                    this._map.zoomIn(a.shiftKey ? 3 : 1)
                },
                _zoomOut: function(a) {
                    this._map.zoomOut(a.shiftKey ? 3 : 1)
                },
                _createButton: function(a, b, c, d, f, g) {
                    var h = e.DomUtil.create("a", c, d);
                    h.innerHTML = a, h.href = "#", h.title = b;
                    var i = e.DomEvent.stopPropagation;
                    return e.DomEvent.on(h, "click", i).on(h, "mousedown", i).on(h, "dblclick", i).on(h, "click", e.DomEvent.preventDefault).on(h, "click", f, g).on(h, "click", this._refocusOnMap, g), h
                },
                _updateDisabled: function() {
                    var a = this._map,
                        b = "leaflet-disabled";
                    e.DomUtil.removeClass(this._zoomInButton, b), e.DomUtil.removeClass(this._zoomOutButton, b), a._zoom === a.getMinZoom() && e.DomUtil.addClass(this._zoomOutButton, b), a._zoom === a.getMaxZoom() && e.DomUtil.addClass(this._zoomInButton, b)
                }
            }), e.Map.mergeOptions({
                zoomControl: !0
            }), e.Map.addInitHook(function() {
                this.options.zoomControl && (this.zoomControl = new e.Control.Zoom, this.addControl(this.zoomControl))
            }), e.control.zoom = function(a) {
                return new e.Control.Zoom(a)
            }, e.Control.Attribution = e.Control.extend({
                options: {
                    position: "bottomright",
                    prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
                },
                initialize: function(a) {
                    e.setOptions(this, a), this._attributions = {}
                },
                onAdd: function(a) {
                    this._container = e.DomUtil.create("div", "leaflet-control-attribution"), e.DomEvent.disableClickPropagation(this._container);
                    for (var b in a._layers) a._layers[b].getAttribution && this.addAttribution(a._layers[b].getAttribution());
                    return a.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this), this._update(), this._container
                },
                onRemove: function(a) {
                    a.off("layeradd", this._onLayerAdd).off("layerremove", this._onLayerRemove)
                },
                setPrefix: function(a) {
                    return this.options.prefix = a, this._update(), this
                },
                addAttribution: function(a) {
                    return a ? (this._attributions[a] || (this._attributions[a] = 0), this._attributions[a]++, this._update(), this) : void 0
                },
                removeAttribution: function(a) {
                    return a ? (this._attributions[a] && (this._attributions[a]--, this._update()), this) : void 0
                },
                _update: function() {
                    if (this._map) {
                        var a = [];
                        for (var b in this._attributions) this._attributions[b] && a.push(b);
                        var c = [];
                        this.options.prefix && c.push(this.options.prefix), a.length && c.push(a.join(", ")), this._container.innerHTML = c.join(" | ")
                    }
                },
                _onLayerAdd: function(a) {
                    a.layer.getAttribution && this.addAttribution(a.layer.getAttribution())
                },
                _onLayerRemove: function(a) {
                    a.layer.getAttribution && this.removeAttribution(a.layer.getAttribution())
                }
            }), e.Map.mergeOptions({
                attributionControl: !0
            }), e.Map.addInitHook(function() {
                this.options.attributionControl && (this.attributionControl = (new e.Control.Attribution).addTo(this))
            }), e.control.attribution = function(a) {
                return new e.Control.Attribution(a)
            }, e.Control.Scale = e.Control.extend({
                options: {
                    position: "bottomleft",
                    maxWidth: 100,
                    metric: !0,
                    imperial: !0,
                    updateWhenIdle: !1
                },
                onAdd: function(a) {
                    this._map = a;
                    var b = "leaflet-control-scale",
                        c = e.DomUtil.create("div", b),
                        d = this.options;
                    return this._addScales(d, b, c), a.on(d.updateWhenIdle ? "moveend" : "move", this._update, this), a.whenReady(this._update, this), c
                },
                onRemove: function(a) {
                    a.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
                },
                _addScales: function(a, b, c) {
                    a.metric && (this._mScale = e.DomUtil.create("div", b + "-line", c)), a.imperial && (this._iScale = e.DomUtil.create("div", b + "-line", c))
                },
                _update: function() {
                    var a = this._map.getBounds(),
                        b = a.getCenter().lat,
                        c = 6378137 * Math.PI * Math.cos(b * Math.PI / 180),
                        d = c * (a.getNorthEast().lng - a.getSouthWest().lng) / 180,
                        e = this._map.getSize(),
                        f = this.options,
                        g = 0;
                    e.x > 0 && (g = d * (f.maxWidth / e.x)), this._updateScales(f, g)
                },
                _updateScales: function(a, b) {
                    a.metric && b && this._updateMetric(b), a.imperial && b && this._updateImperial(b)
                },
                _updateMetric: function(a) {
                    var b = this._getRoundNum(a);
                    this._mScale.style.width = this._getScaleWidth(b / a) + "px", this._mScale.innerHTML = 1e3 > b ? b + " m" : b / 1e3 + " km"
                },
                _updateImperial: function(a) {
                    var b, c, d, e = 3.2808399 * a,
                        f = this._iScale;
                    e > 5280 ? (b = e / 5280, c = this._getRoundNum(b), f.style.width = this._getScaleWidth(c / b) + "px", f.innerHTML = c + " mi") : (d = this._getRoundNum(e), f.style.width = this._getScaleWidth(d / e) + "px", f.innerHTML = d + " ft")
                },
                _getScaleWidth: function(a) {
                    return Math.round(this.options.maxWidth * a) - 10
                },
                _getRoundNum: function(a) {
                    var b = Math.pow(10, (Math.floor(a) + "").length - 1),
                        c = a / b;
                    return c = c >= 10 ? 10 : c >= 5 ? 5 : c >= 3 ? 3 : c >= 2 ? 2 : 1, b * c
                }
            }), e.control.scale = function(a) {
                return new e.Control.Scale(a)
            }, e.Control.Layers = e.Control.extend({
                options: {
                    collapsed: !0,
                    position: "topright",
                    autoZIndex: !0
                },
                initialize: function(a, b, c) {
                    e.setOptions(this, c), this._layers = {}, this._lastZIndex = 0, this._handlingClick = !1;
                    for (var d in a) this._addLayer(a[d], d);
                    for (d in b) this._addLayer(b[d], d, !0)
                },
                onAdd: function(a) {
                    return this._initLayout(), this._update(), a.on("layeradd", this._onLayerChange, this).on("layerremove", this._onLayerChange, this), this._container
                },
                onRemove: function(a) {
                    a.off("layeradd", this._onLayerChange).off("layerremove", this._onLayerChange)
                },
                addBaseLayer: function(a, b) {
                    return this._addLayer(a, b), this._update(), this
                },
                addOverlay: function(a, b) {
                    return this._addLayer(a, b, !0), this._update(), this
                },
                removeLayer: function(a) {
                    var b = e.stamp(a);
                    return delete this._layers[b], this._update(), this
                },
                _initLayout: function() {
                    var a = "leaflet-control-layers",
                        b = this._container = e.DomUtil.create("div", a);
                    b.setAttribute("aria-haspopup", !0), e.Browser.touch ? e.DomEvent.on(b, "click", e.DomEvent.stopPropagation) : e.DomEvent.disableClickPropagation(b).disableScrollPropagation(b);
                    var c = this._form = e.DomUtil.create("form", a + "-list");
                    if (this.options.collapsed) {
                        e.Browser.android || e.DomEvent.on(b, "mouseover", this._expand, this).on(b, "mouseout", this._collapse, this);
                        var d = this._layersLink = e.DomUtil.create("a", a + "-toggle", b);
                        d.href = "#", d.title = "Layers", e.Browser.touch ? e.DomEvent.on(d, "click", e.DomEvent.stop).on(d, "click", this._expand, this) : e.DomEvent.on(d, "focus", this._expand, this), e.DomEvent.on(c, "click", function() {
                            setTimeout(e.bind(this._onInputClick, this), 0)
                        }, this), this._map.on("click", this._collapse, this)
                    } else this._expand();
                    this._baseLayersList = e.DomUtil.create("div", a + "-base", c), this._separator = e.DomUtil.create("div", a + "-separator", c), this._overlaysList = e.DomUtil.create("div", a + "-overlays", c), b.appendChild(c)
                },
                _addLayer: function(a, b, c) {
                    var d = e.stamp(a);
                    this._layers[d] = {
                        layer: a,
                        name: b,
                        overlay: c
                    }, this.options.autoZIndex && a.setZIndex && (this._lastZIndex++, a.setZIndex(this._lastZIndex))
                },
                _update: function() {
                    if (this._container) {
                        this._baseLayersList.innerHTML = "", this._overlaysList.innerHTML = "";
                        var a, b, c = !1,
                            d = !1;
                        for (a in this._layers) b = this._layers[a], this._addItem(b), d = d || b.overlay, c = c || !b.overlay;
                        this._separator.style.display = d && c ? "" : "none"
                    }
                },
                _onLayerChange: function(a) {
                    var b = this._layers[e.stamp(a.layer)];
                    if (b) {
                        this._handlingClick || this._update();
                        var c = b.overlay ? "layeradd" === a.type ? "overlayadd" : "overlayremove" : "layeradd" === a.type ? "baselayerchange" : null;
                        c && this._map.fire(c, b)
                    }
                },
                _createRadioElement: function(a, c) {
                    var d = '<input type="radio" class="leaflet-control-layers-selector" name="' + a + '"';
                    c && (d += ' checked="checked"'), d += "/>";
                    var e = b.createElement("div");
                    return e.innerHTML = d, e.firstChild
                },
                _addItem: function(a) {
                    var c, d = b.createElement("label"),
                        f = this._map.hasLayer(a.layer);
                    a.overlay ? (c = b.createElement("input"), c.type = "checkbox", c.className = "leaflet-control-layers-selector", c.defaultChecked = f) : c = this._createRadioElement("leaflet-base-layers", f), c.layerId = e.stamp(a.layer), e.DomEvent.on(c, "click", this._onInputClick, this);
                    var g = b.createElement("span");
                    g.innerHTML = " " + a.name, d.appendChild(c), d.appendChild(g);
                    var h = a.overlay ? this._overlaysList : this._baseLayersList;
                    return h.appendChild(d), d
                },
                _onInputClick: function() {
                    var a, b, c, d = this._form.getElementsByTagName("input"),
                        e = d.length;
                    for (this._handlingClick = !0, a = 0; e > a; a++) b = d[a], c = this._layers[b.layerId], b.checked && !this._map.hasLayer(c.layer) ? this._map.addLayer(c.layer) : !b.checked && this._map.hasLayer(c.layer) && this._map.removeLayer(c.layer);
                    this._handlingClick = !1, this._refocusOnMap()
                },
                _expand: function() {
                    e.DomUtil.addClass(this._container, "leaflet-control-layers-expanded")
                },
                _collapse: function() {
                    this._container.className = this._container.className.replace(" leaflet-control-layers-expanded", "")
                }
            }), e.control.layers = function(a, b, c) {
                return new e.Control.Layers(a, b, c)
            }, e.PosAnimation = e.Class.extend({
                includes: e.Mixin.Events,
                run: function(a, b, c, d) {
                    this.stop(), this._el = a, this._inProgress = !0, this._newPos = b, this.fire("start"), a.style[e.DomUtil.TRANSITION] = "all " + (c || .25) + "s cubic-bezier(0,0," + (d || .5) + ",1)", e.DomEvent.on(a, e.DomUtil.TRANSITION_END, this._onTransitionEnd, this), e.DomUtil.setPosition(a, b), e.Util.falseFn(a.offsetWidth), this._stepTimer = setInterval(e.bind(this._onStep, this), 50)
                },
                stop: function() {
                    this._inProgress && (e.DomUtil.setPosition(this._el, this._getPos()), this._onTransitionEnd(), e.Util.falseFn(this._el.offsetWidth))
                },
                _onStep: function() {
                    var a = this._getPos();
                    return a ? (this._el._leaflet_pos = a, this.fire("step"), void 0) : (this._onTransitionEnd(), void 0)
                },
                _transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,
                _getPos: function() {
                    var b, c, d, f = this._el,
                        g = a.getComputedStyle(f);
                    if (e.Browser.any3d) {
                        if (d = g[e.DomUtil.TRANSFORM].match(this._transformRe), !d) return;
                        b = parseFloat(d[1]), c = parseFloat(d[2])
                    } else b = parseFloat(g.left), c = parseFloat(g.top);
                    return new e.Point(b, c, !0)
                },
                _onTransitionEnd: function() {
                    e.DomEvent.off(this._el, e.DomUtil.TRANSITION_END, this._onTransitionEnd, this), this._inProgress && (this._inProgress = !1, this._el.style[e.DomUtil.TRANSITION] = "", this._el._leaflet_pos = this._newPos, clearInterval(this._stepTimer), this.fire("step").fire("end"))
                }
            }), e.Map.include({
                setView: function(a, b, d) {
                    if (b = b === c ? this._zoom : this._limitZoom(b), a = this._limitCenter(e.latLng(a), b, this.options.maxBounds), d = d || {}, this._panAnim && this._panAnim.stop(), this._loaded && !d.reset && d !== !0) {
                        d.animate !== c && (d.zoom = e.extend({
                            animate: d.animate
                        }, d.zoom), d.pan = e.extend({
                            animate: d.animate
                        }, d.pan));
                        var f = this._zoom !== b ? this._tryAnimatedZoom && this._tryAnimatedZoom(a, b, d.zoom) : this._tryAnimatedPan(a, d.pan);
                        if (f) return clearTimeout(this._sizeTimer), this
                    }
                    return this._resetView(a, b), this
                },
                panBy: function(a, b) {
                    if (a = e.point(a).round(), b = b || {}, !a.x && !a.y) return this;
                    if (this._panAnim || (this._panAnim = new e.PosAnimation, this._panAnim.on({
                            step: this._onPanTransitionStep,
                            end: this._onPanTransitionEnd
                        }, this)), b.noMoveStart || this.fire("movestart"), b.animate !== !1) {
                        e.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
                        var c = this._getMapPanePos().subtract(a);
                        this._panAnim.run(this._mapPane, c, b.duration || .25, b.easeLinearity)
                    } else this._rawPanBy(a), this.fire("move").fire("moveend");
                    return this
                },
                _onPanTransitionStep: function() {
                    this.fire("move")
                },
                _onPanTransitionEnd: function() {
                    e.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
                },
                _tryAnimatedPan: function(a, b) {
                    var c = this._getCenterOffset(a)._floor();
                    return (b && b.animate) === !0 || this.getSize().contains(c) ? (this.panBy(c, b), !0) : !1
                }
            }), e.PosAnimation = e.DomUtil.TRANSITION ? e.PosAnimation : e.PosAnimation.extend({
                run: function(a, b, c, d) {
                    this.stop(), this._el = a, this._inProgress = !0, this._duration = c || .25, this._easeOutPower = 1 / Math.max(d || .5, .2), this._startPos = e.DomUtil.getPosition(a), this._offset = b.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
                },
                stop: function() {
                    this._inProgress && (this._step(), this._complete())
                },
                _animate: function() {
                    this._animId = e.Util.requestAnimFrame(this._animate, this), this._step()
                },
                _step: function() {
                    var a = +new Date - this._startTime,
                        b = 1e3 * this._duration;
                    b > a ? this._runFrame(this._easeOut(a / b)) : (this._runFrame(1), this._complete())
                },
                _runFrame: function(a) {
                    var b = this._startPos.add(this._offset.multiplyBy(a));
                    e.DomUtil.setPosition(this._el, b), this.fire("step")
                },
                _complete: function() {
                    e.Util.cancelAnimFrame(this._animId), this._inProgress = !1, this.fire("end")
                },
                _easeOut: function(a) {
                    return 1 - Math.pow(1 - a, this._easeOutPower)
                }
            }), e.Map.mergeOptions({
                zoomAnimation: !0,
                zoomAnimationThreshold: 4
            }), e.DomUtil.TRANSITION && e.Map.addInitHook(function() {
                this._zoomAnimated = this.options.zoomAnimation && e.DomUtil.TRANSITION && e.Browser.any3d && !e.Browser.android23 && !e.Browser.mobileOpera, this._zoomAnimated && e.DomEvent.on(this._mapPane, e.DomUtil.TRANSITION_END, this._catchTransitionEnd, this)
            }), e.Map.include(e.DomUtil.TRANSITION ? {
                _catchTransitionEnd: function(a) {
                    this._animatingZoom && a.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
                },
                _nothingToAnimate: function() {
                    return !this._container.getElementsByClassName("leaflet-zoom-animated").length
                },
                _tryAnimatedZoom: function(a, b, c) {
                    if (this._animatingZoom) return !0;
                    if (c = c || {}, !this._zoomAnimated || c.animate === !1 || this._nothingToAnimate() || Math.abs(b - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                    var d = this.getZoomScale(b),
                        e = this._getCenterOffset(a)._divideBy(1 - 1 / d),
                        f = this._getCenterLayerPoint()._add(e);
                    return c.animate === !0 || this.getSize().contains(e) ? (this.fire("movestart").fire("zoomstart"), this._animateZoom(a, b, f, d, null, !0), !0) : !1
                },
                _animateZoom: function(a, b, c, d, f, g) {
                    this._animatingZoom = !0, e.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim"), this._animateToCenter = a, this._animateToZoom = b, e.Draggable && (e.Draggable._disabled = !0), this.fire("zoomanim", {
                        center: a,
                        zoom: b,
                        origin: c,
                        scale: d,
                        delta: f,
                        backwards: g
                    })
                },
                _onZoomTransitionEnd: function() {
                    this._animatingZoom = !1, e.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), this._resetView(this._animateToCenter, this._animateToZoom, !0, !0), e.Draggable && (e.Draggable._disabled = !1)
                }
            } : {}), e.TileLayer.include({
                _animateZoom: function(a) {
                    this._animating || (this._animating = !0, this._prepareBgBuffer());
                    var b = this._bgBuffer,
                        c = e.DomUtil.TRANSFORM,
                        d = a.delta ? e.DomUtil.getTranslateString(a.delta) : b.style[c],
                        f = e.DomUtil.getScaleString(a.scale, a.origin);
                    b.style[c] = a.backwards ? f + " " + d : d + " " + f
                },
                _endZoomAnim: function() {
                    var a = this._tileContainer,
                        b = this._bgBuffer;
                    a.style.visibility = "", a.parentNode.appendChild(a), e.Util.falseFn(b.offsetWidth), this._animating = !1
                },
                _clearBgBuffer: function() {
                    var a = this._map;
                    !a || a._animatingZoom || a.touchZoom._zooming || (this._bgBuffer.innerHTML = "", this._bgBuffer.style[e.DomUtil.TRANSFORM] = "")
                },
                _prepareBgBuffer: function() {
                    var a = this._tileContainer,
                        b = this._bgBuffer,
                        c = this._getLoadedTilesPercentage(b),
                        d = this._getLoadedTilesPercentage(a);
                    return b && c > .5 && .5 > d ? (a.style.visibility = "hidden", this._stopLoadingImages(a), void 0) : (b.style.visibility = "hidden", b.style[e.DomUtil.TRANSFORM] = "", this._tileContainer = b, b = this._bgBuffer = a, this._stopLoadingImages(b), clearTimeout(this._clearBgBufferTimer), void 0)
                },
                _getLoadedTilesPercentage: function(a) {
                    var b, c, d = a.getElementsByTagName("img"),
                        e = 0;
                    for (b = 0, c = d.length; c > b; b++) d[b].complete && e++;
                    return e / c
                },
                _stopLoadingImages: function(a) {
                    var b, c, d, f = Array.prototype.slice.call(a.getElementsByTagName("img"));
                    for (b = 0, c = f.length; c > b; b++) d = f[b], d.complete || (d.onload = e.Util.falseFn, d.onerror = e.Util.falseFn, d.src = e.Util.emptyImageUrl, d.parentNode.removeChild(d))
                }
            }), e.Map.include({
                _defaultLocateOptions: {
                    watch: !1,
                    setView: !1,
                    maxZoom: 1 / 0,
                    timeout: 1e4,
                    maximumAge: 0,
                    enableHighAccuracy: !1
                },
                locate: function(a) {
                    if (a = this._locateOptions = e.extend(this._defaultLocateOptions, a), !navigator.geolocation) return this._handleGeolocationError({
                        code: 0,
                        message: "Geolocation not supported."
                    }), this;
                    var b = e.bind(this._handleGeolocationResponse, this),
                        c = e.bind(this._handleGeolocationError, this);
                    return a.watch ? this._locationWatchId = navigator.geolocation.watchPosition(b, c, a) : navigator.geolocation.getCurrentPosition(b, c, a), this
                },
                stopLocate: function() {
                    return navigator.geolocation && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
                },
                _handleGeolocationError: function(a) {
                    var b = a.code,
                        c = a.message || (1 === b ? "permission denied" : 2 === b ? "position unavailable" : "timeout");
                    this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                        code: b,
                        message: "Geolocation error: " + c + "."
                    })
                },
                _handleGeolocationResponse: function(a) {
                    var b = a.coords.latitude,
                        c = a.coords.longitude,
                        d = new e.LatLng(b, c),
                        f = 180 * a.coords.accuracy / 40075017,
                        g = f / Math.cos(e.LatLng.DEG_TO_RAD * b),
                        h = e.latLngBounds([b - f, c - g], [b + f, c + g]),
                        i = this._locateOptions;
                    if (i.setView) {
                        var j = Math.min(this.getBoundsZoom(h), i.maxZoom);
                        this.setView(d, j)
                    }
                    var k = {
                        latlng: d,
                        bounds: h,
                        timestamp: a.timestamp
                    };
                    for (var l in a.coords) "number" == typeof a.coords[l] && (k[l] = a.coords[l]);
                    this.fire("locationfound", k)
                }
            })
    }(window, document),
    function() {
        for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(b) {
            var c = (new Date).getTime(),
                d = Math.max(0, 16 - (c - a)),
                e = window.setTimeout(function() {
                    b(c + d)
                }, d);
            return a = c + d, e
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        })
    }(),
    /*!
     * screenfull
     * v1.1.1 - 2013-11-20
     * https://github.com/sindresorhus/screenfull.js
     * (c) Sindre Sorhus; MIT License
     */
    function(a, b) {
        "use strict";
        var c = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
            d = function() {
                for (var a, c, d = [
                        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                    ], e = 0, f = d.length, g = {}; f > e; e++)
                    if (a = d[e], a && a[1] in b) {
                        for (e = 0, c = a.length; c > e; e++) g[d[0][e]] = a[e];
                        return g
                    }
                return !1
            }(),
            e = {
                request: function(a) {
                    var e = d.requestFullscreen;
                    a = a || b.documentElement, /5\.1[\.\d]* Safari/.test(navigator.userAgent) ? a[e]() : a[e](c && Element.ALLOW_KEYBOARD_INPUT)
                },
                exit: function() {
                    b[d.exitFullscreen]()
                },
                toggle: function(a) {
                    this.isFullscreen ? this.exit() : this.request(a)
                },
                onchange: function() {},
                onerror: function() {},
                raw: d
            };
        return d ? (Object.defineProperties(e, {
            isFullscreen: {
                get: function() {
                    return !!b[d.fullscreenElement]
                }
            },
            element: {
                enumerable: !0,
                get: function() {
                    return b[d.fullscreenElement]
                }
            },
            enabled: {
                enumerable: !0,
                get: function() {
                    return !!b[d.fullscreenEnabled]
                }
            }
        }), b.addEventListener(d.fullscreenchange, function(a) {
            e.onchange.call(e, a)
        }), b.addEventListener(d.fullscreenerror, function(a) {
            e.onerror.call(e, a)
        }), a.screenfull = e, void 0) : (a.screenfull = !1, void 0)
    }(window, document),
    function() {
        function a(a, b, c) {
            a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + c] = c
        }

        function b() {
            this.animations = []
        }

        function c(a, b, c, e) {
            void 0 === c && (c = 0), d(a);
            var f = a.node().__kiln_transitions__,
                g = a.transition().duration(Talkie.fast_forward ? 0 : c);
            return e && g.ease(e), {
                attr: function(a, b) {
                    f.push(["attr", a, b]), g.attr(a, b)
                },
                style: function(a, b) {
                    f.push(["style", a, b]), g.style(a, b)
                },
                text: function(a) {
                    f.push(["text", a]), g.text(a)
                },
                attrInterpolateString: function(a, b, c) {
                    f.push(["attr", a, c]), g.attrTween(a, function() {
                        return d3.interpolateString(b, c)
                    })
                }
            }
        }

        function d(a) {
            a.interrupt && a.interrupt(), a.transition().duration(0);
            var b = a.node(),
                c = b.__kiln_transitions__;
            if (c) {
                for (var d = 0; c.length > d; d++) {
                    var e = c[d],
                        f = e[0],
                        g = e[1],
                        h = e[2];
                    a[f](g, h)
                }
                c.length = 0
            } else b.__kiln_transitions__ = []
        }

        function e(a) {
            void 0 === a && (a = document), this._root = d3.select(a), this._root.empty() && Talkie.warn("Selector does not match anything: " + a)
        }

        function f(a, b) {
            this.animate = a, this.element = b
        }

        function g(a) {
            if ("string" == typeof a) {
                var b = a.match(/^(\d+):(\d+(?:\.\d+)?)$/);
                if (b) return 60 * parseInt(b[1]) + parseFloat(b[2])
            }
            return parseFloat(a)
        }

        function h(a, b) {
            if ("function" == typeof a) a.call(b);
            else if ("[object Array]" === Object.prototype.toString.call(a))
                for (var c = 0; a.length > c; c++) h(a[c], b);
            else a.run(b)
        }

        function i(a) {
            for (var b = Object.keys(a), c = b.map(g), d = {}, e = 0; c.length > e; e++) d[c[e]] = a[b[e]];
            c.sort(function(a, b) {
                return a - b
            });
            for (var f = [], e = 0; c.length > e; e++) {
                var h = c[e];
                f.push([h, d[h]])
            }
            return f
        }
        Talkie = {
            version: "1.2.1"
        };
        var j = Talkie.warn = function() {
            console && console.log && (console.log.apply ? console.log.apply(console, arguments) : console.log(Array.prototype.slice.call(arguments, 0)))
        };
        Talkie.extend = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) {
                    if (Talkie.hasOwnProperty(b)) {
                        j("Refusing to override Talkie." + b);
                        continue
                    }
                    Talkie[b] = a[b]
                }
        }, Talkie.element = function(a) {
            return "string" == typeof a ? document.querySelector(a) : a
        }, Talkie.getStyle = function(a, b) {
            return a.currentStyle ? a.currentStyle[b] : document.defaultView.getComputedStyle(a, null).getPropertyValue(b)
        }, Talkie.preventDefault = function(a) {
            window.event && event.preventDefault ? event.preventDefault() : a.preventDefault ? a.preventDefault() : event.returnValue = !1
        }, Talkie.addEventListener = function(b, c, d) {
            if ("string" == typeof b)
                for (var e = document.querySelectorAll(b), f = 0; e.length > f; f++) {
                    var g = e[f];
                    a(g, c, d)
                } else a(b, c, d)
        }, Talkie.fireEvent = function(a, b, c) {
            var d;
            if (document.createEvent ? (d = document.createEvent("HTMLEvents"), d.initEvent(a, !0, !0)) : document.createEventObject && (d = document.createEventObject(), d.eventType = a), c)
                for (var e in c) c.hasOwnProperty(e) && (d[e] = c[e]);
            b.dispatchEvent ? b.dispatchEvent(d) : b.fireEvent && b.fireEvent("on" + d.eventType, d)
        }, Talkie.ui = {
            version: "1.0"
        }, Talkie.ui.playButton = function(a, b) {
            var c = Talkie.element(a),
                d = document.createElement("div");
            d.className = "talkie-play-button", "relative" !== Talkie.getStyle(c, "position") && (c.style.position = "relative"), c.appendChild(d), d.style.left = (c.offsetWidth - d.offsetWidth) / 2 + "px", d.style.top = (c.offsetHeight - d.offsetHeight) / 2 + "px", Talkie.addEventListener(d, "click", function() {
                b.play()
            }), b.onPlay(function() {
                try {
                    c.removeChild(d)
                } catch (a) {}
            })
        };
        var k = function(a, b) {
            var c = Talkie.element(b);
            if (c) {
                var d = parseInt(c.getAttribute("data-talkie-panel-index"));
                this.animations = [
                    [function(b) {
                        var c = a.selected_panel;
                        a._selectPanel(d), b.setUndo(function() {
                            a._selectPanel(c)
                        })
                    }]
                ]
            }
        };
        k.prototype = new b;
        var l = function(a) {
            var b = Talkie.element(a);
            b.classList ? b.classList.contains("talkie-slider") || b.classList.add("talkie-slider") : b.className.match(/\btalkie-slider\b/) || (b.className += " talkie-slider"), this.arrow_prev = b.getElementsByClassName("talkie-slider-arrowprev")[0], this.arrow_next = b.getElementsByClassName("talkie-slider-arrownext")[0], this.frame = document.createElement("div"), this.frame.className = "talkie-slider-frame", b.appendChild(this.frame), this.panels = document.createElement("div"), this.panels.className = "talkie-slider-panels", this.frame.appendChild(this.panels), this.panel_elements = b.querySelectorAll(".talkie-slider-panel"), this.num_panels = this.panel_elements.length;
            for (var c = 0; this.panel_elements.length > c; c++) {
                var d = this.panel_elements[c];
                this.panels.appendChild(d), d.style.width = this.frame.offsetWidth + "px", d.setAttribute("data-talkie-panel-index", c)
            }
            d3 && d3.select(this.panels).selectAll(".talkie-slider-panel").data(d3.range(this.num_panels));
            var e = b.querySelector(".talkie-slider-nav");
            e && this.navigation(e), this._panelChanged(0);
            var f = this;
            this.arrow_next && (b.appendChild(this.arrow_next), this.arrow_next.style.top = (b.offsetHeight - this.arrow_next.offsetHeight) / 2 + "px", Talkie.addEventListener(this.arrow_next, "click", function(a) {
                Talkie.preventDefault(a), f._selectNextPanel()
            })), this.arrow_prev && (b.appendChild(this.arrow_prev), this.arrow_prev.style.top = (b.offsetHeight - this.arrow_prev.offsetHeight) / 2 + "px", Talkie.addEventListener(this.arrow_prev, "click", function(a) {
                Talkie.preventDefault(a), f._selectPreviousPanel()
            }))
        };
        l.prototype.navigation = function(a) {
            var b = this,
                c = Talkie.element(a);
            if (d3) {
                var d = d3.select(c);
                d.classed("talkie-slider-nav", !0), d.selectAll(".talkie-slider-nav-dot").data(d3.range(this.num_panels)).enter().append("div").attr("class", "talkie-slider-nav-dot"), this.navdots = d.selectAll(".talkie-slider-nav-dot"), this.navdots.on("click", function(a) {
                    return b._selectPanel(a, !0), !1
                }), this._markSelectedNavDot()
            }
            return this
        }, l.prototype.panel = function(a) {
            return new k(this, a)
        }, l.prototype.slideTo = function(a) {
            this._selectPanelByElement(Talkie.element(a))
        }, l.prototype._panelChanged = function(a, b) {
            var c = this.selected_panel;
            this.selected_panel = parseInt(a), d3 ? (d3.select(this.panels).transition().duration(500).style("margin-left", -this.frame.clientWidth * this.selected_panel + "px"), this.arrow_prev && d3.select(this.arrow_prev).transition().duration(500).style("opacity", 0 == this.selected_panel ? 0 : 1), this.arrow_next && d3.select(this.arrow_next).transition().duration(500).style("opacity", this.selected_panel == this.num_panels - 1 ? 0 : 1)) : (this.panels.style.marginLeft = -this.frame.clientWidth * this.selected_panel + "px", this.arrow_prev && (0 == this.selected_panel ? (this.arrow_prev.style.opacity = 1, this.arrow_prev.style.visibility = "hidden") : this.arrow_prev.style.visibility = "visible"), this.arrow_next && (this.arrow_next.style.visibility = this.selected_panel == this.num_panels - 1 ? "hidden" : "visible")), this._markSelectedNavDot(), Talkie.fireEvent("Talkie.slider.load", this.panel_elements[this.selected_panel], {
                explicitly: b,
                fromPanel: this.panel_elements[c],
                toPanel: this.panel_elements[this.selected_panel],
                slider: this
            })
        }, l.prototype._markSelectedNavDot = function() {
            if (this.navdots) {
                var a = this;
                this.navdots.classed("talkie-slider-nav-dot-selected", function(b, c) {
                    return c == a.selected_panel
                })
            }
        }, l.prototype._selectPanel = function(a, b) {
            this._panelChanged(a, b)
        }, l.prototype._selectPanelByElement = function(a) {
            a && this._panelChanged(a.getAttribute("data-talkie-panel-index"))
        }, l.prototype._selectNextPanel = function() {
            this.selected_panel != this.num_panels - 1 && this._panelChanged(this.selected_panel + 1, !0)
        }, l.prototype._selectPreviousPanel = function() {
            0 != this.selected_panel && this._panelChanged(this.selected_panel - 1, !0)
        }, Talkie.slider = function(a) {
            return new l(a)
        };
        var m = function(a) {
                if (!a.getAttribute("data-talkie-madeAbsolute")) {
                    a.setAttribute("data-talkie-madeAbsolute", !0);
                    for (var b, c, d, e, f, g, h = a.pathSegList, i = 0, j = 0, k = 0, l = h.numberOfItems; l > k; ++k) {
                        var m = h.getItem(k),
                            n = m.pathSegTypeAsLetter;
                        if (/[MLHVCSQTA]/.test(n)) "x" in m && (i = m.x), "y" in m && (j = m.y);
                        else switch ("x1" in m && (d = i + m.x1), "x2" in m && (f = i + m.x2), "y1" in m && (e = j + m.y1), "y2" in m && (g = j + m.y2), "x" in m && (i += m.x), "y" in m && (j += m.y), n) {
                            case "m":
                                h.replaceItem(a.createSVGPathSegMovetoAbs(i, j), k);
                                break;
                            case "l":
                                h.replaceItem(a.createSVGPathSegLinetoAbs(i, j), k);
                                break;
                            case "h":
                                h.replaceItem(a.createSVGPathSegLinetoHorizontalAbs(i), k);
                                break;
                            case "v":
                                h.replaceItem(a.createSVGPathSegLinetoVerticalAbs(j), k);
                                break;
                            case "c":
                                h.replaceItem(a.createSVGPathSegCurvetoCubicAbs(i, j, d, e, f, g), k);
                                break;
                            case "s":
                                h.replaceItem(a.createSVGPathSegCurvetoCubicSmoothAbs(i, j, f, g), k);
                                break;
                            case "q":
                                h.replaceItem(a.createSVGPathSegCurvetoQuadraticAbs(i, j, d, e), k);
                                break;
                            case "t":
                                h.replaceItem(a.createSVGPathSegCurvetoQuadraticSmoothAbs(i, j), k);
                                break;
                            case "a":
                                h.replaceItem(a.createSVGPathSegArcAbs(i, j, m.r1, m.r2, m.angle, m.largeArcFlag, m.sweepFlag), k);
                                break;
                            case "z":
                            case "Z":
                                i = b, j = c
                        }("M" == n || "m" == n) && (b = i, c = j)
                    }
                }
            },
            n = function(a) {
                if (!a.empty()) {
                    var b = a.node();
                    "path" === b.nodeName && m(b)
                }
            };
        b.prototype.clone = function() {
            var a = new b;
            return a.animations = this.animations.slice(0), a
        }, b.prototype.pushAnimation = function(a, b) {
            var c = this.clone();
            return c.animations.push([a, b]), c
        }, b.prototype.and = function(a) {
            function b(a, b) {
                "function" == typeof b ? b.call(a) : b.run(a)
            }
            return this.pushAnimation(b, a)
        }, b.prototype.run = function(a) {
            a || (a = {
                setUndo: function() {}
            });
            for (var b = 0; this.animations.length > b; b++) {
                var c = this.animations[b],
                    d = c[0],
                    e = c[1];
                d.call(this, a, e)
            }
        }, Talkie.animate = function(a) {
            return new e(a)
        };
        var o = [];
        e.prototype._element = function(a) {
            if (a instanceof window.Element) return d3.selectAll(a);
            var b = this._root.selectAll(a);
            return b.empty() && Talkie.warn("Selector does not match anything: " + a + " in " + this._root), b
        }, e.prototype.raw = function() {
            return this._root
        }, o.push("text"), e.prototype.text = function(a, b, e, f, g) {
            var h = c(a, b, f, g),
                i = a.text();
            return h.text(e), b.setUndo(function() {
                d(a), a.text(i)
            }), this
        }, o.push("attr"), e.prototype.attr = function(a, b, e, f, g, h) {
            var i = c(a, b, g, h),
                j = a.attr(e);
            return i.attr(e, f), b.setUndo(function() {
                d(a), a.attr(e, j)
            }), this
        }, o.push("morphTo");
        var p = {
            circle: ["cx", "cy", "r"],
            path: ["d"],
            line: ["x1", "y1", "x2", "y2"]
        };
        e.prototype.morphTo = function(a, b, e, f, g) {
            n(a);
            var h = this._element(e);
            if (!h.empty()) {
                n(h);
                var i = c(a, b, f, g),
                    j = [],
                    k = p[h.node().nodeName];
                if (!k) return Talkie.warn("Talkie doesn’t know how to morph a " + h.node().nodeName + " element"), void 0;
                for (var l = 0; k.length > l; l++) {
                    var m = k[l];
                    j.push(a.attr(m)), i.attr(m, h.attr(m))
                }
                return b.setUndo(function() {
                    d(a);
                    for (var b = 0; k.length > b; b++) a.attr(k[b], j[b])
                }), this
            }
        }, e.prototype._style_single = function(a, b, e, f, g, h) {
            var i = c(a, b, g, h),
                j = a.style(e);
            return i.style(e, f), b.setUndo(function() {
                d(a), a.style(e, j)
            }), this
        }, e.prototype._style_multi = function(a, b, e, f, g) {
            var h = c(a, b, f, g),
                i = {};
            for (var j in e) e.hasOwnProperty(j) && (i[j] = a.style(j), h.style(j, e[j]));
            return b.setUndo(function() {
                d(a);
                for (var b in e) e.hasOwnProperty(b) && a.style(b, i[b])
            }), this
        }, o.push("style"), e.prototype.style = function(a, b, c) {
            return "string" == typeof c ? this._style_single.apply(this, arguments) : this._style_multi.apply(this, arguments)
        }, e.prototype.select = function(a) {
            var b = this._element(a);
            return new f(this, b)
        }, f.prototype = new b, f.prototype.clone = function() {
            var a = new f(this.animate, this.element);
            return a.animations = this.animations.slice(0), a
        };
        for (var q = 0; o.length > q; q++) ! function(a) {
            f.prototype[a] = function() {
                return this.element.empty() ? this : this.pushAnimation(function(b, c) {
                    this.animate[a].apply(this.animate, [this.element, b].concat(c))
                }, Array.prototype.slice.call(arguments, 0))
            }
        }(o[q]);
        if (Talkie.timeline = function(a, b) {
                a = Talkie.element(a);
                var c, d = [],
                    e = -1,
                    f = !1,
                    g = {
                        rewind: function() {
                            a.readyState >= 1 && (d = [], e = -1, a.pause(), a.currentTime = 0)
                        },
                        setUndo: function(a) {
                            this.undoing || d.push([c, a, e])
                        },
                        undoInteraction: function(a) {
                            this.undoing || d.push([1 / 0, a, e])
                        },
                        play: function() {
                            a.play()
                        },
                        pause: function() {
                            a.pause(), f = !0
                        },
                        onPlay: function(b) {
                            a.addEventListener("play", b, !1)
                        }
                    },
                    j = i(b);
                return a.addEventListener("timeupdate", function() {
                    if (f) return f = !1, void 0;
                    for (g.undoing = !0; d.length > 0 && d[d.length - 1][0] > this.currentTime;) {
                        var a = d.pop();
                        a[1].call(g), e = a[2]
                    }
                    g.undoing = !1;
                    for (var b = e + 1; j.length > b && j[b][0] <= this.currentTime; b++) g.fast_forward = j.length > b + 1 && j[b + 1][0] <= this.currentTime, c = j[b][0], h(j[b][1], g), e = b
                }, !1), g
            }, window.jQuery) {
            var r = {
                    animate: function(a) {
                        var b = a.get(0);
                        return Talkie.animate(b.ownerDocument).select(b)
                    }
                },
                s = {
                    timeline: function(a, b) {
                        var c = Talkie.timeline(a, b);
                        jQuery(a).data("_talkie_timeline", c)
                    }
                };
            jQuery.fn.talkie = function(a) {
                var b = Array.prototype.slice.call(arguments, 1),
                    c = r[a];
                return c ? c.apply(window, [this].concat(b)) : (c = s[a], void 0 === c ? (Talkie.warn("No such command: " + a), this) : this.each(function() {
                    c.apply(window, [this].concat(b))
                }))
            }
        }
    }();
var ARRAYBUFFER_IS_BUILTIN = "undefined" != typeof window.ArrayBuffer,
    ArrayBuffer, ArrayBufferView, Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, DataView;
! function() {
    "use strict";

    function a() {
        throw document && document.createTextNode("").splitText(1), new RangeError("INDEX_SIZE_ERR")
    }

    function b(a) {
        function b(b) {
            Object.defineProperty(a, b, {
                get: function() {
                    return a._getter(b)
                },
                set: function(c) {
                    a._setter(b, c)
                },
                enumerable: !0,
                configurable: !1
            })
        }
        if (Object.defineProperty) {
            var c;
            for (c = 0; c < a.length; c += 1) b(c)
        }
    }

    function c(a, b) {
        var c = 32 - b;
        return a << c >> c
    }

    function d(a, b) {
        var c = 32 - b;
        return a << c >>> c
    }

    function e(a) {
        return [255 & a]
    }

    function f(a) {
        return c(a[0], 8)
    }

    function g(a) {
        return [255 & a]
    }

    function h(a) {
        return d(a[0], 8)
    }

    function i(a) {
        return [255 & a >> 8, 255 & a]
    }

    function j(a) {
        return c(a[0] << 8 | a[1], 16)
    }

    function k(a) {
        return [255 & a >> 8, 255 & a]
    }

    function l(a) {
        return d(a[0] << 8 | a[1], 16)
    }

    function m(a) {
        return [255 & a >> 24, 255 & a >> 16, 255 & a >> 8, 255 & a]
    }

    function n(a) {
        return c(a[0] << 24 | a[1] << 16 | a[2] << 8 | a[3], 32)
    }

    function o(a) {
        return [255 & a >> 24, 255 & a >> 16, 255 & a >> 8, 255 & a]
    }

    function p(a) {
        return d(a[0] << 24 | a[1] << 16 | a[2] << 8 | a[3], 32)
    }

    function q(a, b, c) {
        var d, e, f, g, h, i, j, k, l = (1 << b - 1) - 1;
        for (isNaN(a) ? (e = (1 << l) - 1, f = Math.pow(2, c - 1), d = 0) : 1 / 0 === a || a === -1 / 0 ? (e = (1 << l) - 1, f = 0, d = 0 > a ? 1 : 0) : 0 === a ? (e = 0, f = 0, d = 1 / a === -1 / 0 ? 1 : 0) : (d = 0 > a, a = Math.abs(a), a >= Math.pow(2, 1 - l) ? (g = Math.min(Math.floor(Math.log(a) / Math.LN2), l), e = g + l, f = Math.round(a * Math.pow(2, c - g) - Math.pow(2, c))) : (e = 0, f = Math.round(a / Math.pow(2, 1 - l - c)))), i = [], h = c; h; h -= 1) i.push(f % 2 ? 1 : 0), f = Math.floor(f / 2);
        for (h = b; h; h -= 1) i.push(e % 2 ? 1 : 0), e = Math.floor(e / 2);
        for (i.push(d ? 1 : 0), i.reverse(), j = i.join(""), k = []; j.length;) k.push(parseInt(j.substring(0, 8), 2)), j = j.substring(8);
        return k
    }

    function r(a, b, c) {
        var d, e, f, g, h, i, j, k, l = [];
        for (d = a.length; d; d -= 1)
            for (f = a[d - 1], e = 8; e; e -= 1) l.push(f % 2 ? 1 : 0), f >>= 1;
        return l.reverse(), g = l.join(""), h = (1 << b - 1) - 1, i = parseInt(g.substring(0, 1), 2) ? -1 : 1, j = parseInt(g.substring(1, 1 + b), 2), k = parseInt(g.substring(1 + b), 2), j === (1 << b) - 1 ? 0 !== k ? 0 / 0 : 1 / 0 * i : j > 0 ? i * Math.pow(2, j - h) * (1 + k / Math.pow(2, c)) : 0 !== k ? i * Math.pow(2, -(h - 1)) * (k / Math.pow(2, c)) : 0 > i ? -0 : 0
    }

    function s(a) {
        return r(a, 11, 52)
    }

    function t(a) {
        return q(a, 11, 52)
    }

    function u(a) {
        return r(a, 8, 23)
    }

    function v(a) {
        return q(a, 8, 23)
    }
    var w = {
        ToInt32: function(a) {
            return a >> 0
        },
        ToUint32: function(a) {
            return a >>> 0
        }
    };
    Object.prototype.__defineGetter__ && !Object.defineProperty && (Object.defineProperty = function(a, b, c) {
        c.hasOwnProperty("get") && a.__defineGetter__(b, c.get), c.hasOwnProperty("set") && a.__defineSetter__(b, c.set)
    }), ArrayBuffer || function() {
        function c(c, d, e) {
            var f;
            return f = function(c, d, e) {
                var g, h, i, j;
                if (arguments.length && "number" != typeof arguments[0])
                    if ("object" == typeof arguments[0] && arguments[0].constructor === f)
                        for (g = arguments[0], this.length = g.length, this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new ArrayBuffer(this.byteLength), this.byteOffset = 0, i = 0; i < this.length; i += 1) this._setter(i, g._getter(i));
                    else if ("object" != typeof arguments[0] || arguments[0] instanceof ArrayBuffer) {
                    if (!("object" == typeof arguments[0] && arguments[0] instanceof ArrayBuffer)) throw new TypeError("Unexpected argument type(s)");
                    if (this.buffer = c, this.byteOffset = w.ToUint32(d), this.byteOffset > this.buffer.byteLength && a(), this.byteOffset % this.BYTES_PER_ELEMENT) throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.");
                    arguments.length < 3 ? (this.byteLength = this.buffer.byteLength - this.byteOffset, this.byteLength % this.BYTES_PER_ELEMENT && a(), this.length = this.byteLength / this.BYTES_PER_ELEMENT) : (this.length = w.ToUint32(e), this.byteLength = this.length * this.BYTES_PER_ELEMENT), this.byteOffset + this.byteLength > this.buffer.byteLength && a()
                } else
                    for (h = arguments[0], this.length = w.ToUint32(h.length), this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new ArrayBuffer(this.byteLength), this.byteOffset = 0, i = 0; i < this.length; i += 1) j = h[i], this._setter(i, Number(j));
                else {
                    if (this.length = w.ToInt32(arguments[0]), 0 > e) throw new RangeError("ArrayBufferView size is not a small enough positive integer.");
                    this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new ArrayBuffer(this.byteLength), this.byteOffset = 0
                }
                this.constructor = f, b(this)
            }, f.prototype = new ArrayBufferView, f.prototype.BYTES_PER_ELEMENT = c, f.prototype._pack = d, f.prototype._unpack = e, f.BYTES_PER_ELEMENT = c, f.prototype._getter = function(a) {
                if (arguments.length < 1) throw new SyntaxError("Not enough arguments");
                if (a = w.ToUint32(a), !(a >= this.length)) {
                    var b, c, d = [];
                    for (b = 0, c = this.byteOffset + a * this.BYTES_PER_ELEMENT; b < this.BYTES_PER_ELEMENT; b += 1, c += 1) d.push(this.buffer._bytes[c]);
                    return this._unpack(d)
                }
            }, f.prototype.get = f.prototype._getter, f.prototype._setter = function(a, b) {
                if (arguments.length < 2) throw new SyntaxError("Not enough arguments");
                if (a = w.ToUint32(a), !(a >= this.length)) {
                    var c, d, e = this._pack(b);
                    for (c = 0, d = this.byteOffset + a * this.BYTES_PER_ELEMENT; c < this.BYTES_PER_ELEMENT; c += 1, d += 1) this.buffer._bytes[d] = e[c]
                }
            }, f.prototype.set = function() {
                if (arguments.length < 1) throw new SyntaxError("Not enough arguments");
                var b, c, d, e, f, g, h, i, j, k;
                if ("object" == typeof arguments[0] && arguments[0].constructor === this.constructor)
                    if (b = arguments[0], d = w.ToUint32(arguments[1]), d + b.length > this.length && a(), i = this.byteOffset + d * this.BYTES_PER_ELEMENT, j = b.length * this.BYTES_PER_ELEMENT, b.buffer === this.buffer) {
                        for (k = [], f = 0, g = b.byteOffset; j > f; f += 1, g += 1) k[f] = b.buffer._bytes[g];
                        for (f = 0, h = i; j > f; f += 1, h += 1) this.buffer._bytes[h] = k[f]
                    } else
                        for (f = 0, g = b.byteOffset, h = i; j > f; f += 1, g += 1, h += 1) this.buffer._bytes[h] = b.buffer._bytes[g];
                else {
                    if ("object" != typeof arguments[0] || "undefined" == typeof arguments[0].length) throw new TypeError("Unexpected argument type(s)");
                    for (c = arguments[0], e = w.ToUint32(c.length), d = w.ToUint32(arguments[1]), d + e > this.length && a(), f = 0; e > f; f += 1) g = c[f], this._setter(d + f, Number(g))
                }
            }, f.prototype.subarray = function(a, b) {
                function c(a, b, c) {
                    return b > a ? b : a > c ? c : a
                }
                a = w.ToInt32(a), b = w.ToInt32(b), arguments.length < 1 && (a = 0), arguments.length < 2 && (b = this.length), 0 > a && (a = this.length + a), 0 > b && (b = this.length + b), a = c(a, 0, this.length), b = c(b, 0, this.length);
                var d = b - a;
                return 0 > d && (d = 0), new this.constructor(this.buffer, a * this.BYTES_PER_ELEMENT, d)
            }, f
        }
        ArrayBuffer = function(a) {
            if (a = w.ToInt32(a), 0 > a) throw new RangeError("ArrayBuffer size is not a small enough positive integer.");
            this.byteLength = a, this._bytes = [], this._bytes.length = a;
            var b;
            for (b = 0; b < this.byteLength; b += 1) this._bytes[b] = 0
        }, ArrayBufferView = function() {}, Int8Array = Int8Array || c(1, e, f), Uint8Array = Uint8Array || c(1, g, h), Int16Array = Int16Array || c(2, i, j), Uint16Array = Uint16Array || c(2, k, l), Int32Array = Int32Array || c(4, m, n), Uint32Array = Uint32Array || c(4, o, p), Float32Array = Float32Array || c(4, v, u), Float64Array = Float64Array || c(8, t, s)
    }(), DataView || function() {
        function b(a, b) {
            return "function" == typeof a.get ? a.get(b) : a[b]
        }

        function c(c) {
            return function(d, f) {
                d = w.ToUint32(d), d + c.BYTES_PER_ELEMENT > this.byteLength && a(), d += this.byteOffset;
                var g, h = new Uint8Array(this.buffer, d, c.BYTES_PER_ELEMENT),
                    i = [];
                for (g = 0; g < c.BYTES_PER_ELEMENT; g += 1) i.push(b(h, g));
                return Boolean(f) === Boolean(e) && i.reverse(), b(new c(new Uint8Array(i).buffer), 0)
            }
        }

        function d(c) {
            return function(d, f, g) {
                d = w.ToUint32(d), d + c.BYTES_PER_ELEMENT > this.byteLength && a();
                var h, i, j = new c([f]),
                    k = new Uint8Array(j.buffer),
                    l = [];
                for (h = 0; h < c.BYTES_PER_ELEMENT; h += 1) l.push(b(k, h));
                Boolean(g) === Boolean(e) && l.reverse(), i = new Uint8Array(this.buffer, d, c.BYTES_PER_ELEMENT), i.set(l)
            }
        }
        var e = function() {
            var a = new Uint16Array([4660]),
                c = new Uint8Array(a.buffer);
            return 18 === b(c, 0)
        }();
        DataView = function(b, c, d) {
            if (!("object" == typeof b && b instanceof ArrayBuffer)) throw new TypeError("TypeError");
            this.buffer = b, this.byteOffset = w.ToUint32(c), this.byteOffset > this.buffer.byteLength && a(), this.byteLength = arguments.length < 3 ? this.buffer.byteLength - this.byteOffset : w.ToUint32(d), this.byteOffset + this.byteLength > this.buffer.byteLength && a()
        }, ArrayBufferView && (DataView.prototype = new ArrayBufferView), DataView.prototype.getUint8 = c(Uint8Array), DataView.prototype.getInt8 = c(Int8Array), DataView.prototype.getUint16 = c(Uint16Array), DataView.prototype.getInt16 = c(Int16Array), DataView.prototype.getUint32 = c(Uint32Array), DataView.prototype.getInt32 = c(Int32Array), DataView.prototype.getFloat32 = c(Float32Array), DataView.prototype.getFloat64 = c(Float64Array), DataView.prototype.setUint8 = d(Uint8Array), DataView.prototype.setInt8 = d(Int8Array), DataView.prototype.setUint16 = d(Uint16Array), DataView.prototype.setInt16 = d(Int16Array), DataView.prototype.setUint32 = d(Uint32Array), DataView.prototype.setInt32 = d(Int32Array), DataView.prototype.setFloat32 = d(Float32Array), DataView.prototype.setFloat64 = d(Float64Array)
    }()
}();