# QA interview prep — knowledge is senior-level, gap is execution precision

Andrei is prepping (same-day cram) for a Senior QA Automation interview (Playwright/TS,
live coding, quizzes). Parallel track under `interview-prep/` — root solve-from-scratch
mission untouched.

## What the drills revealed
- **Theory (confusable pairs): 5/5 correct calls.** Severity/priority, smoke/sanity,
  presence-not-absence principle, verification/validation, error→defect→failure — all sound.
  Weak spot: gives the definition but *omits the concrete example*; occasionally blurs two
  close terms under time pressure. Fix drilled: reflexively add "for example…".
- **Live coding, round 1 (login test):** wrote pseudocode not code; real syntax bugs —
  broken `getByRole` signature, missing `await`, `haveText` non-option, and a *logic* slip
  (asserted `/dashboard/` on the wrong-password test). Right structure though (plan-first, POM instinct).
- **Live coding, round 2 (same prompt):** real code, but mixed class syntax into a function —
  `private readonly` + `this` inside a `test(() => {})`. Core confusion: Page Object (class,
  `this`/`readonly`) vs test (function, `const`). Strings unterminated; missing `await` on actions.
- **Live coding, round 3 (SearchPage extends BasePage):** CLEAN, compilable, correct.
  Proper inheritance (reused base `goto`/`waitUntilLoaded`), no needless constructor, scoped
  `listitem` inside the list, correct return typing, **await discipline fixed**.

## Insight for future sessions
Knowledge and instincts are genuinely senior; the *only* real gap was **execution precision
under pressure** (syntax, scope model, tracing the negative case). It improved measurably
across three rounds in one session — so the fix is reps, not teaching. He also self-corrected
my loose use of "extend" (SearchPage is-a BasePage, not a LoginPage) — solid grasp of
inheritance vs composition ("is-a" test, favour composition).

## TS/JS rapid-fire drills (3 rounds)
- **Event loop model:** ~85% right unprompted; missing piece was the asymmetry —
  *drain ALL microtasks, take ONE macrotask, repeat*. Once given, applied it perfectly.
- **Async ordering: MASTERED across the session.** Started by inverting serial/parallel
  (await-in-loop) and getting sync-until-first-await wrong (`0,1,3,2`). By round 3 got two
  consecutive two-await ordering puzzles perfect. The rule that unlocked it: *an async fn
  runs synchronously up to its first await; only code after await is a microtask.* Reflexive now.
- **Reference semantics: solid.** Shallow-copy trap (`{...u}` shares nested `roles` array)
  bit him round 2, spotted cold round 3. `===` on objects, mutation-through-reference all correct.
- **NEW weak area = TypeScript's type system (memorization, not reasoning):**
  - Generics: doesn't know the `function f<T, K extends keyof T>(o: T, k: K): T[K]` pattern. Teach cold.
  - Utility types: only knew `Partial`. Needs `Pick`/`Omit`/`Record` as one-liners.
  - `??` vs `||`: had a misconception ("?? = optional"). Correct rule: `||` falls back on ALL
    falsy; `??` only on null/undefined. The `port: 0` example lands it.
  - Control-flow narrowing (type narrowed to the other union member after a returning guard) — new to him.
  - `unknown` needs runtime narrowing (typeof), not a union that still contains unknown.

## Pattern (holds all session)
Concepts are sound; misses are **precision under pressure** — mis-attaching a correct concept
to the specific snippet. Fix that works: force a by-hand trace before answering (his own UDPCT
step 2). Async proved this — went from wrong to reflexive in one session via trace-first.

## Still to drill if time
- TS type-system flashcards: generics+keyof, utility types, `??` vs `||`, narrowing. (Highest priority — softest area.)
- Volunteer concrete examples after every definition (theory round habit).
- Playwright: network mocking (`page.route`), fixtures. EP+BVA verbal case-design drill.
