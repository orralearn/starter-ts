// Pure functions: they take values and return a value. No page, no console.
// These two are examples: replace them with your project's own functions.

// Example table: 50 up to 5000, 150 up to 25000,
// 400 up to 100000, then 1% (rounded up).
export function transferFee(amount: number): number {
  if (amount <= 5000) {
    return 50;
  }
  if (amount <= 25000) {
    return 150;
  }
  if (amount <= 100000) {
    return 400;
  }
  return Math.ceil(amount / 100);
}

export type Mention = "Fail" | "Pass" | "Good" | "Very good";

export function mention(mark: number): Mention {
  if (mark < 10) {
    return "Fail";
  }
  if (mark < 12) {
    return "Pass";
  }
  if (mark < 16) {
    return "Good";
  }
  return "Very good";
}
