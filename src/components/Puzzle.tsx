"use client";

import { useCallback, useEffect, useState } from "react";
import { useContent } from "@/context/LanguageContext";

const ANSWER = "STONE";
const WORD_LENGTH = 5;
const MAX_GUESSES = 6;

const KEYBOARD_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACK"],
];

type LetterStatus = "correct" | "present" | "absent";

const RANK: Record<LetterStatus, number> = { correct: 3, present: 2, absent: 1 };

const STATUS_STYLE: Record<
  LetterStatus,
  { background: string; color: string; borderColor: string }
> = {
  correct: {
    background: "var(--color-glass-blue)",
    color: "#ffffff",
    borderColor: "var(--color-glass-blue)",
  },
  present: {
    background: "var(--color-glass-amber)",
    color: "var(--color-lead)",
    borderColor: "var(--color-glass-amber)",
  },
  absent: {
    background: "var(--foreground-muted)",
    color: "var(--background)",
    borderColor: "var(--foreground-muted)",
  },
};

const EMPTY_STYLE = {
  background: "transparent",
  color: "var(--foreground)",
  borderColor: "var(--border)",
};

const KEY_EMPTY_STYLE = {
  background: "var(--surface)",
  color: "var(--foreground)",
  borderColor: "var(--border)",
};

function evaluateGuess(guess: string): LetterStatus[] {
  const result: LetterStatus[] = Array(WORD_LENGTH).fill("absent");
  const answerLetters = ANSWER.split("");
  const used = Array(WORD_LENGTH).fill(false);

  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guess[i] === answerLetters[i]) {
      result[i] = "correct";
      used[i] = true;
    }
  }
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (result[i] === "correct") continue;
    const idx = answerLetters.findIndex((letter, j) => letter === guess[i] && !used[j]);
    if (idx !== -1) {
      result[i] = "present";
      used[idx] = true;
    }
  }
  return result;
}

export default function Puzzle() {
  const t = useContent();
  const [guesses, setGuesses] = useState<string[]>([]);
  const [current, setCurrent] = useState("");
  const [status, setStatus] = useState<"playing" | "won" | "lost">("playing");
  const [message, setMessage] = useState("");

  const submitGuess = useCallback(() => {
    if (status !== "playing") return;
    if (current.length !== WORD_LENGTH) {
      setMessage("Not enough letters");
      window.setTimeout(() => setMessage(""), 1200);
      return;
    }
    const nextGuesses = [...guesses, current];
    setGuesses(nextGuesses);
    setCurrent("");
    if (current === ANSWER) {
      setStatus("won");
      setMessage("You got it!");
    } else if (nextGuesses.length >= MAX_GUESSES) {
      setStatus("lost");
      setMessage(`The word was ${ANSWER}`);
    }
  }, [current, guesses, status]);

  const pressKey = useCallback(
    (key: string) => {
      if (status !== "playing") return;
      if (key === "ENTER") {
        submitGuess();
      } else if (key === "BACK") {
        setCurrent((c) => c.slice(0, -1));
      } else if (/^[A-Z]$/.test(key)) {
        setCurrent((c) => (c.length < WORD_LENGTH ? c + key : c));
      }
    },
    [status, submitGuess]
  );

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "Enter") {
        e.preventDefault();
        pressKey("ENTER");
      } else if (e.key === "Backspace") {
        e.preventDefault();
        pressKey("BACK");
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        pressKey(e.key.toUpperCase());
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pressKey]);

  function resetGame() {
    setGuesses([]);
    setCurrent("");
    setStatus("playing");
    setMessage("");
  }

  const keyStatuses: Record<string, LetterStatus> = {};
  guesses.forEach((guess) => {
    const evals = evaluateGuess(guess);
    guess.split("").forEach((letter, i) => {
      const next = evals[i];
      const existing = keyStatuses[letter];
      if (!existing || RANK[next] > RANK[existing]) {
        keyStatuses[letter] = next;
      }
    });
  });

  const rows = Array.from({ length: MAX_GUESSES }, (_, i) => {
    if (i < guesses.length) {
      return { letters: guesses[i].split(""), evals: evaluateGuess(guesses[i]) };
    }
    if (i === guesses.length) {
      return { letters: current.split(""), evals: null };
    }
    return { letters: [], evals: null };
  });

  return (
    <section id="puzzle" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-glass-blue dark:text-glass-amber">
        {t.puzzle.heading}
      </h2>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted">
        {t.puzzle.paragraph1}
      </p>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-foreground-muted">
        {t.puzzle.paragraph2}
      </p>

      <div className="mt-8 flex flex-col items-center gap-6">
        <div className="flex flex-col gap-1.5">
          {rows.map((row, i) => (
            <div key={i} className="flex gap-1.5">
              {Array.from({ length: WORD_LENGTH }, (_, j) => {
                const letter = row.letters[j] ?? "";
                const evalStatus = row.evals?.[j];
                const style = evalStatus ? STATUS_STYLE[evalStatus] : EMPTY_STYLE;
                return (
                  <div
                    key={j}
                    className="flex h-12 w-12 items-center justify-center rounded border text-lg font-semibold uppercase sm:h-14 sm:w-14"
                    style={style}
                  >
                    {letter}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <p className="h-5 text-sm font-medium text-foreground-muted">{message}</p>

        <div className="flex flex-col items-center gap-1.5">
          {KEYBOARD_ROWS.map((row, i) => (
            <div key={i} className="flex gap-1.5">
              {row.map((key) => {
                const s = keyStatuses[key];
                const style = s ? STATUS_STYLE[s] : KEY_EMPTY_STYLE;
                const wide = key === "ENTER" || key === "BACK";
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => pressKey(key)}
                    className={`flex h-11 items-center justify-center rounded border font-mono text-xs font-semibold uppercase transition-colors sm:text-sm ${
                      wide ? "px-3" : "w-8 sm:w-10"
                    }`}
                    style={style}
                  >
                    {key === "BACK" ? "⌫" : key}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {status !== "playing" && (
          <button
            type="button"
            onClick={resetGame}
            className="rounded-full bg-glass-blue px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-glass-violet"
          >
            Play again
          </button>
        )}
      </div>
    </section>
  );
}
