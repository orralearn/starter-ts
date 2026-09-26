// Your tests. Run them with: node tests.ts
import { mention, transferFee } from "./src/logic.ts";
import { test } from "./src/test.ts";

test("5000", transferFee(5000), 50);
test("5001", transferFee(5001), 150);
test("mention 9.99", mention(9.99), "Fail");
test("mention 10", mention(10), "Pass");
