! function(e) {
    "function" == typeof define && define.amd ? define(e) : e()
}(function() {
    var e, t = ["scroll", "wheel", "touchstart", "touchmove", "touchenter", "touchend", "touchleave", "mouseout", "mouseleave", "mouseup", "mousedown", "mousemove", "mouseenter", "mousewheel", "mouseover"];
    if (function() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
            } catch (e) {}
            return e
        }()) {
        var n = EventTarget.prototype.addEventListener;
        e = n, EventTarget.prototype.addEventListener = function(n, o, r) {
            var i, s = "object" == typeof r && null !== r,
                u = s ? r.capture : r;
            (r = s ? function(e) {
                var t = Object.getOwnPropertyDescriptor(e, "passive");
                return t && !0 !== t.writable && void 0 === t.set ? Object.assign({}, e) : e
            }(r) : {}).passive = void 0 !== (i = r.passive) ? i : -1 !== t.indexOf(n) && !0, r.capture = void 0 !== u && u, e.call(this, n, o, r)
        }, EventTarget.prototype.addEventListener._original = e
    }
});

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-csstransitions-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;
window.Modernizr = function(a, b, c) {
        function z(a) {
            j.cssText = a
        }

        function A(a, b) {
            return z(m.join(a + ";") + (b || ""))
        }

        function B(a, b) {
            return typeof a === b
        }

        function C(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function D(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!C(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
            }
            return !1
        }

        function E(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }

        function F(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + o.join(d + " ") + d).split(" ");
            return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c))
        }
        var d = "2.6.2",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k, l = {}.toString,
            m = " -webkit- -moz- -o- -ms- ".split(" "),
            n = "Webkit Moz O ms",
            o = n.split(" "),
            p = n.toLowerCase().split(" "),
            q = {},
            r = {},
            s = {},
            t = [],
            u = t.slice,
            v, w = function(a, c, d, e) {
                var f, i, j, k, l = b.createElement("div"),
                    m = b.body,
                    n = m || b.createElement("body");
                if (parseInt(d, 10))
                    while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
                return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
            },
            x = {}.hasOwnProperty,
            y;
        !B(x, "undefined") && !B(x.call, "undefined") ? y = function(a, b) {
            return x.call(a, b)
        } : y = function(a, b) {
            return b in a && B(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = u.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var a = function() {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(u.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(u.call(arguments)))
                };
            return e
        }), q.touch = function() {
            var c;
            return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : w(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
                c = a.offsetTop === 9
            }), c
        }, q.cssanimations = function() {
            return F("animationName")
        }, q.csstransitions = function() {
            return F("transition")
        };
        for (var G in q) y(q, G) && (v = G.toLowerCase(), e[v] = q[G](), t.push((e[v] ? "" : "no-") + v));
        return e.addTest = function(a, b) {
                if (typeof a == "object")
                    for (var d in a) y(a, d) && e.addTest(d, a[d]);
                else {
                    a = a.toLowerCase();
                    if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                }
                return e
            }, z(""), i = k = null,
            function(a, b) {
                function k(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function l() {
                    var a = r.elements;
                    return typeof a == "string" ? a.split(" ") : a
                }

                function m(a) {
                    var b = i[a[g]];
                    return b || (b = {}, h++, a[g] = h, i[h] = b), b
                }

                function n(a, c, f) {
                    c || (c = b);
                    if (j) return c.createElement(a);
                    f || (f = m(c));
                    var g;
                    return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
                }

                function o(a, c) {
                    a || (a = b);
                    if (j) return a.createDocumentFragment();
                    c = c || m(a);
                    var d = c.frag.cloneNode(),
                        e = 0,
                        f = l(),
                        g = f.length;
                    for (; e < g; e++) d.createElement(f[e]);
                    return d
                }

                function p(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return r.shivMethods ? n(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(r, b.frag)
                }

                function q(a) {
                    a || (a = b);
                    var c = m(a);
                    return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
                }
                var c = a.html5 || {},
                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    f, g = "_html5shiv",
                    h = 0,
                    i = {},
                    j;
                (function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                        }()
                    } catch (c) {
                        f = !0, j = !0
                    }
                })();
                var r = {
                    elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: c.shivCSS !== !1,
                    supportsUnknownElements: j,
                    shivMethods: c.shivMethods !== !1,
                    type: "default",
                    shivDocument: q,
                    createElement: n,
                    createDocumentFragment: o
                };
                a.html5 = r, q(b)
            }(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function(a) {
                return D([a])
            }, e.testAllProps = F, e.testStyles = w, e.prefixed = function(a, b, c) {
                return b ? F(a, b, c) : F(a, "pfx")
            }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function() {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) {
                return "[object Array]" == o.call(a)
            },
            x = [],
            y = {},
            z = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            },
            A, B;
        B = function(a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                    },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function(a, b) {
            z[a] = b
        }, B.addFilter = function(a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function() {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };
/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "2.2.4",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isPlainObject: function(a) {
            var b;
            if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (b in a);
            return void 0 === b || k.call(a, b)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : h.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a))
                for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a) e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function() {
                return a.apply(b || this, d.concat(e.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        },
        now: Date.now,
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ha(a) {
            return a[u] = !0, a
        }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fa.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = la(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = ma(b);

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c
        }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                    return a === b
                }, h, !0), l = ra(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return h.call(b, a) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (n.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function(a) {
            var b = n(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function F(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var G = /\S+/g;

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        n.each(b, function(b, c) {
                            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = g = [], c || (f = c = ""), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() {
        d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready()
    }
    n.ready.promise = function(b) {
        return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b)
    }, n.ready.promise();
    var K = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) K(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        L = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };

    function M() {
        this.expando = n.expando + M.uid++
    }
    M.uid = 1, M.prototype = {
        register: function(a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }), a[this.expando]
        },
        cache: function(a) {
            if (!L(a)) return {};
            var b = a[this.expando];
            return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[b] = c;
            else
                for (d in b) e[d] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b) this.register(a);
                else {
                    n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;
                    while (c--) delete f[d[c]]
                }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !n.isEmptyObject(b)
        }
    };
    var N = new M,
        O = new M,
        P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Q = /[A-Z]/g;

    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
                } catch (e) {}
                O.set(a, b, c)
            } else c = void 0;
        return c
    }
    n.extend({
        hasData: function(a) {
            return O.hasData(a) || N.hasData(a)
        },
        data: function(a, b, c) {
            return O.access(a, b, c)
        },
        removeData: function(a, b) {
            O.remove(a, b)
        },
        _data: function(a, b, c) {
            return N.access(a, b, c)
        },
        _removeData: function(a, b) {
            N.remove(a, b)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
                    N.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                O.set(this, a)
            }) : K(this, function(b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;
                    if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;
                    if (c = R(f, d, void 0), void 0 !== c) return c
                } else d = n.camelCase(a), this.each(function() {
                    var c = O.get(this, d);
                    O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                O.remove(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return N.get(a, c) || N.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    N.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"],
        V = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function W(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var X = /^(?:checkbox|radio)$/i,
        Y = /<([\w:-]+)/,
        Z = /^$|\/(?:java|ecma)script/i,
        $ = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;

    function _(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function aa(a, b) {
        for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"))
    }
    var ba = /<|&#?\w+;/;

    function ca(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
            if (f = a[o], f || 0 === f)
                if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
                else if (ba.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            n.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        l.textContent = "", o = 0;
        while (f = m[o++])
            if (d && n.inArray(f, d) > -1) e && e.push(f);
            else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
            k = 0;
            while (f = g[k++]) Z.test(f.type || "") && c.push(f)
        }
        return l
    }! function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var da = /^key/,
        ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        fa = /^([^.]*)(?:\.(.+)|)/;

    function ga() {
        return !0
    }

    function ha() {
        return !1
    }

    function ia() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function ja(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) ja(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(G) || [""], j = b.length;
                while (j--) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--)
                    if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                    } else
                        for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && N.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (N.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ia() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ia() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: ha,
        isPropagationStopped: ha,
        isImmediatePropagationStopped: ha,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ga, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ga, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return ja(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return ja(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        }
    });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        la = /<script|<style|<link/i,
        ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
        na = /^true\/(.*)/,
        oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function pa(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function qa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function ra(a) {
        var b = na.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function sa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
            }
            O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i))
        }
    }

    function ta(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function ua(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d)
        });
        if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
            for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
            if (i)
                for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
        }
        return a
    }

    function va(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(ka, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a);
            if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]);
                else sa(a, h);
            return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (L(c)) {
                    if (b = c[N.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                        c[N.expando] = void 0
                    }
                    c[O.expando] && (c[O.expando] = void 0)
                }
        }
    }), n.fn.extend({
        domManip: ua,
        detach: function(a) {
            return va(this, a, !0)
        },
        remove: function(a) {
            return va(this, a)
        },
        text: function(a) {
            return K(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return K(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return ua(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var wa, xa = {
        HTML: "block",
        BODY: "block"
    };

    function ya(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function za(a) {
        var b = d,
            c = xa[a];
        return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c
    }
    var Aa = /^margin/,
        Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ca = function(b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        },
        Da = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Ea = d.documentElement;
    ! function() {
        var b, c, e, f, g = d.createElement("div"),
            h = d.createElement("div");
        if (h.style) {
            h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);

            function i() {
                h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);
                var d = a.getComputedStyle(h);
                b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g)
            }
            n.extend(l, {
                pixelPosition: function() {
                    return i(), b
                },
                boxSizingReliable: function() {
                    return null == c && i(), c
                },
                pixelMarginRight: function() {
                    return null == c && i(), e
                },
                reliableMarginLeft: function() {
                    return null == c && i(), f
                },
                reliableMarginRight: function() {
                    var b, c = h.appendChild(d.createElement("div"));
                    return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b
                }
            })
        }
    }();

    function Fa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g
    }

    function Ga(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Ha = /^(none|table(?!-c[ea]).+)/,
        Ia = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ja = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ka = ["Webkit", "O", "Moz", "ms"],
        La = d.createElement("div").style;

    function Ma(a) {
        if (a in La) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Ka.length;
        while (c--)
            if (a = Ka[c] + b, a in La) return a
    }

    function Na(a, b, c) {
        var d = T.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Oa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }

    function Pa(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ca(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Fa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ba.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Qa(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Fa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() {
                    return Pa(a, b, d)
                }) : Pa(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e, f = d && Ca(a),
                    g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
                return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g)
            }
        }
    }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px" : void 0
    }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) {
        return b ? Da(a, {
            display: "inline-block"
        }, Fa, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Aa.test(a) || (n.cssHooks[a + b].set = Na)
    }), n.fn.extend({
        css: function(a, b) {
            return K(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Qa(this, !0)
        },
        hide: function() {
            return Qa(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function Ra(a, b, c, d, e) {
        return new Ra.prototype.init(a, b, c, d, e)
    }
    n.Tween = Ra, Ra.prototype = {
        constructor: Ra,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ra.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ra.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ra.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this
        }
    }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = Ra.prototype.init, n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/,
        Va = /queueHooks$/;

    function Wa() {
        return a.setTimeout(function() {
            Sa = void 0
        }), Sa = n.now()
    }

    function Xa(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ya(a, b, c) {
        for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function Za(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            o = a.style,
            p = a.nodeType && V(a),
            q = N.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], Ua.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
                n(a).hide()
            }), l.done(function() {
                var b;
                N.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b])
            });
            for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function $a(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function _a(a, b, c) {
        var d, e, f = 0,
            g = _a.prefilters.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Sa || Wa(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for ($a(k, j.opts.specialEasing); g > f; f++)
            if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(_a, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return W(c.elem, a, T.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b)
            },
            prefilters: [Za],
            prefilter: function(a, b) {
                b ? _a.prefilters.unshift(a) : _a.prefilters.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(V).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = _a(this, n.extend({}, a), f);
                        (e || N.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = N.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = N.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: Xa("show"),
            slideUp: Xa("hide"),
            slideToggle: Xa("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = 0,
                c = n.timers;
            for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || n.fx.stop(), Sa = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            a.clearInterval(Ta), Ta = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value
        }();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return K(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }
    }), ab = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = bb[b] || n.find.attr;
        bb[b] = function(a, b, d) {
            var e, f;
            return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e
        }
    });
    var cb = /^(?:input|select|textarea|button)$/i,
        db = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return K(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]),
                void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var eb = /[\t\r\n\f]/g;

    function fb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, fb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, fb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, fb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var gb = /\r/g,
        hb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(hb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var ib = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
                if (!f && !o.noBubble && !n.isWindow(e)) {
                    for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), i = h;
                    i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = p[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b)
        }
    }), n.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), l.focusin = "onfocusin" in a, l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = N.access(d, b);
                e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = N.access(d, b) - 1;
                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b))
            }
        }
    });
    var jb = a.location,
        kb = n.now(),
        lb = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, n.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var mb = /#.*$/,
        nb = /([?&])_=[^&]*/,
        ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        qb = /^(?:GET|HEAD)$/,
        rb = /^\/\//,
        sb = {},
        tb = {},
        ub = "*/".concat("*"),
        vb = d.createElement("a");
    vb.href = jb.href;

    function wb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function xb(a, b, c, d) {
        var e = {},
            f = a === tb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function yb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function zb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Ab(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jb.href,
            type: "GET",
            isLocal: pb.test(jb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a)
        },
        ajaxPrefilter: wb(sb),
        ajaxTransport: wb(tb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c),
                o = m.context || m,
                p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
                q = n.Deferred(),
                r = n.Callbacks("once memory"),
                s = m.statusCode || {},
                t = {},
                u = {},
                v = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === v) {
                            if (!h) {
                                h = {};
                                while (b = ob.exec(g)) h[b[1].toLowerCase()] = b[2]
                            }
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === v ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return v || (a = u[c] = u[c] || a, t[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return v || (m.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > v)
                                for (b in a) s[b] = [s[b], a[b]];
                            else x.always(a[x.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || w;
                        return e && e.abort(b), z(0, b), this
                    }
                };
            if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host
                } catch (y) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v) return x;
            k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
            w = "abort";
            for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[l](m[l]);
            if (e = xb(tb, m, c, x)) {
                if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                    x.abort("timeout")
                }, m.timeout));
                try {
                    v = 1, e.send(t, z)
                } catch (y) {
                    if (!(2 > v)) throw y;
                    z(-1, y)
                }
            } else z(-1, "No Transport");

            function z(b, c, d, h) {
                var j, l, t, u, w, y = c;
                2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return !n.expr.filters.visible(a)
    }, n.expr.filters.visible = function(a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
    };
    var Bb = /%20/g,
        Cb = /\[\]$/,
        Db = /\r?\n/g,
        Eb = /^(?:submit|button|image|reset|file)$/i,
        Fb = /^(?:input|select|textarea|keygen)/i;

    function Gb(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Gb(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Gb(c, a[c], b, e);
        return d.join("&").replace(Bb, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Db, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Db, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Hb = {
            0: 200,
            1223: 204
        },
        Ib = n.ajaxSettings.xhr();
    l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function(b) {
        var c, d;
        return l.cors || Ib && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            },
            abort: function() {
                c && c()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = n("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Jb = [],
        Kb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Jb.pop() || n.expando + "_" + kb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var Lb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };

    function Mb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Ea
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function(d) {
            return K(this, function(a, d, e) {
                var f = Mb(a);
                return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) {
            return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return K(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        size: function() {
            return this.length
        }
    }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Nb = a.jQuery,
        Ob = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n
    }, b || (a.jQuery = a.$ = n), n
});


/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function() {
    "use strict";
    var t = jQuery.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || 2 < t[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(),
function(o) {
    "use strict";
    o.fn.emulateTransitionEnd = function(t) {
        var e = !1,
            i = this;
        o(this).one("bsTransitionEnd", function() {
            e = !0
        });
        return setTimeout(function() {
            e || o(i).trigger(o.support.transition.end)
        }, t), this
    }, o(function() {
        o.support.transition = function() {
            var t, e = document.createElement("bootstrap"),
                i = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (t in i)
                if (void 0 !== e.style[t]) return {
                    end: i[t]
                };
            return !1
        }(), o.support.transition && (o.event.special.bsTransitionEnd = {
            bindType: o.support.transition.end,
            delegateType: o.support.transition.end,
            handle: function(t) {
                if (o(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function(s) {
    "use strict";

    function a(t) {
        s(t).on("click", e, this.close)
    }
    var e = '[data-dismiss="alert"]';
    a.VERSION = "3.3.6", a.TRANSITION_DURATION = 150, a.prototype.close = function(t) {
        var e = s(this),
            i = (i = e.attr("data-target")) || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, ""),
            o = s(i);

        function n() {
            o.detach().trigger("closed.bs.alert").remove()
        }
        t && t.preventDefault(), o.length || (o = e.closest(".alert")), o.trigger(t = s.Event("close.bs.alert")), t.isDefaultPrevented() || (o.removeClass("in"), s.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(a.TRANSITION_DURATION) : n())
    };
    var t = s.fn.alert;
    s.fn.alert = function(i) {
        return this.each(function() {
            var t = s(this),
                e = t.data("bs.alert");
            e || t.data("bs.alert", e = new a(this)), "string" == typeof i && e[i].call(t)
        })
    }, s.fn.alert.Constructor = a, s.fn.alert.noConflict = function() {
        return s.fn.alert = t, this
    }, s(document).on("click.bs.alert.data-api", e, a.prototype.close)
}(jQuery),
function(s) {
    "use strict";
    var n = function(t, e) {
        this.$element = s(t), this.options = s.extend({}, n.DEFAULTS, e), this.isLoading = !1
    };

    function i(o) {
        return this.each(function() {
            var t = s(this),
                e = t.data("bs.button"),
                i = "object" == typeof o && o;
            e || t.data("bs.button", e = new n(this, i)), "toggle" == o ? e.toggle() : o && e.setState(o)
        })
    }
    n.VERSION = "3.3.6", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(t) {
        var e = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            n = i.data();
        t += "Text", null == n.resetText && i.data("resetText", i[o]()), setTimeout(s.proxy(function() {
            i[o]((null == n[t] ? this.options : n)[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(e).attr(e, e)) : this.isLoading && (this.isLoading = !1, i.removeClass(e).removeAttr(e))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t, e = !0,
            i = this.$element.closest('[data-toggle="buttons"]');
        i.length ? ("radio" == (t = this.$element.find("input")).prop("type") ? (t.prop("checked") && (e = !1), i.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == t.prop("type") && (t.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), t.prop("checked", this.$element.hasClass("active")), e && t.trigger("change")) : (this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active"))
    };
    var t = s.fn.button;
    s.fn.button = i, s.fn.button.Constructor = n, s.fn.button.noConflict = function() {
        return s.fn.button = t, this
    }, s(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        var e = s(t.target);
        e.hasClass("btn") || (e = e.closest(".btn")), i.call(e, "toggle"), s(t.target).is('input[type="radio"]') || s(t.target).is('input[type="checkbox"]') || t.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        s(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery),
function(h) {
    "use strict";

    function d(t, e) {
        this.$element = h(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = e, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", h.proxy(this.keydown, this)), "hover" != this.options.pause || "ontouchstart" in document.documentElement || this.$element.on("mouseenter.bs.carousel", h.proxy(this.pause, this)).on("mouseleave.bs.carousel", h.proxy(this.cycle, this))
    }

    function n(n) {
        return this.each(function() {
            var t = h(this),
                e = t.data("bs.carousel"),
                i = h.extend({}, d.DEFAULTS, t.data(), "object" == typeof n && n),
                o = "string" == typeof n ? n : i.slide;
            e || t.data("bs.carousel", e = new d(this, i)), "number" == typeof n ? e.to(n) : o ? e[o]() : i.interval && e.pause().cycle()
        })
    }
    d.VERSION = "3.3.6", d.TRANSITION_DURATION = 600, d.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, d.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, d.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(h.proxy(this.next, this), this.options.interval)), this
    }, d.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, d.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e);
        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
        t = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(t)
    }, d.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(i < t ? "next" : "prev", this.$items.eq(t))
    }, d.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && h.support.transition && (this.$element.trigger(h.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, d.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, d.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, d.prototype.slide = function(t, e) {
        var i = this.$element.find(".item.active"),
            o = e || this.getItemForDirection(t, i),
            n = this.interval,
            s = "next" == t ? "left" : "right",
            a = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var r = o[0],
            e = h.Event("slide.bs.carousel", {
                relatedTarget: r,
                direction: s
            });
        if (this.$element.trigger(e), !e.isDefaultPrevented()) {
            this.sliding = !0, n && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), (e = h(this.$indicators.children()[this.getItemIndex(o)])) && e.addClass("active"));
            var l = h.Event("slid.bs.carousel", {
                relatedTarget: r,
                direction: s
            });
            return h.support.transition && this.$element.hasClass("slide") ? (o.addClass(t), o[0].offsetWidth, i.addClass(s), o.addClass(s), i.one("bsTransitionEnd", function() {
                o.removeClass([t, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), a.sliding = !1, setTimeout(function() {
                    a.$element.trigger(l)
                }, 0)
            }).emulateTransitionEnd(d.TRANSITION_DURATION)) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(l)), n && this.cycle(), this
        }
    };
    var t = h.fn.carousel;

    function e(t) {
        var e, i = h(this),
            o = h(i.attr("data-target") || (e = i.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""));
        o.hasClass("carousel") && (e = h.extend({}, o.data(), i.data()), (i = i.attr("data-slide-to")) && (e.interval = !1), n.call(o, e), i && o.data("bs.carousel").to(i), t.preventDefault())
    }
    h.fn.carousel = n, h.fn.carousel.Constructor = d, h.fn.carousel.noConflict = function() {
        return h.fn.carousel = t, this
    }, h(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), h(window).on("load", function() {
        h('[data-ride="carousel"]').each(function() {
            var t = h(this);
            n.call(t, t.data())
        })
    })
}(jQuery),
function(n) {
    "use strict";
    var s = function(t, e) {
        this.$element = n(t), this.options = n.extend({}, s.DEFAULTS, e), this.$trigger = n('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };

    function i(t) {
        var e = t.attr("data-target") || (e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "");
        return n(e)
    }

    function a(o) {
        return this.each(function() {
            var t = n(this),
                e = t.data("bs.collapse"),
                i = n.extend({}, s.DEFAULTS, t.data(), "object" == typeof o && o);
            !e && i.toggle && /show|hide/.test(o) && (i.toggle = !1), e || t.data("bs.collapse", e = new s(this, i)), "string" == typeof o && e[o]()
        })
    }
    s.VERSION = "3.3.6", s.TRANSITION_DURATION = 350, s.DEFAULTS = {
        toggle: !0
    }, s.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, s.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(t && t.length && (o = t.data("bs.collapse")) && o.transitioning)) {
                var e = n.Event("show.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    t && t.length && (a.call(t, "hide"), o || t.data("bs.collapse", null));
                    var i = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[i](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var o = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[i](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!n.support.transition) return o.call(this);
                    t = n.camelCase(["scroll", i].join("-"));
                    this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(s.TRANSITION_DURATION)[i](this.$element[0][t])
                }
            }
        }
    }, s.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = n.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var e = this.dimension();
                this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                t = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!n.support.transition) return t.call(this);
                this.$element[e](0).one("bsTransitionEnd", n.proxy(t, this)).emulateTransitionEnd(s.TRANSITION_DURATION)
            }
        }
    }, s.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, s.prototype.getParent = function() {
        return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function(t, e) {
            e = n(e);
            this.addAriaAndCollapsedClass(i(e), e)
        }, this)).end()
    }, s.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var t = n.fn.collapse;
    n.fn.collapse = a, n.fn.collapse.Constructor = s, n.fn.collapse.noConflict = function() {
        return n.fn.collapse = t, this
    }, n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
        var e = n(this);
        e.attr("data-target") || t.preventDefault();
        t = i(e), e = t.data("bs.collapse") ? "toggle" : e.data();
        a.call(t, e)
    })
}(jQuery),
function(n) {
    "use strict";

    function o(t) {
        n(t).on("click.bs.dropdown", this.toggle)
    }
    var s = '[data-toggle="dropdown"]';

    function a(t) {
        var e = t.attr("data-target"),
            e = (e = e || (e = t.attr("href")) && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, "")) && n(e);
        return e && e.length ? e : t.parent()
    }

    function r(o) {
        o && 3 === o.which || (n(".dropdown-backdrop").remove(), n(s).each(function() {
            var t = n(this),
                e = a(t),
                i = {
                    relatedTarget: this
                };
            e.hasClass("open") && (o && "click" == o.type && /input|textarea/i.test(o.target.tagName) && n.contains(e[0], o.target) || (e.trigger(o = n.Event("hide.bs.dropdown", i)), o.isDefaultPrevented() || (t.attr("aria-expanded", "false"), e.removeClass("open").trigger(n.Event("hidden.bs.dropdown", i)))))
        }))
    }
    o.VERSION = "3.3.6", o.prototype.toggle = function(t) {
        var e = n(this);
        if (!e.is(".disabled, :disabled")) {
            var i = a(e),
                o = i.hasClass("open");
            if (r(), !o) {
                "ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click", r);
                o = {
                    relatedTarget: this
                };
                if (i.trigger(t = n.Event("show.bs.dropdown", o)), t.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), i.toggleClass("open").trigger(n.Event("shown.bs.dropdown", o))
            }
            return !1
        }
    }, o.prototype.keydown = function(t) {
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
            var e = n(this);
            if (t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled")) {
                var i = a(e),
                    o = i.hasClass("open");
                if (!o && 27 != t.which || o && 27 == t.which) return 27 == t.which && i.find(s).trigger("focus"), e.trigger("click");
                e = i.find(".dropdown-menu li:not(.disabled):visible a");
                e.length && (i = e.index(t.target), 38 == t.which && 0 < i && i--, 40 == t.which && i < e.length - 1 && i++, ~i || (i = 0), e.eq(i).trigger("focus"))
            }
        }
    };
    var t = n.fn.dropdown;
    n.fn.dropdown = function(i) {
        return this.each(function() {
            var t = n(this),
                e = t.data("bs.dropdown");
            e || t.data("bs.dropdown", e = new o(this)), "string" == typeof i && e[i].call(t)
        })
    }, n.fn.dropdown.Constructor = o, n.fn.dropdown.noConflict = function() {
        return n.fn.dropdown = t, this
    }, n(document).on("click.bs.dropdown.data-api", r).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown.data-api", s, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
}(jQuery),
function(s) {
    "use strict";

    function a(t, e) {
        this.options = e, this.$body = s(document.body), this.$element = s(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, s.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    }

    function n(o, n) {
        return this.each(function() {
            var t = s(this),
                e = t.data("bs.modal"),
                i = s.extend({}, a.DEFAULTS, t.data(), "object" == typeof o && o);
            e || t.data("bs.modal", e = new a(this, i)), "string" == typeof o ? e[o](n) : i.show && e.show(n)
        })
    }
    a.VERSION = "3.3.6", a.TRANSITION_DURATION = 300, a.BACKDROP_TRANSITION_DURATION = 150, a.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, a.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, a.prototype.show = function(i) {
        var o = this,
            t = s.Event("show.bs.modal", {
                relatedTarget: i
            });
        this.$element.trigger(t), this.isShown || t.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', s.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            o.$element.one("mouseup.dismiss.bs.modal", function(t) {
                s(t.target).is(o.$element) && (o.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var t = s.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), t && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
            var e = s.Event("shown.bs.modal", {
                relatedTarget: i
            });
            t ? o.$dialog.one("bsTransitionEnd", function() {
                o.$element.trigger("focus").trigger(e)
            }).emulateTransitionEnd(a.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(e)
        }))
    }, a.prototype.hide = function(t) {
        t && t.preventDefault(), t = s.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), s(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), s.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", s.proxy(this.hideModal, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : this.hideModal())
    }, a.prototype.enforceFocus = function() {
        s(document).off("focusin.bs.modal").on("focusin.bs.modal", s.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, a.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", s.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, a.prototype.resize = function() {
        this.isShown ? s(window).on("resize.bs.modal", s.proxy(this.handleUpdate, this)) : s(window).off("resize.bs.modal")
    }, a.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, a.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, a.prototype.backdrop = function(t) {
        var e, i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        this.isShown && this.options.backdrop ? (e = s.support.transition && o, this.$backdrop = s(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", s.proxy(function(t) {
            this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
        }, this)), e && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), t && (e ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : t())) : !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e = function() {
            i.removeBackdrop(), t && t()
        }, s.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : e()) : t && t()
    }, a.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, a.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, a.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, a.prototype.checkScrollbar = function() {
        var t, e = window.innerWidth;
        e || (e = (t = document.documentElement.getBoundingClientRect()).right - Math.abs(t.left)), this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
    }, a.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, a.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, a.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var t = s.fn.modal;
    s.fn.modal = n, s.fn.modal.Constructor = a, s.fn.modal.noConflict = function() {
        return s.fn.modal = t, this
    }, s(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var e = s(this),
            i = e.attr("href"),
            o = s(e.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            i = o.data("bs.modal") ? "toggle" : s.extend({
                remote: !/#/.test(i) && i
            }, o.data(), e.data());
        e.is("a") && t.preventDefault(), o.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                e.is(":visible") && e.trigger("focus")
            })
        }), n.call(o, i, this)
    })
}(jQuery),
function(l) {
    "use strict";

    function h(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    }
    h.VERSION = "3.3.6", h.TRANSITION_DURATION = 150, h.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, h.prototype.init = function(t, e, i) {
        if (this.enabled = !0, this.type = t, this.$element = l(e), this.options = this.getOptions(i), this.$viewport = this.options.viewport && l(l.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), n = o.length; n--;) {
            var s, a = o[n];
            "click" == a ? this.$element.on("click." + this.type, this.options.selector, l.proxy(this.toggle, this)) : "manual" != a && (s = "hover" == a ? "mouseenter" : "focusin", a = "hover" == a ? "mouseleave" : "focusout", this.$element.on(s + "." + this.type, this.options.selector, l.proxy(this.enter, this)), this.$element.on(a + "." + this.type, this.options.selector, l.proxy(this.leave, this)))
        }
        this.options.selector ? this._options = l.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, h.prototype.getDefaults = function() {
        return h.DEFAULTS
    }, h.prototype.getOptions = function(t) {
        return (t = l.extend({}, this.getDefaults(), this.$element.data(), t)).delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, h.prototype.getDelegateOptions = function() {
        var i = {},
            o = this.getDefaults();
        return this._options && l.each(this._options, function(t, e) {
            o[t] != e && (i[t] = e)
        }), i
    }, h.prototype.enter = function(t) {
        var e = t instanceof this.constructor ? t : l(t.currentTarget).data("bs." + this.type);
        if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), l(t.currentTarget).data("bs." + this.type, e)), t instanceof l.Event && (e.inState["focusin" == t.type ? "focus" : "hover"] = !0), e.tip().hasClass("in") || "in" == e.hoverState) e.hoverState = "in";
        else {
            if (clearTimeout(e.timeout), e.hoverState = "in", !e.options.delay || !e.options.delay.show) return e.show();
            e.timeout = setTimeout(function() {
                "in" == e.hoverState && e.show()
            }, e.options.delay.show)
        }
    }, h.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, h.prototype.leave = function(t) {
        var e = t instanceof this.constructor ? t : l(t.currentTarget).data("bs." + this.type);
        if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), l(t.currentTarget).data("bs." + this.type, e)), t instanceof l.Event && (e.inState["focusout" == t.type ? "focus" : "hover"] = !1), !e.isInStateTrue()) {
            if (clearTimeout(e.timeout), e.hoverState = "out", !e.options.delay || !e.options.delay.hide) return e.hide();
            e.timeout = setTimeout(function() {
                "out" == e.hoverState && e.hide()
            }, e.options.delay.hide)
        }
    }, h.prototype.show = function() {
        var e, t, i, o, n, s, a, r = l.Event("show.bs." + this.type);
        this.hasContent() && this.enabled && (this.$element.trigger(r), i = l.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]), !r.isDefaultPrevented() && i && (t = (e = this).tip(), s = this.getUID(this.type), this.setContent(), t.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && t.addClass("fade"), a = "function" == typeof this.options.placement ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement, (n = (o = /\s?auto?\s?/i).test(a)) && (a = a.replace(o, "") || "top"), t.detach().css({
            top: 0,
            left: 0,
            display: "block"
        }).addClass(a).data("bs." + this.type, this), this.options.container ? t.appendTo(this.options.container) : t.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type), r = this.getPosition(), i = t[0].offsetWidth, s = t[0].offsetHeight, n && (o = a, n = this.getPosition(this.$viewport), a = "bottom" == a && r.bottom + s > n.bottom ? "top" : "top" == a && r.top - s < n.top ? "bottom" : "right" == a && r.right + i > n.width ? "left" : "left" == a && r.left - i < n.left ? "right" : a, t.removeClass(o).addClass(a)), s = this.getCalculatedOffset(a, r, i, s), this.applyPlacement(s, a), a = function() {
            var t = e.hoverState;
            e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == t && e.leave(e)
        }, l.support.transition && this.$tip.hasClass("fade") ? t.one("bsTransitionEnd", a).emulateTransitionEnd(h.TRANSITION_DURATION) : a()))
    }, h.prototype.applyPlacement = function(t, e) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            n = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), t.top += s, t.left += a, l.offset.setOffset(i[0], l.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, t), 0), i.addClass("in");
        var r = i[0].offsetWidth,
            s = i[0].offsetHeight;
        "top" == e && s != n && (t.top = t.top + n - s);
        a = this.getViewportAdjustedDelta(e, t, r, s);
        a.left ? t.left += a.left : t.top += a.top;
        e = /top|bottom/.test(e), n = e ? 2 * a.left - o + r : 2 * a.top - n + s, s = e ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(n, i[0][s], e)
    }, h.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, h.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, h.prototype.hide = function(t) {
        var e = this,
            i = l(this.$tip),
            o = l.Event("hide.bs." + this.type);

        function n() {
            "in" != e.hoverState && i.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), t && t()
        }
        if (this.$element.trigger(o), !o.isDefaultPrevented()) return i.removeClass("in"), l.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", n).emulateTransitionEnd(h.TRANSITION_DURATION) : n(), this.hoverState = null, this
    }, h.prototype.fixTitle = function() {
        var t = this.$element;
        !t.attr("title") && "string" == typeof t.attr("data-original-title") || t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, h.prototype.hasContent = function() {
        return this.getTitle()
    }, h.prototype.getPosition = function(t) {
        var e = (t = t || this.$element)[0],
            i = "BODY" == e.tagName,
            o = e.getBoundingClientRect();
        null == o.width && (o = l.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        e = i ? {
            top: 0,
            left: 0
        } : t.offset(), t = {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
        }, i = i ? {
            width: l(window).width(),
            height: l(window).height()
        } : null;
        return l.extend({}, o, t, i, e)
    }, h.prototype.getCalculatedOffset = function(t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, h.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
        var n = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return n;
        var s, a = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        return /right|left/.test(t) ? (t = e.top - a - r.scroll, s = e.top + a - r.scroll + o, t < r.top ? n.top = r.top - t : s > r.top + r.height && (n.top = r.top + r.height - s)) : (s = e.left - a, i = e.left + a + i, s < r.left ? n.left = r.left - s : i > r.right && (n.left = r.left + r.width - i)), n
    }, h.prototype.getTitle = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, h.prototype.getUID = function(t) {
        for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
        return t
    }, h.prototype.tip = function() {
        if (!this.$tip && (this.$tip = l(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, h.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, h.prototype.enable = function() {
        this.enabled = !0
    }, h.prototype.disable = function() {
        this.enabled = !1
    }, h.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, h.prototype.toggle = function(t) {
        var e = this;
        t && ((e = l(t.currentTarget).data("bs." + this.type)) || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), l(t.currentTarget).data("bs." + this.type, e))), t ? (e.inState.click = !e.inState.click, e.isInStateTrue() ? e.enter(e) : e.leave(e)) : e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
    }, h.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var t = l.fn.tooltip;
    l.fn.tooltip = function(o) {
        return this.each(function() {
            var t = l(this),
                e = t.data("bs.tooltip"),
                i = "object" == typeof o && o;
            !e && /destroy|hide/.test(o) || (e || t.data("bs.tooltip", e = new h(this, i)), "string" == typeof o && e[o]())
        })
    }, l.fn.tooltip.Constructor = h, l.fn.tooltip.noConflict = function() {
        return l.fn.tooltip = t, this
    }
}(jQuery),
function(n) {
    "use strict";

    function s(t, e) {
        this.init("popover", t, e)
    }
    if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
    s.VERSION = "3.3.6", s.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), ((s.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype)).constructor = s).prototype.getDefaults = function() {
        return s.DEFAULTS
    }, s.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, s.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, s.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, s.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var t = n.fn.popover;
    n.fn.popover = function(o) {
        return this.each(function() {
            var t = n(this),
                e = t.data("bs.popover"),
                i = "object" == typeof o && o;
            !e && /destroy|hide/.test(o) || (e || t.data("bs.popover", e = new s(this, i)), "string" == typeof o && e[o]())
        })
    }, n.fn.popover.Constructor = s, n.fn.popover.noConflict = function() {
        return n.fn.popover = t, this
    }
}(jQuery),
function(n) {
    "use strict";

    function s(t, e) {
        this.$body = n(document.body), this.$scrollElement = n(t).is(document.body) ? n(window) : n(t), this.options = n.extend({}, s.DEFAULTS, e), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", n.proxy(this.process, this)), this.refresh(), this.process()
    }

    function e(o) {
        return this.each(function() {
            var t = n(this),
                e = t.data("bs.scrollspy"),
                i = "object" == typeof o && o;
            e || t.data("bs.scrollspy", e = new s(this, i)), "string" == typeof o && e[o]()
        })
    }
    s.VERSION = "3.3.6", s.DEFAULTS = {
        offset: 10
    }, s.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, s.prototype.refresh = function() {
        var t = this,
            i = "offset",
            o = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), n.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var t = n(this),
                e = t.data("target") || t.attr("href"),
                t = /^#./.test(e) && n(e);
            return t && t.length && t.is(":visible") ? [
                [t[i]().top + o, e]
            ] : null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            t.offsets.push(this[0]), t.targets.push(this[1])
        })
    }, s.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            o = this.options.offset + i - this.$scrollElement.height(),
            n = this.offsets,
            s = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), o <= e) return a != (t = s[s.length - 1]) && this.activate(t);
        if (a && e < n[0]) return this.activeTarget = null, this.clear();
        for (t = n.length; t--;) a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t])
    }, s.prototype.activate = function(t) {
        this.activeTarget = t, this.clear();
        t = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', t = n(t).parents("li").addClass("active");
        t.parent(".dropdown-menu").length && (t = t.closest("li.dropdown").addClass("active")), t.trigger("activate.bs.scrollspy")
    }, s.prototype.clear = function() {
        n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var t = n.fn.scrollspy;
    n.fn.scrollspy = e, n.fn.scrollspy.Constructor = s, n.fn.scrollspy.noConflict = function() {
        return n.fn.scrollspy = t, this
    }, n(window).on("load.bs.scrollspy.data-api", function() {
        n('[data-spy="scroll"]').each(function() {
            var t = n(this);
            e.call(t, t.data())
        })
    })
}(jQuery),
function(a) {
    "use strict";

    function r(t) {
        this.element = a(t)
    }

    function e(i) {
        return this.each(function() {
            var t = a(this),
                e = t.data("bs.tab");
            e || t.data("bs.tab", e = new r(this)), "string" == typeof i && e[i]()
        })
    }
    r.VERSION = "3.3.6", r.TRANSITION_DURATION = 150, r.prototype.show = function() {
        var t, e, i, o = this.element,
            n = o.closest("ul:not(.dropdown-menu)"),
            s = (s = o.data("target")) || (s = o.attr("href")) && s.replace(/.*(?=#[^\s]*$)/, "");
        o.parent("li").hasClass("active") || (t = n.find(".active:last a"), e = a.Event("hide.bs.tab", {
            relatedTarget: o[0]
        }), i = a.Event("show.bs.tab", {
            relatedTarget: t[0]
        }), t.trigger(e), o.trigger(i), i.isDefaultPrevented() || e.isDefaultPrevented() || (s = a(s), this.activate(o.closest("li"), n), this.activate(s, s.parent(), function() {
            t.trigger({
                type: "hidden.bs.tab",
                relatedTarget: o[0]
            }), o.trigger({
                type: "shown.bs.tab",
                relatedTarget: t[0]
            })
        })))
    }, r.prototype.activate = function(t, e, i) {
        var o = e.find("> .active"),
            n = i && a.support.transition && (o.length && o.hasClass("fade") || !!e.find("> .fade").length);

        function s() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), n ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
        }
        o.length && n ? o.one("bsTransitionEnd", s).emulateTransitionEnd(r.TRANSITION_DURATION) : s(), o.removeClass("in")
    };
    var t = a.fn.tab;

    function i(t) {
        t.preventDefault(), e.call(a(this), "show")
    }
    a.fn.tab = e, a.fn.tab.Constructor = r, a.fn.tab.noConflict = function() {
        return a.fn.tab = t, this
    }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery),
function(a) {
    "use strict";
    var r = function(t, e) {
        this.options = a.extend({}, r.DEFAULTS, e), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };

    function i(o) {
        return this.each(function() {
            var t = a(this),
                e = t.data("bs.affix"),
                i = "object" == typeof o && o;
            e || t.data("bs.affix", e = new r(this, i)), "string" == typeof o && e[o]()
        })
    }
    r.VERSION = "3.3.6", r.RESET = "affix affix-top affix-bottom", r.DEFAULTS = {
        offset: 0,
        target: window
    }, r.prototype.getState = function(t, e, i, o) {
        var n = this.$target.scrollTop(),
            s = this.$element.offset(),
            a = this.$target.height();
        if (null != i && "top" == this.affixed) return n < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(n + this.unpin <= s.top) && "bottom" : !(n + a <= t - o) && "bottom";
        var r = null == this.affixed,
            s = r ? n : s.top;
        return null != i && n <= i ? "top" : null != o && t - o <= s + (r ? a : e) && "bottom"
    }, r.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(r.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, r.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, r.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
                e = this.options.offset,
                i = e.top,
                o = e.bottom,
                n = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof e && (o = i = e), "function" == typeof i && (i = e.top(this.$element)), "function" == typeof o && (o = e.bottom(this.$element));
            var s = this.getState(n, t, i, o);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                e = "affix" + (s ? "-" + s : ""), i = a.Event(e + ".bs.affix");
                if (this.$element.trigger(i), i.isDefaultPrevented()) return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(r.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: n - t - o
            })
        }
    };
    var t = a.fn.affix;
    a.fn.affix = i, a.fn.affix.Constructor = r, a.fn.affix.noConflict = function() {
        return a.fn.affix = t, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var t = a(this),
                e = t.data();
            e.offset = e.offset || {}, null != e.offsetBottom && (e.offset.bottom = e.offsetBottom), null != e.offsetTop && (e.offset.top = e.offsetTop), i.call(t, e)
        })
    })
}(jQuery);


/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
! function(i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function(a) {
    "use strict";
    var o, r = window.Slick || {};
    o = 0, (r = function(i, e) {
        var t = this;
        t.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: a(i),
            appendDots: a(i),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(i, e) {
                return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(e + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        }, t.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        }, a.extend(t, t.initials), t.activeBreakpoint = null, t.animType = null, t.animProp = null, t.breakpoints = [], t.breakpointSettings = [], t.cssTransitions = !1, t.focussed = !1, t.interrupted = !1, t.hidden = "hidden", t.paused = !0, t.positionProp = null, t.respondTo = null, t.rowCount = 1, t.shouldClick = !0, t.$slider = a(i), t.$slidesCache = null, t.transformType = null, t.transitionType = null, t.visibilityChange = "visibilitychange", t.windowWidth = 0, t.windowTimer = null, i = a(i).data("slick") || {}, t.options = a.extend({}, t.defaults, e, i), t.currentSlide = t.options.initialSlide, t.originalSettings = t.options, void 0 !== document.mozHidden ? (t.hidden = "mozHidden", t.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (t.hidden = "webkitHidden", t.visibilityChange = "webkitvisibilitychange"), t.autoPlay = a.proxy(t.autoPlay, t), t.autoPlayClear = a.proxy(t.autoPlayClear, t), t.autoPlayIterator = a.proxy(t.autoPlayIterator, t), t.changeSlide = a.proxy(t.changeSlide, t), t.clickHandler = a.proxy(t.clickHandler, t), t.selectHandler = a.proxy(t.selectHandler, t), t.setPosition = a.proxy(t.setPosition, t), t.swipeHandler = a.proxy(t.swipeHandler, t), t.dragHandler = a.proxy(t.dragHandler, t), t.keyHandler = a.proxy(t.keyHandler, t), t.instanceUid = o++, t.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, t.registerBreakpoints(), t.init(!0)
    }).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, r.prototype.addSlide = r.prototype.slickAdd = function(i, e, t) {
        var o = this;
        if ("boolean" == typeof e) t = e, e = null;
        else if (e < 0 || e >= o.slideCount) return !1;
        o.unload(), "number" == typeof e ? 0 === e && 0 === o.$slides.length ? a(i).appendTo(o.$slideTrack) : t ? a(i).insertBefore(o.$slides.eq(e)) : a(i).insertAfter(o.$slides.eq(e)) : !0 === t ? a(i).prependTo(o.$slideTrack) : a(i).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(i, e) {
            a(e).attr("data-slick-index", i)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, r.prototype.animateHeight = function() {
        var i, e = this;
        1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical && (i = e.$slides.eq(e.currentSlide).outerHeight(!0), e.$list.animate({
            height: i
        }, e.options.speed))
    }, r.prototype.animateSlide = function(i, e) {
        var t = {},
            o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (i = -i), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: i
        }, o.options.speed, o.options.easing, e) : o.$slideTrack.animate({
            top: i
        }, o.options.speed, o.options.easing, e) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), a({
            animStart: o.currentLeft
        }).animate({
            animStart: i
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(i) {
                i = Math.ceil(i), !1 === o.options.vertical ? t[o.animType] = "translate(" + i + "px, 0px)" : t[o.animType] = "translate(0px," + i + "px)", o.$slideTrack.css(t)
            },
            complete: function() {
                e && e.call()
            }
        })) : (o.applyTransition(), i = Math.ceil(i), !1 === o.options.vertical ? t[o.animType] = "translate3d(" + i + "px, 0px, 0px)" : t[o.animType] = "translate3d(0px," + i + "px, 0px)", o.$slideTrack.css(t), e && setTimeout(function() {
            o.disableTransition(), e.call()
        }, o.options.speed))
    }, r.prototype.getNavTarget = function() {
        var i = this.options.asNavFor;
        return i && null !== i && (i = a(i).not(this.$slider)), i
    }, r.prototype.asNavFor = function(e) {
        var i = this.getNavTarget();
        null !== i && "object" == typeof i && i.each(function() {
            var i = a(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        })
    }, r.prototype.applyTransition = function(i) {
        var e = this,
            t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, (!1 === e.options.fade ? e.$slideTrack : e.$slides.eq(i)).css(t)
    }, r.prototype.autoPlay = function() {
        var i = this;
        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }, r.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, r.prototype.autoPlayIterator = function() {
        var i = this,
            e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
    }, r.prototype.buildArrows = function() {
        var i = this;
        !0 === i.options.arrows && (i.$prevArrow = a(i.options.prevArrow).addClass("slick-arrow"), i.$nextArrow = a(i.options.nextArrow).addClass("slick-arrow"), i.slideCount > i.options.slidesToShow ? (i.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.prependTo(i.options.appendArrows), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.appendTo(i.options.appendArrows), !0 !== i.options.infinite && i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : i.$prevArrow.add(i.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, r.prototype.buildDots = function() {
        var i, e, t = this;
        if (!0 === t.options.dots && t.slideCount > t.options.slidesToShow) {
            for (t.$slider.addClass("slick-dotted"), e = a("<ul />").addClass(t.options.dotsClass), i = 0; i <= t.getDotCount(); i += 1) e.append(a("<li />").append(t.options.customPaging.call(this, t, i)));
            t.$dots = e.appendTo(t.options.appendDots), t.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, r.prototype.buildOut = function() {
        var i = this;
        i.$slides = i.$slider.children(i.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), i.slideCount = i.$slides.length, i.$slides.each(function(i, e) {
            a(e).attr("data-slick-index", i).data("originalStyling", a(e).attr("style") || "")
        }), i.$slider.addClass("slick-slider"), i.$slideTrack = 0 === i.slideCount ? a('<div class="slick-track"/>').appendTo(i.$slider) : i.$slides.wrapAll('<div class="slick-track"/>').parent(), i.$list = i.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), i.$slideTrack.css("opacity", 0), !0 !== i.options.centerMode && !0 !== i.options.swipeToSlide || (i.options.slidesToScroll = 1), a("img[data-lazy]", i.$slider).not("[src]").addClass("slick-loading"), i.setupInfinite(), i.buildArrows(), i.buildDots(), i.updateDots(), i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0), !0 === i.options.draggable && i.$list.addClass("draggable")
    }, r.prototype.buildRows = function() {
        var i, e, t, o = this,
            s = document.createDocumentFragment(),
            n = o.$slider.children();
        if (1 < o.options.rows) {
            for (t = o.options.slidesPerRow * o.options.rows, e = Math.ceil(n.length / t), i = 0; i < e; i++) {
                for (var r = document.createElement("div"), l = 0; l < o.options.rows; l++) {
                    for (var d = document.createElement("div"), a = 0; a < o.options.slidesPerRow; a++) {
                        var c = i * t + (l * o.options.slidesPerRow + a);
                        n.get(c) && d.appendChild(n.get(c))
                    }
                    r.appendChild(d)
                }
                s.appendChild(r)
            }
            o.$slider.empty().append(s), o.$slider.children().children().children().css({
                width: 100 / o.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, r.prototype.checkResponsive = function(i, e) {
        var t, o, s, n = this,
            r = !1,
            l = n.$slider.width(),
            d = window.innerWidth || a(window).width();
        if ("window" === n.respondTo ? s = d : "slider" === n.respondTo ? s = l : "min" === n.respondTo && (s = Math.min(d, l)), n.options.responsive && n.options.responsive.length && null !== n.options.responsive) {
            for (t in o = null, n.breakpoints) n.breakpoints.hasOwnProperty(t) && (!1 === n.originalSettings.mobileFirst ? s < n.breakpoints[t] && (o = n.breakpoints[t]) : s > n.breakpoints[t] && (o = n.breakpoints[t]));
            null !== o ? null !== n.activeBreakpoint && o === n.activeBreakpoint && !e || (n.activeBreakpoint = o, "unslick" === n.breakpointSettings[o] ? n.unslick(o) : (n.options = a.extend({}, n.originalSettings, n.breakpointSettings[o]), !0 === i && (n.currentSlide = n.options.initialSlide), n.refresh(i)), r = o) : null !== n.activeBreakpoint && (n.activeBreakpoint = null, n.options = n.originalSettings, !0 === i && (n.currentSlide = n.options.initialSlide), n.refresh(i), r = o), i || !1 === r || n.$slider.trigger("breakpoint", [n, r])
        }
    }, r.prototype.changeSlide = function(i, e) {
        var t, o = this,
            s = a(i.currentTarget);
        switch (s.is("a") && i.preventDefault(), s.is("li") || (s = s.closest("li")), t = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, i.data.message) {
            case "previous":
                n = 0 == t ? o.options.slidesToScroll : o.options.slidesToShow - t, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - n, !1, e);
                break;
            case "next":
                n = 0 == t ? o.options.slidesToScroll : t, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + n, !1, e);
                break;
            case "index":
                var n = 0 === i.data.index ? 0 : i.data.index || s.index() * o.options.slidesToScroll;
                o.slideHandler(o.checkNavigable(n), !1, e), s.children().trigger("focus");
                break;
            default:
                return
        }
    }, r.prototype.checkNavigable = function(i) {
        var e = this.getNavigableIndexes(),
            t = 0;
        if (i > e[e.length - 1]) i = e[e.length - 1];
        else
            for (var o in e) {
                if (i < e[o]) {
                    i = t;
                    break
                }
                t = e[o]
            }
        return i
    }, r.prototype.cleanUpEvents = function() {
        var i = this;
        i.options.dots && null !== i.$dots && a("li", i.$dots).off("click.slick", i.changeSlide).off("mouseenter.slick", a.proxy(i.interrupt, i, !0)).off("mouseleave.slick", a.proxy(i.interrupt, i, !1)), i.$slider.off("focus.slick blur.slick"), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow && i.$prevArrow.off("click.slick", i.changeSlide), i.$nextArrow && i.$nextArrow.off("click.slick", i.changeSlide)), i.$list.off("touchstart.slick mousedown.slick", i.swipeHandler), i.$list.off("touchmove.slick mousemove.slick", i.swipeHandler), i.$list.off("touchend.slick mouseup.slick", i.swipeHandler), i.$list.off("touchcancel.slick mouseleave.slick", i.swipeHandler), i.$list.off("click.slick", i.clickHandler), a(document).off(i.visibilityChange, i.visibility), i.cleanUpSlideEvents(), !0 === i.options.accessibility && i.$list.off("keydown.slick", i.keyHandler), !0 === i.options.focusOnSelect && a(i.$slideTrack).children().off("click.slick", i.selectHandler), a(window).off("orientationchange.slick.slick-" + i.instanceUid, i.orientationChange), a(window).off("resize.slick.slick-" + i.instanceUid, i.resize), a("[draggable!=true]", i.$slideTrack).off("dragstart", i.preventDefault), a(window).off("load.slick.slick-" + i.instanceUid, i.setPosition), a(document).off("ready.slick.slick-" + i.instanceUid, i.setPosition)
    }, r.prototype.cleanUpSlideEvents = function() {
        var i = this;
        i.$list.off("mouseenter.slick", a.proxy(i.interrupt, i, !0)), i.$list.off("mouseleave.slick", a.proxy(i.interrupt, i, !1))
    }, r.prototype.cleanUpRows = function() {
        var i;
        1 < this.options.rows && ((i = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(i))
    }, r.prototype.clickHandler = function(i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
    }, r.prototype.destroy = function(i) {
        var e = this;
        e.autoPlayClear(), e.touchObject = {}, e.cleanUpEvents(), a(".slick-cloned", e.$slider).detach(), e.$dots && e.$dots.remove(), e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()), e.$nextArrow && e.$nextArrow.length && (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()), e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            a(this).attr("style", a(this).data("originalStyling"))
        }), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.detach(), e.$list.detach(), e.$slider.append(e.$slides)), e.cleanUpRows(), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.$slider.removeClass("slick-dotted"), e.unslicked = !0, i || e.$slider.trigger("destroy", [e])
    }, r.prototype.disableTransition = function(i) {
        var e = {};
        e[this.transitionType] = "", (!1 === this.options.fade ? this.$slideTrack : this.$slides.eq(i)).css(e)
    }, r.prototype.fadeSlide = function(i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({
            zIndex: t.options.zIndex
        }), t.$slides.eq(i).animate({
            opacity: 1
        }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }), e && setTimeout(function() {
            t.disableTransition(i), e.call()
        }, t.options.speed))
    }, r.prototype.fadeSlideOut = function(i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, r.prototype.filterSlides = r.prototype.slickFilter = function(i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
    }, r.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
            i.stopImmediatePropagation();
            var e = a(this);
            setTimeout(function() {
                t.options.pauseOnFocus && (t.focussed = e.is(":focus"), t.autoPlay())
            }, 0)
        })
    }, r.prototype.getCurrent = r.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, r.prototype.getDotCount = function() {
        var i = this,
            e = 0,
            t = 0,
            o = 0;
        if (!0 === i.options.infinite)
            for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else if (!0 === i.options.centerMode) o = i.slideCount;
        else if (i.options.asNavFor)
            for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }, r.prototype.getLeft = function(i) {
        var e, t = this,
            o = 0;
        return t.slideOffset = 0, e = t.$slides.first().outerHeight(!0), !0 === t.options.infinite ? (t.slideCount > t.options.slidesToShow && (t.slideOffset = t.slideWidth * t.options.slidesToShow * -1, o = e * t.options.slidesToShow * -1), t.slideCount % t.options.slidesToScroll != 0 && i + t.options.slidesToScroll > t.slideCount && t.slideCount > t.options.slidesToShow && (o = i > t.slideCount ? (t.slideOffset = (t.options.slidesToShow - (i - t.slideCount)) * t.slideWidth * -1, (t.options.slidesToShow - (i - t.slideCount)) * e * -1) : (t.slideOffset = t.slideCount % t.options.slidesToScroll * t.slideWidth * -1, t.slideCount % t.options.slidesToScroll * e * -1))) : i + t.options.slidesToShow > t.slideCount && (t.slideOffset = (i + t.options.slidesToShow - t.slideCount) * t.slideWidth, o = (i + t.options.slidesToShow - t.slideCount) * e), t.slideCount <= t.options.slidesToShow && (o = t.slideOffset = 0), !0 === t.options.centerMode && !0 === t.options.infinite ? t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2) - t.slideWidth : !0 === t.options.centerMode && (t.slideOffset = 0, t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2)), e = !1 === t.options.vertical ? i * t.slideWidth * -1 + t.slideOffset : i * e * -1 + o, !0 === t.options.variableWidth && (o = t.slideCount <= t.options.slidesToShow || !1 === t.options.infinite ? t.$slideTrack.children(".slick-slide").eq(i) : t.$slideTrack.children(".slick-slide").eq(i + t.options.slidesToShow), e = !0 === t.options.rtl ? o[0] ? -1 * (t.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === t.options.centerMode && (o = t.slideCount <= t.options.slidesToShow || !1 === t.options.infinite ? t.$slideTrack.children(".slick-slide").eq(i) : t.$slideTrack.children(".slick-slide").eq(i + t.options.slidesToShow + 1), e = !0 === t.options.rtl ? o[0] ? -1 * (t.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (t.$list.width() - o.outerWidth()) / 2)), e
    }, r.prototype.getOption = r.prototype.slickGetOption = function(i) {
        return this.options[i]
    }, r.prototype.getNavigableIndexes = function() {
        for (var i = this, e = 0, t = 0, o = [], s = !1 === i.options.infinite ? i.slideCount : (e = -1 * i.options.slidesToScroll, t = -1 * i.options.slidesToScroll, 2 * i.slideCount); e < s;) o.push(e), e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        return o
    }, r.prototype.getSlick = function() {
        return this
    }, r.prototype.getSlideCount = function() {
        var t, o = this,
            s = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0;
        return !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(i, e) {
            if (e.offsetLeft - s + a(e).outerWidth() / 2 > -1 * o.swipeLeft) return t = e, !1
        }), Math.abs(a(t).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, r.prototype.goTo = r.prototype.slickGoTo = function(i, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(i)
            }
        }, e)
    }, r.prototype.init = function(i) {
        var e = this;
        a(e.$slider).hasClass("slick-initialized") || (a(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots(), e.checkResponsive(!0), e.focusHandler()), i && e.$slider.trigger("init", [e]), !0 === e.options.accessibility && e.initADA(), e.options.autoplay && (e.paused = !1, e.autoPlay())
    }, r.prototype.initADA = function() {
        var e = this;
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
            a(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + e.instanceUid + i
            })
        }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(i) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + e.instanceUid + i,
                id: "slick-slide" + e.instanceUid + i
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
    }, r.prototype.initArrowEvents = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, i.changeSlide))
    }, r.prototype.initDotEvents = function() {
        var i = this;
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && a("li", i.$dots).on("click.slick", {
            message: "index"
        }, i.changeSlide), !0 === i.options.dots && !0 === i.options.pauseOnDotsHover && a("li", i.$dots).on("mouseenter.slick", a.proxy(i.interrupt, i, !0)).on("mouseleave.slick", a.proxy(i.interrupt, i, !1))
    }, r.prototype.initSlideEvents = function() {
        var i = this;
        i.options.pauseOnHover && (i.$list.on("mouseenter.slick", a.proxy(i.interrupt, i, !0)), i.$list.on("mouseleave.slick", a.proxy(i.interrupt, i, !1)))
    }, r.prototype.initializeEvents = function() {
        var i = this;
        i.initArrowEvents(), i.initDotEvents(), i.initSlideEvents(), i.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, i.swipeHandler), i.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, i.swipeHandler), i.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, i.swipeHandler), i.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, i.swipeHandler), i.$list.on("click.slick", i.clickHandler), a(document).on(i.visibilityChange, a.proxy(i.visibility, i)), !0 === i.options.accessibility && i.$list.on("keydown.slick", i.keyHandler), !0 === i.options.focusOnSelect && a(i.$slideTrack).children().on("click.slick", i.selectHandler), a(window).on("orientationchange.slick.slick-" + i.instanceUid, a.proxy(i.orientationChange, i)), a(window).on("resize.slick.slick-" + i.instanceUid, a.proxy(i.resize, i)), a("[draggable!=true]", i.$slideTrack).on("dragstart", i.preventDefault), a(window).on("load.slick.slick-" + i.instanceUid, i.setPosition), a(document).on("ready.slick.slick-" + i.instanceUid, i.setPosition)
    }, r.prototype.initUI = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }, r.prototype.keyHandler = function(i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }, r.prototype.lazyLoad = function() {
        var i, e, o = this;

        function t(i) {
            a("img[data-lazy]", i).each(function() {
                var i = a(this),
                    e = a(this).attr("data-lazy"),
                    t = document.createElement("img");
                t.onload = function() {
                    i.animate({
                        opacity: 0
                    }, 100, function() {
                        i.attr("src", e).animate({
                            opacity: 1
                        }, 200, function() {
                            i.removeAttr("data-lazy").removeClass("slick-loading")
                        }), o.$slider.trigger("lazyLoaded", [o, i, e])
                    })
                }, t.onerror = function() {
                    i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, i, e])
                }, t.src = e
            })
        }!0 === o.options.centerMode ? e = !0 === o.options.infinite ? (i = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (i = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (i = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, e = Math.ceil(i + o.options.slidesToShow), !0 === o.options.fade && (0 < i && i--, e <= o.slideCount && e++)), t(o.$slider.find(".slick-slide").slice(i, e)), o.slideCount <= o.options.slidesToShow ? t(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? t(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && t(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
    }, r.prototype.loadSlider = function() {
        var i = this;
        i.setPosition(), i.$slideTrack.css({
            opacity: 1
        }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }, r.prototype.next = r.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, r.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition()
    }, r.prototype.pause = r.prototype.slickPause = function() {
        this.autoPlayClear(), this.paused = !0
    }, r.prototype.play = r.prototype.slickPlay = function() {
        var i = this;
        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
    }, r.prototype.postSlide = function(i) {
        var e = this;
        e.unslicked || (e.$slider.trigger("afterChange", [e, i]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), !0 === e.options.accessibility && e.initADA())
    }, r.prototype.prev = r.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, r.prototype.preventDefault = function(i) {
        i.preventDefault()
    }, r.prototype.progressiveLazyLoad = function(i) {
        i = i || 1;
        var e, t, o = this,
            s = a("img[data-lazy]", o.$slider);
        s.length ? (e = s.first(), t = e.attr("data-lazy"), (s = document.createElement("img")).onload = function() {
            e.attr("src", t).removeAttr("data-lazy").removeClass("slick-loading"), !0 === o.options.adaptiveHeight && o.setPosition(), o.$slider.trigger("lazyLoaded", [o, e, t]), o.progressiveLazyLoad()
        }, s.onerror = function() {
            i < 3 ? setTimeout(function() {
                o.progressiveLazyLoad(i + 1)
            }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, e, t]), o.progressiveLazyLoad())
        }, s.src = t) : o.$slider.trigger("allImagesLoaded", [o])
    }, r.prototype.refresh = function(i) {
        var e = this,
            t = e.slideCount - e.options.slidesToShow;
        !e.options.infinite && e.currentSlide > t && (e.currentSlide = t), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), t = e.currentSlide, e.destroy(!0), a.extend(e, e.initials, {
            currentSlide: t
        }), e.init(), i || e.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }, r.prototype.registerBreakpoints = function() {
        var i, e, t, o = this,
            s = o.options.responsive || null;
        if ("array" === a.type(s) && s.length) {
            for (i in o.respondTo = o.options.respondTo || "window", s)
                if (t = o.breakpoints.length - 1, e = s[i].breakpoint, s.hasOwnProperty(i)) {
                    for (; 0 <= t;) o.breakpoints[t] && o.breakpoints[t] === e && o.breakpoints.splice(t, 1), t--;
                    o.breakpoints.push(e), o.breakpointSettings[e] = s[i].settings
                }
            o.breakpoints.sort(function(i, e) {
                return o.options.mobileFirst ? i - e : e - i
            })
        }
    }, r.prototype.reinit = function() {
        var i = this;
        i.$slides = i.$slideTrack.children(i.options.slide).addClass("slick-slide"), i.slideCount = i.$slides.length, i.currentSlide >= i.slideCount && 0 !== i.currentSlide && (i.currentSlide = i.currentSlide - i.options.slidesToScroll), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), i.registerBreakpoints(), i.setProps(), i.setupInfinite(), i.buildArrows(), i.updateArrows(), i.initArrowEvents(), i.buildDots(), i.updateDots(), i.initDotEvents(), i.cleanUpSlideEvents(), i.initSlideEvents(), i.checkResponsive(!1, !0), !0 === i.options.focusOnSelect && a(i.$slideTrack).children().on("click.slick", i.selectHandler), i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0), i.setPosition(), i.focusHandler(), i.paused = !i.options.autoplay, i.autoPlay(), i.$slider.trigger("reInit", [i])
    }, r.prototype.resize = function() {
        var i = this;
        a(window).width() !== i.windowWidth && (clearTimeout(i.windowDelay), i.windowDelay = window.setTimeout(function() {
            i.windowWidth = a(window).width(), i.checkResponsive(), i.unslicked || i.setPosition()
        }, 50))
    }, r.prototype.removeSlide = r.prototype.slickRemove = function(i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
        o.unload(), (!0 === t ? o.$slideTrack.children() : o.$slideTrack.children(this.options.slide).eq(i)).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
    }, r.prototype.setCSS = function(i) {
        var e, t, o = this,
            s = {};
        !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled || (!(s = {}) === o.cssTransitions ? s[o.animType] = "translate(" + e + ", " + t + ")" : s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"), o.$slideTrack.css(s)
    }, r.prototype.setDimensions = function() {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
            padding: "0px " + i.options.centerPadding
        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
            padding: i.options.centerPadding + " 0px"
        })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }, r.prototype.setFade = function() {
        var t, o = this;
        o.$slides.each(function(i, e) {
            t = o.slideWidth * i * -1, !0 === o.options.rtl ? a(e).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0
            }) : a(e).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0
            })
        }), o.$slides.eq(o.currentSlide).css({
            zIndex: o.options.zIndex - 1,
            opacity: 1
        })
    }, r.prototype.setHeight = function() {
        var i, e = this;
        1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical && (i = e.$slides.eq(e.currentSlide).outerHeight(!0), e.$list.css("height", i))
    }, r.prototype.setOption = r.prototype.slickSetOption = function() {
        var i, e, t, o, s, n = this,
            r = !1;
        if ("object" === a.type(arguments[0]) ? (t = arguments[0], r = arguments[1], s = "multiple") : "string" === a.type(arguments[0]) && (t = arguments[0], o = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) n.options[t] = o;
        else if ("multiple" === s) a.each(t, function(i, e) {
            n.options[i] = e
        });
        else if ("responsive" === s)
            for (e in o)
                if ("array" !== a.type(n.options.responsive)) n.options.responsive = [o[e]];
                else {
                    for (i = n.options.responsive.length - 1; 0 <= i;) n.options.responsive[i].breakpoint === o[e].breakpoint && n.options.responsive.splice(i, 1), i--;
                    n.options.responsive.push(o[e])
                }
        r && (n.unload(), n.reinit())
    }, r.prototype.setPosition = function() {
        var i = this;
        i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
    }, r.prototype.setProps = function() {
        var i = this,
            e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }, r.prototype.setSlideClasses = function(i) {
        var e, t, o = this,
            s = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
        o.$slides.eq(i).addClass("slick-current"), !0 === o.options.centerMode ? (t = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (t <= i && i <= o.slideCount - 1 - t ? o.$slides.slice(i - t, i + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = o.options.slidesToShow + i, s.slice(e - t + 1, e + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? s.eq(s.length - 1 - o.options.slidesToShow).addClass("slick-center") : i === o.slideCount - 1 && s.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(i).addClass("slick-center")) : 0 <= i && i <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(i, i + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : s.length <= o.options.slidesToShow ? s.addClass("slick-active").attr("aria-hidden", "false") : (t = o.slideCount % o.options.slidesToShow, e = !0 === o.options.infinite ? o.options.slidesToShow + i : i, (o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - i < o.options.slidesToShow ? s.slice(e - (o.options.slidesToShow - t), e + t) : s.slice(e, e + o.options.slidesToShow)).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === o.options.lazyLoad && o.lazyLoad()
    }, r.prototype.setupInfinite = function() {
        var i, e, t, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (e = null, o.slideCount > o.options.slidesToShow)) {
            for (t = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, i = o.slideCount; i > o.slideCount - t; --i) e = i - 1, a(o.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (i = 0; i < t; i += 1) e = i, a(o.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    }, r.prototype.interrupt = function(i) {
        i || this.autoPlay(), this.interrupted = i
    }, r.prototype.selectHandler = function(i) {
        var e = this,
            i = a(i.target).is(".slick-slide") ? a(i.target) : a(i.target).parents(".slick-slide"),
            i = (i = parseInt(i.attr("data-slick-index"))) || 0;
        if (e.slideCount <= e.options.slidesToShow) return e.setSlideClasses(i), void e.asNavFor(i);
        e.slideHandler(i)
    }, r.prototype.slideHandler = function(i, e, t) {
        var o, s, n, r, l = this;
        if (e = e || !1, (!0 !== l.animating || !0 !== l.options.waitForAnimate) && !(!0 === l.options.fade && l.currentSlide === i || l.slideCount <= l.options.slidesToShow))
            if (!1 === e && l.asNavFor(i), o = i, n = l.getLeft(o), e = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? e : l.swipeLeft, !1 === l.options.infinite && !1 === l.options.centerMode && (i < 0 || i > l.getDotCount() * l.options.slidesToScroll)) !1 === l.options.fade && (o = l.currentSlide, !0 !== t ? l.animateSlide(e, function() {
                l.postSlide(o)
            }) : l.postSlide(o));
            else if (!1 === l.options.infinite && !0 === l.options.centerMode && (i < 0 || i > l.slideCount - l.options.slidesToScroll)) !1 === l.options.fade && (o = l.currentSlide, !0 !== t ? l.animateSlide(e, function() {
            l.postSlide(o)
        }) : l.postSlide(o));
        else {
            if (l.options.autoplay && clearInterval(l.autoPlayTimer), s = o < 0 ? l.slideCount % l.options.slidesToScroll != 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + o : o >= l.slideCount ? l.slideCount % l.options.slidesToScroll != 0 ? 0 : o - l.slideCount : o, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, s]), e = l.currentSlide, l.currentSlide = s, l.setSlideClasses(l.currentSlide), l.options.asNavFor && (r = (r = l.getNavTarget()).slick("getSlick")).slideCount <= r.options.slidesToShow && r.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), !0 === l.options.fade) return !0 !== t ? (l.fadeSlideOut(e), l.fadeSlide(s, function() {
                l.postSlide(s)
            })) : l.postSlide(s), void l.animateHeight();
            !0 !== t ? l.animateSlide(n, function() {
                l.postSlide(s)
            }) : l.postSlide(s)
        }
    }, r.prototype.startLoad = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
    }, r.prototype.swipeDirection = function() {
        var i = this,
            e = i.touchObject.startX - i.touchObject.curX,
            t = i.touchObject.startY - i.touchObject.curY,
            e = Math.atan2(t, e),
            e = Math.round(180 * e / Math.PI);
        return e < 0 && (e = 360 - Math.abs(e)), e <= 45 && 0 <= e || e <= 360 && 315 <= e ? !1 === i.options.rtl ? "left" : "right" : 135 <= e && e <= 225 ? !1 === i.options.rtl ? "right" : "left" : !0 === i.options.verticalSwiping ? 35 <= e && e <= 135 ? "down" : "up" : "vertical"
    }, r.prototype.swipeEnd = function(i) {
        var e, t, o = this;
        if (o.dragging = !1, o.interrupted = !1, o.shouldClick = !(10 < o.touchObject.swipeLength), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
                case "left":
                case "down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, r.prototype.swipeHandler = function(i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i)
        }
    }, r.prototype.swipeMove = function(i) {
        var e, t, o = this,
            s = void 0 !== i.originalEvent ? i.originalEvent.touches : null;
        return !(!o.dragging || s && 1 !== s.length) && (e = o.getLeft(o.currentSlide), o.touchObject.curX = void 0 !== s ? s[0].pageX : i.clientX, o.touchObject.curY = void 0 !== s ? s[0].pageY : i.clientY, o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curX - o.touchObject.startX, 2))), !0 === o.options.verticalSwiping && (o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curY - o.touchObject.startY, 2)))), "vertical" !== (t = o.swipeDirection()) ? (void 0 !== i.originalEvent && 4 < o.touchObject.swipeLength && i.preventDefault(), s = (!1 === o.options.rtl ? 1 : -1) * (o.touchObject.curX > o.touchObject.startX ? 1 : -1), !0 === o.options.verticalSwiping && (s = o.touchObject.curY > o.touchObject.startY ? 1 : -1), i = o.touchObject.swipeLength, (o.touchObject.edgeHit = !1) === o.options.infinite && (0 === o.currentSlide && "right" === t || o.currentSlide >= o.getDotCount() && "left" === t) && (i = o.touchObject.swipeLength * o.options.edgeFriction, o.touchObject.edgeHit = !0), !1 === o.options.vertical ? o.swipeLeft = e + i * s : o.swipeLeft = e + i * (o.$list.height() / o.listWidth) * s, !0 === o.options.verticalSwiping && (o.swipeLeft = e + i * s), !0 !== o.options.fade && !1 !== o.options.touchMove && (!0 === o.animating ? (o.swipeLeft = null, !1) : void o.setCSS(o.swipeLeft))) : void 0)
    }, r.prototype.swipeStart = function(i) {
        var e, t = this;
        if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return !(t.touchObject = {});
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
    }, r.prototype.unfilterSlides = r.prototype.slickUnfilter = function() {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
    }, r.prototype.unload = function() {
        var i = this;
        a(".slick-cloned", i.$slider).remove(), i.$dots && i.$dots.remove(), i.$prevArrow && i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove(), i.$nextArrow && i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove(), i.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, r.prototype.unslick = function(i) {
        this.$slider.trigger("unslick", [this, i]), this.destroy()
    }, r.prototype.updateArrows = function() {
        var i = this;
        Math.floor(i.options.slidesToShow / 2);
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode || i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode) && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, r.prototype.updateDots = function() {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, r.prototype.visibility = function() {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }, a.fn.slick = function() {
        for (var i, e = this, t = arguments[0], o = Array.prototype.slice.call(arguments, 1), s = e.length, n = 0; n < s; n++)
            if ("object" == typeof t || void 0 === t ? e[n].slick = new r(e[n], t) : i = e[n].slick[t].apply(e[n].slick, o), void 0 !== i) return i;
        return e
    }
});


// Easy Responsive Tabs Plugin

! function(v) {
    v.fn.extend({
        easyResponsiveTabs: function(c) {
            var d = (c = v.extend({
                    type: "default",
                    width: "auto",
                    fit: !0,
                    closed: !1,
                    tabidentify: "",
                    activetab_bg: "white",
                    inactive_bg: "#F5F5F5",
                    active_border_color: "transparent",
                    active_content_border_color: "transparent",
                    activate: function() {}
                }, c)).type,
                b = c.fit,
                l = c.width,
                p = window.location.hash,
                f = !(!window.history || !history.replaceState);
            v(this).bind("tabactivate", function(t, a) {
                "function" == typeof c.activate && c.activate.call(a, t)
            }), this.each(function() {
                var e, i = v(this),
                    t = i.find("ul.resp-tabs-list." + c.tabidentify),
                    r = i.attr("id");
                i.find("ul.resp-tabs-list." + c.tabidentify + " li").addClass("resp-tab-item").addClass(c.tabidentify), i.css({
                    display: "block",
                    width: l
                }), "vertical" == c.type && t.css("margin-top", "3px"), i.find(".resp-tabs-container." + c.tabidentify).css("border-color", c.active_content_border_color), i.find(".resp-tabs-container." + c.tabidentify + " > div").addClass("resp-tab-content").addClass(c.tabidentify), "vertical" == d && i.addClass("resp-vtabs").addClass(c.tabidentify), 1 == b && i.css({
                    width: "100%",
                    margin: "0px"
                }), "accordion" == d && (i.addClass("resp-easy-accordion").addClass(c.tabidentify), i.find(".resp-tabs-list").css("display", "none")), i.find(".resp-tab-content." + c.tabidentify).before("<h2 class='resp-accordion " + c.tabidentify + "' role='tab'><span class='resp-arrow'></span></h2>"), i.find(".resp-tab-content." + c.tabidentify).prev("h2").css({
                    "background-color": c.inactive_bg,
                    "border-color": c.active_border_color
                });
                var s = 0;
                i.find(".resp-accordion").each(function() {
                    e = v(this);
                    var t = i.find(".resp-tab-item:eq(" + s + ")"),
                        a = i.find(".resp-accordion:eq(" + s + ")");
                    a.append(t.html()), a.data(t.data()), e.attr("aria-controls", c.tabidentify + "_tab_item-" + s), s++
                });
                var a = 0;
                i.find(".resp-tab-item").each(function() {
                    $tabItem = v(this), $tabItem.attr("aria-controls", c.tabidentify + "_tab_item-" + a), $tabItem.attr("role", "tab"), $tabItem.css({
                        "background-color": c.inactive_bg,
                        "border-color": "none"
                    });
                    var t = 0;
                    i.find(".resp-tab-content." + c.tabidentify).each(function() {
                        v(this).attr("aria-labelledby", c.tabidentify + "_tab_item-" + t).css({
                            "border-color": c.active_border_color
                        }), t++
                    }), a++
                });
                var o, n = 0;
                "" == p || null !== (o = p.match(new RegExp(r + "([0-9]+)"))) && 2 === o.length && (n = parseInt(o[1], 10) - 1, a < n && (n = 0)), v(i.find(".resp-tab-item." + c.tabidentify)[n]).addClass("resp-tab-active").css({
                    "background-color": c.activetab_bg,
                    "border-color": c.active_border_color
                }), !0 === c.closed || "accordion" === c.closed && !t.is(":visible") || "tabs" === c.closed && t.is(":visible") || (v(i.find(".resp-accordion." + c.tabidentify)[n]).addClass("resp-tab-active").css({
                    "background-color": c.activetab_bg + " !important",
                    "border-color": c.active_border_color,
                    background: "none"
                }), v(i.find(".resp-tab-content." + c.tabidentify)[n]).addClass("resp-tab-content-active").addClass(c.tabidentify).attr("style", "display:block")), i.find("[role=tab]").each(function() {
                    v(this).click(function() {
                        var t, a = v(this),
                            e = a.attr("aria-controls");
                        if (a.hasClass("resp-accordion") && a.hasClass("resp-tab-active")) return i.find(".resp-tab-content-active." + c.tabidentify).slideUp("", function() {
                            v(this).addClass("resp-accordion-closed")
                        }), a.removeClass("resp-tab-active").css({
                            "background-color": c.inactive_bg,
                            "border-color": "none"
                        }), !1;
                        !a.hasClass("resp-tab-active") && a.hasClass("resp-accordion") ? (i.find(".resp-tab-active." + c.tabidentify).removeClass("resp-tab-active").css({
                            "background-color": c.inactive_bg,
                            "border-color": "none"
                        }), i.find(".resp-tab-content-active." + c.tabidentify).slideUp().removeClass("resp-tab-content-active resp-accordion-closed"), i.find("[aria-controls=" + e + "]").addClass("resp-tab-active").css({
                            "background-color": c.activetab_bg,
                            "border-color": c.active_border_color
                        }), i.find(".resp-tab-content[aria-labelledby = " + e + "]." + c.tabidentify).slideDown().addClass("resp-tab-content-active")) : (i.find(".resp-tab-active." + c.tabidentify).removeClass("resp-tab-active").css({
                            "background-color": c.inactive_bg,
                            "border-color": "none"
                        }), i.find(".resp-tab-content-active." + c.tabidentify).removeAttr("style").removeClass("resp-tab-content-active").removeClass("resp-accordion-closed"), i.find("[aria-controls=" + e + "]").addClass("resp-tab-active").css({
                            "background-color": c.activetab_bg,
                            "border-color": c.active_border_color
                        }), i.find(".resp-tab-content[aria-labelledby = " + e + "]." + c.tabidentify).addClass("resp-tab-content-active").attr("style", "display:block")), a.trigger("tabactivate", a), f && (t = window.location.hash, a = e.split("tab_item-"), e = r + (parseInt(a[1], 10) + 1).toString(), e = "" != t ? (a = new RegExp(r + "[0-9]+"), null != t.match(a) ? t.replace(a, e) : t + "|" + e) : "#" + e, history.replaceState(null, null, e))
                    })
                }), v(window).resize(function() {
                    i.find(".resp-accordion-closed").removeAttr("style")
                })
            })
        }
    })
}(jQuery);

/*! KineticJS v5.1.0 2014-03-27 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KineticJS/wiki/License*/
var Kinetic = {};
! function(t) {
    var e, i = Math.PI / 180;
    Kinetic = {
        version: "5.1.0",
        stages: [],
        idCounter: 0,
        ids: {},
        names: {},
        shapes: {},
        listenClickTap: !1,
        inDblClickWindow: !1,
        enableTrace: !1,
        traceArrMax: 100,
        dblClickWindow: 400,
        pixelRatio: void 0,
        dragDistance: 0,
        angleDeg: !0,
        UA: (e = t.navigator && t.navigator.userAgent || "", t = e.toLowerCase(), t = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [], e = !!e.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i), {
            browser: t[1] || "",
            version: t[2] || "0",
            mobile: e
        }),
        Filters: {},
        Node: function(t) {
            this._init(t)
        },
        Shape: function(t) {
            this.__init(t)
        },
        Container: function(t) {
            this.__init(t)
        },
        Stage: function(t) {
            this.___init(t)
        },
        BaseLayer: function(t) {
            this.___init(t)
        },
        Layer: function(t) {
            this.____init(t)
        },
        FastLayer: function(t) {
            this.____init(t)
        },
        Group: function(t) {
            this.___init(t)
        },
        isDragging: function() {
            var t = Kinetic.DD;
            return !!t && t.isDragging
        },
        isDragReady: function() {
            var t = Kinetic.DD;
            return !!t && !!t.node
        },
        _addId: function(t, e) {
            void 0 !== e && (this.ids[e] = t)
        },
        _removeId: function(t) {
            void 0 !== t && delete this.ids[t]
        },
        _addName: function(t, e) {
            void 0 !== e && (void 0 === this.names[e] && (this.names[e] = []), this.names[e].push(t))
        },
        _removeName: function(t, e) {
            if (void 0 !== t) {
                var i = this.names[t];
                if (void 0 !== i) {
                    for (var n = 0; n < i.length; n++) i[n]._id === e && i.splice(n, 1);
                    0 === i.length && delete this.names[t]
                }
            }
        },
        getAngle: function(t) {
            return this.angleDeg ? t * i : t
        }
    }
}(this),
function(t, e) {
    if ("object" == typeof exports) {
        var i = require("canvas"),
            n = (0, require("jsdom").jsdom)("<!DOCTYPE html><html><head></head><body></body></html>"),
            a = e();
        return Kinetic.document = n, Kinetic.window = Kinetic.document.createWindow(), Kinetic.window.Image = i.Image, Kinetic.root = t, Kinetic._nodeCanvas = i, module.exports = a
    }
    "function" == typeof define && define.amd && define(e), Kinetic.document = document, Kinetic.window = window, Kinetic.root = t
}((0, eval)("this"), function() {
    return Kinetic
}),
function() {
    Kinetic.Collection = function() {
        var t = [].slice.call(arguments),
            e = t.length,
            i = 0;
        for (this.length = e; i < e; i++) this[i] = t[i];
        return this
    }, Kinetic.Collection.prototype = [], Kinetic.Collection.prototype.each = function(t) {
        for (var e = 0; e < this.length; e++) t(this[e], e)
    }, Kinetic.Collection.prototype.toArray = function() {
        for (var t = [], e = this.length, i = 0; i < e; i++) t.push(this[i]);
        return t
    }, Kinetic.Collection.toCollection = function(t) {
        for (var e = new Kinetic.Collection, i = t.length, n = 0; n < i; n++) e.push(t[n]);
        return e
    }, Kinetic.Collection._mapMethod = function(n) {
        Kinetic.Collection.prototype[n] = function() {
            for (var t = this.length, e = [].slice.call(arguments), i = 0; i < t; i++) this[i][n].apply(this[i], e);
            return this
        }
    }, Kinetic.Collection.mapMethods = function(t) {
        for (var e in t.prototype) Kinetic.Collection._mapMethod(e)
    }, Kinetic.Transform = function(t) {
        this.m = t && t.slice() || [1, 0, 0, 1, 0, 0]
    }, Kinetic.Transform.prototype = {
        copy: function() {
            return new Kinetic.Transform(this.m)
        },
        point: function(t) {
            var e = this.m;
            return {
                x: e[0] * t.x + e[2] * t.y + e[4],
                y: e[1] * t.x + e[3] * t.y + e[5]
            }
        },
        translate: function(t, e) {
            return this.m[4] += this.m[0] * t + this.m[2] * e, this.m[5] += this.m[1] * t + this.m[3] * e, this
        },
        scale: function(t, e) {
            return this.m[0] *= t, this.m[1] *= t, this.m[2] *= e, this.m[3] *= e, this
        },
        rotate: function(t) {
            var e = Math.cos(t),
                i = Math.sin(t),
                n = this.m[0] * e + this.m[2] * i,
                a = this.m[1] * e + this.m[3] * i,
                t = this.m[0] * -i + this.m[2] * e,
                e = this.m[1] * -i + this.m[3] * e;
            return this.m[0] = n, this.m[1] = a, this.m[2] = t, this.m[3] = e, this
        },
        getTranslation: function() {
            return {
                x: this.m[4],
                y: this.m[5]
            }
        },
        skew: function(t, e) {
            var i = this.m[0] + this.m[2] * e,
                n = this.m[1] + this.m[3] * e,
                e = this.m[2] + this.m[0] * t,
                t = this.m[3] + this.m[1] * t;
            return this.m[0] = i, this.m[1] = n, this.m[2] = e, this.m[3] = t, this
        },
        multiply: function(t) {
            var e = this.m[0] * t.m[0] + this.m[2] * t.m[1],
                i = this.m[1] * t.m[0] + this.m[3] * t.m[1],
                n = this.m[0] * t.m[2] + this.m[2] * t.m[3],
                a = this.m[1] * t.m[2] + this.m[3] * t.m[3],
                r = this.m[0] * t.m[4] + this.m[2] * t.m[5] + this.m[4],
                t = this.m[1] * t.m[4] + this.m[3] * t.m[5] + this.m[5];
            return this.m[0] = e, this.m[1] = i, this.m[2] = n, this.m[3] = a, this.m[4] = r, this.m[5] = t, this
        },
        invert: function() {
            var t = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]),
                e = this.m[3] * t,
                i = -this.m[1] * t,
                n = -this.m[2] * t,
                a = this.m[0] * t,
                r = t * (this.m[2] * this.m[5] - this.m[3] * this.m[4]),
                t = t * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
            return this.m[0] = e, this.m[1] = i, this.m[2] = n, this.m[3] = a, this.m[4] = r, this.m[5] = t, this
        },
        getMatrix: function() {
            return this.m
        },
        setAbsolutePosition: function(t, e) {
            var i = this.m[0],
                n = this.m[1],
                a = this.m[2],
                r = this.m[3],
                s = this.m[4],
                n = (i * (e - this.m[5]) - n * (t - s)) / (i * r - n * a),
                i = (t - s - a * n) / i;
            return this.translate(i, n)
        }
    };
    var e = Math.PI / 180,
        i = 180 / Math.PI,
        n = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        },
        a = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;
    Kinetic.Util = {
        _isElement: function(t) {
            return !(!t || 1 != t.nodeType)
        },
        _isFunction: function(t) {
            return !!(t && t.constructor && t.call && t.apply)
        },
        _isObject: function(t) {
            return !!t && t.constructor == Object
        },
        _isArray: function(t) {
            return "[object Array]" == Object.prototype.toString.call(t)
        },
        _isNumber: function(t) {
            return "[object Number]" == Object.prototype.toString.call(t)
        },
        _isString: function(t) {
            return "[object String]" == Object.prototype.toString.call(t)
        },
        _throttle: function(i, n, a) {
            var r, s, o, c = null,
                h = 0;
            a = a || {};

            function l() {
                h = !1 === a.leading ? 0 : (new Date).getTime(), c = null, o = i.apply(r, s), r = s = null
            }
            return function() {
                var t = (new Date).getTime();
                h || !1 !== a.leading || (h = t);
                var e = n - (t - h);
                return r = this, s = arguments, e <= 0 ? (clearTimeout(c), c = null, h = t, o = i.apply(r, s), r = s = null) : c || !1 === a.trailing || (c = setTimeout(l, e)), o
            }
        },
        _hasMethods: function(t) {
            var e, i = [];
            for (e in t) this._isFunction(t[e]) && i.push(e);
            return 0 < i.length
        },
        createCanvasElement: function() {
            var t = Kinetic.document.createElement("canvas");
            return t.style = t.style || {}, t
        },
        isBrowser: function() {
            return "object" != typeof exports
        },
        _isInDocument: function(t) {
            for (; t = t.parentNode;)
                if (t == Kinetic.document) return !0;
            return !1
        },
        _simplifyArray: function(t) {
            for (var e, i = [], n = t.length, a = Kinetic.Util, r = 0; r < n; r++) e = t[r], a._isNumber(e) ? e = Math.round(1e3 * e) / 1e3 : a._isString(e) || (e = e.toString()), i.push(e);
            return i
        },
        _getImage: function(t, e) {
            var i, n;
            t ? this._isElement(t) ? e(t) : this._isString(t) ? ((i = new Kinetic.window.Image).onload = function() {
                e(i)
            }, i.src = t) : t.data ? ((n = Kinetic.Util.createCanvasElement()).width = t.width, n.height = t.height, n.getContext("2d").putImageData(t, 0, 0), this._getImage(n.toDataURL(), e)) : e(null) : e(null)
        },
        _getRGBAString: function(t) {
            return ["rgba(", t.red || 0, ",", t.green || 0, ",", t.blue || 0, ",", t.alpha || 1, ")"].join("")
        },
        _rgbToHex: function(t, e, i) {
            return ((1 << 24) + (t << 16) + (e << 8) + i).toString(16).slice(1)
        },
        _hexToRgb: function(t) {
            t = t.replace("#", "");
            t = parseInt(t, 16);
            return {
                r: t >> 16 & 255,
                g: t >> 8 & 255,
                b: 255 & t
            }
        },
        getRandomColor: function() {
            for (var t = (16777215 * Math.random() << 0).toString(16); t.length < 6;) t = "0" + t;
            return "#" + t
        },
        get: function(t, e) {
            return void 0 === t ? e : t
        },
        getRGB: function(t) {
            var e;
            return t in n ? {
                r: (e = n[t])[0],
                g: e[1],
                b: e[2]
            } : "#" === t[0] ? this._hexToRgb(t.substring(1)) : "rgb(" === t.substr(0, 4) ? (e = a.exec(t.replace(/ /g, "")), {
                r: parseInt(e[1], 10),
                g: parseInt(e[2], 10),
                b: parseInt(e[3], 10)
            }) : {
                r: 0,
                g: 0,
                b: 0
            }
        },
        _merge: function(t, e) {
            var i, n = this._clone(e);
            for (i in t) n[i] = this._isObject(t[i]) ? this._merge(t[i], n[i]) : t[i];
            return n
        },
        cloneObject: function(t) {
            var e, i = {};
            for (e in t) i[e] = this._isObject(t[e]) ? this.cloneObject(t[e]) : this._isArray(t[e]) ? this.cloneArray(t[e]) : t[e];
            return i
        },
        cloneArray: function(t) {
            return t.slice(0)
        },
        _degToRad: function(t) {
            return t * e
        },
        _radToDeg: function(t) {
            return t * i
        },
        _capitalize: function(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        },
        error: function(t) {
            throw new Error("Kinetic error: " + t)
        },
        warn: function(t) {
            Kinetic.root.console && console.warn && console.warn("Kinetic warning: " + t)
        },
        extend: function(t, e) {
            for (var i in e.prototype) i in t.prototype || (t.prototype[i] = e.prototype[i])
        },
        addMethods: function(t, e) {
            for (var i in e) t.prototype[i] = e[i]
        },
        _getControlPoints: function(t, e, i, n, a, r, s) {
            var o = Math.sqrt(Math.pow(i - t, 2) + Math.pow(n - e, 2)),
                c = Math.sqrt(Math.pow(a - i, 2) + Math.pow(r - n, 2)),
                h = s * o / (o + c),
                c = s * c / (o + c);
            return [i - h * (a - t), n - h * (r - e), i + c * (a - t), n + c * (r - e)]
        },
        _expandPoints: function(t, e) {
            for (var i, n = t.length, a = [], r = 2; r < n - 2; r += 2) i = Kinetic.Util._getControlPoints(t[r - 2], t[r - 1], t[r], t[r + 1], t[r + 2], t[r + 3], e), a.push(i[0]), a.push(i[1]), a.push(t[r]), a.push(t[r + 1]), a.push(i[2]), a.push(i[3]);
            return a
        },
        _removeLastLetter: function(t) {
            return t.substring(0, t.length - 1)
        }
    }
}(),
function() {
    "use strict";
    var t = Kinetic.Util.createCanvasElement().getContext("2d"),
        e = Kinetic.UA.mobile ? (window.devicePixelRatio || 1) / (t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1) : 1;
    Kinetic.Canvas = function(t) {
        this.init(t)
    }, Kinetic.Canvas.prototype = {
        init: function(t) {
            t = (t = t || {}).pixelRatio || Kinetic.pixelRatio || e;
            this.pixelRatio = t, this._canvas = Kinetic.Util.createCanvasElement(), this._canvas.style.padding = 0, this._canvas.style.margin = 0, this._canvas.style.border = 0, this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = 0, this._canvas.style.left = 0
        },
        getContext: function() {
            return this.context
        },
        getPixelRatio: function() {
            return this.pixelRatio
        },
        setPixelRatio: function(t) {
            this.pixelRatio = t, this.setSize(this.getWidth(), this.getHeight())
        },
        setWidth: function(t) {
            this.width = this._canvas.width = t * this.pixelRatio, this._canvas.style.width = t + "px"
        },
        setHeight: function(t) {
            this.height = this._canvas.height = t * this.pixelRatio, this._canvas.style.height = t + "px"
        },
        getWidth: function() {
            return this.width
        },
        getHeight: function() {
            return this.height
        },
        setSize: function(t, e) {
            this.setWidth(t), this.setHeight(e)
        },
        toDataURL: function(t, e) {
            try {
                return this._canvas.toDataURL(t, e)
            } catch (t) {
                try {
                    return this._canvas.toDataURL()
                } catch (t) {
                    return Kinetic.Util.warn("Unable to get data URL. " + t.message), ""
                }
            }
        }
    }, Kinetic.SceneCanvas = function(t) {
        var e = (t = t || {}).width || 0,
            i = t.height || 0;
        Kinetic.Canvas.call(this, t), this.context = new Kinetic.SceneContext(this), this.setSize(e, i)
    }, Kinetic.SceneCanvas.prototype = {
        setWidth: function(t) {
            var e = this.pixelRatio,
                i = this.getContext()._context;
            Kinetic.Canvas.prototype.setWidth.call(this, t), i.scale(e, e)
        },
        setHeight: function(t) {
            var e = this.pixelRatio,
                i = this.getContext()._context;
            Kinetic.Canvas.prototype.setHeight.call(this, t), i.scale(e, e)
        }
    }, Kinetic.Util.extend(Kinetic.SceneCanvas, Kinetic.Canvas), Kinetic.HitCanvas = function(t) {
        var e = (t = t || {}).width || 0,
            i = t.height || 0;
        Kinetic.Canvas.call(this, t), this.context = new Kinetic.HitContext(this), this.setSize(e, i)
    }, Kinetic.Util.extend(Kinetic.HitCanvas, Kinetic.Canvas)
}(),
function() {
    var s = ["arc", "arcTo", "beginPath", "bezierCurveTo", "clearRect", "clip", "closePath", "createLinearGradient", "createPattern", "createRadialGradient", "drawImage", "fill", "fillText", "getImageData", "createImageData", "lineTo", "moveTo", "putImageData", "quadraticCurveTo", "rect", "restore", "rotate", "save", "scale", "setLineDash", "setTransform", "stroke", "strokeText", "transform", "translate"];
    Kinetic.Context = function(t) {
        this.init(t)
    }, Kinetic.Context.prototype = {
        init: function(t) {
            this.canvas = t, this._context = t._canvas.getContext("2d"), Kinetic.enableTrace && (this.traceArr = [], this._enableTrace())
        },
        fillShape: function(t) {
            t.getFillEnabled() && this._fill(t)
        },
        strokeShape: function(t) {
            t.getStrokeEnabled() && this._stroke(t)
        },
        fillStrokeShape: function(t) {
            t.getFillEnabled() && this._fill(t), t.getStrokeEnabled() && this._stroke(t)
        },
        getTrace: function(t) {
            for (var e, i, n, a = this.traceArr, r = a.length, s = "", o = 0; o < r; o++)(i = (e = a[o]).method) ? (n = e.args, s += i, s += t ? "()" : Kinetic.Util._isArray(n[0]) ? "([" + n.join(",") + "])" : "(" + n.join(",") + ")") : (s += e.property, t || (s += "=" + e.val)), s += ";";
            return s
        },
        clearTrace: function() {
            this.traceArr = []
        },
        _trace: function(t) {
            var e = this.traceArr;
            e.push(t), e.length >= Kinetic.traceArrMax && e.shift()
        },
        reset: function() {
            var t = this.getCanvas().getPixelRatio();
            this.setTransform(+t, 0, 0, +t, 0, 0)
        },
        getCanvas: function() {
            return this.canvas
        },
        clear: function(t) {
            var e = this.getCanvas();
            t ? this.clearRect(t.x || 0, t.y || 0, t.width || 0, t.height || 0) : this.clearRect(0, 0, e.getWidth(), e.getHeight())
        },
        _applyLineCap: function(t) {
            t = t.getLineCap();
            t && this.setAttr("lineCap", t)
        },
        _applyOpacity: function(t) {
            t = t.getAbsoluteOpacity();
            1 !== t && this.setAttr("globalAlpha", t)
        },
        _applyLineJoin: function(t) {
            t = t.getLineJoin();
            t && this.setAttr("lineJoin", t)
        },
        setAttr: function(t, e) {
            this._context[t] = e
        },
        arc: function() {
            var t = arguments;
            0 == t[0] && 0 == t[1] || this._context.arc(t[0], t[1], t[2], t[3], t[4], t[5])
        },
        beginPath: function() {
            this._context.beginPath()
        },
        bezierCurveTo: function() {
            var t = arguments;
            this._context.bezierCurveTo(t[0], t[1], t[2], t[3], t[4], t[5])
        },
        clearRect: function() {
            var t = arguments;
            this._context.clearRect(t[0], t[1], t[2], t[3])
        },
        clip: function() {
            this._context.clip()
        },
        closePath: function() {
            this._context.closePath()
        },
        createImageData: function() {
            var t = arguments;
            return 2 === t.length ? this._context.createImageData(t[0], t[1]) : 1 === t.length ? this._context.createImageData(t[0]) : void 0
        },
        createLinearGradient: function() {
            var t = arguments;
            return this._context.createLinearGradient(t[0], t[1], t[2], t[3])
        },
        createPattern: function() {
            var t = arguments;
            return this._context.createPattern(t[0], t[1])
        },
        createRadialGradient: function() {
            var t = arguments;
            return this._context.createRadialGradient(t[0], t[1], t[2], t[3], t[4], t[5])
        },
        drawImage: function() {
            var t = arguments,
                e = this._context;
            3 === t.length ? e.drawImage(t[0], t[1], t[2]) : 5 === t.length ? e.drawImage(t[0], t[1], t[2], t[3], t[4]) : 9 === t.length && e.drawImage(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8])
        },
        fill: function() {
            this._context.fill()
        },
        fillText: function() {
            var t = arguments;
            this._context.fillText(t[0], t[1], t[2])
        },
        getImageData: function() {
            var t = arguments;
            return this._context.getImageData(t[0], t[1], t[2], t[3])
        },
        lineTo: function() {
            var t = arguments;
            this._context.lineTo(t[0], t[1])
        },
        moveTo: function() {
            var t = arguments;
            this._context.moveTo(t[0], t[1])
        },
        rect: function() {
            var t = arguments;
            this._context.rect(t[0], t[1], t[2], t[3])
        },
        putImageData: function() {
            var t = arguments;
            this._context.putImageData(t[0], t[1], t[2])
        },
        quadraticCurveTo: function() {
            var t = arguments;
            this._context.quadraticCurveTo(t[0], t[1], t[2], t[3])
        },
        restore: function() {
            this._context.restore()
        },
        rotate: function() {
            var t = arguments;
            this._context.rotate(t[0])
        },
        save: function() {
            this._context.save()
        },
        scale: function() {
            var t = arguments;
            this._context.scale(t[0], t[1])
        },
        setLineDash: function() {
            var t = arguments,
                e = this._context;
            this._context.setLineDash ? e.setLineDash(t[0]) : "mozDash" in e ? e.mozDash = t[0] : "webkitLineDash" in e && (e.webkitLineDash = t[0])
        },
        setTransform: function() {
            var t = arguments;
            this._context.setTransform(t[0], t[1], t[2], t[3], t[4], t[5])
        },
        stroke: function() {
            this._context.stroke()
        },
        strokeText: function() {
            var t = arguments;
            this._context.strokeText(t[0], t[1], t[2])
        },
        transform: function() {
            var t = arguments;
            this._context.transform(t[0], t[1], t[2], t[3], t[4], t[5])
        },
        translate: function() {
            var t = arguments;
            this._context.translate(t[0], t[1])
        },
        _enableTrace: function() {
            for (var n, a = this, t = s.length, r = Kinetic.Util._simplifyArray, e = this.setAttr, i = 0; i < t; i++) ! function(t) {
                var e, i = a[t];
                a[t] = function() {
                    return n = r(Array.prototype.slice.call(arguments, 0)), e = i.apply(a, arguments), a._trace({
                        method: t,
                        args: n
                    }), e
                }
            }(s[i]);
            a.setAttr = function() {
                e.apply(a, arguments), a._trace({
                    property: arguments[0],
                    val: arguments[1]
                })
            }
        }
    }, Kinetic.SceneContext = function(t) {
        Kinetic.Context.call(this, t)
    }, Kinetic.SceneContext.prototype = {
        _fillColor: function(t) {
            var e = t.fill() || Kinetic.Util._getRGBAString({
                red: t.fillRed(),
                green: t.fillGreen(),
                blue: t.fillBlue(),
                alpha: t.fillAlpha()
            });
            this.setAttr("fillStyle", e), t._fillFunc(this)
        },
        _fillPattern: function(t) {
            var e = t.getFillPatternImage(),
                i = t.getFillPatternX(),
                n = t.getFillPatternY(),
                a = t.getFillPatternScale(),
                r = Kinetic.getAngle(t.getFillPatternRotation()),
                s = t.getFillPatternOffset(),
                t = t.getFillPatternRepeat();
            (i || n) && this.translate(i || 0, n || 0), r && this.rotate(r), a && this.scale(a.x, a.y), s && this.translate(-1 * s.x, -1 * s.y), this.setAttr("fillStyle", this.createPattern(e, t || "repeat")), this.fill()
        },
        _fillLinearGradient: function(t) {
            var e = t.getFillLinearGradientStartPoint(),
                i = t.getFillLinearGradientEndPoint(),
                n = t.getFillLinearGradientColorStops(),
                a = this.createLinearGradient(e.x, e.y, i.x, i.y);
            if (n) {
                for (var r = 0; r < n.length; r += 2) a.addColorStop(n[r], n[r + 1]);
                this.setAttr("fillStyle", a), this.fill()
            }
        },
        _fillRadialGradient: function(t) {
            for (var e = t.getFillRadialGradientStartPoint(), i = t.getFillRadialGradientEndPoint(), n = t.getFillRadialGradientStartRadius(), a = t.getFillRadialGradientEndRadius(), r = t.getFillRadialGradientColorStops(), s = this.createRadialGradient(e.x, e.y, n, i.x, i.y, a), o = 0; o < r.length; o += 2) s.addColorStop(r[o], r[o + 1]);
            this.setAttr("fillStyle", s), this.fill()
        },
        _fill: function(t) {
            var e = t.fill() || t.fillRed() || t.fillGreen() || t.fillBlue(),
                i = t.getFillPatternImage(),
                n = t.getFillLinearGradientColorStops(),
                a = t.getFillRadialGradientColorStops(),
                r = t.getFillPriority();
            e && "color" === r ? this._fillColor(t) : i && "pattern" === r ? this._fillPattern(t) : n && "linear-gradient" === r ? this._fillLinearGradient(t) : a && "radial-gradient" === r ? this._fillRadialGradient(t) : e ? this._fillColor(t) : i ? this._fillPattern(t) : n ? this._fillLinearGradient(t) : a && this._fillRadialGradient(t)
        },
        _stroke: function(t) {
            var e = t.dash(),
                i = t.getStrokeScaleEnabled();
            t.hasStroke() && (i || (this.save(), this.setTransform(1, 0, 0, 1, 0, 0)), this._applyLineCap(t), e && t.dashEnabled() && this.setLineDash(e), this.setAttr("lineWidth", t.strokeWidth()), this.setAttr("strokeStyle", t.stroke() || Kinetic.Util._getRGBAString({
                red: t.strokeRed(),
                green: t.strokeGreen(),
                blue: t.strokeBlue(),
                alpha: t.strokeAlpha()
            })), t._strokeFunc(this), i || this.restore())
        },
        _applyShadow: function(t) {
            var e = Kinetic.Util,
                i = t.getAbsoluteOpacity(),
                n = e.get(t.getShadowColor(), "black"),
                a = e.get(t.getShadowBlur(), 5),
                r = e.get(t.getShadowOpacity(), 1),
                t = e.get(t.getShadowOffset(), {
                    x: 0,
                    y: 0
                });
            r && this.setAttr("globalAlpha", r * i), this.setAttr("shadowColor", n), this.setAttr("shadowBlur", a), this.setAttr("shadowOffsetX", t.x), this.setAttr("shadowOffsetY", t.y)
        }
    }, Kinetic.Util.extend(Kinetic.SceneContext, Kinetic.Context), Kinetic.HitContext = function(t) {
        Kinetic.Context.call(this, t)
    }, Kinetic.HitContext.prototype = {
        _fill: function(t) {
            this.save(), this.setAttr("fillStyle", t.colorKey), t._fillFuncHit(this), this.restore()
        },
        _stroke: function(t) {
            t.hasStroke() && (this._applyLineCap(t), this.setAttr("lineWidth", t.strokeWidth()), this.setAttr("strokeStyle", t.colorKey), t._strokeFuncHit(this))
        }
    }, Kinetic.Util.extend(Kinetic.HitContext, Kinetic.Context)
}(), Kinetic.Factory = {
        addGetterSetter: function(t, e, i, n, a) {
            this.addGetter(t, e, i), this.addSetter(t, e, n, a), this.addOverloadedGetterSetter(t, e)
        },
        addGetter: function(t, e, i) {
            var n = "get" + Kinetic.Util._capitalize(e);
            t.prototype[n] = function() {
                var t = this.attrs[e];
                return void 0 === t ? i : t
            }
        },
        addSetter: function(t, e, i, n) {
            var a = "set" + Kinetic.Util._capitalize(e);
            t.prototype[a] = function(t) {
                return i && (t = i.call(this, t)), this._setAttr(e, t), n && n.call(this), this
            }
        },
        addComponentsGetterSetter: function(t, n, e, a, r) {
            var i, s, o = e.length,
                c = Kinetic.Util._capitalize,
                h = "get" + c(n),
                l = "set" + c(n);
            t.prototype[h] = function() {
                var t = {};
                for (i = 0; i < o; i++) t[s = e[i]] = this.getAttr(n + c(s));
                return t
            }, t.prototype[l] = function(t) {
                var e, i = this.attrs[n];
                for (e in a && (t = a.call(this, t)), t) this._setAttr(n + c(e), t[e]);
                return this._fireChangeEvent(n, i, t), r && r.call(this), this
            }, this.addOverloadedGetterSetter(t, n)
        },
        addOverloadedGetterSetter: function(t, e) {
            var i = Kinetic.Util._capitalize(e),
                n = "set" + i,
                a = "get" + i;
            t.prototype[e] = function() {
                return arguments.length ? (this[n](arguments[0]), this) : this[a]()
            }
        },
        backCompat: function(t, e) {
            for (var i in e) t.prototype[i] = t.prototype[e[i]]
        },
        afterSetFilter: function() {
            this._filterUpToDate = !1
        }
    }, Kinetic.Validators = {
        RGBComponent: function(t) {
            return 255 < t ? 255 : t < 0 ? 0 : Math.round(t)
        },
        alphaComponent: function(t) {
            return 1 < t ? 1 : t < 1e-4 ? 1e-4 : t
        }
    },
    function() {
        var i = "absoluteOpacity",
            n = "absoluteTransform",
            a = "listening",
            r = "transform",
            s = "visible",
            l = ["id"],
            o = ["xChange.kinetic", "yChange.kinetic", "scaleXChange.kinetic", "scaleYChange.kinetic", "skewXChange.kinetic", "skewYChange.kinetic", "rotationChange.kinetic", "offsetXChange.kinetic", "offsetYChange.kinetic", "transformsEnabledChange.kinetic"].join(" ");
        Kinetic.Util.addMethods(Kinetic.Node, {
            _init: function(t) {
                var e = this;
                this._id = Kinetic.idCounter++, this.eventListeners = {}, this.attrs = {}, this._cache = {}, this._filterUpToDate = !1, this.setAttrs(t), this.on(o, function() {
                    this._clearCache(r), e._clearSelfAndDescendantCache(n)
                }), this.on("visibleChange.kinetic", function() {
                    e._clearSelfAndDescendantCache(s)
                }), this.on("listeningChange.kinetic", function() {
                    e._clearSelfAndDescendantCache(a)
                }), this.on("opacityChange.kinetic", function() {
                    e._clearSelfAndDescendantCache(i)
                })
            },
            _clearCache: function(t) {
                t ? delete this._cache[t] : this._cache = {}
            },
            _getCache: function(t, e) {
                return void 0 === this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t]
            },
            _clearSelfAndDescendantCache: function(e) {
                this._clearCache(e), this.children && this.getChildren().each(function(t) {
                    t._clearSelfAndDescendantCache(e)
                })
            },
            clearCache: function() {
                return delete this._cache.canvas, this._filterUpToDate = !1, this
            },
            cache: function(t) {
                var e = t || {},
                    i = e.x || 0,
                    n = e.y || 0,
                    a = e.width || this.width(),
                    r = e.height || this.height(),
                    s = e.drawBorder || !1;
                if (this.getLayer(), 0 !== a && 0 !== r) {
                    var o = new Kinetic.SceneCanvas({
                            pixelRatio: 1,
                            width: a,
                            height: r
                        }),
                        c = new Kinetic.SceneCanvas({
                            pixelRatio: 1,
                            width: a,
                            height: r
                        }),
                        h = new Kinetic.HitCanvas({
                            width: a,
                            height: r
                        }),
                        t = (this.transformsEnabled(), this.x(), this.y(), o.getContext()),
                        e = h.getContext();
                    return this.clearCache(), t.save(), e.save(), s && (t.save(), t.beginPath(), t.rect(0, 0, a, r), t.closePath(), t.setAttr("strokeStyle", "red"), t.setAttr("lineWidth", 5), t.stroke(), t.restore()), t.translate(-1 * i, -1 * n), e.translate(-1 * i, -1 * n), "Shape" === this.nodeType && (t.translate(-1 * this.x(), -1 * this.y()), e.translate(-1 * this.x(), -1 * this.y())), this.drawScene(o, this), this.drawHit(h, this), t.restore(), e.restore(), this._cache.canvas = {
                        scene: o,
                        filter: c,
                        hit: h
                    }, this
                }
                Kinetic.Util.warn("Width or height of caching configuration equals 0. Cache is ignored.")
            },
            _drawCachedSceneCanvas: function(t) {
                t.save(), this.getLayer()._applyTransform(this, t), t.drawImage(this._getCachedSceneCanvas()._canvas, 0, 0), t.restore()
            },
            _getCachedSceneCanvas: function() {
                var t, e, i, n = this.filters(),
                    a = this._cache.canvas,
                    r = a.scene,
                    s = a.filter,
                    o = s.getContext();
                if (n) {
                    if (!this._filterUpToDate) {
                        try {
                            for (t = n.length, o.clear(), o.drawImage(r._canvas, 0, 0), e = o.getImageData(0, 0, s.getWidth(), s.getHeight()), i = 0; i < t; i++) n[i].call(this, e), o.putImageData(e, 0, 0)
                        } catch (t) {
                            Kinetic.Util.warn("Unable to apply filter. " + t.message)
                        }
                        this._filterUpToDate = !0
                    }
                    return s
                }
                return r
            },
            _drawCachedHitCanvas: function(t) {
                var e = this._cache.canvas.hit;
                t.save(), this.getLayer()._applyTransform(this, t), t.drawImage(e._canvas, 0, 0), t.restore()
            },
            on: function(t, e) {
                for (var i, n, a = t.split(" "), r = a.length, s = 0; s < r; s++) i = (n = a[s].split("."))[0], n = n[1] || "", this.eventListeners[i] || (this.eventListeners[i] = []), this.eventListeners[i].push({
                    name: n,
                    handler: e
                });
                return this
            },
            off: function(t) {
                for (var e, i, n, a, r = t.split(" "), s = r.length, o = 0; o < s; o++)
                    if (n = (i = r[o].split("."))[0], a = i[1], n) this.eventListeners[n] && this._off(n, a);
                    else
                        for (e in this.eventListeners) this._off(e, a);
                return this
            },
            dispatchEvent: function(t) {
                var e = {
                    target: this,
                    type: t.type,
                    evt: t
                };
                this.fire(t.type, e)
            },
            addEventListener: function(t, e) {
                this.on(t, function(t) {
                    e.call(this, t.evt)
                })
            },
            remove: function() {
                var t = this.getParent();
                return t && t.children && (t.children.splice(this.index, 1), t._setChildrenIndices(), delete this.parent), this._clearSelfAndDescendantCache("stage"), this._clearSelfAndDescendantCache(n), this._clearSelfAndDescendantCache(s), this._clearSelfAndDescendantCache(a), this._clearSelfAndDescendantCache(i), this
            },
            destroy: function() {
                Kinetic._removeId(this.getId()), Kinetic._removeName(this.getName(), this._id), this.remove()
            },
            getAttr: function(t) {
                var e = "get" + Kinetic.Util._capitalize(t);
                return Kinetic.Util._isFunction(this[e]) ? this[e]() : this.attrs[t]
            },
            getAncestors: function() {
                for (var t = this.getParent(), e = new Kinetic.Collection; t;) e.push(t), t = t.getParent();
                return e
            },
            getAttrs: function() {
                return this.attrs || {}
            },
            setAttrs: function(t) {
                var e, i;
                if (t)
                    for (e in t) "children" === e || (i = "set" + Kinetic.Util._capitalize(e), Kinetic.Util._isFunction(this[i]) ? this[i](t[e]) : this._setAttr(e, t[e]));
                return this
            },
            isListening: function() {
                return this._getCache(a, this._isListening)
            },
            _isListening: function() {
                var t = this.getListening(),
                    e = this.getParent();
                return "inherit" === t ? !e || e.isListening() : t
            },
            isVisible: function() {
                return this._getCache(s, this._isVisible)
            },
            _isVisible: function() {
                var t = this.getVisible(),
                    e = this.getParent();
                return "inherit" === t ? !e || e.isVisible() : t
            },
            shouldDrawHit: function() {
                var t = this.getLayer();
                return t && t.hitGraphEnabled() && this.isListening() && this.isVisible() && !Kinetic.isDragging()
            },
            show: function() {
                return this.setVisible(!0), this
            },
            hide: function() {
                return this.setVisible(!1), this
            },
            getZIndex: function() {
                return this.index || 0
            },
            getAbsoluteZIndex: function() {
                var i, n, a, r, s = this.getDepth(),
                    o = this,
                    c = 0;
                return "Stage" !== o.nodeType && function t(e) {
                    for (i = [], n = e.length, a = 0; a < n; a++) r = e[a], c++, "Shape" !== r.nodeType && (i = i.concat(r.getChildren().toArray())), r._id === o._id && (a = n);
                    0 < i.length && i[0].getDepth() <= s && t(i)
                }(o.getStage().getChildren()), c
            },
            getDepth: function() {
                for (var t = 0, e = this.parent; e;) t++, e = e.parent;
                return t
            },
            setPosition: function(t) {
                return this.setX(t.x), this.setY(t.y), this
            },
            getPosition: function() {
                return {
                    x: this.getX(),
                    y: this.getY()
                }
            },
            getAbsolutePosition: function() {
                var t = this.getAbsoluteTransform().getMatrix(),
                    e = new Kinetic.Transform,
                    i = this.offset();
                return e.m = t.slice(), e.translate(i.x, i.y), e.getTranslation()
            },
            setAbsolutePosition: function(t) {
                var e, i = this._clearTransform();
                return this.attrs.x = i.x, this.attrs.y = i.y, delete i.x, delete i.y, (e = this.getAbsoluteTransform()).invert(), e.translate(t.x, t.y), t = {
                    x: this.attrs.x + e.getTranslation().x,
                    y: this.attrs.y + e.getTranslation().y
                }, this.setPosition({
                    x: t.x,
                    y: t.y
                }), this._setTransform(i), this
            },
            _setTransform: function(t) {
                for (var e in t) this.attrs[e] = t[e];
                this._clearCache(r), this._clearSelfAndDescendantCache(n)
            },
            _clearTransform: function() {
                var t = {
                    x: this.getX(),
                    y: this.getY(),
                    rotation: this.getRotation(),
                    scaleX: this.getScaleX(),
                    scaleY: this.getScaleY(),
                    offsetX: this.getOffsetX(),
                    offsetY: this.getOffsetY(),
                    skewX: this.getSkewX(),
                    skewY: this.getSkewY()
                };
                return this.attrs.x = 0, this.attrs.y = 0, this.attrs.rotation = 0, this.attrs.scaleX = 1, this.attrs.scaleY = 1, this.attrs.offsetX = 0, this.attrs.offsetY = 0, this.attrs.skewX = 0, this.attrs.skewY = 0, this._clearCache(r), this._clearSelfAndDescendantCache(n), t
            },
            move: function(t) {
                var e = t.x,
                    i = t.y,
                    n = this.getX(),
                    t = this.getY();
                return void 0 !== e && (n += e), void 0 !== i && (t += i), this.setPosition({
                    x: n,
                    y: t
                }), this
            },
            _eachAncestorReverse: function(t, e) {
                var i, n, a = [],
                    r = this.getParent();
                if (e && e._id === this._id) return t(this), !0;
                for (a.unshift(this); r && (!e || r._id !== e._id);) a.unshift(r), r = r.parent;
                for (i = a.length, n = 0; n < i; n++) t(a[n])
            },
            rotate: function(t) {
                return this.setRotation(this.getRotation() + t), this
            },
            moveToTop: function() {
                if (this.parent) {
                    var t = this.index;
                    return this.parent.children.splice(t, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0
                }
                Kinetic.Util.warn("Node has no parent. moveToTop function is ignored.")
            },
            moveUp: function() {
                if (this.parent) {
                    var t = this.index;
                    return t < this.parent.getChildren().length - 1 && (this.parent.children.splice(t, 1), this.parent.children.splice(t + 1, 0, this), this.parent._setChildrenIndices(), !0)
                }
                Kinetic.Util.warn("Node has no parent. moveUp function is ignored.")
            },
            moveDown: function() {
                if (this.parent) {
                    var t = this.index;
                    return 0 < t && (this.parent.children.splice(t, 1), this.parent.children.splice(t - 1, 0, this), this.parent._setChildrenIndices(), !0)
                }
                Kinetic.Util.warn("Node has no parent. moveDown function is ignored.")
            },
            moveToBottom: function() {
                if (this.parent) {
                    var t = this.index;
                    return 0 < t && (this.parent.children.splice(t, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0)
                }
                Kinetic.Util.warn("Node has no parent. moveToBottom function is ignored.")
            },
            setZIndex: function(t) {
                if (this.parent) {
                    var e = this.index;
                    return this.parent.children.splice(e, 1), this.parent.children.splice(t, 0, this), this.parent._setChildrenIndices(), this
                }
                Kinetic.Util.warn("Node has no parent. zIndex parameter is ignored.")
            },
            getAbsoluteOpacity: function() {
                return this._getCache(i, this._getAbsoluteOpacity)
            },
            _getAbsoluteOpacity: function() {
                var t = this.getOpacity();
                return this.getParent() && (t *= this.getParent().getAbsoluteOpacity()), t
            },
            moveTo: function(t) {
                return Kinetic.Node.prototype.remove.call(this), t.add(this), this
            },
            toObject: function() {
                var t, e, i, n = Kinetic.Util,
                    a = {},
                    r = this.getAttrs();
                for (t in a.attrs = {}, r) e = r[t], n._isFunction(e) || n._isElement(e) || n._isObject(e) && n._hasMethods(e) || (i = this[t], delete r[t], i = i ? i.call(this) : null, r[t] = e, i !== e && (a.attrs[t] = e));
                return a.className = this.getClassName(), a
            },
            toJSON: function() {
                return JSON.stringify(this.toObject())
            },
            getParent: function() {
                return this.parent
            },
            getLayer: function() {
                var t = this.getParent();
                return t ? t.getLayer() : null
            },
            getStage: function() {
                return this._getCache("stage", this._getStage)
            },
            _getStage: function() {
                var t = this.getParent();
                return t ? t.getStage() : void 0
            },
            fire: function(t, e, i) {
                return i ? this._fireAndBubble(t, e || {}) : this._fire(t, e || {}), this
            },
            getAbsoluteTransform: function(t) {
                return t ? this._getAbsoluteTransform(t) : this._getCache(n, this._getAbsoluteTransform)
            },
            _getAbsoluteTransform: function(t) {
                var e, i, n = new Kinetic.Transform;
                return this._eachAncestorReverse(function(t) {
                    e = t.transformsEnabled(), i = t.getTransform(), "all" === e ? n.multiply(i) : "position" === e && n.translate(t.x(), t.y())
                }, t), n
            },
            getTransform: function() {
                return this._getCache(r, this._getTransform)
            },
            _getTransform: function() {
                var t = new Kinetic.Transform,
                    e = this.getX(),
                    i = this.getY(),
                    n = Kinetic.getAngle(this.getRotation()),
                    a = this.getScaleX(),
                    r = this.getScaleY(),
                    s = this.getSkewX(),
                    o = this.getSkewY(),
                    c = this.getOffsetX(),
                    h = this.getOffsetY();
                return 0 === e && 0 === i || t.translate(e, i), 0 !== n && t.rotate(n), 0 === s && 0 === o || t.skew(s, o), 1 === a && 1 === r || t.scale(a, r), 0 === c && 0 === h || t.translate(-1 * c, -1 * h), t
            },
            clone: function(t) {
                var e, i, n, a, r, s, o = this.getClassName(),
                    c = Kinetic.Util.cloneObject(this.attrs);
                for (s in l) delete c[l[s]];
                for (e in t) c[e] = t[e];
                var h = new Kinetic[o](c);
                for (e in this.eventListeners)
                    for (i = this.eventListeners[e], n = i.length, a = 0; a < n; a++) r = i[a], r.name.indexOf("kinetic") < 0 && (h.eventListeners[e] || (h.eventListeners[e] = []), h.eventListeners[e].push(r));
                return h
            },
            toDataURL: function(t) {
                var e = (t = t || {}).mimeType || null,
                    i = t.quality || null,
                    n = this.getStage(),
                    a = t.x || 0,
                    r = t.y || 0,
                    t = new Kinetic.SceneCanvas({
                        width: t.width || this.getWidth() || (n ? n.getWidth() : 0),
                        height: t.height || this.getHeight() || (n ? n.getHeight() : 0),
                        pixelRatio: 1
                    }),
                    n = t.getContext();
                return n.save(), (a || r) && n.translate(-1 * a, -1 * r), this.drawScene(t), n.restore(), t.toDataURL(e, i)
            },
            toImage: function(e) {
                Kinetic.Util._getImage(this.toDataURL(e), function(t) {
                    e.callback(t)
                })
            },
            setSize: function(t) {
                return this.setWidth(t.width), this.setHeight(t.height), this
            },
            getSize: function() {
                return {
                    width: this.getWidth(),
                    height: this.getHeight()
                }
            },
            getWidth: function() {
                return this.attrs.width || 0
            },
            getHeight: function() {
                return this.attrs.height || 0
            },
            getClassName: function() {
                return this.className || this.nodeType
            },
            getType: function() {
                return this.nodeType
            },
            getDragDistance: function() {
                return void 0 !== this.attrs.dragDistance ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : Kinetic.dragDistance
            },
            _get: function(t) {
                return this.nodeType === t ? [this] : []
            },
            _off: function(t, e) {
                for (var i, n = this.eventListeners[t], a = 0; a < n.length; a++)
                    if (!("kinetic" === (i = n[a].name) && "kinetic" !== e || e && i !== e)) {
                        if (n.splice(a, 1), 0 === n.length) {
                            delete this.eventListeners[t];
                            break
                        }
                        a--
                    }
            },
            _fireChangeEvent: function(t, e, i) {
                this._fire(t + "Change", {
                    oldVal: e,
                    newVal: i
                })
            },
            setId: function(t) {
                var e = this.getId();
                return Kinetic._removeId(e), Kinetic._addId(this, t), this._setAttr("id", t), this
            },
            setName: function(t) {
                var e = this.getName();
                return Kinetic._removeName(e, this._id), Kinetic._addName(this, t), this._setAttr("name", t), this
            },
            setAttr: function() {
                var t = Array.prototype.slice.call(arguments),
                    e = t[0],
                    i = t[1],
                    t = this["set" + Kinetic.Util._capitalize(e)];
                return Kinetic.Util._isFunction(t) ? t.call(this, i) : this._setAttr(e, i), this
            },
            _setAttr: function(t, e) {
                var i;
                void 0 !== e && (i = this.attrs[t], this.attrs[t] = e, this._fireChangeEvent(t, i, e))
            },
            _setComponentAttr: function(t, e, i) {
                var n;
                void 0 !== i && ((n = this.attrs[t]) || (this.attrs[t] = this.getAttr(t)), this.attrs[t][e] = i, this._fireChangeEvent(t, n, i))
            },
            _fireAndBubble: function(t, e, i) {
                var n = !0;
                e && "Shape" === this.nodeType && (e.target = this), ("mouseenter" === t && i && this._id === i._id || "mouseleave" === t && i && this._id === i._id) && (n = !1), n && (this._fire(t, e), e && !e.cancelBubble && this.parent && (i && i.parent ? this._fireAndBubble.call(this.parent, t, e, i.parent) : this._fireAndBubble.call(this.parent, t, e)))
            },
            _fire: function(t, e) {
                var i, n = this.eventListeners[t];
                if (e.type = t, n)
                    for (i = 0; i < n.length; i++) n[i].handler.call(this, e)
            },
            draw: function() {
                return this.drawScene(), this.drawHit(), this
            }
        }), Kinetic.Node.create = function(t, e) {
            return this._createNode(JSON.parse(t), e)
        }, Kinetic.Node._createNode = function(t, e) {
            var i, n, a, r = Kinetic.Node.prototype.getClassName.call(t),
                s = t.children;
            if (e && (t.attrs.container = e), i = new Kinetic[r](t.attrs), s)
                for (n = s.length, a = 0; a < n; a++) i.add(this._createNode(s[a]));
            return i
        }, Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, "position"), Kinetic.Factory.addGetterSetter(Kinetic.Node, "x", 0), Kinetic.Factory.addGetterSetter(Kinetic.Node, "y", 0), Kinetic.Factory.addGetterSetter(Kinetic.Node, "opacity", 1), Kinetic.Factory.addGetter(Kinetic.Node, "name"), Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, "name"), Kinetic.Factory.addGetter(Kinetic.Node, "id"), Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, "id"), Kinetic.Factory.addGetterSetter(Kinetic.Node, "rotation", 0), Kinetic.Factory.addComponentsGetterSetter(Kinetic.Node, "scale", ["x", "y"]), Kinetic.Factory.addGetterSetter(Kinetic.Node, "scaleX", 1), Kinetic.Factory.addGetterSetter(Kinetic.Node, "scaleY", 1), Kinetic.Factory.addComponentsGetterSetter(Kinetic.Node, "skew", ["x", "y"]), Kinetic.Factory.addGetterSetter(Kinetic.Node, "skewX", 0), Kinetic.Factory.addGetterSetter(Kinetic.Node, "skewY", 0), Kinetic.Factory.addComponentsGetterSetter(Kinetic.Node, "offset", ["x", "y"]), Kinetic.Factory.addGetterSetter(Kinetic.Node, "offsetX", 0), Kinetic.Factory.addGetterSetter(Kinetic.Node, "offsetY", 0), Kinetic.Factory.addSetter(Kinetic.Node, "dragDistance"), Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, "dragDistance"), Kinetic.Factory.addSetter(Kinetic.Node, "width", 0), Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, "width"), Kinetic.Factory.addSetter(Kinetic.Node, "height", 0), Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, "height"), Kinetic.Factory.addGetterSetter(Kinetic.Node, "listening", "inherit"), Kinetic.Factory.addGetterSetter(Kinetic.Node, "filters", void 0, function(t) {
            return this._filterUpToDate = !1, t
        }), Kinetic.Factory.addGetterSetter(Kinetic.Node, "visible", "inherit"), Kinetic.Factory.addGetterSetter(Kinetic.Node, "transformsEnabled", "all"), Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, "size"), Kinetic.Factory.backCompat(Kinetic.Node, {
            rotateDeg: "rotate",
            setRotationDeg: "setRotation",
            getRotationDeg: "getRotation"
        }), Kinetic.Collection.mapMethods(Kinetic.Node)
    }(), Kinetic.Filters.Grayscale = function(t) {
        for (var e, i = t.data, n = i.length, a = 0; a < n; a += 4) e = .34 * i[a] + .5 * i[a + 1] + .16 * i[a + 2], i[a] = e, i[a + 1] = e, i[a + 2] = e
    }, Kinetic.Filters.Brighten = function(t) {
        for (var e = 255 * this.brightness(), i = t.data, n = i.length, a = 0; a < n; a += 4) i[a] += e, i[a + 1] += e, i[a + 2] += e
    }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "brightness", 0, null, Kinetic.Factory.afterSetFilter), Kinetic.Filters.Invert = function(t) {
        for (var e = t.data, i = e.length, n = 0; n < i; n += 4) e[n] = 255 - e[n], e[n + 1] = 255 - e[n + 1], e[n + 2] = 255 - e[n + 2]
    },
    function() {
        function O() {
            this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null
        }
        var H = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
            W = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
        Kinetic.Filters.Blur = function(E) {
            var t = Math.round(this.blurRadius());
            0 < t && function(t) {
                for (var e, i, n, a, r, s, o, c, h, l, d, u, f, g, p, K, v, _, m, y, S, C, x, F = E.data, w = E.width, b = E.height, P = t + t + 1, T = w - 1, A = b - 1, G = t + 1, k = G * (G + 1) / 2, D = new O, L = null, M = D, R = null, I = null, N = H[t], B = W[t], U = 1; U < P; U++) M = M.next = new O, U == G && (L = M);
                for (M.next = D, i = s = r = 0; i < b; i++) {
                    for (p = K = v = _ = o = c = h = l = 0, d = G * (m = F[r]), u = G * (y = F[r + 1]), f = G * (S = F[r + 2]), g = G * (C = F[r + 3]), o += k * m, c += k * y, h += k * S, l += k * C, M = D, U = 0; U < G; U++) M.r = m, M.g = y, M.b = S, M.a = C, M = M.next;
                    for (U = 1; U < G; U++) n = r + ((T < U ? T : U) << 2), o += (M.r = m = F[n]) * (x = G - U), c += (M.g = y = F[n + 1]) * x, h += (M.b = S = F[n + 2]) * x, l += (M.a = C = F[n + 3]) * x, p += m, K += y, v += S, _ += C, M = M.next;
                    for (R = D, I = L, e = 0; e < w; e++) F[r + 3] = C = l * N >> B, 0 !== C ? (C = 255 / C, F[r] = (o * N >> B) * C, F[r + 1] = (c * N >> B) * C, F[r + 2] = (h * N >> B) * C) : F[r] = F[r + 1] = F[r + 2] = 0, o -= d, c -= u, h -= f, l -= g, d -= R.r, u -= R.g, f -= R.b, g -= R.a, n = s + ((n = e + t + 1) < T ? n : T) << 2, o += p += R.r = F[n], c += K += R.g = F[n + 1], h += v += R.b = F[n + 2], l += _ += R.a = F[n + 3], R = R.next, d += m = I.r, u += y = I.g, f += S = I.b, g += C = I.a, p -= m, K -= y, v -= S, _ -= C, I = I.next, r += 4;
                    s += w
                }
                for (e = 0; e < w; e++) {
                    for (K = v = _ = p = c = h = l = o = 0, d = G * (m = F[r = e << 2]), u = G * (y = F[r + 1]), f = G * (S = F[r + 2]), g = G * (C = F[r + 3]), o += k * m, c += k * y, h += k * S, l += k * C, M = D, U = 0; U < G; U++) M.r = m, M.g = y, M.b = S, M.a = C, M = M.next;
                    for (a = w, U = 1; U <= t; U++) r = a + e << 2, o += (M.r = m = F[r]) * (x = G - U), c += (M.g = y = F[r + 1]) * x, h += (M.b = S = F[r + 2]) * x, l += (M.a = C = F[r + 3]) * x, p += m, K += y, v += S, _ += C, M = M.next, U < A && (a += w);
                    for (r = e, R = D, I = L, i = 0; i < b; i++) F[(n = r << 2) + 3] = C = l * N >> B, 0 < C ? (C = 255 / C, F[n] = (o * N >> B) * C, F[n + 1] = (c * N >> B) * C, F[n + 2] = (h * N >> B) * C) : F[n] = F[n + 1] = F[n + 2] = 0, o -= d, c -= u, h -= f, l -= g, d -= R.r, u -= R.g, f -= R.b, g -= R.a, n = e + ((n = i + G) < A ? n : A) * w << 2, o += p += R.r = F[n], c += K += R.g = F[n + 1], h += v += R.b = F[n + 2], l += _ += R.a = F[n + 3], R = R.next, d += m = I.r, u += y = I.g, f += S = I.b, g += C = I.a, p -= m, K -= y, v -= S, _ -= C, I = I.next, r += w
                }
            }(t)
        }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "blurRadius", 0, null, Kinetic.Factory.afterSetFilter)
    }(),
    function() {
        function d(t, e, i) {
            i = 4 * (i * t.width + e), e = [];
            return e.push(t.data[i++], t.data[i++], t.data[i++], t.data[i++]), e
        }

        function u(t, e) {
            return Math.sqrt(Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2) + Math.pow(t[2] - e[2], 2))
        }

        function i(t, e) {
            var i = d(t, 0, 0),
                n = d(t, t.width - 1, 0),
                a = d(t, 0, t.height - 1),
                r = d(t, t.width - 1, t.height - 1),
                s = e || 10;
            if (u(i, n) < s && u(n, r) < s && u(r, a) < s && u(a, i) < s) {
                for (var o = function(t) {
                        for (var e = [0, 0, 0], i = 0; i < t.length; i++) e[0] += t[i][0], e[1] += t[i][1], e[2] += t[i][2];
                        return e[0] /= t.length, e[1] /= t.length, e[2] /= t.length, e
                    }([n, i, r, a]), c = [], h = 0; h < t.width * t.height; h++) {
                    var l = u(o, [t.data[4 * h], t.data[4 * h + 1], t.data[4 * h + 2]]);
                    c[h] = l < s ? 0 : 255
                }
                return c
            }
        }
        Kinetic.Filters.Mask = function(t) {
            var e = i(t, this.threshold());
            return e && function(t, e) {
                for (var i = 0; i < t.width * t.height; i++) t.data[4 * i + 3] = e[i]
            }(t, function(t, e, i) {
                for (var n = [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9], a = Math.round(Math.sqrt(n.length)), r = Math.floor(a / 2), s = [], o = 0; o < i; o++)
                    for (var c = 0; c < e; c++) {
                        for (var h = o * e + c, l = 0, d = 0; d < a; d++)
                            for (var u = 0; u < a; u++) {
                                var f, g = o + d - r,
                                    p = c + u - r;
                                0 <= g && g < i && 0 <= p && p < e && (f = n[d * a + u], l += t[g * e + p] * f)
                            }
                        s[h] = l
                    }
                return s
            }(function(t, e, i) {
                for (var n = [1, 1, 1, 1, 1, 1, 1, 1, 1], a = Math.round(Math.sqrt(n.length)), r = Math.floor(a / 2), s = [], o = 0; o < i; o++)
                    for (var c = 0; c < e; c++) {
                        for (var h = o * e + c, l = 0, d = 0; d < a; d++)
                            for (var u = 0; u < a; u++) {
                                var f, g = o + d - r,
                                    p = c + u - r;
                                0 <= g && g < i && 0 <= p && p < e && (f = n[d * a + u], l += t[g * e + p] * f)
                            }
                        s[h] = 1020 <= l ? 255 : 0
                    }
                return s
            }(function(t, e, i) {
                for (var n = [1, 1, 1, 1, 0, 1, 1, 1, 1], a = Math.round(Math.sqrt(n.length)), r = Math.floor(a / 2), s = [], o = 0; o < i; o++)
                    for (var c = 0; c < e; c++) {
                        for (var h = o * e + c, l = 0, d = 0; d < a; d++)
                            for (var u = 0; u < a; u++) {
                                var f, g = o + d - r,
                                    p = c + u - r;
                                0 <= g && g < i && 0 <= p && p < e && (f = n[d * a + u], l += t[g * e + p] * f)
                            }
                        s[h] = 2040 === l ? 255 : 0
                    }
                return s
            }(e, t.width, t.height), t.width, t.height), t.width, t.height)), t
        }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "threshold", 0, null, Kinetic.Factory.afterSetFilter)
    }(), Kinetic.Filters.RGB = function(t) {
        for (var e, i = t.data, n = i.length, a = this.red(), r = this.green(), s = this.blue(), o = 0; o < n; o += 4) e = (.34 * i[o] + .5 * i[o + 1] + .16 * i[o + 2]) / 255, i[o] = e * a, i[o + 1] = e * r, i[o + 2] = e * s, i[o + 3] = i[o + 3]
    }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "red", 0, function(t) {
        return this._filterUpToDate = !1, 255 < t ? 255 : t < 0 ? 0 : Math.round(t)
    }), Kinetic.Factory.addGetterSetter(Kinetic.Node, "green", 0, function(t) {
        return this._filterUpToDate = !1, 255 < t ? 255 : t < 0 ? 0 : Math.round(t)
    }), Kinetic.Factory.addGetterSetter(Kinetic.Node, "blue", 0, Kinetic.Validators.RGBComponent, Kinetic.Factory.afterSetFilter), Kinetic.Filters.HSV = function(t) {
        for (var e, i, n, a, r = t.data, s = r.length, o = Math.pow(2, this.value()), c = Math.pow(2, this.saturation()), h = Math.abs(this.hue() + 360) % 360, t = o * c * Math.cos(h * Math.PI / 180), h = o * c * Math.sin(h * Math.PI / 180), l = .299 * o + .701 * t + .167 * h, d = .587 * o - .587 * t + .33 * h, u = .114 * o - .114 * t - .497 * h, f = .299 * o - .299 * t - .328 * h, g = .587 * o + .413 * t + .035 * h, p = .114 * o - .114 * t + .293 * h, K = .299 * o - .3 * t + 1.25 * h, v = .587 * o - .586 * t - 1.05 * h, _ = .114 * o + .886 * t - .2 * h, m = 0; m < s; m += 4) e = r[m + 0], i = r[m + 1], n = r[m + 2], a = r[m + 3], r[m + 0] = l * e + d * i + u * n, r[m + 1] = f * e + g * i + p * n, r[m + 2] = K * e + v * i + _ * n, r[m + 3] = a
    }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "hue", 0, null, Kinetic.Factory.afterSetFilter), Kinetic.Factory.addGetterSetter(Kinetic.Node, "saturation", 0, null, Kinetic.Factory.afterSetFilter), Kinetic.Factory.addGetterSetter(Kinetic.Node, "value", 0, null, Kinetic.Factory.afterSetFilter), Kinetic.Factory.addGetterSetter(Kinetic.Node, "hue", 0, null, Kinetic.Factory.afterSetFilter), Kinetic.Factory.addGetterSetter(Kinetic.Node, "saturation", 0, null, Kinetic.Factory.afterSetFilter), Kinetic.Factory.addGetterSetter(Kinetic.Node, "luminance", 0, null, Kinetic.Factory.afterSetFilter), Kinetic.Filters.HSL = function(t) {
        for (var e, i, n, a, r = t.data, s = r.length, o = Math.pow(2, this.saturation()), c = Math.abs(this.hue() + 360) % 360, h = 127 * this.luminance(), t = +o * Math.cos(c * Math.PI / 180), c = +o * Math.sin(c * Math.PI / 180), l = .299 + .701 * t + .167 * c, d = .587 - .587 * t + .33 * c, u = .114 - .114 * t - .497 * c, f = .299 - .299 * t - .328 * c, g = .587 + .413 * t + .035 * c, p = .114 - .114 * t + .293 * c, K = .299 - .3 * t + 1.25 * c, v = .587 - .586 * t - 1.05 * c, _ = .114 + .886 * t - .2 * c, m = 0; m < s; m += 4) e = r[m + 0], i = r[m + 1], n = r[m + 2], a = r[m + 3], r[m + 0] = l * e + d * i + u * n + h, r[m + 1] = f * e + g * i + p * n + h, r[m + 2] = K * e + v * i + _ * n + h, r[m + 3] = a
    }, Kinetic.Filters.Emboss = function(t) {
        var e = 10 * this.embossStrength(),
            i = 255 * this.embossWhiteLevel(),
            n = this.embossDirection(),
            a = this.embossBlend(),
            r = 0,
            s = 0,
            o = t.data,
            c = t.width,
            h = t.height,
            l = 4 * c,
            d = h;
        switch (n) {
            case "top-left":
                s = r = -1;
                break;
            case "top":
                r = -1, s = 0;
                break;
            case "top-right":
                r = -1, s = 1;
                break;
            case "right":
                r = 0, s = 1;
                break;
            case "bottom-right":
                s = r = 1;
                break;
            case "bottom":
                r = 1, s = 0;
                break;
            case "bottom-left":
                s = -(r = 1);
                break;
            case "left":
                r = 0, s = -1
        }
        do {
            var u = (d - 1) * l,
                f = r;
            d + f < 1 && (f = 0), h < d + f && (f = 0);
            var g = (d - 1 + f) * c * 4,
                p = c;
            do {
                var K = u + 4 * (p - 1),
                    v = s;
                p + v < 1 && (v = 0), c < p + v && (v = 0);
                var _ = g + 4 * (p - 1 + v),
                    m = o[K] - o[_],
                    y = o[1 + K] - o[1 + _],
                    v = o[2 + K] - o[2 + _],
                    _ = m,
                    m = 0 < _ ? _ : -_
            } while (m < (0 < y ? y : -y) && (_ = y), m < (0 < v ? v : -v) && (_ = v), _ *= e, a ? (y = o[K] + _, m = o[1 + K] + _, v = o[2 + K] + _, o[K] = 255 < y ? 255 : y < 0 ? 0 : y, o[1 + K] = 255 < m ? 255 : m < 0 ? 0 : m, o[2 + K] = 255 < v ? 255 : v < 0 ? 0 : v) : ((_ = i - _) < 0 ? _ = 0 : 255 < _ && (_ = 255), o[K] = o[1 + K] = o[2 + K] = _), --p)
        } while (--d)
    }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "embossStrength", .5, null, Kinetic.Factory.afterSetFilter), Kinetic.Factory.addGetterSetter(Kinetic.Node, "embossWhiteLevel", .5, null, Kinetic.Factory.afterSetFilter), Kinetic.Factory.addGetterSetter(Kinetic.Node, "embossDirection", "top-left", null, Kinetic.Factory.afterSetFilter), Kinetic.Factory.addGetterSetter(Kinetic.Node, "embossBlend", !1, null, Kinetic.Factory.afterSetFilter),
    function() {
        function y(t, e, i, n, a) {
            i -= e, a -= n;
            return 0 == i ? n + a / 2 : 0 == a ? n : a * ((t - e) / i) + n
        }
        Kinetic.Filters.Enhance = function(t) {
            var e, i, n, a, r, s, o, c, h = t.data,
                l = h.length,
                d = h[0],
                u = d,
                f = h[1],
                g = f,
                p = h[2],
                K = p,
                v = h[3],
                _ = v,
                m = this.enhance();
            if (0 !== m) {
                for (i = 0; i < l; i += 4)(e = h[i + 0]) < d ? d = e : u < e && (u = e), (e = h[i + 1]) < f ? f = e : g < e && (g = e), (e = h[i + 2]) < p ? p = e : K < e && (K = e);
                for (u === d && (u = 255, d = 0), g === f && (g = 255, f = 0), K === p && (K = 255, p = 0), _ === v && (_ = 255, v = 0), 0 < m ? (n = u + m * (255 - u), a = d - m * +d, r = g + m * (255 - g), s = f - m * +f, o = K + m * (255 - K), c = p - m * +p, 0) : (n = u + m * (u - (t = .5 * (u + d))), a = d + m * (d - t), r = g + m * (g - (t = .5 * (g + f))), s = f + m * (f - t), o = K + m * (K - (t = .5 * (K + p))), c = p + m * (p - t), _ = .5 * (_ + v)), i = 0; i < l; i += 4) h[i + 0] = y(h[i + 0], d, u, a, n), h[i + 1] = y(h[i + 1], f, g, s, r), h[i + 2] = y(h[i + 2], p, K, c, o)
            }
        }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "enhance", 0, null, Kinetic.Factory.afterSetFilter)
    }(), Kinetic.Filters.Posterize = function(t) {
        for (var e = Math.round(254 * this.levels()) + 1, i = t.data, n = i.length, a = 255 / e, r = 0; r < n; r += 1) i[r] = Math.floor(i[r] / a) * a
    }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "levels", .5, null, Kinetic.Factory.afterSetFilter), Kinetic.Filters.Noise = function(t) {
        for (var e = 255 * this.noise(), i = t.data, n = i.length, a = e / 2, r = 0; r < n; r += 4) i[r + 0] += a - 2 * a * Math.random(), i[r + 1] += a - 2 * a * Math.random(), i[r + 2] += a - 2 * a * Math.random()
    }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "noise", .2, null, Kinetic.Factory.afterSetFilter), Kinetic.Filters.Pixelate = function(t) {
        var e, i, n, a, r, s, o, c, h, l, d, u, f, g, p = Math.ceil(this.pixelSize()),
            K = t.width,
            v = t.height,
            _ = Math.ceil(K / p),
            m = Math.ceil(v / p);
        for (t = t.data, u = 0; u < _; u += 1)
            for (f = 0; f < m; f += 1) {
                for (h = (c = u * p) + p, d = (l = f * p) + p, g = o = s = r = a = 0, e = c; e < h; e += 1)
                    if (!(K <= e))
                        for (i = l; i < d; i += 1) v <= i || (a += t[(n = 4 * (K * i + e)) + 0], r += t[n + 1], s += t[n + 2], o += t[n + 3], g += 1);
                for (a /= g, r /= g, s /= g, e = c; e < h; e += 1)
                    if (!(K <= e))
                        for (i = l; i < d; i += 1) v <= i || (t[(n = 4 * (K * i + e)) + 0] = a, t[n + 1] = r, t[n + 2] = s, t[n + 3] = o)
            }
    }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "pixelSize", 8, null, Kinetic.Factory.afterSetFilter), Kinetic.Filters.Threshold = function(t) {
        for (var e = 255 * this.threshold(), i = t.data, n = i.length, a = 0; a < n; a += 1) i[a] = i[a] < e ? 0 : 255
    }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "threshold", .5, null, Kinetic.Factory.afterSetFilter), Kinetic.Filters.Sepia = function(t) {
        var e, i, n, a, r, s, o, c, h = t.data,
            l = t.width,
            d = t.height,
            u = 4 * l;
        do {
            for (e = (d - 1) * u, i = l; n = e + 4 * (i - 1), a = h[n], r = h[1 + n], c = h[2 + n], s = .393 * a + .769 * r + .189 * c, o = .349 * a + .686 * r + .168 * c, c = .272 * a + .534 * r + .131 * c, h[n] = 255 < s ? 255 : s, h[1 + n] = 255 < o ? 255 : o, h[2 + n] = 255 < c ? 255 : c, h[3 + n] = h[3 + n], --i;);
        } while (--d)
    }, Kinetic.Filters.Solarize = function(t) {
        var e = t.data,
            i = t.width,
            n = 4 * i,
            a = t.height;
        do {
            var r = (a - 1) * n,
                s = i;
            do {
                var o = r + 4 * (s - 1),
                    c = e[o],
                    h = e[1 + o],
                    l = e[2 + o]
            } while (127 < c && (c = 255 - c), 127 < h && (h = 255 - h), 127 < l && (l = 255 - l), e[o] = c, e[1 + o] = h, e[2 + o] = l, --s)
        } while (--a)
    },
    function() {
        var y = Kinetic.Util.createCanvasElement();
        Kinetic.Filters.Kaleidoscope = function(m) {
            var t, e, i, n, a, r, s, o, c, h = m.width,
                l = m.height,
                d = Math.round(this.kaleidoscopePower()),
                u = Math.round(this.kaleidoscopeAngle()),
                f = Math.floor(h * (u % 360) / 360);
            if (!(d < 1)) {
                y.width = h, y.height = l;
                var C = y.getContext("2d").getImageData(0, 0, h, l);
                ! function(t, e) {
                    for (var i, n, a, r, s, o, c, h, l = t.data, d = C.data, u = t.width, t = t.height, f = e.polarCenterX || u / 2, g = e.polarCenterY || t / 2, p = Math.sqrt(f * f + g * g), K = u - f, v = t - g, e = Math.sqrt(K * K + v * v), p = p < e ? e : p, _ = t, m = u, y = 360 / m * Math.PI / 180, S = 0; S < m; S += 1)
                        for (c = Math.sin(S * y), h = Math.cos(S * y), o = 0; o < _; o += 1) K = Math.floor(f + p * o / _ * h), n = l[0 + (i = 4 * (Math.floor(g + p * o / _ * c) * u + K))], a = l[1 + i], r = l[2 + i], s = l[3 + i], d[0 + (i = 4 * (S + o * u))] = n, d[1 + i] = a, d[2 + i] = r, d[3 + i] = s
                }(m, {
                    polarCenterX: h / 2,
                    polarCenterY: l / 2
                });
                for (var g = h / Math.pow(2, d); g <= 8;) g *= 2, --d;
                var p = g = Math.ceil(g),
                    K = 0,
                    v = p,
                    _ = 1;
                for (h < f + g && (K = p, v = 0, _ = -1), e = 0; e < l; e += 1)
                    for (t = K; t !== v; t += _) o = 4 * (h * e + Math.round(t + f) % h), n = C.data[o + 0], a = C.data[o + 1], r = C.data[o + 2], s = C.data[o + 3], c = 4 * (h * e + t), C.data[c + 0] = n, C.data[c + 1] = a, C.data[c + 2] = r, C.data[c + 3] = s;
                for (e = 0; e < l; e += 1)
                    for (p = Math.floor(g), i = 0; i < d; i += 1) {
                        for (t = 0; t < p + 1; t += 1) o = 4 * (h * e + t), n = C.data[o + 0], a = C.data[o + 1], r = C.data[o + 2], s = C.data[o + 3], c = 4 * (h * e + 2 * p - t - 1), C.data[c + 0] = n, C.data[c + 1] = a, C.data[c + 2] = r, C.data[c + 3] = s;
                        p *= 2
                    }! function(t, e) {
                        var i, n, a, r, s, o = t.data,
                            c = m.data,
                            h = t.width,
                            l = t.height,
                            d = e.polarCenterX || h / 2,
                            u = e.polarCenterY || l / 2,
                            f = Math.sqrt(d * d + u * u),
                            g = h - d,
                            p = l - u,
                            t = Math.sqrt(g * g + p * p),
                            f = f < t ? t : f,
                            K = l,
                            v = h,
                            _ = e.polarRotation || 0;
                        for (g = 0; g < h; g += 1)
                            for (p = 0; p < l; p += 1) s = g - d, a = p - u, r = Math.sqrt(s * s + a * a) * K / f, s = (180 * Math.atan2(a, s) / Math.PI + 360 + _) % 360 * v / 360, s = Math.floor(s), i = o[0 + (s = 4 * (Math.floor(r) * h + s))], n = o[1 + s], a = o[2 + s], r = o[3 + s], c[0 + (s = 4 * (p * h + g))] = i, c[1 + s] = n, c[2 + s] = a, c[3 + s] = r
                    }(C, {
                        polarRotation: 0
                    })
            }
        }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "kaleidoscopePower", 2, null, Kinetic.Factory.afterSetFilter), Kinetic.Factory.addGetterSetter(Kinetic.Node, "kaleidoscopeAngle", 0, null, Kinetic.Factory.afterSetFilter)
    }(),
    function() {
        function t(t) {
            Kinetic.root.setTimeout(t, 1e3 / 60)
        }
        var l = Kinetic.root.performance && Kinetic.root.performance.now ? function() {
                return Kinetic.root.performance.now()
            } : function() {
                return (new Date).getTime()
            },
            e = Kinetic.root.requestAnimationFrame || Kinetic.root.webkitRequestAnimationFrame || Kinetic.root.mozRequestAnimationFrame || Kinetic.root.oRequestAnimationFrame || Kinetic.root.msRequestAnimationFrame || t;
        Kinetic.Animation = function(t, e) {
            var i = Kinetic.Animation;
            this.func = t, this.setLayers(e), this.id = i.animIdCounter++, this.frame = {
                time: 0,
                timeDiff: 0,
                lastTime: l()
            }
        }, Kinetic.Animation.prototype = {
            setLayers: function(t) {
                var e = t ? 0 < t.length ? t : [t] : [];
                this.layers = e
            },
            getLayers: function() {
                return this.layers
            },
            addLayer: function(t) {
                var e, i, n = this.layers;
                if (n) {
                    for (e = n.length, i = 0; i < e; i++)
                        if (n[i]._id === t._id) return !1
                } else this.layers = [];
                return this.layers.push(t), !0
            },
            isRunning: function() {
                for (var t = Kinetic.Animation.animations, e = t.length, i = 0; i < e; i++)
                    if (t[i].id === this.id) return !0;
                return !1
            },
            start: function() {
                var t = Kinetic.Animation;
                this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = l(), t._addAnimation(this)
            },
            stop: function() {
                Kinetic.Animation._removeAnimation(this)
            },
            _updateFrameObject: function(t) {
                this.frame.timeDiff = t - this.frame.lastTime, this.frame.lastTime = t, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff
            }
        }, Kinetic.Animation.animations = [], Kinetic.Animation.animIdCounter = 0, Kinetic.Animation.animRunning = !1, Kinetic.Animation._addAnimation = function(t) {
            this.animations.push(t), this._handleAnimation()
        }, Kinetic.Animation._removeAnimation = function(t) {
            for (var e = t.id, i = this.animations, n = i.length, a = 0; a < n; a++)
                if (i[a].id === e) {
                    this.animations.splice(a, 1);
                    break
                }
        }, Kinetic.Animation._runFrames = function() {
            for (var t, e, i, n, a, r, s, o = {}, c = this.animations, h = 0; h < c.length; h++) {
                for (e = (t = c[h]).layers, i = t.func, t._updateFrameObject(l()), a = e.length, n = 0; n < a; n++) void 0 !== (r = e[n])._id && (o[r._id] = r);
                i && i.call(t, t.frame)
            }
            for (s in o) o[s].draw()
        }, Kinetic.Animation._animationLoop = function() {
            var t = Kinetic.Animation;
            t.animations.length ? (function() {
                e.apply(Kinetic.root, arguments)
            }(t._animationLoop), t._runFrames()) : t.animRunning = !1
        }, Kinetic.Animation._handleAnimation = function() {
            this.animRunning || (this.animRunning = !0, this._animationLoop())
        };
        var i = Kinetic.Node.prototype.moveTo;
        Kinetic.Node.prototype.moveTo = function(t) {
            i.call(this, t)
        }, Kinetic.Layer.prototype.batchDraw = function() {
            var t = this,
                e = Kinetic.Animation;
            this.batchAnim || (this.batchAnim = new e(function() {
                t.lastBatchDrawTime && 500 < l() - t.lastBatchDrawTime && t.batchAnim.stop()
            }, this)), this.lastBatchDrawTime = l(), this.batchAnim.isRunning() || (this.draw(), this.batchAnim.start())
        }, Kinetic.Stage.prototype.batchDraw = function() {
            this.getChildren().each(function(t) {
                t.batchDraw()
            })
        }
    }((0, eval)("this")),
    function() {
        var c = {
                node: 1,
                duration: 1,
                easing: 1,
                onFinish: 1,
                yoyo: 1
            },
            h = 0;
        Kinetic.Tween = function(t) {
            var e, i = this,
                n = t.node,
                a = n._id,
                r = t.duration || 1,
                s = t.easing || Kinetic.Easings.Linear,
                o = !!t.yoyo;
            for (e in this.node = n, this._id = h++, this.anim = new Kinetic.Animation(function() {
                    i.tween.onEnterFrame()
                }, n.getLayer()), this.tween = new l(e, function(t) {
                    i._tweenFunc(t)
                }, s, 0, 1, 1e3 * r, o), this._addListeners(), Kinetic.Tween.attrs[a] || (Kinetic.Tween.attrs[a] = {}), Kinetic.Tween.attrs[a][this._id] || (Kinetic.Tween.attrs[a][this._id] = {}), Kinetic.Tween.tweens[a] || (Kinetic.Tween.tweens[a] = {}), t) void 0 === c[e] && this._addAttr(e, t[e]);
            this.reset(), this.onFinish = t.onFinish, this.onReset = t.onReset
        }, Kinetic.Tween.attrs = {}, Kinetic.Tween.tweens = {}, Kinetic.Tween.prototype = {
            _addAttr: function(t, e) {
                var i, n, a, r, s = this.node,
                    o = s._id,
                    c = Kinetic.Tween.tweens[o][t];
                if (c && delete Kinetic.Tween.attrs[o][c][t], i = s.getAttr(t), Kinetic.Util._isArray(e))
                    for (n = [], r = e.length, a = 0; a < r; a++) n.push(e[a] - i[a]);
                else n = e - i;
                Kinetic.Tween.attrs[o][this._id][t] = {
                    start: i,
                    diff: n
                }, Kinetic.Tween.tweens[o][t] = this._id
            },
            _tweenFunc: function(t) {
                var e, i, n, a, r, s, o, c = this.node,
                    h = Kinetic.Tween.attrs[c._id][this._id];
                for (e in h) {
                    if (n = (i = h[e]).start, a = i.diff, Kinetic.Util._isArray(n))
                        for (r = [], o = n.length, s = 0; s < o; s++) r.push(n[s] + a[s] * t);
                    else r = n + a * t;
                    c.setAttr(e, r)
                }
            },
            _addListeners: function() {
                var t = this;
                this.tween.onPlay = function() {
                    t.anim.start()
                }, this.tween.onReverse = function() {
                    t.anim.start()
                }, this.tween.onPause = function() {
                    t.anim.stop()
                }, this.tween.onFinish = function() {
                    t.onFinish && t.onFinish()
                }, this.tween.onReset = function() {
                    t.onReset && t.onReset()
                }
            },
            play: function() {
                return this.tween.play(), this
            },
            reverse: function() {
                return this.tween.reverse(), this
            },
            reset: function() {
                return this.node, this.tween.reset(), this
            },
            seek: function(t) {
                return this.node, this.tween.seek(1e3 * t), this
            },
            pause: function() {
                return this.tween.pause(), this
            },
            finish: function() {
                return this.node, this.tween.finish(), this
            },
            destroy: function() {
                var t, e = this.node._id,
                    i = this._id,
                    n = Kinetic.Tween.tweens[e];
                for (t in this.pause(), n) delete Kinetic.Tween.tweens[e][t];
                delete Kinetic.Tween.attrs[e][i]
            }
        };
        var l = function(t, e, i, n, a, r, s) {
            this.prop = t, this.propFunc = e, this.begin = n, this._pos = n, this.duration = r, this._change = 0, this.prevPos = 0, this.yoyo = s, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = i, this._change = a - this.begin, this.pause()
        };
        l.prototype = {
            fire: function(t) {
                t = this[t];
                t && t()
            },
            setTime: function(t) {
                t > this.duration ? this.yoyo ? (this._time = this.duration, this.reverse()) : this.finish() : t < 0 ? this.yoyo ? (this._time = 0, this.play()) : this.reset() : (this._time = t, this.update())
            },
            getTime: function() {
                return this._time
            },
            setPosition: function(t) {
                this.prevPos = this._pos, this.propFunc(t), this._pos = t
            },
            getPosition: function(t) {
                return void 0 === t && (t = this._time), this.func(t, this.begin, this._change, this.duration)
            },
            play: function() {
                this.state = 2, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onPlay")
            },
            reverse: function() {
                this.state = 3, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse")
            },
            seek: function(t) {
                this.pause(), this._time = t, this.update(), this.fire("onSeek")
            },
            reset: function() {
                this.pause(), this._time = 0, this.update(), this.fire("onReset")
            },
            finish: function() {
                this.pause(), this._time = this.duration, this.update(), this.fire("onFinish")
            },
            update: function() {
                this.setPosition(this.getPosition(this._time))
            },
            onEnterFrame: function() {
                var t = this.getTimer() - this._startTime;
                2 === this.state ? this.setTime(t) : 3 === this.state && this.setTime(this.duration - t)
            },
            pause: function() {
                this.state = 1, this.fire("onPause")
            },
            getTimer: function() {
                return (new Date).getTime()
            }
        }, Kinetic.Easings = {
            BackEaseIn: function(t, e, i, n) {
                return i * (t /= n) * t * (2.70158 * t - 1.70158) + e
            },
            BackEaseOut: function(t, e, i, n) {
                return i * ((t = t / n - 1) * t * (2.70158 * t + 1.70158) + 1) + e
            },
            BackEaseInOut: function(t, e, i, n) {
                var a = 1.70158;
                return (t /= n / 2) < 1 ? i / 2 * t * t * ((1 + (a *= 1.525)) * t - a) + e : i / 2 * ((t -= 2) * t * ((1 + (a *= 1.525)) * t + a) + 2) + e
            },
            ElasticEaseIn: function(t, e, i, n, a, r) {
                var s = 0;
                return 0 === t ? e : 1 == (t /= n) ? e + i : (r = r || .3 * n, s = !a || a < Math.abs(i) ? (a = i, r / 4) : r / (2 * Math.PI) * Math.asin(i / a), -(a * Math.pow(2, 10 * --t) * Math.sin(2 * (t * n - s) * Math.PI / r)) + e)
            },
            ElasticEaseOut: function(t, e, i, n, a, r) {
                var s = 0;
                return 0 === t ? e : 1 == (t /= n) ? e + i : (r = r || .3 * n, s = !a || a < Math.abs(i) ? (a = i, r / 4) : r / (2 * Math.PI) * Math.asin(i / a), a * Math.pow(2, -10 * t) * Math.sin(2 * (t * n - s) * Math.PI / r) + i + e)
            },
            ElasticEaseInOut: function(t, e, i, n, a, r) {
                var s = 0;
                return 0 === t ? e : 2 == (t /= n / 2) ? e + i : (r = r || .3 * n * 1.5, s = !a || a < Math.abs(i) ? (a = i, r / 4) : r / (2 * Math.PI) * Math.asin(i / a), t < 1 ? -.5 * a * Math.pow(2, 10 * --t) * Math.sin(2 * (t * n - s) * Math.PI / r) + e : a * Math.pow(2, -10 * --t) * Math.sin(2 * (t * n - s) * Math.PI / r) * .5 + i + e)
            },
            BounceEaseOut: function(t, e, i, n) {
                return (t /= n) < 1 / 2.75 ? 7.5625 * i * t * t + e : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
            },
            BounceEaseIn: function(t, e, i, n) {
                return i - Kinetic.Easings.BounceEaseOut(n - t, 0, i, n) + e
            },
            BounceEaseInOut: function(t, e, i, n) {
                return t < n / 2 ? .5 * Kinetic.Easings.BounceEaseIn(2 * t, 0, i, n) + e : .5 * Kinetic.Easings.BounceEaseOut(2 * t - n, 0, i, n) + .5 * i + e
            },
            EaseIn: function(t, e, i, n) {
                return i * (t /= n) * t + e
            },
            EaseOut: function(t, e, i, n) {
                return -i * (t /= n) * (t - 2) + e
            },
            EaseInOut: function(t, e, i, n) {
                return (t /= n / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e
            },
            StrongEaseIn: function(t, e, i, n) {
                return i * (t /= n) * t * t * t * t + e
            },
            StrongEaseOut: function(t, e, i, n) {
                return i * ((t = t / n - 1) * t * t * t * t + 1) + e
            },
            StrongEaseInOut: function(t, e, i, n) {
                return (t /= n / 2) < 1 ? i / 2 * t * t * t * t * t + e : i / 2 * ((t -= 2) * t * t * t * t + 2) + e
            },
            Linear: function(t, e, i, n) {
                return i * t / n + e
            }
        }
    }(),
    function() {
        Kinetic.DD = {
            anim: new Kinetic.Animation,
            isDragging: !1,
            offset: {
                x: 0,
                y: 0
            },
            node: null,
            _drag: function(t) {
                var e = Kinetic.DD,
                    i = e.node;
                if (i) {
                    if (!e.isDragging) {
                        var n = i.getStage().getPointerPosition(),
                            a = i.dragDistance();
                        if (Math.max(Math.abs(n.x - e.startPointerPos.x), Math.abs(n.y - e.startPointerPos.y)) < a) return
                    }
                    i._setDragPosition(t), e.isDragging || (e.isDragging = !0, i.fire("dragstart", {
                        type: "dragstart",
                        target: i,
                        evt: t
                    }, !0)), i.fire("dragmove", {
                        type: "dragmove",
                        target: i,
                        evt: t
                    }, !0)
                }
            },
            _endDragBefore: function(t) {
                var e, i = Kinetic.DD,
                    n = i.node;
                n && (n.nodeType, e = n.getLayer(), i.anim.stop(), i.isDragging && (i.isDragging = !1, Kinetic.listenClickTap = !1, t && (t.dragEndNode = n)), delete i.node, (e || n).draw())
            },
            _endDragAfter: function(t) {
                var e = (t = t || {}).dragEndNode;
                t && e && e.fire("dragend", {
                    type: "dragend",
                    target: e,
                    evt: t
                }, !0)
            }
        }, Kinetic.Node.prototype.startDrag = function() {
            var t = Kinetic.DD,
                e = this.getStage(),
                i = this.getLayer(),
                n = e.getPointerPosition(),
                e = this.getAbsolutePosition();
            n && (t.node && t.node.stopDrag(), t.node = this, t.startPointerPos = n, t.offset.x = n.x - e.x, t.offset.y = n.y - e.y, t.anim.setLayers(i || this.getLayers()), t.anim.start(), this._setDragPosition())
        }, Kinetic.Node.prototype._setDragPosition = function(t) {
            var e = Kinetic.DD,
                i = this.getStage().getPointerPosition(),
                n = this.getDragBoundFunc();
            i && (e = {
                x: i.x - e.offset.x,
                y: i.y - e.offset.y
            }, void 0 !== n && (e = n.call(this, e, t)), this.setAbsolutePosition(e))
        }, Kinetic.Node.prototype.stopDrag = function() {
            var t = Kinetic.DD,
                e = {};
            t._endDragBefore(e), t._endDragAfter(e)
        }, Kinetic.Node.prototype.setDraggable = function(t) {
            this._setAttr("draggable", t), this._dragChange()
        };
        var e = Kinetic.Node.prototype.destroy;
        Kinetic.Node.prototype.destroy = function() {
            var t = Kinetic.DD;
            t.node && t.node._id === this._id && this.stopDrag(), e.call(this)
        }, Kinetic.Node.prototype.isDragging = function() {
            var t = Kinetic.DD;
            return t.node && t.node._id === this._id && t.isDragging
        }, Kinetic.Node.prototype._listenDrag = function() {
            var e = this;
            this._dragCleanup(), "Stage" === this.getClassName() ? this.on("contentMousedown.kinetic contentTouchstart.kinetic", function(t) {
                Kinetic.DD.node || e.startDrag(t)
            }) : this.on("mousedown.kinetic touchstart.kinetic", function(t) {
                Kinetic.DD.node || e.startDrag(t)
            })
        }, Kinetic.Node.prototype._dragChange = function() {
            var t, e;
            this.attrs.draggable ? this._listenDrag() : (this._dragCleanup(), t = this.getStage(), e = Kinetic.DD, t && e.node && e.node._id === this._id && e.node.stopDrag())
        }, Kinetic.Node.prototype._dragCleanup = function() {
            "Stage" === this.getClassName() ? (this.off("contentMousedown.kinetic"), this.off("contentTouchstart.kinetic")) : (this.off("mousedown.kinetic"), this.off("touchstart.kinetic"))
        }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "dragBoundFunc"), Kinetic.Factory.addGetter(Kinetic.Node, "draggable", !1), Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, "draggable");
        var t = Kinetic.document.documentElement;
        t.addEventListener("mouseup", Kinetic.DD._endDragBefore, !0), t.addEventListener("touchend", Kinetic.DD._endDragBefore, !0), t.addEventListener("mouseup", Kinetic.DD._endDragAfter, !1), t.addEventListener("touchend", Kinetic.DD._endDragAfter, !1)
    }(), Kinetic.Util.addMethods(Kinetic.Container, {
        __init: function(t) {
            this.children = new Kinetic.Collection, Kinetic.Node.call(this, t)
        },
        getChildren: function(e) {
            if (e) {
                var i = new Kinetic.Collection;
                return this.children.each(function(t) {
                    e(t) && i.push(t)
                }), i
            }
            return this.children
        },
        hasChildren: function() {
            return 0 < this.getChildren().length
        },
        removeChildren: function() {
            for (var t, e = Kinetic.Collection.toCollection(this.children), i = 0; i < e.length; i++) delete(t = e[i]).parent, t.index = 0, t.hasChildren() && t.removeChildren(), t.remove();
            return e = null, this.children = new Kinetic.Collection, this
        },
        destroyChildren: function() {
            for (var t, e = Kinetic.Collection.toCollection(this.children), i = 0; i < e.length; i++) delete(t = e[i]).parent, t.index = 0, t.destroy();
            return e = null, this.children = new Kinetic.Collection, this
        },
        add: function(t) {
            if (!(1 < arguments.length)) {
                if (t.getParent()) return void t.moveTo(this);
                var e = this.children;
                return this._validateAdd(t), t.index = e.length, t.parent = this, e.push(t), this._fire("add", {
                    child: t
                }), this
            }
            for (var i = 0; i < arguments.length; i++) this.add(arguments[i])
        },
        destroy: function() {
            this.hasChildren() && this.destroyChildren(), Kinetic.Node.prototype.destroy.call(this)
        },
        find: function(t) {
            for (var e, i, n, a, r, s = [], o = t.replace(/ /g, "").split(","), c = o.length, h = 0; h < c; h++)
                if ("#" === (i = o[h]).charAt(0))(n = this._getNodeById(i.slice(1))) && s.push(n);
                else if ("." === i.charAt(0)) n = this._getNodesByName(i.slice(1)), s = s.concat(n);
            else
                for (r = (a = this.getChildren()).length, e = 0; e < r; e++) s = s.concat(a[e]._get(i));
            return Kinetic.Collection.toCollection(s)
        },
        _getNodeById: function(t) {
            t = Kinetic.ids[t];
            return void 0 !== t && this.isAncestorOf(t) ? t : null
        },
        _getNodesByName: function(t) {
            t = Kinetic.names[t] || [];
            return this._getDescendants(t)
        },
        _get: function(t) {
            for (var e = Kinetic.Node.prototype._get.call(this, t), i = this.getChildren(), n = i.length, a = 0; a < n; a++) e = e.concat(i[a]._get(t));
            return e
        },
        toObject: function() {
            var t = Kinetic.Node.prototype.toObject.call(this);
            t.children = [];
            for (var e = this.getChildren(), i = e.length, n = 0; n < i; n++) {
                var a = e[n];
                t.children.push(a.toObject())
            }
            return t
        },
        _getDescendants: function(t) {
            for (var e = [], i = t.length, n = 0; n < i; n++) {
                var a = t[n];
                this.isAncestorOf(a) && e.push(a)
            }
            return e
        },
        isAncestorOf: function(t) {
            for (var e = t.getParent(); e;) {
                if (e._id === this._id) return !0;
                e = e.getParent()
            }
            return !1
        },
        clone: function(t) {
            var e = Kinetic.Node.prototype.clone.call(this, t);
            return this.getChildren().each(function(t) {
                e.add(t.clone())
            }), e
        },
        getAllIntersections: function(e) {
            var i = [];
            return this.find("Shape").each(function(t) {
                t.isVisible() && t.intersects(e) && i.push(t)
            }), i
        },
        _setChildrenIndices: function() {
            this.children.each(function(t, e) {
                t.index = e
            })
        },
        drawScene: function(t, e) {
            var i = this.getLayer(),
                n = t || i && i.getCanvas(),
                t = n && n.getContext(),
                i = this._cache.canvas,
                i = i && i.scene;
            return this.isVisible() && (i ? this._drawCachedSceneCanvas(t) : this._drawChildren(n, "drawScene", e)), this
        },
        drawHit: function(t, e) {
            var i = this.getLayer(),
                n = t || i && i.hitCanvas,
                t = n && n.getContext(),
                i = this._cache.canvas,
                i = i && i.hit;
            return this.shouldDrawHit() && (i ? this._drawCachedHitCanvas(t) : this._drawChildren(n, "drawHit", e)), this
        },
        _drawChildren: function(e, i, n) {
            var t, a, r = this.getLayer(),
                s = e && e.getContext(),
                o = this.getClipWidth(),
                c = this.getClipHeight(),
                h = o && c;
            h && r && (t = this.getClipX(), a = this.getClipY(), s.save(), r._applyTransform(this, s), s.beginPath(), s.rect(t, a, o, c), s.clip(), s.reset()), this.children.each(function(t) {
                t[i](e, n)
            }), h && s.restore()
        }
    }), Kinetic.Util.extend(Kinetic.Container, Kinetic.Node), Kinetic.Container.prototype.get = Kinetic.Container.prototype.find, Kinetic.Factory.addComponentsGetterSetter(Kinetic.Container, "clip", ["x", "y", "width", "height"]), Kinetic.Factory.addGetterSetter(Kinetic.Container, "clipX"), Kinetic.Factory.addGetterSetter(Kinetic.Container, "clipY"), Kinetic.Factory.addGetterSetter(Kinetic.Container, "clipWidth"), Kinetic.Factory.addGetterSetter(Kinetic.Container, "clipHeight"), Kinetic.Collection.mapMethods(Kinetic.Container),
    function() {
        function n(t) {
            t.fill()
        }

        function a(t) {
            t.stroke()
        }

        function r(t) {
            t.fill()
        }

        function s(t) {
            t.stroke()
        }

        function o() {
            this._clearCache(t)
        }
        var t = "hasShadow";
        Kinetic.Util.addMethods(Kinetic.Shape, {
            __init: function(t) {
                this.nodeType = "Shape", this._fillFunc = n, this._strokeFunc = a, this._fillFuncHit = r, this._strokeFuncHit = s;
                for (var e, i = Kinetic.shapes; !(e = Kinetic.Util.getRandomColor()) || e in i;);
                i[this.colorKey = e] = this, Kinetic.Node.call(this, t), this.on("shadowColorChange.kinetic shadowBlurChange.kinetic shadowOffsetChange.kinetic shadowOpacityChange.kinetic shadowEnabledChange.kinetic", o)
            },
            hasChildren: function() {
                return !1
            },
            getChildren: function() {
                return []
            },
            getContext: function() {
                return this.getLayer().getContext()
            },
            getCanvas: function() {
                return this.getLayer().getCanvas()
            },
            hasShadow: function() {
                return this._getCache(t, this._hasShadow)
            },
            _hasShadow: function() {
                return this.getShadowEnabled() && 0 !== this.getShadowOpacity() && !!(this.getShadowColor() || this.getShadowBlur() || this.getShadowOffsetX() || this.getShadowOffsetY())
            },
            hasFill: function() {
                return !!(this.getFill() || this.getFillPatternImage() || this.getFillLinearGradientColorStops() || this.getFillRadialGradientColorStops())
            },
            hasStroke: function() {
                return !!(this.stroke() || this.strokeRed() || this.strokeGreen() || this.strokeBlue())
            },
            _get: function(t) {
                return this.className === t || this.nodeType === t ? [this] : []
            },
            intersects: function(t) {
                var e = this.getStage().bufferHitCanvas;
                return e.getContext().clear(), this.drawScene(e), 0 < e.context.getImageData(Math.round(t.x), Math.round(t.y), 1, 1).data[3]
            },
            destroy: function() {
                Kinetic.Node.prototype.destroy.call(this), delete Kinetic.shapes[this.colorKey]
            },
            _useBufferCanvas: function() {
                return (this.hasShadow() || 1 !== this.getAbsoluteOpacity()) && this.hasFill() && this.hasStroke() && this.getStage()
            },
            drawScene: function(t, e) {
                var i = this.getLayer(),
                    n = (t || i.getCanvas()).getContext(),
                    a = this._cache.canvas,
                    r = this.sceneFunc(),
                    s = this.hasShadow();
                return this.isVisible() && (a ? this._drawCachedSceneCanvas(n) : r && (n.save(), this._useBufferCanvas() ? ((a = (t = this.getStage().bufferCanvas).getContext()).clear(), a.save(), a._applyLineJoin(this), i._applyTransform(this, a, e), r.call(this, a), a.restore(), s && (n.save(), n._applyShadow(this), n.drawImage(t._canvas, 0, 0), n.restore()), n._applyOpacity(this), n.drawImage(t._canvas, 0, 0)) : (n._applyLineJoin(this), i._applyTransform(this, n, e), s && (n.save(), n._applyShadow(this), r.call(this, n), n.restore()), n._applyOpacity(this), r.call(this, n)), n.restore())), this
            },
            drawHit: function(t, e) {
                var i = this.getLayer(),
                    n = (t || i.hitCanvas).getContext(),
                    a = this.hitFunc() || this.sceneFunc(),
                    t = this._cache.canvas,
                    t = t && t.hit;
                return this.shouldDrawHit() && (t ? this._drawCachedHitCanvas(n) : a && (n.save(), n._applyLineJoin(this), i._applyTransform(this, n, e), a.call(this, n), n.restore())), this
            },
            drawHitFromCache: function(t) {
                var e, i, n, a, r, s, o = t || 0,
                    c = this._cache.canvas,
                    t = this._getCachedSceneCanvas(),
                    h = t.getContext(),
                    l = c.hit.getContext(),
                    d = t.getWidth(),
                    u = t.getHeight();
                l.clear();
                try {
                    for (e = h.getImageData(0, 0, d, u).data, n = (i = l.getImageData(0, 0, d, u)).data, a = e.length, r = Kinetic.Util._hexToRgb(this.colorKey), s = 0; s < a; s += 4) o < e[s + 3] && (n[s] = r.r, n[s + 1] = r.g, n[s + 2] = r.b, n[s + 3] = 255);
                    l.putImageData(i, 0, 0)
                } catch (t) {
                    Kinetic.Util.warn("Unable to draw hit graph from cached scene canvas. " + t.message)
                }
                return this
            }
        }), Kinetic.Util.extend(Kinetic.Shape, Kinetic.Node), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "stroke"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "strokeRed", 0, Kinetic.Validators.RGBComponent), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "strokeGreen", 0, Kinetic.Validators.RGBComponent), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "strokeBlue", 0, Kinetic.Validators.RGBComponent), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "strokeAlpha", 1, Kinetic.Validators.alphaComponent), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "strokeWidth", 2), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "lineJoin"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "lineCap"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "sceneFunc"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "hitFunc"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "dash"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "shadowColor"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "shadowRed", 0, Kinetic.Validators.RGBComponent), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "shadowGreen", 0, Kinetic.Validators.RGBComponent), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "shadowBlue", 0, Kinetic.Validators.RGBComponent), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "shadowAlpha", 1, Kinetic.Validators.alphaComponent), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "shadowBlur"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "shadowOpacity"), Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, "shadowOffset", ["x", "y"]), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "shadowOffsetX", 0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "shadowOffsetY", 0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillPatternImage"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fill"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillRed", 0, Kinetic.Validators.RGBComponent), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillGreen", 0, Kinetic.Validators.RGBComponent), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillBlue", 0, Kinetic.Validators.RGBComponent), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillAlpha", 1, Kinetic.Validators.alphaComponent), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillPatternX", 0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillPatternY", 0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillLinearGradientColorStops"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillRadialGradientStartRadius", 0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillRadialGradientEndRadius", 0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillRadialGradientColorStops"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillPatternRepeat", "repeat"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillEnabled", !0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "strokeEnabled", !0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "shadowEnabled", !0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "dashEnabled", !0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "strokeScaleEnabled", !0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillPriority", "color"), Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, "fillPatternOffset", ["x", "y"]), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillPatternOffsetX", 0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillPatternOffsetY", 0), Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, "fillPatternScale", ["x", "y"]), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillPatternScaleX", 1), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillPatternScaleY", 1), Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, "fillLinearGradientStartPoint", ["x", "y"]), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillLinearGradientStartPointX", 0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillLinearGradientStartPointY", 0), Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, "fillLinearGradientEndPoint", ["x", "y"]), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillLinearGradientEndPointX", 0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillLinearGradientEndPointY", 0), Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, "fillRadialGradientStartPoint", ["x", "y"]), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillRadialGradientStartPointX", 0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillRadialGradientStartPointY", 0), Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, "fillRadialGradientEndPoint", ["x", "y"]), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillRadialGradientEndPointX", 0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillRadialGradientEndPointY", 0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillPatternRotation", 0), Kinetic.Factory.backCompat(Kinetic.Shape, {
            dashArray: "dash",
            getDashArray: "getDash",
            setDashArray: "getDash",
            drawFunc: "sceneFunc",
            getDrawFunc: "getSceneFunc",
            setDrawFunc: "setSceneFunc",
            drawHitFunc: "hitFunc",
            getDrawHitFunc: "getHitFunc",
            setDrawHitFunc: "setHitFunc"
        }), Kinetic.Collection.mapMethods(Kinetic.Shape)
    }(),
    function() {
        var n = "mouseout",
            a = "mouseleave",
            r = "mouseover",
            s = "mousemove",
            i = "mousedown",
            o = "mouseup",
            c = "touchstart",
            h = "touchend",
            l = "touchmove",
            d = "_",
            e = [i, s, o, n, c, l, h, r],
            u = e.length;
        Kinetic.Util.addMethods(Kinetic.Stage, {
            ___init: function(t) {
                this.nodeType = "Stage", Kinetic.Container.call(this, t), this._id = Kinetic.idCounter++, this._buildDOM(), this._bindContentEvents(), this._enableNestedTransforms = !1, Kinetic.stages.push(this)
            },
            _validateAdd: function(t) {
                "Layer" !== t.getType() && Kinetic.Util.error("You may only add layers to the stage.")
            },
            setContainer: function(t) {
                if ("string" == typeof t) {
                    var e = t;
                    if (!(t = Kinetic.document.getElementById(t))) throw "Can not find container in document with id " + e
                }
                return this._setAttr("container", t), this
            },
            shouldDrawHit: function() {
                return !0
            },
            draw: function() {
                return Kinetic.Node.prototype.draw.call(this), this
            },
            setHeight: function(t) {
                return Kinetic.Node.prototype.setHeight.call(this, t), this._resizeDOM(), this
            },
            setWidth: function(t) {
                return Kinetic.Node.prototype.setWidth.call(this, t), this._resizeDOM(), this
            },
            clear: function() {
                for (var t = this.children, e = t.length, i = 0; i < e; i++) t[i].clear();
                return this
            },
            clone: function(t) {
                return (t = t || {}).container = Kinetic.document.createElement("div"), Kinetic.Container.prototype.clone.call(this, t)
            },
            destroy: function() {
                var t = this.content;
                Kinetic.Container.prototype.destroy.call(this), t && Kinetic.Util._isInDocument(t) && this.getContainer().removeChild(t);
                t = Kinetic.stages.indexOf(this); - 1 < t && Kinetic.stages.splice(t, 1)
            },
            getPointerPosition: function() {
                return this.pointerPos
            },
            getStage: function() {
                return this
            },
            getContent: function() {
                return this.content
            },
            toDataURL: function(a) {
                var r = (a = a || {}).mimeType || null,
                    s = a.quality || null,
                    t = a.x || 0,
                    e = a.y || 0,
                    o = new Kinetic.SceneCanvas({
                        width: a.width || this.getWidth(),
                        height: a.height || this.getHeight(),
                        pixelRatio: 1
                    }),
                    c = o.getContext()._context,
                    h = this.children;
                (t || e) && c.translate(-1 * t, -1 * e),
                    function t(e) {
                        var i = h[e].toDataURL(),
                            n = new Kinetic.window.Image;
                        n.onload = function() {
                            c.drawImage(n, 0, 0), e < h.length - 1 ? t(e + 1) : a.callback(o.toDataURL(r, s))
                        }, n.src = i
                    }(0)
            },
            toImage: function(t) {
                var e = t.callback;
                t.callback = function(t) {
                    Kinetic.Util._getImage(t, function(t) {
                        e(t)
                    })
                }, this.toDataURL(t)
            },
            getIntersection: function(t) {
                for (var e, i = this.getChildren(), n = i.length - 1; 0 <= n; n--)
                    if (e = i[n].getIntersection(t)) return e;
                return null
            },
            _resizeDOM: function() {
                if (this.content) {
                    var t, e, i = this.getWidth(),
                        n = this.getHeight(),
                        a = this.getChildren(),
                        r = a.length;
                    for (this.content.style.width = i + "px", this.content.style.height = n + "px", this.bufferCanvas.setSize(i, n), this.bufferHitCanvas.setSize(i, n), t = 0; t < r; t++)(e = a[t]).getCanvas().setSize(i, n), e.hitCanvas.setSize(i, n), e.draw()
                }
            },
            add: function(t) {
                if (!(1 < arguments.length)) return Kinetic.Container.prototype.add.call(this, t), t._setCanvasSize(this.width(), this.height()), t.draw(), this.content.appendChild(t.canvas._canvas), this;
                for (var e = 0; e < arguments.length; e++) this.add(arguments[e])
            },
            getParent: function() {
                return null
            },
            getLayer: function() {
                return null
            },
            getLayers: function() {
                return this.getChildren()
            },
            _bindContentEvents: function() {
                for (var t = 0; t < u; t++) ! function(e, i) {
                    e.content.addEventListener(i, function(t) {
                        e[d + i](t)
                    }, !1)
                }(this, e[t])
            },
            _mouseover: function(t) {
                Kinetic.UA.mobile || (this._setPointerPosition(t), this._fire("contentMouseover", {
                    evt: t
                }))
            },
            _mouseout: function(t) {
                var e;
                Kinetic.UA.mobile || (this._setPointerPosition(t), (e = this.targetShape) && !Kinetic.isDragging() && (e._fireAndBubble(n, {
                    evt: t
                }), e._fireAndBubble(a, {
                    evt: t
                }), this.targetShape = null), this.pointerPos = void 0, this._fire("contentMouseout", {
                    evt: t
                }))
            },
            _mousemove: function(t) {
                var e, i;
                Kinetic.UA.mobile || (this._setPointerPosition(t), e = Kinetic.DD, (i = this.getIntersection(this.getPointerPosition())) && i.isListening() ? Kinetic.isDragging() || this.targetShape && this.targetShape._id === i._id ? i._fireAndBubble(s, {
                    evt: t
                }) : (this.targetShape && (this.targetShape._fireAndBubble(n, {
                    evt: t
                }, i), this.targetShape._fireAndBubble(a, {
                    evt: t
                }, i)), i._fireAndBubble(r, {
                    evt: t
                }, this.targetShape), i._fireAndBubble("mouseenter", {
                    evt: t
                }, this.targetShape), this.targetShape = i) : this.targetShape && !Kinetic.isDragging() && (this.targetShape._fireAndBubble(n, {
                    evt: t
                }), this.targetShape._fireAndBubble(a, {
                    evt: t
                }), this.targetShape = null), this._fire("contentMousemove", {
                    evt: t
                }), e && e._drag(t)), t.preventDefault && t.preventDefault()
            },
            _mousedown: function(t) {
                var e;
                Kinetic.UA.mobile || (this._setPointerPosition(t), e = this.getIntersection(this.getPointerPosition()), Kinetic.listenClickTap = !0, e && e.isListening() && (this.clickStartShape = e)._fireAndBubble(i, {
                    evt: t
                }), this._fire("contentMousedown", {
                    evt: t
                })), t.preventDefault && t.preventDefault()
            },
            _mouseup: function(t) {
                var e, i, n;
                Kinetic.UA.mobile || (this._setPointerPosition(t), e = this.getIntersection(this.getPointerPosition()), i = this.clickStartShape, n = !1, Kinetic.inDblClickWindow ? (n = !0, Kinetic.inDblClickWindow = !1) : Kinetic.inDblClickWindow = !0, setTimeout(function() {
                    Kinetic.inDblClickWindow = !1
                }, Kinetic.dblClickWindow), e && e.isListening() && (e._fireAndBubble(o, {
                    evt: t
                }), Kinetic.listenClickTap && i && i._id === e._id && (e._fireAndBubble("click", {
                    evt: t
                }), n && e._fireAndBubble("dblclick", {
                    evt: t
                }))), this._fire("contentMouseup", {
                    evt: t
                }), Kinetic.listenClickTap && (this._fire("contentClick", {
                    evt: t
                }), n && this._fire("contentDblclick", {
                    evt: t
                })), Kinetic.listenClickTap = !1), t.preventDefault && t.preventDefault()
            },
            _touchstart: function(t) {
                this._setPointerPosition(t);
                var e = this.getIntersection(this.getPointerPosition());
                Kinetic.listenClickTap = !0, e && e.isListening() && ((this.tapStartShape = e)._fireAndBubble(c, {
                    evt: t
                }), e.isListening() && t.preventDefault && t.preventDefault()), this._fire("contentTouchstart", {
                    evt: t
                })
            },
            _touchend: function(t) {
                this._setPointerPosition(t);
                var e = this.getIntersection(this.getPointerPosition()),
                    i = !1;
                Kinetic.inDblClickWindow ? (i = !0, Kinetic.inDblClickWindow = !1) : Kinetic.inDblClickWindow = !0, setTimeout(function() {
                    Kinetic.inDblClickWindow = !1
                }, Kinetic.dblClickWindow), e && e.isListening() && (e._fireAndBubble(h, {
                    evt: t
                }), Kinetic.listenClickTap && e._id === this.tapStartShape._id && (e._fireAndBubble("tap", {
                    evt: t
                }), i && e._fireAndBubble("dbltap", {
                    evt: t
                })), e.isListening() && t.preventDefault && t.preventDefault()), Kinetic.listenClickTap && (this._fire("contentTouchend", {
                    evt: t
                }), i && this._fire("contentDbltap", {
                    evt: t
                })), Kinetic.listenClickTap = !1
            },
            _touchmove: function(t) {
                this._setPointerPosition(t);
                var e = Kinetic.DD,
                    i = this.getIntersection(this.getPointerPosition());
                i && i.isListening() && (i._fireAndBubble(l, {
                    evt: t
                }), i.isListening() && t.preventDefault && t.preventDefault()), this._fire("contentTouchmove", {
                    evt: t
                }), e && e._drag(t)
            },
            _setPointerPosition: function(t) {
                var e, i = this._getContentPosition(),
                    n = t.offsetX,
                    a = t.clientX,
                    r = null,
                    s = null;
                void 0 !== (t = t || window.event).touches ? 0 < t.touches.length && (r = (e = t.touches[0]).clientX - i.left, s = e.clientY - i.top) : void 0 !== n ? (r = n, s = t.offsetY) : "mozilla" === Kinetic.UA.browser ? (r = t.layerX, s = t.layerY) : void 0 !== a && i && (r = a - i.left, s = t.clientY - i.top), null !== r && null !== s && (this.pointerPos = {
                    x: r,
                    y: s
                })
            },
            _getContentPosition: function() {
                var t = this.content.getBoundingClientRect ? this.content.getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: t.top,
                    left: t.left
                }
            },
            _buildDOM: function() {
                var t = this.getContainer();
                if (!t) {
                    if (Kinetic.Util.isBrowser()) throw "Stage has not container. But container is required";
                    t = Kinetic.document.createElement("div")
                }
                t.innerHTML = "", this.content = Kinetic.document.createElement("div"), this.content.style.position = "relative", this.content.style.display = "inline-block", this.content.className = "kineticjs-content", this.content.setAttribute("role", "presentation"), t.appendChild(this.content), this.bufferCanvas = new Kinetic.SceneCanvas({
                    pixelRatio: 1
                }), this.bufferHitCanvas = new Kinetic.HitCanvas, this._resizeDOM()
            },
            _onContent: function(t, e) {
                for (var i, n = t.split(" "), a = n.length, r = 0; r < a; r++) i = n[r], this.content.addEventListener(i, e, !1)
            },
            cache: function() {
                Kinetic.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.")
            },
            clearCache: function() {}
        }), Kinetic.Util.extend(Kinetic.Stage, Kinetic.Container), Kinetic.Factory.addGetter(Kinetic.Stage, "container"), Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Stage, "container")
    }(), Kinetic.Util.addMethods(Kinetic.BaseLayer, {
        ___init: function(t) {
            this.nodeType = "Layer", Kinetic.Container.call(this, t)
        },
        createPNGStream: function() {
            return this.canvas._canvas.createPNGStream()
        },
        getCanvas: function() {
            return this.canvas
        },
        getHitCanvas: function() {
            return this.hitCanvas
        },
        getContext: function() {
            return this.getCanvas().getContext()
        },
        clear: function(t) {
            return this.getContext().clear(t), this.getHitCanvas().getContext().clear(t), this
        },
        setZIndex: function(t) {
            Kinetic.Node.prototype.setZIndex.call(this, t);
            var e = this.getStage();
            return e && (e.content.removeChild(this.getCanvas()._canvas), t < e.getChildren().length - 1 ? e.content.insertBefore(this.getCanvas()._canvas, e.getChildren()[t + 1].getCanvas()._canvas) : e.content.appendChild(this.getCanvas()._canvas)), this
        },
        moveToTop: function() {
            Kinetic.Node.prototype.moveToTop.call(this);
            var t = this.getStage();
            t && (t.content.removeChild(this.getCanvas()._canvas), t.content.appendChild(this.getCanvas()._canvas))
        },
        moveUp: function() {
            var t;
            !Kinetic.Node.prototype.moveUp.call(this) || (t = this.getStage()) && (t.content.removeChild(this.getCanvas()._canvas), this.index < t.getChildren().length - 1 ? t.content.insertBefore(this.getCanvas()._canvas, t.getChildren()[this.index + 1].getCanvas()._canvas) : t.content.appendChild(this.getCanvas()._canvas))
        },
        moveDown: function() {
            var t, e;
            !Kinetic.Node.prototype.moveDown.call(this) || (t = this.getStage()) && (e = t.getChildren(), t.content.removeChild(this.getCanvas()._canvas), t.content.insertBefore(this.getCanvas()._canvas, e[this.index + 1].getCanvas()._canvas))
        },
        moveToBottom: function() {
            var t, e;
            !Kinetic.Node.prototype.moveToBottom.call(this) || (t = this.getStage()) && (e = t.getChildren(), t.content.removeChild(this.getCanvas()._canvas), t.content.insertBefore(this.getCanvas()._canvas, e[1].getCanvas()._canvas))
        },
        getLayer: function() {
            return this
        },
        remove: function() {
            var t = this.getCanvas()._canvas;
            return Kinetic.Node.prototype.remove.call(this), t && t.parentNode && Kinetic.Util._isInDocument(t) && t.parentNode.removeChild(t), this
        },
        getStage: function() {
            return this.parent
        }
    }), Kinetic.Util.extend(Kinetic.BaseLayer, Kinetic.Container), Kinetic.Factory.addGetterSetter(Kinetic.BaseLayer, "clearBeforeDraw", !0), Kinetic.Collection.mapMethods(Kinetic.BaseLayer),
    function() {
        var a = [{
                x: 0,
                y: 0
            }, {
                x: -1,
                y: 0
            }, {
                x: -1,
                y: -1
            }, {
                x: 0,
                y: -1
            }, {
                x: 1,
                y: -1
            }, {
                x: 1,
                y: 0
            }, {
                x: 1,
                y: 1
            }, {
                x: 0,
                y: 1
            }, {
                x: -1,
                y: 1
            }],
            r = a.length;
        Kinetic.Util.addMethods(Kinetic.Layer, {
            ____init: function(t) {
                this.nodeType = "Layer", this.canvas = new Kinetic.SceneCanvas, this.hitCanvas = new Kinetic.HitCanvas, Kinetic.BaseLayer.call(this, t)
            },
            _setCanvasSize: function(t, e) {
                this.canvas.setSize(t, e), this.hitCanvas.setSize(t, e)
            },
            _validateAdd: function(t) {
                t = t.getType();
                "Group" !== t && "Shape" !== t && Kinetic.Util.error("You may only add groups and shapes to a layer.")
            },
            getIntersection: function(t) {
                var e, i, n;
                if (!this.hitGraphEnabled() || !this.isVisible()) return null;
                for (i = 0; i < r; i++) {
                    if (n = a[i], n = (e = this._getIntersection({
                            x: t.x + n.x,
                            y: t.y + n.y
                        })).shape) return n;
                    if (!e.antialiased) return null
                }
            },
            _getIntersection: function(t) {
                var e = this.hitCanvas.context._context.getImageData(t.x, t.y, 1, 1).data,
                    t = e[3];
                return 255 === t ? (e = Kinetic.Util._rgbToHex(e[0], e[1], e[2]), {
                    shape: Kinetic.shapes["#" + e]
                }) : 0 < t ? {
                    antialiased: !0
                } : {}
            },
            drawScene: function(t, e) {
                var i = this.getLayer(),
                    i = t || i && i.getCanvas();
                return this._fire("beforeDraw", {
                    node: this
                }), this.getClearBeforeDraw() && i.getContext().clear(), Kinetic.Container.prototype.drawScene.call(this, i, e), this._fire("draw", {
                    node: this
                }), this
            },
            _applyTransform: function(t, e, i) {
                i = t.getAbsoluteTransform(i).getMatrix();
                e.transform(i[0], i[1], i[2], i[3], i[4], i[5])
            },
            drawHit: function(t, e) {
                var i = this.getLayer(),
                    t = t || i && i.hitCanvas;
                return i && i.getClearBeforeDraw() && i.getHitCanvas().getContext().clear(), Kinetic.Container.prototype.drawHit.call(this, t, e), this
            },
            clear: function(t) {
                return this.getContext().clear(t), this.getHitCanvas().getContext().clear(t), this
            },
            setVisible: function(t) {
                return Kinetic.Node.prototype.setVisible.call(this, t), t ? (this.getCanvas()._canvas.style.display = "block", this.hitCanvas._canvas.style.display = "block") : (this.getCanvas()._canvas.style.display = "none", this.hitCanvas._canvas.style.display = "none"), this
            },
            enableHitGraph: function() {
                return this.setHitGraphEnabled(!0), this
            },
            disableHitGraph: function() {
                return this.setHitGraphEnabled(!1), this
            }
        }), Kinetic.Util.extend(Kinetic.Layer, Kinetic.BaseLayer), Kinetic.Factory.addGetterSetter(Kinetic.Layer, "hitGraphEnabled", !0), Kinetic.Collection.mapMethods(Kinetic.Layer)
    }(), Kinetic.Util.addMethods(Kinetic.FastLayer, {
        ____init: function(t) {
            this.nodeType = "Layer", this.canvas = new Kinetic.SceneCanvas, Kinetic.BaseLayer.call(this, t)
        },
        _validateAdd: function(t) {
            "Shape" !== t.getType() && Kinetic.Util.error("You may only add shapes to a fast layer.")
        },
        _setCanvasSize: function(t, e) {
            this.canvas.setSize(t, e)
        },
        hitGraphEnabled: function() {
            return !1
        },
        getIntersection: function() {
            return null
        },
        drawScene: function(t) {
            var e = this.getLayer(),
                e = t || e && e.getCanvas();
            return this.getClearBeforeDraw() && e.getContext().clear(), Kinetic.Container.prototype.drawScene.call(this, e), this
        },
        _applyTransform: function(t, e, i) {
            i && i._id === this._id || (t = t.getTransform().getMatrix(), e.transform(t[0], t[1], t[2], t[3], t[4], t[5]))
        },
        draw: function() {
            return this.drawScene(), this
        },
        clear: function(t) {
            return this.getContext().clear(t), this
        },
        setVisible: function(t) {
            return Kinetic.Node.prototype.setVisible.call(this, t), this.getCanvas()._canvas.style.display = t ? "block" : "none", this
        }
    }), Kinetic.Util.extend(Kinetic.FastLayer, Kinetic.BaseLayer), Kinetic.Collection.mapMethods(Kinetic.FastLayer), Kinetic.Util.addMethods(Kinetic.Group, {
        ___init: function(t) {
            this.nodeType = "Group", Kinetic.Container.call(this, t)
        },
        _validateAdd: function(t) {
            t = t.getType();
            "Group" !== t && "Shape" !== t && Kinetic.Util.error("You may only add groups and shapes to groups.")
        }
    }), Kinetic.Util.extend(Kinetic.Group, Kinetic.Container), Kinetic.Collection.mapMethods(Kinetic.Group), Kinetic.Rect = function(t) {
        this.___init(t)
    }, Kinetic.Rect.prototype = {
        ___init: function(t) {
            Kinetic.Shape.call(this, t), this.className = "Rect", this.sceneFunc(this._sceneFunc)
        },
        _sceneFunc: function(t) {
            var e = this.getCornerRadius(),
                i = this.getWidth(),
                n = this.getHeight();
            t.beginPath(), e ? (t.moveTo(e, 0), t.lineTo(i - e, 0), t.arc(i - e, e, e, 3 * Math.PI / 2, 0, !1), t.lineTo(i, n - e), t.arc(i - e, n - e, e, 0, Math.PI / 2, !1), t.lineTo(e, n), t.arc(e, n - e, e, Math.PI / 2, Math.PI, !1), t.lineTo(0, e), t.arc(e, e, e, Math.PI, 3 * Math.PI / 2, !1)) : t.rect(0, 0, i, n), t.closePath(), t.fillStrokeShape(this)
        }
    }, Kinetic.Util.extend(Kinetic.Rect, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.Rect, "cornerRadius", 0), Kinetic.Collection.mapMethods(Kinetic.Rect),
    function() {
        var e = 2 * Math.PI - 1e-4;
        Kinetic.Circle = function(t) {
            this.___init(t)
        }, Kinetic.Circle.prototype = {
            ___init: function(t) {
                Kinetic.Shape.call(this, t), this.className = "Circle", this.sceneFunc(this._sceneFunc)
            },
            _sceneFunc: function(t) {
                t.beginPath(), t.arc(0, 0, this.getRadius(), 0, e, !1), t.closePath(), t.fillStrokeShape(this)
            },
            getWidth: function() {
                return 2 * this.getRadius()
            },
            getHeight: function() {
                return 2 * this.getRadius()
            },
            setWidth: function(t) {
                Kinetic.Node.prototype.setWidth.call(this, t), this.setRadius(t / 2)
            },
            setHeight: function(t) {
                Kinetic.Node.prototype.setHeight.call(this, t), this.setRadius(t / 2)
            }
        }, Kinetic.Util.extend(Kinetic.Circle, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.Circle, "radius", 0), Kinetic.Collection.mapMethods(Kinetic.Circle)
    }(),
    function() {
        var n = 2 * Math.PI - 1e-4;
        Kinetic.Ellipse = function(t) {
            this.___init(t)
        }, Kinetic.Ellipse.prototype = {
            ___init: function(t) {
                Kinetic.Shape.call(this, t), this.className = "Ellipse", this.sceneFunc(this._sceneFunc)
            },
            _sceneFunc: function(t) {
                var e = this.getRadius(),
                    i = e.x,
                    e = e.y;
                t.beginPath(), t.save(), i !== e && t.scale(1, e / i), t.arc(0, 0, i, 0, n, !1), t.restore(), t.closePath(), t.fillStrokeShape(this)
            },
            getWidth: function() {
                return 2 * this.getRadius().x
            },
            getHeight: function() {
                return 2 * this.getRadius().y
            },
            setWidth: function(t) {
                Kinetic.Node.prototype.setWidth.call(this, t), this.setRadius({
                    x: t / 2
                })
            },
            setHeight: function(t) {
                Kinetic.Node.prototype.setHeight.call(this, t), this.setRadius({
                    y: t / 2
                })
            }
        }, Kinetic.Util.extend(Kinetic.Ellipse, Kinetic.Shape), Kinetic.Factory.addComponentsGetterSetter(Kinetic.Ellipse, "radius", ["x", "y"]), Kinetic.Factory.addGetterSetter(Kinetic.Ellipse, "radiusX", 0), Kinetic.Factory.addGetterSetter(Kinetic.Ellipse, "radiusY", 0), Kinetic.Collection.mapMethods(Kinetic.Ellipse)
    }(),
    function() {
        var e = 2 * Math.PI - 1e-4;
        Kinetic.Ring = function(t) {
            this.___init(t)
        }, Kinetic.Ring.prototype = {
            ___init: function(t) {
                Kinetic.Shape.call(this, t), this.className = "Ring", this.sceneFunc(this._sceneFunc)
            },
            _sceneFunc: function(t) {
                t.beginPath(), t.arc(0, 0, this.getInnerRadius(), 0, e, !1), t.moveTo(this.getOuterRadius(), 0), t.arc(0, 0, this.getOuterRadius(), e, 0, !0), t.closePath(), t.fillStrokeShape(this)
            },
            getWidth: function() {
                return 2 * this.getOuterRadius()
            },
            getHeight: function() {
                return 2 * this.getOuterRadius()
            },
            setWidth: function(t) {
                Kinetic.Node.prototype.setWidth.call(this, t), this.setOuterRadius(t / 2)
            },
            setHeight: function(t) {
                Kinetic.Node.prototype.setHeight.call(this, t), this.setOuterRadius(t / 2)
            }
        }, Kinetic.Util.extend(Kinetic.Ring, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.Ring, "innerRadius", 0), Kinetic.Factory.addGetterSetter(Kinetic.Ring, "outerRadius", 0), Kinetic.Collection.mapMethods(Kinetic.Ring)
    }(), Kinetic.Wedge = function(t) {
        this.___init(t)
    }, Kinetic.Wedge.prototype = {
        ___init: function(t) {
            Kinetic.Shape.call(this, t), this.className = "Wedge", this.sceneFunc(this._sceneFunc)
        },
        _sceneFunc: function(t) {
            t.beginPath(), t.arc(0, 0, this.getRadius(), 0, Kinetic.getAngle(this.getAngle()), this.getClockwise()), t.lineTo(0, 0), t.closePath(), t.fillStrokeShape(this)
        }
    }, Kinetic.Util.extend(Kinetic.Wedge, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.Wedge, "radius", 0), Kinetic.Factory.addGetterSetter(Kinetic.Wedge, "angle", 0), Kinetic.Factory.addGetterSetter(Kinetic.Wedge, "clockwise", !1), Kinetic.Factory.backCompat(Kinetic.Wedge, {
        angleDeg: "angle",
        getAngleDeg: "getAngle",
        setAngleDeg: "setAngle"
    }), Kinetic.Collection.mapMethods(Kinetic.Wedge), Math.PI, Kinetic.Arc = function(t) {
        this.___init(t)
    }, Kinetic.Arc.prototype = {
        ___init: function(t) {
            Kinetic.Shape.call(this, t), this.className = "Arc", this.sceneFunc(this._sceneFunc)
        },
        _sceneFunc: function(t) {
            var e = Kinetic.getAngle(this.angle()),
                i = this.clockwise();
            t.beginPath(), t.arc(0, 0, this.getOuterRadius(), 0, e, i), t.arc(0, 0, this.getInnerRadius(), e, 0, !i), t.closePath(), t.fillStrokeShape(this)
        }
    }, Kinetic.Util.extend(Kinetic.Arc, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.Arc, "innerRadius", 0), Kinetic.Factory.addGetterSetter(Kinetic.Arc, "outerRadius", 0), Kinetic.Factory.addGetterSetter(Kinetic.Arc, "angle", 0), Kinetic.Factory.addGetterSetter(Kinetic.Arc, "clockwise", !1), Kinetic.Collection.mapMethods(Kinetic.Arc), Kinetic.Image = function(t) {
        this.___init(t)
    }, Kinetic.Image.prototype = {
        ___init: function(t) {
            Kinetic.Shape.call(this, t), this.className = "Image", this.sceneFunc(this._sceneFunc), this.hitFunc(this._hitFunc)
        },
        _useBufferCanvas: function() {
            return (this.hasShadow() || 1 !== this.getAbsoluteOpacity()) && this.hasStroke()
        },
        _sceneFunc: function(t) {
            var e, i, n, a = this.getWidth(),
                r = this.getHeight(),
                s = this.getImage();
            s && (i = (e = this.getCrop()).width, n = e.height, n = i && n ? [s, e.x, e.y, i, n, 0, 0, a, r] : [s, 0, 0, a, r]), t.beginPath(), t.rect(0, 0, a, r), t.closePath(), t.fillStrokeShape(this), s && t.drawImage.apply(t, n)
        },
        _hitFunc: function(t) {
            var e = this.getWidth(),
                i = this.getHeight();
            t.beginPath(), t.rect(0, 0, e, i), t.closePath(), t.fillStrokeShape(this)
        },
        getWidth: function() {
            var t = this.getImage();
            return this.attrs.width || (t ? t.width : 0)
        },
        getHeight: function() {
            var t = this.getImage();
            return this.attrs.height || (t ? t.height : 0)
        }
    }, Kinetic.Util.extend(Kinetic.Image, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.Image, "image"), Kinetic.Factory.addComponentsGetterSetter(Kinetic.Image, "crop", ["x", "y", "width", "height"]), Kinetic.Factory.addGetterSetter(Kinetic.Image, "cropX", 0), Kinetic.Factory.addGetterSetter(Kinetic.Image, "cropY", 0), Kinetic.Factory.addGetterSetter(Kinetic.Image, "cropWidth", 0), Kinetic.Factory.addGetterSetter(Kinetic.Image, "cropHeight", 0), Kinetic.Collection.mapMethods(Kinetic.Image),
    function() {
        function i(t) {
            t.fillText(this.partialText, 0, 0)
        }

        function n(t) {
            t.strokeText(this.partialText, 0, 0)
        }
        var b = "auto",
            a = ["fontFamily", "fontSize", "fontStyle", "fontVariant", "padding", "align", "lineHeight", "text", "width", "height", "wrap"],
            r = a.length,
            P = Kinetic.Util.createCanvasElement().getContext("2d");
        Kinetic.Text = function(t) {
            this.___init(t)
        }, Kinetic.Text.prototype = {
            ___init: function(t) {
                void 0 === t.width && (t.width = b), void 0 === t.height && (t.height = b), Kinetic.Shape.call(this, t), this._fillFunc = i, this._strokeFunc = n, this.className = "Text";
                for (var e = 0; e < r; e++) this.on(a[e] + "Change.kinetic", this._setTextData);
                this._setTextData(), this.sceneFunc(this._sceneFunc), this.hitFunc(this._hitFunc)
            },
            _sceneFunc: function(t) {
                var e, i = this.getPadding(),
                    n = this.getTextHeight(),
                    a = this.getLineHeight() * n,
                    r = this.textArr,
                    s = r.length,
                    o = this.getWidth();
                for (t.setAttr("font", this._getContextFont()), t.setAttr("textBaseline", "middle"), t.setAttr("textAlign", "left"), t.save(), t.translate(i, 0), t.translate(0, i + n / 2), e = 0; e < s; e++) {
                    var c = r[e],
                        h = c.text,
                        c = c.width;
                    t.save(), "right" === this.getAlign() ? t.translate(o - c - 2 * i, 0) : "center" === this.getAlign() && t.translate((o - c - 2 * i) / 2, 0), this.partialText = h, t.fillStrokeShape(this), t.restore(), t.translate(0, a)
                }
                t.restore()
            },
            _hitFunc: function(t) {
                var e = this.getWidth(),
                    i = this.getHeight();
                t.beginPath(), t.rect(0, 0, e, i), t.closePath(), t.fillStrokeShape(this)
            },
            setText: function(t) {
                t = Kinetic.Util._isString(t) ? t : t.toString();
                return this._setAttr("text", t), this
            },
            getWidth: function() {
                return this.attrs.width === b ? this.getTextWidth() + 2 * this.getPadding() : this.attrs.width
            },
            getHeight: function() {
                return this.attrs.height === b ? this.getTextHeight() * this.textArr.length * this.getLineHeight() + 2 * this.getPadding() : this.attrs.height
            },
            getTextWidth: function() {
                return this.textWidth
            },
            getTextHeight: function() {
                return this.textHeight
            },
            _getTextSize: function(t) {
                var e = P,
                    i = this.getFontSize();
                return e.save(), e.font = this._getContextFont(), t = e.measureText(t), e.restore(), {
                    width: t.width,
                    height: parseInt(i, 10)
                }
            },
            _getContextFont: function() {
                return this.getFontStyle() + " " + this.getFontVariant() + " " + this.getFontSize() + "px " + this.getFontFamily()
            },
            _addTextLine: function(t, e) {
                return this.textArr.push({
                    text: t,
                    width: e
                })
            },
            _getTextWidth: function(t) {
                return P.measureText(t).width
            },
            _setTextData: function() {
                var t = this.getText().split("\n"),
                    e = +this.getFontSize(),
                    i = 0,
                    n = this.getLineHeight() * e,
                    a = this.attrs.width,
                    r = this.attrs.height,
                    s = a !== b,
                    o = r !== b,
                    c = this.getPadding(),
                    h = a - 2 * c,
                    l = r - 2 * c,
                    d = 0,
                    c = this.getWrap(),
                    u = "none" !== c,
                    f = "char" !== c && u;
                this.textArr = [], P.save(), P.font = this._getContextFont();
                for (var g = 0, p = t.length; g < p; ++g) {
                    var K = t[g],
                        v = this._getTextWidth(K);
                    if (s && h < v)
                        for (; 0 < K.length;) {
                            for (var _, m = 0, y = K.length, S = "", C = 0; m < y;) {
                                var x = m + y >>> 1,
                                    F = K.slice(0, 1 + x),
                                    w = this._getTextWidth(F);
                                w <= h ? (m = 1 + x, S = F, C = w) : y = x
                            }
                            if (!S) break;
                            if (!f || 0 < (_ = Math.max(S.lastIndexOf(" "), S.lastIndexOf("-")) + 1) && (m = _, S = S.slice(0, m), C = this._getTextWidth(S)), this._addTextLine(S, C), i = Math.max(i, C), d += n, !u || o && l < d + n) break;
                            if (0 < (K = K.slice(m)).length && (v = this._getTextWidth(K)) <= h) {
                                this._addTextLine(K, v), d += n, i = Math.max(i, v);
                                break
                            }
                        } else this._addTextLine(K, v), d += n, i = Math.max(i, v);
                    if (o && l < d + n) break
                }
                P.restore(), this.textHeight = e, this.textWidth = i
            }
        }, Kinetic.Util.extend(Kinetic.Text, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.Text, "fontFamily", "Arial"), Kinetic.Factory.addGetterSetter(Kinetic.Text, "fontSize", 12), Kinetic.Factory.addGetterSetter(Kinetic.Text, "fontStyle", "normal"), Kinetic.Factory.addGetterSetter(Kinetic.Text, "fontVariant", "normal"), Kinetic.Factory.addGetterSetter(Kinetic.Text, "padding", 0), Kinetic.Factory.addGetterSetter(Kinetic.Text, "align", "left"), Kinetic.Factory.addGetterSetter(Kinetic.Text, "lineHeight", 1), Kinetic.Factory.addGetterSetter(Kinetic.Text, "wrap", "word"), Kinetic.Factory.addGetter(Kinetic.Text, "text", ""), Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Text, "text"), Kinetic.Collection.mapMethods(Kinetic.Text)
    }(), Kinetic.Line = function(t) {
        this.___init(t)
    }, Kinetic.Line.prototype = {
        ___init: function(t) {
            Kinetic.Shape.call(this, t), this.className = "Line", this.on("pointsChange.kinetic tensionChange.kinetic closedChange.kinetic", function() {
                this._clearCache("tensionPoints")
            }), this.sceneFunc(this._sceneFunc)
        },
        _sceneFunc: function(t) {
            var e, i, n, a = this.getPoints(),
                r = a.length,
                s = this.getTension(),
                o = this.getClosed();
            if (t.beginPath(), t.moveTo(a[0], a[1]), 0 !== s && 4 < r) {
                for (i = (e = this.getTensionPoints()).length, n = o ? 0 : 4, o || t.quadraticCurveTo(e[0], e[1], e[2], e[3]); n < i - 2;) t.bezierCurveTo(e[n++], e[n++], e[n++], e[n++], e[n++], e[n++]);
                o || t.quadraticCurveTo(e[i - 2], e[i - 1], a[r - 2], a[r - 1])
            } else
                for (n = 2; n < r; n += 2) t.lineTo(a[n], a[n + 1]);
            o ? (t.closePath(), t.fillStrokeShape(this)) : t.strokeShape(this)
        },
        getTensionPoints: function() {
            return this._getCache("tensionPoints", this._getTensionPoints)
        },
        _getTensionPoints: function() {
            return this.getClosed() ? this._getTensionPointsClosed() : Kinetic.Util._expandPoints(this.getPoints(), this.getTension())
        },
        _getTensionPointsClosed: function() {
            var t = this.getPoints(),
                e = t.length,
                i = this.getTension(),
                n = Kinetic.Util,
                a = n._getControlPoints(t[e - 2], t[e - 1], t[0], t[1], t[2], t[3], i),
                n = n._getControlPoints(t[e - 4], t[e - 3], t[e - 2], t[e - 1], t[0], t[1], i),
                i = Kinetic.Util._expandPoints(t, i);
            return [a[2], a[3]].concat(i).concat([n[0], n[1], t[e - 2], t[e - 1], n[2], n[3], a[0], a[1], t[0], t[1]])
        }
    }, Kinetic.Util.extend(Kinetic.Line, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.Line, "closed", !1), Kinetic.Factory.addGetterSetter(Kinetic.Line, "tension", 0), Kinetic.Factory.addGetterSetter(Kinetic.Line, "points"), Kinetic.Collection.mapMethods(Kinetic.Line), Kinetic.Sprite = function(t) {
        this.___init(t)
    }, Kinetic.Sprite.prototype = {
        ___init: function(t) {
            Kinetic.Shape.call(this, t), this.className = "Sprite", this.anim = new Kinetic.Animation, this.on("animationChange.kinetic", function() {
                this.frameIndex(0)
            }), this.on("frameRateChange.kinetic", function() {
                this.anim.isRunning() && (clearInterval(this.interval), this._setInterval())
            }), this.sceneFunc(this._sceneFunc), this.hitFunc(this._hitFunc)
        },
        _sceneFunc: function(t) {
            var e = this.getAnimation(),
                i = 4 * this.frameIndex(),
                n = this.getAnimations()[e],
                a = n[0 + i],
                r = n[1 + i],
                e = n[2 + i],
                n = n[3 + i],
                i = this.getImage();
            i && t.drawImage(i, a, r, e, n, 0, 0, e, n)
        },
        _hitFunc: function(t) {
            var e = this.getAnimation(),
                i = 4 * this.frameIndex(),
                n = this.getAnimations()[e],
                e = n[2 + i],
                i = n[3 + i];
            t.beginPath(), t.rect(0, 0, e, i), t.closePath(), t.fillShape(this)
        },
        _useBufferCanvas: function() {
            return (this.hasShadow() || 1 !== this.getAbsoluteOpacity()) && this.hasStroke()
        },
        _setInterval: function() {
            var t = this;
            this.interval = setInterval(function() {
                t._updateIndex()
            }, 1e3 / this.getFrameRate())
        },
        start: function() {
            var t = this.getLayer();
            this.anim.setLayers(t), this._setInterval(), this.anim.start()
        },
        stop: function() {
            this.anim.stop(), clearInterval(this.interval)
        },
        isRunning: function() {
            return this.anim.isRunning()
        },
        _updateIndex: function() {
            var t = this.frameIndex(),
                e = this.getAnimation(),
                e = this.getAnimations()[e].length / 4;
            this.frameIndex(t < e - 1 ? t + 1 : 0)
        }
    }, Kinetic.Util.extend(Kinetic.Sprite, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.Sprite, "animation"), Kinetic.Factory.addGetterSetter(Kinetic.Sprite, "animations"), Kinetic.Factory.addGetterSetter(Kinetic.Sprite, "image"), Kinetic.Factory.addGetterSetter(Kinetic.Sprite, "frameIndex", 0), Kinetic.Factory.addGetterSetter(Kinetic.Sprite, "frameRate", 17), Kinetic.Factory.backCompat(Kinetic.Sprite, {
        index: "frameIndex",
        getIndex: "getFrameIndex",
        setIndex: "setFrameIndex"
    }), Kinetic.Collection.mapMethods(Kinetic.Sprite), Kinetic.Path = function(t) {
        this.___init(t)
    }, Kinetic.Path.prototype = {
        ___init: function(t) {
            this.dataArray = [];
            var e = this;
            Kinetic.Shape.call(this, t), this.className = "Path", this.dataArray = Kinetic.Path.parsePathData(this.getData()), this.on("dataChange.kinetic", function() {
                e.dataArray = Kinetic.Path.parsePathData(this.getData())
            }), this.sceneFunc(this._sceneFunc)
        },
        _sceneFunc: function(t) {
            var e = this.dataArray,
                i = !1;
            t.beginPath();
            for (var n = 0; n < e.length; n++) {
                var a = e[n].command,
                    r = e[n].points;
                switch (a) {
                    case "L":
                        t.lineTo(r[0], r[1]);
                        break;
                    case "M":
                        t.moveTo(r[0], r[1]);
                        break;
                    case "C":
                        t.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                        break;
                    case "Q":
                        t.quadraticCurveTo(r[0], r[1], r[2], r[3]);
                        break;
                    case "A":
                        var s = r[0],
                            o = r[1],
                            c = r[2],
                            h = r[3],
                            l = r[4],
                            d = r[5],
                            u = r[6],
                            f = r[7],
                            g = h < c ? c : h,
                            p = h < c ? 1 : c / h,
                            c = h < c ? h / c : 1;
                        t.translate(s, o), t.rotate(u), t.scale(p, c), t.arc(0, 0, g, l, l + d, 1 - f), t.scale(1 / p, 1 / c), t.rotate(-u), t.translate(-s, -o);
                        break;
                    case "z":
                        t.closePath(), i = !0
                }
            }
            i ? t.fillStrokeShape(this) : t.strokeShape(this)
        }
    }, Kinetic.Util.extend(Kinetic.Path, Kinetic.Shape), Kinetic.Path.getLineLength = function(t, e, i, n) {
        return Math.sqrt((i - t) * (i - t) + (n - e) * (n - e))
    }, Kinetic.Path.getPointOnLine = function(t, e, i, n, a, r, s) {
        void 0 === r && (r = e), void 0 === s && (s = i);
        var o = (a - i) / (n - e + 1e-8),
            c = Math.sqrt(t * t / (1 + o * o));
        n < e && (c *= -1);
        var h, l = o * c;
        if (n === e) h = {
            x: r,
            y: s + l
        };
        else if ((s - i) / (r - e + 1e-8) == o) h = {
            x: r + c,
            y: s + l
        };
        else {
            var d = this.getLineLength(e, i, n, a);
            if (d < 1e-8) return;
            var u = (r - e) * (n - e) + (s - i) * (a - i),
                d = e + (u /= d * d) * (n - e),
                i = i + u * (a - i),
                s = this.getLineLength(r, s, d, i),
                s = Math.sqrt(t * t - s * s),
                c = Math.sqrt(s * s / (1 + o * o));
            n < e && (c *= -1), h = {
                x: d + c,
                y: i + (l = o * c)
            }
        }
        return h
    }, Kinetic.Path.getPointOnCubicBezier = function(t, e, i, n, a, r, s, o, c) {
        function h(t) {
            return t * t * t
        }

        function l(t) {
            return 3 * t * t * (1 - t)
        }

        function d(t) {
            return 3 * t * (1 - t) * (1 - t)
        }

        function u(t) {
            return (1 - t) * (1 - t) * (1 - t)
        }
        return {
            x: o * h(t) + r * l(t) + n * d(t) + e * u(t),
            y: c * h(t) + s * l(t) + a * d(t) + i * u(t)
        }
    }, Kinetic.Path.getPointOnQuadraticBezier = function(t, e, i, n, a, r, s) {
        function o(t) {
            return t * t
        }

        function c(t) {
            return 2 * t * (1 - t)
        }

        function h(t) {
            return (1 - t) * (1 - t)
        }
        return {
            x: r * o(t) + n * c(t) + e * h(t),
            y: s * o(t) + a * c(t) + i * h(t)
        }
    }, Kinetic.Path.getPointOnEllipticalArc = function(t, e, i, n, a, r) {
        var s = Math.cos(r),
            r = Math.sin(r),
            i = i * Math.cos(a),
            a = n * Math.sin(a);
        return {
            x: t + (i * s - a * r),
            y: e + (i * r + a * s)
        }
    }, Kinetic.Path.parsePathData = function(t) {
        if (!t) return [];
        for (var e = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"], i = (i = t).replace(new RegExp(" ", "g"), ","), n = 0; n < e.length; n++) i = i.replace(new RegExp(e[n], "g"), "|" + e[n]);
        for (var a = i.split("|"), r = [], s = 0, o = 0, n = 1; n < a.length; n++) {
            var c = a[n],
                h = c.charAt(0),
                l = (c = (c = (c = (c = c.slice(1)).replace(new RegExp(",-", "g"), "-")).replace(new RegExp("-", "g"), ",-")).replace(new RegExp("e,-", "g"), "e-")).split(",");
            0 < l.length && "" === l[0] && l.shift();
            for (var d = 0; d < l.length; d++) l[d] = parseFloat(l[d]);
            for (; 0 < l.length && !isNaN(l[0]);) {
                var u, f, g, p, K, v, _, m, y, S, C = null,
                    x = [],
                    F = s,
                    w = o;
                switch (h) {
                    case "l":
                        s += l.shift(), o += l.shift(), C = "L", x.push(s, o);
                        break;
                    case "L":
                        s = l.shift(), o = l.shift(), x.push(s, o);
                        break;
                    case "m":
                        var b = l.shift(),
                            P = l.shift();
                        if (s += b, o += P, C = "M", 2 < r.length && "z" === r[r.length - 1].command)
                            for (var T = r.length - 2; 0 <= T; T--)
                                if ("M" === r[T].command) {
                                    s = r[T].points[0] + b, o = r[T].points[1] + P;
                                    break
                                }
                        x.push(s, o), h = "l";
                        break;
                    case "M":
                        s = l.shift(), o = l.shift(), C = "M", x.push(s, o), h = "L";
                        break;
                    case "h":
                        s += l.shift(), C = "L", x.push(s, o);
                        break;
                    case "H":
                        s = l.shift(), C = "L", x.push(s, o);
                        break;
                    case "v":
                        o += l.shift(), C = "L", x.push(s, o);
                        break;
                    case "V":
                        o = l.shift(), C = "L", x.push(s, o);
                        break;
                    case "C":
                        x.push(l.shift(), l.shift(), l.shift(), l.shift()), s = l.shift(), o = l.shift(), x.push(s, o);
                        break;
                    case "c":
                        x.push(s + l.shift(), o + l.shift(), s + l.shift(), o + l.shift()), s += l.shift(), o += l.shift(), C = "C", x.push(s, o);
                        break;
                    case "S":
                        f = s, g = o, "C" === (u = r[r.length - 1]).command && (f = s + (s - u.points[2]), g = o + (o - u.points[3])), x.push(f, g, l.shift(), l.shift()), s = l.shift(), o = l.shift(), C = "C", x.push(s, o);
                        break;
                    case "s":
                        f = s, g = o, "C" === (u = r[r.length - 1]).command && (f = s + (s - u.points[2]), g = o + (o - u.points[3])), x.push(f, g, s + l.shift(), o + l.shift()), s += l.shift(), o += l.shift(), C = "C", x.push(s, o);
                        break;
                    case "Q":
                        x.push(l.shift(), l.shift()), s = l.shift(), o = l.shift(), x.push(s, o);
                        break;
                    case "q":
                        x.push(s + l.shift(), o + l.shift()), s += l.shift(), o += l.shift(), C = "Q", x.push(s, o);
                        break;
                    case "T":
                        f = s, g = o, "Q" === (u = r[r.length - 1]).command && (f = s + (s - u.points[0]), g = o + (o - u.points[1])), s = l.shift(), o = l.shift(), C = "Q", x.push(f, g, s, o);
                        break;
                    case "t":
                        f = s, g = o, "Q" === (u = r[r.length - 1]).command && (f = s + (s - u.points[0]), g = o + (o - u.points[1])), s += l.shift(), o += l.shift(), C = "Q", x.push(f, g, s, o);
                        break;
                    case "A":
                        p = l.shift(), K = l.shift(), v = l.shift(), _ = l.shift(), m = l.shift(), y = s, S = o, s = l.shift(), o = l.shift(), C = "A", x = this.convertEndpointToCenterParameterization(y, S, s, o, _, m, p, K, v);
                        break;
                    case "a":
                        p = l.shift(), K = l.shift(), v = l.shift(), _ = l.shift(), m = l.shift(), y = s, S = o, s += l.shift(), o += l.shift(), C = "A", x = this.convertEndpointToCenterParameterization(y, S, s, o, _, m, p, K, v)
                }
                r.push({
                    command: C || h,
                    points: x,
                    start: {
                        x: F,
                        y: w
                    },
                    pathLength: this.calcLength(F, w, C || h, x)
                })
            }
            "z" !== h && "Z" !== h || r.push({
                command: "z",
                points: [],
                start: void 0,
                pathLength: 0
            })
        }
        return r
    }, Kinetic.Path.calcLength = function(t, e, i, n) {
        var a, r, s, o, c = Kinetic.Path;
        switch (i) {
            case "L":
                return c.getLineLength(t, e, n[0], n[1]);
            case "C":
                for (a = 0, r = c.getPointOnCubicBezier(0, t, e, n[0], n[1], n[2], n[3], n[4], n[5]), o = .01; o <= 1; o += .01) s = c.getPointOnCubicBezier(o, t, e, n[0], n[1], n[2], n[3], n[4], n[5]), a += c.getLineLength(r.x, r.y, s.x, s.y), r = s;
                return a;
            case "Q":
                for (a = 0, r = c.getPointOnQuadraticBezier(0, t, e, n[0], n[1], n[2], n[3]), o = .01; o <= 1; o += .01) s = c.getPointOnQuadraticBezier(o, t, e, n[0], n[1], n[2], n[3]), a += c.getLineLength(r.x, r.y, s.x, s.y), r = s;
                return a;
            case "A":
                a = 0;
                var h = n[4],
                    l = n[5],
                    d = n[4] + l,
                    u = Math.PI / 180;
                if (Math.abs(h - d) < u && (u = Math.abs(h - d)), r = c.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], h, 0), l < 0)
                    for (o = h - u; d < o; o -= u) s = c.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], o, 0), a += c.getLineLength(r.x, r.y, s.x, s.y), r = s;
                else
                    for (o = h + u; o < d; o += u) s = c.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], o, 0), a += c.getLineLength(r.x, r.y, s.x, s.y), r = s;
                return s = c.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], d, 0), a + c.getLineLength(r.x, r.y, s.x, s.y)
        }
        return 0
    }, Kinetic.Path.convertEndpointToCenterParameterization = function(t, e, i, n, a, r, s, o, c) {
        var h = c * (Math.PI / 180),
            l = Math.cos(h) * (t - i) / 2 + Math.sin(h) * (e - n) / 2,
            d = -1 * Math.sin(h) * (t - i) / 2 + Math.cos(h) * (e - n) / 2,
            u = l * l / (s * s) + d * d / (o * o);
        1 < u && (s *= Math.sqrt(u), o *= Math.sqrt(u));
        c = Math.sqrt((s * s * o * o - s * s * d * d - o * o * l * l) / (s * s * d * d + o * o * l * l));
        a === r && (c *= -1), isNaN(c) && (c = 0);

        function f(t) {
            return Math.sqrt(t[0] * t[0] + t[1] * t[1])
        }

        function g(t, e) {
            return (t[0] * e[0] + t[1] * e[1]) / (f(t) * f(e))
        }
        u = c * s * d / o, a = c * -o * l / s, c = (t + i) / 2 + Math.cos(h) * u - Math.sin(h) * a, t = (e + n) / 2 + Math.sin(h) * u + Math.cos(h) * a, i = function(t, e) {
            return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(g(t, e))
        }, e = i([1, 0], [(l - u) / s, (d - a) / o]), n = [(l - u) / s, (d - a) / o], a = [(-1 * l - u) / s, (-1 * d - a) / o], i = i(n, a);
        return g(n, a) <= -1 && (i = Math.PI), 1 <= g(n, a) && (i = 0), 0 === r && 0 < i && (i -= 2 * Math.PI), 1 === r && i < 0 && (i += 2 * Math.PI), [c, t, s, o, e, i, h, r]
    }, Kinetic.Factory.addGetterSetter(Kinetic.Path, "data"), Kinetic.Collection.mapMethods(Kinetic.Path),
    function() {
        function i(t) {
            t.fillText(this.partialText, 0, 0)
        }

        function n(t) {
            t.strokeText(this.partialText, 0, 0)
        }
        Kinetic.TextPath = function(t) {
            this.___init(t)
        }, Kinetic.TextPath.prototype = {
            ___init: function(t) {
                var e = this;
                this.dummyCanvas = Kinetic.Util.createCanvasElement(), this.dataArray = [], Kinetic.Shape.call(this, t), this._fillFunc = i, this._strokeFunc = n, this._fillFuncHit = i, this._strokeFuncHit = n, this.className = "TextPath", this.dataArray = Kinetic.Path.parsePathData(this.attrs.data), this.on("dataChange.kinetic", function() {
                    e.dataArray = Kinetic.Path.parsePathData(this.attrs.data)
                }), this.on("textChange.kinetic textStroke.kinetic textStrokeWidth.kinetic", e._setTextData), e._setTextData(), this.sceneFunc(this._sceneFunc)
            },
            _sceneFunc: function(t) {
                t.setAttr("font", this._getContextFont()), t.setAttr("textBaseline", "middle"), t.setAttr("textAlign", "left"), t.save();
                for (var e = this.glyphInfo, i = 0; i < e.length; i++) {
                    t.save();
                    var n = e[i].p0;
                    t.translate(n.x, n.y), t.rotate(e[i].rotation), this.partialText = e[i].text, t.fillStrokeShape(this), t.restore()
                }
                t.restore()
            },
            getTextWidth: function() {
                return this.textWidth
            },
            getTextHeight: function() {
                return this.textHeight
            },
            setText: function(t) {
                Kinetic.Text.prototype.setText.call(this, t)
            },
            _getTextSize: function(t) {
                var e = this.dummyCanvas.getContext("2d");
                e.save(), e.font = this._getContextFont();
                t = e.measureText(t);
                return e.restore(), {
                    width: t.width,
                    height: parseInt(this.attrs.fontSize, 10)
                }
            },
            _setTextData: function() {
                var h = this,
                    t = this._getTextSize(this.attrs.text);
                this.textWidth = t.width, this.textHeight = t.height, this.glyphInfo = [];

                function e(t) {
                    var e = h._getTextSize(t).width,
                        i = 0,
                        n = 0;
                    for (d = void 0; .01 < Math.abs(e - i) / e && n < 25;) {
                        n++;
                        for (var a = i; void 0 === u;)(u = function() {
                            g = 0;
                            for (var t = h.dataArray, e = f + 1; e < t.length; e++) {
                                if (0 < t[e].pathLength) return t[f = e];
                                "M" == t[e].command && (l = {
                                    x: t[e].points[0],
                                    y: t[e].points[1]
                                })
                            }
                            return {}
                        }()) && a + u.pathLength < e && (a += u.pathLength, u = void 0);
                        if (u === {} || void 0 === l) return;
                        var r = !1;
                        switch (u.command) {
                            case "L":
                                Kinetic.Path.getLineLength(l.x, l.y, u.points[0], u.points[1]) > e ? d = Kinetic.Path.getPointOnLine(e, l.x, l.y, u.points[0], u.points[1], l.x, l.y) : u = void 0;
                                break;
                            case "A":
                                var s = u.points[4],
                                    o = u.points[5],
                                    c = u.points[4] + o;
                                0 === g ? g = s + 1e-8 : i < e ? g += Math.PI / 180 * o / Math.abs(o) : g -= Math.PI / 360 * o / Math.abs(o), (o < 0 && g < c || 0 <= o && c < g) && (g = c, r = !0), d = Kinetic.Path.getPointOnEllipticalArc(u.points[0], u.points[1], u.points[2], u.points[3], g, u.points[6]);
                                break;
                            case "C":
                                0 === g ? g = e > u.pathLength ? 1e-8 : e / u.pathLength : i < e ? g += (e - i) / u.pathLength : g -= (i - e) / u.pathLength, 1 < g && (g = 1, r = !0), d = Kinetic.Path.getPointOnCubicBezier(g, u.start.x, u.start.y, u.points[0], u.points[1], u.points[2], u.points[3], u.points[4], u.points[5]);
                                break;
                            case "Q":
                                0 === g ? g = e / u.pathLength : i < e ? g += (e - i) / u.pathLength : g -= (i - e) / u.pathLength, 1 < g && (g = 1, r = !0), d = Kinetic.Path.getPointOnQuadraticBezier(g, u.start.x, u.start.y, u.points[0], u.points[1], u.points[2], u.points[3])
                        }
                        void 0 !== d && (i = Kinetic.Path.getLineLength(l.x, l.y, d.x, d.y)), r && (r = !1, u = void 0)
                    }
                }
                for (var l, d, u, i = this.attrs.text.split(""), f = -1, g = 0, n = 0; n < i.length && (e(i[n]), void 0 !== l && void 0 !== d); n++) {
                    var a = Kinetic.Path.getLineLength(l.x, l.y, d.x, d.y),
                        r = Kinetic.Path.getPointOnLine(0 + a / 2, l.x, l.y, d.x, d.y),
                        a = Math.atan2(d.y - l.y, d.x - l.x);
                    this.glyphInfo.push({
                        transposeX: r.x,
                        transposeY: r.y,
                        text: i[n],
                        rotation: a,
                        p0: l,
                        p1: d
                    }), l = d
                }
            }
        }, Kinetic.TextPath.prototype._getContextFont = Kinetic.Text.prototype._getContextFont, Kinetic.Util.extend(Kinetic.TextPath, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.TextPath, "fontFamily", "Arial"), Kinetic.Factory.addGetterSetter(Kinetic.TextPath, "fontSize", 12), Kinetic.Factory.addGetterSetter(Kinetic.TextPath, "fontStyle", "normal"), Kinetic.Factory.addGetterSetter(Kinetic.TextPath, "fontVariant", "normal"), Kinetic.Factory.addGetter(Kinetic.TextPath, "text", ""), Kinetic.Collection.mapMethods(Kinetic.TextPath)
    }(), Kinetic.RegularPolygon = function(t) {
        this.___init(t)
    }, Kinetic.RegularPolygon.prototype = {
        ___init: function(t) {
            Kinetic.Shape.call(this, t), this.className = "RegularPolygon", this.sceneFunc(this._sceneFunc)
        },
        _sceneFunc: function(t) {
            var e, i, n, a = this.attrs.sides,
                r = this.attrs.radius;
            for (t.beginPath(), t.moveTo(0, 0 - r), e = 1; e < a; e++) i = r * Math.sin(2 * e * Math.PI / a), n = -1 * r * Math.cos(2 * e * Math.PI / a), t.lineTo(i, n);
            t.closePath(), t.fillStrokeShape(this)
        }
    }, Kinetic.Util.extend(Kinetic.RegularPolygon, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.RegularPolygon, "radius", 0), Kinetic.Factory.addGetterSetter(Kinetic.RegularPolygon, "sides", 0), Kinetic.Collection.mapMethods(Kinetic.RegularPolygon), Kinetic.Star = function(t) {
        this.___init(t)
    }, Kinetic.Star.prototype = {
        ___init: function(t) {
            Kinetic.Shape.call(this, t), this.className = "Star", this.sceneFunc(this._sceneFunc)
        },
        _sceneFunc: function(t) {
            var e = this.innerRadius(),
                i = this.outerRadius(),
                n = this.numPoints();
            t.beginPath(), t.moveTo(0, 0 - i);
            for (var a = 1; a < 2 * n; a++) {
                var r = a % 2 == 0 ? i : e,
                    s = r * Math.sin(a * Math.PI / n),
                    r = -1 * r * Math.cos(a * Math.PI / n);
                t.lineTo(s, r)
            }
            t.closePath(), t.fillStrokeShape(this)
        }
    }, Kinetic.Util.extend(Kinetic.Star, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.Star, "numPoints", 5), Kinetic.Factory.addGetterSetter(Kinetic.Star, "innerRadius", 0), Kinetic.Factory.addGetterSetter(Kinetic.Star, "outerRadius", 0), Kinetic.Collection.mapMethods(Kinetic.Star),
    function() {
        var a = ["fontFamily", "fontSize", "fontStyle", "padding", "lineHeight", "text"],
            r = a.length;
        Kinetic.Label = function(t) {
            this.____init(t)
        }, Kinetic.Label.prototype = {
            ____init: function(t) {
                var e = this;
                this.className = "Label", Kinetic.Group.call(this, t), this.on("add.kinetic", function(t) {
                    e._addListeners(t.child), e._sync()
                })
            },
            getText: function() {
                return this.find("Text")[0]
            },
            getTag: function() {
                return this.find("Tag")[0]
            },
            _addListeners: function(t) {
                function e() {
                    i._sync()
                }
                for (var i = this, n = 0; n < r; n++) t.on(a[n] + "Change.kinetic", e)
            },
            getWidth: function() {
                return this.getText().getWidth()
            },
            getHeight: function() {
                return this.getText().getHeight()
            },
            _sync: function() {
                var t, e, i, n, a, r, s, o = this.getText(),
                    c = this.getTag();
                if (o && c) {
                    switch (t = o.getWidth(), e = o.getHeight(), i = c.getPointerDirection(), n = c.getPointerWidth(), s = c.getPointerHeight(), r = a = 0, i) {
                        case "up":
                            a = t / 2, r = -1 * s;
                            break;
                        case "right":
                            a = t + n, r = e / 2;
                            break;
                        case "down":
                            a = t / 2, r = e + s;
                            break;
                        case "left":
                            a = -1 * n, r = e / 2
                    }
                    c.setAttrs({
                        x: -1 * a,
                        y: -1 * r,
                        width: t,
                        height: e
                    }), o.setAttrs({
                        x: -1 * a,
                        y: -1 * r
                    })
                }
            }
        }, Kinetic.Util.extend(Kinetic.Label, Kinetic.Group), Kinetic.Collection.mapMethods(Kinetic.Label), Kinetic.Tag = function(t) {
            this.___init(t)
        }, Kinetic.Tag.prototype = {
            ___init: function(t) {
                Kinetic.Shape.call(this, t), this.className = "Tag", this.sceneFunc(this._sceneFunc)
            },
            _sceneFunc: function(t) {
                var e = this.getWidth(),
                    i = this.getHeight(),
                    n = this.getPointerDirection(),
                    a = this.getPointerWidth(),
                    r = this.getPointerHeight();
                t.beginPath(), t.moveTo(0, 0), "up" === n && (t.lineTo((e - a) / 2, 0), t.lineTo(e / 2, -1 * r), t.lineTo((e + a) / 2, 0)), t.lineTo(e, 0), "right" === n && (t.lineTo(e, (i - r) / 2), t.lineTo(e + a, i / 2), t.lineTo(e, (i + r) / 2)), t.lineTo(e, i), "down" === n && (t.lineTo((e + a) / 2, i), t.lineTo(e / 2, i + r), t.lineTo((e - a) / 2, i)), t.lineTo(0, i), "left" === n && (t.lineTo(0, (i + r) / 2), t.lineTo(-1 * a, i / 2), t.lineTo(0, (i - r) / 2)), t.closePath(), t.fillStrokeShape(this)
            }
        }, Kinetic.Util.extend(Kinetic.Tag, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.Tag, "pointerDirection", "none"), Kinetic.Factory.addGetterSetter(Kinetic.Tag, "pointerWidth", 0), Kinetic.Factory.addGetterSetter(Kinetic.Tag, "pointerHeight", 0), Kinetic.Factory.addGetterSetter(Kinetic.Tag, "cornerRadius", 0), Kinetic.Collection.mapMethods(Kinetic.Tag)
    }();

/*!
 * jQuery Final Countdown
 *
 * @author Pragmatic Mates, http://pragmaticmates.com
 * @version 1.1.1
 * @license GPL 2
 * @link https://github.com/PragmaticMates/jquery-final-countdown
 */
! function(e) {
    "use strict";
    var o, s, r, a, t, d, n, c, i, h, l, u;

    function $() {
        n.draw(), c.draw(), i.draw(), h.draw()
    }

    function w(e) {
        return Math.PI / 180 * e - Math.PI / 180 * 90
    }
    e.fn.final_countdown = function(v, b) {
        if ((l = e(this)).is(":visible")) {
            var f, m, y, k, S, W, g, C, p, _ = e.extend({
                start: void 0,
                end: void 0,
                now: void 0,
                selectors: {
                    value_seconds: ".clock-seconds .val",
                    canvas_seconds: "canvas-seconds",
                    value_minutes: ".clock-minutes .val",
                    canvas_minutes: "canvas-minutes",
                    value_hours: ".clock-hours .val",
                    canvas_hours: "canvas-hours",
                    value_days: ".clock-days .val",
                    canvas_days: "canvas-days"
                },
                seconds: {
                    borderColor: "#03c0cc",
                    borderWidth: "3"
                },
                minutes: {
                    borderColor: "#03c0cc",
                    borderWidth: "3"
                },
                hours: {
                    borderColor: "#03c0cc",
                    borderWidth: "3"
                },
                days: {
                    borderColor: "#03c0cc",
                    borderWidth: "3"
                }
            }, v);
            void 0 === (o = e.extend({}, _, v)).start && (o.start = l.data("start")), void 0 === o.end && (o.end = l.data("end")), void 0 === o.now && (o.now = l.data("now")), l.data("border-color") && (o.seconds.borderColor = o.minutes.borderColor = o.hours.borderColor = o.days.borderColor = l.data("border-color")), o.now < o.start && (o.start = o.now, o.end = o.now), o.now > o.end && (o.start = o.now, o.end = o.now), "function" == typeof b && (u = b), e(window).load($), e(window).on("redraw", function() {
                switched = !1, $()
            }), e(window).on("resize", $), s = {
                total: Math.floor((o.end - o.start) / 86400),
                days: Math.floor((o.end - o.now) / 86400),
                hours: 24 - Math.floor((o.end - o.now) % 86400 / 3600),
                minutes: 60 - Math.floor((o.end - o.now) % 86400 % 3600 / 60),
                seconds: 60 - Math.floor((o.end - o.now) % 86400 % 3600 % 60)
            }, f = e("#" + o.selectors.canvas_seconds).width(), m = new Kinetic.Stage({
                container: o.selectors.canvas_seconds,
                width: f,
                height: f
            }), r = new Kinetic.Shape({
                drawFunc: function(r) {
                    var a = e("#" + o.selectors.canvas_seconds).width(),
                        t = a / 2 - o.seconds.borderWidth / 2;
                    r.beginPath(), r.arc(a / 2, a / 2, t, w(0), w(6 * s.seconds)), r.fillStrokeShape(this), e(o.selectors.value_seconds).html(60 - s.seconds)
                },
                stroke: o.seconds.borderColor,
                strokeWidth: o.seconds.borderWidth
            }), (n = new Kinetic.Layer).add(r), m.add(n), y = e("#" + o.selectors.canvas_minutes).width(), k = new Kinetic.Stage({
                container: o.selectors.canvas_minutes,
                width: y,
                height: y
            }), a = new Kinetic.Shape({
                drawFunc: function(r) {
                    var a = e("#" + o.selectors.canvas_minutes).width(),
                        t = a / 2 - o.minutes.borderWidth / 2;
                    r.beginPath(), r.arc(a / 2, a / 2, t, w(0), w(6 * s.minutes)), r.fillStrokeShape(this), e(o.selectors.value_minutes).html(60 - s.minutes)
                },
                stroke: o.minutes.borderColor,
                strokeWidth: o.minutes.borderWidth
            }), (c = new Kinetic.Layer).add(a), k.add(c), S = e("#" + o.selectors.canvas_hours).width(), W = new Kinetic.Stage({
                container: o.selectors.canvas_hours,
                width: S,
                height: S
            }), t = new Kinetic.Shape({
                drawFunc: function(r) {
                    var a = e("#" + o.selectors.canvas_hours).width(),
                        t = a / 2 - o.hours.borderWidth / 2;
                    r.beginPath(), r.arc(a / 2, a / 2, t, w(0), w(360 * s.hours / 24)), r.fillStrokeShape(this), e(o.selectors.value_hours).html(24 - s.hours)
                },
                stroke: o.hours.borderColor,
                strokeWidth: o.hours.borderWidth
            }), (i = new Kinetic.Layer).add(t), W.add(i), g = e("#" + o.selectors.canvas_days).width(), C = new Kinetic.Stage({
                container: o.selectors.canvas_days,
                width: g,
                height: g
            }), d = new Kinetic.Shape({
                drawFunc: function(r) {
                    var a = e("#" + o.selectors.canvas_days).width(),
                        t = a / 2 - o.days.borderWidth / 2,
                        d = a / 2,
                        n = a / 2;
                    r.beginPath(), 0 == s.total ? r.arc(d, n, t, w(0), w(360)) : r.arc(d, n, t, w(0), w(360 / s.total * (s.total - s.days))), r.fillStrokeShape(this), e(o.selectors.value_days).html(s.days)
                },
                stroke: o.days.borderColor,
                strokeWidth: o.days.borderWidth
            }), (h = new Kinetic.Layer).add(d), C.add(h), p = setInterval(function() {
                if (s.seconds > 59) {
                    if (60 - s.minutes == 0 && 24 - s.hours == 0 && 0 == s.days) {
                        clearInterval(p), void 0 !== u && u.call(this);
                        return
                    }
                    s.seconds = 1, s.minutes > 59 ? (s.minutes = 1, c.draw(), s.hours > 23 ? (s.hours = 1, s.days > 0 && (s.days--, h.draw())) : s.hours++, i.draw()) : s.minutes++, c.draw()
                } else s.seconds++;
                n.draw()
            }, 1e3)
        }
    }
}(jQuery);
var resetPagination = function() {
        let previousMenu = $('ul.dl-menu li.hover_active').prev('li');
        let nextMenu = $('ul.dl-menu li.hover_active').next('li');
        if (previousMenu.length <= 0) {
            $(".pagination-button .pa-previous").addClass('disabled');
        } else {
            $(".pagination-button .pa-previous").removeClass('disabled');
        }
        if (nextMenu.length <= 0) {
            $(".pagination-button .pa-next").addClass('disabled');
        } else {
            $(".pagination-button .pa-next").removeClass('disabled');
        }
    }



    /**
     * jquery.dlmenu.js v1.0.1
     * http://www.codrops.com
     *
     * Licensed under the MIT license.
     * http://www.opensource.org/licenses/mit-license.php
     * 
     * Copyright 2013, Codrops
     * http://www.codrops.com
     */
    ! function(n, i, e) {
        "use strict";
        var t = i.Modernizr,
            s = n("body");
        n.DLMenu = function(i, e) {
            this.$el = n(e), this._init(i)
        }, n.DLMenu.defaults = {
            animationClasses: {
                classin: "dl-animate-in-1",
                classout: "dl-animate-out-1"
            },
            onLevelClick: function(n, i) {
                return !1
            },
            onLinkClick: function(n, i) {
                return !1
            }
        }, n.DLMenu.prototype = {
            _init: function(i) {
                this.options = n.extend(!0, {}, n.DLMenu.defaults, i), this._config(), this.animEndEventName = ({
                    WebkitAnimation: "webkitAnimationEnd",
                    OAnimation: "oAnimationEnd",
                    msAnimation: "MSAnimationEnd",
                    animation: "animationend"
                })[t.prefixed("animation")] + ".dlmenu", this.transEndEventName = ({
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    msTransition: "MSTransitionEnd",
                    transition: "transitionend"
                })[t.prefixed("transition")] + ".dlmenu", this.supportAnimations = t.cssanimations, this.supportTransitions = t.csstransitions, this._initEvents()
            },
            _config: function() {
                this.open = !1, this.$trigger = this.$el.children(".dl-trigger"), this.$menu = this.$el.children("ul.dl-menu"), this.$menuitems = this.$menu.find("li:not(.dl-back)"), this.$el.find("ul.dl-submenu").prepend('<li class="dl-back"><a href="#">back</a></li>'), this.$back = this.$menu.find("li.dl-back")
            },
            _initEvents: function() {
                var i = this;
                this.$trigger.on("click.dlmenu", function() {
                    return i.open ? i._closeMenu() : i._openMenu(), !1
                }), this.$menuitems.on("click.dlmenu", function(e) {
                    e.stopPropagation();
                    var t = n(this),
                        s = t.children("ul.dl-submenu");
                    if (s.length > 0) {
                        var o = s.clone().css("opacity", 0).insertAfter(i.$menu),
                            a = function() {
                                i.$menu.off(i.animEndEventName).removeClass(i.options.animationClasses.classout).addClass("dl-subview"), t.addClass("dl-subviewopen").parents(".dl-subviewopen:first").removeClass("dl-subviewopen").addClass("dl-subview"), o.remove()
                            };
                        return setTimeout(function() {
                            o.addClass(i.options.animationClasses.classin), i.$menu.addClass(i.options.animationClasses.classout), i.supportAnimations ? i.$menu.on(i.animEndEventName, a) : a.call(), i.options.onLevelClick(t, t.children("a:first").text())
                        }), !1
                    }
                    i.options.onLinkClick(t, e)
                }), this.$back.on("click.dlmenu", function(e) {
                    var t = n(this),
                        s = t.parents("ul.dl-submenu:first"),
                        o = s.parent(),
                        a = s.clone().insertAfter(i.$menu),
                        l = function() {
                            i.$menu.off(i.animEndEventName).removeClass(i.options.animationClasses.classin), a.remove()
                        };
                    return setTimeout(function() {
                        a.addClass(i.options.animationClasses.classout), i.$menu.addClass(i.options.animationClasses.classin), i.supportAnimations ? i.$menu.on(i.animEndEventName, l) : l.call(), o.removeClass("dl-subviewopen");
                        var n = t.parents(".dl-subview:first");
                        n.is("li") && n.addClass("dl-subviewopen"), n.removeClass("dl-subview")
                    }), !1
                })
            },
            closeMenu: function() {
                this.open && this._closeMenu()
            },
            _closeMenu: function() {
                var n = this,
                    i = function() {
                        n.$menu.off(n.transEndEventName), n._resetMenu()
                    };
                this.$menu.removeClass("dl-menuopen"), this.$menu.addClass("dl-menu-toggle"), this.$trigger.removeClass("dl-active"), this.supportTransitions ? this.$menu.on(this.transEndEventName, i) : i.call(), this.open = !1
            },
            openMenu: function() {
                this.open || this._openMenu()
            },
            _openMenu: function() {
                var i = this;
                s.off("click").on("click.dlmenu", function() {
                    i._closeMenu()
                }), this.$menu.addClass("dl-menuopen dl-menu-toggle").on(this.transEndEventName, function() {
                    n(this).removeClass("dl-menu-toggle")
                }), this.$trigger.addClass("dl-active"), this.open = !0
            },
            _resetMenu: function() {
                this.$menu.removeClass("dl-subview"), this.$menuitems.removeClass("dl-subview dl-subviewopen")
            }
        };
        var o = function(n) {
            i.console && i.console.error(n)
        };
        n.fn.dlmenu = function(i) {
            if ("string" == typeof i) {
                var e = Array.prototype.slice.call(arguments, 1);
                this.each(function() {
                    var t = n.data(this, "dlmenu");
                    if (!t) {
                        o("cannot call methods on dlmenu prior to initialization; attempted to call method '" + i + "'");
                        return
                    }
                    if (!n.isFunction(t[i]) || "_" === i.charAt(0)) {
                        o("no such method '" + i + "' for dlmenu instance");
                        return
                    }
                    t[i].apply(t, e)
                })
            } else this.each(function() {
                var e = n.data(this, "dlmenu");
                e ? e._init() : e = n.data(this, "dlmenu", new n.DLMenu(i, this))
            });
            return this
        }
    }(jQuery, window);
//pagetransitions.js
var PageTransitions = function() {
    var a = $("#pt-main").children("div.pt-page"),
        n = (a.length, 0),
        i = !1,
        t = !1,
        e = !1,
        s = {
            WebkitAnimation: "webkitAnimationEnd",
            OAnimation: "oAnimationEnd",
            msAnimation: "MSAnimationEnd",
            animation: "animationend"
        }[Modernizr.prefixed("animation")],
        o = Modernizr.cssanimations;

    function l() {
        a.each(function() {
            var a = $(this);
            a.data("originalClassList", a.attr("class")), $(".page-top").addClass("display_none"), $(".container-fluid").addClass("display_none")
        }), a.eq(n).find(".page-top").removeClass("display_none"), a.eq(n).find(".container-fluid").removeClass("display_none"), a.eq(n).addClass("pt-page-current"), $("#dl-menu div").dlmenu({
            animationClasses: { in: "dl-animate-in-2",
                out: "dl-animate-out-2"
            },
            onLinkClick: function(a, n) {
                if (n.preventDefault(), a.hasClass("hover_active") || a.hasClass("other-menu")) return !1;
                d(a.data("animation") - 1)
            }
        }), $("#dl-menu").dlmenu({
            animationClasses: { in: "dl-animate-in-2",
                out: "dl-animate-out-2"
            },
            onLinkClick: function(a, n) {
                n.preventDefault(), d(a.data("animation") - 1)
            }
        })
    }

    function d(l) {
        var d = l.animation ? l.animation : l;
        if (i) return !1;
        i = !0;
        var p = a.eq(n);
        n = d;
        var m = a.eq(n).addClass("pt-page-current");
        inClass = "pt-page-moveFromRight", $(".page-top").addClass("display_none"), $(".container-fluid").addClass("display_none"), a.eq(n).find(".container-fluid").removeClass("display_none"), a.eq(n).addClass("pt-page-current"), p.addClass("pt-page-moveToLeft").on(s, function() {
            p.off(s), t = !0, e && r(p, m)
        }), $(".the-people-slider").slick("slickNext"), $(".ceremony-slider").slick("slickNext"), m.addClass(inClass).on(s, function() {
            m.off(s), e = !0, t && r(p, m)
        }), o || r(p, m)
    }

    function r(a, n) {
        var s, o;
        t = !1, e = !1, s = a, o = n, s.attr("class", s.data("originalClassList")), o.attr("class", o.data("originalClassList") + " pt-page-current"), i = !1, "scroll" == $(".navbar-fixed-top").css("overflow-y") && $(".navbar-fixed-top").animate({
            right: "-150px"
        }, "slow") && resetPagination();
        $(".gridlayout").isotope({
            filter: "*"
        })
    }
    return l(), {
        init: l,
        nextPage: d
    }
}();

// CountDown Clock
// Version   : 1.0.1
// Developer : Ekrem KAYA
// Website   : http://e-piksel.com
// GitHub    : https://github.com/epiksel/countdown
! function(t) {
    "use strict";
    t.fn.countdown = function(e, n) {
        var o = t.extend({
            date: null,
            offset: null,
            day: "Day",
            days: "Days",
            hour: "Hour",
            hours: "Hours",
            minute: "Minute",
            minutes: "Minutes",
            second: "Second",
            seconds: "Seconds"
        }, e);
        o.date || t.error("Date is not defined."), Date.parse(o.date) || t.error("Incorrect date format, it should look like this, 12/24/2012 12:00:00.");
        var $ = this,
            s = function() {
                var t = new Date,
                    e = t.getTime() + 6e4 * t.getTimezoneOffset();
                return new Date(e + 36e5 * o.offset)
            },
            d = setInterval(function t() {
                var e = new Date(o.date),
                    r = s(),
                    i = e - r;
                if (i < 0) {
                    clearInterval(d), n && "function" == typeof n && n();
                    return
                }
                var f = 36e5,
                    u = 24 * f,
                    a = Math.floor(i / u),
                    c = Math.floor(i % u / f),
                    l = Math.floor(i % f / 6e4),
                    h = Math.floor(i % 6e4 / 1e3),
                    x = 1 === a ? o.day : o.days,
                    m = 1 === c ? o.hour : o.hours,
                    y = 1 === l ? o.minute : o.minutes,
                    _ = 1 === h ? o.second : o.seconds;
                a = String(a).length >= 2 ? a : "0" + a, c = String(c).length >= 2 ? c : "0" + c, l = String(l).length >= 2 ? l : "0" + l, h = String(h).length >= 2 ? h : "0" + h, $.find(".days").text(a), $.find(".hours").text(c), $.find(".minutes").text(l), $.find(".seconds").text(h), $.find(".days_text").text(x), $.find(".hours_text").text(m), $.find(".minutes_text").text(y), $.find(".seconds_text").text(_)
            }, 1e3)
    }
}(jQuery);


/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */
! function(t) {
    var e = Array.prototype.slice;

    function i() {}

    function o(t) {
        if (t) {
            var o = "undefined" == typeof console ? i : function(t) {
                console.error(t)
            };
            return t.bridget = function(i, n) {
                var r, s, a;
                !(a = n).prototype.option && (a.prototype.option = function(e) {
                    t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
                }), r = i, s = n, t.fn[r] = function(i) {
                    if ("string" != typeof i) return this.each(function() {
                        var e = t.data(this, r);
                        e ? (e.option(i), e._init()) : (e = new s(this, i), t.data(this, r, e))
                    });
                    for (var n = e.call(arguments, 1), a = 0, u = this.length; a < u; a++) {
                        var p = this[a],
                            h = t.data(p, r);
                        if (!h) {
                            o("cannot call methods on " + r + " prior to initialization; attempted to call '" + i + "'");
                            continue
                        }
                        if (!t.isFunction(h[i]) || "_" === i.charAt(0)) {
                            o("no such method '" + i + "' for " + r + " instance");
                            continue
                        }
                        var l = h[i].apply(h, n);
                        if (void 0 !== l) return l
                    }
                    return this
                }
            }, t.bridget
        }
    }
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], o) : o("object" == typeof exports ? require("jquery") : t.jQuery)
}(window),
/*!
 * eventie v1.0.6
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 * MIT license
 */
function(t) {
    var e = document.documentElement,
        i = function() {};

    function o(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }
    e.addEventListener ? i = function(t, e, i) {
        t.addEventListener(e, i, !1)
    } : e.attachEvent && (i = function(t, e, i) {
        t[e + i] = i.handleEvent ? function() {
            var e = o(t);
            i.handleEvent.call(i, e)
        } : function() {
            var e = o(t);
            i.call(t, e)
        }, t.attachEvent("on" + e, t[e + i])
    });
    var n = function() {};
    e.removeEventListener ? n = function(t, e, i) {
        t.removeEventListener(e, i, !1)
    } : e.detachEvent && (n = function(t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (o) {
            t[e + i] = void 0
        }
    });
    var r = {
        bind: i,
        unbind: n
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(window), (function() {
    "use strict";

    function t() {}
    var e = t.prototype,
        i = this,
        o = i.EventEmitter;

    function n(t, e) {
        for (var i = t.length; i--;)
            if (t[i].listener === e) return i;
        return -1
    }

    function r(t) {
        return function e() {
            return this[t].apply(this, arguments)
        }
    }
    e.getListeners = function t(e) {
        var i, o, n = this._getEvents();
        if (e instanceof RegExp)
            for (o in i = {}, n) n.hasOwnProperty(o) && e.test(o) && (i[o] = n[o]);
        else i = n[e] || (n[e] = []);
        return i
    }, e.flattenListeners = function t(e) {
        var i, o = [];
        for (i = 0; i < e.length; i += 1) o.push(e[i].listener);
        return o
    }, e.getListenersAsObject = function t(e) {
        var i, o = this.getListeners(e);
        return o instanceof Array && ((i = {})[e] = o), i || o
    }, e.addListener = function t(e, i) {
        var o, r = this.getListenersAsObject(e),
            s = "object" == typeof i;
        for (o in r) r.hasOwnProperty(o) && -1 === n(r[o], i) && r[o].push(s ? i : {
            listener: i,
            once: !1
        });
        return this
    }, e.on = r("addListener"), e.addOnceListener = function t(e, i) {
        return this.addListener(e, {
            listener: i,
            once: !0
        })
    }, e.once = r("addOnceListener"), e.defineEvent = function t(e) {
        return this.getListeners(e), this
    }, e.defineEvents = function t(e) {
        for (var i = 0; i < e.length; i += 1) this.defineEvent(e[i]);
        return this
    }, e.removeListener = function t(e, i) {
        var o, r, s = this.getListenersAsObject(e);
        for (r in s) s.hasOwnProperty(r) && -1 !== (o = n(s[r], i)) && s[r].splice(o, 1);
        return this
    }, e.off = r("removeListener"), e.addListeners = function t(e, i) {
        return this.manipulateListeners(!1, e, i)
    }, e.removeListeners = function t(e, i) {
        return this.manipulateListeners(!0, e, i)
    }, e.manipulateListeners = function t(e, i, o) {
        var n, r, s = e ? this.removeListener : this.addListener,
            a = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof i || i instanceof RegExp)
            for (n = o.length; n--;) s.call(this, i, o[n]);
        else
            for (n in i) i.hasOwnProperty(n) && (r = i[n]) && ("function" == typeof r ? s.call(this, n, r) : a.call(this, n, r));
        return this
    }, e.removeEvent = function t(e) {
        var i, o = this._getEvents();
        if ("string" == typeof e) delete o[e];
        else if (e instanceof RegExp)
            for (i in o) o.hasOwnProperty(i) && e.test(i) && delete o[i];
        else delete this._events;
        return this
    }, e.removeAllListeners = r("removeEvent"), e.emitEvent = function t(e, i) {
        var o, n, r, s, a = this.getListenersAsObject(e);
        for (r in a)
            if (a.hasOwnProperty(r))
                for (n = a[r].length; n--;) !0 === (o = a[r][n]).once && this.removeListener(e, o.listener), (s = o.listener.apply(this, i || [])) === this._getOnceReturnValue() && this.removeListener(e, o.listener);
        return this
    }, e.trigger = r("emitEvent"), e.emit = function t(e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, i)
    }, e.setOnceReturnValue = function t(e) {
        return this._onceReturnValue = e, this
    }, e._getOnceReturnValue = function t() {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, e._getEvents = function t() {
        return this._events || (this._events = {})
    }, t.noConflict = function e() {
        return i.EventEmitter = o, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : i.EventEmitter = t
}).call(this),

    /*!
     * getStyleProperty v1.0.4
     * original by kangax
     * http://perfectionkills.com/feature-testing-css-properties/
     * MIT license
     */
    function(t) {
        var e = "Webkit Moz ms Ms O".split(" "),
            i = document.documentElement.style;

        function o(t) {
            if (t) {
                if ("string" == typeof i[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var o, n = 0, r = e.length; n < r; n++)
                    if ("string" == typeof i[o = e[n] + t]) return o
            }
        }
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return o
        }) : "object" == typeof exports ? module.exports = o : t.getStyleProperty = o
    }(window),
    /*!
     * getSize v1.2.2
     * measure size of elements
     * MIT license
     */
    function(t, e) {
        function i(t) {
            var e = parseFloat(t);
            return -1 === t.indexOf("%") && !isNaN(e) && e
        }
        var o = "undefined" == typeof console ? function t() {} : function(t) {
                console.error(t)
            },
            n = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];

        function r(e) {
            var r, s, a, u = !1;

            function p(e, i) {
                if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
                var o = e.style,
                    n = o.left,
                    r = e.runtimeStyle,
                    s = r && r.left;
                return s && (r.left = e.currentStyle.left), o.left = i, i = o.pixelLeft, o.left = n, s && (r.left = s), i
            }
            return function h(l) {
                if (function n() {
                        if (!u) {
                            u = !0;
                            var p, h = t.getComputedStyle;
                            if (r = (p = h ? function(t) {
                                    return h(t, null)
                                } : function(t) {
                                    return t.currentStyle
                                }, function t(e) {
                                    var i = p(e);
                                    return i || o("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
                                }), s = e("boxSizing")) {
                                var l = document.createElement("div");
                                l.style.width = "200px", l.style.padding = "1px 2px 3px 4px", l.style.borderStyle = "solid", l.style.borderWidth = "1px 2px 3px 4px", l.style[s] = "border-box";
                                var f = document.body || document.documentElement;
                                f.appendChild(l), a = 200 === i(r(l).width), f.removeChild(l)
                            }
                        }
                    }(), "string" == typeof l && (l = document.querySelector(l)), l && "object" == typeof l && l.nodeType) {
                    var f = r(l);
                    if ("none" === f.display) return function t() {
                        for (var e = {
                                width: 0,
                                height: 0,
                                innerWidth: 0,
                                innerHeight: 0,
                                outerWidth: 0,
                                outerHeight: 0
                            }, i = 0, o = n.length; i < o; i++) e[n[i]] = 0;
                        return e
                    }();
                    var c = {};
                    c.width = l.offsetWidth, c.height = l.offsetHeight;
                    for (var y = c.isBorderBox = !!(s && f[s] && "border-box" === f[s]), d = 0, m = n.length; d < m; d++) {
                        var g = n[d],
                            v = f[g];
                        v = p(l, v);
                        var $ = parseFloat(v);
                        c[g] = isNaN($) ? 0 : $
                    }
                    var z = c.paddingLeft + c.paddingRight,
                        I = c.paddingTop + c.paddingBottom,
                        L = c.marginLeft + c.marginRight,
                        E = c.marginTop + c.marginBottom,
                        b = c.borderLeftWidth + c.borderRightWidth,
                        S = c.borderTopWidth + c.borderBottomWidth,
                        x = y && a,
                        T = i(f.width);
                    !1 !== T && (c.width = T + (x ? 0 : z + b));
                    var O = i(f.height);
                    return !1 !== O && (c.height = O + (x ? 0 : I + S)), c.innerWidth = c.width - (z + b), c.innerHeight = c.height - (I + S), c.outerWidth = c.width + L, c.outerHeight = c.height + E, c
                }
            }
        }
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], r) : "object" == typeof exports ? module.exports = r(require("desandro-get-style-property")) : t.getSize = r(t.getStyleProperty)
    }(window),
    /*!
     * docReady v1.0.4
     * Cross browser DOMContentLoaded event emitter
     * MIT license
     */
    function(t) {
        var e = t.document,
            i = [];

        function o(t) {
            "function" == typeof t && (o.isReady ? t() : i.push(t))
        }

        function n(t) {
            var i = "readystatechange" === t.type && "complete" !== e.readyState;
            !o.isReady && !i && r()
        }

        function r() {
            o.isReady = !0;
            for (var t = 0, e = i.length; t < e; t++)(0, i[t])()
        }

        function s(i) {
            return "complete" === e.readyState ? r() : (i.bind(e, "DOMContentLoaded", n), i.bind(e, "readystatechange", n), i.bind(t, "load", n)), o
        }
        o.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], s) : "object" == typeof exports ? module.exports = s(require("eventie")) : t.docReady = s(t.eventie)
    }(window),
    function(t) {
        "use strict";
        var e, i = function() {
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0, o = e.length; i < o; i++) {
                var n = e[i] + "MatchesSelector";
                if (t[n]) return n
            }
        }();

        function o(t, e) {
            return t[i](e)
        }

        function n(t) {
            !t.parentNode && document.createDocumentFragment().appendChild(t)
        }
        e = i ? o(document.createElement("div"), "div") ? o : function t(e, i) {
            return n(e), o(e, i)
        } : function t(e, i) {
            n(e);
            for (var o = e.parentNode.querySelectorAll(i), r = 0, s = o.length; r < s; r++)
                if (o[r] === e) return !0;
            return !1
        }, "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return e
        }) : "object" == typeof exports ? module.exports = e : window.matchesSelector = e
    }(Element.prototype),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(i, o) {
            return e(t, i, o)
        }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
    }(window, function t(e, i, o) {
        var n = {};
        n.extend = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, n.modulo = function(t, e) {
            return (t % e + e) % e
        };
        var r, s = Object.prototype.toString;
        n.isArray = function(t) {
            return "[object Array]" == s.call(t)
        }, n.makeArray = function(t) {
            var e = [];
            if (n.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0, o = t.length; i < o; i++) e.push(t[i]);
            else e.push(t);
            return e
        }, n.indexOf = Array.prototype.indexOf ? function(t, e) {
            return t.indexOf(e)
        } : function(t, e) {
            for (var i = 0, o = t.length; i < o; i++)
                if (t[i] === e) return i;
            return -1
        }, n.removeFrom = function(t, e) {
            var i = n.indexOf(t, e); - 1 != i && t.splice(i, 1)
        }, n.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function t(e) {
            return e instanceof HTMLElement
        } : function t(e) {
            return e && "object" == typeof e && 1 == e.nodeType && "string" == typeof e.nodeName
        }, n.setText = function t(e, i) {
            e[r = r || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText")] = i
        }, n.getParent = function(t, e) {
            for (; t != document.body;)
                if (o(t = t.parentNode, e)) return t
        }, n.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, n.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.filterFindElements = function(t, e) {
            t = n.makeArray(t);
            for (var i = [], r = 0, s = t.length; r < s; r++) {
                var a = t[r];
                if (n.isElement(a)) {
                    if (e) {
                        o(a, e) && i.push(a);
                        for (var u = a.querySelectorAll(e), p = 0, h = u.length; p < h; p++) i.push(u[p])
                    } else i.push(a)
                }
            }
            return i
        }, n.debounceMethod = function(t, e, i) {
            var o = t.prototype[e],
                n = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[n];
                t && clearTimeout(t);
                var e = arguments,
                    r = this;
                this[n] = setTimeout(function() {
                    o.apply(r, e), delete r[n]
                }, i || 100)
            }
        }, n.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var a = e.console;
        return n.htmlInit = function(t, o) {
            i(function() {
                for (var i = n.toDashed(o), r = document.querySelectorAll(".js-" + i), s = "data-" + i + "-options", u = 0, p = r.length; u < p; u++) {
                    var h, l = r[u],
                        f = l.getAttribute(s);
                    try {
                        h = f && JSON.parse(f)
                    } catch (c) {
                        a && a.error("Error parsing " + s + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + c);
                        continue
                    }
                    var y = new t(l, h),
                        d = e.jQuery;
                    d && d.data(l, o, y)
                }
            })
        }, n
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(i, o, n, r) {
            return e(t, i, o, n, r)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils))
    }(window, function t(e, i, o, n, r) {
        "use strict";
        var s = e.getComputedStyle,
            a = s ? function(t) {
                return s(t, null)
            } : function(t) {
                return t.currentStyle
            },
            u = n("transition"),
            p = n("transform"),
            h = !!n("perspective"),
            l = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[u],
            f = ["transform", "transition", "transitionDuration", "transitionProperty"],
            c = function() {
                for (var t = {}, e = 0, i = f.length; e < i; e++) {
                    var o = f[e],
                        r = n(o);
                    r && r !== o && (t[o] = r)
                }
                return t
            }();

        function y(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        r.extend(y.prototype, i.prototype), y.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, y.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, y.prototype.getSize = function() {
            this.size = o(this.element)
        }, y.prototype.css = function(t) {
            var e = this.element.style;
            for (var i in t) e[c[i] || i] = t[i]
        }, y.prototype.getPosition = function() {
            var t = a(this.element),
                e = this.layout.options,
                i = e.isOriginLeft,
                o = e.isOriginTop,
                n = t[i ? "left" : "right"],
                r = t[o ? "top" : "bottom"],
                s = this.layout.size,
                u = -1 != n.indexOf("%") ? parseFloat(n) / 100 * s.width : parseInt(n, 10),
                p = -1 != r.indexOf("%") ? parseFloat(r) / 100 * s.height : parseInt(r, 10);
            u = isNaN(u) ? 0 : u, p = isNaN(p) ? 0 : p, u -= i ? s.paddingLeft : s.paddingRight, p -= o ? s.paddingTop : s.paddingBottom, this.position.x = u, this.position.y = p
        }, y.prototype.layoutPosition = function() {
            var t = this.layout.size,
                e = this.layout.options,
                i = {},
                o = e.isOriginLeft ? "paddingLeft" : "paddingRight",
                n = e.isOriginLeft ? "left" : "right",
                r = e.isOriginLeft ? "right" : "left",
                s = this.position.x + t[o];
            i[n] = this.getXValue(s), i[r] = "";
            var a = e.isOriginTop ? "paddingTop" : "paddingBottom",
                u = e.isOriginTop ? "top" : "bottom",
                p = e.isOriginTop ? "bottom" : "top",
                h = this.position.y + t[a];
            i[u] = this.getYValue(h), i[p] = "", this.css(i), this.emitEvent("layout", [this])
        }, y.prototype.getXValue = function(t) {
            var e = this.layout.options;
            return e.percentPosition && !e.isHorizontal ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, y.prototype.getYValue = function(t) {
            var e = this.layout.options;
            return e.percentPosition && e.isHorizontal ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, y.prototype._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x,
                o = this.position.y,
                n = parseInt(t, 10),
                r = parseInt(e, 10),
                s = n === this.position.x && r === this.position.y;
            if (this.setPosition(t, e), s && !this.isTransitioning) {
                this.layoutPosition();
                return
            }
            var a = {};
            a.transform = this.getTranslate(t - i, e - o), this.transition({
                to: a,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, y.prototype.getTranslate = function(t, e) {
            var i = this.layout.options;
            return (t = i.isOriginLeft ? t : -t, e = i.isOriginTop ? e : -e, h) ? "translate3d(" + t + "px, " + e + "px, 0)" : "translate(" + t + "px, " + e + "px)"
        }, y.prototype.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, y.prototype.moveTo = u && p ? y.prototype._transitionTo : y.prototype.goTo, y.prototype.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, y.prototype._nonTransition = function(t) {
            for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, y.prototype._transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration)) {
                this._nonTransition(t);
                return
            }
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var o = this.element.offsetHeight;
                o = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var d, m = "opacity," + (d = c.transform || "transform").replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        });
        y.prototype.enableTransition = function() {
            !this.isTransitioning && (this.css({
                transitionProperty: m,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(l, this, !1))
        }, y.prototype.transition = y.prototype[u ? "_transition" : "_nonTransition"], y.prototype.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, y.prototype.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var g = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        y.prototype.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = g[t.propertyName] || t.propertyName;
                delete e.ingProperties[i],
                    function t(e) {
                        for (var i in e) return !1;
                        return i = null, !0
                    }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]), this.emitEvent("transitionEnd", [this])
            }
        }, y.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1
        }, y.prototype._removeStyles = function(t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var v = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return y.prototype.removeTransitionStyles = function() {
            this.css(v)
        }, y.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, y.prototype.remove = function() {
            if (!u || !parseFloat(this.layout.options.transitionDuration)) {
                this.removeElem();
                return
            }
            var t = this;
            this.once("transitionEnd", function() {
                t.removeElem()
            }), this.hide()
        }, y.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, y.prototype.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, y.prototype.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i
        }, y.prototype.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, y.prototype.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, y.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, y
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, r, s) {
            return e(t, i, o, n, r, s)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function t(e, i, o, n, r, s) {
        "use strict";
        var a = e.console,
            u = e.jQuery,
            p = function() {},
            h = 0,
            l = {};

        function f(t, e) {
            var i = r.getQueryElement(t);
            if (!i) {
                a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t));
                return
            }
            this.element = i, u && (this.$element = u(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(e);
            var o = ++h;
            this.element.outlayerGUID = o, l[o] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        return f.namespace = "outlayer", f.Item = s, f.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, r.extend(f.prototype, o.prototype), f.prototype.option = function(t) {
            r.extend(this.options, t)
        }, f.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), r.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, f.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, f.prototype._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; n < r; n++) {
                var s = e[n],
                    a = new i(s, this);
                o.push(a)
            }
            return o
        }, f.prototype._filterFindItemElements = function(t) {
            return r.filterFindElements(t, this.options.itemSelector)
        }, f.prototype.getItemElements = function() {
            for (var t = [], e = 0, i = this.items.length; e < i; e++) t.push(this.items[e].element);
            return t
        }, f.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0
        }, f.prototype._init = f.prototype.layout, f.prototype._resetLayout = function() {
            this.getSize()
        }, f.prototype.getSize = function() {
            this.size = n(this.element)
        }, f.prototype._getMeasurement = function(t, e) {
            var i, o = this.options[t];
            o ? ("string" == typeof o ? i = this.element.querySelector(o) : r.isElement(o) && (i = o), this[t] = i ? n(i)[e] : o) : this[t] = 0
        }, f.prototype.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, f.prototype._getItemsForLayout = function(t) {
            for (var e = [], i = 0, o = t.length; i < o; i++) {
                var n = t[i];
                n.isIgnored || e.push(n)
            }
            return e
        }, f.prototype._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                for (var i = [], o = 0, n = t.length; o < n; o++) {
                    var r = t[o],
                        s = this._getItemLayoutPosition(r);
                    s.item = r, s.isInstant = e || r.isLayoutInstant, i.push(s)
                }
                this._processLayoutQueue(i)
            }
        }, f.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, f.prototype._processLayoutQueue = function(t) {
            for (var e = 0, i = t.length; e < i; e++) {
                var o = t[e];
                this._positionItem(o.item, o.x, o.y, o.isInstant)
            }
        }, f.prototype._positionItem = function(t, e, i, o) {
            o ? t.goTo(e, i) : t.moveTo(e, i)
        }, f.prototype._postLayout = function() {
            this.resizeContainer()
        }, f.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, f.prototype._getContainerSize = p, f.prototype._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, f.prototype._emitCompleteOnItems = function(t, e) {
            var i = this;

            function o() {
                i.dispatchEvent(t + "Complete", null, [e])
            }
            var n = e.length;
            if (!e || !n) {
                o();
                return
            }
            var r = 0;

            function s() {
                ++r === n && o()
            }
            for (var a = 0, u = e.length; a < u; a++) e[a].once(t, s)
        }, f.prototype.dispatchEvent = function(t, e, i) {
            var o = e ? [e].concat(i) : i;
            if (this.emitEvent(t, o), u) {
                if (this.$element = this.$element || u(this.element), e) {
                    var n = u.Event(e);
                    n.type = t, this.$element.trigger(n, i)
                } else this.$element.trigger(t, i)
            }
        }, f.prototype.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, f.prototype.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, f.prototype.stamp = function(t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, i = t.length; e < i; e++) {
                    var o = t[e];
                    this.ignore(o)
                }
            }
        }, f.prototype.unstamp = function(t) {
            if (t = this._find(t))
                for (var e = 0, i = t.length; e < i; e++) {
                    var o = t[e];
                    r.removeFrom(this.stamps, o), this.unignore(o)
                }
        }, f.prototype._find = function(t) {
            if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = r.makeArray(t)
        }, f.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; t < e; t++) {
                    var i = this.stamps[t];
                    this._manageStamp(i)
                }
            }
        }, f.prototype._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, f.prototype._manageStamp = p, f.prototype._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                o = n(t);
            return {
                left: e.left - i.left - o.marginLeft,
                top: e.top - i.top - o.marginTop,
                right: i.right - e.right - o.marginRight,
                bottom: i.bottom - e.bottom - o.marginBottom
            }
        }, f.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, f.prototype.bindResize = function() {
            !this.isResizeBound && (i.bind(e, "resize", this), this.isResizeBound = !0)
        }, f.prototype.unbindResize = function() {
            this.isResizeBound && i.unbind(e, "resize", this), this.isResizeBound = !1
        }, f.prototype.onresize = function() {
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var t = this;
            this.resizeTimeout = setTimeout(function e() {
                t.resize(), delete t.resizeTimeout
            }, 100)
        }, f.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, f.prototype.needsResizeLayout = function() {
            var t = n(this.element);
            return this.size && t && t.innerWidth !== this.size.innerWidth
        }, f.prototype.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, f.prototype.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, f.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, f.prototype.reveal = function(t) {
            this._emitCompleteOnItems("reveal", t);
            for (var e = t && t.length, i = 0; e && i < e; i++) t[i].reveal()
        }, f.prototype.hide = function(t) {
            this._emitCompleteOnItems("hide", t);
            for (var e = t && t.length, i = 0; e && i < e; i++) t[i].hide()
        }, f.prototype.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, f.prototype.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, f.prototype.getItem = function(t) {
            for (var e = 0, i = this.items.length; e < i; e++) {
                var o = this.items[e];
                if (o.element === t) return o
            }
        }, f.prototype.getItems = function(t) {
            t = r.makeArray(t);
            for (var e = [], i = 0, o = t.length; i < o; i++) {
                var n = t[i],
                    s = this.getItem(n);
                s && e.push(s)
            }
            return e
        }, f.prototype.remove = function(t) {
            var e = this.getItems(t);
            if (this._emitCompleteOnItems("remove", e), e && e.length)
                for (var i = 0, o = e.length; i < o; i++) {
                    var n = e[i];
                    n.remove(), r.removeFrom(this.items, n)
                }
        }, f.prototype.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "";
            for (var e = 0, i = this.items.length; e < i; e++) this.items[e].destroy();
            this.unbindResize(), delete l[this.element.outlayerGUID], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
        }, f.data = function(t) {
            var e = (t = r.getQueryElement(t)) && t.outlayerGUID;
            return e && l[e]
        }, f.create = function(t, e) {
            function i() {
                f.apply(this, arguments)
            }
            return Object.create ? i.prototype = Object.create(f.prototype) : r.extend(i.prototype, f.prototype), i.prototype.constructor = i, i.defaults = r.extend({}, f.defaults), r.extend(i.defaults, e), i.prototype.settings = {}, i.namespace = t, i.data = f.data, i.Item = function t() {
                s.apply(this, arguments)
            }, i.Item.prototype = new s, r.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i
        }, f.Item = s, f
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window, function t(e) {
        "use strict";

        function i() {
            e.Item.apply(this, arguments)
        }
        i.prototype = new e.Item, i.prototype._create = function() {
            this.id = this.layout.itemGUID++, e.Item.prototype._create.call(this), this.sortData = {}
        }, i.prototype.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var i in t) {
                    var o = e[i];
                    this.sortData[i] = o(this.element, this)
                }
            }
        };
        var o = i.prototype.destroy;
        return i.prototype.destroy = function() {
            o.apply(this, arguments), this.css({
                display: ""
            })
        }, i
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window, function t(e, i) {
        "use strict";

        function o(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        return function() {
            for (var t = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, n = t.length; e < n; e++) {
                var r = t[e];
                o.prototype[r] = s(r)
            }

            function s(t) {
                return function() {
                    return i.prototype[t].apply(this.isotope, arguments)
                }
            }
        }(), o.prototype.needsVerticalResizeLayout = function() {
            var t = e(this.isotope.element);
            return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight
        }, o.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, o.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, o.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, o.prototype.getSegmentSize = function(t, e) {
            var i = t + e,
                o = "outer" + e;
            if (this._getMeasurement(i, o), !this[i]) {
                var n = this.getFirstItemSize();
                this[i] = n && n[o] || this.isotope.size["inner" + e]
            }
        }, o.prototype.getFirstItemSize = function() {
            var t = this.isotope.filteredItems[0];
            return t && t.element && e(t.element)
        }, o.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, o.prototype.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, o.modes = {}, o.create = function(t, e) {
            function i() {
                o.apply(this, arguments)
            }
            return i.prototype = new o, e && (i.options = e), i.prototype.namespace = t, o.modes[t] = i, i
        }, o
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils)
    }(window, function t(e, i, o) {
        var n = e.create("masonry");
        return n.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var t = this.cols;
            for (this.colYs = []; t--;) this.colYs.push(0);
            this.maxY = 0
        }, n.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    e = t && t.element;
                this.columnWidth = e && i(e).outerWidth || this.containerWidth
            }
            var o = this.columnWidth += this.gutter,
                n = this.containerWidth + this.gutter,
                r = n / o,
                s = o - n % o;
            r = Math[s && s < 1 ? "round" : "floor"](r), this.cols = Math.max(r, 1)
        }, n.prototype.getContainerWidth = function() {
            var t = i(this.options.isFitWidth ? this.element.parentNode : this.element);
            this.containerWidth = t && t.innerWidth
        }, n.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
            i = Math.min(i, this.cols);
            for (var n = this._getColGroup(i), r = Math.min.apply(Math, n), s = o.indexOf(n, r), a = {
                    x: this.columnWidth * s,
                    y: r
                }, u = r + t.size.outerHeight, p = this.cols + 1 - n.length, h = 0; h < p; h++) this.colYs[s + h] = u;
            return a
        }, n.prototype._getColGroup = function(t) {
            if (t < 2) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) {
                var n = this.colYs.slice(o, o + t);
                e[o] = Math.max.apply(Math, n)
            }
            return e
        }, n.prototype._manageStamp = function(t) {
            var e = i(t),
                o = this._getElementOffset(t),
                n = this.options.isOriginLeft ? o.left : o.right,
                r = n + e.outerWidth,
                s = Math.floor(n / this.columnWidth);
            s = Math.max(0, s);
            var a = Math.floor(r / this.columnWidth);
            a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var u = (this.options.isOriginTop ? o.top : o.bottom) + e.outerHeight, p = s; p <= a; p++) this.colYs[p] = Math.max(u, this.colYs[p])
        }, n.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
        }, n.prototype._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, n.prototype.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(), t !== this.containerWidth
        }, n
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
    }(window, function t(e, i) {
        "use strict";
        var o = e.create("masonry"),
            n = o.prototype._getElementOffset,
            r = o.prototype.layout,
            s = o.prototype._getMeasurement;
        (function t(e, i) {
            for (var o in i) e[o] = i[o];
            return e
        })(o.prototype, i.prototype), o.prototype._getElementOffset = n, o.prototype.layout = r, o.prototype._getMeasurement = s;
        var a = o.prototype.measureColumns;
        o.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems, a.call(this)
        };
        var u = o.prototype._manageStamp;
        return o.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, u.apply(this, arguments)
        }, o
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function t(e) {
        "use strict";
        var i = e.create("fitRows");
        return i.prototype._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, i.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
            var o = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
        }, i.prototype._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, i
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function t(e) {
        "use strict";
        var i = e.create("vertical", {
            horizontalAlignment: 0
        });
        return i.prototype._resetLayout = function() {
            this.y = 0
        }, i.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += t.size.outerHeight, {
                x: e,
                y: i
            }
        }, i.prototype._getContainerSize = function() {
            return {
                height: this.y
            }
        }, i
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, o, n, r, s, a) {
            return e(t, i, o, n, r, s, a)
        }) : "object" == typeof exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window, function t(e, i, o, n, r, s, a) {
        var u = e.jQuery,
            p = String.prototype.trim ? function(t) {
                return t.trim()
            } : function(t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            h = document.documentElement.textContent ? function(t) {
                return t.textContent
            } : function(t) {
                return t.innerText
            },
            l = i.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        l.Item = s, l.LayoutMode = a, l.prototype._create = function() {
            for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), i.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], a.modes) this._initLayoutMode(t)
        }, l.prototype.reloadItems = function() {
            this.itemGUID = 0, i.prototype.reloadItems.call(this)
        }, l.prototype._itemize = function() {
            for (var t = i.prototype._itemize.apply(this, arguments), e = 0, o = t.length; e < o; e++) t[e].id = this.itemGUID++;
            return this._updateItemsSortData(t), t
        }, l.prototype._initLayoutMode = function(t) {
            var e = a.modes[t],
                i = this.options[t] || {};
            this.options[t] = e.options ? r.extend(e.options, i) : i, this.modes[t] = new e(this)
        }, l.prototype.layout = function() {
            if (!this._isLayoutInited && this.options.isInitLayout) {
                this.arrange();
                return
            }
            this._layout()
        }, l.prototype._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, l.prototype.arrange = function(t) {
            this.option(t), this._getIsInstant();
            var e = this._filter(this.items);
            this.filteredItems = e.matches;
            var i = this;

            function o() {
                i.reveal(e.needReveal), i.hide(e.needHide)
            }
            this._bindArrangeComplete(), this._isInstant ? this._noTransition(o) : o(), this._sort(), this._layout()
        }, l.prototype._init = l.prototype.arrange, l.prototype._getIsInstant = function() {
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = t, t
        }, l.prototype._bindArrangeComplete = function() {
            var t, e, i, o = this;

            function n() {
                t && e && i && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
            }
            this.once("layoutComplete", function() {
                t = !0, n()
            }), this.once("hideComplete", function() {
                e = !0, n()
            }), this.once("revealComplete", function() {
                i = !0, n()
            })
        }, l.prototype._filter = function(t) {
            var e = this.options.filter;
            e = e || "*";
            for (var i = [], o = [], n = [], r = this._getFilterTest(e), s = 0, a = t.length; s < a; s++) {
                var u = t[s];
                if (!u.isIgnored) {
                    var p = r(u);
                    p && i.push(u), p && u.isHidden ? o.push(u) : p || u.isHidden || n.push(u)
                }
            }
            return {
                matches: i,
                needReveal: o,
                needHide: n
            }
        }, l.prototype._getFilterTest = function(t) {
            return u && this.options.isJQueryFiltering ? function(e) {
                return u(e.element).is(t)
            } : "function" == typeof t ? function(e) {
                return t(e.element)
            } : function(e) {
                return n(e.element, t)
            }
        }, l.prototype.updateSortData = function(t) {
            var e;
            t ? (t = r.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
        }, l.prototype._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = f(i)
            }
        }, l.prototype._updateItemsSortData = function(t) {
            for (var e = t && t.length, i = 0; e && i < e; i++) t[i].updateSortData()
        };
        var f = function t(e) {
            if ("string" != typeof e) return e;
            var i, o, n, r, s = p(e).split(" "),
                a = s[0],
                u = a.match(/^\[(.+)\]$/),
                f = (i = u && u[1], o = a, i ? function(t) {
                    return t.getAttribute(i)
                } : function(t) {
                    var e = t.querySelector(o);
                    return e && h(e)
                }),
                c = l.sortDataParsers[s[1]];
            return e = c ? function(t) {
                return t && c(f(t))
            } : function(t) {
                return t && f(t)
            }
        };
        l.sortDataParsers = {
            parseInt: function(t) {
                return parseInt(t, 10)
            },
            parseFloat: function(t) {
                return parseFloat(t)
            }
        }, l.prototype._sort = function() {
            var t = this.options.sortBy;
            if (t) {
                var e, i, o, n = (e = [].concat.apply(t, this.sortHistory), i = this.options.sortAscending, function t(o, n) {
                    for (var r = 0, s = e.length; r < s; r++) {
                        var a = e[r],
                            u = o.sortData[a],
                            p = n.sortData[a];
                        if (u > p || u < p) return (u > p ? 1 : -1) * ((void 0 !== i[a] ? i[a] : i) ? 1 : -1)
                    }
                    return 0
                });
                this.filteredItems.sort(n), t != this.sortHistory[0] && this.sortHistory.unshift(t)
            }
        }, l.prototype._mode = function() {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, l.prototype._resetLayout = function() {
            i.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, l.prototype._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t)
        }, l.prototype._manageStamp = function(t) {
            this._mode()._manageStamp(t)
        }, l.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, l.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, l.prototype.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, l.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
            }
        }, l.prototype._filterRevealAdded = function(t) {
            var e = this._filter(t);
            return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
        }, l.prototype.insert = function(t) {
            var e, i, o = this.addItems(t);
            if (o.length) {
                var n = o.length;
                for (e = 0; e < n; e++) i = o[e], this.element.appendChild(i.element);
                var r = this._filter(o).matches;
                for (e = 0; e < n; e++) o[e].isLayoutInstant = !0;
                for (this.arrange(), e = 0; e < n; e++) delete o[e].isLayoutInstant;
                this.reveal(r)
            }
        };
        var c = l.prototype.remove;
        return l.prototype.remove = function(t) {
            t = r.makeArray(t);
            var e = this.getItems(t);
            c.call(this, t);
            var i = e && e.length;
            if (i)
                for (var o = 0; o < i; o++) {
                    var n = e[o];
                    r.removeFrom(this.filteredItems, n)
                }
        }, l.prototype.shuffle = function() {
            for (var t = 0, e = this.items.length; t < e; t++) this.items[t].sortData.random = Math.random();
            this.options.sortBy = "random", this._sort(), this._layout()
        }, l.prototype._noTransition = function(t) {
            var e = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = t.call(this);
            return this.options.transitionDuration = e, i
        }, l.prototype.getFilteredItemElements = function() {
            for (var t = [], e = 0, i = this.filteredItems.length; e < i; e++) t.push(this.filteredItems[e].element);
            return t
        }, l
    });


/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */
! function(e, t, i, n) {
    "use strict";
    var o = i("html"),
        a = i(e),
        r = i(t),
        s = i.fancybox = function() {
            s.open.apply(this, arguments)
        },
        l = navigator.userAgent.match(/msie/i),
        c = null,
        d = n !== t.createTouch,
        p = function(e) {
            return e && e.hasOwnProperty && e instanceof i
        },
        f = function(e) {
            return e && "string" === i.type(e)
        },
        h = function(e) {
            return f(e) && e.indexOf("%") > 0
        },
        u = function(e, t) {
            var i = parseInt(e, 10) || 0;
            return t && h(e) && (i = s.getViewport()[t] / 100 * i), Math.ceil(i)
        },
        g = function(e, t) {
            return u(e, t) + "px"
        };
    i.extend(s, {
        version: "2.1.5",
        defaults: {
            padding: 0,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !d,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: i.noop,
            beforeLoad: i.noop,
            afterLoad: i.noop,
            beforeShow: i.noop,
            afterShow: i.noop,
            beforeChange: i.noop,
            beforeClose: i.noop,
            afterClose: i.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(e, t) {
            if (e) {
                if (i.isPlainObject(t) || (t = {}), !1 !== s.close(!0)) return i.isArray(e) || (e = p(e) ? i(e).get() : [e]), i.each(e, function(o, a) {
                    var r, l, c, d, h, u, g, m = {};
                    "object" === i.type(a) && (a.nodeType && (a = i(a)), p(a) ? (m = {
                        href: a.data("fancybox-href") || a.attr("href"),
                        title: a.data("fancybox-title") || a.attr("title"),
                        isDom: !0,
                        element: a
                    }, i.metadata && i.extend(!0, m, a.metadata())) : m = a), r = t.href || m.href || (f(a) ? a : null), l = n !== t.title ? t.title : m.title || "", (d = (c = t.content || m.content) ? "html" : t.type || m.type) || !m.isDom || (d = a.data("fancybox-type")) || (d = (h = a.prop("class").match(/fancybox\.(\w+)/)) ? h[1] : null), f(r) && (!d && (s.isImage(r) ? d = "image" : s.isSWF(r) ? d = "swf" : "#" === r.charAt(0) ? d = "inline" : f(a) && (d = "html", c = a)), "ajax" === d && (r = (u = r.split(/\s+/, 2)).shift(), g = u.shift())), c || ("inline" === d ? r ? c = i(f(r) ? r.replace(/.*(?=#[^\s]+$)/, "") : r) : m.isDom && (c = a) : "html" === d ? c = r : d || r || !m.isDom || (d = "inline", c = a)), i.extend(m, {
                        href: r,
                        type: d,
                        content: c,
                        title: l,
                        selector: g
                    }), e[o] = m
                }), s.opts = i.extend(!0, {}, s.defaults, t), n !== t.keys && (s.opts.keys = !!t.keys && i.extend({}, s.defaults.keys, t.keys)), s.group = e, s._start(s.opts.index)
            }
        },
        cancel: function() {
            var e = s.coming;
            e && !1 !== s.trigger("onCancel") && (s.hideLoading(), s.ajaxLoad && s.ajaxLoad.abort(), s.ajaxLoad = null, s.imgPreload && (s.imgPreload.onload = s.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), s.coming = null, s.current || s._afterZoomOut(e))
        },
        close: function(e) {
            if (s.cancel(), !1 !== s.trigger("beforeClose")) s.unbindEvents(), s.isActive && (s.isOpen && !0 !== e ? (s.isOpen = s.isOpened = !1, s.isClosing = !0, i(".fancybox-item, .fancybox-nav").remove(), s.wrap.stop(!0, !0).removeClass("fancybox-opened"), s.transitions[s.current.closeMethod]()) : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(), s._afterZoomOut()))
        },
        play: function(e) {
            var t = function() {
                    clearTimeout(s.player.timer)
                },
                i = function() {
                    t(), s.current && s.player.isActive && (s.player.timer = setTimeout(s.next, s.current.playSpeed))
                },
                n = function() {
                    t(), r.unbind(".player"), s.player.isActive = !1, s.trigger("onPlayEnd")
                };
            !0 !== e && (s.player.isActive || !1 === e) ? n() : s.current && (s.current.loop || s.current.index < s.group.length - 1) && (s.player.isActive = !0, r.bind({
                "onCancel.player beforeClose.player": n,
                "onUpdate.player": i,
                "beforeLoad.player": t
            }), i(), s.trigger("onPlayStart"))
        },
        next: function(e) {
            var t = s.current;
            t && (f(e) || (e = t.direction.next), s.jumpto(t.index + 1, e, "next"))
        },
        prev: function(e) {
            var t = s.current;
            t && (f(e) || (e = t.direction.prev), s.jumpto(t.index - 1, e, "prev"))
        },
        jumpto: function(e, t, i) {
            var o = s.current;
            o && (e = u(e), s.direction = t || o.direction[e >= o.index ? "next" : "prev"], s.router = i || "jumpto", o.loop && (e < 0 && (e = o.group.length + e % o.group.length), e %= o.group.length), n !== o.group[e] && (s.cancel(), s._start(e)))
        },
        reposition: function(e, t) {
            var n, o = s.current,
                a = o ? o.wrap : null;
            a && (n = s._getPosition(t), e && "scroll" === e.type ? (delete n.position, a.stop(!0, !0).animate(n, 200)) : (a.css(n), o.pos = i.extend({}, o.dim, n)))
        },
        update: function(e) {
            var t = e && e.type,
                i = !t || "orientationchange" === t;
            i && (clearTimeout(c), c = null), s.isOpen && !c && (c = setTimeout(function() {
                var n = s.current;
                n && !s.isClosing && (s.wrap.removeClass("fancybox-tmp"), (i || "load" === t || "resize" === t && n.autoResize) && s._setDimension(), "scroll" === t && n.canShrink || s.reposition(e), s.trigger("onUpdate"), c = null)
            }, i && !d ? 0 : 300))
        },
        toggle: function(e) {
            s.isOpen && (s.current.fitToView = "boolean" === i.type(e) ? e : !s.current.fitToView, d && (s.wrap.removeAttr("style").addClass("fancybox-tmp"), s.trigger("onUpdate")), s.update())
        },
        hideLoading: function() {
            r.unbind(".loading"), i("#fancybox-loading").remove()
        },
        showLoading: function() {
            var e, t;
            s.hideLoading(), e = i('<div id="fancybox-loading"><div></div></div>').click(s.cancel).appendTo("body"), r.bind("keydown.loading", function(e) {
                27 === (e.which || e.keyCode) && (e.preventDefault(), s.cancel())
            }), s.defaults.fixed || (t = s.getViewport(), e.css({
                position: "absolute",
                top: .5 * t.h + t.y,
                left: .5 * t.w + t.x
            }))
        },
        getViewport: function() {
            var t = s.current && s.current.locked || !1,
                i = {
                    x: a.scrollLeft(),
                    y: a.scrollTop()
                };
            return t ? (i.w = t[0].clientWidth, i.h = t[0].clientHeight) : (i.w = d && e.innerWidth ? e.innerWidth : a.width(), i.h = d && e.innerHeight ? e.innerHeight : a.height()), i
        },
        unbindEvents: function() {
            s.wrap && p(s.wrap) && s.wrap.unbind(".fb"), r.unbind(".fb"), a.unbind(".fb")
        },
        bindEvents: function() {
            var e, t = s.current;
            t && (a.bind("orientationchange.fb" + (d ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), s.update), (e = t.keys) && r.bind("keydown.fb", function(o) {
                var a = o.which || o.keyCode,
                    r = o.target || o.srcElement;
                if (27 === a && s.coming) return !1;
                o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || r && (r.type || i(r).is("[contenteditable]")) || i.each(e, function(e, r) {
                    return t.group.length > 1 && n !== r[a] ? (s[e](r[a]), o.preventDefault(), !1) : i.inArray(a, r) > -1 ? (s[e](), o.preventDefault(), !1) : void 0
                })
            }), i.fn.mousewheel && t.mouseWheel && s.wrap.bind("mousewheel.fb", function(e, n, o, a) {
                for (var r, l = i(e.target || null), c = !1; l.length && !(c || l.is(".fancybox-skin") || l.is(".fancybox-wrap"));) {
                    c = (r = l[0]) && !(r.style.overflow && "hidden" === r.style.overflow) && (r.clientWidth && r.scrollWidth > r.clientWidth || r.clientHeight && r.scrollHeight > r.clientHeight), l = i(l).parent()
                }
                0 === n || c || !(s.group.length > 1) || t.canShrink || (a > 0 || o > 0 ? s.prev(a > 0 ? "down" : "left") : (a < 0 || o < 0) && s.next(a < 0 ? "up" : "right"), e.preventDefault())
            }))
        },
        trigger: function(e, t) {
            var n, o = t || s.coming || s.current;
            if (o) {
                if (i.isFunction(o[e]) && (n = o[e].apply(o, Array.prototype.slice.call(arguments, 1))), !1 === n) return !1;
                o.helpers && i.each(o.helpers, function(t, n) {
                    n && s.helpers[t] && i.isFunction(s.helpers[t][e]) && s.helpers[t][e](i.extend(!0, {}, s.helpers[t].defaults, n), o)
                }), r.trigger(e)
            }
        },
        isImage: function(e) {
            return f(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function(e) {
            return f(e) && e.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(e) {
            var t, n, o, a, r, l = {};
            if (e = u(e), !(t = s.group[e] || null)) return !1;
            if (a = (l = i.extend(!0, {}, s.opts, t)).margin, r = l.padding, "number" === i.type(a) && (l.margin = [a, a, a, a]), "number" === i.type(r) && (l.padding = [r, r, r, r]), l.modal && i.extend(!0, l, {
                    closeBtn: !1,
                    closeClick: !1,
                    nextClick: !1,
                    arrows: !1,
                    mouseWheel: !1,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: !1
                        }
                    }
                }), l.autoSize && (l.autoWidth = l.autoHeight = !0), "auto" === l.width && (l.autoWidth = !0), "auto" === l.height && (l.autoHeight = !0), l.group = s.group, l.index = e, s.coming = l, !1 === s.trigger("beforeLoad")) {
                s.coming = null;
                return
            }
            if (o = l.type, n = l.href, !o) return s.coming = null, !!s.current && !!s.router && "jumpto" !== s.router && (s.current.index = e, s[s.router](s.direction));
            if (s.isActive = !0, ("image" === o || "swf" === o) && (l.autoHeight = l.autoWidth = !1, l.scrolling = "visible"), "image" === o && (l.aspectRatio = !0), "iframe" === o && d && (l.scrolling = "scroll"), l.wrap = i(l.tpl.wrap).addClass("fancybox-" + (d ? "mobile" : "desktop") + " fancybox-type-" + o + " fancybox-tmp " + l.wrapCSS).appendTo(l.parent || "body"), i.extend(l, {
                    skin: i(".fancybox-skin", l.wrap),
                    outer: i(".fancybox-outer", l.wrap),
                    inner: i(".fancybox-inner", l.wrap)
                }), i.each(["Top", "Right", "Bottom", "Left"], function(e, t) {
                    l.skin.css("padding" + t, g(l.padding[e]))
                }), s.trigger("onReady"), "inline" === o || "html" === o) {
                if (!l.content || !l.content.length) return s._error("content")
            } else if (!n) return s._error("href");
            "image" === o ? s._loadImage() : "ajax" === o ? s._loadAjax() : "iframe" === o ? s._loadIframe() : s._afterLoad()
        },
        _error: function(e) {
            i.extend(s.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: e,
                content: s.coming.tpl.error
            }), s._afterLoad()
        },
        _loadImage: function() {
            var e = s.imgPreload = new Image;
            e.onload = function() {
                this.onload = this.onerror = null, s.coming.width = this.width / s.opts.pixelRatio, s.coming.height = this.height / s.opts.pixelRatio, s._afterLoad()
            }, e.onerror = function() {
                this.onload = this.onerror = null, s._error("image")
            }, e.src = s.coming.href, !0 !== e.complete && s.showLoading()
        },
        _loadAjax: function() {
            var e = s.coming;
            s.showLoading(), s.ajaxLoad = i.ajax(i.extend({}, e.ajax, {
                url: e.href,
                error: function(e, t) {
                    s.coming && "abort" !== t ? s._error("ajax", e) : s.hideLoading()
                },
                success: function(t, i) {
                    "success" === i && (e.content = t, s._afterLoad())
                }
            }))
        },
        _loadIframe: function() {
            var e = s.coming,
                t = i(e.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime())).attr("scrolling", d ? "auto" : e.iframe.scrolling).attr("src", e.href);
            i(e.wrap).bind("onReset", function() {
                try {
                    i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (e) {}
            }), e.iframe.preload && (s.showLoading(), t.one("load", function() {
                i(this).data("ready", 1), d || i(this).bind("load.fb", s.update), i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), s._afterLoad()
            })), e.content = t.appendTo(e.inner), e.iframe.preload || s._afterLoad()
        },
        _preloadImages: function() {
            var e, t, i = s.group,
                n = s.current,
                o = i.length,
                a = n.preload ? Math.min(n.preload, o - 1) : 0;
            for (t = 1; t <= a; t += 1) "image" === (e = i[(n.index + t) % o]).type && e.href && (new Image().src = e.href)
        },
        _afterLoad: function() {
            var e, t, n, o, a, r, l = s.coming,
                c = s.current,
                d = "fancybox-placeholder";
            if (s.hideLoading(), l && !1 !== s.isActive) {
                if (!1 === s.trigger("afterLoad", l, c)) {
                    l.wrap.stop(!0).trigger("onReset").remove(), s.coming = null;
                    return
                }
                switch (c && (s.trigger("beforeChange", c), c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), s.unbindEvents(), e = l, t = l.content, n = l.type, o = l.scrolling, i.extend(s, {
                    wrap: e.wrap,
                    skin: e.skin,
                    outer: e.outer,
                    inner: e.inner,
                    current: e,
                    previous: c
                }), a = e.href, n) {
                    case "inline":
                    case "ajax":
                    case "html":
                        e.selector ? t = i("<div>").html(t).find(e.selector) : p(t) && (t.data(d) || t.data(d, i('<div class="' + d + '"></div>').insertAfter(t).hide()), t = t.show().detach(), e.wrap.bind("onReset", function() {
                            i(this).find(t).length && t.hide().replaceAll(t.data(d)).data(d, !1)
                        }));
                        break;
                    case "image":
                        t = e.tpl.image.replace("{href}", a);
                        break;
                    case "swf":
                        t = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + a + '"></param>', r = "", i.each(e.swf, function(e, i) {
                            t += '<param name="' + e + '" value="' + i + '"></param>', r += " " + e + '="' + i + '"'
                        }), t += '<embed src="' + a + '" type="application/x-shockwave-flash" width="100%" height="100%"' + r + "></embed></object>"
                }
                p(t) && t.parent().is(e.inner) || e.inner.append(t), s.trigger("beforeShow"), e.inner.css("overflow", "yes" === o ? "scroll" : "no" === o ? "hidden" : o), s._setDimension(), s.reposition(), s.isOpen = !1, s.coming = null, s.bindEvents(), s.isOpened ? c.prevMethod && s.transitions[c.prevMethod]() : i(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(), s.transitions[s.isOpened ? e.nextMethod : e.openMethod](), s._preloadImages()
            }
        },
        _setDimension: function() {
            var e, t, n, o, a, r, l, c, d, p, f, m, y, x, v, w = s.getViewport(),
                b = 0,
                $ = !1,
                _ = !1,
                k = s.wrap,
                C = s.skin,
                O = s.inner,
                W = s.current,
                S = W.width,
                L = W.height,
                T = W.minWidth,
                E = W.minHeight,
                R = W.maxWidth,
                P = W.maxHeight,
                j = W.scrolling,
                H = W.scrollOutside ? W.scrollbarWidth : 0,
                A = W.margin,
                D = u(A[1] + A[3]),
                I = u(A[0] + A[2]);
            if (k.add(C).add(O).width("auto").height("auto").removeClass("fancybox-tmp"), e = u(C.outerWidth(!0) - C.width()), t = u(C.outerHeight(!0) - C.height()), n = D + e, o = I + t, a = h(S) ? (w.w - n) * u(S) / 100 : S, r = h(L) ? (w.h - o) * u(L) / 100 : L, "iframe" === W.type) {
                if (x = W.content, W.autoHeight && 1 === x.data("ready")) try {
                    x[0].contentWindow.document.location && (O.width(a).height(9999), v = x.contents().find("body"), H && v.css("overflow-x", "hidden"), r = v.outerHeight(!0))
                } catch (z) {}
            } else(W.autoWidth || W.autoHeight) && (O.addClass("fancybox-tmp"), W.autoWidth || O.width(a), W.autoHeight || O.height(r), W.autoWidth && (a = O.width()), W.autoHeight && (r = O.height()), O.removeClass("fancybox-tmp"));
            if (S = u(a), L = u(r), d = a / r, T = u(h(T) ? u(T, "w") - n : T), R = u(h(R) ? u(R, "w") - n : R), E = u(h(E) ? u(E, "h") - o : E), P = u(h(P) ? u(P, "h") - o : P), l = R, c = P, W.fitToView && (R = Math.min(w.w - n, R), P = Math.min(w.h - o, P)), m = w.w - D, y = w.h - I, W.aspectRatio ? (S > R && (L = u((S = R) / d)), L > P && (S = u((L = P) * d)), S < T && (L = u((S = T) / d)), L < E && (S = u((L = E) * d))) : (S = Math.max(T, Math.min(S, R)), W.autoHeight && "iframe" !== W.type && (O.width(S), L = O.height()), L = Math.max(E, Math.min(L, P))), W.fitToView) {
                if (O.width(S).height(L), k.width(S + e), p = k.width(), f = k.height(), W.aspectRatio)
                    for (;
                        (p > m || f > y) && S > T && L > E && !(b++ > 19);)(S = u((L = Math.max(E, Math.min(P, L - 10))) * d)) < T && (L = u((S = T) / d)), S > R && (L = u((S = R) / d)), O.width(S).height(L), k.width(S + e), p = k.width(), f = k.height();
                else S = Math.max(T, Math.min(S, S - (p - m))), L = Math.max(E, Math.min(L, L - (f - y)))
            }
            H && "auto" === j && L < r && S + e + H < m && (S += H), O.width(S).height(L), k.width(S + e), p = k.width(), f = k.height(), $ = (p > m || f > y) && S > T && L > E, _ = W.aspectRatio ? S < l && L < c && S < a && L < r : (S < l || L < c) && (S < a || L < r), i.extend(W, {
                dim: {
                    width: g(p),
                    height: g(f)
                },
                origWidth: a,
                origHeight: r,
                canShrink: $,
                canExpand: _,
                wPadding: e,
                hPadding: t,
                wrapSpace: f - C.outerHeight(!0),
                skinSpace: C.height() - L
            }), !x && W.autoHeight && L > E && L < P && !_ && O.height("auto")
        },
        _getPosition: function(e) {
            var t = s.current,
                i = s.getViewport(),
                n = t.margin,
                o = s.wrap.width() + n[1] + n[3],
                a = s.wrap.height() + n[0] + n[2],
                r = {
                    position: "absolute",
                    top: n[0],
                    left: n[3]
                };
            return t.autoCenter && t.fixed && !e && a <= i.h && o <= i.w ? r.position = "fixed" : t.locked || (r.top += i.y, r.left += i.x), r.top = g(Math.max(r.top, r.top + (i.h - a) * t.topRatio)), r.left = g(Math.max(r.left, r.left + (i.w - o) * t.leftRatio)), r
        },
        _afterZoomIn: function() {
            var e = s.current;
            e && (s.isOpen = s.isOpened = !0, s.wrap.css("overflow", "visible").addClass("fancybox-opened"), s.update(), (e.closeClick || e.nextClick && s.group.length > 1) && s.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                i(t.target).is("a") || i(t.target).parent().is("a") || (t.preventDefault(), s[e.closeClick ? "close" : "next"]())
            }), e.closeBtn && i(e.tpl.closeBtn).appendTo(s.skin).bind("click.fb", function(e) {
                e.preventDefault(), s.close()
            }), e.arrows && s.group.length > 1 && ((e.loop || e.index > 0) && i(e.tpl.prev).appendTo(s.outer).bind("click.fb", s.prev), (e.loop || e.index < s.group.length - 1) && i(e.tpl.next).appendTo(s.outer).bind("click.fb", s.next)), s.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? s.opts.autoPlay && !s.player.isActive && (s.opts.autoPlay = !1, s.play()) : s.play(!1))
        },
        _afterZoomOut: function(e) {
            e = e || s.current, i(".fancybox-wrap").trigger("onReset").remove(), i.extend(s, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            }), s.trigger("afterClose", e)
        }
    }), s.transitions = {
        getOrigPosition: function() {
            var e = s.current,
                t = e.element,
                i = e.orig,
                n = {},
                o = 50,
                a = 50,
                r = e.hPadding,
                l = e.wPadding,
                c = s.getViewport();
            return !i && e.isDom && t.is(":visible") && !(i = t.find("img:first")).length && (i = t), p(i) ? (n = i.offset(), i.is("img") && (o = i.outerWidth(), a = i.outerHeight())) : (n.top = c.y + (c.h - a) * e.topRatio, n.left = c.x + (c.w - o) * e.leftRatio), ("fixed" === s.wrap.css("position") || e.locked) && (n.top -= c.y, n.left -= c.x), n = {
                top: g(n.top - r * e.topRatio),
                left: g(n.left - l * e.leftRatio),
                width: g(o + l),
                height: g(a + r)
            }
        },
        step: function(e, t) {
            var i, n, o, a = t.prop,
                r = s.current,
                l = r.wrapSpace,
                c = r.skinSpace;
            ("width" === a || "height" === a) && (i = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), s.isClosing && (i = 1 - i), o = e - (n = "width" === a ? r.wPadding : r.hPadding), s.skin[a](u("width" === a ? o : o - l * i)), s.inner[a](u("width" === a ? o : o - l * i - c * i)))
        },
        zoomIn: function() {
            var e = s.current,
                t = e.pos,
                n = e.openEffect,
                o = "elastic" === n,
                a = i.extend({
                    opacity: 1
                }, t);
            delete a.position, o ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === n && (t.opacity = .1), s.wrap.css(t).animate(a, {
                duration: "none" === n ? 0 : e.openSpeed,
                easing: e.openEasing,
                step: o ? this.step : null,
                complete: s._afterZoomIn
            })
        },
        zoomOut: function() {
            var e = s.current,
                t = e.closeEffect,
                i = "elastic" === t,
                n = {
                    opacity: .1
                };
            i && (n = this.getOrigPosition(), e.closeOpacity && (n.opacity = .1)), s.wrap.animate(n, {
                duration: "none" === t ? 0 : e.closeSpeed,
                easing: e.closeEasing,
                step: i ? this.step : null,
                complete: s._afterZoomOut
            })
        },
        changeIn: function() {
            var e, t = s.current,
                i = t.nextEffect,
                n = t.pos,
                o = {
                    opacity: 1
                },
                a = s.direction;
            n.opacity = .1, "elastic" === i && (e = "down" === a || "up" === a ? "top" : "left", "down" === a || "right" === a ? (n[e] = g(u(n[e]) - 200), o[e] = "+=200px") : (n[e] = g(u(n[e]) + 200), o[e] = "-=200px")), "none" === i ? s._afterZoomIn() : s.wrap.css(n).animate(o, {
                duration: t.nextSpeed,
                easing: t.nextEasing,
                complete: s._afterZoomIn
            })
        },
        changeOut: function() {
            var e = s.previous,
                t = e.prevEffect,
                n = {
                    opacity: .1
                },
                o = s.direction;
            "elastic" === t && (n["down" === o || "up" === o ? "top" : "left"] = ("up" === o || "left" === o ? "-" : "+") + "=200px"), e.wrap.animate(n, {
                duration: "none" === t ? 0 : e.prevSpeed,
                easing: e.prevEasing,
                complete: function() {
                    i(this).trigger("onReset").remove()
                }
            })
        }
    }, s.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !d,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: i("html"),
        create: function(e) {
            e = i.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(s.coming ? s.coming.parent : e.parent), this.fixed = !1, e.fixed && s.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function(e) {
            var t = this;
            e = i.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (a.bind("resize.overlay", i.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function(e) {
                if (i(e.target).hasClass("fancybox-overlay")) return s.isActive ? s.close() : t.close(), !1
            }), this.overlay.css(e.css).show()
        },
        close: function() {
            var e, t;
            a.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), e = a.scrollTop(), t = a.scrollLeft(), this.el.removeClass("fancybox-lock"), a.scrollTop(e).scrollLeft(t)), i(".fancybox-overlay").remove().hide(), i.extend(this, {
                overlay: null,
                fixed: !1
            })
        },
        update: function() {
            var e, i = "100%";
            this.overlay.width(i).height("100%"), l ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), r.width() > e && (i = r.width())) : r.width() > a.width() && (i = r.width()), this.overlay.width(i).height(r.height())
        },
        onReady: function(e, t) {
            var n = this.overlay;
            i(".fancybox-overlay").stop(!0, !0), n || this.create(e), e.locked && this.fixed && t.fixed && (n || (this.margin = r.height() > a.height() && i("html").css("margin-right").replace("px", "")), t.locked = this.overlay.append(t.wrap), t.fixed = !1), !0 === e.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function(e, t) {
            var n, o;
            t.locked && (!1 !== this.margin && (i("*").filter(function() {
                return "fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), n = a.scrollTop(), o = a.scrollLeft(), this.el.addClass("fancybox-lock"), a.scrollTop(n).scrollLeft(o)), this.open(e)
        },
        onUpdate: function() {
            this.fixed || this.update()
        },
        afterClose: function(e) {
            this.overlay && !s.coming && this.overlay.fadeOut(e.speedOut, i.proxy(this.close, this))
        }
    }, s.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(e) {
            var t, n, o = s.current,
                a = o.title,
                r = e.type;
            if (i.isFunction(a) && (a = a.call(o.element, o)), f(a) && "" !== i.trim(a)) {
                switch (t = i('<div class="fancybox-title fancybox-title-' + r + '-wrap">' + a + "</div>"), r) {
                    case "inside":
                        n = s.skin;
                        break;
                    case "outside":
                        n = s.wrap;
                        break;
                    case "over":
                        n = s.inner;
                        break;
                    default:
                        n = s.skin, t.appendTo("body"), l && t.width(t.width()), t.wrapInner('<span class="child"></span>'), s.current.margin[2] += Math.abs(u(t.css("margin-bottom")))
                }
                t["top" === e.position ? "prependTo" : "appendTo"](n)
            }
        }
    }, i.fn.fancybox = function(e) {
        var t, n = i(this),
            o = this.selector || "",
            a = function(a) {
                var r, l, c = i(this).blur(),
                    d = t;
                a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || c.is(".fancybox-wrap") || (r = e.groupAttr || "data-fancybox-group", (l = c.attr(r)) || (r = "rel", l = c.get(0)[r]), l && "" !== l && "nofollow" !== l && (d = (c = (c = o.length ? i(o) : n).filter("[" + r + '="' + l + '"]')).index(this)), e.index = d, !1 !== s.open(c, e) && a.preventDefault())
            };
        return t = (e = e || {}).index || 0, o && !1 !== e.live ? r.undelegate(o, "click.fb-start").delegate(o + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", a) : n.unbind("click.fb-start").bind("click.fb-start", a), this.filter("[data-fancybox-start=1]").trigger("click"), this
    }, r.ready(function() {
        var t, a, r, l;
        n === i.scrollbarWidth && (i.scrollbarWidth = function() {
            var e = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                t = e.children(),
                n = t.innerWidth() - t.height(99).innerWidth();
            return e.remove(), n
        }), n === i.support.fixedPosition && (i.support.fixedPosition = (l = 20 === (r = i('<div style="position:fixed;top:20px;"></div>').appendTo("body"))[0].offsetTop || 15 === r[0].offsetTop, r.remove(), l)), i.extend(s.defaults, {
            scrollbarWidth: i.scrollbarWidth(),
            fixed: i.support.fixedPosition,
            parent: i("body")
        }), t = i(e).width(), o.addClass("fancybox-lock-test"), a = i(e).width(), o.removeClass("fancybox-lock-test"), i("<style type='text/css'>.fancybox-margin{margin-right:" + (a - t) + "px;}</style>").appendTo("head")
    })
}(window, document, jQuery);


//menu js 
! function(n) {
    "use strict";
    var e = function() {
            var e = this;
            n(document).ready(function() {
                e.initialize()
            })
        },
        a = e.prototype;
    e.SCREEN_XS = 480, e.SCREEN_SM = 768, e.SCREEN_MD = 992, e.SCREEN_LG = 1200, a._callFunctions = null, a._resizeTimer = null, a.initialize = function() {
        this._enableEvents(), this._initBreakpoints(), this._initInk(), this._initAccordion()
    }, a._enableEvents = function() {
        var e = this;
        n(window).on("resize", function(n) {
            clearTimeout(e._resizeTimer), e._resizeTimer = setTimeout(function() {
                e._handleFunctionCalls(n)
            }, 300)
        })
    }, a.getKnobStyle = function(e) {
        var a = e.closest(".knob");
        return {
            width: Math.floor(a.outerWidth()),
            height: Math.floor(a.outerHeight()),
            fgColor: a.css("color"),
            bgColor: a.css("border-top-color"),
            draw: function() {
                e.data("percentage") && n(this.i).val(this.cv + "%")
            }
        }
    }, a._initAccordion = function() {
        n(".panel-group .card .in").each(function() {
            n(this).parent().addClass("expanded")
        }), n(".panel-group").on("hide.bs.collapse", function(e) {
            n(e.target).parent().removeClass("expanded")
        }), n(".panel-group").on("show.bs.collapse", function(e) {
            var a = n(e.target).parent();
            a.closest(".panel-group").find(".card.expanded").removeClass("expanded"), a.addClass("expanded")
        })
    }, a._initInk = function() {
        var e = this;
        n(".ink-reaction").on("click", function(a) {
            var t = n(this).get(0).getBoundingClientRect();
            a.clientX, t.left, a.clientY, t.top;
            var i = e.getBackground(n(this)),
                o = e.getLuma(i) > 183 ? " inverse" : "",
                r = n('<div class="ink' + o + '"></div>'),
                s = n(this).offset(),
                l = a.pageX - s.left,
                c = a.pageY - s.top;
            r.css({
                top: c,
                left: l
            }).appendTo(n(this)), window.setTimeout(function() {
                r.remove()
            }, 1500)
        })
    }, a.getBackground = function(n) {
        var e = n.css("background-color"),
            a = parseFloat(e.split(",")[3], 10);
        return (isNaN(a) || a > .8) && "transparent" !== e ? e : !n.is("body") && this.getBackground(n.parent())
    }, a.getLuma = function(n) {
        var e, a = n.substring(4, n.length - 1).split(","),
            t = a[0],
            i = a[1];
        return .2126 * t + .7152 * i + .0722 * a[2]
    }, a._initBreakpoints = function(e) {
        var a = "";
        a += '<div id="device-breakpoints">', a += '<div class="device-xs visible-xs" data-breakpoint="xs"></div>', a += '<div class="device-sm visible-sm" data-breakpoint="sm"></div>', a += '<div class="device-md visible-md" data-breakpoint="md"></div>', a += '<div class="device-lg visible-lg" data-breakpoint="lg"></div>', a += "</div>", n("body").append(a)
    }, a.isBreakpoint = function(e) {
        return n(".device-" + e).is(":visible")
    }, a.minBreakpoint = function(e) {
        var a = ["xs", "sm", "md", "lg"],
            t = n("#device-breakpoints div:visible").data("breakpoint");
        return n.inArray(e, a) < n.inArray(t, a)
    }, a.callOnResize = function(n) {
        null === this._callFunctions && (this._callFunctions = []), this._callFunctions.push(n), n.call()
    }, a._handleFunctionCalls = function(n) {
        if (null !== this._callFunctions)
            for (var e = 0; e < this._callFunctions.length; e++) this._callFunctions[e].call()
    }, window.materialadmin = window.materialadmin || {}, window.materialadmin.App = new e
}(jQuery),
function(n, e) {
    "use strict";
    var a = function() {
            var n = this;
            e(document).ready(function() {
                n.initialize()
            })
        },
        t = a.prototype;
    a.MENU_MAXIMIZED = 1, a.MENU_COLLAPSED = 2, a.MENU_HIDDEN = 3, t._lastOpened = null, t.initialize = function() {
        this._enableEvents(), this._invalidateMenu(), this._evalMenuScrollbar()
    }, t._enableEvents = function() {
        var n = this;
        e(window).on("resize", function(e) {
            n._handleScreenSize(e)
        }), e('[data-toggle="menubar"]').on("click", function(e) {
            n._handleMenuToggleClick(e)
        }), e('[data-dismiss="menubar"]').on("click", function(e) {
            n._handleMenubarLeave()
        }), e("#main-menu").on("click", "li", function(e) {
            n._handleMenuItemClick(e)
        }), e("#main-menu").on("click", "a", function(e) {
            n._handleMenuLinkClick(e)
        }), e("body.menubar-hoverable").on("mouseenter", "#menubar", function(e) {
            setTimeout(function() {
                n._handleMenubarEnter()
            }, 1)
        })
    }, t._handleScreenSize = function(n) {
        this._invalidateMenu(), this._evalMenuScrollbar(n)
    }, t._handleMenuToggleClick = function(n) {
        materialadmin.App.isBreakpoint("xs") || e("body").toggleClass("menubar-pin");
        var t = this.getMenuState();
        t === a.MENU_COLLAPSED ? this._handleMenubarEnter() : t === a.MENU_MAXIMIZED ? this._handleMenubarLeave() : t === a.MENU_HIDDEN && this._handleMenubarEnter()
    }, t._handleMenuItemClick = function(n) {
        n.stopPropagation();
        var t = e(n.currentTarget),
            i = t.find("> ul"),
            o = t.closest("ul");
        this._handleMenubarEnter(t), 0 !== i.children().length && (this._closeSubMenu(o), (this.getMenuState() === a.MENU_COLLAPSED || !1 === t.hasClass("expanded")) && this._openSubMenu(t))
    }, t._handleMenubarEnter = function(n) {
        var a = this,
            t = e("body").hasClass("offcanvas-left-expanded"),
            i = e("#menubar").data("expanded"),
            o = void 0 !== n;
        if ((!0 === o || !1 === t) && !0 !== i && (e("#content").one("mouseover", function(n) {
                a._handleMenubarLeave()
            }), e("body").addClass("menubar-visible"), e("#menubar").data("expanded", !0), e("#menubar").triggerHandler("enter"), !1 === o)) {
            if (this._lastOpened) {
                var a = this;
                this._openSubMenu(this._lastOpened, 0), this._lastOpened.parents(".gui-folder").each(function() {
                    a._openSubMenu(e(this), 0)
                })
            } else {
                var r = e("#main-menu > li.active");
                this._openSubMenu(r, 0)
            }
        }
    }, t._handleMenubarLeave = function() {
        e("body").removeClass("menubar-visible"), !(materialadmin.App.minBreakpoint("md") && e("body").hasClass("menubar-pin")) && (e("#menubar").data("expanded", !1), !1 === materialadmin.App.isBreakpoint("xs") && this._closeSubMenu(e("#main-menu")))
    }, t._handleMenuLinkClick = function(n) {
        this.getMenuState() !== a.MENU_MAXIMIZED && n.preventDefault()
    }, t._closeSubMenu = function(n) {
        var a = this;
        n.find("> li > ul").stop().slideUp(170, function() {
            e(this).closest("li").removeClass("expanded"), a._evalMenuScrollbar()
        })
    }, t._openSubMenu = function(n, a) {
        var t = this;
        void 0 === a && (a = 170), this._lastOpened = n, n.addClass("expanding"), n.find("> ul").stop().slideDown(a, function() {
            n.addClass("expanded"), n.removeClass("expanding"), t._evalMenuScrollbar(), e("#main-menu ul").removeAttr("style")
        })
    }, t._invalidateMenu = function() {
        e("#main-menu a.active").parentsUntil(e("#main-menu")).each(function() {
            e(this).is("li") && (e(this).addClass("active"), e(this).addClass("expanded"))
        }), this.getMenuState() === a.MENU_COLLAPSED && e("#main-menu").find("> li").removeClass("expanded"), e("body").hasClass("menubar-visible") && this._handleMenubarEnter(), e("#main-menu").triggerHandler("ready"), e("#menubar").addClass("animate")
    }, t.getMenuState = function() {
        var n = e("#menubar").css("transform"),
            t = n ? n.match(/-?[\d\.]+/g) : null,
            i = a.MENU_MAXIMIZED;
        return null === t ? 100 >= e("#menubar").width() ? a.MENU_COLLAPSED : a.MENU_MAXIMIZED : "0" === t[4] ? a.MENU_MAXIMIZED : a.MENU_HIDDEN
    }, t._evalMenuScrollbar = function() {
        if (e.isFunction(e.fn.nanoScroller)) {
            var n = e("#menubar .menubar-foot-panel").outerHeight();
            n = Math.max(n, 1), e(".menubar-scroll-panel").css({
                "padding-bottom": n
            });
            var a = e("#menubar");
            if (0 !== a.length) {
                var t = e(".menubar-scroll-panel");
                !1 === t.parent().hasClass("nano-content") && t.wrap('<div class="nano"><div class="nano-content"></div></div>');
                var i = e(window).height() - a.position().top - a.find(".nano").position().top,
                    o = t.closest(".nano");
                o.css({
                    height: i
                }), o.nanoScroller({
                    preventPageScrolling: !0,
                    iOSNativeScrolling: !0
                })
            }
        }
    }, window.materialadmin.AppNavigation = new a
}(this.materialadmin, jQuery),
function(n, e) {
    "use strict";
    var a = function() {
            var n = this;
            e(document).ready(function() {
                n.initialize()
            })
        },
        t = a.prototype;
    t._timer = null, t._useBackdrop = null, t.initialize = function() {
        this._enableEvents()
    }, t._enableEvents = function() {
        var n = this;
        e(window).on("resize", function(e) {
            n._handleScreenSize(e)
        }), e(".offcanvas").on("refresh", function(e) {
            n.evalScrollbar(e)
        }), e('[data-toggle="offcanvas"]').on("click", function(a) {
            a.preventDefault(), n._handleOffcanvasOpen(e(a.currentTarget))
        }), e('[data-dismiss="offcanvas"]').on("click", function(e) {
            n._handleOffcanvasClose()
        }), e("#base").on("click", "> .backdrop", function(e) {
            n._handleOffcanvasClose()
        }), e('[data-toggle="offcanvas-left"].active').each(function() {
            n._handleOffcanvasOpen(e(this))
        }), e('[data-toggle="offcanvas-right"].active').each(function() {
            n._handleOffcanvasOpen(e(this))
        })
    }, t._handleScreenSize = function(n) {
        this.evalScrollbar(n)
    }, t._handleOffcanvasOpen = function(n) {
        if (n.hasClass("active")) {
            this._handleOffcanvasClose();
            return
        }
        var e = n.attr("href");
        this._useBackdrop = void 0 === n.data("backdrop") || n.data("backdrop"), this.openOffcanvas(e), this.invalidate()
    }, t._handleOffcanvasClose = function(n) {
        this.closeOffcanvas(), this.invalidate()
    }, t.openOffcanvas = function(n) {
        this.closeOffcanvas(), e(n).addClass("active");
        var a = e(n).closest(".offcanvas:first").length > 0;
        this._useBackdrop && e("body").addClass("offcanvas-expanded");
        var t = e(n).width();
        t > e(document).width() && (t = e(document).width() - 8, e(n + ".active").css({
            width: t
        }));
        var i = "translate(" + (t = a ? t : "-" + t) + "px, 0)";
        e(n + ".active").css({
            "-webkit-transform": i,
            "-ms-transform": i,
            "-o-transform": i,
            transform: i
        })
    }, t.closeOffcanvas = function() {
        e('[data-toggle="offcanvas"]').removeClass("expanded"), e(".offcanvas-pane").removeClass("active"), e(".offcanvas-pane").css({
            "-webkit-transform": "",
            "-ms-transform": "",
            "-o-transform": "",
            transform: ""
        })
    }, t.toggleButtonState = function() {
        var n = e(".offcanvas-pane.active").attr("id");
        e('[data-toggle="offcanvas"]').removeClass("active"), e('[href="#' + n + '"]').addClass("active")
    }, t.toggleBackdropState = function() {
        e(".offcanvas-pane.active").length > 0 && this._useBackdrop ? this._addBackdrop() : this._removeBackdrop()
    }, t._addBackdrop = function() {
        0 === e("#base > .backdrop").length && "hidden" !== e("#base").data("backdrop") && e('<div class="backdrop"></div>').hide().appendTo("#base").fadeIn()
    }, t._removeBackdrop = function() {
        e("#base > .backdrop").fadeOut(function() {
            e(this).remove()
        })
    }, t.toggleBodyScrolling = function() {
        if (clearTimeout(this._timer), e(".offcanvas-pane.active").length > 0 && this._useBackdrop) {
            var n = this.measureScrollbar(),
                a = parseInt(e("body").css("padding-right") || 0, 10);
            n !== a && (e("body").css("padding-right", a + n), e(".headerbar").css("padding-right", a + n))
        } else this._timer = setTimeout(function() {
            e("body").removeClass("offcanvas-expanded"), e("body").css("padding-right", ""), e(".headerbar").removeClass("offcanvas-expanded"), e(".headerbar").css("padding-right", "")
        }, 330)
    }, t.invalidate = function() {
        this.toggleButtonState(), this.toggleBackdropState(), this.toggleBodyScrolling(), this.evalScrollbar()
    }, t.evalScrollbar = function() {
        if (e.isFunction(e.fn.nanoScroller)) {
            var n = e(".offcanvas-pane.active");
            if (0 !== n.length) {
                var a = e(".offcanvas-pane.active .offcanvas-body");
                !1 === a.parent().hasClass("nano-content") && a.wrap('<div class="nano"><div class="nano-content"></div></div>');
                var t = e(window).height() - n.find(".nano").position().top,
                    i = a.closest(".nano");
                i.css({
                    height: t
                }), i.nanoScroller({
                    preventPageScrolling: !0
                })
            }
        }
    }, t.measureScrollbar = function() {
        var n = document.createElement("div");
        n.className = "modal-scrollbar-measure", e("body").append(n);
        var a = n.offsetWidth - n.clientWidth;
        return e("body")[0].removeChild(n), a
    }, window.materialadmin.AppOffcanvas = new a
}(this.materialadmin, jQuery),
function(n, e) {
    "use strict";
    var a = function() {
            var n = this;
            e(document).ready(function() {
                n.initialize()
            })
        },
        t = a.prototype;
    t.initialize = function() {}, t.addCardLoader = function(n) {
        var a = e('<div class="card-loader"></div>').appendTo(n);
        a.hide().fadeIn();
        var t = new Spinner({
            lines: 17,
            length: 0,
            width: 3,
            radius: 6,
            corners: 1,
            rotate: 13,
            direction: 1,
            color: "#000",
            speed: 2,
            trail: 76,
            shadow: !1,
            hwaccel: !1,
            className: "spinner",
            zIndex: 2e9
        }).spin(a.get(0));
        n.data("card-spinner", t)
    }, t.removeCardLoader = function(n) {
        var e = n.data("card-spinner"),
            a = n.find(".card-loader");
        a.fadeOut(function() {
            e.stop(), a.remove()
        })
    }, t.toggleCardCollapse = function(n, a) {
        a = void 0 !== a ? a : 400;
        var t = !1;
        n.find(".nano").slideToggle(a), n.find(".card-body").slideToggle(a, function() {
            !1 === t && (e("#COLLAPSER").triggerHandler("card.bb.collapse", [!e(this).is(":visible")]), t = !0)
        }), n.toggleClass("card-collapsed")
    }, t.removeCard = function(n) {
        n.fadeOut(function() {
            n.remove()
        })
    }, window.materialadmin.AppCard = new a
}(this.materialadmin, jQuery),
function(n, e) {
    "use strict";
    var a = function() {
            var n = this;
            e(document).ready(function() {
                n.initialize()
            })
        },
        t = a.prototype;
    t.initialize = function() {
        this._enableEvents(), this._initRadioAndCheckbox(), this._initFloatingLabels(), this._initValidation()
    }, t._enableEvents = function() {
        e('[data-submit="form"]').on("click", function(n) {
            n.preventDefault();
            var a = e(n.currentTarget).attr("href");
            e(a).submit()
        }), e("textarea.autosize").on("focus", function() {
            e(this).autosize({
                append: ""
            })
        })
    }, t._initRadioAndCheckbox = function() {
        e(".checkbox-styled input, .radio-styled input").each(function() {
            0 === e(this).next("span").length && e(this).after("<span></span>")
        })
    }, t._initFloatingLabels = function() {
        e(".floating-label .form-control").on("keyup change", function(n) {
            var a = e(n.currentTarget);
            "" !== e.trim(a.val()) ? a.addClass("dirty").removeClass("static") : a.removeClass("dirty").removeClass("static")
        }), e(".floating-label .form-control").each(function() {
            var n = e(this);
            "" !== e.trim(n.val()) && n.addClass("static").addClass("dirty")
        }), e(".form-horizontal .form-control").each(function() {
            e(this).after('<div class="form-control-line"></div>')
        })
    }, t._initValidation = function() {
        e.isFunction(e.fn.validate) && (e.validator.setDefaults({
            highlight: function(n) {
                e(n).closest(".form-group").addClass("has-error")
            },
            unhighlight: function(n) {
                e(n).closest(".form-group").removeClass("has-error")
            },
            errorElement: "span",
            errorClass: "help-block",
            errorPlacement: function(n, e) {
                e.parent(".input-group").length ? n.insertAfter(e.parent()) : e.parent("label").length ? n.insertAfter(e.parent()) : n.insertAfter(e)
            }
        }), e(".form-validate").each(function() {
            var n = e(this).validate();
            e(this).data("validator", n)
        }))
    }, window.materialadmin.AppForm = new a
}(this.materialadmin, jQuery),
function(n, e) {
    "use strict";
    var a = function() {
            var n = this;
            e(document).ready(function() {
                n.initialize()
            })
        },
        t = a.prototype;
    t._clearSearchTimer = null, t.initialize = function() {
        this._enableEvents()
    }, t._enableEvents = function() {
        var n = this;
        e(".navbar-search .btn").on("click", function(e) {
            n._handleButtonClick(e)
        }), e(".navbar-search input").on("blur", function(e) {
            n._handleFieldBlur(e)
        })
    }, t._handleButtonClick = function(n) {
        n.preventDefault();
        var a = e(n.currentTarget).closest("form"),
            t = a.find("input"),
            i = t.val();
        "" === e.trim(i) ? (a.addClass("expanded"), t.focus()) : (a.addClass("expanded"), a.submit(), clearTimeout(this._clearSearchTimer))
    }, t._handleFieldBlur = function(n) {
        var a = e(n.currentTarget);
        a.closest("form").removeClass("expanded"), clearTimeout(this._clearSearchTimer), this._clearSearchTimer = setTimeout(function() {
            a.val("")
        }, 300)
    }, window.materialadmin.AppNavSearch = new a
}(this.materialadmin, jQuery),
function(n, e) {
    "use strict";
    var a = function() {
            var n = this;
            e(document).ready(function() {
                n.initialize()
            })
        },
        t = a.prototype;
    t.initialize = function() {
        this._initScroller(), this._initTabs(), this._initTooltips(), this._initPopover(), this._initSortables()
    }, t._initScroller = function() {
        e.isFunction(e.fn.nanoScroller) && (e.each(e(".scroll"), function(n) {
            var a = e(this);
            materialadmin.AppVendor.addScroller(a)
        }), materialadmin.App.callOnResize(function() {
            e.each(e(".scroll-xs"), function(n) {
                var a = e(this);
                a.is(":visible") && (materialadmin.App.minBreakpoint("xs") ? materialadmin.AppVendor.removeScroller(a) : materialadmin.AppVendor.addScroller(a))
            }), e.each(e(".scroll-sm"), function(n) {
                var a = e(this);
                a.is(":visible") && (materialadmin.App.minBreakpoint("sm") ? materialadmin.AppVendor.removeScroller(a) : materialadmin.AppVendor.addScroller(a))
            }), e.each(e(".scroll-md"), function(n) {
                var a = e(this);
                a.is(":visible") && (materialadmin.App.minBreakpoint("md") ? materialadmin.AppVendor.removeScroller(a) : materialadmin.AppVendor.addScroller(a))
            }), e.each(e(".scroll-lg"), function(n) {
                var a = e(this);
                a.is(":visible") && (materialadmin.App.minBreakpoint("lg") ? materialadmin.AppVendor.removeScroller(a) : materialadmin.AppVendor.addScroller(a))
            })
        }))
    }, t.addScroller = function(n) {
        n.wrap('<div class="nano"><div class="nano-content"></div></div>');
        var e = n.closest(".nano");
        e.css({
            height: n.outerHeight()
        }), e.nanoScroller(), n.css({
            height: "auto"
        })
    }, t.removeScroller = function(n) {
        !1 !== n.parent().parent().hasClass("nano") && (n.parent().parent().nanoScroller({
            destroy: !0
        }), n.parent(".nano-content").replaceWith(n), n.parent(".nano").replaceWith(n), n.attr("style", ""))
    }, t._initSortables = function() {
        e.isFunction(e.fn.sortable) && e('[data-sortable="true"]').sortable({
            placeholder: "ui-state-highlight",
            delay: 100,
            start: function(n, e) {
                e.placeholder.height(e.item.outerHeight() - 1)
            }
        })
    }, t._initTabs = function() {
        e.isFunction(e.fn.tab) && e('[data-toggle="tabs"] a').click(function(n) {
            n.preventDefault(), e(this).tab("show")
        })
    }, t._initTooltips = function() {
        e.isFunction(e.fn.tooltip) && e('[data-toggle="tooltip"]').tooltip({
            container: "body"
        })
    }, t._initPopover = function() {
        e.isFunction(e.fn.popover) && e('[data-toggle="popover"]').popover({
            container: "body"
        })
    }, window.materialadmin.AppVendor = new a
}(this.materialadmin, jQuery);



//wow js 

(function() {
    var MutationObserver, Util, WeakMap, getComputedStyle, getComputedStyleRX, bind = function(fn, me) {
            return function() {
                return fn.apply(me, arguments);
            };
        },
        indexOf = [].indexOf || function(item) {
            for (var i = 0, l = this.length; i < l; i++) {
                if (i in this && this[i] === item) return i;
            }
            return -1;
        };
    Util = (function() {
        function Util() {}
        Util.prototype.extend = function(custom, defaults) {
            var key, value;
            for (key in defaults) {
                value = defaults[key];
                if (custom[key] == null) {
                    custom[key] = value;
                }
            }
            return custom;
        };
        Util.prototype.isMobile = function(agent) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
        };
        Util.prototype.createEvent = function(event, bubble, cancel, detail) {
            var customEvent;
            if (bubble == null) {
                bubble = false;
            }
            if (cancel == null) {
                cancel = false;
            }
            if (detail == null) {
                detail = null;
            }
            if (document.createEvent != null) {
                customEvent = document.createEvent('CustomEvent');
                customEvent.initCustomEvent(event, bubble, cancel, detail);
            } else if (document.createEventObject != null) {
                customEvent = document.createEventObject();
                customEvent.eventType = event;
            } else {
                customEvent.eventName = event;
            }
            return customEvent;
        };
        Util.prototype.emitEvent = function(elem, event) {
            if (elem.dispatchEvent != null) {
                return elem.dispatchEvent(event);
            } else if (event in (elem != null)) {
                return elem[event]();
            } else if (("on" + event) in (elem != null)) {
                return elem["on" + event]();
            }
        };
        Util.prototype.addEvent = function(elem, event, fn) {
            if (elem.addEventListener != null) {
                return elem.addEventListener(event, fn, false);
            } else if (elem.attachEvent != null) {
                return elem.attachEvent("on" + event, fn);
            } else {
                return elem[event] = fn;
            }
        };
        Util.prototype.removeEvent = function(elem, event, fn) {
            if (elem.removeEventListener != null) {
                return elem.removeEventListener(event, fn, false);
            } else if (elem.detachEvent != null) {
                return elem.detachEvent("on" + event, fn);
            } else {
                return delete elem[event];
            }
        };
        Util.prototype.innerHeight = function() {
            if ('innerHeight' in window) {
                return window.innerHeight;
            } else {
                return document.documentElement.clientHeight;
            }
        };
        return Util;
    })();
    WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = (function() {
        function WeakMap() {
            this.keys = [];
            this.values = [];
        }
        WeakMap.prototype.get = function(key) {
            var i, item, j, len, ref;
            ref = this.keys;
            for (i = j = 0, len = ref.length; j < len; i = ++j) {
                item = ref[i];
                if (item === key) {
                    return this.values[i];
                }
            }
        };
        WeakMap.prototype.set = function(key, value) {
            var i, item, j, len, ref;
            ref = this.keys;
            for (i = j = 0, len = ref.length; j < len; i = ++j) {
                item = ref[i];
                if (item === key) {
                    this.values[i] = value;
                    return;
                }
            }
            this.keys.push(key);
            return this.values.push(value);
        };
        return WeakMap;
    })());
    MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = (function() {
        function MutationObserver() {
            if (typeof console !== "undefined" && console !== null) {
                console.warn('MutationObserver is not supported by your browser.');
            }
            if (typeof console !== "undefined" && console !== null) {
                console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
            }
        }
        MutationObserver.notSupported = true;
        MutationObserver.prototype.observe = function() {};
        return MutationObserver;
    })());
    getComputedStyle = this.getComputedStyle || function(el, pseudo) {
        this.getPropertyValue = function(prop) {
            var ref;
            if (prop === 'float') {
                prop = 'styleFloat';
            }
            if (getComputedStyleRX.test(prop)) {
                prop.replace(getComputedStyleRX, function(_, _char) {
                    return _char.toUpperCase();
                });
            }
            return ((ref = el.currentStyle) != null ? ref[prop] : void 0) || null;
        };
        return this;
    };
    getComputedStyleRX = /(\-([a-z]){1})/g;
    this.WOW = (function() {
        WOW.prototype.defaults = {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            callback: null,
            scrollContainer: null
        };

        function WOW(options) {
            if (options == null) {
                options = {};
            }
            this.scrollCallback = bind(this.scrollCallback, this);
            this.scrollHandler = bind(this.scrollHandler, this);
            this.resetAnimation = bind(this.resetAnimation, this);
            this.start = bind(this.start, this);
            this.scrolled = true;
            this.config = this.util().extend(options, this.defaults);
            if (options.scrollContainer != null) {
                this.config.scrollContainer = document.querySelector(options.scrollContainer);
            }
            this.animationNameCache = new WeakMap();
            this.wowEvent = this.util().createEvent(this.config.boxClass);
        }
        WOW.prototype.init = function() {
            var ref;
            this.element = window.document.documentElement;
            if ((ref = document.readyState) === "interactive" || ref === "complete") {
                this.start();
            } else {
                this.util().addEvent(document, 'DOMContentLoaded', this.start);
            }
            return this.finished = [];
        };
        WOW.prototype.start = function() {
            var box, j, len, ref;
            this.stopped = false;
            this.boxes = (function() {
                var j, len, ref, results;
                ref = this.element.querySelectorAll("." + this.config.boxClass);
                results = [];
                for (j = 0, len = ref.length; j < len; j++) {
                    box = ref[j];
                    results.push(box);
                }
                return results;
            }).call(this);
            this.all = (function() {
                var j, len, ref, results;
                ref = this.boxes;
                results = [];
                for (j = 0, len = ref.length; j < len; j++) {
                    box = ref[j];
                    results.push(box);
                }
                return results;
            }).call(this);
            if (this.boxes.length) {
                if (this.disabled()) {
                    this.resetStyle();
                } else {
                    ref = this.boxes;
                    for (j = 0, len = ref.length; j < len; j++) {
                        box = ref[j];
                        this.applyStyle(box, true);
                    }
                }
            }
            if (!this.disabled()) {
                this.util().addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
                this.util().addEvent(window, 'resize', this.scrollHandler);
                this.interval = setInterval(this.scrollCallback, 50);
            }
            if (this.config.live) {
                return new MutationObserver((function(_this) {
                    return function(records) {
                        var k, len1, node, record, results;
                        results = [];
                        for (k = 0, len1 = records.length; k < len1; k++) {
                            record = records[k];
                            results.push((function() {
                                var l, len2, ref1, results1;
                                ref1 = record.addedNodes || [];
                                results1 = [];
                                for (l = 0, len2 = ref1.length; l < len2; l++) {
                                    node = ref1[l];
                                    results1.push(this.doSync(node));
                                }
                                return results1;
                            }).call(_this));
                        }
                        return results;
                    };
                })(this)).observe(document.body, {
                    childList: true,
                    subtree: true
                });
            }
        };
        WOW.prototype.stop = function() {
            this.stopped = true;
            this.util().removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
            this.util().removeEvent(window, 'resize', this.scrollHandler);
            if (this.interval != null) {
                return clearInterval(this.interval);
            }
        };
        WOW.prototype.sync = function(element) {
            if (MutationObserver.notSupported) {
                return this.doSync(this.element);
            }
        };
        WOW.prototype.doSync = function(element) {
            var box, j, len, ref, results;
            if (element == null) {
                element = this.element;
            }
            if (element.nodeType !== 1) {
                return;
            }
            element = element.parentNode || element;
            ref = element.querySelectorAll("." + this.config.boxClass);
            results = [];
            for (j = 0, len = ref.length; j < len; j++) {
                box = ref[j];
                if (indexOf.call(this.all, box) < 0) {
                    this.boxes.push(box);
                    this.all.push(box);
                    if (this.stopped || this.disabled()) {
                        this.resetStyle();
                    } else {
                        this.applyStyle(box, true);
                    }
                    results.push(this.scrolled = true);
                } else {
                    results.push(void 0);
                }
            }
            return results;
        };
        WOW.prototype.show = function(box) {
            this.applyStyle(box);
            box.className = box.className + " " + this.config.animateClass;
            if (this.config.callback != null) {
                this.config.callback(box);
            }
            this.util().emitEvent(box, this.wowEvent);
            this.util().addEvent(box, 'animationend', this.resetAnimation);
            this.util().addEvent(box, 'oanimationend', this.resetAnimation);
            this.util().addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
            this.util().addEvent(box, 'MSAnimationEnd', this.resetAnimation);
            return box;
        };
        WOW.prototype.applyStyle = function(box, hidden) {
            var delay, duration, iteration;
            duration = box.getAttribute('data-wow-duration');
            delay = box.getAttribute('data-wow-delay');
            iteration = box.getAttribute('data-wow-iteration');
            return this.animate((function(_this) {
                return function() {
                    return _this.customStyle(box, hidden, duration, delay, iteration);
                };
            })(this));
        };
        WOW.prototype.animate = (function() {
            if ('requestAnimationFrame' in window) {
                return function(callback) {
                    return window.requestAnimationFrame(callback);
                };
            } else {
                return function(callback) {
                    return callback();
                };
            }
        })();
        WOW.prototype.resetStyle = function() {
            var box, j, len, ref, results;
            ref = this.boxes;
            results = [];
            for (j = 0, len = ref.length; j < len; j++) {
                box = ref[j];
                results.push(box.style.visibility = 'visible');
            }
            return results;
        };
        WOW.prototype.resetAnimation = function(event) {
            var target;
            if (event.type.toLowerCase().indexOf('animationend') >= 0) {
                target = event.target || event.srcElement;
                return target.className = target.className.replace(this.config.animateClass, '').trim();
            }
        };
        WOW.prototype.customStyle = function(box, hidden, duration, delay, iteration) {
            if (hidden) {
                this.cacheAnimationName(box);
            }
            box.style.visibility = hidden ? 'hidden' : 'visible';
            if (duration) {
                this.vendorSet(box.style, {
                    animationDuration: duration
                });
            }
            if (delay) {
                this.vendorSet(box.style, {
                    animationDelay: delay
                });
            }
            if (iteration) {
                this.vendorSet(box.style, {
                    animationIterationCount: iteration
                });
            }
            this.vendorSet(box.style, {
                animationName: hidden ? 'none' : this.cachedAnimationName(box)
            });
            return box;
        };
        WOW.prototype.vendors = ["moz", "webkit"];
        WOW.prototype.vendorSet = function(elem, properties) {
            var name, results, value, vendor;
            results = [];
            for (name in properties) {
                value = properties[name];
                elem["" + name] = value;
                results.push((function() {
                    var j, len, ref, results1;
                    ref = this.vendors;
                    results1 = [];
                    for (j = 0, len = ref.length; j < len; j++) {
                        vendor = ref[j];
                        results1.push(elem["" + vendor + (name.charAt(0).toUpperCase()) + (name.substr(1))] = value);
                    }
                    return results1;
                }).call(this));
            }
            return results;
        };
        WOW.prototype.vendorCSS = function(elem, property) {
            var j, len, ref, result, style, vendor;
            style = getComputedStyle(elem);
            result = style.getPropertyCSSValue(property);
            ref = this.vendors;
            for (j = 0, len = ref.length; j < len; j++) {
                vendor = ref[j];
                result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
            }
            return result;
        };
        WOW.prototype.animationName = function(box) {
            var animationName;
            try {
                animationName = this.vendorCSS(box, 'animation-name').cssText;
            } catch (_error) {
                animationName = getComputedStyle(box).getPropertyValue('animation-name');
            }
            if (animationName === 'none') {
                return '';
            } else {
                return animationName;
            }
        };
        WOW.prototype.cacheAnimationName = function(box) {
            return this.animationNameCache.set(box, this.animationName(box));
        };
        WOW.prototype.cachedAnimationName = function(box) {
            return this.animationNameCache.get(box);
        };
        WOW.prototype.scrollHandler = function() {
            return this.scrolled = true;
        };
        WOW.prototype.scrollCallback = function() {
            var box;
            if (this.scrolled) {
                this.scrolled = false;
                this.boxes = (function() {
                    var j, len, ref, results;
                    ref = this.boxes;
                    results = [];
                    for (j = 0, len = ref.length; j < len; j++) {
                        box = ref[j];
                        if (!(box)) {
                            continue;
                        }
                        if (this.isVisible(box)) {
                            this.show(box);
                            continue;
                        }
                        results.push(box);
                    }
                    return results;
                }).call(this);
                if (!(this.boxes.length || this.config.live)) {
                    return this.stop();
                }
            }
        };
        WOW.prototype.offsetTop = function(element) {
            var top;
            while (element.offsetTop === void 0) {
                element = element.parentNode;
            }
            top = element.offsetTop;
            while (element = element.offsetParent) {
                top += element.offsetTop;
            }
            return top;
        };
        WOW.prototype.isVisible = function(box) {
            var bottom, offset, top, viewBottom, viewTop;
            offset = box.getAttribute('data-wow-offset') || this.config.offset;
            viewTop = (this.config.scrollContainer && this.config.scrollContainer.scrollTop) || window.pageYOffset;
            viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset;
            top = this.offsetTop(box);
            bottom = top + box.clientHeight;
            return top <= viewBottom && bottom >= viewTop;
        };
        WOW.prototype.util = function() {
            return this._util != null ? this._util : this._util = new Util();
        };
        WOW.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent);
        };
        return WOW;
    })();
}).call(this);


/*! jQuery Validation Plugin - v1.15.0 - 2/24/2016
 * http://jqueryvalidation.org/
 * Copyright (c) 2016 JÃ¶rn Zaefferer; Licensed MIT */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    a.extend(a.fn, {
        validate: function(b) {
            if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) {
                c.settings.submitHandler && (c.submitButton = b.target), a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
            }), this.on("submit.validate", function(b) {
                function d() {
                    var d, e;
                    return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e ? e : !1) : !0
                }
                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
            })), c)
        },
        valid: function() {
            var b, c, d;
            return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function() {
                b = c.element(this) && b, b || (d = d.concat(c.errorList))
            }), c.errorList = d), b
        },
        rules: function(b, c) {
            if (this.length) {
                var d, e, f, g, h, i, j = this[0];
                if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                    case "add":
                        a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                        break;
                    case "remove":
                        return c ? (i = {}, a.each(c.split(/\s/), function(b, c) {
                            i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
                        }), i) : (delete e[j.name], f)
                }
                return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
                    required: h
                }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
                    remote: h
                })), g
            }
        }
    }), a.extend(a.expr[":"], {
        blank: function(b) {
            return !a.trim("" + a(b).val())
        },
        filled: function(b) {
            var c = a(b).val();
            return null !== c && !!a.trim("" + c)
        },
        unchecked: function(b) {
            return !a(b).prop("checked")
        }
    }), a.validator = function(b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
    }, a.validator.format = function(b, c) {
        return 1 === arguments.length ? function() {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c)
        } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
                return c
            })
        }), b)
    }, a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(a) {
                this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function(a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function(b, c) {
                var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === c.which && "" === this.elementValue(b) || -1 !== a.inArray(c.keyCode, d) || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
            },
            onclick: function(a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function(b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}."),
            step: a.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function b(b) {
                    var c = a.data(this.form, "validator"),
                        d = "on" + b.type.replace(/^validate/, ""),
                        e = c.settings;
                    e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
                }
                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var c, d = this.groups = {};
                a.each(this.settings.groups, function(b, c) {
                    "string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) {
                        d[c] = b
                    })
                }), c = this.settings.rules, a.each(c, function(b, d) {
                    c[b] = a.validator.normalizeRule(d)
                }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            },
            element: function(b) {
                var c, d, e = this.clean(b),
                    f = this.validationTargetFor(e),
                    g = this,
                    h = !0;
                return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function(a, b) {
                    b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = h && g.check(e)))
                }), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h
            },
            showErrors: function(b) {
                if (b) {
                    var c = this;
                    a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function(a, b) {
                        return {
                            message: a,
                            element: c.findByName(b)[0]
                        }
                    }), this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(b)
            },
            resetElements: function(a) {
                var b;
                if (this.settings.unhighlight)
                    for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
                else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(a) {
                var b, c = 0;
                for (b in a) a[b] && c++;
                return c
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(a) {
                a.not(this.containers).text(""), this.addWrapper(a).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (b) {}
            },
            findLastActive: function() {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function(a) {
                    return a.element.name === b.name
                }).length && b
            },
            elements: function() {
                var b = this,
                    c = {};
                return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var d = this.name || a(this).attr("name");
                    return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0]), d in c || !b.objectLength(a(this).rules()) ? !1 : (c[d] = !0, !0)
                })
            },
            clean: function(b) {
                return a(b)[0]
            },
            errors: function() {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([])
            },
            reset: function() {
                this.resetInternals(), this.currentElements = a([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(a) {
                this.reset(), this.toHide = this.errorsFor(a)
            },
            elementValue: function(b) {
                var c, d, e = a(b),
                    f = b.type;
                return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = b.hasAttribute("contenteditable") ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
            },
            check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f = a(b).rules(),
                    g = a.map(f, function(a, b) {
                        return b
                    }).length,
                    h = !1,
                    i = this.elementValue(b);
                if ("function" == typeof f.normalizer) {
                    if (i = f.normalizer.call(b, i), "string" != typeof i) throw new TypeError("The normalizer should return a string value.");
                    delete f.normalizer
                }
                for (d in f) {
                    e = {
                        method: d,
                        parameters: f[d]
                    };
                    try {
                        if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
                            h = !0;
                            continue
                        }
                        if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c) return this.formatAndAdd(b, e), !1
                    } catch (j) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), j
                    }
                }
                if (!h) return this.objectLength(f) && this.successList.push(b), !0
            },
            customDataMessage: function(b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
            },
            customMessage: function(a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a]) return arguments[a]
            },
            defaultMessage: function(b, c) {
                var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
                    e = /\$?\{(\d+)\}/g;
                return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d
            },
            formatAndAdd: function(a, b) {
                var c = this.defaultMessage(a, b);
                this.errorList.push({
                    message: c,
                    element: a,
                    method: b.method
                }), this.errorMap[a.name] = c, this.submitted[a.name] = c
            },
            addWrapper: function(a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
            },
            defaultShowErrors: function() {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return a(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(b, c) {
                var d, e, f, g, h = this.errorsFor(b),
                    i = this.idOrName(b),
                    j = a(b).attr("aria-describedby");
                h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function(b, c) {
                    c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
                })))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h)
            },
            errorsFor: function(b) {
                var c = this.escapeCssMeta(this.idOrName(b)),
                    d = a(b).attr("aria-describedby"),
                    e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e)
            },
            escapeCssMeta: function(a) {
                return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function(b) {
                return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function(b) {
                return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
            },
            getLength: function(b, c) {
                switch (c.nodeName.toLowerCase()) {
                    case "select":
                        return a("option:selected", c).length;
                    case "input":
                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },
            depend: function(a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
            },
            dependTypes: {
                "boolean": function(a) {
                    return a
                },
                string: function(b, c) {
                    return !!a(b, c.form).length
                },
                "function": function(a, b) {
                    return a(b)
                }
            },
            optional: function(b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            },
            startRequest: function(b) {
                this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0)
            },
            stopRequest: function(b, c) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(b, c) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, {
                        method: c
                    })
                })
            },
            destroy: function() {
                this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function(b) {
            var c = {},
                d = a(b).attr("class");
            return d && a.each(d.split(" "), function() {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }), c
        },
        normalizeAttributeRule: function(a, b, c, d) {
            /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
        },
        attributeRules: function(b) {
            var c, d, e = {},
                f = a(b),
                g = b.getAttribute("type");
            for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
        },
        dataRules: function(b) {
            var c, d, e = {},
                f = a(b),
                g = b.getAttribute("type");
            for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d);
            return e
        },
        staticRules: function(b) {
            var c = {},
                d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
        },
        normalizeRules: function(b, c) {
            return a.each(b, function(d, e) {
                if (e === !1) return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                        case "string":
                            f = !!a(e.depends, c.form).length;
                            break;
                        case "function":
                            f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 !== e.param ? e.param : !0 : (a.data(c.form, "validator").resetElements(a(c)), delete b[d])
                }
            }), a.each(b, function(d, e) {
                b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e
            }), a.each(["minlength", "maxlength"], function() {
                b[this] && (b[this] = Number(b[this]))
            }), a.each(["rangelength", "range"], function() {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
            }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
        },
        normalizeRule: function(b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function() {
                    c[this] = !0
                }), b = c
            }
            return b
        },
        addMethod: function(b, c, d) {
            a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function(b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
            },
            email: function(a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            },
            url: function(a, b) {
                return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)
            },
            date: function(a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
            },
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            },
            number: function(a, b) {
                return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            minlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d
            },
            maxlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || d >= e
            },
            rangelength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            },
            min: function(a, b, c) {
                return this.optional(b) || a >= c
            },
            max: function(a, b, c) {
                return this.optional(b) || c >= a
            },
            range: function(a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            },
            step: function(b, c, d) {
                var e = a(c).attr("type"),
                    f = "Step attribute on input type " + e + " is not supported.",
                    g = ["text", "number", "range"],
                    h = new RegExp("\\b" + e + "\\b"),
                    i = e && !h.test(g.join());
                if (i) throw new Error(f);
                return this.optional(c) || b % d === 0
            },
            equalTo: function(b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    a(c).valid()
                }), b === e.val()
            },
            remote: function(b, c, d, e) {
                if (this.optional(c)) return "dependency-mismatch";
                e = "string" == typeof e && e || "remote";
                var f, g, h, i = this.previousValue(c, e);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {
                    url: d
                } || d, h = a.param(a.extend({
                    data: b
                }, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: g,
                    context: f.currentForm,
                    success: function(a) {
                        var d, g, h, j = a === !0 || "true" === a;
                        f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
                            method: e,
                            parameters: b
                        }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j)
                    }
                }, d)), "pending")
            }
        }
    });
    var b, c = {};
    a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
    }) : (b = a.ajax, a.ajax = function(d) {
        var e = ("mode" in d ? d : a.ajaxSettings).mode,
            f = ("port" in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
    })
});

/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 */
! function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    "use strict";

    function b(a) {
        if (a instanceof Date) return a;
        if (String(a).match(g)) return String(a).match(/^[0-9]*$/) && (a = Number(a)), String(a).match(/\-/) && (a = String(a).replace(/\-/g, "http://themegeniuslab.com/")), new Date(a);
        throw new Error("Couldn't cast `" + a + "` to a date object.")
    }

    function c(a) {
        var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        return new RegExp(b)
    }

    function d(a) {
        return function(b) {
            var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (d)
                for (var f = 0, g = d.length; f < g; ++f) {
                    var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                        j = c(h[0]),
                        k = h[1] || "",
                        l = h[3] || "",
                        m = null;
                    h = h[2], i.hasOwnProperty(h) && (m = i[h], m = Number(a[m])), null !== m && ("!" === k && (m = e(l, m)), "" === k && m < 10 && (m = "0" + m.toString()), b = b.replace(j, m.toString()))
                }
            return b = b.replace(/%%/, "%")
        }
    }

    function e(a, b) {
        var c = "s",
            d = "";
        return a && (a = a.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === a.length ? c = a[0] : (d = a[0], c = a[1])), Math.abs(b) > 1 ? c : d
    }
    var f = [],
        g = [],
        h = {
            precision: 100,
            elapse: !1,
            defer: !1
        };
    g.push(/^[0-9]*$/.source), g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g = new RegExp(g.join("|"));
    var i = {
            Y: "years",
            m: "months",
            n: "daysToMonth",
            d: "daysToWeek",
            w: "weeks",
            W: "weeksToMonth",
            H: "hours",
            M: "minutes",
            S: "seconds",
            D: "totalDays",
            I: "totalHours",
            N: "totalMinutes",
            T: "totalSeconds"
        },
        j = function(b, c, d) {
            this.el = b, this.$el = a(b), this.interval = null, this.offset = {}, this.options = a.extend({}, h), this.firstTick = !0, this.instanceNumber = f.length, f.push(this), this.$el.data("countdown-instance", this.instanceNumber), d && ("function" == typeof d ? (this.$el.on("update.countdown", d), this.$el.on("stoped.countdown", d), this.$el.on("finish.countdown", d)) : this.options = a.extend({}, h, d)), this.setFinalDate(c), this.options.defer === !1 && this.start()
        };
    a.extend(j.prototype, {
        start: function() {
            null !== this.interval && clearInterval(this.interval);
            var a = this;
            this.update(), this.interval = setInterval(function() {
                a.update.call(a)
            }, this.options.precision)
        },
        stop: function() {
            clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
        },
        toggle: function() {
            this.interval ? this.stop() : this.start()
        },
        pause: function() {
            this.stop()
        },
        resume: function() {
            this.start()
        },
        remove: function() {
            this.stop.call(this), f[this.instanceNumber] = null, delete this.$el.data().countdownInstance
        },
        setFinalDate: function(a) {
            this.finalDate = b(a)
        },
        update: function() {
            if (0 === this.$el.closest("html").length) return void this.remove();
            var a, b = new Date;
            return a = this.finalDate.getTime() - b.getTime(), a = Math.ceil(a / 1e3), a = !this.options.elapse && a < 0 ? 0 : Math.abs(a), this.totalSecsLeft === a || this.firstTick ? void(this.firstTick = !1) : (this.totalSecsLeft = a, this.elapsed = b >= this.finalDate, this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                years: Math.abs(this.finalDate.getFullYear() - b.getFullYear()),
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                totalMinutes: Math.floor(this.totalSecsLeft / 60),
                totalSeconds: this.totalSecsLeft
            }, void(this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish"))))
        },
        dispatchEvent: function(b) {
            var c = a.Event(b + ".countdown");
            c.finalDate = this.finalDate, c.elapsed = this.elapsed, c.offset = a.extend({}, this.offset), c.strftime = d(this.offset), this.$el.trigger(c)
        }
    }), a.fn.countdown = function() {
        var b = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            var c = a(this).data("countdown-instance");
            if (void 0 !== c) {
                var d = f[c],
                    e = b[0];
                j.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e), d.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e))
            } else new j(this, b[0], b[1])
        })
    }
});

/*jquery.qrcode*/
(function(r) {
    r.fn.qrcode = function(h) {
        var s;

        function u(a) {
            this.mode = s;
            this.data = a
        }

        function o(a, c) {
            this.typeNumber = a;
            this.errorCorrectLevel = c;
            this.modules = null;
            this.moduleCount = 0;
            this.dataCache = null;
            this.dataList = []
        }

        function q(a, c) {
            if (void 0 == a.length) throw Error(a.length + "/" + c);
            for (var d = 0; d < a.length && 0 == a[d];) d++;
            this.num = Array(a.length - d + c);
            for (var b = 0; b < a.length - d; b++) this.num[b] = a[b + d]
        }

        function p(a, c) {
            this.totalCount = a;
            this.dataCount = c
        }

        function t() {
            this.buffer = [];
            this.length = 0
        }
        u.prototype = {
            getLength: function() {
                return this.data.length
            },
            write: function(a) {
                for (var c = 0; c < this.data.length; c++) a.put(this.data.charCodeAt(c), 8)
            }
        };
        o.prototype = {
            addData: function(a) {
                this.dataList.push(new u(a));
                this.dataCache = null
            },
            isDark: function(a, c) {
                if (0 > a || this.moduleCount <= a || 0 > c || this.moduleCount <= c) throw Error(a + "," + c);
                return this.modules[a][c]
            },
            getModuleCount: function() {
                return this.moduleCount
            },
            make: function() {
                if (1 > this.typeNumber) {
                    for (var a = 1, a = 1; 40 > a; a++) {
                        for (var c = p.getRSBlocks(a, this.errorCorrectLevel), d = new t, b = 0, e = 0; e < c.length; e++) b += c[e].dataCount;
                        for (e = 0; e < this.dataList.length; e++) c = this.dataList[e], d.put(c.mode, 4), d.put(c.getLength(), j.getLengthInBits(c.mode, a)), c.write(d);
                        if (d.getLengthInBits() <= 8 * b) break
                    }
                    this.typeNumber = a
                }
                this.makeImpl(!1, this.getBestMaskPattern())
            },
            makeImpl: function(a, c) {
                this.moduleCount = 4 * this.typeNumber + 17;
                this.modules = Array(this.moduleCount);
                for (var d = 0; d < this.moduleCount; d++) {
                    this.modules[d] = Array(this.moduleCount);
                    for (var b = 0; b < this.moduleCount; b++) this.modules[d][b] = null
                }
                this.setupPositionProbePattern(0, 0);
                this.setupPositionProbePattern(this.moduleCount -
                    7, 0);
                this.setupPositionProbePattern(0, this.moduleCount - 7);
                this.setupPositionAdjustPattern();
                this.setupTimingPattern();
                this.setupTypeInfo(a, c);
                7 <= this.typeNumber && this.setupTypeNumber(a);
                null == this.dataCache && (this.dataCache = o.createData(this.typeNumber, this.errorCorrectLevel, this.dataList));
                this.mapData(this.dataCache, c)
            },
            setupPositionProbePattern: function(a, c) {
                for (var d = -1; 7 >= d; d++)
                    if (!(-1 >= a + d || this.moduleCount <= a + d))
                        for (var b = -1; 7 >= b; b++) - 1 >= c + b || this.moduleCount <= c + b || (this.modules[a + d][c + b] =
                            0 <= d && 6 >= d && (0 == b || 6 == b) || 0 <= b && 6 >= b && (0 == d || 6 == d) || 2 <= d && 4 >= d && 2 <= b && 4 >= b ? !0 : !1)
            },
            getBestMaskPattern: function() {
                for (var a = 0, c = 0, d = 0; 8 > d; d++) {
                    this.makeImpl(!0, d);
                    var b = j.getLostPoint(this);
                    if (0 == d || a > b) a = b, c = d
                }
                return c
            },
            createMovieClip: function(a, c, d) {
                a = a.createEmptyMovieClip(c, d);
                this.make();
                for (c = 0; c < this.modules.length; c++)
                    for (var d = 1 * c, b = 0; b < this.modules[c].length; b++) {
                        var e = 1 * b;
                        this.modules[c][b] && (a.beginFill(0, 100), a.moveTo(e, d), a.lineTo(e + 1, d), a.lineTo(e + 1, d + 1), a.lineTo(e, d + 1), a.endFill())
                    }
                return a
            },
            setupTimingPattern: function() {
                for (var a = 8; a < this.moduleCount - 8; a++) null == this.modules[a][6] && (this.modules[a][6] = 0 == a % 2);
                for (a = 8; a < this.moduleCount - 8; a++) null == this.modules[6][a] && (this.modules[6][a] = 0 == a % 2)
            },
            setupPositionAdjustPattern: function() {
                for (var a = j.getPatternPosition(this.typeNumber), c = 0; c < a.length; c++)
                    for (var d = 0; d < a.length; d++) {
                        var b = a[c],
                            e = a[d];
                        if (null == this.modules[b][e])
                            for (var f = -2; 2 >= f; f++)
                                for (var i = -2; 2 >= i; i++) this.modules[b + f][e + i] = -2 == f || 2 == f || -2 == i || 2 == i || 0 == f && 0 == i ? !0 : !1
                    }
            },
            setupTypeNumber: function(a) {
                for (var c =
                        j.getBCHTypeNumber(this.typeNumber), d = 0; 18 > d; d++) {
                    var b = !a && 1 == (c >> d & 1);
                    this.modules[Math.floor(d / 3)][d % 3 + this.moduleCount - 8 - 3] = b
                }
                for (d = 0; 18 > d; d++) b = !a && 1 == (c >> d & 1), this.modules[d % 3 + this.moduleCount - 8 - 3][Math.floor(d / 3)] = b
            },
            setupTypeInfo: function(a, c) {
                for (var d = j.getBCHTypeInfo(this.errorCorrectLevel << 3 | c), b = 0; 15 > b; b++) {
                    var e = !a && 1 == (d >> b & 1);
                    6 > b ? this.modules[b][8] = e : 8 > b ? this.modules[b + 1][8] = e : this.modules[this.moduleCount - 15 + b][8] = e
                }
                for (b = 0; 15 > b; b++) e = !a && 1 == (d >> b & 1), 8 > b ? this.modules[8][this.moduleCount -
                    b - 1
                ] = e : 9 > b ? this.modules[8][15 - b - 1 + 1] = e : this.modules[8][15 - b - 1] = e;
                this.modules[this.moduleCount - 8][8] = !a
            },
            mapData: function(a, c) {
                for (var d = -1, b = this.moduleCount - 1, e = 7, f = 0, i = this.moduleCount - 1; 0 < i; i -= 2)
                    for (6 == i && i--;;) {
                        for (var g = 0; 2 > g; g++)
                            if (null == this.modules[b][i - g]) {
                                var n = !1;
                                f < a.length && (n = 1 == (a[f] >>> e & 1));
                                j.getMask(c, b, i - g) && (n = !n);
                                this.modules[b][i - g] = n;
                                e--; - 1 == e && (f++, e = 7)
                            }
                        b += d;
                        if (0 > b || this.moduleCount <= b) {
                            b -= d;
                            d = -d;
                            break
                        }
                    }
            }
        };
        o.PAD0 = 236;
        o.PAD1 = 17;
        o.createData = function(a, c, d) {
            for (var c = p.getRSBlocks(a,
                    c), b = new t, e = 0; e < d.length; e++) {
                var f = d[e];
                b.put(f.mode, 4);
                b.put(f.getLength(), j.getLengthInBits(f.mode, a));
                f.write(b)
            }
            for (e = a = 0; e < c.length; e++) a += c[e].dataCount;
            if (b.getLengthInBits() > 8 * a) throw Error("code length overflow. (" + b.getLengthInBits() + ">" + 8 * a + ")");
            for (b.getLengthInBits() + 4 <= 8 * a && b.put(0, 4); 0 != b.getLengthInBits() % 8;) b.putBit(!1);
            for (; !(b.getLengthInBits() >= 8 * a);) {
                b.put(o.PAD0, 8);
                if (b.getLengthInBits() >= 8 * a) break;
                b.put(o.PAD1, 8)
            }
            return o.createBytes(b, c)
        };
        o.createBytes = function(a, c) {
            for (var d =
                    0, b = 0, e = 0, f = Array(c.length), i = Array(c.length), g = 0; g < c.length; g++) {
                var n = c[g].dataCount,
                    h = c[g].totalCount - n,
                    b = Math.max(b, n),
                    e = Math.max(e, h);
                f[g] = Array(n);
                for (var k = 0; k < f[g].length; k++) f[g][k] = 255 & a.buffer[k + d];
                d += n;
                k = j.getErrorCorrectPolynomial(h);
                n = (new q(f[g], k.getLength() - 1)).mod(k);
                i[g] = Array(k.getLength() - 1);
                for (k = 0; k < i[g].length; k++) h = k + n.getLength() - i[g].length, i[g][k] = 0 <= h ? n.get(h) : 0
            }
            for (k = g = 0; k < c.length; k++) g += c[k].totalCount;
            d = Array(g);
            for (k = n = 0; k < b; k++)
                for (g = 0; g < c.length; g++) k < f[g].length &&
                    (d[n++] = f[g][k]);
            for (k = 0; k < e; k++)
                for (g = 0; g < c.length; g++) k < i[g].length && (d[n++] = i[g][k]);
            return d
        };
        s = 4;
        for (var j = {
                PATTERN_POSITION_TABLE: [
                    [],
                    [6, 18],
                    [6, 22],
                    [6, 26],
                    [6, 30],
                    [6, 34],
                    [6, 22, 38],
                    [6, 24, 42],
                    [6, 26, 46],
                    [6, 28, 50],
                    [6, 30, 54],
                    [6, 32, 58],
                    [6, 34, 62],
                    [6, 26, 46, 66],
                    [6, 26, 48, 70],
                    [6, 26, 50, 74],
                    [6, 30, 54, 78],
                    [6, 30, 56, 82],
                    [6, 30, 58, 86],
                    [6, 34, 62, 90],
                    [6, 28, 50, 72, 94],
                    [6, 26, 50, 74, 98],
                    [6, 30, 54, 78, 102],
                    [6, 28, 54, 80, 106],
                    [6, 32, 58, 84, 110],
                    [6, 30, 58, 86, 114],
                    [6, 34, 62, 90, 118],
                    [6, 26, 50, 74, 98, 122],
                    [6, 30, 54, 78, 102, 126],
                    [6, 26, 52,
                        78, 104, 130
                    ],
                    [6, 30, 56, 82, 108, 134],
                    [6, 34, 60, 86, 112, 138],
                    [6, 30, 58, 86, 114, 142],
                    [6, 34, 62, 90, 118, 146],
                    [6, 30, 54, 78, 102, 126, 150],
                    [6, 24, 50, 76, 102, 128, 154],
                    [6, 28, 54, 80, 106, 132, 158],
                    [6, 32, 58, 84, 110, 136, 162],
                    [6, 26, 54, 82, 110, 138, 166],
                    [6, 30, 58, 86, 114, 142, 170]
                ],
                G15: 1335,
                G18: 7973,
                G15_MASK: 21522,
                getBCHTypeInfo: function(a) {
                    for (var c = a << 10; 0 <= j.getBCHDigit(c) - j.getBCHDigit(j.G15);) c ^= j.G15 << j.getBCHDigit(c) - j.getBCHDigit(j.G15);
                    return (a << 10 | c) ^ j.G15_MASK
                },
                getBCHTypeNumber: function(a) {
                    for (var c = a << 12; 0 <= j.getBCHDigit(c) -
                        j.getBCHDigit(j.G18);) c ^= j.G18 << j.getBCHDigit(c) - j.getBCHDigit(j.G18);
                    return a << 12 | c
                },
                getBCHDigit: function(a) {
                    for (var c = 0; 0 != a;) c++, a >>>= 1;
                    return c
                },
                getPatternPosition: function(a) {
                    return j.PATTERN_POSITION_TABLE[a - 1]
                },
                getMask: function(a, c, d) {
                    switch (a) {
                        case 0:
                            return 0 == (c + d) % 2;
                        case 1:
                            return 0 == c % 2;
                        case 2:
                            return 0 == d % 3;
                        case 3:
                            return 0 == (c + d) % 3;
                        case 4:
                            return 0 == (Math.floor(c / 2) + Math.floor(d / 3)) % 2;
                        case 5:
                            return 0 == c * d % 2 + c * d % 3;
                        case 6:
                            return 0 == (c * d % 2 + c * d % 3) % 2;
                        case 7:
                            return 0 == (c * d % 3 + (c + d) % 2) % 2;
                        default:
                            throw Error("bad maskPattern:" +
                                a);
                    }
                },
                getErrorCorrectPolynomial: function(a) {
                    for (var c = new q([1], 0), d = 0; d < a; d++) c = c.multiply(new q([1, l.gexp(d)], 0));
                    return c
                },
                getLengthInBits: function(a, c) {
                    if (1 <= c && 10 > c) switch (a) {
                        case 1:
                            return 10;
                        case 2:
                            return 9;
                        case s:
                            return 8;
                        case 8:
                            return 8;
                        default:
                            throw Error("mode:" + a);
                    } else if (27 > c) switch (a) {
                        case 1:
                            return 12;
                        case 2:
                            return 11;
                        case s:
                            return 16;
                        case 8:
                            return 10;
                        default:
                            throw Error("mode:" + a);
                    } else if (41 > c) switch (a) {
                        case 1:
                            return 14;
                        case 2:
                            return 13;
                        case s:
                            return 16;
                        case 8:
                            return 12;
                        default:
                            throw Error("mode:" +
                                a);
                    } else throw Error("type:" + c);
                },
                getLostPoint: function(a) {
                    for (var c = a.getModuleCount(), d = 0, b = 0; b < c; b++)
                        for (var e = 0; e < c; e++) {
                            for (var f = 0, i = a.isDark(b, e), g = -1; 1 >= g; g++)
                                if (!(0 > b + g || c <= b + g))
                                    for (var h = -1; 1 >= h; h++) 0 > e + h || c <= e + h || 0 == g && 0 == h || i == a.isDark(b + g, e + h) && f++;
                            5 < f && (d += 3 + f - 5)
                        }
                    for (b = 0; b < c - 1; b++)
                        for (e = 0; e < c - 1; e++)
                            if (f = 0, a.isDark(b, e) && f++, a.isDark(b + 1, e) && f++, a.isDark(b, e + 1) && f++, a.isDark(b + 1, e + 1) && f++, 0 == f || 4 == f) d += 3;
                    for (b = 0; b < c; b++)
                        for (e = 0; e < c - 6; e++) a.isDark(b, e) && !a.isDark(b, e + 1) && a.isDark(b, e +
                            2) && a.isDark(b, e + 3) && a.isDark(b, e + 4) && !a.isDark(b, e + 5) && a.isDark(b, e + 6) && (d += 40);
                    for (e = 0; e < c; e++)
                        for (b = 0; b < c - 6; b++) a.isDark(b, e) && !a.isDark(b + 1, e) && a.isDark(b + 2, e) && a.isDark(b + 3, e) && a.isDark(b + 4, e) && !a.isDark(b + 5, e) && a.isDark(b + 6, e) && (d += 40);
                    for (e = f = 0; e < c; e++)
                        for (b = 0; b < c; b++) a.isDark(b, e) && f++;
                    a = Math.abs(100 * f / c / c - 50) / 5;
                    return d + 10 * a
                }
            }, l = {
                glog: function(a) {
                    if (1 > a) throw Error("glog(" + a + ")");
                    return l.LOG_TABLE[a]
                },
                gexp: function(a) {
                    for (; 0 > a;) a += 255;
                    for (; 256 <= a;) a -= 255;
                    return l.EXP_TABLE[a]
                },
                EXP_TABLE: Array(256),
                LOG_TABLE: Array(256)
            }, m = 0; 8 > m; m++) l.EXP_TABLE[m] = 1 << m;
        for (m = 8; 256 > m; m++) l.EXP_TABLE[m] = l.EXP_TABLE[m - 4] ^ l.EXP_TABLE[m - 5] ^ l.EXP_TABLE[m - 6] ^ l.EXP_TABLE[m - 8];
        for (m = 0; 255 > m; m++) l.LOG_TABLE[l.EXP_TABLE[m]] = m;
        q.prototype = {
            get: function(a) {
                return this.num[a]
            },
            getLength: function() {
                return this.num.length
            },
            multiply: function(a) {
                for (var c = Array(this.getLength() + a.getLength() - 1), d = 0; d < this.getLength(); d++)
                    for (var b = 0; b < a.getLength(); b++) c[d + b] ^= l.gexp(l.glog(this.get(d)) + l.glog(a.get(b)));
                return new q(c, 0)
            },
            mod: function(a) {
                if (0 >
                    this.getLength() - a.getLength()) return this;
                for (var c = l.glog(this.get(0)) - l.glog(a.get(0)), d = Array(this.getLength()), b = 0; b < this.getLength(); b++) d[b] = this.get(b);
                for (b = 0; b < a.getLength(); b++) d[b] ^= l.gexp(l.glog(a.get(b)) + c);
                return (new q(d, 0)).mod(a)
            }
        };
        p.RS_BLOCK_TABLE = [
            [1, 26, 19],
            [1, 26, 16],
            [1, 26, 13],
            [1, 26, 9],
            [1, 44, 34],
            [1, 44, 28],
            [1, 44, 22],
            [1, 44, 16],
            [1, 70, 55],
            [1, 70, 44],
            [2, 35, 17],
            [2, 35, 13],
            [1, 100, 80],
            [2, 50, 32],
            [2, 50, 24],
            [4, 25, 9],
            [1, 134, 108],
            [2, 67, 43],
            [2, 33, 15, 2, 34, 16],
            [2, 33, 11, 2, 34, 12],
            [2, 86, 68],
            [4, 43, 27],
            [4, 43, 19],
            [4, 43, 15],
            [2, 98, 78],
            [4, 49, 31],
            [2, 32, 14, 4, 33, 15],
            [4, 39, 13, 1, 40, 14],
            [2, 121, 97],
            [2, 60, 38, 2, 61, 39],
            [4, 40, 18, 2, 41, 19],
            [4, 40, 14, 2, 41, 15],
            [2, 146, 116],
            [3, 58, 36, 2, 59, 37],
            [4, 36, 16, 4, 37, 17],
            [4, 36, 12, 4, 37, 13],
            [2, 86, 68, 2, 87, 69],
            [4, 69, 43, 1, 70, 44],
            [6, 43, 19, 2, 44, 20],
            [6, 43, 15, 2, 44, 16],
            [4, 101, 81],
            [1, 80, 50, 4, 81, 51],
            [4, 50, 22, 4, 51, 23],
            [3, 36, 12, 8, 37, 13],
            [2, 116, 92, 2, 117, 93],
            [6, 58, 36, 2, 59, 37],
            [4, 46, 20, 6, 47, 21],
            [7, 42, 14, 4, 43, 15],
            [4, 133, 107],
            [8, 59, 37, 1, 60, 38],
            [8, 44, 20, 4, 45, 21],
            [12, 33, 11, 4, 34, 12],
            [3, 145, 115, 1, 146,
                116
            ],
            [4, 64, 40, 5, 65, 41],
            [11, 36, 16, 5, 37, 17],
            [11, 36, 12, 5, 37, 13],
            [5, 109, 87, 1, 110, 88],
            [5, 65, 41, 5, 66, 42],
            [5, 54, 24, 7, 55, 25],
            [11, 36, 12],
            [5, 122, 98, 1, 123, 99],
            [7, 73, 45, 3, 74, 46],
            [15, 43, 19, 2, 44, 20],
            [3, 45, 15, 13, 46, 16],
            [1, 135, 107, 5, 136, 108],
            [10, 74, 46, 1, 75, 47],
            [1, 50, 22, 15, 51, 23],
            [2, 42, 14, 17, 43, 15],
            [5, 150, 120, 1, 151, 121],
            [9, 69, 43, 4, 70, 44],
            [17, 50, 22, 1, 51, 23],
            [2, 42, 14, 19, 43, 15],
            [3, 141, 113, 4, 142, 114],
            [3, 70, 44, 11, 71, 45],
            [17, 47, 21, 4, 48, 22],
            [9, 39, 13, 16, 40, 14],
            [3, 135, 107, 5, 136, 108],
            [3, 67, 41, 13, 68, 42],
            [15, 54, 24, 5, 55, 25],
            [15,
                43, 15, 10, 44, 16
            ],
            [4, 144, 116, 4, 145, 117],
            [17, 68, 42],
            [17, 50, 22, 6, 51, 23],
            [19, 46, 16, 6, 47, 17],
            [2, 139, 111, 7, 140, 112],
            [17, 74, 46],
            [7, 54, 24, 16, 55, 25],
            [34, 37, 13],
            [4, 151, 121, 5, 152, 122],
            [4, 75, 47, 14, 76, 48],
            [11, 54, 24, 14, 55, 25],
            [16, 45, 15, 14, 46, 16],
            [6, 147, 117, 4, 148, 118],
            [6, 73, 45, 14, 74, 46],
            [11, 54, 24, 16, 55, 25],
            [30, 46, 16, 2, 47, 17],
            [8, 132, 106, 4, 133, 107],
            [8, 75, 47, 13, 76, 48],
            [7, 54, 24, 22, 55, 25],
            [22, 45, 15, 13, 46, 16],
            [10, 142, 114, 2, 143, 115],
            [19, 74, 46, 4, 75, 47],
            [28, 50, 22, 6, 51, 23],
            [33, 46, 16, 4, 47, 17],
            [8, 152, 122, 4, 153, 123],
            [22, 73, 45,
                3, 74, 46
            ],
            [8, 53, 23, 26, 54, 24],
            [12, 45, 15, 28, 46, 16],
            [3, 147, 117, 10, 148, 118],
            [3, 73, 45, 23, 74, 46],
            [4, 54, 24, 31, 55, 25],
            [11, 45, 15, 31, 46, 16],
            [7, 146, 116, 7, 147, 117],
            [21, 73, 45, 7, 74, 46],
            [1, 53, 23, 37, 54, 24],
            [19, 45, 15, 26, 46, 16],
            [5, 145, 115, 10, 146, 116],
            [19, 75, 47, 10, 76, 48],
            [15, 54, 24, 25, 55, 25],
            [23, 45, 15, 25, 46, 16],
            [13, 145, 115, 3, 146, 116],
            [2, 74, 46, 29, 75, 47],
            [42, 54, 24, 1, 55, 25],
            [23, 45, 15, 28, 46, 16],
            [17, 145, 115],
            [10, 74, 46, 23, 75, 47],
            [10, 54, 24, 35, 55, 25],
            [19, 45, 15, 35, 46, 16],
            [17, 145, 115, 1, 146, 116],
            [14, 74, 46, 21, 75, 47],
            [29, 54, 24, 19,
                55, 25
            ],
            [11, 45, 15, 46, 46, 16],
            [13, 145, 115, 6, 146, 116],
            [14, 74, 46, 23, 75, 47],
            [44, 54, 24, 7, 55, 25],
            [59, 46, 16, 1, 47, 17],
            [12, 151, 121, 7, 152, 122],
            [12, 75, 47, 26, 76, 48],
            [39, 54, 24, 14, 55, 25],
            [22, 45, 15, 41, 46, 16],
            [6, 151, 121, 14, 152, 122],
            [6, 75, 47, 34, 76, 48],
            [46, 54, 24, 10, 55, 25],
            [2, 45, 15, 64, 46, 16],
            [17, 152, 122, 4, 153, 123],
            [29, 74, 46, 14, 75, 47],
            [49, 54, 24, 10, 55, 25],
            [24, 45, 15, 46, 46, 16],
            [4, 152, 122, 18, 153, 123],
            [13, 74, 46, 32, 75, 47],
            [48, 54, 24, 14, 55, 25],
            [42, 45, 15, 32, 46, 16],
            [20, 147, 117, 4, 148, 118],
            [40, 75, 47, 7, 76, 48],
            [43, 54, 24, 22, 55, 25],
            [10,
                45, 15, 67, 46, 16
            ],
            [19, 148, 118, 6, 149, 119],
            [18, 75, 47, 31, 76, 48],
            [34, 54, 24, 34, 55, 25],
            [20, 45, 15, 61, 46, 16]
        ];
        p.getRSBlocks = function(a, c) {
            var d = p.getRsBlockTable(a, c);
            if (void 0 == d) throw Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + c);
            for (var b = d.length / 3, e = [], f = 0; f < b; f++)
                for (var h = d[3 * f + 0], g = d[3 * f + 1], j = d[3 * f + 2], l = 0; l < h; l++) e.push(new p(g, j));
            return e
        };
        p.getRsBlockTable = function(a, c) {
            switch (c) {
                case 1:
                    return p.RS_BLOCK_TABLE[4 * (a - 1) + 0];
                case 0:
                    return p.RS_BLOCK_TABLE[4 * (a - 1) + 1];
                case 3:
                    return p.RS_BLOCK_TABLE[4 *
                        (a - 1) + 2];
                case 2:
                    return p.RS_BLOCK_TABLE[4 * (a - 1) + 3]
            }
        };
        t.prototype = {
            get: function(a) {
                return 1 == (this.buffer[Math.floor(a / 8)] >>> 7 - a % 8 & 1)
            },
            put: function(a, c) {
                for (var d = 0; d < c; d++) this.putBit(1 == (a >>> c - d - 1 & 1))
            },
            getLengthInBits: function() {
                return this.length
            },
            putBit: function(a) {
                var c = Math.floor(this.length / 8);
                this.buffer.length <= c && this.buffer.push(0);
                a && (this.buffer[c] |= 128 >>> this.length % 8);
                this.length++
            }
        };
        "string" === typeof h && (h = {
            text: h
        });
        h = r.extend({}, {
            render: "canvas",
            width: 256,
            height: 256,
            typeNumber: -1,
            correctLevel: 2,
            background: "#ffffff",
            foreground: "#000000"
        }, h);
        return this.each(function() {
            var a;
            if ("canvas" == h.render) {
                a = new o(h.typeNumber, h.correctLevel);
                a.addData(h.text);
                a.make();
                var c = document.createElement("canvas");
                c.width = h.width;
                c.height = h.height;
                for (var d = c.getContext("2d"), b = h.width / a.getModuleCount(), e = h.height / a.getModuleCount(), f = 0; f < a.getModuleCount(); f++)
                    for (var i = 0; i < a.getModuleCount(); i++) {
                        d.fillStyle = a.isDark(f, i) ? h.foreground : h.background;
                        var g = Math.ceil((i + 1) * b) - Math.floor(i * b),
                            j = Math.ceil((f + 1) * b) - Math.floor(f * b);
                        d.fillRect(Math.round(i * b), Math.round(f * e), g, j)
                    }
            } else {
                a = new o(h.typeNumber, h.correctLevel);
                a.addData(h.text);
                a.make();
                c = r("<table></table>").css("width", h.width + "px").css("height", h.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", h.background);
                d = h.width / a.getModuleCount();
                b = h.height / a.getModuleCount();
                for (e = 0; e < a.getModuleCount(); e++) {
                    f = r("<tr></tr>").css("height", b + "px").appendTo(c);
                    for (i = 0; i < a.getModuleCount(); i++) r("<td></td>").css("width",
                        d + "px").css("background-color", a.isDark(e, i) ? h.foreground : h.background).appendTo(f)
                }
            }
            a = c;
            jQuery(a).appendTo(this)
        })
    }
})(jQuery);

// layzload
! function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = "undefined" != typeof globalThis ? globalThis : n || self).LazyLoad = t()
}(this, (function() {
    "use strict";

    function n() {
        return n = Object.assign || function(n) {
            for (var t = 1; t < arguments.length; t++) {
                var e = arguments[t];
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i])
            }
            return n
        }, n.apply(this, arguments)
    }
    var t = "undefined" != typeof window,
        e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
        i = t && "IntersectionObserver" in window,
        o = t && "classList" in document.createElement("p"),
        a = t && window.devicePixelRatio > 1,
        r = {
            elements_selector: ".lazy",
            container: e || t ? document : null,
            threshold: 300,
            thresholds: null,
            data_src: "src",
            data_srcset: "srcset",
            data_sizes: "sizes",
            data_bg: "bg",
            data_bg_hidpi: "bg-hidpi",
            data_bg_multi: "bg-multi",
            data_bg_multi_hidpi: "bg-multi-hidpi",
            data_bg_set: "bg-set",
            data_poster: "poster",
            class_applied: "applied",
            class_loading: "loading",
            class_loaded: "loaded",
            class_error: "error",
            class_entered: "entered",
            class_exited: "exited",
            unobserve_completed: !0,
            unobserve_entered: !1,
            cancel_on_exit: !0,
            callback_enter: null,
            callback_exit: null,
            callback_applied: null,
            callback_loading: null,
            callback_loaded: null,
            callback_error: null,
            callback_finish: null,
            callback_cancel: null,
            use_native: !1,
            restore_on_error: !1
        },
        c = function(t) {
            return n({}, r, t)
        },
        l = function(n, t) {
            var e, i = "LazyLoad::Initialized",
                o = new n(t);
            try {
                e = new CustomEvent(i, {
                    detail: {
                        instance: o
                    }
                })
            } catch (n) {
                (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
                    instance: o
                })
            }
            window.dispatchEvent(e)
        },
        u = "src",
        s = "srcset",
        d = "sizes",
        f = "poster",
        _ = "llOriginalAttrs",
        g = "data",
        v = "loading",
        b = "loaded",
        p = "applied",
        m = "error",
        h = "native",
        E = "data-",
        I = "ll-status",
        y = function(n, t) {
            return n.getAttribute(E + t)
        },
        k = function(n) {
            return y(n, I)
        },
        w = function(n, t) {
            return function(n, t, e) {
                var i = "data-ll-status";
                null !== e ? n.setAttribute(i, e) : n.removeAttribute(i)
            }(n, 0, t)
        },
        A = function(n) {
            return w(n, null)
        },
        L = function(n) {
            return null === k(n)
        },
        O = function(n) {
            return k(n) === h
        },
        x = [v, b, p, m],
        C = function(n, t, e, i) {
            n && "function" == typeof n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i))
        },
        N = function(n, t) {
            o ? n.classList.add(t) : n.className += (n.className ? " " : "") + t
        },
        M = function(n, t) {
            o ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
        },
        z = function(n) {
            return n.llTempImage
        },
        T = function(n, t) {
            if (t) {
                var e = t._observer;
                e && e.unobserve(n)
            }
        },
        R = function(n, t) {
            n && (n.loadingCount += t)
        },
        G = function(n, t) {
            n && (n.toLoadCount = t)
        },
        j = function(n) {
            for (var t, e = [], i = 0; t = n.children[i]; i += 1) "SOURCE" === t.tagName && e.push(t);
            return e
        },
        D = function(n, t) {
            var e = n.parentNode;
            e && "PICTURE" === e.tagName && j(e).forEach(t)
        },
        H = function(n, t) {
            j(n).forEach(t)
        },
        V = [u],
        F = [u, f],
        B = [u, s, d],
        J = [g],
        P = function(n) {
            return !!n[_]
        },
        S = function(n) {
            return n[_]
        },
        U = function(n) {
            return delete n[_]
        },
        $ = function(n, t) {
            if (!P(n)) {
                var e = {};
                t.forEach((function(t) {
                    e[t] = n.getAttribute(t)
                })), n[_] = e
            }
        },
        q = function(n, t) {
            if (P(n)) {
                var e = S(n);
                t.forEach((function(t) {
                    ! function(n, t, e) {
                        e ? n.setAttribute(t, e) : n.removeAttribute(t)
                    }(n, t, e[t])
                }))
            }
        },
        K = function(n, t, e) {
            N(n, t.class_applied), w(n, p), e && (t.unobserve_completed && T(n, t), C(t.callback_applied, n, e))
        },
        Q = function(n, t, e) {
            N(n, t.class_loading), w(n, v), e && (R(e, 1), C(t.callback_loading, n, e))
        },
        W = function(n, t, e) {
            e && n.setAttribute(t, e)
        },
        X = function(n, t) {
            W(n, d, y(n, t.data_sizes)), W(n, s, y(n, t.data_srcset)), W(n, u, y(n, t.data_src))
        },
        Y = {
            IMG: function(n, t) {
                D(n, (function(n) {
                    $(n, B), X(n, t)
                })), $(n, B), X(n, t)
            },
            IFRAME: function(n, t) {
                $(n, V), W(n, u, y(n, t.data_src))
            },
            VIDEO: function(n, t) {
                H(n, (function(n) {
                    $(n, V), W(n, u, y(n, t.data_src))
                })), $(n, F), W(n, f, y(n, t.data_poster)), W(n, u, y(n, t.data_src)), n.load()
            },
            OBJECT: function(n, t) {
                $(n, J), W(n, g, y(n, t.data_src))
            }
        },
        Z = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
        nn = function(n, t) {
            !t || function(n) {
                return n.loadingCount > 0
            }(t) || function(n) {
                return n.toLoadCount > 0
            }(t) || C(n.callback_finish, t)
        },
        tn = function(n, t, e) {
            n.addEventListener(t, e), n.llEvLisnrs[t] = e
        },
        en = function(n, t, e) {
            n.removeEventListener(t, e)
        },
        on = function(n) {
            return !!n.llEvLisnrs
        },
        an = function(n) {
            if (on(n)) {
                var t = n.llEvLisnrs;
                for (var e in t) {
                    var i = t[e];
                    en(n, e, i)
                }
                delete n.llEvLisnrs
            }
        },
        rn = function(n, t, e) {
            ! function(n) {
                delete n.llTempImage
            }(n), R(e, -1),
                function(n) {
                    n && (n.toLoadCount -= 1)
                }(e), M(n, t.class_loading), t.unobserve_completed && T(n, e)
        },
        cn = function(n, t, e) {
            var i = z(n) || n;
            on(i) || function(n, t, e) {
                on(n) || (n.llEvLisnrs = {});
                var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
                tn(n, i, t), tn(n, "error", e)
            }(i, (function(o) {
                ! function(n, t, e, i) {
                    var o = O(t);
                    rn(t, e, i), N(t, e.class_loaded), w(t, b), C(e.callback_loaded, t, i), o || nn(e, i)
                }(0, n, t, e), an(i)
            }), (function(o) {
                ! function(n, t, e, i) {
                    var o = O(t);
                    rn(t, e, i), N(t, e.class_error), w(t, m), C(e.callback_error, t, i), e.restore_on_error && q(t, B), o || nn(e, i)
                }(0, n, t, e), an(i)
            }))
        },
        ln = function(n, t, e) {
            ! function(n) {
                return Z.indexOf(n.tagName) > -1
            }(n) ? function(n, t, e) {
                ! function(n) {
                    n.llTempImage = document.createElement("IMG")
                }(n), cn(n, t, e),
                    function(n) {
                        P(n) || (n[_] = {
                            backgroundImage: n.style.backgroundImage
                        })
                    }(n),
                    function(n, t, e) {
                        var i = y(n, t.data_bg),
                            o = y(n, t.data_bg_hidpi),
                            r = a && o ? o : i;
                        r && (n.style.backgroundImage = 'url("'.concat(r, '")'), z(n).setAttribute(u, r), Q(n, t, e))
                    }(n, t, e),
                    function(n, t, e) {
                        var i = y(n, t.data_bg_multi),
                            o = y(n, t.data_bg_multi_hidpi),
                            r = a && o ? o : i;
                        r && (n.style.backgroundImage = r, K(n, t, e))
                    }(n, t, e),
                    function(n, t, e) {
                        var i = y(n, t.data_bg_set);
                        if (i) {
                            var o = i.split("|"),
                                a = o.map((function(n) {
                                    return "image-set(".concat(n, ")")
                                }));
                            n.style.backgroundImage = a.join(), "" === n.style.backgroundImage && (a = o.map((function(n) {
                                return "-webkit-image-set(".concat(n, ")")
                            })), n.style.backgroundImage = a.join()), K(n, t, e)
                        }
                    }(n, t, e)
            }(n, t, e) : function(n, t, e) {
                cn(n, t, e),
                    function(n, t, e) {
                        var i = Y[n.tagName];
                        i && (i(n, t), Q(n, t, e))
                    }(n, t, e)
            }(n, t, e)
        },
        un = function(n) {
            n.removeAttribute(u), n.removeAttribute(s), n.removeAttribute(d)
        },
        sn = function(n) {
            D(n, (function(n) {
                q(n, B)
            })), q(n, B)
        },
        dn = {
            IMG: sn,
            IFRAME: function(n) {
                q(n, V)
            },
            VIDEO: function(n) {
                H(n, (function(n) {
                    q(n, V)
                })), q(n, F), n.load()
            },
            OBJECT: function(n) {
                q(n, J)
            }
        },
        fn = function(n, t) {
            (function(n) {
                var t = dn[n.tagName];
                t ? t(n) : function(n) {
                    if (P(n)) {
                        var t = S(n);
                        n.style.backgroundImage = t.backgroundImage
                    }
                }(n)
            })(n),
            function(n, t) {
                L(n) || O(n) || (M(n, t.class_entered), M(n, t.class_exited), M(n, t.class_applied), M(n, t.class_loading), M(n, t.class_loaded), M(n, t.class_error))
            }(n, t), A(n), U(n)
        },
        _n = ["IMG", "IFRAME", "VIDEO"],
        gn = function(n) {
            return n.use_native && "loading" in HTMLImageElement.prototype
        },
        vn = function(n, t, e) {
            n.forEach((function(n) {
                return function(n) {
                    return n.isIntersecting || n.intersectionRatio > 0
                }(n) ? function(n, t, e, i) {
                    var o = function(n) {
                        return x.indexOf(k(n)) >= 0
                    }(n);
                    w(n, "entered"), N(n, e.class_entered), M(n, e.class_exited),
                        function(n, t, e) {
                            t.unobserve_entered && T(n, e)
                        }(n, e, i), C(e.callback_enter, n, t, i), o || ln(n, e, i)
                }(n.target, n, t, e) : function(n, t, e, i) {
                    L(n) || (N(n, e.class_exited), function(n, t, e, i) {
                        e.cancel_on_exit && function(n) {
                            return k(n) === v
                        }(n) && "IMG" === n.tagName && (an(n), function(n) {
                            D(n, (function(n) {
                                un(n)
                            })), un(n)
                        }(n), sn(n), M(n, e.class_loading), R(i, -1), A(n), C(e.callback_cancel, n, t, i))
                    }(n, t, e, i), C(e.callback_exit, n, t, i))
                }(n.target, n, t, e)
            }))
        },
        bn = function(n) {
            return Array.prototype.slice.call(n)
        },
        pn = function(n) {
            return n.container.querySelectorAll(n.elements_selector)
        },
        mn = function(n) {
            return function(n) {
                return k(n) === m
            }(n)
        },
        hn = function(n, t) {
            return function(n) {
                return bn(n).filter(L)
            }(n || pn(t))
        },
        En = function(n, e) {
            var o = c(n);
            this._settings = o, this.loadingCount = 0,
                function(n, t) {
                    i && !gn(n) && (t._observer = new IntersectionObserver((function(e) {
                        vn(e, n, t)
                    }), function(n) {
                        return {
                            root: n.container === document ? null : n.container,
                            rootMargin: n.thresholds || n.threshold + "px"
                        }
                    }(n)))
                }(o, this),
                function(n, e) {
                    t && (e._onlineHandler = function() {
                        ! function(n, t) {
                            var e;
                            (e = pn(n), bn(e).filter(mn)).forEach((function(t) {
                                M(t, n.class_error), A(t)
                            })), t.update()
                        }(n, e)
                    }, window.addEventListener("online", e._onlineHandler))
                }(o, this), this.update(e)
        };
    return En.prototype = {
        update: function(n) {
            var t, o, a = this._settings,
                r = hn(n, a);
            G(this, r.length), !e && i ? gn(a) ? function(n, t, e) {
                n.forEach((function(n) {
                    -1 !== _n.indexOf(n.tagName) && function(n, t, e) {
                        n.setAttribute("loading", "lazy"), cn(n, t, e),
                            function(n, t) {
                                var e = Y[n.tagName];
                                e && e(n, t)
                            }(n, t), w(n, h)
                    }(n, t, e)
                })), G(e, 0)
            }(r, a, this) : (o = r, function(n) {
                n.disconnect()
            }(t = this._observer), function(n, t) {
                t.forEach((function(t) {
                    n.observe(t)
                }))
            }(t, o)) : this.loadAll(r)
        },
        destroy: function() {
            this._observer && this._observer.disconnect(), t && window.removeEventListener("online", this._onlineHandler), pn(this._settings).forEach((function(n) {
                U(n)
            })), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount
        },
        loadAll: function(n) {
            var t = this,
                e = this._settings;
            hn(n, e).forEach((function(n) {
                T(n, t), ln(n, e, t)
            }))
        },
        restoreAll: function() {
            var n = this._settings;
            pn(n).forEach((function(t) {
                fn(t, n)
            }))
        }
    }, En.load = function(n, t) {
        var e = c(t);
        ln(n, e)
    }, En.resetStatus = function(n) {
        A(n)
    }, t && function(n, t) {
        if (t)
            if (t.length)
                for (var e, i = 0; e = t[i]; i += 1) l(n, e);
            else l(n, t)
    }(En, window.lazyLoadOptions), En
}));