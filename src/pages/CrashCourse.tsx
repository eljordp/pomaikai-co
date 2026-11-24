import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, animate, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, Award, Check, ChevronDown, ChevronLeft, Clock, FileText, Lightbulb, ListChecks, Lock, Play, PlayCircle, RotateCcw, X,
} from "lucide-react";
const logo = "/pomaikai-logo.png";
import { trackEvent as siteTrackEvent } from "../lib/track";
import { FINAL_QUESTIONS, LESSONS, QUESTIONS, TRANSCRIPTS, type Lesson, type Question } from "../lib/crash-course";

/* Pōmaika'i Crash Course
   Six one-minute lessons. Each lesson: video, one line to remember, a short check.
   All six lessons are open from the start, in any order. The final check
   opens once all six lesson checks are done.
   Every answer logs through the site's existing event logger (data-collect),
   so results show up beside the rest of the site's data. No new tables. */

/* Local previews never write to the live database. */
const trackEvent: typeof siteTrackEvent = async (type, data) => {
  if (/^(localhost|127\.|0\.0\.0\.0)/.test(window.location.hostname)) return;
  return siteTrackEvent(type, data);
};

/* How many lessons are released. Every released lesson is open at once.
   Lower it to hold lessons back and raise it as they go out. */
const LESSONS_RELEASED = 6;

const STORE_KEY = "pk_crash_course_v1";
const FINAL = 7; // the final check is "lesson 7" in the hash and the store
const TOTAL_SECONDS = LESSONS.reduce((s, l) => s + l.seconds, 0);

/* Two parts, so the switch from the pipeline to the AI tools reads as
   a new section instead of a jump. */
const PARTS = [
  { label: "Part one", name: "Your pipeline", sub: "What we run for you, and the one screen you check.", lessons: [1, 2, 3] },
  { label: "Part two", name: "Your AI tools", sub: "The tools you run yourself, and what's worth paying for.", lessons: [4, 5, 6] },
];
const partOf = (n: number) => PARTS.find((p) => p.lessons.includes(n));

const EASE = [0.22, 1, 0.36, 1] as const;

type Progress = {
  name: string;
  done: Record<number, { score: number; total: number }>;
  correct: Record<string, boolean>; // latest result per question id
};

const empty: Progress = { name: "", done: {}, correct: {} };

function load(): Progress {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return empty;
    const p = JSON.parse(raw);
    return { name: p.name || "", done: p.done || {}, correct: p.correct || {} };
  } catch {
    return empty;
  }
}

function save(p: Progress) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(p));
  } catch {
    /* private window: progress just won't persist */
  }
}

function shuffled<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const clock = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

function isOpen(n: number, p: Progress) {
  if (n === FINAL) return LESSONS.every((l) => p.done[l.n]);
  return n <= LESSONS_RELEASED;
}

/* The check for a lesson: its own two questions, plus one comeback question
   from a lesson he has already checked. A question he got wrong comes back first. */
function buildCheck(n: number, p: Progress): { q: Question; kind: "new" | "comeback" | "final" }[] {
  if (n === FINAL) return shuffled(FINAL_QUESTIONS).map((q) => ({ q, kind: "final" as const }));
  const own = QUESTIONS.filter((q) => q.lesson === n).map((q) => ({ q, kind: "new" as const }));
  const earlier = QUESTIONS.filter((q) => q.lesson !== n && p.done[q.lesson]);
  if (!earlier.length) return own;
  const missed = earlier.filter((q) => p.correct[q.id] === false);
  const pool = missed.length ? missed : earlier;
  const back = pool[Math.floor(Math.random() * pool.length)];
  return [...own, { q: back, kind: "comeback" as const }];
}

/* ───────────────────────────── page ───────────────────────────── */

export default function CrashCourse() {
  const [progress, setProgress] = useState<Progress>(load);
  const location = useLocation();
  const navigate = useNavigate();

  const current = useMemo(() => {
    const m = location.hash.match(/^#(lesson-(\d)|final)$/);
    if (!m) return null;
    return m[1] === "final" ? FINAL : Number(m[2]);
  }, [location.hash]);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Pōmaika'i Crash Course";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.title = prevTitle;
      meta.remove();
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [current]);

  const update = (fn: (p: Progress) => Progress) =>
    setProgress((p) => {
      const next = fn(p);
      save(next);
      return next;
    });

  const go = (n: number | null) => navigate({ hash: n === null ? "" : n === FINAL ? "final" : `lesson-${n}` });

  const doneCount = LESSONS.filter((l) => progress.done[l.n]).length;
  const nextUp = LESSONS.find((l) => !progress.done[l.n] && isOpen(l.n, progress))?.n
    ?? (isOpen(FINAL, progress) && !progress.done[FINAL] ? FINAL : null);

  return (
    <div className="cc-root min-h-screen bg-cc-bg text-cc-fg overflow-x-hidden">
      <header className="border-b border-cc-line/70 backdrop-blur-sm">
        <div className="cc-container max-w-5xl flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3" aria-label="Pōmaika'i home">
            <img src={logo} alt="Pōmaika'i" className="h-10 md:h-12 w-auto" />
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-xs tracking-widest uppercase text-cc-dim">Crash Course</span>
            <div className="flex items-center gap-2" aria-label={`${doneCount} of 6 lessons done`}>
              <div className="w-20 h-1.5 rounded-full bg-cc-muted overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-cc-fg"
                  initial={false}
                  animate={{ width: `${(doneCount / 6) * 100}%` }}
                  transition={{ duration: 0.8, ease: EASE }}
                />
              </div>
              <span className="text-xs tabular-nums text-cc-dim">{doneCount}/6</span>
            </div>
          </div>
        </div>
      </header>

      <main className="cc-container max-w-5xl py-10 md:py-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={current ?? "home"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            {current === null ? (
              <Overview progress={progress} doneCount={doneCount} nextUp={nextUp} go={go} update={update} />
            ) : !isOpen(current, progress) ? (
              <LockedView n={current} go={go} />
            ) : (
              <LessonView key={current} n={current} progress={progress} update={update} go={go} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

/* ─────────────────────────── course home ─────────────────────────── */

function Overview({
  progress, doneCount, nextUp, go, update,
}: {
  progress: Progress;
  doneCount: number;
  nextUp: number | null;
  go: (n: number | null) => void;
  update: (fn: (p: Progress) => Progress) => void;
}) {
  const reduce = useReducedMotion();
  const [name, setName] = useState(progress.name);
  const started = doneCount > 0;
  const finished = !!progress.done[FINAL];
  const first = progress.name.split(" ")[0];

  const begin = () => {
    const clean = name.trim().slice(0, 60);
    if (clean !== progress.name) update((p) => ({ ...p, name: clean }));
    if (!started) trackEvent("crash_course_start", { name: clean });
    if (nextUp) go(nextUp);
  };

  const greeting = finished
    ? `You did it${first ? `, ${first}` : ""}.`
    : started
      ? `Welcome back${first ? `, ${first}` : ""}.`
      : "Run your growth system in six minutes.";

  const sub = finished
    ? "Every lesson done and the final check behind you. Come back anytime you want a refresher."
    : started
      ? `${doneCount} down, ${6 - doneCount} to go. Each one is about a minute, and they stack on each other.`
      : "Six short lessons in two parts: the pipeline we run for you, then the AI tools you run yourself. Watch one, answer a few quick questions, then on to the next.";

  const stagger = { hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : 0.06 } } };
  const rise = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  };

  return (
    <div className="space-y-14">
      {/* hero */}
      <motion.section variants={stagger} initial="hidden" animate="show" className="space-y-6">
        <motion.p variants={rise} className="text-xs tracking-widest uppercase text-cc-dim">
          The Pōmaika'i Crash Course
        </motion.p>
        <motion.h1 variants={rise} className="font-cc-display text-4xl md:text-6xl leading-[1.05] text-balance max-w-3xl">
          {greeting}
        </motion.h1>
        <motion.p variants={rise} className="text-cc-dim text-lg leading-relaxed max-w-2xl">
          {sub}
        </motion.p>
        <motion.div variants={rise} className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-cc-dim">
          <span className="inline-flex items-center gap-2"><PlayCircle className="h-4 w-4" /> 6 lessons</span>
          <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> About {Math.round(TOTAL_SECONDS / 60)} minutes</span>
          <span className="inline-flex items-center gap-2"><ListChecks className="h-4 w-4" /> 24 questions</span>
        </motion.div>

        {started && (
          <motion.div variants={rise} className="max-w-md space-y-2 pt-1">
            <div className="flex justify-between text-xs tracking-widest uppercase text-cc-dim">
              <span>Your progress</span>
              <span className="tabular-nums">{Math.round((doneCount / 6) * 100)}%</span>
            </div>
            <div className="h-2 rounded-full bg-cc-muted overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-cc-fg"
                initial={{ width: 0 }}
                animate={{ width: `${(doneCount / 6) * 100}%` }}
                transition={{ duration: 1, delay: 0.3, ease: EASE }}
              />
            </div>
          </motion.div>
        )}
      </motion.section>

      {/* first visit: name, then start */}
      {!started && (
        <motion.section
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
          className="bg-cc-card border border-cc-line rounded-2xl p-6 md:p-8 grid md:grid-cols-[1fr_auto] gap-5 md:items-end"
        >
          <label className="flex flex-col gap-2 min-w-0">
            <span className="font-cc-display text-2xl">Aloha. What should we call you?</span>
            <span className="text-sm text-cc-dim">Just your first name, so the course knows it's you.</span>
            <input
              id="cc-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && begin()}
              className="mt-2 bg-cc-bg border border-cc-line rounded-xl px-4 py-3 text-cc-fg placeholder:text-cc-dim/60 focus:outline-none focus:ring-2 focus:ring-cc-ring/40 transition"
              placeholder="First name"
              autoComplete="given-name"
            />
          </label>
          <PrimaryButton onClick={begin} icon={<Play className="h-4 w-4" />}>Start lesson 1</PrimaryButton>
        </motion.section>
      )}

      {/* up next */}
      {started && nextUp && <UpNext n={nextUp} go={go} />}

      {finished && <CompleteCard progress={progress} />}

      {/* curriculum */}
      <section className="space-y-5">
        <div className="flex items-baseline justify-between">
          <h2 className="font-cc-display text-3xl">The lessons</h2>
          <span className="text-sm text-cc-dim tabular-nums">{doneCount} of 6 done</span>
        </div>
        {PARTS.map((part) => (
          <div key={part.label} className="space-y-4 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-x-4 gap-y-1">
              <span className="text-xs tracking-widest uppercase text-cc-dim">{part.label}</span>
              <span className="font-cc-display text-xl">{part.name}</span>
              <span className="text-sm text-cc-dim">{part.sub}</span>
            </div>
            <motion.ol
              variants={stagger}
              initial="hidden"
              animate="show"
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {LESSONS.filter((l) => part.lessons.includes(l.n)).map((l) => (
                <motion.li key={l.n} variants={rise}>
                  <LessonCard lesson={l} progress={progress} go={go} isNext={l.n === nextUp} />
                </motion.li>
              ))}
            </motion.ol>
          </div>
        ))}
        <FinalCard progress={progress} go={go} />
      </section>

      {started && (
        <button
          onClick={() => update(() => empty)}
          className="inline-flex items-center gap-2 text-xs text-cc-dim/70 hover:text-cc-dim transition"
        >
          <RotateCcw className="h-3 w-3" /> Start over on this device
        </button>
      )}
    </div>
  );
}

function Thumb({ n, locked, className = "" }: { n: number; locked?: boolean; className?: string }) {
  return (
    <div className={`relative aspect-video overflow-hidden bg-black ${className}`}>
      <img
        src={`/crash-course/thumb-${n}.jpg`}
        alt=""
        loading="lazy"
        className={`h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04] ${locked ? "grayscale opacity-40" : ""}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cc-bg/70 via-transparent to-transparent" />
    </div>
  );
}

function LessonCard({ lesson, progress, go, isNext }: { lesson: Lesson; progress: Progress; go: (n: number) => void; isNext: boolean }) {
  const reduce = useReducedMotion();
  const open = isOpen(lesson.n, progress);
  const d = progress.done[lesson.n];
  return (
    <motion.button
      onClick={() => open && go(lesson.n)}
      disabled={!open}
      whileHover={open && !reduce ? { y: -4 } : undefined}
      whileTap={open && !reduce ? { scale: 0.99 } : undefined}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={[
        "group w-full h-full text-left bg-cc-card border rounded-2xl overflow-hidden flex flex-col transition-colors",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-cc-ring/40 disabled:cursor-not-allowed",
        isNext ? "border-cc-fg/40" : "border-cc-line",
        open ? "hover:border-cc-fg/40" : "",
      ].join(" ")}
    >
      <div className="relative">
        <Thumb n={lesson.n} locked={!open} />
        <span className="absolute top-3 left-3 text-xs tracking-widest uppercase bg-cc-bg/80 backdrop-blur px-2 py-1 rounded-md tabular-nums">
          Lesson {lesson.n}
        </span>
        <span className="absolute bottom-3 right-3 text-xs tabular-nums bg-cc-bg/80 backdrop-blur px-2 py-1 rounded-md">
          {clock(lesson.seconds)}
        </span>
        {!open && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="h-11 w-11 rounded-full bg-cc-bg/80 backdrop-blur flex items-center justify-center">
              <Lock className="h-4 w-4 text-cc-dim" />
            </span>
          </span>
        )}
        {open && !d && (
          <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <span className="h-12 w-12 rounded-full bg-cc-fg text-cc-bg flex items-center justify-center shadow-lg">
              <Play className="h-5 w-5 translate-x-0.5" />
            </span>
          </span>
        )}
        {d && (
          <span className="absolute top-3 right-3 h-7 w-7 rounded-full bg-cc-fg text-cc-bg flex items-center justify-center">
            <Check className="h-4 w-4" />
          </span>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col gap-1.5">
        <span className={`font-cc-display text-xl leading-snug ${open ? "" : "text-cc-fg/40"}`}>{lesson.title}</span>
        <span className="text-sm text-cc-dim leading-relaxed">{lesson.blurb}</span>
        <span className="mt-auto pt-3 text-xs tracking-widest uppercase">
          {d ? (
            <span className="text-cc-fg/80">Done · {d.score}/{d.total} right</span>
          ) : open ? (
            <span className="text-cc-fg">{isNext ? "Up next" : "Open"}</span>
          ) : (
            <span className="text-cc-dim/60">Coming soon</span>
          )}
        </span>
      </div>
    </motion.button>
  );
}

function UpNext({ n, go }: { n: number; go: (n: number) => void }) {
  const reduce = useReducedMotion();
  const isFinal = n === FINAL;
  const l = LESSONS.find((x) => x.n === n);
  return (
    <motion.section
      initial={{ opacity: 0, y: reduce ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25, ease: EASE }}
    >
      <button
        onClick={() => go(n)}
        className="group w-full text-left bg-cc-card border border-cc-fg/30 rounded-2xl overflow-hidden grid md:grid-cols-[1.2fr_1fr] focus:outline-none focus-visible:ring-2 focus-visible:ring-cc-ring/40"
      >
        {isFinal ? (
          <div className="relative aspect-video md:aspect-auto bg-cc-muted flex items-center justify-center">
            <Award className="h-14 w-14 text-cc-fg/70" />
          </div>
        ) : (
          <div className="relative">
            <Thumb n={n} className="md:h-full md:aspect-auto" />
            <span className="absolute inset-0 flex items-center justify-center">
              <motion.span
                className="h-16 w-16 rounded-full bg-cc-fg text-cc-bg flex items-center justify-center shadow-xl"
                animate={reduce ? undefined : { scale: [1, 1.07, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Play className="h-6 w-6 translate-x-0.5" />
              </motion.span>
            </span>
          </div>
        )}
        <div className="p-6 md:p-8 flex flex-col justify-center gap-3 min-w-0">
          <span className="text-xs tracking-widest uppercase text-cc-dim">
            Up next · {isFinal ? "Final check" : n === 4 ? "Part two begins · Lesson 4 of 6" : `Lesson ${n} of 6`}
          </span>
          <span className="font-cc-display text-3xl leading-tight text-balance">{isFinal ? "Put it all together." : l?.title}</span>
          <span className="text-cc-dim leading-relaxed">
            {isFinal ? "Twelve new questions across the whole course. One last look before you're done." : l?.blurb}
          </span>
          <span className="inline-flex items-center gap-2 pt-2 font-medium">
            {isFinal ? "Take the final check" : `Watch lesson ${n}`}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            {!isFinal && l && <span className="text-sm text-cc-dim font-normal tabular-nums">· {clock(l.seconds)}</span>}
          </span>
        </div>
      </button>
    </motion.section>
  );
}

function FinalCard({ progress, go }: { progress: Progress; go: (n: number) => void }) {
  const open = isOpen(FINAL, progress);
  const d = progress.done[FINAL];
  return (
    <button
      onClick={() => open && go(FINAL)}
      disabled={!open}
      className="group w-full text-left bg-cc-card border border-cc-line rounded-2xl p-5 md:p-6 flex items-center gap-5 transition-colors enabled:hover:border-cc-fg/40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-cc-ring/40"
    >
      <span className={`h-12 w-12 shrink-0 rounded-xl flex items-center justify-center ${open ? "bg-cc-fg text-cc-bg" : "bg-cc-muted text-cc-dim"}`}>
        {open ? <Award className="h-6 w-6" /> : <Lock className="h-5 w-5" />}
      </span>
      <span className="min-w-0 flex-1">
        <span className={`block font-cc-display text-xl ${open ? "" : "text-cc-fg/40"}`}>Final check</span>
        <span className="block text-sm text-cc-dim">Twelve new questions across the whole course. Opens when all six lessons are done.</span>
      </span>
      <span className="shrink-0 text-xs tracking-widest uppercase">
        {d ? <span className="text-cc-fg/80 tabular-nums">{d.score}/{d.total}</span> : open ? "Open" : <span className="text-cc-dim/60">Locked</span>}
      </span>
    </button>
  );
}

function CompleteCard({ progress }: { progress: Progress }) {
  const d = progress.done[FINAL];
  if (!d) return null;
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="relative bg-cc-card border border-cc-fg/30 rounded-2xl p-8 md:p-10 text-center overflow-hidden"
    >
      <Burst />
      <Award className="h-10 w-10 mx-auto text-cc-fg/80" />
      <p className="mt-4 text-xs tracking-widest uppercase text-cc-dim">Course complete</p>
      <p className="mt-2 font-cc-display text-4xl">{d.score} of {d.total} on the final</p>
      <p className="mt-3 text-cc-dim max-w-md mx-auto">
        That's the whole system. Open Opportunities, watch your four numbers, and let the tools do the work.
      </p>
    </motion.section>
  );
}

function LockedView({ n, go }: { n: number; go: (n: number | null) => void }) {
  const msg = n === FINAL
    ? "The final check opens once all six lessons are done."
    : "This lesson isn't out yet. It's coming soon.";
  return (
    <div className="space-y-6 py-16 text-center">
      <span className="mx-auto h-14 w-14 rounded-full bg-cc-muted flex items-center justify-center">
        <Lock className="h-6 w-6 text-cc-dim" />
      </span>
      <p className="font-cc-display text-3xl text-balance">{msg}</p>
      <button onClick={() => go(null)} className="text-sm text-cc-dim underline underline-offset-4 hover:text-cc-fg">
        Back to the course
      </button>
    </div>
  );
}

/* ───────────────────────────── lesson ───────────────────────────── */

function Steps({ n, progress }: { n: number; progress: Progress }) {
  return (
    <div className="flex gap-1.5" aria-hidden>
      {[1, 2, 3, 4, 5, 6, FINAL].map((i) => (
        <span key={i} className="h-1.5 flex-1 rounded-full bg-cc-muted overflow-hidden">
          <motion.span
            className="block h-full rounded-full bg-cc-fg"
            initial={false}
            animate={{ width: progress.done[i] ? "100%" : i === n ? "45%" : "0%", opacity: i === n && !progress.done[i] ? 0.6 : 1 }}
            transition={{ duration: 0.6, ease: EASE }}
          />
        </span>
      ))}
    </div>
  );
}

function LessonView({
  n, progress, update, go,
}: {
  n: number;
  progress: Progress;
  update: (fn: (p: Progress) => Progress) => void;
  go: (n: number | null) => void;
}) {
  const reduce = useReducedMotion();
  const isFinal = n === FINAL;
  const lesson = LESSONS.find((l) => l.n === n);
  const [items] = useState(() => buildCheck(n, progress));
  const [step, setStep] = useState(0);
  const [results, setResults] = useState<{ id: string; ok: boolean; lesson: number }[]>([]);
  const [checking, setChecking] = useState(isFinal);
  const checkRef = useRef<HTMLDivElement>(null);
  const played = useRef(false);
  const finished = step >= items.length;

  useEffect(() => {
    trackEvent(isFinal ? "crash_course_final_open" : "crash_course_lesson_open", { name: progress.name, lesson: isFinal ? "final" : n });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startCheck = () => {
    setChecking(true);
    setTimeout(() => checkRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }), 60);
  };

  const record = (q: Question, chosenText: string, ok: boolean, kind: string) => {
    setResults((r) => [...r, { id: q.id, ok, lesson: q.lesson }]);
    update((p) => ({ ...p, correct: { ...p.correct, [q.id]: ok } }));
    trackEvent("crash_course_answer", {
      name: progress.name, lesson: isFinal ? "final" : n, question: q.id,
      from_lesson: q.lesson, kind, chosen: chosenText, correct: ok,
    });
  };

  useEffect(() => {
    if (!finished || items.length === 0) return;
    const score = results.filter((r) => r.ok).length;
    update((p) => ({ ...p, done: { ...p.done, [n]: { score, total: items.length } } }));
    trackEvent(isFinal ? "crash_course_final_done" : "crash_course_check_done", {
      name: progress.name, lesson: isFinal ? "final" : n, score, total: items.length,
      missed: results.filter((r) => !r.ok).map((r) => r.id),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: EASE },
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-5">
        <button onClick={() => go(null)} className="group inline-flex items-center gap-1 text-sm text-cc-dim hover:text-cc-fg transition">
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" /> Back to the course
        </button>
        <Steps n={n} progress={progress} />
      </div>

      {isFinal ? (
        <motion.section {...rise(0)} className="space-y-3">
          <p className="text-xs tracking-widest uppercase text-cc-dim">Final check</p>
          <h1 className="font-cc-display text-4xl md:text-5xl leading-tight text-balance">Put it all together.</h1>
          <p className="text-cc-dim text-lg max-w-xl">Twelve new questions, two from each lesson, in situations you haven't seen yet. Miss one and it tells you which lesson to rewatch.</p>
        </motion.section>
      ) : lesson && (
        <section className="space-y-6">
          <motion.div {...rise(0)} className="space-y-2">
            <p className="text-xs tracking-widest uppercase text-cc-dim tabular-nums">
              {partOf(n)?.label}: {partOf(n)?.name} · Lesson {n} of 6 · {clock(lesson.seconds)}
            </p>
            <h1 className="font-cc-display text-4xl md:text-5xl leading-tight text-balance">{lesson.title}</h1>
          </motion.div>
          <motion.div {...rise(0.08)} className="rounded-2xl overflow-hidden border border-cc-line bg-black shadow-2xl shadow-black/40">
            <video
              key={n}
              className="w-full aspect-video bg-black"
              src={`/crash-course/lesson-${n}.mp4`}
              poster={`/crash-course/lesson-${n}.jpg`}
              controls
              playsInline
              preload="metadata"
              onPlay={() => {
                if (played.current) return;
                played.current = true;
                trackEvent("crash_course_video_play", { name: progress.name, lesson: n });
              }}
              onEnded={() => trackEvent("crash_course_video_ended", { name: progress.name, lesson: n })}
            />
          </motion.div>
          <p className="sm:hidden -mt-3 text-xs text-cc-dim">On a phone, tap full screen, or open the transcript below.</p>
          <motion.div {...rise(0.12)}>
            <Transcript n={n} />
          </motion.div>
          <motion.div {...rise(0.16)} className="bg-cc-card border border-cc-line rounded-2xl p-6 md:p-8 flex gap-4">
            <span className="h-10 w-10 shrink-0 rounded-xl bg-cc-muted flex items-center justify-center">
              <Lightbulb className="h-5 w-5 text-cc-fg/80" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs tracking-widest uppercase text-cc-dim mb-2">If you remember one thing</span>
              <span className="block font-cc-display text-2xl md:text-3xl leading-snug text-balance">{lesson.remember}</span>
            </span>
          </motion.div>
          {!checking && (
            <motion.div {...rise(0.24)}>
              <PrimaryButton onClick={startCheck} icon={<ArrowRight className="h-4 w-4" />} iconRight>
                I watched it. Check me.
              </PrimaryButton>
            </motion.div>
          )}
        </section>
      )}

      <AnimatePresence>
        {checking && (
          <motion.div
            ref={checkRef}
            className="scroll-mt-6"
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <AnimatePresence mode="wait">
              {!finished ? (
                <motion.div
                  key={items[step].q.id + step}
                  initial={{ opacity: 0, x: reduce ? 0 : 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: reduce ? 0 : -28 }}
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  <QuestionCard
                    item={items[step]}
                    index={step}
                    total={items.length}
                    results={results}
                    onAnswer={record}
                    onNext={() => setStep((s) => s + 1)}
                    go={go}
                  />
                </motion.div>
              ) : (
                <motion.div key="summary" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, ease: EASE }}>
                  <Summary n={n} results={results} total={items.length} go={go} progress={progress} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function QuestionCard({
  item, index, total, results, onAnswer, onNext, go,
}: {
  item: { q: Question; kind: string };
  index: number;
  total: number;
  results: { ok: boolean }[];
  onAnswer: (q: Question, chosenText: string, ok: boolean, kind: string) => void;
  onNext: () => void;
  go: (n: number | null) => void;
}) {
  const reduce = useReducedMotion();
  const { q, kind } = item;
  const order = useMemo(() => shuffled(q.options.map((_, i) => i)), [q.id]); // eslint-disable-line react-hooks/exhaustive-deps
  const [picked, setPicked] = useState<number | null>(null);
  const ok = picked === q.answer;

  const pick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    onAnswer(q, q.options[i], i === q.answer, kind);
  };

  const label = kind === "comeback" ? `A comeback from lesson ${q.lesson}` : kind === "final" ? `From lesson ${q.lesson}` : "Quick check";

  return (
    <section className="bg-cc-card border border-cc-line rounded-2xl p-6 md:p-8 space-y-6" aria-live="polite">
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs tracking-widest uppercase text-cc-dim">{label}</span>
        <span className="flex items-center gap-1.5" aria-label={`Question ${index + 1} of ${total}`}>
          {Array.from({ length: total }).map((_, i) => {
            const r = results[i];
            return (
              <span
                key={i}
                className={[
                  "h-2 rounded-full transition-all duration-300",
                  i === index ? "w-6 bg-cc-fg" : "w-2",
                  i !== index && r ? (r.ok ? "bg-cc-fg/70" : "bg-cc-bad/70") : "",
                  i !== index && !r ? "bg-cc-muted" : "",
                ].join(" ")}
              />
            );
          })}
        </span>
      </div>

      <h2 className="font-cc-display text-2xl md:text-3xl leading-snug text-balance">{q.q}</h2>

      <div className="grid gap-3">
        {order.map((i, k) => {
          const isAnswer = i === q.answer;
          const isPicked = i === picked;
          const state = picked === null ? "idle" : isAnswer ? "right" : isPicked ? "wrong" : "dim";
          return (
            <motion.button
              key={i}
              onClick={() => pick(i)}
              disabled={picked !== null}
              initial={{ opacity: 0, y: reduce ? 0 : 8 }}
              animate={
                state === "wrong" && !reduce
                  ? { opacity: 1, y: 0, x: [0, -9, 9, -6, 6, -2, 0] }
                  : state === "right" && !reduce
                    ? { opacity: 1, y: 0, scale: [1, 1.025, 1] }
                    : { opacity: state === "dim" ? 0.45 : 1, y: 0 }
              }
              transition={{ duration: state === "idle" ? 0.35 : 0.45, delay: state === "idle" ? 0.05 * k : 0, ease: EASE }}
              whileHover={picked === null && !reduce ? { y: -2 } : undefined}
              whileTap={picked === null && !reduce ? { scale: 0.985 } : undefined}
              className={[
                "flex items-start gap-3 text-left rounded-xl border px-4 py-3.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cc-ring/40",
                state === "idle" && "border-cc-line hover:border-cc-fg/40 hover:bg-cc-muted/30 cursor-pointer",
                state === "right" && "border-cc-fg bg-cc-fg/10",
                state === "wrong" && "border-cc-bad/70 bg-cc-bad/10",
                state === "dim" && "border-cc-line",
              ].filter(Boolean).join(" ")}
            >
              <span className={`mt-0.5 h-5 w-5 shrink-0 rounded-full border flex items-center justify-center transition-colors ${state === "right" ? "bg-cc-fg text-cc-bg border-cc-fg" : state === "wrong" ? "bg-cc-bad text-cc-bad-fg border-cc-bad" : "border-current"}`}>
                {state === "right" && <Check className="h-3 w-3" />}
                {state === "wrong" && <X className="h-3 w-3" />}
              </span>
              <span className="leading-relaxed">{q.options[i]}</span>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {picked !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="space-y-4 border-t border-cc-line pt-5">
              <p className="font-cc-display text-2xl">{ok ? "Nailed it." : "Not quite."}</p>
              <p className="text-cc-dim leading-relaxed">{q.why}</p>
              <div className="flex flex-wrap gap-3">
                <PrimaryButton onClick={onNext} icon={<ArrowRight className="h-4 w-4" />} iconRight small>
                  {index + 1 < total ? "Next question" : "See how you did"}
                </PrimaryButton>
                {!ok && (
                  <button
                    onClick={() => go(q.lesson)}
                    className="inline-flex items-center justify-center gap-2 border border-cc-line rounded-xl px-5 py-2.5 text-sm hover:bg-cc-muted/40 transition"
                  >
                    <RotateCcw className="h-3.5 w-3.5" /> Rewatch lesson {q.lesson}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Summary({
  n, results, total, go, progress,
}: {
  n: number;
  progress: Progress;
  results: { id: string; ok: boolean; lesson: number }[];
  total: number;
  go: (n: number | null) => void;
}) {
  const reduce = useReducedMotion();
  const score = results.filter((r) => r.ok).length;
  const rewatch = Array.from(new Set(results.filter((r) => !r.ok).map((r) => r.lesson))).sort();
  const isFinal = n === FINAL;
  // Next: the first lesson after this one he hasn't checked yet, wrapping
  // around. The final check once all six are done.
  const released = LESSONS.map((l) => l.n).filter((l) => l <= LESSONS_RELEASED);
  const order = [...released.filter((l) => l > n), ...released.filter((l) => l < n)];
  const next = isFinal ? null : order.find((l) => !progress.done[l]) ?? (released.length === 6 ? FINAL : null);
  const perfect = score === total;
  const headline = isFinal
    ? perfect ? "Perfect. You've got the whole system." : "Course complete."
    : perfect ? "Clean sweep." : score / total >= 2 / 3 ? "Solid." : "Worth another look.";

  const [shown, setShown] = useState(reduce ? score : 0);
  useEffect(() => {
    if (reduce) return;
    const c = animate(0, score, { duration: 0.9, delay: 0.25, ease: EASE, onUpdate: (v) => setShown(Math.round(v)) });
    return () => c.stop();
  }, [score, reduce]);

  const R = 44;
  const C = 2 * Math.PI * R;

  return (
    <section className="relative bg-cc-card border border-cc-line rounded-2xl p-6 md:p-8 space-y-7 overflow-hidden">
      {(perfect || isFinal) && <Burst />}
      <div className="flex items-center gap-6">
        <div className="relative h-28 w-28 shrink-0">
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            <circle cx="50" cy="50" r={R} fill="none" stroke="rgb(30 29 27)" strokeWidth="6" />
            <motion.circle
              cx="50" cy="50" r={R} fill="none" stroke="rgb(240 235 224)" strokeWidth="6" strokeLinecap="round"
              strokeDasharray={C}
              initial={{ strokeDashoffset: C }}
              animate={{ strokeDashoffset: C * (1 - score / total) }}
              transition={{ duration: reduce ? 0 : 1, delay: 0.2, ease: EASE }}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-cc-display text-3xl tabular-nums">
            {shown}<span className="text-cc-fg/30">/{total}</span>
          </span>
        </div>
        <div className="min-w-0 space-y-1">
          <p className="text-xs tracking-widest uppercase text-cc-dim">{isFinal ? "Final check" : `Lesson ${n} check`}</p>
          <p className="font-cc-display text-3xl leading-tight text-balance">{headline}</p>
          {rewatch.length > 0 && (
            <p className="text-cc-dim text-sm leading-relaxed">
              {rewatch.length === 1 ? "Rewatch lesson " : "Rewatch lessons "}
              {rewatch.join(" and ")}.{" "}
              {isFinal ? "" : "Anything you missed comes back in a later check."}
            </p>
          )}
        </div>
      </div>

      {next !== null && (
        next === FINAL ? (
          <button
            onClick={() => go(FINAL)}
            className="group w-full text-left border border-cc-fg/30 rounded-xl p-4 flex items-center gap-4 hover:bg-cc-muted/30 transition"
          >
            <span className="h-12 w-12 shrink-0 rounded-lg bg-cc-fg text-cc-bg flex items-center justify-center"><Award className="h-6 w-6" /></span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs tracking-widest uppercase text-cc-dim">Unlocked</span>
              <span className="block font-cc-display text-xl">The final check</span>
            </span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        ) : (
          <button
            onClick={() => go(next)}
            className="group w-full text-left border border-cc-fg/30 rounded-xl overflow-hidden grid grid-cols-[8rem_1fr_auto] sm:grid-cols-[11rem_1fr_auto] items-center gap-4 pr-4 hover:bg-cc-muted/30 transition"
          >
            <Thumb n={next} />
            <span className="min-w-0 py-3">
              <span className="block text-xs tracking-widest uppercase text-cc-dim">Up next · Lesson {next}</span>
              <span className="block font-cc-display text-lg sm:text-xl leading-snug">{LESSONS[next - 1].title}</span>
            </span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        )
      )}

      <div className="flex flex-wrap gap-3">
        {rewatch.map((l) => (
          <button key={l} onClick={() => go(l)} className="inline-flex items-center justify-center gap-2 border border-cc-line rounded-xl px-5 py-2.5 text-sm hover:bg-cc-muted/40 transition">
            <RotateCcw className="h-3.5 w-3.5" /> Rewatch lesson {l}
          </button>
        ))}
        <button onClick={() => go(null)} className="inline-flex items-center justify-center px-2 py-2.5 text-sm text-cc-dim hover:text-cc-fg transition">
          Back to the course
        </button>
      </div>
    </section>
  );
}

/* ─────────────────────────── small parts ─────────────────────────── */

function Transcript({ n }: { n: number }) {
  const [open, setOpen] = useState(false);
  const lines = TRANSCRIPTS[n] || [];
  if (!lines.length) return null;
  return (
    <div className="border border-cc-line rounded-2xl bg-cc-card overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-sm hover:bg-cc-muted/30 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cc-ring/40"
      >
        <span className="inline-flex items-center gap-2"><FileText className="h-4 w-4 text-cc-dim" /> Read the transcript</span>
        <ChevronDown className={`h-4 w-4 text-cc-dim transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 pt-1 space-y-3 leading-relaxed max-w-prose">
              {lines.map((l, i) =>
                l.kind === "pause" ? (
                  <p key={i} className="text-xs tracking-widest uppercase text-cc-dim/60">Pause to think</p>
                ) : (
                  <p key={i} className={l.kind === "question" ? "text-cc-fg" : "text-cc-dim"}>{l.text}</p>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PrimaryButton({
  children, onClick, icon, iconRight, small,
}: {
  children: React.ReactNode;
  onClick: () => void;
  icon?: React.ReactNode;
  iconRight?: boolean;
  small?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.button
      onClick={onClick}
      whileHover={reduce ? undefined : { y: -1 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className={`group inline-flex items-center justify-center gap-2 bg-cc-fg text-cc-bg rounded-xl font-medium shadow-lg shadow-black/20 hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cc-ring/40 w-full sm:w-auto ${small ? "px-5 py-2.5" : "px-7 py-3.5"}`}
    >
      {!iconRight && icon}
      {children}
      {iconRight && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </motion.button>
  );
}

/* A small, quiet celebration: cream flecks that drift out and fade. */
function Burst() {
  const reduce = useReducedMotion();
  const bits = useMemo(
    () => Array.from({ length: 26 }).map((_, i) => {
      const a = (i / 26) * Math.PI * 2 + Math.random() * 0.4;
      const d = 90 + Math.random() * 130;
      return { x: Math.cos(a) * d, y: Math.sin(a) * d * 0.7, r: Math.random() * 220 - 110, s: 4 + Math.random() * 5, t: Math.random() * 0.2, tone: i % 3 };
    }),
    [],
  );
  if (reduce) return null;
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
      {bits.map((b, i) => (
        <motion.span
          key={i}
          className="absolute rounded-[2px]"
          style={{
            width: b.s, height: b.s * 0.6,
            background: b.tone === 0 ? "rgb(240 235 224)" : b.tone === 1 ? "rgb(168 159 143)" : "rgb(232 226 211)",
          }}
          initial={{ x: 0, y: 0, opacity: 0, rotate: 0 }}
          animate={{ x: b.x, y: [0, b.y, b.y + 40], opacity: [0, 1, 0], rotate: b.r }}
          transition={{ duration: 1.6, delay: 0.35 + b.t, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
