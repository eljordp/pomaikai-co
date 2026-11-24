/* Shared content for the Pōmaika'i Crash Course.
   Read by the course page and by the Crash Course tab in /admin,
   so the questions shown to Malachi and the ones reported back always match. */

export type Question = {
  id: string;
  lesson: number;
  q: string;
  options: string[];
  answer: number; // index into options before shuffling
  why: string;
};

export type Lesson = {
  n: number;
  title: string;
  blurb: string;
  remember: string;
  seconds: number;
};

export const LESSONS: Lesson[] = [
  { n: 1, title: "The Board", blurb: "The only screen you ever need to open.", remember: "Open Opportunities, drag what moved.", seconds: 56 },
  { n: 2, title: "When The Board Gets Busy", blurb: "Read a full board at a glance.", remember: "The shape of the board tells you where you're stuck.", seconds: 63 },
  { n: 3, title: "How You Know It's Working", blurb: "Your whole scoreboard is four numbers.", remember: "Four numbers, once a week.", seconds: 64 },
  { n: 4, title: "Claude, Where Your Work Is", blurb: "AI that does the work instead of advising.", remember: "Chat gives you answers. This gives you work that's already done.", seconds: 64 },
  { n: 5, title: "Something That Goes And Does It", blurb: "Codex, for jobs out on the web.", remember: "Claude works in. Codex works out.", seconds: 59 },
  { n: 6, title: "What To Actually Pay For", blurb: "The plans worth paying for, and the trap.", remember: "Three plans at a hundred dollars each, and twenty bucks on a key.", seconds: 71 },
];

export const QUESTIONS: Question[] = [
  {
    id: "q1", lesson: 1,
    q: "Who adds new leads to your board?",
    options: ["You, each morning, from your texts", "Your assistant, once a week", "We do. They show up as cards on their own", "Nobody. You import a spreadsheet"],
    answer: 2,
    why: "We set up the texting, and the leads land on the board on their own. If you're ever adding cards by hand, something's broken. Tell us.",
  },
  {
    id: "q2", lesson: 1,
    q: "You had a great call and the lead wants to move forward. You didn't touch the board. What's actually wrong?",
    options: ["Nothing. The call is what counts", "The board no longer matches reality, so nobody can see where that deal stands", "You should have logged it in a spreadsheet first", "The lead is supposed to move the card themselves"],
    answer: 1,
    why: "The board is the one place anyone can see where every deal stands. If it isn't on the board, as far as the business knows, it didn't happen.",
  },
  {
    id: "q3", lesson: 2,
    q: "Your board shows 40 cards on the left, 3 in the middle, 0 on the right. Which of these do you NOT need?",
    options: ["More follow-up on the leads you already have", "More leads", "Someone working that left column", "A look at why replies aren't turning into calls"],
    answer: 1,
    why: "A pile on the left means leads are arriving just fine. The leak is after that. More leads only makes the pile taller.",
  },
  {
    id: "q4", lesson: 2,
    q: "You want a stage to say \"Called\" instead of \"Qualified Lead.\" Where do you go?",
    options: ["Settings, then Business Profile", "Opportunities, then Pipelines, then Stages", "Contacts, then Tags", "You can't. Only we can change those"],
    answer: 1,
    why: "Stage names live with the pipeline, under Opportunities. Settings is where most people look first, which is exactly why it's the wrong answer.",
  },
  {
    id: "q5", lesson: 3,
    q: "Which of these is NOT one of your four numbers?",
    options: ["Leads in", "Calls booked", "Website visits", "Calls showed"],
    answer: 2,
    why: "Your four are leads in, conversations started, calls booked, calls showed. Website visits feels important, but it doesn't tell you if anyone is buying.",
  },
  {
    id: "q6", lesson: 3,
    q: "Calls booked looks great. Calls showed is half of that. Where's the leak?",
    options: ["Not enough leads coming in", "The texting isn't working", "Between the booking and the call: reminders, confirmations, or the wrong people booking", "Your calendar hours are too short"],
    answer: 2,
    why: "Leads and texting got people all the way to booking. The drop happens after that, so look at reminders and at who is booking.",
  },
  {
    id: "q7", lesson: 4,
    q: "You want the prices on your website files updated. Which setup actually does the update?",
    options: ["Paste the files into Claude in your browser and copy the answer back", "Claude inside VS Code, where it opens the files and changes them", "Either one. They do the same thing", "Neither. AI can't edit files"],
    answer: 1,
    why: "The browser version can only hand you text to copy and paste. The VS Code version opens the real file, changes it, and shows you what changed.",
  },
  {
    id: "q8", lesson: 4,
    q: "You're installing the Claude extension. How do you know it's the real one?",
    options: ["It has the most downloads", "It's first in the results and the publisher is Anthropic", "It's free", "It has \"Claude\" in the name"],
    answer: 1,
    why: "Anyone can put Claude in an extension's name. The publisher line is the part that can't be faked. It has to say Anthropic.",
  },
  {
    id: "q9", lesson: 5,
    q: "Which one is a Codex job, not a Claude-in-your-editor job?",
    options: ["Rewriting a document that's already on your computer", "Checking prices on fifteen competitor websites", "Fixing a typo in your site files", "Summarizing a file you already have"],
    answer: 1,
    why: "Codex goes out onto the internet in a real browser. Anything already sitting on your computer is Claude's job.",
  },
  {
    id: "q10", lesson: 5,
    q: "Which subscription does Codex come with?",
    options: ["Claude", "ChatGPT", "Grok", "Gemini"],
    answer: 1,
    why: "Codex is made by OpenAI, the company behind ChatGPT, so it comes with the ChatGPT plan.",
  },
  {
    id: "q11", lesson: 6,
    q: "Which Grok plan should you be on?",
    options: ["Premium, $30", "Super, $100", "Ultra, $200", "Plus, $8"],
    answer: 1,
    why: "Super is the $100 plan, the same level as your Claude and ChatGPT plans. Premium is a smaller $30 plan with a similar-sounding name.",
  },
  {
    id: "q12", lesson: 6,
    q: "Your Gemini key stops working halfway through the month. Most likely reason?",
    options: ["Your subscription got cancelled", "The prepaid balance ran out. Top it up", "Google suspended the account", "You need the $100 Gemini plan"],
    answer: 1,
    why: "Gemini runs on a prepaid balance, like a gift card. When it hits zero it stops. Top it up under Billing.",
  },
];

/* The final check uses its own twelve questions. Same ideas as the lesson
   checks, new situations, so it tests understanding instead of memory. */
export const FINAL_QUESTIONS: Question[] = [
  {
    id: "f1", lesson: 1,
    q: "It's Monday morning and you have ten minutes for the business. Which screen do you open first?",
    options: ["Opportunities", "The dashboard", "Conversations", "Settings"],
    answer: 0,
    why: "Opportunities is the one screen. The board shows where every deal stands at a glance. The rest is ours to watch.",
  },
  {
    id: "f2", lesson: 1,
    q: "Your assistant asks where to record that a deal just closed. What do you tell them?",
    options: ["Write it in the spreadsheet", "Move the card on the board", "Text Jordan about it", "Nowhere. The system figures it out"],
    answer: 1,
    why: "The board is the record. If something changed in real life, it changes on the board.",
  },
  {
    id: "f3", lesson: 2,
    q: "Cards are spread across every column and the last column keeps filling up. What is the board telling you?",
    options: ["You need more leads", "Leads are being worked all the way through", "Nobody is following up", "The stages are named wrong"],
    answer: 1,
    why: "The shape is the story. Cards moving steadily to the right means follow-up is happening.",
  },
  {
    id: "f4", lesson: 2,
    q: "Your stage names don't match how you actually sell. What's the right move?",
    options: ["Rename them every week as things change", "Leave them. They can't be changed", "Rename them once to match how you sell, then leave them alone", "Start a new pipeline for each lead"],
    answer: 2,
    why: "Stages are yours to name, under Opportunities, then Pipelines, then Stages. Set them once and let the board do its job.",
  },
  {
    id: "f5", lesson: 3,
    q: "How often should you look at your four numbers?",
    options: ["Every morning", "Once a week", "Once a quarter", "Only when something feels off"],
    answer: 1,
    why: "Weekly shows you the trend. Daily numbers bounce around and mostly just make you anxious.",
  },
  {
    id: "f6", lesson: 3,
    q: "Leads in is steady, but conversations started dropped by half. Where do you look?",
    options: ["At getting more leads", "At what happens right after a lead comes in", "At your calendar hours", "At calls showed"],
    answer: 1,
    why: "The drop sits between leads in and conversations started. Leads are still arriving, so look at what happens right after they do.",
  },
  {
    id: "f7", lesson: 4,
    q: "What do you install first, so Claude can work right where your files are?",
    options: ["Visual Studio Code", "A new web browser", "The Claude phone app", "Nothing. Any chat window does this"],
    answer: 0,
    why: "Claude goes inside Visual Studio Code as an extension. Install VS Code first, then add Claude from Extensions.",
  },
  {
    id: "f8", lesson: 4,
    q: "Claude just changed three of your files. How do you see exactly what it did?",
    options: ["Compare the files by hand", "Ask it to email you a summary", "Read the red and green changes it shows you", "You can't. You just have to trust it"],
    answer: 2,
    why: "Every change shows up in red for what was removed and green for what was added, so nothing happens behind your back.",
  },
  {
    id: "f9", lesson: 5,
    q: "You need every venue in Honolulu that hosts business workshops, and how many people each one holds. Which tool?",
    options: ["Claude in your editor", "Codex", "Gemini", "A spreadsheet"],
    answer: 1,
    why: "That information is spread across sites on the web. Going out and getting it is Codex's job.",
  },
  {
    id: "f10", lesson: 5,
    q: "While Codex is working, a bar appears across the top of the browser. What do you do?",
    options: ["Close the browser. It's a warning", "Click Cancel so you can take over", "Let it work. The bar means Codex is driving", "Restart your computer"],
    answer: 2,
    why: "That bar just means Codex is in control of the browser. Clicking Cancel on it stops Codex mid-job.",
  },
  {
    id: "f11", lesson: 6,
    q: "Your AI bill shows Claude $100, ChatGPT $100, Grok $30. What's off?",
    options: ["Nothing. That's the plan", "Grok is on Premium. It should be Super, at $100", "Claude should be $30", "You don't need ChatGPT"],
    answer: 1,
    why: "The plan is three plans at $100 each. A $30 Grok charge means you landed on Premium, the smaller plan with the similar name.",
  },
  {
    id: "f12", lesson: 6,
    q: "How do you pay for Gemini?",
    options: ["A $100 monthly subscription", "It comes with Claude", "Load a prepaid balance, about twenty dollars at a time", "It's free forever"],
    answer: 2,
    why: "Gemini runs on a prepaid balance, like a gift card. You top it up when it runs low.",
  },
];

export const QUESTION_BY_ID = Object.fromEntries([...QUESTIONS, ...FINAL_QUESTIONS].map((q) => [q.id, q]));

/* Transcripts, generated from scripts.md so they match the audio word for word. */
export type TranscriptLine = { text: string; kind?: "question" | "pause" };
export const TRANSCRIPTS: Record<number, TranscriptLine[]> = {
  "1": [
    {
      "text": "One of six. By the end of this you'll know the only screen in here you ever have to open."
    },
    {
      "text": "It's this one. Opportunities."
    },
    {
      "text": "Every lead we send you shows up here as a card. You don't add them. We do."
    },
    {
      "text": "The columns are stages. Left is somebody who just came in. Right is money in the bank."
    },
    {
      "text": "A card moves one column at a time, and you move it by dragging it."
    },
    {
      "text": "That's it. That's the whole mechanic. No spreadsheet, no data entry. The board is the record."
    },
    {
      "text": "Quick one. A lead texts you back and says they're interested. What do you do?",
      "kind": "question"
    },
    {
      "text": "",
      "kind": "pause"
    },
    {
      "text": "Drag their card one column to the right. Something changed, so the board changes."
    },
    {
      "text": "If you remember one thing: open Opportunities, drag what moved."
    }
  ],
  "2": [
    {
      "text": "Two of six. This one's about reading the board at a glance."
    },
    {
      "text": "Here's a pipeline with a real campaign running through it. Cards everywhere."
    },
    {
      "text": "You're not going to read them. You don't need to. Read the column counts instead."
    },
    {
      "text": "A big pile on the left and almost nothing on the right means leads are coming in and nobody's moving them forward."
    },
    {
      "text": "That's not a lead problem. That's a follow-up problem, and the board just told you for free."
    },
    {
      "text": "The stage names are yours, by the way. Opportunities, then Pipelines, then Stages. Rename them to match how you actually sell."
    },
    {
      "text": "Set that up once and then leave it alone."
    },
    {
      "text": "Question. Your left column is stacked and your right column is empty. What's broken?",
      "kind": "question"
    },
    {
      "text": "",
      "kind": "pause"
    },
    {
      "text": "Follow-up. The leads are fine. Nobody's working them."
    },
    {
      "text": "If you remember one thing: the shape of the board tells you where you're stuck."
    }
  ],
  "3": [
    {
      "text": "Three of six. Four numbers. That's your whole scoreboard."
    },
    {
      "text": "Leads in. Conversations started. Calls booked. Calls showed."
    },
    {
      "text": "They don't all live on one screen, so here's where to look."
    },
    {
      "text": "The board gives you your opportunities by stage. That's leads in, and how far they got."
    },
    {
      "text": "Conversations is where replies land. Calendar is where booked calls land."
    },
    {
      "text": "Calls showed you'll know from your own day."
    },
    {
      "text": "Watch those four week over week. Not daily. Weekly. Daily numbers just make you anxious."
    },
    {
      "text": "And keep your calendar hours honest, because that's what people are booking against."
    },
    {
      "text": "Question. Leads in went up, calls booked stayed flat. Where's the problem?",
      "kind": "question"
    },
    {
      "text": "",
      "kind": "pause"
    },
    {
      "text": "In the middle. People are arriving and not getting booked. That's a conversation problem, not a traffic problem."
    },
    {
      "text": "If you remember one thing: four numbers, once a week."
    }
  ],
  "4": [
    {
      "text": "Four of six. This one changes what AI can actually do for you."
    },
    {
      "text": "In a chat window, you paste something in and it hands you advice. You still do the work."
    },
    {
      "text": "We're going to put it somewhere it can do the work instead."
    },
    {
      "text": "Visual Studio Code. It's free, it's from Microsoft, and it takes two minutes."
    },
    {
      "text": "Install it, open it, click Extensions in the sidebar, search Claude."
    },
    {
      "text": "First result, published by Anthropic. Install, then sign in."
    },
    {
      "text": "Now watch. It opens the actual file, changes it, and shows you exactly what it changed. Red for gone, green for new."
    },
    {
      "text": "Question. What's the real difference between this and the chat window?",
      "kind": "question"
    },
    {
      "text": "",
      "kind": "pause"
    },
    {
      "text": "Advice, versus handing someone the keys. One tells you what to do. This one does it."
    },
    {
      "text": "If you remember one thing: chat gives you answers, this gives you work that's already done."
    }
  ],
  "5": [
    {
      "text": "Five of six. This one goes out on the internet for you."
    },
    {
      "text": "Here's a real job. What are other growth advisors in Hawaii charging?"
    },
    {
      "text": "That's somebody's whole afternoon. Watch Codex do it instead."
    },
    {
      "text": "Codex. It comes with a ChatGPT plan, and it drives a real browser window."
    },
    {
      "text": "See the bar across the top? That's it in control of Chrome. Not telling you what to click. Clicking."
    },
    {
      "text": "It opens each site, finds the pricing, and writes down what it sees."
    },
    {
      "text": "A few minutes later, it hands you this."
    },
    {
      "text": "Question. You've got Claude in your editor already. Why add this one?",
      "kind": "question"
    },
    {
      "text": "",
      "kind": "pause"
    },
    {
      "text": "Different jobs. Claude works on what's on your machine. Codex goes out and gets what isn't."
    },
    {
      "text": "If you remember one thing: Claude works in. Codex works out."
    }
  ],
  "6": [
    {
      "text": "Six of six. Let's talk money, because there's an easy way to overpay here."
    },
    {
      "text": "Three subscriptions and one thing that isn't a subscription."
    },
    {
      "text": "Claude, the hundred dollar plan. ChatGPT, the hundred dollar plan, and that's where Codex comes from."
    },
    {
      "text": "Grok, the hundred dollar plan. It's called Super."
    },
    {
      "text": "Careful there. There's a thirty dollar tier underneath it called Premium. Different plan. Get Super."
    },
    {
      "text": "Now the one that isn't a subscription. Gemini."
    },
    {
      "text": "Google AI Studio, API Keys, Create API key. Then Billing, switch it to prepay, and put twenty dollars on it."
    },
    {
      "text": "You're paying for what you use instead of paying every month whether you touch it or not. Twenty dollars lasts weeks."
    },
    {
      "text": "Question. Which one of these four do you not subscribe to?",
      "kind": "question"
    },
    {
      "text": "",
      "kind": "pause"
    },
    {
      "text": "Gemini. You load it like a gift card."
    },
    {
      "text": "If you remember one thing: three plans at a hundred dollars each, and twenty bucks on a key."
    }
  ]
};
