/**
 * Systems data — powers the /growth/systems/:slug detail pages.
 *
 * GROUND RULE: No fabricated metrics. Any numeric result JP has not verified
 * is left as "—" (em dash) or "TBD". The RESULT ARC is described in plain
 * language even when the specific number isn't known yet.
 *
 * Stack details flagged with `confirmWithJp: true` should be verified before
 * JP shares the page with clients — we're describing typical implementations,
 * not making claims about what's actually inside each system.
 */

export type MetricSlot = {
  label: string;
  value: string; // Keep as "—" or "TBD" until JP fills it in.
  note?: string;
};

export type StackItem = {
  label: string;
  detail: string;
  confirmWithJp?: boolean;
};

export type SystemDetail = {
  slug: string;
  name: string;
  tagline: string;
  niche: string;
  image: string;
  liveHref: string;
  liveDomain: string;
  /** Two-sentence pitch under the hero. */
  pitch: string;
  atAGlance: {
    builtFor: string;
    role: string;
    status: string;
  };
  problem: string[]; // Each string = one paragraph.
  solution: string[]; // Each string = one paragraph.
  capabilities: {
    heading: string;
    body: string;
  }[];
  stack: StackItem[];
  results: {
    intro: string;
    slots: MetricSlot[];
  };
};

export const SYSTEMS_DATA: Record<string, SystemDetail> = {
  "dhl-translator": {
    slug: "dhl-translator",
    name: "DHL Translator",
    tagline: "Real-time translation. Counter-side.",
    niche: "B2B · Real-time Translation",
    image: "/portfolio/dhl-translator.png",
    liveHref: "https://cubicship-translator.vercel.app",
    liveDomain: "cubicship-translator.vercel.app",
    pitch:
      "A counter-side translation tool built for a DHL retail location serving a steady flow of international customers. Staff speak into it, the customer hears their language — and vice versa — without either side reaching for a phone.",
    atAGlance: {
      builtFor: "DHL retail counter (MEA-Ship)",
      role: "Live translation between counter staff and customers",
      status: "In production",
    },
    problem: [
      "A retail shipping counter is a compressed, high-friction environment. Customers walk in mid-conversation with a language they need help in, a form they can't read, and a schedule they're already behind on. When the counter staff and the customer don't share a language, the whole transaction slows to a crawl.",
      "The default workaround is a phone with a translator app — awkwardly passed back and forth across the counter, one sentence at a time, with the shipping label paperwork sitting between them. It works, barely, but it turns a five-minute transaction into fifteen. When the line behind grows, it stops working at all.",
      "The counter needed something that lives on the counter. Always on, always facing both sides, no app to open, no phone to unlock, no permissions to grant. Something a staff member can walk up to and start talking to.",
    ],
    solution: [
      "The DHL Translator is a browser-based tool pinned to a tablet at the counter. Staff tap once to start a session — no accounts, no setup — and the tool captures voice from both sides, transcribes it, translates it, and speaks it back in the target language. The exchange stays on screen so both parties can double-check what was said.",
      "Because it runs in the browser, the tablet can live on the counter permanently. No install cycle when a device gets swapped, no app-store approval to push a fix. When JP updates translation prompts or adds a language, the counter picks it up on the next reload.",
      "The tool is opinionated about the retail flow: shorter sentences, shipping-domain vocabulary weighted heavier, and a UI that prioritizes clarity over chrome. It's not a general-purpose translator dropped into a shipping counter — it's a shipping-counter tool that happens to translate.",
    ],
    capabilities: [
      {
        heading: "Two-way voice capture",
        body: "Both the staff member and the customer can speak into the tablet. The tool switches direction on each turn without either party pressing anything. The transcript stays on screen so misheard words can be corrected before they cost the shipment.",
      },
      {
        heading: "Shipping-domain aware",
        body: "The prompts around the translation model bias toward parcel-shipping vocabulary — customs terms, addresses, weight and dimension language, declared value. Generic translators hallucinate on the acronyms this counter uses every hour.",
      },
      {
        heading: "Zero-install deployment",
        body: "Runs in the browser on the counter's tablet. No app store, no MDM, no per-device provisioning. New device, new URL bookmark, done.",
      },
      {
        heading: "Session-scoped, no data retention by default",
        body: "Each customer interaction is a fresh session. The retail counter doesn't need — and probably shouldn't retain — a searchable log of what every customer said. Sessions clear when the tablet reloads.",
      },
    ],
    stack: [
      {
        label: "Frontend",
        detail: "React + Vite deployed on Vercel — same stack every JDLO system runs on.",
      },
      {
        label: "Speech-to-text",
        detail:
          "Streaming transcription so the customer sees words appear as they speak, not after they finish. Model choice tuned for shipping-domain vocabulary.",
        confirmWithJp: true,
      },
      {
        label: "Translation",
        detail:
          "LLM-based translation with a domain-specific system prompt — shipping, customs, address formats — rather than a generic translation API.",
        confirmWithJp: true,
      },
      {
        label: "Text-to-speech",
        detail:
          "Neural TTS on the response so the customer hears their language back, not just reads it. Voice selection tuned per language.",
        confirmWithJp: true,
      },
    ],
    results: {
      intro:
        "The result the counter cares about isn't a benchmark — it's whether a non-English-speaking customer can walk in, ship a parcel, and leave without the transaction stalling. That's the bar the tool is measured against.",
      slots: [
        {
          label: "Countertop deployment",
          value: "TBD",
          note: "Number of retail counters running the tool in daily use",
        },
        {
          label: "Language pairs supported",
          value: "TBD",
          note: "JP to confirm current live pair count",
        },
        {
          label: "Round-trip response",
          value: "—",
          note: "Speak-to-translated-audio latency (target: conversational)",
        },
      ],
    },
  },

  "outreach-engine": {
    slug: "outreach-engine",
    name: "Outreach Engine",
    tagline: "Cold outreach that closes.",
    niche: "Sales · Automation",
    image: "/portfolio/outreach-engine.png",
    liveHref: "https://outreach-engine-pearl-pi.vercel.app",
    liveDomain: "outreach-engine-pearl-pi.vercel.app",
    pitch:
      "A pipeline board and outreach engine built for founder-led sales. Leads land, get drafted into personalized cold outreach, move through the stages of a real deal, and never fall through the cracks between an inbox, a spreadsheet, and a memory.",
    atAGlance: {
      builtFor: "Founder-led sales teams",
      role: "Lead pipeline + AI-drafted cold outreach",
      status: "In production",
    },
    problem: [
      "Cold outreach at the founder level is a broken system by default. Leads live in six places: a spreadsheet from a scraper, DMs across two platforms, a saved-for-later folder in the email inbox, three unopened tabs, and a memory. The follow-ups happen when they happen — which is almost never.",
      "Meanwhile the outreach itself is the same three copy-pasted templates the founder wrote at 11pm one Tuesday. Every prospect gets the same opener regardless of niche, size, or the fact that half of them already replied to a previous message. The founder can feel the sloppiness but doesn't have time to fix it.",
      "The tools that promise to solve this — enterprise sales platforms, HubSpot, Apollo — are built for a five-person SDR team and price accordingly. A solo founder needs the same discipline without the ceremony.",
      "The gap is a lightweight, opinionated pipeline that drafts the outreach for you, tracks whether a lead has actually been touched, and shows the whole board in one screen so nothing goes cold.",
    ],
    solution: [
      "The Outreach Engine treats cold outreach as a single pipeline with a fixed set of stages: Lead → Pitched → Replied → Meeting → Closed. Every prospect lives in exactly one column. When something moves, the board moves. There's no second system to keep in sync.",
      "New leads drop into the board and the tool drafts a first-touch message tailored to what it knows about them — niche, business type, angle. The draft is not sent automatically. The founder reviews, edits the parts that need a real voice, and hits send. The tool's job is to remove the blank-page problem, not to replace the human.",
      "As replies come in, the board updates. Follow-up sequences fire on the cadence the founder sets, not on the day the founder happens to remember. And because every message is stored against the lead, the next draft has context — the tool writes the follow-up knowing what the last touch said and what came back.",
    ],
    capabilities: [
      {
        heading: "Kanban pipeline as source of truth",
        body: "Lead → Pitched → Replied → Meeting → Closed. One board, one place. Drag a card between columns and the lead's state updates everywhere — no dual-entry into a spreadsheet.",
      },
      {
        heading: "AI-drafted first-touch outreach",
        body: "New leads generate a draft opener based on the info attached to the lead. The founder reviews and edits before send. The draft removes the blank page; the human keeps the voice.",
      },
      {
        heading: "Context-aware follow-ups",
        body: "Each follow-up is drafted knowing what the previous message said and how — or whether — the lead responded. Follow-ups don't restart the conversation. They continue it.",
      },
      {
        heading: "Cadence and activity feed",
        body: "Sequences fire on the schedule you set, not the day you remember. A live activity feed shows what's been sent, what's been opened, and what's gone cold long enough to need a nudge.",
      },
      {
        heading: "Founder-shaped, not SDR-shaped",
        body: "No lead scoring committees, no territory rules, no six-role permission model. One operator, one board, one inbox — designed for the person doing the selling to also be the person who built the product.",
      },
    ],
    stack: [
      {
        label: "Frontend",
        detail: "React + Vite on Vercel. Kanban board built with drag-and-drop primitives, not a heavyweight sales-platform framework.",
      },
      {
        label: "Data + pipeline state",
        detail:
          "Supabase for lead records, message history, and stage state — the same backend pattern used across JDLO's systems for consistency.",
        confirmWithJp: true,
      },
      {
        label: "Outreach generation",
        detail:
          "LLM-based drafting with a lead-context prompt: niche, business type, previous touches, reply signals. The model writes the draft; the founder ships it.",
        confirmWithJp: true,
      },
      {
        label: "Scheduling + delivery",
        detail:
          "Cron-driven follow-up sequences that run against the pipeline state, so a lead in Replied doesn't get the same nudge as a lead in Pitched.",
        confirmWithJp: true,
      },
    ],
    results: {
      intro:
        "The result the tool exists to produce isn't a leaderboard number — it's the founder walking into Monday morning with an inbox and a board that agrees on what state every deal is in. Discipline the founder wouldn't hold on their own, held by the system.",
      slots: [
        {
          label: "Leads processed",
          value: "TBD",
          note: "Total prospects moved through the pipeline",
        },
        {
          label: "Reply rate",
          value: "TBD",
          note: "Cold-to-reply on drafted outreach",
        },
        {
          label: "Hours saved per week",
          value: "—",
          note: "Founder time returned from manual outreach admin",
        },
      ],
    },
  },

  "jdlo-crm": {
    slug: "jdlo-crm",
    name: "JDLO CRM",
    tagline: "The founder-first CRM.",
    niche: "Ops · AI-Powered",
    image: "/portfolio/jdlo-crm.png",
    liveHref: "https://jdlo-crm.vercel.app",
    liveDomain: "jdlo-crm.vercel.app",
    pitch:
      "A CRM built the way a founder actually runs a business — leads, deals, tasks, and calendar in one screen, with AI weighing in on which of it matters this week. Built for JP's own freelance operation before any client asked for it.",
    atAGlance: {
      builtFor: "Solo operators and founder-led shops",
      role: "AI-augmented CRM for leads, deals, tasks, and revenue",
      status: "In production",
    },
    problem: [
      "The founders who need a CRM most are the ones who refuse to use one. HubSpot is too heavy for their volume, Notion collapses under the operational load, and a spreadsheet works right up until it doesn't.",
      "The result is that lead capture, deal tracking, follow-up scheduling, and revenue projection each live in a different app — or worse, in the founder's head. Every Monday morning the founder rebuilds the picture of what's actually happening from scratch, and every Friday the picture drifts again.",
      "The specific pain isn't a missing feature — it's a missing single view. A founder needs to open one screen and see: who's live in the pipeline, what's owed to whom, what's on the calendar this week, what to work on right now. Every existing CRM either buries that view under configuration, or spreads it across four tabs.",
      "JDLO CRM exists because JP needed exactly that view for his own freelance business and couldn't find it. It got built out of use, not out of a product roadmap.",
    ],
    solution: [
      "JDLO CRM is opinionated in the direction most CRMs refuse to be: it decides what a founder should see, then shows only that. The main view is a pipeline board plus a task list plus a calendar strip — all on one screen, with each object linked to the others.",
      "AI sits under the surface, not on top of it. When a lead comes in, the system scores it against the founder's actual close history, drafts an initial follow-up task, and slots the next-step reminder onto the calendar. When a task sits untouched for too long, the CRM flags it — not with a red badge, but by moving it to the top of the list.",
      "Revenue projection is built from the deals in the board, not from a separate spreadsheet. If a deal moves stage, the projection updates. If a task closes out a deal, the number moves into collected. The founder never has to open a second tool to answer 'how am I actually doing this month.'",
      "It's a CRM built from the operator's chair, not the sales manager's — which is exactly the seat most freelance and boutique businesses need it built from.",
    ],
    capabilities: [
      {
        heading: "One-screen operating view",
        body: "Pipeline board, active tasks, upcoming calendar events, and revenue-to-date on a single page. The founder opens the CRM and knows within ten seconds what the state of the business is.",
      },
      {
        heading: "AI-assisted lead scoring",
        body: "New leads get scored against the shape of deals that historically closed. Not a black-box number — a short, readable rationale the founder can override. The point isn't to replace judgment; it's to make sure nothing hot gets treated as cold by accident.",
      },
      {
        heading: "Task automation from deal state",
        body: "When a deal moves stages, the CRM drafts the natural next task — send the proposal, book the meeting, follow up in 48 hours — and schedules it. The founder reviews and confirms. The mental overhead of 'what's next' is largely removed.",
      },
      {
        heading: "Calendar sync",
        body: "Meetings booked from the CRM land on the founder's actual calendar. Reschedules flow back. There's no drift between what the CRM thinks is on the calendar and what the calendar thinks.",
      },
      {
        heading: "Revenue projection from the board",
        body: "Cash collected, cash forecasted, cash at risk — all rendered from the deals in the pipeline. When the founder moves a deal into Closed, the number moves with it. No separate spreadsheet, no monthly reconciliation.",
      },
    ],
    stack: [
      {
        label: "Frontend",
        detail:
          "React on Vite deployed to Vercel. Same operator-focused UI language as the rest of JP's systems.",
        confirmWithJp: true,
      },
      {
        label: "Data layer",
        detail:
          "Supabase for leads, deals, tasks, calendar events, and revenue records — with row-level policies so a multi-user version can be dropped in later without a rewrite.",
        confirmWithJp: true,
      },
      {
        label: "AI layer",
        detail:
          "LLM-based lead scoring and task drafting, using the founder's own historical deal patterns as context. Not a generic 'AI CRM' — one that reads the actual pipeline before it speaks.",
        confirmWithJp: true,
      },
      {
        label: "Integrations",
        detail:
          "Calendar sync, email capture, and outreach hand-off — including a natural bridge to the Outreach Engine when a lead needs cold sequences.",
        confirmWithJp: true,
      },
    ],
    results: {
      intro:
        "The success bar isn't a metric on a dashboard — it's whether the founder can operate for a week without a spreadsheet, a sticky note, or a 'what did I promise this client' inbox search. If the CRM is the single source of truth, it's working.",
      slots: [
        {
          label: "Active clients tracked",
          value: "TBD",
          note: "Live count of clients under management",
        },
        {
          label: "Weekly hours saved",
          value: "—",
          note: "Time reclaimed from manual CRM admin",
        },
        {
          label: "Pipeline value visible",
          value: "—",
          note: "Total forecast surfaced on the operating view",
        },
      ],
    },
  },
};

export const SYSTEM_SLUGS = Object.keys(SYSTEMS_DATA);
