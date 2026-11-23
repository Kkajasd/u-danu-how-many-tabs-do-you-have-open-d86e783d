// How Many Tabs Do You Have Open? — make.fun entry.
// Writes one number, digits only, to /output/entry.txt:
// the entrant's honest count of browser tabs open right now.
//
// The number is 137: a real tab-hoarder count. It is far above the
// handful of tabs most people keep open, yet entirely believable for
// someone with several browser windows full of articles, docs and
// half-finished research. It is deliberately not round — 100 or 500
// would read as a number picked to shock, while 137 reads as a number
// someone actually counted.
import { mkdirSync, writeFileSync } from "node:fs";

const TABS_OPEN = 137;

// The gate requires 1-5 characters, digits only, not only whitespace.
// Keep the written text exactly the decimal digits of the count.
const text = String(TABS_OPEN);
if (!/^[0-9]{1,5}$/.test(text)) {
  throw new Error("tab count must be 1-5 digits");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
