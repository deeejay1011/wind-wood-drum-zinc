import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Copy, i as Lock, n as Shield, o as Check, r as Radio, s as ArrowLeftRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BpYMoId9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CHECKS = [
	{
		id: "adb",
		label: "Privileged service is paired over ADB"
	},
	{
		id: "flow",
		label: "Flow “Data SIM tap” is built"
	},
	{
		id: "usage",
		label: "Both subscription blocks use Usage = Data"
	},
	{
		id: "shortcut",
		label: "Home-screen Flow shortcut points at beginning 2"
	},
	{
		id: "listen",
		label: "Beginning 1, the NotiGuy listener, is running"
	},
	{
		id: "notch",
		label: "NotiGuy gesture is “Trigger an automated task”"
	},
	{
		id: "proof",
		label: "Checked Settings: only Mobile data moved"
	}
];
var STORAGE = "data-sim-tap-checks";
function Guide() {
	const [checks, setChecks] = (0, import_react.useState)({});
	const [nameA, setNameA] = (0, import_react.useState)("SIM 1");
	const [nameB, setNameB] = (0, import_react.useState)("SIM 2");
	const [saved, setSaved] = (0, import_react.useState)(false);
	const [data, setData] = (0, import_react.useState)("a");
	const [calls, setCalls] = (0, import_react.useState)("a");
	const [texts, setTexts] = (0, import_react.useState)("a");
	const [note, setNote] = (0, import_react.useState)("Tap once. The first tap only saves the two SIMs.");
	const [copied, setCopied] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(STORAGE);
			if (raw) setChecks(JSON.parse(raw));
		} catch {}
	}, []);
	function toggleCheck(id) {
		setChecks((prev) => {
			const next = {
				...prev,
				[id]: !prev[id]
			};
			localStorage.setItem(STORAGE, JSON.stringify(next));
			return next;
		});
	}
	function tap() {
		if (!saved) {
			setSaved(true);
			setNote("Saved both SIMs. Next tap switches mobile data only.");
			return;
		}
		const next = data === "a" ? "b" : "a";
		setData(next);
		setNote(`Mobile data switched to ${next === "a" ? nameA || "SIM A" : nameB || "SIM B"}. Calls and texts were not changed.`);
	}
	function forget() {
		setSaved(false);
		setNote("Saved SIMs cleared. Next tap asks again, then later taps switch.");
	}
	const done = CHECKS.filter((c) => checks[c.id]).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 pb-24 pt-0 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "bg-data-deep text-on-data -mx-4 mb-8 px-4 py-8 sm:-mx-6 sm:px-6 sm:py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-widest uppercase opacity-80",
						children: "LlamaLab Automate · NotiGuy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-3xl font-semibold tracking-tight sm:text-4xl",
						children: "Data SIM tap"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-base leading-relaxed text-on-data/90",
						children: "One tap swaps which SIM carries mobile data. Calls and text messages stay on the SIMs you already chose. The same flow serves a home-screen shortcut and a NotiGuy notch tap."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: "Changes data only" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: "No root" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: "Tasker not required" })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-labelledby": "demo-title",
				className: "mb-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "demo-title",
						className: "text-xl font-semibold tracking-tight",
						children: "What the tap is allowed to do"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted",
						children: "This is the same rule the flow enforces. Set Calls and Texts to match your phone — the tap will not move them."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-4 sm:grid-cols-[1fr_1.1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-line bg-card rounded-xl border p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted",
											children: "SIM A name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: nameA,
											onChange: (e) => setNameA(e.target.value),
											className: "border-line bg-paper mt-1 w-full rounded-lg border px-3 py-2"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted",
											children: "SIM B name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: nameB,
											onChange: (e) => setNameB(e.target.value),
											className: "border-line bg-paper mt-1 w-full rounded-lg border px-3 py-2"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StayRow, {
									label: "Calls stay on",
									value: calls,
									onChange: setCalls,
									a: nameA,
									b: nameB
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StayRow, {
									label: "Texts stay on",
									value: texts,
									onChange: setTexts,
									a: nameA,
									b: nameB
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: forget,
									className: "text-muted mt-3 text-sm underline-offset-2 hover:underline",
									children: "Forget saved SIMs"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-line bg-card overflow-hidden rounded-xl border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-data-deep text-on-data flex items-center justify-between px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: tap,
									"aria-label": "Notch tap, same action as NotiGuy",
									className: "grid h-11 w-11 place-items-center rounded-full bg-on-data/15 ring-2 ring-on-data/40",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3.5 w-3.5 rounded-full bg-on-data" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs tracking-wide uppercase",
									children: saved ? "listener running" : "not set up"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusRow, {
										kind: "data",
										label: "Mobile data",
										value: saved ? data === "a" ? nameA : nameB : "ask on first tap"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusRow, {
										kind: "lock",
										label: "Calls",
										value: calls === "a" ? nameA : nameB
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusRow, {
										kind: "lock",
										label: "Texts",
										value: texts === "a" ? nameA : nameB
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm",
										"aria-live": "polite",
										children: note
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: tap,
										className: "bg-data text-on-data mt-1 flex min-h-11 w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeftRight, {
											className: "h-4 w-4",
											"aria-hidden": true
										}), "Tap — shortcut or notch"]
									})
								]
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-labelledby": "why-title",
				className: "mb-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "why-title",
						className: "text-xl font-semibold tracking-tight",
						children: "The one setting that is allowed to change"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid gap-3 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
								title: "Mobile data",
								body: "Subscription default set, Usage = Data. This is Android’s “preferred SIM for mobile data.”",
								live: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
								title: "Calls",
								body: "Never written. Leaving Usage blank is wrong — the block’s default is Voice, which would move calls."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
								title: "Texts",
								body: "Never written. Do not set Usage to SMS or MMS, and do not turn mobile data off."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted mt-3 text-sm",
						children: "No root. Automate’s privileged service, started with wireless debugging, is what the Data usage needs. If that service is not running, the switch fails and nothing moves — including calls."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
				done,
				total: CHECKS.length
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				n: "1",
				title: "Pair the privileged service once",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Settings → About phone → tap Build number seven times." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Settings → Developer options → turn on Wireless debugging." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Automate → menu → Settings → ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Privileged service start method" }),
								" →",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Android Debug Bridge (ADB)" }),
								"."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Stay on the same Wi-Fi. In Wireless debugging tap",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Pair device with pairing code" }),
								", then enter that code in the Automate prompt."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Also turn on Automate’s ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Run on system startup" }),
								" setting so the listener returns after a reboot."
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "After a reboot the privileged service must start again. Wireless debugging has to be on, and the phone has to be on a network where Automate can see it. If a later tap errors instead of switching, open Automate and confirm the service is running. An error changes nothing." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepCheck, {
						id: "adb",
						checks,
						onToggle: toggleCheck
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				n: "2",
				title: "Create one flow with three beginnings",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"In Automate tap ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "+" }),
						" and name the flow ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Data SIM tap" }),
						". You will add three ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Flow beginning" }),
						" blocks. They share one flowchart so the saved SIM ids are available to every tap."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[32rem] text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-line border-b text-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 pr-3 font-medium",
										children: "Beginning"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 pr-3 font-medium",
										children: "Title"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 pr-3 font-medium",
										children: "Parallel launch"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 font-medium",
										children: "Who starts it"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-line border-b align-top",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-3 font-mono",
											children: "1"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-3",
											children: "Listen for NotiGuy"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-3",
											children: "Off"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2",
											children: "You, once. Leave it running."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-line border-b align-top",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-3 font-mono",
											children: "2"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-3",
											children: "Switch data SIM"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-3",
											children: "On"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2",
											children: "Home-screen shortcut, and beginning 1."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "align-top",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-3 font-mono",
											children: "3"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-3",
											children: "Forget saved SIMs"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-3",
											children: "Off"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2",
											children: "You, only when an eSIM id changes."
										})
									]
								})
							] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted mt-3 text-sm",
						children: "Parallel launch on beginning 2 is required. Beginning 1 stays running forever, and the shortcut must still be able to start a new fiber."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepCheck, {
						id: "flow",
						checks,
						onToggle: toggleCheck
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				n: "3",
				title: "Wire beginning 2 — the actual switch",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4",
						children: "Drag from each block’s OK dot to the next block’s IN dot. On a decision block, follow the YES or NO label. Leave every unused NO dot empty so a cancel just stops."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
								step: "2a",
								name: "Atomic load",
								search: "Atomic load",
								connect: "OK → next load",
								fields: [{
									k: "Atomic variable",
									v: "simA"
								}]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
								step: "2b",
								name: "Atomic load",
								search: "Atomic load",
								connect: "OK → Expression true",
								fields: [{
									k: "Atomic variable",
									v: "simB"
								}]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
								step: "2c",
								name: "Expression true?",
								search: "Expression true",
								connect: "YES → setup (2d). NO → the switch (2h).",
								fields: [{
									k: "Expression",
									v: "simA == null || simB == null",
									note: "Tap fx if the field wants an expression. Two equals signs. This is the first-run test."
								}]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
								step: "2d",
								name: "Dialog message",
								search: "Dialog message",
								connect: "OK → Subscription pick A. Part of the YES path only.",
								fields: [
									{
										k: "Title",
										v: "Data SIM A"
									},
									{
										k: "Message",
										v: "Choose the first SIM for the data rotation. Calls and texts will not change."
									},
									{
										k: "Show window",
										v: "On"
									}
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
								step: "2e",
								name: "Subscription pick",
								search: "Subscription pick",
								connect: "YES → dialog for SIM B. Leave NO empty.",
								fields: [
									{
										k: "Show window",
										v: "On"
									},
									{
										k: "Picked subscription id",
										v: "simA"
									},
									{
										k: "Picked SIM slot",
										v: "(leave empty)"
									}
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
								step: "2f",
								name: "Dialog message",
								search: "Dialog message",
								connect: "OK → second Subscription pick",
								fields: [
									{
										k: "Title",
										v: "Data SIM B"
									},
									{
										k: "Message",
										v: "Choose the other data SIM."
									},
									{
										k: "Show window",
										v: "On"
									}
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
								step: "2g",
								name: "Subscription pick",
								search: "Subscription pick",
								connect: "YES → Atomic store. Leave NO empty.",
								fields: [{
									k: "Show window",
									v: "On"
								}, {
									k: "Picked subscription id",
									v: "simB"
								}]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
								step: "2g2",
								name: "Atomic store",
								search: "Atomic store",
								connect: "OK → store simB, then the saved toast, then stop.",
								fields: [{
									k: "Atomic variable",
									v: "simA"
								}]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
								step: "2g3",
								name: "Atomic store",
								search: "Atomic store",
								connect: "OK → Toast show, and do not connect the toast further.",
								fields: [{
									k: "Atomic variable",
									v: "simB"
								}]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
								step: "2g4",
								name: "Toast show",
								search: "Toast show",
								connect: "Stop. The next tap is the one that switches.",
								fields: [{
									k: "Message",
									v: "Saved both SIMs. Next tap switches mobile data only."
								}, {
									k: "Duration",
									v: "Long"
								}]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
								step: "2h",
								name: "Subscription default get",
								search: "Subscription default get",
								danger: true,
								connect: "This is the NO path from 2c. OK → Variable set.",
								fields: [
									{
										k: "Proceed",
										v: "Immediately"
									},
									{
										k: "Usage",
										v: "Data",
										note: "Use the dropdown, not fx. Not Generic. Not Voice. Not SMS."
									},
									{
										k: "Subscription id",
										v: "current"
									},
									{
										k: "SIM slot",
										v: "(leave empty)"
									}
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
								step: "2i",
								name: "Variable set",
								search: "Variable set",
								connect: "OK → Subscription default set",
								fields: [{
									k: "Variable",
									v: "next"
								}, {
									k: "Value",
									v: "current == simA ? simB : simA",
									note: "If data is on A, go to B. Any other case, including “already on B”, goes to A."
								}]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
								step: "2j",
								name: "Subscription default set",
								search: "Subscription default set",
								danger: true,
								connect: "OK → toast, then stop. There is no loop on this beginning.",
								fields: [{
									k: "Usage",
									v: "Data",
									note: "The default if you leave this blank is Voice. That would change the call SIM. Do not add a second copy of this block for SMS."
								}, {
									k: "Subscription id",
									v: "next"
								}]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
								step: "2k",
								name: "Toast show",
								search: "Toast show",
								connect: "Stop.",
								fields: [{
									k: "Message",
									v: "Mobile data switched. Calls and texts unchanged."
								}, {
									k: "Duration",
									v: "Short"
								}]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
						"Do not add ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Mobile data set state" }),
						". That block turns data on or off. It is not the switch between SIMs, and aiming it at one subscription can drop data instead of moving it."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepCheck, {
						id: "usage",
						checks,
						onToggle: toggleCheck
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				n: "4",
				title: "Home-screen shortcut — the one tap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Long-press an empty spot on the home screen." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Widgets → Automate → ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Flow shortcut" }),
								". Not the status widget."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Choose flow ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Data SIM tap" }),
								", beginning",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "2 · Switch data SIM" }),
								"."
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3",
						children: "The first tap shows the two SIM pickers and saves their subscription ids (those ids are not slot 1 and slot 2, and they change if you reinstall an eSIM). Every tap after that only moves mobile data."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepCheck, {
						id: "shortcut",
						checks,
						onToggle: toggleCheck
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				n: "5",
				title: "NotiGuy — same tap from the notch",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"NotiGuy does not open the shortcut. On a notch tap it sends a broadcast. The NotiGuy developer’s action is ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeCopy, {
							value: "com.notiguy.TASK",
							copied,
							onCopy: () => setCopied(true)
						}),
						" with an extra named ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "font-mono text-sm",
							children: "start"
						}),
						" that flips between true and false. Tasker users listen for that action. Automate listens with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Broadcast receive" }),
						", so Tasker stays uninstalled."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3",
						children: [
							"Ignore ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-sm",
								children: "start"
							}),
							". If you only switch when it is true, the notch works every other tap."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							step: "1a",
							name: "Broadcast receive",
							search: "Broadcast receive",
							connect: "From beginning 1. OK → Flow start. You will also loop back here.",
							fields: [
								{
									k: "Action",
									v: "\"com.notiguy.TASK\"",
									note: "Tap the fx button and include the quote marks. Without fx, Automate rejects the dots."
								},
								{
									k: "Package, URI, category",
									v: "(all empty)"
								},
								{
									k: "Broadcast extras",
									v: "extras"
								}
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							step: "1b",
							name: "Flow start",
							search: "Flow start",
							connect: "OK → back to the Broadcast receive IN dot.",
							fields: [
								{
									k: "Stop with parent",
									v: "Off"
								},
								{
									k: "Flow URI",
									v: "pick beginning “2 · Switch data SIM”",
									note: "Use the picker inside the block. The URI belongs to this phone; do not type one from anywhere else."
								},
								{
									k: "Payload",
									v: "(empty)"
								}
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "mt-4 list-decimal space-y-2 pl-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"In Automate, start the flow and choose ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "1 · Listen for NotiGuy" }),
								". Leave that fiber running. It sleeps inside Broadcast receive, so it is not a polling loop."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "NotiGuy → Interactive notch (some versions say Notch touch). Pick the gesture — single tap, or long touch if you want fewer accidents." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Set that gesture to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Trigger an automated task" }),
								". If it asks for a task name, type ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "font-mono text-sm",
									children: "SwitchDataSim"
								}),
								". The listener does not filter on the name."
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "The shortcut works while the listener is stopped. The notch does not. After a reboot, confirm beginning 1 is running again." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepCheck, {
						id: "listen",
						checks,
						onToggle: toggleCheck
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepCheck, {
						id: "notch",
						checks,
						onToggle: toggleCheck
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				n: "6",
				title: "Forget path, for a replaced eSIM",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4",
					children: "Subscription ids change when an eSIM is deleted and added again. Beginning 3 clears the saved pair so the next switch asks you to pick again."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							step: "3a",
							name: "Variable set",
							search: "Variable set",
							connect: "From beginning 3. Do this for simA, then the same three blocks for simB.",
							fields: [{
								k: "Variable",
								v: "simA"
							}, {
								k: "Value",
								v: "null"
							}]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							step: "3b",
							name: "Atomic store",
							search: "Atomic store",
							connect: "Then repeat Variable set + Atomic store for simB, then a toast, then stop.",
							fields: [{
								k: "Atomic variable",
								v: "simA"
							}]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							step: "3c",
							name: "Toast show",
							search: "Toast show",
							connect: "Stop.",
							fields: [{
								k: "Message",
								v: "Saved SIMs cleared."
							}]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				n: "7",
				title: "Prove calls and texts did not move",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "list-decimal space-y-2 pl-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Settings → SIM manager (Samsung: Connections → SIM manager → Preferred SIMs). Note the Calls row and the Texts row." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tap the shortcut, or the notch." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Look again. Mobile data is the only row that should change." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"If Calls moved, Usage was left at Voice on ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Subscription default set" }),
							". Fix that block, and the get block, to Data. Put Calls and Texts back by hand once. The flow will not touch them again."
						] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepCheck, {
					id: "proof",
					checks,
					onToggle: toggleCheck
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				n: "8",
				title: "If a tap does nothing",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "list-disc space-y-2 pl-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Open the flow log. “Privileged service” means redo step 1. Nothing has been changed yet." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Notch silent, shortcut works: beginning 1 is stopped, or the broadcast Action is missing fx quotes. NotiGuy’s accessibility service also has to be on." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Battery optimization must be Unrestricted for Automate, or the listener is frozen until you open the app." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The Usage menu has no Data entry: update Automate from the Play Store, then set the dropdown again. Do not type a Voice value to “make it run.”" })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "text-muted mt-12 text-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-start gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
						className: "mt-0.5 h-4 w-4 shrink-0",
						"aria-hidden": true
					}), "Blocks used for the write: Subscription default set, and only with Usage = Data. Read with Subscription default get, same usage. No voice block, no SMS block, no mobile-data power toggle."]
				})
			})
		]
	});
}
function Pill({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "rounded-full bg-on-data/10 px-3 py-1 font-medium",
		children
	});
}
function Fact({ title, body, live }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: `rounded-xl border p-4 ${live ? "border-data bg-soft" : "border-line bg-card"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
			className: "flex items-center gap-2 font-semibold",
			children: [live ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, {
				className: "text-data h-4 w-4",
				"aria-hidden": true
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
				className: "text-muted h-4 w-4",
				"aria-hidden": true
			}), title]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted mt-1 text-sm",
			children: body
		})]
	});
}
function Progress({ done, total }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-line bg-card mb-8 rounded-xl border px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-semibold",
				children: "On the phone"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-sm text-muted",
				children: [
					done,
					"/",
					total
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-line mt-2 h-1.5 overflow-hidden rounded-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-data h-full",
				style: { width: `${done / total * 100}%` }
			})
		})]
	});
}
function Section({ n, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mb-10",
		"aria-labelledby": `s-${n}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			id: `s-${n}`,
			className: "text-xl font-semibold tracking-tight",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-data font-mono text-sm",
					children: n
				}),
				" ",
				title
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 space-y-3",
			children
		})]
	});
}
function Block({ step, name, search, connect, fields, danger }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: `rounded-xl border p-4 ${danger ? "border-ink bg-card" : "border-line bg-card"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-wrap items-baseline justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "font-semibold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sm text-muted",
							children: step
						}),
						" ",
						name
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs text-muted",
					children: [
						"search “",
						search,
						"”"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-3 space-y-2",
				children: fields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1 sm:grid-cols-[11rem_1fr] sm:gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted text-sm",
						children: f.k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
						className: "bg-paper border-line inline-block rounded-md border px-2 py-1 text-sm break-all",
						children: f.v
					}), f.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted mt-1 text-sm",
						children: f.note
					}) : null] })]
				}, f.k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: "Wire. "
				}), connect]
			})
		]
	});
}
function Callout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "border-data bg-soft rounded-xl border-l-4 px-4 py-3 text-sm",
		children
	});
}
function StepCheck({ id, checks, onToggle }) {
	const item = CHECKS.find((c) => c.id === id);
	const on = !!checks[id];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "border-line bg-card mt-1 flex min-h-11 items-center gap-3 rounded-xl border px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "checkbox",
			checked: on,
			onChange: () => onToggle(id),
			className: "h-5 w-5 accent-data"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-2 text-sm",
			children: [on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				className: "text-data h-4 w-4",
				"aria-hidden": true
			}) : null, item.label]
		})]
	});
}
function StayRow({ label, value, onChange, a, b }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-muted flex items-center gap-1 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
				className: "h-3.5 w-3.5",
				"aria-hidden": true
			}), label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 grid grid-cols-2 gap-2",
			children: ["a", "b"].map((side) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onChange(side),
				"aria-pressed": value === side,
				className: `min-h-11 rounded-lg border px-2 text-sm ${value === side ? "border-ink bg-paper font-medium" : "border-line text-muted"}`,
				children: side === "a" ? a || "SIM A" : b || "SIM B"
			}, side))
		})]
	});
}
function StatusRow({ kind, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-center justify-between gap-3 rounded-lg px-3 py-2 ${kind === "data" ? "bg-soft" : "bg-paper"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-2 text-sm",
			children: [kind === "data" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, {
				className: "text-data h-4 w-4",
				"aria-hidden": true
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
				className: "text-muted h-4 w-4",
				"aria-hidden": true
			}), label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-right text-sm font-medium",
			children: value
		})]
	});
}
function CodeCopy({ value, copied, onCopy }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => {
			navigator.clipboard.writeText(value).then(onCopy);
		},
		className: "border-line bg-paper inline-flex min-h-9 items-center gap-1 rounded-md border px-2 align-middle font-mono text-sm",
		children: [
			value,
			copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				className: "h-3.5 w-3.5",
				"aria-hidden": true
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				className: "h-3.5 w-3.5",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: copied ? "Copied" : "Copy action"
			})
		]
	});
}
var SplitComponent = Guide;
//#endregion
export { SplitComponent as component };
