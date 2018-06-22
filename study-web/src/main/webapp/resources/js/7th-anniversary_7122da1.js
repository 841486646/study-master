define("activity-2016:widget/7th-anniversary/page-3/page-3.js", function (e, n, a) {
    var i = e("common-jquery:widget/lib/jquery/jquery.js");
    e("common-jquery:widget/lib/jquery.plugins/browser.js");
    var r = {
        init: function () {
            i(".channel-box").addClass("animate"), 9 === i.browser.ie && i(".channel-box").addClass("channel-ie9").fadeIn()
        }, reset: function () {
            i(".channel-box").removeClass("animate"), 9 === i.browser.ie && i(".channel-box").removeClass("channel-ie9")
        }
    };
    a.exports = r
});
;define("activity-2016:widget/7th-anniversary/page-4/page-4.js", function (t, e, n) {
    var i = t("common-jquery:widget/lib/jquery/jquery.js"), a = i(".star-avatar"), r = (i(".star-avatar-pic"), i(".star-pic")), o = i(".star-title-bottom"), s = i(".star-id-bottom"), c = i(".star-intro-bottom"), u = null, l = 0, f = F.context("starList"), d = {
        isDone: 0,
        init: function () {
            var t = this;
            u || (u = window.setInterval(function () {
                t.slide()
            }, 3e3)), i.each(a, function (e, n) {
                i(n).mouseenter(function (a) {
                    a.preventDefault(), u && (u = clearInterval(u));
                    var o = r.attr("src"), s = i(n).find("img").attr("src");
                    o !== s && (l = e, t.changeContent(f[l]))
                }).mouseleave(function (e) {
                    e.preventDefault(), u || (u = window.setInterval(function () {
                        t.slide()
                    }, 3e3))
                })
            })
        },
        slide: function () {
            var t = this, e = f.length, n = l + 1;
            n >= e && (n = 0), l = n, t.changeContent(f[l])
        },
        changeContent: function (t) {
            o.text(t.title), s.text(t.uname), s.attr("href", "/user/npublic?uid=" + t.uidEnc), c.text(t.brief), r.hide().attr("src", t.photo).fadeIn()
        },
        done: function () {
            var t = this;
            t.isDone ? u || (u = window.setInterval(function () {
                t.slide()
            }, 3e3)) : (t.isDone = 1, t.init())
        },
        pause: function () {
            u && (u = clearInterval(u))
        }
    };
    n.exports = d
});
;define("activity-2016:widget/7th-anniversary/page-5/page-5.js", function (e, t, i) {
    var n = e("common-jquery:widget/lib/jquery/jquery.js"), a = null, r = 0, o = [{
        date: "2010.10",
        brief: "百度经验破壳而出"
    }, {date: "2011.06", brief: "原创概念提出"}, {date: "2012.01", brief: "稿酬激励模式闪亮登场"}, {
        date: "2012.07",
        brief: "无线端体验全面升级"
    }, {date: "2013.03", brief: "回享计划出场"}, {date: "2013.07", brief: "第100万篇经验诞生"}, {
        date: "2014.04",
        brief: "经验财富商城问世"
    }, {date: "2014.07", brief: "任务书上线"}, {date: "2015.02", brief: "经验有得社区上线"}, {
        date: "2016.06",
        brief: "语音播报功能上线"
    }, {date: "2016.09", brief: "发烧友横空出世"}, {date: "2016.10", brief: "悬赏任务平台上线"}, {
        date: "2017.05",
        brief: "经验可以上传本地视频"
    }, {date: "2017.08", brief: "新回享全面上线"}], s = {
        isDone: 0, init: function () {
            var e = this;
            a || (a = window.setInterval(function () {
                e.slide()
            }, 3e3));
            var t = n(".exp-progress-item:not(.exp-progress-item-gray)");
            n.each(t, function (t, i) {
                n(i).on("mouseover", function (t) {
                    t.preventDefault(), a && (a = clearInterval(a)), n(i).addClass("active"), r = n(i).data("index"), e.changeContent(o[r])
                }).on("mouseout", function (t) {
                    t.preventDefault(), a || (a = window.setInterval(function () {
                        e.slide()
                    }, 3e3))
                })
            })
        }, slide: function () {
            var e = this, t = o.length, i = r + 1;
            i >= t && (i = 0), r = i, e.changeContent(o[r])
        }, changeContent: function (e) {
            var t = n(".exp-progress-item:not(.exp-progress-item-gray)");
            t.removeClass("active"), n.each(t, function (t, i) {
                return n(i).text() === e.date ? void n(i).addClass("active") : void 0
            }), n(".exp-progress-date").html(e.date), n(".exp-progress-tips").html(e.brief)
        }, done: function () {
            var e = this;
            e.isDone ? a || (a = window.setInterval(function () {
                e.slide()
            }, 3e3)) : (e.isDone = 1, e.init())
        }, pause: function () {
            a && (a = clearInterval(a))
        }
    };
    i.exports = s
});
;define("activity-2016:widget/7th-anniversary/7th-anniversary.js", function (e, a, t) {
    var i = e("common-jquery:widget/lib/jquery/jquery.js");
    e("common-jquery:widget/lib/jquery.ui/jquery.ui.mousewheel.js");
    var n = e("activity-2016:widget/7th-anniversary/page-3/page-3.js"), s = e("activity-2016:widget/7th-anniversary/page-4/page-4.js"), o = e("activity-2016:widget/7th-anniversary/page-5/page-5.js"), r = ["first", "second", "third", "forth", "fifth"], d = {
        init: function () {
            function e(t) {
                t.preventDefault();
                var n = t.originalEvent, s = n.deltaY || n.wheelDelta;
                i(window).off("mousewheel", e);
                var o = parseInt(i(".item-page li.active-doit").data("index"), 10);
                if (s > 0) {
                    var d = parseInt(o + 1, 10);
                    d >= r.length && (d = 0);
                    var c = i(".item-page li");
                    c.removeClass("active-doit"), c.eq(d).addClass("active-doit");
                    var h = r[d], w = parseInt(d + 1, 10);
                    w >= r.length && (w = 0);
                    var v = r[w];
                    a.changeDoit(h, v)
                } else {
                    var d = parseInt(o - 1, 10);
                    0 > d && (d = 4);
                    var c = i(".item-page li");
                    c.removeClass("active-doit"), c.eq(d).addClass("active-doit");
                    var h = r[d], w = parseInt(d + 1, 10);
                    w >= r.length && (w = 0);
                    var v = r[w];
                    a.changeDoit(h, v)
                }
                setTimeout(function () {
                    i(window).bind("mousewheel", e)
                }, 1e3)
            }

            var a = this, t = i("#wgt-header");
            t.addClass("has-share"), t.find(".container").append(['<div class="bdsharebuttonbox bdshare-button-style0-16" data-tag="share_top">', '<a href="#" class="bds_qzone" data-cmd="qzone"></a>', '<a href="#" class="bds_tsina" data-cmd="tsina"></a>', '<a href="#" class="bds_tqq" data-cmd="tqq"></a>', '<a href="#" class="bds_renren" data-cmd="renren"></a>', '<a href="#" class="bds_weixin" data-cmd="weixin"></a>', '<a href="#" class="bds_more" data-cmd="more"></a>', "</div>"].join(""));
            var n = i(".item-page li");
            i.each(n, function (e, t) {
                i(t).on("click", function () {
                    if (!i(t).hasClass("active-doit")) {
                        n.removeClass("active-doit"), i(t).addClass("active-doit");
                        var s = r[e], o = e + 1;
                        e + 1 >= r.length && (o = 0);
                        var d = r[o];
                        a.changeDoit(s, d)
                    }
                })
            }), i(window).on("mousewheel", e), a.pageSet("second")
        }, changeDoit: function (e, a) {
            var t = this, r = i("section.curSection");
            i("#rootNode section").removeClass("curSection"), i("#" + e).addClass("curSection"), r.fadeOut(function () {
                var e = r.attr("id");
                switch (e) {
                    case"third":
                        n.reset();
                        break;
                    case"forth":
                        s.pause();
                        break;
                    case"fifth":
                        o.pause()
                }
            });
            var d = .6, c = {top: 0, ease: "Strong.easeOut"}, h = window.innerHeight;
            window.TweenMax.to(i("#" + e), 0, {top: h + "px"}), i("#" + e).fadeIn(0);
            var w = 1.5, v = {
                scale: 1, x: 0, rotation: 0, ease: "Strong.easeOut", onComplete: function () {
                    switch (e) {
                        case"forth":
                            s.done();
                            break;
                        case"fifth":
                            o.done()
                    }
                }
            };
            window.TweenMax.to(i("#" + e), w, v), window.TweenMax.to(i("#" + e), .5, {
                onComplete: function () {
                    switch (e) {
                        case"third":
                            n.init()
                    }
                }
            }), window.TweenMax.to(i("#" + e), d, c), t.pageSet(a)
        }, pageSet: function (e) {
            var a = .6, t = .6, n = 7, s = -70, o = 1.5;
            switch (e) {
                case"first":
                    n = 5, s = -70, o = 1.1;
                    break;
                case"second":
                    n = -5, s = 70, o = 1.1;
                    break;
                case"third":
                    n = 5, s = -70, o = 1.1;
                    break;
                case"forth":
                    n = -5, s = 70, o = 1.1;
                    break;
                case"fifth":
                    n = 5, s = -70, o = 1.1
            }
            window.TweenMax.to(i("#" + e), 0, {
                rotation: 0,
                top: 2 * window.innerHeight + "px"
            }), window.TweenMax.to(i("#" + e), a, {
                scale: o,
                x: s + "px",
                rotation: n
            }), window.TweenMax.to(i("#" + e), t, {top: window.innerHeight + 40 + "px"})
        }
    };
    t.exports = d
});
;define("activity-2016:widget/7th-anniversary/TweenMax.min.js", function (t, e, i) {
    var s = "undefined" != typeof i && i.exports && "undefined" != typeof global ? global : this || window;
    (s._gsQueue || (s._gsQueue = [])).push(function () {
        "use strict";
        s._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
            var s = function (t) {
                var e, i = [], s = t.length;
                for (e = 0; e !== s; i.push(t[e++]));
                return i
            }, r = function (t, e, i) {
                var s, r, n = t.cycle;
                for (s in n)r = n[s], t[s] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                delete t.cycle
            }, n = function (t, e, s) {
                i.call(this, t, e, s), this._cycle = 0, this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = n.prototype.render
            }, a = 1e-10, o = i._internals, l = o.isSelector, h = o.isArray, _ = n.prototype = i.to({}, .1, {}), u = [];
            n.version = "1.20.2", _.constructor = n, _.kill()._gc = !1, n.killTweensOf = n.killDelayedCallsTo = i.killTweensOf, n.getTweensOf = i.getTweensOf, n.lagSmoothing = i.lagSmoothing, n.ticker = i.ticker, n.render = i.render, _.invalidate = function () {
                return this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this)
            }, _.updateTo = function (t, e) {
                var s, r = this.ratio, n = this.vars.immediateRender || t.immediateRender;
                e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                for (s in t)this.vars[s] = t[s];
                if (this._initted || n)if (e)this._initted = !1, n && this.render(0, !0, !0); else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                    var a = this._totalTime;
                    this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
                } else if (this._initted = !1, this._init(), this._time > 0 || n)for (var o, l = 1 / (1 - r), h = this._firstPT; h;)o = h.s + h.c, h.c *= l, h.s = o - h.c, h = h._next;
                return this
            }, _.render = function (t, e, s) {
                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                var r, n, l, h, _, u, f, c, p, m = this._dirty ? this.totalDuration() : this._totalDuration, d = this._time, g = this._totalTime, y = this._cycle, v = this._duration, T = this._rawPrevTime;
                if (t >= m - 1e-7 && t >= 0 ? (this._totalTime = m, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, n = "onComplete", s = s || this._timeline.autoRemoveChildren), 0 === v && (this._initted || !this.vars.lazy || s) && (this._startTime === this._timeline._duration && (t = 0), (0 > T || 0 >= t && t >= -1e-7 || T === a && "isPause" !== this.data) && T !== t && (s = !0, T > a && (n = "onReverseComplete")), this._rawPrevTime = c = !e || t || T === t ? t : a)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === v && T > 0) && (n = "onReverseComplete", r = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || s) && (T >= 0 && (s = !0), this._rawPrevTime = c = !e || t || T === t ? t : a)), this._initted || (s = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = v + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && t >= g && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time, p = this._yoyoEase || this.vars.yoyoEase, p && (this._yoyoEase || (p !== !0 || this._initted ? this._yoyoEase = p = p === !0 ? this._ease : p instanceof Ease ? p : Ease.map[p] : (p = this.vars.ease, this._yoyoEase = p = p ? p instanceof Ease ? p : "function" == typeof p ? new Ease(p, this.vars.easeParams) : Ease.map[p] || i.defaultEase : i.defaultEase)), this.ratio = p ? 1 - p.getRatio((v - this._time) / v) : 0)), this._time > v ? this._time = v : this._time < 0 && (this._time = 0)), this._easeType && !p ? (_ = this._time / v, u = this._easeType, f = this._easePower, (1 === u || 3 === u && _ >= .5) && (_ = 1 - _), 3 === u && (_ *= 2), 1 === f ? _ *= _ : 2 === f ? _ *= _ * _ : 3 === f ? _ *= _ * _ * _ : 4 === f && (_ *= _ * _ * _ * _), this.ratio = 1 === u ? 1 - _ : 2 === u ? _ : this._time / v < .5 ? _ / 2 : 1 - _ / 2) : p || (this.ratio = this._ease.getRatio(this._time / v))), d === this._time && !s && y === this._cycle)return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc)return;
                    if (!s && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))return this._time = d, this._totalTime = g, this._rawPrevTime = T, this._cycle = y, o.lazyTweens.push(this), void(this._lazy = [t, e]);
                    !this._time || r || p ? r && this._ease._calcEnd && !p && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / v)
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== d && t >= 0 && (this._active = !0), 0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, s) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this._callback("onStart"))), l = this._firstPT; l;)l.f ? l.t[l.p](l.c * this.ratio + l.s) : l.t[l.p] = l.c * this.ratio + l.s, l = l._next;
                this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, s), e || (this._totalTime !== g || n) && this._callback("onUpdate")), this._cycle !== y && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), n && (!this._gc || s) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, s), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === v && this._rawPrevTime === a && c !== a && (this._rawPrevTime = 0))
            }, n.to = function (t, e, i) {
                return new n(t, e, i)
            }, n.from = function (t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new n(t, e, i)
            }, n.fromTo = function (t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new n(t, e, s)
            }, n.staggerTo = n.allTo = function (t, e, a, o, _, f, c) {
                o = o || 0;
                var p, m, d, g, y = 0, v = [], T = function () {
                    a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), _.apply(c || a.callbackScope || this, f || u)
                }, x = a.cycle, b = a.startAt && a.startAt.cycle;
                for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t))), t = t || [], 0 > o && (t = s(t), t.reverse(), o *= -1), p = t.length - 1, d = 0; p >= d; d++) {
                    m = {};
                    for (g in a)m[g] = a[g];
                    if (x && (r(m, t, d), null != m.duration && (e = m.duration, delete m.duration)), b) {
                        b = m.startAt = {};
                        for (g in a.startAt)b[g] = a.startAt[g];
                        r(m.startAt, t, d)
                    }
                    m.delay = y + (m.delay || 0), d === p && _ && (m.onComplete = T), v[d] = new n(t[d], e, m), y += o
                }
                return v
            }, n.staggerFrom = n.allFrom = function (t, e, i, s, r, a, o) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, n.staggerTo(t, e, i, s, r, a, o)
            }, n.staggerFromTo = n.allFromTo = function (t, e, i, s, r, a, o, l) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, n.staggerTo(t, e, s, r, a, o, l)
            }, n.delayedCall = function (t, e, i, s, r) {
                return new n(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, n.set = function (t, e) {
                return new n(t, 0, e)
            }, n.isTweening = function (t) {
                return i.getTweensOf(t, !0).length > 0
            };
            var f = function (t, e) {
                for (var s = [], r = 0, n = t._first; n;)n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(f(n, e)), r = s.length), n = n._next;
                return s
            }, c = n.getAllTweens = function (e) {
                return f(t._rootTimeline, e).concat(f(t._rootFramesTimeline, e))
            };
            n.killAll = function (t, i, s, r) {
                null == i && (i = !0), null == s && (s = !0);
                var n, a, o, l = c(0 != r), h = l.length, _ = i && s && r;
                for (o = 0; h > o; o++)a = l[o], (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
            }, n.killChildTweensOf = function (t, e) {
                if (null != t) {
                    var r, a, _, u, f, c = o.tweenLookup;
                    if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t)), h(t))for (u = t.length; --u > -1;)n.killChildTweensOf(t[u], e); else {
                        r = [];
                        for (_ in c)for (a = c[_].target.parentNode; a;)a === t && (r = r.concat(c[_].tweens)), a = a.parentNode;
                        for (f = r.length, u = 0; f > u; u++)e && r[u].totalTime(r[u].totalDuration()), r[u]._enabled(!1, !1)
                    }
                }
            };
            var p = function (t, i, s, r) {
                i = i !== !1, s = s !== !1, r = r !== !1;
                for (var n, a, o = c(r), l = i && s && r, h = o.length; --h > -1;)a = o[h], (l || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
            };
            return n.pauseAll = function (t, e, i) {
                p(!0, t, e, i)
            }, n.resumeAll = function (t, e, i) {
                p(!1, t, e, i)
            }, n.globalTimeScale = function (e) {
                var s = t._rootTimeline, r = i.ticker.time;
                return arguments.length ? (e = e || a, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
            }, _.progress = function (t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
            }, _.totalProgress = function (t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
            }, _.time = function (t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
            }, _.duration = function (e) {
                return arguments.length ? t.prototype.duration.call(this, e) : this._duration
            }, _.totalDuration = function (t) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
            }, _.repeat = function (t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, _.repeatDelay = function (t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, _.yoyo = function (t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, n
        }, !0), s._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
            var r = function (t) {
                e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                var i, s, r = this.vars;
                for (s in r)i = r[s], h(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
            }, n = 1e-10, a = i._internals, o = r._internals = {}, l = a.isSelector, h = a.isArray, _ = a.lazyTweens, u = a.lazyRender, f = s._gsDefine.globals, c = function (t) {
                var e, i = {};
                for (e in t)i[e] = t[e];
                return i
            }, p = function (t, e, i) {
                var s, r, n = t.cycle;
                for (s in n)r = n[s], t[s] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                delete t.cycle
            }, m = o.pauseCallback = function () {
            }, d = function (t) {
                var e, i = [], s = t.length;
                for (e = 0; e !== s; i.push(t[e++]));
                return i
            }, g = r.prototype = new e;
            return r.version = "1.20.2", g.constructor = r, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function (t, e, s, r) {
                var n = s.repeat && f.TweenMax || i;
                return e ? this.add(new n(t, e, s), r) : this.set(t, s, r)
            }, g.from = function (t, e, s, r) {
                return this.add((s.repeat && f.TweenMax || i).from(t, e, s), r)
            }, g.fromTo = function (t, e, s, r, n) {
                var a = r.repeat && f.TweenMax || i;
                return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
            }, g.staggerTo = function (t, e, s, n, a, o, h, _) {
                var u, f, m = new r({
                    onComplete: o,
                    onCompleteParams: h,
                    callbackScope: _,
                    smoothChildTiming: this.smoothChildTiming
                }), g = s.cycle;
                for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], l(t) && (t = d(t)), n = n || 0, 0 > n && (t = d(t), t.reverse(), n *= -1), f = 0; f < t.length; f++)u = c(s), u.startAt && (u.startAt = c(u.startAt), u.startAt.cycle && p(u.startAt, t, f)), g && (p(u, t, f), null != u.duration && (e = u.duration, delete u.duration)), m.to(t[f], e, u, f * n);
                return this.add(m, a)
            }, g.staggerFrom = function (t, e, i, s, r, n, a, o) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
            }, g.staggerFromTo = function (t, e, i, s, r, n, a, o, l) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, l)
            }, g.call = function (t, e, s, r) {
                return this.add(i.delayedCall(0, t, e, s), r)
            }, g.set = function (t, e, s) {
                return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
            }, r.exportRoot = function (t, e) {
                t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                var s, n, a = new r(t), o = a._timeline;
                for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, s = o._first; s;)n = s._next, e && s instanceof i && s.target === s.vars.onComplete || a.add(s, s._startTime - s._delay), s = n;
                return o.add(a, 0), a
            }, g.add = function (s, n, a, o) {
                var l, _, u, f, c, p;
                if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, s)), !(s instanceof t)) {
                    if (s instanceof Array || s && s.push && h(s)) {
                        for (a = a || "normal", o = o || 0, l = n, _ = s.length, u = 0; _ > u; u++)h(f = s[u]) && (f = new r({tweens: f})), this.add(f, l), "string" != typeof f && "function" != typeof f && ("sequence" === a ? l = f._startTime + f.totalDuration() / f._timeScale : "start" === a && (f._startTime -= f.delay())), l += o;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof s)return this.addLabel(s, n);
                    if ("function" != typeof s)throw"Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
                    s = i.delayedCall(0, s)
                }
                if (e.prototype.add.call(this, s, n), s._time && s.render((this.rawTime() - s._startTime) * s._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())for (c = this, p = c.rawTime() > s._startTime; c._timeline;)p && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline;
                return this
            }, g.remove = function (e) {
                if (e instanceof t) {
                    this._remove(e, !1);
                    var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                    return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                }
                if (e instanceof Array || e && e.push && h(e)) {
                    for (var s = e.length; --s > -1;)this.remove(e[s]);
                    return this
                }
                return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
            }, g._remove = function (t, i) {
                e.prototype._remove.call(this, t, i);
                var s = this._last;
                return s ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, g.append = function (t, e) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
            }, g.insert = g.insertMultiple = function (t, e, i, s) {
                return this.add(t, e || 0, i, s)
            }, g.appendMultiple = function (t, e, i, s) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
            }, g.addLabel = function (t, e) {
                return this._labels[t] = this._parseTimeOrLabel(e), this
            }, g.addPause = function (t, e, s, r) {
                var n = i.delayedCall(0, m, s, r || this);
                return n.vars.onComplete = n.vars.onReverseComplete = e, n.data = "isPause", this._hasPause = !0, this.add(n, t)
            }, g.removeLabel = function (t) {
                return delete this._labels[t], this
            }, g.getLabelTime = function (t) {
                return null != this._labels[t] ? this._labels[t] : -1
            }, g._parseTimeOrLabel = function (e, i, s, r) {
                var n, a;
                if (r instanceof t && r.timeline === this)this.remove(r); else if (r && (r instanceof Array || r.push && h(r)))for (a = r.length; --a > -1;)r[a] instanceof t && r[a].timeline === this && this.remove(r[a]);
                if (n = this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration, "string" == typeof i)return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - n : 0, s);
                if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e])null == e && (e = n); else {
                    if (a = e.indexOf("="), -1 === a)return null == this._labels[e] ? s ? this._labels[e] = n + i : i : this._labels[e] + i;
                    i = parseInt(e.charAt(a - 1) + "1", 10) * Number(e.substr(a + 1)), e = a > 1 ? this._parseTimeOrLabel(e.substr(0, a - 1), 0, s) : n
                }
                return Number(e) + i
            }, g.seek = function (t, e) {
                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
            }, g.stop = function () {
                return this.paused(!0)
            }, g.gotoAndPlay = function (t, e) {
                return this.play(t, e)
            }, g.gotoAndStop = function (t, e) {
                return this.pause(t, e)
            }, g.render = function (t, e, i) {
                this._gc && this._enabled(!0, !1);
                var s, r, a, o, l, h, f, c = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time, m = this._startTime, d = this._timeScale, g = this._paused;
                if (t >= c - 1e-7 && t >= 0)this._totalTime = this._time = c, this._reversed || this._hasPausedChild() || (r = !0, o = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === n) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > n && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, t = c + 1e-4; else if (1e-7 > t)if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== n && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", r = this._reversed), 0 > t)this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = r = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t; else {
                    if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, 0 === t && r)for (s = this._first; s && 0 === s._startTime;)s._duration || (r = !1), s = s._next;
                    t = 0, this._initted || (l = !0)
                } else {
                    if (this._hasPause && !this._forcingPlayhead && !e) {
                        if (t >= p)for (s = this._first; s && s._startTime <= t && !h;)s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (h = s), s = s._next; else for (s = this._last; s && s._startTime >= t && !h;)s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (h = s), s = s._prev;
                        h && (this._time = t = h._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    this._totalTime = this._time = this._rawPrevTime = t
                }
                if (this._time !== p && this._first || i || l || h) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), f = this._time, f >= p)for (s = this._first; s && (a = s._next, f === this._time && (!this._paused || g));)(s._active || s._startTime <= f && !s._paused && !s._gc) && (h === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a; else for (s = this._last; s && (a = s._prev, f === this._time && (!this._paused || g));) {
                        if (s._active || s._startTime <= p && !s._paused && !s._gc) {
                            if (h === s) {
                                for (h = s._prev; h && h.endTime() > this._time;)h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i), h = h._prev;
                                h = null, this.pause()
                            }
                            s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                        }
                        s = a
                    }
                    this._onUpdate && (e || (_.length && u(), this._callback("onUpdate"))), o && (this._gc || (m === this._startTime || d !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (r && (_.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
                }
            }, g._hasPausedChild = function () {
                for (var t = this._first; t;) {
                    if (t._paused || t instanceof r && t._hasPausedChild())return !0;
                    t = t._next
                }
                return !1
            }, g.getChildren = function (t, e, s, r) {
                r = r || -9999999999;
                for (var n = [], a = this._first, o = 0; a;)a._startTime < r || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
                return n
            }, g.getTweensOf = function (t, e) {
                var s, r, n = this._gc, a = [], o = 0;
                for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
                return n && this._enabled(!1, !0), a
            }, g.recent = function () {
                return this._recent
            }, g._contains = function (t) {
                for (var e = t.timeline; e;) {
                    if (e === this)return !0;
                    e = e.timeline
                }
                return !1
            }, g.shiftChildren = function (t, e, i) {
                i = i || 0;
                for (var s, r = this._first, n = this._labels; r;)r._startTime >= i && (r._startTime += t), r = r._next;
                if (e)for (s in n)n[s] >= i && (n[s] += t);
                return this._uncache(!0)
            }, g._kill = function (t, e) {
                if (!t && !e)return this._enabled(!1, !1);
                for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;)i[s]._kill(t, e) && (r = !0);
                return r
            }, g.clear = function (t) {
                var e = this.getChildren(!1, !0, !0), i = e.length;
                for (this._time = this._totalTime = 0; --i > -1;)e[i]._enabled(!1, !1);
                return t !== !1 && (this._labels = {}), this._uncache(!0)
            }, g.invalidate = function () {
                for (var e = this._first; e;)e.invalidate(), e = e._next;
                return t.prototype.invalidate.call(this)
            }, g._enabled = function (t, i) {
                if (t === this._gc)for (var s = this._first; s;)s._enabled(t, !0), s = s._next;
                return e.prototype._enabled.call(this, t, i)
            }, g.totalTime = function () {
                this._forcingPlayhead = !0;
                var e = t.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, e
            }, g.duration = function (t) {
                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
            }, g.totalDuration = function (t) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var e, i, s = 0, r = this._last, n = 999999999999; r;)e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, r._startTime < 0 && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                        this._duration = this._totalDuration = s, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
            }, g.paused = function (e) {
                if (!e)for (var i = this._first, s = this._time; i;)i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                return t.prototype.paused.apply(this, arguments)
            }, g.usesFrames = function () {
                for (var e = this._timeline; e._timeline;)e = e._timeline;
                return e === t._rootFramesTimeline
            }, g.rawTime = function (t) {
                return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
            }, r
        }, !0), s._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, i) {
            var r = function (e) {
                t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
            }, n = 1e-10, a = e._internals, o = a.lazyTweens, l = a.lazyRender, h = s._gsDefine.globals, _ = new i(null, null, 1, 0), u = r.prototype = new t;
            return u.constructor = r, u.kill()._gc = !1, r.version = "1.20.2", u.invalidate = function () {
                return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
            }, u.addCallback = function (t, i, s, r) {
                return this.add(e.delayedCall(0, t, s, r), i)
            }, u.removeCallback = function (t, e) {
                if (t)if (null == e)this._kill(null, t); else for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;)i[s]._startTime === r && i[s]._enabled(!1, !1);
                return this
            }, u.removePause = function (e) {
                return this.removeCallback(t._internals.pauseCallback, e)
            }, u.tweenTo = function (t, i) {
                i = i || {};
                var s, r, n, a = {
                    ease: _,
                    useFrames: this.usesFrames(),
                    immediateRender: !1
                }, o = i.repeat && h.TweenMax || e;
                for (r in i)a[r] = i[r];
                return a.time = this._parseTimeOrLabel(t), s = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, n = new o(this, s, a), a.onStart = function () {
                    n.target.paused(!0), n.vars.time !== n.target.time() && s === n.duration() && n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || n, i.onStartParams || [])
                }, n
            }, u.tweenFromTo = function (t, e, i) {
                i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                    onComplete: this.seek,
                    onCompleteParams: [t],
                    callbackScope: this
                }, i.immediateRender = i.immediateRender !== !1;
                var s = this.tweenTo(e, i);
                return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
            }, u.render = function (t, e, i) {
                this._gc && this._enabled(!0, !1);
                var s, r, a, h, _, u, f, c, p = this._dirty ? this.totalDuration() : this._totalDuration, m = this._duration, d = this._time, g = this._totalTime, y = this._startTime, v = this._timeScale, T = this._rawPrevTime, x = this._paused, b = this._cycle;
                if (t >= p - 1e-7 && t >= 0)this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, h = "onComplete", _ = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > T || T === n) && T !== t && this._first && (_ = !0, T > n && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = m, t = m + 1e-4); else if (1e-7 > t)if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== d || 0 === m && T !== n && (T > 0 || 0 > t && T >= 0) && !this._locked) && (h = "onReverseComplete", r = this._reversed), 0 > t)this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (_ = r = !0, h = "onReverseComplete") : T >= 0 && this._first && (_ = !0), this._rawPrevTime = t; else {
                    if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : n, 0 === t && r)for (s = this._first; s && 0 === s._startTime;)s._duration || (r = !1), s = s._next;
                    t = 0, this._initted || (_ = !0)
                } else if (0 === m && 0 > T && (_ = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = m + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && t >= g && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                    if (t = this._time, t >= d || this._repeat && b !== this._cycle)for (s = this._first; s && s._startTime <= t && !f;)s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (f = s), s = s._next; else for (s = this._last; s && s._startTime >= t && !f;)s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (f = s), s = s._prev;
                    f && f._startTime < m && (this._time = t = f._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                if (this._cycle !== b && !this._locked) {
                    var w = this._yoyo && 0 !== (1 & b), P = w === (this._yoyo && 0 !== (1 & this._cycle)), O = this._totalTime, k = this._cycle, S = this._rawPrevTime, R = this._time;
                    if (this._totalTime = b * m, this._cycle < b ? w = !w : this._totalTime += m, this._time = d, this._rawPrevTime = 0 === m ? T - 1e-4 : T, this._cycle = b, this._locked = !0, d = w ? 0 : m, this.render(d, e, 0 === m), e || this._gc || this.vars.onRepeat && (this._cycle = k, this._locked = !1, this._callback("onRepeat")), d !== this._time)return;
                    if (P && (this._cycle = b, this._locked = !0, d = w ? m + 1e-4 : -1e-4, this.render(d, !0, !1)), this._locked = !1, this._paused && !x)return;
                    this._time = R, this._totalTime = O, this._cycle = k, this._rawPrevTime = S
                }
                if (!(this._time !== d && this._first || i || _ || f))return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), c = this._time, c >= d)for (s = this._first; s && (a = s._next, c === this._time && (!this._paused || x));)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (f === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a; else for (s = this._last; s && (a = s._prev, c === this._time && (!this._paused || x));) {
                    if (s._active || s._startTime <= d && !s._paused && !s._gc) {
                        if (f === s) {
                            for (f = s._prev; f && f.endTime() > this._time;)f.render(f._reversed ? f.totalDuration() - (t - f._startTime) * f._timeScale : (t - f._startTime) * f._timeScale, e, i), f = f._prev;
                            f = null, this.pause()
                        }
                        s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                    }
                    s = a
                }
                this._onUpdate && (e || (o.length && l(), this._callback("onUpdate"))), h && (this._locked || this._gc || (y === this._startTime || v !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (r && (o.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
            }, u.getActive = function (t, e, i) {
                null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                var s, r, n = [], a = this.getChildren(t, e, i), o = 0, l = a.length;
                for (s = 0; l > s; s++)r = a[s], r.isActive() && (n[o++] = r);
                return n
            }, u.getLabelAfter = function (t) {
                t || 0 !== t && (t = this._time);
                var e, i = this.getLabelsArray(), s = i.length;
                for (e = 0; s > e; e++)if (i[e].time > t)return i[e].name;
                return null
            }, u.getLabelBefore = function (t) {
                null == t && (t = this._time);
                for (var e = this.getLabelsArray(), i = e.length; --i > -1;)if (e[i].time < t)return e[i].name;
                return null
            }, u.getLabelsArray = function () {
                var t, e = [], i = 0;
                for (t in this._labels)e[i++] = {time: this._labels[t], name: t};
                return e.sort(function (t, e) {
                    return t.time - e.time
                }), e
            }, u.invalidate = function () {
                return this._locked = !1, t.prototype.invalidate.call(this)
            }, u.progress = function (t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
            }, u.totalProgress = function (t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
            }, u.totalDuration = function (e) {
                return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, u.time = function (t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
            }, u.repeat = function (t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, u.repeatDelay = function (t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, u.yoyo = function (t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, u.currentLabel = function (t) {
                return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
            }, r
        }, !0), function () {
            var t = 180 / Math.PI, e = [], i = [], r = [], n = {}, a = s._gsDefine.globals, o = function (t, e, i, s) {
                i === s && (i = s - (s - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
            }, l = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", h = function (t, e, i, s) {
                var r = {a: t}, n = {}, a = {}, o = {c: s}, l = (t + e) / 2, h = (e + i) / 2, _ = (i + s) / 2, u = (l + h) / 2, f = (h + _) / 2, c = (f - u) / 8;
                return r.b = l + (t - l) / 4, n.b = u + c, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + f) / 2, a.b = f - c, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o]
            }, _ = function (t, s, n, a, o) {
                var l, _, u, f, c, p, m, d, g, y, v, T, x, b = t.length - 1, w = 0, P = t[0].a;
                for (l = 0; b > l; l++)c = t[w], _ = c.a, u = c.d, f = t[w + 1].d, o ? (v = e[l], T = i[l], x = (T + v) * s * .25 / (a ? .5 : r[l] || .5), p = u - (u - _) * (a ? .5 * s : 0 !== v ? x / v : 0), m = u + (f - u) * (a ? .5 * s : 0 !== T ? x / T : 0), d = u - (p + ((m - p) * (3 * v / (v + T) + .5) / 4 || 0))) : (p = u - (u - _) * s * .5, m = u + (f - u) * s * .5, d = u - (p + m) / 2), p += d, m += d, c.c = g = p, c.b = 0 !== l ? P : P = c.a + .6 * (c.c - c.a), c.da = u - _, c.ca = g - _, c.ba = P - _, n ? (y = h(_, P, g, u), t.splice(w, 1, y[0], y[1], y[2], y[3]), w += 4) : w++, P = m;
                c = t[w], c.b = P, c.c = P + .4 * (c.d - P), c.da = c.d - c.a, c.ca = c.c - c.a, c.ba = P - c.a, n && (y = h(c.a, P, c.c, c.d), t.splice(w, 1, y[0], y[1], y[2], y[3]))
            }, u = function (t, s, r, n) {
                var a, l, h, _, u, f, c = [];
                if (n)for (t = [n].concat(t), l = t.length; --l > -1;)"string" == typeof(f = t[l][s]) && "=" === f.charAt(1) && (t[l][s] = n[s] + Number(f.charAt(0) + f.substr(2)));
                if (a = t.length - 2, 0 > a)return c[0] = new o(t[0][s], 0, 0, t[0][s]), c;
                for (l = 0; a > l; l++)h = t[l][s], _ = t[l + 1][s], c[l] = new o(h, 0, 0, _), r && (u = t[l + 2][s], e[l] = (e[l] || 0) + (_ - h) * (_ - h), i[l] = (i[l] || 0) + (u - _) * (u - _));
                return c[l] = new o(t[l][s], 0, 0, t[l + 1][s]), c
            }, f = function (t, s, a, o, h, f) {
                var c, p, m, d, g, y, v, T, x = {}, b = [], w = f || t[0];
                h = "string" == typeof h ? "," + h + "," : l, null == s && (s = 1);
                for (p in t[0])b.push(p);
                if (t.length > 1) {
                    for (T = t[t.length - 1], v = !0, c = b.length; --c > -1;)if (p = b[c], Math.abs(w[p] - T[p]) > .05) {
                        v = !1;
                        break
                    }
                    v && (t = t.concat(), f && t.unshift(f), t.push(t[1]), f = t[t.length - 3])
                }
                for (e.length = i.length = r.length = 0, c = b.length; --c > -1;)p = b[c], n[p] = -1 !== h.indexOf("," + p + ","), x[p] = u(t, p, n[p], f);
                for (c = e.length; --c > -1;)e[c] = Math.sqrt(e[c]), i[c] = Math.sqrt(i[c]);
                if (!o) {
                    for (c = b.length; --c > -1;)if (n[p])for (m = x[b[c]], y = m.length - 1, d = 0; y > d; d++)g = m[d + 1].da / i[d] + m[d].da / e[d] || 0, r[d] = (r[d] || 0) + g * g;
                    for (c = r.length; --c > -1;)r[c] = Math.sqrt(r[c])
                }
                for (c = b.length, d = a ? 4 : 1; --c > -1;)p = b[c], m = x[p], _(m, s, a, o, n[p]), v && (m.splice(0, d), m.splice(m.length - d, d));
                return x
            }, c = function (t, e, i) {
                e = e || "soft";
                var s, r, n, a, l, h, _, u, f, c, p, m = {}, d = "cubic" === e ? 3 : 2, g = "soft" === e, y = [];
                if (g && i && (t = [i].concat(t)), null == t || t.length < d + 1)throw"invalid Bezier data";
                for (f in t[0])y.push(f);
                for (h = y.length; --h > -1;) {
                    for (f = y[h], m[f] = l = [], c = 0, u = t.length, _ = 0; u > _; _++)s = null == i ? t[_][f] : "string" == typeof(p = t[_][f]) && "=" === p.charAt(1) ? i[f] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && _ > 1 && u - 1 > _ && (l[c++] = (s + l[c - 2]) / 2), l[c++] = s;
                    for (u = c - d + 1, c = 0, _ = 0; u > _; _ += d)s = l[_], r = l[_ + 1], n = l[_ + 2], a = 2 === d ? 0 : l[_ + 3], l[c++] = p = 3 === d ? new o(s, r, n, a) : new o(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                    l.length = c
                }
                return m
            }, p = function (t, e, i) {
                for (var s, r, n, a, o, l, h, _, u, f, c, p = 1 / i, m = t.length; --m > -1;)for (f = t[m], n = f.a, a = f.d - n, o = f.c - n, l = f.b - n, s = r = 0, _ = 1; i >= _; _++)h = p * _, u = 1 - h, s = r - (r = (h * h * a + 3 * u * (h * o + u * l)) * h), c = m * i + _ - 1, e[c] = (e[c] || 0) + s * s
            }, m = function (t, e) {
                e = e >> 0 || 6;
                var i, s, r, n, a = [], o = [], l = 0, h = 0, _ = e - 1, u = [], f = [];
                for (i in t)p(t[i], a, e);
                for (r = a.length, s = 0; r > s; s++)l += Math.sqrt(a[s]), n = s % e, f[n] = l, n === _ && (h += l, n = s / e >> 0, u[n] = f, o[n] = h, l = 0, f = []);
                return {length: h, lengths: o, segments: u}
            }, d = s._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.8",
                API: 2,
                global: !0,
                init: function (t, e, i) {
                    this._target = t, e instanceof Array && (e = {values: e}), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                    var s, r, n, a, o, l = e.values || [], h = {}, _ = l[0], u = e.autoRotate || i.vars.orientToBezier;
                    this._autoRotate = u ? u instanceof Array ? u : [["x", "y", "rotation", u === !0 ? 0 : Number(u) || 0]] : null;
                    for (s in _)this._props.push(s);
                    for (n = this._props.length; --n > -1;)s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], h[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || h[s] !== l[0][s] && (o = h);
                    if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? f(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : c(l, e.type, h), this._segCount = this._beziers[s].length, this._timeRes) {
                        var p = m(this._beziers, this._timeRes);
                        this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                    }
                    if (u = this._autoRotate)for (this._initialRotations = [], u[0] instanceof Array || (this._autoRotate = u = [u]), n = u.length; --n > -1;) {
                        for (a = 0; 3 > a; a++)s = u[n][a], this._func[s] = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)] : !1;
                        s = u[n][2], this._initialRotations[n] = (this._func[s] ? this._func[s].call(this._target) : this._target[s]) || 0, this._overwriteProps.push(s)
                    }
                    return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                },
                set: function (e) {
                    var i, s, r, n, a, o, l, h, _, u, f = this._segCount, c = this._func, p = this._target, m = e !== this._startRatio;
                    if (this._timeRes) {
                        if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && f - 1 > r) {
                            for (h = f - 1; h > r && (this._l2 = _[++r]) <= e;);
                            this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                        } else if (e < this._l1 && r > 0) {
                            for (; r > 0 && (this._l1 = _[--r]) >= e;);
                            0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                        }
                        if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < u.length - 1) {
                            for (h = u.length - 1; h > r && (this._s2 = u[++r]) <= e;);
                            this._s1 = u[r - 1], this._si = r
                        } else if (e < this._s1 && r > 0) {
                            for (; r > 0 && (this._s1 = u[--r]) >= e;);
                            0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                        }
                        o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                    } else i = 0 > e ? 0 : e >= 1 ? f - 1 : f * e >> 0, o = (e - i * (1 / f)) * f;
                    for (s = 1 - o, r = this._props.length; --r > -1;)n = this._props[r], a = this._beziers[n][i], l = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._mod[n] && (l = this._mod[n](l, p)), c[n] ? p[n](l) : p[n] = l;
                    if (this._autoRotate) {
                        var d, g, y, v, T, x, b, w = this._autoRotate;
                        for (r = w.length; --r > -1;)n = w[r][2], x = w[r][3] || 0, b = w[r][4] === !0 ? 1 : t, a = this._beziers[w[r][0]], d = this._beziers[w[r][1]], a && d && (a = a[i], d = d[i], g = a.a + (a.b - a.a) * o, v = a.b + (a.c - a.b) * o, g += (v - g) * o, v += (a.c + (a.d - a.c) * o - v) * o, y = d.a + (d.b - d.a) * o, T = d.b + (d.c - d.b) * o, y += (T - y) * o, T += (d.c + (d.d - d.c) * o - T) * o, l = m ? Math.atan2(T - y, v - g) * b + x : this._initialRotations[r], this._mod[n] && (l = this._mod[n](l, p)), c[n] ? p[n](l) : p[n] = l)
                    }
                }
            }), g = d.prototype;
            d.bezierThrough = f, d.cubicToQuadratic = h, d._autoCSS = !0, d.quadraticToCubic = function (t, e, i) {
                return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
            }, d._cssRegister = function () {
                var t = a.CSSPlugin;
                if (t) {
                    var e = t._internals, i = e._parseToProxy, s = e._setPluginRatio, r = e.CSSPropTween;
                    e._registerComplexSpecialProp("bezier", {
                        parser: function (t, e, n, a, o, l) {
                            e instanceof Array && (e = {values: e}), l = new d;
                            var h, _, u, f = e.values, c = f.length - 1, p = [], m = {};
                            if (0 > c)return o;
                            for (h = 0; c >= h; h++)u = i(t, f[h], a, o, l, c !== h), p[h] = u.end;
                            for (_ in e)m[_] = e[_];
                            return m.values = p, o = new r(t, "bezier", 0, 0, u.pt, 2), o.data = u, o.plugin = l, o.setRatio = s, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (h = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != u.end.left ? [["left", "top", "rotation", h, !1]] : null != u.end.x ? [["x", "y", "rotation", h, !1]] : !1), m.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform, u.proxy.rotation = u.autoRotate.rotation || 0, a._overwriteProps.push("rotation")), l._onInitTween(u.proxy, m, a._tween), o
                        }
                    })
                }
            }, g._mod = function (t) {
                for (var e, i = this._overwriteProps, s = i.length; --s > -1;)e = t[i[s]], e && "function" == typeof e && (this._mod[i[s]] = e)
            }, g._kill = function (t) {
                var e, i, s = this._props;
                for (e in this._beziers)if (e in t)for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;)s[i] === e && s.splice(i, 1);
                if (s = this._autoRotate)for (i = s.length; --i > -1;)t[s[i][2]] && s.splice(i, 1);
                return this._super._kill.call(this, t)
            }
        }(), s._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
            var i, r, n, a, o = function () {
                t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
            }, l = s._gsDefine.globals, h = {}, _ = o.prototype = new t("css");
            _.constructor = o, o.version = "1.20.0", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, _ = "px", o.suffixMap = {
                top: _,
                right: _,
                bottom: _,
                left: _,
                width: _,
                height: _,
                fontSize: _,
                padding: _,
                margin: _,
                perspective: _,
                lineHeight: ""
            };
            var u, f, c, p, m, d, g, y, v = /(?:\-|\.|\b)(\d|\.|e\-)+/g, T = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, w = /(?:\d|\-|\+|=|#|\.)*/g, P = /opacity *= *([^)]*)/i, O = /opacity:([^;]*)/i, k = /alpha\(opacity *=.+?\)/i, S = /^(rgb|hsl)/, R = /([A-Z])/g, A = /-([a-z])/gi, C = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, M = function (t, e) {
                return e.toUpperCase()
            }, D = /(?:Left|Right|Width)/i, F = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, z = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, E = /,(?=[^\)]*(?:\(|$))/gi, I = /[\s,\(]/i, X = Math.PI / 180, N = 180 / Math.PI, L = {}, B = {style: {}}, Y = s.document || {
                    createElement: function () {
                        return B
                    }
                }, j = function (t, e) {
                return Y.createElementNS ? Y.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : Y.createElement(t)
            }, U = j("div"), V = j("img"), q = o._internals = {_specialProps: h}, W = (s.navigator || {}).userAgent || "", G = function () {
                var t = W.indexOf("Android"), e = j("a");
                return c = -1 !== W.indexOf("Safari") && -1 === W.indexOf("Chrome") && (-1 === t || parseFloat(W.substr(t + 8, 2)) > 3), m = c && parseFloat(W.substr(W.indexOf("Version/") + 8, 2)) < 6, p = -1 !== W.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(W) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(W)) && (d = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
            }(), Z = function (t) {
                return P.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }, H = function (t) {
                s.console && console.log(t)
            }, $ = "", Q = "", K = function (t, e) {
                e = e || U;
                var i, s, r = e.style;
                if (void 0 !== r[t])return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
                return s >= 0 ? (Q = 3 === s ? "ms" : i[s], $ = "-" + Q.toLowerCase() + "-", Q + t) : null
            }, J = Y.defaultView ? Y.defaultView.getComputedStyle : function () {
            }, te = o.getStyle = function (t, e, i, s, r) {
                var n;
                return G || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || J(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(R, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : Z(t)
            }, ee = q.convertToPixels = function (t, i, s, r, n) {
                if ("px" === r || !r && "lineHeight" !== i)return s;
                if ("auto" === r || !s)return 0;
                var a, l, h, _ = D.test(i), u = t, f = U.style, c = 0 > s, p = 1 === s;
                if (c && (s = -s), p && (s *= 100), "lineHeight" !== i || r)if ("%" === r && -1 !== i.indexOf("border"))a = s / 100 * (_ ? t.clientWidth : t.clientHeight); else {
                    if (f.cssText = "border:0 solid red;position:" + te(t, "position") + ";line-height:0;", "%" !== r && u.appendChild && "v" !== r.charAt(0) && "rem" !== r)f[_ ? "borderLeftWidth" : "borderTopWidth"] = s + r; else {
                        if (u = t.parentNode || Y.body, -1 !== te(u, "display").indexOf("flex") && (f.position = "absolute"), l = u._gsCache, h = e.ticker.frame, l && _ && l.time === h)return l.width * s / 100;
                        f[_ ? "width" : "height"] = s + r
                    }
                    u.appendChild(U), a = parseFloat(U[_ ? "offsetWidth" : "offsetHeight"]), u.removeChild(U), _ && "%" === r && o.cacheWidths !== !1 && (l = u._gsCache = u._gsCache || {}, l.time = h, l.width = a / s * 100), 0 !== a || n || (a = ee(t, i, s, r, !0))
                } else l = J(t).lineHeight, t.style.lineHeight = s, a = parseFloat(J(t).lineHeight), t.style.lineHeight = l;
                return p && (a /= 100), c ? -a : a
            }, ie = q.calculateOffset = function (t, e, i) {
                if ("absolute" !== te(t, "position", i))return 0;
                var s = "left" === e ? "Left" : "Top", r = te(t, "margin" + s, i);
                return t["offset" + s] - (ee(t, e, parseFloat(r), r.replace(w, "")) || 0)
            }, se = function (t, e) {
                var i, s, r, n = {};
                if (e = e || J(t, null))if (i = e.length)for (; --i > -1;)r = e[i], (-1 === r.indexOf("-transform") || Ce === r) && (n[r.replace(A, M)] = e.getPropertyValue(r)); else for (i in e)(-1 === i.indexOf("Transform") || Ae === i) && (n[i] = e[i]); else if (e = t.currentStyle || t.style)for (i in e)"string" == typeof i && void 0 === n[i] && (n[i.replace(A, M)] = e[i]);
                return G || (n.opacity = Z(t)), s = Ve(t, e, !1), n.rotation = s.rotation, n.skewX = s.skewX, n.scaleX = s.scaleX, n.scaleY = s.scaleY, n.x = s.x, n.y = s.y, De && (n.z = s.z, n.rotationX = s.rotationX, n.rotationY = s.rotationY, n.scaleZ = s.scaleZ), n.filters && delete n.filters, n
            }, re = function (t, e, i, s, r) {
                var n, a, o, l = {}, h = t.style;
                for (a in i)"cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(b, "") ? n : 0 : ie(t, a), void 0 !== h[a] && (o = new ve(h, a, h[a], o)));
                if (s)for (a in s)"className" !== a && (l[a] = s[a]);
                return {difs: l, firstMPT: o}
            }, ne = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            }, ae = ["marginLeft", "marginRight", "marginTop", "marginBottom"], oe = function (t, e, i) {
                if ("svg" === (t.nodeName + "").toLowerCase())return (i || J(t))[e] || 0;
                if (t.getCTM && Ye(t))return t.getBBox()[e] || 0;
                var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight), r = ne[e], n = r.length;
                for (i = i || J(t, null); --n > -1;)s -= parseFloat(te(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(te(t, "border" + r[n] + "Width", i, !0)) || 0;
                return s
            }, le = function (t, e) {
                if ("contain" === t || "auto" === t || "auto auto" === t)return t + " ";
                (null == t || "" === t) && (t = "0 0");
                var i, s = t.split(" "), r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : s[0], n = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : s[1];
                if (s.length > 3 && !e) {
                    for (s = t.split(", ").join(",").split(","), t = [], i = 0; i < s.length; i++)t.push(le(s[i]));
                    return t.join(",")
                }
                return null == n ? n = "center" === r ? "50%" : "0" : "center" === n && (n = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + n + (s.length > 2 ? " " + s[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== n.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === n.charAt(1), e.ox = parseFloat(r.replace(b, "")), e.oy = parseFloat(n.replace(b, "")), e.v = t), e || t
            }, he = function (t, e) {
                return "function" == typeof t && (t = t(y, g)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
            }, _e = function (t, e) {
                return "function" == typeof t && (t = t(y, g)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
            }, ue = function (t, e, i, s) {
                var r, n, a, o, l, h = 1e-6;
                return "function" == typeof t && (t = t(y, g)), null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), l = "=" === t.charAt(1), a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : N) - (l ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (a / r | 0) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (a / r | 0) * r)), o = e + a), h > o && o > -h && (o = 0), o
            }, fe = {
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
            }, ce = function (t, e, i) {
                return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
            }, pe = o.parseColor = function (t, e) {
                var i, s, r, n, a, o, l, h, _, u, f;
                if (t)if ("number" == typeof t)i = [t >> 16, t >> 8 & 255, 255 & t]; else {
                    if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), fe[t])i = fe[t]; else if ("#" === t.charAt(0))4 === t.length && (s = t.charAt(1), r = t.charAt(2), n = t.charAt(3), t = "#" + s + s + r + r + n + n), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t]; else if ("hsl" === t.substr(0, 3))if (i = f = t.match(v), e) {
                        if (-1 !== t.indexOf("="))return t.match(T)
                    } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, l = Number(i[2]) / 100, r = .5 >= l ? l * (o + 1) : l + o - l * o, s = 2 * l - r, i.length > 3 && (i[3] = Number(t[3])), i[0] = ce(a + 1 / 3, s, r), i[1] = ce(a, s, r), i[2] = ce(a - 1 / 3, s, r); else i = t.match(v) || fe.transparent;
                    i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                } else i = fe.black;
                return e && !f && (s = i[0] / 255, r = i[1] / 255, n = i[2] / 255, h = Math.max(s, r, n), _ = Math.min(s, r, n), l = (h + _) / 2, h === _ ? a = o = 0 : (u = h - _, o = l > .5 ? u / (2 - h - _) : u / (h + _), a = h === s ? (r - n) / u + (n > r ? 6 : 0) : h === r ? (n - s) / u + 2 : (s - r) / u + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * o + .5 | 0, i[2] = 100 * l + .5 | 0), i
            }, me = function (t, e) {
                var i, s, r, n = t.match(de) || [], a = 0, o = "";
                if (!n.length)return t;
                for (i = 0; i < n.length; i++)s = n[i], r = t.substr(a, t.indexOf(s, a) - a), a += r.length + s.length, s = pe(s, e), 3 === s.length && s.push(1), o += r + (e ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] : "rgba(" + s.join(",")) + ")";
                return o + t.substr(a)
            }, de = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (_ in fe)de += "|" + _ + "\\b";
            de = new RegExp(de + ")", "gi"), o.colorStringFilter = function (t) {
                var e, i = t[0] + " " + t[1];
                de.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = me(t[0], e), t[1] = me(t[1], e)), de.lastIndex = 0
            }, e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
            var ge = function (t, e, i, s) {
                if (null == t)return function (t) {
                    return t
                };
                var r, n = e ? (t.match(de) || [""])[0] : "", a = t.split(n).join("").match(x) || [], o = t.substr(0, t.indexOf(a[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "", h = -1 !== t.indexOf(" ") ? " " : ",", _ = a.length, u = _ > 0 ? a[0].replace(v, "") : "";
                return _ ? r = e ? function (t) {
                    var e, f, c, p;
                    if ("number" == typeof t)t += u; else if (s && E.test(t)) {
                        for (p = t.replace(E, "|").split("|"), c = 0; c < p.length; c++)p[c] = r(p[c]);
                        return p.join(",")
                    }
                    if (e = (t.match(de) || [n])[0], f = t.split(e).join("").match(x) || [], c = f.length, _ > c--)for (; ++c < _;)f[c] = i ? f[(c - 1) / 2 | 0] : a[c];
                    return o + f.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                } : function (t) {
                    var e, n, f;
                    if ("number" == typeof t)t += u; else if (s && E.test(t)) {
                        for (n = t.replace(E, "|").split("|"), f = 0; f < n.length; f++)n[f] = r(n[f]);
                        return n.join(",")
                    }
                    if (e = t.match(x) || [], f = e.length, _ > f--)for (; ++f < _;)e[f] = i ? e[(f - 1) / 2 | 0] : a[f];
                    return o + e.join(h) + l
                } : function (t) {
                    return t
                }
            }, ye = function (t) {
                return t = t.split(","), function (e, i, s, r, n, a, o) {
                    var l, h = (i + "").split(" ");
                    for (o = {}, l = 0; 4 > l; l++)o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                    return r.parse(e, o, n, a)
                }
            }, ve = (q._setPluginRatio = function (t) {
                this.plugin.setRatio(t);
                for (var e, i, s, r, n, a = this.data, o = a.proxy, l = a.firstMPT, h = 1e-6; l;)e = o[l.v], l.r ? e = Math.round(e) : h > e && e > -h && (e = 0), l.t[l.p] = e, l = l._next;
                if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod(o.rotation, this.t) : o.rotation), 1 === t || 0 === t)for (l = a.firstMPT, n = 1 === t ? "e" : "b"; l;) {
                    if (i = l.t, i.type) {
                        if (1 === i.type) {
                            for (r = i.xs0 + i.s + i.xs1, s = 1; s < i.l; s++)r += i["xn" + s] + i["xs" + (s + 1)];
                            i[n] = r
                        }
                    } else i[n] = i.s + i.xs0;
                    l = l._next
                }
            }, function (t, e, i, s, r) {
                this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s)
            }), Te = (q._parseToProxy = function (t, e, i, s, r, n) {
                var a, o, l, h, _, u = s, f = {}, c = {}, p = i._transform, m = L;
                for (i._transform = null, L = e, s = _ = i.parse(t, e, s, r), L = m, n && (i._transform = p, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                    if (s.type <= 1 && (o = s.p, c[o] = s.s + s.c, f[o] = s.s, n || (h = new ve(s, "s", o, h, s.r), s.c = 0), 1 === s.type))for (a = s.l; --a > 0;)l = "xn" + a, o = s.p + "_" + l, c[o] = s.data[l], f[o] = s[l], n || (h = new ve(s, l, o, h, s.rxp[l]));
                    s = s._next
                }
                return {proxy: f, end: c, firstMPT: h, pt: _}
            }, q.CSSPropTween = function (t, e, s, r, n, o, l, h, _, u, f) {
                this.t = t, this.p = e, this.s = s, this.c = r, this.n = l || e, t instanceof Te || a.push(this.n), this.r = h, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === f ? s + r : f, n && (this._next = n, n._prev = this)
            }), xe = function (t, e, i, s, r, n) {
                var a = new Te(t, e, i, s - i, r, -1, n);
                return a.b = i, a.e = a.xs0 = s, a
            }, be = o.parseComplex = function (t, e, i, s, r, n, a, l, h, _) {
                i = i || n || "", "function" == typeof s && (s = s(y, g)), a = new Te(t, e, 0, 0, a, _ ? 2 : 1, null, !1, l, i, s), s += "", r && de.test(s + i) && (s = [i, s], o.colorStringFilter(s), i = s[0], s = s[1]);
                var f, c, p, m, d, x, b, w, P, O, k, S, R, A = i.split(", ").join(",").split(" "), C = s.split(", ").join(",").split(" "), M = A.length, D = u !== !1;
                for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (A = A.join(" ").replace(E, ", ").split(" "), C = C.join(" ").replace(E, ", ").split(" "), M = A.length), M !== C.length && (A = (n || "").split(" "), M = A.length), a.plugin = h, a.setRatio = _, de.lastIndex = 0, f = 0; M > f; f++)if (m = A[f], d = C[f], w = parseFloat(m), w || 0 === w)a.appendXtra("", w, he(d, w), d.replace(T, ""), D && -1 !== d.indexOf("px"), !0); else if (r && de.test(m))S = d.indexOf(")") + 1, S = ")" + (S ? d.substr(S) : ""), R = -1 !== d.indexOf("hsl") && G, O = d, m = pe(m, R), d = pe(d, R), P = m.length + d.length > 6, P && !G && 0 === d[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(C[f]).join("transparent")) : (G || (P = !1), R ? a.appendXtra(O.substr(0, O.indexOf("hsl")) + (P ? "hsla(" : "hsl("), m[0], he(d[0], m[0]), ",", !1, !0).appendXtra("", m[1], he(d[1], m[1]), "%,", !1).appendXtra("", m[2], he(d[2], m[2]), P ? "%," : "%" + S, !1) : a.appendXtra(O.substr(0, O.indexOf("rgb")) + (P ? "rgba(" : "rgb("), m[0], d[0] - m[0], ",", !0, !0).appendXtra("", m[1], d[1] - m[1], ",", !0).appendXtra("", m[2], d[2] - m[2], P ? "," : S, !0), P && (m = m.length < 4 ? 1 : m[3], a.appendXtra("", m, (d.length < 4 ? 1 : d[3]) - m, S, !1))), de.lastIndex = 0; else if (x = m.match(v)) {
                    if (b = d.match(T), !b || b.length !== x.length)return a;
                    for (p = 0, c = 0; c < x.length; c++)k = x[c], O = m.indexOf(k, p), a.appendXtra(m.substr(p, O - p), Number(k), he(b[c], k), "", D && "px" === m.substr(O + k.length, 2), 0 === c), p = O + k.length;
                    a["xs" + a.l] += m.substr(p)
                } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + d : d;
                if (-1 !== s.indexOf("=") && a.data) {
                    for (S = a.xs0 + a.data.s, f = 1; f < a.l; f++)S += a["xs" + f] + a.data["xn" + f];
                    a.e = S + a["xs" + f]
                }
                return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
            }, we = 9;
            for (_ = Te.prototype, _.l = _.pr = 0; --we > 0;)_["xn" + we] = 0, _["xs" + we] = "";
            _.xs0 = "", _._next = _._prev = _.xfirst = _.data = _.plugin = _.setRatio = _.rxp = null, _.appendXtra = function (t, e, i, s, r, n) {
                var a = this, o = a.l;
                return a["xs" + o] += n && (o || a["xs" + o]) ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new Te(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {s: e + i}, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
            };
            var Pe = function (t, e) {
                e = e || {}, this.p = e.prefix ? K(t) || t : t, h[t] = h[this.p] = this, this.format = e.formatter || ge(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
            }, Oe = q._registerComplexSpecialProp = function (t, e, i) {
                "object" != typeof e && (e = {parser: i});
                var s, r, n = t.split(","), a = e.defaultValue;
                for (i = i || [a], s = 0; s < n.length; s++)e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, r = new Pe(n[s], e)
            }, ke = q._registerPluginProp = function (t) {
                if (!h[t]) {
                    var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                    Oe(t, {
                        parser: function (t, i, s, r, n, a, o) {
                            var _ = l.com.greensock.plugins[e];
                            return _ ? (_._cssRegister(), h[s].parse(t, i, s, r, n, a, o)) : (H("Error: " + e + " js file not loaded."), n)
                        }
                    })
                }
            };
            _ = Pe.prototype, _.parseComplex = function (t, e, i, s, r, n) {
                var a, o, l, h, _, u, f = this.keyword;
                if (this.multi && (E.test(i) || E.test(e) ? (o = e.replace(E, "|").split("|"), l = i.replace(E, "|").split("|")) : f && (o = [e], l = [i])), l) {
                    for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++)e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, f && (_ = e.indexOf(f), u = i.indexOf(f), _ !== u && (-1 === u ? o[a] = o[a].split(f).join("") : -1 === _ && (o[a] += " " + f)));
                    e = o.join(", "), i = l.join(", ")
                }
                return be(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
            }, _.parse = function (t, e, i, s, r, a) {
                return this.parseComplex(t.style, this.format(te(t, this.p, n, !1, this.dflt)), this.format(e), r, a)
            }, o.registerSpecialProp = function (t, e, i) {
                Oe(t, {
                    parser: function (t, s, r, n, a, o) {
                        var l = new Te(t, r, 0, 0, a, 2, r, !1, i);
                        return l.plugin = o, l.setRatio = e(t, s, n._tween, r), l
                    }, priority: i
                })
            }, o.useSVGTransformAttr = !0;
            var Se, Re = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Ae = K("transform"), Ce = $ + "transform", Me = K("transformOrigin"), De = null !== K("perspective"), Fe = q.Transform = function () {
                this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = o.defaultForce3D !== !1 && De ? o.defaultForce3D || "auto" : !1
            }, ze = s.SVGElement, Ee = function (t, e, i) {
                var s, r = Y.createElementNS("http://www.w3.org/2000/svg", t), n = /([a-z])([A-Z])/g;
                for (s in i)r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
                return e.appendChild(r), r
            }, Ie = Y.documentElement || {}, Xe = function () {
                var t, e, i, r = d || /Android/i.test(W) && !s.chrome;
                return Y.createElementNS && !r && (t = Ee("svg", Ie), e = Ee("rect", t, {
                    width: 100,
                    height: 50,
                    x: 100
                }), i = e.getBoundingClientRect().width, e.style[Me] = "50% 50%", e.style[Ae] = "scaleX(0.5)", r = i === e.getBoundingClientRect().width && !(p && De), Ie.removeChild(t)), r
            }(), Ne = function (t, e, i, s, r, n) {
                var a, l, h, _, u, f, c, p, m, d, g, y, v, T, x = t._gsTransform, b = Ue(t, !0);
                x && (v = x.xOrigin, T = x.yOrigin), (!s || (a = s.split(" ")).length < 2) && (c = t.getBBox(), 0 === c.x && 0 === c.y && c.width + c.height === 0 && (c = {
                    x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                    y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                    width: 0,
                    height: 0
                }), e = le(e).split(" "), a = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width : parseFloat(e[0])) + c.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height : parseFloat(e[1])) + c.y]), i.xOrigin = _ = parseFloat(a[0]), i.yOrigin = u = parseFloat(a[1]), s && b !== je && (f = b[0], c = b[1], p = b[2], m = b[3], d = b[4], g = b[5], y = f * m - c * p, y && (l = _ * (m / y) + u * (-p / y) + (p * g - m * d) / y, h = _ * (-c / y) + u * (f / y) - (f * g - c * d) / y, _ = i.xOrigin = a[0] = l, u = i.yOrigin = a[1] = h)), x && (n && (i.xOffset = x.xOffset, i.yOffset = x.yOffset, x = i), r || r !== !1 && o.defaultSmoothOrigin !== !1 ? (l = _ - v, h = u - T, x.xOffset += l * b[0] + h * b[2] - l, x.yOffset += l * b[1] + h * b[3] - h) : x.xOffset = x.yOffset = 0), n || t.setAttribute("data-svg-origin", a.join(" "))
            }, Le = function (t) {
                var e, i = j("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), s = this.parentNode, r = this.nextSibling, n = this.style.cssText;
                if (Ie.appendChild(i), i.appendChild(this), this.style.display = "block", t)try {
                    e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Le
                } catch (a) {
                } else this._originalGetBBox && (e = this._originalGetBBox());
                return r ? s.insertBefore(this, r) : s.appendChild(this), Ie.removeChild(i), this.style.cssText = n, e
            }, Be = function (t) {
                try {
                    return t.getBBox()
                } catch (e) {
                    return Le.call(t, !0)
                }
            }, Ye = function (t) {
                return !(!(ze && t.getCTM && Be(t)) || t.parentNode && !t.ownerSVGElement)
            }, je = [1, 0, 0, 1, 0, 0], Ue = function (t, e) {
                var i, s, r, n, a, o, l = t._gsTransform || new Fe, h = 1e5, _ = t.style;
                if (Ae ? s = te(t, Ce, null, !0) : t.currentStyle && (s = t.currentStyle.filter.match(F), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, !Ae || !(o = "none" === J(t).display) && t.parentNode || (o && (n = _.display, _.display = "block"), t.parentNode || (a = 1, Ie.appendChild(t)), s = te(t, Ce, null, !0), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, n ? _.display = n : o && Ze(_, "display"), a && Ie.removeChild(t)), (l.svg || t.getCTM && Ye(t)) && (i && -1 !== (_[Ae] + "").indexOf("matrix") && (s = _[Ae], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (s = r, i = 0) : -1 !== r.indexOf("translate") && (s = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i)return je;
                for (r = (s || "").match(v) || [], we = r.length; --we > -1;)n = Number(r[we]), r[we] = (a = n - (n |= 0)) ? (a * h + (0 > a ? -.5 : .5) | 0) / h + n : n;
                return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
            }, Ve = q.getTransform = function (t, i, s, r) {
                if (t._gsTransform && s && !r)return t._gsTransform;
                var n, a, l, h, _, u, f = s ? t._gsTransform || new Fe : new Fe, c = f.scaleX < 0, p = 2e-5, m = 1e5, d = De ? parseFloat(te(t, Me, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0, g = parseFloat(o.defaultTransformPerspective) || 0;
                if (f.svg = !(!t.getCTM || !Ye(t)), f.svg && (Ne(t, te(t, Me, i, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), Se = o.useSVGTransformAttr || Xe), n = Ue(t), n !== je) {
                    if (16 === n.length) {
                        var y, v, T, x, b, w = n[0], P = n[1], O = n[2], k = n[3], S = n[4], R = n[5], A = n[6], C = n[7], M = n[8], D = n[9], F = n[10], z = n[12], E = n[13], I = n[14], X = n[11], L = Math.atan2(A, F);
                        f.zOrigin && (I = -f.zOrigin, z = M * I - n[12], E = D * I - n[13], I = F * I + f.zOrigin - n[14]), f.rotationX = L * N, L && (x = Math.cos(-L), b = Math.sin(-L), y = S * x + M * b, v = R * x + D * b, T = A * x + F * b, M = S * -b + M * x, D = R * -b + D * x, F = A * -b + F * x, X = C * -b + X * x, S = y, R = v, A = T), L = Math.atan2(-O, F), f.rotationY = L * N, L && (x = Math.cos(-L), b = Math.sin(-L), y = w * x - M * b, v = P * x - D * b, T = O * x - F * b, D = P * b + D * x, F = O * b + F * x, X = k * b + X * x, w = y, P = v, O = T), L = Math.atan2(P, w), f.rotation = L * N, L && (x = Math.cos(L), b = Math.sin(L), y = w * x + P * b, v = S * x + R * b, T = M * x + D * b, P = P * x - w * b, R = R * x - S * b, D = D * x - M * b, w = y, S = v, M = T), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), L = Math.atan2(S, R), f.scaleX = (Math.sqrt(w * w + P * P + O * O) * m + .5 | 0) / m, f.scaleY = (Math.sqrt(R * R + A * A) * m + .5 | 0) / m, f.scaleZ = (Math.sqrt(M * M + D * D + F * F) * m + .5 | 0) / m, w /= f.scaleX, S /= f.scaleY, P /= f.scaleX, R /= f.scaleY, Math.abs(L) > p ? (f.skewX = L * N, S = 0, "simple" !== f.skewType && (f.scaleY *= 1 / Math.cos(L))) : f.skewX = 0, f.perspective = X ? 1 / (0 > X ? -X : X) : 0, f.x = z, f.y = E, f.z = I, f.svg && (f.x -= f.xOrigin - (f.xOrigin * w - f.yOrigin * S), f.y -= f.yOrigin - (f.yOrigin * P - f.xOrigin * R))
                    } else if (!De || r || !n.length || f.x !== n[4] || f.y !== n[5] || !f.rotationX && !f.rotationY) {
                        var B = n.length >= 6, Y = B ? n[0] : 1, j = n[1] || 0, U = n[2] || 0, V = B ? n[3] : 1;
                        f.x = n[4] || 0, f.y = n[5] || 0, l = Math.sqrt(Y * Y + j * j), h = Math.sqrt(V * V + U * U), _ = Y || j ? Math.atan2(j, Y) * N : f.rotation || 0, u = U || V ? Math.atan2(U, V) * N + _ : f.skewX || 0, f.scaleX = l, f.scaleY = h, f.rotation = _, f.skewX = u, De && (f.rotationX = f.rotationY = f.z = 0, f.perspective = g, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * Y + f.yOrigin * U), f.y -= f.yOrigin - (f.xOrigin * j + f.yOrigin * V))
                    }
                    Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (c ? (f.scaleX *= -1, f.skewX += f.rotation <= 0 ? 180 : -180, f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1, f.skewX += f.skewX <= 0 ? 180 : -180)), f.zOrigin = d;
                    for (a in f)f[a] < p && f[a] > -p && (f[a] = 0)
                }
                return s && (t._gsTransform = f, f.svg && (Se && t.style[Ae] ? e.delayedCall(.001, function () {
                    Ze(t.style, Ae)
                }) : !Se && t.getAttribute("transform") && e.delayedCall(.001, function () {
                    t.removeAttribute("transform")
                }))), f
            }, qe = function (t) {
                var e, i, s = this.data, r = -s.rotation * X, n = r + s.skewX * X, a = 1e5, o = (Math.cos(r) * s.scaleX * a | 0) / a, l = (Math.sin(r) * s.scaleX * a | 0) / a, h = (Math.sin(n) * -s.scaleY * a | 0) / a, _ = (Math.cos(n) * s.scaleY * a | 0) / a, u = this.t.style, f = this.t.currentStyle;
                if (f) {
                    i = l, l = -h, h = -i, e = f.filter, u.filter = "";
                    var c, p, m = this.t.offsetWidth, g = this.t.offsetHeight, y = "absolute" !== f.position, v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + _, T = s.x + m * s.xPercent / 100, x = s.y + g * s.yPercent / 100;
                    if (null != s.ox && (c = (s.oxp ? m * s.ox * .01 : s.ox) - m / 2, p = (s.oyp ? g * s.oy * .01 : s.oy) - g / 2, T += c - (c * o + p * l), x += p - (c * h + p * _)), y ? (c = m / 2, p = g / 2, v += ", Dx=" + (c - (c * o + p * l) + T) + ", Dy=" + (p - (c * h + p * _) + x) + ")") : v += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(z, v) : v + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === _ && (y && -1 === v.indexOf("Dx=0, Dy=0") || P.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !y) {
                        var b, O, k, S = 8 > d ? 1 : -1;
                        for (c = s.ieOffsetX || 0, p = s.ieOffsetY || 0, s.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * g)) / 2 + T), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > h ? -h : h) * m)) / 2 + x), we = 0; 4 > we; we++)O = ae[we], b = f[O], i = -1 !== b.indexOf("px") ? parseFloat(b) : ee(this.t, O, parseFloat(b), b.replace(w, "")) || 0, k = i !== s[O] ? 2 > we ? -s.ieOffsetX : -s.ieOffsetY : 2 > we ? c - s.ieOffsetX : p - s.ieOffsetY, u[O] = (s[O] = Math.round(i - k * (0 === we || 2 === we ? 1 : S))) + "px"
                    }
                }
            }, We = q.set3DTransformRatio = q.setTransformRatio = function (t) {
                var e, i, s, r, n, a, o, l, h, _, u, f, c, m, d, g, y, v, T, x, b, w, P, O = this.data, k = this.t.style, S = O.rotation, R = O.rotationX, A = O.rotationY, C = O.scaleX, M = O.scaleY, D = O.scaleZ, F = O.x, z = O.y, E = O.z, I = O.svg, N = O.perspective, L = O.force3D, B = O.skewY, Y = O.skewX;
                if (B && (Y += B, S += B), !(((1 !== t && 0 !== t || "auto" !== L || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && L || E || N || A || R || 1 !== D) && (!Se || !I) && De))return void(S || Y || I ? (S *= X, w = Y * X, P = 1e5, i = Math.cos(S) * C, n = Math.sin(S) * C, s = Math.sin(S - w) * -M, a = Math.cos(S - w) * M, w && "simple" === O.skewType && (e = Math.tan(w - B * X), e = Math.sqrt(1 + e * e), s *= e, a *= e, B && (e = Math.tan(B * X), e = Math.sqrt(1 + e * e), i *= e, n *= e)), I && (F += O.xOrigin - (O.xOrigin * i + O.yOrigin * s) + O.xOffset, z += O.yOrigin - (O.xOrigin * n + O.yOrigin * a) + O.yOffset, Se && (O.xPercent || O.yPercent) && (d = this.t.getBBox(), F += .01 * O.xPercent * d.width, z += .01 * O.yPercent * d.height), d = 1e-6, d > F && F > -d && (F = 0), d > z && z > -d && (z = 0)), T = (i * P | 0) / P + "," + (n * P | 0) / P + "," + (s * P | 0) / P + "," + (a * P | 0) / P + "," + F + "," + z + ")", I && Se ? this.t.setAttribute("transform", "matrix(" + T) : k[Ae] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix(" : "matrix(") + T) : k[Ae] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + M + "," + F + "," + z + ")");
                if (p && (d = 1e-4, d > C && C > -d && (C = D = 2e-5), d > M && M > -d && (M = D = 2e-5), !N || O.z || O.rotationX || O.rotationY || (N = 0)), S || Y)S *= X, g = i = Math.cos(S), y = n = Math.sin(S), Y && (S -= Y * X, g = Math.cos(S), y = Math.sin(S), "simple" === O.skewType && (e = Math.tan((Y - B) * X), e = Math.sqrt(1 + e * e), g *= e, y *= e, O.skewY && (e = Math.tan(B * X), e = Math.sqrt(1 + e * e), i *= e, n *= e))), s = -y, a = g; else {
                    if (!(A || R || 1 !== D || N || I))return void(k[Ae] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) translate3d(" : "translate3d(") + F + "px," + z + "px," + E + "px)" + (1 !== C || 1 !== M ? " scale(" + C + "," + M + ")" : ""));
                    i = a = 1, s = n = 0
                }
                _ = 1, r = o = l = h = u = f = 0, c = N ? -1 / N : 0, m = O.zOrigin, d = 1e-6, x = ",", b = "0", S = A * X, S && (g = Math.cos(S), y = Math.sin(S), l = -y, u = c * -y, r = i * y, o = n * y, _ = g, c *= g, i *= g, n *= g), S = R * X, S && (g = Math.cos(S), y = Math.sin(S), e = s * g + r * y, v = a * g + o * y, h = _ * y, f = c * y, r = s * -y + r * g, o = a * -y + o * g, _ *= g, c *= g, s = e, a = v), 1 !== D && (r *= D, o *= D, _ *= D, c *= D), 1 !== M && (s *= M, a *= M, h *= M, f *= M), 1 !== C && (i *= C, n *= C, l *= C, u *= C), (m || I) && (m && (F += r * -m, z += o * -m, E += _ * -m + m), I && (F += O.xOrigin - (O.xOrigin * i + O.yOrigin * s) + O.xOffset, z += O.yOrigin - (O.xOrigin * n + O.yOrigin * a) + O.yOffset), d > F && F > -d && (F = b), d > z && z > -d && (z = b), d > E && E > -d && (E = 0)), T = O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix3d(" : "matrix3d(", T += (d > i && i > -d ? b : i) + x + (d > n && n > -d ? b : n) + x + (d > l && l > -d ? b : l), T += x + (d > u && u > -d ? b : u) + x + (d > s && s > -d ? b : s) + x + (d > a && a > -d ? b : a), R || A || 1 !== D ? (T += x + (d > h && h > -d ? b : h) + x + (d > f && f > -d ? b : f) + x + (d > r && r > -d ? b : r), T += x + (d > o && o > -d ? b : o) + x + (d > _ && _ > -d ? b : _) + x + (d > c && c > -d ? b : c) + x) : T += ",0,0,0,0,1,0,", T += F + x + z + x + E + x + (N ? 1 + -E / N : 1) + ")", k[Ae] = T
            };
            _ = Fe.prototype, _.x = _.y = _.z = _.skewX = _.skewY = _.rotation = _.rotationX = _.rotationY = _.zOrigin = _.xPercent = _.yPercent = _.xOffset = _.yOffset = 0, _.scaleX = _.scaleY = _.scaleZ = 1, Oe("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function (t, e, i, s, r, a, l) {
                    if (s._lastParsedTransform === l)return r;
                    s._lastParsedTransform = l;
                    var h, _ = l.scale && "function" == typeof l.scale ? l.scale : 0;
                    "function" == typeof l[i] && (h = l[i], l[i] = e), _ && (l.scale = _(y, t));
                    var u, f, c, p, m, d, v, T, x, b = t._gsTransform, w = t.style, P = 1e-6, O = Re.length, k = l, S = {}, R = "transformOrigin", A = Ve(t, n, !0, k.parseTransform), C = k.transform && ("function" == typeof k.transform ? k.transform(y, g) : k.transform);
                    if (A.skewType = k.skewType || A.skewType || o.defaultSkewType, s._transform = A, C && "string" == typeof C && Ae)f = U.style, f[Ae] = C, f.display = "block", f.position = "absolute", Y.body.appendChild(U), u = Ve(U, null, !1), "simple" === A.skewType && (u.scaleY *= Math.cos(u.skewX * X)), A.svg && (d = A.xOrigin, v = A.yOrigin, u.x -= A.xOffset, u.y -= A.yOffset, (k.transformOrigin || k.svgOrigin) && (C = {}, Ne(t, le(k.transformOrigin), C, k.svgOrigin, k.smoothOrigin, !0), d = C.xOrigin, v = C.yOrigin, u.x -= C.xOffset - A.xOffset, u.y -= C.yOffset - A.yOffset), (d || v) && (T = Ue(U, !0), u.x -= d - (d * T[0] + v * T[2]), u.y -= v - (d * T[1] + v * T[3]))), Y.body.removeChild(U), u.perspective || (u.perspective = A.perspective), null != k.xPercent && (u.xPercent = _e(k.xPercent, A.xPercent)), null != k.yPercent && (u.yPercent = _e(k.yPercent, A.yPercent));
                    else if ("object" == typeof k) {
                        if (u = {
                                scaleX: _e(null != k.scaleX ? k.scaleX : k.scale, A.scaleX),
                                scaleY: _e(null != k.scaleY ? k.scaleY : k.scale, A.scaleY),
                                scaleZ: _e(k.scaleZ, A.scaleZ),
                                x: _e(k.x, A.x),
                                y: _e(k.y, A.y),
                                z: _e(k.z, A.z),
                                xPercent: _e(k.xPercent, A.xPercent),
                                yPercent: _e(k.yPercent, A.yPercent),
                                perspective: _e(k.transformPerspective, A.perspective)
                            }, m = k.directionalRotation, null != m)if ("object" == typeof m)for (f in m)k[f] = m[f]; else k.rotation = m;
                        "string" == typeof k.x && -1 !== k.x.indexOf("%") && (u.x = 0, u.xPercent = _e(k.x, A.xPercent)), "string" == typeof k.y && -1 !== k.y.indexOf("%") && (u.y = 0, u.yPercent = _e(k.y, A.yPercent)), u.rotation = ue("rotation" in k ? k.rotation : "shortRotation" in k ? k.shortRotation + "_short" : "rotationZ" in k ? k.rotationZ : A.rotation, A.rotation, "rotation", S), De && (u.rotationX = ue("rotationX" in k ? k.rotationX : "shortRotationX" in k ? k.shortRotationX + "_short" : A.rotationX || 0, A.rotationX, "rotationX", S), u.rotationY = ue("rotationY" in k ? k.rotationY : "shortRotationY" in k ? k.shortRotationY + "_short" : A.rotationY || 0, A.rotationY, "rotationY", S)), u.skewX = ue(k.skewX, A.skewX), u.skewY = ue(k.skewY, A.skewY)
                    }
                    for (De && null != k.force3D && (A.force3D = k.force3D, p = !0), c = A.force3D || A.z || A.rotationX || A.rotationY || u.z || u.rotationX || u.rotationY || u.perspective, c || null == k.scale || (u.scaleZ = 1); --O > -1;)x = Re[O], C = u[x] - A[x], (C > P || -P > C || null != k[x] || null != L[x]) && (p = !0, r = new Te(A, x, A[x], C, r), x in S && (r.e = S[x]), r.xs0 = 0, r.plugin = a, s._overwriteProps.push(r.n));
                    return C = k.transformOrigin, A.svg && (C || k.svgOrigin) && (d = A.xOffset, v = A.yOffset, Ne(t, le(C), u, k.svgOrigin, k.smoothOrigin), r = xe(A, "xOrigin", (b ? A : u).xOrigin, u.xOrigin, r, R), r = xe(A, "yOrigin", (b ? A : u).yOrigin, u.yOrigin, r, R), (d !== A.xOffset || v !== A.yOffset) && (r = xe(A, "xOffset", b ? d : A.xOffset, A.xOffset, r, R), r = xe(A, "yOffset", b ? v : A.yOffset, A.yOffset, r, R)), C = "0px 0px"), (C || De && c && A.zOrigin) && (Ae ? (p = !0, x = Me, C = (C || te(t, x, n, !1, "50% 50%")) + "", r = new Te(w, x, 0, 0, r, -1, R), r.b = w[x], r.plugin = a, De ? (f = A.zOrigin, C = C.split(" "), A.zOrigin = (C.length > 2 && (0 === f || "0px" !== C[2]) ? parseFloat(C[2]) : f) || 0, r.xs0 = r.e = C[0] + " " + (C[1] || "50%") + " 0px", r = new Te(A, "zOrigin", 0, 0, r, -1, r.n), r.b = f, r.xs0 = r.e = A.zOrigin) : r.xs0 = r.e = C) : le(C + "", A)), p && (s._transformType = A.svg && Se || !c && 3 !== this._transformType ? 2 : 3), h && (l[i] = h), _ && (l.scale = _), r
                }, prefix: !0
            }), Oe("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), Oe("borderRadius", {
                defaultValue: "0px", parser: function (t, e, i, s, a) {
                    e = this.format(e);
                    var o, l, h, _, u, f, c, p, m, d, g, y, v, T, x, b, w = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], P = t.style;
                    for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), l = 0; l < w.length; l++)this.p.indexOf("border") && (w[l] = K(w[l])), u = _ = te(t, w[l], n, !1, "0px"), -1 !== u.indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]), f = h = o[l], c = parseFloat(u), y = u.substr((c + "").length), v = "=" === f.charAt(1), v ? (p = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), p *= parseFloat(f), g = f.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(f), g = f.substr((p + "").length)), "" === g && (g = r[i] || y), g !== y && (T = ee(t, "borderLeft", c, y), x = ee(t, "borderTop", c, y), "%" === g ? (u = T / m * 100 + "%", _ = x / d * 100 + "%") : "em" === g ? (b = ee(t, "borderLeft", 1, "em"), u = T / b + "em", _ = x / b + "em") : (u = T + "px", _ = x + "px"), v && (f = parseFloat(u) + p + g, h = parseFloat(_) + p + g)), a = be(P, w[l], u + " " + _, f + " " + h, !1, "0px", a);
                    return a
                }, prefix: !0, formatter: ge("0px 0px 0px 0px", !1, !0)
            }), Oe("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                defaultValue: "0px",
                parser: function (t, e, i, s, r) {
                    return be(t.style, i, this.format(te(t, i, n, !1, "0px 0px")), this.format(e), !1, "0px", r)
                },
                prefix: !0,
                formatter: ge("0px 0px", !1, !0)
            }), Oe("backgroundPosition", {
                defaultValue: "0 0", parser: function (t, e, i, s, r, a) {
                    var o, l, h, _, u, f, c = "background-position", p = n || J(t, null), m = this.format((p ? d ? p.getPropertyValue(c + "-x") + " " + p.getPropertyValue(c + "-y") : p.getPropertyValue(c) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), g = this.format(e);
                    if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (f = te(t, "backgroundImage").replace(C, ""), f && "none" !== f)) {
                        for (o = m.split(" "), l = g.split(" "), V.setAttribute("src", f), h = 2; --h > -1;)m = o[h], _ = -1 !== m.indexOf("%"), _ !== (-1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - V.width : t.offsetHeight - V.height, o[h] = _ ? parseFloat(m) / 100 * u + "px" : parseFloat(m) / u * 100 + "%");
                        m = o.join(" ")
                    }
                    return this.parseComplex(t.style, m, g, r, a)
                }, formatter: le
            }), Oe("backgroundSize", {
                defaultValue: "0 0", formatter: function (t) {
                    return t += "", le(-1 === t.indexOf(" ") ? t + " " + t : t)
                }
            }), Oe("perspective", {defaultValue: "0px", prefix: !0}), Oe("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), Oe("transformStyle", {prefix: !0}), Oe("backfaceVisibility", {prefix: !0}), Oe("userSelect", {prefix: !0}), Oe("margin", {parser: ye("marginTop,marginRight,marginBottom,marginLeft")}), Oe("padding", {parser: ye("paddingTop,paddingRight,paddingBottom,paddingLeft")}), Oe("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function (t, e, i, s, r, a) {
                    var o, l, h;
                    return 9 > d ? (l = t.currentStyle, h = 8 > d ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(te(t, this.p, n, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, r, a)
                }
            }), Oe("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), Oe("autoRound,strictUnits", {
                parser: function (t, e, i, s, r) {
                    return r
                }
            }), Oe("border", {
                defaultValue: "0px solid #000", parser: function (t, e, i, s, r, a) {
                    var o = te(t, "borderTopWidth", n, !1, "0px"), l = this.format(e).split(" "), h = l[0].replace(w, "");
                    return "px" !== h && (o = parseFloat(o) / ee(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(o + " " + te(t, "borderTopStyle", n, !1, "solid") + " " + te(t, "borderTopColor", n, !1, "#000")), l.join(" "), r, a)
                }, color: !0, formatter: function (t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(de) || ["#000"])[0]
                }
            }), Oe("borderWidth", {parser: ye("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}), Oe("float,cssFloat,styleFloat", {
                parser: function (t, e, i, s, r) {
                    var n = t.style, a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                    return new Te(n, a, 0, 0, r, -1, i, !1, 0, n[a], e)
                }
            });
            var Ge = function (t) {
                var e, i = this.t, s = i.filter || te(this.data, "filter") || "", r = this.s + this.c * t | 0;
                100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !te(this.data, "filter")) : (i.filter = s.replace(k, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(P, "opacity=" + r))
            };
            Oe("opacity,alpha,autoAlpha", {
                defaultValue: "1", parser: function (t, e, i, s, r, a) {
                    var o = parseFloat(te(t, "opacity", n, !1, "1")), l = t.style, h = "autoAlpha" === i;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === te(t, "visibility", n) && 0 !== e && (o = 0), G ? r = new Te(l, "opacity", o, e - o, r) : (r = new Te(l, "opacity", 100 * o, 100 * (e - o), r), r.xn1 = h ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = a, r.setRatio = Ge), h && (r = new Te(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), r.xs0 = "inherit", s._overwriteProps.push(r.n), s._overwriteProps.push(i)), r
                }
            });
            var Ze = function (t, e) {
                e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(R, "-$1").toLowerCase())) : t.removeAttribute(e))
            }, He = function (t) {
                if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                    this.t.setAttribute("class", 0 === t ? this.b : this.e);
                    for (var e = this.data, i = this.t.style; e;)e.v ? i[e.p] = e.v : Ze(i, e.p), e = e._next;
                    1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
            };
            Oe("className", {
                parser: function (t, e, s, r, a, o, l) {
                    var h, _, u, f, c, p = t.getAttribute("class") || "", m = t.style.cssText;
                    if (a = r._classNamePT = new Te(t, s, 0, 0, a, 2), a.setRatio = He, a.pr = -11, i = !0, a.b = p, _ = se(t, n), u = t._gsClassPT) {
                        for (f = {}, c = u.data; c;)f[c.p] = 1, c = c._next;
                        u.setRatio(1)
                    }
                    return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), h = re(t, _, se(t), l, f), t.setAttribute("class", p), a.data = h.firstMPT, t.style.cssText = m, a = a.xfirst = r.parse(t, h.difs, a, o)
                }
            });
            var $e = function (t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, s, r, n, a = this.t.style, o = h.transform.parse;
                    if ("all" === this.e)a.cssText = "", r = !0; else for (e = this.e.split(" ").join("").split(","), s = e.length; --s > -1;)i = e[s], h[i] && (h[i].parse === o ? r = !0 : i = "transformOrigin" === i ? Me : h[i].p), Ze(a, i);
                    r && (Ze(a, Ae), n = this.t._gsTransform, n && (n.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                }
            };
            for (Oe("clearProps", {
                parser: function (t, e, s, r, n) {
                    return n = new Te(t, s, 0, 0, n, 2), n.setRatio = $e, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n
                }
            }), _ = "bezier,throwProps,physicsProps,physics2D".split(","), we = _.length; we--;)ke(_[we]);
            _ = o.prototype, _._firstPT = _._lastParsedTransform = _._transform = null, _._onInitTween = function (t, e, s, l) {
                if (!t.nodeType)return !1;
                this._target = g = t, this._tween = s, this._vars = e, y = l, u = e.autoRound, i = !1, r = e.suffixMap || o.suffixMap, n = J(t, ""), a = this._overwriteProps;
                var _, p, d, v, T, x, b, w, P, k = t.style;
                if (f && "" === k.zIndex && (_ = te(t, "zIndex", n), ("auto" === _ || "" === _) && this._addLazySet(k, "zIndex", 0)), "string" == typeof e && (v = k.cssText, _ = se(t, n), k.cssText = v + ";" + e, _ = re(t, _, se(t)).difs, !G && O.test(e) && (_.opacity = parseFloat(RegExp.$1)), e = _, k.cssText = v), this._firstPT = p = e.className ? h.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                    for (P = 3 === this._transformType, Ae ? c && (f = !0, "" === k.zIndex && (b = te(t, "zIndex", n), ("auto" === b || "" === b) && this._addLazySet(k, "zIndex", 0)), m && this._addLazySet(k, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (P ? "visible" : "hidden"))) : k.zoom = 1, d = p; d && d._next;)d = d._next;
                    w = new Te(t, "transform", 0, 0, null, 2), this._linkCSSP(w, null, d), w.setRatio = Ae ? We : qe, w.data = this._transform || Ve(t, n, !0), w.tween = s, w.pr = -1, a.pop()
                }
                if (i) {
                    for (; p;) {
                        for (x = p._next, d = v; d && d.pr > p.pr;)d = d._next;
                        (p._prev = d ? d._prev : T) ? p._prev._next = p : v = p, (p._next = d) ? d._prev = p : T = p, p = x
                    }
                    this._firstPT = v
                }
                return !0
            }, _.parse = function (t, e, i, s) {
                var a, o, l, _, f, c, p, m, d, v, T = t.style;
                for (a in e) {
                    if (c = e[a], "function" == typeof c && (c = c(y, g)), o = h[a])i = o.parse(t, c, a, this, i, s, e); else {
                        if ("--" === a.substr(0, 2)) {
                            this._tween._propLookup[a] = this._addTween.call(this._tween, t.style, "setProperty", J(t).getPropertyValue(a) + "", c + "", a, !1, a);
                            continue
                        }
                        f = te(t, a, n) + "", d = "string" == typeof c, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && S.test(c) ? (d || (c = pe(c), c = (c.length > 3 ? "rgba(" : "rgb(") + c.join(",") + ")"), i = be(T, a, f, c, !0, "transparent", i, 0, s)) : d && I.test(c) ? i = be(T, a, f, c, !0, null, i, 0, s) : (l = parseFloat(f), p = l || 0 === l ? f.substr((l + "").length) : "", ("" === f || "auto" === f) && ("width" === a || "height" === a ? (l = oe(t, a, n), p = "px") : "left" === a || "top" === a ? (l = ie(t, a, n), p = "px") : (l = "opacity" !== a ? 0 : 1, p = "")), v = d && "=" === c.charAt(1), v ? (_ = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), _ *= parseFloat(c), m = c.replace(w, "")) : (_ = parseFloat(c), m = d ? c.replace(w, "") : ""), "" === m && (m = a in r ? r[a] : p), c = _ || 0 === _ ? (v ? _ + l : _) + m : e[a], p !== m && ("" !== m || "lineHeight" === a) && (_ || 0 === _) && l && (l = ee(t, a, l, p), "%" === m ? (l /= ee(t, a, 100, "%") / 100, e.strictUnits !== !0 && (f = l + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? l /= ee(t, a, 1, m) : "px" !== m && (_ = ee(t, a, _, m), m = "px"), v && (_ || 0 === _) && (c = _ + l + m)), v && (_ += l), !l && 0 !== l || !_ && 0 !== _ ? void 0 !== T[a] && (c || c + "" != "NaN" && null != c) ? (i = new Te(T, a, _ || l || 0, 0, i, -1, a, !1, 0, f, c), i.xs0 = "none" !== c || "display" !== a && -1 === a.indexOf("Style") ? c : f) : H("invalid " + a + " tween value: " + e[a]) : (i = new Te(T, a, l, _ - l, i, 0, a, u !== !1 && ("px" === m || "zIndex" === a), 0, f, c), i.xs0 = m))
                    }
                    s && i && !i.plugin && (i.plugin = s)
                }
                return i
            }, _.setRatio = function (t) {
                var e, i, s, r = this._firstPT, n = 1e-6;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)for (; r;) {
                    if (e = r.c * t + r.s, r.r ? e = Math.round(e) : n > e && e > -n && (e = 0), r.type)if (1 === r.type)if (s = r.l, 2 === s)r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2; else if (3 === s)r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3; else if (4 === s)r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4; else if (5 === s)r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5; else {
                        for (i = r.xs0 + e + r.xs1, s = 1; s < r.l; s++)i += r["xn" + s] + r["xs" + (s + 1)];
                        r.t[r.p] = i
                    } else-1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t); else r.t[r.p] = e + r.xs0;
                    r = r._next
                } else for (; r;)2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next; else for (; r;) {
                    if (2 !== r.type)if (r.r && -1 !== r.type)if (e = Math.round(r.s + r.c), r.type) {
                        if (1 === r.type) {
                            for (s = r.l, i = r.xs0 + e + r.xs1, s = 1; s < r.l; s++)i += r["xn" + s] + r["xs" + (s + 1)];
                            r.t[r.p] = i
                        }
                    } else r.t[r.p] = e + r.xs0; else r.t[r.p] = r.e; else r.setRatio(t);
                    r = r._next
                }
            }, _._enableTransforms = function (t) {
                this._transform = this._transform || Ve(this._target, n, !0), this._transformType = this._transform.svg && Se || !t && 3 !== this._transformType ? 2 : 3
            };
            var Qe = function () {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            _._addLazySet = function (t, e, i) {
                var s = this._firstPT = new Te(t, e, 0, 0, this._firstPT, 2);
                s.e = i, s.setRatio = Qe, s.data = this
            }, _._linkCSSP = function (t, e, i, s) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
            }, _._mod = function (t) {
                for (var e = this._firstPT; e;)"function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
            }, _._kill = function (e) {
                var i, s, r, n = e;
                if (e.autoAlpha || e.alpha) {
                    n = {};
                    for (s in e)n[s] = e[s];
                    n.opacity = 1, n.autoAlpha && (n.visibility = 1)
                }
                for (e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), i = this._firstPT; i;)i.plugin && i.plugin !== s && i.plugin._kill && (i.plugin._kill(e), s = i.plugin), i = i._next;
                return t.prototype._kill.call(this, n)
            };
            var Ke = function (t, e, i) {
                var s, r, n, a;
                if (t.slice)for (r = t.length; --r > -1;)Ke(t[r], e, i); else for (s = t.childNodes, r = s.length; --r > -1;)n = s[r], a = n.type, n.style && (e.push(se(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Ke(n, e, i)
            };
            return o.cascadeTo = function (t, i, s) {
                var r, n, a, o, l = e.to(t, i, s), h = [l], _ = [], u = [], f = [], c = e._internals.reservedProps;
                for (t = l._targets || l.target, Ke(t, _, f), l.render(i, !0, !0), Ke(t, u), l.render(0, !0, !0), l._enabled(!0), r = f.length; --r > -1;)if (n = re(f[r], _[r], u[r]), n.firstMPT) {
                    n = n.difs;
                    for (a in s)c[a] && (n[a] = s[a]);
                    o = {};
                    for (a in n)o[a] = _[r][a];
                    h.push(e.fromTo(f[r], i, o, n))
                }
                return h
            }, t.activate([o]), o
        }, !0), function () {
            var t = s._gsDefine.plugin({
                propName: "roundProps",
                version: "1.6.0",
                priority: -1,
                API: 2,
                init: function (t, e, i) {
                    return this._tween = i, !0
                }
            }), e = function (t) {
                for (; t;)t.f || t.blob || (t.m = Math.round), t = t._next
            }, i = t.prototype;
            i._onInitAllProps = function () {
                for (var t, i, s, r = this._tween, n = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), a = n.length, o = {}, l = r._propLookup.roundProps; --a > -1;)o[n[a]] = Math.round;
                for (a = n.length; --a > -1;)for (t = n[a], i = r._firstPT; i;)s = i._next, i.pg ? i.t._mod(o) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), s && (s._prev = i._prev), i._prev ? i._prev._next = s : r._firstPT === i && (r._firstPT = s), i._next = i._prev = null, r._propLookup[t] = l)), i = s;
                return !1
            }, i._add = function (t, e, i, s) {
                this._addTween(t, e, i, i + s, e, Math.round), this._overwriteProps.push(e)
            }
        }(), function () {
            s._gsDefine.plugin({
                propName: "attr", API: 2, version: "0.6.1", init: function (t, e, i, s) {
                    var r, n;
                    if ("function" != typeof t.setAttribute)return !1;
                    for (r in e)n = e[r], "function" == typeof n && (n = n(s, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", n + "", r, !1, r), this._overwriteProps.push(r);
                    return !0
                }
            })
        }(), s._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.1",
            API: 2,
            init: function (t, e, i, s) {
                "object" != typeof e && (e = {rotation: e}), this.finals = {};
                var r, n, a, o, l, h, _ = e.useRadians === !0 ? 2 * Math.PI : 360, u = 1e-6;
                for (r in e)"useRadians" !== r && (o = e[r], "function" == typeof o && (o = o(s, t)), h = (o + "").split("_"), n = h[0], a = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), o = this.finals[r] = "string" == typeof n && "=" === n.charAt(1) ? a + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, l = o - a, h.length && (n = h.join("_"), -1 !== n.indexOf("short") && (l %= _, l !== l % (_ / 2) && (l = 0 > l ? l + _ : l - _)), -1 !== n.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * _) % _ - (l / _ | 0) * _ : -1 !== n.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * _) % _ - (l / _ | 0) * _)), (l > u || -u > l) && (this._addTween(t, r, a, a + l, r), this._overwriteProps.push(r)));
                return !0
            },
            set: function (t) {
                var e;
                if (1 !== t)this._super.setRatio.call(this, t); else for (e = this._firstPT; e;)e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
            }
        })._autoCSS = !0, s._gsDefine("easing.Back", ["easing.Ease"], function (t) {
            var e, i, r, n = s.GreenSockGlobals || s, a = n.com.greensock, o = 2 * Math.PI, l = Math.PI / 2, h = a._class, _ = function (e, i) {
                var s = h("easing." + e, function () {
                }, !0), r = s.prototype = new t;
                return r.constructor = s, r.getRatio = i, s
            }, u = t.register || function () {
                }, f = function (t, e, i, s) {
                var r = h("easing." + t, {easeOut: new e, easeIn: new i, easeInOut: new s}, !0);
                return u(r, t), r
            }, c = function (t, e, i) {
                this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
            }, p = function (e, i) {
                var s = h("easing." + e, function (t) {
                    this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                }, !0), r = s.prototype = new t;
                return r.constructor = s, r.getRatio = i, r.config = function (t) {
                    return new s(t)
                }, s
            }, m = f("Back", p("BackOut", function (t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), p("BackIn", function (t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
            }), p("BackInOut", function (t) {
                return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })), d = h("easing.SlowMo", function (t, e, i) {
                e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
            }, !0), g = d.prototype = new t;
            return g.constructor = d, g.getRatio = function (t) {
                var e = t + (.5 - t) * this._p;
                return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
            }, d.ease = new d(.7, .7), g.config = d.config = function (t, e, i) {
                return new d(t, e, i)
            }, e = h("easing.SteppedEase", function (t, e) {
                t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
            }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function (t) {
                return 0 > t ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
            }, g.config = e.config = function (t, i) {
                return new e(t, i)
            }, i = h("easing.RoughEase", function (e) {
                e = e || {};
                for (var i, s, r, n, a, o, l = e.taper || "none", h = [], _ = 0, u = 0 | (e.points || 20), f = u, p = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;)i = p ? Math.random() : 1 / u * f, s = d ? d.getRatio(i) : i, "none" === l ? r = g : "out" === l ? (n = 1 - i, r = n * n * g) : "in" === l ? r = i * i * g : .5 > i ? (n = 2 * i, r = n * n * .5 * g) : (n = 2 * (1 - i), r = n * n * .5 * g), p ? s += Math.random() * r - .5 * r : f % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), h[_++] = {
                    x: i,
                    y: s
                };
                for (h.sort(function (t, e) {
                    return t.x - e.x
                }), o = new c(1, 1, null), f = u; --f > -1;)a = h[f], o = new c(a.x, a.y, o);
                this._prev = new c(0, 0, 0 !== o.t ? o : o.next)
            }, !0), g = i.prototype = new t, g.constructor = i, g.getRatio = function (t) {
                var e = this._prev;
                if (t > e.t) {
                    for (; e.next && t >= e.t;)e = e.next;
                    e = e.prev
                } else for (; e.prev && t <= e.t;)e = e.prev;
                return this._prev = e, e.v + (t - e.t) / e.gap * e.c
            }, g.config = function (t) {
                return new i(t)
            }, i.ease = new i, f("Bounce", _("BounceOut", function (t) {
                return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }), _("BounceIn", function (t) {
                return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }), _("BounceInOut", function (t) {
                var e = .5 > t;
                return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
            })), f("Circ", _("CircOut", function (t) {
                return Math.sqrt(1 - (t -= 1) * t)
            }), _("CircIn", function (t) {
                return -(Math.sqrt(1 - t * t) - 1)
            }), _("CircInOut", function (t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            })), r = function (e, i, s) {
                var r = h("easing." + e, function (t, e) {
                    this._p1 = t >= 1 ? t : 1, this._p2 = (e || s) / (1 > t ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                }, !0), n = r.prototype = new t;
                return n.constructor = r, n.getRatio = i, n.config = function (t, e) {
                    return new r(t, e)
                }, r
            }, f("Elastic", r("ElasticOut", function (t) {
                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
            }, .3), r("ElasticIn", function (t) {
                return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
            }, .3), r("ElasticInOut", function (t) {
                return (t *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
            }, .45)), f("Expo", _("ExpoOut", function (t) {
                return 1 - Math.pow(2, -10 * t)
            }), _("ExpoIn", function (t) {
                return Math.pow(2, 10 * (t - 1)) - .001
            }), _("ExpoInOut", function (t) {
                return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            })), f("Sine", _("SineOut", function (t) {
                return Math.sin(t * l)
            }), _("SineIn", function (t) {
                return -Math.cos(t * l) + 1
            }), _("SineInOut", function (t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            })), h("easing.EaseLookup", {
                find: function (e) {
                    return t.map[e]
                }
            }, !0), u(n.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(e, "SteppedEase", "ease,"), m
        }, !0)
    }), s._gsDefine && s._gsQueue.pop()(), function (t, e) {
        "use strict";
        var s = {}, r = t.document, n = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!n.TweenLite) {
            var a, o, l, h, _, u = function (t) {
                var e, i = t.split("."), s = n;
                for (e = 0; e < i.length; e++)s[i[e]] = s = s[i[e]] || {};
                return s
            }, f = u("com.greensock"), c = 1e-10, p = function (t) {
                var e, i = [], s = t.length;
                for (e = 0; e !== s; i.push(t[e++]));
                return i
            }, m = function () {
            }, d = function () {
                var t = Object.prototype.toString, e = t.call([]);
                return function (i) {
                    return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                }
            }(), g = {}, y = function (r, a, o, l) {
                this.sc = g[r] ? g[r].sc : [], g[r] = this, this.gsClass = null, this.func = o;
                var h = [];
                this.check = function (_) {
                    for (var f, c, p, m, d = a.length, v = d; --d > -1;)(f = g[a[d]] || new y(a[d], [])).gsClass ? (h[d] = f.gsClass, v--) : _ && f.sc.push(this);
                    if (0 === v && o) {
                        if (c = ("com.greensock." + r).split("."), p = c.pop(), m = u(c.join("."))[p] = this.gsClass = o.apply(o, h), l)if (n[p] = s[p] = m, "undefined" != typeof i && i.exports)if (r === e) {
                            i.exports = s[e] = m;
                            for (d in s)m[d] = s[d]
                        } else s[e] && (s[e][p] = m); else"function" == typeof define && define.amd && define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function () {
                            return m
                        });
                        for (d = 0; d < this.sc.length; d++)this.sc[d].check()
                    }
                }, this.check(!0)
            }, v = t._gsDefine = function (t, e, i, s) {
                return new y(t, e, i, s)
            }, T = f._class = function (t, e, i) {
                return e = e || function () {
                    }, v(t, [], function () {
                    return e
                }, i), e
            };
            v.globals = n;
            var x = [0, 0, 1, 1], b = T("easing.Ease", function (t, e, i, s) {
                this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? x.concat(e) : x
            }, !0), w = b.map = {}, P = b.register = function (t, e, i, s) {
                for (var r, n, a, o, l = e.split(","), h = l.length, _ = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)for (n = l[h], r = s ? T("easing." + n, null, !0) : f.easing[n] || {}, a = _.length; --a > -1;)o = _[a], w[n + "." + o] = w[o + n] = r[o] = t.getRatio ? t : t[o] || new t
            };
            for (l = b.prototype, l._calcEnd = !1, l.getRatio = function (t) {
                if (this._func)return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type, i = this._power, s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
            }, a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], o = a.length; --o > -1;)l = a[o] + ",Power" + o, P(new b(null, null, 1, o), l, "easeOut", !0), P(new b(null, null, 2, o), l, "easeIn" + (0 === o ? ",easeNone" : "")), P(new b(null, null, 3, o), l, "easeInOut");
            w.linear = f.easing.Linear.easeIn, w.swing = f.easing.Quad.easeInOut;
            var O = T("events.EventDispatcher", function (t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            l = O.prototype, l.addEventListener = function (t, e, i, s, r) {
                r = r || 0;
                var n, a, o = this._listeners[t], l = 0;
                for (this !== h || _ || h.wake(), null == o && (this._listeners[t] = o = []), a = o.length; --a > -1;)n = o[a], n.c === e && n.s === i ? o.splice(a, 1) : 0 === l && n.pr < r && (l = a + 1);
                o.splice(l, 0, {c: e, s: i, up: s, pr: r})
            }, l.removeEventListener = function (t, e) {
                var i, s = this._listeners[t];
                if (s)for (i = s.length; --i > -1;)if (s[i].c === e)return void s.splice(i, 1)
            }, l.dispatchEvent = function (t) {
                var e, i, s, r = this._listeners[t];
                if (r)for (e = r.length, e > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;)s = r[e], s && (s.up ? s.c.call(s.s || i, {
                    type: t,
                    target: i
                }) : s.c.call(s.s || i))
            };
            var k = t.requestAnimationFrame, S = t.cancelAnimationFrame, R = Date.now || function () {
                    return (new Date).getTime()
                }, A = R();
            for (a = ["ms", "moz", "webkit", "o"], o = a.length; --o > -1 && !k;)k = t[a[o] + "RequestAnimationFrame"], S = t[a[o] + "CancelAnimationFrame"] || t[a[o] + "CancelRequestAnimationFrame"];
            T("Ticker", function (t, e) {
                var i, s, n, a, o, l = this, u = R(), f = e !== !1 && k ? "auto" : !1, p = 500, d = 33, g = "tick", y = function (t) {
                    var e, r, h = R() - A;
                    h > p && (u += h - d), A += h, l.time = (A - u) / 1e3, e = l.time - o, (!i || e > 0 || t === !0) && (l.frame++, o += e + (e >= a ? .004 : a - e), r = !0), t !== !0 && (n = s(y)), r && l.dispatchEvent(g)
                };
                O.call(l), l.time = l.frame = 0, l.tick = function () {
                    y(!0)
                }, l.lagSmoothing = function (t, e) {
                    p = t || 1 / c, d = Math.min(e, p, 0)
                }, l.sleep = function () {
                    null != n && (f && S ? S(n) : clearTimeout(n), s = m, n = null, l === h && (_ = !1))
                }, l.wake = function (t) {
                    null !== n ? l.sleep() : t ? u += -A + (A = R()) : l.frame > 10 && (A = R() - p + 5), s = 0 === i ? m : f && k ? k : function (t) {
                        return setTimeout(t, 1e3 * (o - l.time) + 1 | 0)
                    }, l === h && (_ = !0), y(2)
                }, l.fps = function (t) {
                    return arguments.length ? (i = t, a = 1 / (i || 60), o = this.time + a, void l.wake()) : i
                }, l.useRAF = function (t) {
                    return arguments.length ? (l.sleep(), f = t, void l.fps(i)) : f
                }, l.fps(t), setTimeout(function () {
                    "auto" === f && l.frame < 5 && "hidden" !== r.visibilityState && l.useRAF(!1)
                }, 1500)
            }), l = f.Ticker.prototype = new f.events.EventDispatcher, l.constructor = f.Ticker;
            var C = T("core.Animation", function (t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, $) {
                    _ || h.wake();
                    var i = this.vars.useFrames ? H : $;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            h = C.ticker = new f.Ticker, l = C.prototype, l._dirty = l._gc = l._initted = l._paused = !1, l._totalTime = l._time = 0, l._rawPrevTime = -1, l._next = l._last = l._onUpdate = l._timeline = l.timeline = null, l._paused = !1;
            var M = function () {
                _ && R() - A > 2e3 && "hidden" !== r.visibilityState && h.wake();
                var t = setTimeout(M, 2e3);
                t.unref && t.unref()
            };
            M(), l.play = function (t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, l.pause = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, l.resume = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, l.seek = function (t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, l.restart = function (t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, l.reverse = function (t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, l.render = function () {
            }, l.invalidate = function () {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, l.isActive = function () {
                var t, e = this._timeline, i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
            }, l._enabled = function (t, e) {
                return _ || h.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, l._kill = function () {
                return this._enabled(!1, !1)
            }, l.kill = function (t, e) {
                return this._kill(t, e), this
            }, l._uncache = function (t) {
                for (var e = t ? this : this.timeline; e;)e._dirty = !0, e = e.timeline;
                return this
            }, l._swapSelfInParams = function (t) {
                for (var e = t.length, i = t.concat(); --e > -1;)"{self}" === t[e] && (i[e] = this);
                return i
            }, l._callback = function (t) {
                var e = this.vars, i = e[t], s = e[t + "Params"], r = e[t + "Scope"] || e.callbackScope || this, n = s ? s.length : 0;
                switch (n) {
                    case 0:
                        i.call(r);
                        break;
                    case 1:
                        i.call(r, s[0]);
                        break;
                    case 2:
                        i.call(r, s[0], s[1]);
                        break;
                    default:
                        i.apply(r, s)
                }
            }, l.eventCallback = function (t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length)return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = d(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, l.delay = function (t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, l.duration = function (t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, l.totalDuration = function (t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, l.time = function (t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, l.totalTime = function (t, e, i) {
                if (_ || h.wake(), !arguments.length)return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration, r = this._timeline;
                        if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)for (; r._timeline;)r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (I.length && K(), this.render(t, e, !1), I.length && K())
                }
                return this
            }, l.progress = l.totalProgress = function (t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, l.startTime = function (t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, l.endTime = function (t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, l.timeScale = function (t) {
                if (!arguments.length)return this._timeScale;
                if (t = t || c, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, l.reversed = function (t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, l.paused = function (t) {
                if (!arguments.length)return this._paused;
                var e, i, s = this._timeline;
                return t != this._paused && s && (_ || t || h.wake(), e = s.rawTime(), i = e - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var D = T("core.SimpleTimeline", function (t) {
                C.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            l = D.prototype = new C, l.constructor = D, l.kill()._gc = !1, l._first = l._last = l._recent = null, l._sortChildren = !1, l.add = l.insert = function (t, e) {
                var i, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)for (s = t._startTime; i && i._startTime > s;)i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
            }, l._remove = function (t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, l.render = function (t, e, i) {
                var s, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;)s = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
            }, l.rawTime = function () {
                return _ || h.wake(), this._totalTime
            };
            var F = T("TweenLite", function (e, i, s) {
                if (C.call(this, i, s), this.render = F.prototype.render, null == e)throw"Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : F.selector(e) || e;
                var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? Z[F.defaultOverwrite] : "number" == typeof l ? l >> 0 : Z[l], (o || e instanceof Array || e.push && d(e)) && "number" != typeof e[0])for (this._targets = a = p(e), this._propLookup = [], this._siblings = [], r = 0; r < a.length; r++)n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(p(n))) : (this._siblings[r] = J(n, this, !1), 1 === l && this._siblings[r].length > 1 && ee(n, this, null, 1, this._siblings[r])) : (n = a[r--] = F.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1); else this._propLookup = {}, this._siblings = J(e, this, !1), 1 === l && this._siblings.length > 1 && ee(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(Math.min(0, -this._delay)))
            }, !0), z = function (e) {
                return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
            }, E = function (t, e) {
                var i, s = {};
                for (i in t)G[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!V[i] || V[i] && V[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                t.css = s
            };
            l = F.prototype = new C, l.constructor = F, l.kill()._gc = !1, l.ratio = 0, l._firstPT = l._targets = l._overwrittenProps = l._startAt = null, l._notifyPluginsOfEnabled = l._lazy = !1, F.version = "1.20.2", F.defaultEase = l._ease = new b(null, null, 1, 1), F.defaultOverwrite = "auto", F.ticker = h, F.autoSleep = 120, F.lagSmoothing = function (t, e) {
                h.lagSmoothing(t, e)
            }, F.selector = t.$ || t.jQuery || function (e) {
                    var i = t.$ || t.jQuery;
                    return i ? (F.selector = i, i(e)) : "undefined" == typeof r ? e : r.querySelectorAll ? r.querySelectorAll(e) : r.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
                };
            var I = [], X = {}, N = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, L = /[\+-]=-?[\.\d]/, B = function (t) {
                for (var e, i = this._firstPT, s = 1e-6; i;)e = i.blob ? 1 === t && this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : s > e && e > -s && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
            }, Y = function (t, e, i, s) {
                var r, n, a, o, l, h, _, u = [], f = 0, c = "", p = 0;
                for (u.start = t, u.end = e, t = u[0] = t + "", e = u[1] = e + "", i && (i(u), t = u[0], e = u[1]), u.length = 0, r = t.match(N) || [], n = e.match(N) || [], s && (s._next = null, s.blob = 1, u._firstPT = u._applyPT = s), l = n.length, o = 0; l > o; o++)_ = n[o], h = e.substr(f, e.indexOf(_, f) - f), c += h || !o ? h : ",", f += h.length, p ? p = (p + 1) % 5 : "rgba(" === h.substr(-5) && (p = 1), _ === r[o] || r.length <= o ? c += _ : (c && (u.push(c), c = ""), a = parseFloat(r[o]), u.push(a), u._firstPT = {
                    _next: u._firstPT,
                    t: u,
                    p: u.length - 1,
                    s: a,
                    c: ("=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * parseFloat(_.substr(2)) : parseFloat(_) - a) || 0,
                    f: 0,
                    m: p && 4 > p ? Math.round : 0
                }), f += _.length;
                return c += e.substr(f), c && u.push(c), u.setRatio = B, L.test(e) && (u.end = 0), u
            }, j = function (t, e, i, s, r, n, a, o, l) {
                "function" == typeof s && (s = s(l || 0, t));
                var h, _ = typeof t[e], u = "function" !== _ ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), f = "get" !== i ? i : u ? a ? t[u](a) : t[u]() : t[e], c = "string" == typeof s && "=" === s.charAt(1), p = {
                    t: t,
                    p: e,
                    s: f,
                    f: "function" === _,
                    pg: 0,
                    n: r || e,
                    m: n ? "function" == typeof n ? n : Math.round : 0,
                    pr: 0,
                    c: c ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - f || 0
                };
                return ("number" != typeof f || "number" != typeof s && !c) && (a || isNaN(f) || !c && isNaN(s) || "boolean" == typeof f || "boolean" == typeof s ? (p.fp = a, h = Y(f, c ? parseFloat(p.s) + p.c : s, o || F.defaultStringFilter, p), p = {
                    t: h,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: r || e,
                    pr: 0,
                    m: 0
                }) : (p.s = parseFloat(f), c || (p.c = parseFloat(s) - p.s || 0))), p.c ? ((p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p, p) : void 0
            }, U = F._internals = {
                isArray: d,
                isSelector: z,
                lazyTweens: I,
                blobDif: Y
            }, V = F._plugins = {}, q = U.tweenLookup = {}, W = 0, G = U.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1,
                yoyoEase: 1
            }, Z = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            }, H = C._rootFramesTimeline = new D, $ = C._rootTimeline = new D, Q = 30, K = U.lazyRender = function () {
                var t, e = I.length;
                for (X = {}; --e > -1;)t = I[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                I.length = 0
            };
            $._startTime = h.time, H._startTime = h.frame, $._active = H._active = !0, setTimeout(K, 1), C._updateRoot = F.render = function () {
                var t, e, i;
                if (I.length && K(), $.render((h.time - $._startTime) * $._timeScale, !1, !1), H.render((h.frame - H._startTime) * H._timeScale, !1, !1), I.length && K(), h.frame >= Q) {
                    Q = h.frame + (parseInt(F.autoSleep, 10) || 120);
                    for (i in q) {
                        for (e = q[i].tweens, t = e.length; --t > -1;)e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete q[i]
                    }
                    if (i = $._first, (!i || i._paused) && F.autoSleep && !H._first && 1 === h._listeners.tick.length) {
                        for (; i && i._paused;)i = i._next;
                        i || h.sleep()
                    }
                }
            }, h.addEventListener("tick", C._updateRoot);
            var J = function (t, e, i) {
                var s, r, n = t._gsTweenID;
                if (q[n || (t._gsTweenID = n = "t" + W++)] || (q[n] = {
                        target: t,
                        tweens: []
                    }), e && (s = q[n].tweens, s[r = s.length] = e, i))for (; --r > -1;)s[r] === e && s.splice(r, 1);
                return q[n].tweens
            }, te = function (t, e, i, s) {
                var r, n, a = t.vars.onOverwrite;
                return a && (r = a(t, e, i, s)), a = F.onOverwrite, a && (n = a(t, e, i, s)), r !== !1 && n !== !1
            }, ee = function (t, e, i, s, r) {
                var n, a, o, l;
                if (1 === s || s >= 4) {
                    for (l = r.length, n = 0; l > n; n++)if ((o = r[n]) !== e)o._gc || o._kill(null, t, e) && (a = !0); else if (5 === s)break;
                    return a
                }
                var h, _ = e._startTime + c, u = [], f = 0, p = 0 === e._duration;
                for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || ie(e, 0, p), 0 === ie(o, h, p) && (u[f++] = o)) : o._startTime <= _ && o._startTime + o.totalDuration() / o._timeScale > _ && ((p || !o._initted) && _ - o._startTime <= 2e-10 || (u[f++] = o)));
                for (n = f; --n > -1;)if (o = u[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
                    if (2 !== s && !te(o, e))continue;
                    o._enabled(!1, !1) && (a = !0)
                }
                return a
            }, ie = function (t, e, i) {
                for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                    if (n += s._startTime, r *= s._timeScale, s._paused)return -100;
                    s = s._timeline
                }
                return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * c > n - e ? c : (n += t.totalDuration() / t._timeScale / r) > e + c ? 0 : n - e - c
            };
            l._init = function () {
                var t, e, i, s, r, n, a = this.vars, o = this._overwrittenProps, l = this._duration, h = !!a.immediateRender, _ = a.ease;
                if (a.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (s in a.startAt)r[s] = a.startAt[s];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = h && a.lazy !== !1, r.startAt = r.delay = null, r.onUpdate = a.onUpdate, r.onUpdateScope = a.onUpdateScope || a.callbackScope || this, this._startAt = F.to(this.target, 0, r), h)if (this._time > 0)this._startAt = null; else if (0 !== l)return
                } else if (a.runBackwards && 0 !== l)if (this._startAt)this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else {
                    0 !== this._time && (h = !1), i = {};
                    for (s in a)G[s] && "autoCSS" !== s || (i[s] = a[s]);
                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && a.lazy !== !1, i.immediateRender = h, this._startAt = F.to(this.target, 0, i), h) {
                        if (0 === this._time)return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                }
                if (this._ease = _ = _ ? _ instanceof b ? _ : "function" == typeof _ ? new b(_, a.easeParams) : w[_] || F.defaultEase : F.defaultEase, a.easeParams instanceof Array && _.config && (this._ease = _.config.apply(_, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)for (n = this._targets.length, t = 0; n > t; t++)this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0); else e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
                if (e && F._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)for (i = this._firstPT; i;)i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = a.onUpdate, this._initted = !0
            }, l._initProps = function (e, i, s, r, n) {
                var a, o, l, h, _, u;
                if (null == e)return !1;
                X[e._gsTweenID] && K(), this.vars.css || e.style && e !== t && e.nodeType && V.css && this.vars.autoCSS !== !1 && E(this.vars, e);
                for (a in this.vars)if (u = this.vars[a], G[a])u && (u instanceof Array || u.push && d(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[a] = u = this._swapSelfInParams(u, this)); else if (V[a] && (h = new V[a])._onInitTween(e, this.vars[a], this, n)) {
                    for (this._firstPT = _ = {
                        _next: this._firstPT,
                        t: h,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: a,
                        pg: 1,
                        pr: h._priority,
                        m: 0
                    }, o = h._overwriteProps.length; --o > -1;)i[h._overwriteProps[o]] = this._firstPT;
                    (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), _._next && (_._next._prev = _)
                } else i[a] = j.call(this, e, a, "get", u, a, 0, null, this.vars.stringFilter, n);
                return r && this._kill(r, e) ? this._initProps(e, i, s, r, n) : this._overwrite > 1 && this._firstPT && s.length > 1 && ee(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r, n)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (X[e._gsTweenID] = !0), l)
            }, l.render = function (t, e, i) {
                var s, r, n, a, o = this._time, l = this._duration, h = this._rawPrevTime;
                if (t >= l - 1e-7 && t >= 0)this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > h || 0 >= t && t >= -1e-7 || h === c && "isPause" !== this.data) && h !== t && (i = !0, h > c && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : c); else if (1e-7 > t)this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== c || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : c)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0); else if (this._totalTime = this._time = t, this._easeType) {
                    var _ = t / l, u = this._easeType, f = this._easePower;
                    (1 === u || 3 === u && _ >= .5) && (_ = 1 - _), 3 === u && (_ *= 2), 1 === f ? _ *= _ : 2 === f ? _ *= _ * _ : 3 === f ? _ *= _ * _ * _ : 4 === f && (_ *= _ * _ * _ * _), this.ratio = 1 === u ? 1 - _ : 2 === u ? _ : .5 > t / l ? _ / 2 : 1 - _ / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc)return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))return this._time = this._totalTime = o, this._rawPrevTime = h, I.push(this), void(this._lazy = [t, e]);
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), n = this._firstPT; n;)n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s || i) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === c && a !== c && (this._rawPrevTime = 0))
                }
            }, l._kill = function (t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target))return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : F.selector(e) || e;
                var s, r, n, a, o, l, h, _, u, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((d(e) || z(e)) && "number" != typeof e[0])for (s = e.length; --s > -1;)this._kill(t, e[s], i) && (l = !0); else {
                    if (this._targets) {
                        for (s = this._targets.length; --s > -1;)if (e === this._targets[s]) {
                            o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                            break
                        }
                    } else {
                        if (e !== this.target)return !1;
                        o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (o) {
                        if (h = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (F.onOverwrite || this.vars.onOverwrite)) {
                            for (n in h)o[n] && (u || (u = []), u.push(n));
                            if ((u || !t) && !te(this, i, e, u))return !1
                        }
                        for (n in h)(a = o[n]) && (f && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, l.invalidate = function () {
                return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], C.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(Math.min(0, -this._delay))), this
            }, l._enabled = function (t, e) {
                if (_ || h.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s)for (i = s.length; --i > -1;)this._siblings[i] = J(s[i], this, !0); else this._siblings = J(this.target, this, !0)
                }
                return C.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? F._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, F.to = function (t, e, i) {
                return new F(t, e, i)
            }, F.from = function (t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new F(t, e, i)
            }, F.fromTo = function (t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new F(t, e, s)
            }, F.delayedCall = function (t, e, i, s, r) {
                return new F(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, F.set = function (t, e) {
                return new F(t, 0, e)
            }, F.getTweensOf = function (t, e) {
                if (null == t)return [];
                t = "string" != typeof t ? t : F.selector(t) || t;
                var i, s, r, n;
                if ((d(t) || z(t)) && "number" != typeof t[0]) {
                    for (i = t.length, s = []; --i > -1;)s = s.concat(F.getTweensOf(t[i], e));
                    for (i = s.length; --i > -1;)for (n = s[i], r = i; --r > -1;)n === s[r] && s.splice(i, 1)
                } else if (t._gsTweenID)for (s = J(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                return s || []
            }, F.killTweensOf = F.killDelayedCallsTo = function (t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var s = F.getTweensOf(t, e), r = s.length; --r > -1;)s[r]._kill(i, t)
            };
            var se = T("plugins.TweenPlugin", function (t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = se.prototype
            }, !0);
            if (l = se.prototype, se.version = "1.19.0", se.API = 2, l._firstPT = null, l._addTween = j, l.setRatio = B, l._kill = function (t) {
                    var e, i = this._overwriteProps, s = this._firstPT;
                    if (null != t[this._propName])this._overwriteProps = []; else for (e = i.length; --e > -1;)null != t[i[e]] && i.splice(e, 1);
                    for (; s;)null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1
                }, l._mod = l._roundProps = function (t) {
                    for (var e, i = this._firstPT; i;)e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                }, F._onPluginEvent = function (t, e) {
                    var i, s, r, n, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, s = r; s && s.pr > o.pr;)s = s._next;
                            (o._prev = s ? s._prev : n) ? o._prev._next = o : r = o, (o._next = s) ? s._prev = o : n = o, o = a
                        }
                        o = e._firstPT = r
                    }
                    for (; o;)o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, se.activate = function (t) {
                    for (var e = t.length; --e > -1;)t[e].API === se.API && (V[(new t[e])._propName] = t[e]);
                    return !0
                }, v.plugin = function (t) {
                    if (!(t && t.propName && t.init && t.API))throw"illegal plugin definition.";
                    var e, i = t.propName, s = t.priority || 0, r = t.overwriteProps, n = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_mod",
                        mod: "_mod",
                        initAll: "_onInitAllProps"
                    }, a = T("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                        se.call(this, i, s), this._overwriteProps = r || []
                    }, t.global === !0), o = a.prototype = new se(i);
                    o.constructor = a, a.API = t.API;
                    for (e in n)"function" == typeof t[e] && (o[n[e]] = t[e]);
                    return a.version = t.version, se.activate([a]), a
                }, a = t._gsQueue) {
                for (o = 0; o < a.length; o++)a[o]();
                for (l in g)g[l].func || t.console.log("GSAP encountered missing dependency: " + l)
            }
            _ = !1
        }
    }("undefined" != typeof i && i.exports && "undefined" != typeof global ? global : this || window, "TweenMax")
});
;define("activity-2016:widget/7th-anniversary/broadcast/broadcast.js", function (t, i, n) {
    var e = t("common-jquery:widget/lib/jquery/jquery.js"), r = {
        init: function () {
            var t = e(".broadcast-list li");
            this.broadTime = null, t.length > 2 && (this.run(), this.eventHandler())
        }, run: function () {
            function t() {
                var n = e(".broadcast-list li").eq(0), r = parseInt(n.css("margin-left"), 10), a = parseInt(n.outerWidth(), 10);
                r > -a ? n.css("margin-left", r - 1 + "px") : (e(".broadcast-list").append(n), n.css("margin-left", 0)), i.broadTime = window.setTimeout(t, 20)
            }

            var i = this;
            t()
        }, eventHandler: function () {
            var t = this, i = e(".broadcast-list");
            i.on("mouseover", function () {
                clearTimeout(t.broadTime)
            }), i.on("mouseout", function () {
                t.run()
            })
        }
    };
    n.exports = r
});
;define("activity-2016:widget/7th-anniversary/page-1/page-1.js", function (e, t, n) {
    var i = e("common-jquery:widget/lib/jquery/jquery.js"), o = e("common-jquery:widget/js/util/event/event.js");
    e("common-jquery:widget/js/logic/login/login.js");
    var a = e("common-jquery:widget/js/ui/dialog/dialog.js"), s = window.TimelineMax, r = {
        init: function () {
            i("#gift").on("click", function (e) {
                e.preventDefault();
                var t = i(this);
                o.fire("login.check", {
                    isLogin: function () {
                        i.ajax({
                            url: "/submit/activity",
                            type: "post",
                            dataType: "json",
                            data: {
                                method: "sevenYears",
                                token: F.context("bdstoken").token,
                                timestamp: F.context("bdstoken").timestamp
                            },
                            success: function (e) {
                                0 === e.errno ? (t.addClass("disabled"), i(".fire").fadeIn().addClass("animate"), i(".gift-number").text(e.data.joinNum), setTimeout(function () {
                                    var e = new s, t = i(".balloon"), n = [{x: 10, y: 0}, {x: 5, y: -5}, {
                                        x: 5,
                                        y: -5
                                    }, {
                                        x: 0,
                                        y: -5
                                    }, {x: -70, y: -200}];
                                    e.staggerTo(t, 5, {
                                        bezier: {type: "thru", values: n, curviness: 1},
                                        ease: window.Power1.Linear
                                    }).to(t, 2, {opacity: 0}, "-=2")
                                }, 1e3)) : a.alert(e.errmsg)
                            },
                            error: function () {
                                a.alert("服务器错误，请稍后重试")
                            }
                        })
                    }, notLogin: function () {
                        o.fire("login.log", {
                            onLoginSuccess: function () {
                                window.location.reload(!0)
                            }
                        })
                    }
                })
            })
        }
    };
    n.exports = r
});
;define("activity-2016:widget/7th-anniversary/page-2/page-2.js", function (e, i, o) {
    var t = e("common-jquery:widget/lib/jquery/jquery.js"), n = e("common-jquery:widget/js/util/event/event.js");
    e("common-jquery:widget/js/logic/login/login.js");
    var r, s, a, l = e("common-jquery:widget/js/ui/dialog/dialog.js"), d = e("common-jquery:widget/js/logic/address-dialog/address-dialog.js"), c = null, m = {
        now: new Date,
        future: Date.UTC(2050, 0, 1),
        overTimer: function () {
        },
        beforeTimer: function () {
        },
        onTimer: function () {
            t("#seckill").removeClass("seckill-disabled")
        }
    }, u = {
        init: function (e) {
            var i = this;
            i.countDown(e), i.seckill()
        }, countDown: function (e) {
            var i = this;
            clearInterval(c), t.extend(m, e);
            var o = Math.round((m.future.getTime() - m.now.getTime()) / 1e3);
            o > 0 ? (r = Math.floor(o / 3600), s = Math.floor(o / 60) % 60, a = o % 60, r > 99 ? m.overTimer() : (m.beforeTimer(), i.initTime(), i.run())) : m.onTimer()
        }, initTime: function () {
            var e = r > 9 ? r : "0" + r, i = s > 9 ? s : "0" + s, o = a > 9 ? a : "0" + a;
            t(".order0").html(e), t(".order1").html(i), t(".order2").html(o)
        }, run: function () {
            var e = this;
            c = setInterval(function () {
                if (a--, 0 > a)if (s--, s >= 0)a = 59, e.modifyNum(s, t(".order1")); else {
                    if (r--, !(r >= 0))return clearInterval(c), void m.onTimer();
                    a = 59, s = 59, e.modifyNum(s, t(".order1")), e.modifyNum(r, t(".order0"))
                }
                e.modifyNum(a, t(".order2"))
            }, 1e3)
        }, modifyNum: function (e, i) {
            e = e > 9 ? e : "0" + e, i.html(e)
        }, seckill: function () {
            t("#seckill").on("click", function (e) {
                e.preventDefault();
                var i = t(this);
                i.hasClass("seckill-disabled") || i.hasClass("disabled") || n.fire("login.check", {
                    isLogin: function () {
                        i.addClass("disabled"), t.ajax({
                            url: "/submit/activity",
                            type: "post",
                            dataType: "json",
                            data: {
                                method: "sevenYearsSecKill",
                                token: F.context("bdstoken").token,
                                timestamp: F.context("bdstoken").timestamp
                            },
                            success: function (e) {
                                if (0 === e.errno)if (i.addClass("seckill-disabled"), i.removeClass("disabled"), 1 === e.data.win) {
                                    var o = "请认真填写您的邮寄信息！";
                                    d.init({
                                        title: o,
                                        content: "填写地址",
                                        className: "prize-dialog",
                                        submitParams: {
                                            success: !1,
                                            BdsToken: F.context("bdstoken").token,
                                            bdstt: F.context("bdstoken").timestamp,
                                            orderId: e.data.orderId
                                        },
                                        onSubmit: function (e) {
                                            0 === e.errno ? l.alert("", {
                                                content: "您的领取记录可在商城兑换记录中查看~", close: function () {
                                                    window.location.reload(!0)
                                                }
                                            }) : l.alert("兑换失败了，请重试！！")
                                        }
                                    }), i.removeClass("disabled")
                                } else l.alert("手速有待加强，期待下次中奖"); else i.removeClass("disabled"), l.alert(e.errmsg)
                            },
                            error: function () {
                                i.removeClass("disabled"), l.alert("服务器错误，请稍后重试")
                            }
                        })
                    }, notLogin: function () {
                        n.fire("login.log", {
                            onLoginSuccess: function () {
                                window.location.reload(!0)
                            }
                        })
                    }
                })
            })
        }
    };
    o.exports = u
});