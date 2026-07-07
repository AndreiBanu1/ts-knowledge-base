# Derived RLE decompression from scratch, unaided

Andrei solved the RLE decompression exercise using the full UDPCT method without
snippets or hints. He wrote all five steps, traced by hand, and when prompted with a
hand-trace of `"a4"` he independently found and fixed both bugs: missing `j++`
(infinite loop) and off-by-one (`<=` → `<`, so the inner loop runs `count` times).

Then extended it to multi-digit counts (`a14b3c3`, `a12b2c5d54`) across ~5 debug cycles,
each time fixing exactly the bug a hand-trace exposed: infinite loop (missing `j++`),
off-by-one (`<=`→`<`), fixed-rhythm `for` → `while` with self-owned `i`, `str[i+1]`→`str[i]`,
and hoisting `count=0` inside the loop. He rejected the regex shortcut when nudged and
correctly diagnosed that a variable-width count needs a variable-step index.

Evidence: sustained independent derivation + debugging via trace, not snippets. The
mission's core skill is now demonstrated repeatedly, including recovery from his own bugs.
Key growth: step 5 (Test) went from empty to catching real bugs. Remaining soft spot —
he tends to add `+1`/offset patches before trusting his own `i++`; watch for that.
Next: apply UDPCT *cold* to an unfamiliar problem to prove transfer beyond RLE. See [[MISSION.md]].
