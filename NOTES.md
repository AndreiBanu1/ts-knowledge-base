# Teaching notes — Andrei

## Preferences
- Learns through his own repo (`ts-knowledge-base`), TypeScript/JS.
- Already fluent in syntax — do NOT explain language basics.
- Short, hands-on lessons tied to code he's actually writing.

## Working approach
- Core method being taught: **UDPCT** (Understand · Do-by-hand · Pattern · Code · Test).
  This is the glossary term / shared vocabulary — reuse it in every lesson.
- Emphasise step **D (do it by hand)** relentlessly — that's the step his snippet habit skips.
- When he submits an exercise, review it for *whether he derived it* (comments showing
  hand-trace + plain-English steps BEFORE code), not just whether it runs.

## Progress
- ✅ Lesson 1 exercise DONE: derived RLE decompression unaided via UDPCT, found+fixed both
  bugs himself from a hand-trace. See learning-records/0002. First independent derivation.
- Observed weak spot: step 5 (Test) stays thin — he leaves it empty and bugs slip through.
  Keep forcing hand-traces of the smallest input, and push multi-digit-count edge cases.

- ✅ Valid Anagram (NeetCode) — first COLD problem. Snippet version was silently wrong;
  derived correct O(n) tally via UDPCT. See learning-records/0003. Method transfers.
- Recurring soft spot: defaults to snippet-first on new problems; needs a nudge to run
  step #2 (hand-trace) before coding. Watch whether he starts the trace unprompted.

## Two reusable ideas he now owns (reference in future lessons)
- **Tokenizing**: loop while char has a property (e.g. is-digit), folding into an accumulator
  (`n = n*10 + digit`). Variable-width read → use `while` and own the index yourself.
- **Reference vs value equality**: `===` on objects/Maps/arrays = same box, not same contents.
  To compare contents, walk one and check the other key by key.

## Open threads
- Next: keep going cold on unfamiliar problems (his idea to bring NeetCode problems works well).
