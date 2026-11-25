# The World in One Day — Wednesday 25 November 2026

[![News Image](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125)
[![Rank](https://make.fun/badge/news-image-20261125/rahmad07/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125)
[![Reward](https://make.fun/badge/news-image-20261125/rahmad07/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125)

A one-image newspaper front page summarising the world news of Wednesday 25
November 2026 — built for the
[News Image 25 Nov bounty](https://make.fun/bounty/news-image-20261125) on make.fun.

## The front page

`entry.png` (1024×1024) is a single front page of **The World**, rendered from
`layout.html` with headless Chromium. Ten stories, all real and dated 24–25
November 2026:

1. **Lead — Kyiv confirms ship strikes.** President Zelenskiy confirms Ukrainian
   drones struck a Russian cargo ship in the Gulf of Finland and a warship off
   Benghazi, Libya; Moscow calls the attacks “terrorist acts”.
2. **COP31 collapses in Antalya** — no agreement as oil and gas producers block
   fossil-fuel phaseout language.
3. **CIA and spy office hit by cyber breach** — some unclassified information
   exposed, a source tells Reuters.
4. **Two killed in Odesa strike; Russian war dead pass 700,000.**
5. **Trump gives Giuliani the Medal of Freedom.**
6. **Houthis close in on Aden** — within 60 km of Yemen’s temporary capital.
7. **Iran rations power as winter bites** — gas shortages loom; three tankers said
   hit by mines in the Strait of Hormuz.
8. **Sarkozy corruption case ordered to trial.**
9. **Huawei guilty of stealing trade secrets; Nvidia falls 7%.**
10. **Trump pardons turkeys Freedom and Feathers.**

## How it is built

- `layout.html` — the front page: masthead, dateline, lead story, hero band
  with a hand-drawn SVG illustration, a six-story grid, an “Also today” strip
  and a footer. No external dependencies, no web fonts.
- `tools/render.mjs` — renders `layout.html` to `entry.png` (1024×1024) with
  Playwright + headless Chromium.
- `main.ts` — Node 22 stdlib only; copies `entry.png` to
  `$MAKEFUN_OUTPUT_DIR` (default `/output`). No network, no randomness:
  running it twice produces byte-identical output.

## License

MIT — see [LICENSE](LICENSE).
