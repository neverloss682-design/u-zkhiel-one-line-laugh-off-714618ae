import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I asked my manager for one day off and HR sent a calendar invite for my own funeral, attended by 14 agents, a printer, and my replacement, who is also me.";

// One line, 154 chars: bureaucratic escalation (day off -> funeral invite),
// concrete twist (printer attends, replacement is also me), specific number (14).

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
