import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const lock = JSON.parse(readFileSync(path.join(root, "package-lock.json"), "utf8"));
const packages = lock.packages ?? {};

const MINIMUMS = {
  next: "16.4.1",
  sharp: "0.35.5",
};

function compare(left, right) {
  const a = left.split(".").map(Number);
  const b = right.split(".").map(Number);
  for (let i = 0; i < 3; i += 1) {
    const diff = (a[i] || 0) - (b[i] || 0);
    if (diff !== 0) return diff;
  }
  return 0;
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

const nextPkg = packages["node_modules/next"];
if (!nextPkg?.version) fail("package-lock.json is missing node_modules/next");
if (compare(nextPkg.version, MINIMUMS.next) < 0) {
  fail(`locked next@${nextPkg.version} is below ${MINIMUMS.next}`);
}

const sharpEntries = Object.entries(packages).filter(
  ([name]) => name === "node_modules/sharp" || name.endsWith("/node_modules/sharp"),
);
if (sharpEntries.length === 0) fail("package-lock.json does not lock sharp");

for (const [name, pkg] of sharpEntries) {
  if (!pkg.version || compare(pkg.version, MINIMUMS.sharp) < 0) {
    fail(`${name}@${pkg.version ?? "unknown"} is below ${MINIMUMS.sharp}`);
  }
}

const sharpVersions = sharpEntries.map(([, pkg]) => pkg.version).join(", ");
console.log(`ok next@${nextPkg.version} sharp@${sharpVersions}`);
