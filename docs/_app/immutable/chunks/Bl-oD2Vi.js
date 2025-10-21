import {
	a4 as oe,
	h as $,
	a0 as G,
	a5 as le,
	e as N,
	a6 as Y,
	a7 as W,
	K as p,
	w as h,
	a8 as ue,
	S as k,
	v as J,
	x as ce,
	a9 as O,
	H as fe,
	D as v,
	aa as M,
	J as F,
	a2 as R,
	ab as m,
	ac as q,
	ad as de,
	ae as A,
	b as u,
	af as he,
	ag as I,
	A as T,
	ah as _e,
	z as pe,
	ai as z,
	aj as ge,
	E as ve,
	ak as ye,
	al as be,
	am as D,
	an as Ee,
	ao as me,
	ap as K,
	aq as we,
	ar as Te,
	C as X,
	as as Se,
	at as Q,
	B as w,
	au as Z,
	av as P,
	aw as V,
	ax as ke,
	ay as Ae,
	az as xe,
	aA as Ce,
	p as Re,
	aB as De,
	aC as Ne,
	aD as Oe,
	m as Le,
	aE as x,
	d as Me,
	aF as Fe,
	aG as ee,
	W as Ie,
	aH as Pe,
	aI as Ve,
	aJ as Be,
	aK as He,
	aL as We,
	aM as je,
	aN as Ye,
	aO as qe
} from './BGLDHNfr.js';
function ze(t) {
	let e = 0,
		n = G(0),
		a;
	return () => {
		oe() &&
			($(n),
			le(
				() => (
					e === 0 && (a = N(() => t(() => Y(n)))),
					(e += 1),
					() => {
						W(() => {
							((e -= 1), e === 0 && (a?.(), (a = void 0), Y(n)));
						});
					}
				)
			));
	};
}
var Ue = ve | ye | be;
function $e(t, e, n) {
	new Ge(t, e, n);
}
class Ge {
	parent;
	#s = !1;
	#t;
	#p = h ? p : null;
	#a;
	#c;
	#i;
	#n = null;
	#e = null;
	#r = null;
	#o = null;
	#f = 0;
	#l = 0;
	#d = !1;
	#u = null;
	#v = () => {
		this.#u && ue(this.#u, this.#f);
	};
	#y = ze(
		() => (
			(this.#u = G(this.#f)),
			() => {
				this.#u = null;
			}
		)
	);
	constructor(e, n, a) {
		((this.#t = e),
			(this.#a = n),
			(this.#c = a),
			(this.parent = k.b),
			(this.#s = !!this.#a.pending),
			(this.#i = J(() => {
				if (((k.b = this), h)) {
					const i = this.#p;
					(ce(), i.nodeType === O && i.data === fe ? this.#E() : this.#b());
				} else {
					try {
						this.#n = v(() => a(this.#t));
					} catch (i) {
						this.error(i);
					}
					this.#l > 0 ? this.#_() : (this.#s = !1);
				}
			}, Ue)),
			h && (this.#t = p));
	}
	#b() {
		try {
			this.#n = v(() => this.#c(this.#t));
		} catch (e) {
			this.error(e);
		}
		this.#s = !1;
	}
	#E() {
		const e = this.#a.pending;
		e &&
			((this.#e = v(() => e(this.#t))),
			M.enqueue(() => {
				((this.#n = this.#h(() => (M.ensure(), v(() => this.#c(this.#t))))),
					this.#l > 0
						? this.#_()
						: (F(this.#e, () => {
								this.#e = null;
							}),
							(this.#s = !1)));
			}));
	}
	is_pending() {
		return this.#s || (!!this.parent && this.parent.is_pending());
	}
	has_pending_snippet() {
		return !!this.#a.pending;
	}
	#h(e) {
		var n = k,
			a = A,
			i = u;
		(R(this.#i), m(this.#i), q(this.#i.ctx));
		try {
			return e();
		} catch (s) {
			return (de(s), null);
		} finally {
			(R(n), m(a), q(i));
		}
	}
	#_() {
		const e = this.#a.pending;
		(this.#n !== null && ((this.#o = document.createDocumentFragment()), Je(this.#n, this.#o)),
			this.#e === null && (this.#e = v(() => e(this.#t))));
	}
	#g(e) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#g(e);
			return;
		}
		((this.#l += e),
			this.#l === 0 &&
				((this.#s = !1),
				this.#e &&
					F(this.#e, () => {
						this.#e = null;
					}),
				this.#o && (this.#t.before(this.#o), (this.#o = null))));
	}
	update_pending_count(e) {
		(this.#g(e), (this.#f += e), he.add(this.#v));
	}
	get_effect_pending() {
		return (this.#y(), $(this.#u));
	}
	error(e) {
		var n = this.#a.onerror;
		let a = this.#a.failed;
		if (this.#d || (!n && !a)) throw e;
		(this.#n && (I(this.#n), (this.#n = null)),
			this.#e && (I(this.#e), (this.#e = null)),
			this.#r && (I(this.#r), (this.#r = null)),
			h && (T(this.#p), _e(), T(pe())));
		var i = !1,
			s = !1;
		const r = () => {
			if (i) {
				Ee();
				return;
			}
			((i = !0),
				s && ge(),
				M.ensure(),
				(this.#f = 0),
				this.#r !== null &&
					F(this.#r, () => {
						this.#r = null;
					}),
				(this.#s = this.has_pending_snippet()),
				(this.#n = this.#h(() => ((this.#d = !1), v(() => this.#c(this.#t))))),
				this.#l > 0 ? this.#_() : (this.#s = !1));
		};
		var c = A;
		try {
			(m(null), (s = !0), n?.(e, r), (s = !1));
		} catch (d) {
			z(d, this.#i && this.#i.parent);
		} finally {
			m(c);
		}
		a &&
			W(() => {
				this.#r = this.#h(() => {
					this.#d = !0;
					try {
						return v(() => {
							a(
								this.#t,
								() => e,
								() => r
							);
						});
					} catch (d) {
						return (z(d, this.#i.parent), null);
					} finally {
						this.#d = !1;
					}
				});
			});
	}
}
function Je(t, e) {
	for (var n = t.nodes_start, a = t.nodes_end; n !== null; ) {
		var i = n === a ? null : D(n);
		(e.append(n), (n = i));
	}
}
function dt(t) {
	return t.endsWith('capture') && t !== 'gotpointercapture' && t !== 'lostpointercapture';
}
const Ke = [
	'beforeinput',
	'click',
	'change',
	'dblclick',
	'contextmenu',
	'focusin',
	'focusout',
	'input',
	'keydown',
	'keyup',
	'mousedown',
	'mousemove',
	'mouseout',
	'mouseover',
	'mouseup',
	'pointerdown',
	'pointermove',
	'pointerout',
	'pointerover',
	'pointerup',
	'touchend',
	'touchmove',
	'touchstart'
];
function ht(t) {
	return Ke.includes(t);
}
const Xe = {
	formnovalidate: 'formNoValidate',
	ismap: 'isMap',
	nomodule: 'noModule',
	playsinline: 'playsInline',
	readonly: 'readOnly',
	defaultvalue: 'defaultValue',
	defaultchecked: 'defaultChecked',
	srcobject: 'srcObject',
	novalidate: 'noValidate',
	allowfullscreen: 'allowFullscreen',
	disablepictureinpicture: 'disablePictureInPicture',
	disableremoteplayback: 'disableRemotePlayback'
};
function _t(t) {
	return ((t = t.toLowerCase()), Xe[t] ?? t);
}
const Qe = ['touchstart', 'touchmove'];
function Ze(t) {
	return Qe.includes(t);
}
const et = ['textarea', 'script', 'style', 'title'];
function pt(t) {
	return et.includes(t);
}
const te = new Set(),
	B = new Set();
function tt(t, e, n, a = {}) {
	function i(s) {
		if ((a.capture || S.call(e, s), !s.cancelBubble)) return we(() => n?.call(this, s));
	}
	return (
		t.startsWith('pointer') || t.startsWith('touch') || t === 'wheel'
			? W(() => {
					e.addEventListener(t, i, a);
				})
			: e.addEventListener(t, i, a),
		i
	);
}
function gt(t, e, n, a, i) {
	var s = { capture: a, passive: i },
		r = tt(t, e, n, s);
	(e === document.body || e === window || e === document || e instanceof HTMLMediaElement) &&
		Te(() => {
			e.removeEventListener(t, r, s);
		});
}
function vt(t) {
	for (var e = 0; e < t.length; e++) te.add(t[e]);
	for (var n of B) n(t);
}
let U = null;
function S(t) {
	var e = this,
		n = e.ownerDocument,
		a = t.type,
		i = t.composedPath?.() || [],
		s = i[0] || t.target;
	U = t;
	var r = 0,
		c = U === t && t.__root;
	if (c) {
		var d = i.indexOf(c);
		if (d !== -1 && (e === document || e === window)) {
			t.__root = e;
			return;
		}
		var y = i.indexOf(e);
		if (y === -1) return;
		d <= y && (r = d);
	}
	if (((s = i[r] || t.target), s !== e)) {
		me(t, 'currentTarget', {
			configurable: !0,
			get() {
				return s || n;
			}
		});
		var L = A,
			_ = k;
		(m(null), R(null));
		try {
			for (var o, l = []; s !== null; ) {
				var b = s.assignedSlot || s.parentNode || s.host || null;
				try {
					var g = s['__' + a];
					if (g != null && (!s.disabled || t.target === s))
						if (K(g)) {
							var [ie, ...re] = g;
							ie.apply(s, [t, ...re]);
						} else g.call(s, t);
				} catch (C) {
					o ? l.push(C) : (o = C);
				}
				if (t.cancelBubble || b === e || b === null) break;
				s = b;
			}
			if (o) {
				for (let C of l)
					queueMicrotask(() => {
						throw C;
					});
				throw o;
			}
		} finally {
			((t.__root = e), delete t.currentTarget, m(L), R(_));
		}
	}
}
let f;
function nt() {
	f = void 0;
}
function yt(t) {
	let e = null,
		n = h;
	var a;
	if (h) {
		for (
			e = p, f === void 0 && (f = Z(document.head));
			f !== null && (f.nodeType !== O || f.data !== Q);

		)
			f = D(f);
		f === null ? w(!1) : (f = T(D(f)));
	}
	h || (a = document.head.appendChild(X()));
	try {
		J(() => t(a), Se);
	} finally {
		n && (w(!0), (f = p), T(e));
	}
}
function bt(t, e) {
	var n = e == null ? '' : typeof e == 'object' ? e + '' : e;
	n !== (t.__t ??= t.nodeValue) && ((t.__t = n), (t.nodeValue = n + ''));
}
function ne(t, e) {
	return se(t, e);
}
function st(t, e) {
	(P(), (e.intro = e.intro ?? !1));
	const n = e.target,
		a = h,
		i = p;
	try {
		for (var s = Z(n); s && (s.nodeType !== O || s.data !== Q); ) s = D(s);
		if (!s) throw V;
		(w(!0), T(s));
		const r = se(t, { ...e, anchor: s });
		return (w(!1), r);
	} catch (r) {
		if (
			r instanceof Error &&
			r.message
				.split(
					`
`
				)
				.some((c) => c.startsWith('https://svelte.dev/e/'))
		)
			throw r;
		return (
			r !== V && console.warn('Failed to hydrate: ', r),
			e.recover === !1 && ke(),
			P(),
			Ae(n),
			w(!1),
			ne(t, e)
		);
	} finally {
		(w(a), T(i), nt());
	}
}
const E = new Map();
function se(t, { target: e, anchor: n, props: a = {}, events: i, context: s, intro: r = !0 }) {
	P();
	var c = new Set(),
		d = (_) => {
			for (var o = 0; o < _.length; o++) {
				var l = _[o];
				if (!c.has(l)) {
					c.add(l);
					var b = Ze(l);
					e.addEventListener(l, S, { passive: b });
					var g = E.get(l);
					g === void 0
						? (document.addEventListener(l, S, { passive: b }), E.set(l, 1))
						: E.set(l, g + 1);
				}
			}
		};
	(d(xe(te)), B.add(d));
	var y = void 0,
		L = Ce(() => {
			var _ = n ?? e.appendChild(X());
			return (
				$e(_, { pending: () => {} }, (o) => {
					if (s) {
						Re({});
						var l = u;
						l.c = s;
					}
					if (
						(i && (a.$$events = i),
						h && De(o, null),
						(y = t(o, a) || {}),
						h && ((k.nodes_end = p), p === null || p.nodeType !== O || p.data !== Ne))
					)
						throw (Oe(), V);
					s && Le();
				}),
				() => {
					for (var o of c) {
						e.removeEventListener(o, S);
						var l = E.get(o);
						--l === 0 ? (document.removeEventListener(o, S), E.delete(o)) : E.set(o, l);
					}
					(B.delete(d), _ !== n && _.parentNode?.removeChild(_));
				}
			);
		});
	return (H.set(y, L), y);
}
let H = new WeakMap();
function at(t, e) {
	const n = H.get(t);
	return n ? (H.delete(t), n(e)) : Promise.resolve();
}
function it() {
	return (A === null && Fe(), (A.ac ??= new AbortController()).signal);
}
function ae(t) {
	(u === null && x(),
		Ie && u.l !== null
			? j(u).m.push(t)
			: Me(() => {
					const e = N(t);
					if (typeof e == 'function') return e;
				}));
}
function rt(t) {
	(u === null && x(), ae(() => () => N(t)));
}
function ot(t, e, { bubbles: n = !1, cancelable: a = !1 } = {}) {
	return new CustomEvent(t, { detail: e, bubbles: n, cancelable: a });
}
function lt() {
	const t = u;
	return (
		t === null && x(),
		(e, n, a) => {
			const i = t.s.$$events?.[e];
			if (i) {
				const s = K(i) ? i.slice() : [i],
					r = ot(e, n, a);
				for (const c of s) c.call(t.x, r);
				return !r.defaultPrevented;
			}
			return !0;
		}
	);
}
function ut(t) {
	(u === null && x(), u.l === null && ee(), j(u).b.push(t));
}
function ct(t) {
	(u === null && x(), u.l === null && ee(), j(u).a.push(t));
}
function j(t) {
	var e = t.l;
	return (e.u ??= { a: [], b: [], m: [] });
}
const Et = Object.freeze(
	Object.defineProperty(
		{
			__proto__: null,
			afterUpdate: ct,
			beforeUpdate: ut,
			createEventDispatcher: lt,
			createRawSnippet: Pe,
			flushSync: Ve,
			getAbortSignal: it,
			getAllContexts: Be,
			getContext: He,
			hasContext: We,
			hydrate: st,
			mount: ne,
			onDestroy: rt,
			onMount: ae,
			setContext: je,
			settled: Ye,
			tick: qe,
			unmount: at,
			untrack: N
		},
		Symbol.toStringTag,
		{ value: 'Module' }
	)
);
export {
	dt as a,
	ht as b,
	tt as c,
	vt as d,
	gt as e,
	yt as f,
	Et as g,
	st as h,
	pt as i,
	ne as m,
	_t as n,
	ae as o,
	bt as s,
	at as u
};
