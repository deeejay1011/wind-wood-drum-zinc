import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowLeftRight,
  Check,
  Copy,
  Lock,
  Radio,
  Shield,
} from "lucide-react";

type Side = "a" | "b";

const CHECKS = [
  { id: "adb", label: "Privileged service is paired over ADB" },
  { id: "flow", label: "Flow “Data SIM tap” is built" },
  { id: "usage", label: "Both subscription blocks use Usage = Data" },
  { id: "shortcut", label: "Home-screen Flow shortcut points at beginning 2" },
  { id: "listen", label: "Beginning 1, the NotiGuy listener, is running" },
  { id: "notch", label: "NotiGuy gesture is “Trigger an automated task”" },
  { id: "proof", label: "Checked Settings: only Mobile data moved" },
] as const;

const STORAGE = "data-sim-tap-checks";

export function Guide() {
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [nameA, setNameA] = useState("SIM 1");
  const [nameB, setNameB] = useState("SIM 2");
  const [saved, setSaved] = useState(false);
  const [data, setData] = useState<Side>("a");
  const [calls, setCalls] = useState<Side>("a");
  const [texts, setTexts] = useState<Side>("a");
  const [note, setNote] = useState("Tap once. The first tap only saves the two SIMs.");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (raw) setChecks(JSON.parse(raw) as Record<string, boolean>);
    } catch {
      /* ignore broken storage */
    }
  }, []);

  function toggleCheck(id: string) {
    setChecks((prev) => {
      const next = { ...prev, [id]: !prev[id] };
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
    const label = next === "a" ? nameA || "SIM A" : nameB || "SIM B";
    setNote(`Mobile data switched to ${label}. Calls and texts were not changed.`);
  }

  function forget() {
    setSaved(false);
    setNote("Saved SIMs cleared. Next tap asks again, then later taps switch.");
  }

  const done = CHECKS.filter((c) => checks[c.id]).length;

  return (
    <main className="mx-auto max-w-3xl px-4 pb-24 pt-0 sm:px-6">
      <header className="bg-data-deep text-on-data -mx-4 mb-8 px-4 py-8 sm:-mx-6 sm:px-6 sm:py-10">
        <p className="font-mono text-xs tracking-widest uppercase opacity-80">
          LlamaLab Automate · NotiGuy
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Data SIM tap
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-on-data/90">
          One tap swaps which SIM carries mobile data. Calls and text messages
          stay on the SIMs you already chose. The same flow serves a home-screen
          shortcut and a NotiGuy notch tap.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          <Pill>Changes data only</Pill>
          <Pill>No root</Pill>
          <Pill>Tasker not required</Pill>
        </div>
      </header>

      <section aria-labelledby="demo-title" className="mb-10">
        <h2 id="demo-title" className="text-xl font-semibold tracking-tight">
          What the tap is allowed to do
        </h2>
        <p className="mt-2 text-muted">
          This is the same rule the flow enforces. Set Calls and Texts to match
          your phone — the tap will not move them.
        </p>

        <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_1.1fr]">
          <div className="border-line bg-card rounded-xl border p-4">
            <div className="grid grid-cols-2 gap-3">
              <label className="block text-sm">
                <span className="text-muted">SIM A name</span>
                <input
                  value={nameA}
                  onChange={(e) => setNameA(e.target.value)}
                  className="border-line bg-paper mt-1 w-full rounded-lg border px-3 py-2"
                />
              </label>
              <label className="block text-sm">
                <span className="text-muted">SIM B name</span>
                <input
                  value={nameB}
                  onChange={(e) => setNameB(e.target.value)}
                  className="border-line bg-paper mt-1 w-full rounded-lg border px-3 py-2"
                />
              </label>
            </div>
            <StayRow label="Calls stay on" value={calls} onChange={setCalls} a={nameA} b={nameB} />
            <StayRow label="Texts stay on" value={texts} onChange={setTexts} a={nameA} b={nameB} />
            <button
              type="button"
              onClick={forget}
              className="text-muted mt-3 text-sm underline-offset-2 hover:underline"
            >
              Forget saved SIMs
            </button>
          </div>

          <div className="border-line bg-card overflow-hidden rounded-xl border">
            <div className="bg-data-deep text-on-data flex items-center justify-between px-4 py-3">
              <button
                type="button"
                onClick={tap}
                aria-label="Notch tap, same action as NotiGuy"
                className="grid h-11 w-11 place-items-center rounded-full bg-on-data/15 ring-2 ring-on-data/40"
              >
                <span className="h-3.5 w-3.5 rounded-full bg-on-data" />
              </button>
              <span className="font-mono text-xs tracking-wide uppercase">
                {saved ? "listener running" : "not set up"}
              </span>
            </div>
            <div className="space-y-2 p-4">
              <StatusRow
                kind="data"
                label="Mobile data"
                value={saved ? (data === "a" ? nameA : nameB) : "ask on first tap"}
              />
              <StatusRow kind="lock" label="Calls" value={calls === "a" ? nameA : nameB} />
              <StatusRow kind="lock" label="Texts" value={texts === "a" ? nameA : nameB} />
              <p className="text-sm" aria-live="polite">
                {note}
              </p>
              <button
                type="button"
                onClick={tap}
                className="bg-data text-on-data mt-1 flex min-h-11 w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 font-medium"
              >
                <ArrowLeftRight className="h-4 w-4" aria-hidden />
                Tap — shortcut or notch
              </button>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="why-title" className="mb-10">
        <h2 id="why-title" className="text-xl font-semibold tracking-tight">
          The one setting that is allowed to change
        </h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <Fact title="Mobile data" body="Subscription default set, Usage = Data. This is Android’s “preferred SIM for mobile data.”" live />
          <Fact title="Calls" body="Never written. Leaving Usage blank is wrong — the block’s default is Voice, which would move calls." />
          <Fact title="Texts" body="Never written. Do not set Usage to SMS or MMS, and do not turn mobile data off." />
        </div>
        <p className="text-muted mt-3 text-sm">
          No root. Automate’s privileged service, started with wireless debugging,
          is what the Data usage needs. If that service is not running, the switch
          fails and nothing moves — including calls.
        </p>
      </section>

      <Progress done={done} total={CHECKS.length} />

      <Section n="1" title="Pair the privileged service once">
        <ol className="list-decimal space-y-2 pl-5">
          <li>Settings → About phone → tap Build number seven times.</li>
          <li>Settings → Developer options → turn on Wireless debugging.</li>
          <li>
            Automate → menu → Settings → <strong>Privileged service start method</strong> →{" "}
            <strong>Android Debug Bridge (ADB)</strong>.
          </li>
          <li>
            Stay on the same Wi-Fi. In Wireless debugging tap{" "}
            <strong>Pair device with pairing code</strong>, then enter that code in
            the Automate prompt.
          </li>
          <li>
            Also turn on Automate’s <strong>Run on system startup</strong> setting
            so the listener returns after a reboot.
          </li>
        </ol>
        <Callout>
          After a reboot the privileged service must start again. Wireless debugging
          has to be on, and the phone has to be on a network where Automate can see
          it. If a later tap errors instead of switching, open Automate and confirm
          the service is running. An error changes nothing.
        </Callout>
        <StepCheck id="adb" checks={checks} onToggle={toggleCheck} />
      </Section>

      <Section n="2" title="Create one flow with three beginnings">
        <p>
          In Automate tap <strong>+</strong> and name the flow <strong>Data SIM tap</strong>.
          You will add three <strong>Flow beginning</strong> blocks. They share one
          flowchart so the saved SIM ids are available to every tap.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead>
              <tr className="border-line border-b text-muted">
                <th className="py-2 pr-3 font-medium">Beginning</th>
                <th className="py-2 pr-3 font-medium">Title</th>
                <th className="py-2 pr-3 font-medium">Parallel launch</th>
                <th className="py-2 font-medium">Who starts it</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-line border-b align-top">
                <td className="py-2 pr-3 font-mono">1</td>
                <td className="py-2 pr-3">Listen for NotiGuy</td>
                <td className="py-2 pr-3">Off</td>
                <td className="py-2">You, once. Leave it running.</td>
              </tr>
              <tr className="border-line border-b align-top">
                <td className="py-2 pr-3 font-mono">2</td>
                <td className="py-2 pr-3">Switch data SIM</td>
                <td className="py-2 pr-3">On</td>
                <td className="py-2">Home-screen shortcut, and beginning 1.</td>
              </tr>
              <tr className="align-top">
                <td className="py-2 pr-3 font-mono">3</td>
                <td className="py-2 pr-3">Forget saved SIMs</td>
                <td className="py-2 pr-3">Off</td>
                <td className="py-2">You, only when an eSIM id changes.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted mt-3 text-sm">
          Parallel launch on beginning 2 is required. Beginning 1 stays running
          forever, and the shortcut must still be able to start a new fiber.
        </p>
        <StepCheck id="flow" checks={checks} onToggle={toggleCheck} />
      </Section>

      <Section n="3" title="Wire beginning 2 — the actual switch">
        <p className="mb-4">
          Drag from each block’s OK dot to the next block’s IN dot. On a decision
          block, follow the YES or NO label. Leave every unused NO dot empty so a
          cancel just stops.
        </p>
        <div className="space-y-3">
          <Block
            step="2a"
            name="Atomic load"
            search="Atomic load"
            connect="OK → next load"
            fields={[{ k: "Atomic variable", v: "simA" }]}
          />
          <Block
            step="2b"
            name="Atomic load"
            search="Atomic load"
            connect="OK → Expression true"
            fields={[{ k: "Atomic variable", v: "simB" }]}
          />
          <Block
            step="2c"
            name="Expression true?"
            search="Expression true"
            connect="YES → setup (2d). NO → the switch (2h)."
            fields={[
              {
                k: "Expression",
                v: "simA == null || simB == null",
                note: "Tap fx if the field wants an expression. Two equals signs. This is the first-run test.",
              },
            ]}
          />
          <Block
            step="2d"
            name="Dialog message"
            search="Dialog message"
            connect="OK → Subscription pick A. Part of the YES path only."
            fields={[
              { k: "Title", v: "Data SIM A" },
              {
                k: "Message",
                v: "Choose the first SIM for the data rotation. Calls and texts will not change.",
              },
              { k: "Show window", v: "On" },
            ]}
          />
          <Block
            step="2e"
            name="Subscription pick"
            search="Subscription pick"
            connect="YES → dialog for SIM B. Leave NO empty."
            fields={[
              { k: "Show window", v: "On" },
              { k: "Picked subscription id", v: "simA" },
              { k: "Picked SIM slot", v: "(leave empty)" },
            ]}
          />
          <Block
            step="2f"
            name="Dialog message"
            search="Dialog message"
            connect="OK → second Subscription pick"
            fields={[
              { k: "Title", v: "Data SIM B" },
              { k: "Message", v: "Choose the other data SIM." },
              { k: "Show window", v: "On" },
            ]}
          />
          <Block
            step="2g"
            name="Subscription pick"
            search="Subscription pick"
            connect="YES → Atomic store. Leave NO empty."
            fields={[
              { k: "Show window", v: "On" },
              { k: "Picked subscription id", v: "simB" },
            ]}
          />
          <Block
            step="2g2"
            name="Atomic store"
            search="Atomic store"
            connect="OK → store simB, then the saved toast, then stop."
            fields={[{ k: "Atomic variable", v: "simA" }]}
          />
          <Block
            step="2g3"
            name="Atomic store"
            search="Atomic store"
            connect="OK → Toast show, and do not connect the toast further."
            fields={[{ k: "Atomic variable", v: "simB" }]}
          />
          <Block
            step="2g4"
            name="Toast show"
            search="Toast show"
            connect="Stop. The next tap is the one that switches."
            fields={[
              {
                k: "Message",
                v: "Saved both SIMs. Next tap switches mobile data only.",
              },
              { k: "Duration", v: "Long" },
            ]}
          />
          <Block
            step="2h"
            name="Subscription default get"
            search="Subscription default get"
            danger
            connect="This is the NO path from 2c. OK → Variable set."
            fields={[
              { k: "Proceed", v: "Immediately" },
              {
                k: "Usage",
                v: "Data",
                note: "Use the dropdown, not fx. Not Generic. Not Voice. Not SMS.",
              },
              { k: "Subscription id", v: "current" },
              { k: "SIM slot", v: "(leave empty)" },
            ]}
          />
          <Block
            step="2i"
            name="Variable set"
            search="Variable set"
            connect="OK → Subscription default set"
            fields={[
              { k: "Variable", v: "next" },
              {
                k: "Value",
                v: "current == simA ? simB : simA",
                note: "If data is on A, go to B. Any other case, including “already on B”, goes to A.",
              },
            ]}
          />
          <Block
            step="2j"
            name="Subscription default set"
            search="Subscription default set"
            danger
            connect="OK → toast, then stop. There is no loop on this beginning."
            fields={[
              {
                k: "Usage",
                v: "Data",
                note: "The default if you leave this blank is Voice. That would change the call SIM. Do not add a second copy of this block for SMS.",
              },
              { k: "Subscription id", v: "next" },
            ]}
          />
          <Block
            step="2k"
            name="Toast show"
            search="Toast show"
            connect="Stop."
            fields={[
              {
                k: "Message",
                v: "Mobile data switched. Calls and texts unchanged.",
              },
              { k: "Duration", v: "Short" },
            ]}
          />
        </div>
        <Callout>
          Do not add <strong>Mobile data set state</strong>. That block turns data
          on or off. It is not the switch between SIMs, and aiming it at one
          subscription can drop data instead of moving it.
        </Callout>
        <StepCheck id="usage" checks={checks} onToggle={toggleCheck} />
      </Section>

      <Section n="4" title="Home-screen shortcut — the one tap">
        <ol className="list-decimal space-y-2 pl-5">
          <li>Long-press an empty spot on the home screen.</li>
          <li>Widgets → Automate → <strong>Flow shortcut</strong>. Not the status widget.</li>
          <li>
            Choose flow <strong>Data SIM tap</strong>, beginning{" "}
            <strong>2 · Switch data SIM</strong>.
          </li>
        </ol>
        <p className="mt-3">
          The first tap shows the two SIM pickers and saves their subscription ids
          (those ids are not slot 1 and slot 2, and they change if you reinstall an
          eSIM). Every tap after that only moves mobile data.
        </p>
        <StepCheck id="shortcut" checks={checks} onToggle={toggleCheck} />
      </Section>

      <Section n="5" title="NotiGuy — same tap from the notch">
        <p>
          NotiGuy does not open the shortcut. On a notch tap it sends a broadcast.
          The NotiGuy developer’s action is <CodeCopy value="com.notiguy.TASK" copied={copied} onCopy={() => setCopied(true)} /> with
          an extra named <code className="font-mono text-sm">start</code> that flips
          between true and false. Tasker users listen for that action. Automate
          listens with <strong>Broadcast receive</strong>, so Tasker stays uninstalled.
        </p>
        <p className="mt-3">
          Ignore <code className="font-mono text-sm">start</code>. If you only switch
          when it is true, the notch works every other tap.
        </p>
        <div className="mt-4 space-y-3">
          <Block
            step="1a"
            name="Broadcast receive"
            search="Broadcast receive"
            connect="From beginning 1. OK → Flow start. You will also loop back here."
            fields={[
              {
                k: "Action",
                v: '"com.notiguy.TASK"',
                note: "Tap the fx button and include the quote marks. Without fx, Automate rejects the dots.",
              },
              { k: "Package, URI, category", v: "(all empty)" },
              { k: "Broadcast extras", v: "extras" },
            ]}
          />
          <Block
            step="1b"
            name="Flow start"
            search="Flow start"
            connect="OK → back to the Broadcast receive IN dot."
            fields={[
              { k: "Stop with parent", v: "Off" },
              {
                k: "Flow URI",
                v: "pick beginning “2 · Switch data SIM”",
                note: "Use the picker inside the block. The URI belongs to this phone; do not type one from anywhere else.",
              },
              { k: "Payload", v: "(empty)" },
            ]}
          />
        </div>
        <ol className="mt-4 list-decimal space-y-2 pl-5">
          <li>
            In Automate, start the flow and choose <strong>1 · Listen for NotiGuy</strong>.
            Leave that fiber running. It sleeps inside Broadcast receive, so it is
            not a polling loop.
          </li>
          <li>
            NotiGuy → Interactive notch (some versions say Notch touch). Pick the
            gesture — single tap, or long touch if you want fewer accidents.
          </li>
          <li>
            Set that gesture to <strong>Trigger an automated task</strong>. If it
            asks for a task name, type <code className="font-mono text-sm">SwitchDataSim</code>.
            The listener does not filter on the name.
          </li>
        </ol>
        <Callout>
          The shortcut works while the listener is stopped. The notch does not.
          After a reboot, confirm beginning 1 is running again.
        </Callout>
        <StepCheck id="listen" checks={checks} onToggle={toggleCheck} />
        <StepCheck id="notch" checks={checks} onToggle={toggleCheck} />
      </Section>

      <Section n="6" title="Forget path, for a replaced eSIM">
        <p className="mb-4">
          Subscription ids change when an eSIM is deleted and added again. Beginning
          3 clears the saved pair so the next switch asks you to pick again.
        </p>
        <div className="space-y-3">
          <Block
            step="3a"
            name="Variable set"
            search="Variable set"
            connect="From beginning 3. Do this for simA, then the same three blocks for simB."
            fields={[
              { k: "Variable", v: "simA" },
              { k: "Value", v: "null" },
            ]}
          />
          <Block
            step="3b"
            name="Atomic store"
            search="Atomic store"
            connect="Then repeat Variable set + Atomic store for simB, then a toast, then stop."
            fields={[{ k: "Atomic variable", v: "simA" }]}
          />
          <Block
            step="3c"
            name="Toast show"
            search="Toast show"
            connect="Stop."
            fields={[{ k: "Message", v: "Saved SIMs cleared." }]}
          />
        </div>
      </Section>

      <Section n="7" title="Prove calls and texts did not move">
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Settings → SIM manager (Samsung: Connections → SIM manager → Preferred
            SIMs). Note the Calls row and the Texts row.
          </li>
          <li>Tap the shortcut, or the notch.</li>
          <li>Look again. Mobile data is the only row that should change.</li>
          <li>
            If Calls moved, Usage was left at Voice on <strong>Subscription default set</strong>.
            Fix that block, and the get block, to Data. Put Calls and Texts back by
            hand once. The flow will not touch them again.
          </li>
        </ol>
        <StepCheck id="proof" checks={checks} onToggle={toggleCheck} />
      </Section>

      <Section n="8" title="If a tap does nothing">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Open the flow log. “Privileged service” means redo step 1. Nothing has
            been changed yet.
          </li>
          <li>
            Notch silent, shortcut works: beginning 1 is stopped, or the broadcast
            Action is missing fx quotes. NotiGuy’s accessibility service also has
            to be on.
          </li>
          <li>
            Battery optimization must be Unrestricted for Automate, or the listener
            is frozen until you open the app.
          </li>
          <li>
            The Usage menu has no Data entry: update Automate from the Play Store,
            then set the dropdown again. Do not type a Voice value to “make it run.”
          </li>
        </ul>
      </Section>

      <footer className="text-muted mt-12 text-sm">
        <p className="flex items-start gap-2">
          <Shield className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          Blocks used for the write: Subscription default set, and only with Usage
          = Data. Read with Subscription default get, same usage. No voice block,
          no SMS block, no mobile-data power toggle.
        </p>
      </footer>
    </main>
  );
}

function Pill({ children }: { children: string }) {
  return (
    <span className="rounded-full bg-on-data/10 px-3 py-1 font-medium">{children}</span>
  );
}

function Fact({ title, body, live }: { title: string; body: string; live?: boolean }) {
  return (
    <article className={`rounded-xl border p-4 ${live ? "border-data bg-soft" : "border-line bg-card"}`}>
      <h3 className="flex items-center gap-2 font-semibold">
        {live ? <Radio className="text-data h-4 w-4" aria-hidden /> : <Lock className="text-muted h-4 w-4" aria-hidden />}
        {title}
      </h3>
      <p className="text-muted mt-1 text-sm">{body}</p>
    </article>
  );
}

function Progress({ done, total }: { done: number; total: number }) {
  return (
    <div className="border-line bg-card mb-8 rounded-xl border px-4 py-3">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="font-semibold">On the phone</h2>
        <p className="font-mono text-sm text-muted">
          {done}/{total}
        </p>
      </div>
      <div className="bg-line mt-2 h-1.5 overflow-hidden rounded-full">
        <div
          className="bg-data h-full"
          style={{ width: `${(done / total) * 100}%` }}
        />
      </div>
    </div>
  );
}

function Section({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-10" aria-labelledby={`s-${n}`}>
      <h2 id={`s-${n}`} className="text-xl font-semibold tracking-tight">
        <span className="text-data font-mono text-sm">{n}</span> {title}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

function Block({
  step,
  name,
  search,
  connect,
  fields,
  danger,
}: {
  step: string;
  name: string;
  search: string;
  connect: string;
  fields: { k: string; v: string; note?: string }[];
  danger?: boolean;
}) {
  return (
    <article className={`rounded-xl border p-4 ${danger ? "border-ink bg-card" : "border-line bg-card"}`}>
      <header className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-semibold">
          <span className="font-mono text-sm text-muted">{step}</span> {name}
        </h3>
        <p className="font-mono text-xs text-muted">search “{search}”</p>
      </header>
      <dl className="mt-3 space-y-2">
        {fields.map((f) => (
          <div key={f.k} className="grid gap-1 sm:grid-cols-[11rem_1fr] sm:gap-3">
            <dt className="text-muted text-sm">{f.k}</dt>
            <dd>
              <code className="bg-paper border-line inline-block rounded-md border px-2 py-1 text-sm break-all">
                {f.v}
              </code>
              {f.note ? <p className="text-muted mt-1 text-sm">{f.note}</p> : null}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-sm">
        <span className="text-muted">Wire. </span>
        {connect}
      </p>
    </article>
  );
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <p className="border-data bg-soft rounded-xl border-l-4 px-4 py-3 text-sm">{children}</p>
  );
}

function StepCheck({
  id,
  checks,
  onToggle,
}: {
  id: (typeof CHECKS)[number]["id"];
  checks: Record<string, boolean>;
  onToggle: (id: string) => void;
}) {
  const item = CHECKS.find((c) => c.id === id)!;
  const on = !!checks[id];
  return (
    <label className="border-line bg-card mt-1 flex min-h-11 items-center gap-3 rounded-xl border px-3 py-2">
      <input
        type="checkbox"
        checked={on}
        onChange={() => onToggle(id)}
        className="h-5 w-5 accent-data"
      />
      <span className="flex items-center gap-2 text-sm">
        {on ? <Check className="text-data h-4 w-4" aria-hidden /> : null}
        {item.label}
      </span>
    </label>
  );
}

function StayRow({
  label,
  value,
  onChange,
  a,
  b,
}: {
  label: string;
  value: Side;
  onChange: (s: Side) => void;
  a: string;
  b: string;
}) {
  return (
    <div className="mt-3">
      <p className="text-muted flex items-center gap-1 text-sm">
        <Lock className="h-3.5 w-3.5" aria-hidden />
        {label}
      </p>
      <div className="mt-1 grid grid-cols-2 gap-2">
        {(["a", "b"] as const).map((side) => (
          <button
            key={side}
            type="button"
            onClick={() => onChange(side)}
            aria-pressed={value === side}
            className={`min-h-11 rounded-lg border px-2 text-sm ${
              value === side ? "border-ink bg-paper font-medium" : "border-line text-muted"
            }`}
          >
            {side === "a" ? a || "SIM A" : b || "SIM B"}
          </button>
        ))}
      </div>
    </div>
  );
}

function StatusRow({
  kind,
  label,
  value,
}: {
  kind: "data" | "lock";
  label: string;
  value: string;
}) {
  return (
    <div className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2 ${kind === "data" ? "bg-soft" : "bg-paper"}`}>
      <span className="flex items-center gap-2 text-sm">
        {kind === "data" ? (
          <Radio className="text-data h-4 w-4" aria-hidden />
        ) : (
          <Lock className="text-muted h-4 w-4" aria-hidden />
        )}
        {label}
      </span>
      <span className="text-right text-sm font-medium">{value}</span>
    </div>
  );
}

function CodeCopy({
  value,
  copied,
  onCopy,
}: {
  value: string;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        void navigator.clipboard.writeText(value).then(onCopy);
      }}
      className="border-line bg-paper inline-flex min-h-9 items-center gap-1 rounded-md border px-2 align-middle font-mono text-sm"
    >
      {value}
      {copied ? <Check className="h-3.5 w-3.5" aria-hidden /> : <Copy className="h-3.5 w-3.5" aria-hidden />}
      <span className="sr-only">{copied ? "Copied" : "Copy action"}</span>
    </button>
  );
}
