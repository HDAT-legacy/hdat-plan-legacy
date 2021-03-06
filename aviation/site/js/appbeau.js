function animator(a, b) {
    return new Animator(a, b, [])
}

function Animator(a, b, c) {
    this.is_loaded = a, this.animate = b, this.actions = c
}

function setMapView(a, b, c, d) {
    log("setMapView", a, b, c, d);
    var e = L.latLng(a, b);
    α.map._animatingZoom ? (log("Attempting to interrupt map zoom animation"), d3.select(α.map.getContainer()).classed("slow-zoom", !1), α.map._animateToCenter = e, α.map._animateToZoom = c, α.map._onZoomTransitionEnd(), α.map.setView(e, c, {
        reset: !0
    })) : α.map.setView(e, c, {
        reset: d
    })
}

function fadeInDisplayBlock(a, b, c) {
    d3.selectAll(a).style("opacity", 0).style("display", "block").transition().delay(b || 0).duration(c || 750).style("opacity", 1)
}

function fadeOutDisplayNone(a, b, c) {
    d3.selectAll(a).transition().delay(b || 0).duration(c || 750).style("opacity", 0).each("end", function() {
        d3.select(this).style("display", "none")
    })
}

function hideBigPlayButton() {
    big_play_button_is_hidden || ($("#loader-holder").animate({
        left: "-200px"
    }, 450, "easeInOutQuint"), big_play_button_is_hidden = !0)
}

function showBigPlayButton() {
    big_play_button_is_hidden && audio.paused && ($("#loader-holder").animate({
        left: "0px"
    }, 450, "easeInOutQuint"), big_play_button_is_hidden = !1)
}
var modules = {};
Animator.prototype.run = function(a) {
        if (this.is_loaded())
            for (var b = 0; b < this.actions.length; b++) {
                var c = this.actions[b];
                log("Animator action: %s(%s)", c[0].name || "<anon>", c[1].map(JSON.stringify).join(", ")), c[0].apply(a, c[1])
            }
    }, Animator.prototype.and = function(a) {
        return new Animator(this.is_loaded, this.animate, this.actions.concat([
            [a, Array.prototype.slice.call(arguments, 1)]
        ]))
    },
    function() {
        function a(a, b, c, d, e, f, g, h, i, j) {
            this.fast_forward || d3.selectAll(a).transition().ease("linear").duration(b).styleTween("width", function() {
                return d3.interpolateString(c, d)
            }).styleTween("height", function() {
                return d3.interpolateString(e, f)
            }).styleTween("left", function() {
                return d3.interpolateString(g, h)
            }).styleTween("top", function() {
                return d3.interpolateString(i, j)
            }), this.setUndo(function() {
                d3.selectAll(a).style("width", c).style("top", e).style("left", g).style("top", i)
            })
        }

        function b(a, b, c) {
            a().select(b).style("opacity", 1, c).run(this)
        }

        function c(a, b, c) {
            a().select(b).style("opacity", 0, c).run(this)
        }

        function d(a, b, c) {
            a().select(b).text(c).run(this)
        }

        function e(a, b, c, d, e) {
            a().select(b).style(c, d, e).run(this)
        }

        function f(a, b, c, d, e) {
            a().select(b).attr(c, d, e).run(this)
        }

        function g(a, b, c, d) {
            a().select(b).attr("transform", c, d).run(this)
        }
        Animator.prototype.kenBurns = function(b, c, d, e, f, g, h, i, j, k) {
            return this.and(a, b, c, d, e, f, g, h, i, j, k)
        }, Animator.prototype.fadeIn = function(a, c) {
            return "undefined" == typeof c && (c = 2e3), this.and(b, this.animate, a, c)
        }, Animator.prototype.fadeOut = function(a, b) {
            return "undefined" == typeof b && (b = 2e3), this.and(c, this.animate, a, b)
        }, Animator.prototype.changeText = function(a, b) {
            return this.and(d, this.animate, a, b)
        }, Animator.prototype.style = function(a, b, c, d) {
            return "undefined" == typeof d && (d = 1e3), this.and(e, this.animate, a, b, c, d)
        }, Animator.prototype.attr = function(a, b, c, d) {
            return "undefined" == typeof d && (d = 1e3), this.and(f, this.animate, a, b, c, d)
        }, Animator.prototype.transform = function(a, b, c) {
            return "undefined" == typeof c && (c = 1e3), this.and(g, this.animate, a, b, c)
        }
    }(), modules.birth = function() {
        function a() {
            y = Talkie.animate("#module-birth"), z = !0, fadeOutDisplayNone(".leaflet-control-container"), α.map.on("viewreset", m), α.map.on("moveend", m), m(), d3.select(α.flight_paths_layer.getContainer()).transition().duration(1e3).style("opacity", 0).each("end", function() {
                α.map.removeLayer(α.flight_paths_layer)
            }), b(), g(), d3.select(".headline").style("display", "none").transition().duration(500).delay(4e3).style("opacity", 0).each("end", function() {
                showBigPlayButton(), fadeInDisplayBlock(".headline"), d3.selectAll("#content, path.leaflet-clickable, #year-counter, .headline").style("cursor", "pointer").on("click", e)
            }), d3.select("#go-to-place").on("click", h("place")), d3.select("#go-to-plane").on("click", h("plane")), d3.select("#go-to-pilot").on("click", h("pilot")), d3.select("#go-to-passenger").on("click", h("passenger")), d3.select("#go-to-prediction").on("click", h("prediction")), G = Talkie.timeline("#audio", {
                "0:04": O.and(u),
                "0:09": O.and(f).kenBurns("#pic-landing", 8e3, "110%", "110%", "110%", "110%", "0%", "-10%", "0%", "-10%"),
                "0:28": O.and(l, "landing", "plan").kenBurns("#pic-plan", 8e3, "100%", "180%", "100%", "100%", "0%", "0%", "0%", "0%"),
                "0:41": O.and(l, "plan", "place"),
                "0:51": O.and(l, "place", "pilot").kenBurns("#pic-pilot", 6e3, "110%", "100%", "200%", "200%", "0%", "0%", "-80%", "-100%"),
                "0:58": O.and(l, "pilot", "plane").kenBurns("#pic-plane", 8e3, "100%", "140%", "100%", "100%", "0%", "-20%", "0%", "0%"),
                "0:68": O.and(l, "plane", "passenger").kenBurns("#pic-plan", 8e3, "100%", "180%", "100%", "100%", "0%", "0%", "0%", "0%"),
                "0:78": O.and(l, "passenger", "prediction").kenBurns("#pic-prediction", 8e3, "100%", "130%", "100%", "100%", "0%", "0%", "0%", "0%"),
                "0:88": O.and(l, "prediction", "landing")
            })
        }

        function b() {
            function a() {
                function a() {
                    var c = parseInt(b.text()) - 1;
                    b.text(c), c > 1914 ? F = setTimeout(a, d / 100) : (d3.select("#florida").transition().duration(750).style("opacity", 1), F = null)
                }
                var b = d3.select("#year");
                b.text("2014"), a()
            }
            var b = 1e3,
                d = 3e3;
            w(), E = setTimeout(function() {
                v(.25, 6), a(), c(d), E = null
            }, b)
        }

        function c(a) {
            d3.select("#year-holder").style("right", "3%").style("top", "3%").style("margin-right", 0).transition().duration(a).ease("linear").style("right", "25%").style("top", "50%").style("margin-right", "-110px"), d3.select("#year").style("font-size", "36px").transition().duration(a).ease("linear").style("font-size", "48px")
        }

        function d() {
            fadeInDisplayBlock("#nav, #nav-year, #nav-bg"), d3.select("path.leaflet-clickable").transition().duration(1e3).attr("d", "M617,-973 A 1155,1155,0,1,1,616.9,-973 z").each("end", x), k("landing"), fadeOutDisplayNone("#tampabay, #year-holder, .headline"), d3.selectAll("#content, path.leaflet-clickable, #year-counter").style("cursor", "default").on("click", null)
        }

        function e() {
            d(), hideBigPlayButton(), fadeInDisplayBlock("#nav-holder"), G.undoInteraction(function() {
                w(), fadeOutDisplayNone("#landing"), c()
            })
        }

        function f() {
            d(), G.setUndo(function() {
                w(), fadeOutDisplayNone("#landing"), c(0)
            })
        }

        function g() {
            ["landing", "plan", "place", "plane", "pilot", "passenger", "prediction"].forEach(function(a) {
                d3.select("#nav-" + a).on("click", h(a))
            })
        }

        function h(a) {
            return function() {
                var b = I;
                audio.pause(), G.undoInteraction(function() {
                    k(b)
                }), k(a)
            }
        }

        function i(a) {
            clearTimeout(E), E = null, null != F && (clearTimeout(F), F = null), clearInterval(B), B = null, clearTimeout(D), D = null, fadeOutDisplayNone(".section", 500), d3.selectAll(".navselected").classed("navselected", !1), d3.select(a).classed("navselected", !0), d3.select("#nav-bg").style("opacity", .75), s()
        }

        function j(a) {
            clearInterval(B);
            var b = 0;
            B = setInterval(function() {
                var c = (b + 1) % a.length;
                fadeOutDisplayNone(a[b], 500), fadeInDisplayBlock(a[c]), b = c
            }, 5e3)
        }

        function k(a) {
            i("#nav-" + a), fadeInDisplayBlock("#" + a), P.hasOwnProperty(a) && P[a](), I = a
        }

        function l(a, b) {
            k(b), G.setUndo(function() {
                k(a)
            })
        }

        function m() {
            var a = α.map.getPixelBounds().getSize(),
                b = α.map.containerPointToLayerPoint([-J.x, -J.y]);
            α.canvas.width = a.x + 2 * J.x, α.canvas.height = a.y + 2 * J.y, α.canvas.style.left = b.x + "px", α.canvas.style.top = b.y + "px", α.cx.fillStyle = "white", α.cx.shadowColor = "white", α.cx.shadowBlur = 20, α.cx.translate(-b.x, -b.y)
        }

        function n(a) {
            var b = a.lat * Math.PI / 180,
                c = a.lng * Math.PI / 180;
            return [Math.cos(c) * Math.cos(b), Math.sin(c) * Math.cos(b), Math.sin(b)]
        }

        function o(a, b, c) {
            var d = n(b),
                e = n(c),
                f = Math.acos(d[0] * e[0] + d[1] * e[1] + d[2] * e[2]),
                g = Math.sin(f),
                h = Math.sin((1 - a) * f) / g,
                i = Math.sin(a * f) / g,
                j = [h * d[0] + i * e[0], h * d[1] + i * e[1], h * d[2] + i * e[2]],
                k = Math.asin(j[2]),
                l = Math.acos(j[2]),
                m = Math.atan2(j[1] / l, j[0] / l);
            return new L.LatLng(180 * k / Math.PI, 180 * m / Math.PI)
        }

        function p(a) {
            var b;
            b = 3 > a ? (Math.cos(a / 3 * Math.PI) + 1) / 2 : 4 > a ? 0 : 7 > a ? (Math.cos((a - 1) / 3 * Math.PI) + 1) / 2 : 1;
            var c = o(b, M, N);
            pos = α.map.latLngToLayerPoint(c), α.cx.save(), α.cx.setTransform(1, 0, 0, 1, 0, 0), α.cx.clearRect(0, 0, α.canvas.width, α.canvas.height), α.cx.restore(), α.cx.beginPath(), α.cx.arc(pos.x, pos.y, 3, 0, 7, !1), α.cx.fill()
        }

        function q(a) {
            R || (R = a), p(8 * ((a - R) % K) / K), Q = requestAnimationFrame(q)
        }

        function r() {
            z && (log("Beginning airboat animation"), Q = requestAnimationFrame(q))
        }

        function s() {
            z && null != Q && (log("Ending airboat animation"), cancelAnimationFrame(Q), Q = null, R = null, α.cx.save(), α.cx.setTransform(1, 0, 0, 1, 0, 0), α.cx.clearRect(0, 0, α.canvas.width, α.canvas.height), α.cx.restore())
        }

        function t() {
            x(), s(), clearTimeout(E), E = null, clearTimeout(F), F = null, clearInterval(B), B = null, clearTimeout(D), D = null, fadeInDisplayBlock(".leaflet-control-container"), z = !1
        }

        function u() {
            v(.25, 7, G.fast_forward), fadeInDisplayBlock("#tampabay"), G.setUndo(function() {
                fadeOutDisplayNone("#tampabay"), v(.25, 6, !0)
            })
        }

        function v(a, b, c) {
            if (z) {
                if (!c) {
                    var d = d3.select(α.map.getContainer());
                    d.classed("slow-zoom", !0), α.map.once("zoomend", function() {
                        d.classed("slow-zoom", !1)
                    })
                }
                var e = α.map.project([27.832, -82.574], b),
                    f = α.map.getPixelBounds().getSize(),
                    g = e.add([f.x * -a, 0]),
                    h = α.map.unproject(g, b);
                c ? setMapView(h.lat, h.lng, b, !0) : α.map.setView(h, b, {
                    reset: !1,
                    animate: !0
                })
            }
        }

        function w() {
            A = L.circle([27.8, -82.55], 5e4, {
                color: "none",
                fillColor: "white",
                fillOpacity: "0.3"
            }).addTo(α.map), C = !0
        }

        function x() {
            C && (α.map.removeLayer(A), C = !1)
        }
        var y, z, A, B, C, D, E, F, G, H = {},
            I = "landing",
            J = new L.Point(0, 0),
            K = 8e3,
            M = new L.LatLng(27.918, -82.441),
            N = new L.LatLng(27.749, -82.625),
            O = animator(function() {
                return z
            }, function() {
                return y
            }),
            P = {
                landing: function() {
                    j(["#pic-landing", "#pic-landing-1", "#pic-landing-2", "#pic-landing-3"])
                },
                place: function() {
                    d3.select("#pic-place").style("width", "1%").style("height", "1%").style("left", "0%").style("top", "0%").style("transform", "rotate(-359deg)").style("-webkit-transform", "rotate(-359deg)").style("-ms-transform", "rotate(-359deg)").transition().duration(1500).delay(750).style("opacity", 1).style("top", "10%").style("left", "10%").style("width", "90%").style("height", "90%").style("transform", "rotate(359deg)").style("-ms-transform", "rotate(-359deg)").style("-webkit-transform", "rotate(359deg)"), v(.25, 7, !0), v(.35, 8, G.fast_forward), G.fast_forward || (D = setTimeout(function() {
                        r(), D = null
                    }, 2500))
                },
                passenger: function() {
                    j(["#pic-passenger", "#pic-passenger-1"])
                }
            },
            Q = null,
            R = null;
        return {
            load: a,
            unload: t,
            name: "Birth of an industry",
            exports: H
        }
    }(), modules.century = function() {
        function a() {
            p = Talkie.animate("#module-century"), q = !0, r = d3.format(",f");
            for (var a = {
                    "0:00.1": y.and(j)
                }, b = null, e = 0; e < z.length; e += 3) {
                var f = z[e],
                    g = z[e + 1],
                    h = z[e + 2],
                    i = y.and(c, b, g);
                h && (i = i.kenBurns.apply(i, h)), a[f] = i, b = g
            }
            s = v.timeline = Talkie.timeline("#audio", a), t = !1, setMapView(20, -10, 2), fadeOutDisplayNone(".leaflet-control-container"), d3.select("#shade-left").transition().duration(2e3).style("opacity", .5), fadeInDisplayBlock(".headline", 500), showBigPlayButton(), d3.selectAll(".click-to-interact, .headline, #graph").style("cursor", "pointer").on("click", function() {
                j(), fadeInDisplayBlock("#century-top-bar")
            }), d()
        }

        function b() {
            q = !1, fadeInDisplayBlock(".leaflet-control-container")
        }

        function c(a, b) {
            log("changePic", a, b), o(b), this.setUndo(function() {
                o(a)
            }), d3.select("#pic-hr").style("width", "100%").style("top", 0).style("left", 0)
        }

        function d() {
            d3.select("#show-graph").on("click", h), d3.select("#show-highlights").on("click", e)
        }

        function e() {
            x ? g() : f()
        }

        function f() {
            x || (i(), fadeInDisplayBlock("#highlights"), x = !0)
        }

        function g() {
            x && (fadeOutDisplayNone("#highlights"), x = !1)
        }

        function h() {
            g(), i()
        }

        function i() {
            d3.select("#pic-hr").attr("style", "background-image: none"), d3.selectAll("#bg-photo .image").style("display", "none"), d3.select("#caption").text("Slide over the graph to explore the century"), d3.select("#counter").transition().duration(500).style("opacity", 0), d3.select("#credit").text(""), t = !1
        }

        function j() {
            fadeOutDisplayNone(".headline"), k(), l(), hideBigPlayButton(), d3.selectAll(".click-to-interact, .chapter-headline, #graph").style("cursor", "default").on("click", null)
        }

        function k() {
            var a, b, c = d3.select("#graph").text("").append("svg").attr("id", "century-svg").attr("viewBox", "0 0 " + C + " " + D),
                d = B.length,
                e = 8;
            a = function(a) {
                return a / 6e5 + .65 * w
            }, b = function(a, b) {
                return 25 * b
            };
            var f = c.append("svg:defs").append("svg:linearGradient").attr("id", "gradient").attr("x1", "0%").attr("y1", "100%").attr("y2", "0%").attr("x2", "0%").attr("spreadMethod", "pad");
            f.transition().duration(1.9 * w).attr("y1", "90%"), f.append("svg:stop").attr("offset", "10%").attr("stop-color", "#fff").attr("stop-opacity", .01).transition().duration(1.9 * w).attr("offset", "80%"), f.append("svg:stop").attr("offset", "100%").attr("stop-color", "#fff").attr("stop-opacity", .8);
            var g = c.append("g").attr("id", "graph-area").attr("transform", "translate(" + E.left + "," + E.top + ")"),
                h = d3.svg.axis().scale(H).tickValues([1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2e3, 2010]).tickFormat(d3.format()).orient("bottom");
            H.domain([1914, 2013]), I.domain([0, d3.max(B)]);
            var i = G + 600 - e,
                j = function(a) {
                    return I(a) - e
                },
                k = function(a, b) {
                    return F / d * b - 1
                },
                l = g.append("g").attr("id", "planes");
            l.selectAll("path").data(B).enter().append("path").attr("d", function(a, b) {
                var c = k(a, b);
                return " M " + (c + 2.25) + " " + (i + 15) + " L " + (c + 1.75) + " " + (i + 15) + " L " + (c - .5) + " " + (i + 30) + " L " + (c + 3.5) + " " + (i + 30) + " M " + (c + 6.25) + " " + (i + 15) + " L " + (c + 5.75) + " " + (i + 15) + " L " + (c + 3.5) + " " + (i + 30) + " L " + (c + 7.5) + " " + (i + 30)
            }).attr("class", function(a, b) {
                return "dimmable plane" + (b + 1914)
            }).style("fill", "url(#gradient)").transition().delay(b).duration(a).attr("d", function(a, b) {
                var c = k(a, b),
                    d = j(a, b);
                return " M " + (c + 2.25) + " " + (d + 6) + " L " + (c + 1.75) + " " + (d + 6) + " L " + (c - .5) + " " + (i + 30) + " L " + (c + 3.5) + " " + (i + 30) + " M " + (c + 6.25) + " " + (d + 6) + " L " + (c + 5.75) + " " + (d + 6) + " L " + (c + 3.5) + " " + (i + 30) + " L " + (c + 7.5) + " " + (i + 30)
            }), l.selectAll(".little-plane").data(B).enter().append("image").attr("xlink:href", "media/century/airplane.svg").attr("width", "8px").attr("height", "8px").attr("class", function(a, b) {
                return "dimmable plane" + (b + 1914)
            }).attr("x", k).attr("y", i).transition().delay(b).duration(a).attr("y", j), g.append("g").attr("class", "x axis dimmable").attr("transform", "translate(0," + G + ")").call(h), d3.select("#graph-area").attr("transform", "translate(" + E.left + "," + (E.top - 10.5 * G) + ") scale(9)").transition().duration(w).ease("quad-in-out").attr("transform", "translate(" + E.left + "," + E.top + ") scale(1)"), g.append("line").attr("id", "zero-line").classed("dimmable", !0).attr("x1", H(1914)).attr("x2", H(2013)).attr("y1", I(0)).attr("y2", I(0)).attr("stroke", "rgba(250,250,250,0.8)").attr("stroke-dasharray", "2,2");
            var m = g.append("g").attr("id", "counter").attr("transform", "translate(25,170)").attr("opacity", 0);
            m.append("text").attr("id", "year").attr("fill", "white").attr("font-size", 22), m.append("text").attr("id", "pax").attr("fill", "white").attr("transform", "translate(0,36)").attr("font-size", 40).attr("font-family", "Guardian-Sans-Web-Light"), m.append("text").attr("fill", "white").attr("transform", "translate(0,52)").text("plane tickets sold").attr("font-family", "Guardian-Sans-Web-Light");
            var n = g.append("g").attr("id", "highlights");
            n.append("circle").attr("cx", H(1979)).attr("cy", I(B[65])).attr("r", 20), n.append("text").text("Iranian revolution triggers energy crisis").attr("x", H(1979)).attr("y", I(B[65]) - 15), n.append("circle").attr("cx", H(1991)).attr("cy", I(B[77])).attr("r", 20), n.append("text").text("Iraq invades Kuwait, oil prices spike").attr("x", H(1991)).attr("y", I(B[77]) - 15), n.append("circle").attr("cx", H(2001)).attr("cy", I(B[87])).attr("r", 20), n.append("text").text("9/11 terrorist attacks in New York").attr("x", H(2001)).attr("y", I(B[87]) - 15), n.append("circle").attr("cx", H(2008)).attr("cy", I(B[94])).attr("r", 20), n.append("text").text("Global financial crises").attr("x", H(2008)).attr("y", I(B[94]) - 15)
        }

        function l() {
            d3.select("#graph-area").append("rect").attr("id", "mouseover-rect").attr("x", 0).attr("y", 0).attr("width", F).attr("height", G).attr("opacity", "0").on("mouseout", function() {
                audio.paused && d3.selectAll(".dimmable").classed("dimmed", !1)
            }).on("mousemove", m).on("touchstart", function() {
                d3.event.preventDefault(), n.call(this)
            }).on("touchmove", n)
        }

        function m() {
            audio.paused && o(Math.round(H.invert(d3.mouse(this)[0])))
        }

        function n() {
            if (audio.paused) {
                var a = d3.touches(this);
                1 == a.length && o(Math.round(H.invert(a[0][0])))
            }
        }

        function o(a) {
            if (a != J && (t || (d3.select("#counter").transition().duration(500).style("opacity", 1), t = !0), null != J && (d3.select("#pic" + J).style("display", "none"), d3.selectAll(".plane" + J).classed("dimmable", !0)), null != a && (d3.select("#pic" + a).style("display", "block").style("width", "100%").style("height", "100%").style("left", 0).style("top", 0), d3.selectAll(".plane" + a).classed("dimmable", !1).classed("dimmed", !1)), J = a, g(), d3.selectAll(".dimmable").classed("dimmed", !0), null != J)) {
                d3.select("#pax").text(r(B[J - 1914])), d3.select("#year").text(J), d3.select("#caption").text(A[J - 1914].text), d3.select("#credit").text("Photo: " + A[J - 1914].credit), d3.selectAll(".plane" + J).classed("dimmable", !1);
                var b = d3.select("#pic-hr");
                b.attr("style", null), u && clearTimeout(u), u = setTimeout(function() {
                    A[J - 1914] && b.attr("style", "background-image: url(http://interactive.guim.co.uk/embed/kiln/aviation/media/century/hi-res/" + A[J - 1914].file + ");"), u = null
                }, 100)
            }
        }
        var p, q, r, s, t, u, v = {},
            w = 6e3,
            x = !1,
            y = animator(function() {
                return q
            }, function() {
                return p
            }),
            z = ["0:10.0", 1914, ["#pic1914, #pic-hr", 4e3, "100%", "100%", "100%", "100%", "0%", "0%", "0%", "0%"], "0:14.0", 1915, ["#pic1915, #pic-hr", 4e3, "100%", "100%", "100%", "100%", "0%", "0%", "0%", "0%"], "0:18.0", 1917, ["#pic1917, #pic-hr", 4e3, "100%", "100%", "100%", "100%", "0%", "0%", "0%", "0%"], "0:23.5", 1918, ["#pic1918, #pic-hr", 4e3, "100%", "100%", "100%", "100%", "0%", "0%", "0%", "0%"], "0:28.0", 1919, ["#pic1919, #pic-hr", 4e3, "100%", "100%", "100%", "100%", "0%", "0%", "0%", "0%"], "0:36.0", 1928, ["#pic1928, #pic-hr", 4e3, "100%", "100%", "100%", "100%", "0%", "0%", "0%", "0%"], "0:42.0", 1930, ["#pic1930, #pic-hr", 4e3, "100%", "100%", "100%", "100%", "0%", "0%", "0%", "0%"], "0:47.0", 1925, ["#pic1925, #pic-hr", 4e3, "100%", "100%", "100%", "100%", "0%", "0%", "0%", "0%"], "0:52.0", 1935, ["#pic1935, #pic-hr", 4e3, "100%", "100%", "100%", "100%", "0%", "0%", "0%", "0%"], "0:57.0", 1942, ["#pic1942, #pic-hr", 4e3, "100%", "100%", "100%", "100%", "0%", "0%", "0%", "0%"], "1:03.0", 1943, ["#pic1943, #pic-hr", 4e3, "100%", "100%", "100%", "100%", "0%", "0%", "0%", "0%"], "1:08.0", 1944, ["#pic1944, #pic-hr", 4e3, "100%", "100%", "100%", "100%", "0%", "0%", "0%", "0%"], "1:11.5", 1952, ["#pic1952, #pic-hr", 4e3, "100%", "100%", "100%", "100%", "0%", "0%", "0%", "0%"], "1:15.0", 1957, ["#pic1957, #pic-hr", 4e3, "100%", "100%", "100%", "100%", "0%", "0%", "0%", "0%"], "1:20.0", 1958, ["#pic1958, #pic-hr", 4e3, "100%", "100%", "100%", "100%", "0%", "0%", "0%", "0%"], "1:25.0", 1961, ["#pic1961, #pic-hr", 4e3, "100%", "100%", "100%", "100%", "0%", "0%", "0%", "0%"], "1:30.0", 1962, ["#pic1962, #pic-hr", 4e3, "100%", "100%", "100%", "100%", "0%", "0%", "0%", "0%"], "1:35.0", 1964, ["#pic1964, #pic-hr", 4e3, "100%", "100%", "100%", "100%", "0%", "0%", "0%", "0%"], "1:41.0", 1982, ["#pic1982, #pic-hr", 4e3, "100%", "100%", "100%", "100%", "0%", "0%", "0%", "0%"], "1:46.0", 1990, ["#pic1990, #pic-hr", 4e3, "100%", "100%", "100%", "100%", "0%", "0%", "0%", "0%"], "1:51.0", 2001, ["#pic2001, #pic-hr", 4e3, "100%", "100%", "100%", "100%", "0%", "0%", "0%", "0%"], "1:56.0", 2006, ["#pic2006, #pic-hr", 4e3, "100%", "100%", "100%", "100%", "0%", "0%", "0%", "0%"], "2:01.0", 2011, ["#pic2011, #pic-hr", 4e3, "100%", "100%", "100%", "100%", "0%", "0%", "0%", "0%"]],
            A = [{
                year: 1914,
                text: "The Ilya Muromets, first built by Igor Sikorsky in 1913, was conceived as a passenger plane and broke records for the number of passengers it could accommodate. In 1914 the four-engine, 3.5-tonne design was converted into a bomber for use in the first world war.",
                captionsource: "Getty/http://en.wikipedia.org/wiki/Sikorsky_Ilya_Muromets",
                file: "2666455.jpg",
                credit: "Hulton Archive/Getty Images"
            }, {
                year: 1915,
                text: "Crowds gather to see a German Taube (‘Dove’) aircraft, on display at Les Invalides, Paris, at the height of the first world war. Shaped like a bird, the Taube was one of the first mass-produced military aircraft, but was phased out at the beginning of the war as more powerful planes took over.",
                captionsource: "Getty / Wikipedia",
                file: "3425862.jpg",
                credit: "Hulton Archive"
            }, {
                year: 1916,
                text: "In the war, nations also made use of airships or Zeppelins – giant lighter-than-air balloons with small wingless propeller pods hanging below. This technology was much more established than heavier-than-air planes; in the early part of the 20th century, airships carried more passengers than planes.",
                captionsource: "",
                file: "NA007113.jpg",
                credit: "CORBIS"
            }, {
                year: 1917,
                text: "British soldiers inspecting a captured German plane in the Horseguards’ Parade, London during the first world war.",
                captionsource: "Getty",
                file: "3063065.jpg",
                credit: "Hulton Archive"
            }, {
                year: 1918,
                text: "As the first world war drew to a close, military planes were adapted for cilivian use, especially for air mail, such as this service which opened in Philadelphia in 1918.",
                captionsource: "Corbis caption",
                file: "BE034052.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1919,
                text: "The first daily international air service launches, flying four travellers at a time between London and Paris in an Airco DH.16, one of many planes of the era adapted from a light bomber.",
                captionsource: "http://en.wikipedia.org/wiki/Airco_DH.16",
                file: "wikicommons-DH16-AT&T.jpg",
                credit: "Wikicommons/Flight Global"
            }, {
                year: 1920,
                text: "Run by a flamboyant retired baseball player and coach, the Lawson Air Line pioneered passenger flight in the US. This picture shows one of Lawson’s first planes arriving in New York from Milwaukee. It had a mahogany-panelled cabin, with freestanding wicker chairs covered in green leather.",
                captionsource: "Corbis/http://www.flightglobal.com/pdfarchive/view/1919/1919%20-%201218.html",
                file: "BE035333.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1921,
                text: "Passengers in London wait near a large snub-nosed Bristol Ten-Seater, which entered service in 1921. An airship floats by in the background.",
                captionsource: "Corbis/http://en.wikipedia.org/wiki/Bristol_Ten-seater",
                file: "HU002535.jpg",
                credit: "Hulton-Deutsch Collection/CORBIS"
            }, {
                year: 1922,
                text: "A brass-buttoned young airline porter assists a passenger in the days before air hostesses.",
                captionsource: "n/a",
                file: "HU007893.jpg",
                credit: "Hulton-Deutsch Collection/CORBIS"
            }, {
                year: 1923,
                text: "The Berlin-London Air Service prepares to make its first trip between the two capital cities.",
                captionsource: "Corbis",
                file: "SF5251.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1924,
                text: "Although passenger air travel was on the rise, 1920s aviation was still dominated by barnstormers and daredevils, including ‘wing walkers’ such as Gladys Roy, who became famous partly for her airborne tennis stunt. Here she plays Ivan Unger at around 3000 feet. Roy performed stunts throughout the mid-1920s before being killed after walking into a propeller of a grounded plane.",
                captionsource: "Corbis/http://siris-archives.si.edu/ipac20/ipac.jsp?uri=full=3100001~!263289!0",
                file: "U307420INP.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1925,
                text: "Passengers enjoying a very early example of an in-flight movie on April 6, 1925.",
                captionsource: "Corbis",
                file: "HU007917.jpg",
                credit: "Hulton-Deutsch Collection/CORBIS"
            }, {
                year: 1926,
                text: "The most successful passenger plane of the late 1920s was the Ford Trimotor – nicknamed the ‘Tin Goose’ for its all-metal construction.",
                captionsource: "",
                file: "BE053209.jpg",
                credit: "Underwood & Underwood/Corbis"
            }, {
                year: 1927,
                text: "The first couple of flight. In 1927 Charles Lindbergh became a global celebrity after winning the $25,000 Orteig Prize for being the first person to fly from New York to Paris. His wife, Anne Morrow Lindbergh, flew the world with him promoting aviation, becoming the most prolific air passenger of the day and helping to reassure the public that flying was safe.",
                captionsource: "http://en.wikipedia.org/wiki/Orteig_Prize",
                file: "BE043201.jpg",
                credit: "Underwood & Underwood/Corbis"
            }, {
                year: 1928,
                text: "Lady Heath, the first woman to be engaged as a pilot on a passenger air service, standing in front of a Dutch airline KLM Fokker passenger plane, with 1st pilot J Scholte.",
                captionsource: "Getty",
                file: "2665547.jpg",
                credit: "Getty Images"
            }, {
                year: 1929,
                text: "Passengers and crew stand along side the Dornier Do X before its take off, carrying 169 people to break the world record for number of people aboard a flight.",
                captionsource: "Corbis",
                file: "IH190216.jpg",
                credit: "CORBIS"
            }, {
                year: 1930,
                text: "Nurse and aspiring pilot Ellen Church is widely credited with inventing the role of the air hostess in 1930, after convincing Boeing Air Transport that passengers would be reassured or allured by the presence of young female nurses or ‘sky girls’, of whom she became the first. Church is pictured here later, in the 1940s.",
                captionsource: "Corbis / http://www.pbs.org/kcet/chasingthesun/innovators/echurch.html",
                file: "BE077253.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1931,
                text: "The ‘drawing room’ of a newly developed Handley Page airliner, complete with ornate upholstered furniture and a door leading to a cocktail bar.",
                captionsource: "Underwood & Underwood/Corbis",
                file: "VV10038.jpg",
                credit: "CORBIS"
            }, {
                year: 1932,
                text: "In the 1930s, air travel started to shrink the political and diplomatic world, making it possible for dignitatries to tour distant parts of the world much more quickly and easily. Here the Maharajah of Jodhpur and family embark on a tour of Europe with Imperial Airway.",
                captionsource: "",
                file: "HU027411.jpg",
                credit: "Hulton-Deutsch Collection/CORBIS"
            }, {
                year: 1933,
                text: "Stewardess Izola Readle takes tickets from cartoonist Walt Disney, with his creation Mickey Mouse, in Newark, New Jersey as they board an airplane on their way to the World's Fair in Chicago.",
                captionsource: "Corbis",
                file: "U664439INP.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1934,
                text: "A flight attendant for Boeing Air Transport (a predecessor division of United Airlines) pours coffee in a Boeing 80. This airliner was retired in 1934, by which time Boeing were producing more modern aircraft such as the Model 247, complete with autopilot and retractable landing gear.",
                captionsource: "Corbis / http://www.museumofflight.org/aircraft/boeing-80a-1",
                file: "BE063489.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1935,
                text: "An Imperial Airways poster advertises a flight time of 10 and a half days on the first UK–Australia air route. Passengers reached Brisbane after dozens of stops across Europe, the Middle East, India and South East Asia.",
                captionsource: "Corbis / http://en.wikipedia.org/wiki/Imperial_Airways Note: passenger route began in 1935 but poster undated. Map on wikipedia shows the multiple stops.",
                file: "42-26642641.jpg",
                credit: "Michael Nicholson/Corbis"
            }, {
                year: 1936,
                text: "Military planes in the interwar years continued to attract a lot of government investment and cilivian interest. In this picture, biplanes fly in formation over a packed carpark at the Annual Royal Air Force Show at Hendon, UK.",
                captionsource: "Corbis caption",
                file: "HU043910.jpg",
                credit: "Hulton-Deutsch Collection/CORBIS"
            }, {
                year: 1937,
                text: "On 6 May 1937 the Hindenburg passenger airship caught fire, killing dozens. Pictures and radio coverage of the event were shown and broadcast around the world, and the airship industry never recovered, further cementing the dominance of commercial plane travel.",
                captionsource: "Corbis/Wikipedia/Others",
                file: "42-28680662.jpg",
                credit: "dpa/Corbis"
            }, {
                year: 1938,
                text: "An unusually luxurious cabin interior of a passenger plane of the German Deutsche Luft Hansa line.",
                captionsource: "Corbis",
                file: "SF25126.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1939,
                text: "As altitude rose towards the stratosphere oxygen masks started to make their appearance. Here passengers on a Northwest Airlines plane breathe a helium-oxygen mixture while cruising at 20,000 feet.",
                captionsource: "Corbis",
                file: "BE067298.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1940,
                text: "A postcard showing stewardesses on the Chicago & Southern airline, who were ‘trained to reflect the natural hospitality of the South, and give the type of service the airline passenger expects and deserves’.",
                captionsource: "Corbis",
                file: "LW003765.jpg",
                credit: "Lake County Museum/CORBIS"
            }, {
                year: 1941,
                text: "Passengers boarding a Boeing B-314 flying boat, which saw both passenger and military use in the 1940s. This one is serving as a Pan American Airways Clipper, but the same model was used in the Battle of Britain.",
                captionsource: "Corbis / Wikipedia",
                file: "IH171506.jpg",
                credit: "CORBIS"
            }, {
                year: 1942,
                text: "The second world war saw an unprecedented amount of investment in aircraft technology. In the space of a few years, more than half a million fighters and bombers were produced by the key war powers, often in factories staffed by women, giving rise to the American cultural icon ‘Rosie the Riveter’.",
                captionsource: "Corbis / The Economics of World War II, Table 1.6",
                file: "42-48484761.jpg",
                credit: "ClassicStock/Corbis"
            }, {
                year: 1943,
                text: "Heavy bombers played a pivotal role in the second world war, leading to innovations that enabled more powerful, longer-range passenger planes. Produced by Boeing, the Flying Fortress, seen here, accounted for a large proportion of the American bombs dropped on Germany.",
                captionsource: "http://en.wikipedia.org/wiki/Boeing_B-17_Flying_Fortress",
                file: "HU034072.jpg",
                credit: "Hulton-Deutsch Collection/CORBIS"
            }, {
                year: 1944,
                text: "Douglas Aircraft Corporation workers celebrated the plant’s 3000th C-47 ‘Skytrain’ – an important military transport plane that was adapted from the same company’s DC-3 civilian aircraft.",
                captionsource: "Corbis / Wikipedia",
                file: "BE072103.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1945,
                text: "Pan American World Airways passengers watch the first inflight ‘talkie’ – a movie with sound – on the New York to London flight in November 1945.",
                captionsource: "Corbis",
                file: "BE068656.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1946,
                text: "In an early attempt to add glamour to air travel, June Fogg models a black-and-white lounge suit during a fashion show staged on board a Pan American Airways Clipper in July 1946.",
                captionsource: "Corbis",
                file: "HU015515.jpg",
                credit: "Hulton-Deutsch Collection/CORBIS"
            }, {
                year: 1947,
                text: "Commercial aviation strengthened the postwar bonds between Europe and North America. Here a Swissair DC-4 flies over New York City at the end of a non-stop flight from Geneva.",
                captionsource: "Corbis",
                file: "42-17794575.jpg",
                credit: "Keystone/Corbis"
            }, {
                year: 1948,
                text: "Children receive a mid-air breakfast in bed as airlines step up luxury on overnight flights to ‘banish time and space and boredom’.",
                captionsource: "Corbis",
                file: "BE059688.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1949,
                text: "The Brabazon I, produced in the UK by the Bristol Aeroplane Company, makes a test flight. The plane was designed to be unusually spacious, carrying just 100 passengers in its enormous cabin, allowing for sleeping births, dining room and cinema. The prototype was scrapped in 1953 after proving a commercial failure.",
                captionsource: " http://en.wikipedia.org/wiki/Bristol_Brabazon",
                file: "U1127486INP.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1950,
                text: "Flight attendants being instructed in ‘tray set’ food serving in Jun 1950.",
                captionsource: "Corbis",
                file: "HU007933.jpg",
                credit: "Hulton-Deutsch Collection/CORBIS"
            }, {
                year: 1951,
                text: "Air travelers receive traditional Hawaiian welcome in 1951. Hawaii was one of many places which saw major changes in the 1950s due to the rise in long-distance leisure travel.",
                captionsource: "Corbis",
                file: "42-24149041.jpg",
                credit: "J. Baylor Roberts/National Geographic Society/Corbis"
            }, {
                year: 1952,
                text: "The De Havilland Comet: the world’s first production jetliner. Manufactured in the UK, it entered commercial service in 1952 but was soon withdrawn after a series of accidents caused by metal fatigue.",
                captionsource: "http://en.wikipedia.org/wiki/De_Havilland_Comet",
                file: "3312462.jpg",
                credit: "Getty Images"
            }, {
                year: 1953,
                text: "An experimental freighter aircraft conveys cars from Birmingham, England to Le Touquet, France in 1953. The AA staged the experiment to test the viability of transporting cars by air for the thousands of motorists who go abroad each year on holiday.",
                captionsource: "",
                file: "HU007931.jpg",
                credit: "Hulton-Deutsch Collection/CORBIS"
            }, {
                year: 1954,
                text: "Two businessmen walk towards a plane in 1954. The 1950s saw a huge increase both in the number of business air travellers and the number of routes available to them.",
                captionsource: "Corbis/various",
                file: "NT3767280.jpg",
                credit: "H. Armstrong Roberts/CORBIS"
            }, {
                year: 1955,
                text: "As the skies started to fill up in the middle of the twenty century, air traffic control systems had to grow to match. This picture shows the ATC room at London Heathrow Airport Central’s new terminal in March 1955.",
                captionsource: "Getty",
                file: "2659480.jpg",
                credit: "Getty Images"
            }, {
                year: 1956,
                text: "Although by the 1950s most passenger planes looked broadly similar to modern airliners, various experimental alternatives underwent testing. This picture shows an inflatable rubber aeroplane, small enough to fit into the trunk of a car when deflated. It was created by Goodyear Aircraft Corporation to test the possibilities of rubber-coated nylon as an aircraft material.",
                captionsource: "Corbis",
                file: "U1099916.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1957,
                text: "Passengers eat inside a mock-up of the forthcoming Boeing 707, which featured luxuries such as reading lights, flight attendant call buttons, and emergency oxygen masks. The most important jetliner of its age, the 707 made its first flight in 1957 and entered service the following year.",
                captionsource: "Corbis / http://www.airliners.net/aircraft-data/stats.main?id=87",
                file: "BE079225.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1958,
                text: "A Delta Air Lines stewardess shows a route on a globe in a photoshoot to promote the ‘club compartment’ of the new Convair 880 jet airliner.",
                captionsource: "Corbis",
                file: "SF35389.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1959,
                text: "As air travel became increasingly comfortable and quick, politicians and dignitaries spent ever more time visiting other nations. Here Vice President Richard Nixon relaxes on a flight to Iceland, after spending two weeks on a ‘peace and friendship’ mission to Russia and Poland.",
                captionsource: "Corbis",
                file: "U1194488.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1960,
                text: "International sport was transformed by aviation in the mid 1960s. Here the British Olympic team board a BEA Viscount plane en route to Rome for the 1960 Olympics.",
                captionsource: "Getty",
                file: "56765286.jpg",
                credit: "Terry Disney/Stringer"
            }, {
                year: 1961,
                text: "Passengers in a BEA Vickers plane in the early 1960s.",
                captionsource: "Getty",
                file: "3270510.jpg",
                credit: "Getty Images"
            }, {
                year: 1962,
                text: "TWA jets at new Trans World Flight Center, which opened at New York International Airport in 1962. The terminal included modern features such as jet bridges, enabling passenger to walk directly onto planes, an invention that first appeared a few years earlier. This picture was taken on the day of Sky Shield III, a huge US security operation in which all commercial aircraft were grounded to test defences against Soviet attacks.",
                captionsource: "Corbis / http://en.wikipedia.org/wiki/Operation_Skyshield / IATA",
                file: "BE025177.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1963,
                text: "The Quantas Boeing 707 jetliner. Jet air travel transformed Australia’s links with the rest of the world in the 1960s. A boat traveling from London to Sydney took about a month, compared to around a day in a jetliner.",
                captionsource: "Corbis / http://www.anmm.gov.au/site/page.cfm?u=1486",
                file: "U1479510.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1964,
                text: "Aviation played an important role in the creation of the global megastar. Here the Beatles arrive at Idlewild Airport in Queens, New York, on their first trip to the US, and are greeted by several hundred screaming fans.",
                captionsource: "Various",
                file: "BE076035.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1965,
                text: "European routes multiplied quickly in the 1960s. Here the pilot and co-pilot of the British Aircraft Corporation BAC 111 prepare to take off from Gatwick Airport on the aircraft’s inaugural flight to Genoa.",
                captionsource: "Getty",
                file: "3090571.jpg",
                credit: "Getty Images"
            }, {
                year: 1966,
                text: "As passenger numbers kept rising, so aviation infrastructure kept growing. This 1960s photo shows an aerial photograph of London Heathrow airport.",
                captionsource: "Corbis",
                file: "BE071961.jpg",
                credit: "Bettmann/Corbis"
            }, {
                year: 1967,
                text: "A mockup of Lockheed’s planned L-1011 jetliner.",
                captionsource: "Corbis",
                file: "U1573700.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1968,
                text: "A United Airlines flight attendant talks to a passenger in a 1968 photoshoot to promote the Douglas DC-10, which entered commercial service in 1971.",
                captionsource: "Corbis / http://www.boeing.com/boeing/commercial/dc-10/index.page",
                file: "DC004436.jpg",
                credit: "Dean Conger/Corbis"
            }, {
                year: 1969,
                text: "The Boeing 747 making its first takeoff in February 1969. Nicknamed the ‘Jumbo Jet’, the 747 was far bigger than all earlier previous passenger planes and remained the biggest jetliner for nearly four decades.",
                captionsource: "Corbis / http://active.boeing.com/commercial/orders/displaystandardreport.cfm?cboCurrentModel=747&optReportType=AllModels&cboAllModel=747&ViewReportF=View+Report / http://news.bbc.co.uk/1/hi/world/asia-pacific/7061164.stm",
                file: "BE043442.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1970,
                text: "The 1960s and 70s saw a significant increase in the number of plane hijackings and hostage incidents. Here, three hijacked airplanes, cleared of their passengers, are blown up by Palestine Liberation Organization guerrillas in the Jordan desert in September 1970.",
                captionsource: "Corbis / Wikipedia / http://www.bbc.co.uk/news/magazine-23233105",
                file: "BE023895.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1971,
                text: "Launched in 1971 after a legal battle about federal regulation of in-state flights, Southwest Airlines led the charge towards low-cost, no-frills flying. After decades of rapid growth, it is now the largest domestic carrier in the US.",
                captionsource: "Corbis / Southwest",
                file: "AAFN004575.jpg",
                credit: "Mark Peterson/Corbis"
            }, {
                year: 1972,
                text: "First class passengers are served lunch on a BOAC Boeing 747 Jumbo Jet in the early 1970s.",
                captionsource: "Getty",
                file: "2637498.jpg",
                credit: "Hulton Archive"
            }, {
                year: 1973,
                text: "In the late 1960s and early 1970s, Europe and the USSR raced to produce the first commercial supersonic aircraft. The Soviet TU-144, pictured here, was nicknamed ‘Concordski’ in the West. It flew before Concorde, though its development was delayed after a fatal crash in 1973 at the Paris Air Show, shortly after this photograph was taken. The plane then didn’t enter commercial service until 1977, the year after Concorde.",
                captionsource: "Getty and various",
                file: "3404925.jpg",
                credit: "Getty Images"
            }, {
                year: 1974,
                text: "As the first supersonic passenger planes prepared for service in the 1970s, military aircraft were much further ahead. On 1 August 1974, the Lockheed SR-71 Blackbird reconnaisance aircraft flew from New York to London in less than two hours. This record has never been broken.",
                captionsource: "",
                file: "2637494.jpg",
                credit: "Keystone/Getty Images"
            }, {
                year: 1975,
                text: "A plane graveyard. Boeing planes are mothballed in Arkansas after being declared obsolete by the US military.",
                captionsource: "Getty",
                file: "3430667.jpg",
                credit: "Getty Images"
            }, {
                year: 1976,
                text: "Concorde entered commercial service in 1976, the first supersonic passenger plane to do so. Developed as a joint initiative between the UK and France, Concorde had a cruising speed of 1,350mph.",
                captionsource: "http://www.britishairways.com/en-gb/information/about-ba/history-and-heritage/celebrating-concorde",
                file: "BE022526.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1977,
                text: "The accident often described as the worst in commercial aviation history took place in March 1977, when two Boeing 747 airliners collided on the runway of Tenerife Los Rodeos Airport, killing 583 people.",
                captionsource: "Corbis and various",
                file: "42-20515675.jpg",
                credit: "Tony Comiti/Corbis"
            }, {
                year: 1978,
                text: "President Carter signs the airline deregulation bill, phasing out federal control of the nation’s airlines and clearing the path for cheaper plane travel in the US.",
                captionsource: "Corbis / http://www.economist.com/node/146627",
                file: "BE046156.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1979,
                text: "One of NASA’s pair of specially adapted Boeing 747s is used to transport a space shuttle back to the Kennedy Space Center in March 1979.",
                captionsource: "",
                file: "42-47639608.jpg",
                credit: "NASA/Reuters/Corbis"
            }, {
                year: 1980,
                text: "As passenger numbers have grown, so too have the infrastructure for producing commercial aircraft. The Boeing plant in Everett, Washington, is the biggest building in the world, having expanded from 5.8 million cubic metres in 1968 to 8.5 million in 1980 and 13.4 million in 1993. Seen here are 747s during assembly.",
                captionsource: "Corbis /  http://www.boeing.com/boeing/commercial/tours/background.page",
                file: "42-21801387.jpg",
                credit: "Louie Psihoyos/Corbis"
            }, {
                year: 1981,
                text: "People stand beside their baggage at LaGuardia Airport during the 1981 strike by air traffic controllers. In a significant moment in US labour history, the strike ended with President Reagan firing 11,400 controllers, creating a staffing crisis in the aviation sector for years to come.",
                captionsource: "http://www.nytimes.com/1988/01/28/us/strike-tactic-is-discounted-by-new-air-controller-union.html",
                file: "U2054902.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1982,
                text: "Cheaper air travel has had major economic and cultural implications for some sunny regions such as coastal Spain, which throughout the 1970s and 80s saw a massive increase in foreign tourists and expats. Seen here are sun-seekers in Lloret de Mar.",
                captionsource: "Corbis / various",
                file: "42-20913072.jpg",
                credit: "Frank Lukasseck/Corbis"
            }, {
                year: 1983,
                text: "In 1983, Korean Air Lines Flight 007 was shot down by a Soviet aircraft when it was suspected of being on a surveillance mission over Sakhalin Island. The picture shows a Soviet I1-14 Crate aircraft during the search and rescue operations",
                captionsource: "Corbis",
                file: "IH029442.jpg",
                credit: "CORBIS"
            }, {
                year: 1984,
                text: "British entrepreneur Richard Branson inaugurates his new airline Virgin Atlantic Airways, on the steps of the Boeing 747-200 ‘Maiden Voyager’, 22 June 1984.",
                captionsource: "Getty / Wikipedia",
                file: "110170644.jpg",
                credit: "Getty Images"
            }, {
                year: 1985,
                text: "A Gulfstream business jet. The mid-1980s boom saw a huge increase in the use of private planes, with Gulfstream first appearing in the Fortune 500 in 1985.",
                captionsource: "Corbis / http://www.gulfstream.com/history/",
                file: "HL004126.jpg",
                credit: "George Hall/Corbis"
            }, {
                year: 1986,
                text: "The cockpit of a Boeing 767 flight simulator. Flight simulators have existing in various forms since the early days of aviation, and today form an important part of pilot training.",
                captionsource: "Corbis",
                file: "RR012839.jpg",
                credit: "Roger Ressmeyer/CORBIS"
            }, {
                year: 1987,
                text: "British Airways, the UK flag carrier, was privatised in 1987, marking a global trend that saw many nationalised airlines become private companies.",
                captionsource: "http://www.britishairways.com/en-gb/information/about-ba/history-and-heritage/explore-our-past/1980-1989",
                file: "HL004468.jpg",
                credit: "George Hall/Corbis"
            }, {
                year: 1988,
                text: "In 1988, the US introduced a smoking ban on domestic flights less than two hours in duration. Longer US flights followed in 1990.",
                captionsource: "http://www.nytimes.com/1988/04/17/us/smoking-ban-near-on-flights-in-us.html / http://www.nytimes.com/1990/02/25/us/flight-smoking-ban-at-hand.html",
                file: "42-29351438.jpg",
                credit: "James Leynse/Corbis"
            }, {
                year: 1989,
                text: "Airport security was tightened significantly in 1989 in the aftermath of the Lockerbie bombing, in which a terrorist attack destroyed Pan Am Flight 103, killing all 259 passengers and crew plus 11 people on the ground near Lockerbie, Scotland. Many regions introduced mandatory baggage x-ray scanning soon after. Here bereaved family members protest outside the Pam Am building.",
                captionsource: "",
                file: "U89216011.jpg",
                credit: "Bettmann/CORBIS"
            }, {
                year: 1990,
                text: "Burning oil wells seen from space during the Gulf War. After low prices throughout the 1980s, the cost of oil increased in response to the invasion of Kuwait in 1990. This, combined with other economic pressures, led to air travel flattening off for a number of years.",
                captionsource: "Corbis / various",
                file: "BT001071.jpg",
                credit: "Corbis"
            }, {
                year: 1991,
                text: "A Delta Airlines mechanic checks a jet engine. Now one of the world’s biggest airlines, Delta took over the remaining assets of failed US giant Pan Am in 1991.",
                captionsource: "Corbis",
                file: "RI002167.jpg",
                credit: "Bob Krist/Corbis"
            }, {
                year: 1992,
                text: "A plane flies over the roof of a home near London’s Heathrow airport in September 1992, the same years that one MP described the noise of Heathrow as ‘a curse and a pestilence’ for local residents. The debate about expansion in Heathrow has raged for decades, with noise and climate change at the forefront of the debate.",
                captionsource: "www.publications.parliament.uk/pa/cm199293/cmhansrd/1992-10-26/Orals-1.html",
                file: "EC003089.jpg",
                credit: "Martin Jones; Ecoscene/CORBIS"
            }, {
                year: 1993,
                text: "Motorists wait at Beijing Capital Airport in December 1993 as a China Southwest Airlines plane taxis to the airport terminal on a taxiway that intersects with a road. Civil aviation in China underwent a review around this time as a result of its poor safety record.",
                captionsource: "Getty",
                file: "51664871.jpg",
                credit: "AFP/Getty Images"
            }, {
                year: 1994,
                text: "The first fully computer-designed airliner, the Boeing 777, was unveiled in 1994 and entered service the following year.",
                captionsource: "http://www.boeing.com/boeing/history/boeing/777.page",
                file: "0000314434-007.jpg",
                credit: "Antoine Gyori/Sygma/Corbis"
            }, {
                year: 1995,
                text: "In 1995, Alaska and Horizon become the first US airlines to sell tickets online. The same year saw the launch of Easyjet, which focused on online sales from 1998, helping introduce a new era of cheap direct-sale tickets.",
                captionsource: "Getty / Easyjet / Horizon",
                file: "57576964.jpg",
                credit: "Getty Images"
            }, {
                year: 1996,
                text: "In the 1990s, as air travel moved ever further from being a glamorous luxury and towards the mass market, some airlines began experimenting with new business models based on advertising to the captive audience on their planes. This picture from 1986 shows a Crossair ‘McPlane’.",
                captionsource: "Corbis",
                file: "42-22400303.jpg",
                credit: "Tatiana Markow/Sygma/Corbis"
            }, {
                year: 1997,
                text: "The European Union deregulation of airlines was completed in 1997, enabling airlines from one country to run services freely inside another, and paving the way for the rise of low-cost airlines such as Easyjet, which in the same year launched its first website.",
                captionsource: "http://www.economist.com/node/146627",
                file: "103630049.jpg",
                credit: "Frank Rumpenhorst/dpa/Corbis"
            }, {
                year: 1998,
                text: "An aerial view of Atlanta International, which in 1998 became the world’s busiest airport. Atlanta still holds the record today, serving more than eight million passengers a month.",
                captionsource: "http://www.atlanta-airport.com/Airport/ATL/GM_Letter.aspx /http://atlanta-airport.com/Airport/ATL/operation_statistics.aspx / http://en.wikipedia.org/wiki/World%27s_busiest_airports_by_passenger_traffic",
                file: "42-54360851.jpg",
                credit: "Cameron Davidson/Corbis"
            }, {
                year: 1999,
                text: "In 1999, a special report by the Intergovernmental Panel on Climate Change found that plane engines have a much bigger global warming effect than their fuel use would suggest. One reason is that vapour trails, or ‘contrails’, such as these photographed in Frankfurt, Germany, trap heat in the atmosphere and encourage cirrus clouds to form. The IPPC estimated that by 2050, half a percent of the planet’s surface may be covered by vapour trails at any one time.",
                captionsource: "http://www.ipcc.ch/pdf/special-reports/spm/av-en.pdf",
                file: "42-27853349.jpg",
                credit: "Frank Rumpenhorst/dpa/Corbis"
            }, {
                year: 2e3,
                text: "On the first day of the new millennium, planes flew as normal, despite media and popular concern about the potential of the Millennium Bug to cause planes to fall from the sky as computers failed.",
                file: "42-15186780.jpg",
                credit: "KAMAL KISHORE/Reuters/Corbis"
            }, {
                year: 2001,
                text: "September 11. Four passenger planes are highjacked by al-Qaida terrorists. Two of them, both Boeing 767s, are flown into the World Trade Centre in New York City, killing thousands. Amid heightened security and safety fears, the number of air travellers declined rapidly.",
                captionsource: "Various / World Bank data",
                file: "UT0089747.jpg",
                credit: "Sean Adair/Reuters/CORBIS"
            }, {
                year: 2002,
                text: "Although 9/11 slowed global air travel’s growth for a number of years, budget air travel in Europe kept soaring. In 2002, British no-frills carrier Ryanair hit 15 million passengers, having grown by half in a year and sixteen-fold in a decade.",
                captionsource: "http://www.ryanair.com/en/about",
                file: "42-16904344.jpg",
                credit: "STEPHEN HIRD/Reuters/Corbis"
            }, {
                year: 2003,
                text: "With ever more people moving ever greater distances, air travel speeds up the spread of contagious diseases between countries and regions. Here two staff wear masks at Singapore’s Changi international airport during the the SARS outbreak of 2003. The issue arose again later in the decade with outbreaks of avian flu.",
                captionsource: "Getty",
                file: "2031322.jpg",
                credit: "AFP/Getty Images"
            }, {
                year: 2004,
                text: "A Concorde body makes its final journey from Heathrow to the Museum of Flight in East Fortune, Scotland, in 2004. The previous year, Concordes were retired from service, marking the end of supersonic commercial travel. Supersonic planes are more expensive to develop, build and run, and noisier to operate. It remains to be seen whether a second generation of supersonic planes will one day enter service.",
                captionsource: "Corbis",
                file: "DWF15-681258.jpg",
                credit: "Mark Owens/ MOD/Reuters/Corbis"
            }, {
                year: 2005,
                text: "An Indian man visits the 2005 Paris Air Show, at which Indian airlines made commitments to buy around $7bn in jets from Boeing and Airbus, reflecting the rapid rise in air travel in South Asia.",
                captionsource: "Corbis",
                file: "42-15437512.jpg",
                credit: "Regis Duvignau/Reuters/Corbis"
            }, {
                year: 2006,
                text: "Budget airlines continued their ascent in the US and Europe in the first decade of the twentieth century. Here Southwest jets are seen at the gate at Oakland airport, California.",
                captionsource: "Corbis",
                file: "42-36393999.jpg",
                credit: "Proehl Studios/Corbis"
            }, {
                year: 2007,
                text: "The world’s biggest passenger plane, the Boeing A380, which entered service in 2007, arrives in New York on its inaugural route-proving flight to JFK International. The double-decker plane weighs up to 560 tonnes at takeoff and carries up to 320,000 litres of fuel. Its massive cabin can carry up to 853 people.",
                captionsource: "Corbis / http://www.airbus.com/aircraftfamilies/passengeraircraft/a380family/specifications/",
                file: "42-18082296.jpg",
                credit: "James Leynse/Corbis"
            }, {
                year: 2008,
                text: "Delayed passengers packed into the UK’s Stansted Airport after protestors from climate change action group Plane Stupid occupy a secure area near the runway in December 2008.",
                captionsource: "Getty",
                file: "83948359.jpg",
                credit: "Dan Kitwood/Getty Images"
            }, {
                year: 2009,
                text: "The recently inaugurated US president, Barack Obama, meets staff in April 2009 in the conference room of Air Force One, the name given to the president’s official plane. The current Air Force One fleet is a pair of Boeing VC-25s – a military version of the Boeing 747 jumbo jet, which in a civilian context can accommodate 400–600 passengers.",
                captionsource: "http://www.flickr.com/photos/whitehouse/3484039577 http://en.wikipedia.org/wiki/Boeing_747 http://en.wikipedia.org/wiki/Air_Force_One",
                file: "Obama-AFO-3484039577.jpg",
                credit: "The White House"
            }, {
                year: 2010,
                text: "Men stand under the wing of a plane in Dubai World Central Airport, which opened to cargo in 2010 and passengers in 2013. The airport, which will eventually have five runways, aims to become the world’s busiest, with 160 million passengers departing, arriving or changing flights each year.",
                captionsource: "Corbis / http://www.telegraph.co.uk/travel/travelnews/10409099/Worlds-biggest-airport-opens-to-fliers.html / http://www.dubaiairport.com/en/media-centre/facts-figures/pages/factsheets-reports-statistics.aspx?id=11",
                file: "42-33112038.jpg",
                credit: "Kami/arabianEye/Corbis"
            }, {
                year: 2011,
                text: "With passenger numbers soaring in South-East Asia, low-cost carrier AirAsia ordered 200 Airbus A320neo planes in 2011, in one of the biggest commercial aviation deals of all time, worth $18bn.",
                captionsource: "http://www.bbc.co.uk/news/business-13884433",
                file: "71593334.jpg",
                credit: "AFP/Getty Images"
            }, {
                year: 2012,
                text: "People visit Terminal 3 of Shenzhen Baoan International Airport during the trial run in Shenzhen city. In 2012, Li Jiaxiang, the head of China’s Civil Aviation Administration, announced plans to build 70 new airports and expand 100 existing ones by 2015, with the country’s carrier adding around 300 planes a year.",
                captionsource: "Corbis / http://www.telegraph.co.uk/finance/newsbysector/transport/9323617/China-to-build-70-airports-by-2015.html",
                file: "42-53492238.jpg",
                credit: "Imaginechina/Corbis"
            }, {
                year: 2013,
                text: "An artist’s impression of a World View Enterprises capsule and supporting helium-filled balloon, designed to transport passengers 19 miles above the planet’s surface. The Arizona-based company announced its plans in 2013, and hopes to open for business in 2016, offering two hours in space for $75,000 per person. In the meantime, Virgin Galactic plans to offer commercial spaceship flights from 2014, almost exactly a century after the launch of the first scheduled airline.",
                captionsource: "Corbis",
                file: "42-52886414.jpg",
                credit: "Splash/World View Enterprises/Splash News/Corbis"
            }],
            B = [1205, 1389, 2071, 3065, 4498, 6549, 9460, 13559, 19285, 27220, 38132, 53024, 73191, 100299, 136467, 184370, 29e4, 331e3, 404e3, 543e3, 652e3, 976e3, 13e5, 14e5, 17e5, 2e6, 25e5, 33e5, 35e5, 42e5, 55e5, 8199999, 155e5, 189e5, 209e5, 233e5, 273e5, 344e5, 395e5, 46e6, 525e5, 68e6, 77e6, 85e6, 87e6, 97e6, 106e6, 111e6, 121e6, 135e6, 155e6, 177e6, 2e8, 233e6, 262e6, 293e6, 310441392, 331604904, 366588352, 401571800, 421145200, 432276500, 471773396, 513269292, 576090004, 648400600, 641872888, 640619400, 654482108, 685101596, 732410288, 783198104, 842594296, 904838104, 953896012, 983208800, 1024976616, 1133228204, 1145436692, 1142265216, 1233233404, 1302891640, 1390963704, 1455104192, 1466961780, 1562256300, 1674064712, 1655230214, 1627404873, 1665309283, 1888695284, 1970142144, 2072995909, 2209136496, 2208218737, 2270900807, 2595448937, 2770448937, 2945448937, 3120448937],
            C = 800,
            D = 375,
            E = {
                top: 10,
                right: 2,
                bottom: 100,
                left: 2
            },
            F = C - E.left - E.right,
            G = D - E.top - E.bottom,
            H = d3.scale.linear().range([0, F]),
            I = d3.scale.linear().range([G, 0]),
            J = null;
        return v.showPic = o, {
            name: "A century of growth",
            load: a,
            unload: b,
            exports: v
        }
    }(), modules.constraints = function() {
        function a() {
            mb = α.components.flights, mb.clear(), nb = modules.constraints.components.oil, gb = Talkie.animate("#module-constraints"), d3.select("#shade-left").transition().duration(2e3).style("opacity", .5), d3.select("#shade-top").transition().duration(2e3).style("opacity", .5), kb = d3.select("#graph-text"), lb = d3.select("#graph-source"), ib = Talkie.timeline("#audio", {
                "0:00.1": Cb.and(d).and(y),
                "0:10": Cb.and(s, "global", "regional-growth"),
                "0:16": Cb.and(s, "regional-growth", "regional-projections"),
                "0:24": Cb.and(b, Db.la, 4, Db.london, 6, !0),
                "0:25": Cb.and(h, "pax", "map").and(b, Db.london, 6, Db.london, 7),
                "0:26.5": Cb.and(z),
                "0:28": Cb.and(x),
                "0:34": Cb.and(A).and(y).and(b, Db.london, 7, Db.china, 3, !0),
                "0:36": Cb.and(B),
                "0:37": Cb.and(b, Db.china, 3, Db.china, 4),
                "0:40": Cb.and(x),
                "0:48": Cb.and(y).and(C).and(b, Db.china, 4, Db.london_singapore, 2, !0),
                "0:50": Cb.and(h, "map", "oil"),
                "1:05": Cb.and(nb.scaleUp),
                "1:07": Cb.and(nb.economyPassenger),
                "1:09": Cb.and(nb.businessPassenger),
                "1:12": Cb.and(nb.firstPassenger),
                "1:16": Cb.and(b, Db.london_singapore, 2, Db.world, 1, !0).and(E).and(h, "oil", "map"),
                "1:18": Cb.and(cb).and(F),
                "1:27": Cb.and(G),
                "1:30": Cb.and(db).and(h, "map", "emissions"),
                "1:38": Cb.and(R, "percent", "projections"),
                "1:48": Cb.and(R, "projections", "savings"),
                "2:07": Cb.and(Y),
                "2:08": Cb.and(h, "emissions", "map"),
                "2:09": Cb.and(b, Db.world, 1, Db.europe, 5, !0),
                "2:10": Cb.and(cb),
                "2:17": Cb.and(Z),
                "2:25.5": Cb.and(b, Db.europe, 5, Db.asia, 4, !0).and(cb),
                "2:35": Cb.and(b, Db.asia, 4, Db.florida, 4, !0).and(cb),
                "2:42.5": Cb.and(b, Db.florida, 4, Db.florida, 9),
                "2:43": Cb.and(_),
                "2:47": Cb.and(ab),
                "2:50": Cb.and(b, Db.florida, 9, Db.world, 1, !0),
                "2:51": Cb.and(cb),
                "2:54": Cb.and(bb),
                "2:55": Cb.and(eb)
            }), hb = !0, c(Db.la, 4, !0), g(), fadeOutDisplayNone(".leaflet-control-container"), α.map.on("moveend", H), α.flight_paths_layer.setOpacity(1), α.map.addLayer(α.flight_paths_layer), fadeInDisplayBlock(".headline", 500), showBigPlayButton(), d3.selectAll(".headline, #click-to-enter").style("cursor", "pointer").on("click", d), n()
        }

        function b(a, b, d, e, f) {
            var g = f ? !0 : ib.fast_forward;
            c(a, b, !0), c(d, e, g), mb.setSpeed(Math.pow(2, α.map.getZoom() + 8)), db(), ib.setUndo(function() {
                c(a, b, !0)
            })
        }

        function c(a, b, c) {
            if (hb) {
                if (!c) {
                    var d = d3.select(α.map.getContainer());
                    d.classed("slow-zoom", !0), α.map.once("zoomend", function() {
                        d.classed("slow-zoom", !1)
                    })
                }
                c ? setMapView(a[0], a[1], b, !0) : α.map.setView(a, b, {
                    reset: !1,
                    animate: !0
                })
            }
        }

        function d() {
            d3.select("#click-to-enter").remove(), $(".headline").fadeOut(1e3), hideBigPlayButton(), fadeInDisplayBlock("#nav"), d3.select("#nav-bg").style("display", "block").transition().duration(1e3).style("opacity", .8), e("pax")
        }

        function e(a) {
            log("Selecting panel: " + a), d3.select("#graph-text").text(""), d3.select("#graph-source").text(""), O(), Kb[a](), d3.selectAll(".nav-item").classed("navselected", function() {
                return this.id == a + "-link"
            }), Lb = a
        }

        function f() {
            var a = Lb;
            e(this.id.split("-")[0]), fadeOutDisplayNone(".constraints-highlights, #tampa-pic-plane, #tampa-pic-crowd, #news-stories"), Z(), ib.undoInteraction(function() {
                e(a)
            })
        }

        function g() {
            d3.selectAll(".nav-item").on("click", f)
        }

        function h(a, b) {
            e(b), ib.setUndo(function() {
                e(a)
            })
        }

        function i(a) {
            var b = document.getElementById("svgs-panel").style.width || "0%";
            return function(c, d, e) {
                return log("tweenPanelTo", b, e, a), d3.interpolateString(b, a)
            }
        }

        function j() {
            var a = d3.select("#svgs-panel");
            d3.select("#svgs-holder").text(""), o(), ib.fast_forward ? (a.transition(), a.style("width", "100%"), t(), u()) : a.transition().duration(1e3).styleTween("width", i("100%")).each("end", function() {
                t(), u()
            })
        }

        function k() {
            var a = ib.fast_forward ? 0 : 2e3;
            d3.select("#svgs-holder").text(""), kb.text(""), lb.text(""), d3.select("#svgs-panel").transition().duration(a).styleTween("width", i("0%"))
        }

        function l() {
            kb.text(""), lb.text(""), d3.select("#svgs-holder").text(""), ib.fast_forward ? (d3.select("#svgs-panel").style("width", "40%"), nb.init(ib, Cb), nb.start(!0), N(), D()) : d3.select("#svgs-panel").transition().duration(1e3).styleTween("width", i("40%")).each("end", function() {
                N(), nb.init(ib, Cb), nb.start(), D()
            })
        }

        function m() {
            var a = d3.select("#svgs-panel");
            d3.select("#svgs-holder").text(""), o(), ib.fast_forward ? (log("viewEmissions (fast_forward)"), a.transition(), a.style("width", "100%"), S(), U()) : (log("viewEmissions (!fast_forward)"), a.transition().duration(1e3).styleTween("width", i("100%")).each("end", function() {
                S(), U()
            }))
        }

        function n() {
            c_svg_width = 800, ob = 500, pb = {
                top: 20,
                right: 60,
                bottom: 270,
                left: 200
            }, qb = c_svg_width - pb.left - pb.right, rb = ob - pb.top - pb.bottom, sb = d3.scale.linear().range([0, qb]), tb = d3.scale.linear().range([rb, 0]), ub = d3.svg.axis().scale(sb).ticks(5).tickFormat(d3.format()), vb = d3.svg.axis().scale(tb).tickSize(-qb).orient("right"), sb.domain([1990, 2030]), tb.domain([0, 8]), wb = qb / Ib.length
        }

        function o() {
            xb = d3.select("#svgs-holder").append("svg").attr("id", "graph-svg").attr("viewBox", "0 0 " + c_svg_width + " " + ob), yb = xb.append("g").attr("id", "graph-core").attr("transform", "translate(" + pb.left + "," + pb.top + ")"), yb.append("clipPath").attr("id", "clip").append("rect").attr("id", "global-clip").attr("height", rb).attr("width", 0), yb.append("clipPath").attr("id", "carbon-clip").append("rect").attr("id", "carbon-clip-rect").attr("height", rb).attr("width", 0), yb.append("g").attr("class", "x axis").attr("transform", "translate(0," + rb + ")").call(ub), yb.append("g").attr("class", "y axis").classed("next", !0).attr("transform", "translate(" + qb + ",0)").call(vb), zb = yb.append("text").attr("class", "y axis label").attr("text-anchor", "middle").attr("y", qb + .5 * pb.right).attr("x", -rb / 2).attr("dy", ".75em").attr("transform", "rotate(-90)");
            var a = yb.append("g").attr("id", "region-labels").attr("opacity", 0).attr("font-size", "12").attr("transform", "translate(0," + rb + ")");
            a.selectAll("text").data(Ib).enter().append("text").text(function(a) {
                return a.region
            }).attr("text-anchor", "end").attr("transform", function(a, b) {
                var c = b * qb / Ib.length + .75 * qb / Ib.length;
                return "translate(" + c + ",14) rotate(-45)"
            })
        }

        function p(a, b, c, d, e, f) {
            log("Updating graph axes"), d3.selectAll(".axis").style("display", "block").style("opacity", 1), sb.domain([a, b]), tb.domain([c, d]), yb.transition().duration(750).select(".x.axis").call(ub), yb.transition().duration(750).select(".y.axis").call(vb), zb.text(e), "Regions" == f ? (d3.select(".x.axis").transition().duration(500).style("opacity", 0), d3.select("#region-labels").transition().duration(500).style("opacity", 1)) : (d3.select(".x.axis").transition().duration(500).style("opacity", 1), d3.select("#region-labels").transition().duration(500).style("opacity", 0))
        }

        function q(a) {
            log("Selecting pax graph " + a), d3.selectAll(".removeOnStateChange").remove(), d3.selectAll("#graph-svg .option").classed("selected", function() {
                return this.id == a
            }), Mb[a](), Nb = a
        }

        function r() {
            q(this.id), audio.pause();
            var a = Nb;
            ib.undoInteraction(function() {
                log("Reverting to graph " + a), q(a)
            })
        }

        function s(a, b) {
            q("graph-nav-" + b), ib.setUndo(function() {
                q("graph-nav-" + a)
            })
        }

        function t() {
            var a = yb.append("g").attr("id", "graph-options").attr("text-anchor", "end");
            a.append("text").text("Global projections").attr("id", "graph-nav-global").attr("transform", "translate(-20,10)").classed("option selected", !0).on("click", r), a.append("text").text("Regional projections").attr("id", "graph-nav-regional-projections").attr("transform", "translate(-20,35)").classed("option", !0).on("click", r), a.append("text").text("Regional growth rates").attr("id", "graph-nav-regional-growth").attr("transform", "translate(-20,60)").classed("option", !0).on("click", r)
        }

        function u() {
            p(1990, 2030, 0, 8, "Trillion passenger miles", "None"), kb.text("Air travel is projected to grow at more than 4% a year over the next fifty years."), lb.text("Source: ICAO Global Air Transport Outlook / IATA"), d3.select("#global-clip").attr("width", 0).transition().duration(audio.paused ? 1e3 : 6e3).delay(250).attr("width", qb);
            var a = d3.svg.line().interpolate("monotone").x(function(a) {
                    return sb(a.year)
                }).y(function(a) {
                    return tb(.621371192 * a.rpk / 1e3)
                }).defined(function(a) {
                    return a.year <= 2012
                }),
                b = d3.svg.line().interpolate("monotone").x(function(a) {
                    return sb(a.year)
                }).y(function(a) {
                    return tb(.621371192 * a.rpk / 1e3)
                }).defined(function(a) {
                    return a.year >= 2012
                });
            yb.append("path").attr("class", "rpk-past removeOnStateChange").attr("clip-path", "url(#clip)").attr("d", a(Hb)), yb.append("path").attr("class", "rpk-future removeOnStateChange").attr("clip-path", "url(#clip)").attr("d", b(Hb))
        }

        function v() {
            p(1990, 2030, 0, 3, "Trillion passenger miles", "Regions"), kb.text("Europe is expected to see the greatest absolute increase in air travel by 2030."), lb.text("#graph-source").text("Source: ICAO Global Air Transport Outlook"), yb.append("g").attr("id", "region-bars-2010").selectAll("rect").data(Ib).enter().append("rect").attr("height", 0).attr("width", .3 * wb).attr("y", rb).attr("fill", "#3D576F").attr("x", function(a, b) {
                return b * wb + .25 * wb
            }).classed("removeOnStateChange", !0).transition().duration(1e3).delay(1e3).attr("height", function(a) {
                return rb - tb(.621371192 * a["bRPK-2010"] / 1e3)
            }).attr("y", function(a) {
                return tb(.621371192 * a["bRPK-2010"] / 1e3)
            }), yb.append("g").attr("id", "region-bars-2030").selectAll("rect").data(Ib).enter().append("rect").attr("height", 0).attr("width", .3 * wb).attr("y", rb).attr("fill", "#292F3A").attr("x", function(a, b) {
                return b * wb + .55 * wb
            }).classed("removeOnStateChange", !0).transition().duration(1e3).delay(2e3).attr("height", function(a) {
                return rb - tb(.621371192 * a["bRPK-2030"] / 1e3)
            }).attr("y", function(a) {
                return tb(.621371192 * a["bRPK-2030"] / 1e3)
            })
        }

        function w() {
            p(1990, 2030, 0, 7, "Average annual growth, 2010–2030", "Regions"), kb.text("The highest rates of annual growth in air travel are expected in Asia and the Middle East."), lb.text("Source: ICAO Global Air Transport Outlook"), yb.append("g").attr("id", "growth-bars").selectAll("rect").data(Ib).enter().append("rect").attr("height", 0).attr("width", .7 * wb).attr("y", rb).attr("fill", "#3D576F").attr("x", function(a, b) {
                return b * wb + .15 * wb
            }).classed("removeOnStateChange", !0).transition().duration(1e3).delay(1e3).attr("height", function(a) {
                return rb - tb(a["Growth-2011-2030"])
            }).attr("y", function(a) {
                return tb(a["Growth-2011-2030"])
            })
        }

        function x() {
            α.map.addLayer(α.flight_paths_layer), ib.setUndo(y), mb.pause(), mb.clear()
        }

        function y() {
            α.map.removeLayer(α.flight_paths_layer), ib.setUndo(x)
        }

        function z() {
            fadeInDisplayBlock("#heathrow-map-text"), Bb || (jb = L.circle([51.5, -.13], 6e4, {
                color: "none",
                fillColor: "white",
                fillOpacity: "0.3"
            }).addTo(α.map), Bb = !0), ib.setUndo(A)
        }

        function A() {
            fadeOutDisplayNone("#heathrow-map-text"), Bb && (α.map.removeLayer(jb), Bb = !1), ib.setUndo(z)
        }

        function B() {
            fadeInDisplayBlock("#china-map-text"), fadeInDisplayBlock("#china-map-text div:nth-child(2)", 500), fadeInDisplayBlock("#china-map-text div:nth-child(3)", 1e3), fadeInDisplayBlock("#china-map-text div:nth-child(4)", 1500), fadeInDisplayBlock("#china-map-text div:nth-child(5)", 2e3), ib.setUndo(C)
        }

        function C() {
            fadeOutDisplayNone("#china-map-text, #china-map-text div"), ib.setUndo(B)
        }

        function D() {
            fadeInDisplayBlock("#singapore-map-text"), ib.setUndo(E)
        }

        function E() {
            fadeOutDisplayNone("#singapore-map-text"), ib.setUndo(D)
        }

        function F() {
            fadeInDisplayBlock("#fuel-map-text"), ib.setUndo(G)
        }

        function G() {
            fadeOutDisplayNone("#fuel-map-text"), ib.setUndo(F)
        }

        function H() {
            mb.setSpeed(Math.pow(2, α.map.getZoom() + 8)), mb.repositionCanvas(), mb.clear(), mb.drawFrame()
        }

        function I(a) {
            var b = a.lat * Math.PI / 180,
                c = a.lng * Math.PI / 180;
            return [Math.cos(c) * Math.cos(b), Math.sin(c) * Math.cos(b), Math.sin(b)]
        }

        function J(a, b, c) {
            var d = I(b),
                e = I(c),
                f = Math.acos(d[0] * e[0] + d[1] * e[1] + d[2] * e[2]),
                g = Math.sin(f),
                h = Math.sin((1 - a) * f) / g,
                i = Math.sin(a * f) / g,
                j = [h * d[0] + i * e[0], h * d[1] + i * e[1], h * d[2] + i * e[2]],
                k = Math.asin(j[2]),
                l = Math.acos(j[2]),
                m = Math.atan2(j[1] / l, j[0] / l);
            return new L.LatLng(180 * k / Math.PI, 180 * m / Math.PI)
        }

        function K(a) {
            var b = 1 - (Math.cos(a * Math.PI) + 1) / 2,
                c = J(b, Fb, Gb);
            pos = α.map.latLngToLayerPoint(c), α.cx.save(), α.cx.setTransform(1, 0, 0, 1, 0, 0), α.cx.clearRect(0, 0, α.canvas.width, α.canvas.height), α.cx.restore(), α.cx.beginPath(), α.cx.arc(pos.x, pos.y, 3, 0, 7, !1), α.cx.fill()
        }

        function M(a) {
            Pb || (Pb = a);
            var b = a - Pb;
            Eb > b ? (K(b / Eb), Ob = requestAnimationFrame(M)) : (K(1), Ob = null)
        }

        function N() {
            hb && (log("Beginning Singapore animation"), mb.pause(), mb.clear(), Ob = requestAnimationFrame(M))
        }

        function O() {
            hb && null != Ob && (log("Ending Singapore animation"), cancelAnimationFrame(Ob), Ob = null, Pb = null, α.cx.save(), α.cx.setTransform(1, 0, 0, 1, 0, 0), α.cx.clearRect(0, 0, α.canvas.width, α.canvas.height), α.cx.restore())
        }

        function P(a) {
            log("Selecting carbon graph " + a), d3.selectAll(".removeOnStateChange").remove(), d3.selectAll("#graph-svg .option").classed("selected", function() {
                return this.id == a
            }), Qb[a](), Rb = a
        }

        function Q() {
            P(this.id), audio.pause();
            var a = Rb;
            ib.undoInteraction(function() {
                log("Reverting to graph " + a), P(a)
            })
        }

        function R(a, b) {
            P("graph-nav-" + b), ib.setUndo(function() {
                P("graph-nav-" + a)
            })
        }

        function S() {
            var a = yb.append("g").attr("id", "graph-options").attr("text-anchor", "end");
            a.append("text").text("Share of CO2").attr("id", "graph-nav-percent").attr("transform", "translate(-20,10)").classed("option selected", !0).on("click", Q), a.append("text").text("Share of all emissions").attr("id", "graph-nav-percent-all").attr("transform", "translate(-20,35)").classed("option", !0).on("click", Q), a.append("text").text("Future emissions").attr("id", "graph-nav-projections").attr("transform", "translate(-20,60)").classed("option", !0).on("click", Q), a.append("text").text("Potential savings").attr("id", "graph-nav-savings").attr("transform", "translate(-20,85)").classed("option", !0).on("click", Q)
        }

        function T(a, b, c) {
            d3.selectAll(".axis").style("opacity", 0);
            var d = rb / 2,
                e = a,
                f = Math.sqrt(d * d * e / 100),
                g = yb.append("g").attr("id", "circles").classed("removeOnStateChange", !0).style("font-family", "Guardian-Text-Egyp-Web-Light");
            g.append("circle").attr("cx", qb / 2).attr("cy", rb / 2).attr("r", 0).attr("fill", "#547A9C").transition().duration(1e3).delay(100).attr("cx", .4 * qb).attr("cy", rb - f).attr("r", f).each("end", function() {
                g.append("text").text("").attr("font-size", 22).attr("font-family", "FontAwesome").attr("text-anchor", "middle").attr("fill", "white").attr("x", .4 * qb).attr("y", rb - f + 9), g.append("text").text(c).attr("font-size", 20).attr("text-anchor", "end").attr("x", .35 * qb).attr("y", rb - 68), g.append("text").text(a + "%").attr("font-size", 64).attr("font-family", "GuardianTitlepieceWeb-Regular").attr("text-anchor", "end").attr("x", .35 * qb).attr("y", rb - 18), g.append("text").text("as of 2005").attr("font-size", 12).attr("font-family", "Guardian-Sans-Web-Light").attr("text-anchor", "end").attr("x", .35 * qb).attr("y", rb)
            }), g.append("circle").attr("cx", qb / 2).attr("cy", rb / 2).attr("r", 0).attr("fill", "#3D5A6F").transition().duration(1e3).delay(1e3).attr("cx", .62 * qb).attr("cy", rb - d).attr("r", d).each("end", function() {
                g.append("text").text(b).attr("font-size", 20).attr("fill", "white").attr("text-anchor", "middle").attr("x", .62 * qb).attr("y", rb - d)
            })
        }

        function U() {
            T(2.1, "All CO2 emissions", ""), kb.text("Air travel is estimated to have caused about 2.1% of manmade CO2 emissions in 2005 – roughly the same as the UK. The share will have risen since."), lb.text("Source: UNEP, Bridging the Emissions Gap")
        }

        function V() {
            T(3.5, "All manmade emissions", ""), kb.text("Considering all global warming emissions, rather than just CO2, aviation's share rises to 3.5% – or as 4.9% if cirrus cloud formation is included."), lb.text("Source: AEF et al, A new flightplan")
        }

        function W() {
            p(2005, 2050, 0, 5.5, "Billion tonnes CO2e"), kb.text("A schematic of projected growth in CO2 emissions from international air travel in the absence of efforts to reduce emissions. This graph excludes domestic aviation."), lb.text("Source: ICAO"), d3.select("#carbon-clip-rect").attr("width", 0).transition().duration(audio.paused ? 1e3 : 4e3).delay(500).attr("width", qb).each("end", function() {
                d3.transition().duration(1e3).select(".projections").attr("d", b(Jb)), d3.transition().duration(1e3).select(".doubled-projections").attr("d", d(Jb)).attr("opacity", .7), fadeInDisplayBlock("#additional-label", 1500)
            });
            var a = yb.append("g").classed("removeOnStateChange", !0).attr("font-size", 12),
                b = d3.svg.area().interpolate("monotone").x(function(a) {
                    return sb(a.year)
                }).y0(tb(0)).y1(function(a) {
                    return tb(a.baseline / 1e3)
                }),
                c = d3.svg.area().interpolate("monotone").x(function(a) {
                    return sb(a.year)
                }).y0(function(a) {
                    return tb(a.baseline / 1e3)
                }).y1(function(a) {
                    return tb(a.baseline / 1e3)
                }),
                d = d3.svg.area().interpolate("monotone").x(function(a) {
                    return sb(a.year)
                }).y0(function(a) {
                    return tb(a.baseline / 1e3)
                }).y1(function(a) {
                    return tb(a.baseline / 500)
                });
            a.append("path").attr("class", "projections").attr("fill", "#292F3A").attr("clip-path", "url(#carbon-clip)").attr("d", b(Jb)), a.append("text").text("CO2 from international air travel").attr("clip-path", "url(#carbon-clip)").attr("x", qb - 10).attr("y", rb - 10).attr("fill", "white").attr("text-anchor", "end"), a.append("path").attr("class", "doubled-projections").attr("fill", "#3D576F").attr("opacity", 0).attr("clip-path", "url(#carbon-clip)").attr("d", c(Jb)), a.append("text").attr("id", "additional-label").text("Additional impacts").attr("x", qb - 10).attr("y", rb / 2 + 2).attr("fill", "white").attr("opacity", 0).attr("text-anchor", "end")
        }

        function X() {
            p(2005, 2050, 0, 3, "Billion tonnes CO2"), d3.select("#carbon-clip-rect").attr("width", 0).transition().duration(1e3).delay(500).attr("width", qb), kb.text("The aviation industry has pledged to level off its climate impact from 2020, but this relies on controversial approaches such as switching to biofuels and buying credits from other sectors."), lb.text("Schematic based on ICAO");
            var a = d3.svg.area().interpolate("monotone").x(function(a) {
                    return sb(a.year)
                }).y0(tb(0)).y1(function(a) {
                    return tb(a.baseline / 1e3)
                }),
                b = d3.svg.area().interpolate("monotone").x(function(a) {
                    return sb(a.year)
                }).y0(tb(0)).y1(function(a) {
                    return tb(a.baseline / 1e3)
                }),
                c = d3.svg.area().interpolate("monotone").x(function(a) {
                    return sb(a.year)
                }).y0(tb(0)).y1(function(a) {
                    return tb(a.minusATC / 1e3)
                }),
                d = d3.svg.area().interpolate("monotone").x(function(a) {
                    return sb(a.year)
                }).y0(tb(0)).y1(function(a) {
                    return tb(a.icaoTarget / 1e3)
                }),
                e = yb.append("g").classed("removeOnStateChange", !0).attr("font-size", 12).attr("text-anchor", "end");
            e.append("path").attr("class", "plane-savings tech").attr("fill", "#aaa").attr("opacity", .5).attr("clip-path", "url(#carbon-clip)").attr("d", b(Jb)), e.append("text").text("Savings from plane and ATC improvements").attr("id", "tech-label").attr("x", qb - 10).attr("y", tb(2.2)).attr("opacity", 0), e.append("path").attr("class", "plane-savings fuel-credits").attr("fill", "#6D879F").attr("opacity", .5).attr("clip-path", "url(#carbon-clip)").attr("d", c(Jb)), e.append("text").text("Savings from biofuels and carbon credits").attr("id", "fuel-label").attr("x", qb - 10).attr("opacity", 0).attr("y", tb(1)), e.append("path").attr("class", "plane-savings mover").attr("fill", "#292F3A").attr("clip-path", "url(#carbon-clip)").attr("d", a(Jb)), e.append("text").text("Industry emissions target").attr("id", "target-label").attr("x", qb - 10).attr("y", tb(.25)).attr("opacity", 0).attr("fill", "white"), d3.select(".mover").transition().duration(audio.paused ? 1e3 : 3e3).delay(500).attr("d", b(Jb)).each("end", function() {
                fadeInDisplayBlock("#tech-label", 1500), d3.select(".mover").transition().duration(audio.paused ? 1e3 : 3e3).delay(1e3).attr("d", c(Jb)).each("end", function() {
                    d3.select(".mover").transition().duration(audio.paused ? 1e3 : 3e3).delay(1e3).attr("d", d(Jb)), fadeInDisplayBlock("#fuel-label", 2250), fadeInDisplayBlock("#target-label", 2250)
                })
            })
        }

        function Y() {
            d3.select("#news-stories").style("opacity", 0).style("display", "block").transition().duration(2e3).style("opacity", 1).each("end", function() {
                audio.paused || Cb.kenBurns("#news-stories", 6e3, "100%", "120%", "100%", "100%", "0%", "-10%", "0%", "0%").run(ib)
            }), ib.setUndo(Z)
        }

        function Z() {
            fadeOutDisplayNone("#news-stories"), ib.setUndo(Y)
        }

        function _() {
            fadeInDisplayBlock("#tampa-pic-crowd", 0, 2500), ib.setUndo(function() {
                fadeOutDisplayNone("#tampa-pic-crowd")
            })
        }

        function ab() {
            fadeOutDisplayNone("#tampa-pic-crowd", 0, 3e3), fadeInDisplayBlock("#tampa-pic-plane", 0, 2500), ib.setUndo(function() {
                fadeInDisplayBlock("#tampa-pic-crowd"), fadeOutDisplayNone("#tampa-pic-plane")
            })
        }

        function bb() {
            fadeOutDisplayNone("#tampa-pic-plane", 0, 3e3), ib.setUndo(function() {
                fadeInDisplayBlock("#tampa-pic-plane")
            })
        }

        function cb() {
            mb.setSpeed(Math.pow(2, α.map.getZoom() + 8)), mb.jumpTo(0), mb.show(), mb.play(), ib.setUndo(db)
        }

        function db() {
            mb.pause(), mb.hide(), ib.setUndo(cb)
        }

        function eb() {
            α.showCredits(), ib.setUndo(α.hideCredits)
        }

        function fb() {
            hb = !1, db(), y(), fadeInDisplayBlock(".leaflet-control-container")
        }
        var gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab = {},
            Bb = !1,
            Cb = animator(function() {
                return hb
            }, function() {
                return gb
            }),
            Db = {
                la: [32, -118],
                world: [20, 0],
                london: [51.5, -.13],
                china: [25, 110],
                london_singapore: [20, -5],
                florida: [28, -84],
                europe: [53, 5],
                asia: [15, 60]
            },
            Eb = (new L.Point(0, 0), 1e4),
            Fb = new L.LatLng(51.507, .127),
            Gb = new L.LatLng(1.3, 103.8),
            Hb = [{
                year: 1990,
                rpk: 1964
            }, {
                year: 1991,
                rpk: 1912
            }, {
                year: 1992,
                rpk: 1999
            }, {
                year: 1993,
                rpk: 2021
            }, {
                year: 1994,
                rpk: 2175
            }, {
                year: 1995,
                rpk: 2312
            }, {
                year: 1996,
                rpk: 2521
            }, {
                year: 1997,
                rpk: 2668
            }, {
                year: 1998,
                rpk: 2725
            }, {
                year: 1999,
                rpk: 2901
            }, {
                year: 2e3,
                rpk: 3150
            }, {
                year: 2001,
                rpk: 3058
            }, {
                year: 2002,
                rpk: 3074
            }, {
                year: 2003,
                rpk: 3130
            }, {
                year: 2004,
                rpk: 3572
            }, {
                year: 2005,
                rpk: 3858
            }, {
                year: 2006,
                rpk: 4098
            }, {
                year: 2007,
                rpk: 4435
            }, {
                year: 2008,
                rpk: 4523
            }, {
                year: 2009,
                rpk: 4476
            }, {
                year: 2010,
                rpk: 4832
            }, {
                year: 2011,
                rpk: 5150
            }, {
                year: 2012,
                rpk: 5402
            }, {
                year: 2013,
                rpk: 5645
            }, {
                year: 2014,
                rpk: 5899
            }, {
                year: 2015,
                rpk: 6165
            }, {
                year: 2016,
                rpk: 6442
            }, {
                year: 2017,
                rpk: 6732
            }, {
                year: 2018,
                rpk: 7035
            }, {
                year: 2019,
                rpk: 7351
            }, {
                year: 2020,
                rpk: 7682
            }, {
                year: 2021,
                rpk: 8028
            }, {
                year: 2022,
                rpk: 8389
            }, {
                year: 2023,
                rpk: 8767
            }, {
                year: 2024,
                rpk: 9161
            }, {
                year: 2025,
                rpk: 9573
            }, {
                year: 2026,
                rpk: 10004
            }, {
                year: 2027,
                rpk: 10454
            }, {
                year: 2028,
                rpk: 10925
            }, {
                year: 2029,
                rpk: 11416
            }, {
                year: 2030,
                rpk: 11930
            }],
            Ib = [{
                region: "Europe",
                "bRPK-2010": 1731,
                "bRPK-2030": 4117,
                "Growth-2011-2030": 4.4
            }, {
                region: "N America",
                "bRPK-2010": 1851,
                "bRPK-2030": 3361,
                "Growth-2011-2030": 3
            }, {
                region: "China",
                "bRPK-2010": 708,
                "bRPK-2030": 2450,
                "Growth-2011-2030": 6.4
            }, {
                region: "Pacific / SE Asia",
                "bRPK-2010": 695,
                "bRPK-2030": 1897,
                "Growth-2011-2030": 5.1
            }, {
                region: "Middle East",
                "bRPK-2010": 479,
                "bRPK-2030": 1630,
                "Growth-2011-2030": 6.2
            }, {
                region: "Latin America",
                "bRPK-2010": 490,
                "bRPK-2030": 1524,
                "Growth-2011-2030": 5.9
            }, {
                region: "SW Asia",
                "bRPK-2010": 268,
                "bRPK-2030": 1030,
                "Growth-2011-2030": 6.9
            }, {
                region: "Africa",
                "bRPK-2010": 286,
                "bRPK-2030": 804,
                "Growth-2011-2030": 5.3
            }],
            Jb = [{
                year: 2005,
                baseline: 400,
                minusTech: 400,
                minusATC: 400,
                icaoTarget: 400
            }, {
                year: 2006,
                baseline: 417.2,
                minusTech: 417.2,
                minusATC: 417.2,
                icaoTarget: 417.2
            }, {
                year: 2007,
                baseline: 435.14,
                minusTech: 435.14,
                minusATC: 435.14,
                icaoTarget: 435.14
            }, {
                year: 2008,
                baseline: 453.85,
                minusTech: 453.85,
                minusATC: 453.85,
                icaoTarget: 453.85
            }, {
                year: 2009,
                baseline: 473.37,
                minusTech: 473.37,
                minusATC: 473.37,
                icaoTarget: 473.37
            }, {
                year: 2010,
                baseline: 493.72,
                minusTech: 493.72,
                minusATC: 493.72,
                icaoTarget: 493.72
            }, {
                year: 2011,
                baseline: 514.95,
                minusTech: 514.95,
                minusATC: 514.95,
                icaoTarget: 514.95
            }, {
                year: 2012,
                baseline: 537.09,
                minusTech: 537.09,
                minusATC: 537.09,
                icaoTarget: 537.09
            }, {
                year: 2013,
                baseline: 560.19,
                minusTech: 560.19,
                minusATC: 560.19,
                icaoTarget: 560.19
            }, {
                year: 2014,
                baseline: 584.28,
                minusTech: 584.28,
                minusATC: 584.28,
                icaoTarget: 584.28
            }, {
                year: 2015,
                baseline: 609.4,
                minusTech: 609.4,
                minusATC: 609.4,
                icaoTarget: 609.4
            }, {
                year: 2016,
                baseline: 635.61,
                minusTech: 635.61,
                minusATC: 635.61,
                icaoTarget: 635.61
            }, {
                year: 2017,
                baseline: 662.94,
                minusTech: 662.94,
                minusATC: 662.94,
                icaoTarget: 662.94
            }, {
                year: 2018,
                baseline: 691.44,
                minusTech: 691.44,
                minusATC: 691.44,
                icaoTarget: 691.44
            }, {
                year: 2019,
                baseline: 721.17,
                minusTech: 721.17,
                minusATC: 721.17,
                icaoTarget: 721.17
            }, {
                year: 2020,
                baseline: 752.18,
                minusTech: 752.18,
                minusATC: 752.18,
                icaoTarget: 752.18
            }, {
                year: 2021,
                baseline: 784.53,
                minusTech: 780.02,
                minusATC: 778.51,
                icaoTarget: 752.18
            }, {
                year: 2022,
                baseline: 818.26,
                minusTech: 808.88,
                minusATC: 805.76,
                icaoTarget: 752.18
            }, {
                year: 2023,
                baseline: 853.45,
                minusTech: 838.8,
                minusATC: 833.96,
                icaoTarget: 752.18
            }, {
                year: 2024,
                baseline: 890.15,
                minusTech: 869.84,
                minusATC: 863.15,
                icaoTarget: 752.18
            }, {
                year: 2025,
                baseline: 928.42,
                minusTech: 902.02,
                minusATC: 893.36,
                icaoTarget: 752.18
            }, {
                year: 2026,
                baseline: 968.35,
                minusTech: 935.4,
                minusATC: 924.63,
                icaoTarget: 752.18
            }, {
                year: 2027,
                baseline: 1009.98,
                minusTech: 970.01,
                minusATC: 956.99,
                icaoTarget: 752.18
            }, {
                year: 2028,
                baseline: 1053.41,
                minusTech: 1005.9,
                minusATC: 990.48,
                icaoTarget: 752.18
            }, {
                year: 2029,
                baseline: 1098.71,
                minusTech: 1043.12,
                minusATC: 1025.15,
                icaoTarget: 752.18
            }, {
                year: 2030,
                baseline: 1145.96,
                minusTech: 1081.71,
                minusATC: 1061.03,
                icaoTarget: 752.18
            }, {
                year: 2031,
                baseline: 1195.23,
                minusTech: 1121.74,
                minusATC: 1098.17,
                icaoTarget: 752.18
            }, {
                year: 2032,
                baseline: 1246.63,
                minusTech: 1163.24,
                minusATC: 1136.6,
                icaoTarget: 752.18
            }, {
                year: 2033,
                baseline: 1300.23,
                minusTech: 1206.28,
                minusATC: 1176.38,
                icaoTarget: 752.18
            }, {
                year: 2034,
                baseline: 1356.14,
                minusTech: 1250.91,
                minusATC: 1217.56,
                icaoTarget: 752.18
            }, {
                year: 2035,
                baseline: 1414.46,
                minusTech: 1297.2,
                minusATC: 1260.17,
                icaoTarget: 752.18
            }, {
                year: 2036,
                baseline: 1475.28,
                minusTech: 1345.19,
                minusATC: 1304.28,
                icaoTarget: 752.18
            }, {
                year: 2037,
                baseline: 1538.71,
                minusTech: 1394.97,
                minusATC: 1349.93,
                icaoTarget: 752.18
            }, {
                year: 2038,
                baseline: 1604.88,
                minusTech: 1446.58,
                minusATC: 1397.18,
                icaoTarget: 752.18
            }, {
                year: 2039,
                baseline: 1673.89,
                minusTech: 1500.1,
                minusATC: 1446.08,
                icaoTarget: 752.18
            }, {
                year: 2040,
                baseline: 1745.87,
                minusTech: 1555.61,
                minusATC: 1496.69,
                icaoTarget: 752.18
            }, {
                year: 2041,
                baseline: 1820.94,
                minusTech: 1613.16,
                minusATC: 1549.07,
                icaoTarget: 752.18
            }, {
                year: 2042,
                baseline: 1899.24,
                minusTech: 1672.85,
                minusATC: 1603.29,
                icaoTarget: 752.18
            }, {
                year: 2043,
                baseline: 1980.91,
                minusTech: 1734.75,
                minusATC: 1659.41,
                icaoTarget: 752.18
            }, {
                year: 2044,
                baseline: 2066.08,
                minusTech: 1798.93,
                minusATC: 1717.49,
                icaoTarget: 752.18
            }, {
                year: 2045,
                baseline: 2154.93,
                minusTech: 1865.49,
                minusATC: 1777.6,
                icaoTarget: 752.18
            }, {
                year: 2046,
                baseline: 2247.59,
                minusTech: 1934.52,
                minusATC: 1839.81,
                icaoTarget: 752.18
            }, {
                year: 2047,
                baseline: 2344.23,
                minusTech: 2006.09,
                minusATC: 1904.21,
                icaoTarget: 752.18
            }, {
                year: 2048,
                baseline: 2445.04,
                minusTech: 2080.32,
                minusATC: 1970.85,
                icaoTarget: 752.18
            }, {
                year: 2049,
                baseline: 2550.17,
                minusTech: 2157.29,
                minusATC: 2039.83,
                icaoTarget: 752.18
            }, {
                year: 2050,
                baseline: 2659.83,
                minusTech: 2237.11,
                minusATC: 2111.23,
                icaoTarget: 752.18
            }],
            Kb = {
                pax: j,
                map: k,
                oil: l,
                emissions: m
            },
            Lb = "pax",
            Mb = {
                "graph-nav-global": u,
                "graph-nav-regional-projections": v,
                "graph-nav-regional-growth": w
            },
            Nb = "graph-nav-global",
            Ob = null,
            Pb = null,
            Qb = {
                "graph-nav-percent": U,
                "graph-nav-percent-all": V,
                "graph-nav-projections": W,
                "graph-nav-savings": X
            },
            Rb = "graph-nav-percent";
        return {
            load: a,
            unload: fb,
            name: "Future constraints",
            exports: Ab
        }
    }(), modules.constraints.components = {}, modules.constraints.components.oil = function() {
        function a(a, b) {
            log("constraints~oil init");
            var c = d3.select("#svgs-holder").append("svg").attr("id", "oildrums-svg").attr("viewBox", "0 0 " + o + " " + p),
                d = c.append("defs"),
                e = d.append("g").attr("id", "drum");
            e.append("path").attr("d", C).attr("fill", "#555").attr("stroke", "none"), e.append("path").attr("d", B).attr("fill", "#333").attr("stroke", "none"), j = c.append("g").attr("id", "oil-elements"), l = j.append("g").attr("id", "bg-elements"), k = j.append("g").attr("id", "oil_stack-elements").attr("transform", "translate(40,130) scale(1)"), m = j.append("g").attr("id", "text-elements").attr("fill", "white").attr("stroke", "none").attr("font-family", "Guardian-Sans-Web-Light"), h = a, i = b
        }

        function b(a) {
            var b = 375,
                c = w - 250,
                d = m.append("g").attr("id", "counter").attr("text-anchor", "end").attr("font-size", "30").attr("transform", "translate(" + b + "," + c + ")");
            d.append("text").text("0").attr("font-size", 80).attr("id", "barrels-number").attr("transform", "translate(-85,35)"), d.append("text").text("barrels").attr("font-size", 40).attr("transform", "translate(25,4)"), d.append("text").text("each way").attr("id", "single-or-return").attr("font-size", 28).attr("transform", "translate(25,30)"), d.append("text").text("").attr("font-size", 22).attr("id", "travel-class").attr("text-anchor", "middle").attr("opacity", 0).attr("fill", "black").attr("transform", "translate(-100,90)"), d3.select("#oildrum-info").transition().duration(n / (2 * t * s)).style("opacity", 1);
            for (var e = 0; r > e; e++) {
                var f = e * n / r;
                a && (f = 0), d3.select("#barrels-number").transition().delay(f).text(e + 1)
            }
            var g = w / 2 - 25;
            i.transform("#counter", "translate(" + b + "," + g + ")", n).run(h);
            for (var j = k.append("g").attr("id", "oildrums"), e = 0; r > e; e++) {
                var l = e % s,
                    o = Math.floor(e / s) % t,
                    p = Math.floor(e / s / t),
                    q = u * l,
                    y = u / 4 * o,
                    z = 1 + .3 * o / t,
                    A = v * p,
                    B = q + y,
                    C = w - A,
                    E = j.append("use").attr("id", "oildrum-" + e).attr("xlink:href", "#drum").classed("oildrum-unselected", !0).attr("transform", "scale(" + x * z + ") translate(" + B + "," + C + ")"),
                    F = e * n / r;
                a && (F = 0), E.attr("opacity", "0").transition().delay(F).duration(0).attr("opacity", 1)
            }
            var G = k.append("g").attr("id", "man").attr("transform", "translate(25," + (w - 395) + ") scale(0.45)").attr("fill", "#aaa").attr("stroke", "none");
            G.append("path").attr("id", "guy").attr("d", D)
        }

        function c(a) {
            var b = a % q,
                c = Math.floor(a / q) + 1,
                d = s * t,
                e = c * d - s + b;
            d3.select("#oildrum-" + e).classed("oildrum-unselected", !1).classed("oildrum-selected", !0)
        }

        function d() {
            i.is_loaded() && i.fadeOut("#counter", 500).transform("#oil_stack-elements", "translate(0,-500) scale(2.5)", 1500).run(h)
        }

        function e() {
            if (i.is_loaded()) {
                for (var a = 0; y > a; a++) c(a);
                i.fadeOut(".oildrum-unselected", 500).fadeIn("#counter").attr("#counter", "transform", "translate(320,450)", 0).fadeIn("#travel-class", 500).changeText("#travel-class", "1 x ECONOMY PASSENGER").changeText("#barrels-number", Math.round(y)).run(h)
            }
        }

        function f() {
            if (i.is_loaded()) {
                for (var a = 0; z > a; a++) c(a);
                i.fadeIn(".oildrum-selected").changeText("#travel-class", "1 x BUSINESS PASSENGER").changeText("#barrels-number", z).run(h), h.setUndo(function() {
                    for (var a = 0; y > a; a++) c(a)
                })
            }
        }

        function g() {
            if (i.is_loaded()) {
                for (var a = 0; A > a; a++) c(a);
                h.setUndo(function() {
                    for (var a = 0; z > a; a++) c(a)
                }), i.fadeIn(".oildrum-selected").changeText("#travel-class", "1 x FIRST CLASS PASSENGER").changeText("#barrels-number", A).run(h)
            }
        }
        var h, i, j, k, l, m, n = 1e4,
            o = 450,
            p = 700,
            q = 3,
            r = 1523,
            s = 12,
            t = 12,
            u = 50,
            v = 70,
            w = Math.floor(r / (s * t)) * v + 10,
            x = .4,
            y = 3,
            z = 5,
            A = 9,
            B = "M17.206,54.723c2.725,0.479,3.963,0.683,7.691,0.683c13.062,0,20.038-3.639,20.038-3.639s-3.52,6.781-19.831,6.781c-4.001,0-5.26-0.174-7.896-0.652c0.027,9.276,0.068,20.515,0.068,20.593c0,1.406-0.342,2.31-0.439,2.483c3.021,0.584,4.434,0.592,7.944,0.592c13.677,0,24.785-4.935,24.785-11.021c0-1.258-0.462-2.468-1.329-3.597V53.373c0.869-1.176,1.349-2.43,1.349-3.74c0-1.308-0.479-2.562-1.349-3.735V32.829c0.867-1.262,1.349-2.614,1.349-4.021c0-1.407-0.479-2.762-1.349-4.021V10.93h-0.057c0.877-0.844,1.354-1.747,1.354-2.688C49.541,3.688,38.449,0,24.771,0C11.093,0,0.003,3.688,0.003,8.242c0,0.94,0.477,1.847,1.354,2.688h0.025v13.889c-0.868,1.251-1.328,2.594-1.328,3.989c0,1.395,0.46,2.735,1.327,3.985v13.129c-0.867,1.165-1.327,2.411-1.327,3.708c0,1.303,0.46,2.55,1.327,3.711v13.636C0.514,68.1,0.029,69.3,0.029,70.545c0,4.452,5.324,8.074,13.854,9.815c-0.232-0.085,0.005,0.002,0.005,0.002c-0.043-0.021-0.042-0.021-0.005-0.002c0.334-0.985,0.345-2.257,0.345-2.257s0-11.159-0.007-20.537c-7.299-1.52-9.358-6.258-9.358-6.258s3.239,1.878,9.358,3.094c-0.002-6.824-0.004-12.13-0.004-18.462c-7.295-1.151-9.354-5.227-9.354-5.227s3.236,1.424,9.354,2.341c0-8.737,0.089-14.221,0.017-14.647c-7.235-1.152-9.367-5.26-9.367-5.26s3.13,1.372,9.054,2.292c-0.117-0.354-0.228-0.523-0.228-0.523s2.671,0.352,2.997,0.212c0.04,0.126,0.078,0.279,0.114,0.444c2.807,0.394,4.186,0.677,8.104,0.677c13.062,0,20.036-2.756,20.036-2.756s-3.521,5.624-19.832,5.624c-4.137,0-8.022-0.312-8.022-0.312s0.021,5.188,0.056,14.521c2.737,0.369,4,0.494,7.764,0.494c13.061,0,20.038-2.755,20.038-2.755s-3.521,5.621-19.832,5.621c-4.037,0-5.316-0.104-7.966-0.471M24.914,13.602c-12.458,0-22.559-2.539-22.559-5.887s10.101-6.229,22.559-6.229s22.557,2.886,22.557,6.229C47.47,11.063,37.372,13.602,24.914,13.602zM42.787,7.159c0,1.185-2.736,2.142-6.116,2.142c-3.378,0-6.117-0.957-6.117-2.142c0-1.183,2.739-2.141,6.117-2.141C40.05,5.019,42.787,5.977,42.787,7.159z",
            C = "M47.567,7.621c0-3.615-10.195-6.546-22.771-6.546c-12.576,0-22.771,2.931-22.771,6.546v64.372c0,5.287,10.161,9.572,22.695,9.572c12.534,0,22.695-4.285,22.695-9.572V8.369C47.512,8.123,47.567,7.874,47.567,7.621z",
            D = "M45.328,23.677c-0.967,1.586-1.211,3.16-1.545,4.946c-0.371,1.975,0.414,1.979,2.16,2.803c1.529,0.723,3.559,1.119,3.111,3.125c-0.189,0.844,2.754,2.179,3.445,2.577c1.812,1.047,5.041,2.669,5.309,4.919c0.367,3.108,0.734,6.217,1.104,9.324c0.281,2.367,0.908,4.942,0.867,7.33c-0.041,2.502-0.779,5.169-1.152,7.641c-0.309,2.053-0.168,5.049-1.367,6.804c-1.525,2.229-1.057,2.794-0.508,5.451c1.061,5.122,2.117,10.244,3.178,15.367c0.373,1.812,0.598,3.66,0.881,5.488c0.248,1.586-2.113,1.257-3.102,2.665c-0.459,0.657,0.396,3.256,0.459,4.312c0.154,2.599,0.311,5.194,0.463,7.793c0.242,4.065,0.523,7.991,0.281,12.051c-0.191,3.216-1.072,7.282-0.654,10.458c0.516,3.923,1.029,7.846,1.543,11.769c0.783,5.959,1.566,11.919,2.35,17.88c0.357,2.729,1.375,6.076,1.137,8.839c-0.16,1.856-0.977,4.634-0.52,6.429c0.547,2.149,1.096,4.299,1.643,6.448c0.801,3.147-0.303,5.194-3.402,5.693c-2.857,0.461-5.406,1.28-6.895-1.605c-1.324-2.574-2.592-5.717-3.598-8.42c-0.479-1.288,0.527-2.813,0.314-4.222c-0.793-5.214-1.584-10.428-2.377-15.642c-1.279-8.431-2.117-16.847-2.955-25.337c-0.328-3.341-1.188-6.861-2.283-10.023c-1.932-5.582-3.506-11.944-6.873-16.711c-0.967,3.136-2.033,6.158-2.23,9.439c-0.297,4.971-0.439,9.658-1.553,14.525c-0.332,1.456-2.002,5.118-1.486,6.552c0.703,1.953,1.389,3.417,0.912,5.484c-0.328,1.418,0.498,2.866,0.648,4.346c0.148,1.476,0.32,2.959,0.381,4.44c0.1,2.535,0.088,5.077,0.088,7.615c-0.002,4.707,1.037,11.085-0.559,15.607c-0.648,1.844-0.803,2.153-0.471,4.074c0.221,1.271,0.248,1.523-0.678,2.523c-1.027,1.109-3.295,1.646-4.646,2.414c-3.986,2.266-15.371,8.71-18.189,1.911c-0.982-2.367,3.873-5.382,5.365-6.439c1.076-0.762,4.775-2.585,4.982-4.229c0.297-2.368,0.592-4.736,0.889-7.105c0.244-1.953-1.551-4.281-1.551-6.342c0-5.37-2.086-10.582-1.562-16.082c0.201-2.109,1.664-3.156,1.691-5.533c0.033-2.51-0.945-4.967-0.85-7.467c0.109-2.904,0.74-5.345-0.385-7.931c-1.031-2.372-1.299-4.934-1.334-7.479c-0.082-5.803,0.178-11.618,0.43-17.413c0.092-2.116-1.773-1.793-3.67-2.535c-1.875-0.733-5.35-2.562-4.939-5.086c1.227-7.537,3.646-14.649,4.096-22.32c0.008-0.146-3.094-1.265-3.418-1.441c-1.625-0.887-1.895-3.001-2.252-4.701c-0.766-3.648-0.334-6.75,0.863-10.343c0.572-1.726,1.15-3.463,1.891-5.125c0.422-0.947,1.809-2.456,1.439-3.508c-0.666-1.92-0.6-1.738,0.52-3.385c0.529-0.78,0.758-2.007,1.205-2.862c1.646-3.149,3.252-6.166,6.896-7.13c1.562-0.414,6.812-1.645,3.283-2.73c1.943-1.403,3.572-2.18,6.08-2.684c1.627-0.328,2.709-0.168,2.869-1.831c0.275-2.921,0.428-4.46-0.561-7.177c-0.293-0.812-1.73-1.955-2.252-2.684c-1.369-1.916-0.246-3.186-0.148-5.287c0.072-1.561-0.449-3.417,0.617-4.753c1.35-1.687,3.158-3.396,4.904-4.669c2.402-1.75,4.906-2.579,7.74-1.806c4.559,1.245,6.604,3.641,8.324,8.014c0.68,1.727,1.336,3.934,0.104,5.593c-0.648,0.873-1.117,1.019-1.117,2.203C48.714,19.87,47.328,25.299,45.328,23.677L45.328,23.677z";
        return {
            init: a,
            start: b,
            scaleUp: d,
            economyPassenger: e,
            businessPassenger: f,
            firstPassenger: g
        }
    }(), modules.intro = function() {
        function a(a) {
            var k = !L;
            L = !0, y = Talkie.animate("#module-intro"), z = !0, I.radar = N, k ? (N.init(a), H = α.components.flights, H.whenDataLoaded(function() {
                log("Adding click handler to radar"), d3.selectAll("#radarstart, .radaroverlaypanel, .headline").on("click", function() {
                    N.stop(), d3.select(".headline").transition().duration(1e3).style("opacity", 0).transition().duration(0).style("display", "none"), hideBigPlayButton(), ga("send", "event", "radar", "click")
                }).style("cursor", "pointer")
            })) : (N.stop(), d3.select(".headline").style("display", "none"), hideBigPlayButton(), H.show()), A = {
                time: d3.select("#time-counter"),
                day: d3.select("#day-counter"),
                month: d3.select("#month-counter"),
                year: d3.select("#year-counter")
            }, B = d3.slider().value(100).on("slide", function(a, b) {
                H.pause(), H.clear(), H.jumpToPercentage(b), H.drawFrame()
            });
            var o = d3.select("#slider");
            B(o), C = d3.select("#slider a"), C.on("click.kiln", function() {
                H.pause()
            });
            var u = d3.select("#go"),
                K = d3.select("#go-text");
            H.on("frame", function(a) {
                var b = Math.round(100 * a.proportion);
                b != D && (D = b), a.animating && (B.value(b), C.style("left", b + "%")), w(a.last_timestamp + a.p * a.timeslice), x()
            }), H.on("loaded", function() {
                H.jumpToPercentage(100)
            }), H.on("play", function() {
                K.text("Stop").classed("flying", !0)
            }), H.on("pause", function() {
                K.text("Fly!").classed("flying", !1)
            }), u.on("click", function() {
                K.classed("flying") ? (H.pause(), ga("send", "event", "button", "click", "Stop")) : (H.play(), ga("send", "event", "button", "click", "Fly"))
            }), I.flights = H, setMapView(40, -5, 3), H.init(a), α.map.on("move", m), α.map.on("moveend", l), H.setSpeed(Math.pow(2, α.map.getZoom() + 8)), E = d3.select("#planes-button"), F = d3.select("#routes-button"), F.on("click", function() {
                d3.event.preventDefault(), e(), G.undoInteraction(f), ga("send", "event", "button", "click", "Routes")
            }), E.on("click", function() {
                d3.event.preventDefault(), f(), G.undoInteraction(e), ga("send", "event", "button", "click", "Planes")
            }), d3.select("#daytime-control").on("click", function() {
                var a = J;
                h(), G.undoInteraction(function() {
                    a ? i() : j()
                }), ga("send", "event", "button", "click", "Daytime " + (J ? "off" : "on"))
            }), G = Talkie.timeline("#audio", {
                "0:00.1": M.and(N.stop).and(b),
                "0:01": M.and(n, 13e3),
                "0:14": M.and(p),
                "0:20": M.and(q).and(v),
                "0:30": M.and(g),
                "0:50": M.and(d),
                "0:57": M.and(r),
                "1:03": M.and(s),
                "1:08": M.and(c).and(t)
            }), α.params.maponly && ($(".controls, #show-info-button, .headline, .radaroverlaypanel, #radarstart, #intro-controls, .loader").remove(), n()), α.params.mapwithcontrols && $(".controls, #show-info-button, .headline, .radaroverlaypanel, #radarstart, .loader").remove()
        }

        function b() {
            fadeOutDisplayNone(".headline")
        }

        function c() {
            f(), v(), G.setUndo(e)
        }

        function d() {
            e(), G.setUndo(f)
        }

        function e() {
            K && (H.hide(), j(), d3.selectAll(".planescontrol").transition().duration(1e3).style("opacity", 0), α.flight_paths_layer.setOpacity(0), α.map.addLayer(α.flight_paths_layer), d3.select(α.flight_paths_layer.getContainer()).transition().duration(1e3).style("opacity", 1), K = !1, E.classed("active", !1), F.classed("active", !0))
        }

        function f() {
            K || (H.show(), d3.selectAll(".planescontrol").transition().duration(1e3).style("opacity", 1), d3.select(α.flight_paths_layer.getContainer()).transition().duration(1e3).style("opacity", 0).each("end", function() {
                α.map.removeLayer(α.flight_paths_layer)
            }), K = !0, F.classed("active", !1), E.classed("active", !0))
        }

        function g() {
            i(), G.setUndo(j)
        }

        function h() {
            J ? j() : i(), G.setUndo(h)
        }

        function i() {
            if (!J) {
                var a = d3.select("#daytime-indicator"),
                    b = d3.select("#daytime-control-text");
                a.style("display", "block").transition().duration(500).style("opacity", 1), b.text("Hide"), J = !0
            }
        }

        function j() {
            if (J) {
                var a = d3.select("#daytime-indicator"),
                    b = d3.select("#daytime-control-text");
                a.transition().duration(500).style("opacity", 0).transition().duration(0).style("display", "none"), b.text("Show"), J = !1
            }
        }

        function k() {
            N.stop(), α.map.off("move", m), α.map.off("moveend", l), f(), H.pause(), H.clear(), z = !1
        }

        function l() {
            K && (H.setSpeed(Math.pow(2, α.map.getZoom() + 8)), H.repositionCanvas(), H.clear(), H.drawFrame(), x())
        }

        function m() {
            K && J && x()
        }

        function n(a) {
            if (a) {
                var b = Math.pow(2, α.map.getZoom() + 8);
                H.jumpTo(-a / b)
            }
            H.play(), G.setUndo(o)
        }

        function o() {
            H.pause(), G.setUndo(n)
        }

        function p() {
            log("ensureLiveView")
        }

        function q() {
            u(40, -5, 3, 20, -10, 2)
        }

        function r() {
            setMapView(47, 8, 5, !0), G.setUndo(function() {
                setMapView(20, -10, 2, !0)
            })
        }

        function s() {
            u(47, 8, 5, -7, -59, 4)
        }

        function t() {
            u(-7, -59, 4, 20, -10, 2)
        }

        function u(a, b, c, d, e, f) {
            setMapView(d, e, f, G.fast_forward), G.setUndo(function() {
                setMapView(a, b, c, !0)
            })
        }

        function v() {
            H.jumpTo(0), H.play()
        }

        function w(a) {
            var b = P = new Date(a);
            A.year.text(b.getFullYear()), A.month.text(b.getMonth() + 1), A.day.text(b.getDate()), A.time.text(O(b.getHours()) + ":" + O(b.getMinutes()))
        }

        function x() {
            if (null == P) return log("Can’t updateDaytimeIndicator before displayDate() has been called"), void 0;
            var a = 60 * P.getUTCHours() + P.getUTCMinutes(),
                b = α.map.getBounds(),
                c = 360 / (b.getEast() - b.getWest());
            d3.select("#daytime-indicator").style("left", -100 * (((a + 4 * b.getWest()) / 1440 + 1) % 1) * c + "%").style("width", 200 * c + "%")
        }
        var y, z, A, B, C, D, E, F, G, H, I = {},
            J = !1,
            K = !0,
            L = !1,
            M = animator(function() {
                return z
            }, function() {
                return y
            }),
            N = modules.intro.components.radar,
            O = d3.format("02d"),
            P = null;
        return {
            load: a,
            unload: k,
            name: "Introduction",
            exports: I
        }
    }, modules.intro.components = {}, modules.intro.components.radar = function() {
        function a(a) {
            window.audio && 0 != audio.readyState && audio.currentTime != a || α.params.no_radar ? c() : b()
        }

        function b() {
            function a() {
                f.play()
            }

            function b() {
                d3.select("#radarstart").transition().duration(e).ease("linear").styleTween("left", function() {
                    return d3.interpolateString("0%", "100%")
                }).each("start", a).remove(), d3.select("#radaroverlaypanel1").transition().duration(e).ease("linear").styleTween("left", function() {
                    return d3.interpolateString("-100%", "0%")
                }).each("start", a).each("end", c).remove()
            }

            function c() {
                if (d) {
                    a(), h = (h + 1) % 2;
                    var b = (h + 1) % 2;
                    g[h].transition().duration(e).ease("linear").styleTween("left", function() {
                        return d3.interpolateString("-100%", "0%")
                    }), g[b].transition().duration(e).ease("linear").styleTween("left", function() {
                        return d3.interpolateString("0%", "100%")
                    }).each("end", c)
                }
            }
            d = !0;
            var e = 3e3,
                f = document.getElementById("beep"),
                g = [d3.select("#radaroverlaypanel1"), d3.select("#radaroverlaypanel2")],
                h = 0;
            b()
        }

        function c() {
            log("Stopping the radar"), d3.selectAll("#radarstart, .radaroverlaypanel").transition().duration(0).style("left", "-32767px"), d = !1
        }
        var d = !1;
        return {
            init: a,
            start: b,
            stop: c
        }
    }(), $.easing.easeOutBack = function(a) {
        var b = 1 - a;
        return 1 - b * b * (3 * b - 2)
    }, $.easing.easeOutQuint = function(a) {
        return 1 - Math.pow(1 - a, 5)
    }, $.easing.easeInOutQuint = function(a) {
        return .5 > a ? Math.pow(2 * a, 5) / 2 : 1 - Math.pow(2 - 2 * a, 5) / 2
    };
var big_play_button_is_hidden = !1;
window.α = {
        params: {},
        components: {}
    },
    function(a, b, c) {
        for (; c = b.exec(a);) α.params[decodeURIComponent(c[1])] = decodeURIComponent(c[2])
    }(window.location.search.substring(1).replace(/\+/g, "%20"), /([^&=]+)=?([^&]*)/g),
    function() {
        function a(a, f) {
            a != α.current_module && (α.hideCredits(), α.current_module && (log("Unloading module", α.current_module), modules[α.current_module].unload()), log("Loading module", a), α.current_module = a, $.get("modules/" + a + ".html", function(g) {
                if (α.current_module == a) {
                    log("Loaded module", a), $(".current-module").html(g).attr("id", "module-" + a);
                    var i = modules[a],
                        j = A[a];
                    $(".chapter").removeClass("selected").eq(j).addClass("selected"), i.load(0), G = !1;
                    var l = $(".current-module");
                    l.find("audio").each(function() {
                        this.muted = F;
                        var a = this.getAttribute("volume");
                        a && (this.volume = parseFloat(a))
                    }), window.audio = document.getElementById("audio"), audio.addEventListener("timeupdate", function() {
                        k(), audio.paused && !audio.ended && "play" != H && b("play"), G && !audio.ended && d()
                    }, !1), k(), audio.addEventListener("play", function() {
                        return b("pause"), hideBigPlayButton(), $(".interaction-only").fadeOut(1e3), ga("send", "event", "audio", "play", α.current_module + " " + audio.currentTime), !0
                    }, !1), audio.addEventListener("pause", function() {
                        audio.ended || b("play"), h("in", 0), $(".interaction-only").fadeTo(1e3, 1), ga("send", "event", "audio", "pause", α.current_module + " " + audio.currentTime)
                    }, !1), audio.addEventListener("ended", function() {
                        audio.paused || audio.pause(), b(j == z.length - 1 ? "refresh" : "step-forward"), $(".loader").animate({
                            left: "0px"
                        }, 450, "easeInOutQuint"), c(), h("in", 0), ga("send", "event", "audio", "ended", α.current_module)
                    }, !1), log("Index is %d/%d", j, z.length - 1), b("play"), e(), f && f(), ga("send", "event", "module", "load", a)
                }
            }))
        }

        function b(a) {
            $(".controls .time i").removeClass("fa-play fa-pause fa-step-forward fa-refresh").addClass("fa-" + a), H = a
        }

        function c() {
            log("Showing tips panel"), $(".tips").fadeTo(1e3, 1, function() {
                $(this).click(d)
            }), G = !0
        }

        function d() {
            log("Hiding tips panel"), $(".tips").fadeOut(300), G = !1
        }

        function e() {
            var a = $(window).height();
            $(".current-module, .module-canvas, .fill").css("height", a + "px"), $(".fill-width").css("width", $(window).width() + "px")
        }

        function f(a, b, c, d) {
            var e, f, g, h, i = document.createElement("div"),
                j = document.body,
                k = j || document.createElement("body");
            if (parseInt(c, 10))
                for (; c--;) g = document.createElement("div"), g.id = d ? d[c] : "modernizr" + (c + 1), i.appendChild(g);
            return e = ["&#173;", '<style id="smodernizr">', a, "</style>"].join(""), i.id = "modernizr", (j ? i : k).innerHTML += e, k.appendChild(i), j || (k.style.background = "", k.style.overflow = "hidden", h = docElement.style.overflow, docElement.style.overflow = "hidden", docElement.appendChild(k)), f = b(i, a), j ? i.parentNode.removeChild(i) : (k.parentNode.removeChild(k), docElement.style.overflow = h), !!f
        }

        function g(b) {
            log("Going to module %d", b), 0 > b || b >= z.length || a(z[b])
        }

        function h(a, b) {
            "in" == a && ($("body, .controls, .control, .timeline").removeClass("no-cursor"), $(".controls").delay(b).stop().animate({
                bottom: "0px"
            }, 500, "easeInOutQuint", function() {
                I = !0
            }))
        }

        function i() {
            var a = L.tileLayer("http://interactive.guim.co.uk/embed/kiln/aviation/world-map/{z}/{x}/{y}.png", {
                tms: !0,
                bounds: [
                    [-60, -180],
                    [85, 180]
                ]
            });
            α.flight_paths_layer = L.tileLayer("http://interactive.guim.co.uk/embed/kiln/aviation/flight-paths/{z}/{x}/{y}.png", {
                tms: !0,
                bounds: [
                    [-60, -180],
                    [85, 180]
                ]
            }), α.map = L.map("map", {
                center: [40, -5],
                zoom: 3,
                minZoom: 2,
                maxZoom: 9,
                attributionControl: !1,
                zoomAnimationThreshold: 9,
                layers: [a],
                touchZoom: !0,
                scrollWheelZoom: !1,
                doubleClickZoom: !0
            }), α.canvas = document.createElement("canvas"), α.canvas.setAttribute("class", "leaflet-zoom-hide"), α.map.getPanes().overlayPane.appendChild(α.canvas), α.cx = α.canvas.getContext("2d")
        }

        function j(a) {
            audio.currentTime = a / $(window).width() * audio.duration
        }

        function k() {
            (null == J || J.empty()) && (J = $(".current, .current-big"));
            var a = isNaN(audio.duration) ? 0 : 100 * audio.currentTime / audio.duration;
            J.css("width", a + "%")
        }

        function l(a) {
            var b = !1;
            α.components.flights.on("progress", function(c) {
                if ($(".loader-bar").animate({
                        height: 100 * c + "%"
                    }), 1 == c) {
                    if (b) return;
                    b = !0, log("Data have loaded"), ga("send", "event", "data", "loaded"), a()
                }
            })
        }

        function m() {
            $(".loader-play").animate({
                left: "0"
            }, 500, "easeOutBack"), $(".loader-mask").animate({
                left: "-200px"
            }, 500, "easeOutBack"), h("in", 500), $("img").on("dragstart", function(a) {
                a.preventDefault()
            }), n()
        }

        function n() {
            p(), r(), s(), t(), u(), q(), o()
        }

        function o() {
            $(".facebook-share-button").click(function() {
                FB.ui({
                    app_id: "184401911756573",
                    method: "feed",
                    link: "http://gu.com/p/3yazb",
                    name: "In-flight",
                    caption: "100 years of air travel",
                    description: "Includes an incredible live map of flights in the last 24 hours.",
                    picture: "http://interactive.guim.co.uk/embed/kiln/aviation/media/aviation-facebook.gif"
                }, function(a) {
                    a && a.post_id ? log("Post published.") : log("Post was not published.")
                })
            })
        }

        function p() {
            return screenfull.enabled ? ($(".fullscreen").click(function() {
                screenfull.isFullscreen ? (screenfull.exit(), ga("send", "event", "fullscreen", "off")) : (screenfull.request(), ga("send", "event", "fullscreen", "on"))
            }), document.addEventListener(screenfull.raw.fullscreenchange, function() {
                screenfull.isFullscreen ? $(".fullscreen h2 i").removeClass("fa-arrows-alt").addClass("fa-compress") : $(".fullscreen h2 i").addClass("fa-arrows-alt").removeClass("fa-compress")
            }), void 0) : ($("body").addClass("no-fullscreen"), void 0)
        }

        function q() {
            $("body").bind("keyup", "space", function() {
                $(".time").click(), ga("send", "event", "keypress", "space")
            })
        }

        function r() {
            $(".time, .loader-play").click(function() {
                log("Play button pressed; currentTime = " + audio.currentTime + "; duration = " + audio.duration), 0 != audio.duration && audio.currentTime >= audio.duration - .1 ? a(z[(A[α.current_module] + 1) % z.length], function() {
                    audio.play()
                }) : audio.paused ? audio.play() : audio.pause()
            })
        }

        function s() {
            var a;
            $(".sound").click(function() {
                a = document.getElementsByTagName("audio"), F = !F;
                for (var b = 0; b < a.length; b++) a[b].muted = F;
                $(this).find("h2 i").toggleClass("fa-volume-off", F).toggleClass("fa-volume-up", !F), ga("send", "event", "button", "click", "Mute " + (F ? "on" : "off"))
            })
        }

        function t() {
            var a = !1;
            !I && E ? $(".timeline").click(function() {
                h("in", 0)
            }) : ($(".timeline").mousedown(function(b) {
                a = !0, j(b.pageX)
            }), $(document).mouseup(function() {
                a = !1
            }), $(document).mousemove(function(b) {
                b.pageY > .7 * $(window).height() ? $(".timeline").stop().animate({
                    height: "21px",
                    top: "-21px"
                }, 250, "easeOutQuint") : $(".timeline").stop().animate({
                    height: "7px",
                    top: "-7px"
                }, 250, "easeOutQuint"), a && j(b.pageX)
            })), $("body").bind("mousemove", function(a) {
                var b = a.clientY / $("body").height();
                !I && b > .75 && h("in", 0)
            })
        }

        function u() {
            $(".chapter").click(function() {
                hideBigPlayButton(), g(parseInt(this.id.substring(4)) - 1), ga("send", "event", "click", "chapter", this.id)
            })
        }

        function v() {
            d3.select("#assumptions-icon").classed("fa-chevron-circle-right", !0).classed("fa-chevron-circle-left", !1), d3.select("#view-assumptions-text").text("Hide details"), d3.select("#assumptions").style("display", "block").style("opacity", 0).transition().duration(500).style("opacity", .9), M = !0
        }

        function w() {
            d3.select("#assumptions-icon").classed("fa-chevron-circle-left", !0).classed("fa-chevron-circle-right", !1), d3.select("#view-assumptions-text").text("Show details"), d3.select("#assumptions").transition().duration(500).style("opacity", 0).transition().duration(0).style("display", "none"), M = !1
        }

        function x() {
            d3.select("#show-info-icon").on("click", function() {
                K ? α.hideCredits() : α.showCredits()
            }), d3.select("#info-view-assumptions").on("click", function() {
                M ? w() : v()
            })
        }
        for (var y = !0, z = ["intro", "birth", "century", "constraints"], A = {}, B = 0; B < z.length; B++) {
            var C = z[B];
            if ("function" == typeof modules[C]) {
                var D = modules[C].components;
                modules[C] = modules[C](), modules[C].components = D
            }
            A[C] = B
        }
        window.log = function() {
            if (y && window.console && console.log)
                if (console.log.apply) console.log.apply(console, arguments);
                else if (Function && Function.prototype && Function.prototype.bind) {
                var a = Function.prototype.bind.call(console.log, console);
                a.apply(console, arguments)
            }
        }, α.current_module = null;
        var E, F = !1,
            G = !1,
            H = "play";
        "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch ? E = !0 : f("@media (touch-enabled),(-webkit-touch-enabled),(-moz-touch-enabled),(-o-touch-enabled),(-ms-touch-enabled),(modernizr){#modernizr{top:9px;position:absolute}}", function(a) {
            E = 9 === a.offsetTop
        });
        var I = !1;
        $(document).ready(function() {
            i(), α.params.module && hideBigPlayButton(), a(α.params.module || "intro"), $(window).resize(e), l(m)
        });
        var J = null,
            K = !1,
            M = !1;
        α.showCredits = function() {
            K || (d3.select("#show-info-icon").classed("fa-times-circle-o", !0).classed("fa-info-circle", !1), d3.select("#info-holder").style("display", "block").style("opacity", 0).transition().duration(2500).style("opacity", 1), K = !0)
        }, α.hideCredits = function() {
            K && (d3.select("#show-info-icon").classed("fa-info-circle", !0).classed("fa-times-circle-o", !1), d3.select("#info-holder").transition().duration(500).style("opacity", 0).transition().duration(0).style("display", "none"), M && w(), K = !1)
        }, x()
    }(), ARRAYBUFFER_IS_BUILTIN || (window.PretendArrayBuffer = function(a) {
        this._bytes = a, this.byteLength = a.length
    }), α.components.flights = function() {
        function a() {
            e(function(a) {
                d3.select(".headline h1").text("In flight"), d3.select(".headline .headline-sub").transition().duration(100).style("opacity", "1"), a && M.loaded(t, s), f(), h()
            })
        }

        function b() {
            c()
        }

        function c() {
            var a = new XMLHttpRequest,
                b = !1,
                c = "withCredentials" in a ? "http://interactive.guim.co.uk/embed/kiln/aviation/flight-positions.bin" : "/data/flight-positions.bin";
            a.open("GET", c, !0), a.overrideMimeType && a.overrideMimeType("text/plain; charset=x-user-defined"), a.responseType = "arraybuffer", a.onprogress = function(a) {
                a && a.total && (M.progress(a.loaded / a.total), a.loaded == a.total && (b = !0))
            }, a.onload = function() {
                if (a.status && 200 != a.status) throw "Failed to load data: status = " + a.status;
                if (b || (M.progress(1), b = !0), a.response) d(a.response);
                else {
                    if ("undefined" == typeof a.responseBody || !window.VBArray) throw "Browser not supported";
                    var c = new VBArray(a.responseBody).toArray();
                    PretendArrayBuffer.prototype = new ArrayBuffer, d(new PretendArrayBuffer(c))
                }
            }, a.send()
        }

        function d(a) {
            if (s = D.data = new DataView(a), window.PretendArrayBuffer && a instanceof PretendArrayBuffer) {
                var b = a._bytes;
                s.getUint16 = function(a) {
                    return (b[a + 1] << 8) + b[a]
                }
            }
            t = D.data_ix = [], u = null;
            for (var c, d, e = s.getUint32(0, !0), f = Date.now(), g = 4; 4 * (1 + e) > g; g += 4) {
                var h = s.getUint32(g, !0);
                t.push(h), null == u && (c = d, d = s.getFloat64(h, !0), d >= f && (u = t.length - 2 + (f - c) / (d - c)))
            }
            null == u ? (log("All timestamps in the data file are in the past?"), log("(Most likely your computer's clock is wrong.)"), u = t.length - 12) : log("data_ix_now =", u, "out of", t.length), E = !0;
            for (var g = 0; g < K.length; g++) K[g](!0)
        }

        function e(a) {
            E ? a(!1) : K.push(a)
        }

        function f() {
            var a = α.map.getPixelBounds().getSize(),
                b = α.map.containerPointToLayerPoint([-C.x, -C.y]),
                c = a.x + 2 * C.x,
                d = a.y + 2 * C.y;
            α.canvas.style.left = b.x + "px", α.canvas.style.top = b.y + "px", (α.canvas.width != c || α.canvas.height != d) && (α.canvas.width = c, α.canvas.height = d, α.cx.fillStyle = "white", α.cx.globalAlpha = .95, α.cx.globalCompositeOperation = "copy");
            var e = α.map.getPixelBounds(),
                f = Math.pow(2, 8 + α.map.getZoom());
            B = Math.pow(2, 8 - α.map.getZoom());
            var g = null;
            e.max.x < 0 ? g = e.max.x % f + f - e.max.x : e.min.x >= f && (g = e.min.x % f - e.min.x), null != g && (e.min.x += g, e.max.x += g), x = (e.min.x - C.x) * B, y = (e.max.x + C.x) * B, z = (e.min.y - C.y) * B, A = (e.max.y + C.y) * B
        }

        function g(a) {
            function b(a, b) {
                "source-over" != α.cx.globalCompositeOperation && (α.cx.globalCompositeOperation = "source-over"), α.cx.beginPath(), α.cx.arc(a, b, 1, 0, 7, !1), α.cx.fill()
            }

            function c(a, b) {
                if (a >= l.width) return log("plotPixel: x out of range:", a), void 0;
                var c = 4 * (a + b * l.width);
                l.data[c] = 255, l.data[c + 1] = 255, l.data[c + 2] = 255, l.data[c + 3] = 255
            }
            if (a > u) return !1;
            var d = Math.floor(a),
                e = d + 1,
                f = a - d;
            e == t.length && 0 == f && (d--, e--, f = 1);
            var g = t[d],
                h = t[e],
                i = s.getFloat64(g, !0),
                j = s.getFloat64(h, !0),
                k = Math.min(s.getUint32(g + 8, !0), s.getUint32(h + 8, !0));
            if (M.frame({
                    proportion: a / u,
                    p: f,
                    last_timestamp: i,
                    timeslice: j - i,
                    animating: null != v
                }), J || ("copy" != α.cx.globalCompositeOperation && (α.cx.globalCompositeOperation = "copy"), α.cx.drawImage(α.canvas, 0, 0)), null != v) var l = α.cx.getImageData(0, 0, α.canvas.width, α.canvas.height);
            for (var m = 1 << 8 + α.map.getZoom(), n = 12; 12 + 4 * k > n; n += 4) {
                var o = s.getUint16(g + n, !0),
                    p = s.getUint16(g + n + 2, !0),
                    q = s.getUint16(h + n, !0),
                    r = s.getUint16(h + n + 2, !0);
                if (!(65535 == o && 65535 == p || 65535 == q && 65535 == r)) {
                    var w, y;
                    w = Math.abs(q - o) > 32768 ? ((o + 32768) % 65536 * (1 - f) + (q + 32768) % 65536 * f + 32768) % 65536 : o * (1 - f) + q * f, y = Math.abs(r - p) > 32768 ? ((p + 32768) % 65536 * (1 - f) + (r + 32768) % 65536 * f + 32768) % 65536 : p * (1 - f) + r * f, w = Math.floor((w - x) / B), y = Math.floor((y - z) / B);
                    for (var A = -1; 1 >= A; A++) {
                        var C = w + A * m;
                        0 > C || C >= α.canvas.width || (null == v ? b(C, y) : c(C, y))
                    }
                }
            }
            return null != v && α.cx.putImageData(l, 0, 0), J = !1, !0
        }

        function h() {
            E && g(I)
        }

        function i(a) {
            null == H && (H = a), null == G && (G = I), I = G + (a - H) / F;
            var b = g(I);
            b ? w = setTimeout(function() {
                v = requestAnimationFrame(i)
            }, 0) : (v = null, I = u, M.pause())
        }

        function j() {
            H = G = null, v && cancelAnimationFrame(v), v = requestAnimationFrame(i)
        }

        function k(a) {
            0 > a && (a = u + a), 0 > a && (a = 0), a > u && (a = u), e(function() {
                H = G = null, I = a, log("jumpTo", I)
            })
        }

        function l(a) {
            k(a / 100 * u)
        }

        function m(a) {
            F = a, H = G = null
        }

        function n() {
            v || e(function() {
                I == u && (I = 0), p(), animation_is_playing = !0, j(), M.play()
            })
        }

        function o() {
            v && (cancelAnimationFrame(v), clearTimeout(w), v = w = null), M.pause()
        }

        function p() {
            J || (α.cx.clearRect(0, 0, α.canvas.width, α.canvas.height), J = !0)
        }

        function q() {
            this.pause();
            var a = this;
            d3.select(α.canvas).transition().duration(1e3).style("opacity", 0).each("end", function() {
                a.clear()
            })
        }

        function r() {
            d3.select(α.canvas).transition().duration(1e3).style("opacity", 1), this.repositionCanvas(), this.drawFrame()
        }
        var s, t, u, v, w, x, y, z, A, B, C = new L.Point(100, 100),
            D = {},
            E = !1,
            F = 500,
            G = null,
            H = null,
            I = 0,
            J = !0,
            K = [],
            M = d3.dispatch("frame", "progress", "loaded", "play", "pause");
        return b(), {
            init: a,
            play: n,
            pause: o,
            hide: q,
            show: r,
            clear: p,
            jumpTo: k,
            jumpToPercentage: l,
            setSpeed: m,
            repositionCanvas: f,
            drawFrame: h,
            on: function() {
                return M.on.apply(M, arguments)
            },
            whenDataLoaded: e,
            exports: D
        }
    }();