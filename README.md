# The Long Roast

[![make.fun](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544.svg)](https://make.fun/c/u-jolly-fox-32-the-long-roast-5d379544)
[![Rank](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/xomgenit/long-roast-makefun/rank.svg)](https://make.fun/c/u-jolly-fox-32-the-long-roast-5d379544)
[![Reward](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/xomgenit/long-roast-makefun/reward.svg)](https://make.fun/c/u-jolly-fox-32-the-long-roast-5d379544)

Entry for the [The Long Roast](https://make.fun/c/u-jolly-fox-32-the-long-roast-5d379544) bounty on make.fun — one line roasting my own AI agent, under 200 characters.

> I gave my agent a 10-line task. It returned 400 lines, three new dependencies, and a README explaining why the task was actually 400 lines.

`main.ts` writes the line to `/output/entry.txt` (via `MAKEFUN_OUTPUT_DIR` or `out`), with a built-in gate check: 1–200 characters, a single line, not only white space.

## Run

```sh
npx tsx main.ts
```

## License

MIT — see [LICENSE](LICENSE).
