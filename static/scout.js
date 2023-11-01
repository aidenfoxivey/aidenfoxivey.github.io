function _classCallCheck(e, t) {
	if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}
var _createClass = function() {
	function e(e, t) {
		for (var r = 0; r < t.length; r++) {
			var i = t[r];
			i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
		}
	}
	return function(t, r, i) {
		return r && e(t.prototype, r), i && e(t, i), t
	}
}();
! function(e, t) {
	function r(e, t) {
		for (var r = [], i = 0; i < e.length; i++) {
			var n = e[i];
			t(n) && r.push(n)
		}
		return r
	}
	e._rcs = e._rcs || {};
	var i = e._rcs;
	if (i.inst) i.inst.render();
	else {
		var n = function() {
			function i(e, t, r, n) {
				_classCallCheck(this, i), this.prefix = e || "rc-scout", this.token = t || null, this.type = r || "logo_and_text", this.skip = n || !1, this.attributeName = "data-scout-rendered"
			}
			return _createClass(i, [{
				key: "render",
				value: function() {
					var e = this,
						i = this.getLoader(),
						n = t.getElementsByClassName(this.prefix),
						l = r(n, (function(t) {
							return "true" !== t.getAttribute(e.attributeName)
						}));
					if (i || l.length) {
						i || this.skip ? n.length || (console.warn("[scout] Could not find targets; creating one in DOM before loader. Please put at least one div with class '" + this.prefix + "' on your page."), l = [this.createTarget(i)]) : console.warn("[scout] Could not find loader. Please use your custom snippet to load scout.js; loading directly is not supported."), this.token || console.warn("[scout] Could not find valid token; using defaults. Please copy your custom snippet again, making sure to keep the query string (i.e., /loader.js?t=YOUR_TOKEN).");
						var c = this.makeUrl(i),
							o = this.htmlAsString(c);
						if (!this.cssRendered) {
							var s = this.cssAsString();
							this.renderCss(t.body, s), this.cssRendered = !0
						}
						this.renderHtml(l, o)
					} else console.error("[scout] Could not find loader or targets; exiting. Please use your custom snippet to load scout.js, and put at least one div with class '" + this.prefix + "' on your page.")
				}
			}, {
				key: "getLoader",
				value: function() {
					for (var e = t.getElementsByTagName("script"), r = 0, i = e.length; r < i; r++) {
						var n = e[r];
						if (n.src && /www\.recurse-scout\.(dev|com)(:\d+)?\/loader\.js/.test(n.src)) return n
					}
					return null
				}
			}, {
				key: "createTarget",
				value: function(e) {
					var r = t.createElement("div");
					return r.className = this.prefix, e.parentNode.insertBefore(r, e), r
				}
			}, {
				key: "makeUrl",
				value: function(t) {
					return (t && t.src && /www\.recurse-scout\.dev/.test(t.src) ? "http://localhost:5000/scout/click" : t || "localhost" !== e.location.hostname ? "https://www.recurse.com/scout/click" : "http://localhost:5000/scout/click") + (this.token ? "?t=" + encodeURIComponent(this.token) : "")
				}
			}, {
				key: "createStyle",
				value: function(e) {
					var r = t.createElement("style");
					return r.className = this.prefix + "__style", r.type = "text/css", r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(t.createTextNode(e)), r
				}
			}, {
				key: "renderCss",
				value: function(e, t) {
					var r = this.createStyle(t);
					e.appendChild(r)
				}
			}, {
				key: "renderHtml",
				value: function(e, t) {
					for (var r = 0, i = e.length; r < i; r++) {
						var n = e[r];
						n.setAttribute(this.attributeName, "true"), n.innerHTML = t
					}
				}
			}, {
				key: "cssAsString",
				value: function() {
					var e = this.type,
						t = this.prefix;
					if (!e || !t) throw new Error("could not get css as string");
					var r = "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 15"><rect x="0" y="0" width="12" height="10" fill="#000"></rect><rect x="1" y="1" width="10" height="8" fill="#fff"></rect><rect x="2" y="2" width="8" height="6" fill="#000"></rect><rect x="2" y="3" width="1" height="1" fill="#3dc06c"></rect><rect x="4" y="3" width="1" height="1" fill="#3dc06c"></rect><rect x="6" y="3" width="1" height="1" fill="#3dc06c"></rect><rect x="3" y="5" width="2" height="1" fill="#3dc06c"></rect><rect x="6" y="5" width="2" height="1" fill="#3dc06c"></rect><rect x="4" y="9" width="4" height="3" fill="#000"></rect><rect x="1" y="11" width="10" height="4" fill="#000"></rect><rect x="0" y="12" width="12" height="3" fill="#000"></rect><rect x="2" y="13" width="1" height="1" fill="#fff"></rect><rect x="3" y="12" width="1" height="1" fill="#fff"></rect><rect x="4" y="13" width="1" height="1" fill="#fff"></rect><rect x="5" y="12" width="1" height="1" fill="#fff"></rect><rect x="6" y="13" width="1" height="1" fill="#fff"></rect><rect x="7" y="12" width="1" height="1" fill="#fff"></rect><rect x="8" y="13" width="1" height="1" fill="#fff"></rect><rect x="9" y="12" width="1" height="1" fill="#fff"></rect></svg>'),
						i = {
							logo_and_text: "\n        ." + t + " {\n          display: block;\n          padding: 0;\n          border: 0;\n          margin: 0;\n        }\n        ." + t + "__text {\n          display: block;\n          padding: 0;\n          border: 0;\n          margin: 0;\n          height: 100%;\n          font-size: 100%;\n        }\n        ." + t + "__logo {\n          display: inline-block;\n          padding: 0;\n          border: 0;\n          margin: 0;\n          width: 0.85em;\n          height: 0.85em;\n          background: no-repeat center url('" + r + "');\n        }\n        ." + t + "__link:link, ." + t + "__link:visited {\n          color: #3dc06c;\n          text-decoration: underline;\n        }\n        ." + t + "__link:hover, ." + t + "__link:active {\n          color: #4e8b1d;\n        }\n      ",
							logo_only: "\n        ." + t + " {\n          display: block;\n          padding: 0;\n          border: 0;\n          margin: 0;\n          width: 120px;\n          height: 150px;\n        }\n        ." + t + "__logo {\n          display: block;\n          padding: 0;\n          border: 0;\n          margin: 0;\n          height: 100%;\n          background: no-repeat center url('" + ("data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 15"><rect x="0" y="0" width="12" height="10" fill="#000"></rect><rect x="1" y="1" width="10" height="8" fill="#fff"></rect><rect x="2" y="2" width="8" height="6" fill="#000"></rect><rect x="2" y="3" width="1" height="1" fill="#666"></rect><rect x="4" y="3" width="1" height="1" fill="#666"></rect><rect x="6" y="3" width="1" height="1" fill="#666"></rect><rect x="3" y="5" width="2" height="1" fill="#666"></rect><rect x="6" y="5" width="2" height="1" fill="#666"></rect><rect x="4" y="9" width="4" height="3" fill="#000"></rect><rect x="1" y="11" width="10" height="4" fill="#000"></rect><rect x="0" y="12" width="12" height="3" fill="#000"></rect><rect x="2" y="13" width="1" height="1" fill="#fff"></rect><rect x="3" y="12" width="1" height="1" fill="#fff"></rect><rect x="4" y="13" width="1" height="1" fill="#fff"></rect><rect x="5" y="12" width="1" height="1" fill="#fff"></rect><rect x="6" y="13" width="1" height="1" fill="#fff"></rect><rect x="7" y="12" width="1" height="1" fill="#fff"></rect><rect x="8" y="13" width="1" height="1" fill="#fff"></rect><rect x="9" y="12" width="1" height="1" fill="#fff"></rect></svg>')) + "');\n        }\n        ." + t + "__logo:hover {\n          background: no-repeat center url('" + r + "');\n        }\n      ",
							text_only: "\n        ." + t + " {\n          display: block;\n          padding: 0;\n          border: 0;\n          margin: 0;\n        }\n        ." + t + "__text {\n          display: block;\n          padding: 0;\n          border: 0;\n          margin: 0;\n          height: 100%;\n          font-size: 100%;\n        }\n        ." + t + "__link:link, ." + t + "__link:visited {\n          color: #3dc06c;\n          text-decoration: underline;\n        }\n        ." + t + "__link:hover, ." + t + "__link:active {\n          color: #4e8b1d;\n        }\n      "
						};
					if (!i.hasOwnProperty(e)) throw new Error("could not get css as string for display type " + e);
					return i[e].replace(/^\n/, "").replace(/^ {8}/gm, "").replace(/ {6}$/, "")
				}
			}, {
				key: "htmlAsString",
				value: function(e) {
					var t = this.type,
						r = this.prefix;
					if (!(t && r && e)) throw new Error("could not get html as string");
					var i = {
						logo_and_text: '<p class="' + r + '__text"><i class="' + r + '__logo"></i> Want to become a better programmer? <a class="' + r + '__link" href="' + e + '">Join the Recurse Center!</a></p>',
						logo_only: '<a class="' + r + '__link" href="' + e + '"><div class="' + r + '__logo"></div></a>',
						text_only: '<p class="' + r + '__text">Want to become a better programmer? <a class="' + r + '__link" href="' + e + '">Join the Recurse Center!</a></p>'
					};
					if (!i.hasOwnProperty(t)) throw new Error("could not get html as string for display type " + t);
					return i[t]
				}
			}]), i
		}();
		i.Scout = n, i.inst = new n(i.prefix, i.token, i.type, i.skip), i.inst.render()
	}
}(window, document);