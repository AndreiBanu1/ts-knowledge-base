# Valid Anagram: snippet-first was silently wrong, derivation-first was correct

Andrei first solved Valid Anagram with a snippet (`Set` + `sort` + `JSON.stringify`) that
passed NeetCode but was silently wrong on `"aab"/"abb"` — a Set discards the duplicate
counts the problem is actually about. When pushed to run UDPCT and derive from a hand-trace,
he built the correct `O(n)` letter-tally (Map<string,number> per string, compared key by key).

Debug arc across iterations, each fixed from a trace: `Map<number>`+`Number(s[i])` → NaN keys
(should be `Map<string>`, count chars); copy-paste bug reading `s[i]` in the `t` loop; missing
comparison/return; and finally `countMapS === countMapT` returning false because `===` compares
object *reference*, not contents. That last one connected back: his original `JSON.stringify`
was an unconscious workaround for not knowing objects compare by reference.

Evidence: first *cold* problem beyond RLE — transfer of the method is demonstrated. Key
insights now owned: (1) reaching for a snippet hides bugs you can't see because you don't know
what it checks; (2) reference vs value equality for objects/Maps/arrays. Soft spot persists:
he defaults to snippet-first on a new problem and needs prompting to do step #2 (trace by hand)
before coding. Next: keep going cold; watch whether he initiates the hand-trace unprompted.
See [[MISSION.md]] and [[0002-derived-rle-decompression-unaided]].
