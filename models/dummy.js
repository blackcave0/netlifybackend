/*! For license information please see index.ef611c4a6c894d12bd70.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  [function(e, t, n) {
      "use strict";
      var r = n(140);
      n.d(t, "a", (function() {
          return r.a
      }));
      var i = n(76);
      n.d(t, "b", (function() {
          return i.a
      }));
      var o = n(144);
      n.d(t, "e", (function() {
          return o.a
      }));
      var a = n(78);
      n.d(t, "c", (function() {
          return a.a
      }));
      var s = n(151);
      n.d(t, "d", (function() {
          return s.a
      }))
  }, function(e, t, n) {
      var r = n(3),
          i = n(37).f,
          o = n(28),
          a = n(22),
          s = n(117),
          c = n(157),
          u = n(68);
      e.exports = function(e, t) {
          var n, l, f, h, d, p = e.target,
              v = e.global,
              m = e.stat;
          if (n = v ? r : m ? r[p] || s(p, {}) : (r[p] || {}).prototype)
              for (l in t) {
                  if (h = t[l], f = e.noTargetGet ? (d = i(n, l)) && d.value : n[l], !u(v ? l : p + (m ? "." : "#") + l, e.forced) && void 0 !== f) {
                      if (typeof h == typeof f) continue;
                      c(h, f)
                  }(e.sham || f && f.sham) && o(h, "sham", !0), a(n, l, h, e)
              }
      }
  }, function(e, t) {
      e.exports = function(e) {
          try {
              return !!e()
          } catch (e) {
              return !0
          }
      }
  }, function(e, t, n) {
      (function(t) {
          var n = function(e) {
              return e && e.Math == Math && e
          };
          e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || function() {
              return this
          }() || Function("return this")()
      }).call(this, n(185))
  }, function(e, t, n) {
      var r = n(3),
          i = n(93),
          o = n(10),
          a = n(86),
          s = n(122),
          c = n(164),
          u = i("wks"),
          l = r.Symbol,
          f = c ? l : l && l.withoutSetter || a;
      e.exports = function(e) {
          return o(u, e) && (s || "string" == typeof u[e]) || (s && o(l, e) ? u[e] = l[e] : u[e] = f("Symbol." + e)), u[e]
      }
  }, function(e, t, n) {
      "use strict";
      var r = n(73);
      n.d(t, "a", (function() {
          return r.c
      })), n.d(t, "b", (function() {
          return r.a
      })), n.d(t, "g", (function() {
          return r.b
      }));
      var i = n(40);
      n.d(t, "c", (function() {
          return i.f
      })), n.d(t, "d", (function() {
          return i.a
      })), n.d(t, "e", (function() {
          return i.b
      })), n.d(t, "f", (function() {
          return i.d
      }))
  }, function(e, t) {
      e.exports = function(e) {
          return "object" == typeof e ? null !== e : "function" == typeof e
      }
  }, function(e, t, n) {
      var r = n(6);
      e.exports = function(e) {
          if (!r(e)) throw TypeError(String(e) + " is not an object");
          return e
      }
  }, function(e, t, n) {
      var r = n(123),
          i = n(22),
          o = n(196);
      r || i(Object.prototype, "toString", o, {
          unsafe: !0
      })
  }, function(e, t, n) {
      "use strict";
      var r = n(32),
          i = n(84),
          o = n(72),
          a = n(29),
          s = n(125),
          c = "Array Iterator",
          u = a.set,
          l = a.getterFor(c);
      e.exports = s(Array, "Array", (function(e, t) {
          u(this, {
              type: c,
              target: r(e),
              index: 0,
              kind: t
          })
      }), (function() {
          var e = l(this),
              t = e.target,
              n = e.kind,
              r = e.index++;
          return !t || r >= t.length ? (e.target = void 0, {
              value: void 0,
              done: !0
          }) : "keys" == n ? {
              value: r,
              done: !1
          } : "values" == n ? {
              value: t[r],
              done: !1
          } : {
              value: [r, t[r]],
              done: !1
          }
      }), "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
  }, function(e, t, n) {
      var r = n(21),
          i = {}.hasOwnProperty;
      e.exports = Object.hasOwn || function(e, t) {
          return i.call(r(e), t)
      }
  }, function(e, t, n) {
      "use strict";
      var r = n(124).charAt,
          i = n(29),
          o = n(125),
          a = "String Iterator",
          s = i.set,
          c = i.getterFor(a);
      o(String, "String", (function(e) {
          s(this, {
              type: a,
              string: String(e),
              index: 0
          })
      }), (function() {
          var e, t = c(this),
              n = t.string,
              i = t.index;
          return i >= n.length ? {
              value: void 0,
              done: !0
          } : (e = r(n, i), t.index += e.length, {
              value: e,
              done: !1
          })
      }))
  }, function(e, t, n) {
      var r = n(3),
          i = n(165),
          o = n(9),
          a = n(28),
          s = n(4),
          c = s("iterator"),
          u = s("toStringTag"),
          l = o.values;
      for (var f in i) {
          var h = r[f],
              d = h && h.prototype;
          if (d) {
              if (d[c] !== l) try {
                  a(d, c, l)
              } catch (e) {
                  d[c] = l
              }
              if (d[u] || a(d, u, f), i[f])
                  for (var p in o)
                      if (d[p] !== o[p]) try {
                          a(d, p, o[p])
                      } catch (e) {
                          d[p] = o[p]
                      }
          }
      }
  }, function(e, t, n) {
      "use strict";
      n.d(t, "b", (function() {
          return s
      }));
      var r = n(48);

      function i(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
      }
      n.d(t, "a", (function() {
          return r.b
      })), n.d(t, "c", (function() {
          return r.c
      })), n.d(t, "d", (function() {
          return r.d
      }));
      var o = function() {
              function e(t) {
                  var n = this;
                  ! function(e, t) {
                      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                  }(this, e), this.__litLocalizeEventHandler = function(e) {
                      "ready" === e.detail.status && n.host.requestUpdate()
                  }, this.host = t
              }
              var t, n, o;
              return t = e, (n = [{
                  key: "hostConnected",
                  value: function() {
                      window.addEventListener(r.a, this.__litLocalizeEventHandler)
                  }
              }, {
                  key: "hostDisconnected",
                  value: function() {
                      window.removeEventListener(r.a, this.__litLocalizeEventHandler)
                  }
              }]) && i(t.prototype, n), o && i(t, o), e
          }(),
          a = function(e) {
              return e.addController(new o(e))
          },
          s = function() {
              return function(e) {
                  return "function" == typeof e ? u(e) : c(e)
              }
          },
          c = function(e) {
              return {
                  kind: e.kind,
                  elements: e.elements,
                  finisher: function(e) {
                      e.addInitializer(a)
                  }
              }
          },
          u = function(e) {
              return e.addInitializer(a), e
          }
  }, function(e, t, n) {
      var r = n(2);
      e.exports = !r((function() {
          return 7 != Object.defineProperty({}, 1, {
              get: function() {
                  return 7
              }
          })[1]
      }))
  }, function(e, t, n) {
      var r = n(54),
          i = Math.min;
      e.exports = function(e) {
          return e > 0 ? i(r(e), 9007199254740991) : 0
      }
  }, function(e, t, n) {
      var r = n(14),
          i = n(155),
          o = n(7),
          a = n(58),
          s = Object.defineProperty;
      t.f = r ? s : function(e, t, n) {
          if (o(e), t = a(t, !0), o(n), i) try {
              return s(e, t, n)
          } catch (e) {}
          if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
          return "value" in n && (e[t] = n.value), e
      }
  }, function(e, t, n) {
      "use strict";
      var r, i, o, a, s = n(1),
          c = n(42),
          u = n(3),
          l = n(41),
          f = n(186),
          h = n(22),
          d = n(66),
          p = n(107),
          v = n(38),
          m = n(113),
          y = n(6),
          g = n(55),
          b = n(56),
          w = n(118),
          k = n(90),
          S = n(112),
          x = n(143),
          A = n(173).set,
          _ = n(200),
          E = n(187),
          O = n(202),
          C = n(175),
          P = n(203),
          I = n(29),
          R = n(68),
          $ = n(4),
          L = n(204),
          T = n(126),
          j = n(83),
          M = $("species"),
          U = "Promise",
          N = I.get,
          B = I.set,
          z = I.getterFor(U),
          D = f && f.prototype,
          H = f,
          F = D,
          W = u.TypeError,
          V = u.document,
          K = u.process,
          q = C.f,
          G = q,
          Y = !!(V && V.createEvent && u.dispatchEvent),
          Z = "function" == typeof PromiseRejectionEvent,
          J = "unhandledrejection",
          Q = !1,
          X = R(U, (function() {
              var e = w(H) !== String(H);
              if (!e && 66 === j) return !0;
              if (c && !F.finally) return !0;
              if (j >= 51 && /native code/.test(H)) return !1;
              var t = new H((function(e) {
                      e(1)
                  })),
                  n = function(e) {
                      e((function() {}), (function() {}))
                  };
              return (t.constructor = {})[M] = n, !(Q = t.then((function() {})) instanceof n) || !e && L && !Z
          })),
          ee = X || !S((function(e) {
              H.all(e).catch((function() {}))
          })),
          te = function(e) {
              var t;
              return !(!y(e) || "function" != typeof(t = e.then)) && t
          },
          ne = function(e, t) {
              if (!e.notified) {
                  e.notified = !0;
                  var n = e.reactions;
                  _((function() {
                      for (var r = e.value, i = 1 == e.state, o = 0; n.length > o;) {
                          var a, s, c, u = n[o++],
                              l = i ? u.ok : u.fail,
                              f = u.resolve,
                              h = u.reject,
                              d = u.domain;
                          try {
                              l ? (i || (2 === e.rejection && ae(e), e.rejection = 1), !0 === l ? a = r : (d && d.enter(), a = l(r), d && (d.exit(), c = !0)), a === u.promise ? h(W("Promise-chain cycle")) : (s = te(a)) ? s.call(a, f, h) : f(a)) : h(r)
                          } catch (e) {
                              d && !c && d.exit(), h(e)
                          }
                      }
                      e.reactions = [], e.notified = !1, t && !e.rejection && ie(e)
                  }))
              }
          },
          re = function(e, t, n) {
              var r, i;
              Y ? ((r = V.createEvent("Event")).promise = t, r.reason = n, r.initEvent(e, !1, !0), u.dispatchEvent(r)) : r = {
                  promise: t,
                  reason: n
              }, !Z && (i = u["on" + e]) ? i(r) : e === J && O("Unhandled promise rejection", n)
          },
          ie = function(e) {
              A.call(u, (function() {
                  var t, n = e.facade,
                      r = e.value;
                  if (oe(e) && (t = P((function() {
                          T ? K.emit("unhandledRejection", r, n) : re(J, n, r)
                      })), e.rejection = T || oe(e) ? 2 : 1, t.error)) throw t.value
              }))
          },
          oe = function(e) {
              return 1 !== e.rejection && !e.parent
          },
          ae = function(e) {
              A.call(u, (function() {
                  var t = e.facade;
                  T ? K.emit("rejectionHandled", t) : re("rejectionhandled", t, e.value)
              }))
          },
          se = function(e, t, n) {
              return function(r) {
                  e(t, r, n)
              }
          },
          ce = function(e, t, n) {
              e.done || (e.done = !0, n && (e = n), e.value = t, e.state = 2, ne(e, !0))
          },
          ue = function(e, t, n) {
              if (!e.done) {
                  e.done = !0, n && (e = n);
                  try {
                      if (e.facade === t) throw W("Promise can't be resolved itself");
                      var r = te(t);
                      r ? _((function() {
                          var n = {
                              done: !1
                          };
                          try {
                              r.call(t, se(ue, n, e), se(ce, n, e))
                          } catch (t) {
                              ce(n, t, e)
                          }
                      })) : (e.value = t, e.state = 1, ne(e, !1))
                  } catch (t) {
                      ce({
                          done: !1
                      }, t, e)
                  }
              }
          };
      if (X && (F = (H = function(e) {
              b(this, H, U), g(e), r.call(this);
              var t = N(this);
              try {
                  e(se(ue, t), se(ce, t))
              } catch (e) {
                  ce(t, e)
              }
          }).prototype, (r = function(e) {
              B(this, {
                  type: U,
                  done: !1,
                  notified: !1,
                  parent: !1,
                  reactions: [],
                  rejection: !1,
                  state: 0,
                  value: void 0
              })
          }).prototype = d(F, {
              then: function(e, t) {
                  var n = z(this),
                      r = q(x(this, H));
                  return r.ok = "function" != typeof e || e, r.fail = "function" == typeof t && t, r.domain = T ? K.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && ne(n, !1), r.promise
              },
              catch: function(e) {
                  return this.then(void 0, e)
              }
          }), i = function() {
              var e = new r,
                  t = N(e);
              this.promise = e, this.resolve = se(ue, t), this.reject = se(ce, t)
          }, C.f = q = function(e) {
              return e === H || e === o ? new i(e) : G(e)
          }, !c && "function" == typeof f && D !== Object.prototype)) {
          a = D.then, Q || (h(D, "then", (function(e, t) {
              var n = this;
              return new H((function(e, t) {
                  a.call(n, e, t)
              })).then(e, t)
          }), {
              unsafe: !0
          }), h(D, "catch", F.catch, {
              unsafe: !0
          }));
          try {
              delete D.constructor
          } catch (e) {}
          p && p(D, F)
      }
      s({
          global: !0,
          wrap: !0,
          forced: X
      }, {
          Promise: H
      }), v(H, U, !1, !0), m(U), o = l(U), s({
          target: U,
          stat: !0,
          forced: X
      }, {
          reject: function(e) {
              var t = q(this);
              return t.reject.call(void 0, e), t.promise
          }
      }), s({
          target: U,
          stat: !0,
          forced: c || X
      }, {
          resolve: function(e) {
              return E(c && this === o ? H : this, e)
          }
      }), s({
          target: U,
          stat: !0,
          forced: ee
      }, {
          all: function(e) {
              var t = this,
                  n = q(t),
                  r = n.resolve,
                  i = n.reject,
                  o = P((function() {
                      var n = g(t.resolve),
                          o = [],
                          a = 0,
                          s = 1;
                      k(e, (function(e) {
                          var c = a++,
                              u = !1;
                          o.push(void 0), s++, n.call(t, e).then((function(e) {
                              u || (u = !0, o[c] = e, --s || r(o))
                          }), i)
                      })), --s || r(o)
                  }));
              return o.error && i(o.value), n.promise
          },
          race: function(e) {
              var t = this,
                  n = q(t),
                  r = n.reject,
                  i = P((function() {
                      var i = g(t.resolve);
                      k(e, (function(e) {
                          i.call(t, e).then(n.resolve, r)
                      }))
                  }));
              return i.error && r(i.value), n.promise
          }
      })
  }, function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return m
      }));
      n(26), n(25), n(33), n(24), n(8), n(36), n(34), n(9), n(52), n(11), n(12), n(17), n(19), n(20), n(23);
      var r = n(179),
          i = n(154);

      function o(e) {
          return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          } : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
      }

      function a(e, t, n, r, i, o, a) {
          try {
              var s = e[o](a),
                  c = s.value
          } catch (e) {
              return void n(e)
          }
          s.done ? t(c) : Promise.resolve(c).then(r, i)
      }

      function s(e) {
          return function() {
              var t = this,
                  n = arguments;
              return new Promise((function(r, i) {
                  var o = e.apply(t, n);

                  function s(e) {
                      a(o, r, i, s, c, "next", e)
                  }

                  function c(e) {
                      a(o, r, i, s, c, "throw", e)
                  }
                  s(void 0)
              }))
          }
      }

      function c(e, t) {
          return !t || "object" !== o(t) && "function" != typeof t ? function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }(e) : t
      }

      function u(e) {
          var t = "function" == typeof Map ? new Map : void 0;
          return (u = function(e) {
              if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
              var n;
              if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
              if (void 0 !== t) {
                  if (t.has(e)) return t.get(e);
                  t.set(e, r)
              }

              function r() {
                  return l(e, arguments, d(this).constructor)
              }
              return r.prototype = Object.create(e.prototype, {
                  constructor: {
                      value: r,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                  }
              }), h(r, e)
          })(e)
      }

      function l(e, t, n) {
          return (l = f() ? Reflect.construct : function(e, t, n) {
              var r = [null];
              r.push.apply(r, t);
              var i = new(Function.bind.apply(e, r));
              return n && h(i, n.prototype), i
          }).apply(null, arguments)
      }

      function f() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
              return !1
          }
      }

      function h(e, t) {
          return (h = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t, e
          })(e, t)
      }

      function d(e) {
          return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
      }
      var p = function(e) {
              ! function(e, t) {
                  if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                  e.prototype = Object.create(t && t.prototype, {
                      constructor: {
                          value: e,
                          writable: !0,
                          configurable: !0
                      }
                  }), t && h(e, t)
              }(i, e);
              var t, n, r = (t = i, n = f(), function() {
                  var e, r = d(t);
                  if (n) {
                      var i = d(this).constructor;
                      e = Reflect.construct(r, arguments, i)
                  } else e = r.apply(this, arguments);
                  return c(this, e)
              });

              function i(e) {
                  var t;
                  return function(e, t) {
                      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                  }(this, i), (t = r.call(this, e)).name = "ImportRetryError", t
              }
              return i
          }(u(Error)),
          v = new i.AnalyticsHandler({
              enableAnalytics: !0
          });

      function m(e) {
          return y.apply(this, arguments)
      }

      function y() {
          return (y = s(regeneratorRuntime.mark((function e(t) {
              var n, i, o, a, s = arguments;
              return regeneratorRuntime.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                      case 0:
                          return n = s.length > 1 && void 0 !== s[1] ? s[1] : 2, i = s.length > 2 && void 0 !== s[2] ? s[2] : 1e3, e.prev = 2, e.next = 5, t();
                      case 5:
                          return e.abrupt("return", e.sent);
                      case 8:
                          if (e.prev = 8, e.t0 = e.catch(2), o = "Error loading import", "string" == typeof e.t0 ? o = e.t0 : e.t0 instanceof Error && (o = e.t0.message), !n) {
                              e.next = 20;
                              break
                          }
                          return e.next = 15, Object(r.a)(i);
                      case 15:
                          return a = 2 - n + 1, v.sendEvent({
                              category: "offshootImportRetry",
                              action: "retryingImport",
                              label: "retryNumber: ".concat(a, " / ").concat(2, ", error: ").concat(o)
                          }), e.abrupt("return", m(t, n - 1, i));
                      case 20:
                          throw v.sendEvent({
                              category: "offshootImportRetry",
                              action: "importFailed",
                              label: o
                          }), new p(o);
                      case 22:
                      case "end":
                          return e.stop()
                  }
              }), e, null, [
                  [2, 8]
              ])
          })))).apply(this, arguments)
      }
  }, function(e, t, n) {
      "use strict";
      var r = n(1),
          i = n(3),
          o = n(41),
          a = n(42),
          s = n(14),
          c = n(122),
          u = n(164),
          l = n(2),
          f = n(10),
          h = n(70),
          d = n(6),
          p = n(7),
          v = n(21),
          m = n(32),
          y = n(58),
          g = n(57),
          b = n(46),
          w = n(69),
          k = n(64),
          S = n(167),
          x = n(121),
          A = n(37),
          _ = n(16),
          E = n(91),
          O = n(28),
          C = n(22),
          P = n(93),
          I = n(92),
          R = n(67),
          $ = n(86),
          L = n(4),
          T = n(166),
          j = n(94),
          M = n(38),
          U = n(29),
          N = n(53).forEach,
          B = I("hidden"),
          z = "Symbol",
          D = L("toPrimitive"),
          H = U.set,
          F = U.getterFor(z),
          W = Object.prototype,
          V = i.Symbol,
          K = o("JSON", "stringify"),
          q = A.f,
          G = _.f,
          Y = S.f,
          Z = E.f,
          J = P("symbols"),
          Q = P("op-symbols"),
          X = P("string-to-symbol-registry"),
          ee = P("symbol-to-string-registry"),
          te = P("wks"),
          ne = i.QObject,
          re = !ne || !ne.prototype || !ne.prototype.findChild,
          ie = s && l((function() {
              return 7 != b(G({}, "a", {
                  get: function() {
                      return G(this, "a", {
                          value: 7
                      }).a
                  }
              })).a
          })) ? function(e, t, n) {
              var r = q(W, t);
              r && delete W[t], G(e, t, n), r && e !== W && G(W, t, r)
          } : G,
          oe = function(e, t) {
              var n = J[e] = b(V.prototype);
              return H(n, {
                  type: z,
                  tag: e,
                  description: t
              }), s || (n.description = t), n
          },
          ae = u ? function(e) {
              return "symbol" == typeof e
          } : function(e) {
              return Object(e) instanceof V
          },
          se = function(e, t, n) {
              e === W && se(Q, t, n), p(e);
              var r = y(t, !0);
              return p(n), f(J, r) ? (n.enumerable ? (f(e, B) && e[B][r] && (e[B][r] = !1), n = b(n, {
                  enumerable: g(0, !1)
              })) : (f(e, B) || G(e, B, g(1, {})), e[B][r] = !0), ie(e, r, n)) : G(e, r, n)
          },
          ce = function(e, t) {
              p(e);
              var n = m(t),
                  r = w(n).concat(he(n));
              return N(r, (function(t) {
                  s && !ue.call(n, t) || se(e, t, n[t])
              })), e
          },
          ue = function(e) {
              var t = y(e, !0),
                  n = Z.call(this, t);
              return !(this === W && f(J, t) && !f(Q, t)) && (!(n || !f(this, t) || !f(J, t) || f(this, B) && this[B][t]) || n)
          },
          le = function(e, t) {
              var n = m(e),
                  r = y(t, !0);
              if (n !== W || !f(J, r) || f(Q, r)) {
                  var i = q(n, r);
                  return !i || !f(J, r) || f(n, B) && n[B][r] || (i.enumerable = !0), i
              }
          },
          fe = function(e) {
              var t = Y(m(e)),
                  n = [];
              return N(t, (function(e) {
                  f(J, e) || f(R, e) || n.push(e)
              })), n
          },
          he = function(e) {
              var t = e === W,
                  n = Y(t ? Q : m(e)),
                  r = [];
              return N(n, (function(e) {
                  !f(J, e) || t && !f(W, e) || r.push(J[e])
              })), r
          };
      (c || (C((V = function() {
          if (this instanceof V) throw TypeError("Symbol is not a constructor");
          var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
              t = $(e),
              n = function(e) {
                  this === W && n.call(Q, e), f(this, B) && f(this[B], t) && (this[B][t] = !1), ie(this, t, g(1, e))
              };
          return s && re && ie(W, t, {
              configurable: !0,
              set: n
          }), oe(t, e)
      }).prototype, "toString", (function() {
          return F(this).tag
      })), C(V, "withoutSetter", (function(e) {
          return oe($(e), e)
      })), E.f = ue, _.f = se, A.f = le, k.f = S.f = fe, x.f = he, T.f = function(e) {
          return oe(L(e), e)
      }, s && (G(V.prototype, "description", {
          configurable: !0,
          get: function() {
              return F(this).description
          }
      }), a || C(W, "propertyIsEnumerable", ue, {
          unsafe: !0
      }))), r({
          global: !0,
          wrap: !0,
          forced: !c,
          sham: !c
      }, {
          Symbol: V
      }), N(w(te), (function(e) {
          j(e)
      })), r({
          target: z,
          stat: !0,
          forced: !c
      }, {
          for: function(e) {
              var t = String(e);
              if (f(X, t)) return X[t];
              var n = V(t);
              return X[t] = n, ee[n] = t, n
          },
          keyFor: function(e) {
              if (!ae(e)) throw TypeError(e + " is not a symbol");
              if (f(ee, e)) return ee[e]
          },
          useSetter: function() {
              re = !0
          },
          useSimple: function() {
              re = !1
          }
      }), r({
          target: "Object",
          stat: !0,
          forced: !c,
          sham: !s
      }, {
          create: function(e, t) {
              return void 0 === t ? b(e) : ce(b(e), t)
          },
          defineProperty: se,
          defineProperties: ce,
          getOwnPropertyDescriptor: le
      }), r({
          target: "Object",
          stat: !0,
          forced: !c
      }, {
          getOwnPropertyNames: fe,
          getOwnPropertySymbols: he
      }), r({
          target: "Object",
          stat: !0,
          forced: l((function() {
              x.f(1)
          }))
      }, {
          getOwnPropertySymbols: function(e) {
              return x.f(v(e))
          }
      }), K) && r({
          target: "JSON",
          stat: !0,
          forced: !c || l((function() {
              var e = V();
              return "[null]" != K([e]) || "{}" != K({
                  a: e
              }) || "{}" != K(Object(e))
          }))
      }, {
          stringify: function(e, t, n) {
              for (var r, i = [e], o = 1; arguments.length > o;) i.push(arguments[o++]);
              if (r = t, (d(t) || void 0 !== e) && !ae(e)) return h(t) || (t = function(e, t) {
                  if ("function" == typeof r && (t = r.call(this, e, t)), !ae(t)) return t
              }), i[1] = t, K.apply(null, i)
          }
      });
      V.prototype[D] || O(V.prototype, D, V.prototype.valueOf), M(V, z), R[B] = !0
  }, function(e, t, n) {
      "use strict";
      var r = n(1),
          i = n(14),
          o = n(3),
          a = n(10),
          s = n(6),
          c = n(16).f,
          u = n(157),
          l = o.Symbol;
      if (i && "function" == typeof l && (!("description" in l.prototype) || void 0 !== l().description)) {
          var f = {},
              h = function() {
                  var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                      t = this instanceof h ? new l(e) : void 0 === e ? l() : l(e);
                  return "" === e && (f[t] = !0), t
              };
          u(h, l);
          var d = h.prototype = l.prototype;
          d.constructor = h;
          var p = d.toString,
              v = "Symbol(test)" == String(l("test")),
              m = /^Symbol\((.*)\)[^)]+$/;
          c(d, "description", {
              configurable: !0,
              get: function() {
                  var e = s(this) ? this.valueOf() : this,
                      t = p.call(e);
                  if (a(f, e)) return "";
                  var n = v ? t.slice(7, -1) : t.replace(m, "$1");
                  return "" === n ? void 0 : n
              }
          }), r({
              global: !0,
              forced: !0
          }, {
              Symbol: h
          })
      }
  }, function(e, t, n) {
      var r = n(27);
      e.exports = function(e) {
          return Object(r(e))
      }
  }, function(e, t, n) {
      var r = n(3),
          i = n(28),
          o = n(10),
          a = n(117),
          s = n(118),
          c = n(29),
          u = c.get,
          l = c.enforce,
          f = String(String).split("String");
      (e.exports = function(e, t, n, s) {
          var c, u = !!s && !!s.unsafe,
              h = !!s && !!s.enumerable,
              d = !!s && !!s.noTargetGet;
          "function" == typeof n && ("string" != typeof t || o(n, "name") || i(n, "name", t), (c = l(n)).source || (c.source = f.join("string" == typeof t ? t : ""))), e !== r ? (u ? !d && e[t] && (h = !0) : delete e[t], h ? e[t] = n : i(e, t, n)) : h ? e[t] = n : a(t, n)
      })(Function.prototype, "toString", (function() {
          return "function" == typeof this && u(this).source || s(this)
      }))
  }, function(e, t, n) {
      n(94)("iterator")
  }, function(e, t, n) {
      "use strict";
      var r = n(1),
          i = n(2),
          o = n(70),
          a = n(6),
          s = n(21),
          c = n(15),
          u = n(88),
          l = n(87),
          f = n(71),
          h = n(4),
          d = n(83),
          p = h("isConcatSpreadable"),
          v = 9007199254740991,
          m = "Maximum allowed index exceeded",
          y = d >= 51 || !i((function() {
              var e = [];
              return e[p] = !1, e.concat()[0] !== e
          })),
          g = f("concat"),
          b = function(e) {
              if (!a(e)) return !1;
              var t = e[p];
              return void 0 !== t ? !!t : o(e)
          };
      r({
          target: "Array",
          proto: !0,
          forced: !y || !g
      }, {
          concat: function(e) {
              var t, n, r, i, o, a = s(this),
                  f = l(a, 0),
                  h = 0;
              for (t = -1, r = arguments.length; t < r; t++)
                  if (b(o = -1 === t ? a : arguments[t])) {
                      if (h + (i = c(o.length)) > v) throw TypeError(m);
                      for (n = 0; n < i; n++, h++) n in o && u(f, h, o[n])
                  } else {
                      if (h >= v) throw TypeError(m);
                      u(f, h++, o)
                  } return f.length = h, f
          }
      })
  }, function(e, t, n) {
      var r = n(14),
          i = n(16).f,
          o = Function.prototype,
          a = o.toString,
          s = /^\s*function ([^ (]*)/,
          c = "name";
      r && !(c in o) && i(o, c, {
          configurable: !0,
          get: function() {
              try {
                  return a.call(this).match(s)[1]
              } catch (e) {
                  return ""
              }
          }
      })
  }, function(e, t, n) {
      var r = function(e) {
          "use strict";
          var t, n = Object.prototype,
              r = n.hasOwnProperty,
              i = "function" == typeof Symbol ? Symbol : {},
              o = i.iterator || "@@iterator",
              a = i.asyncIterator || "@@asyncIterator",
              s = i.toStringTag || "@@toStringTag";

          function c(e, t, n) {
              return Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }), e[t]
          }
          try {
              c({}, "")
          } catch (e) {
              c = function(e, t, n) {
                  return e[t] = n
              }
          }

          function u(e, t, n, r) {
              var i = t && t.prototype instanceof m ? t : m,
                  o = Object.create(i.prototype),
                  a = new C(r || []);
              return o._invoke = function(e, t, n) {
                  var r = f;
                  return function(i, o) {
                      if (r === d) throw new Error("Generator is already running");
                      if (r === p) {
                          if ("throw" === i) throw o;
                          return I()
                      }
                      for (n.method = i, n.arg = o;;) {
                          var a = n.delegate;
                          if (a) {
                              var s = _(a, n);
                              if (s) {
                                  if (s === v) continue;
                                  return s
                              }
                          }
                          if ("next" === n.method) n.sent = n._sent = n.arg;
                          else if ("throw" === n.method) {
                              if (r === f) throw r = p, n.arg;
                              n.dispatchException(n.arg)
                          } else "return" === n.method && n.abrupt("return", n.arg);
                          r = d;
                          var c = l(e, t, n);
                          if ("normal" === c.type) {
                              if (r = n.done ? p : h, c.arg === v) continue;
                              return {
                                  value: c.arg,
                                  done: n.done
                              }
                          }
                          "throw" === c.type && (r = p, n.method = "throw", n.arg = c.arg)
                      }
                  }
              }(e, n, a), o
          }

          function l(e, t, n) {
              try {
                  return {
                      type: "normal",
                      arg: e.call(t, n)
                  }
              } catch (e) {
                  return {
                      type: "throw",
                      arg: e
                  }
              }
          }
          e.wrap = u;
          var f = "suspendedStart",
              h = "suspendedYield",
              d = "executing",
              p = "completed",
              v = {};

          function m() {}

          function y() {}

          function g() {}
          var b = {};
          b[o] = function() {
              return this
          };
          var w = Object.getPrototypeOf,
              k = w && w(w(P([])));
          k && k !== n && r.call(k, o) && (b = k);
          var S = g.prototype = m.prototype = Object.create(b);

          function x(e) {
              ["next", "throw", "return"].forEach((function(t) {
                  c(e, t, (function(e) {
                      return this._invoke(t, e)
                  }))
              }))
          }

          function A(e, t) {
              function n(i, o, a, s) {
                  var c = l(e[i], e, o);
                  if ("throw" !== c.type) {
                      var u = c.arg,
                          f = u.value;
                      return f && "object" == typeof f && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                          n("next", e, a, s)
                      }), (function(e) {
                          n("throw", e, a, s)
                      })) : t.resolve(f).then((function(e) {
                          u.value = e, a(u)
                      }), (function(e) {
                          return n("throw", e, a, s)
                      }))
                  }
                  s(c.arg)
              }
              var i;
              this._invoke = function(e, r) {
                  function o() {
                      return new t((function(t, i) {
                          n(e, r, t, i)
                      }))
                  }
                  return i = i ? i.then(o, o) : o()
              }
          }

          function _(e, n) {
              var r = e.iterator[n.method];
              if (r === t) {
                  if (n.delegate = null, "throw" === n.method) {
                      if (e.iterator.return && (n.method = "return", n.arg = t, _(e, n), "throw" === n.method)) return v;
                      n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                  }
                  return v
              }
              var i = l(r, e.iterator, n.arg);
              if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, v;
              var o = i.arg;
              return o ? o.done ? (n[e.resultName] = o.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, v) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, v)
          }

          function E(e) {
              var t = {
                  tryLoc: e[0]
              };
              1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
          }

          function O(e) {
              var t = e.completion || {};
              t.type = "normal", delete t.arg, e.completion = t
          }

          function C(e) {
              this.tryEntries = [{
                  tryLoc: "root"
              }], e.forEach(E, this), this.reset(!0)
          }

          function P(e) {
              if (e) {
                  var n = e[o];
                  if (n) return n.call(e);
                  if ("function" == typeof e.next) return e;
                  if (!isNaN(e.length)) {
                      var i = -1,
                          a = function n() {
                              for (; ++i < e.length;)
                                  if (r.call(e, i)) return n.value = e[i], n.done = !1, n;
                              return n.value = t, n.done = !0, n
                          };
                      return a.next = a
                  }
              }
              return {
                  next: I
              }
          }

          function I() {
              return {
                  value: t,
                  done: !0
              }
          }
          return y.prototype = S.constructor = g, g.constructor = y, y.displayName = c(g, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
              var t = "function" == typeof e && e.constructor;
              return !!t && (t === y || "GeneratorFunction" === (t.displayName || t.name))
          }, e.mark = function(e) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, c(e, s, "GeneratorFunction")), e.prototype = Object.create(S), e
          }, e.awrap = function(e) {
              return {
                  __await: e
              }
          }, x(A.prototype), A.prototype[a] = function() {
              return this
          }, e.AsyncIterator = A, e.async = function(t, n, r, i, o) {
              void 0 === o && (o = Promise);
              var a = new A(u(t, n, r, i), o);
              return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                  return e.done ? e.value : a.next()
              }))
          }, x(S), c(S, s, "Generator"), S[o] = function() {
              return this
          }, S.toString = function() {
              return "[object Generator]"
          }, e.keys = function(e) {
              var t = [];
              for (var n in e) t.push(n);
              return t.reverse(),
                  function n() {
                      for (; t.length;) {
                          var r = t.pop();
                          if (r in e) return n.value = r, n.done = !1, n
                      }
                      return n.done = !0, n
                  }
          }, e.values = P, C.prototype = {
              constructor: C,
              reset: function(e) {
                  if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(O), !e)
                      for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
              },
              stop: function() {
                  this.done = !0;
                  var e = this.tryEntries[0].completion;
                  if ("throw" === e.type) throw e.arg;
                  return this.rval
              },
              dispatchException: function(e) {
                  if (this.done) throw e;
                  var n = this;

                  function i(r, i) {
                      return s.type = "throw", s.arg = e, n.next = r, i && (n.method = "next", n.arg = t), !!i
                  }
                  for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                      var a = this.tryEntries[o],
                          s = a.completion;
                      if ("root" === a.tryLoc) return i("end");
                      if (a.tryLoc <= this.prev) {
                          var c = r.call(a, "catchLoc"),
                              u = r.call(a, "finallyLoc");
                          if (c && u) {
                              if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                              if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                          } else if (c) {
                              if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                          } else {
                              if (!u) throw new Error("try statement without catch or finally");
                              if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                          }
                      }
                  }
              },
              abrupt: function(e, t) {
                  for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                      var i = this.tryEntries[n];
                      if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                          var o = i;
                          break
                      }
                  }
                  o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                  var a = o ? o.completion : {};
                  return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, v) : this.complete(a)
              },
              complete: function(e, t) {
                  if ("throw" === e.type) throw e.arg;
                  return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), v
              },
              finish: function(e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                      var n = this.tryEntries[t];
                      if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), O(n), v
                  }
              },
              catch: function(e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                      var n = this.tryEntries[t];
                      if (n.tryLoc === e) {
                          var r = n.completion;
                          if ("throw" === r.type) {
                              var i = r.arg;
                              O(n)
                          }
                          return i
                      }
                  }
                  throw new Error("illegal catch attempt")
              },
              delegateYield: function(e, n, r) {
                  return this.delegate = {
                      iterator: P(e),
                      resultName: n,
                      nextLoc: r
                  }, "next" === this.method && (this.arg = t), v
              }
          }, e
      }(e.exports);
      try {
          regeneratorRuntime = r
      } catch (e) {
          Function("r", "regeneratorRuntime = r")(r)
      }
  }, function(e, t) {
      e.exports = function(e) {
          if (null == e) throw TypeError("Can't call method on " + e);
          return e
      }
  }, function(e, t, n) {
      var r = n(14),
          i = n(16),
          o = n(57);
      e.exports = r ? function(e, t, n) {
          return i.f(e, t, o(1, n))
      } : function(e, t, n) {
          return e[t] = n, e
      }
  }, function(e, t, n) {
      var r, i, o, a = n(156),
          s = n(3),
          c = n(6),
          u = n(28),
          l = n(10),
          f = n(119),
          h = n(92),
          d = n(67),
          p = "Object already initialized",
          v = s.WeakMap;
      if (a || f.state) {
          var m = f.state || (f.state = new v),
              y = m.get,
              g = m.has,
              b = m.set;
          r = function(e, t) {
              if (g.call(m, e)) throw new TypeError(p);
              return t.facade = e, b.call(m, e, t), t
          }, i = function(e) {
              return y.call(m, e) || {}
          }, o = function(e) {
              return g.call(m, e)
          }
      } else {
          var w = h("state");
          d[w] = !0, r = function(e, t) {
              if (l(e, w)) throw new TypeError(p);
              return t.facade = e, u(e, w, t), t
          }, i = function(e) {
              return l(e, w) ? e[w] : {}
          }, o = function(e) {
              return l(e, w)
          }
      }
      e.exports = {
          set: r,
          get: i,
          has: o,
          enforce: function(e) {
              return o(e) ? i(e) : r(e, {})
          },
          getterFor: function(e) {
              return function(t) {
                  var n;
                  if (!c(t) || (n = i(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                  return n
              }
          }
      }
  }, function(e, t, n) {
      "use strict";
      var r = n(1),
          i = n(6),
          o = n(70),
          a = n(81),
          s = n(15),
          c = n(32),
          u = n(88),
          l = n(4),
          f = n(71)("slice"),
          h = l("species"),
          d = [].slice,
          p = Math.max;
      r({
          target: "Array",
          proto: !0,
          forced: !f
      }, {
          slice: function(e, t) {
              var n, r, l, f = c(this),
                  v = s(f.length),
                  m = a(e, v),
                  y = a(void 0 === t ? v : t, v);
              if (o(f) && ("function" != typeof(n = f.constructor) || n !== Array && !o(n.prototype) ? i(n) && null === (n = n[h]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return d.call(f, m, y);
              for (r = new(void 0 === n ? Array : n)(p(y - m, 0)), l = 0; m < y; m++, l++) m in f && u(r, l, f[m]);
              return r.length = l, r
          }
      })
  }, function(e, t, n) {
      "use strict";
      var r = n(1),
          i = n(95);
      r({
          target: "RegExp",
          proto: !0,
          forced: /./.exec !== i
      }, {
          exec: i
      })
  }, function(e, t, n) {
      var r = n(85),
          i = n(27);
      e.exports = function(e) {
          return r(i(e))
      }
  }, function(e, t, n) {
      var r = n(1),
          i = n(2),
          o = n(21),
          a = n(82),
          s = n(160);
      r({
          target: "Object",
          stat: !0,
          forced: i((function() {
              a(1)
          })),
          sham: !s
      }, {
          getPrototypeOf: function(e) {
              return a(o(e))
          }
      })
  }, function(e, t, n) {
      var r = n(1),
          i = n(41),
          o = n(55),
          a = n(7),
          s = n(6),
          c = n(46),
          u = n(194),
          l = n(2),
          f = i("Reflect", "construct"),
          h = l((function() {
              function e() {}
              return !(f((function() {}), [], e) instanceof e)
          })),
          d = !l((function() {
              f((function() {}))
          })),
          p = h || d;
      r({
          target: "Reflect",
          stat: !0,
          forced: p,
          sham: p
      }, {
          construct: function(e, t) {
              o(e), a(t);
              var n = arguments.length < 3 ? e : o(arguments[2]);
              if (d && !h) return f(e, t, n);
              if (e == n) {
                  switch (t.length) {
                      case 0:
                          return new e;
                      case 1:
                          return new e(t[0]);
                      case 2:
                          return new e(t[0], t[1]);
                      case 3:
                          return new e(t[0], t[1], t[2]);
                      case 4:
                          return new e(t[0], t[1], t[2], t[3])
                  }
                  var r = [null];
                  return r.push.apply(r, t), new(u.apply(e, r))
              }
              var i = n.prototype,
                  l = c(s(i) ? i : Object.prototype),
                  p = Function.apply.call(e, l, t);
              return s(p) ? p : l
          }
      })
  }, function(e, t, n) {
      var r = n(1),
          i = n(169);
      r({
          target: "Array",
          stat: !0,
          forced: !n(112)((function(e) {
              Array.from(e)
          }))
      }, {
          from: i
      })
  }, function(e, t, n) {
      "use strict";
      var r = n(22),
          i = n(7),
          o = n(2),
          a = n(127),
          s = "toString",
          c = RegExp.prototype,
          u = c.toString,
          l = o((function() {
              return "/a/b" != u.call({
                  source: "a",
                  flags: "b"
              })
          })),
          f = u.name != s;
      (l || f) && r(RegExp.prototype, s, (function() {
          var e = i(this),
              t = String(e.source),
              n = e.flags;
          return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in c) ? a.call(e) : n)
      }), {
          unsafe: !0
      })
  }, function(e, t, n) {
      var r = n(14),
          i = n(91),
          o = n(57),
          a = n(32),
          s = n(58),
          c = n(10),
          u = n(155),
          l = Object.getOwnPropertyDescriptor;
      t.f = r ? l : function(e, t) {
          if (e = a(e), t = s(t, !0), u) try {
              return l(e, t)
          } catch (e) {}
          if (c(e, t)) return o(!i.f.call(e, t), e[t])
      }
  }, function(e, t, n) {
      var r = n(16).f,
          i = n(10),
          o = n(4)("toStringTag");
      e.exports = function(e, t, n) {
          e && !i(e = n ? e : e.prototype, o) && r(e, o, {
              configurable: !0,
              value: t
          })
      }
  }, function(e, t, n) {
      var r = n(1),
          i = n(163);
      r({
          target: "Object",
          stat: !0,
          forced: Object.assign !== i
      }, {
          assign: i
      })
  }, function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return H
      })), n.d(t, "b", (function() {
          return oe
      })), n.d(t, "c", (function() {
          return D
      })), n.d(t, "d", (function() {
          return z
      })), n.d(t, "e", (function() {
          return re
      })), n.d(t, "f", (function() {
          return B
      }));
      var r;
      n(30), n(23), n(9), n(8), n(11), n(12), n(19), n(20), n(80), n(31), n(36), n(24), n(63), n(62), n(79), n(51), n(25), n(110), n(35), n(33), n(34);

      function i(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
              constructor: {
                  value: e,
                  writable: !0,
                  configurable: !0
              }
          }), t && o(e, t)
      }

      function o(e, t) {
          return (o = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t, e
          })(e, t)
      }

      function a(e) {
          var t = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
              } catch (e) {
                  return !1
              }
          }();
          return function() {
              var n, r = c(e);
              if (t) {
                  var i = c(this).constructor;
                  n = Reflect.construct(r, arguments, i)
              } else n = r.apply(this, arguments);
              return s(this, n)
          }
      }

      function s(e, t) {
          return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }(e) : t
      }

      function c(e) {
          return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
      }

      function u(e, t) {
          var n;
          if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
              if (Array.isArray(e) || (n = h(e)) || t && e && "number" == typeof e.length) {
                  n && (e = n);
                  var r = 0,
                      i = function() {};
                  return {
                      s: i,
                      n: function() {
                          return r >= e.length ? {
                              done: !0
                          } : {
                              done: !1,
                              value: e[r++]
                          }
                      },
                      e: function(e) {
                          throw e
                      },
                      f: i
                  }
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }
          var o, a = !0,
              s = !1;
          return {
              s: function() {
                  n = e[Symbol.iterator]()
              },
              n: function() {
                  var e = n.next();
                  return a = e.done, e
              },
              e: function(e) {
                  s = !0, o = e
              },
              f: function() {
                  try {
                      a || null == n.return || n.return()
                  } finally {
                      if (s) throw o
                  }
              }
          }
      }

      function l(e) {
          return function(e) {
              if (Array.isArray(e)) return d(e)
          }(e) || function(e) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
          }(e) || h(e) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
      }

      function f(e, t) {
          return function(e) {
              if (Array.isArray(e)) return e
          }(e) || function(e, t) {
              if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
              var n = [],
                  r = !0,
                  i = !1,
                  o = void 0;
              try {
                  for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
              } catch (e) {
                  i = !0, o = e
              } finally {
                  try {
                      r || null == s.return || s.return()
                  } finally {
                      if (i) throw o
                  }
              }
              return n
          }(e, t) || h(e, t) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
      }

      function h(e, t) {
          if (e) {
              if ("string" == typeof e) return d(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0
          }
      }

      function d(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r
      }

      function p(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function v(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
      }

      function m(e, t, n) {
          return t && v(e.prototype, t), n && v(e, n), e
      }

      function y(e) {
          return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          } : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
      }
      var g = window,
          b = g.trustedTypes,
          w = b ? b.createPolicy("lit-html", {
              createHTML: function(e) {
                  return e
              }
          }) : void 0,
          k = "$lit$",
          S = "lit$".concat((Math.random() + "").slice(9), "$"),
          x = "?" + S,
          A = "<".concat(x, ">"),
          _ = document,
          E = function() {
              return _.createComment("")
          },
          O = function(e) {
              return null === e || "object" != y(e) && "function" != typeof e
          },
          C = Array.isArray,
          P = function(e) {
              return C(e) || "function" == typeof(null == e ? void 0 : e[Symbol.iterator])
          },
          I = "[ \t\n\f\r]",
          R = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
          $ = /-->/g,
          L = />/g,
          T = RegExp(">|".concat(I, "(?:([^\\s\"'>=/]+)(").concat(I, "*=").concat(I, "*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"), "g"),
          j = /'/g,
          M = /"/g,
          U = /^(?:script|style|textarea|title)$/i,
          N = function(e) {
              return function(t) {
                  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                  return {
                      _$litType$: e,
                      strings: t,
                      values: r
                  }
              }
          },
          B = N(1),
          z = N(2),
          D = Symbol.for("lit-noChange"),
          H = Symbol.for("lit-nothing"),
          F = new WeakMap,
          W = _.createTreeWalker(_, 129, null, !1);

      function V(e, t) {
          if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
          return void 0 !== w ? w.createHTML(t) : t
      }
      var K = function(e, t) {
              for (var n, r = e.length - 1, i = [], o = 2 === t ? "<svg>" : "", a = R, s = 0; s < r; s++) {
                  for (var c = e[s], u = void 0, l = void 0, f = -1, h = 0; h < c.length && (a.lastIndex = h, null !== (l = a.exec(c)));) h = a.lastIndex, a === R ? "!--" === l[1] ? a = $ : void 0 !== l[1] ? a = L : void 0 !== l[2] ? (U.test(l[2]) && (n = RegExp("</" + l[2], "g")), a = T) : void 0 !== l[3] && (a = T) : a === T ? ">" === l[0] ? (a = null != n ? n : R, f = -1) : void 0 === l[1] ? f = -2 : (f = a.lastIndex - l[2].length, u = l[1], a = void 0 === l[3] ? T : '"' === l[3] ? M : j) : a === M || a === j ? a = T : a === $ || a === L ? a = R : (a = T, n = void 0);
                  var d = a === T && e[s + 1].startsWith("/>") ? " " : "";
                  o += a === R ? c + A : f >= 0 ? (i.push(u), c.slice(0, f) + k + c.slice(f) + S + d) : c + S + (-2 === f ? (i.push(void 0), s) : d)
              }
              return [V(e, o + (e[r] || "<?>") + (2 === t ? "</svg>" : "")), i]
          },
          q = function() {
              function e(t, n) {
                  var r, i = t.strings,
                      o = t._$litType$;
                  p(this, e), this.parts = [];
                  var a = 0,
                      s = 0,
                      c = i.length - 1,
                      h = this.parts,
                      d = f(K(i, o), 2),
                      v = d[0],
                      m = d[1];
                  if (this.el = e.createElement(v, n), W.currentNode = this.el.content, 2 === o) {
                      var y = this.el.content,
                          g = y.firstChild;
                      g.remove(), y.append.apply(y, l(g.childNodes))
                  }
                  for (; null !== (r = W.nextNode()) && h.length < c;) {
                      if (1 === r.nodeType) {
                          if (r.hasAttributes()) {
                              var w, A = [],
                                  _ = u(r.getAttributeNames());
                              try {
                                  for (_.s(); !(w = _.n()).done;) {
                                      var O = w.value;
                                      if (O.endsWith(k) || O.startsWith(S)) {
                                          var C = m[s++];
                                          if (A.push(O), void 0 !== C) {
                                              var P = r.getAttribute(C.toLowerCase() + k).split(S),
                                                  I = /([.?@])?(.*)/.exec(C);
                                              h.push({
                                                  type: 1,
                                                  index: a,
                                                  name: I[2],
                                                  strings: P,
                                                  ctor: "." === I[1] ? Q : "?" === I[1] ? ee : "@" === I[1] ? te : J
                                              })
                                          } else h.push({
                                              type: 6,
                                              index: a
                                          })
                                      }
                                  }
                              } catch (e) {
                                  _.e(e)
                              } finally {
                                  _.f()
                              }
                              for (var R = 0, $ = A; R < $.length; R++) {
                                  var L = $[R];
                                  r.removeAttribute(L)
                              }
                          }
                          if (U.test(r.tagName)) {
                              var T = r.textContent.split(S),
                                  j = T.length - 1;
                              if (j > 0) {
                                  r.textContent = b ? b.emptyScript : "";
                                  for (var M = 0; M < j; M++) r.append(T[M], E()), W.nextNode(), h.push({
                                      type: 2,
                                      index: ++a
                                  });
                                  r.append(T[j], E())
                              }
                          }
                      } else if (8 === r.nodeType)
                          if (r.data === x) h.push({
                              type: 2,
                              index: a
                          });
                          else
                              for (var N = -1; - 1 !== (N = r.data.indexOf(S, N + 1));) h.push({
                                  type: 7,
                                  index: a
                              }), N += S.length - 1;
                      a++
                  }
              }
              return m(e, null, [{
                  key: "createElement",
                  value: function(e, t) {
                      var n = _.createElement("template");
                      return n.innerHTML = e, n
                  }
              }]), e
          }();

      function G(e, t) {
          var n, r, i, o, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
              s = arguments.length > 3 ? arguments[3] : void 0;
          if (t === D) return t;
          var c = void 0 !== s ? null === (n = a._$Co) || void 0 === n ? void 0 : n[s] : a._$Cl,
              u = O(t) ? void 0 : t._$litDirective$;
          return (null == c ? void 0 : c.constructor) !== u && (null === (r = null == c ? void 0 : c._$AO) || void 0 === r || r.call(c, !1), void 0 === u ? c = void 0 : (c = new u(e))._$AT(e, a, s), void 0 !== s ? (null !== (i = (o = a)._$Co) && void 0 !== i ? i : o._$Co = [])[s] = c : a._$Cl = c), void 0 !== c && (t = G(e, c._$AS(e, t.values), c, s)), t
      }
      var Y = function() {
              function e(t, n) {
                  p(this, e), this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = n
              }
              return m(e, [{
                  key: "parentNode",
                  get: function() {
                      return this._$AM.parentNode
                  }
              }, {
                  key: "_$AU",
                  get: function() {
                      return this._$AM._$AU
                  }
              }, {
                  key: "u",
                  value: function(e) {
                      var t, n = this._$AD,
                          r = n.el.content,
                          i = n.parts,
                          o = (null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t ? t : _).importNode(r, !0);
                      W.currentNode = o;
                      for (var a = W.nextNode(), s = 0, c = 0, u = i[0]; void 0 !== u;) {
                          if (s === u.index) {
                              var l = void 0;
                              2 === u.type ? l = new Z(a, a.nextSibling, this, e) : 1 === u.type ? l = new u.ctor(a, u.name, u.strings, this, e) : 6 === u.type && (l = new ne(a, this, e)), this._$AV.push(l), u = i[++c]
                          }
                          s !== (null == u ? void 0 : u.index) && (a = W.nextNode(), s++)
                      }
                      return W.currentNode = _, o
                  }
              }, {
                  key: "v",
                  value: function(e) {
                      var t, n = 0,
                          r = u(this._$AV);
                      try {
                          for (r.s(); !(t = r.n()).done;) {
                              var i = t.value;
                              void 0 !== i && (void 0 !== i.strings ? (i._$AI(e, i, n), n += i.strings.length - 2) : i._$AI(e[n])), n++
                          }
                      } catch (e) {
                          r.e(e)
                      } finally {
                          r.f()
                      }
                  }
              }]), e
          }(),
          Z = function() {
              function e(t, n, r, i) {
                  var o;
                  p(this, e), this.type = 2, this._$AH = H, this._$AN = void 0, this._$AA = t, this._$AB = n, this._$AM = r, this.options = i, this._$Cp = null === (o = null == i ? void 0 : i.isConnected) || void 0 === o || o
              }
              return m(e, [{
                  key: "_$AU",
                  get: function() {
                      var e, t;
                      return null !== (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) && void 0 !== t ? t : this._$Cp
                  }
              }, {
                  key: "parentNode",
                  get: function() {
                      var e = this._$AA.parentNode,
                          t = this._$AM;
                      return void 0 !== t && 11 === (null == e ? void 0 : e.nodeType) && (e = t.parentNode), e
                  }
              }, {
                  key: "startNode",
                  get: function() {
                      return this._$AA
                  }
              }, {
                  key: "endNode",
                  get: function() {
                      return this._$AB
                  }
              }, {
                  key: "_$AI",
                  value: function(e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
                      e = G(this, e, t), O(e) ? e === H || null == e || "" === e ? (this._$AH !== H && this._$AR(), this._$AH = H) : e !== this._$AH && e !== D && this._(e) : void 0 !== e._$litType$ ? this.g(e) : void 0 !== e.nodeType ? this.$(e) : P(e) ? this.T(e) : this._(e)
                  }
              }, {
                  key: "k",
                  value: function(e) {
                      return this._$AA.parentNode.insertBefore(e, this._$AB)
                  }
              }, {
                  key: "$",
                  value: function(e) {
                      this._$AH !== e && (this._$AR(), this._$AH = this.k(e))
                  }
              }, {
                  key: "_",
                  value: function(e) {
                      this._$AH !== H && O(this._$AH) ? this._$AA.nextSibling.data = e : this.$(_.createTextNode(e)), this._$AH = e
                  }
              }, {
                  key: "g",
                  value: function(e) {
                      var t, n = e.values,
                          r = e._$litType$,
                          i = "number" == typeof r ? this._$AC(e) : (void 0 === r.el && (r.el = q.createElement(V(r.h, r.h[0]), this.options)), r);
                      if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === i) this._$AH.v(n);
                      else {
                          var o = new Y(i, this),
                              a = o.u(this.options);
                          o.v(n), this.$(a), this._$AH = o
                      }
                  }
              }, {
                  key: "_$AC",
                  value: function(e) {
                      var t = F.get(e.strings);
                      return void 0 === t && F.set(e.strings, t = new q(e)), t
                  }
              }, {
                  key: "T",
                  value: function(t) {
                      C(this._$AH) || (this._$AH = [], this._$AR());
                      var n, r, i = this._$AH,
                          o = 0,
                          a = u(t);
                      try {
                          for (a.s(); !(r = a.n()).done;) {
                              var s = r.value;
                              o === i.length ? i.push(n = new e(this.k(E()), this.k(E()), this, this.options)) : n = i[o], n._$AI(s), o++
                          }
                      } catch (e) {
                          a.e(e)
                      } finally {
                          a.f()
                      }
                      o < i.length && (this._$AR(n && n._$AB.nextSibling, o), i.length = o)
                  }
              }, {
                  key: "_$AR",
                  value: function() {
                      var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._$AA.nextSibling,
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      for (null === (e = this._$AP) || void 0 === e || e.call(this, !1, !0, n); t && t !== this._$AB;) {
                          var r = t.nextSibling;
                          t.remove(), t = r
                      }
                  }
              }, {
                  key: "setConnected",
                  value: function(e) {
                      var t;
                      void 0 === this._$AM && (this._$Cp = e, null === (t = this._$AP) || void 0 === t || t.call(this, e))
                  }
              }]), e
          }(),
          J = function() {
              function e(t, n, r, i, o) {
                  p(this, e), this.type = 1, this._$AH = H, this._$AN = void 0, this.element = t, this.name = n, this._$AM = i, this.options = o, r.length > 2 || "" !== r[0] || "" !== r[1] ? (this._$AH = Array(r.length - 1).fill(new String), this.strings = r) : this._$AH = H
              }
              return m(e, [{
                  key: "tagName",
                  get: function() {
                      return this.element.tagName
                  }
              }, {
                  key: "_$AU",
                  get: function() {
                      return this._$AM._$AU
                  }
              }, {
                  key: "_$AI",
                  value: function(e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this,
                          n = arguments.length > 2 ? arguments[2] : void 0,
                          r = arguments.length > 3 ? arguments[3] : void 0,
                          i = this.strings,
                          o = !1;
                      if (void 0 === i) e = G(this, e, t, 0), (o = !O(e) || e !== this._$AH && e !== D) && (this._$AH = e);
                      else {
                          var a, s, c = e;
                          for (e = i[0], a = 0; a < i.length - 1; a++)(s = G(this, c[n + a], t, a)) === D && (s = this._$AH[a]), o || (o = !O(s) || s !== this._$AH[a]), s === H ? e = H : e !== H && (e += (null != s ? s : "") + i[a + 1]), this._$AH[a] = s
                      }
                      o && !r && this.j(e)
                  }
              }, {
                  key: "j",
                  value: function(e) {
                      e === H ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != e ? e : "")
                  }
              }]), e
          }(),
          Q = function(e) {
              i(n, e);
              var t = a(n);

              function n() {
                  var e;
                  return p(this, n), (e = t.apply(this, arguments)).type = 3, e
              }
              return m(n, [{
                  key: "j",
                  value: function(e) {
                      this.element[this.name] = e === H ? void 0 : e
                  }
              }]), n
          }(J),
          X = b ? b.emptyScript : "",
          ee = function(e) {
              i(n, e);
              var t = a(n);

              function n() {
                  var e;
                  return p(this, n), (e = t.apply(this, arguments)).type = 4, e
              }
              return m(n, [{
                  key: "j",
                  value: function(e) {
                      e && e !== H ? this.element.setAttribute(this.name, X) : this.element.removeAttribute(this.name)
                  }
              }]), n
          }(J),
          te = function(e) {
              i(n, e);
              var t = a(n);

              function n(e, r, i, o, a) {
                  var s;
                  return p(this, n), (s = t.call(this, e, r, i, o, a)).type = 5, s
              }
              return m(n, [{
                  key: "_$AI",
                  value: function(e) {
                      var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
                      if ((e = null !== (t = G(this, e, n, 0)) && void 0 !== t ? t : H) !== D) {
                          var r = this._$AH,
                              i = e === H && r !== H || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive,
                              o = e !== H && (r === H || i);
                          i && this.element.removeEventListener(this.name, this, r), o && this.element.addEventListener(this.name, this, e), this._$AH = e
                      }
                  }
              }, {
                  key: "handleEvent",
                  value: function(e) {
                      var t, n;
                      "function" == typeof this._$AH ? this._$AH.call(null !== (n = null === (t = this.options) || void 0 === t ? void 0 : t.host) && void 0 !== n ? n : this.element, e) : this._$AH.handleEvent(e)
                  }
              }]), n
          }(J),
          ne = function() {
              function e(t, n, r) {
                  p(this, e), this.element = t, this.type = 6, this._$AN = void 0, this._$AM = n, this.options = r
              }
              return m(e, [{
                  key: "_$AU",
                  get: function() {
                      return this._$AM._$AU
                  }
              }, {
                  key: "_$AI",
                  value: function(e) {
                      G(this, e)
                  }
              }]), e
          }(),
          re = {
              O: k,
              P: S,
              A: x,
              C: 1,
              M: K,
              L: Y,
              R: P,
              D: G,
              I: Z,
              V: J,
              H: ee,
              N: te,
              U: Q,
              F: ne
          },
          ie = g.litHtmlPolyfillSupport;
      null == ie || ie(q, Z), (null !== (r = g.litHtmlVersions) && void 0 !== r ? r : g.litHtmlVersions = []).push("2.8.0");
      var oe = function(e, t, n) {
          var r, i, o = null !== (r = null == n ? void 0 : n.renderBefore) && void 0 !== r ? r : t,
              a = o._$litPart$;
          if (void 0 === a) {
              var s = null !== (i = null == n ? void 0 : n.renderBefore) && void 0 !== i ? i : null;
              o._$litPart$ = a = new Z(t.insertBefore(E(), s), s, void 0, null != n ? n : {})
          }
          return a._$AI(e), a
      }
  }, function(e, t, n) {
      var r = n(158),
          i = n(3),
          o = function(e) {
              return "function" == typeof e ? e : void 0
          };
      e.exports = function(e, t) {
          return arguments.length < 2 ? o(r[e]) || o(i[e]) : r[e] && r[e][t] || i[e] && i[e][t]
      }
  }, function(e, t) {
      e.exports = !1
  }, function(e, t, n) {
      "use strict";
      var r = n(1),
          i = n(53).map;
      r({
          target: "Array",
          proto: !0,
          forced: !n(71)("map")
      }, {
          map: function(e) {
              return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
          }
      })
  }, function(e, t, n) {
      var r = n(3),
          i = n(165),
          o = n(195),
          a = n(28);
      for (var s in i) {
          var c = r[s],
              u = c && c.prototype;
          if (u && u.forEach !== o) try {
              a(u, "forEach", o)
          } catch (e) {
              u.forEach = o
          }
      }
  }, function(e, t) {
      var n = {}.toString;
      e.exports = function(e) {
          return n.call(e).slice(8, -1)
      }
  }, function(e, t, n) {
      var r, i = n(7),
          o = n(161),
          a = n(120),
          s = n(67),
          c = n(162),
          u = n(116),
          l = n(92),
          f = l("IE_PROTO"),
          h = function() {},
          d = function(e) {
              return "<script>" + e + "</" + "script>"
          },
          p = function() {
              try {
                  r = document.domain && new ActiveXObject("htmlfile")
              } catch (e) {}
              var e, t;
              p = r ? function(e) {
                  e.write(d("")), e.close();
                  var t = e.parentWindow.Object;
                  return e = null, t
              }(r) : ((t = u("iframe")).style.display = "none", c.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(d("document.F=Object")), e.close(), e.F);
              for (var n = a.length; n--;) delete p.prototype[a[n]];
              return p()
          };
      s[f] = !0, e.exports = Object.create || function(e, t) {
          var n;
          return null !== e ? (h.prototype = i(e), n = new h, h.prototype = null, n[f] = e) : n = p(), void 0 === t ? n : o(n, t)
      }
  }, function(e, t, n) {
      var r = n(55);
      e.exports = function(e, t, n) {
          if (r(e), void 0 === t) return e;
          switch (n) {
              case 0:
                  return function() {
                      return e.call(t)
                  };
              case 1:
                  return function(n) {
                      return e.call(t, n)
                  };
              case 2:
                  return function(n, r) {
                      return e.call(t, n, r)
                  };
              case 3:
                  return function(n, r, i) {
                      return e.call(t, n, r, i)
                  }
          }
          return function() {
              return e.apply(t, arguments)
          }
      }
  }, function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return s
      })), n.d(t, "b", (function() {
          return A
      })), n.d(t, "c", (function() {
          return O
      })), n.d(t, "d", (function() {
          return i
      }));
      n(9), n(8), n(12), n(17), n(36), n(103), n(11), n(63), n(52), n(43), n(77);

      function r(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
      }
      for (var i = function(e) {
              for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
              return {
                  strTag: !0,
                  strings: e,
                  values: n
              }
          }, o = function(e, t, n) {
              for (var r = e[0], i = 1; i < e.length; i++) r += t[n ? n[i - 1] : i - 1], r += e[i];
              return r
          }, a = function(e) {
              return "string" != typeof(t = e) && "strTag" in t ? o(e.strings, e.values) : e;
              var t
          }, s = "lit-localize-status", c = function() {
              function e() {
                  var t = this;
                  ! function(e, t) {
                      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                  }(this, e), this.settled = !1, this.promise = new Promise((function(e, n) {
                      t._resolve = e, t._reject = n
                  }))
              }
              var t, n, i;
              return t = e, (n = [{
                  key: "resolve",
                  value: function(e) {
                      this.settled = !0, this._resolve(e)
                  }
              }, {
                  key: "reject",
                  value: function(e) {
                      this.settled = !0, this._reject(e)
                  }
              }]) && r(t.prototype, n), i && r(t, i), e
          }(), u = [], l = 0; l < 256; l++) u[l] = (l >> 4 & 15).toString(16) + (15 & l).toString(16);

      function f(e, t) {
          return (t ? "h" : "s") + function(e) {
              for (var t = 0, n = 8997, r = 0, i = 33826, o = 0, a = 40164, s = 0, c = 52210, l = 0; l < e.length; l++) r = 435 * i, o = 435 * a, s = 435 * c, o += (n ^= e.charCodeAt(l)) << 8, s += i << 8, n = 65535 & (t = 435 * n), i = 65535 & (r += t >>> 16), c = s + ((o += r >>> 16) >>> 16) & 65535, a = 65535 & o;
              return u[c >> 8] + u[255 & c] + u[a >> 8] + u[255 & a] + u[i >> 8] + u[255 & i] + u[n >> 8] + u[255 & n]
          }("string" == typeof e ? e : e.join(""))
      }
      var h = new WeakMap,
          d = new Map;

      function p(e, t, n) {
          var r;
          if (e) {
              var i = e[null !== (r = null == n ? void 0 : n.id) && void 0 !== r ? r : function(e) {
                  var t = "string" == typeof e ? e : e.strings,
                      n = d.get(t);
                  void 0 === n && (n = f(t, "string" != typeof e && !("strTag" in e)), d.set(t, n));
                  return n
              }(t)];
              if (i) {
                  if ("string" == typeof i) return i;
                  if ("strTag" in i) return o(i.strings, t.values, i.values);
                  var s = h.get(i);
                  return void 0 === s && (s = i.values, h.set(i, s)), i.values = s.map((function(e) {
                      return t.values[e]
                  })), i
              }
          }
          return a(t)
      }

      function v(e) {
          window.dispatchEvent(new CustomEvent(s, {
              detail: e
          }))
      }
      var m, y, g, b, w, k = "",
          S = new c;
      S.resolve();
      var x = 0,
          A = function(e) {
              return function(e) {
                  if (C) throw new Error("lit-localize can only be configured once");
                  O = e, C = !0
              }((function(e, t) {
                  return p(w, e, t)
              })), k = y = e.sourceLocale, (g = new Set(e.targetLocales)).add(e.sourceLocale), b = e.loadLocale, {
                  getLocale: _,
                  setLocale: E
              }
          },
          _ = function() {
              return k
          },
          E = function(e) {
              if (e === (null != m ? m : k)) return S.promise;
              if (!g || !b) throw new Error("Internal error");
              if (!g.has(e)) throw new Error("Invalid locale code");
              var t = ++x;
              return m = e, S.settled && (S = new c), v({
                  status: "loading",
                  loadingLocale: e
              }), (e === y ? Promise.resolve({
                  templates: void 0
              }) : b(e)).then((function(n) {
                  x === t && (k = e, m = void 0, w = n.templates, v({
                      status: "ready",
                      readyLocale: e
                  }), S.resolve())
              }), (function(n) {
                  x === t && (v({
                      status: "error",
                      errorLocale: e,
                      errorMessage: n.toString()
                  }), S.reject(n))
              })), S.promise
          },
          O = a,
          C = !1
  }, function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return p
      }));
      n(9), n(8), n(11), n(190), n(12), n(33), n(34), n(19), n(20), n(23), n(30), n(25), n(35);
      var r = n(105);

      function i(e) {
          return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          } : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
      }

      function o(e, t) {
          return function(e) {
              if (Array.isArray(e)) return e
          }(e) || function(e, t) {
              if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
              var n = [],
                  r = !0,
                  i = !1,
                  o = void 0;
              try {
                  for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
              } catch (e) {
                  i = !0, o = e
              } finally {
                  try {
                      r || null == s.return || s.return()
                  } finally {
                      if (i) throw o
                  }
              }
              return n
          }(e, t) || function(e, t) {
              if (!e) return;
              if ("string" == typeof e) return a(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
          }(e, t) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
      }

      function a(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r
      }

      function s(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
      }

      function c(e, t) {
          return (c = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t, e
          })(e, t)
      }

      function u(e) {
          var t = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
              } catch (e) {
                  return !1
              }
          }();
          return function() {
              var n, r = f(e);
              if (t) {
                  var i = f(this).constructor;
                  n = Reflect.construct(r, arguments, i)
              } else n = r.apply(this, arguments);
              return l(this, n)
          }
      }

      function l(e, t) {
          return !t || "object" !== i(t) && "function" != typeof t ? function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }(e) : t
      }

      function f(e) {
          return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
      }
      var h = new WeakSet,
          d = function(e) {
              ! function(e, t) {
                  if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                  e.prototype = Object.create(t && t.prototype, {
                      constructor: {
                          value: e,
                          writable: !0,
                          configurable: !0
                      }
                  }), t && c(e, t)
              }(a, e);
              var t, n, r, i = u(a);

              function a(e) {
                  return function(e, t) {
                      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                  }(this, a), i.call(this, e)
              }
              return t = a, (n = [{
                  key: "update",
                  value: function(e, t) {
                      var n = o(t, 2),
                          r = n[0],
                          i = n[1];
                      return h.has(e) || (r(), h.add(e)), this.render(r, i)
                  }
              }, {
                  key: "render",
                  value: function(e, t) {
                      return t()
                  }
              }]) && s(t.prototype, n), r && s(t, r), a
          }(r.b),
          p = Object(r.a)(d)
  }, function(e, t, n) {
      "use strict";
      var r = n(14),
          i = n(3),
          o = n(68),
          a = n(22),
          s = n(10),
          c = n(45),
          u = n(111),
          l = n(58),
          f = n(2),
          h = n(46),
          d = n(64).f,
          p = n(37).f,
          v = n(16).f,
          m = n(149).trim,
          y = "Number",
          g = i.Number,
          b = g.prototype,
          w = c(h(b)) == y,
          k = function(e) {
              var t, n, r, i, o, a, s, c, u = l(e, !1);
              if ("string" == typeof u && u.length > 2)
                  if (43 === (t = (u = m(u)).charCodeAt(0)) || 45 === t) {
                      if (88 === (n = u.charCodeAt(2)) || 120 === n) return NaN
                  } else if (48 === t) {
                  switch (u.charCodeAt(1)) {
                      case 66:
                      case 98:
                          r = 2, i = 49;
                          break;
                      case 79:
                      case 111:
                          r = 8, i = 55;
                          break;
                      default:
                          return +u
                  }
                  for (a = (o = u.slice(2)).length, s = 0; s < a; s++)
                      if ((c = o.charCodeAt(s)) < 48 || c > i) return NaN;
                  return parseInt(o, r)
              }
              return +u
          };
      if (o(y, !g(" 0o1") || !g("0b1") || g("+0x1"))) {
          for (var S, x = function(e) {
                  var t = arguments.length < 1 ? 0 : e,
                      n = this;
                  return n instanceof x && (w ? f((function() {
                      b.valueOf.call(n)
                  })) : c(n) != y) ? u(new g(k(t)), n, x) : k(t)
              }, A = r ? d(g) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","), _ = 0; A.length > _; _++) s(g, S = A[_]) && !s(x, S) && v(x, S, p(g, S));
          x.prototype = b, b.constructor = x, a(i, y, x)
      }
  }, function(e, t, n) {
      "use strict";
      var r = n(96),
          i = n(130),
          o = n(7),
          a = n(27),
          s = n(143),
          c = n(132),
          u = n(15),
          l = n(97),
          f = n(95),
          h = n(128).UNSUPPORTED_Y,
          d = [].push,
          p = Math.min,
          v = 4294967295;
      r("split", 2, (function(e, t, n) {
          var r;
          return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, n) {
              var r = String(a(this)),
                  o = void 0 === n ? v : n >>> 0;
              if (0 === o) return [];
              if (void 0 === e) return [r];
              if (!i(e)) return t.call(r, e, o);
              for (var s, c, u, l = [], h = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), p = 0, m = new RegExp(e.source, h + "g");
                  (s = f.call(m, r)) && !((c = m.lastIndex) > p && (l.push(r.slice(p, s.index)), s.length > 1 && s.index < r.length && d.apply(l, s.slice(1)), u = s[0].length, p = c, l.length >= o));) m.lastIndex === s.index && m.lastIndex++;
              return p === r.length ? !u && m.test("") || l.push("") : l.push(r.slice(p)), l.length > o ? l.slice(0, o) : l
          } : "0".split(void 0, 0).length ? function(e, n) {
              return void 0 === e && 0 === n ? [] : t.call(this, e, n)
          } : t, [function(t, n) {
              var i = a(this),
                  o = null == t ? void 0 : t[e];
              return void 0 !== o ? o.call(t, i, n) : r.call(String(i), t, n)
          }, function(e, i) {
              var a = n(r, e, this, i, r !== t);
              if (a.done) return a.value;
              var f = o(e),
                  d = String(this),
                  m = s(f, RegExp),
                  y = f.unicode,
                  g = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.unicode ? "u" : "") + (h ? "g" : "y"),
                  b = new m(h ? "^(?:" + f.source + ")" : f, g),
                  w = void 0 === i ? v : i >>> 0;
              if (0 === w) return [];
              if (0 === d.length) return null === l(b, d) ? [d] : [];
              for (var k = 0, S = 0, x = []; S < d.length;) {
                  b.lastIndex = h ? 0 : S;
                  var A, _ = l(b, h ? d.slice(S) : d);
                  if (null === _ || (A = p(u(b.lastIndex + (h ? S : 0)), d.length)) === k) S = c(d, S, y);
                  else {
                      if (x.push(d.slice(k, S)), x.length === w) return x;
                      for (var E = 1; E <= _.length - 1; E++)
                          if (x.push(_[E]), x.length === w) return x;
                      S = k = A
                  }
              }
              return x.push(d.slice(k)), x
          }]
      }), h)
  }, function(e, t, n) {
      "use strict";
      var r = n(98),
          i = n(178);
      e.exports = r("Map", (function(e) {
          return function() {
              return e(this, arguments.length ? arguments[0] : void 0)
          }
      }), i)
  }, function(e, t, n) {
      var r = n(47),
          i = n(85),
          o = n(21),
          a = n(15),
          s = n(87),
          c = [].push,
          u = function(e) {
              var t = 1 == e,
                  n = 2 == e,
                  u = 3 == e,
                  l = 4 == e,
                  f = 6 == e,
                  h = 7 == e,
                  d = 5 == e || f;
              return function(p, v, m, y) {
                  for (var g, b, w = o(p), k = i(w), S = r(v, m, 3), x = a(k.length), A = 0, _ = y || s, E = t ? _(p, x) : n || h ? _(p, 0) : void 0; x > A; A++)
                      if ((d || A in k) && (b = S(g = k[A], A, w), e))
                          if (t) E[A] = b;
                          else if (b) switch (e) {
                      case 3:
                          return !0;
                      case 5:
                          return g;
                      case 6:
                          return A;
                      case 2:
                          c.call(E, g)
                  } else switch (e) {
                      case 4:
                          return !1;
                      case 7:
                          c.call(E, g)
                  }
                  return f ? -1 : u || l ? l : E
              }
          };
      e.exports = {
          forEach: u(0),
          map: u(1),
          filter: u(2),
          some: u(3),
          every: u(4),
          find: u(5),
          findIndex: u(6),
          filterOut: u(7)
      }
  }, function(e, t) {
      var n = Math.ceil,
          r = Math.floor;
      e.exports = function(e) {
          return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
      }
  }, function(e, t) {
      e.exports = function(e) {
          if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
          return e
      }
  }, function(e, t) {
      e.exports = function(e, t, n) {
          if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
          return e
      }
  }, function(e, t) {
      e.exports = function(e, t) {
          return {
              enumerable: !(1 & e),
              configurable: !(2 & e),
              writable: !(4 & e),
              value: t
          }
      }
  }, function(e, t, n) {
      var r = n(6);
      e.exports = function(e, t) {
          if (!r(e)) return e;
          var n, i;
          if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
          if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i;
          if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
          throw TypeError("Can't convert object to primitive value")
      }
  }, function(e, t, n) {
      var r = n(1),
          i = n(148),
          o = n(2),
          a = n(6),
          s = n(65).onFreeze,
          c = Object.freeze;
      r({
          target: "Object",
          stat: !0,
          forced: o((function() {
              c(1)
          })),
          sham: !i
      }, {
          freeze: function(e) {
              return c && a(e) ? c(s(e)) : e
          }
      })
  }, function(e, t, n) {
      "use strict";
      var r = n(1),
          i = n(81),
          o = n(54),
          a = n(15),
          s = n(21),
          c = n(87),
          u = n(88),
          l = n(71)("splice"),
          f = Math.max,
          h = Math.min,
          d = 9007199254740991,
          p = "Maximum allowed length exceeded";
      r({
          target: "Array",
          proto: !0,
          forced: !l
      }, {
          splice: function(e, t) {
              var n, r, l, v, m, y, g = s(this),
                  b = a(g.length),
                  w = i(e, b),
                  k = arguments.length;
              if (0 === k ? n = r = 0 : 1 === k ? (n = 0, r = b - w) : (n = k - 2, r = h(f(o(t), 0), b - w)), b + n - r > d) throw TypeError(p);
              for (l = c(g, r), v = 0; v < r; v++)(m = w + v) in g && u(l, v, g[m]);
              if (l.length = r, n < r) {
                  for (v = w; v < b - r; v++) y = v + n, (m = v + r) in g ? g[y] = g[m] : delete g[y];
                  for (v = b; v > b - r + n; v--) delete g[v - 1]
              } else if (n > r)
                  for (v = b - r; v > w; v--) y = v + n - 1, (m = v + r - 1) in g ? g[y] = g[m] : delete g[y];
              for (v = 0; v < n; v++) g[v + w] = arguments[v + 2];
              return g.length = b - r + n, l
          }
      })
  }, function(e, t, n) {
      "use strict";
      var r = n(96),
          i = n(7),
          o = n(27),
          a = n(208),
          s = n(97);
      r("search", 1, (function(e, t, n) {
          return [function(t) {
              var n = o(this),
                  r = null == t ? void 0 : t[e];
              return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
          }, function(e) {
              var r = n(t, e, this);
              if (r.done) return r.value;
              var o = i(e),
                  c = String(this),
                  u = o.lastIndex;
              a(u, 0) || (o.lastIndex = 0);
              var l = s(o, c);
              return a(o.lastIndex, u) || (o.lastIndex = u), null === l ? -1 : l.index
          }]
      }))
  }, function(e, t, n) {
      "use strict";
      var r, i = n(1),
          o = n(37).f,
          a = n(15),
          s = n(129),
          c = n(27),
          u = n(131),
          l = n(42),
          f = "".startsWith,
          h = Math.min,
          d = u("startsWith");
      i({
          target: "String",
          proto: !0,
          forced: !!(l || d || (r = o(String.prototype, "startsWith"), !r || r.writable)) && !d
      }, {
          startsWith: function(e) {
              var t = String(c(this));
              s(e);
              var n = a(h(arguments.length > 1 ? arguments[1] : void 0, t.length)),
                  r = String(e);
              return f ? f.call(t, r, n) : t.slice(n, n + r.length) === r
          }
      })
  }, function(e, t, n) {
      "use strict";
      var r, i = n(3),
          o = n(66),
          a = n(65),
          s = n(98),
          c = n(177),
          u = n(6),
          l = n(29).enforce,
          f = n(156),
          h = !i.ActiveXObject && "ActiveXObject" in i,
          d = Object.isExtensible,
          p = function(e) {
              return function() {
                  return e(this, arguments.length ? arguments[0] : void 0)
              }
          },
          v = e.exports = s("WeakMap", p, c);
      if (f && h) {
          r = c.getConstructor(p, "WeakMap", !0), a.REQUIRED = !0;
          var m = v.prototype,
              y = m.delete,
              g = m.has,
              b = m.get,
              w = m.set;
          o(m, {
              delete: function(e) {
                  if (u(e) && !d(e)) {
                      var t = l(this);
                      return t.frozen || (t.frozen = new r), y.call(this, e) || t.frozen.delete(e)
                  }
                  return y.call(this, e)
              },
              has: function(e) {
                  if (u(e) && !d(e)) {
                      var t = l(this);
                      return t.frozen || (t.frozen = new r), g.call(this, e) || t.frozen.has(e)
                  }
                  return g.call(this, e)
              },
              get: function(e) {
                  if (u(e) && !d(e)) {
                      var t = l(this);
                      return t.frozen || (t.frozen = new r), g.call(this, e) ? b.call(this, e) : t.frozen.get(e)
                  }
                  return b.call(this, e)
              },
              set: function(e, t) {
                  if (u(e) && !d(e)) {
                      var n = l(this);
                      n.frozen || (n.frozen = new r), g.call(this, e) ? w.call(this, e, t) : n.frozen.set(e, t)
                  } else w.call(this, e, t);
                  return this
              }
          })
      }
  }, function(e, t, n) {
      var r = n(159),
          i = n(120).concat("length", "prototype");
      t.f = Object.getOwnPropertyNames || function(e) {
          return r(e, i)
      }
  }, function(e, t, n) {
      var r = n(67),
          i = n(6),
          o = n(10),
          a = n(16).f,
          s = n(86),
          c = n(148),
          u = s("meta"),
          l = 0,
          f = Object.isExtensible || function() {
              return !0
          },
          h = function(e) {
              a(e, u, {
                  value: {
                      objectID: "O" + ++l,
                      weakData: {}
                  }
              })
          },
          d = e.exports = {
              REQUIRED: !1,
              fastKey: function(e, t) {
                  if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                  if (!o(e, u)) {
                      if (!f(e)) return "F";
                      if (!t) return "E";
                      h(e)
                  }
                  return e[u].objectID
              },
              getWeakData: function(e, t) {
                  if (!o(e, u)) {
                      if (!f(e)) return !0;
                      if (!t) return !1;
                      h(e)
                  }
                  return e[u].weakData
              },
              onFreeze: function(e) {
                  return c && d.REQUIRED && f(e) && !o(e, u) && h(e), e
              }
          };
      r[u] = !0
  }, function(e, t, n) {
      var r = n(22);
      e.exports = function(e, t, n) {
          for (var i in t) r(e, i, t[i], n);
          return e
      }
  }, function(e, t) {
      e.exports = {}
  }, function(e, t, n) {
      var r = n(2),
          i = /#|\.prototype\./,
          o = function(e, t) {
              var n = s[a(e)];
              return n == u || n != c && ("function" == typeof t ? r(t) : !!t)
          },
          a = o.normalize = function(e) {
              return String(e).replace(i, ".").toLowerCase()
          },
          s = o.data = {},
          c = o.NATIVE = "N",
          u = o.POLYFILL = "P";
      e.exports = o
  }, function(e, t, n) {
      var r = n(159),
          i = n(120);
      e.exports = Object.keys || function(e) {
          return r(e, i)
      }
  }, function(e, t, n) {
      var r = n(45);
      e.exports = Array.isArray || function(e) {
          return "Array" == r(e)
      }
  }, function(e, t, n) {
      var r = n(2),
          i = n(4),
          o = n(83),
          a = i("species");
      e.exports = function(e) {
          return o >= 51 || !r((function() {
              var t = [];
              return (t.constructor = {})[a] = function() {
                  return {
                      foo: 1
                  }
              }, 1 !== t[e](Boolean).foo
          }))
      }
  }, function(e, t) {
      e.exports = {}
  }, function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return $
      })), n.d(t, "b", (function() {
          return R
      })), n.d(t, "c", (function() {
          return H
      }));
      n(26), n(31), n(19), n(20), n(8), n(9), n(11), n(63), n(12), n(43), n(44), n(50), n(52), n(17), n(60), n(33), n(24), n(114), n(77), n(109), n(30), n(25), n(35), n(23), n(36), n(34), n(104), n(74);
      var r = n(40);

      function i(e, t, n) {
          return (i = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
              var r = function(e, t) {
                  for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = m(e)););
                  return e
              }(e, t);
              if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, t);
                  return i.get ? i.get.call(n) : i.value
              }
          })(e, t, n || e)
      }

      function o(e) {
          return function(e) {
              if (Array.isArray(e)) return b(e)
          }(e) || function(e) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
          }(e) || g(e) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
      }

      function a(e) {
          return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          } : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
      }

      function s(e, t, n, r, i, o, a) {
          try {
              var s = e[o](a),
                  c = s.value
          } catch (e) {
              return void n(e)
          }
          s.done ? t(c) : Promise.resolve(c).then(r, i)
      }

      function c(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
              constructor: {
                  value: e,
                  writable: !0,
                  configurable: !0
              }
          }), t && v(e, t)
      }

      function u(e) {
          var t = p();
          return function() {
              var n, r = m(e);
              if (t) {
                  var i = m(this).constructor;
                  n = Reflect.construct(r, arguments, i)
              } else n = r.apply(this, arguments);
              return l(this, n)
          }
      }

      function l(e, t) {
          return !t || "object" !== a(t) && "function" != typeof t ? f(e) : t
      }

      function f(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }

      function h(e) {
          var t = "function" == typeof Map ? new Map : void 0;
          return (h = function(e) {
              if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
              var n;
              if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
              if (void 0 !== t) {
                  if (t.has(e)) return t.get(e);
                  t.set(e, r)
              }

              function r() {
                  return d(e, arguments, m(this).constructor)
              }
              return r.prototype = Object.create(e.prototype, {
                  constructor: {
                      value: r,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                  }
              }), v(r, e)
          })(e)
      }

      function d(e, t, n) {
          return (d = p() ? Reflect.construct : function(e, t, n) {
              var r = [null];
              r.push.apply(r, t);
              var i = new(Function.bind.apply(e, r));
              return n && v(i, n.prototype), i
          }).apply(null, arguments)
      }

      function p() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
              return !1
          }
      }

      function v(e, t) {
          return (v = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t, e
          })(e, t)
      }

      function m(e) {
          return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
      }

      function y(e, t) {
          var n;
          if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
              if (Array.isArray(e) || (n = g(e)) || t && e && "number" == typeof e.length) {
                  n && (e = n);
                  var r = 0,
                      i = function() {};
                  return {
                      s: i,
                      n: function() {
                          return r >= e.length ? {
                              done: !0
                          } : {
                              done: !1,
                              value: e[r++]
                          }
                      },
                      e: function(e) {
                          throw e
                      },
                      f: i
                  }
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }
          var o, a = !0,
              s = !1;
          return {
              s: function() {
                  n = e[Symbol.iterator]()
              },
              n: function() {
                  var e = n.next();
                  return a = e.done, e
              },
              e: function(e) {
                  s = !0, o = e
              },
              f: function() {
                  try {
                      a || null == n.return || n.return()
                  } finally {
                      if (s) throw o
                  }
              }
          }
      }

      function g(e, t) {
          if (e) {
              if ("string" == typeof e) return b(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? b(e, t) : void 0
          }
      }

      function b(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r
      }

      function w(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function k(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
      }

      function S(e, t, n) {
          return t && k(e.prototype, t), n && k(e, n), e
      }
      var x, A, _, E = window,
          O = E.ShadowRoot && (void 0 === E.ShadyCSS || E.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
          C = Symbol(),
          P = new WeakMap,
          I = function() {
              function e(t, n, r) {
                  if (w(this, e), this._$cssResult$ = !0, r !== C) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                  this.cssText = t, this.t = n
              }
              return S(e, [{
                  key: "styleSheet",
                  get: function() {
                      var e = this.o,
                          t = this.t;
                      if (O && void 0 === e) {
                          var n = void 0 !== t && 1 === t.length;
                          n && (e = P.get(t)), void 0 === e && ((this.o = e = new CSSStyleSheet).replaceSync(this.cssText), n && P.set(t, e))
                      }
                      return e
                  }
              }, {
                  key: "toString",
                  value: function() {
                      return this.cssText
                  }
              }]), e
          }(),
          R = function(e) {
              return new I("string" == typeof e ? e : e + "", void 0, C)
          },
          $ = function(e) {
              for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
              var i = 1 === e.length ? e[0] : n.reduce((function(t, n, r) {
                  return t + function(e) {
                      if (!0 === e._$cssResult$) return e.cssText;
                      if ("number" == typeof e) return e;
                      throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
                  }(n) + e[r + 1]
              }), e[0]);
              return new I(i, e, C)
          },
          L = O ? function(e) {
              return e
          } : function(e) {
              return e instanceof CSSStyleSheet ? function(e) {
                  var t, n = "",
                      r = y(e.cssRules);
                  try {
                      for (r.s(); !(t = r.n()).done;) {
                          n += t.value.cssText
                      }
                  } catch (e) {
                      r.e(e)
                  } finally {
                      r.f()
                  }
                  return R(n)
              }(e) : e
          },
          T = window,
          j = T.trustedTypes,
          M = j ? j.emptyScript : "",
          U = T.reactiveElementPolyfillSupport,
          N = {
              toAttribute: function(e, t) {
                  switch (t) {
                      case Boolean:
                          e = e ? M : null;
                          break;
                      case Object:
                      case Array:
                          e = null == e ? e : JSON.stringify(e)
                  }
                  return e
              },
              fromAttribute: function(e, t) {
                  var n = e;
                  switch (t) {
                      case Boolean:
                          n = null !== e;
                          break;
                      case Number:
                          n = null === e ? null : Number(e);
                          break;
                      case Object:
                      case Array:
                          try {
                              n = JSON.parse(e)
                          } catch (e) {
                              n = null
                          }
                  }
                  return n
              }
          },
          B = function(e, t) {
              return t !== e && (t == t || e == e)
          },
          z = {
              attribute: !0,
              type: String,
              converter: N,
              reflect: !1,
              hasChanged: B
          },
          D = function(e) {
              c(i, e);
              var t, n, r = u(i);

              function i() {
                  var e;
                  return w(this, i), (e = r.call(this))._$Ei = new Map, e.isUpdatePending = !1, e.hasUpdated = !1, e._$El = null, e.u(), e
              }
              return S(i, [{
                  key: "u",
                  value: function() {
                      var e, t = this;
                      this._$E_ = new Promise((function(e) {
                          return t.enableUpdating = e
                      })), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (e = this.constructor.h) || void 0 === e || e.forEach((function(e) {
                          return e(t)
                      }))
                  }
              }, {
                  key: "addController",
                  value: function(e) {
                      var t, n;
                      (null !== (t = this._$ES) && void 0 !== t ? t : this._$ES = []).push(e), void 0 !== this.renderRoot && this.isConnected && (null === (n = e.hostConnected) || void 0 === n || n.call(e))
                  }
              }, {
                  key: "removeController",
                  value: function(e) {
                      var t;
                      null === (t = this._$ES) || void 0 === t || t.splice(this._$ES.indexOf(e) >>> 0, 1)
                  }
              }, {
                  key: "_$Eg",
                  value: function() {
                      var e = this;
                      this.constructor.elementProperties.forEach((function(t, n) {
                          e.hasOwnProperty(n) && (e._$Ei.set(n, e[n]), delete e[n])
                      }))
                  }
              }, {
                  key: "createRenderRoot",
                  value: function() {
                      var e, t = null !== (e = this.shadowRoot) && void 0 !== e ? e : this.attachShadow(this.constructor.shadowRootOptions);
                      return function(e, t) {
                          O ? e.adoptedStyleSheets = t.map((function(e) {
                              return e instanceof CSSStyleSheet ? e : e.styleSheet
                          })) : t.forEach((function(t) {
                              var n = document.createElement("style"),
                                  r = E.litNonce;
                              void 0 !== r && n.setAttribute("nonce", r), n.textContent = t.cssText, e.appendChild(n)
                          }))
                      }(t, this.constructor.elementStyles), t
                  }
              }, {
                  key: "connectedCallback",
                  value: function() {
                      var e;
                      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (e = this._$ES) || void 0 === e || e.forEach((function(e) {
                          var t;
                          return null === (t = e.hostConnected) || void 0 === t ? void 0 : t.call(e)
                      }))
                  }
              }, {
                  key: "enableUpdating",
                  value: function(e) {}
              }, {
                  key: "disconnectedCallback",
                  value: function() {
                      var e;
                      null === (e = this._$ES) || void 0 === e || e.forEach((function(e) {
                          var t;
                          return null === (t = e.hostDisconnected) || void 0 === t ? void 0 : t.call(e)
                      }))
                  }
              }, {
                  key: "attributeChangedCallback",
                  value: function(e, t, n) {
                      this._$AK(e, n)
                  }
              }, {
                  key: "_$EO",
                  value: function(e, t) {
                      var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : z,
                          i = this.constructor._$Ep(e, r);
                      if (void 0 !== i && !0 === r.reflect) {
                          var o = (void 0 !== (null === (n = r.converter) || void 0 === n ? void 0 : n.toAttribute) ? r.converter : N).toAttribute(t, r.type);
                          this._$El = e, null == o ? this.removeAttribute(i) : this.setAttribute(i, o), this._$El = null
                      }
                  }
              }, {
                  key: "_$AK",
                  value: function(e, t) {
                      var n, r = this.constructor,
                          i = r._$Ev.get(e);
                      if (void 0 !== i && this._$El !== i) {
                          var o = r.getPropertyOptions(i),
                              a = "function" == typeof o.converter ? {
                                  fromAttribute: o.converter
                              } : void 0 !== (null === (n = o.converter) || void 0 === n ? void 0 : n.fromAttribute) ? o.converter : N;
                          this._$El = i, this[i] = a.fromAttribute(t, o.type), this._$El = null
                      }
                  }
              }, {
                  key: "requestUpdate",
                  value: function(e, t, n) {
                      var r = !0;
                      void 0 !== e && (((n = n || this.constructor.getPropertyOptions(e)).hasChanged || B)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), !0 === n.reflect && this._$El !== e && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(e, n))) : r = !1), !this.isUpdatePending && r && (this._$E_ = this._$Ej())
                  }
              }, {
                  key: "_$Ej",
                  value: (t = regeneratorRuntime.mark((function e() {
                      var t;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return this.isUpdatePending = !0, e.prev = 1, e.next = 4, this._$E_;
                              case 4:
                                  e.next = 9;
                                  break;
                              case 6:
                                  e.prev = 6, e.t0 = e.catch(1), Promise.reject(e.t0);
                              case 9:
                                  if (t = this.scheduleUpdate(), e.t1 = null != t, !e.t1) {
                                      e.next = 14;
                                      break
                                  }
                                  return e.next = 14, t;
                              case 14:
                                  return e.abrupt("return", !this.isUpdatePending);
                              case 15:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this, [
                          [1, 6]
                      ])
                  })), n = function() {
                      var e = this,
                          n = arguments;
                      return new Promise((function(r, i) {
                          var o = t.apply(e, n);

                          function a(e) {
                              s(o, r, i, a, c, "next", e)
                          }

                          function c(e) {
                              s(o, r, i, a, c, "throw", e)
                          }
                          a(void 0)
                      }))
                  }, function() {
                      return n.apply(this, arguments)
                  })
              }, {
                  key: "scheduleUpdate",
                  value: function() {
                      return this.performUpdate()
                  }
              }, {
                  key: "performUpdate",
                  value: function() {
                      var e, t = this;
                      if (this.isUpdatePending) {
                          this.hasUpdated, this._$Ei && (this._$Ei.forEach((function(e, n) {
                              return t[n] = e
                          })), this._$Ei = void 0);
                          var n = !1,
                              r = this._$AL;
                          try {
                              (n = this.shouldUpdate(r)) ? (this.willUpdate(r), null === (e = this._$ES) || void 0 === e || e.forEach((function(e) {
                                  var t;
                                  return null === (t = e.hostUpdate) || void 0 === t ? void 0 : t.call(e)
                              })), this.update(r)) : this._$Ek()
                          } catch (e) {
                              throw n = !1, this._$Ek(), e
                          }
                          n && this._$AE(r)
                      }
                  }
              }, {
                  key: "willUpdate",
                  value: function(e) {}
              }, {
                  key: "_$AE",
                  value: function(e) {
                      var t;
                      null === (t = this._$ES) || void 0 === t || t.forEach((function(e) {
                          var t;
                          return null === (t = e.hostUpdated) || void 0 === t ? void 0 : t.call(e)
                      })), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e)
                  }
              }, {
                  key: "_$Ek",
                  value: function() {
                      this._$AL = new Map, this.isUpdatePending = !1
                  }
              }, {
                  key: "updateComplete",
                  get: function() {
                      return this.getUpdateComplete()
                  }
              }, {
                  key: "getUpdateComplete",
                  value: function() {
                      return this._$E_
                  }
              }, {
                  key: "shouldUpdate",
                  value: function(e) {
                      return !0
                  }
              }, {
                  key: "update",
                  value: function(e) {
                      var t = this;
                      void 0 !== this._$EC && (this._$EC.forEach((function(e, n) {
                          return t._$EO(n, t[n], e)
                      })), this._$EC = void 0), this._$Ek()
                  }
              }, {
                  key: "updated",
                  value: function(e) {}
              }, {
                  key: "firstUpdated",
                  value: function(e) {}
              }], [{
                  key: "addInitializer",
                  value: function(e) {
                      var t;
                      this.finalize(), (null !== (t = this.h) && void 0 !== t ? t : this.h = []).push(e)
                  }
              }, {
                  key: "observedAttributes",
                  get: function() {
                      var e = this;
                      this.finalize();
                      var t = [];
                      return this.elementProperties.forEach((function(n, r) {
                          var i = e._$Ep(r, n);
                          void 0 !== i && (e._$Ev.set(i, r), t.push(i))
                      })), t
                  }
              }, {
                  key: "createProperty",
                  value: function(e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : z;
                      if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
                          var n = "symbol" == a(e) ? Symbol() : "__" + e,
                              r = this.getPropertyDescriptor(e, n, t);
                          void 0 !== r && Object.defineProperty(this.prototype, e, r)
                      }
                  }
              }, {
                  key: "getPropertyDescriptor",
                  value: function(e, t, n) {
                      return {
                          get: function() {
                              return this[t]
                          },
                          set: function(r) {
                              var i = this[e];
                              this[t] = r, this.requestUpdate(e, i, n)
                          },
                          configurable: !0,
                          enumerable: !0
                      }
                  }
              }, {
                  key: "getPropertyOptions",
                  value: function(e) {
                      return this.elementProperties.get(e) || z
                  }
              }, {
                  key: "finalize",
                  value: function() {
                      if (this.hasOwnProperty("finalized")) return !1;
                      this.finalized = !0;
                      var e = Object.getPrototypeOf(this);
                      if (e.finalize(), void 0 !== e.h && (this.h = o(e.h)), this.elementProperties = new Map(e.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
                          var t, n = this.properties,
                              r = y([].concat(o(Object.getOwnPropertyNames(n)), o(Object.getOwnPropertySymbols(n))));
                          try {
                              for (r.s(); !(t = r.n()).done;) {
                                  var i = t.value;
                                  this.createProperty(i, n[i])
                              }
                          } catch (e) {
                              r.e(e)
                          } finally {
                              r.f()
                          }
                      }
                      return this.elementStyles = this.finalizeStyles(this.styles), !0
                  }
              }, {
                  key: "finalizeStyles",
                  value: function(e) {
                      var t = [];
                      if (Array.isArray(e)) {
                          var n, r = y(new Set(e.flat(1 / 0).reverse()));
                          try {
                              for (r.s(); !(n = r.n()).done;) {
                                  var i = n.value;
                                  t.unshift(L(i))
                              }
                          } catch (e) {
                              r.e(e)
                          } finally {
                              r.f()
                          }
                      } else void 0 !== e && t.push(L(e));
                      return t
                  }
              }, {
                  key: "_$Ep",
                  value: function(e, t) {
                      var n = t.attribute;
                      return !1 === n ? void 0 : "string" == typeof n ? n : "string" == typeof e ? e.toLowerCase() : void 0
                  }
              }]), i
          }(h(HTMLElement));
      D.finalized = !0, D.elementProperties = new Map, D.elementStyles = [], D.shadowRootOptions = {
          mode: "open"
      }, null == U || U({
          ReactiveElement: D
      }), (null !== (x = T.reactiveElementVersions) && void 0 !== x ? x : T.reactiveElementVersions = []).push("1.6.1");
      var H = function(e) {
          c(n, e);
          var t = u(n);

          function n() {
              var e;
              return w(this, n), (e = t.apply(this, arguments)).renderOptions = {
                  host: f(e)
              }, e._$Do = void 0, e
          }
          return S(n, [{
              key: "createRenderRoot",
              value: function() {
                  var e, t, r = i(m(n.prototype), "createRenderRoot", this).call(this);
                  return null !== (e = (t = this.renderOptions).renderBefore) && void 0 !== e || (t.renderBefore = r.firstChild), r
              }
          }, {
              key: "update",
              value: function(e) {
                  var t = this.render();
                  this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), i(m(n.prototype), "update", this).call(this, e), this._$Do = Object(r.b)(t, this.renderRoot, this.renderOptions)
              }
          }, {
              key: "connectedCallback",
              value: function() {
                  var e;
                  i(m(n.prototype), "connectedCallback", this).call(this), null === (e = this._$Do) || void 0 === e || e.setConnected(!0)
              }
          }, {
              key: "disconnectedCallback",
              value: function() {
                  var e;
                  i(m(n.prototype), "disconnectedCallback", this).call(this), null === (e = this._$Do) || void 0 === e || e.setConnected(!1)
              }
          }, {
              key: "render",
              value: function() {
                  return r.c
              }
          }]), n
      }(D);
      H.finalized = !0, H._$litElement$ = !0, null === (A = globalThis.litElementHydrateSupport) || void 0 === A || A.call(globalThis, {
          LitElement: H
      });
      var F = globalThis.litElementPolyfillSupport;
      null == F || F({
          LitElement: H
      }), (null !== (_ = globalThis.litElementVersions) && void 0 !== _ ? _ : globalThis.litElementVersions = []).push("3.3.3")
  }, function(e, t, n) {
      var r = n(1),
          i = n(2),
          o = n(32),
          a = n(37).f,
          s = n(14),
          c = i((function() {
              a(1)
          }));
      r({
          target: "Object",
          stat: !0,
          forced: !s || c,
          sham: !s
      }, {
          getOwnPropertyDescriptor: function(e, t) {
              return a(o(e), t)
          }
      })
  }, function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return i
      })), n.d(t, "b", (function() {
          return a
      })), n.d(t, "c", (function() {
          return o
      }));
      n(74), n(8), n(17), n(19), n(20), n(23), n(9), n(11), n(12);

      function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          } : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
      }

      function i(e, t, n, i) {
          var o, a = arguments.length,
              s = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
          if ("object" === ("undefined" == typeof Reflect ? "undefined" : r(Reflect)) && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i);
          else
              for (var c = e.length - 1; c >= 0; c--)(o = e[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(t, n, s) : o(t, n)) || s);
          return a > 3 && s && Object.defineProperty(t, n, s), s
      }

      function o(e, t) {
          if ("object" === ("undefined" == typeof Reflect ? "undefined" : r(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
      }

      function a(e, t, n, r) {
          return new(n || (n = Promise))((function(i, o) {
              function a(e) {
                  try {
                      c(r.next(e))
                  } catch (e) {
                      o(e)
                  }
              }

              function s(e) {
                  try {
                      c(r.throw(e))
                  } catch (e) {
                      o(e)
                  }
              }

              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                      e(t)
                  }))).then(a, s)
              }
              c((r = r.apply(e, t || [])).next())
          }))
      }
  }, function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return i
      }));
      n(39), n(19), n(20), n(8);
      var r = Object.assign;

      function i(e) {
          return function(t, n) {
              return void 0 !== n ? (i = e, o = n, void t.constructor.createProperty(o, i)) : function(e, t) {
                  return "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? r(r({}, t), {
                      finisher: function(n) {
                          n.createProperty(t.key, e)
                      }
                  }) : {
                      kind: "field",
                      key: Symbol(),
                      placement: "own",
                      descriptor: {},
                      originalKey: t.key,
                      initializer: function() {
                          "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
                      },
                      finisher: function(n) {
                          n.createProperty(t.key, e)
                      }
                  }
              }(e, t);
              var i, o
          }
      }
  }, function(e, t, n) {
      "use strict";
      var r = n(98),
          i = n(178);
      e.exports = r("Set", (function(e) {
          return function() {
              return e(this, arguments.length ? arguments[0] : void 0)
          }
      }), i)
  }, function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return a
      })), n.d(t, "b", (function() {
          return o
      }));
      n(39), n(19), n(20), n(8), n(23), n(9), n(11), n(12);

      function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          } : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
      }
      var i = Object.assign,
          o = function(e) {
              var t = e.finisher,
                  n = e.descriptor;
              return function(e, r) {
                  var o;
                  if (void 0 === r) {
                      var a = null !== (o = e.originalKey) && void 0 !== o ? o : e.key,
                          s = null != n ? {
                              kind: "method",
                              placement: "prototype",
                              key: a,
                              descriptor: n(e.key)
                          } : i(i({}, e), {
                              key: a
                          });
                      return null != t && (s.finisher = function(e) {
                          t(e, a)
                      }), s
                  }
                  var c = e.constructor;
                  void 0 !== n && Object.defineProperty(e, r, n(r)), null == t || t(c, r)
              }
          };

      function a(e, t) {
          return o({
              descriptor: function(n) {
                  var i = {
                      get: function() {
                          var t, n;
                          return null !== (n = null === (t = this.renderRoot) || void 0 === t ? void 0 : t.querySelector(e)) && void 0 !== n ? n : null
                      },
                      enumerable: !0,
                      configurable: !0
                  };
                  if (t) {
                      var o = "symbol" == r(n) ? Symbol() : "__" + n;
                      i.get = function() {
                          var t, n;
                          return void 0 === this[o] && (this[o] = null !== (n = null === (t = this.renderRoot) || void 0 === t ? void 0 : t.querySelector(e)) && void 0 !== n ? n : null), this[o]
                      }
                  }
                  return i
              }
          })
      }
  }, function(e, t, n) {
      "use strict";
      var r, i = n(1),
          o = n(37).f,
          a = n(15),
          s = n(129),
          c = n(27),
          u = n(131),
          l = n(42),
          f = "".endsWith,
          h = Math.min,
          d = u("endsWith");
      i({
          target: "String",
          proto: !0,
          forced: !!(l || d || (r = o(String.prototype, "endsWith"), !r || r.writable)) && !d
      }, {
          endsWith: function(e) {
              var t = String(c(this));
              s(e);
              var n = arguments.length > 1 ? arguments[1] : void 0,
                  r = a(t.length),
                  i = void 0 === n ? r : h(a(n), r),
                  o = String(e);
              return f ? f.call(t, o, i) : t.slice(i - o.length, i) === o
          }
      })
  }, function(e, t, n) {
      var r = n(14),
          i = n(3),
          o = n(68),
          a = n(111),
          s = n(16).f,
          c = n(64).f,
          u = n(130),
          l = n(127),
          f = n(128),
          h = n(22),
          d = n(2),
          p = n(29).enforce,
          v = n(113),
          m = n(4)("match"),
          y = i.RegExp,
          g = y.prototype,
          b = /a/g,
          w = /a/g,
          k = new y(b) !== b,
          S = f.UNSUPPORTED_Y;
      if (r && o("RegExp", !k || S || d((function() {
              return w[m] = !1, y(b) != b || y(w) == w || "/a/i" != y(b, "i")
          })))) {
          for (var x = function(e, t) {
                  var n, r = this instanceof x,
                      i = u(e),
                      o = void 0 === t;
                  if (!r && i && e.constructor === x && o) return e;
                  k ? i && !o && (e = e.source) : e instanceof x && (o && (t = l.call(e)), e = e.source), S && (n = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, ""));
                  var s = a(k ? new y(e, t) : y(e, t), r ? this : g, x);
                  S && n && (p(s).sticky = !0);
                  return s
              }, A = function(e) {
                  e in x || s(x, e, {
                      configurable: !0,
                      get: function() {
                          return y[e]
                      },
                      set: function(t) {
                          y[e] = t
                      }
                  })
              }, _ = c(y), E = 0; _.length > E;) A(_[E++]);
          g.constructor = x, x.prototype = g, h(i, "RegExp", x)
      }
      v("RegExp")
  }, function(e, t, n) {
      var r = n(54),
          i = Math.max,
          o = Math.min;
      e.exports = function(e, t) {
          var n = r(e);
          return n < 0 ? i(n + t, 0) : o(n, t)
      }
  }, function(e, t, n) {
      var r = n(10),
          i = n(21),
          o = n(92),
          a = n(160),
          s = o("IE_PROTO"),
          c = Object.prototype;
      e.exports = a ? Object.getPrototypeOf : function(e) {
          return e = i(e), r(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? c : null
      }
  }, function(e, t, n) {
      var r, i, o = n(3),
          a = n(106),
          s = o.process,
          c = s && s.versions,
          u = c && c.v8;
      u ? i = (r = u.split("."))[0] < 4 ? 1 : r[0] + r[1] : a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (i = r[1]), e.exports = i && +i
  }, function(e, t, n) {
      var r = n(4),
          i = n(46),
          o = n(16),
          a = r("unscopables"),
          s = Array.prototype;
      null == s[a] && o.f(s, a, {
          configurable: !0,
          value: i(null)
      }), e.exports = function(e) {
          s[a][e] = !0
      }
  }, function(e, t, n) {
      var r = n(2),
          i = n(45),
          o = "".split;
      e.exports = r((function() {
          return !Object("z").propertyIsEnumerable(0)
      })) ? function(e) {
          return "String" == i(e) ? o.call(e, "") : Object(e)
      } : Object
  }, function(e, t) {
      var n = 0,
          r = Math.random();
      e.exports = function(e) {
          return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36)
      }
  }, function(e, t, n) {
      var r = n(6),
          i = n(70),
          o = n(4)("species");
      e.exports = function(e, t) {
          var n;
          return i(e) && ("function" != typeof(n = e.constructor) || n !== Array && !i(n.prototype) ? r(n) && null === (n = n[o]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
      }
  }, function(e, t, n) {
      "use strict";
      var r = n(58),
          i = n(16),
          o = n(57);
      e.exports = function(e, t, n) {
          var a = r(t);
          a in e ? i.f(e, a, o(0, n)) : e[a] = n
      }
  }, function(e, t, n) {
      var r = n(108),
          i = n(72),
          o = n(4)("iterator");
      e.exports = function(e) {
          if (null != e) return e[o] || e["@@iterator"] || i[r(e)]
      }
  }, function(e, t, n) {
      var r = n(7),
          i = n(150),
          o = n(15),
          a = n(47),
          s = n(89),
          c = n(170),
          u = function(e, t) {
              this.stopped = e, this.result = t
          };
      e.exports = function(e, t, n) {
          var l, f, h, d, p, v, m, y = n && n.that,
              g = !(!n || !n.AS_ENTRIES),
              b = !(!n || !n.IS_ITERATOR),
              w = !(!n || !n.INTERRUPTED),
              k = a(t, y, 1 + g + w),
              S = function(e) {
                  return l && c(l), new u(!0, e)
              },
              x = function(e) {
                  return g ? (r(e), w ? k(e[0], e[1], S) : k(e[0], e[1])) : w ? k(e, S) : k(e)
              };
          if (b) l = e;
          else {
              if ("function" != typeof(f = s(e))) throw TypeError("Target is not iterable");
              if (i(f)) {
                  for (h = 0, d = o(e.length); d > h; h++)
                      if ((p = x(e[h])) && p instanceof u) return p;
                  return new u(!1)
              }
              l = f.call(e)
          }
          for (v = l.next; !(m = v.call(l)).done;) {
              try {
                  p = x(m.value)
              } catch (e) {
                  throw c(l), e
              }
              if ("object" == typeof p && p && p instanceof u) return p
          }
          return new u(!1)
      }
  }, function(e, t, n) {
      "use strict";
      var r = {}.propertyIsEnumerable,
          i = Object.getOwnPropertyDescriptor,
          o = i && !r.call({
              1: 2
          }, 1);
      t.f = o ? function(e) {
          var t = i(this, e);
          return !!t && t.enumerable
      } : r
  }, function(e, t, n) {
      var r = n(93),
          i = n(86),
          o = r("keys");
      e.exports = function(e) {
          return o[e] || (o[e] = i(e))
      }
  }, function(e, t, n) {
      var r = n(42),
          i = n(119);
      (e.exports = function(e, t) {
          return i[e] || (i[e] = void 0 !== t ? t : {})
      })("versions", []).push({
          version: "3.14.0",
          mode: r ? "pure" : "global",
          copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
      })
  }, function(e, t, n) {
      var r = n(158),
          i = n(10),
          o = n(166),
          a = n(16).f;
      e.exports = function(e) {
          var t = r.Symbol || (r.Symbol = {});
          i(t, e) || a(t, e, {
              value: o.f(e)
          })
      }
  }, function(e, t, n) {
      "use strict";
      var r, i, o = n(127),
          a = n(128),
          s = n(93),
          c = RegExp.prototype.exec,
          u = s("native-string-replace", String.prototype.replace),
          l = c,
          f = (r = /a/, i = /b*/g, c.call(r, "a"), c.call(i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex),
          h = a.UNSUPPORTED_Y || a.BROKEN_CARET,
          d = void 0 !== /()??/.exec("")[1];
      (f || d || h) && (l = function(e) {
          var t, n, r, i, a = this,
              s = h && a.sticky,
              l = o.call(a),
              p = a.source,
              v = 0,
              m = e;
          return s && (-1 === (l = l.replace("y", "")).indexOf("g") && (l += "g"), m = String(e).slice(a.lastIndex), a.lastIndex > 0 && (!a.multiline || a.multiline && "\n" !== e[a.lastIndex - 1]) && (p = "(?: " + p + ")", m = " " + m, v++), n = new RegExp("^(?:" + p + ")", l)), d && (n = new RegExp("^" + p + "$(?!\\s)", l)), f && (t = a.lastIndex), r = c.call(s ? n : a, m), s ? r ? (r.input = r.input.slice(v), r[0] = r[0].slice(v), r.index = a.lastIndex, a.lastIndex += r[0].length) : a.lastIndex = 0 : f && r && (a.lastIndex = a.global ? r.index + r[0].length : t), d && r && r.length > 1 && u.call(r[0], n, (function() {
              for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0)
          })), r
      }), e.exports = l
  }, function(e, t, n) {
      "use strict";
      n(31);
      var r = n(22),
          i = n(95),
          o = n(2),
          a = n(4),
          s = n(28),
          c = a("species"),
          u = RegExp.prototype,
          l = !o((function() {
              var e = /./;
              return e.exec = function() {
                  var e = [];
                  return e.groups = {
                      a: "7"
                  }, e
              }, "7" !== "".replace(e, "$<a>")
          })),
          f = "$0" === "a".replace(/./, "$0"),
          h = a("replace"),
          d = !!/./ [h] && "" === /./ [h]("a", "$0"),
          p = !o((function() {
              var e = /(?:)/,
                  t = e.exec;
              e.exec = function() {
                  return t.apply(this, arguments)
              };
              var n = "ab".split(e);
              return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
          }));
      e.exports = function(e, t, n, h) {
          var v = a(e),
              m = !o((function() {
                  var t = {};
                  return t[v] = function() {
                      return 7
                  }, 7 != "" [e](t)
              })),
              y = m && !o((function() {
                  var t = !1,
                      n = /a/;
                  return "split" === e && ((n = {}).constructor = {}, n.constructor[c] = function() {
                      return n
                  }, n.flags = "", n[v] = /./ [v]), n.exec = function() {
                      return t = !0, null
                  }, n[v](""), !t
              }));
          if (!m || !y || "replace" === e && (!l || !f || d) || "split" === e && !p) {
              var g = /./ [v],
                  b = n(v, "" [e], (function(e, t, n, r, o) {
                      var a = t.exec;
                      return a === i || a === u.exec ? m && !o ? {
                          done: !0,
                          value: g.call(t, n, r)
                      } : {
                          done: !0,
                          value: e.call(n, t, r)
                      } : {
                          done: !1
                      }
                  }), {
                      REPLACE_KEEPS_$0: f,
                      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: d
                  }),
                  w = b[0],
                  k = b[1];
              r(String.prototype, e, w), r(u, v, 2 == t ? function(e, t) {
                  return k.call(e, this, t)
              } : function(e) {
                  return k.call(e, this)
              })
          }
          h && s(u[v], "sham", !0)
      }
  }, function(e, t, n) {
      var r = n(45),
          i = n(95);
      e.exports = function(e, t) {
          var n = e.exec;
          if ("function" == typeof n) {
              var o = n.call(e, t);
              if ("object" != typeof o) throw TypeError("RegExp exec method returned something other than an Object or null");
              return o
          }
          if ("RegExp" !== r(e)) throw TypeError("RegExp#exec called on incompatible receiver");
          return i.call(e, t)
      }
  }, function(e, t, n) {
      "use strict";
      var r = n(1),
          i = n(3),
          o = n(68),
          a = n(22),
          s = n(65),
          c = n(90),
          u = n(56),
          l = n(6),
          f = n(2),
          h = n(112),
          d = n(38),
          p = n(111);
      e.exports = function(e, t, n) {
          var v = -1 !== e.indexOf("Map"),
              m = -1 !== e.indexOf("Weak"),
              y = v ? "set" : "add",
              g = i[e],
              b = g && g.prototype,
              w = g,
              k = {},
              S = function(e) {
                  var t = b[e];
                  a(b, e, "add" == e ? function(e) {
                      return t.call(this, 0 === e ? 0 : e), this
                  } : "delete" == e ? function(e) {
                      return !(m && !l(e)) && t.call(this, 0 === e ? 0 : e)
                  } : "get" == e ? function(e) {
                      return m && !l(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                  } : "has" == e ? function(e) {
                      return !(m && !l(e)) && t.call(this, 0 === e ? 0 : e)
                  } : function(e, n) {
                      return t.call(this, 0 === e ? 0 : e, n), this
                  })
              };
          if (o(e, "function" != typeof g || !(m || b.forEach && !f((function() {
                  (new g).entries().next()
              }))))) w = n.getConstructor(t, e, v, y), s.REQUIRED = !0;
          else if (o(e, !0)) {
              var x = new w,
                  A = x[y](m ? {} : -0, 1) != x,
                  _ = f((function() {
                      x.has(1)
                  })),
                  E = h((function(e) {
                      new g(e)
                  })),
                  O = !m && f((function() {
                      for (var e = new g, t = 5; t--;) e[y](t, t);
                      return !e.has(-0)
                  }));
              E || ((w = t((function(t, n) {
                  u(t, w, e);
                  var r = p(new g, t, w);
                  return null != n && c(n, r[y], {
                      that: r,
                      AS_ENTRIES: v
                  }), r
              }))).prototype = b, b.constructor = w), (_ || O) && (S("delete"), S("has"), v && S("get")), (O || A) && S(y), m && b.clear && delete b.clear
          }
          return k[e] = w, r({
              global: !0,
              forced: w != g
          }, k), d(w, e), m || n.setStrong(w, e, v), w
      }
  }, function(e, t, n) {
      "use strict";
      var r = n(152);
      n.d(t, "a", (function() {
          return r.a
      }));
      n(75)
  }, function(e, t, n) {
      "use strict";
      var r = n(1),
          i = n(53).find,
          o = n(84),
          a = "find",
          s = !0;
      a in [] && Array(1).find((function() {
          s = !1
      })), r({
          target: "Array",
          proto: !0,
          forced: s
      }, {
          find: function(e) {
              return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
          }
      }), o(a)
  }, function(e, t, n) {
      "use strict";
      var r = n(96),
          i = n(7),
          o = n(15),
          a = n(54),
          s = n(27),
          c = n(132),
          u = n(209),
          l = n(97),
          f = Math.max,
          h = Math.min;
      r("replace", 2, (function(e, t, n, r) {
          var d = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
              p = r.REPLACE_KEEPS_$0,
              v = d ? "$" : "$0";
          return [function(n, r) {
              var i = s(this),
                  o = null == n ? void 0 : n[e];
              return void 0 !== o ? o.call(n, i, r) : t.call(String(i), n, r)
          }, function(e, r) {
              if (!d && p || "string" == typeof r && -1 === r.indexOf(v)) {
                  var s = n(t, e, this, r);
                  if (s.done) return s.value
              }
              var m = i(e),
                  y = String(this),
                  g = "function" == typeof r;
              g || (r = String(r));
              var b = m.global;
              if (b) {
                  var w = m.unicode;
                  m.lastIndex = 0
              }
              for (var k = [];;) {
                  var S = l(m, y);
                  if (null === S) break;
                  if (k.push(S), !b) break;
                  "" === String(S[0]) && (m.lastIndex = c(y, o(m.lastIndex), w))
              }
              for (var x, A = "", _ = 0, E = 0; E < k.length; E++) {
                  S = k[E];
                  for (var O = String(S[0]), C = f(h(a(S.index), y.length), 0), P = [], I = 1; I < S.length; I++) P.push(void 0 === (x = S[I]) ? x : String(x));
                  var R = S.groups;
                  if (g) {
                      var $ = [O].concat(P, C, y);
                      void 0 !== R && $.push(R);
                      var L = String(r.apply(void 0, $))
                  } else L = u(O, y, C, P, R, r);
                  C >= _ && (A += y.slice(_, C) + L, _ = C + O.length)
              }
              return A + y.slice(_)
          }]
      }))
  }, function(e, t, n) {
      "use strict";
      n(11);
      var r, i = n(1),
          o = n(14),
          a = n(176),
          s = n(3),
          c = n(161),
          u = n(22),
          l = n(56),
          f = n(10),
          h = n(163),
          d = n(169),
          p = n(124).codeAt,
          v = n(205),
          m = n(38),
          y = n(206),
          g = n(29),
          b = s.URL,
          w = y.URLSearchParams,
          k = y.getState,
          S = g.set,
          x = g.getterFor("URL"),
          A = Math.floor,
          _ = Math.pow,
          E = "Invalid scheme",
          O = "Invalid host",
          C = "Invalid port",
          P = /[A-Za-z]/,
          I = /[\d+-.A-Za-z]/,
          R = /\d/,
          $ = /^(0x|0X)/,
          L = /^[0-7]+$/,
          T = /^\d+$/,
          j = /^[\dA-Fa-f]+$/,
          M = /[\0\t\n\r #%/:?@[\\]]/,
          U = /[\0\t\n\r #/:?@[\\]]/,
          N = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
          B = /[\t\n\r]/g,
          z = function(e, t) {
              var n, r, i;
              if ("[" == t.charAt(0)) {
                  if ("]" != t.charAt(t.length - 1)) return O;
                  if (!(n = H(t.slice(1, -1)))) return O;
                  e.host = n
              } else if (Z(e)) {
                  if (t = v(t), M.test(t)) return O;
                  if (null === (n = D(t))) return O;
                  e.host = n
              } else {
                  if (U.test(t)) return O;
                  for (n = "", r = d(t), i = 0; i < r.length; i++) n += G(r[i], W);
                  e.host = n
              }
          },
          D = function(e) {
              var t, n, r, i, o, a, s, c = e.split(".");
              if (c.length && "" == c[c.length - 1] && c.pop(), (t = c.length) > 4) return e;
              for (n = [], r = 0; r < t; r++) {
                  if ("" == (i = c[r])) return e;
                  if (o = 10, i.length > 1 && "0" == i.charAt(0) && (o = $.test(i) ? 16 : 8, i = i.slice(8 == o ? 1 : 2)), "" === i) a = 0;
                  else {
                      if (!(10 == o ? T : 8 == o ? L : j).test(i)) return e;
                      a = parseInt(i, o)
                  }
                  n.push(a)
              }
              for (r = 0; r < t; r++)
                  if (a = n[r], r == t - 1) {
                      if (a >= _(256, 5 - t)) return null
                  } else if (a > 255) return null;
              for (s = n.pop(), r = 0; r < n.length; r++) s += n[r] * _(256, 3 - r);
              return s
          },
          H = function(e) {
              var t, n, r, i, o, a, s, c = [0, 0, 0, 0, 0, 0, 0, 0],
                  u = 0,
                  l = null,
                  f = 0,
                  h = function() {
                      return e.charAt(f)
                  };
              if (":" == h()) {
                  if (":" != e.charAt(1)) return;
                  f += 2, l = ++u
              }
              for (; h();) {
                  if (8 == u) return;
                  if (":" != h()) {
                      for (t = n = 0; n < 4 && j.test(h());) t = 16 * t + parseInt(h(), 16), f++, n++;
                      if ("." == h()) {
                          if (0 == n) return;
                          if (f -= n, u > 6) return;
                          for (r = 0; h();) {
                              if (i = null, r > 0) {
                                  if (!("." == h() && r < 4)) return;
                                  f++
                              }
                              if (!R.test(h())) return;
                              for (; R.test(h());) {
                                  if (o = parseInt(h(), 10), null === i) i = o;
                                  else {
                                      if (0 == i) return;
                                      i = 10 * i + o
                                  }
                                  if (i > 255) return;
                                  f++
                              }
                              c[u] = 256 * c[u] + i, 2 != ++r && 4 != r || u++
                          }
                          if (4 != r) return;
                          break
                      }
                      if (":" == h()) {
                          if (f++, !h()) return
                      } else if (h()) return;
                      c[u++] = t
                  } else {
                      if (null !== l) return;
                      f++, l = ++u
                  }
              }
              if (null !== l)
                  for (a = u - l, u = 7; 0 != u && a > 0;) s = c[u], c[u--] = c[l + a - 1], c[l + --a] = s;
              else if (8 != u) return;
              return c
          },
          F = function(e) {
              var t, n, r, i;
              if ("number" == typeof e) {
                  for (t = [], n = 0; n < 4; n++) t.unshift(e % 256), e = A(e / 256);
                  return t.join(".")
              }
              if ("object" == typeof e) {
                  for (t = "", r = function(e) {
                          for (var t = null, n = 1, r = null, i = 0, o = 0; o < 8; o++) 0 !== e[o] ? (i > n && (t = r, n = i), r = null, i = 0) : (null === r && (r = o), ++i);
                          return i > n && (t = r, n = i), t
                      }(e), n = 0; n < 8; n++) i && 0 === e[n] || (i && (i = !1), r === n ? (t += n ? ":" : "::", i = !0) : (t += e[n].toString(16), n < 7 && (t += ":")));
                  return "[" + t + "]"
              }
              return e
          },
          W = {},
          V = h({}, W, {
              " ": 1,
              '"': 1,
              "<": 1,
              ">": 1,
              "`": 1
          }),
          K = h({}, V, {
              "#": 1,
              "?": 1,
              "{": 1,
              "}": 1
          }),
          q = h({}, K, {
              "/": 1,
              ":": 1,
              ";": 1,
              "=": 1,
              "@": 1,
              "[": 1,
              "\\": 1,
              "]": 1,
              "^": 1,
              "|": 1
          }),
          G = function(e, t) {
              var n = p(e, 0);
              return n > 32 && n < 127 && !f(t, e) ? e : encodeURIComponent(e)
          },
          Y = {
              ftp: 21,
              file: null,
              http: 80,
              https: 443,
              ws: 80,
              wss: 443
          },
          Z = function(e) {
              return f(Y, e.scheme)
          },
          J = function(e) {
              return "" != e.username || "" != e.password
          },
          Q = function(e) {
              return !e.host || e.cannotBeABaseURL || "file" == e.scheme
          },
          X = function(e, t) {
              var n;
              return 2 == e.length && P.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || !t && "|" == n)
          },
          ee = function(e) {
              var t;
              return e.length > 1 && X(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t)
          },
          te = function(e) {
              var t = e.path,
                  n = t.length;
              !n || "file" == e.scheme && 1 == n && X(t[0], !0) || t.pop()
          },
          ne = function(e) {
              return "." === e || "%2e" === e.toLowerCase()
          },
          re = {},
          ie = {},
          oe = {},
          ae = {},
          se = {},
          ce = {},
          ue = {},
          le = {},
          fe = {},
          he = {},
          de = {},
          pe = {},
          ve = {},
          me = {},
          ye = {},
          ge = {},
          be = {},
          we = {},
          ke = {},
          Se = {},
          xe = {},
          Ae = function(e, t, n, i) {
              var o, a, s, c, u, l = n || re,
                  h = 0,
                  p = "",
                  v = !1,
                  m = !1,
                  y = !1;
              for (n || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, t = t.replace(N, "")), t = t.replace(B, ""), o = d(t); h <= o.length;) {
                  switch (a = o[h], l) {
                      case re:
                          if (!a || !P.test(a)) {
                              if (n) return E;
                              l = oe;
                              continue
                          }
                          p += a.toLowerCase(), l = ie;
                          break;
                      case ie:
                          if (a && (I.test(a) || "+" == a || "-" == a || "." == a)) p += a.toLowerCase();
                          else {
                              if (":" != a) {
                                  if (n) return E;
                                  p = "", l = oe, h = 0;
                                  continue
                              }
                              if (n && (Z(e) != f(Y, p) || "file" == p && (J(e) || null !== e.port) || "file" == e.scheme && !e.host)) return;
                              if (e.scheme = p, n) return void(Z(e) && Y[e.scheme] == e.port && (e.port = null));
                              p = "", "file" == e.scheme ? l = me : Z(e) && i && i.scheme == e.scheme ? l = ae : Z(e) ? l = le : "/" == o[h + 1] ? (l = se, h++) : (e.cannotBeABaseURL = !0, e.path.push(""), l = ke)
                          }
                          break;
                      case oe:
                          if (!i || i.cannotBeABaseURL && "#" != a) return E;
                          if (i.cannotBeABaseURL && "#" == a) {
                              e.scheme = i.scheme, e.path = i.path.slice(), e.query = i.query, e.fragment = "", e.cannotBeABaseURL = !0, l = xe;
                              break
                          }
                          l = "file" == i.scheme ? me : ce;
                          continue;
                      case ae:
                          if ("/" != a || "/" != o[h + 1]) {
                              l = ce;
                              continue
                          }
                          l = fe, h++;
                          break;
                      case se:
                          if ("/" == a) {
                              l = he;
                              break
                          }
                          l = we;
                          continue;
                      case ce:
                          if (e.scheme = i.scheme, a == r) e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.query = i.query;
                          else if ("/" == a || "\\" == a && Z(e)) l = ue;
                          else if ("?" == a) e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.query = "", l = Se;
                          else {
                              if ("#" != a) {
                                  e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.path.pop(), l = we;
                                  continue
                              }
                              e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.query = i.query, e.fragment = "", l = xe
                          }
                          break;
                      case ue:
                          if (!Z(e) || "/" != a && "\\" != a) {
                              if ("/" != a) {
                                  e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, l = we;
                                  continue
                              }
                              l = he
                          } else l = fe;
                          break;
                      case le:
                          if (l = fe, "/" != a || "/" != p.charAt(h + 1)) continue;
                          h++;
                          break;
                      case fe:
                          if ("/" != a && "\\" != a) {
                              l = he;
                              continue
                          }
                          break;
                      case he:
                          if ("@" == a) {
                              v && (p = "%40" + p), v = !0, s = d(p);
                              for (var g = 0; g < s.length; g++) {
                                  var b = s[g];
                                  if (":" != b || y) {
                                      var w = G(b, q);
                                      y ? e.password += w : e.username += w
                                  } else y = !0
                              }
                              p = ""
                          } else if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && Z(e)) {
                              if (v && "" == p) return "Invalid authority";
                              h -= d(p).length + 1, p = "", l = de
                          } else p += a;
                          break;
                      case de:
                      case pe:
                          if (n && "file" == e.scheme) {
                              l = ge;
                              continue
                          }
                          if (":" != a || m) {
                              if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && Z(e)) {
                                  if (Z(e) && "" == p) return O;
                                  if (n && "" == p && (J(e) || null !== e.port)) return;
                                  if (c = z(e, p)) return c;
                                  if (p = "", l = be, n) return;
                                  continue
                              }
                              "[" == a ? m = !0 : "]" == a && (m = !1), p += a
                          } else {
                              if ("" == p) return O;
                              if (c = z(e, p)) return c;
                              if (p = "", l = ve, n == pe) return
                          }
                          break;
                      case ve:
                          if (!R.test(a)) {
                              if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && Z(e) || n) {
                                  if ("" != p) {
                                      var k = parseInt(p, 10);
                                      if (k > 65535) return C;
                                      e.port = Z(e) && k === Y[e.scheme] ? null : k, p = ""
                                  }
                                  if (n) return;
                                  l = be;
                                  continue
                              }
                              return C
                          }
                          p += a;
                          break;
                      case me:
                          if (e.scheme = "file", "/" == a || "\\" == a) l = ye;
                          else {
                              if (!i || "file" != i.scheme) {
                                  l = we;
                                  continue
                              }
                              if (a == r) e.host = i.host, e.path = i.path.slice(), e.query = i.query;
                              else if ("?" == a) e.host = i.host, e.path = i.path.slice(), e.query = "", l = Se;
                              else {
                                  if ("#" != a) {
                                      ee(o.slice(h).join("")) || (e.host = i.host, e.path = i.path.slice(), te(e)), l = we;
                                      continue
                                  }
                                  e.host = i.host, e.path = i.path.slice(), e.query = i.query, e.fragment = "", l = xe
                              }
                          }
                          break;
                      case ye:
                          if ("/" == a || "\\" == a) {
                              l = ge;
                              break
                          }
                          i && "file" == i.scheme && !ee(o.slice(h).join("")) && (X(i.path[0], !0) ? e.path.push(i.path[0]) : e.host = i.host), l = we;
                          continue;
                      case ge:
                          if (a == r || "/" == a || "\\" == a || "?" == a || "#" == a) {
                              if (!n && X(p)) l = we;
                              else if ("" == p) {
                                  if (e.host = "", n) return;
                                  l = be
                              } else {
                                  if (c = z(e, p)) return c;
                                  if ("localhost" == e.host && (e.host = ""), n) return;
                                  p = "", l = be
                              }
                              continue
                          }
                          p += a;
                          break;
                      case be:
                          if (Z(e)) {
                              if (l = we, "/" != a && "\\" != a) continue
                          } else if (n || "?" != a)
                              if (n || "#" != a) {
                                  if (a != r && (l = we, "/" != a)) continue
                              } else e.fragment = "", l = xe;
                          else e.query = "", l = Se;
                          break;
                      case we:
                          if (a == r || "/" == a || "\\" == a && Z(e) || !n && ("?" == a || "#" == a)) {
                              if (".." === (u = (u = p).toLowerCase()) || "%2e." === u || ".%2e" === u || "%2e%2e" === u ? (te(e), "/" == a || "\\" == a && Z(e) || e.path.push("")) : ne(p) ? "/" == a || "\\" == a && Z(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && X(p) && (e.host && (e.host = ""), p = p.charAt(0) + ":"), e.path.push(p)), p = "", "file" == e.scheme && (a == r || "?" == a || "#" == a))
                                  for (; e.path.length > 1 && "" === e.path[0];) e.path.shift();
                              "?" == a ? (e.query = "", l = Se) : "#" == a && (e.fragment = "", l = xe)
                          } else p += G(a, K);
                          break;
                      case ke:
                          "?" == a ? (e.query = "", l = Se) : "#" == a ? (e.fragment = "", l = xe) : a != r && (e.path[0] += G(a, W));
                          break;
                      case Se:
                          n || "#" != a ? a != r && ("'" == a && Z(e) ? e.query += "%27" : e.query += "#" == a ? "%23" : G(a, W)) : (e.fragment = "", l = xe);
                          break;
                      case xe:
                          a != r && (e.fragment += G(a, V))
                  }
                  h++
              }
          },
          _e = function(e) {
              var t, n, r = l(this, _e, "URL"),
                  i = arguments.length > 1 ? arguments[1] : void 0,
                  a = String(e),
                  s = S(r, {
                      type: "URL"
                  });
              if (void 0 !== i)
                  if (i instanceof _e) t = x(i);
                  else if (n = Ae(t = {}, String(i))) throw TypeError(n);
              if (n = Ae(s, a, null, t)) throw TypeError(n);
              var c = s.searchParams = new w,
                  u = k(c);
              u.updateSearchParams(s.query), u.updateURL = function() {
                  s.query = String(c) || null
              }, o || (r.href = Oe.call(r), r.origin = Ce.call(r), r.protocol = Pe.call(r), r.username = Ie.call(r), r.password = Re.call(r), r.host = $e.call(r), r.hostname = Le.call(r), r.port = Te.call(r), r.pathname = je.call(r), r.search = Me.call(r), r.searchParams = Ue.call(r), r.hash = Ne.call(r))
          },
          Ee = _e.prototype,
          Oe = function() {
              var e = x(this),
                  t = e.scheme,
                  n = e.username,
                  r = e.password,
                  i = e.host,
                  o = e.port,
                  a = e.path,
                  s = e.query,
                  c = e.fragment,
                  u = t + ":";
              return null !== i ? (u += "//", J(e) && (u += n + (r ? ":" + r : "") + "@"), u += F(i), null !== o && (u += ":" + o)) : "file" == t && (u += "//"), u += e.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "", null !== s && (u += "?" + s), null !== c && (u += "#" + c), u
          },
          Ce = function() {
              var e = x(this),
                  t = e.scheme,
                  n = e.port;
              if ("blob" == t) try {
                  return new _e(t.path[0]).origin
              } catch (e) {
                  return "null"
              }
              return "file" != t && Z(e) ? t + "://" + F(e.host) + (null !== n ? ":" + n : "") : "null"
          },
          Pe = function() {
              return x(this).scheme + ":"
          },
          Ie = function() {
              return x(this).username
          },
          Re = function() {
              return x(this).password
          },
          $e = function() {
              var e = x(this),
                  t = e.host,
                  n = e.port;
              return null === t ? "" : null === n ? F(t) : F(t) + ":" + n
          },
          Le = function() {
              var e = x(this).host;
              return null === e ? "" : F(e)
          },
          Te = function() {
              var e = x(this).port;
              return null === e ? "" : String(e)
          },
          je = function() {
              var e = x(this),
                  t = e.path;
              return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : ""
          },
          Me = function() {
              var e = x(this).query;
              return e ? "?" + e : ""
          },
          Ue = function() {
              return x(this).searchParams
          },
          Ne = function() {
              var e = x(this).fragment;
              return e ? "#" + e : ""
          },
          Be = function(e, t) {
              return {
                  get: e,
                  set: t,
                  configurable: !0,
                  enumerable: !0
              }
          };
      if (o && c(Ee, {
              href: Be(Oe, (function(e) {
                  var t = x(this),
                      n = String(e),
                      r = Ae(t, n);
                  if (r) throw TypeError(r);
                  k(t.searchParams).updateSearchParams(t.query)
              })),
              origin: Be(Ce),
              protocol: Be(Pe, (function(e) {
                  var t = x(this);
                  Ae(t, String(e) + ":", re)
              })),
              username: Be(Ie, (function(e) {
                  var t = x(this),
                      n = d(String(e));
                  if (!Q(t)) {
                      t.username = "";
                      for (var r = 0; r < n.length; r++) t.username += G(n[r], q)
                  }
              })),
              password: Be(Re, (function(e) {
                  var t = x(this),
                      n = d(String(e));
                  if (!Q(t)) {
                      t.password = "";
                      for (var r = 0; r < n.length; r++) t.password += G(n[r], q)
                  }
              })),
              host: Be($e, (function(e) {
                  var t = x(this);
                  t.cannotBeABaseURL || Ae(t, String(e), de)
              })),
              hostname: Be(Le, (function(e) {
                  var t = x(this);
                  t.cannotBeABaseURL || Ae(t, String(e), pe)
              })),
              port: Be(Te, (function(e) {
                  var t = x(this);
                  Q(t) || ("" == (e = String(e)) ? t.port = null : Ae(t, e, ve))
              })),
              pathname: Be(je, (function(e) {
                  var t = x(this);
                  t.cannotBeABaseURL || (t.path = [], Ae(t, e + "", be))
              })),
              search: Be(Me, (function(e) {
                  var t = x(this);
                  "" == (e = String(e)) ? t.query = null: ("?" == e.charAt(0) && (e = e.slice(1)), t.query = "", Ae(t, e, Se)), k(t.searchParams).updateSearchParams(t.query)
              })),
              searchParams: Be(Ue),
              hash: Be(Ne, (function(e) {
                  var t = x(this);
                  "" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", Ae(t, e, xe)) : t.fragment = null
              }))
          }), u(Ee, "toJSON", (function() {
              return Oe.call(this)
          }), {
              enumerable: !0
          }), u(Ee, "toString", (function() {
              return Oe.call(this)
          }), {
              enumerable: !0
          }), b) {
          var ze = b.createObjectURL,
              De = b.revokeObjectURL;
          ze && u(_e, "createObjectURL", (function(e) {
              return ze.apply(b, arguments)
          })), De && u(_e, "revokeObjectURL", (function(e) {
              return De.apply(b, arguments)
          }))
      }
      m(_e, "URL"), i({
          global: !0,
          forced: !a,
          sham: !o
      }, {
          URL: _e
      })
  }, function(e, t, n) {
      "use strict";
      var r = n(1),
          i = n(85),
          o = n(32),
          a = n(146),
          s = [].join,
          c = i != Object,
          u = a("join", ",");
      r({
          target: "Array",
          proto: !0,
          forced: c || !u
      }, {
          join: function(e) {
              return s.call(o(this), void 0 === e ? "," : e)
          }
      })
  }, function(e, t, n) {
      var r = n(1),
          i = n(6),
          o = n(7),
          a = n(10),
          s = n(37),
          c = n(82);
      r({
          target: "Reflect",
          stat: !0
      }, {
          get: function e(t, n) {
              var r, u, l = arguments.length < 3 ? t : arguments[2];
              return o(t) === l ? t[n] : (r = s.f(t, n)) ? a(r, "value") ? r.value : void 0 === r.get ? void 0 : r.get.call(l) : i(u = c(t)) ? e(u, n, l) : void 0
          }
      })
  }, function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return s
      })), n.d(t, "b", (function() {
          return c
      })), n.d(t, "c", (function() {
          return a
      }));
      n(19), n(20), n(8), n(23), n(9), n(11), n(12), n(35), n(30), n(25);

      function r(e) {
          return function(e) {
              if (Array.isArray(e)) return i(e)
          }(e) || function(e) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
          }(e) || function(e, t) {
              if (!e) return;
              if ("string" == typeof e) return i(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
          }(e) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
      }

      function i(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r
      }

      function o(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
      }
      var a = {
              ATTRIBUTE: 1,
              CHILD: 2,
              PROPERTY: 3,
              BOOLEAN_ATTRIBUTE: 4,
              EVENT: 5,
              ELEMENT: 6
          },
          s = function(e) {
              return function() {
                  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                  return {
                      _$litDirective$: e,
                      values: n
                  }
              }
          },
          c = function() {
              function e(t) {
                  ! function(e, t) {
                      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                  }(this, e)
              }
              var t, n, i;
              return t = e, (n = [{
                  key: "_$AU",
                  get: function() {
                      return this._$AM._$AU
                  }
              }, {
                  key: "_$AT",
                  value: function(e, t, n) {
                      this._$Ct = e, this._$AM = t, this._$Ci = n
                  }
              }, {
                  key: "_$AS",
                  value: function(e, t) {
                      return this.update(e, t)
                  }
              }, {
                  key: "update",
                  value: function(e, t) {
                      return this.render.apply(this, r(t))
                  }
              }]) && o(t.prototype, n), i && o(t, i), e
          }()
  }, function(e, t, n) {
      var r = n(41);
      e.exports = r("navigator", "userAgent") || ""
  }, function(e, t, n) {
      var r = n(7),
          i = n(198);
      e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
          var e, t = !1,
              n = {};
          try {
              (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
          } catch (e) {}
          return function(n, o) {
              return r(n), i(o), t ? e.call(n, o) : n.__proto__ = o, n
          }
      }() : void 0)
  }, function(e, t, n) {
      var r = n(123),
          i = n(45),
          o = n(4)("toStringTag"),
          a = "Arguments" == i(function() {
              return arguments
          }());
      e.exports = r ? i : function(e) {
          var t, n, r;
          return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
              try {
                  return e[t]
              } catch (e) {}
          }(t = Object(e), o)) ? n : a ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r
      }
  }, function(e, t, n) {
      "use strict";
      var r = n(1),
          i = n(188),
          o = n(21),
          a = n(15),
          s = n(54),
          c = n(87);
      r({
          target: "Array",
          proto: !0
      }, {
          flat: function() {
              var e = arguments.length ? arguments[0] : void 0,
                  t = o(this),
                  n = a(t.length),
                  r = c(t, 0);
              return r.length = i(r, t, t, n, 0, void 0 === e ? 1 : s(e)), r
          }
      })
  }, function(e, t, n) {
      var r = n(1),
          i = n(184),
          o = n(84);
      r({
          target: "Array",
          proto: !0
      }, {
          fill: i
      }), o("fill")
  }, function(e, t, n) {
      var r = n(6),
          i = n(107);
      e.exports = function(e, t, n) {
          var o, a;
          return i && "function" == typeof(o = t.constructor) && o !== n && r(a = o.prototype) && a !== n.prototype && i(e, a), e
      }
  }, function(e, t, n) {
      var r = n(4)("iterator"),
          i = !1;
      try {
          var o = 0,
              a = {
                  next: function() {
                      return {
                          done: !!o++
                      }
                  },
                  return: function() {
                      i = !0
                  }
              };
          a[r] = function() {
              return this
          }, Array.from(a, (function() {
              throw 2
          }))
      } catch (e) {}
      e.exports = function(e, t) {
          if (!t && !i) return !1;
          var n = !1;
          try {
              var o = {};
              o[r] = function() {
                  return {
                      next: function() {
                          return {
                              done: n = !0
                          }
                      }
                  }
              }, e(o)
          } catch (e) {}
          return n
      }
  }, function(e, t, n) {
      "use strict";
      var r = n(41),
          i = n(16),
          o = n(4),
          a = n(14),
          s = o("species");
      e.exports = function(e) {
          var t = r(e),
              n = i.f;
          a && t && !t[s] && n(t, s, {
              configurable: !0,
              get: function() {
                  return this
              }
          })
      }
  }, function(e, t, n) {
      var r = n(1),
          i = n(2),
          o = n(167).f;
      r({
          target: "Object",
          stat: !0,
          forced: i((function() {
              return !Object.getOwnPropertyNames(1)
          }))
      }, {
          getOwnPropertyNames: o
      })
  }, function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return Re
      }));
      var r, i, o, a;
      n(35), n(34), n(104), n(74), n(59), n(26), n(8), n(17), n(31), n(19), n(20), n(9), n(11), n(63), n(12), n(43), n(44), n(50), n(52), n(60), n(33), n(24), n(114), n(77), n(109), n(30), n(23), n(80), n(36), n(62), n(79), n(51), n(25), n(110);

      function s(e, t) {
          return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
              raw: {
                  value: Object.freeze(t)
              }
          }))
      }

      function c(e, t, n) {
          return (c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
              var r = function(e, t) {
                  for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = w(e)););
                  return e
              }(e, t);
              if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, t);
                  return i.get ? i.get.call(n) : i.value
              }
          })(e, t, n || e)
      }

      function u(e, t) {
          return function(e) {
              if (Array.isArray(e)) return e
          }(e) || function(e, t) {
              if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
              var n = [],
                  r = !0,
                  i = !1,
                  o = void 0;
              try {
                  for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
              } catch (e) {
                  i = !0, o = e
              } finally {
                  try {
                      r || null == s.return || s.return()
                  } finally {
                      if (i) throw o
                  }
              }
              return n
          }(e, t) || S(e, t) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
      }

      function l(e) {
          return function(e) {
              if (Array.isArray(e)) return x(e)
          }(e) || function(e) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
          }(e) || S(e) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
      }

      function f(e) {
          return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          } : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
      }

      function h(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
              constructor: {
                  value: e,
                  writable: !0,
                  configurable: !0
              }
          }), t && b(e, t)
      }

      function d(e) {
          var t = g();
          return function() {
              var n, r = w(e);
              if (t) {
                  var i = w(this).constructor;
                  n = Reflect.construct(r, arguments, i)
              } else n = r.apply(this, arguments);
              return p(this, n)
          }
      }

      function p(e, t) {
          return !t || "object" !== f(t) && "function" != typeof t ? v(e) : t
      }

      function v(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }

      function m(e) {
          var t = "function" == typeof Map ? new Map : void 0;
          return (m = function(e) {
              if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
              var n;
              if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
              if (void 0 !== t) {
                  if (t.has(e)) return t.get(e);
                  t.set(e, r)
              }

              function r() {
                  return y(e, arguments, w(this).constructor)
              }
              return r.prototype = Object.create(e.prototype, {
                  constructor: {
                      value: r,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                  }
              }), b(r, e)
          })(e)
      }

      function y(e, t, n) {
          return (y = g() ? Reflect.construct : function(e, t, n) {
              var r = [null];
              r.push.apply(r, t);
              var i = new(Function.bind.apply(e, r));
              return n && b(i, n.prototype), i
          }).apply(null, arguments)
      }

      function g() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
              return !1
          }
      }

      function b(e, t) {
          return (b = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t, e
          })(e, t)
      }

      function w(e) {
          return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
      }

      function k(e, t) {
          var n;
          if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
              if (Array.isArray(e) || (n = S(e)) || t && e && "number" == typeof e.length) {
                  n && (e = n);
                  var r = 0,
                      i = function() {};
                  return {
                      s: i,
                      n: function() {
                          return r >= e.length ? {
                              done: !0
                          } : {
                              done: !1,
                              value: e[r++]
                          }
                      },
                      e: function(e) {
                          throw e
                      },
                      f: i
                  }
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }
          var o, a = !0,
              s = !1;
          return {
              s: function() {
                  n = e[Symbol.iterator]()
              },
              n: function() {
                  var e = n.next();
                  return a = e.done, e
              },
              e: function(e) {
                  s = !0, o = e
              },
              f: function() {
                  try {
                      a || null == n.return || n.return()
                  } finally {
                      if (s) throw o
                  }
              }
          }
      }

      function S(e, t) {
          if (e) {
              if ("string" == typeof e) return x(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? x(e, t) : void 0
          }
      }

      function x(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r
      }

      function A(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function _(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
      }

      function E(e, t, n) {
          return t && _(e.prototype, t), n && _(e, n), e
      }
      var O, C = window,
          P = C.ShadowRoot && (void 0 === C.ShadyCSS || C.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
          I = Symbol(),
          R = new WeakMap,
          $ = function() {
              function e(t, n, r) {
                  if (A(this, e), this._$cssResult$ = !0, r !== I) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                  this.cssText = t, this.t = n
              }
              return E(e, [{
                  key: "styleSheet",
                  get: function() {
                      var e = this.o,
                          t = this.t;
                      if (P && void 0 === e) {
                          var n = void 0 !== t && 1 === t.length;
                          n && (e = R.get(t)), void 0 === e && ((this.o = e = new CSSStyleSheet).replaceSync(this.cssText), n && R.set(t, e))
                      }
                      return e
                  }
              }, {
                  key: "toString",
                  value: function() {
                      return this.cssText
                  }
              }]), e
          }(),
          L = P ? function(e) {
              return e
          } : function(e) {
              return e instanceof CSSStyleSheet ? function(e) {
                  var t, n = "",
                      r = k(e.cssRules);
                  try {
                      for (r.s(); !(t = r.n()).done;) {
                          n += t.value.cssText
                      }
                  } catch (e) {
                      r.e(e)
                  } finally {
                      r.f()
                  }
                  return function(e) {
                      return new $("string" == typeof e ? e : e + "", void 0, I)
                  }(n)
              }(e) : e
          },
          T = window,
          j = T.trustedTypes,
          M = j ? j.emptyScript : "",
          U = T.reactiveElementPolyfillSupport,
          N = {
              toAttribute: function(e, t) {
                  switch (t) {
                      case Boolean:
                          e = e ? M : null;
                          break;
                      case Object:
                      case Array:
                          e = null == e ? e : JSON.stringify(e)
                  }
                  return e
              },
              fromAttribute: function(e, t) {
                  var n = e;
                  switch (t) {
                      case Boolean:
                          n = null !== e;
                          break;
                      case Number:
                          n = null === e ? null : Number(e);
                          break;
                      case Object:
                      case Array:
                          try {
                              n = JSON.parse(e)
                          } catch (e) {
                              n = null
                          }
                  }
                  return n
              }
          },
          B = function(e, t) {
              return t !== e && (t == t || e == e)
          },
          z = {
              attribute: !0,
              type: String,
              converter: N,
              reflect: !1,
              hasChanged: B
          },
          D = function(e) {
              h(n, e);
              var t = d(n);

              function n() {
                  var e;
                  return A(this, n), (e = t.call(this))._$Ei = new Map, e.isUpdatePending = !1, e.hasUpdated = !1, e._$El = null, e.u(), e
              }
              return E(n, [{
                  key: "u",
                  value: function() {
                      var e, t = this;
                      this._$E_ = new Promise((function(e) {
                          return t.enableUpdating = e
                      })), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (e = this.constructor.h) || void 0 === e || e.forEach((function(e) {
                          return e(t)
                      }))
                  }
              }, {
                  key: "addController",
                  value: function(e) {
                      var t, n;
                      (null !== (t = this._$ES) && void 0 !== t ? t : this._$ES = []).push(e), void 0 !== this.renderRoot && this.isConnected && (null === (n = e.hostConnected) || void 0 === n || n.call(e))
                  }
              }, {
                  key: "removeController",
                  value: function(e) {
                      var t;
                      null === (t = this._$ES) || void 0 === t || t.splice(this._$ES.indexOf(e) >>> 0, 1)
                  }
              }, {
                  key: "_$Eg",
                  value: function() {
                      var e = this;
                      this.constructor.elementProperties.forEach((function(t, n) {
                          e.hasOwnProperty(n) && (e._$Ei.set(n, e[n]), delete e[n])
                      }))
                  }
              }, {
                  key: "createRenderRoot",
                  value: function() {
                      var e, t = null !== (e = this.shadowRoot) && void 0 !== e ? e : this.attachShadow(this.constructor.shadowRootOptions);
                      return function(e, t) {
                          P ? e.adoptedStyleSheets = t.map((function(e) {
                              return e instanceof CSSStyleSheet ? e : e.styleSheet
                          })) : t.forEach((function(t) {
                              var n = document.createElement("style"),
                                  r = C.litNonce;
                              void 0 !== r && n.setAttribute("nonce", r), n.textContent = t.cssText, e.appendChild(n)
                          }))
                      }(t, this.constructor.elementStyles), t
                  }
              }, {
                  key: "connectedCallback",
                  value: function() {
                      var e;
                      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (e = this._$ES) || void 0 === e || e.forEach((function(e) {
                          var t;
                          return null === (t = e.hostConnected) || void 0 === t ? void 0 : t.call(e)
                      }))
                  }
              }, {
                  key: "enableUpdating",
                  value: function(e) {}
              }, {
                  key: "disconnectedCallback",
                  value: function() {
                      var e;
                      null === (e = this._$ES) || void 0 === e || e.forEach((function(e) {
                          var t;
                          return null === (t = e.hostDisconnected) || void 0 === t ? void 0 : t.call(e)
                      }))
                  }
              }, {
                  key: "attributeChangedCallback",
                  value: function(e, t, n) {
                      this._$AK(e, n)
                  }
              }, {
                  key: "_$EO",
                  value: function(e, t) {
                      var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : z,
                          i = this.constructor._$Ep(e, r);
                      if (void 0 !== i && !0 === r.reflect) {
                          var o = (void 0 !== (null === (n = r.converter) || void 0 === n ? void 0 : n.toAttribute) ? r.converter : N).toAttribute(t, r.type);
                          this._$El = e, null == o ? this.removeAttribute(i) : this.setAttribute(i, o), this._$El = null
                      }
                  }
              }, {
                  key: "_$AK",
                  value: function(e, t) {
                      var n, r = this.constructor,
                          i = r._$Ev.get(e);
                      if (void 0 !== i && this._$El !== i) {
                          var o = r.getPropertyOptions(i),
                              a = "function" == typeof o.converter ? {
                                  fromAttribute: o.converter
                              } : void 0 !== (null === (n = o.converter) || void 0 === n ? void 0 : n.fromAttribute) ? o.converter : N;
                          this._$El = i, this[i] = a.fromAttribute(t, o.type), this._$El = null
                      }
                  }
              }, {
                  key: "requestUpdate",
                  value: function(e, t, n) {
                      var r = !0;
                      void 0 !== e && (((n = n || this.constructor.getPropertyOptions(e)).hasChanged || B)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), !0 === n.reflect && this._$El !== e && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(e, n))) : r = !1), !this.isUpdatePending && r && (this._$E_ = this._$Ej())
                  }
              }, {
                  key: "_$Ej",
                  value: function() {
                      return e = this, t = null, n = regeneratorRuntime.mark((function e() {
                          var t;
                          return regeneratorRuntime.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      return this.isUpdatePending = !0, e.prev = 1, e.next = 4, this._$E_;
                                  case 4:
                                      e.next = 9;
                                      break;
                                  case 6:
                                      e.prev = 6, e.t0 = e.catch(1), Promise.reject(e.t0);
                                  case 9:
                                      if (t = this.scheduleUpdate(), e.t1 = null != t, !e.t1) {
                                          e.next = 14;
                                          break
                                      }
                                      return e.next = 14, t;
                                  case 14:
                                      return e.abrupt("return", !this.isUpdatePending);
                                  case 15:
                                  case "end":
                                      return e.stop()
                              }
                          }), e, this, [
                              [1, 6]
                          ])
                      })), new Promise((function(r, i) {
                          var o = function(e) {
                                  try {
                                      s(n.next(e))
                                  } catch (e) {
                                      i(e)
                                  }
                              },
                              a = function(e) {
                                  try {
                                      s(n.throw(e))
                                  } catch (e) {
                                      i(e)
                                  }
                              },
                              s = function(e) {
                                  return e.done ? r(e.value) : Promise.resolve(e.value).then(o, a)
                              };
                          s((n = n.apply(e, t)).next())
                      }));
                      var e, t, n
                  }
              }, {
                  key: "scheduleUpdate",
                  value: function() {
                      return this.performUpdate()
                  }
              }, {
                  key: "performUpdate",
                  value: function() {
                      var e, t = this;
                      if (this.isUpdatePending) {
                          this.hasUpdated, this._$Ei && (this._$Ei.forEach((function(e, n) {
                              return t[n] = e
                          })), this._$Ei = void 0);
                          var n = !1,
                              r = this._$AL;
                          try {
                              (n = this.shouldUpdate(r)) ? (this.willUpdate(r), null === (e = this._$ES) || void 0 === e || e.forEach((function(e) {
                                  var t;
                                  return null === (t = e.hostUpdate) || void 0 === t ? void 0 : t.call(e)
                              })), this.update(r)) : this._$Ek()
                          } catch (e) {
                              throw n = !1, this._$Ek(), e
                          }
                          n && this._$AE(r)
                      }
                  }
              }, {
                  key: "willUpdate",
                  value: function(e) {}
              }, {
                  key: "_$AE",
                  value: function(e) {
                      var t;
                      null === (t = this._$ES) || void 0 === t || t.forEach((function(e) {
                          var t;
                          return null === (t = e.hostUpdated) || void 0 === t ? void 0 : t.call(e)
                      })), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e)
                  }
              }, {
                  key: "_$Ek",
                  value: function() {
                      this._$AL = new Map, this.isUpdatePending = !1
                  }
              }, {
                  key: "updateComplete",
                  get: function() {
                      return this.getUpdateComplete()
                  }
              }, {
                  key: "getUpdateComplete",
                  value: function() {
                      return this._$E_
                  }
              }, {
                  key: "shouldUpdate",
                  value: function(e) {
                      return !0
                  }
              }, {
                  key: "update",
                  value: function(e) {
                      var t = this;
                      void 0 !== this._$EC && (this._$EC.forEach((function(e, n) {
                          return t._$EO(n, t[n], e)
                      })), this._$EC = void 0), this._$Ek()
                  }
              }, {
                  key: "updated",
                  value: function(e) {}
              }, {
                  key: "firstUpdated",
                  value: function(e) {}
              }], [{
                  key: "addInitializer",
                  value: function(e) {
                      var t;
                      this.finalize(), (null !== (t = this.h) && void 0 !== t ? t : this.h = []).push(e)
                  }
              }, {
                  key: "observedAttributes",
                  get: function() {
                      var e = this;
                      this.finalize();
                      var t = [];
                      return this.elementProperties.forEach((function(n, r) {
                          var i = e._$Ep(r, n);
                          void 0 !== i && (e._$Ev.set(i, r), t.push(i))
                      })), t
                  }
              }, {
                  key: "createProperty",
                  value: function(e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : z;
                      if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
                          var n = "symbol" == f(e) ? Symbol() : "__" + e,
                              r = this.getPropertyDescriptor(e, n, t);
                          void 0 !== r && Object.defineProperty(this.prototype, e, r)
                      }
                  }
              }, {
                  key: "getPropertyDescriptor",
                  value: function(e, t, n) {
                      return {
                          get: function() {
                              return this[t]
                          },
                          set: function(r) {
                              var i = this[e];
                              this[t] = r, this.requestUpdate(e, i, n)
                          },
                          configurable: !0,
                          enumerable: !0
                      }
                  }
              }, {
                  key: "getPropertyOptions",
                  value: function(e) {
                      return this.elementProperties.get(e) || z
                  }
              }, {
                  key: "finalize",
                  value: function() {
                      if (this.hasOwnProperty("finalized")) return !1;
                      this.finalized = !0;
                      var e = Object.getPrototypeOf(this);
                      if (e.finalize(), void 0 !== e.h && (this.h = l(e.h)), this.elementProperties = new Map(e.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
                          var t, n = this.properties,
                              r = k([].concat(l(Object.getOwnPropertyNames(n)), l(Object.getOwnPropertySymbols(n))));
                          try {
                              for (r.s(); !(t = r.n()).done;) {
                                  var i = t.value;
                                  this.createProperty(i, n[i])
                              }
                          } catch (e) {
                              r.e(e)
                          } finally {
                              r.f()
                          }
                      }
                      return this.elementStyles = this.finalizeStyles(this.styles), !0
                  }
              }, {
                  key: "finalizeStyles",
                  value: function(e) {
                      var t = [];
                      if (Array.isArray(e)) {
                          var n, r = k(new Set(e.flat(1 / 0).reverse()));
                          try {
                              for (r.s(); !(n = r.n()).done;) {
                                  var i = n.value;
                                  t.unshift(L(i))
                              }
                          } catch (e) {
                              r.e(e)
                          } finally {
                              r.f()
                          }
                      } else void 0 !== e && t.push(L(e));
                      return t
                  }
              }, {
                  key: "_$Ep",
                  value: function(e, t) {
                      var n = t.attribute;
                      return !1 === n ? void 0 : "string" == typeof n ? n : "string" == typeof e ? e.toLowerCase() : void 0
                  }
              }]), n
          }(m(HTMLElement));
      D.finalized = !0, D.elementProperties = new Map, D.elementStyles = [], D.shadowRootOptions = {
          mode: "open"
      }, null == U || U({
          ReactiveElement: D
      }), (null !== (O = T.reactiveElementVersions) && void 0 !== O ? O : T.reactiveElementVersions = []).push("1.5.0");
      var H, F, W = window,
          V = W.trustedTypes,
          K = V ? V.createPolicy("lit-html", {
              createHTML: function(e) {
                  return e
              }
          }) : void 0,
          q = "lit$".concat((Math.random() + "").slice(9), "$"),
          G = "?" + q,
          Y = "<".concat(G, ">"),
          Z = document,
          J = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
              return Z.createComment(e)
          },
          Q = function(e) {
              return null === e || "object" != f(e) && "function" != typeof e
          },
          X = Array.isArray,
          ee = function(e) {
              return X(e) || "function" == typeof(null == e ? void 0 : e[Symbol.iterator])
          },
          te = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
          ne = /-->/g,
          re = />/g,
          ie = RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)", "g"),
          oe = /'/g,
          ae = /"/g,
          se = /^(?:script|style|textarea|title)$/i,
          ce = (F = 1, function(e) {
              for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
              return {
                  _$litType$: F,
                  strings: e,
                  values: n
              }
          }),
          ue = Symbol.for("lit-noChange"),
          le = Symbol.for("lit-nothing"),
          fe = new WeakMap,
          he = Z.createTreeWalker(Z, 129, null, !1),
          de = function() {
              function e(t, n) {
                  var r, i = t.strings,
                      o = t._$litType$;
                  A(this, e), this.parts = [];
                  var a = 0,
                      s = 0,
                      c = i.length - 1,
                      f = this.parts,
                      h = u(function(e, t) {
                          for (var n, r = e.length - 1, i = [], o = 2 === t ? "<svg>" : "", a = te, s = 0; s < r; s++) {
                              for (var c = e[s], u = void 0, l = void 0, f = -1, h = 0; h < c.length && (a.lastIndex = h, null !== (l = a.exec(c)));) h = a.lastIndex, a === te ? "!--" === l[1] ? a = ne : void 0 !== l[1] ? a = re : void 0 !== l[2] ? (se.test(l[2]) && (n = RegExp("</" + l[2], "g")), a = ie) : void 0 !== l[3] && (a = ie) : a === ie ? ">" === l[0] ? (a = null != n ? n : te, f = -1) : void 0 === l[1] ? f = -2 : (f = a.lastIndex - l[2].length, u = l[1], a = void 0 === l[3] ? ie : '"' === l[3] ? ae : oe) : a === ae || a === oe ? a = ie : a === ne || a === re ? a = te : (a = ie, n = void 0);
                              var d = a === ie && e[s + 1].startsWith("/>") ? " " : "";
                              o += a === te ? c + Y : f >= 0 ? (i.push(u), c.slice(0, f) + "$lit$" + c.slice(f) + q + d) : c + q + (-2 === f ? (i.push(void 0), s) : d)
                          }
                          var p = o + (e[r] || "<?>") + (2 === t ? "</svg>" : "");
                          if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
                          return [void 0 !== K ? K.createHTML(p) : p, i]
                      }(i, o), 2),
                      d = h[0],
                      p = h[1];
                  if (this.el = e.createElement(d, n), he.currentNode = this.el.content, 2 === o) {
                      var v = this.el.content,
                          m = v.firstChild;
                      m.remove(), v.append.apply(v, l(m.childNodes))
                  }
                  for (; null !== (r = he.nextNode()) && f.length < c;) {
                      if (1 === r.nodeType) {
                          if (r.hasAttributes()) {
                              var y, g = [],
                                  b = k(r.getAttributeNames());
                              try {
                                  for (b.s(); !(y = b.n()).done;) {
                                      var w = y.value;
                                      if (w.endsWith("$lit$") || w.startsWith(q)) {
                                          var S = p[s++];
                                          if (g.push(w), void 0 !== S) {
                                              var x = r.getAttribute(S.toLowerCase() + "$lit$").split(q),
                                                  _ = /([.?@])?(.*)/.exec(S);
                                              f.push({
                                                  type: 1,
                                                  index: a,
                                                  name: _[2],
                                                  strings: x,
                                                  ctor: "." === _[1] ? ge : "?" === _[1] ? we : "@" === _[1] ? ke : ye
                                              })
                                          } else f.push({
                                              type: 6,
                                              index: a
                                          })
                                      }
                                  }
                              } catch (e) {
                                  b.e(e)
                              } finally {
                                  b.f()
                              }
                              for (var E = 0, O = g; E < O.length; E++) {
                                  var C = O[E];
                                  r.removeAttribute(C)
                              }
                          }
                          if (se.test(r.tagName)) {
                              var P = r.textContent.split(q),
                                  I = P.length - 1;
                              if (I > 0) {
                                  r.textContent = V ? V.emptyScript : "";
                                  for (var R = 0; R < I; R++) r.append(P[R], J()), he.nextNode(), f.push({
                                      type: 2,
                                      index: ++a
                                  });
                                  r.append(P[I], J())
                              }
                          }
                      } else if (8 === r.nodeType)
                          if (r.data === G) f.push({
                              type: 2,
                              index: a
                          });
                          else
                              for (var $ = -1; - 1 !== ($ = r.data.indexOf(q, $ + 1));) f.push({
                                  type: 7,
                                  index: a
                              }), $ += q.length - 1;
                      a++
                  }
              }
              return E(e, null, [{
                  key: "createElement",
                  value: function(e, t) {
                      var n = Z.createElement("template");
                      return n.innerHTML = e, n
                  }
              }]), e
          }();

      function pe(e, t) {
          var n, r, i, o, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
              s = arguments.length > 3 ? arguments[3] : void 0;
          if (t === ue) return t;
          var c = void 0 !== s ? null === (n = a._$Co) || void 0 === n ? void 0 : n[s] : a._$Cl,
              u = Q(t) ? void 0 : t._$litDirective$;
          return (null == c ? void 0 : c.constructor) !== u && (null === (r = null == c ? void 0 : c._$AO) || void 0 === r || r.call(c, !1), void 0 === u ? c = void 0 : (c = new u(e))._$AT(e, a, s), void 0 !== s ? (null !== (i = (o = a)._$Co) && void 0 !== i ? i : o._$Co = [])[s] = c : a._$Cl = c), void 0 !== c && (t = pe(e, c._$AS(e, t.values), c, s)), t
      }
      var ve = function() {
              function e(t, n) {
                  A(this, e), this.u = [], this._$AN = void 0, this._$AD = t, this._$AM = n
              }
              return E(e, [{
                  key: "parentNode",
                  get: function() {
                      return this._$AM.parentNode
                  }
              }, {
                  key: "_$AU",
                  get: function() {
                      return this._$AM._$AU
                  }
              }, {
                  key: "v",
                  value: function(e) {
                      var t, n = this._$AD,
                          r = n.el.content,
                          i = n.parts,
                          o = (null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t ? t : Z).importNode(r, !0);
                      he.currentNode = o;
                      for (var a = he.nextNode(), s = 0, c = 0, u = i[0]; void 0 !== u;) {
                          if (s === u.index) {
                              var l = void 0;
                              2 === u.type ? l = new me(a, a.nextSibling, this, e) : 1 === u.type ? l = new u.ctor(a, u.name, u.strings, this, e) : 6 === u.type && (l = new Se(a, this, e)), this.u.push(l), u = i[++c]
                          }
                          s !== (null == u ? void 0 : u.index) && (a = he.nextNode(), s++)
                      }
                      return o
                  }
              }, {
                  key: "p",
                  value: function(e) {
                      var t, n = 0,
                          r = k(this.u);
                      try {
                          for (r.s(); !(t = r.n()).done;) {
                              var i = t.value;
                              void 0 !== i && (void 0 !== i.strings ? (i._$AI(e, i, n), n += i.strings.length - 2) : i._$AI(e[n])), n++
                          }
                      } catch (e) {
                          r.e(e)
                      } finally {
                          r.f()
                      }
                  }
              }]), e
          }(),
          me = function() {
              function e(t, n, r, i) {
                  var o;
                  A(this, e), this.type = 2, this._$AH = le, this._$AN = void 0, this._$AA = t, this._$AB = n, this._$AM = r, this.options = i, this._$Cm = null === (o = null == i ? void 0 : i.isConnected) || void 0 === o || o
              }
              return E(e, [{
                  key: "_$AU",
                  get: function() {
                      var e, t;
                      return null !== (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) && void 0 !== t ? t : this._$Cm
                  }
              }, {
                  key: "parentNode",
                  get: function() {
                      var e = this._$AA.parentNode,
                          t = this._$AM;
                      return void 0 !== t && 11 === e.nodeType && (e = t.parentNode), e
                  }
              }, {
                  key: "startNode",
                  get: function() {
                      return this._$AA
                  }
              }, {
                  key: "endNode",
                  get: function() {
                      return this._$AB
                  }
              }, {
                  key: "_$AI",
                  value: function(e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
                      e = pe(this, e, t), Q(e) ? e === le || null == e || "" === e ? (this._$AH !== le && this._$AR(), this._$AH = le) : e !== this._$AH && e !== ue && this.g(e) : void 0 !== e._$litType$ ? this.$(e) : void 0 !== e.nodeType ? this.T(e) : ee(e) ? this.k(e) : this.g(e)
                  }
              }, {
                  key: "O",
                  value: function(e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._$AB;
                      return this._$AA.parentNode.insertBefore(e, t)
                  }
              }, {
                  key: "T",
                  value: function(e) {
                      this._$AH !== e && (this._$AR(), this._$AH = this.O(e))
                  }
              }, {
                  key: "g",
                  value: function(e) {
                      this._$AH !== le && Q(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Z.createTextNode(e)), this._$AH = e
                  }
              }, {
                  key: "$",
                  value: function(e) {
                      var t, n = e.values,
                          r = e._$litType$,
                          i = "number" == typeof r ? this._$AC(e) : (void 0 === r.el && (r.el = de.createElement(r.h, this.options)), r);
                      if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === i) this._$AH.p(n);
                      else {
                          var o = new ve(i, this),
                              a = o.v(this.options);
                          o.p(n), this.T(a), this._$AH = o
                      }
                  }
              }, {
                  key: "_$AC",
                  value: function(e) {
                      var t = fe.get(e.strings);
                      return void 0 === t && fe.set(e.strings, t = new de(e)), t
                  }
              }, {
                  key: "k",
                  value: function(t) {
                      X(this._$AH) || (this._$AH = [], this._$AR());
                      var n, r, i = this._$AH,
                          o = 0,
                          a = k(t);
                      try {
                          for (a.s(); !(r = a.n()).done;) {
                              var s = r.value;
                              o === i.length ? i.push(n = new e(this.O(J()), this.O(J()), this, this.options)) : n = i[o], n._$AI(s), o++
                          }
                      } catch (e) {
                          a.e(e)
                      } finally {
                          a.f()
                      }
                      o < i.length && (this._$AR(n && n._$AB.nextSibling, o), i.length = o)
                  }
              }, {
                  key: "_$AR",
                  value: function() {
                      var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._$AA.nextSibling,
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      for (null === (e = this._$AP) || void 0 === e || e.call(this, !1, !0, n); t && t !== this._$AB;) {
                          var r = t.nextSibling;
                          t.remove(), t = r
                      }
                  }
              }, {
                  key: "setConnected",
                  value: function(e) {
                      var t;
                      void 0 === this._$AM && (this._$Cm = e, null === (t = this._$AP) || void 0 === t || t.call(this, e))
                  }
              }]), e
          }(),
          ye = function() {
              function e(t, n, r, i, o) {
                  A(this, e), this.type = 1, this._$AH = le, this._$AN = void 0, this.element = t, this.name = n, this._$AM = i, this.options = o, r.length > 2 || "" !== r[0] || "" !== r[1] ? (this._$AH = Array(r.length - 1).fill(new String), this.strings = r) : this._$AH = le
              }
              return E(e, [{
                  key: "tagName",
                  get: function() {
                      return this.element.tagName
                  }
              }, {
                  key: "_$AU",
                  get: function() {
                      return this._$AM._$AU
                  }
              }, {
                  key: "_$AI",
                  value: function(e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this,
                          n = arguments.length > 2 ? arguments[2] : void 0,
                          r = arguments.length > 3 ? arguments[3] : void 0,
                          i = this.strings,
                          o = !1;
                      if (void 0 === i) e = pe(this, e, t, 0), (o = !Q(e) || e !== this._$AH && e !== ue) && (this._$AH = e);
                      else {
                          var a, s, c = e;
                          for (e = i[0], a = 0; a < i.length - 1; a++)(s = pe(this, c[n + a], t, a)) === ue && (s = this._$AH[a]), o || (o = !Q(s) || s !== this._$AH[a]), s === le ? e = le : e !== le && (e += (null != s ? s : "") + i[a + 1]), this._$AH[a] = s
                      }
                      o && !r && this.j(e)
                  }
              }, {
                  key: "j",
                  value: function(e) {
                      e === le ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != e ? e : "")
                  }
              }]), e
          }(),
          ge = function(e) {
              h(n, e);
              var t = d(n);

              function n() {
                  var e;
                  return A(this, n), (e = t.apply(this, arguments)).type = 3, e
              }
              return E(n, [{
                  key: "j",
                  value: function(e) {
                      this.element[this.name] = e === le ? void 0 : e
                  }
              }]), n
          }(ye),
          be = V ? V.emptyScript : "",
          we = function(e) {
              h(n, e);
              var t = d(n);

              function n() {
                  var e;
                  return A(this, n), (e = t.apply(this, arguments)).type = 4, e
              }
              return E(n, [{
                  key: "j",
                  value: function(e) {
                      e && e !== le ? this.element.setAttribute(this.name, be) : this.element.removeAttribute(this.name)
                  }
              }]), n
          }(ye),
          ke = function(e) {
              h(n, e);
              var t = d(n);

              function n(e, r, i, o, a) {
                  var s;
                  return A(this, n), (s = t.call(this, e, r, i, o, a)).type = 5, s
              }
              return E(n, [{
                  key: "_$AI",
                  value: function(e) {
                      var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
                      if ((e = null !== (t = pe(this, e, n, 0)) && void 0 !== t ? t : le) !== ue) {
                          var r = this._$AH,
                              i = e === le && r !== le || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive,
                              o = e !== le && (r === le || i);
                          i && this.element.removeEventListener(this.name, this, r), o && this.element.addEventListener(this.name, this, e), this._$AH = e
                      }
                  }
              }, {
                  key: "handleEvent",
                  value: function(e) {
                      var t, n;
                      "function" == typeof this._$AH ? this._$AH.call(null !== (n = null === (t = this.options) || void 0 === t ? void 0 : t.host) && void 0 !== n ? n : this.element, e) : this._$AH.handleEvent(e)
                  }
              }]), n
          }(ye),
          Se = function() {
              function e(t, n, r) {
                  A(this, e), this.element = t, this.type = 6, this._$AN = void 0, this._$AM = n, this.options = r
              }
              return E(e, [{
                  key: "_$AU",
                  get: function() {
                      return this._$AM._$AU
                  }
              }, {
                  key: "_$AI",
                  value: function(e) {
                      pe(this, e)
                  }
              }]), e
          }(),
          xe = W.litHtmlPolyfillSupport;
      null == xe || xe(de, me), (null !== (H = W.litHtmlVersions) && void 0 !== H ? H : W.litHtmlVersions = []).push("2.5.0");
      var Ae, _e, Ee = function(e) {
          h(n, e);
          var t = d(n);

          function n() {
              var e;
              return A(this, n), (e = t.apply(this, arguments)).renderOptions = {
                  host: v(e)
              }, e._$Do = void 0, e
          }
          return E(n, [{
              key: "createRenderRoot",
              value: function() {
                  var e, t, r = c(w(n.prototype), "createRenderRoot", this).call(this);
                  return null !== (e = (t = this.renderOptions).renderBefore) && void 0 !== e || (t.renderBefore = r.firstChild), r
              }
          }, {
              key: "update",
              value: function(e) {
                  var t = this.render();
                  this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), c(w(n.prototype), "update", this).call(this, e), this._$Do = function(e, t, n) {
                      var r, i, o = null !== (r = null == n ? void 0 : n.renderBefore) && void 0 !== r ? r : t,
                          a = o._$litPart$;
                      if (void 0 === a) {
                          var s = null !== (i = null == n ? void 0 : n.renderBefore) && void 0 !== i ? i : null;
                          o._$litPart$ = a = new me(t.insertBefore(J(), s), s, void 0, null != n ? n : {})
                      }
                      return a._$AI(e), a
                  }(t, this.renderRoot, this.renderOptions)
              }
          }, {
              key: "connectedCallback",
              value: function() {
                  var e;
                  c(w(n.prototype), "connectedCallback", this).call(this), null === (e = this._$Do) || void 0 === e || e.setConnected(!0)
              }
          }, {
              key: "disconnectedCallback",
              value: function() {
                  var e;
                  c(w(n.prototype), "disconnectedCallback", this).call(this), null === (e = this._$Do) || void 0 === e || e.setConnected(!1)
              }
          }, {
              key: "render",
              value: function() {
                  return ue
              }
          }]), n
      }(D);
      Ee.finalized = !0, Ee._$litElement$ = !0, null === (Ae = globalThis.litElementHydrateSupport) || void 0 === Ae || Ae.call(globalThis, {
          LitElement: Ee
      });
      var Oe = globalThis.litElementPolyfillSupport;
      null == Oe || Oe({
          LitElement: Ee
      }), (null !== (_e = globalThis.litElementVersions) && void 0 !== _e ? _e : globalThis.litElementVersions = []).push("3.2.2");
      var Ce = function(e) {
              for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
              var i = 1 === e.length ? e[0] : n.reduce((function(t, n, r) {
                  return t + function(e) {
                      if (!0 === e._$cssResult$) return e.cssText;
                      if ("number" == typeof e) return e;
                      throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
                  }(n) + e[r + 1]
              }), e[0]);
              return new $(i, e, I)
          }(r || (r = s(["\n  :host {\n    font: normal 1.2rem/1.5 var(--themeFontFamily);\n  }\n\n  form {\n    max-width: 600px;\n  }\n\n  p {\n    margin-top: 0;\n    font-weight: 200;\n  }\n\n  a {\n    font-weight: 500;\n    text-decoration: none;\n    color: var(--activeColor);\n  }\n\n  fieldset {\n    padding: 0.7rem 2rem;\n    margin: 1.5rem 0;\n    box-sizing: border-box;\n    text-align: center;\n    border: none;\n    border-radius: 7px;\n    background-color: #fcf5e6;\n    box-shadow: 3px 3px 0 0 #c3ad97;\n  }\n\n  label {\n    display: none;\n  }\n\n  img {\n    width: 100%;\n    max-width: 215px;\n    max-height: 60px;\n    margin-bottom: 1.3rem;\n    vertical-align: middle;\n  }\n\n  input {\n    display: block;\n    width: 100%;\n    height: 3rem;\n    padding: 0.5rem 1rem 0.5rem 2.5rem;\n    font: normal 1.2rem/1.5 var(--themeFontFamily);\n    color: #858585;\n    box-sizing: border-box;\n    border: 1px solid var(--grey80);\n    border-radius: 2rem;\n    background: #eee;\n  }\n\n  input:focus {\n    border-color: #66afe9;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n    outline: none;\n  }\n\n  .search-field {\n    position: relative;\n    overflow: hidden;\n  }\n\n  .search-field svg {\n    position: absolute;\n    top: 2px;\n    left: 3px;\n    width: 24px;\n    height: 24px;\n  }\n\n  .search-field .fill-color {\n    fill: var(--iconFill);\n  }\n\n  input:focus + svg {\n    display: none;\n  }\n\n  @media (min-width: 890px) {\n    form {\n      margin: 0 auto;\n    }\n\n    p {\n      margin-bottom: 3rem;\n      font-size: 1.6rem;\n      text-align: center;\n    }\n\n    img {\n      margin: 0;\n    }\n\n    fieldset {\n      margin: 0 auto;\n      font-size: 0;\n    }\n\n    fieldset a,\n    .search-field {\n      display: inline-block;\n      width: 50%;\n      vertical-align: middle;\n    }\n\n    fieldset a {\n      text-align: center;\n    }\n\n    .search-field svg {\n      width: 28px;\n      height: 28px;\n    }\n\n    .search-field .fill-color {\n      fill: var(--desktopSearchIconFill);\n    }\n  }\n"]))),
          Pe = ce(i || (i = s(['\n  <svg\n    height="40"\n    viewBox="0 0 40 40"\n    width="40"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="searchTitleID searchDescID"\n  >\n    <title id="searchTitleID">Search icon</title>\n    <desc id="searchDescID">An illustration of a magnifying glass.</desc>\n    <path class="fill-color" d="m32.4526364 29.8875889-8.1719472-7.9751279c1.1046135-1.4876138 1.7652549-3.3102407 1.7652549-5.2846451 0-.101185-.0142895-.1981539-.030573-.2944743.0166158-.0976175.0309053-.196208.0309053-.2990145 0-4.9814145-4.152935-9.0343271-9.2572866-9.0343271-.0907218 0-.1781206.01394537-.2655193.02594487-.0880633-.0119995-.1747974-.02594487-.2655193-.02594487-5.1046839 0-9.25761889 4.0529126-9.25761889 9.0343271 0 .1011849.01395722.1981539.03057294.2947985-.01694804.0976176-.03090525.1958838-.03090525.2986903 0 4.9814145 4.1526027 9.0346514 9.2572866 9.0346514.0907218 0 .1777882-.0139454.2658516-.0262692.0873987.0123238.1741328.0262692.265187.0262692 1.7306942 0 3.3467399-.4747911 4.7338208-1.2852439l8.2882574 8.0886366c.3652137.3564177.843082.53414 1.3212826.53414.4782007 0 .9567336-.1780467 1.3212827-.53414.7294304-.7118622.7294304-1.8660845-.0003323-2.5782711zm-15.9526364-7.8875889c-.0832667-.0118703-.1652765-.0253024-.2513711-.0253024-2.8781993 0-5.2197212-2.3278242-5.2197212-5.1891862 0-.0974612-.013197-.1908615-.0289077-.2836371.0160249-.0940251.0292219-.1889874.0292219-.2880105 0-2.861362 2.3418361-5.1891861 5.2200354-5.1891861.0854662 0 .1677902-.0131198.2510569-.0246777.0826383.0115579.1649623.0246777.2510569.0246777 2.8781993 0 5.2197212 2.3278241 5.2197212 5.1891861 0 .0974612.0135112.1908616.0289077.2839496-.0157107.0940251-.0295361.1886749-.0295361.287698 0 2.861362-2.3415219 5.1891862-5.2197212 5.1891862-.0860946 0-.1684187.0134321-.2507427.0253024z" fill-rule="evenodd" />\n  </svg>\n']))),
          Ie = ce(o || (o = s(['\n<svg height="55" viewBox="0 0 205 55" width="205" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m41.5442526 5.47625158v36.05869762s-.0825635.8039669.6808836.8039669c.7634442 0 .5779563-.8039669.5779563-.8039669v-36.05869762h5.4674088l.0001982 44.76728562c.0070059.1547261.1602174 4.7191467-6.1484876 4.7191467-6.1999371 0-6.1018528-4.697561-6.0880787-5.0160398l.0008628-1.7899844h5.5092566l.0006247 1.8215446c.0064131.111431.0698016.5292973.6598981.5292973.6808836 0 .5564693-.5981684.5564693-.5981684v-4.3726361s-.9489378 1.6294184-3.4044061 1.2370455c-2.4554712-.39237-2.8060919-1.8148639-2.9712219-2.4967105-.1651328-.6795829-.2680542-1.174855-.2680542-2.0625 0-.8599178-.0383122-34.61864321-.0406109-36.64339281l-.0001077-.09488771zm30.6351382 1.09344342c6.9117365 0 6.7805382 5.4445918 6.7805382 5.4445918v39.5210721h-5.7365952v-1.1522413s-2.086754 2.4978424-5.1507198.8955592c-3.0650979-1.6011513-2.5436924-5.1879097-2.5436924-5.1879097l.0000351-8.8028589c.0025794-.2398669.0684122-2.0251881 1.4352444-3.3674745 1.4669498-1.4405832 3.4553051-1.2178245 3.4553051-1.2178245h2.5425603v-20.4327721s-.0656021-.8966882-.7170766-.8966882c-.6526037 0-.6854033.9566179-.6854033.9566179v16.080489h-6.030665l-.0005626-16.2852138c-.0087587-.3366877-.0366527-5.555347 6.6510318-5.555347zm28.5031432-6.569695v31.41468l.711418.0192211c.593792 0 .593792-.4941403.593792-.4941403v-24.86759869h5.897202v21.90049339s.079171 1.404399-.791723 2.512539c-.870895 1.1081429-1.820962 1.1477197-1.820962 1.1477197s.989654.3946337 1.860548 1.4439758c.870894 1.0482132.791724 2.4921889.791724 2.4921889v14.4024477h-5.936789l-.000309-13.3243353c-.002165-.043998-.019484-.2297601-.158037-.3860879-.158343-.1775284-.277102-.1775284-.277102-.1775284h-.890123v13.8879516h-5.8180296v-49.9715266zm-14.2340414 8.02384579c5.9675612 0 6.2060902 4.59291681 6.2148001 5.06804611l.0002664 15.2041578h-5.556805v-15.4269123s-.0531603-.5009227-.6062332-.5009227c-.5519582 0-.5790885.42064-.5790885.42064v32.2254321s.079173.4477782.6582614.4477782c.4900102 0 .5467595-.3205986.552623-.4192443l.00045-8.2163433h5.4775891l.000339 7.8754281c.0126595.1654646.3391417 5.1294029-6.0570166 5.1294029-6.504565 0-6.1358477-5.1867779-6.1358477-5.1867779l-.0006428-31.5032204c-.0096883-.3249184-.0495263-5.11746431 6.0313048-5.11746431zm-73.7580006-5.70016816v42.49270187h.5575988s.2081099.2374581.5010473-.0554082.1956685-.3901121.1956685-.3901121v-42.04605262l5.7004019.00115789.0007682 41.01721663c.015678.1470376.248026 2.5994908-1.4903372 4.3374305-1.792686 1.7922473-4.4053704 1.6101973-4.4053704 1.6101973h-7.83579091s-2.61381542.18205-4.40650134-1.6101973c-1.79268592-1.7922503-1.48843833-4.344369-1.48843833-4.344369v-41.01027813l5.69927118-.00115789v42.04605262s-.09726862.0972458.19566849.3901121c.29293741.2928663.50217829.0554082.50217829.0554082h.55646783v-42.49270187zm44.8442957-.59701342s2.8128759.11081342 4.2515488 1.54913579 1.3572386 4.52302632 1.3572386 4.52302632v20.17269738s.1085791 1.6825658-.8324397 2.4967105c-.9410187.8141447-1.5743967.9950658-1.5743967.9950658s1.0495978.5789474 1.6105898 1.3026316c.5609919.7236842.7419571 1.3930921.7419571 2.3881579l.0007115 7.6426204c.0126941.1435677.1783816 2.2493941-.8874408 3.6468533-1.1038873 1.4473684-2.4430294 2.1348684-5.2298927 2.1348684h-6.4604558v-46.85176739zm14.5337626 35.74095399s-.1673942-.0203558-.3777654.1843136c-.2092421.2069274-.1459043.3301795-.1459043.3301795v8.4524058s.1673942.4523026.7329089.4523026c.5643854 0 .648084-.4523026.648084-.4523026v-8.9465489zm-44.3104484-34.72101373c5.9643432 0 6.16707 4.5349604 6.1720848 5.00409423l-.0000412 36.6461958h-5.2231058v-1.0674342s-1.8990049 2.3135258-4.6881295.8299731c-2.7891246-1.4824208-2.3140925-4.8057147-2.3140925-4.8057147l.0000416-8.1558683c.0025667-.229176.064831-1.8776574 1.3051717-3.1166422 1.3357486-1.3354261 3.1454001-1.1273669 3.1454001-1.1273669h2.3140896v-18.92660288s-.0588122-.831105-.6526037-.831105-.6232005.88538132-.6232005.88538132v14.89545606h-5.4888988l-.0005553-15.08585244c-.0080458-.3266358-.0237133-5.14451389 6.0538395-5.14451389zm28.932117 33.13115253-.4776089-.0000064v8.3947599h.705764c.5067025 0 .560992-.7236842.560992-.7236842v-6.712171c0-.9769737-.7962466-.9589047-.7962466-.9589047zm-29.0339092-4.5105709s-.1526883-.0203529-.3438338.1707431c-.1900134.191099-.1323304.305305-.1323304.305305v7.8282282s.1515591.419511.6661776.419511c.5146186 0 .5915302-.419511.5915302-.419511v-8.2861842zm29.0087131-25.54039926c-.6808813 0-.5443092.01385177-.4995274.01731471l.0109215.0007774v25.52796055s1.3391421.1085526 1.3391421-1.3569079v-23.35690792s.1085791-.83223684-.8505362-.83223684z" fill="#ab2e33"/><path d="m164.347608 2.25946661v7.4442539c.21729-.35229187 1.198489-1.67028746 3.735798-1.67028746 3.534354 0 3.281982 3.91684325 3.281982 3.91684325v39.9180342h-3.988173l-.000094-38.4191634c-.002249-.1296195-.058484-1.7498629-1.464346-1.7498629-1.087582 0-1.450864.5267465-1.565167 1.1683005v39.1020256h-4.190748v-49.71014369zm23.367699 5.4959617c3.58528 0 3.32838 3.94160559 3.32838 3.94160559v40.1712766h-4.045888l-.000761-38.6884533c-.008742-.2394578-.118025-1.7360686-1.484053-1.7360686-1.103423 0-1.471231.5301234-1.587799 1.1750516v39.3496435h-4.250729v-43.92154285h4.250729v1.38890288c.220685-.35566881 1.216596-1.68041542 3.790121-1.68041542zm11.392998-.52112204c6.124855 0 5.736674 5.39691513 5.736674 5.39691513v24.2844279h-7.17056l.000077 9.2728055c.001997 1.1852594.055922 2.3291557 1.511897 2.3291557 1.511974 0 1.588933-1.3483852 1.588933-1.3483852v-6.1679026h4.108134l-.00035 5.6892637c-.01289 1.7887967-.410235 4.8333128-5.736327 4.8333128-5.22451 0-5.490421-3.8596058-5.502952-4.1455025l-.000589-34.6706379s-.65866-5.47345253 5.465063-5.47345253zm-72.839588-6.23430627c4.55044 0 4.748706 4.49835393 4.756437 5.01739476l.000233 44.68489444h-4.246265l-.000015-45.39546442c-.001065-.11122824-.038841-1.27912478-1.155468-1.27912478-.689016 0-1.239407-.0003988-1.575847-.00072723l-.366181-.00042531v46.67574174h-4.288077v-46.69262361h-1.942025c-1.0608 0-1.147931 1.05402663-1.154906 1.2547936l-.00058 45.43783001h-4.296023l.000269-45.03840883c.008379-.46638804.223774-4.66388037 5.263374-4.66388037zm12.746531 4.73059864c5.939252 0 5.529572 4.80151166 5.529572 4.80151166v39.1864407h-3.791254v-1.7040541s-.748065 1.776088-2.920962 1.8481219-4.418224-.1913422-4.418224-3.9371049l.000537-10.0356421c.009666-.3007246.1911-3.4583326 3.548528-3.4583326h3.5253l-.000596-22.2422593c-.009853-.1121552-.157986-1.45801702-1.592862-1.45801702-1.497271 0-1.484813 1.94491522-1.484813 1.94491522v17.4051907h-3.99949l-.000952-17.7112484c-.014831-.304231-.125641-4.63952176 5.605216-4.63952176zm12.457944.74622797c5.704988 0 5.452616 4.56852529 5.452616 4.56852529v16.2188817h-3.836522v-16.7703934s-.202578-1.40578478-1.51537-1.40578478c-1.193447 0-1.427274 1.16180558-1.459925 1.37304298l-.004518.0327418v32.5368129c0 .9038006.353096 1.9584201 1.565167 1.9584201 1.212068 0 1.363719-1.3551363 1.363719-1.3551363v-9.239474h3.786725l.000848 7.3579585c.013087 2.5821014.10472 5.9480539-5.301813 5.9480539-5.604264 0-5.201371-4.7699955-5.201371-4.7699955l-.000475-31.3866454c-.017056-.171763-.453979-5.06700779 5.150919-5.06700779zm26.215101 3.66584829v37.0051649h-3.533221v-37.0051649zm-37.199548 25.1702202h-1.714552s-.530775.0720339-.917823.4558391c-.385924.3838082-.409681.9848389-.409681.9848389v8.5236357s.096195 1.56111 1.568559 1.56111c1.473497 0 1.473497-1.6095052 1.473497-1.6095052zm58.697648-25.2264959c-1.433886 0-1.511974 1.7344408-1.511974 1.7344408v21.9725922h3.100907v-22.1256642s-.155047-1.5813688-1.588933-1.5813688zm-23.264712-5.31700073c1.129455 0 2.045015.68657238 2.045015 1.53184407 0 .84639831-.91556 1.53184695-2.045015 1.53184695s-2.045012-.68544864-2.045012-1.53184695c0-.84527169.915557-1.53184407 2.045012-1.53184407z" fill="#211e1e"/></g></svg>\n']))),
          Re = function(e) {
              h(n, e);
              var t = d(n);

              function n() {
                  var e;
                  return A(this, n), (e = t.call(this)).waybackPagesArchived = "", e
              }
              return E(n, [{
                  key: "handleSubmit",
                  value: function(e) {
                      e.preventDefault();
                      var t = e.target.querySelector("#url").value;
                      this.emitWaybackSearchSubmitted(t), this.queryHandler.performQuery(t)
                  }
              }, {
                  key: "emitWaybackSearchSubmitted",
                  value: function(e) {
                      this.dispatchEvent(new CustomEvent("waybackSearchSubmitted", {
                          detail: {
                              query: e
                          }
                      }))
                  }
              }, {
                  key: "emitWaybackMachineStatsLinkClicked",
                  value: function() {
                      this.dispatchEvent(new CustomEvent("waybackMachineStatsLinkClicked"))
                  }
              }, {
                  key: "emitWaybackMachineLogoLinkClicked",
                  value: function() {
                      this.dispatchEvent(new CustomEvent("waybackMachineLogoLink"))
                  }
              }, {
                  key: "render",
                  value: function() {
                      var e;
                      return this.waybackPagesArchived = null != (e = this.getAttribute("waybackPagesArchived")) ? e : "", ce(a || (a = s(['\n      <form action="" method="post" @submit=', ">\n        <p>\n          Search the history of over ", "\n          <a\n            @click=", '\n            data-event-click-tracking="TopNav|WaybackMachineStatsLink"\n            href="https://blog.archive.org/2016/10/23/defining-web-pages-web-sites-and-web-captures/"\n            >web pages</a\n          >\n          on the Internet.\n        </p>\n        <fieldset>\n          <a\n            @click=', '\n            data-event-click-tracking="TopNav|WaybackMachineLogoLink"\n            href=', "\n            >", '</a>\n          <label for="url">Search the Wayback Machine</label>\n          <div class="search-field">\n            <input type="text" name="url" id="url" placeholder="enter URL or keywords" />\n            ', "\n          </div>\n        </fieldset>\n      </form>\n    "])), this.handleSubmit, this.waybackPagesArchived, this.emitWaybackMachineStatsLinkClicked, this.emitWaybackMachineLogoLinkClicked, "".concat(this.baseHost, "/web/"), Ie, Pe)
                  }
              }], [{
                  key: "styles",
                  get: function() {
                      return Ce
                  }
              }, {
                  key: "properties",
                  get: function() {
                      return {
                          baseHost: {
                              type: String
                          },
                          queryHandler: {
                              type: Object
                          },
                          waybackPagesArchived: {
                              type: String
                          }
                      }
                  }
              }]), n
          }(Ee);
      customElements.define("ia-wayback-search", Re)
  }, function(e, t, n) {
      var r = n(3),
          i = n(6),
          o = r.document,
          a = i(o) && i(o.createElement);
      e.exports = function(e) {
          return a ? o.createElement(e) : {}
      }
  }, function(e, t, n) {
      var r = n(3),
          i = n(28);
      e.exports = function(e, t) {
          try {
              i(r, e, t)
          } catch (n) {
              r[e] = t
          }
          return t
      }
  }, function(e, t, n) {
      var r = n(119),
          i = Function.toString;
      "function" != typeof r.inspectSource && (r.inspectSource = function(e) {
          return i.call(e)
      }), e.exports = r.inspectSource
  }, function(e, t, n) {
      var r = n(3),
          i = n(117),
          o = "__core-js_shared__",
          a = r[o] || i(o, {});
      e.exports = a
  }, function(e, t) {
      e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
  }, function(e, t) {
      t.f = Object.getOwnPropertySymbols
  }, function(e, t, n) {
      var r = n(83),
          i = n(2);
      e.exports = !!Object.getOwnPropertySymbols && !i((function() {
          var e = Symbol();
          return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && r && r < 41
      }))
  }, function(e, t, n) {
      var r = {};
      r[n(4)("toStringTag")] = "z", e.exports = "[object z]" === String(r)
  }, function(e, t, n) {
      var r = n(54),
          i = n(27),
          o = function(e) {
              return function(t, n) {
                  var o, a, s = String(i(t)),
                      c = r(n),
                      u = s.length;
                  return c < 0 || c >= u ? e ? "" : void 0 : (o = s.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? e ? s.charAt(c) : o : e ? s.slice(c, c + 2) : a - 56320 + (o - 55296 << 10) + 65536
              }
          };
      e.exports = {
          codeAt: o(!1),
          charAt: o(!0)
      }
  }, function(e, t, n) {
      "use strict";
      var r = n(1),
          i = n(171),
          o = n(82),
          a = n(107),
          s = n(38),
          c = n(28),
          u = n(22),
          l = n(4),
          f = n(42),
          h = n(72),
          d = n(172),
          p = d.IteratorPrototype,
          v = d.BUGGY_SAFARI_ITERATORS,
          m = l("iterator"),
          y = "keys",
          g = "values",
          b = "entries",
          w = function() {
              return this
          };
      e.exports = function(e, t, n, l, d, k, S) {
          i(n, t, l);
          var x, A, _, E = function(e) {
                  if (e === d && R) return R;
                  if (!v && e in P) return P[e];
                  switch (e) {
                      case y:
                      case g:
                      case b:
                          return function() {
                              return new n(this, e)
                          }
                  }
                  return function() {
                      return new n(this)
                  }
              },
              O = t + " Iterator",
              C = !1,
              P = e.prototype,
              I = P[m] || P["@@iterator"] || d && P[d],
              R = !v && I || E(d),
              $ = "Array" == t && P.entries || I;
          if ($ && (x = o($.call(new e)), p !== Object.prototype && x.next && (f || o(x) === p || (a ? a(x, p) : "function" != typeof x[m] && c(x, m, w)), s(x, O, !0, !0), f && (h[O] = w))), d == g && I && I.name !== g && (C = !0, R = function() {
                  return I.call(this)
              }), f && !S || P[m] === R || c(P, m, R), h[t] = R, d)
              if (A = {
                      values: E(g),
                      keys: k ? R : E(y),
                      entries: E(b)
                  }, S)
                  for (_ in A)(v || C || !(_ in P)) && u(P, _, A[_]);
              else r({
                  target: t,
                  proto: !0,
                  forced: v || C
              }, A);
          return A
      }
  }, function(e, t, n) {
      var r = n(45),
          i = n(3);
      e.exports = "process" == r(i.process)
  }, function(e, t, n) {
      "use strict";
      var r = n(7);
      e.exports = function() {
          var e = r(this),
              t = "";
          return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
      }
  }, function(e, t, n) {
      "use strict";
      var r = n(2);

      function i(e, t) {
          return RegExp(e, t)
      }
      t.UNSUPPORTED_Y = r((function() {
          var e = i("a", "y");
          return e.lastIndex = 2, null != e.exec("abcd")
      })), t.BROKEN_CARET = r((function() {
          var e = i("^r", "gy");
          return e.lastIndex = 2, null != e.exec("str")
      }))
  }, function(e, t, n) {
      var r = n(130);
      e.exports = function(e) {
          if (r(e)) throw TypeError("The method doesn't accept regular expressions");
          return e
      }
  }, function(e, t, n) {
      var r = n(6),
          i = n(45),
          o = n(4)("match");
      e.exports = function(e) {
          var t;
          return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e))
      }
  }, function(e, t, n) {
      var r = n(4)("match");
      e.exports = function(e) {
          var t = /./;
          try {
              "/./" [e](t)
          } catch (n) {
              try {
                  return t[r] = !1, "/./" [e](t)
              } catch (e) {}
          }
          return !1
      }
  }, function(e, t, n) {
      "use strict";
      var r = n(124).charAt;
      e.exports = function(e, t, n) {
          return t + (n ? r(e, t).length : 1)
      }
  }, function(e, t, n) {
      n(94)("toStringTag")
  }, function(e, t, n) {
      var r = n(3);
      n(38)(r.JSON, "JSON", !0)
  }, function(e, t, n) {
      n(38)(Math, "Math", !0)
  }, function(e, t, n) {
      n(94)("toPrimitive")
  }, function(e, t, n) {
      var r = n(28),
          i = n(197),
          o = n(4)("toPrimitive"),
          a = Date.prototype;
      o in a || r(a, o, i)
  }, function(e, t, n) {
      "use strict";
      var r = n(1),
          i = n(53).filter;
      r({
          target: "Array",
          proto: !0,
          forced: !n(71)("filter")
      }, {
          filter: function(e) {
              return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
          }
      })
  }, function(e, t, n) {
      "use strict";
      var r = n(1),
          i = n(145).includes,
          o = n(84);
      r({
          target: "Array",
          proto: !0
      }, {
          includes: function(e) {
              return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
          }
      }), o("includes")
  }, function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return i
      }));
      n(138);
      var r, i = function(e) {
          return function(t) {
              return "function" == typeof t ? (n = e, r = t, customElements.define(n, r), r) : function(e, t) {
                  return {
                      kind: t.kind,
                      elements: t.elements,
                      finisher: function(t) {
                          customElements.define(e, t)
                      }
                  }
              }(e, t);
              var n, r
          }
      };
      null === (r = window.HTMLSlotElement) || void 0 === r || r.prototype.assignedElements
  }, function(e, t, n) {
      "use strict";
      var r = n(1),
          i = n(129),
          o = n(27);
      r({
          target: "String",
          proto: !0,
          forced: !n(131)("includes")
      }, {
          includes: function(e) {
              return !!~String(o(this)).indexOf(i(e), arguments.length > 1 ? arguments[1] : void 0)
          }
      })
  }, function(e, t, n) {
      "use strict";
      var r = n(96),
          i = n(7),
          o = n(15),
          a = n(27),
          s = n(132),
          c = n(97);
      r("match", 1, (function(e, t, n) {
          return [function(t) {
              var n = a(this),
                  r = null == t ? void 0 : t[e];
              return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
          }, function(e) {
              var r = n(t, e, this);
              if (r.done) return r.value;
              var a = i(e),
                  u = String(this);
              if (!a.global) return c(a, u);
              var l = a.unicode;
              a.lastIndex = 0;
              for (var f, h = [], d = 0; null !== (f = c(a, u));) {
                  var p = String(f[0]);
                  h[d] = p, "" === p && (a.lastIndex = s(u, o(a.lastIndex), l)), d++
              }
              return 0 === d ? null : h
          }]
      }))
  }, function(e, t, n) {
      var r = n(7),
          i = n(55),
          o = n(4)("species");
      e.exports = function(e, t) {
          var n, a = r(e).constructor;
          return void 0 === a || null == (n = r(a)[o]) ? t : i(n)
      }
  }, function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return o
      }));
      n(39);
      var r = n(76),
          i = Object.assign;

      function o(e) {
          return Object(r.a)(i(i({}, e), {
              state: !0
          }))
      }
  }, function(e, t, n) {
      var r = n(32),
          i = n(15),
          o = n(81),
          a = function(e) {
              return function(t, n, a) {
                  var s, c = r(t),
                      u = i(c.length),
                      l = o(a, u);
                  if (e && n != n) {
                      for (; u > l;)
                          if ((s = c[l++]) != s) return !0
                  } else
                      for (; u > l; l++)
                          if ((e || l in c) && c[l] === n) return e || l || 0;
                  return !e && -1
              }
          };
      e.exports = {
          includes: a(!0),
          indexOf: a(!1)
      }
  }, function(e, t, n) {
      "use strict";
      var r = n(2);
      e.exports = function(e, t) {
          var n = [][e];
          return !!n && r((function() {
              n.call(null, t || function() {
                  throw 1
              }, 1)
          }))
      }
  }, function(e, t, n) {
      "use strict";
      var r, i;
      n.d(t, "a", (function() {
          return r
      })), (i = r || (r = {})).Off = "off", i.Fixed = "fixed", i.PageBottom = "pageBottom"
  }, function(e, t, n) {
      var r = n(2);
      e.exports = !r((function() {
          return Object.isExtensible(Object.preventExtensions({}))
      }))
  }, function(e, t, n) {
      var r = n(27),
          i = "[" + n(168) + "]",
          o = RegExp("^" + i + i + "*"),
          a = RegExp(i + i + "*$"),
          s = function(e) {
              return function(t) {
                  var n = String(r(t));
                  return 1 & e && (n = n.replace(o, "")), 2 & e && (n = n.replace(a, "")), n
              }
          };
      e.exports = {
          start: s(1),
          end: s(2),
          trim: s(3)
      }
  }, function(e, t, n) {
      var r = n(4),
          i = n(72),
          o = r("iterator"),
          a = Array.prototype;
      e.exports = function(e) {
          return void 0 !== e && (i.Array === e || a[o] === e)
      }
  }, function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return i
      }));
      var r = n(78);

      function i(e) {
          return Object(r.b)({
              descriptor: function(t) {
                  return {
                      get: function() {
                          var t, n;
                          return null !== (n = null === (t = this.renderRoot) || void 0 === t ? void 0 : t.querySelectorAll(e)) && void 0 !== n ? n : []
                      },
                      enumerable: !0,
                      configurable: !0
                  }
              }
          })
      }
  }, function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return o
      }));
      n(26);
      var r = n(75);

      function i(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
      }
      var o = function() {
          function e(t) {
              ! function(e, t) {
                  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
              }(this, e), this.generator = t.generator
          }
          var t, n, o;
          return t = e, (n = [{
              key: "get",
              value: function() {
                  return Object(r.b)(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  if (!this.cachedResponse) {
                                      e.next = 2;
                                      break
                                  }
                                  return e.abrupt("return", this.cachedResponse);
                              case 2:
                                  if (!this.previousPromise) {
                                      e.next = 5;
                                      break
                                  }
                                  return this.previousPromise = this.previousPromise.then((function(e) {
                                      return e
                                  })), e.abrupt("return", this.previousPromise);
                              case 5:
                                  return this.previousPromise = this.generateSingletonAndCache(), e.abrupt("return", this.previousPromise);
                              case 7:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  })))
              }
          }, {
              key: "reset",
              value: function() {
                  this.cachedResponse = void 0, this.previousPromise = void 0
              }
          }, {
              key: "generateSingletonAndCache",
              value: function() {
                  return Object(r.b)(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                      var t;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return e.next = 2, this.generator();
                              case 2:
                                  return t = e.sent, this.cachedResponse = t, e.abrupt("return", t);
                              case 5:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  })))
              }
          }]) && i(t.prototype, n), o && i(t, o), e
      }()
  }, function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return f
      }));
      n(192), n(50), n(30), n(59);
      var r, i, o, a, s, c, u = n(13);

      function l(e, t) {
          return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
              raw: {
                  value: Object.freeze(t)
              }
          }))
      }

      function f(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "long",
              n = h(e),
              r = d(e, n);
          return p(r, n, t)
      }

      function h(e) {
          var t = 1;
          return e >= 1e9 ? t = 1e9 : e >= 1e6 ? t = 1e6 : e >= 1e3 && (t = 1e3), t
      }

      function d() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = e / t,
              r = n < 10;
          return r ? Math.round(10 * (n + Number.EPSILON)) / 10 : Math.round(n)
      }

      function p(e, t, n) {
          switch (t) {
              case 1e9:
                  return "short" === n ? Object(u.c)(Object(u.d)(r || (r = l(["", "B"])), e)) : Object(u.c)(Object(u.d)(i || (i = l(["", " billion"])), e));
              case 1e6:
                  return "short" === n ? Object(u.c)(Object(u.d)(o || (o = l(["", "M"])), e)) : Object(u.c)(Object(u.d)(a || (a = l(["", " million"])), e));
              case 1e3:
                  return "short" === n ? Object(u.c)(Object(u.d)(s || (s = l(["", "K"])), e)) : Object(u.c)(Object(u.d)(c || (c = l(["", " thousand"])), e));
              default:
                  return "".concat(e)
          }
      }
  }, function(e, t, n) {
      "use strict";
      n.r(t), n.d(t, "AnalyticsHandler", (function() {
          return f
      }));
      n(39), n(8), n(36), n(182), n(9), n(11), n(12), n(102), n(181), n(44), n(31), n(51), n(101), n(24);

      function r(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function i(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
      }

      function o(e, t, n) {
          return t && i(e.prototype, t), n && i(e, n), e
      }
      var a = Object.assign,
          s = function() {
              function e(t) {
                  var n, i, o, a;
                  r(this, e), this.ARCHIVE_ANALYTICS_VERSION = 2, this.DEFAULT_SERVICE = "ao_2", this.NO_SAMPLING_SERVICE = "ao_no_sampling", this.DEFAULT_IMAGE_URL = "https://analytics.archive.org/0.gif", this.defaultService = null !== (n = null == t ? void 0 : t.defaultService) && void 0 !== n ? n : this.DEFAULT_SERVICE, this.imageUrl = null !== (i = null == t ? void 0 : t.imageUrl) && void 0 !== i ? i : this.DEFAULT_IMAGE_URL, this.imageContainer = null !== (o = null == t ? void 0 : t.imageContainer) && void 0 !== o ? o : document.body, this.requireImagePing = null !== (a = null == t ? void 0 : t.requireImagePing) && void 0 !== a && a
              }
              return o(e, [{
                  key: "sendPing",
                  value: function(e) {
                      var t = this.generateTrackingUrl(e).toString();
                      if (this.requireImagePing) this.sendPingViaImage(t);
                      else {
                          var n = navigator.sendBeacon && navigator.sendBeacon.bind(navigator);
                          try {
                              n(t)
                          } catch (e) {
                              this.sendPingViaImage(t)
                          }
                      }
                  }
              }, {
                  key: "sendEvent",
                  value: function(e) {
                      var t = e.label && e.label.trim().length > 0 ? e.label : window.location.pathname,
                          n = a({
                              kind: "event",
                              ec: e.category,
                              ea: e.action,
                              el: t,
                              cache_bust: Math.random()
                          }, e.eventConfiguration);
                      this.sendPing(n)
                  }
              }, {
                  key: "sendEventNoSampling",
                  value: function(e) {
                      var t = e.eventConfiguration || {};
                      t.service = this.NO_SAMPLING_SERVICE;
                      var n = e;
                      n.eventConfiguration = t, this.sendEvent(n)
                  }
              }, {
                  key: "sendPingViaImage",
                  value: function(e) {
                      var t = new Image(1, 1);
                      t.src = e, t.alt = "", this.imageContainer.appendChild(t)
                  }
              }, {
                  key: "generateTrackingUrl",
                  value: function(e) {
                      var t, n = null != e ? e : {};
                      n.service = null !== (t = n.service) && void 0 !== t ? t : this.defaultService;
                      var r = new URL(this.imageUrl),
                          i = Object.keys(n);
                      return i.forEach((function(e) {
                          var t = n[e];
                          r.searchParams.append(e, t)
                      })), r.searchParams.append("version", "".concat(this.ARCHIVE_ANALYTICS_VERSION)), r.searchParams.append("count", "".concat(i.length + 2)), r
                  }
              }]), e
          }(),
          c = function() {
              function e(t) {
                  r(this, e), this.analyticsManager = t
              }
              return o(e, [{
                  key: "trackIaxParameter",
                  value: function(e) {
                      var t = new URL(e).searchParams.get("iax");
                      if (t) {
                          var n = t.split("|"),
                              r = n.length >= 1 ? n[1] : "",
                              i = n.length >= 2 ? n[2] : "";
                          this.analyticsManager.sendEventNoSampling({
                              category: n[0],
                              action: r,
                              label: i
                          })
                      }
                  }
              }, {
                  key: "trackPageView",
                  value: function(e) {
                      var t = {
                          kind: "pageview"
                      };
                      t.timediff = (new Date).getTimezoneOffset() / 60 * -1, t.locale = navigator.language, t.referrer = "" === document.referrer ? "-" : document.referrer;
                      var n = this.domInteractive,
                          r = this.defaultFontSize;
                      n && (t.loadtime = n), r && (t.iaprop_fontSize = r), "devicePixelRatio" in window && (t.iaprop_devicePixelRatio = window.devicePixelRatio), (null == e ? void 0 : e.mediaType) && (t.iaprop_mediaType = e.mediaType), (null == e ? void 0 : e.mediaLanguage) && (t.iaprop_mediaLanguage = e.mediaLanguage), (null == e ? void 0 : e.primaryCollection) && (t.iaprop_primaryCollection = e.primaryCollection), (null == e ? void 0 : e.page) && (t.page = e.page), this.analyticsManager.sendPing(t)
                  }
              }, {
                  key: "defaultFontSize",
                  get: function() {
                      var e = window.getComputedStyle(document.documentElement);
                      if (!e) return null;
                      var t = e.fontSize,
                          n = 1.6 * parseFloat(t),
                          r = t.replace(/(\d*\.\d+)|\d+/, "");
                      return "".concat(n).concat(r)
                  }
              }, {
                  key: "domInteractive",
                  get: function() {
                      if (window.performance && window.performance.getEntriesByType) {
                          var e = window.performance.getEntriesByType("navigation");
                          if (0 !== e.length) return e[0].domInteractive
                      }
                  }
              }]), e
          }();

      function u(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
      }

      function l(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n, e
      }
      var f = function() {
          function e(t) {
              ! function(e, t) {
                  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
              }(this, e), l(this, "analyticsBackend", void 0), l(this, "analyticsHelpers", void 0), t.enableAnalytics && (this.analyticsBackend = new s, this.analyticsHelpers = new c(this.analyticsBackend))
          }
          var t, n, r;
          return t = e, (n = [{
              key: "sendPing",
              value: function(e) {
                  var t;
                  null == (t = this.analyticsBackend) || t.sendPing(e)
              }
          }, {
              key: "sendEvent",
              value: function(e) {
                  var t;
                  null == (t = this.analyticsBackend) || t.sendEvent(e)
              }
          }, {
              key: "send_event",
              value: function(e, t, n, r) {
                  this.sendEvent({
                      category: e,
                      action: t,
                      label: n,
                      eventConfiguration: r
                  })
              }
          }, {
              key: "sendEventNoSampling",
              value: function(e) {
                  var t;
                  null == (t = this.analyticsBackend) || t.sendEventNoSampling(e)
              }
          }, {
              key: "trackIaxParameter",
              value: function(e) {
                  var t;
                  null == (t = this.analyticsHelpers) || t.trackIaxParameter(e)
              }
          }, {
              key: "trackPageView",
              value: function(e) {
                  var t;
                  null == (t = this.analyticsHelpers) || t.trackPageView(e)
              }
          }]) && u(t.prototype, n), r && u(t, r), e
      }()
  }, function(e, t, n) {
      var r = n(14),
          i = n(2),
          o = n(116);
      e.exports = !r && !i((function() {
          return 7 != Object.defineProperty(o("div"), "a", {
              get: function() {
                  return 7
              }
          }).a
      }))
  }, function(e, t, n) {
      var r = n(3),
          i = n(118),
          o = r.WeakMap;
      e.exports = "function" == typeof o && /native code/.test(i(o))
  }, function(e, t, n) {
      var r = n(10),
          i = n(193),
          o = n(37),
          a = n(16);
      e.exports = function(e, t) {
          for (var n = i(t), s = a.f, c = o.f, u = 0; u < n.length; u++) {
              var l = n[u];
              r(e, l) || s(e, l, c(t, l))
          }
      }
  }, function(e, t, n) {
      var r = n(3);
      e.exports = r
  }, function(e, t, n) {
      var r = n(10),
          i = n(32),
          o = n(145).indexOf,
          a = n(67);
      e.exports = function(e, t) {
          var n, s = i(e),
              c = 0,
              u = [];
          for (n in s) !r(a, n) && r(s, n) && u.push(n);
          for (; t.length > c;) r(s, n = t[c++]) && (~o(u, n) || u.push(n));
          return u
      }
  }, function(e, t, n) {
      var r = n(2);
      e.exports = !r((function() {
          function e() {}
          return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
      }))
  }, function(e, t, n) {
      var r = n(14),
          i = n(16),
          o = n(7),
          a = n(69);
      e.exports = r ? Object.defineProperties : function(e, t) {
          o(e);
          for (var n, r = a(t), s = r.length, c = 0; s > c;) i.f(e, n = r[c++], t[n]);
          return e
      }
  }, function(e, t, n) {
      var r = n(41);
      e.exports = r("document", "documentElement")
  }, function(e, t, n) {
      "use strict";
      var r = n(14),
          i = n(2),
          o = n(69),
          a = n(121),
          s = n(91),
          c = n(21),
          u = n(85),
          l = Object.assign,
          f = Object.defineProperty;
      e.exports = !l || i((function() {
          if (r && 1 !== l({
                  b: 1
              }, l(f({}, "a", {
                  enumerable: !0,
                  get: function() {
                      f(this, "b", {
                          value: 3,
                          enumerable: !1
                      })
                  }
              }), {
                  b: 2
              })).b) return !0;
          var e = {},
              t = {},
              n = Symbol(),
              i = "abcdefghijklmnopqrst";
          return e[n] = 7, i.split("").forEach((function(e) {
              t[e] = e
          })), 7 != l({}, e)[n] || o(l({}, t)).join("") != i
      })) ? function(e, t) {
          for (var n = c(e), i = arguments.length, l = 1, f = a.f, h = s.f; i > l;)
              for (var d, p = u(arguments[l++]), v = f ? o(p).concat(f(p)) : o(p), m = v.length, y = 0; m > y;) d = v[y++], r && !h.call(p, d) || (n[d] = p[d]);
          return n
      } : l
  }, function(e, t, n) {
      var r = n(122);
      e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
  }, function(e, t) {
      e.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0
      }
  }, function(e, t, n) {
      var r = n(4);
      t.f = r
  }, function(e, t, n) {
      var r = n(32),
          i = n(64).f,
          o = {}.toString,
          a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      e.exports.f = function(e) {
          return a && "[object Window]" == o.call(e) ? function(e) {
              try {
                  return i(e)
              } catch (e) {
                  return a.slice()
              }
          }(e) : i(r(e))
      }
  }, function(e, t) {
      e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
  }, function(e, t, n) {
      "use strict";
      var r = n(47),
          i = n(21),
          o = n(199),
          a = n(150),
          s = n(15),
          c = n(88),
          u = n(89);
      e.exports = function(e) {
          var t, n, l, f, h, d, p = i(e),
              v = "function" == typeof this ? this : Array,
              m = arguments.length,
              y = m > 1 ? arguments[1] : void 0,
              g = void 0 !== y,
              b = u(p),
              w = 0;
          if (g && (y = r(y, m > 2 ? arguments[2] : void 0, 2)), null == b || v == Array && a(b))
              for (n = new v(t = s(p.length)); t > w; w++) d = g ? y(p[w], w) : p[w], c(n, w, d);
          else
              for (h = (f = b.call(p)).next, n = new v; !(l = h.call(f)).done; w++) d = g ? o(f, y, [l.value, w], !0) : l.value, c(n, w, d);
          return n.length = w, n
      }
  }, function(e, t, n) {
      var r = n(7);
      e.exports = function(e) {
          var t = e.return;
          if (void 0 !== t) return r(t.call(e)).value
      }
  }, function(e, t, n) {
      "use strict";
      var r = n(172).IteratorPrototype,
          i = n(46),
          o = n(57),
          a = n(38),
          s = n(72),
          c = function() {
              return this
          };
      e.exports = function(e, t, n) {
          var u = t + " Iterator";
          return e.prototype = i(r, {
              next: o(1, n)
          }), a(e, u, !1, !0), s[u] = c, e
      }
  }, function(e, t, n) {
      "use strict";
      var r, i, o, a = n(2),
          s = n(82),
          c = n(28),
          u = n(10),
          l = n(4),
          f = n(42),
          h = l("iterator"),
          d = !1;
      [].keys && ("next" in (o = [].keys()) ? (i = s(s(o))) !== Object.prototype && (r = i) : d = !0);
      var p = null == r || a((function() {
          var e = {};
          return r[h].call(e) !== e
      }));
      p && (r = {}), f && !p || u(r, h) || c(r, h, (function() {
          return this
      })), e.exports = {
          IteratorPrototype: r,
          BUGGY_SAFARI_ITERATORS: d
      }
  }, function(e, t, n) {
      var r, i, o, a = n(3),
          s = n(2),
          c = n(47),
          u = n(162),
          l = n(116),
          f = n(174),
          h = n(126),
          d = a.location,
          p = a.setImmediate,
          v = a.clearImmediate,
          m = a.process,
          y = a.MessageChannel,
          g = a.Dispatch,
          b = 0,
          w = {},
          k = "onreadystatechange",
          S = function(e) {
              if (w.hasOwnProperty(e)) {
                  var t = w[e];
                  delete w[e], t()
              }
          },
          x = function(e) {
              return function() {
                  S(e)
              }
          },
          A = function(e) {
              S(e.data)
          },
          _ = function(e) {
              a.postMessage(e + "", d.protocol + "//" + d.host)
          };
      p && v || (p = function(e) {
          for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
          return w[++b] = function() {
              ("function" == typeof e ? e : Function(e)).apply(void 0, t)
          }, r(b), b
      }, v = function(e) {
          delete w[e]
      }, h ? r = function(e) {
          m.nextTick(x(e))
      } : g && g.now ? r = function(e) {
          g.now(x(e))
      } : y && !f ? (o = (i = new y).port2, i.port1.onmessage = A, r = c(o.postMessage, o, 1)) : a.addEventListener && "function" == typeof postMessage && !a.importScripts && d && "file:" !== d.protocol && !s(_) ? (r = _, a.addEventListener("message", A, !1)) : r = k in l("script") ? function(e) {
          u.appendChild(l("script")).onreadystatechange = function() {
              u.removeChild(this), S(e)
          }
      } : function(e) {
          setTimeout(x(e), 0)
      }), e.exports = {
          set: p,
          clear: v
      }
  }, function(e, t, n) {
      var r = n(106);
      e.exports = /(?:iphone|ipod|ipad).*applewebkit/i.test(r)
  }, function(e, t, n) {
      "use strict";
      var r = n(55),
          i = function(e) {
              var t, n;
              this.promise = new e((function(e, r) {
                  if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                  t = e, n = r
              })), this.resolve = r(t), this.reject = r(n)
          };
      e.exports.f = function(e) {
          return new i(e)
      }
  }, function(e, t, n) {
      var r = n(2),
          i = n(4),
          o = n(42),
          a = i("iterator");
      e.exports = !r((function() {
          var e = new URL("b?a=1&b=2&c=3", "http://a"),
              t = e.searchParams,
              n = "";
          return e.pathname = "c%20d", t.forEach((function(e, r) {
              t.delete("b"), n += r + e
          })), o && !e.toJSON || !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[a] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host
      }))
  }, function(e, t, n) {
      "use strict";
      var r = n(66),
          i = n(65).getWeakData,
          o = n(7),
          a = n(6),
          s = n(56),
          c = n(90),
          u = n(53),
          l = n(10),
          f = n(29),
          h = f.set,
          d = f.getterFor,
          p = u.find,
          v = u.findIndex,
          m = 0,
          y = function(e) {
              return e.frozen || (e.frozen = new g)
          },
          g = function() {
              this.entries = []
          },
          b = function(e, t) {
              return p(e.entries, (function(e) {
                  return e[0] === t
              }))
          };
      g.prototype = {
          get: function(e) {
              var t = b(this, e);
              if (t) return t[1]
          },
          has: function(e) {
              return !!b(this, e)
          },
          set: function(e, t) {
              var n = b(this, e);
              n ? n[1] = t : this.entries.push([e, t])
          },
          delete: function(e) {
              var t = v(this.entries, (function(t) {
                  return t[0] === e
              }));
              return ~t && this.entries.splice(t, 1), !!~t
          }
      }, e.exports = {
          getConstructor: function(e, t, n, u) {
              var f = e((function(e, r) {
                      s(e, f, t), h(e, {
                          type: t,
                          id: m++,
                          frozen: void 0
                      }), null != r && c(r, e[u], {
                          that: e,
                          AS_ENTRIES: n
                      })
                  })),
                  p = d(t),
                  v = function(e, t, n) {
                      var r = p(e),
                          a = i(o(t), !0);
                      return !0 === a ? y(r).set(t, n) : a[r.id] = n, e
                  };
              return r(f.prototype, {
                  delete: function(e) {
                      var t = p(this);
                      if (!a(e)) return !1;
                      var n = i(e);
                      return !0 === n ? y(t).delete(e) : n && l(n, t.id) && delete n[t.id]
                  },
                  has: function(e) {
                      var t = p(this);
                      if (!a(e)) return !1;
                      var n = i(e);
                      return !0 === n ? y(t).has(e) : n && l(n, t.id)
                  }
              }), r(f.prototype, n ? {
                  get: function(e) {
                      var t = p(this);
                      if (a(e)) {
                          var n = i(e);
                          return !0 === n ? y(t).get(e) : n ? n[t.id] : void 0
                      }
                  },
                  set: function(e, t) {
                      return v(this, e, t)
                  }
              } : {
                  add: function(e) {
                      return v(this, e, !0)
                  }
              }), f
          }
      }
  }, function(e, t, n) {
      "use strict";
      var r = n(16).f,
          i = n(46),
          o = n(66),
          a = n(47),
          s = n(56),
          c = n(90),
          u = n(125),
          l = n(113),
          f = n(14),
          h = n(65).fastKey,
          d = n(29),
          p = d.set,
          v = d.getterFor;
      e.exports = {
          getConstructor: function(e, t, n, u) {
              var l = e((function(e, r) {
                      s(e, l, t), p(e, {
                          type: t,
                          index: i(null),
                          first: void 0,
                          last: void 0,
                          size: 0
                      }), f || (e.size = 0), null != r && c(r, e[u], {
                          that: e,
                          AS_ENTRIES: n
                      })
                  })),
                  d = v(t),
                  m = function(e, t, n) {
                      var r, i, o = d(e),
                          a = y(e, t);
                      return a ? a.value = n : (o.last = a = {
                          index: i = h(t, !0),
                          key: t,
                          value: n,
                          previous: r = o.last,
                          next: void 0,
                          removed: !1
                      }, o.first || (o.first = a), r && (r.next = a), f ? o.size++ : e.size++, "F" !== i && (o.index[i] = a)), e
                  },
                  y = function(e, t) {
                      var n, r = d(e),
                          i = h(t);
                      if ("F" !== i) return r.index[i];
                      for (n = r.first; n; n = n.next)
                          if (n.key == t) return n
                  };
              return o(l.prototype, {
                  clear: function() {
                      for (var e = d(this), t = e.index, n = e.first; n;) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete t[n.index], n = n.next;
                      e.first = e.last = void 0, f ? e.size = 0 : this.size = 0
                  },
                  delete: function(e) {
                      var t = this,
                          n = d(t),
                          r = y(t, e);
                      if (r) {
                          var i = r.next,
                              o = r.previous;
                          delete n.index[r.index], r.removed = !0, o && (o.next = i), i && (i.previous = o), n.first == r && (n.first = i), n.last == r && (n.last = o), f ? n.size-- : t.size--
                      }
                      return !!r
                  },
                  forEach: function(e) {
                      for (var t, n = d(this), r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.next : n.first;)
                          for (r(t.value, t.key, this); t && t.removed;) t = t.previous
                  },
                  has: function(e) {
                      return !!y(this, e)
                  }
              }), o(l.prototype, n ? {
                  get: function(e) {
                      var t = y(this, e);
                      return t && t.value
                  },
                  set: function(e, t) {
                      return m(this, 0 === e ? 0 : e, t)
                  }
              } : {
                  add: function(e) {
                      return m(this, e = 0 === e ? 0 : e, e)
                  }
              }), f && r(l.prototype, "size", {
                  get: function() {
                      return d(this).size
                  }
              }), l
          },
          setStrong: function(e, t, n) {
              var r = t + " Iterator",
                  i = v(t),
                  o = v(r);
              u(e, t, (function(e, t) {
                  p(this, {
                      type: r,
                      target: e,
                      state: i(e),
                      kind: t,
                      last: void 0
                  })
              }), (function() {
                  for (var e = o(this), t = e.kind, n = e.last; n && n.removed;) n = n.previous;
                  return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
                      value: n.key,
                      done: !1
                  } : "values" == t ? {
                      value: n.value,
                      done: !1
                  } : {
                      value: [n.key, n.value],
                      done: !1
                  } : (e.target = void 0, {
                      value: void 0,
                      done: !0
                  })
              }), n ? "entries" : "values", !n, !0), l(t)
          }
      }
  }, function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return r
      }));
      n(8), n(17);

      function r(e) {
          return new Promise((function(t) {
              return setTimeout(t, e)
          }))
      }
  }, function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return o
      }));
      n(26), n(8), n(17), n(31), n(61), n(24);

      function r(e, t, n, r, i, o, a) {
          try {
              var s = e[o](a),
                  c = s.value
          } catch (e) {
              return void n(e)
          }
          s.done ? t(c) : Promise.resolve(c).then(r, i)
      }

      function i(e) {
          return function() {
              var t = this,
                  n = arguments;
              return new Promise((function(i, o) {
                  var a = e.apply(t, n);

                  function s(e) {
                      r(a, i, o, s, c, "next", e)
                  }

                  function c(e) {
                      r(a, i, o, s, c, "throw", e)
                  }
                  s(void 0)
              }))
          }
      }

      function o(e, t) {
          return a.apply(this, arguments)
      }

      function a() {
          return (a = i(regeneratorRuntime.mark((function e(t, n) {
              var r, i, o, a, s, c, u;
              return regeneratorRuntime.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                      case 0:
                          return e.next = 2, t.get();
                      case 2:
                          return r = e.sent, e.next = 5, r.userService.get();
                      case 5:
                          return i = e.sent, e.next = 8, i.getLoggedInUser();
                      case 8:
                          (o = e.sent.success) ? (a = o.itemname, s = n ? "/".concat(n) : "", c = window.location.search, u = window.location.hash, history.replaceState(history.state, "", "/details/".concat(a).concat(s).concat(c).concat(u))) : window.location.pathname = "/login";
                      case 10:
                      case "end":
                          return e.stop()
                  }
              }), e)
          })))).apply(this, arguments)
      }
  }, function(e, t, n) {
      var r = n(1),
          i = n(21),
          o = n(69);
      r({
          target: "Object",
          stat: !0,
          forced: n(2)((function() {
              o(1)
          }))
      }, {
          keys: function(e) {
              return o(i(e))
          }
      })
  }, function(e, t, n) {
      "use strict";
      var r = n(1),
          i = n(149).trim;
      r({
          target: "String",
          proto: !0,
          forced: n(191)("trim")
      }, {
          trim: function() {
              return i(this)
          }
      })
  }, function(e, t, n) {
      var r = n(1),
          i = n(189).entries;
      r({
          target: "Object",
          stat: !0
      }, {
          entries: function(e) {
              return i(e)
          }
      })
  }, function(e, t, n) {
      "use strict";
      var r = n(21),
          i = n(81),
          o = n(15);
      e.exports = function(e) {
          for (var t = r(this), n = o(t.length), a = arguments.length, s = i(a > 1 ? arguments[1] : void 0, n), c = a > 2 ? arguments[2] : void 0, u = void 0 === c ? n : i(c, n); u > s;) t[s++] = e;
          return t
      }
  }, function(e, t) {
      var n;
      n = function() {
          return this
      }();
      try {
          n = n || new Function("return this")()
      } catch (e) {
          "object" == typeof window && (n = window)
      }
      e.exports = n
  }, function(e, t, n) {
      var r = n(3);
      e.exports = r.Promise
  }, function(e, t, n) {
      var r = n(7),
          i = n(6),
          o = n(175);
      e.exports = function(e, t) {
          if (r(e), i(t) && t.constructor === e) return t;
          var n = o.f(e);
          return (0, n.resolve)(t), n.promise
      }
  }, function(e, t, n) {
      "use strict";
      var r = n(70),
          i = n(15),
          o = n(47),
          a = function(e, t, n, s, c, u, l, f) {
              for (var h, d = c, p = 0, v = !!l && o(l, f, 3); p < s;) {
                  if (p in n) {
                      if (h = v ? v(n[p], p, t) : n[p], u > 0 && r(h)) d = a(e, t, h, i(h.length), d, u - 1) - 1;
                      else {
                          if (d >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                          e[d] = h
                      }
                      d++
                  }
                  p++
              }
              return d
          };
      e.exports = a
  }, function(e, t, n) {
      var r = n(14),
          i = n(69),
          o = n(32),
          a = n(91).f,
          s = function(e) {
              return function(t) {
                  for (var n, s = o(t), c = i(s), u = c.length, l = 0, f = []; u > l;) n = c[l++], r && !a.call(s, n) || f.push(e ? [n, s[n]] : s[n]);
                  return f
              }
          };
      e.exports = {
          entries: s(!0),
          values: s(!1)
      }
  }, function(e, t, n) {
      "use strict";
      n(98)("WeakSet", (function(e) {
          return function() {
              return e(this, arguments.length ? arguments[0] : void 0)
          }
      }), n(177))
  }, function(e, t, n) {
      var r = n(2),
          i = n(168);
      e.exports = function(e) {
          return r((function() {
              return !!i[e]() || "​᠎" != "​᠎" [e]() || i[e].name !== e
          }))
      }
  }, function(e, t, n) {
      n(1)({
          target: "Number",
          stat: !0
      }, {
          EPSILON: Math.pow(2, -52)
      })
  }, function(e, t, n) {
      var r = n(41),
          i = n(64),
          o = n(121),
          a = n(7);
      e.exports = r("Reflect", "ownKeys") || function(e) {
          var t = i.f(a(e)),
              n = o.f;
          return n ? t.concat(n(e)) : t
      }
  }, function(e, t, n) {
      "use strict";
      var r = n(55),
          i = n(6),
          o = [].slice,
          a = {},
          s = function(e, t, n) {
              if (!(t in a)) {
                  for (var r = [], i = 0; i < t; i++) r[i] = "a[" + i + "]";
                  a[t] = Function("C,a", "return new C(" + r.join(",") + ")")
              }
              return a[t](e, n)
          };
      e.exports = Function.bind || function(e) {
          var t = r(this),
              n = o.call(arguments, 1),
              a = function() {
                  var r = n.concat(o.call(arguments));
                  return this instanceof a ? s(t, r.length, r) : t.apply(e, r)
              };
          return i(t.prototype) && (a.prototype = t.prototype), a
      }
  }, function(e, t, n) {
      "use strict";
      var r = n(53).forEach,
          i = n(146)("forEach");
      e.exports = i ? [].forEach : function(e) {
          return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
      }
  }, function(e, t, n) {
      "use strict";
      var r = n(123),
          i = n(108);
      e.exports = r ? {}.toString : function() {
          return "[object " + i(this) + "]"
      }
  }, function(e, t, n) {
      "use strict";
      var r = n(7),
          i = n(58);
      e.exports = function(e) {
          if ("string" !== e && "number" !== e && "default" !== e) throw TypeError("Incorrect hint");
          return i(r(this), "number" !== e)
      }
  }, function(e, t, n) {
      var r = n(6);
      e.exports = function(e) {
          if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
          return e
      }
  }, function(e, t, n) {
      var r = n(7),
          i = n(170);
      e.exports = function(e, t, n, o) {
          try {
              return o ? t(r(n)[0], n[1]) : t(n)
          } catch (t) {
              throw i(e), t
          }
      }
  }, function(e, t, n) {
      var r, i, o, a, s, c, u, l, f = n(3),
          h = n(37).f,
          d = n(173).set,
          p = n(174),
          v = n(201),
          m = n(126),
          y = f.MutationObserver || f.WebKitMutationObserver,
          g = f.document,
          b = f.process,
          w = f.Promise,
          k = h(f, "queueMicrotask"),
          S = k && k.value;
      S || (r = function() {
          var e, t;
          for (m && (e = b.domain) && e.exit(); i;) {
              t = i.fn, i = i.next;
              try {
                  t()
              } catch (e) {
                  throw i ? a() : o = void 0, e
              }
          }
          o = void 0, e && e.enter()
      }, p || m || v || !y || !g ? w && w.resolve ? ((u = w.resolve(void 0)).constructor = w, l = u.then, a = function() {
          l.call(u, r)
      }) : a = m ? function() {
          b.nextTick(r)
      } : function() {
          d.call(f, r)
      } : (s = !0, c = g.createTextNode(""), new y(r).observe(c, {
          characterData: !0
      }), a = function() {
          c.data = s = !s
      })), e.exports = S || function(e) {
          var t = {
              fn: e,
              next: void 0
          };
          o && (o.next = t), i || (i = t, a()), o = t
      }
  }, function(e, t, n) {
      var r = n(106);
      e.exports = /web0s(?!.*chrome)/i.test(r)
  }, function(e, t, n) {
      var r = n(3);
      e.exports = function(e, t) {
          var n = r.console;
          n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
      }
  }, function(e, t) {
      e.exports = function(e) {
          try {
              return {
                  error: !1,
                  value: e()
              }
          } catch (e) {
              return {
                  error: !0,
                  value: e
              }
          }
      }
  }, function(e, t) {
      e.exports = "object" == typeof window
  }, function(e, t, n) {
      "use strict";
      var r = 2147483647,
          i = /[^\0-\u007E]/,
          o = /[.\u3002\uFF0E\uFF61]/g,
          a = "Overflow: input needs wider integers to process",
          s = Math.floor,
          c = String.fromCharCode,
          u = function(e) {
              return e + 22 + 75 * (e < 26)
          },
          l = function(e, t, n) {
              var r = 0;
              for (e = n ? s(e / 700) : e >> 1, e += s(e / t); e > 455; r += 36) e = s(e / 35);
              return s(r + 36 * e / (e + 38))
          },
          f = function(e) {
              var t, n, i = [],
                  o = (e = function(e) {
                      for (var t = [], n = 0, r = e.length; n < r;) {
                          var i = e.charCodeAt(n++);
                          if (i >= 55296 && i <= 56319 && n < r) {
                              var o = e.charCodeAt(n++);
                              56320 == (64512 & o) ? t.push(((1023 & i) << 10) + (1023 & o) + 65536) : (t.push(i), n--)
                          } else t.push(i)
                      }
                      return t
                  }(e)).length,
                  f = 128,
                  h = 0,
                  d = 72;
              for (t = 0; t < e.length; t++)(n = e[t]) < 128 && i.push(c(n));
              var p = i.length,
                  v = p;
              for (p && i.push("-"); v < o;) {
                  var m = r;
                  for (t = 0; t < e.length; t++)(n = e[t]) >= f && n < m && (m = n);
                  var y = v + 1;
                  if (m - f > s((r - h) / y)) throw RangeError(a);
                  for (h += (m - f) * y, f = m, t = 0; t < e.length; t++) {
                      if ((n = e[t]) < f && ++h > r) throw RangeError(a);
                      if (n == f) {
                          for (var g = h, b = 36;; b += 36) {
                              var w = b <= d ? 1 : b >= d + 26 ? 26 : b - d;
                              if (g < w) break;
                              var k = g - w,
                                  S = 36 - w;
                              i.push(c(u(w + k % S))), g = s(k / S)
                          }
                          i.push(c(u(g))), d = l(h, y, v == p), h = 0, ++v
                      }
                  }++h, ++f
              }
              return i.join("")
          };
      e.exports = function(e) {
          var t, n, r = [],
              a = e.toLowerCase().replace(o, ".").split(".");
          for (t = 0; t < a.length; t++) n = a[t], r.push(i.test(n) ? "xn--" + f(n) : n);
          return r.join(".")
      }
  }, function(e, t, n) {
      "use strict";
      n(9);
      var r = n(1),
          i = n(41),
          o = n(176),
          a = n(22),
          s = n(66),
          c = n(38),
          u = n(171),
          l = n(29),
          f = n(56),
          h = n(10),
          d = n(47),
          p = n(108),
          v = n(7),
          m = n(6),
          y = n(46),
          g = n(57),
          b = n(207),
          w = n(89),
          k = n(4),
          S = i("fetch"),
          x = i("Headers"),
          A = k("iterator"),
          _ = "URLSearchParams",
          E = "URLSearchParamsIterator",
          O = l.set,
          C = l.getterFor(_),
          P = l.getterFor(E),
          I = /\+/g,
          R = Array(4),
          $ = function(e) {
              return R[e - 1] || (R[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
          },
          L = function(e) {
              try {
                  return decodeURIComponent(e)
              } catch (t) {
                  return e
              }
          },
          T = function(e) {
              var t = e.replace(I, " "),
                  n = 4;
              try {
                  return decodeURIComponent(t)
              } catch (e) {
                  for (; n;) t = t.replace($(n--), L);
                  return t
              }
          },
          j = /[!'()~]|%20/g,
          M = {
              "!": "%21",
              "'": "%27",
              "(": "%28",
              ")": "%29",
              "~": "%7E",
              "%20": "+"
          },
          U = function(e) {
              return M[e]
          },
          N = function(e) {
              return encodeURIComponent(e).replace(j, U)
          },
          B = function(e, t) {
              if (t)
                  for (var n, r, i = t.split("&"), o = 0; o < i.length;)(n = i[o++]).length && (r = n.split("="), e.push({
                      key: T(r.shift()),
                      value: T(r.join("="))
                  }))
          },
          z = function(e) {
              this.entries.length = 0, B(this.entries, e)
          },
          D = function(e, t) {
              if (e < t) throw TypeError("Not enough arguments")
          },
          H = u((function(e, t) {
              O(this, {
                  type: E,
                  iterator: b(C(e).entries),
                  kind: t
              })
          }), "Iterator", (function() {
              var e = P(this),
                  t = e.kind,
                  n = e.iterator.next(),
                  r = n.value;
              return n.done || (n.value = "keys" === t ? r.key : "values" === t ? r.value : [r.key, r.value]), n
          })),
          F = function() {
              f(this, F, _);
              var e, t, n, r, i, o, a, s, c, u = arguments.length > 0 ? arguments[0] : void 0,
                  l = this,
                  d = [];
              if (O(l, {
                      type: _,
                      entries: d,
                      updateURL: function() {},
                      updateSearchParams: z
                  }), void 0 !== u)
                  if (m(u))
                      if ("function" == typeof(e = w(u)))
                          for (n = (t = e.call(u)).next; !(r = n.call(t)).done;) {
                              if ((a = (o = (i = b(v(r.value))).next).call(i)).done || (s = o.call(i)).done || !o.call(i).done) throw TypeError("Expected sequence with length 2");
                              d.push({
                                  key: a.value + "",
                                  value: s.value + ""
                              })
                          } else
                              for (c in u) h(u, c) && d.push({
                                  key: c,
                                  value: u[c] + ""
                              });
                      else B(d, "string" == typeof u ? "?" === u.charAt(0) ? u.slice(1) : u : u + "")
          },
          W = F.prototype;
      s(W, {
          append: function(e, t) {
              D(arguments.length, 2);
              var n = C(this);
              n.entries.push({
                  key: e + "",
                  value: t + ""
              }), n.updateURL()
          },
          delete: function(e) {
              D(arguments.length, 1);
              for (var t = C(this), n = t.entries, r = e + "", i = 0; i < n.length;) n[i].key === r ? n.splice(i, 1) : i++;
              t.updateURL()
          },
          get: function(e) {
              D(arguments.length, 1);
              for (var t = C(this).entries, n = e + "", r = 0; r < t.length; r++)
                  if (t[r].key === n) return t[r].value;
              return null
          },
          getAll: function(e) {
              D(arguments.length, 1);
              for (var t = C(this).entries, n = e + "", r = [], i = 0; i < t.length; i++) t[i].key === n && r.push(t[i].value);
              return r
          },
          has: function(e) {
              D(arguments.length, 1);
              for (var t = C(this).entries, n = e + "", r = 0; r < t.length;)
                  if (t[r++].key === n) return !0;
              return !1
          },
          set: function(e, t) {
              D(arguments.length, 1);
              for (var n, r = C(this), i = r.entries, o = !1, a = e + "", s = t + "", c = 0; c < i.length; c++)(n = i[c]).key === a && (o ? i.splice(c--, 1) : (o = !0, n.value = s));
              o || i.push({
                  key: a,
                  value: s
              }), r.updateURL()
          },
          sort: function() {
              var e, t, n, r = C(this),
                  i = r.entries,
                  o = i.slice();
              for (i.length = 0, n = 0; n < o.length; n++) {
                  for (e = o[n], t = 0; t < n; t++)
                      if (i[t].key > e.key) {
                          i.splice(t, 0, e);
                          break
                      } t === n && i.push(e)
              }
              r.updateURL()
          },
          forEach: function(e) {
              for (var t, n = C(this).entries, r = d(e, arguments.length > 1 ? arguments[1] : void 0, 3), i = 0; i < n.length;) r((t = n[i++]).value, t.key, this)
          },
          keys: function() {
              return new H(this, "keys")
          },
          values: function() {
              return new H(this, "values")
          },
          entries: function() {
              return new H(this, "entries")
          }
      }, {
          enumerable: !0
      }), a(W, A, W.entries), a(W, "toString", (function() {
          for (var e, t = C(this).entries, n = [], r = 0; r < t.length;) e = t[r++], n.push(N(e.key) + "=" + N(e.value));
          return n.join("&")
      }), {
          enumerable: !0
      }), c(F, _), r({
          global: !0,
          forced: !o
      }, {
          URLSearchParams: F
      }), o || "function" != typeof S || "function" != typeof x || r({
          global: !0,
          enumerable: !0,
          forced: !0
      }, {
          fetch: function(e) {
              var t, n, r, i = [e];
              return arguments.length > 1 && (m(t = arguments[1]) && (n = t.body, p(n) === _ && ((r = t.headers ? new x(t.headers) : new x).has("content-type") || r.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), t = y(t, {
                  body: g(0, String(n)),
                  headers: g(0, r)
              }))), i.push(t)), S.apply(this, i)
          }
      }), e.exports = {
          URLSearchParams: F,
          getState: C
      }
  }, function(e, t, n) {
      var r = n(7),
          i = n(89);
      e.exports = function(e) {
          var t = i(e);
          if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
          return r(t.call(e))
      }
  }, function(e, t) {
      e.exports = Object.is || function(e, t) {
          return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
      }
  }, function(e, t, n) {
      var r = n(21),
          i = Math.floor,
          o = "".replace,
          a = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
          s = /\$([$&'`]|\d{1,2})/g;
      e.exports = function(e, t, n, c, u, l) {
          var f = n + e.length,
              h = c.length,
              d = s;
          return void 0 !== u && (u = r(u), d = a), o.call(l, d, (function(r, o) {
              var a;
              switch (o.charAt(0)) {
                  case "$":
                      return "$";
                  case "&":
                      return e;
                  case "`":
                      return t.slice(0, n);
                  case "'":
                      return t.slice(f);
                  case "<":
                      a = u[o.slice(1, -1)];
                      break;
                  default:
                      var s = +o;
                      if (0 === s) return r;
                      if (s > h) {
                          var l = i(s / 10);
                          return 0 === l ? r : l <= h ? void 0 === c[l - 1] ? o.charAt(1) : c[l - 1] + o.charAt(1) : r
                      }
                      a = c[s - 1]
              }
              return void 0 === a ? "" : a
          }))
      }
  }, function(e, t, n) {
      "use strict";
      n.r(t);
      var r = {};
      n.r(r), n.d(r, "SNOWPACK_PUBLIC_VERSION", (function() {
          return Pe
      })), n.d(r, "SNOWPACK_PUBLIC_TESTING", (function() {
          return Ie
      })), n.d(r, "SNOWPACK_PUBLIC_ENVIRONMENT", (function() {
          return Re
      })), n.d(r, "SNOWPACK_PUBLIC_ARCHIVE_NAV_URL", (function() {
          return $e
      })), n.d(r, "SNOWPACK_PUBLIC_ARCHIVE_API_URL", (function() {
          return Le
      })), n.d(r, "SNOWPACK_PUBLIC_WAYBACK_URL", (function() {
          return Te
      })), n.d(r, "SNOWPACK_PUBLIC_WAYBACK_SEARCH_URL", (function() {
          return je
      })), n.d(r, "SNOWPACK_PUBLIC_TV_SEARCH_URL", (function() {
          return Me
      })), n.d(r, "SNOWPACK_PUBLIC_RADIO_SEARCH_URL", (function() {
          return Ue
      })), n.d(r, "SNOWPACK_PUBLIC_ARCHIVE_IT_COLLECTION_URL", (function() {
          return Ne
      })), n.d(r, "SNOWPACK_PUBLIC_ARCHIVE_IT_PARTNER_URL", (function() {
          return Be
      })), n.d(r, "SNOWPACK_PUBLIC_USER_LISTS_API_URL", (function() {
          return ze
      })), n.d(r, "SNOWPACK_PUBLIC_ITEM_MANAGEMENT_URL", (function() {
          return De
      })), n.d(r, "SNOWPACK_PUBLIC_BASE_PATH", (function() {
          return He
      })), n.d(r, "SNOWPACK_PUBLIC_ARCHIVE_IMAGE_URL", (function() {
          return Fe
      })), n.d(r, "SNOWPACK_PUBLIC_SUPPRESS_FACETS", (function() {
          return We
      })), n.d(r, "SNOWPACK_PUBLIC_SENTRY_DSN", (function() {
          return Ve
      })), n.d(r, "SNOWPACK_PUBLIC_SENTRY_TRACES_SAMPLE_RATE", (function() {
          return Ke
      })), n.d(r, "SNOWPACK_PUBLIC_SENTRY_ERROR_SAMPLE_RATE", (function() {
          return qe
      })), n.d(r, "SNOWPACK_PUBLIC_ZENDESK_HELP_WIDGET_KEY", (function() {
          return Ge
      })), n.d(r, "SNOWPACK_PUBLIC_BRAINTREE_AUTH_TOKEN", (function() {
          return Ye
      })), n.d(r, "SNOWPACK_PUBLIC_RECAPTCHA_SITE_KEY", (function() {
          return Ze
      })), n.d(r, "SNOWPACK_PUBLIC_VENMO_PROFILE_ID", (function() {
          return Je
      })), n.d(r, "SNOWPACK_PUBLIC_GOOGLEPAY_MERCHANT_ID", (function() {
          return Qe
      })), n.d(r, "SNOWPACK_PUBLIC_FEATURE_FEEDBACK_SERVICE_URL", (function() {
          return Xe
      })), n.d(r, "MODE", (function() {
          return et
      })), n.d(r, "NODE_ENV", (function() {
          return tt
      })), n.d(r, "SSR", (function() {
          return nt
      }));
      n(33), n(34), n(59), n(26), n(39), n(43), n(44), n(60), n(133), n(134), n(135), n(8), n(19), n(20), n(100), n(136), n(137), n(50), n(30), n(25), n(35), n(11), n(23), n(9), n(12), n(24), n(17), n(102), n(31), n(61), n(139), n(141), n(101), n(51);
      var i, o, a, s, c, u, l, f, h, d, p, v, m, y, g, b, w, k, S, x, A, _, E, O, C, P, I, R, $, L, T, j, M, U, N, B, z, D, H, F, W, V, K, q, G, Y, Z, J, Q, X, ee, te, ne, re, ie, oe, ae, se, ce, ue, le, fe, he, de, pe, ve, me, ye, ge, be, we, ke, Se, xe, Ae, _e, Ee, Oe, Ce, Pe = "main---bfb71799",
          Ie = "false",
          Re = "prod",
          $e = "",
          Le = "archive.org",
          Te = "web.archive.org",
          je = "https://web.archive.org/web/*/",
          Me = "https://archive.org/tv",
          Ue = "https://archive.org/search.php",
          Ne = "https://archive-it.org/collections/",
          Be = "https://archive-it.org/organizations/",
          ze = "https://archive.org",
          De = "https://archive.org/manage/",
          He = "/offshoot_assets/",
          Fe = "https://archive.org",
          We = "false",
          Ve = "https://f36cc7e0e3484c2ab9aa70f5999ee9ca@sentry.archive.org/2",
          Ke = "0.1",
          qe = "0.5",
          Ge = "685f6dc4-48c5-411f-8463-cc6dd50abe2d",
          Ye = "production_w3jccm3z_pqd7hz44swp6zvvw",
          Ze = "6Ld64a8UAAAAAGbDwi1927ztGNw7YABQ-dqzvTN2",
          Je = "2878003111190856236",
          Qe = "14255500436693515703",
          Xe = "https://archive.org/services/feature-feedback",
          et = "production",
          tt = "production",
          nt = !1,
          rt = n(5),
          it = n(0),
          ot = n(13),
          at = (n(104), n(74), n(63), n(52), n(114), n(77), n(109), n(80), n(36), n(62), n(79), n(110), n(103), n(115));

      function st(e, t) {
          return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
              raw: {
                  value: Object.freeze(t)
              }
          }))
      }

      function ct(e, t, n) {
          return (ct = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
              var r = function(e, t) {
                  for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = wt(e)););
                  return e
              }(e, t);
              if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, t);
                  return i.get ? i.get.call(n) : i.value
              }
          })(e, t, n || e)
      }

      function ut(e, t) {
          return function(e) {
              if (Array.isArray(e)) return e
          }(e) || function(e, t) {
              if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
              var n = [],
                  r = !0,
                  i = !1,
                  o = void 0;
              try {
                  for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
              } catch (e) {
                  i = !0, o = e
              } finally {
                  try {
                      r || null == s.return || s.return()
                  } finally {
                      if (i) throw o
                  }
              }
              return n
          }(e, t) || St(e, t) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
      }

      function lt(e) {
          return function(e) {
              if (Array.isArray(e)) return xt(e)
          }(e) || function(e) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
          }(e) || St(e) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
      }

      function ft(e) {
          return (ft = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          } : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
      }

      function ht(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
              constructor: {
                  value: e,
                  writable: !0,
                  configurable: !0
              }
          }), t && bt(e, t)
      }

      function dt(e) {
          var t = gt();
          return function() {
              var n, r = wt(e);
              if (t) {
                  var i = wt(this).constructor;
                  n = Reflect.construct(r, arguments, i)
              } else n = r.apply(this, arguments);
              return pt(this, n)
          }
      }

      function pt(e, t) {
          return !t || "object" !== ft(t) && "function" != typeof t ? vt(e) : t
      }

      function vt(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }

      function mt(e) {
          var t = "function" == typeof Map ? new Map : void 0;
          return (mt = function(e) {
              if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
              var n;
              if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
              if (void 0 !== t) {
                  if (t.has(e)) return t.get(e);
                  t.set(e, r)
              }

              function r() {
                  return yt(e, arguments, wt(this).constructor)
              }
              return r.prototype = Object.create(e.prototype, {
                  constructor: {
                      value: r,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                  }
              }), bt(r, e)
          })(e)
      }

      function yt(e, t, n) {
          return (yt = gt() ? Reflect.construct : function(e, t, n) {
              var r = [null];
              r.push.apply(r, t);
              var i = new(Function.bind.apply(e, r));
              return n && bt(i, n.prototype), i
          }).apply(null, arguments)
      }

      function gt() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
              return !1
          }
      }

      function bt(e, t) {
          return (bt = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t, e
          })(e, t)
      }

      function wt(e) {
          return (wt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
      }

      function kt(e, t) {
          var n;
          if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
              if (Array.isArray(e) || (n = St(e)) || t && e && "number" == typeof e.length) {
                  n && (e = n);
                  var r = 0,
                      i = function() {};
                  return {
                      s: i,
                      n: function() {
                          return r >= e.length ? {
                              done: !0
                          } : {
                              done: !1,
                              value: e[r++]
                          }
                      },
                      e: function(e) {
                          throw e
                      },
                      f: i
                  }
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }
          var o, a = !0,
              s = !1;
          return {
              s: function() {
                  n = e[Symbol.iterator]()
              },
              n: function() {
                  var e = n.next();
                  return a = e.done, e
              },
              e: function(e) {
                  s = !0, o = e
              },
              f: function() {
                  try {
                      a || null == n.return || n.return()
                  } finally {
                      if (s) throw o
                  }
              }
          }
      }

      function St(e, t) {
          if (e) {
              if ("string" == typeof e) return xt(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? xt(e, t) : void 0
          }
      }

      function xt(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r
      }

      function At(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function _t(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
      }

      function Et(e, t, n) {
          return t && _t(e.prototype, t), n && _t(e, n), e
      }
      var Ot, Ct = Object.assign,
          Pt = window,
          It = Pt.ShadowRoot && (void 0 === Pt.ShadyCSS || Pt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
          Rt = Symbol(),
          $t = new WeakMap,
          Lt = function() {
              function e(t, n, r) {
                  if (At(this, e), this._$cssResult$ = !0, r !== Rt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                  this.cssText = t, this.t = n
              }
              return Et(e, [{
                  key: "styleSheet",
                  get: function() {
                      var e = this.o,
                          t = this.t;
                      if (It && void 0 === e) {
                          var n = void 0 !== t && 1 === t.length;
                          n && (e = $t.get(t)), void 0 === e && ((this.o = e = new CSSStyleSheet).replaceSync(this.cssText), n && $t.set(t, e))
                      }
                      return e
                  }
              }, {
                  key: "toString",
                  value: function() {
                      return this.cssText
                  }
              }]), e
          }(),
          Tt = function(e) {
              for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
              var i = 1 === e.length ? e[0] : n.reduce((function(t, n, r) {
                  return t + function(e) {
                      if (!0 === e._$cssResult$) return e.cssText;
                      if ("number" == typeof e) return e;
                      throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
                  }(n) + e[r + 1]
              }), e[0]);
              return new Lt(i, e, Rt)
          },
          jt = It ? function(e) {
              return e
          } : function(e) {
              return e instanceof CSSStyleSheet ? function(e) {
                  var t, n = "",
                      r = kt(e.cssRules);
                  try {
                      for (r.s(); !(t = r.n()).done;) {
                          n += t.value.cssText
                      }
                  } catch (e) {
                      r.e(e)
                  } finally {
                      r.f()
                  }
                  return function(e) {
                      return new Lt("string" == typeof e ? e : e + "", void 0, Rt)
                  }(n)
              }(e) : e
          },
          Mt = window,
          Ut = Mt.trustedTypes,
          Nt = Ut ? Ut.emptyScript : "",
          Bt = Mt.reactiveElementPolyfillSupport,
          zt = {
              toAttribute: function(e, t) {
                  switch (t) {
                      case Boolean:
                          e = e ? Nt : null;
                          break;
                      case Object:
                      case Array:
                          e = null == e ? e : JSON.stringify(e)
                  }
                  return e
              },
              fromAttribute: function(e, t) {
                  var n = e;
                  switch (t) {
                      case Boolean:
                          n = null !== e;
                          break;
                      case Number:
                          n = null === e ? null : Number(e);
                          break;
                      case Object:
                      case Array:
                          try {
                              n = JSON.parse(e)
                          } catch (e) {
                              n = null
                          }
                  }
                  return n
              }
          },
          Dt = function(e, t) {
              return t !== e && (t == t || e == e)
          },
          Ht = {
              attribute: !0,
              type: String,
              converter: zt,
              reflect: !1,
              hasChanged: Dt
          },
          Ft = function(e) {
              ht(n, e);
              var t = dt(n);

              function n() {
                  var e;
                  return At(this, n), (e = t.call(this))._$Ei = new Map, e.isUpdatePending = !1, e.hasUpdated = !1, e._$El = null, e.u(), e
              }
              return Et(n, [{
                  key: "u",
                  value: function() {
                      var e, t = this;
                      this._$E_ = new Promise((function(e) {
                          return t.enableUpdating = e
                      })), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (e = this.constructor.h) || void 0 === e || e.forEach((function(e) {
                          return e(t)
                      }))
                  }
              }, {
                  key: "addController",
                  value: function(e) {
                      var t, n;
                      (null !== (t = this._$ES) && void 0 !== t ? t : this._$ES = []).push(e), void 0 !== this.renderRoot && this.isConnected && (null === (n = e.hostConnected) || void 0 === n || n.call(e))
                  }
              }, {
                  key: "removeController",
                  value: function(e) {
                      var t;
                      null === (t = this._$ES) || void 0 === t || t.splice(this._$ES.indexOf(e) >>> 0, 1)
                  }
              }, {
                  key: "_$Eg",
                  value: function() {
                      var e = this;
                      this.constructor.elementProperties.forEach((function(t, n) {
                          e.hasOwnProperty(n) && (e._$Ei.set(n, e[n]), delete e[n])
                      }))
                  }
              }, {
                  key: "createRenderRoot",
                  value: function() {
                      var e, t = null !== (e = this.shadowRoot) && void 0 !== e ? e : this.attachShadow(this.constructor.shadowRootOptions);
                      return function(e, t) {
                          It ? e.adoptedStyleSheets = t.map((function(e) {
                              return e instanceof CSSStyleSheet ? e : e.styleSheet
                          })) : t.forEach((function(t) {
                              var n = document.createElement("style"),
                                  r = Pt.litNonce;
                              void 0 !== r && n.setAttribute("nonce", r), n.textContent = t.cssText, e.appendChild(n)
                          }))
                      }(t, this.constructor.elementStyles), t
                  }
              }, {
                  key: "connectedCallback",
                  value: function() {
                      var e;
                      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (e = this._$ES) || void 0 === e || e.forEach((function(e) {
                          var t;
                          return null === (t = e.hostConnected) || void 0 === t ? void 0 : t.call(e)
                      }))
                  }
              }, {
                  key: "enableUpdating",
                  value: function(e) {}
              }, {
                  key: "disconnectedCallback",
                  value: function() {
                      var e;
                      null === (e = this._$ES) || void 0 === e || e.forEach((function(e) {
                          var t;
                          return null === (t = e.hostDisconnected) || void 0 === t ? void 0 : t.call(e)
                      }))
                  }
              }, {
                  key: "attributeChangedCallback",
                  value: function(e, t, n) {
                      this._$AK(e, n)
                  }
              }, {
                  key: "_$EO",
                  value: function(e, t) {
                      var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ht,
                          i = this.constructor._$Ep(e, r);
                      if (void 0 !== i && !0 === r.reflect) {
                          var o = (void 0 !== (null === (n = r.converter) || void 0 === n ? void 0 : n.toAttribute) ? r.converter : zt).toAttribute(t, r.type);
                          this._$El = e, null == o ? this.removeAttribute(i) : this.setAttribute(i, o), this._$El = null
                      }
                  }
              }, {
                  key: "_$AK",
                  value: function(e, t) {
                      var n, r = this.constructor,
                          i = r._$Ev.get(e);
                      if (void 0 !== i && this._$El !== i) {
                          var o = r.getPropertyOptions(i),
                              a = "function" == typeof o.converter ? {
                                  fromAttribute: o.converter
                              } : void 0 !== (null === (n = o.converter) || void 0 === n ? void 0 : n.fromAttribute) ? o.converter : zt;
                          this._$El = i, this[i] = a.fromAttribute(t, o.type), this._$El = null
                      }
                  }
              }, {
                  key: "requestUpdate",
                  value: function(e, t, n) {
                      var r = !0;
                      void 0 !== e && (((n = n || this.constructor.getPropertyOptions(e)).hasChanged || Dt)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), !0 === n.reflect && this._$El !== e && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(e, n))) : r = !1), !this.isUpdatePending && r && (this._$E_ = this._$Ej())
                  }
              }, {
                  key: "_$Ej",
                  value: function() {
                      return e = this, t = null, n = regeneratorRuntime.mark((function e() {
                          var t;
                          return regeneratorRuntime.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      return this.isUpdatePending = !0, e.prev = 1, e.next = 4, this._$E_;
                                  case 4:
                                      e.next = 9;
                                      break;
                                  case 6:
                                      e.prev = 6, e.t0 = e.catch(1), Promise.reject(e.t0);
                                  case 9:
                                      if (t = this.scheduleUpdate(), e.t1 = null != t, !e.t1) {
                                          e.next = 14;
                                          break
                                      }
                                      return e.next = 14, t;
                                  case 14:
                                      return e.abrupt("return", !this.isUpdatePending);
                                  case 15:
                                  case "end":
                                      return e.stop()
                              }
                          }), e, this, [
                              [1, 6]
                          ])
                      })), new Promise((function(r, i) {
                          var o = function(e) {
                                  try {
                                      s(n.next(e))
                                  } catch (e) {
                                      i(e)
                                  }
                              },
                              a = function(e) {
                                  try {
                                      s(n.throw(e))
                                  } catch (e) {
                                      i(e)
                                  }
                              },
                              s = function(e) {
                                  return e.done ? r(e.value) : Promise.resolve(e.value).then(o, a)
                              };
                          s((n = n.apply(e, t)).next())
                      }));
                      var e, t, n
                  }
              }, {
                  key: "scheduleUpdate",
                  value: function() {
                      return this.performUpdate()
                  }
              }, {
                  key: "performUpdate",
                  value: function() {
                      var e, t = this;
                      if (this.isUpdatePending) {
                          this.hasUpdated, this._$Ei && (this._$Ei.forEach((function(e, n) {
                              return t[n] = e
                          })), this._$Ei = void 0);
                          var n = !1,
                              r = this._$AL;
                          try {
                              (n = this.shouldUpdate(r)) ? (this.willUpdate(r), null === (e = this._$ES) || void 0 === e || e.forEach((function(e) {
                                  var t;
                                  return null === (t = e.hostUpdate) || void 0 === t ? void 0 : t.call(e)
                              })), this.update(r)) : this._$Ek()
                          } catch (e) {
                              throw n = !1, this._$Ek(), e
                          }
                          n && this._$AE(r)
                      }
                  }
              }, {
                  key: "willUpdate",
                  value: function(e) {}
              }, {
                  key: "_$AE",
                  value: function(e) {
                      var t;
                      null === (t = this._$ES) || void 0 === t || t.forEach((function(e) {
                          var t;
                          return null === (t = e.hostUpdated) || void 0 === t ? void 0 : t.call(e)
                      })), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e)
                  }
              }, {
                  key: "_$Ek",
                  value: function() {
                      this._$AL = new Map, this.isUpdatePending = !1
                  }
              }, {
                  key: "updateComplete",
                  get: function() {
                      return this.getUpdateComplete()
                  }
              }, {
                  key: "getUpdateComplete",
                  value: function() {
                      return this._$E_
                  }
              }, {
                  key: "shouldUpdate",
                  value: function(e) {
                      return !0
                  }
              }, {
                  key: "update",
                  value: function(e) {
                      var t = this;
                      void 0 !== this._$EC && (this._$EC.forEach((function(e, n) {
                          return t._$EO(n, t[n], e)
                      })), this._$EC = void 0), this._$Ek()
                  }
              }, {
                  key: "updated",
                  value: function(e) {}
              }, {
                  key: "firstUpdated",
                  value: function(e) {}
              }], [{
                  key: "addInitializer",
                  value: function(e) {
                      var t;
                      this.finalize(), (null !== (t = this.h) && void 0 !== t ? t : this.h = []).push(e)
                  }
              }, {
                  key: "observedAttributes",
                  get: function() {
                      var e = this;
                      this.finalize();
                      var t = [];
                      return this.elementProperties.forEach((function(n, r) {
                          var i = e._$Ep(r, n);
                          void 0 !== i && (e._$Ev.set(i, r), t.push(i))
                      })), t
                  }
              }, {
                  key: "createProperty",
                  value: function(e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ht;
                      if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
                          var n = "symbol" == ft(e) ? Symbol() : "__" + e,
                              r = this.getPropertyDescriptor(e, n, t);
                          void 0 !== r && Object.defineProperty(this.prototype, e, r)
                      }
                  }
              }, {
                  key: "getPropertyDescriptor",
                  value: function(e, t, n) {
                      return {
                          get: function() {
                              return this[t]
                          },
                          set: function(r) {
                              var i = this[e];
                              this[t] = r, this.requestUpdate(e, i, n)
                          },
                          configurable: !0,
                          enumerable: !0
                      }
                  }
              }, {
                  key: "getPropertyOptions",
                  value: function(e) {
                      return this.elementProperties.get(e) || Ht
                  }
              }, {
                  key: "finalize",
                  value: function() {
                      if (this.hasOwnProperty("finalized")) return !1;
                      this.finalized = !0;
                      var e = Object.getPrototypeOf(this);
                      if (e.finalize(), void 0 !== e.h && (this.h = lt(e.h)), this.elementProperties = new Map(e.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
                          var t, n = this.properties,
                              r = kt([].concat(lt(Object.getOwnPropertyNames(n)), lt(Object.getOwnPropertySymbols(n))));
                          try {
                              for (r.s(); !(t = r.n()).done;) {
                                  var i = t.value;
                                  this.createProperty(i, n[i])
                              }
                          } catch (e) {
                              r.e(e)
                          } finally {
                              r.f()
                          }
                      }
                      return this.elementStyles = this.finalizeStyles(this.styles), !0
                  }
              }, {
                  key: "finalizeStyles",
                  value: function(e) {
                      var t = [];
                      if (Array.isArray(e)) {
                          var n, r = kt(new Set(e.flat(1 / 0).reverse()));
                          try {
                              for (r.s(); !(n = r.n()).done;) {
                                  var i = n.value;
                                  t.unshift(jt(i))
                              }
                          } catch (e) {
                              r.e(e)
                          } finally {
                              r.f()
                          }
                      } else void 0 !== e && t.push(jt(e));
                      return t
                  }
              }, {
                  key: "_$Ep",
                  value: function(e, t) {
                      var n = t.attribute;
                      return !1 === n ? void 0 : "string" == typeof n ? n : "string" == typeof e ? e.toLowerCase() : void 0
                  }
              }]), n
          }(mt(HTMLElement));
      Ft.finalized = !0, Ft.elementProperties = new Map, Ft.elementStyles = [], Ft.shadowRootOptions = {
          mode: "open"
      }, null == Bt || Bt({
          ReactiveElement: Ft
      }), (null !== (Ot = Mt.reactiveElementVersions) && void 0 !== Ot ? Ot : Mt.reactiveElementVersions = []).push("1.5.0");
      var Wt, Vt = window,
          Kt = Vt.trustedTypes,
          qt = Kt ? Kt.createPolicy("lit-html", {
              createHTML: function(e) {
                  return e
              }
          }) : void 0,
          Gt = "lit$".concat((Math.random() + "").slice(9), "$"),
          Yt = "?" + Gt,
          Zt = "<".concat(Yt, ">"),
          Jt = document,
          Qt = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
              return Jt.createComment(e)
          },
          Xt = function(e) {
              return null === e || "object" != ft(e) && "function" != typeof e
          },
          en = Array.isArray,
          tn = function(e) {
              return en(e) || "function" == typeof(null == e ? void 0 : e[Symbol.iterator])
          },
          nn = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
          rn = /-->/g,
          on = />/g,
          an = RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)", "g"),
          sn = /'/g,
          cn = /"/g,
          un = /^(?:script|style|textarea|title)$/i,
          ln = function(e) {
              return function(t) {
                  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                  return {
                      _$litType$: e,
                      strings: t,
                      values: r
                  }
              }
          },
          fn = ln(1),
          hn = ln(2),
          dn = Symbol.for("lit-noChange"),
          pn = Symbol.for("lit-nothing"),
          vn = new WeakMap,
          mn = Jt.createTreeWalker(Jt, 129, null, !1),
          yn = function() {
              function e(t, n) {
                  var r, i = t.strings,
                      o = t._$litType$;
                  At(this, e), this.parts = [];
                  var a = 0,
                      s = 0,
                      c = i.length - 1,
                      u = this.parts,
                      l = ut(function(e, t) {
                          for (var n, r = e.length - 1, i = [], o = 2 === t ? "<svg>" : "", a = nn, s = 0; s < r; s++) {
                              for (var c = e[s], u = void 0, l = void 0, f = -1, h = 0; h < c.length && (a.lastIndex = h, null !== (l = a.exec(c)));) h = a.lastIndex, a === nn ? "!--" === l[1] ? a = rn : void 0 !== l[1] ? a = on : void 0 !== l[2] ? (un.test(l[2]) && (n = RegExp("</" + l[2], "g")), a = an) : void 0 !== l[3] && (a = an) : a === an ? ">" === l[0] ? (a = null != n ? n : nn, f = -1) : void 0 === l[1] ? f = -2 : (f = a.lastIndex - l[2].length, u = l[1], a = void 0 === l[3] ? an : '"' === l[3] ? cn : sn) : a === cn || a === sn ? a = an : a === rn || a === on ? a = nn : (a = an, n = void 0);
                              var d = a === an && e[s + 1].startsWith("/>") ? " " : "";
                              o += a === nn ? c + Zt : f >= 0 ? (i.push(u), c.slice(0, f) + "$lit$" + c.slice(f) + Gt + d) : c + Gt + (-2 === f ? (i.push(void 0), s) : d)
                          }
                          var p = o + (e[r] || "<?>") + (2 === t ? "</svg>" : "");
                          if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
                          return [void 0 !== qt ? qt.createHTML(p) : p, i]
                      }(i, o), 2),
                      f = l[0],
                      h = l[1];
                  if (this.el = e.createElement(f, n), mn.currentNode = this.el.content, 2 === o) {
                      var d = this.el.content,
                          p = d.firstChild;
                      p.remove(), d.append.apply(d, lt(p.childNodes))
                  }
                  for (; null !== (r = mn.nextNode()) && u.length < c;) {
                      if (1 === r.nodeType) {
                          if (r.hasAttributes()) {
                              var v, m = [],
                                  y = kt(r.getAttributeNames());
                              try {
                                  for (y.s(); !(v = y.n()).done;) {
                                      var g = v.value;
                                      if (g.endsWith("$lit$") || g.startsWith(Gt)) {
                                          var b = h[s++];
                                          if (m.push(g), void 0 !== b) {
                                              var w = r.getAttribute(b.toLowerCase() + "$lit$").split(Gt),
                                                  k = /([.?@])?(.*)/.exec(b);
                                              u.push({
                                                  type: 1,
                                                  index: a,
                                                  name: k[2],
                                                  strings: w,
                                                  ctor: "." === k[1] ? Sn : "?" === k[1] ? An : "@" === k[1] ? _n : kn
                                              })
                                          } else u.push({
                                              type: 6,
                                              index: a
                                          })
                                      }
                                  }
                              } catch (e) {
                                  y.e(e)
                              } finally {
                                  y.f()
                              }
                              for (var S = 0, x = m; S < x.length; S++) {
                                  var A = x[S];
                                  r.removeAttribute(A)
                              }
                          }
                          if (un.test(r.tagName)) {
                              var _ = r.textContent.split(Gt),
                                  E = _.length - 1;
                              if (E > 0) {
                                  r.textContent = Kt ? Kt.emptyScript : "";
                                  for (var O = 0; O < E; O++) r.append(_[O], Qt()), mn.nextNode(), u.push({
                                      type: 2,
                                      index: ++a
                                  });
                                  r.append(_[E], Qt())
                              }
                          }
                      } else if (8 === r.nodeType)
                          if (r.data === Yt) u.push({
                              type: 2,
                              index: a
                          });
                          else
                              for (var C = -1; - 1 !== (C = r.data.indexOf(Gt, C + 1));) u.push({
                                  type: 7,
                                  index: a
                              }), C += Gt.length - 1;
                      a++
                  }
              }
              return Et(e, null, [{
                  key: "createElement",
                  value: function(e, t) {
                      var n = Jt.createElement("template");
                      return n.innerHTML = e, n
                  }
              }]), e
          }();

      function gn(e, t) {
          var n, r, i, o, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
              s = arguments.length > 3 ? arguments[3] : void 0;
          if (t === dn) return t;
          var c = void 0 !== s ? null === (n = a._$Co) || void 0 === n ? void 0 : n[s] : a._$Cl,
              u = Xt(t) ? void 0 : t._$litDirective$;
          return (null == c ? void 0 : c.constructor) !== u && (null === (r = null == c ? void 0 : c._$AO) || void 0 === r || r.call(c, !1), void 0 === u ? c = void 0 : (c = new u(e))._$AT(e, a, s), void 0 !== s ? (null !== (i = (o = a)._$Co) && void 0 !== i ? i : o._$Co = [])[s] = c : a._$Cl = c), void 0 !== c && (t = gn(e, c._$AS(e, t.values), c, s)), t
      }
      var bn = function() {
              function e(t, n) {
                  At(this, e), this.u = [], this._$AN = void 0, this._$AD = t, this._$AM = n
              }
              return Et(e, [{
                  key: "parentNode",
                  get: function() {
                      return this._$AM.parentNode
                  }
              }, {
                  key: "_$AU",
                  get: function() {
                      return this._$AM._$AU
                  }
              }, {
                  key: "v",
                  value: function(e) {
                      var t, n = this._$AD,
                          r = n.el.content,
                          i = n.parts,
                          o = (null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t ? t : Jt).importNode(r, !0);
                      mn.currentNode = o;
                      for (var a = mn.nextNode(), s = 0, c = 0, u = i[0]; void 0 !== u;) {
                          if (s === u.index) {
                              var l = void 0;
                              2 === u.type ? l = new wn(a, a.nextSibling, this, e) : 1 === u.type ? l = new u.ctor(a, u.name, u.strings, this, e) : 6 === u.type && (l = new En(a, this, e)), this.u.push(l), u = i[++c]
                          }
                          s !== (null == u ? void 0 : u.index) && (a = mn.nextNode(), s++)
                      }
                      return o
                  }
              }, {
                  key: "p",
                  value: function(e) {
                      var t, n = 0,
                          r = kt(this.u);
                      try {
                          for (r.s(); !(t = r.n()).done;) {
                              var i = t.value;
                              void 0 !== i && (void 0 !== i.strings ? (i._$AI(e, i, n), n += i.strings.length - 2) : i._$AI(e[n])), n++
                          }
                      } catch (e) {
                          r.e(e)
                      } finally {
                          r.f()
                      }
                  }
              }]), e
          }(),
          wn = function() {
              function e(t, n, r, i) {
                  var o;
                  At(this, e), this.type = 2, this._$AH = pn, this._$AN = void 0, this._$AA = t, this._$AB = n, this._$AM = r, this.options = i, this._$Cm = null === (o = null == i ? void 0 : i.isConnected) || void 0 === o || o
              }
              return Et(e, [{
                  key: "_$AU",
                  get: function() {
                      var e, t;
                      return null !== (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) && void 0 !== t ? t : this._$Cm
                  }
              }, {
                  key: "parentNode",
                  get: function() {
                      var e = this._$AA.parentNode,
                          t = this._$AM;
                      return void 0 !== t && 11 === e.nodeType && (e = t.parentNode), e
                  }
              }, {
                  key: "startNode",
                  get: function() {
                      return this._$AA
                  }
              }, {
                  key: "endNode",
                  get: function() {
                      return this._$AB
                  }
              }, {
                  key: "_$AI",
                  value: function(e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
                      e = gn(this, e, t), Xt(e) ? e === pn || null == e || "" === e ? (this._$AH !== pn && this._$AR(), this._$AH = pn) : e !== this._$AH && e !== dn && this.g(e) : void 0 !== e._$litType$ ? this.$(e) : void 0 !== e.nodeType ? this.T(e) : tn(e) ? this.k(e) : this.g(e)
                  }
              }, {
                  key: "O",
                  value: function(e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._$AB;
                      return this._$AA.parentNode.insertBefore(e, t)
                  }
              }, {
                  key: "T",
                  value: function(e) {
                      this._$AH !== e && (this._$AR(), this._$AH = this.O(e))
                  }
              }, {
                  key: "g",
                  value: function(e) {
                      this._$AH !== pn && Xt(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Jt.createTextNode(e)), this._$AH = e
                  }
              }, {
                  key: "$",
                  value: function(e) {
                      var t, n = e.values,
                          r = e._$litType$,
                          i = "number" == typeof r ? this._$AC(e) : (void 0 === r.el && (r.el = yn.createElement(r.h, this.options)), r);
                      if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === i) this._$AH.p(n);
                      else {
                          var o = new bn(i, this),
                              a = o.v(this.options);
                          o.p(n), this.T(a), this._$AH = o
                      }
                  }
              }, {
                  key: "_$AC",
                  value: function(e) {
                      var t = vn.get(e.strings);
                      return void 0 === t && vn.set(e.strings, t = new yn(e)), t
                  }
              }, {
                  key: "k",
                  value: function(t) {
                      en(this._$AH) || (this._$AH = [], this._$AR());
                      var n, r, i = this._$AH,
                          o = 0,
                          a = kt(t);
                      try {
                          for (a.s(); !(r = a.n()).done;) {
                              var s = r.value;
                              o === i.length ? i.push(n = new e(this.O(Qt()), this.O(Qt()), this, this.options)) : n = i[o], n._$AI(s), o++
                          }
                      } catch (e) {
                          a.e(e)
                      } finally {
                          a.f()
                      }
                      o < i.length && (this._$AR(n && n._$AB.nextSibling, o), i.length = o)
                  }
              }, {
                  key: "_$AR",
                  value: function() {
                      var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._$AA.nextSibling,
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      for (null === (e = this._$AP) || void 0 === e || e.call(this, !1, !0, n); t && t !== this._$AB;) {
                          var r = t.nextSibling;
                          t.remove(), t = r
                      }
                  }
              }, {
                  key: "setConnected",
                  value: function(e) {
                      var t;
                      void 0 === this._$AM && (this._$Cm = e, null === (t = this._$AP) || void 0 === t || t.call(this, e))
                  }
              }]), e
          }(),
          kn = function() {
              function e(t, n, r, i, o) {
                  At(this, e), this.type = 1, this._$AH = pn, this._$AN = void 0, this.element = t, this.name = n, this._$AM = i, this.options = o, r.length > 2 || "" !== r[0] || "" !== r[1] ? (this._$AH = Array(r.length - 1).fill(new String), this.strings = r) : this._$AH = pn
              }
              return Et(e, [{
                  key: "tagName",
                  get: function() {
                      return this.element.tagName
                  }
              }, {
                  key: "_$AU",
                  get: function() {
                      return this._$AM._$AU
                  }
              }, {
                  key: "_$AI",
                  value: function(e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this,
                          n = arguments.length > 2 ? arguments[2] : void 0,
                          r = arguments.length > 3 ? arguments[3] : void 0,
                          i = this.strings,
                          o = !1;
                      if (void 0 === i) e = gn(this, e, t, 0), (o = !Xt(e) || e !== this._$AH && e !== dn) && (this._$AH = e);
                      else {
                          var a, s, c = e;
                          for (e = i[0], a = 0; a < i.length - 1; a++)(s = gn(this, c[n + a], t, a)) === dn && (s = this._$AH[a]), o || (o = !Xt(s) || s !== this._$AH[a]), s === pn ? e = pn : e !== pn && (e += (null != s ? s : "") + i[a + 1]), this._$AH[a] = s
                      }
                      o && !r && this.j(e)
                  }
              }, {
                  key: "j",
                  value: function(e) {
                      e === pn ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != e ? e : "")
                  }
              }]), e
          }(),
          Sn = function(e) {
              ht(n, e);
              var t = dt(n);

              function n() {
                  var e;
                  return At(this, n), (e = t.apply(this, arguments)).type = 3, e
              }
              return Et(n, [{
                  key: "j",
                  value: function(e) {
                      this.element[this.name] = e === pn ? void 0 : e
                  }
              }]), n
          }(kn),
          xn = Kt ? Kt.emptyScript : "",
          An = function(e) {
              ht(n, e);
              var t = dt(n);

              function n() {
                  var e;
                  return At(this, n), (e = t.apply(this, arguments)).type = 4, e
              }
              return Et(n, [{
                  key: "j",
                  value: function(e) {
                      e && e !== pn ? this.element.setAttribute(this.name, xn) : this.element.removeAttribute(this.name)
                  }
              }]), n
          }(kn),
          _n = function(e) {
              ht(n, e);
              var t = dt(n);

              function n(e, r, i, o, a) {
                  var s;
                  return At(this, n), (s = t.call(this, e, r, i, o, a)).type = 5, s
              }
              return Et(n, [{
                  key: "_$AI",
                  value: function(e) {
                      var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
                      if ((e = null !== (t = gn(this, e, n, 0)) && void 0 !== t ? t : pn) !== dn) {
                          var r = this._$AH,
                              i = e === pn && r !== pn || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive,
                              o = e !== pn && (r === pn || i);
                          i && this.element.removeEventListener(this.name, this, r), o && this.element.addEventListener(this.name, this, e), this._$AH = e
                      }
                  }
              }, {
                  key: "handleEvent",
                  value: function(e) {
                      var t, n;
                      "function" == typeof this._$AH ? this._$AH.call(null !== (n = null === (t = this.options) || void 0 === t ? void 0 : t.host) && void 0 !== n ? n : this.element, e) : this._$AH.handleEvent(e)
                  }
              }]), n
          }(kn),
          En = function() {
              function e(t, n, r) {
                  At(this, e), this.element = t, this.type = 6, this._$AN = void 0, this._$AM = n, this.options = r
              }
              return Et(e, [{
                  key: "_$AU",
                  get: function() {
                      return this._$AM._$AU
                  }
              }, {
                  key: "_$AI",
                  value: function(e) {
                      gn(this, e)
                  }
              }]), e
          }(),
          On = Vt.litHtmlPolyfillSupport;
      null == On || On(yn, wn), (null !== (Wt = Vt.litHtmlVersions) && void 0 !== Wt ? Wt : Vt.litHtmlVersions = []).push("2.5.0");
      var Cn, Pn, In = function(e) {
          ht(n, e);
          var t = dt(n);

          function n() {
              var e;
              return At(this, n), (e = t.apply(this, arguments)).renderOptions = {
                  host: vt(e)
              }, e._$Do = void 0, e
          }
          return Et(n, [{
              key: "createRenderRoot",
              value: function() {
                  var e, t, r = ct(wt(n.prototype), "createRenderRoot", this).call(this);
                  return null !== (e = (t = this.renderOptions).renderBefore) && void 0 !== e || (t.renderBefore = r.firstChild), r
              }
          }, {
              key: "update",
              value: function(e) {
                  var t = this.render();
                  this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), ct(wt(n.prototype), "update", this).call(this, e), this._$Do = function(e, t, n) {
                      var r, i, o = null !== (r = null == n ? void 0 : n.renderBefore) && void 0 !== r ? r : t,
                          a = o._$litPart$;
                      if (void 0 === a) {
                          var s = null !== (i = null == n ? void 0 : n.renderBefore) && void 0 !== i ? i : null;
                          o._$litPart$ = a = new wn(t.insertBefore(Qt(), s), s, void 0, null != n ? n : {})
                      }
                      return a._$AI(e), a
                  }(t, this.renderRoot, this.renderOptions)
              }
          }, {
              key: "connectedCallback",
              value: function() {
                  var e;
                  ct(wt(n.prototype), "connectedCallback", this).call(this), null === (e = this._$Do) || void 0 === e || e.setConnected(!0)
              }
          }, {
              key: "disconnectedCallback",
              value: function() {
                  var e;
                  ct(wt(n.prototype), "disconnectedCallback", this).call(this), null === (e = this._$Do) || void 0 === e || e.setConnected(!1)
              }
          }, {
              key: "render",
              value: function() {
                  return dn
              }
          }]), n
      }(Ft);
      In.finalized = !0, In._$litElement$ = !0, null === (Cn = globalThis.litElementHydrateSupport) || void 0 === Cn || Cn.call(globalThis, {
          LitElement: In
      });
      var Rn = globalThis.litElementPolyfillSupport;
      null == Rn || Rn({
          LitElement: In
      }), (null !== (Pn = globalThis.litElementVersions) && void 0 !== Pn ? Pn : globalThis.litElementVersions = []).push("3.2.2");
      var $n = function(e) {
              ht(n, e);
              var t = dt(n);

              function n() {
                  return At(this, n), t.apply(this, arguments)
              }
              return Et(n, [{
                  key: "trackClick",
                  value: function(e) {
                      var t = e.currentTarget.dataset.eventClickTracking;
                      this.dispatchEvent(new CustomEvent("trackClick", {
                          bubbles: !0,
                          composed: !0,
                          detail: {
                              event: t
                          }
                      }))
                  }
              }, {
                  key: "trackSubmit",
                  value: function(e) {
                      var t = e.currentTarget.dataset.eventSubmitTracking;
                      this.dispatchEvent(new CustomEvent("trackSubmit", {
                          bubbles: !0,
                          composed: !0,
                          detail: {
                              event: t
                          }
                      }))
                  }
              }]), n
          }(In),
          Ln = {
              audio: fn(i || (i = st(['\n  <svg\n    width="40px"\n    height="40px"\n    viewBox="0 0 40 40"\n    version="1.1"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="audioTitleID audioDescID"\n  >\n    <title id="audioTitleID">Audio icon</title>\n    <desc id="audioDescID">An illustration of an audio speaker.</desc>\n    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n      <g transform="translate(10, 8)" class="fill-color">\n        <path\n          d="M19.4264564,11.8585048 L19.4264564,20.7200433 C19.4264564,22.3657576 18.8838179,23.2519114 16.8489237,23.2519114 C12.2364969,23.125318 7.75972977,23.125318 3.14730298,23.2519114 C1.24806842,23.2519114 0.569770368,22.492351 0.569770368,20.7200433 L0.569770368,2.74377955 C0.569770368,1.09806526 1.11240881,0.211911416 3.14730298,0.211911416 C7.75972977,0.338504822 12.2364969,0.338504822 16.8489237,0.211911416 C18.7481583,0.211911416 19.4264564,0.971471855 19.4264564,2.74377955 C19.2907967,5.78202131 19.4264564,8.82026306 19.4264564,11.8585048 L19.4264564,11.8585048 Z M10.0659432,2.74377955 C8.16670861,2.74377955 6.67445288,4.13630702 6.67445288,5.90861471 C6.67445288,7.6809224 8.16670861,9.07344988 10.0659432,9.07344988 C11.9651777,9.07344988 13.4574335,7.6809224 13.4574335,5.90861471 C13.4574335,4.13630702 11.8295181,2.74377955 10.0659432,2.74377955 L10.0659432,2.74377955 Z M10.0659432,11.4787246 C7.21709133,11.4787246 5.04653754,13.6308125 5.04653754,16.1626806 C5.04653754,18.8211422 7.35275094,20.8466367 10.0659432,20.8466367 C12.914795,20.8466367 15.0853488,18.6945488 15.0853488,16.1626806 C15.0853488,13.6308125 12.7791354,11.4787246 10.0659432,11.4787246 L10.0659432,11.4787246 Z"\n        ></path>\n        <ellipse cx="10.2016028" cy="16.5690777" rx="1.35659611" ry="1.34075134"></ellipse>\n      </g>\n    </g>\n  </svg>\n']))),
              close: fn(o || (o = st(['\n  <svg\n    width="40px"\n    height="40px"\n    viewBox="0 0 40 40"\n    version="1.1"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="closeTitleID closeDescID"\n  >\n    <title id="closeTitleID">Close icon</title>\n    <desc id="closeDescID">A line drawing of an X</desc>\n    <path d="m29.1923882 10.8076118c.5857864.5857865.5857864 1.535534 0 2.1213204l-7.0711162 7.0703398 7.0711162 7.0717958c.5857864.5857864.5857864 1.5355339 0 2.1213204-.5857865.5857864-1.535534.5857864-2.1213204 0l-7.0717958-7.0711162-7.0703398 7.0711162c-.5857864.5857864-1.5355339.5857864-2.1213204 0-.5857864-.5857865-.5857864-1.535534 0-2.1213204l7.0706602-7.0717958-7.0706602-7.0703398c-.5857864-.5857864-.5857864-1.5355339 0-2.1213204.5857865-.5857864 1.535534-.5857864 2.1213204 0l7.0703398 7.0706602 7.0717958-7.0706602c.5857864-.5857864 1.5355339-.5857864 2.1213204 0z" class="fill-color" fill-rule="evenodd"/>\n  </svg>\n']))),
              donate: fn(a || (a = st(['\n  <svg\n    width="40"\n    height="40"\n    viewBox="0 0 40 40"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="donateTitleID donateDescID"\n  >\n    <title id="donateTitleID">Donate icon</title>\n    <desc id="donateDescID">An illustration of a heart shape</desc>\n    <path class="fill-color" d="m30.0120362 11.0857287c-1.2990268-1.12627221-2.8599641-1.65258786-4.682812-1.57894699-.8253588.02475323-1.7674318.3849128-2.8262192 1.08047869-1.0587873.6955659-1.89622 1.5724492-2.512298 2.63065-.591311-1.0588196-1.4194561-1.9357029-2.4844351-2.63065-1.0649791-.69494706-2.0039563-1.05510663-2.8169316-1.08047869-1.2067699-.04950647-2.318187.17203498-3.3342513.66462439-1.0160643.4925893-1.82594378 1.2002224-2.42963831 2.1228992-.60369453.9226769-.91173353 1.9629315-.92411701 3.1207641-.03715043 1.9202322.70183359 3.7665141 2.21695202 5.5388457 1.2067699 1.4035084 2.912594 3.1606786 5.1174721 5.2715107 2.2048782 2.1108321 3.7565279 3.5356901 4.6549492 4.2745742.8253588-.6646243 2.355647-2.0647292 4.5908647-4.2003145s3.9747867-3.9171994 5.218707-5.3448422c1.502735-1.7723316 2.2355273-3.6186135 2.1983769-5.5388457-.0256957-1.7608832-.6875926-3.2039968-1.9866194-4.3302689z"/>\n  </svg>\n']))),
              ellipses: fn(s || (s = st(['\n  <svg\n    height="40"\n    viewBox="0 0 40 40"\n    width="40"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="ellipsesTitleID ellipsesDescID"\n  >\n    <title id="ellipsesTitleID">Ellipses icon</title>\n    <desc id="ellipsesDescID">An illustration of text ellipses.</desc>\n    <path class="fill-color" d="m10.5 17.5c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5c-1.38071187 0-2.5-1.1192881-2.5-2.5s1.11928813-2.5 2.5-2.5zm9.5 0c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5-2.5-1.1192881-2.5-2.5 1.1192881-2.5 2.5-2.5zm9.5 0c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5-2.5-1.1192881-2.5-2.5 1.1192881-2.5 2.5-2.5z" fill-rule="evenodd"/>\n  </svg>\n']))),
              iaLogo: fn(c || (c = st(['\n  <svg\n    class="ia-logo"\n    width="27"\n    height="30"\n    viewBox="0 0 27 30"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="logoTitleID logoDescID"\n  >\n    <title id="logoTitleID">Internet Archive logo</title>\n    <desc id="logoDescID">A line drawing of the Internet Archive headquarters building façade.</desc>\n    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n      <mask id="mask-2" fill="white">\n        <path d="M26.6666667,28.6046512 L26.6666667,30 L0,30 L0.000283687943,28.6046512 L26.6666667,28.6046512 Z M25.6140351,26.5116279 L25.6140351,28.255814 L1.05263158,28.255814 L1.05263158,26.5116279 L25.6140351,26.5116279 Z M3.62469203,7.6744186 L3.91746909,7.82153285 L4.0639977,10.1739544 L4.21052632,13.9963932 L4.21052632,17.6725617 L4.0639977,22.255044 L4.03962296,25.3421929 L3.62469203,25.4651163 L2.16024641,25.4651163 L1.72094074,25.3421929 L1.55031755,22.255044 L1.40350877,17.6970339 L1.40350877,14.0211467 L1.55031755,10.1739544 L1.68423854,7.80887484 L1.98962322,7.6744186 L3.62469203,7.6744186 Z M24.6774869,7.6744186 L24.9706026,7.82153285 L25.1168803,10.1739544 L25.2631579,13.9963932 L25.2631579,17.6725617 L25.1168803,22.255044 L25.0927809,25.3421929 L24.6774869,25.4651163 L23.2130291,25.4651163 L22.7736357,25.3421929 L22.602418,22.255044 L22.4561404,17.6970339 L22.4561404,14.0211467 L22.602418,10.1739544 L22.7369262,7.80887484 L23.0420916,7.6744186 L24.6774869,7.6744186 Z M9.94042303,7.6744186 L10.2332293,7.82153285 L10.3797725,10.1739544 L10.5263158,13.9963932 L10.5263158,17.6725617 L10.3797725,22.255044 L10.3556756,25.3421929 L9.94042303,25.4651163 L8.47583122,25.4651163 L8.0362015,25.3421929 L7.86556129,22.255044 L7.71929825,17.6970339 L7.71929825,14.0211467 L7.86556129,10.1739544 L8.00005604,7.80887484 L8.30491081,7.6744186 L9.94042303,7.6744186 Z M18.0105985,7.6744186 L18.3034047,7.82153285 L18.449948,10.1739544 L18.5964912,13.9963932 L18.5964912,17.6725617 L18.449948,22.255044 L18.425851,25.3421929 L18.0105985,25.4651163 L16.5460067,25.4651163 L16.1066571,25.3421929 L15.9357367,22.255044 L15.7894737,17.6970339 L15.7894737,14.0211467 L15.9357367,10.1739544 L16.0702315,7.80887484 L16.3753664,7.6744186 L18.0105985,7.6744186 Z M25.6140351,4.53488372 L25.6140351,6.97674419 L1.05263158,6.97674419 L1.05263158,4.53488372 L25.6140351,4.53488372 Z M13.0806755,0 L25.9649123,2.93331338 L25.4484139,3.8372093 L0.771925248,3.8372093 L0,3.1041615 L13.0806755,0 Z" id="path-1"></path>\n      </mask>\n      <use fill="#FFFFFF" xlink:href="#path-1"></use>\n      <g  mask="url(#mask-2)" fill="#FFFFFF">\n        <path d="M0,0 L26.6666667,0 L26.6666667,30 L0,30 L0,0 Z" id="swatch"></path>\n      </g>\n    </g>\n  </svg>\n']))),
              images: fn(u || (u = st(['\n  <svg\n    height="40"\n    viewBox="0 0 40 40"\n    width="40"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="imagesTitleID imagesDescID"\n  >\n    <title id="imagesTitleID">Images icon</title>\n    <desc id="imagesDescID">An illustration of two photographs.</desc>\n    <path class="fill-color" d="m20.8219178 15.3769871c0 1.1136708-.8767123 1.8932404-1.8630137 1.8932404s-1.9726027-.8909367-1.9726027-1.8932404c0-1.0023038.8767123-1.8932404 1.9726027-1.8932404.9863014 0 1.8630137.8909366 1.8630137 1.8932404zm-5.9178082-3.7864808h15.4520548v6.0138225l-1.9726028-3.3410125-2.6301369 6.3479237-2.1917809-2.67281-6.1369863 5.1228859h-2.5205479zm-1.7534247-1.6705063v14.9231892h18.8493151v-14.9231892zm-2.9589041 7.2388604c.2191781 0 1.9726028-.3341012 1.9726028-.3341012v-2.0046075l-4.1643836.5568354c.43835616 4.7887846.87671233 9.9116704 1.31506849 14.700455 6.02739731-.5568354 13.26027401-1.5591391 19.39726031-2.1159746-.1095891-.5568354-.1095891-2.0046075-.2191781-2.67281-.4383562.1113671-1.4246575 0-1.8630137.1113671v.8909367c-5.1506849.4454683-10.3013699 1.1136708-15.4520548 1.6705062.109589-.111367-.5479452-7.0161262-.9863014-10.8026071z" fill-rule="evenodd"/>\n  </svg>\n']))),
              search: fn(l || (l = st(['\n  <svg\n    height="40"\n    viewBox="0 0 40 40"\n    width="40"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="searchTitleID searchDescID"\n  >\n    <title id="searchTitleID">Search icon</title>\n    <desc id="searchDescID">An illustration of a magnifying glass.</desc>\n    <path class="fill-color" d="m32.4526364 29.8875889-8.1719472-7.9751279c1.1046135-1.4876138 1.7652549-3.3102407 1.7652549-5.2846451 0-.101185-.0142895-.1981539-.030573-.2944743.0166158-.0976175.0309053-.196208.0309053-.2990145 0-4.9814145-4.152935-9.0343271-9.2572866-9.0343271-.0907218 0-.1781206.01394537-.2655193.02594487-.0880633-.0119995-.1747974-.02594487-.2655193-.02594487-5.1046839 0-9.25761889 4.0529126-9.25761889 9.0343271 0 .1011849.01395722.1981539.03057294.2947985-.01694804.0976176-.03090525.1958838-.03090525.2986903 0 4.9814145 4.1526027 9.0346514 9.2572866 9.0346514.0907218 0 .1777882-.0139454.2658516-.0262692.0873987.0123238.1741328.0262692.265187.0262692 1.7306942 0 3.3467399-.4747911 4.7338208-1.2852439l8.2882574 8.0886366c.3652137.3564177.843082.53414 1.3212826.53414.4782007 0 .9567336-.1780467 1.3212827-.53414.7294304-.7118622.7294304-1.8660845-.0003323-2.5782711zm-15.9526364-7.8875889c-.0832667-.0118703-.1652765-.0253024-.2513711-.0253024-2.8781993 0-5.2197212-2.3278242-5.2197212-5.1891862 0-.0974612-.013197-.1908615-.0289077-.2836371.0160249-.0940251.0292219-.1889874.0292219-.2880105 0-2.861362 2.3418361-5.1891861 5.2200354-5.1891861.0854662 0 .1677902-.0131198.2510569-.0246777.0826383.0115579.1649623.0246777.2510569.0246777 2.8781993 0 5.2197212 2.3278241 5.2197212 5.1891861 0 .0974612.0135112.1908616.0289077.2839496-.0157107.0940251-.0295361.1886749-.0295361.287698 0 2.861362-2.3415219 5.1891862-5.2197212 5.1891862-.0860946 0-.1684187.0134321-.2507427.0253024z" fill-rule="evenodd" />\n  </svg>\n']))),
              software: fn(f || (f = st(['\n  <svg\n    width="40"\n    height="40"\n    viewBox="0 0 40 40"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="softwareTitleID softwareDescID"\n  >\n    <title id="softwareTitleID">Software icon</title>\n    <desc id="softwareDescID">An illustration of a 3.5" floppy disk.</desc>\n    <path class="fill-color" d="m32 30.6900373v-21.44521088c0-.82988428-.4156786-1.24482642-1.2470357-1.24482642h-21.50592858c-.83135715 0-1.24703572.4221795-1.24703572 1.26653851v21.44521089c0 .8588337.41567857 1.2882506 1.24703572 1.2882506h21.48327168c.8458575 0 1.2687863-.4366542 1.2687863-1.3099627zm-5.9950155-20.4410268v6.114667c0 .6694561-.3428744 1.0041841-1.0286232 1.0041841h-10.1294464c-.2622159 0-.4773054-.0802141-.6452685-.2406423s-.2519447-.3642806-.2519447-.6115572v-6.1363791l.0217506-.1311772h12.0326259zm-4.9437353.8295827v5.0010178h3.0405558v-5.0010178zm-9.7134658 18.8035735v-7.753025c0-.5241057.1604108-.9025595.4812325-1.1353613.1897138-.1453504.4011782-.2180256.6343932-.2180256h14.7451099c.3208217 0 .5905898.1091636.8093044.3274907s.3280719.5023936.3280719.8521995v7.8181612l-.0217506.1094652h-16.9772676z"/>\n  </svg>\n']))),
              texts: fn(h || (h = st(['\n  <svg\n    height="40"\n    viewBox="0 0 40 40"\n    width="40"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="textsTitleID textsDescID"\n  >\n    <title id="textsTitleID">Texts icon</title>\n    <desc id="textsDescID">An illustration of an open book.</desc>\n    <path class="fill-color" d="m10.3323235 11.0007023h6.9060825c.8851083 0 1.5847122.3064258 2.0988114.9192774v14.4324451h-.6460032c-.1435563-.120323-.3528315-.2434552-.6278257-.3693964-.2749942-.1259413-.5201585-.2191097-.7354929-.2795053l-.3048241-.1081503h-5.7042647c-.3108832 0-.5621067-.0601615-.7536705-.1804846-.0717781-.0599274-.1256117-.1439663-.1615008-.2521166-.0358891-.1081502-.0598928-.2043619-.0720112-.2886348v-13.8741368zm19.1752505 0v13.603761c-.0717781.3361555-.2211606.5943584-.4481473.7746089-.0717781.0599274-.1733862.1079162-.304824.1439663-.1314379.0360501-.2451643.0601615-.3411793.0723343h-5.5965975c-.9568865.2640552-1.5068748.5164059-1.649965.757052h-.6634817v-14.4324451c.5140992-.6128516 1.2076439-.9192774 2.0806339-.9192774h6.92426zm1.3814961.6489017-.1796783 15.2976474c-.0955489 0-1.0342578.0119386-2.8161268.035816-1.7818691.0238773-3.3006293.0898911-4.5562806.1980414-1.2556514.1081503-1.9613144.2884008-2.1169891.5407514-.0955488.1924233-.5439291.273419-1.345141.2429871-.8012118-.0304319-1.3155441-.1776755-1.5429969-.4417308-.334654-.3843783-3.4558378-.5765674-9.36355164-.5765674v-15.3875385l-.96830576.3960828v16.2702977c6.4096947-.2041278 9.7760429-.0840388 10.0990445.3602669.2391051.276228.9864833.414342 2.2421347.414342.1915638 0 .4187835-.0210682.6816593-.0632047s.4810068-.0870821.6543929-.1348367c.1733862-.0477547.2719646-.0838048.2957353-.1081503.0838965-.1563732.9599161-.2675666 2.6280587-.3335805 1.6681426-.0660138 3.3213703-.0931684 4.9596831-.0814638l2.4392915.0182591v-16.2344816z"/>\n  </svg>\n']))),
              upload: fn(d || (d = st(['\n  <svg\n    width="40"\n    height="41"\n    viewBox="0 0 40 41"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="uploadTitleID uploadDescID"\n  >\n    <title id="uploadTitleID">Upload icon</title>\n    <desc id="uploadDescID">An illustration of a horizontal line over an up pointing arrow.</desc>\n    <path class="fill-color" d="m20 12.8 8 10.4h-4.8v8.8h-6.4v-8.8h-4.8zm12-4.8v3.2h-24v-3.2z" fill-rule="evenodd"/>\n  </svg>\n']))),
              user: fn(p || (p = st(['\n  <svg\n    width="40"\n    height="40"\n    viewBox="0 0 40 40"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="userTitleID userDescID"\n  >\n    <title id="userTitleID">User icon</title>\n    <desc id="userDescID">An illustration of a person\'s head and chest.</desc>\n    <path class="fill-color" d="m20.7130435 18.0434783c-3.5658385 0-6.4565218-2.9198821-6.4565218-6.5217392 0-3.60185703 2.8906833-6.5217391 6.4565218-6.5217391s6.4565217 2.91988207 6.4565217 6.5217391c0 3.6018571-2.8906832 6.5217392-6.4565217 6.5217392zm-12.9130435 16.9565217c0-7.9240855 5.7813665-14.3478261 12.9130435-14.3478261s12.9130435 6.4237406 12.9130435 14.3478261z" fill-rule="evenodd"/>\n  </svg>\n']))),
              video: fn(v || (v = st(['\n  <svg\n    height="40"\n    viewBox="0 0 40 40"\n    width="40"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="videoTitleID videoDescID"\n  >\n    <title id="videoTitleID">Video icon</title>\n    <desc id="videoDescID">An illustration of two cells of a film strip.</desc>\n    <path class="fill-color" d="m31.0117647 12.0677966c0 .4067797-.2823529.6779661-.7058823.6779661h-1.2705883c-.4235294 0-.7058823-.2711864-.7058823-.6779661v-.6779661c0-.4067797.2823529-.6779661.7058823-.6779661h1.2705883c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.2542373c0 .4067797-.2823529.6779661-.7058823.6779661h-1.2705883c-.4235294 0-.7058823-.2711864-.7058823-.6779661v-.6779661c0-.4067797.2823529-.6779661.7058823-.6779661h1.2705883c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.2542373c0 .4067796-.2823529.6779661-.7058823.6779661h-1.2705883c-.4235294 0-.7058823-.2711865-.7058823-.6779661v-.6779661c0-.4067797.2823529-.6779661.7058823-.6779661h1.2705883c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.3898305c0 .4067797-.2823529.6779661-.7058823.6779661h-1.2705883c-.4235294 0-.7058823-.2711864-.7058823-.6779661v-.6779661c0-.4067797.2823529-.6779661.7058823-.6779661h1.2705883c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.2542373c0 .4067796-.2823529.6779661-.7058823.6779661h-1.2705883c-.4235294 0-.7058823-.2711865-.7058823-.6779661v-.6779661c0-.4067797.2823529-.6779661.7058823-.6779661h1.2705883c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.2542373c0 .4067796-.2823529.6779661-.7058823.6779661h-1.2705883c-.4235294 0-.7058823-.2711865-.7058823-.6779661v-.6779661c0-.4067797.2823529-.6779661.7058823-.6779661h1.2705883c.4235294 0 .7058823.2711864.7058823.6779661zm-4.0941176-10.440678c0 .5423729-.4235295.9491525-.9882353.9491525h-11.5764706c-.5647059 0-.9882353-.4067796-.9882353-.9491525v-6.9152542c0-.5423729.4235294-.9491526.9882353-.9491526h11.5764706c.5647058 0 .9882353.4067797.9882353.9491526zm-.1411765 11.2542373c0 .5423729-.4235294.9491525-.9882353.9491525h-11.5764706c-.5647059 0-.9882353-.4067796-.9882353-.9491525v-6.9152542c0-.5423729.4235294-.9491526.9882353-.9491526h11.5764706c.5647059 0 .9882353.4067797.9882353.9491526zm-14.9647059-17.220339c0 .4067797-.2823529.6779661-.7058823.6779661h-1.27058828c-.42352941 0-.70588236-.2711864-.70588236-.6779661v-.6779661c0-.4067797.28235295-.6779661.70588236-.6779661h1.27058828c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.2542373c0 .4067797-.2823529.6779661-.7058823.6779661h-1.27058828c-.42352941 0-.70588236-.2711864-.70588236-.6779661v-.6779661c0-.4067797.28235295-.6779661.70588236-.6779661h1.27058828c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.2542373c0 .4067796-.2823529.6779661-.7058823.6779661h-1.27058828c-.42352941 0-.70588236-.2711865-.70588236-.6779661v-.6779661c0-.4067797.28235295-.6779661.70588236-.6779661h1.27058828c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.3898305c0 .4067797-.2823529.6779661-.7058823.6779661h-1.27058828c-.42352941 0-.70588236-.2711864-.70588236-.6779661v-.6779661c0-.4067797.28235295-.6779661.70588236-.6779661h1.27058828c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.2542373c0 .4067796-.2823529.6779661-.7058823.6779661h-1.27058828c-.42352941 0-.70588236-.2711865-.70588236-.6779661v-.6779661c0-.4067797.28235295-.6779661.70588236-.6779661h1.27058828c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.2542373c0 .4067796-.2823529.6779661-.7058823.6779661h-1.27058828c-.42352941 0-.70588236-.2711865-.70588236-.6779661v-.6779661c0-.4067797.28235295-.6779661.70588236-.6779661h1.27058828c.4235294 0 .7058823.2711864.7058823.6779661zm20.0470588-20.4745763h-.8470588v.27118644.6779661c0 .40677966-.2823529.6779661-.7058823.6779661h-1.2705883c-.4235294 0-.7058823-.27118644-.7058823-.6779661v-.6779661-.27118644h-16.5176471v.27118644.6779661c0 .40677966-.2823529.6779661-.7058823.6779661h-1.27058828c-.42352941 0-.70588236-.27118644-.70588236-.6779661v-.6779661-.27118644h-1.12941176v24h1.12941176v-.2711864-.6779661c0-.4067797.28235295-.6779661.70588236-.6779661h1.27058828c.4235294 0 .7058823.2711864.7058823.6779661v.6779661.2711864h16.6588235v-.2711864-.6779661c0-.4067797.282353-.6779661.7058824-.6779661h1.2705882c.4235294 0 .7058824.2711864.7058824.6779661v.6779661.2711864h.8470588v-24z" fill-rule="evenodd"/>\n  </svg>\n']))),
              web: fn(m || (m = st(['\n  <svg\n    height="40"\n    viewBox="0 0 40 40"\n    width="40"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="webTitleID webDescID"\n  >\n    <title id="webTitleID">Web icon</title>\n    <desc id="webDescID">An illustration of a computer application window</desc>\n    <path class="fill-color" d="m8 28.7585405v-8.1608108-9.3577297h24v9.3577297 8.1608108zm14.2702703-15.8863783h-12.43243246v2.6114594h12.43243246zm7.7837838 14.0365946v-7.0727027-1.8497838h-20.21621626v1.8497838 7.0727027zm-3.7837838-14.0365946h-2.7027027v2.6114594h2.7027027zm4 0h-2.7027027v2.6114594h2.7027027z" fill-rule="evenodd"/>\n  </svg>\n'])))
          },
          Tn = function(e) {
              ht(n, e);
              var t = dt(n);

              function n() {
                  return At(this, n), t.apply(this, arguments)
              }
              return Et(n, [{
                  key: "render",
                  value: function() {
                      return this.active ? n.opened : n.closed
                  }
              }], [{
                  key: "styles",
                  get: function() {
                      return Tt(y || (y = st(["\n      svg {\n        display: block;\n      }\n      .fill-color {\n        fill: var(--activeColor);\n      }\n    "])))
                  }
              }, {
                  key: "closed",
                  get: function() {
                      return fn(g || (g = st(['\n      <svg height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg" aria-labelledby="hamburgerTitleID hamburgerDescID">\n        <title id="hamburgerTitleID">Hamburger icon</title>\n        <desc id="hamburgerDescID">An icon used to represent a menu that can be toggled by interacting with this icon.</desc>\n        <path d="m30.5 26.5c.8284271 0 1.5.6715729 1.5 1.5s-.6715729 1.5-1.5 1.5h-21c-.82842712 0-1.5-.6715729-1.5-1.5s.67157288-1.5 1.5-1.5zm0-8c.8284271 0 1.5.6715729 1.5 1.5s-.6715729 1.5-1.5 1.5h-21c-.82842712 0-1.5-.6715729-1.5-1.5s.67157288-1.5 1.5-1.5zm0-8c.8284271 0 1.5.6715729 1.5 1.5s-.6715729 1.5-1.5 1.5h-21c-.82842712 0-1.5-.6715729-1.5-1.5s.67157288-1.5 1.5-1.5z" fill="#999" fill-rule="evenodd"/>\n      </svg>\n    '])))
                  }
              }, {
                  key: "opened",
                  get: function() {
                      return Ln.close
                  }
              }]), n
          }(function(e) {
              ht(n, e);
              var t = dt(n);

              function n() {
                  var e;
                  return At(this, n), (e = t.call(this)).fill = "fff", e.active = !1, e
              }
              return Et(n, null, [{
                  key: "properties",
                  get: function() {
                      return {
                          fill: {
                              type: String
                          },
                          active: {
                              type: Boolean
                          }
                      }
                  }
              }]), n
          }(In));
      customElements.define("icon-hamburger", Tn);
      var jn = Tt(b || (b = st(["\n  .dropdown-toggle {\n    display: block;\n    height: 4rem;\n    font-size: 1.6rem;\n    text-transform: uppercase;\n    text-decoration: none;\n    color: var(--grey80);\n    cursor: pointer;\n  }\n\n  .dropdown-toggle .fill-color {\n    fill: var(--iconFill);\n  }\n\n  .dropdown-toggle:active .fill-color,\n  .dropdown-toggle:focus .fill-color,\n  .dropdown-toggle:hover .fill-color {\n    fill: var(--linkHoverColor);\n  }\n\n  .active {\n    border-radius: 1rem 1rem 0 0;\n    background: var(--activeButtonBg);\n  }\n\n  .active .fill-color {\n    fill: var(--activeColor);\n  }\n\n  span {\n    display: none;\n    font-size: 1.4rem;\n    text-transform: uppercase;\n    color: var(--loginTextColor);\n  }\n\n  span a {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  a:hover,\n  a:active,\n  a:focus {\n    color: var(--linkHoverColor);\n  }\n\n  @media (min-width: 890px) {\n    .logged-out-toolbar {\n      transform: translateY(-.5rem);\n    }\n\n    .active {\n      background: transparent;\n    }\n\n    .dropdown-toggle {\n      display: inline-block;\n      vertical-align: middle;\n    }\n\n    span {\n      display: inline;\n      vertical-align: middle;\n    }\n  }\n"]))),
          Mn = function(e, t) {
              return /^https?:/.test(e) ? e : "".concat(t).concat(e)
          },
          Un = function(e) {
              ht(n, e);
              var t = dt(n);

              function n() {
                  var e;
                  return At(this, n), (e = t.call(this)).config = {}, e.openMenu = "", e
              }
              return Et(n, [{
                  key: "signupPath",
                  get: function() {
                      return Mn("/account/signup", this.baseHost)
                  }
              }, {
                  key: "loginPath",
                  get: function() {
                      return Mn("/account/login", this.baseHost)
                  }
              }, {
                  key: "analyticsEvent",
                  get: function() {
                      return "".concat(this.config.eventCategory, "|NavLoginIcon")
                  }
              }, {
                  key: "menuOpened",
                  get: function() {
                      return "login" === this.openMenu
                  }
              }, {
                  key: "avatarClass",
                  get: function() {
                      return "dropdown-toggle".concat(this.menuOpened ? " active" : "")
                  }
              }, {
                  key: "toggleDropdown",
                  value: function(e) {
                      e.preventDefault(), this.trackClick(e), this.dropdownTabIndex = this.menuOpened ? "" : "-1", this.dispatchEvent(new CustomEvent("menuToggled", {
                          bubbles: !0,
                          composed: !0,
                          detail: {
                              menuName: "login"
                          }
                      }))
                  }
              }, {
                  key: "render",
                  value: function() {
                      return fn(w || (w = st(['\n      <div class="logged-out-toolbar">\n        <a\n          class="', '"\n          @click=', '\n          data-event-click-tracking="', '"\n        >\n          ', '\n        </a>\n        <span>\n        <a href="', '">Sign up</a>\n        |\n        <a href="', '">Log in</a>\n        </span>\n      </div>\n    '])), this.avatarClass, this.toggleDropdown, this.analyticsEvent, Ln.user, this.signupPath, this.loginPath)
                  }
              }], [{
                  key: "styles",
                  get: function() {
                      return jn
                  }
              }, {
                  key: "properties",
                  get: function() {
                      return {
                          baseHost: {
                              type: String
                          },
                          config: {
                              type: Object
                          },
                          openMenu: {
                              type: String
                          }
                      }
                  }
              }]), n
          }($n);
      customElements.define("login-button", Un);
      var Nn = Tt(k || (k = st(['\n  input[type="text"] {\n    color: var(--grey13);\n  }\n\n  input:focus {\n    outline: none;\n  }\n  button {\n    background: none;\n    color: inherit;\n    border: none;\n    font: inherit;\n    cursor: pointer;\n  }\n  button:focus {\n    outline: none;\n  }\n  .search {\n    padding-top: 0;\n    margin-right: 0.5rem;\n  }\n  .search svg {\n    position: relative;\n    top: -5px;\n    right: -3px;\n    fill: var(--activeSearchColor);\n  }\n  .search-activated {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: absolute;\n    top: 0;\n    right: 4rem;\n    bottom: 0;\n    left: 4rem;\n    z-index: 3;\n    padding: 0.5rem 0.2rem;\n    border-radius: 1rem 1rem 0 0;\n    background: var(--searchActiveBg);\n  }\n  .search-inactive {\n    display: none;\n  }\n  .search-activated .highlight,\n  .search-activated .search {\n    background: var(--searchActiveInputBg);\n    border-radius: 0.5rem;\n  }\n  .search-activated .highlight {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    margin: 0 0.5rem;\n  }\n  .search-activated .search {\n    height: 100%;\n    padding: 0;\n    margin-right: 0;\n    -ms-flex-item-align: center;\n    -ms-grid-row-align: center;\n    align-self: center;\n  }\n  .search-activated .search-field {\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    padding-left: 1rem;\n    border-radius: 0.5rem;\n    border: none;\n    font-size: 1.6rem;\n    text-align: center;\n  }\n  .search-activated .search-field:focus {\n    outline: none;\n  }\n  @keyframes fade-in {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  .fade-in {\n    animation: fade-in 0.2s forwards;\n  }\n\n  @media (min-width: 890px) {\n    .search svg {\n      display: inline;\n      width: 28px;\n      height: 28px;\n      vertical-align: -14px;\n    }\n    .search path {\n      fill: var(--desktopSearchIconFill);\n    }\n\n    .search-inactive,\n    .search-activated {\n      display: block;\n      position: static;\n      padding: 1.2rem 0.2rem;\n      background: transparent;\n    }\n\n    .search-activated .highlight {\n      width: 13rem;\n      height: 2.8rem;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n      flex-direction: row-reverse;\n    }\n\n    .search-activated .search-field {\n      width: calc(100% - 28px);\n      height: 100%;\n      padding-left: 0;\n      font-size: 1.4rem;\n      text-align: left;\n    }\n\n    .search-activated .search svg {\n      width: 28px;\n      height: 28px;\n    }\n  }\n']))),
          Bn = function(e) {
              ht(n, e);
              var t = dt(n);

              function n() {
                  var e;
                  return At(this, n), (e = t.call(this)).config = {}, e.locationHandler = function() {}, e.open = !1, e.openMenu = "", e.searchIn = "", e.inSearchBeta = !1, e.initSearchBetaOptIn(), e
              }
              return Et(n, [{
                  key: "updated",
                  value: function() {
                      return this.open && this.shadowRoot.querySelector("[name=query]").focus(), !0
                  }
              }, {
                  key: "initSearchBetaOptIn",
                  value: function() {
                      var e, t;
                      this.inSearchBeta = !!(null == (e = window.localStorage) ? void 0 : e.getItem("SearchBeta-opt-in")) || !!(null == (t = window.localStorage) ? void 0 : t.getItem("SearchBeta-launched"))
                  }
              }, {
                  key: "search",
                  value: function(e) {
                      var t = this.shadowRoot.querySelector("[name=query]").value;
                      return t ? "TV" === this.searchIn ? (this.locationHandler(Mn("/details/tv?q=".concat(t), this.baseHost)), e.preventDefault(), !1) : (this.trackSubmit(e), !0) : (e.preventDefault(), !1)
                  }
              }, {
                  key: "toggleSearchMenu",
                  value: function() {
                      "search" !== this.openMenu && this.dispatchEvent(new CustomEvent("menuToggled", {
                          detail: {
                              menuName: "search"
                          },
                          composed: !0,
                          bubbles: !0
                      }))
                  }
              }, {
                  key: "searchInsideInput",
                  get: function() {
                      return this.searchIn ? fn(S || (S = st(["<input type='hidden' name='sin' value='", "' />"])), this.searchIn) : pn
                  }
              }, {
                  key: "searchEndpoint",
                  get: function() {
                      return this.inSearchBeta ? "/search" : "/search.php"
                  }
              }, {
                  key: "render",
                  value: function() {
                      var e = this.open ? "flex" : "search-inactive";
                      return fn(x || (x = st(['\n      <div class="search-activated fade-in ', '">\n        <form\n          id="nav-search"\n          class="highlight"\n          action=', '\n          method="get"\n          @submit=', '\n          data-event-submit-tracking="', '|NavSearchSubmit"\n        >\n          <input\n            type="text"\n            name="query"\n            class="search-field"\n            placeholder="Search"\n            autocomplete="off"\n            @focus=', "\n            value=", "\n          />\n          ", '\n          <button\n            type="submit"\n            class="search"\n            data-event-click-tracking="', '|NavSearchClose"\n          >\n            ', "\n          </button>\n        </form>\n      </div>\n    "])), e, Mn(this.searchEndpoint, this.baseHost), this.search, this.config.eventCategory, this.toggleSearchMenu, this.searchQuery || "", this.searchInsideInput, this.config.eventCategory, Ln.search)
                  }
              }], [{
                  key: "styles",
                  get: function() {
                      return Nn
                  }
              }, {
                  key: "properties",
                  get: function() {
                      return {
                          baseHost: {
                              type: String
                          },
                          config: {
                              type: Object
                          },
                          locationHandler: {
                              type: Object
                          },
                          open: {
                              type: Boolean
                          },
                          openMenu: {
                              type: String
                          },
                          searchIn: {
                              type: String
                          },
                          searchQuery: {
                              type: String
                          }
                      }
                  }
              }]), n
          }($n);
      customElements.define("nav-search", Bn);
      var zn = function e(t) {
              var n = t.split(" "),
                  r = n.pop(),
                  i = "".concat(r.substr(0, 1).toUpperCase()).concat(r.substr(1));
              return n.length ? e("".concat(n.join(" ")).concat(i)) : i
          },
          Dn = Tt(A || (A = st(['\n  a {\n    display: inline-block;\n    text-decoration: none;\n  }\n\n  .menu-item {\n    display: inline-flex;\n    width: 100%;\n    padding: 0;\n    font-size: 1.6rem;\n    text-align: left;\n    background: transparent;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .menu-item:focus {\n    outline: none;\n  }\n\n  .label {\n    display: inline-block;\n    padding: 0;\n    font-weight: 400;\n    color: var(--primaryTextColor);\n    text-align: left;\n    vertical-align: middle;\n  }\n\n  .menu-item > .icon {\n    display: inline-flex;\n    width: 42px;\n    height: 42px;\n    vertical-align: middle;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n  }\n\n  .menu-item.selected .icon {\n    background-color: var(--activeButtonBg);\n    border-radius: 1rem 0 0 1rem;\n  }\n\n  .icon .fill-color {\n    fill: #999;\n  }\n\n  .icon.active .fill-color {\n    fill: #fff;\n  }\n\n  .donate .fill-color {\n    fill: #f00;\n  }\n\n  @media (min-width: 890px) {\n    .menu-item {\n      width: auto;\n      height: 5rem;\n      color: var(--mediaLabelDesktopColor);\n    }\n    .menu-item:hover,\n    .menu-item:active,\n    .menu-item:focus {\n      color: var(--linkHoverColor);\n    }\n\n    .menu-item:hover .fill-color,\n    .menu-item:active .fill-color,\n    .menu-item:focus .fill-color {\n      fill: var(--linkHoverColor);\n    }\n\n    .label {\n      display: none;\n    }\n\n    .label,\n    .web:after {\n      padding-right: 1rem;\n      font-size: 1.3rem;\n      text-transform: uppercase;\n      color: inherit;\n    }\n\n\n    .web:after {\n      display: none;\n      content: "web";\n    }\n    .donate,\n    .more {\n      display: none;\n    }\n\n    .menu-item.selected {\n      background: var(--activeDesktopMenuIcon);\n    }\n\n    .menu-item.selected .label,\n    .menu-item.selected.web:after {\n      color: var(--linkHoverColor);\n    }\n\n    .menu-item.selected .icon {\n      background: transparent;\n    }\n\n    /* selected state icon colors */\n    .web.selected .fill-color {\n      fill: #ffcd27;\n    }\n\n    .texts.selected .fill-color {\n      fill: #faab3c;\n    }\n\n    .video.selected .fill-color {\n      fill: #f1644b;\n    }\n\n    .audio.selected .fill-color {\n      fill: #00adef;\n    }\n\n    .software.selected .fill-color {\n      fill: #9ecc4f;\n    }\n\n    .images.selected .fill-color {\n      fill: #aa99c9;\n    }\n  }\n\n  @media (min-width: 1300px) {\n    .label,\n    .web:after {\n      display: inline;\n    }\n\n    .web .label {\n      display: none;\n    }\n  }\n']))),
          Hn = function(e) {
              ht(n, e);
              var t = dt(n);

              function n() {
                  var e;
                  return At(this, n), (e = t.call(this)).config = {}, e.icon = "", e.href = "", e.label = "", e.mediatype = "", e.openMenu = "", e.selected = !1, e.followable = !1, e
              }
              return Et(n, [{
                  key: "onClick",
                  value: function(e) {
                      this.trackClick(e), e.preventDefault(), "media" !== this.openMenu && this.dispatchMenuToggledEvent(), this.dispatchMediaTypeSelectedEvent()
                  }
              }, {
                  key: "dispatchMenuToggledEvent",
                  value: function() {
                      this.dispatchEvent(new CustomEvent("menuToggled", {
                          bubbles: !0,
                          composed: !0,
                          detail: {
                              menuName: "media"
                          }
                      }))
                  }
              }, {
                  key: "dispatchMediaTypeSelectedEvent",
                  value: function() {
                      this.dispatchEvent(new CustomEvent("mediaTypeSelected", {
                          bubbles: !0,
                          composed: !0,
                          detail: {
                              mediatype: this.mediatype
                          }
                      }))
                  }
              }, {
                  key: "buttonClass",
                  get: function() {
                      return this.selected ? "selected" : ""
                  }
              }, {
                  key: "tooltipPrefix",
                  get: function() {
                      return this.selected ? "Collapse" : "Expand"
                  }
              }, {
                  key: "iconClass",
                  get: function() {
                      return this.selected ? "active" : ""
                  }
              }, {
                  key: "analyticsEvent",
                  get: function() {
                      return "".concat(this.config.eventCategory, "|NavMenu").concat(zn(this.mediatype))
                  }
              }, {
                  key: "menuItem",
                  get: function() {
                      return fn(_ || (_ = st(['\n      <span class="icon ', '">\n        ', '\n      </span>\n      <span class="label">', "</span>\n    "])), this.iconClass, n.icons[this.icon], this.label)
                  }
              }, {
                  key: "render",
                  value: function() {
                      return fn(E || (E = st(['\n      <a\n        href="', '"\n        class="menu-item ', " ", '"\n        @click=', '\n        data-event-click-tracking="', '"\n        title="', " ", ' menu"\n      >\n        ', "\n      </a>\n    "])), this.href, this.mediatype, this.buttonClass, this.followable ? this.trackClick : this.onClick, this.analyticsEvent, this.tooltipPrefix, this.mediatype, this.menuItem)
                  }
              }], [{
                  key: "styles",
                  get: function() {
                      return Dn
                  }
              }, {
                  key: "properties",
                  get: function() {
                      return {
                          config: {
                              type: Object
                          },
                          icon: {
                              type: String
                          },
                          href: {
                              type: String
                          },
                          label: {
                              type: String
                          },
                          mediatype: {
                              type: String
                          },
                          openMenu: {
                              type: String
                          },
                          selected: {
                              type: Boolean
                          },
                          followable: {
                              type: Boolean
                          }
                      }
                  }
              }, {
                  key: "icons",
                  get: function() {
                      return Ln
                  }
              }]), n
          }($n);
      customElements.define("media-button", Hn);
      var Fn = Tt(O || (O = st(["\n  :host {\n    outline: none;\n  }\n\n  .media-menu-inner {\n    z-index: -1;\n    top: -40rem;\n    background-color: var(--mediaMenuBg);\n    margin: 0;\n    overflow: hidden;\n    transition-duration: 0.2s;\n    transition-property: top;\n    transition-timing-function: ease;\n  }\n\n  .menu-group {\n    position: relative;\n    line-height: normal;\n  }\n\n  /* Mobile view styles */\n  @media (max-width: 889px) {\n    .media-menu-container {\n      position: relative;\n    }\n\n    .media-menu-inner {\n      position: absolute;\n      width: 100%;\n    }\n\n    .open .media-menu-inner {\n      top: 0;\n    }\n\n    .overflow-clip {\n      position: absolute;\n      z-index: -1; /** needs to be under the navigation, otherwise it intercepts clicks */\n      top: 0;\n      left: 0;\n      height: 0;\n      width: 100%;\n      overflow: hidden;\n      transition-duration: 0.2s;\n      transition-property: height;\n    }\n\n    .open .overflow-clip {\n      height: 40rem;\n    }\n  }\n\n  /* Desktop view styles */\n  @media (min-width: 890px) {\n    .media-menu-inner {\n      display: inline-block;\n      position: static;\n      width: auto;\n      height: 5rem;\n      transition-property: none;\n    }\n\n    .menu-group {\n      font-size: 0;\n    }\n  }\n"]))),
          Wn = [{
              icon: "web",
              menu: "web",
              href: "/web/",
              label: "Wayback Machine"
          }, {
              icon: "texts",
              menu: "texts",
              href: "/details/texts",
              label: "Books"
          }, {
              icon: "video",
              menu: "video",
              href: "/details/movies",
              label: "Video"
          }, {
              icon: "audio",
              menu: "audio",
              href: "/details/audio",
              label: "Audio"
          }, {
              icon: "software",
              menu: "software",
              href: "/details/software",
              label: "Software"
          }, {
              icon: "images",
              menu: "images",
              href: "/details/image",
              label: "Images"
          }, {
              icon: "donate",
              menu: "donate",
              href: "/donate/",
              label: "Donate",
              followable: !0
          }, {
              icon: "ellipses",
              menu: "more",
              href: "/about/",
              label: "More"
          }],
          Vn = function(e) {
              ht(n, e);
              var t = dt(n);

              function n() {
                  var e;
                  return At(this, n), (e = t.call(this)).config = {}, e.openMenu = "", e.selectedMenuOption = "", e
              }
              return Et(n, [{
                  key: "mediaMenuOptionsTemplate",
                  get: function() {
                      var e = this;
                      return Wn.map((function(t) {
                          var n = t.icon,
                              r = t.menu,
                              i = t.label,
                              o = t.href,
                              a = t.followable,
                              s = e.selectedMenuOption === r;
                          return fn(C || (C = st(["\n        <media-button\n          .config=", "\n          .icon=", "\n          .href=", "\n          .followable=", "\n          .label=", "\n          .mediatype=", "\n          .openMenu=", "\n          .selected=", '\n          data-mediatype="', '"\n        ></media-button>\n      '])), e.config, n, Mn(o, e.baseHost), a, i, r, e.openMenu, s, r)
                      }))
                  }
              }, {
                  key: "menuOpened",
                  get: function() {
                      return "media" === this.openMenu
                  }
              }, {
                  key: "menuClass",
                  get: function() {
                      return this.menuOpened ? "open" : "closed"
                  }
              }, {
                  key: "render",
                  value: function() {
                      return fn(P || (P = st(['\n      <div class="media-menu-container ', '">\n        <div class="overflow-clip">\n          <nav\n            class="media-menu-inner"\n            aria-hidden="', '"\n            aria-expanded="', '"\n          >\n            <div class="menu-group">\n              ', "\n            </div>\n          </nav>\n        </div>\n      </div>\n    "])), this.menuClass, !this.menuOpened, this.menuOpened, this.mediaMenuOptionsTemplate)
                  }
              }], [{
                  key: "styles",
                  get: function() {
                      return Fn
                  }
              }, {
                  key: "properties",
                  get: function() {
                      return {
                          baseHost: {
                              type: String
                          },
                          config: {
                              type: Object
                          },
                          openMenu: {
                              type: String
                          },
                          selectedMenuOption: {
                              type: String
                          }
                      }
                  }
              }]), n
          }(In);
      customElements.define("media-menu", Vn);
      var Kn = hn(I || (I = st(['\n  <svg class="ia-wordmark stacked" height="30" viewBox="0 0 95 30" width="95" xmlns="http://www.w3.org/2000/svg">\n    <g fill="#fff" fill-rule="evenodd">\n      <g transform="translate(0 17)">\n        <path d="m3.07645967 2.60391777c.09263226-.31901841.26275495-.97477846.26275495-1.10630359 0-.74950669-.57227138-.76816274-1.19041353-.88009902v-.41183224h2.90678232l3.77209227 12.60682378h-1.60725868l-1.16012991-3.8963154h-3.94266032l-1.15968456 3.8963154h-.95794221zm-.69607795 5.4317081h3.41670507l-1.76223957-5.469953z"/><path d="m13.2661876 2.75363255c0-1.85487748-.0316196-1.85487748-1.469201-2.13611739v-.41183224h3.8032666c1.1601299 0 4.3599508 0 4.3599508 3.35342446 0 2.13518459-1.143652 2.84737918-2.3652399 3.0903742l2.8448791 6.16302512h-1.7773814l-2.7366596-5.82581707h-.9588329v5.82581707h-1.7007817zm1.7007817 3.35295806h.8817878c1.0042583 0 2.411556-.33674165 2.411556-2.43508055 0-2.0237147-.9588329-2.58572812-2.2579112-2.58572812-1.0354326 0-1.0354326.33720805-1.0354326 1.68650665z"/><path d="m30.9386422 12.2878054c-.5250645.2817063-1.3761234.7121946-2.9682403.7121946-3.3552471 0-4.5612478-2.4537366-4.5612478-6.66860403 0-3.4089262.86531-6.18214759 4.3136347-6.18214759 1.3761234 0 2.3812724.28077351 3.0920468.56201342l.0930776 3.12908549h-.4484648c-.0619033-.95612241-.9125167-2.79187744-2.5821241-2.79187744-2.2726076 0-2.6440273 2.94065941-2.6440273 5.28292612 0 2.95931547.8510588 5.61966783 2.9994146 5.61966783 1.4692009 0 2.2267368-.5620135 2.7059306-.9551897z"/><path d="m35.4546446 2.67900836c0-1.48129014-.0926322-1.64966096-1.5466914-1.83622143v-.41276504l3.2470277-.43002189v5.80669465h4.2049699v-5.60101173h1.7007816v12.60682378h-1.7007816v-6.12571303h-4.2049699v6.12571303h-1.7003363z"/><path d="m46.0300434 12.3447063c1.0973359 0 1.3137748-.2807735 1.3137748-1.7420083v-8.05568117c0-1.46123489-.2164389-1.741542-1.3137748-1.741542v-.46919958h4.3287765v.46919958c-1.0826395 0-1.3137748.28030711-1.3137748 1.741542v8.05568117c0 1.4612348.2311353 1.7420083 1.3137748 1.7420083v.4678004h-4.3287765z"/><path d="m55.1990352 2.60391777c-.494781-1.7051627-.6341747-1.7051627-1.8709043-1.98640261v-.41183224h2.9994145l3.0301436 10.26548988h.0307289l2.9535438-10.26548988h1.0042584l-3.771647 12.60682378h-1.344949z"/><path d="m67.7842867 2.75363255c0-1.85487748-.0463161-1.85487748-1.4687557-2.13611739v-.41183224h7.4061269l.0463161 2.77228859h-.433323c0-1.49854698-.6488711-1.89218957-1.6696073-1.89218957h-1.2060007c-.7726777 0-.9735293.07462419-.9735293.97431206v3.7279446h1.8709043c1.0657162 0 1.174381-.82366447 1.2674586-1.44164603h.4324323v3.93316112h-.4324323c0-1.01162415-.3402454-1.61141607-1.2674586-1.61141607h-1.8709043v4.17755538c0 1.0489362.2008516 1.0867147.9735293 1.0867147h1.7168141c.8804518 0 1.2977423-.3749865 1.3908199-1.835755h.433323l-.0472068 2.715854h-6.1685065z"/>\n      </g>\n      <path d="m1.55575146 9.89647882v-7.6678574c0-1.39053729-.25677019-1.65867172-1.55575146-1.65867172v-.44528687h5.12561364v.44528687c-1.28118091 0-1.55575146.26813443-1.55575146 1.65867172v7.6678574c0 1.39097468.27457055 1.65735948 1.55575146 1.65735948v.4461617h-5.12561364v-.4461617c1.29898127 0 1.55575146-.2663848 1.55575146-1.65735948z"/><path d="m9.92299051 2.28198586c0-1.65823431-.25588017-1.58649851-1.83032201-1.88962601v-.39235985h3.8626781l5.7664266 9.70008019h.0364907v-9.70008019h1.1534634v12h-1.7577856l-6.0405521-10.14492965h-.0369358v10.14492965h-1.15346329z"/><path d="m25.631543.83808413h-1.2633805c-1.4458343 0-1.8668128.44572428-1.977175 1.74834147h-.5122054l.0729815-2.5864256h9.3727795l.0734265 2.63935263h-.5126504c0-1.37304075-.5860768-1.8012685-1.9954203-1.8012685h-1.2442452v11.16191587h-2.0141107z"/><path d="m36.1050097 2.42502005c0-1.7654006-.0556262-1.7654006-1.7399852-2.0326602v-.39235985h8.7684573l.0551811 2.63935263h-.5126504c0-1.42684261-.7685305-1.8012685-1.9762849-1.8012685h-1.4284789c-.9153835 0-1.1534633.0717358-1.1534633.92775388v3.54829773h2.2152547c1.2629356 0 1.3906532-.7851571 1.5010154-1.37391558h.5130954v3.74513378h-.5130954c0-.96274696-.4022881-1.53313407-1.5010154-1.53313407h-2.2152547v3.97608803c0 .9986149.2380798 1.033608 1.1534633 1.033608h2.0319111c1.0439911 0 1.5375061-.356492 1.6469783-1.74702926h.5135404l-.0551812 2.58511336h-7.3034876z"/><path d="m48.1689385 2.42502005c0-1.7654006-.0364908-1.7654006-1.7382052-2.0326602v-.39235985h4.5026011c1.3732977 0 5.1621043 0 5.1621043 3.19180579 0 2.03309761-1.3537173 2.71065102-2.8004416 2.94248013l3.3682731 5.86571408h-2.1053376l-3.2396655-5.54552745h-1.1352179v5.54552745h-2.0141107zm2.0141107 3.19136837h1.0439911c1.189064 0 2.8556227-.32018663 2.8556227-2.31697893 0-1.92680615-1.1352179-2.46132536-2.673169-2.46132536-1.2264448 0-1.2264448.32062404-1.2264448 1.6057447z"/><path d="m61.4610921 2.28198586c0-1.65823431-.2567702-1.58649851-1.830767-1.88962601v-.39235985h3.8622331l5.7659816 9.70008019h.0369357v-9.70008019h1.1534633v12h-1.7568955l-6.0414421-10.14492965h-.0364908v10.14492965h-1.1530183z"/><path d="m75.1550889 2.42502005c0-1.7654006-.0547361-1.7654006-1.7390952-2.0326602v-.39235985h8.7684573l.0551811 2.63935263h-.5126504c0-1.42684261-.7694205-1.8012685-1.9771749-1.8012685h-1.4280339c-.9149385 0-1.1530183.0717358-1.1530183.92775388v3.54829773h2.2148098c1.2633805 0 1.3906531-.7851571 1.5010153-1.37391558h.5130954v3.74513378h-.5130954c0-.96274696-.4022881-1.53313407-1.5010153-1.53313407h-2.2148098v3.97608803c0 .9986149.2380798 1.033608 1.1530183 1.033608h2.0319111c1.0439911 0 1.5379511-.356492 1.6478683-1.74702926h.5126504l-.0551811 2.58511336h-7.3039327z"/><path d="m89.2335734.83808413h-1.2624905c-1.4462793 0-1.8672578.44572428-1.97762 1.74834147h-.5122054l.0734265-2.5864256h9.3718895l.0734265 2.63935263h-.5122054c0-1.37304075-.5856318-1.8012685-1.9958653-1.8012685h-1.2446902v11.16191587h-2.0136657z"/>\n    </g>\n  </svg>\n\n']))),
          qn = Tt(R || (R = st(["\n  button:focus,\n  a:focus,\n  input:focus {\n    outline: none;\n  }\n\n  nav {\n    position: relative;\n    display: -ms-grid;\n    display: grid;\n    height: 40px;\n    grid-template-areas: 'hamburger empty heart search user';\n    -ms-grid-columns: 40px minmax(1rem, 100%) 40px 40px 40px;\n    grid-template-columns: 40px auto 40px 40px 40px;\n    -ms-grid-rows: 100%;\n    grid-template-rows: 100%;\n    background: var(--primaryNavBg);\n    border-bottom: 1px solid var(--primaryNavBottomBorder);\n  }\n\n  nav.hide-search {\n    grid-template-areas: 'hamburger empty heart user';\n    -ms-grid-columns: 40px minmax(1rem, 100%) 40px 40px;\n    grid-template-columns: 40px auto 40px 40px;\n  }\n\n  button {\n    background: none;\n    color: inherit;\n    border: none;\n    font: inherit;\n    cursor: pointer;\n  }\n\n  .branding {\n    position: static;\n    float: left;\n    padding: 0 5px 0 10px;\n    -webkit-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    transform: translate(0, 0);\n  }\n\n  slot,\n  .branding {\n    display: flex;\n    justify-content: left;\n    align-items: center;\n  }\n\n  media-menu {\n    grid-column-start: hamburger-start;\n    grid-column-end: user-end;\n  }\n\n  .ia-logo,\n  .ia-wordmark {\n    margin-right: 5px;\n  }\n\n  .hamburger {\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    grid-area: hamburger;\n    padding: 0;\n  }\n\n  .mobile-donate-link {\n    -ms-grid-row: 1;\n    -ms-grid-column: 3;\n    grid-area: heart;\n    position: relative;\n    padding: 0;\n    z-index: 1;\n    width: 100%;\n    text-align: right;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n  .mobile-donate-link svg {\n    height: 50px;\n    width: 50px;\n    margin-top: -5px;\n    margin-left: -5px;\n  }\n  .mobile-donate-link .fill-color {\n    fill: rgb(255, 0, 0);\n  }\n  .mobile-donate-link .label {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0,0,0,0);\n    border: 0;\n  }\n\n.search-trigger {\n    -ms-grid-row: 1;\n    -ms-grid-column: 4;\n    grid-area: search;\n    position: relative;\n    padding: 0;\n    z-index: 1;\n    width: 100%;\n    text-align: right;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .search-trigger .fill-color {\n    fill: var(--iconFill);\n  }\n\n  .search-activated {\n    position: relative;\n    z-index: 3;\n  }\n\n  .upload {\n    display: none;\n  }\n\n  .upload span {\n    display: none;\n  }\n\n  .user-info {\n    -ms-grid-row: 1;\n    -ms-grid-column: 5;\n    grid-area: user;\n    -ms-grid-row-align: stretch;\n    align-self: stretch;\n    -ms-grid-column-align: end;\n    justify-self: end;\n  }\n\n  .screen-name {\n    display: none;\n    font-size: 1.3rem;\n    vertical-align: middle;\n    text-transform: uppercase;\n  }\n\n  .user-menu {\n    height: 100%;\n    padding: 0.5rem 1rem;\n    color: var(--lightTextColor);\n  }\n\n  .user-menu:hover {\n    color: var(--linkHoverColor);\n  }\n\n  .user-menu.active {\n    border-radius: 1rem 1rem 0 0;\n    background: var(--activeButtonBg);\n  }\n\n  .user-menu img {\n    display: block;\n    width: 30px;\n    height: 30px;\n  }\n\n  .link-home {\n    display: flex;\n    text-decoration: none;\n  }\n\n  @media only screen and (min-width: 890px) and (max-device-width: 905px) {\n    .branding.second-logo {\n      padding-right: 0;\n    }\n  }\n\n  @media (min-width: 906px) {\n    .branding.second-logo {\n      padding-right: 20px;\n    }\n  }\n\n  @media (max-width: 889px) {\n    slot[name='opt-sec-logo'] {\n      display: none;\n    }\n  }\n\n  @media (min-width: 890px) {\n    :host {\n      --userIconWidth: 32px;\n      --userIconHeight: 32px;\n    }\n\n    nav {\n      display: block;\n      z-index: 3;\n      height: 5rem;\n      padding-right: 1.5rem;\n    }\n\n    slot[name='opt-sec-logo-mobile'] {\n      display: none;\n    }\n\n    .branding {\n      margin-top: 1rem;\n    }\n\n    .ia-logo,\n    .ia-wordmark {\n      margin-right: 10px;\n    }\n\n    .hamburger,\n    .search-trigger,\n    .mobile-donate-link {\n      display: none;\n    }\n\n    .user-info {\n      float: right;\n      padding-top: 1rem;\n    }\n\n    .user-menu {\n      padding-top: 0;\n    }\n\n    .user-menu.active {\n      background: transparent;\n    }\n\n    .user-menu img {\n      display: inline-block;\n      vertical-align: middle;\n    }\n\n    .upload {\n      display: block;\n      float: right;\n      margin-top: 1rem;\n      font-size: 1.4rem;\n      text-transform: uppercase;\n      text-decoration: none;\n      color: var(--lightTextColor);\n    }\n    .upload:active,\n    .upload:focus,\n    .upload:hover {\n      color: var(--linkHoverColor);\n    }\n\n    .upload svg {\n      width: 32px;\n      height: 32px;\n      vertical-align: middle;\n      fill: var(--iconFill);\n    }\n\n    .upload:hover svg,\n    .upload:focus svg,\n    .upload:active svg {\n      fill: var(--linkHoverColor);\n    }\n\n    nav-search {\n      float: right;\n      margin-left: 1rem;\n    }\n\n    login-button {\n      display: block;\n      margin-right: 1rem;\n    }\n  }\n\n  @media (min-width: 990px) {\n    .screen-name {\n      display: inline-block;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n      max-width: 165px;\n    }\n\n    .upload span {\n      display: inline;\n    }\n  }\n"])));

      function Gn(e) {
          window.location = e
      }
      var Yn = function(e) {
          ht(n, e);
          var t = dt(n);

          function n() {
              var e;
              return At(this, n), (e = t.call(this)).config = {}, e.openMenu = "", e.searchIn = "", e.selectedMenuOption = "", e.signedOutMenuOpen = !1, e.userMenuOpen = !1, e.mediaBaseHost = "https://archive.org", e.secondIdentitySlotMode = "", e
          }
          return Et(n, [{
              key: "toggleMediaMenu",
              value: function(e) {
                  this.trackClick(e), this.dispatchEvent(new CustomEvent("menuToggled", {
                      detail: {
                          menuName: "media"
                      }
                  }))
              }
          }, {
              key: "toggleSearchMenu",
              value: function(e) {
                  this.trackClick(e), this.dispatchEvent(new CustomEvent("menuToggled", {
                      detail: {
                          menuName: "search"
                      }
                  }))
              }
          }, {
              key: "toggleUserMenu",
              value: function(e) {
                  this.trackClick(e), this.dispatchEvent(new CustomEvent("menuToggled", {
                      detail: {
                          menuName: "user"
                      }
                  }))
              }
          }, {
              key: "userIcon",
              get: function() {
                  var e = "user" === this.openMenu ? "active" : "",
                      t = "user" === this.openMenu ? "Close user menu" : "Expand user menu";
                  return fn($ || ($ = st(['\n      <button\n        class="user-menu ', '"\n        title="', '"\n        @click="', '"\n        data-event-click-tracking="', '|NavUserMenu"\n      >\n        <img\n          src="', "", '"\n          alt="', '"\n        />\n        <span class="screen-name" dir="auto">', "</span>\n      </button>\n    "])), e, t, this.toggleUserMenu, this.config.eventCategory, this.mediaBaseHost, this.userProfileImagePath, this.screenName, this.screenName)
              }
          }, {
              key: "loginIcon",
              get: function() {
                  return fn(L || (L = st(["\n      <login-button\n        .baseHost=", "\n        .config=", "\n        .dropdownOpen=", "\n        .openMenu=", "\n        @signedOutMenuToggled=", "\n      ></login-button>\n    "])), this.baseHost, this.config, this.signedOutMenuOpen, this.openMenu, this.signedOutMenuToggled)
              }
          }, {
              key: "searchMenuOpen",
              get: function() {
                  return "search" === this.openMenu
              }
          }, {
              key: "allowSecondaryIcon",
              get: function() {
                  return "allow" === this.secondIdentitySlotMode
              }
          }, {
              key: "searchMenu",
              get: function() {
                  return this.hideSearch ? pn : fn(T || (T = st(['\n      <button\n        class="search-trigger"\n        @click="', '"\n        data-event-click-tracking="', '|NavSearchOpen"\n      >\n        ', "\n      </button>\n      <nav-search\n        .baseHost=", "\n        .config=", "\n        .locationHandler=", "\n        .open=", "\n        .openMenu=", "\n        .searchIn=", "\n        .searchQuery=", "\n      ></nav-search>\n    "])), this.toggleSearchMenu, this.config.eventCategory, Ln.search, this.baseHost, this.config, Gn, this.searchMenuOpen, this.openMenu, this.searchIn, this.searchQuery)
              }
          }, {
              key: "mobileDonateHeart",
              get: function() {
                  return fn(j || (j = st(['\n      <a class="mobile-donate-link" href=', '>\n        <span class="icon">\n        ', '\n      </span>\n      <span class="label">"Donate to the archive"</span>\n      </a>\n    '])), Mn("/donate/?origin=iawww-mbhrt", this.baseHost), Ln.donate)
              }
          }, {
              key: "secondLogoSlot",
              get: function() {
                  return this.allowSecondaryIcon ? fn(M || (M = st(['\n          <slot name="opt-sec-logo"></slot>\n          <slot name="opt-sec-logo-mobile"></slot>\n        ']))) : pn
              }
          }, {
              key: "secondLogoClass",
              get: function() {
                  return this.allowSecondaryIcon ? "second-logo" : ""
              }
          }, {
              key: "render",
              value: function() {
                  var e = "media" === this.openMenu ? "" : "-1";
                  return fn(U || (U = st(["\n      <nav class=", ">\n        <div class=", ">\n          <a\n            href=", "\n            @click=", '\n            data-event-click-tracking="', '|NavHome"\n            title="Go home"\n            class="link-home"\n            >', "", "</a\n          >\n          ", "\n        </div>\n        ", "\n        ", '\n        <a href="', '" class="upload">\n          ', '\n          <span>Upload</span>\n        </a>\n        <div class="user-info">\n          ', "\n        </div>\n        <media-menu\n          .baseHost=", "\n          .config=", '\n          ?mediaMenuAnimate="', '"\n          tabindex="', '"\n          .selectedMenuOption=', "\n          .openMenu=", '\n        ></media-menu>\n        <button\n          class="hamburger"\n          @click="', '"\n          tabindex="1"\n          data-event-click-tracking="', '|NavHamburger"\n          title="Open main menu"\n        >\n          <icon-hamburger ?active=', "></icon-hamburger>\n        </button>\n      </nav>\n    "])), this.hideSearch ? "hide-search" : pn, "branding ".concat(this.secondLogoClass), Mn("/", this.baseHost), this.trackClick, this.config.eventCategory, Ln.iaLogo, Kn, this.secondLogoSlot, this.mobileDonateHeart, this.searchMenu, Mn("/create", this.baseHost), Ln.upload, this.username ? this.userIcon : this.loginIcon, this.baseHost, this.config, this.mediaMenuAnimate, e, this.selectedMenuOption, this.openMenu, this.toggleMediaMenu, this.config.eventCategory, "media" === this.openMenu)
              }
          }], [{
              key: "styles",
              get: function() {
                  return qn
              }
          }, {
              key: "properties",
              get: function() {
                  return {
                      mediaBaseHost: {
                          type: String
                      },
                      baseHost: {
                          type: String
                      },
                      hideSearch: {
                          type: Boolean
                      },
                      config: {
                          type: Object
                      },
                      openMenu: {
                          type: String
                      },
                      screenName: {
                          type: String
                      },
                      searchIn: {
                          type: String
                      },
                      searchQuery: {
                          type: String
                      },
                      secondIdentitySlotMode: {
                          type: String
                      },
                      selectedMenuOption: {
                          type: String
                      },
                      signedOutMenuOpen: {
                          type: Boolean
                      },
                      userMenuOpen: {
                          type: Boolean
                      },
                      username: {
                          type: String
                      },
                      userProfileImagePath: {
                          type: String
                      }
                  }
              }
          }]), n
      }($n);
      customElements.define("primary-nav", Yn);
      var Zn = Tt(N || (N = st(["\n  .nav-container {\n    position: relative;\n  }\n\n  nav {\n    position: absolute;\n    right: 0;\n    z-index: 3;\n    overflow: hidden;\n    font-size: 1.6rem;\n    background-color: var(--dropdownMenuBg);\n    transition-property: top;\n    transition-duration: 0.2s;\n    transition-timing-function: ease;\n  }\n\n  .initial,\n  .closed {\n    top: var(--topOffset, -1500px);\n  }\n\n  .closed {\n    transition-duration: 0.5s;\n  }\n\n  .open {\n    max-width: 100vw;\n    overflow: auto;\n  }\n\n  h3 {\n    padding: 0.6rem 2rem;\n    margin: 0;\n    font-size: inherit;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  ul {\n    padding: 0.4rem 0 0.7rem 0;\n    margin: 0;\n    list-style: none;\n    /* viewport height - nav height + bottom nav border */\n    max-height: calc(100vh - 7.2rem + 1px);\n    overflow: auto;\n    box-sizing: border-box;\n  }\n\n  .divider {\n    margin: 0.5rem 0;\n    border-bottom: 1px solid var(--dropdownMenuDivider);\n  }\n\n  a,\n  .info-item {\n    display: block;\n    color: var(--primaryTextColor);\n    text-decoration: none;\n    padding: 1rem 2rem;\n  }\n\n  .info-item {\n    font-size: 0.8em;\n    color: var(--dropdownMenuInfoItem);\n  }\n\n  .callout {\n    position: absolute;\n    margin-left: 10px;\n    padding: 0 5px;\n    border-radius: 2px;\n    background: #fee257;\n    color: #2c2c2c;\n    font-size: 1.4rem;\n    font-weight: bold;\n  }\n\n  @media (min-width: 890px) {\n    nav {\n      overflow: visible;\n      top: 0;\n      left: auto;\n      z-index: 5;\n      transition: opacity 0.2s ease-in-out;\n      font-size: 1.4rem;\n      border-radius: 2px;\n      background: var(--primaryTextColor);\n      box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);\n    }\n\n    nav:after {\n      position: absolute;\n      right: 7px;\n      top: -7px;\n      width: 12px;\n      height: 7px;\n      box-sizing: border-box;\n      color: #fff;\n      content: '';\n      border-bottom: 7px solid currentColor;\n      border-left: 6px solid transparent;\n      border-right: 6px solid transparent;\n    }\n\n    h3 {\n      display: none;\n    }\n\n    ul {\n      /* viewport height - nav height + bottom nav border */\n      max-height: calc(100vh - 8.5rem + 1px);\n    }\n\n    .divider {\n      border-bottom-color: var(--dropdownMenuDivider);\n    }\n\n    a {\n      padding: 0.5rem 2rem;\n      color: var(--inverseTextColor);\n      transition: background 0.1s ease-out, color 0.1s ease-out;\n    }\n\n    .info-item {\n      padding: 0.5rem 2rem;\n      font-size: 0.8em;\n    }\n\n    a:hover,\n    a:active,\n    a:focus {\n      color: var(--linkHoverColor);\n      background: var(--linkColor);\n    }\n\n    .initial,\n    .closed {\n      opacity: 0;\n      transition-duration: 0.2s;\n    }\n\n    .open {\n      opacity: 1;\n      overflow: visible;\n    }\n  }\n"]))),
          Jn = function(e) {
              ht(n, e);
              var t = dt(n);

              function n() {
                  var e;
                  return At(this, n), (e = t.call(this)).config = {}, e.menuItems = [], e.open = !1, e.animate = !1, e
              }
              return Et(n, [{
                  key: "dropdownItems",
                  get: function() {
                      var e = this;
                      return this.menuItems ? Array.isArray(this.menuItems[0]) ? this.menuItems.map((function(t, r) {
                          return [r ? n.dropdownDivider : fn(B || (B = st([""])))].concat(lt(e.dropdownSection(t)))
                      })) : this.dropdownSection(this.menuItems) : pn
                  }
              }, {
                  key: "dropdownSection",
                  value: function(e) {
                      var t = this;
                      return e.map((function(e) {
                          return fn(z || (z = st(["\n        <li>", "</li>\n      "])), e.url ? t.dropdownLink(e) : n.dropdownText(e))
                      }))
                  }
              }, {
                  key: "dropdownLink",
                  value: function(e) {
                      var t, n = null == (t = this.config.callouts) ? void 0 : t[e.title];
                      return fn(D || (D = st(['<a\n      href="', '"\n      @click=', '\n      data-event-click-tracking="', "|Nav", '"\n      aria-label=', ">\n        ", "\n        ", "\n    </a>"])), Mn(e.url, this.baseHost), this.trackClick, this.config.eventCategory, e.analyticsEvent, n ? "New feature: ".concat(e.title) : pn, e.title, n ? fn(H || (H = st(['<span class="callout" aria-hidden="true">', "</span>"])), n) : pn)
                  }
              }, {
                  key: "menuClass",
                  get: function() {
                      var e = this.hideSearch ? " search-hidden" : "";
                      return this.open ? "open".concat(e) : this.animate ? "closed".concat(e) : "initial".concat(e)
                  }
              }, {
                  key: "ariaHidden",
                  get: function() {
                      return Boolean(!this.open).toString()
                  }
              }, {
                  key: "ariaExpanded",
                  get: function() {
                      return Boolean(this.open).toString()
                  }
              }, {
                  key: "render",
                  value: function() {
                      return fn(F || (F = st(['\n      <div class="nav-container">\n        <nav\n          class="', '"\n          aria-hidden="', '"\n          aria-expanded="', '"\n        >\n          <ul>\n            ', "\n          </ul>\n        </nav>\n      </div>\n    "])), this.menuClass, this.ariaHidden, this.ariaExpanded, this.dropdownItems)
                  }
              }], [{
                  key: "styles",
                  get: function() {
                      return Zn
                  }
              }, {
                  key: "properties",
                  get: function() {
                      return {
                          baseHost: {
                              type: String
                          },
                          config: {
                              type: Object
                          },
                          hideSearch: {
                              type: Boolean
                          },
                          menuItems: {
                              type: Array
                          },
                          animate: {
                              type: Boolean
                          },
                          open: {
                              type: Boolean
                          }
                      }
                  }
              }, {
                  key: "dropdownDivider",
                  get: function() {
                      return fn(W || (W = st(['<li role="presentation" class="divider"></li>'])))
                  }
              }, {
                  key: "dropdownText",
                  value: function(e) {
                      return fn(V || (V = st(['<span class="info-item">', "</span>"])), e.title)
                  }
              }]), n
          }($n),
          Qn = Tt(K || (K = st(["\n  @media (min-width: 890px) {\n    .initial,\n    .closed,\n    .open {\n      right: 21.3rem;\n    }\n\n    .search-hidden.initial,\n    .search-hidden.closed,\n    .search-hidden.open {\n      right: 5.8rem;\n    }\n  }\n\n  @media (min-width: 990px) {\n    .initial,\n    .closed,\n    .open {\n      right: 27.5rem;\n    }\n\n    .search-hidden.initial,\n    .search-hidden.closed,\n    .search-hidden.open {\n      right: 12rem;\n    }\n  }\n"]))),
          Xn = function(e) {
              ht(n, e);
              var t = dt(n);

              function n() {
                  var e;
                  return At(this, n), (e = t.call(this)).username = "", e
              }
              return Et(n, [{
                  key: "render",
                  value: function() {
                      return fn(q || (q = st(['\n      <div class="nav-container">\n        <nav\n          class="', '"\n          aria-hidden="', '"\n          aria-expanded="', '"\n        >\n          <h3>', "</h3>\n          <ul>\n            ", "\n          </ul>\n        </nav>\n      </div>\n    "])), this.menuClass, this.ariaHidden, this.ariaExpanded, this.screenName, this.dropdownItems)
                  }
              }], [{
                  key: "styles",
                  get: function() {
                      return [Jn.styles, Qn]
                  }
              }, {
                  key: "properties",
                  get: function() {
                      return Ct(Ct({}, Jn.properties), {
                          username: {
                              type: String
                          },
                          screenName: {
                              type: String
                          }
                      })
                  }
              }]), n
          }(Jn);
      customElements.define("user-menu", Xn);
      var er = Tt(G || (G = st(["\n  .menu-wrapper {\n    position: relative;\n  }\n\n  button:focus,\n  input:focus {\n    outline-color: var(--linkColor);\n    outline-width: 0.16rem;\n    outline-style: auto;\n  }\n  .search-menu-inner {\n    position: absolute;\n    right: 0;\n    left: 0;\n    z-index: 3;\n    padding: 0 4.5rem;\n    font-size: 1.6rem;\n    background-color: var(--searchMenuBg);\n  }\n  .tx-slide {\n    overflow: hidden;\n    transition-property: top;\n    transition-duration: 0.2s;\n    transition-timing-function: ease;\n  }\n  .initial,\n  .closed {\n    top: var(--topOffset, -1500px);\n  }\n  .closed {\n    transition-duration: 0.2s;\n  }\n\n  label,\n  a {\n    padding: 1rem;\n    display: block;\n  }\n\n  .advanced-search {\n    text-decoration: none;\n    color: var(--linkColor);\n  }\n\n  @media (min-width: 890px) {\n    .search-menu-inner {\n      overflow: visible;\n      right: 2rem;\n      left: auto;\n      z-index: 5;\n      padding: 1rem 2rem;\n      transition: opacity 0.2s ease-in-out;\n      font-size: 1.4rem;\n      color: var(--inverseTextColor);\n      border-radius: 2px;\n      background: var(--primaryTextColor);\n      box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);\n    }\n\n    .search-menu-inner:after {\n      position: absolute;\n      right: 7px;\n      top: -7px;\n      width: 12px;\n      height: 7px;\n      box-sizing: border-box;\n      color: #fff;\n      content: '';\n      border-bottom: 7px solid currentColor;\n      border-left: 6px solid transparent;\n      border-right: 6px solid transparent;\n    }\n\n    .initial,\n    .closed {\n      opacity: 0;\n      transition-duration: 0.2s;\n    }\n\n    .open {\n      opacity: 1;\n    }\n\n    label {\n      padding: 0;\n    }\n\n    label + label {\n      padding-top: 7px;\n    }\n\n    a {\n      padding: 1rem 0 0 0;\n    }\n  }\n"]))),
          tr = function(e) {
              ht(n, e);
              var t = dt(n);

              function n() {
                  var e;
                  return At(this, n), (e = t.call(this)).config = {}, e.openMenu = "", e.searchMenuOpen = !1, e.searchMenuAnimate = !1, e.selectedSearchType = "", e
              }
              return Et(n, [{
                  key: "selectSearchType",
                  value: function(e) {
                      this.selectedSearchType = e.target.value
                  }
              }, {
                  key: "searchInChanged",
                  value: function(e) {
                      this.dispatchEvent(new CustomEvent("searchInChanged", {
                          detail: {
                              searchIn: e.target.value
                          }
                      }))
                  }
              }, {
                  key: "searchTypesTemplate",
                  get: function() {
                      var e = this;
                      return [{
                          label: "metadata",
                          value: "",
                          isDefault: !0
                      }, {
                          label: "text contents",
                          value: "TXT"
                      }, {
                          label: "TV news captions",
                          value: "TV"
                      }, {
                          label: "radio transcripts",
                          value: "RADIO"
                      }, {
                          label: "archived web sites",
                          value: "WEB"
                      }].map((function(t) {
                          var n = t.value,
                              r = t.label,
                              i = t.isDefault;
                          return e.config.hiddenSearchOptions && e.config.hiddenSearchOptions.includes(n) ? fn(Y || (Y = st([""]))) : fn(Z || (Z = st(['\n        <label @click="', '">\n          <input form="nav-search" type="radio" name="sin" value="', '" ?checked=', " @change=", " />\n          Search ", "\n        </label>\n      "])), e.selectSearchType, n, i, e.searchInChanged, r)
                      }))
                  }
              }, {
                  key: "menuClass",
                  get: function() {
                      return "search" === this.openMenu ? "open" : "closed"
                  }
              }, {
                  key: "render",
                  value: function() {
                      var e = Boolean(!this.searchMenuOpen).toString(),
                          t = Boolean(this.searchMenuOpen).toString();
                      return this.hideSearch ? fn(J || (J = st([""]))) : fn(Q || (Q = st(['\n      <div class="menu-wrapper">\n        <div\n          class="search-menu-inner tx-slide ', '"\n          aria-hidden="', '"\n          aria-expanded="', '"\n        >\n          ', '\n          <a\n            class="advanced-search"\n            href="', '"\n            @click=', '\n            data-event-click-tracking="', '|NavAdvancedSearch"\n            >Advanced Search</a\n          >\n        </div>\n      </div>\n    '])), this.menuClass, e, t, this.searchTypesTemplate, Mn("/advancedsearch.php", this.baseHost), this.trackClick, this.config.eventCategory)
                  }
              }], [{
                  key: "styles",
                  get: function() {
                      return er
                  }
              }, {
                  key: "properties",
                  get: function() {
                      return {
                          baseHost: {
                              type: String
                          },
                          config: {
                              type: Object
                          },
                          hideSearch: {
                              type: Boolean
                          },
                          openMenu: {
                              type: String
                          },
                          searchMenuOpen: {
                              type: Boolean
                          },
                          searchMenuAnimate: {
                              type: Boolean
                          },
                          selectedSearchType: {
                              type: String
                          }
                      }
                  }
              }]), n
          }($n);
      customElements.define("search-menu", tr);
      var nr = Tt(X || (X = st(["\n  form {\n  }\n\n  p {\n    margin-bottom: 1rem;\n    font-size: 1.6rem;\n    text-align: center;\n  }\n\n  fieldset {\n    padding: .5rem;\n    border-radius: 5px;\n    box-shadow: none;\n  }\n\n  input {\n    padding-left: 3rem;\n    margin-top: .3rem;\n    font-size: 1.4rem;\n    border-color: #bca38e;\n    background: #fff;\n  }\n\n  input::placeholder,\n  input::-webkit-input-placeholder {\n    color: #8e8e8e;\n  }\n\n  .search-field svg {\n    top: 50%;\n    transform: translateY(-50%);\n  }\n\n  @media (min-width: 890px) {\n    fieldset a,\n    .search-field {\n      display: block;\n      width: auto;\n    }\n\n    fieldset a {\n      margin: 0 1.5rem;\n    }\n  }\n"]))),
          rr = function(e) {
              ht(n, e);
              var t = dt(n);

              function n() {
                  return At(this, n), t.apply(this, arguments)
              }
              return Et(n, null, [{
                  key: "styles",
                  get: function() {
                      return [at.a.styles, nr]
                  }
              }]), n
          }(at.a);
      customElements.define("wayback-search", rr);
      var ir = Tt(ee || (ee = st(['\n  div {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-column-gap: .8rem;\n    margin: 0;\n    padding: 0;\n    border: none;\n  }\n\n  input[type="text"] {\n    width: 100%;\n    height: 30px;\n    box-sizing: border-box;\n    border: 1px solid var(--savePageInputBorder);\n    border-radius: .5rem;\n    color: var(--grey13);\n  }\n\n  input[type="submit"] {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    padding: .4rem .8rem;\n    font: normal 1.3rem var(--themeFontFamily);\n    text-transform: uppercase;\n    color: var(--savePageSubmitText);\n    border: none;\n    border-radius: 16px;\n    background: var(--savePageSubmitBg);\n    cursor: pointer;\n  }\n\n  .error {\n    display: none;\n    margin-top: .5rem;\n    font-weight: bold;\n    color: var(--savePageErrorText);\n  }\n\n  .visible {\n    display: block;\n  }\n\n  @media (min-width: 890px) {\n    h3 {\n      margin-top: 0;\n      font: normal 100 1.6rem var(--themeFontFamily);\n    }\n  }\n']))),
          or = function(e) {
              ht(n, e);
              var t = dt(n);

              function n() {
                  var e;
                  return At(this, n), (e = t.call(this)).config = {
                      eventCategory: ""
                  }, e.inputValid = !0, e
              }
              return Et(n, [{
                  key: "validateURL",
                  value: function(e) {
                      var t = e.target.querySelector('[name="url_preload"]');
                      if (!/\..{2,}$/.test(t.value)) return e.preventDefault(), void(this.inputValid = !1);
                      this.inputValid = !0, this.trackSubmit(e)
                  }
              }, {
                  key: "errorClass",
                  get: function() {
                      return "error".concat(this.inputValid ? "" : " visible")
                  }
              }, {
                  key: "render",
                  value: function() {
                      return fn(te || (te = st(['\n      <form action="//web.archive.org/save" method="post" data-event-submit-tracking="', '|SavePageSubmit" @submit=', '>\n        <h3>Save Page Now</h3>\n        <p>Capture a web page as it appears now for use as a trusted citation in the future.</p>\n        <div>\n          <input type="text" name="url_preload" placeholder="https://" />\n          <input type="submit" value="Save" />\n        </div>\n        <p class=', ">Please enter a valid web address</p>\n      </form>\n    "])), this.config.eventCategory, this.validateURL, this.errorClass)
                  }
              }], [{
                  key: "styles",
                  get: function() {
                      return ir
                  }
              }, {
                  key: "properties",
                  get: function() {
                      return {
                          config: {
                              type: Object
                          },
                          inputValid: {
                              type: Boolean
                          }
                      }
                  }
              }]), n
          }($n);
      customElements.define("save-page-form", or);
      var ar = {
              performQuery: function(e) {
                  window.location = "https://web.archive.org/web/*/".concat(e)
              }
          },
          sr = Tt(ne || (ne = st(["\n  h4 {\n    font-size: 1.6rem;\n  }\n\n  a {\n    text-decoration: none;\n    color: var(--activeColor);\n  }\n\n  ul {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n  }\n\n  li + li {\n    padding-top: 1.5rem;\n  }\n\n  @media (min-width: 890px) {\n    h4 {\n      margin: 0 0 1rem 0;\n      font-weight: 100;\n    }\n\n    ul {\n      font-size: 1.3rem;\n    }\n\n    li {\n      padding-bottom: .5rem;\n    }\n\n    li + li {\n      padding-top: 0;\n    }\n\n    li a {\n      display: block;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    }\n  }\n"]))),
          cr = [sr, Tt(re || (re = st(["\n  @media (min-width: 890px) {\n    :host {\n      display: block;\n      grid-column: 1 / 4;\n      padding: 0 1.5rem;\n    }\n\n    h4 {\n      margin-top: 0;\n      font: normal 100 1.6rem var(--themeFontFamily);\n    }\n\n    .grid {\n      display: grid;\n      grid-template-columns: minmax(auto, 260px) 1fr minmax(auto, 260px);\n      /* Possible for 890 - 935: minmax(auto, 260px) 1fr minmax(auto, 260px) */\n      grid-column-gap: 2.5rem;\n    }\n\n    .link-lists {\n      display: grid;\n      grid-template-columns: calc(50% - 1.25rem) calc(50% - 1.25rem);\n      grid-column-gap: 2.5rem;\n    }\n  }\n"])))],
          ur = function(e) {
              ht(n, e);
              var t = dt(n);

              function n() {
                  var e;
                  return At(this, n), (e = t.call(this)).archiveItLinks = [], e.browserExtensionsLinks = [], e.mobileAppsLinks = [], e
              }
              return Et(n, [{
                  key: "mobileAppsItems",
                  get: function() {
                      return this.linkList("mobileAppsLinks", "Wayback")
                  }
              }, {
                  key: "browserExtensionsItems",
                  get: function() {
                      return this.linkList("browserExtensionsLinks", "Wayback")
                  }
              }, {
                  key: "archiveItItems",
                  get: function() {
                      return this.linkList("archiveItLinks", "ArchiveIt")
                  }
              }, {
                  key: "linkList",
                  value: function(e, t) {
                      var n = this;
                      return this[e].map((function(e) {
                          return fn(ie || (ie = st(["<li>\n      <a href=", " @click=", ' data-event-click-tracking="', '" target=', " rel=", ">", "</a>\n    </li>"])), Mn(e.url, n.baseHost), n.trackClick, n.analyticsEvent("".concat(t).concat(e.title)), e.external ? "_blank" : "", e.external ? "noreferrer noopener" : "", e.title)
                      }))
                  }
              }, {
                  key: "analyticsEvent",
                  value: function(e) {
                      return "".concat(this.config.eventCategory, "|").concat(zn(e))
                  }
              }, {
                  key: "render",
                  value: function() {
                      return fn(oe || (oe = st(['\n      <div class="grid">\n        <wayback-search\n          .baseHost=', "\n          waybackPagesArchived=", "\n          .queryHandler=", '></wayback-search>\n        <div class="link-lists">\n          <div>\n            <h4>Mobile Apps</h4>\n            <ul class="mobile-apps">\n              ', '\n            </ul>\n            <h4>Browser Extensions</h4>\n            <ul class="browser-extensions">\n              ', '\n            </ul>\n          </div>\n          <div>\n            <h4>Archive-It Subscription</h4>\n            <ul class="archive-it">\n              ', "\n            </ul>\n          </div>\n        </div>\n        <save-page-form .config=", "></save-page-form>\n      </div>\n    "])), this.baseHost, this.config.waybackPagesArchived, ar, this.mobileAppsItems, this.browserExtensionsItems, this.archiveItItems, this.config)
                  }
              }], [{
                  key: "styles",
                  get: function() {
                      return cr
                  }
              }, {
                  key: "properties",
                  get: function() {
                      return {
                          archiveItLinks: {
                              type: Array
                          },
                          baseHost: {
                              type: String
                          },
                          browserExtensionsLinks: {
                              type: Array
                          },
                          config: {
                              type: Object
                          },
                          mobileAppsLinks: {
                              type: Array
                          }
                      }
                  }
              }]), n
          }($n);
      customElements.define("wayback-slider", ur);
      var lr = Tt(ae || (ae = st(["\n  ul {\n    padding: 0;\n    margin: -1rem 0 0 0;\n    list-style: none;\n  }\n  a {\n    display: block;\n    padding: 1rem 0;\n    text-decoration: none;\n    color: var(--activeColor);\n  }\n"]))),
          fr = function(e) {
              ht(n, e);
              var t = dt(n);

              function n() {
                  return At(this, n), t.apply(this, arguments)
              }
              return Et(n, [{
                  key: "analyticsEvent",
                  value: function(e) {
                      return "".concat(this.config.eventCategory, "|NavMore").concat(zn(e))
                  }
              }, {
                  key: "render",
                  value: function() {
                      var e = this;
                      return fn(se || (se = st(["\n      <ul>\n        ", "\n      </ul>\n    "])), this.menuItems.map((function(t) {
                          return fn(ce || (ce = st(["<li><a @click=", " href=", ' data-event-click-tracking="', '">', "</a></li>"])), e.trackClick, Mn(t.url, e.baseHost), e.analyticsEvent(t.title), t.title)
                      })))
                  }
              }], [{
                  key: "properties",
                  get: function() {
                      return {
                          baseHost: {
                              type: String
                          },
                          config: {
                              type: Object
                          },
                          menuItems: {
                              type: Array
                          }
                      }
                  }
              }, {
                  key: "styles",
                  get: function() {
                      return lr
                  }
              }]), n
          }($n);
      customElements.define("more-slider", fr);
      var hr = [sr, Tt(ue || (ue = st(["\n  img {\n    display: block;\n    width: 90px;\n    height: 90px;\n    margin: 0 auto 1rem auto;\n    border-radius: 45px;\n  }\n\n  h3 {\n    margin-top: 0;\n    font-size: 1.8rem;\n  }\n\n  .icon-links {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: space-evenly;\n    -ms-flex-pack: space-evenly;\n    justify-content: space-evenly;\n    text-align: center;\n  }\n\n  .icon-links a {\n    display: inline-block;\n    width: 120px;\n    margin-bottom: 1.5rem;\n    overflow: hidden;\n    white-space: nowrap;\n    text-align: center;\n    text-overflow: ellipsis;\n  }\n\n  .icon-links a + a {\n    margin-left: 2rem;\n  }\n\n  .featured h4 {\n    display: none;\n  }\n\n  @media (min-width: 890px) {\n    :host {\n      display: -ms-grid;\n      display: grid;\n      -ms-grid-columns: 40% 20% 40%;\n      grid-template-columns: 40% 20% 40%;\n    }\n\n    .wayback-search {\n      -ms-grid-column: 1;\n      -ms-grid-column-span: 3;\n      grid-column: 1 / 4;\n    }\n\n    h3 {\n      display: none;\n    }\n\n    .icon-links {\n      -ms-grid-column: 1;\n    }\n\n    .icon-links a {\n      padding-top: 3.5rem;\n      max-width: 160px;\n    }\n\n    .links {\n      padding: 0 1.5rem;\n    }\n\n    .featured {\n      -ms-grid-column: 2;\n    }\n\n    .featured h4 {\n      display: block;\n    }\n\n    .top {\n      -ms-grid-column: 3;\n    }\n\n    .top ul {\n      display: -ms-grid;\n      display: grid;\n      -ms-grid-columns: 50% 3rem 50%;\n      grid-template-columns: 50% 50%;\n      -ms-grid-rows: (auto)[7];\n      grid-template-rows: repeat(7, auto);\n      grid-column-gap: 3rem;\n      grid-auto-flow: column;\n    }\n    .top ul > *:nth-child(1) {\n      -ms-grid-row: 1;\n      -ms-grid-column: 1;\n    }\n    .top ul > *:nth-child(2) {\n      -ms-grid-row: 2;\n      -ms-grid-column: 1;\n    }\n    .top ul > *:nth-child(3) {\n      -ms-grid-row: 3;\n      -ms-grid-column: 1;\n    }\n    .top ul > *:nth-child(4) {\n      -ms-grid-row: 4;\n      -ms-grid-column: 1;\n    }\n    .top ul > *:nth-child(5) {\n      -ms-grid-row: 5;\n      -ms-grid-column: 1;\n    }\n    .top ul > *:nth-child(6) {\n      -ms-grid-row: 6;\n      -ms-grid-column: 1;\n    }\n    .top ul > *:nth-child(7) {\n      -ms-grid-row: 7;\n      -ms-grid-column: 1;\n    }\n    .top ul > *:nth-child(8) {\n      -ms-grid-row: 1;\n      -ms-grid-column: 3;\n    }\n    .top ul > *:nth-child(9) {\n      -ms-grid-row: 2;\n      -ms-grid-column: 3;\n    }\n    .top ul > *:nth-child(10) {\n      -ms-grid-row: 3;\n      -ms-grid-column: 3;\n    }\n    .top ul > *:nth-child(11) {\n      -ms-grid-row: 4;\n      -ms-grid-column: 3;\n    }\n    .top ul > *:nth-child(12) {\n      -ms-grid-row: 5;\n      -ms-grid-column: 3;\n    }\n    .top ul > *:nth-child(13) {\n      -ms-grid-row: 6;\n      -ms-grid-column: 3;\n    }\n    .top ul > *:nth-child(14) {\n      -ms-grid-row: 7;\n      -ms-grid-column: 3;\n    }\n  }\n"])))],
          dr = function(e) {
              ht(n, e);
              var t = dt(n);

              function n() {
                  var e;
                  return At(this, n), (e = t.call(this)).config = {}, e.menu = "", e.menuItems = {}, e.links = n.defaultLinks, e
              }
              return Et(n, [{
                  key: "shouldUpdate",
                  value: function() {
                      return this.menuItems && (this.links = this.menuItems), !0
                  }
              }, {
                  key: "analyticsEvent",
                  value: function(e) {
                      return "".concat(this.config.eventCategory, "|").concat(zn(e)).concat(zn(this.menu))
                  }
              }, {
                  key: "iconLinks",
                  get: function() {
                      var e = this;
                      return this.links.iconLinks.map((function(t) {
                          return fn(le || (le = st(['\n        <a href="', '" @click=', ' data-event-click-tracking="', '"><img src="', '" loading="lazy" />', "</a>\n      "])), Mn(t.url, e.baseHost), e.trackClick, e.analyticsEvent(t.title), t.icon, t.title)
                      }))
                  }
              }, {
                  key: "renderLinks",
                  value: function(e) {
                      var t = this;
                      return this.links[e].map((function(e) {
                          return fn(fe || (fe = st(['\n        <li><a href="', '" @click=', ' data-event-click-tracking="', '">', "</a></li>\n      "])), Mn(e.url, t.baseHost), t.trackClick, t.analyticsEvent(e.title), e.title)
                      }))
                  }
              }, {
                  key: "render",
                  value: function() {
                      return this.menu ? (this.menuItems && (this.links = this.menuItems), "web" === this.menu ? fn(de || (de = st(["\n        <wayback-slider\n          .baseHost=", "\n          .config=", "\n          .archiveItLinks=", "\n          .browserExtensionsLinks=", "\n          .mobileAppsLinks=", "\n        ></wayback-slider>"])), this.baseHost, this.config, this.menuItems.archiveItLinks, this.menuItems.browserExtensionsLinks, this.menuItems.mobileAppsLinks) : "more" === this.menu ? fn(pe || (pe = st(["\n        <more-slider .baseHost=", " .config=", " .menuItems=", ">\n        </more-slider>"])), this.baseHost, this.config, this.menuItems) : fn(ve || (ve = st(["\n      <h3>", '</h3>\n      <div class="icon-links">\n        ', '\n      </div>\n      <div class="links featured">\n        <h4>Featured</h4>\n        <ul>\n          ', '\n        </ul>\n      </div>\n      <div class="links top">\n        <h4>Top</h4>\n        <ul>\n          ', "\n        </ul>\n      </div>\n    "])), this.links.heading, this.iconLinks, this.renderLinks("featuredLinks"), this.renderLinks("links"))) : fn(he || (he = st([""])))
                  }
              }], [{
                  key: "styles",
                  get: function() {
                      return hr
                  }
              }, {
                  key: "properties",
                  get: function() {
                      return {
                          baseHost: {
                              type: String
                          },
                          config: {
                              type: Object
                          },
                          menu: {
                              type: String
                          },
                          menuItems: {
                              type: Object
                          }
                      }
                  }
              }, {
                  key: "defaultLinks",
                  get: function() {
                      return {
                          iconLinks: [],
                          featuredLinks: [],
                          links: []
                      }
                  }
              }]), n
          }($n);
      customElements.define("media-subnav", dr);
      var pr = Tt(me || (me = st(["\n  .media-slider-container {\n    position: relative;\n  }\n\n  .overflow-clip {\n    display: none;\n    position: absolute;\n    top: 3rem;\n    right: 0;\n    left: 0;\n    height: 0;\n    overflow: hidden;\n    transition: height 0.2s ease;\n  }\n\n  .information-menu {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    padding: 0;\n    height: 368px;\n    overflow-x: hidden;\n    font-size: 1.4rem;\n    background: var(--mediaSliderBg);\n  }\n\n  .open {\n    display: block;\n  }\n\n  .hidden {\n    display: none;\n  }\n\n  .info-box {\n    padding: 1rem;\n  }\n\n  @media (max-width: 889px) {\n    .overflow-clip.open {\n      display: block;\n      height: 367px;\n      left: 4rem;\n      top: 0;\n    }\n  }\n\n  @media (min-width: 890px) {\n    .overflow-clip {\n      display: block;\n    }\n\n    .information-menu {\n      left: 0;\n      z-index: 3;\n      height: auto;\n      min-height: 21rem;\n      background: var(--mediaSliderDesktopBg);\n      transform: translate(0, -100%);\n      transition: transform 0.2s ease;\n    }\n\n    .overflow-clip.open {\n      height: 22rem;\n    }\n\n    .information-menu.open {\n      transform: translate(0, 0);\n    }\n\n    .info-box {\n      max-width: 1000px;\n      padding: 1.5rem 0;\n      margin: 0 auto;\n    }\n  }\n"]))),
          vr = function(e) {
              ht(n, e);
              var t = dt(n);

              function n() {
                  var e;
                  return At(this, n), (e = t.call(this)).config = {}, e.mediaSliderOpen = !1, e.menus = {}, e.selectedMenuOption = "texts", e
              }
              return Et(n, [{
                  key: "shouldUpdate",
                  value: function() {
                      var e = this.shadowRoot ? this.shadowRoot.querySelector(".information-menu") : null;
                      return e && (e.scrollTop = 0), !0
                  }
              }, {
                  key: "render",
                  value: function() {
                      var e = this.mediaSliderOpen ? "open" : "closed";
                      return fn(ye || (ye = st(['\n      <div class="media-slider-container">\n        <div class="overflow-clip ', '">\n          <div class="information-menu ', '">\n            <div class="info-box">\n              <media-subnav\n                .baseHost=', "\n                .config=", '\n                class="', '"\n                menu="audio"\n                .menuItems=', "\n              ></media-subnav>\n              <media-subnav\n                .baseHost=", "\n                .config=", '\n                class="', '"\n                menu="images"\n                .menuItems=', "\n              ></media-subnav>\n              <media-subnav\n                .baseHost=", "\n                .config=", '\n                class="', '"\n                menu="software"\n                .menuItems=', "\n              ></media-subnav>\n              <media-subnav\n                .baseHost=", "\n                .config=", '\n                class="', '"\n                menu="texts"\n                .menuItems=', "\n              ></media-subnav>\n              <media-subnav\n                .baseHost=", "\n                .config=", '\n                class="', '"\n                menu="video"\n                .menuItems=', "\n              ></media-subnav>\n              <media-subnav\n                .baseHost=", "\n                .config=", '\n                class="', '"\n                menu="web"\n                .menuItems=', "\n              ></media-subnav>\n              <media-subnav\n                .baseHost=", "\n                .config=", '\n                class="', '"\n                menu="more"\n                .menuItems=', "\n              ></media-subnav>\n            </div>\n          </div>\n        </div>\n      </div>\n    "])), e, e, this.baseHost, this.config, "audio" === this.selectedMenuOption ? "" : "hidden", this.menus.audio, this.baseHost, this.config, "images" === this.selectedMenuOption ? "" : "hidden", this.menus.images, this.baseHost, this.config, "software" === this.selectedMenuOption ? "" : "hidden", this.menus.software, this.baseHost, this.config, "texts" === this.selectedMenuOption ? "" : "hidden", this.menus.texts, this.baseHost, this.config, "video" === this.selectedMenuOption ? "" : "hidden", this.menus.video, this.baseHost, this.config, "web" === this.selectedMenuOption ? "" : "hidden", this.menus.web, this.baseHost, this.config, "more" === this.selectedMenuOption ? "" : "hidden", this.menus.more)
                  }
              }], [{
                  key: "styles",
                  get: function() {
                      return pr
                  }
              }, {
                  key: "properties",
                  get: function() {
                      return {
                          baseHost: {
                              type: String
                          },
                          config: {
                              type: Object
                          },
                          mediaSliderOpen: {
                              type: Boolean
                          },
                          menus: {
                              type: Object
                          },
                          selectedMenuOption: {
                              type: String
                          }
                      }
                  }
              }]), n
          }(In);
      customElements.define("media-slider", vr);
      var mr = Tt(ge || (ge = st(["\n  ul {\n    position: relative;\n    z-index: 3;\n    padding: .8rem 0;\n    margin: 0;\n    font-size: 1.2rem;\n    text-transform: uppercase;\n    text-align: center;\n    background: var(--desktopSubnavBg);\n  }\n\n  li {\n    display: inline-block;\n    padding: 0 15px;\n  }\n\n  a {\n    text-decoration: none;\n    color: var(--subnavLinkColor);\n  }\n\n  a:hover,\n  a:active,\n  a:focus {\n    color: var(--linkHoverColor);\n  }\n\n  .donate svg {\n    width: 16px;\n    height: 16px;\n    vertical-align: -4px;\n    fill: #f00;\n  }\n"]))),
          yr = function(e) {
              ht(n, e);
              var t = dt(n);

              function n() {
                  return At(this, n), t.apply(this, arguments)
              }
              return Et(n, [{
                  key: "listItems",
                  get: function() {
                      var e = this;
                      return this.menuItems ? this.menuItems.map((function(t) {
                          return fn(be || (be = st(['\n        <li>\n          <a class="', '" href="', '">', "", "</a>\n        </li>\n      "])), t.title.toLowerCase(), Mn(t.url, e.baseHost), t.title, n.iconFor(t.title))
                      })) : pn
                  }
              }, {
                  key: "render",
                  value: function() {
                      return fn(we || (we = st(["\n      <ul>\n        ", "\n      </ul>\n    "])), this.listItems)
                  }
              }], [{
                  key: "styles",
                  get: function() {
                      return mr
                  }
              }, {
                  key: "properties",
                  get: function() {
                      return {
                          baseHost: {
                              type: String
                          },
                          menuItems: {
                              type: Array
                          }
                      }
                  }
              }, {
                  key: "iconFor",
                  value: function(e) {
                      var t = {
                          Donate: Ln.donate
                      };
                      return t[e] ? t[e] : fn(ke || (ke = st([""])))
                  }
              }]), n
          }($n);
      customElements.define("desktop-subnav", yr);
      var gr = Tt(Se || (Se = st(["\n  @media (min-width: 890px) {\n    .initial,\n    .closed,\n    .open {\n      right: 34rem;\n    }\n\n    .search-hidden.initial,\n    .search-hidden.closed,\n    .search-hidden.open {\n      right: 18.5rem;\n    }\n  }\n\n  @media (min-width: 990px) {\n    .initial,\n    .closed,\n    .open {\n      right: 40rem;\n    }\n\n    .search-hidden.initial,\n    .search-hidden.closed,\n    .search-hidden.open {\n      right: 24.5rem;\n    }\n  }\n"]))),
          br = function(e) {
              ht(n, e);
              var t = dt(n);

              function n() {
                  return At(this, n), t.apply(this, arguments)
              }
              return Et(n, null, [{
                  key: "styles",
                  get: function() {
                      return [Jn.styles, gr]
                  }
              }]), n
          }(Jn);
      customElements.define("signed-out-dropdown", br);
      var wr = Tt(xe || (xe = st(["\n  :host {\n    --white: #fff;\n    --grey13: #222;\n    --grey20: #333;\n    --grey40: #666;\n    --grey28: #474747;\n    --grey60: #999;\n    --grey66: #aaa;\n    --grey80: #ccc;\n    --errorYellow: #ffcd27;\n\n    --linkColor: #428bca;\n    --linkHoverColor: var(--white);\n    --subnavLinkColor: var(--grey66);\n    --primaryTextColor: var(--white);\n    --inverseTextColor: var(--grey20);\n    --lightTextColor: var(--grey60);\n    --activeColor: var(--white);\n    --activeButtonBg: var(--grey20);\n    --iconFill: var(--grey60);\n\n    --searchActiveBg: var(--grey20);\n    --searchActiveInputBg: var(--white);\n    --searchMenuBg: var(--grey20);\n    --desktopSearchIconFill: var(--grey20);\n\n    --mediaMenuBg: var(--grey13);\n    --mediaLabelDesktopColor: var(--grey60);\n    --activeDesktopMenuIcon: var(--grey28);\n\n    --mediaSliderBg: var(--grey20);\n    --mediaSliderDesktopBg: var(--grey28);\n\n    --primaryNavBg: var(--grey13);\n    --primaryNavBottomBorder: var(--grey20);\n\n    --desktopSubnavBg: var(--grey20);\n\n    --dropdownMenuBg: var(--grey20);\n    --dropdownMenuInfoItem: var(--grey60);\n    --dropdownMenuDivider: var(--grey40);\n\n    --loginTextColor: var(--grey60);\n\n    --themeFontFamily: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    --logoWidthTablet: 263px;\n\n    --savePageSubmitBg: var(--grey13);\n    --savePageSubmitText: var(--white);\n    --savePageInputBorder: var(--grey60);\n    --savePageErrorText: var(--errorYellow);\n\n    color: var(--primaryTextColor);\n    font-size: 2rem;\n    font-family: var(--themeFontFamily);\n  }\n\n  primary-nav:focus {\n    outline: none !important;\n  }\n\n  #close-layer {\n    display: none;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 0;\n  }\n  #close-layer.visible {\n    display: block;\n  }\n\n  .topnav {\n    position: relative;\n    z-index: 3;\n  }\n\n  @media (max-width: 889px) {\n    desktop-subnav {\n      display: none;\n    }\n  }\n"]))),
          kr = {
              eventCategory: "TopNav",
              hiddenSearchOptions: [],
              waybackPagesArchived: "740 billion"
          };
      var Sr = function(e) {
          ht(n, e);
          var t = dt(n);

          function n() {
              var e;
              return At(this, n), (e = t.call(this)).menuSetup(), e.mediaBaseHost = "https://archive.org", e.userProfileImagePath = "/services/img/user/profile", e.config = kr, e.hideSearch = !1, e.mediaSliderOpen = !1, e.openMenu = "", e.searchIn = "", e.selectedMenuOption = "", e.secondIdentitySlotMode = "", e
          }
          return Et(n, [{
              key: "updated",
              value: function(e) {
                  (e.has("username") || e.has("localLinks") || e.has("baseHost") || e.has("waybackPagesArchived") || e.has("itemIdentifier")) && this.menuSetup()
              }
          }, {
              key: "menuSetup",
              value: function() {
                  var e;
                  this.localLinks = "false" !== this.getAttribute("localLinks") && !1 !== this.getAttribute("localLinks"), this.username = this.getAttribute("username"), this.screenName = this.getAttribute("screenname"), this.waybackPagesArchived = null != (e = this.getAttribute("waybackPagesArchived")) ? e : "", this.baseHost = this.localLinks ? "" : "https://archive.org", this.menus = function() {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "___USERID___",
                          t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                      n && (kr.waybackPagesArchived = n);
                      var i = t ? "" : "https://archive.org";
                      return {
                          audio: {
                              heading: "Internet Archive Audio",
                              iconLinks: [{
                                  icon: "".concat(i, "/services/img/etree"),
                                  title: "Live Music Archive",
                                  url: "".concat(i, "/details/etree")
                              }, {
                                  icon: "".concat(i, "/services/img/librivoxaudio"),
                                  title: "Librivox Free Audio",
                                  url: "".concat(i, "/details/librivoxaudio")
                              }],
                              featuredLinks: [{
                                  title: "All Audio",
                                  url: "".concat(i, "/details/audio")
                              }, {
                                  title: "This Just In",
                                  url: "".concat(i, "/search.php?query=mediatype:audio&sort=-publicdate")
                              }, {
                                  title: "Grateful Dead",
                                  url: "".concat(i, "/details/GratefulDead")
                              }, {
                                  title: "Netlabels",
                                  url: "".concat(i, "/details/netlabels")
                              }, {
                                  title: "Old Time Radio",
                                  url: "".concat(i, "/details/oldtimeradio")
                              }, {
                                  title: "78 RPMs and Cylinder Recordings",
                                  url: "".concat(i, "/details/78rpm")
                              }],
                              links: [{
                                  title: "Audio Books & Poetry",
                                  url: "".concat(i, "/details/audio_bookspoetry")
                              }, {
                                  title: "Computers, Technology and Science",
                                  url: "".concat(i, "/details/audio_tech")
                              }, {
                                  title: "Music, Arts & Culture",
                                  url: "".concat(i, "/details/audio_music")
                              }, {
                                  title: "News & Public Affairs",
                                  url: "".concat(i, "/details/audio_news")
                              }, {
                                  title: "Spirituality & Religion",
                                  url: "".concat(i, "/details/audio_religion")
                              }, {
                                  title: "Podcasts",
                                  url: "".concat(i, "/details/podcasts")
                              }, {
                                  title: "Radio News Archive",
                                  url: "".concat(i, "/details/radio")
                              }]
                          },
                          images: {
                              heading: "Images",
                              iconLinks: [{
                                  icon: "".concat(i, "/services/img/metropolitanmuseumofart-gallery"),
                                  title: "Metropolitan Museum",
                                  url: "".concat(i, "/details/metropolitanmuseumofart-gallery")
                              }, {
                                  icon: "".concat(i, "/services/img/clevelandart"),
                                  title: "Cleveland Museum of Art",
                                  url: "".concat(i, "/details/clevelandart")
                              }],
                              featuredLinks: [{
                                  title: "All Images",
                                  url: "".concat(i, "/details/image")
                              }, {
                                  title: "This Just In",
                                  url: "".concat(i, "/search.php?query=mediatype:image&sort=-publicdate")
                              }, {
                                  title: "Flickr Commons",
                                  url: "".concat(i, "/details/flickrcommons")
                              }, {
                                  title: "Occupy Wall Street Flickr",
                                  url: "".concat(i, "/details/flickr-ows")
                              }, {
                                  title: "Cover Art",
                                  url: "".concat(i, "/details/coverartarchive")
                              }, {
                                  title: "USGS Maps",
                                  url: "".concat(i, "/details/maps_usgs")
                              }],
                              links: [{
                                  title: "NASA Images",
                                  url: "".concat(i, "/details/nasa")
                              }, {
                                  title: "Solar System Collection",
                                  url: "".concat(i, "/details/solarsystemcollection")
                              }, {
                                  title: "Ames Research Center",
                                  url: "".concat(i, "/details/amesresearchcenterimagelibrary")
                              }]
                          },
                          more: [{
                              title: "About",
                              url: "".concat(i, "/about/")
                          }, {
                              title: "Blog",
                              url: "https://blog.archive.org"
                          }, {
                              title: "Projects",
                              url: "".concat(i, "/projects/")
                          }, {
                              title: "Help",
                              url: "".concat(i, "/about/faqs.php")
                          }, {
                              title: "Donate",
                              url: "".concat(i, "/donate?origin=iawww-TopNavDonateButton")
                          }, {
                              title: "Contact",
                              url: "".concat(i, "/about/contact.php")
                          }, {
                              title: "Jobs",
                              url: "".concat(i, "/about/jobs.php")
                          }, {
                              title: "Volunteer",
                              url: "".concat(i, "/about/volunteerpositions.php")
                          }, {
                              title: "People",
                              url: "".concat(i, "/about/bios.php")
                          }],
                          software: {
                              heading: "Software",
                              iconLinks: [{
                                  icon: "".concat(i, "/services/img/internetarcade"),
                                  title: "Internet Arcade",
                                  url: "".concat(i, "/details/internetarcade")
                              }, {
                                  icon: "".concat(i, "/services/img/consolelivingroom"),
                                  title: "Console Living Room",
                                  url: "".concat(i, "/details/consolelivingroom")
                              }],
                              featuredLinks: [{
                                  title: "All Software",
                                  url: "".concat(i, "/details/software")
                              }, {
                                  title: "This Just In",
                                  url: "".concat(i, "/search.php?query=mediatype:software&sort=-publicdate")
                              }, {
                                  title: "Old School Emulation",
                                  url: "".concat(i, "/details/tosec")
                              }, {
                                  title: "MS-DOS Games",
                                  url: "".concat(i, "/details/softwarelibrary_msdos_games")
                              }, {
                                  title: "Historical Software",
                                  url: "".concat(i, "/details/historicalsoftware")
                              }, {
                                  title: "Classic PC Games",
                                  url: "".concat(i, "/details/classicpcgames")
                              }, {
                                  title: "Software Library",
                                  url: "".concat(i, "/details/softwarelibrary")
                              }],
                              links: [{
                                  title: "Kodi Archive and Support File",
                                  url: "".concat(i, "/details/kodi_archive")
                              }, {
                                  title: "Vintage Software",
                                  url: "".concat(i, "/details/vintagesoftware")
                              }, {
                                  title: "APK",
                                  url: "".concat(i, "/details/apkarchive")
                              }, {
                                  title: "MS-DOS",
                                  url: "".concat(i, "/details/softwarelibrary_msdos")
                              }, {
                                  title: "CD-ROM Software",
                                  url: "".concat(i, "/details/cd-roms")
                              }, {
                                  title: "CD-ROM Software Library",
                                  url: "".concat(i, "/details/cdromsoftware")
                              }, {
                                  title: "Software Sites",
                                  url: "".concat(i, "/details/softwaresites")
                              }, {
                                  title: "Tucows Software Library",
                                  url: "".concat(i, "/details/tucows")
                              }, {
                                  title: "Shareware CD-ROMs",
                                  url: "".concat(i, "/details/cdbbsarchive")
                              }, {
                                  title: "Software Capsules Compilation",
                                  url: "".concat(i, "/details/softwarecapsules")
                              }, {
                                  title: "CD-ROM Images",
                                  url: "".concat(i, "/details/cdromimages")
                              }, {
                                  title: "ZX Spectrum",
                                  url: "".concat(i, "/details/softwarelibrary_zx_spectrum")
                              }, {
                                  title: "DOOM Level CD",
                                  url: "".concat(i, "/details/doom-cds")
                              }]
                          },
                          texts: {
                              heading: "Books",
                              iconLinks: [{
                                  title: "Books to Borrow",
                                  icon: "".concat(i, "/images/book-lend.png"),
                                  url: "".concat(i, "/details/inlibrary")
                              }, {
                                  title: "Open Library",
                                  icon: "".concat(i, "/images/widgetOL.png"),
                                  url: "https://openlibrary.org/"
                              }],
                              featuredLinks: [{
                                  title: "All Books",
                                  url: "".concat(i, "/details/books")
                              }, {
                                  title: "All Texts",
                                  url: "".concat(i, "/details/texts")
                              }, {
                                  title: "This Just In",
                                  url: "".concat(i, "/search.php?query=mediatype:texts&sort=-publicdate")
                              }, {
                                  title: "Smithsonian Libraries",
                                  url: "".concat(i, "/details/smithsonian")
                              }, {
                                  title: "FEDLINK (US)",
                                  url: "".concat(i, "/details/fedlink")
                              }, {
                                  title: "Genealogy",
                                  url: "".concat(i, "/details/genealogy")
                              }, {
                                  title: "Lincoln Collection",
                                  url: "".concat(i, "/details/lincolncollection")
                              }],
                              links: [{
                                  title: "American Libraries",
                                  url: "".concat(i, "/details/americana")
                              }, {
                                  title: "Canadian Libraries",
                                  url: "".concat(i, "/details/toronto")
                              }, {
                                  title: "Universal Library",
                                  url: "".concat(i, "/details/universallibrary")
                              }, {
                                  title: "Project Gutenberg",
                                  url: "".concat(i, "/details/gutenberg")
                              }, {
                                  title: "Children's Library",
                                  url: "".concat(i, "/details/iacl")
                              }, {
                                  title: "Biodiversity Heritage Library",
                                  url: "".concat(i, "/details/biodiversity")
                              }, {
                                  title: "Books by Language",
                                  url: "".concat(i, "/details/booksbylanguage")
                              }, {
                                  title: "Additional Collections",
                                  url: "".concat(i, "/details/additional_collections")
                              }]
                          },
                          web: {
                              mobileAppsLinks: [{
                                  url: "https://apps.apple.com/us/app/wayback-machine/id1201888313",
                                  title: "Wayback Machine (iOS)",
                                  external: !0
                              }, {
                                  url: "https://play.google.com/store/apps/details?id=com.archive.waybackmachine&hl=en_US",
                                  title: "Wayback Machine (Android)",
                                  external: !0
                              }],
                              browserExtensionsLinks: [{
                                  url: "https://chrome.google.com/webstore/detail/wayback-machine/fpnmgdkabkmnadcjpehmlllkndpkmiak",
                                  title: "Chrome",
                                  external: !0
                              }, {
                                  url: "https://addons.mozilla.org/en-US/firefox/addon/wayback-machine_new/",
                                  title: "Firefox",
                                  external: !0
                              }, {
                                  url: "https://apps.apple.com/us/app/wayback-machine/id1472432422?mt=12",
                                  title: "Safari",
                                  external: !0
                              }, {
                                  url: "https://microsoftedge.microsoft.com/addons/detail/wayback-machine/kjmickeoogghaimmomagaghnogelpcpn?hl=en-US",
                                  title: "Edge",
                                  external: !0
                              }],
                              archiveItLinks: [{
                                  url: "https://www.archive-it.org/explore",
                                  title: "Explore the Collections",
                                  external: !0
                              }, {
                                  url: "https://www.archive-it.org/blog/learn-more/",
                                  title: "Learn More",
                                  external: !0
                              }, {
                                  url: "https://www.archive-it.org/contact-us",
                                  title: "Build Collections",
                                  external: !0
                              }]
                          },
                          video: {
                              heading: "Video",
                              iconLinks: [{
                                  icon: "".concat(i, "/services/img/tv"),
                                  title: "TV News",
                                  url: "".concat(i, "/details/tv")
                              }, {
                                  icon: "".concat(i, "/services/img/911"),
                                  title: "Understanding 9/11",
                                  url: "".concat(i, "/details/911")
                              }],
                              featuredLinks: [{
                                  title: "All Video",
                                  url: "".concat(i, "/details/movies")
                              }, {
                                  title: "This Just In",
                                  url: "".concat(i, "/search.php?query=mediatype:movies&sort=-publicdate")
                              }, {
                                  title: "Prelinger Archives",
                                  url: "".concat(i, "/details/prelinger")
                              }, {
                                  title: "Democracy Now!",
                                  url: "".concat(i, "/details/democracy_now_vid")
                              }, {
                                  title: "Occupy Wall Street",
                                  url: "".concat(i, "/details/occupywallstreet")
                              }, {
                                  title: "TV NSA Clip Library",
                                  url: "".concat(i, "/details/nsa")
                              }],
                              links: [{
                                  title: "Animation & Cartoons",
                                  url: "".concat(i, "/details/animationandcartoons")
                              }, {
                                  title: "Arts & Music",
                                  url: "".concat(i, "/details/artsandmusicvideos")
                              }, {
                                  title: "Computers & Technology",
                                  url: "".concat(i, "/details/computersandtechvideos")
                              }, {
                                  title: "Cultural & Academic Films",
                                  url: "".concat(i, "/details/culturalandacademicfilms")
                              }, {
                                  title: "Ephemeral Films",
                                  url: "".concat(i, "/details/ephemera")
                              }, {
                                  title: "Movies",
                                  url: "".concat(i, "/details/moviesandfilms")
                              }, {
                                  title: "News & Public Affairs",
                                  url: "".concat(i, "/details/newsandpublicaffairs")
                              }, {
                                  title: "Spirituality & Religion",
                                  url: "".concat(i, "/details/spiritualityandreligion")
                              }, {
                                  title: "Sports Videos",
                                  url: "".concat(i, "/details/sports")
                              }, {
                                  title: "Television",
                                  url: "".concat(i, "/details/television")
                              }, {
                                  title: "Videogame Videos",
                                  url: "".concat(i, "/details/gamevideos")
                              }, {
                                  title: "Vlogs",
                                  url: "".concat(i, "/details/vlogs")
                              }, {
                                  title: "Youth Media",
                                  url: "".concat(i, "/details/youth_media")
                              }]
                          },
                          user: [{
                              url: "".concat(i, "/create"),
                              title: "Upload files",
                              analyticsEvent: "UserUpload"
                          }, {
                              url: "".concat(i, "/details/@").concat(e),
                              title: "My uploads",
                              analyticsEvent: "UserLibrary"
                          }, {
                              url: "".concat(i, "/details/@").concat(e, "/loans"),
                              title: "My loans",
                              analyticsEvent: "UserLoans"
                          }, {
                              url: "".concat(i, "/details/fav-").concat(e),
                              title: "My favorites",
                              analyticsEvent: "UserFavorites"
                          }, {
                              url: "".concat(i, "/details/@").concat(e, "/lists"),
                              title: "My lists",
                              analyticsEvent: "UserLists"
                          }, {
                              url: "".concat(i, "/details/@").concat(e, "/collections"),
                              title: "My collections",
                              analyticsEvent: "UserCollections"
                          }, {
                              url: "".concat(i, "/details/@").concat(e, "/web-archive"),
                              title: "My web archives",
                              analyticsEvent: "UserWebArchive"
                          }, {
                              url: "".concat(i, "/account/index.php?settings=1"),
                              title: "Account settings",
                              analyticsEvent: "UserSettings"
                          }, {
                              url: "https://help.archive.org",
                              title: "Get help",
                              analyticsEvent: "UserHelp"
                          }, {
                              url: "".concat(i, "/account/logout"),
                              title: "Log out",
                              analyticsEvent: "UserLogOut"
                          }],
                          userAdmin: [{
                              title: "ADMINS:"
                          }, {
                              title: "item:"
                          }, {
                              url: "".concat(i, "/editxml/").concat(r),
                              title: "edit xml",
                              analyticsEvent: "AdminUserEditXML"
                          }, {
                              url: "".concat(i, "/edit.php?redir=1&identifier=").concat(r),
                              title: "edit files",
                              analyticsEvent: "AdminUserEditFiles"
                          }, {
                              url: "".concat(i, "/download/").concat(r, "/"),
                              title: "download",
                              analyticsEvent: "AdminUserDownload"
                          }, {
                              url: "".concat(i, "/metadata/").concat(r, "/"),
                              title: "metadata",
                              analyticsEvent: "AdminUserMetadata"
                          }, {
                              url: "https://catalogd.archive.org/history/".concat(r),
                              title: "history",
                              analyticsEvent: "AdminUserHistory"
                          }, {
                              url: "".concat(i, "/manage/").concat(r),
                              title: "manage",
                              analyticsEvent: "AdminUserManager"
                          }, {
                              url: "".concat(i, "/manage/").concat(r, "#make_dark"),
                              title: "curate",
                              analyticsEvent: "AdminUserCurate"
                          }, {
                              url: "".concat(i, "/manage/").concat(r, "#modify_xml"),
                              title: "modify xml",
                              analyticsEvent: "AdminUserModifyXML"
                          }],
                          userAdminFlags: [{
                              url: "".concat(i, "/services/flags/admin.php?identifier=").concat(r),
                              title: "manage flags",
                              analyticsEvent: "AdminUserManageFlags"
                          }],
                          signedOut: [{
                              url: "".concat(i, "/account/signup"),
                              title: "Sign up for free",
                              analyticsEvent: "AvatarMenu-Signup"
                          }, {
                              url: "".concat(i, "/account/login"),
                              title: "Log in",
                              analyticsEvent: "AvatarMenu-Login"
                          }]
                      }
                  }(this.username, this.localLinks, this.waybackPagesArchived, this.itemIdentifier)
              }
          }, {
              key: "menuToggled",
              value: function(e) {
                  var t = e.detail,
                      n = this.openMenu;
                  this.openMenu = n === t.menuName ? "" : t.menuName, "media" !== this.openMenu && this.closeMediaSlider()
              }
          }, {
              key: "openMediaSlider",
              value: function() {
                  this.mediaSliderOpen = !0
              }
          }, {
              key: "closeMediaSlider",
              value: function() {
                  this.mediaSliderOpen = !1, this.selectedMenuOption = ""
              }
          }, {
              key: "closeMenus",
              value: function() {
                  this.openMenu = "", this.closeMediaSlider()
              }
          }, {
              key: "searchInChanged",
              value: function(e) {
                  this.searchIn = e.detail.searchIn
              }
          }, {
              key: "trackClick",
              value: function(e) {
                  var t = e.detail;
                  this.dispatchEvent(new CustomEvent("analyticsClick", {
                      bubbles: !0,
                      composed: !0,
                      detail: t
                  }))
              }
          }, {
              key: "trackSubmit",
              value: function(e) {
                  var t = e.detail;
                  this.dispatchEvent(new CustomEvent("analyticsSubmit", {
                      bubbles: !0,
                      composed: !0,
                      detail: t
                  }))
              }
          }, {
              key: "mediaTypeSelected",
              value: function(e) {
                  var t = e.detail;
                  this.selectedMenuOption !== t.mediatype ? (this.selectedMenuOption = t.mediatype, this.openMediaSlider()) : this.closeMediaSlider()
              }
          }, {
              key: "searchMenuOpened",
              get: function() {
                  return "search" === this.openMenu
              }
          }, {
              key: "signedOutOpened",
              get: function() {
                  return "login" === this.openMenu
              }
          }, {
              key: "userMenuOpened",
              get: function() {
                  return "user" === this.openMenu
              }
          }, {
              key: "searchMenuTabIndex",
              get: function() {
                  return this.searchMenuOpened ? "" : "-1"
              }
          }, {
              key: "userMenuTabIndex",
              get: function() {
                  return this.userMenuOpened ? "" : "-1"
              }
          }, {
              key: "signedOutTabIndex",
              get: function() {
                  return this.signedOutOpened ? "" : "-1"
              }
          }, {
              key: "closeLayerClass",
              get: function() {
                  return this.openMenu || this.mediaSliderOpen ? "visible" : ""
              }
          }, {
              key: "userMenu",
              get: function() {
                  return fn(Ae || (Ae = st(["\n      <user-menu\n        .baseHost=", "\n        .config=", "\n        .menuItems=", "\n        ?open=", "\n        .username=", "\n        ?hideSearch=", '\n        tabindex="', '"\n        @menuToggled=', "\n        @trackClick=", "\n      ></user-menu>\n    "])), this.baseHost, this.config, this.userMenuItems, "user" === this.openMenu, this.username, this.hideSearch, this.userMenuTabIndex, this.menuToggled, this.trackClick)
              }
          }, {
              key: "signedOutDropdown",
              get: function() {
                  return fn(_e || (_e = st(["\n      <signed-out-dropdown\n        .baseHost=", "\n        .config=", "\n        .open=", "\n        ?hideSearch=", '\n        tabindex="', '"\n        .menuItems=', "\n      ></signed-out-dropdown>\n    "])), this.baseHost, this.config, this.signedOutOpened, this.hideSearch, this.signedOutTabIndex, this.signedOutMenuItems)
              }
          }, {
              key: "signedOutMenuItems",
              get: function() {
                  return this.menus.signedOut
              }
          }, {
              key: "userMenuItems",
              get: function() {
                  var e = this.menus.user,
                      t = this.menus.userAdmin;
                  return this.canManageFlags && (t = t.concat(this.menus.userAdminFlags)), this.itemIdentifier && this.admin ? [e, t] : e
              }
          }, {
              key: "desktopSubnavMenuItems",
              get: function() {
                  return this.menus.more
              }
          }, {
              key: "allowSecondaryIcon",
              get: function() {
                  return "allow" === this.secondIdentitySlotMode
              }
          }, {
              key: "secondLogoSlot",
              get: function() {
                  return this.allowSecondaryIcon ? fn(Ee || (Ee = st(['\n          <slot name="opt-sec-logo" slot="opt-sec-logo"></slot>\n          <slot name="opt-sec-logo-mobile" slot="opt-sec-logo-mobile"></slot>\n        ']))) : pn
              }
          }, {
              key: "separatorTemplate",
              get: function() {
                  return fn(Oe || (Oe = st(['<li class="divider" role="presentation"></li>'])))
              }
          }, {
              key: "render",
              value: function() {
                  return fn(Ce || (Ce = st(['\n      <div class="topnav">\n        <primary-nav\n          .baseHost=', "\n          .mediaBaseHost=", "\n          .config=", "\n          .openMenu=", "\n          .screenName=", "\n          .searchIn=", "\n          .searchQuery=", "\n          .secondIdentitySlotMode=", "\n          .selectedMenuOption=", "\n          .username=", "\n          .userProfileImagePath=", "\n          ?hideSearch=", "\n          @mediaTypeSelected=", "\n          @toggleSearchMenu=", "\n          @trackClick=", "\n          @trackSubmit=", "\n          @menuToggled=", "\n        >\n          ", "\n        </primary-nav>\n        <media-slider\n          .baseHost=", "\n          .config=", "\n          .selectedMenuOption=", "\n          .mediaSliderOpen=", "\n          .menus=", "\n        ></media-slider>\n      </div>\n      ", "\n      <search-menu\n        .baseHost=", "\n        .config=", "\n        .openMenu=", '\n        tabindex="', '"\n        ?hideSearch=', "\n        @searchInChanged=", "\n        @trackClick=", "\n        @trackSubmit=", "\n      ></search-menu>\n      <desktop-subnav\n        .baseHost=", "\n        .menuItems=", '\n      ></desktop-subnav>\n      <div id="close-layer" class="', '" @click=', "></div>\n    "])), this.baseHost, this.mediaBaseHost, this.config, this.openMenu, this.screenName, this.searchIn, this.searchQuery, this.secondIdentitySlotMode, this.selectedMenuOption, this.username, this.userProfileImagePath, this.hideSearch, this.mediaTypeSelected, this.toggleSearchMenu, this.trackClick, this.trackSubmit, this.menuToggled, this.secondLogoSlot, this.baseHost, this.config, this.selectedMenuOption, this.mediaSliderOpen, this.menus, this.username ? this.userMenu : this.signedOutDropdown, this.baseHost, this.config, this.openMenu, this.searchMenuTabIndex, this.hideSearch, this.searchInChanged, this.trackClick, this.trackSubmit, this.baseHost, this.desktopSubnavMenuItems, this.closeLayerClass, this.closeMenus)
              }
          }], [{
              key: "styles",
              get: function() {
                  return wr
              }
          }, {
              key: "properties",
              get: function() {
                  return {
                      localLinks: Boolean,
                      waybackPagesArchived: String,
                      baseHost: {
                          type: String
                      },
                      mediaBaseHost: {
                          type: String
                      },
                      admin: {
                          type: Boolean
                      },
                      canManageFlags: {
                          type: Boolean
                      },
                      config: {
                          type: Object,
                          converter: function(e) {
                              return JSON.parse(atob(e))
                          }
                      },
                      hideSearch: {
                          type: Boolean
                      },
                      itemIdentifier: {
                          type: String
                      },
                      mediaSliderOpen: {
                          type: Boolean
                      },
                      menus: {
                          type: Object,
                          converter: function(e) {
                              return JSON.parse(atob(e))
                          }
                      },
                      openMenu: {
                          type: String
                      },
                      screenName: {
                          type: String
                      },
                      searchIn: {
                          type: String
                      },
                      searchQuery: {
                          type: String,
                          converter: function(e) {
                              return atob(e)
                          }
                      },
                      selectedMenuOption: {
                          type: String
                      },
                      username: {
                          type: String
                      },
                      userProfileImagePath: {
                          type: String
                      },
                      secondIdentitySlotMode: {
                          type: String
                      }
                  }
              }
          }]), n
      }(In);
      customElements.define("ia-topnav", Sr);
      n(183), n(142), n(138);

      function xr(e) {
          return (xr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          } : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
      }

      function Ar(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
              constructor: {
                  value: e,
                  writable: !0,
                  configurable: !0
              }
          }), t && Rr(e, t)
      }

      function _r(e) {
          var t = Ir();
          return function() {
              var n, r = $r(e);
              if (t) {
                  var i = $r(this).constructor;
                  n = Reflect.construct(r, arguments, i)
              } else n = r.apply(this, arguments);
              return Er(this, n)
          }
      }

      function Er(e, t) {
          return !t || "object" !== xr(t) && "function" != typeof t ? Or(e) : t
      }

      function Or(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }

      function Cr(e) {
          var t = "function" == typeof Map ? new Map : void 0;
          return (Cr = function(e) {
              if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
              var n;
              if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
              if (void 0 !== t) {
                  if (t.has(e)) return t.get(e);
                  t.set(e, r)
              }

              function r() {
                  return Pr(e, arguments, $r(this).constructor)
              }
              return r.prototype = Object.create(e.prototype, {
                  constructor: {
                      value: r,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                  }
              }), Rr(r, e)
          })(e)
      }

      function Pr(e, t, n) {
          return (Pr = Ir() ? Reflect.construct : function(e, t, n) {
              var r = [null];
              r.push.apply(r, t);
              var i = new(Function.bind.apply(e, r));
              return n && Rr(i, n.prototype), i
          }).apply(null, arguments)
      }

      function Ir() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
              return !1
          }
      }

      function Rr(e, t) {
          return (Rr = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t, e
          })(e, t)
      }

      function $r(e) {
          return ($r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
      }

      function Lr(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function Tr(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
      }

      function jr(e, t, n) {
          return t && Tr(e.prototype, t), n && Tr(e, n), e
      }

      function Mr(e, t, n, r, i, o, a) {
          try {
              var s = e[o](a),
                  c = s.value
          } catch (e) {
              return void n(e)
          }
          s.done ? t(c) : Promise.resolve(c).then(r, i)
      }

      function Ur(e) {
          return function() {
              var t = this,
                  n = arguments;
              return new Promise((function(r, i) {
                  var o = e.apply(t, n);

                  function a(e) {
                      Mr(o, r, i, a, s, "next", e)
                  }

                  function s(e) {
                      Mr(o, r, i, a, s, "throw", e)
                  }
                  a(void 0)
              }))
          }
      }

      function Nr(e) {
          return function(e) {
              if (Array.isArray(e)) return Hr(e)
          }(e) || function(e) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
          }(e) || Dr(e) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
      }

      function Br(e, t) {
          return function(e) {
              if (Array.isArray(e)) return e
          }(e) || function(e, t) {
              if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
              var n = [],
                  r = !0,
                  i = !1,
                  o = void 0;
              try {
                  for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
              } catch (e) {
                  i = !0, o = e
              } finally {
                  try {
                      r || null == s.return || s.return()
                  } finally {
                      if (i) throw o
                  }
              }
              return n
          }(e, t) || Dr(e, t) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
      }

      function zr(e, t) {
          var n;
          if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
              if (Array.isArray(e) || (n = Dr(e)) || t && e && "number" == typeof e.length) {
                  n && (e = n);
                  var r = 0,
                      i = function() {};
                  return {
                      s: i,
                      n: function() {
                          return r >= e.length ? {
                              done: !0
                          } : {
                              done: !1,
                              value: e[r++]
                          }
                      },
                      e: function(e) {
                          throw e
                      },
                      f: i
                  }
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }
          var o, a = !0,
              s = !1;
          return {
              s: function() {
                  n = e[Symbol.iterator]()
              },
              n: function() {
                  var e = n.next();
                  return a = e.done, e
              },
              e: function(e) {
                  s = !0, o = e
              },
              f: function() {
                  try {
                      a || null == n.return || n.return()
                  } finally {
                      if (s) throw o
                  }
              }
          }
      }

      function Dr(e, t) {
          if (e) {
              if ("string" == typeof e) return Hr(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Hr(e, t) : void 0
          }
      }

      function Hr(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r
      }
      var Fr = "\\.\\.\\/",
          Wr = /:([^\\/]+)/g,
          Vr = "router-slot",
          Kr = window;

      function qr(e, t) {
          Kr.dispatchEvent(new CustomEvent(e, {
              detail: t
          }))
      }

      function Gr(e, t, n, r) {
          var i = Array.isArray(t) ? t : [t];
          return i.forEach((function(t) {
                  return e.addEventListener(t, n, r)
              })),
              function() {
                  return i.forEach((function(t) {
                      return e.removeEventListener(t, n, r)
                  }))
              }
      }

      function Yr(e) {
          e.forEach((function(e) {
              return e()
          }))
      }
      var Zr = [
          ["pushState", ["pushstate", "changestate"]],
          ["replaceState", ["replacestate", "changestate"]],
          ["forward", ["pushstate", "changestate"]],
          ["go", ["pushstate", "changestate"]],
          ["back", ["popstate"]]
      ];

      function Jr(e, t, n) {
          var r = e[t];
          ! function(e, t, n) {
              null == e.native && (e.native = {});
              e.native["".concat(t)] = n.bind(e)
          }(e, t, r), e[t] = function() {
              if (!Qr()) {
                  for (var t = arguments.length, i = new Array(t), o = 0; o < t; o++) i[o] = arguments[o];
                  r.apply(e, i), n(i)
              }
          }
      }

      function Qr() {
          return !Kr.dispatchEvent(new CustomEvent("willchangestate", {
              cancelable: !0
          }))
      }
      var Xr = document.createElement("a");

      function ei() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return si(window.location.pathname, e)
      }

      function ti() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return si(ii(ei(), ni()), e)
      }

      function ni() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return ri(".", e)
      }

      function ri(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Xr.href = e, si(Xr.pathname, t)
      }

      function ii(e, t) {
          return e.replace(new RegExp("^".concat(t)), "")
      }

      function oi() {
          return window.location.search
      }

      function ai(e) {
          return si(e, {
              start: !1,
              end: !1
          })
      }

      function si(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = t.start,
              r = void 0 === n || n,
              i = t.end,
              o = void 0 === i || i;
          return e = r && !e.startsWith("/") ? "/".concat(e) : !r && e.startsWith("/") ? e.slice(1) : e, o && !e.endsWith("/") ? "".concat(e, "/") : !o && e.endsWith("/") ? e.slice(0, e.length - 1) : e
      }

      function ci(e, t) {
          var n = [],
              r = ai(e.path.replace(Wr, (function(e) {
                  return n.push(arguments.length <= 1 ? void 0 : arguments[1]), "([^/]+)"
              }))),
              i = "**" === e.path || 0 === e.path.length && "full" != e.pathMatch ? /^/ : function() {
                  switch (e.pathMatch || "prefix") {
                      case "full":
                          return new RegExp("^/?".concat(r, "/?$"));
                      case "suffix":
                          return new RegExp("^.*?".concat(r, "/?$"));
                      case "fuzzy":
                          return new RegExp("^.*?".concat(r, ".*?$"));
                      case "prefix":
                      default:
                          return new RegExp("^[/]?".concat(r, "(?:/|$)"))
                  }
              }(),
              o = t.match(i);
          if (null != o) {
              var a = n.reduce((function(e, t, n) {
                      return e[t] = o[n + 1], e
                  }), {}),
                  s = ai(t.slice(0, o[0].length)),
                  c = ai(t.slice(o[0].length, t.length));
              return {
                  route: e,
                  match: o,
                  params: a,
                  fragments: {
                      consumed: s,
                      rest: c
                  }
              }
          }
          return null
      }

      function ui(e, t) {
          return li.apply(this, arguments)
      }

      function li() {
          return (li = Ur(regeneratorRuntime.mark((function e(t, n) {
              var r, i, o;
              return regeneratorRuntime.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                      case 0:
                          if (!((r = t.component) instanceof Function)) {
                              e.next = 10;
                              break
                          }
                          e.prev = 2, r = r(), e.next = 10;
                          break;
                      case 6:
                          if (e.prev = 6, e.t0 = e.catch(2), e.t0 instanceof TypeError) {
                              e.next = 10;
                              break
                          }
                          throw e.t0;
                      case 10:
                          return e.next = 12, Promise.resolve(r);
                      case 12:
                          return i = e.sent, o = i instanceof HTMLElement ? r : new(i.default ? i.default : i), null != t.setup && t.setup(o, n), e.abrupt("return", o);
                      case 16:
                      case "end":
                          return e.stop()
                  }
              }), e, null, [
                  [2, 6]
              ])
          })))).apply(this, arguments)
      }

      function fi(e) {
          return "redirectTo" in e
      }

      function hi(e) {
          return "resolve" in e
      }

      function di(e) {
          for (var t = [e]; null != e.parent;) e = e.parent, t.push(e);
          return {
              tree: t.reduce((function(e, t) {
                  return {
                      slot: t,
                      child: e
                  }
              }), void 0),
              depth: t.length
          }
      }

      function pi(e, t) {
          for (var n = e, r = []; null != n && null != n.slot.match && t > 0;) r.push(n.slot.match.fragments.consumed), n = n.child, t--;
          return r
      }

      function vi(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              n = di(e),
              r = n.tree,
              i = n.depth;
          if (!t.startsWith("/")) {
              var o = 0;
              t.startsWith("./") && (t = t.slice(2));
              var a = t.match(new RegExp(Fr, "g"));
              if (null != a) {
                  o = a.length;
                  var s = a.reduce((function(e, t) {
                      return e + t.length
                  }), 0);
                  t = t.slice(s)
              }
              var c = pi(r, i - 1 - o).filter((function(e) {
                  return e.length > 0
              }));
              t = "".concat(c.join("/")).concat(c.length > 0 ? "/" : "").concat(t)
          }
          return ri(t, {
              end: !1
          })
      }

      function mi(e, t) {
          history.replaceState(history.state, "", "".concat(vi(e, t.redirectTo)).concat(t.preserveQuery ? oi() : ""))
      }

      function yi(e, t) {
          if (null == e) return !0;
          var n = e.route,
              r = e.fragments,
              i = t.route,
              o = t.fragments,
              a = n == i;
          return !(r.consumed == o.consumed) || !a
      }

      function gi(e) {
          return bi(e, Vr)
      }

      function bi(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
              r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
              i = e.getRootNode();
          if (r >= n) {
              var o = i.querySelector(t);
              if (null != o && o != e) return o
          }
          var a = i.getRootNode();
          return null == a.host ? null : bi(a.host, t, n, ++r)
      }
      var wi = function() {
              function e(t) {
                  Lr(this, e), this.routerSlot = t
              }
              return jr(e, [{
                  key: "setup",
                  value: function() {
                      this.boundEventHandler = this.handleEvent.bind(this), window.addEventListener("click", this.boundEventHandler)
                  }
              }, {
                  key: "teardown",
                  value: function() {
                      window.removeEventListener("click", this.boundEventHandler)
                  }
              }, {
                  key: "handleEvent",
                  value: function(e) {
                      var t, n;
                      if (null === (t = this.routerSlot) || void 0 === t ? void 0 : t.handleAnchorLinks) {
                          var r = "composedPath" in e ? e.composedPath().find((function(e) {
                              return e instanceof HTMLAnchorElement
                          })) : e.target;
                          if (null != r && r instanceof HTMLAnchorElement) {
                              var i = r.href.startsWith(location.origin),
                                  o = "" !== r.target && "_self" !== r.target,
                                  a = "disabled" === r.dataset.routerSlot,
                                  s = null === (n = this.routerSlot) || void 0 === n ? void 0 : n.getRouteMatch(r.pathname),
                                  c = e.metaKey;
                              if (i && !o && !a && s && !c && !e.metaKey) {
                                  var u = "".concat(r.pathname).concat(r.search);
                                  e.preventDefault(), history.pushState(null, "", u)
                              }
                          }
                      }
                  }
              }]), e
          }(),
          ki = document.createElement("template");
      ki.innerHTML = "<slot></slot>",
          function() {
              var e, t = zr(Zr);
              try {
                  for (t.s(); !(e = t.n()).done;) {
                      var n, r = Br(e.value, 2),
                          i = r[0],
                          o = zr(r[1]);
                      try {
                          var a = function() {
                              var e = n.value;
                              Jr(history, i, (function() {
                                  return qr(e)
                              }))
                          };
                          for (o.s(); !(n = o.n()).done;) a()
                      } catch (e) {
                          o.e(e)
                      } finally {
                          o.f()
                      }
                  }
              } catch (e) {
                  t.e(e)
              } finally {
                  t.f()
              }
              window.addEventListener("popstate", (function(e) {
                  if (Qr()) return e.preventDefault(), void e.stopPropagation();
                  setTimeout((function() {
                      return qr("changestate")
                  }), 0)
              }))
          }();
      var Si = function(e) {
          Ar(i, e);
          var t, n, r = _r(i);

          function i() {
              var e;
              return Lr(this, i), (e = r.call(this)).listeners = [], e._routes = [], e._handleAnchors = !0, e._routeMatch = null, e.render = e.render.bind(Or(e)), e.attachShadow({
                  mode: "open"
              }).appendChild(ki.content.cloneNode(!0)), e
          }
          return jr(i, [{
              key: "routes",
              get: function() {
                  return this._routes
              },
              set: function(e) {
                  this.clear(), this.add(e)
              }
          }, {
              key: "handleAnchorLinks",
              get: function() {
                  return this._handleAnchors
              },
              set: function(e) {
                  this._handleAnchors = e, e ? this.setupAnchorListener() : this.detachAnchorListener()
              }
          }, {
              key: "parent",
              get: function() {
                  return this._parent
              },
              set: function(e) {
                  this.detachListeners(), this._parent = e, this.attachListeners()
              }
          }, {
              key: "isRoot",
              get: function() {
                  return null == this.parent
              }
          }, {
              key: "match",
              get: function() {
                  return this._routeMatch
              }
          }, {
              key: "route",
              get: function() {
                  return null != this.match ? this.match.route : null
              }
          }, {
              key: "fragments",
              get: function() {
                  return null != this.match ? this.match.fragments : null
              }
          }, {
              key: "params",
              get: function() {
                  return null != this.match ? this.match.params : null
              }
          }, {
              key: "connectedCallback",
              value: function() {
                  this.parent = this.queryParentRouterSlot(), this.setupAnchorListener()
              }
          }, {
              key: "disconnectedCallback",
              value: function() {
                  this.detachListeners(), this.detachAnchorListener()
              }
          }, {
              key: "queryParentRouterSlot",
              value: function() {
                  return gi(this)
              }
          }, {
              key: "constructAbsolutePath",
              value: function(e) {
                  return vi(this, e)
              }
          }, {
              key: "add",
              value: function(e) {
                  var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.isRoot && this.isConnected;
                  (t = this._routes).push.apply(t, Nr(e)), n && this.render().then()
              }
          }, {
              key: "clear",
              value: function() {
                  this._routes.length = 0
              }
          }, {
              key: "getRouteMatch",
              value: function(e) {
                  return function(e, t) {
                      var n, r = zr(e);
                      try {
                          for (r.s(); !(n = r.n()).done;) {
                              var i = ci(n.value, t);
                              if (null != i) return i
                          }
                      } catch (e) {
                          r.e(e)
                      } finally {
                          r.f()
                      }
                      return null
                  }(this._routes, e)
              }
          }, {
              key: "render",
              value: (n = Ur(regeneratorRuntime.mark((function e() {
                  var t;
                  return regeneratorRuntime.wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                          case 0:
                              if (this.isConnected) {
                                  e.next = 2;
                                  break
                              }
                              return e.abrupt("return");
                          case 2:
                              return t = null != this.parent && null != this.parent.fragments ? this.parent.fragments.rest : ti(), e.next = 5, this.renderPath(t);
                          case 5:
                          case "end":
                              return e.stop()
                      }
                  }), e, this)
              }))), function() {
                  return n.apply(this, arguments)
              })
          }, {
              key: "setupAnchorListener",
              value: function() {
                  var e;
                  this.isRoot && (this.detachAnchorListener(), this.anchorHandler = new wi(this), null === (e = this.anchorHandler) || void 0 === e || e.setup())
              }
          }, {
              key: "detachAnchorListener",
              value: function() {
                  var e;
                  null === (e = this.anchorHandler) || void 0 === e || e.teardown()
              }
          }, {
              key: "attachListeners",
              value: function() {
                  this.listeners.push(null != this.parent ? Gr(this.parent, "changestate", this.render) : Gr(Kr, "changestate", this.render))
              }
          }, {
              key: "clearChildren",
              value: function() {
                  for (; null != this.firstChild;) this.firstChild.parentNode.removeChild(this.firstChild)
              }
          }, {
              key: "detachListeners",
              value: function() {
                  Yr(this.listeners)
              }
          }, {
              key: "renderPath",
              value: (t = Ur(regeneratorRuntime.mark((function e(t) {
                  var n, r, i, o, a, s, c, u, l, f, h, d, p = this;
                  return regeneratorRuntime.wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                          case 0:
                              if (null != (n = this.getRouteMatch(t))) {
                                  e.next = 4;
                                  break
                              }
                              return this._routeMatch = null, e.abrupt("return", !1);
                          case 4:
                              if (r = n.route, i = {
                                      match: n,
                                      slot: this
                                  }, e.prev = 6, !(o = yi(this.match, n))) {
                                  e.next = 58;
                                  break
                              }
                              if (a = !1, s = Gr(Kr, "changestate", (function() {
                                      return a = !0
                                  }), {
                                      once: !0
                                  }), c = function() {
                                      s()
                                  }, u = function() {
                                      return c(), qr("navigationcancel", i), qr("navigationend", i), !1
                                  }, qr("navigationstart", i), null == r.guards) {
                                  e.next = 35;
                                  break
                              }
                              l = zr(r.guards), e.prev = 17, l.s();
                          case 19:
                              if ((f = l.n()).done) {
                                  e.next = 27;
                                  break
                              }
                              return h = f.value, e.next = 23, h(i);
                          case 23:
                              if (e.sent) {
                                  e.next = 25;
                                  break
                              }
                              return e.abrupt("return", u());
                          case 25:
                              e.next = 19;
                              break;
                          case 27:
                              e.next = 32;
                              break;
                          case 29:
                              e.prev = 29, e.t0 = e.catch(17), l.e(e.t0);
                          case 32:
                              return e.prev = 32, l.f(), e.finish(32);
                          case 35:
                              if (!fi(r)) {
                                  e.next = 41;
                                  break
                              }
                              return c(), mi(this, r), e.abrupt("return", !1);
                          case 41:
                              if (!hi(r)) {
                                  e.next = 49;
                                  break
                              }
                              return e.next = 44, r.resolve(i);
                          case 44:
                              if (e.t1 = e.sent, !1 !== e.t1) {
                                  e.next = 47;
                                  break
                              }
                              return e.abrupt("return", u());
                          case 47:
                              e.next = 57;
                              break;
                          case 49:
                              return e.next = 51, ui(r, i);
                          case 51:
                              if (d = e.sent, !a) {
                                  e.next = 54;
                                  break
                              }
                              return e.abrupt("return", u());
                          case 54:
                              this.clearChildren(), this._routeMatch = n, this.appendChild(d);
                          case 57:
                              c();
                          case 58:
                              return this._routeMatch = n, requestAnimationFrame((function() {
                                  var e;
                                  e = i, p.dispatchEvent(new CustomEvent("changestate", {
                                      detail: e
                                  }))
                              })), o && (qr("navigationsuccess", i), qr("navigationend", i)), e.abrupt("return", o);
                          case 64:
                              throw e.prev = 64, e.t2 = e.catch(6), qr("navigationerror", i), qr("navigationend", i), e.t2;
                          case 69:
                          case "end":
                              return e.stop()
                      }
                  }), e, this, [
                      [6, 64],
                      [17, 29, 32, 35]
                  ])
              }))), function(e) {
                  return t.apply(this, arguments)
              })
          }]), i
      }(Cr(HTMLElement));
      window.customElements.define(Vr, Si);
      var xi = document.createElement("template");
      xi.innerHTML = "<slot></slot>";
      var Ai, _i, Ei, Oi, Ci = function(e) {
          Ar(n, e);
          var t = _r(n);

          function n() {
              var e;
              return Lr(this, n), (e = t.call(this)).listeners = [], e._context = null, e.navigate = e.navigate.bind(Or(e)), e.updateActive = e.updateActive.bind(Or(e)), e.attachShadow({
                  mode: "open",
                  delegatesFocus: e.delegateFocus
              }).appendChild(xi.content.cloneNode(!0)), e
          }
          return jr(n, [{
              key: "path",
              get: function() {
                  return this.getAttribute("path") || "/"
              },
              set: function(e) {
                  this.setAttribute("path", e)
              }
          }, {
              key: "target",
              get: function() {
                  return this.getAttribute("target")
              }
          }, {
              key: "disabled",
              get: function() {
                  return this.hasAttribute("disabled")
              },
              set: function(e) {
                  e ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
              }
          }, {
              key: "active",
              get: function() {
                  return this.hasAttribute("active")
              },
              set: function(e) {
                  e ? this.setAttribute("active", "") : this.removeAttribute("active")
              }
          }, {
              key: "delegateFocus",
              get: function() {
                  return this.hasAttribute("delegateFocus")
              },
              set: function(e) {
                  e ? this.setAttribute("delegateFocus", "") : this.removeAttribute("delegateFocus")
              }
          }, {
              key: "preserveQuery",
              get: function() {
                  return this.hasAttribute("preservequery")
              },
              set: function(e) {
                  e ? this.setAttribute("preservequery", "") : this.removeAttribute("preservequery")
              }
          }, {
              key: "context",
              get: function() {
                  return this._context
              },
              set: function(e) {
                  this._context = e
              }
          }, {
              key: "absolutePath",
              get: function() {
                  return this.constructAbsolutePath(this.path)
              }
          }, {
              key: "connectedCallback",
              value: function() {
                  var e = this;
                  this.listeners.push(Gr(this, "click", (function(t) {
                      return e.navigate(e.path, t)
                  })), Gr(this, "keydown", (function(t) {
                      return "Enter" === t.code || "Space" === t.code ? e.navigate(e.path, t) : void 0
                  })), Gr(Kr, "navigationend", this.updateActive), Gr(Kr, "changestate", this.updateActive)), this.context = gi(this), this.setAttribute("role", "link"), this.hasAttribute("tabindex") || this.updateTabIndex()
              }
          }, {
              key: "disconnectedCallback",
              value: function() {
                  Yr(this.listeners)
              }
          }, {
              key: "attributeChangedCallback",
              value: function(e, t, n) {
                  "disabled" === e && this.updateTabIndex()
              }
          }, {
              key: "updateTabIndex",
              value: function() {
                  this.tabIndex = this.disabled ? -1 : 0
              }
          }, {
              key: "constructAbsolutePath",
              value: function(e) {
                  return null != this.context ? this.context.constructAbsolutePath(e) : si(e, {
                      end: !1
                  })
              }
          }, {
              key: "updateActive",
              value: function() {
                  var e = function(e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei();
                      return new RegExp("^".concat(ai(e), "(/|$)"), "gm").test(ai(t))
                  }(this.absolutePath);
                  e !== this.active && (this.active = e)
              }
          }, {
              key: "navigate",
              value: function(e, t) {
                  if (null != t && this.disabled) return t.preventDefault(), void t.stopPropagation();
                  var n = this.preserveQuery ? oi() : "",
                      r = "".concat(this.absolutePath).concat(n);
                  this.target ? window.open(r, this.target) : t instanceof MouseEvent && t.metaKey ? window.open(r, "_blank") : history.pushState(null, "", r)
              }
          }], [{
              key: "observedAttributes",
              get: function() {
                  return ["disabled"]
              }
          }]), n
      }(Cr(HTMLElement));

      function Pi(e, t, n, r, i, o, a) {
          try {
              var s = e[o](a),
                  c = s.value
          } catch (e) {
              return void n(e)
          }
          s.done ? t(c) : Promise.resolve(c).then(r, i)
      }

      function Ii(e, t) {
          return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
              raw: {
                  value: Object.freeze(t)
              }
          }))
      }

      function Ri(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function $i(e, t) {
          return ($i = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t, e
          })(e, t)
      }

      function Li(e) {
          var t = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
              } catch (e) {
                  return !1
              }
          }();
          return function() {
              var n, r = Mi(e);
              if (t) {
                  var i = Mi(this).constructor;
                  n = Reflect.construct(r, arguments, i)
              } else n = r.apply(this, arguments);
              return Ti(this, n)
          }
      }

      function Ti(e, t) {
          return !t || "object" !== Ui(t) && "function" != typeof t ? ji(e) : t
      }

      function ji(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }

      function Mi(e) {
          return (Mi = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
      }

      function Ui(e) {
          return (Ui = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          } : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
      }

      function Ni() {
          Ni = function() {
              return e
          };
          var e = {
              elementsDefinitionOrder: [
                  ["method"],
                  ["field"]
              ],
              initializeInstanceElements: function(e, t) {
                  ["method", "field"].forEach((function(n) {
                      t.forEach((function(t) {
                          t.kind === n && "own" === t.placement && this.defineClassElement(e, t)
                      }), this)
                  }), this)
              },
              initializeClassElements: function(e, t) {
                  var n = e.prototype;
                  ["method", "field"].forEach((function(r) {
                      t.forEach((function(t) {
                          var i = t.placement;
                          if (t.kind === r && ("static" === i || "prototype" === i)) {
                              var o = "static" === i ? e : n;
                              this.defineClassElement(o, t)
                          }
                      }), this)
                  }), this)
              },
              defineClassElement: function(e, t) {
                  var n = t.descriptor;
                  if ("field" === t.kind) {
                      var r = t.initializer;
                      n = {
                          enumerable: n.enumerable,
                          writable: n.writable,
                          configurable: n.configurable,
                          value: void 0 === r ? void 0 : r.call(e)
                      }
                  }
                  Object.defineProperty(e, t.key, n)
              },
              decorateClass: function(e, t) {
                  var n = [],
                      r = [],
                      i = {
                          static: [],
                          prototype: [],
                          own: []
                      };
                  if (e.forEach((function(e) {
                          this.addElementPlacement(e, i)
                      }), this), e.forEach((function(e) {
                          if (!Di(e)) return n.push(e);
                          var t = this.decorateElement(e, i);
                          n.push(t.element), n.push.apply(n, t.extras), r.push.apply(r, t.finishers)
                      }), this), !t) return {
                      elements: n,
                      finishers: r
                  };
                  var o = this.decorateConstructor(n, t);
                  return r.push.apply(r, o.finishers), o.finishers = r, o
              },
              addElementPlacement: function(e, t, n) {
                  var r = t[e.placement];
                  if (!n && -1 !== r.indexOf(e.key)) throw new TypeError("Duplicated element (" + e.key + ")");
                  r.push(e.key)
              },
              decorateElement: function(e, t) {
                  for (var n = [], r = [], i = e.decorators, o = i.length - 1; o >= 0; o--) {
                      var a = t[e.placement];
                      a.splice(a.indexOf(e.key), 1);
                      var s = this.fromElementDescriptor(e),
                          c = this.toElementFinisherExtras((0, i[o])(s) || s);
                      e = c.element, this.addElementPlacement(e, t), c.finisher && r.push(c.finisher);
                      var u = c.extras;
                      if (u) {
                          for (var l = 0; l < u.length; l++) this.addElementPlacement(u[l], t);
                          n.push.apply(n, u)
                      }
                  }
                  return {
                      element: e,
                      finishers: r,
                      extras: n
                  }
              },
              decorateConstructor: function(e, t) {
                  for (var n = [], r = t.length - 1; r >= 0; r--) {
                      var i = this.fromClassDescriptor(e),
                          o = this.toClassDescriptor((0, t[r])(i) || i);
                      if (void 0 !== o.finisher && n.push(o.finisher), void 0 !== o.elements) {
                          e = o.elements;
                          for (var a = 0; a < e.length - 1; a++)
                              for (var s = a + 1; s < e.length; s++)
                                  if (e[a].key === e[s].key && e[a].placement === e[s].placement) throw new TypeError("Duplicated element (" + e[a].key + ")")
                      }
                  }
                  return {
                      elements: e,
                      finishers: n
                  }
              },
              fromElementDescriptor: function(e) {
                  var t = {
                      kind: e.kind,
                      key: e.key,
                      placement: e.placement,
                      descriptor: e.descriptor
                  };
                  return Object.defineProperty(t, Symbol.toStringTag, {
                      value: "Descriptor",
                      configurable: !0
                  }), "field" === e.kind && (t.initializer = e.initializer), t
              },
              toElementDescriptors: function(e) {
                  var t;
                  if (void 0 !== e) return (t = e, function(e) {
                      if (Array.isArray(e)) return e
                  }(t) || function(e) {
                      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                  }(t) || function(e, t) {
                      if (e) {
                          if ("string" == typeof e) return Vi(e, t);
                          var n = Object.prototype.toString.call(e).slice(8, -1);
                          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Vi(e, t) : void 0
                      }
                  }(t) || function() {
                      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                  }()).map((function(e) {
                      var t = this.toElementDescriptor(e);
                      return this.disallowProperty(e, "finisher", "An element descriptor"), this.disallowProperty(e, "extras", "An element descriptor"), t
                  }), this)
              },
              toElementDescriptor: function(e) {
                  var t = String(e.kind);
                  if ("method" !== t && "field" !== t) throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' + t + '"');
                  var n = Wi(e.key),
                      r = String(e.placement);
                  if ("static" !== r && "prototype" !== r && "own" !== r) throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' + r + '"');
                  var i = e.descriptor;
                  this.disallowProperty(e, "elements", "An element descriptor");
                  var o = {
                      kind: t,
                      key: n,
                      placement: r,
                      descriptor: Object.assign({}, i)
                  };
                  return "field" !== t ? this.disallowProperty(e, "initializer", "A method descriptor") : (this.disallowProperty(i, "get", "The property descriptor of a field descriptor"), this.disallowProperty(i, "set", "The property descriptor of a field descriptor"), this.disallowProperty(i, "value", "The property descriptor of a field descriptor"), o.initializer = e.initializer), o
              },
              toElementFinisherExtras: function(e) {
                  return {
                      element: this.toElementDescriptor(e),
                      finisher: Fi(e, "finisher"),
                      extras: this.toElementDescriptors(e.extras)
                  }
              },
              fromClassDescriptor: function(e) {
                  var t = {
                      kind: "class",
                      elements: e.map(this.fromElementDescriptor, this)
                  };
                  return Object.defineProperty(t, Symbol.toStringTag, {
                      value: "Descriptor",
                      configurable: !0
                  }), t
              },
              toClassDescriptor: function(e) {
                  var t = String(e.kind);
                  if ("class" !== t) throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' + t + '"');
                  this.disallowProperty(e, "key", "A class descriptor"), this.disallowProperty(e, "placement", "A class descriptor"), this.disallowProperty(e, "descriptor", "A class descriptor"), this.disallowProperty(e, "initializer", "A class descriptor"), this.disallowProperty(e, "extras", "A class descriptor");
                  var n = Fi(e, "finisher");
                  return {
                      elements: this.toElementDescriptors(e.elements),
                      finisher: n
                  }
              },
              runClassFinishers: function(e, t) {
                  for (var n = 0; n < t.length; n++) {
                      var r = (0, t[n])(e);
                      if (void 0 !== r) {
                          if ("function" != typeof r) throw new TypeError("Finishers must return a constructor.");
                          e = r
                      }
                  }
                  return e
              },
              disallowProperty: function(e, t, n) {
                  if (void 0 !== e[t]) throw new TypeError(n + " can't have a ." + t + " property.")
              }
          };
          return e
      }

      function Bi(e) {
          var t, n = Wi(e.key);
          "method" === e.kind ? t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
          } : "get" === e.kind ? t = {
              get: e.value,
              configurable: !0,
              enumerable: !1
          } : "set" === e.kind ? t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
          } : "field" === e.kind && (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
          });
          var r = {
              kind: "field" === e.kind ? "field" : "method",
              key: n,
              placement: e.static ? "static" : "field" === e.kind ? "own" : "prototype",
              descriptor: t
          };
          return e.decorators && (r.decorators = e.decorators), "field" === e.kind && (r.initializer = e.value), r
      }

      function zi(e, t) {
          void 0 !== e.descriptor.get ? t.descriptor.get = e.descriptor.get : t.descriptor.set = e.descriptor.set
      }

      function Di(e) {
          return e.decorators && e.decorators.length
      }

      function Hi(e) {
          return void 0 !== e && !(void 0 === e.value && void 0 === e.writable)
      }

      function Fi(e, t) {
          var n = e[t];
          if (void 0 !== n && "function" != typeof n) throw new TypeError("Expected '" + t + "' to be a function");
          return n
      }

      function Wi(e) {
          var t = function(e, t) {
              if ("object" !== Ui(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                  var r = n.call(e, t || "default");
                  if ("object" !== Ui(r)) return r;
                  throw new TypeError("@@toPrimitive must return a primitive value.")
              }
              return ("string" === t ? String : Number)(e)
          }(e, "string");
          return "symbol" === Ui(t) ? t : String(t)
      }

      function Vi(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r
      }
      window.customElements.define("router-link", Ci);
      ! function(e, t, n, r) {
          var i = Ni();
          if (r)
              for (var o = 0; o < r.length; o++) i = r[o](i);
          var a = t((function(e) {
                  i.initializeInstanceElements(e, s.elements)
              }), n),
              s = i.decorateClass(function(e) {
                  for (var t = [], n = function(e) {
                          return "method" === e.kind && e.key === o.key && e.placement === o.placement
                      }, r = 0; r < e.length; r++) {
                      var i, o = e[r];
                      if ("method" === o.kind && (i = t.find(n)))
                          if (Hi(o.descriptor) || Hi(i.descriptor)) {
                              if (Di(o) || Di(i)) throw new ReferenceError("Duplicated methods (" + o.key + ") can't be decorated.");
                              i.descriptor = o.descriptor
                          } else {
                              if (Di(o)) {
                                  if (Di(i)) throw new ReferenceError("Decorators can't be placed on different accessors with for the same property (" + o.key + ").");
                                  i.decorators = o.decorators
                              }
                              zi(o, i)
                          }
                      else t.push(o)
                  }
                  return t
              }(a.d.map(Bi)), e);
          i.initializeClassElements(a.F, s.elements), i.runClassFinishers(a.F, s.finishers)
      }([Object(it.a)("horizontal-activity-indicator")], (function(e, t) {
          var n, r;
          return {
              F: function(t) {
                  ! function(e, t) {
                      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                      e.prototype = Object.create(t && t.prototype, {
                          constructor: {
                              value: e,
                              writable: !0,
                              configurable: !0
                          }
                      }), t && $i(e, t)
                  }(r, t);
                  var n = Li(r);

                  function r() {
                      var t;
                      Ri(this, r);
                      for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                      return t = n.call.apply(n, [this].concat(o)), e(ji(t)), t
                  }
                  return r
              }(t),
              d: [{
                  kind: "field",
                  decorators: [Object(it.b)({
                      type: Object
                  })],
                  key: "resizeObserver",
                  value: void 0
              }, {
                  kind: "field",
                  decorators: [Object(it.b)({
                      type: Boolean
                  })],
                  key: "adjustSpeedForWidth",
                  value: function() {
                      return !0
                  }
              }, {
                  kind: "field",
                  decorators: [Object(it.c)(".track")],
                  key: "track",
                  value: void 0
              }, {
                  kind: "method",
                  key: "render",
                  value: function() {
                      return Object(rt.c)(Ai || (Ai = Ii(['\n      <div class="track">\n        <div class="bar"></div>\n      </div>\n    '])))
                  }
              }, {
                  kind: "method",
                  key: "updated",
                  value: function(e) {
                      var t = e.get("resizeObserver");
                      t && t.removeObserver({
                          handler: this,
                          target: this.track
                      }), (e.has("adjustSpeedForWidth") || e.has("resizeObserver")) && (this.adjustSpeedForWidth ? this.setupResizeObserver() : this.disconnectResizeObserver())
                  }
              }, {
                  kind: "method",
                  key: "handleResize",
                  value: function(e) {
                      var t = e.contentRect.width;
                      switch (e.target) {
                          case this.track:
                              this.updateLoaderSpeed(t)
                      }
                  }
              }, {
                  kind: "method",
                  key: "disconnectedCallback",
                  value: function() {
                      this.disconnectResizeObserver()
                  }
              }, {
                  kind: "method",
                  key: "updateLoaderSpeed",
                  value: function(e) {
                      var t, n, r = Math.max(e / 200, 3);
                      null == (n = null == (t = this.shadowRoot) ? void 0 : t.host) || n.style.setProperty("--horizontalActivityIndicatorDuration", r + "s")
                  }
              }, {
                  kind: "method",
                  key: "disconnectResizeObserver",
                  value: function() {
                      var e;
                      null == (e = this.resizeObserver) || e.removeObserver({
                          handler: this,
                          target: this.track
                      })
                  }
              }, {
                  kind: "method",
                  key: "setupResizeObserver",
                  value: (n = regeneratorRuntime.mark((function e() {
                      var t;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  null == (t = this.resizeObserver) || t.addObserver({
                                      handler: this,
                                      target: this.track
                                  });
                              case 1:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  })), r = function() {
                      var e = this,
                          t = arguments;
                      return new Promise((function(r, i) {
                          var o = n.apply(e, t);

                          function a(e) {
                              Pi(o, r, i, a, s, "next", e)
                          }

                          function s(e) {
                              Pi(o, r, i, a, s, "throw", e)
                          }
                          a(void 0)
                      }))
                  }, function() {
                      return r.apply(this, arguments)
                  })
              }, {
                  kind: "get",
                  static: !0,
                  key: "styles",
                  value: function() {
                      var e = Object(rt.b)(_i || (_i = Ii(["var(--horizontalActivityIndicatorColor, dodgerblue)"]))),
                          t = Object(rt.b)(Ei || (Ei = Ii(["var(--horizontalActivityIndicatorDuration, 7.5s)"])));
                      return Object(rt.b)(Oi || (Oi = Ii(["\n      :host {\n        display: block;\n      }\n\n      @keyframes loader-animation {\n        0% {\n          left: -100%;\n          width: 100%;\n        }\n        49% {\n          left: 100%;\n          width: 10%;\n        }\n        50% {\n          left: 100%;\n          width: 100%;\n        }\n        100% {\n          left: -10%;\n          width: 10%;\n        }\n      }\n\n      .track {\n        height: 100%;\n        width: 100%;\n        overflow: hidden;\n      }\n\n      .track .bar {\n        position: relative;\n        height: 100%;\n        background-color: ", ";\n        animation-name: loader-animation;\n        animation-duration: ", ";\n        animation-iteration-count: infinite;\n        animation-timing-function: ease-in-out;\n      }\n    "])), e, t)
                  }
              }]
          }
      }), rt.a);
      var Ki = n(147),
          qi = n(49),
          Gi = n(99);

      function Yi(e, t, n, r, i, o, a) {
          try {
              var s = e[o](a),
                  c = s.value
          } catch (e) {
              return void n(e)
          }
          s.done ? t(c) : Promise.resolve(c).then(r, i)
      }

      function Zi(e) {
          return function() {
              var t = this,
                  n = arguments;
              return new Promise((function(r, i) {
                  var o = e.apply(t, n);

                  function a(e) {
                      Yi(o, r, i, a, s, "next", e)
                  }

                  function s(e) {
                      Yi(o, r, i, a, s, "throw", e)
                  }
                  a(void 0)
              }))
          }
      }

      function Ji(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
      }

      function Qi(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n, e
      }
      var Xi = function() {
          function e(t) {
              ! function(e, t) {
                  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
              }(this, e), Qi(this, "ownerId", "donationBannerHandler"), Qi(this, "baseUrl", void 0), this.baseUrl = t.baseUrl
          }
          var t, n, r, i, o, a;
          return t = e, (n = [{
              key: "pageNavigationOccurred",
              value: (a = Zi(regeneratorRuntime.mark((function e() {
                  var t, n = arguments;
                  return regeneratorRuntime.wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                          case 0:
                              if (t = !(n.length > 0 && void 0 !== n[0]) || n[0], !window.location.pathname.startsWith("/donate") && t) {
                                  e.next = 5;
                                  break
                              }
                              return e.next = 4, this.removeDonationBanner();
                          case 4:
                              return e.abrupt("return");
                          case 5:
                              return e.next = 7, this.addDonationBanner();
                          case 7:
                          case "end":
                              return e.stop()
                      }
                  }), e, this)
              }))), function() {
                  return a.apply(this, arguments)
              })
          }, {
              key: "removeDonationBanner",
              value: (o = Zi(regeneratorRuntime.mark((function e() {
                  var t;
                  return regeneratorRuntime.wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                          case 0:
                              null == (t = this.bannerContainer) || t.remove();
                          case 1:
                          case "end":
                              return e.stop()
                      }
                  }), e, this)
              }))), function() {
                  return o.apply(this, arguments)
              })
          }, {
              key: "addDonationBanner",
              value: (i = Zi(regeneratorRuntime.mark((function e() {
                  var t, n, r;
                  return regeneratorRuntime.wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                          case 0:
                              if (!this.bannerContainer) {
                                  e.next = 2;
                                  break
                              }
                              return e.abrupt("return");
                          case 2:
                              (t = document.createElement("div")).dataset.owner = this.ownerId, (n = document.createElement("div")).id = "donato", (r = document.createElement("script")).type = "text/javascript", r.src = "https://".concat(this.baseUrl, "/includes/donate.js"), t.appendChild(n), t.appendChild(r), document.body.prepend(t);
                          case 12:
                          case "end":
                              return e.stop()
                      }
                  }), e, this)
              }))), function() {
                  return i.apply(this, arguments)
              })
          }, {
              key: "bannerContainer",
              get: function() {
                  return document.body.querySelector("[data-owner=".concat(this.ownerId, "]"))
              }
          }]) && Ji(t.prototype, n), r && Ji(t, r), e
      }();

      function eo(e, t, n, r, i, o, a) {
          try {
              var s = e[o](a),
                  c = s.value
          } catch (e) {
              return void n(e)
          }
          s.done ? t(c) : Promise.resolve(c).then(r, i)
      }

      function to(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
      }

      function no(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n, e
      }
      var ro = function() {
              function e(t) {
                  ! function(e, t) {
                      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                  }(this, e), no(this, "fetchHandler", void 0), no(this, "endpoint", "/services/donations/banner.php"), this.fetchHandler = t.fetchHandler
              }
              var t, n, r, i, o;
              return t = e, (n = [{
                  key: "getBannerConfig",
                  value: (i = regeneratorRuntime.mark((function e(t) {
                      var n, r, i, o;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return n = new URLSearchParams, (null == t ? void 0 : t.ymd) && n.append("ymd", t.ymd), (null == t ? void 0 : t.variant) && n.append("variant", t.variant), (null == t ? void 0 : t.platform) && n.append("platform", t.platform), (null == t ? void 0 : t.recacheDonationBanner) && n.append("recacheDonationBanner", t.recacheDonationBanner), r = this.endpoint, (i = n.toString()).length > 0 && (r = "".concat(r, "?").concat(i)), e.next = 10, this.fetchHandler.fetchIAApiResponse(r, {
                                      includeCredentials: !0
                                  });
                              case 10:
                                  return o = e.sent, e.abrupt("return", o.value);
                              case 12:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  })), o = function() {
                      var e = this,
                          t = arguments;
                      return new Promise((function(n, r) {
                          var o = i.apply(e, t);

                          function a(e) {
                              eo(o, n, r, a, s, "next", e)
                          }

                          function s(e) {
                              eo(o, n, r, a, s, "throw", e)
                          }
                          a(void 0)
                      }))
                  }, function(e) {
                      return o.apply(this, arguments)
                  })
              }]) && to(t.prototype, n), r && to(t, r), e
          }(),
          io = n(18),
          oo = n(180);

      function ao(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
      }

      function so(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n, e
      }
      var co, uo, lo, fo, ho, po, vo, mo, yo, go, bo = function() {
              function e(t) {
                  var n = this;
                  ! function(e, t) {
                      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                  }(this, e), so(this, "appServices", void 0), so(this, "accountRouteResolver", (function(e) {
                      return Object(oo.a)(n.appServices, e.match.params.tab), !1
                  })), this.appServices = t
              }
              var t, r, i;
              return t = e, (r = [{
                  key: "appRoutes",
                  get: function() {
                      var e = this;
                      return [{
                          path: "donate",
                          pathMatch: "full",
                          component: function() {
                              return Object(io.a)((function() {
                                  return Promise.all([n.e(0), n.e(14)]).then(n.bind(null, 385))
                              }))
                          },
                          setup: function(t, n) {
                              var r = t,
                                  i = document.createElement("slot");
                              i.name = "donation-form-slot", i.slot = "donation-form-slot", setTimeout((function() {
                                  r.appendChild(i), r.appServices = e.appServices
                              }), 0)
                          }
                      }, {
                          path: "/details/:id",
                          component: function() {
                              return Promise.all([n.e(0), n.e(51)]).then(n.bind(null, 391))
                          },
                          setup: function(t, n) {
                              var r = decodeURIComponent(n.match.params.id),
                                  i = t;
                              i.appServices = e.appServices, i.identifier = r
                          }
                      }, {
                          path: "/collection/:id",
                          resolve: function(e) {
                              var t = e.match.params.id;
                              return history.replaceState(history.state, "", "/details/".concat(t).concat(window.location.search)), !1
                          }
                      }, {
                          path: "/account/:tab",
                          resolve: this.accountRouteResolver
                      }, {
                          path: "/account",
                          resolve: this.accountRouteResolver
                      }, {
                          path: "/search",
                          component: function() {
                              return Object(io.a)((function() {
                                  return Promise.all([n.e(0), n.e(39)]).then(n.bind(null, 388))
                              }))
                          },
                          setup: function(t, n) {
                              t.appServices = e.appServices
                          }
                      }, {
                          path: "/$",
                          component: function() {
                              return Object(io.a)((function() {
                                  return Promise.all([n.e(0), n.e(22)]).then(n.bind(null, 382))
                              }))
                          },
                          setup: function(t, n) {
                              t.appServices = e.appServices
                          }
                      }]
                  }
              }]) && ao(t.prototype, r), i && ao(t, i), e
          }(),
          wo = n(153);

      function ko(e, t) {
          return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
              raw: {
                  value: Object.freeze(t)
              }
          }))
      }

      function So(e, t) {
          return function(e) {
              if (Array.isArray(e)) return e
          }(e) || function(e, t) {
              if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
              var n = [],
                  r = !0,
                  i = !1,
                  o = void 0;
              try {
                  for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
              } catch (e) {
                  i = !0, o = e
              } finally {
                  try {
                      r || null == s.return || s.return()
                  } finally {
                      if (i) throw o
                  }
              }
              return n
          }(e, t) || function(e, t) {
              if (!e) return;
              if ("string" == typeof e) return xo(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return xo(e, t)
          }(e, t) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
      }

      function xo(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r
      }

      function Ao(e, t, n, r, i, o, a) {
          try {
              var s = e[o](a),
                  c = s.value
          } catch (e) {
              return void n(e)
          }
          s.done ? t(c) : Promise.resolve(c).then(r, i)
      }

      function _o(e) {
          return function() {
              var t = this,
                  n = arguments;
              return new Promise((function(r, i) {
                  var o = e.apply(t, n);

                  function a(e) {
                      Ao(o, r, i, a, s, "next", e)
                  }

                  function s(e) {
                      Ao(o, r, i, a, s, "throw", e)
                  }
                  a(void 0)
              }))
          }
      }

      function Eo(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function Oo(e, t) {
          return (Oo = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t, e
          })(e, t)
      }

      function Co(e) {
          var t = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
              } catch (e) {
                  return !1
              }
          }();
          return function() {
              var n, r = Ro(e);
              if (t) {
                  var i = Ro(this).constructor;
                  n = Reflect.construct(r, arguments, i)
              } else n = r.apply(this, arguments);
              return Po(this, n)
          }
      }

      function Po(e, t) {
          return !t || "object" !== $o(t) && "function" != typeof t ? Io(e) : t
      }

      function Io(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }

      function Ro(e) {
          return (Ro = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
      }

      function $o(e) {
          return ($o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          } : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
      }
      var Lo = Object.assign;

      function To() {
          To = function() {
              return e
          };
          var e = {
              elementsDefinitionOrder: [
                  ["method"],
                  ["field"]
              ],
              initializeInstanceElements: function(e, t) {
                  ["method", "field"].forEach((function(n) {
                      t.forEach((function(t) {
                          t.kind === n && "own" === t.placement && this.defineClassElement(e, t)
                      }), this)
                  }), this)
              },
              initializeClassElements: function(e, t) {
                  var n = e.prototype;
                  ["method", "field"].forEach((function(r) {
                      t.forEach((function(t) {
                          var i = t.placement;
                          if (t.kind === r && ("static" === i || "prototype" === i)) {
                              var o = "static" === i ? e : n;
                              this.defineClassElement(o, t)
                          }
                      }), this)
                  }), this)
              },
              defineClassElement: function(e, t) {
                  var n = t.descriptor;
                  if ("field" === t.kind) {
                      var r = t.initializer;
                      n = {
                          enumerable: n.enumerable,
                          writable: n.writable,
                          configurable: n.configurable,
                          value: void 0 === r ? void 0 : r.call(e)
                      }
                  }
                  Object.defineProperty(e, t.key, n)
              },
              decorateClass: function(e, t) {
                  var n = [],
                      r = [],
                      i = {
                          static: [],
                          prototype: [],
                          own: []
                      };
                  if (e.forEach((function(e) {
                          this.addElementPlacement(e, i)
                      }), this), e.forEach((function(e) {
                          if (!Uo(e)) return n.push(e);
                          var t = this.decorateElement(e, i);
                          n.push(t.element), n.push.apply(n, t.extras), r.push.apply(r, t.finishers)
                      }), this), !t) return {
                      elements: n,
                      finishers: r
                  };
                  var o = this.decorateConstructor(n, t);
                  return r.push.apply(r, o.finishers), o.finishers = r, o
              },
              addElementPlacement: function(e, t, n) {
                  var r = t[e.placement];
                  if (!n && -1 !== r.indexOf(e.key)) throw new TypeError("Duplicated element (" + e.key + ")");
                  r.push(e.key)
              },
              decorateElement: function(e, t) {
                  for (var n = [], r = [], i = e.decorators, o = i.length - 1; o >= 0; o--) {
                      var a = t[e.placement];
                      a.splice(a.indexOf(e.key), 1);
                      var s = this.fromElementDescriptor(e),
                          c = this.toElementFinisherExtras((0, i[o])(s) || s);
                      e = c.element, this.addElementPlacement(e, t), c.finisher && r.push(c.finisher);
                      var u = c.extras;
                      if (u) {
                          for (var l = 0; l < u.length; l++) this.addElementPlacement(u[l], t);
                          n.push.apply(n, u)
                      }
                  }
                  return {
                      element: e,
                      finishers: r,
                      extras: n
                  }
              },
              decorateConstructor: function(e, t) {
                  for (var n = [], r = t.length - 1; r >= 0; r--) {
                      var i = this.fromClassDescriptor(e),
                          o = this.toClassDescriptor((0, t[r])(i) || i);
                      if (void 0 !== o.finisher && n.push(o.finisher), void 0 !== o.elements) {
                          e = o.elements;
                          for (var a = 0; a < e.length - 1; a++)
                              for (var s = a + 1; s < e.length; s++)
                                  if (e[a].key === e[s].key && e[a].placement === e[s].placement) throw new TypeError("Duplicated element (" + e[a].key + ")")
                      }
                  }
                  return {
                      elements: e,
                      finishers: n
                  }
              },
              fromElementDescriptor: function(e) {
                  var t = {
                      kind: e.kind,
                      key: e.key,
                      placement: e.placement,
                      descriptor: e.descriptor
                  };
                  return Object.defineProperty(t, Symbol.toStringTag, {
                      value: "Descriptor",
                      configurable: !0
                  }), "field" === e.kind && (t.initializer = e.initializer), t
              },
              toElementDescriptors: function(e) {
                  var t;
                  if (void 0 !== e) return (t = e, function(e) {
                      if (Array.isArray(e)) return e
                  }(t) || function(e) {
                      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                  }(t) || function(e, t) {
                      if (e) {
                          if ("string" == typeof e) return Do(e, t);
                          var n = Object.prototype.toString.call(e).slice(8, -1);
                          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Do(e, t) : void 0
                      }
                  }(t) || function() {
                      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                  }()).map((function(e) {
                      var t = this.toElementDescriptor(e);
                      return this.disallowProperty(e, "finisher", "An element descriptor"), this.disallowProperty(e, "extras", "An element descriptor"), t
                  }), this)
              },
              toElementDescriptor: function(e) {
                  var t = String(e.kind);
                  if ("method" !== t && "field" !== t) throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' + t + '"');
                  var n = zo(e.key),
                      r = String(e.placement);
                  if ("static" !== r && "prototype" !== r && "own" !== r) throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' + r + '"');
                  var i = e.descriptor;
                  this.disallowProperty(e, "elements", "An element descriptor");
                  var o = {
                      kind: t,
                      key: n,
                      placement: r,
                      descriptor: Object.assign({}, i)
                  };
                  return "field" !== t ? this.disallowProperty(e, "initializer", "A method descriptor") : (this.disallowProperty(i, "get", "The property descriptor of a field descriptor"), this.disallowProperty(i, "set", "The property descriptor of a field descriptor"), this.disallowProperty(i, "value", "The property descriptor of a field descriptor"), o.initializer = e.initializer), o
              },
              toElementFinisherExtras: function(e) {
                  return {
                      element: this.toElementDescriptor(e),
                      finisher: Bo(e, "finisher"),
                      extras: this.toElementDescriptors(e.extras)
                  }
              },
              fromClassDescriptor: function(e) {
                  var t = {
                      kind: "class",
                      elements: e.map(this.fromElementDescriptor, this)
                  };
                  return Object.defineProperty(t, Symbol.toStringTag, {
                      value: "Descriptor",
                      configurable: !0
                  }), t
              },
              toClassDescriptor: function(e) {
                  var t = String(e.kind);
                  if ("class" !== t) throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' + t + '"');
                  this.disallowProperty(e, "key", "A class descriptor"), this.disallowProperty(e, "placement", "A class descriptor"), this.disallowProperty(e, "descriptor", "A class descriptor"), this.disallowProperty(e, "initializer", "A class descriptor"), this.disallowProperty(e, "extras", "A class descriptor");
                  var n = Bo(e, "finisher");
                  return {
                      elements: this.toElementDescriptors(e.elements),
                      finisher: n
                  }
              },
              runClassFinishers: function(e, t) {
                  for (var n = 0; n < t.length; n++) {
                      var r = (0, t[n])(e);
                      if (void 0 !== r) {
                          if ("function" != typeof r) throw new TypeError("Finishers must return a constructor.");
                          e = r
                      }
                  }
                  return e
              },
              disallowProperty: function(e, t, n) {
                  if (void 0 !== e[t]) throw new TypeError(n + " can't have a ." + t + " property.")
              }
          };
          return e
      }

      function jo(e) {
          var t, n = zo(e.key);
          "method" === e.kind ? t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
          } : "get" === e.kind ? t = {
              get: e.value,
              configurable: !0,
              enumerable: !1
          } : "set" === e.kind ? t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
          } : "field" === e.kind && (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
          });
          var r = {
              kind: "field" === e.kind ? "field" : "method",
              key: n,
              placement: e.static ? "static" : "field" === e.kind ? "own" : "prototype",
              descriptor: t
          };
          return e.decorators && (r.decorators = e.decorators), "field" === e.kind && (r.initializer = e.value), r
      }

      function Mo(e, t) {
          void 0 !== e.descriptor.get ? t.descriptor.get = e.descriptor.get : t.descriptor.set = e.descriptor.set
      }

      function Uo(e) {
          return e.decorators && e.decorators.length
      }

      function No(e) {
          return void 0 !== e && !(void 0 === e.value && void 0 === e.writable)
      }

      function Bo(e, t) {
          var n = e[t];
          if (void 0 !== n && "function" != typeof n) throw new TypeError("Expected '" + t + "' to be a function");
          return n
      }

      function zo(e) {
          var t = function(e, t) {
              if ("object" !== $o(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                  var r = n.call(e, t || "default");
                  if ("object" !== $o(r)) return r;
                  throw new TypeError("@@toPrimitive must return a primitive value.")
              }
              return ("string" === t ? String : Number)(e)
          }(e, "string");
          return "symbol" === $o(t) ? t : String(t)
      }

      function Do(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r
      }! function(e, t, n, r) {
          var i = To();
          if (r)
              for (var o = 0; o < r.length; o++) i = r[o](i);
          var a = t((function(e) {
                  i.initializeInstanceElements(e, s.elements)
              }), n),
              s = i.decorateClass(function(e) {
                  for (var t = [], n = function(e) {
                          return "method" === e.kind && e.key === o.key && e.placement === o.placement
                      }, r = 0; r < e.length; r++) {
                      var i, o = e[r];
                      if ("method" === o.kind && (i = t.find(n)))
                          if (No(o.descriptor) || No(i.descriptor)) {
                              if (Uo(o) || Uo(i)) throw new ReferenceError("Duplicated methods (" + o.key + ") can't be decorated.");
                              i.descriptor = o.descriptor
                          } else {
                              if (Uo(o)) {
                                  if (Uo(i)) throw new ReferenceError("Decorators can't be placed on different accessors with for the same property (" + o.key + ").");
                                  i.decorators = o.decorators
                              }
                              Mo(o, i)
                          }
                      else t.push(o)
                  }
                  return t
              }(a.d.map(jo)), e);
          i.initializeClassElements(a.F, s.elements), i.runClassFinishers(a.F, s.finishers)
      }([Object(it.a)("app-root")], (function(e, t) {
          var i, o, a, s, c, u, l, f, h, d, p, v, m, y, g, b, w, k, S, x, A, _, E, O, C, P, I, R, $;
          return {
              F: function(t) {
                  ! function(e, t) {
                      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                      e.prototype = Object.create(t && t.prototype, {
                          constructor: {
                              value: e,
                              writable: !0,
                              configurable: !0
                          }
                      }), t && Oo(e, t)
                  }(r, t);
                  var n = Co(r);

                  function r() {
                      var t;
                      Eo(this, r);
                      for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                      return t = n.call.apply(n, [this].concat(o)), e(Io(t)), t
                  }
                  return r
              }(t),
              d: [{
                  kind: "field",
                  decorators: [Object(it.b)({
                      type: Object
                  })],
                  key: "appServices",
                  value: function() {
                      var e, t = this;
                      return new Gi.a({
                          generator: (e = _o(regeneratorRuntime.mark((function e() {
                              var r;
                              return regeneratorRuntime.wrap((function(e) {
                                  for (;;) switch (e.prev = e.next) {
                                      case 0:
                                          return e.next = 2, Object(io.a)((function() {
                                              return n.e(4).then(n.bind(null, 367))
                                          }));
                                      case 2:
                                          return r = e.sent, e.abrupt("return", r.AppServices.generateAppServices({
                                              appRoot: t,
                                              appConfig: t.appConfig,
                                              modalManager: new Gi.a({
                                                  generator: function() {
                                                      var e = _o(regeneratorRuntime.mark((function e() {
                                                          return regeneratorRuntime.wrap((function(e) {
                                                              for (;;) switch (e.prev = e.next) {
                                                                  case 0:
                                                                      return e.abrupt("return", t.modalManager);
                                                                  case 1:
                                                                  case "end":
                                                                      return e.stop()
                                                              }
                                                          }), e)
                                                      })));
                                                      return function() {
                                                          return e.apply(this, arguments)
                                                      }
                                                  }()
                                              })
                                          }));
                                      case 4:
                                      case "end":
                                          return e.stop()
                                  }
                              }), e)
                          }))), function() {
                              return e.apply(this, arguments)
                          })
                      })
                  }
              }, {
                  kind: "field",
                  decorators: [Object(it.b)({
                      type: Object
                  })],
                  key: "appConfig",
                  value: function() {
                      return new Gi.a({
                          generator: (e = _o(regeneratorRuntime.mark((function e() {
                              var t, n, i, o, a, s, c, u;
                              return regeneratorRuntime.wrap((function(e) {
                                  for (;;) switch (e.prev = e.next) {
                                      case 0:
                                          return t = r, n = new URLSearchParams(window.location.search), i = n.get("prerender"), o = "1" === i, a = "true" === t.SNOWPACK_PUBLIC_TESTING, s = "true" === t.SNOWPACK_PUBLIC_SUPPRESS_FACETS, c = parseFloat(t.SNOWPACK_PUBLIC_SENTRY_TRACES_SAMPLE_RATE), u = parseFloat(t.SNOWPACK_PUBLIC_SENTRY_ERROR_SAMPLE_RATE), e.abrupt("return", {
                                              environment: t.SNOWPACK_PUBLIC_ENVIRONMENT,
                                              documentReferrer: document.referrer,
                                              basePath: t.SNOWPACK_PUBLIC_BASE_PATH,
                                              version: t.SNOWPACK_PUBLIC_VERSION,
                                              archiveNavUrl: t.SNOWPACK_PUBLIC_ARCHIVE_NAV_URL,
                                              archiveApiUrl: t.SNOWPACK_PUBLIC_ARCHIVE_API_URL,
                                              waybackUrl: t.SNOWPACK_PUBLIC_WAYBACK_URL,
                                              waybackSearchUrl: t.SNOWPACK_PUBLIC_WAYBACK_SEARCH_URL,
                                              tvSearchUrl: t.SNOWPACK_PUBLIC_TV_SEARCH_URL,
                                              radioSearchUrl: t.SNOWPACK_PUBLIC_RADIO_SEARCH_URL,
                                              archiveItCollectionSearchUrl: t.SNOWPACK_PUBLIC_ARCHIVE_IT_COLLECTION_URL,
                                              archiveItPartnerSearchUrl: t.SNOWPACK_PUBLIC_ARCHIVE_IT_PARTNER_URL,
                                              userListsUrl: t.SNOWPACK_PUBLIC_USER_LISTS_API_URL,
                                              itemManagementUrl: t.SNOWPACK_PUBLIC_ITEM_MANAGEMENT_URL,
                                              sentry: {
                                                  dsn: t.SNOWPACK_PUBLIC_SENTRY_DSN,
                                                  tracesSampleRate: c,
                                                  sampleRate: u
                                              },
                                              zendeskHelpWidgetKey: t.SNOWPACK_PUBLIC_ZENDESK_HELP_WIDGET_KEY,
                                              isPrerendering: o,
                                              isTesting: a,
                                              suppressFacets: s,
                                              recaptchaSiteKey: t.SNOWPACK_PUBLIC_RECAPTCHA_SITE_KEY,
                                              donationForm: {
                                                  braintreeAuthToken: t.SNOWPACK_PUBLIC_BRAINTREE_AUTH_TOKEN,
                                                  venmoProfileId: t.SNOWPACK_PUBLIC_VENMO_PROFILE_ID,
                                                  googlepayMerchantId: t.SNOWPACK_PUBLIC_GOOGLEPAY_MERCHANT_ID
                                              },
                                              featureFeedback: {
                                                  serviceUrl: t.SNOWPACK_PUBLIC_FEATURE_FEEDBACK_SERVICE_URL
                                              },
                                              baseImageUrl: t.SNOWPACK_PUBLIC_ARCHIVE_IMAGE_URL,
                                              currentBaseUrl: window.location.origin
                                          });
                                      case 9:
                                      case "end":
                                          return e.stop()
                                  }
                              }), e)
                          }))), function() {
                              return e.apply(this, arguments)
                          })
                      });
                      var e
                  }
              }, {
                  kind: "field",
                  decorators: [Object(it.e)()],
                  key: "footerPosition",
                  value: function() {
                      return Ki.a.Off
                  }
              }, {
                  kind: "field",
                  decorators: [Object(it.e)()],
                  key: "hasLoadedStrings",
                  value: function() {
                      return !1
                  }
              }, {
                  kind: "field",
                  decorators: [Object(it.e)()],
                  key: "showDebugBorders",
                  value: function() {
                      return !1
                  }
              }, {
                  kind: "field",
                  decorators: [Object(it.e)()],
                  key: "showDevMenu",
                  value: function() {
                      return !1
                  }
              }, {
                  kind: "field",
                  decorators: [Object(it.e)()],
                  key: "activityIndicatorVisible",
                  value: function() {
                      return !0
                  }
              }, {
                  kind: "field",
                  decorators: [Object(it.e)()],
                  key: "sharedResizeObserver",
                  value: void 0
              }, {
                  kind: "field",
                  decorators: [Object(it.e)()],
                  key: "siteHasLimitedFunctionality",
                  value: function() {
                      return !1
                  }
              }, {
                  kind: "field",
                  decorators: [Object(it.e)()],
                  key: "waybackPagesArchived",
                  value: function() {
                      return ""
                  }
              }, {
                  kind: "field",
                  decorators: [Object(it.e)()],
                  key: "screenName",
                  value: function() {
                      return ""
                  }
              }, {
                  kind: "field",
                  decorators: [Object(it.e)()],
                  key: "username",
                  value: function() {
                      return ""
                  }
              }, {
                  kind: "field",
                  decorators: [Object(it.e)()],
                  key: "userHasItemsPriv",
                  value: function() {
                      return !1
                  }
              }, {
                  kind: "field",
                  decorators: [Object(it.e)()],
                  key: "userHasFlagsPriv",
                  value: function() {
                      return !1
                  }
              }, {
                  kind: "field",
                  decorators: [Object(it.e)()],
                  key: "zendeskWidgetVisible",
                  value: function() {
                      return !1
                  }
              }, {
                  kind: "field",
                  decorators: [Object(it.e)()],
                  key: "zendeskWidgetKey",
                  value: function() {
                      return ""
                  }
              }, {
                  kind: "field",
                  decorators: [Object(it.e)()],
                  key: "donationBannerVisible",
                  value: void 0
              }, {
                  kind: "field",
                  decorators: [Object(it.e)()],
                  key: "psaBannerService",
                  value: void 0
              }, {
                  kind: "field",
                  decorators: [Object(it.e)()],
                  key: "userService",
                  value: void 0
              }, {
                  kind: "field",
                  decorators: [Object(it.e)()],
                  key: "localCache",
                  value: void 0
              }, {
                  kind: "field",
                  decorators: [Object(it.e)()],
                  key: "keyValueStoreManager",
                  value: void 0
              }, {
                  kind: "field",
                  decorators: [Object(it.e)()],
                  key: "itemIdentifier",
                  value: void 0
              }, {
                  kind: "field",
                  decorators: [Object(it.c)("router-slot")],
                  key: "routerSlot",
                  value: void 0
              }, {
                  kind: "field",
                  decorators: [Object(it.c)("ia-topnav")],
                  key: "topNav",
                  value: void 0
              }, {
                  kind: "field",
                  decorators: [Object(it.c)("modal-manager")],
                  key: "modalManager",
                  value: void 0
              }, {
                  kind: "field",
                  decorators: [Object(it.c)("#maincontent")],
                  key: "mainContent",
                  value: void 0
              }, {
                  kind: "field",
                  key: "donationBannerHandler",
                  value: void 0
              }, {
                  kind: "field",
                  key: "donationBannerService",
                  value: void 0
              }, {
                  kind: "method",
                  key: "firstUpdated",
                  value: function() {
                      this.startup()
                  }
              }, {
                  kind: "method",
                  key: "updated",
                  value: function(e) {
                      var t;
                      e.has("appServices") && this.appServices && this.setupAppServicesDependents(), e.has("hasLoadedStrings") && this.hasLoadedStrings && this.setupView(), e.has("donationBannerVisible") && this.donationBannerVisible && (null == (t = this.donationBannerHandler) || t.pageNavigationOccurred(!!this.donationBannerVisible))
                  }
              }, {
                  kind: "method",
                  key: "startup",
                  value: ($ = _o(regeneratorRuntime.mark((function e() {
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return this.checkForLimitedFunctionality(), e.next = 3, Promise.all([this.setupDonationBannerService(), this.setupDonationBannerHandler(), this.setupPsaBanner(), this.setupKeyValueStoreManager(), this.setupZendeskWidget(), this.startupSentry()]);
                              case 3:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  }))), function() {
                      return $.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "setupIntersectionObserverPolyfill",
                  value: (R = _o(regeneratorRuntime.mark((function e() {
                      var t;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  if (!("IntersectionObserver" in window)) {
                                      e.next = 2;
                                      break
                                  }
                                  return e.abrupt("return");
                              case 2:
                                  return e.next = 4, Object(io.a)((function() {
                                      return Promise.all([n.e(0), n.e(25)]).then(n.bind(null, 368))
                                  }));
                              case 4:
                                  return t = e.sent, window.IntersectionObserver = t.default, e.next = 8, this.trackEvent({
                                      event: {
                                          category: "offshootPolyfills",
                                          action: "loadIntersectionObserver",
                                          label: navigator.userAgent
                                      },
                                      sampling: !0
                                  });
                              case 8:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  }))), function() {
                      return R.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "setupPsaBanner",
                  value: (I = _o(regeneratorRuntime.mark((function e() {
                      var t;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return e.next = 2, this.appServices.get();
                              case 2:
                                  return t = e.sent, e.t0 = Promise, e.next = 6, t.psaBannerService.get();
                              case 6:
                                  return e.t1 = this.psaBannerService = e.sent, e.next = 9, t.userService.get();
                              case 9:
                                  return e.t2 = this.userService = e.sent, e.next = 12, t.localCache.get();
                              case 12:
                                  return e.t3 = this.localCache = e.sent, e.t4 = [e.t1, e.t2, e.t3], e.next = 16, e.t0.all.call(e.t0, e.t4);
                              case 16:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  }))), function() {
                      return I.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "setupKeyValueStoreManager",
                  value: (P = _o(regeneratorRuntime.mark((function e() {
                      var t;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return e.next = 2, this.appServices.get();
                              case 2:
                                  return t = e.sent, e.next = 5, t.keyValueStoreManager.get();
                              case 5:
                                  this.keyValueStoreManager = e.sent;
                              case 6:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  }))), function() {
                      return P.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "setupZendeskWidget",
                  value: (C = _o(regeneratorRuntime.mark((function e() {
                      var t, n, r, i;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return e.next = 2, this.appServices.get();
                              case 2:
                                  return t = e.sent, e.next = 5, t.appConfig.get();
                              case 5:
                                  return n = e.sent, e.next = 8, t.configService.get();
                              case 8:
                                  return r = e.sent, e.next = 11, r.getConfig("feature.zendesk_enabled");
                              case 11:
                                  i = e.sent, this.zendeskWidgetKey = n.zendeskHelpWidgetKey, this.zendeskWidgetVisible = "" !== i;
                              case 14:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  }))), function() {
                      return C.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "setupAppServicesDependents",
                  value: (O = _o(regeneratorRuntime.mark((function e() {
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return e.next = 2, Promise.all([this.setupDevMenu(), this.setupLocalizationManager(), this.startupThemeManager(), this.trackIaxParameter(), this.setupPageViewAnalytics(), this.setupPageMetadataService(), this.setupLightDOMTunnelReset(), this.setupResizeObserver()]);
                              case 2:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  }))), function() {
                      return O.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "startupSentry",
                  value: (E = _o(regeneratorRuntime.mark((function e() {
                      var t, r;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return e.next = 2, this.appConfig.get();
                              case 2:
                                  if (!(t = e.sent).isTesting && !t.isPrerendering) {
                                      e.next = 5;
                                      break
                                  }
                                  return e.abrupt("return");
                              case 5:
                                  return e.next = 7, Object(io.a)((function() {
                                      return Promise.all([n.e(0), n.e(40)]).then(n.bind(null, 390))
                                  }));
                              case 7:
                                  r = e.sent, new(0, r.SentryConfigurer)(t).configure();
                              case 11:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  }))), function() {
                      return E.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "checkForLimitedFunctionality",
                  value: (_ = _o(regeneratorRuntime.mark((function e() {
                      var t, n;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  t = new URLSearchParams(window.location.search), n = t.get("limited"), this.siteHasLimitedFunctionality = "1" === n;
                              case 3:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  }))), function() {
                      return _.apply(this, arguments)
                  })
              }, {
                  kind: "field",
                  key: "iaxParameterTracked",
                  value: function() {
                      return !1
                  }
              }, {
                  kind: "method",
                  key: "trackIaxParameter",
                  value: (A = _o(regeneratorRuntime.mark((function e() {
                      var t;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  if (!this.iaxParameterTracked) {
                                      e.next = 2;
                                      break
                                  }
                                  return e.abrupt("return");
                              case 2:
                                  return e.next = 4, this.appServices.get();
                              case 4:
                                  return t = e.sent, e.next = 7, t.analyticsHandler.get();
                              case 7:
                                  e.sent.trackIaxParameter(window.location.href), this.iaxParameterTracked = !0;
                              case 10:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  }))), function() {
                      return A.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "setupDevMenu",
                  value: (x = _o(regeneratorRuntime.mark((function e() {
                      var t, n, r, i, o;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return e.next = 2, this.appServices.get();
                              case 2:
                                  return t = e.sent, e.next = 5, t.appConfig.get();
                              case 5:
                                  return n = e.sent, e.next = 8, this.getLoggedInUser();
                              case 8:
                                  r = e.sent, i = "dev" === n.environment, o = r && r.privs.includes("offshoot-dev") || !1, this.showDevMenu = i || o;
                              case 12:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  }))), function() {
                      return x.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "setupPageViewAnalytics",
                  value: (S = _o(regeneratorRuntime.mark((function e() {
                      var t = this;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  window.addEventListener("navigationend", _o(regeneratorRuntime.mark((function e() {
                                      var n;
                                      return regeneratorRuntime.wrap((function(e) {
                                          for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                  return e.next = 2, t.appServices.get();
                                              case 2:
                                                  return n = e.sent, e.next = 5, n.analyticsHandler.get();
                                              case 5:
                                                  e.sent.trackPageView();
                                              case 7:
                                              case "end":
                                                  return e.stop()
                                          }
                                      }), e)
                                  }))));
                              case 1:
                              case "end":
                                  return e.stop()
                          }
                      }), e)
                  }))), function() {
                      return S.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "setupPageMetadataService",
                  value: (k = _o(regeneratorRuntime.mark((function e() {
                      var t = this;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  window.addEventListener("navigationstart", _o(regeneratorRuntime.mark((function e() {
                                      var n, r;
                                      return regeneratorRuntime.wrap((function(e) {
                                          for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                  return e.next = 2, t.appServices.get();
                                              case 2:
                                                  return n = e.sent, e.next = 5, n.pageMetadataService.get();
                                              case 5:
                                                  (r = e.sent).clearMetaTags(), r.clearLinkTags();
                                              case 8:
                                              case "end":
                                                  return e.stop()
                                          }
                                      }), e)
                                  }))));
                              case 1:
                              case "end":
                                  return e.stop()
                          }
                      }), e)
                  }))), function() {
                      return k.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "setupLightDOMTunnelReset",
                  value: (w = _o(regeneratorRuntime.mark((function e() {
                      var t = this;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  window.addEventListener("navigationstart", _o(regeneratorRuntime.mark((function e() {
                                      var n;
                                      return regeneratorRuntime.wrap((function(e) {
                                          for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                  return e.next = 2, t.appServices.get();
                                              case 2:
                                                  return n = e.sent, e.next = 5, n.lightDOMTunnel.get();
                                              case 5:
                                                  e.sent.removeAll();
                                              case 7:
                                              case "end":
                                                  return e.stop()
                                          }
                                      }), e)
                                  }))));
                              case 1:
                              case "end":
                                  return e.stop()
                          }
                      }), e)
                  }))), function() {
                      return w.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "setupResizeObserver",
                  value: (b = _o(regeneratorRuntime.mark((function e() {
                      var t, n;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return e.next = 2, this.appServices.get();
                              case 2:
                                  return t = e.sent, e.next = 5, t.resizeObserver.get();
                              case 5:
                                  n = e.sent, this.sharedResizeObserver = n;
                              case 7:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  }))), function() {
                      return b.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "setupPageNavigationActivityIndicator",
                  value: (g = _o(regeneratorRuntime.mark((function e() {
                      var t = this;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  window.addEventListener("navigationstart", _o(regeneratorRuntime.mark((function e() {
                                      return regeneratorRuntime.wrap((function(e) {
                                          for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                  t.showActivityIndicator(!0);
                                              case 1:
                                              case "end":
                                                  return e.stop()
                                          }
                                      }), e)
                                  })))), window.addEventListener("navigationend", _o(regeneratorRuntime.mark((function e() {
                                      return regeneratorRuntime.wrap((function(e) {
                                          for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                  t.showActivityIndicator(!1);
                                              case 1:
                                              case "end":
                                                  return e.stop()
                                          }
                                      }), e)
                                  }))));
                              case 2:
                              case "end":
                                  return e.stop()
                          }
                      }), e)
                  }))), function() {
                      return g.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "setupDonationBannerService",
                  value: (y = _o(regeneratorRuntime.mark((function e() {
                      var t, n, r, i, o, a, s, c, u, l, f, h;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return e.next = 2, this.appServices.get();
                              case 2:
                                  return o = e.sent, e.next = 5, o.fetchHandler.get();
                              case 5:
                                  return a = e.sent, this.donationBannerService = new ro({
                                      fetchHandler: a
                                  }), s = new URLSearchParams(window.location.search), c = null != (t = s.get("ymd")) ? t : void 0, u = null != (n = s.get("variant")) ? n : void 0, l = null != (r = s.get("platform")) ? r : void 0, f = null != (i = s.get("recacheDonationBanner")) ? i : void 0, e.next = 14, this.donationBannerService.getBannerConfig({
                                      ymd: c,
                                      variant: u,
                                      platform: l,
                                      recacheDonationBanner: f
                                  });
                              case 14:
                                  if (h = e.sent) {
                                      e.next = 17;
                                      break
                                  }
                                  return e.abrupt("return");
                              case 17:
                                  this.donationBannerVisible = h.shouldDisplayBanner;
                              case 18:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  }))), function() {
                      return y.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "setupDonationBannerHandler",
                  value: (m = _o(regeneratorRuntime.mark((function e() {
                      var t, n = this;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return e.next = 2, this.appConfig.get();
                              case 2:
                                  t = e.sent, this.donationBannerHandler = new Xi({
                                      baseUrl: t.archiveApiUrl
                                  }), window.addEventListener("navigationend", _o(regeneratorRuntime.mark((function e() {
                                      var t;
                                      return regeneratorRuntime.wrap((function(e) {
                                          for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                  return e.next = 2, null == (t = n.donationBannerHandler) ? void 0 : t.pageNavigationOccurred(!!n.donationBannerVisible);
                                              case 2:
                                              case "end":
                                                  return e.stop()
                                          }
                                      }), e)
                                  }))));
                              case 5:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  }))), function() {
                      return m.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "setupView",
                  value: (v = _o(regeneratorRuntime.mark((function e() {
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return e.next = 2, this.setupIntersectionObserverPolyfill();
                              case 2:
                                  return e.next = 4, Promise.all([this.setupPageNavigationActivityIndicator(), this.setupRouter(), this.setupTopnav()]);
                              case 4:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  }))), function() {
                      return v.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "setFooterPosition",
                  value: (p = _o(regeneratorRuntime.mark((function e(t) {
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  this.footerPosition = t;
                              case 1:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  }))), function(e) {
                      return p.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "showTopNavSearch",
                  value: function(e) {
                      this.topNav.hideSearch = !e
                  }
              }, {
                  kind: "method",
                  key: "showTopNav2ndLogo",
                  value: function(e) {
                      var t = e ? "allow" : "";
                      this.topNav.secondIdentitySlotMode = t
                  }
              }, {
                  kind: "method",
                  key: "showZendeskWidget",
                  value: function(e) {
                      this.zendeskWidgetVisible = e
                  }
              }, {
                  kind: "method",
                  key: "setItemIdentifier",
                  value: function(e) {
                      this.itemIdentifier = e
                  }
              }, {
                  kind: "method",
                  key: "addAllowedCustomElementsToPage",
                  value: function() {
                      this.convertDayInHistoryLinks(), this.convertDisabilityEligibilityForms()
                  }
              }, {
                  kind: "method",
                  key: "convertDayInHistoryLinks",
                  value: function() {
                      var e, t, n = null == (e = this.routerSlot) ? void 0 : e.querySelector("collection-page"),
                          r = null == (t = null == n ? void 0 : n.shadowRoot) ? void 0 : t.querySelectorAll('a[onclick*="tapeoftheday("]');
                      null == r || r.forEach((function(e) {
                          var t = e.textContent,
                              n = document.createElement("day-in-history");
                          n.textContent = t, e.replaceWith(n)
                      }))
                  }
              }, {
                  kind: "method",
                  key: "convertDisabilityEligibilityForms",
                  value: function() {
                      var e, t, n, r = null == (e = this.routerSlot) ? void 0 : e.querySelector("collection-page"),
                          i = null == (t = null == r ? void 0 : r.shadowRoot) ? void 0 : t.querySelector("collection-about"),
                          o = null == (n = null == i ? void 0 : i.shadowRoot) ? void 0 : n.querySelectorAll(".disability-eligibility-provider-form");
                      null == o || o.forEach((function(e) {
                          var t, n, r, i, o, a, s = e.parentElement,
                              c = document.createElement("disability-eligibility-form"),
                              u = e.querySelector("form");
                          c.setAttribute("type", null != (t = null == u ? void 0 : u.dataset.disabilityEligibilityType) ? t : ""), c.toggleAttribute("ispassword", !!e.querySelector('input[type="password"]')), c.toggleAttribute("open", null != (n = null == s ? void 0 : s.open) && n);
                          var l = null == s ? void 0 : s.querySelector("h2");
                          null == l || l.setAttribute("slot", "title"), c.append(null != l ? l : "");
                          var f = document.createElement("span");
                          f.textContent = null != (i = null == (r = e.querySelector("label")) ? void 0 : r.textContent) ? i : "", f.setAttribute("slot", "input-label"), c.append(f), null == (o = e.querySelectorAll("p")) || o.forEach((function(e) {
                              c.append(e)
                          })), null == (a = e.parentElement) || a.replaceWith(c)
                      }))
                  }
              }, {
                  kind: "method",
                  key: "getWindowScrollbarWidth",
                  value: function() {
                      return window.innerWidth - document.documentElement.clientWidth
                  }
              }, {
                  kind: "field",
                  key: "activityIndicatorRequests",
                  value: function() {
                      return 0
                  }
              }, {
                  kind: "method",
                  key: "showActivityIndicator",
                  value: function(e) {
                      this.activityIndicatorRequests += e ? 1 : -1, this.activityIndicatorRequests = Math.max(0, this.activityIndicatorRequests);
                      var t = !e && 0 === this.activityIndicatorRequests;
                      this.activityIndicatorVisible = !t
                  }
              }, {
                  kind: "method",
                  key: "isListsCalloutEnabled",
                  value: (d = _o(regeneratorRuntime.mark((function e() {
                      var t, n, r, i, o, a, s, c, u, l, f, h;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return e.prev = 0, e.next = 3, this.appServices.get();
                              case 3:
                                  return r = e.sent, e.next = 6, Promise.all([r.keyValueStoreManager.get(), r.abtestManager.get()]);
                              case 6:
                                  return i = e.sent, o = So(i, 2), a = o[0], s = o[1], c = null == a ? void 0 : a.getKeyValueStore({
                                      namespace: "UserLists",
                                      storageType: "localStorage"
                                  }), e.next = 13, Promise.all([s.variantFor("UserListsLaunchCallouts"), null == c ? void 0 : c.get("tabCalloutDismissed")]);
                              case 13:
                                  return u = e.sent, l = So(u, 2), f = l[0], h = l[1], e.abrupt("return", "On" === f && !h);
                              case 20:
                                  return e.prev = 20, e.t0 = e.catch(0), null == (n = null == (t = window.Sentry) ? void 0 : t.captureMessage) || n.call(t, "Unable to load lists callout state: " + e.t0, "error"), e.abrupt("return", !1);
                              case 24:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this, [
                          [0, 20]
                      ])
                  }))), function() {
                      return d.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "setupTopnav",
                  value: (h = _o(regeneratorRuntime.mark((function e() {
                      var t, n, r;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return e.next = 2, this.appConfig.get();
                              case 2:
                                  return t = e.sent, this.topNav.baseHost = t.archiveNavUrl, e.next = 6, this.getWaybackPagesArchived();
                              case 6:
                                  return this.waybackPagesArchived = e.sent, e.next = 9, this.getLoggedInUser();
                              case 9:
                                  if (n = e.sent) {
                                      e.next = 12;
                                      break
                                  }
                                  return e.abrupt("return");
                              case 12:
                                  return this.screenName = n.screenname, this.username = n.itemname.replace(/^@/, ""), r = n.privs.includes("/"), this.userHasItemsPriv = r || n.privs.includes("/items"), this.userHasFlagsPriv = r || n.privs.includes("/flags"), e.next = 19, this.updateTopNavCallouts();
                              case 19:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  }))), function() {
                      return h.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "updateTopNavCallouts",
                  value: (f = _o(regeneratorRuntime.mark((function e() {
                      var t;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return e.next = 2, this.isListsCalloutEnabled();
                              case 2:
                                  t = e.sent, this.topNav.config && (this.topNav.config = Lo(Lo({}, this.topNav.config), {
                                      callouts: t ? {
                                          "My lists": "NEW"
                                      } : {}
                                  }));
                              case 4:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  }))), function() {
                      return f.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "getWaybackPagesArchived",
                  value: (l = _o(regeneratorRuntime.mark((function e() {
                      var t, n, r, i;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return e.next = 2, this.appServices.get();
                              case 2:
                                  return n = e.sent, e.next = 5, n.mediaCountService.get();
                              case 5:
                                  return r = e.sent, e.next = 8, r.fetchMediaCounts();
                              case 8:
                                  return i = e.sent, e.abrupt("return", Object(wo.a)(null != (t = null == i ? void 0 : i.web) ? t : 0));
                              case 10:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  }))), function() {
                      return l.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "getLoggedInUser",
                  value: (u = _o(regeneratorRuntime.mark((function e() {
                      var t, n, r;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return e.next = 2, this.appServices.get();
                              case 2:
                                  return t = e.sent, e.next = 5, t.userService.get();
                              case 5:
                                  return n = e.sent, e.next = 8, n.getLoggedInUser();
                              case 8:
                                  return r = e.sent, e.abrupt("return", r.success);
                              case 10:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  }))), function() {
                      return u.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "startupThemeManager",
                  value: (c = _o(regeneratorRuntime.mark((function e() {
                      var t, n;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return e.next = 2, this.appServices.get();
                              case 2:
                                  return t = e.sent, e.next = 5, t.themeManager.get();
                              case 5:
                                  return n = e.sent, e.next = 8, n.startup();
                              case 8:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  }))), function() {
                      return c.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "setupRouter",
                  value: (s = _o(regeneratorRuntime.mark((function e() {
                      var t;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  if (this.routerSlot) {
                                      e.next = 2;
                                      break
                                  }
                                  return e.abrupt("return");
                              case 2:
                                  t = new bo(this.appServices), this.routerSlot.handleAnchorLinks = !1, this.routerSlot.add(t.appRoutes);
                              case 5:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  }))), function() {
                      return s.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "setupLocalizationManager",
                  value: (a = _o(regeneratorRuntime.mark((function e() {
                      var t, n;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return e.next = 2, this.appServices.get();
                              case 2:
                                  return t = e.sent, e.next = 5, t.localizationManager.get();
                              case 5:
                                  return n = e.sent, this.showActivityIndicator(!0), e.next = 9, n.setup();
                              case 9:
                                  this.hasLoadedStrings = !0, this.showActivityIndicator(!1);
                              case 11:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  }))), function() {
                      return a.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "render",
                  value: function() {
                      return Object(rt.c)(co || (co = ko(['\n      <a\n        href="#maincontent"\n        id="skip-to-main-content-link"\n        @click=', "\n        >", "</a\n      >\n\n      <header>\n        ", "\n        ", '\n        <ia-topnav\n          localLinks="true"\n          waybackPagesArchived=', "\n          @trackClick=", "\n          @trackSubmit=", "\n          screenName=", "\n          username=", "\n          itemIdentifier=", "\n          ?admin=", "\n          ?canManageFlags=", "\n        >\n        </ia-topnav>\n        ", "\n        ", "\n      </header>\n\n      ", "\n      ", "\n      ", "\n    "])), this.skipToMainContent, Object(ot.c)("Skip to main content"), this.psaBannerTemplate, this.siteHasLimitedFunctionality ? this.limitedSiteFunctionalityBannerTemplate : rt.d, this.waybackPagesArchived, this.trackTopNavEvent, this.trackTopNavEvent, this.screenName, this.username, this.itemIdentifier, this.userHasItemsPriv, this.userHasFlagsPriv, this.showDevMenu ? this.devMenuTemplate : rt.d, this.activityIndicatorVisible ? this.activityIndicatorTemplate : rt.d, this.hasLoadedStrings ? this.mainTemplate : rt.d, this.modalManagerTemplate, this.zendeskWidgetVisible ? this.zendeskHelpWidgetTemplate : rt.d)
                  }
              }, {
                  kind: "get",
                  key: "psaBannerTemplate",
                  value: function() {
                      var e = this;
                      return Object(qi.a)(_o(regeneratorRuntime.mark((function e() {
                          return regeneratorRuntime.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      return e.next = 2, Object(io.a)((function() {
                                          return Promise.all([n.e(0), n.e(35)]).then(n.bind(null, 369))
                                      }));
                                  case 2:
                                  case "end":
                                      return e.stop()
                              }
                          }), e)
                      }))), (function() {
                          return Object(rt.c)(uo || (uo = ko(["\n          <psa-banners\n            .psaBannerService=", "\n            .userService=", "\n            .keyValueStoreManager=", "\n          >\n          </psa-banners>\n        "])), e.psaBannerService, e.userService, e.keyValueStoreManager)
                      }))
                  }
              }, {
                  kind: "method",
                  key: "skipToMainContent",
                  value: function(e) {
                      var t, n = this;
                      e.preventDefault(), null == (t = this.mainContent) || t.scrollIntoView({
                          behavior: "smooth"
                      }), setTimeout((function() {
                          var e;
                          null == (e = n.mainContent) || e.focus()
                      }), 250)
                  }
              }, {
                  kind: "get",
                  key: "limitedSiteFunctionalityBannerTemplate",
                  value: function() {
                      return Object(qi.a)(_o(regeneratorRuntime.mark((function e() {
                          return regeneratorRuntime.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      return e.next = 2, Object(io.a)((function() {
                                          return n.e(0).then(n.bind(null, 364))
                                      }));
                                  case 2:
                                  case "end":
                                      return e.stop()
                              }
                          }), e)
                      }))), (function() {
                          return Object(rt.c)(lo || (lo = ko(["\n          <alert-banner .level=", ">\n            ", "\n          </alert-banner>\n        "])), "warn", Object(ot.c)("Your browser may not be compatible with all the features on this site. Consider upgrading to a modern browser for an improved experience."))
                      }))
                  }
              }, {
                  kind: "get",
                  key: "zendeskHelpWidgetTemplate",
                  value: function() {
                      var e = this;
                      return Object(qi.a)(_o(regeneratorRuntime.mark((function e() {
                          return regeneratorRuntime.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      return e.next = 2, Object(io.a)((function() {
                                          return Promise.all([n.e(0), n.e(50)]).then(n.bind(null, 370))
                                      }));
                                  case 2:
                                  case "end":
                                      return e.stop()
                              }
                          }), e)
                      }))), (function() {
                          return Object(rt.c)(fo || (fo = ko(['\n          <ia-zendesk-help-widget\n            widgetSrc="https://static.zdassets.com/ekr/snippet.js?key=', '"\n          ></ia-zendesk-help-widget>\n        '])), e.zendeskWidgetKey)
                      }))
                  }
              }, {
                  kind: "get",
                  key: "devMenuTemplate",
                  value: function() {
                      var e = this;
                      return Object(qi.a)(_o(regeneratorRuntime.mark((function e() {
                          return regeneratorRuntime.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      return e.next = 2, Object(io.a)((function() {
                                          return Promise.all([n.e(0), n.e(13)]).then(n.bind(null, 371))
                                      }));
                                  case 2:
                                  case "end":
                                      return e.stop()
                              }
                          }), e)
                      }))), (function() {
                          return Object(rt.c)(ho || (ho = ko(["\n          <dev-tools\n            .appServices=", "\n            @pageWidthSliderChanged=", "\n            @borderCheckboxChecked=", "\n          >\n          </dev-tools>\n        "])), e.appServices, e.devToolPageWidthSliderChanged, e.devToolsBorderCheckboxChecked)
                      }))
                  }
              }, {
                  kind: "get",
                  key: "activityIndicatorTemplate",
                  value: function() {
                      return Object(rt.c)(po || (po = ko(["\n      <horizontal-activity-indicator\n        .resizeObserver=", "\n      >\n      </horizontal-activity-indicator>\n    "])), this.sharedResizeObserver)
                  }
              }, {
                  kind: "get",
                  key: "mainTemplate",
                  value: function() {
                      return Object(rt.c)(vo || (vo = ko(['\n      <main id="maincontent" tabindex="-1">\n        <div\n          class="page-container ', '"\n        >\n          <router-slot></router-slot>\n        </div>\n      </main>\n\n      <footer class="', '">', "</footer>\n    "])), this.showDebugBorders ? "show-debug-borders" : "", this.footerPosition, this.footerTemplate)
                  }
              }, {
                  kind: "get",
                  key: "modalManagerTemplate",
                  value: function() {
                      return Object(qi.a)(_o(regeneratorRuntime.mark((function e() {
                          return regeneratorRuntime.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      return e.next = 2, Object(io.a)((function() {
                                          return n.e(0).then(n.bind(null, 221))
                                      }));
                                  case 2:
                                  case "end":
                                      return e.stop()
                              }
                          }), e)
                      }))), (function() {
                          return Object(rt.c)(mo || (mo = ko(['\n          <modal-manager>\n            <slot\n              name="paypal-upsell-button"\n              slot="paypal-upsell-button"\n            ></slot>\n          </modal-manager>\n        '])))
                      }))
                  }
              }, {
                  kind: "method",
                  key: "devToolPageWidthSliderChanged",
                  value: function(e) {
                      var t, n, r = e.detail.width;
                      null == (n = null == (t = this.shadowRoot) ? void 0 : t.host) || n.style.setProperty("--app-root-page-max-width", r + "rem")
                  }
              }, {
                  kind: "method",
                  key: "devToolsBorderCheckboxChecked",
                  value: function(e) {
                      var t = e.detail.showBorders;
                      this.showDebugBorders = t
                  }
              }, {
                  kind: "method",
                  key: "trackTopNavEvent",
                  value: (o = _o(regeneratorRuntime.mark((function e(t) {
                      var n, r, i, o, a, s;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  if (i = null == (r = null == (n = t.detail) ? void 0 : n.event) ? void 0 : r.split("|"), o = So(i, 2), a = o[0], s = o[1], a && s) {
                                      e.next = 3;
                                      break
                                  }
                                  return e.abrupt("return");
                              case 3:
                                  return e.next = 5, this.trackEvent({
                                      event: {
                                          category: a,
                                          action: s
                                      },
                                      sampling: !0
                                  });
                              case 5:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  }))), function(e) {
                      return o.apply(this, arguments)
                  })
              }, {
                  kind: "method",
                  key: "trackEvent",
                  value: (i = _o(regeneratorRuntime.mark((function e(t) {
                      var n, r;
                      return regeneratorRuntime.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return e.next = 2, this.appServices.get();
                              case 2:
                                  return n = e.sent, e.next = 5, n.analyticsHandler.get();
                              case 5:
                                  r = e.sent, t.sampling ? r.sendEvent(t.event) : r.sendEventNoSampling(t.event);
                              case 7:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  }))), function(e) {
                      return i.apply(this, arguments)
                  })
              }, {
                  kind: "get",
                  key: "footerTemplate",
                  value: function() {
                      return Object(qi.a)(_o(regeneratorRuntime.mark((function e() {
                          return regeneratorRuntime.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      return e.next = 2, Object(io.a)((function() {
                                          return n.e(2).then(n.bind(null, 372))
                                      }));
                                  case 2:
                                  case "end":
                                      return e.stop()
                              }
                          }), e)
                      }))), (function() {
                          return Object(rt.c)(yo || (yo = ko([" <app-footer></app-footer> "])))
                      }))
                  }
              }, {
                  kind: "get",
                  static: !0,
                  key: "styles",
                  value: function() {
                      return Object(rt.b)(go || (go = ko(["\n      #skip-to-main-content-link {\n        /*http://webaim.org/techniques/css/invisiblecontent/*/\n        position: absolute;\n        clip: rect(0, 0, 0, 0);\n        top: auto;\n        width: 1px;\n        height: 1px;\n        overflow: hidden;\n        font-size: 1.4rem;\n        color: var(--ia-theme-link-color, #4b64ff);\n      }\n      #skip-to-main-content-link:focus {\n        position: static;\n        width: auto;\n        height: auto;\n        outline: thin dotted #333;\n        outline: 3px auto -webkit-focus-ring-color;\n        margin: 5px 0 2px 8px;\n        padding: 2px 3px;\n        display: inline-block;\n      }\n      #skip-to-main-content-link:visited {\n        color: var(--ia-theme-link-color, #4b64ff);\n      }\n\n      horizontal-activity-indicator {\n        position: absolute;\n        height: 3px;\n        width: 100%;\n      }\n      modal-manager[mode='closed'] {\n        display: none;\n      }\n      modal-manager.more-search-facets {\n        --modalWidth: 85rem;\n        --modalBorder: 2px solid #194880;\n        --modalTitleLineHeight: 4rem;\n        --modalTitleFontSize: 1.8rem;\n        --modalCornerRadius: 0;\n        --modalBottomPadding: 0;\n        --modalScrollOffset: 0;\n        --modalCornerRadius: 0.5rem;\n      }\n      modal-manager.expanded-date-picker {\n        --modalWidth: 58rem;\n        --modalBorder: 2px solid var(--primaryButtonBGColor, #194880);\n        --modalTitleLineHeight: 4rem;\n        --modalTitleFontSize: 1.8rem;\n        --modalCornerRadius: 0;\n        --modalBottomPadding: 0;\n        --modalBottomMargin: 0;\n        --modalScrollOffset: 0;\n        --modalCornerRadius: 0.5rem;\n      }\n      modal-manager.remove-items {\n        --modalWidth: 58rem;\n        --modalBorder: 2px solid var(--primaryButtonBGColor, #194880);\n        --modalTitleLineHeight: 4rem;\n        --modalTitleFontSize: 1.8rem;\n        --modalCornerRadius: 0;\n        --modalBottomPadding: 0;\n        --modalBottomMargin: 0;\n        --modalScrollOffset: 0;\n        --modalCornerRadius: 0.5rem;\n      }\n      modal-manager.create-user-list {\n        --modalTitleLineHeight: 4.5rem;\n        --modalHeaderBottomPadding: 0;\n        --modalWidth: 40rem;\n      }\n      modal-manager.delete-user-list {\n        --modalTitleLineHeight: 4.5rem;\n        --modalHeaderBottomPadding: 0;\n        --modalWidth: 40rem;\n      }\n\n      app-footer {\n        display: block;\n      }\n      .page-container {\n        margin: auto;\n      }\n      .page-container.show-debug-borders {\n        outline: 1px solid purple;\n      }\n      footer {\n        width: 100%;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        z-index: 10;\n      }\n      footer.fixed {\n        position: fixed;\n      }\n      footer.off {\n        display: none;\n      }\n    "])))
                  }
              }]
          }
      }), rt.a)
  }],
  [
      [210, 49]
  ]
]);
//# sourceMappingURL=index.ef611c4a6c894d12bd70.js.map