"use client";

import { useState, type CSSProperties } from "react";
import { Check, Lock } from "lucide-react";

function BriefLanes() {
  const lanes = [
    { who: "MS", tool: "Claude", src: "/images/tools/claude.svg" },
    { who: "DS", tool: "ChatGPT", src: "/images/tools/chatgpt.svg" },
    { who: "PB", tool: "Cursor", src: "/images/tools/cursor.svg" },
  ];

  return (
    <div className="moment-demo moment-demo--lanes">
      {lanes.map((lane, i) => (
        <div key={lane.who} className="moment-lane" style={{ "--i": i } as CSSProperties}>
          <span className="moment-who" aria-hidden="true">
            {lane.who}
          </span>
          <span className="moment-tool" title={lane.tool}>
            <img src={lane.src} alt={lane.tool} loading="lazy" />
          </span>
          <span className="moment-brief" aria-hidden="true">
            {[100, 88, 64].map((w, j) => (
              <span
                key={w}
                className="moment-brief-line"
                style={{ "--w": `${w}%`, "--j": j } as CSSProperties}
              />
            ))}
          </span>
        </div>
      ))}
      <p className="moment-note">The same briefing, retyped for every tool</p>
    </div>
  );
}

function QuestionAnswers() {
  return (
    <div className="moment-demo moment-demo--answers">
      <div className="moment-q">
        <span className="moment-q-mark" aria-hidden="true">
          ?
        </span>
        <span className="moment-q-text">Which account needs attention?</span>
      </div>
      <div className="moment-answers">
        <div className="moment-answer" style={{ "--i": 0 } as CSSProperties}>
          <span className="moment-answer-who" aria-hidden="true">
            MS
          </span>
          <span className="moment-answer-text">Start with the Q3 renewal.</span>
        </div>
        <div className="moment-answer" style={{ "--i": 1 } as CSSProperties}>
          <span className="moment-answer-who" aria-hidden="true">
            DS
          </span>
          <span className="moment-answer-text">Start with the new lead.</span>
        </div>
        <span className="moment-neq" aria-hidden="true">
          &ne;
        </span>
      </div>
      <p className="moment-note">Same question. Different halves of the picture.</p>
    </div>
  );
}

function NewHireAccess() {
  const rows = [
    { name: "Drive", src: "/images/tools/google-drive.svg", state: "Readable", locked: false },
    { name: "Slack", src: "/images/tools/slack.svg", state: "Readable", locked: false },
    { name: "Notion", src: "/images/tools/notion.svg", state: "Readable", locked: false },
    { name: "HubSpot", src: "/images/tools/hubspot.svg", state: "No access", locked: true },
  ];

  return (
    <div className="moment-demo moment-demo--access">
      <div className="moment-access-who">
        <span className="moment-access-avatar" aria-hidden="true">
          RH
        </span>
        <span className="moment-access-meta">
          <span className="moment-access-name">Ryan Howard</span>
          <span className="moment-access-day">Temp &middot; Day 1</span>
        </span>
      </div>
      {rows.map((row, i) => (
        <div
          key={row.name}
          className={`moment-row${row.locked ? " moment-row--locked" : ""}`}
          style={{ "--i": i } as CSSProperties}
        >
          <span className="moment-row-icon">
            <img src={row.src} alt="" loading="lazy" />
          </span>
          <span className="moment-row-name">{row.name}</span>
          <span className="moment-row-state">
            {row.locked ? <Lock className="size-3" strokeWidth={2.5} /> : <Check className="size-3" strokeWidth={2.5} />}
            {row.state}
          </span>
        </div>
      ))}
    </div>
  );
}

const moments = [
  {
    title: "Everyone re-explains the same business",
    text: "One teammate shapes the plan in Claude, another drafts in ChatGPT, a third ships in Cursor - and none of those tools know what the others were told. Multiply that gap by headcount and your team spends its day briefing software instead of using it.",
    demo: <BriefLanes />,
  },
  {
    title: "The answer depends on who asked",
    text: "Two people ask their AI the same question and get two different answers, because each one pasted a different half of the picture. Give each person their full working context and the quality of the answer stops depending on what they remembered to paste.",
    demo: <QuestionAnswers />,
  },
  {
    title: "A new hire's first week",
    text: "They already have the drive, the channels and the docs - they just cannot read all of it in a week. Connect their accounts and their AI can, from day one, within exactly the access you granted them.",
    demo: <NewHireAccess />,
  },
];

export default function Moments() {
  const [active, setActive] = useState(0);

  return (
    <div className="moments v2-shine v2-shine--light" role="tablist" aria-label="Everyday moments">
      {moments.map((moment, index) => {
        const isActive = active === index;

        return (
          <div
            key={moment.title}
            role="button"
            tabIndex={0}
            aria-expanded={isActive}
            className={`moment${isActive ? " active" : ""}`}
            onClick={() => setActive(index)}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setActive(index);
              }
            }}
          >
            <div className="moment__graphic">
              <div className="moment__graphic-inner">
                <div className={`demo${isActive ? " active" : ""}`}>{moment.demo}</div>
              </div>
            </div>
            <div className="moment__body">
              <h3 className="moment__title">{moment.title}</h3>
              <p className="moment__text">{moment.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
