import { Inflation } from "../src/main.ts";
import { assertEquals, assertThrows } from "@std/assert";

const inflation = new Inflation("DE");
const minYear = inflation.minYear;
const maxYear = inflation.maxYear;

Deno.test("same year", () => {
  const nominalAmount = 100;
  const realAmount = inflation.adjust(nominalAmount, 2001, 2001);

  assertEquals(realAmount, 100);
});

Deno.test("same year, with currency replacement", () => {
  const nominalAmount = 100;
  const realAmount = inflation.adjust(nominalAmount, 2002, 2002);

  assertEquals(realAmount, 100);
});

Deno.test("old to new, one year", () => {
  const nominalAmount = 100;
  const realAmount = inflation.adjust(nominalAmount, 2003, 2004);

  assertEquals(realAmount, 101.6);
});

Deno.test("old to new, two years", () => {
  const nominalAmount = 100;
  const realAmount = inflation.adjust(nominalAmount, 2003, 2005);

  assertEquals(realAmount, 103.2256);
});

Deno.test("old to new, one year, with currency replacement", () => {
  const nominalAmount = 100;
  const realAmount = inflation.adjust(nominalAmount, 2001, 2002);

  assertEquals(realAmount, 51.844996753296556);
});

Deno.test("old to new, two years, with currency replacement", () => {
  const nominalAmount = 100;
  const realAmount = inflation.adjust(nominalAmount, 2001, 2003);

  assertEquals(realAmount, 52.36344672082952);
});

Deno.test("old to new, oldest", () => {
  const nominalAmount = 100;
  const realAmount = inflation.adjust(nominalAmount, 1998, 2001);

  assertEquals(realAmount, 104.04928199999999);
});

Deno.test("old to new, newest", () => {
  const nominalAmount = 100;
  const realAmount = inflation.adjust(nominalAmount, 2004, 2006);

  assertEquals(realAmount, 103.2256);
});

Deno.test("old to new, too old", () => {
  const nominalAmount = 100;
  const year = minYear - 3;

  assertThrows(
    () => {
      const realAmount = inflation.adjust(nominalAmount, year, 2003);
    },
    Error,
    `From year '${year}' must be greater than or equal to minimum year '1957'.`,
  );
});

Deno.test("old to new, too new", () => {
  const nominalAmount = 100;
  const year = maxYear + 3;

  assertThrows(
    () => {
      const realAmount = inflation.adjust(nominalAmount, 2004, year);
    },
    Error,
    `To year '${year}' must be less than or equal to maximum year '2023'.`,
  );
});

Deno.test("new to old, one year", () => {
  const nominalAmount = 101.6;
  const realAmount = inflation.adjust(nominalAmount, 2004, 2003);

  assertEquals(realAmount, 100);
});

Deno.test("new to old, two years", () => {
  const nominalAmount = 103.2256;
  const realAmount = inflation.adjust(nominalAmount, 2005, 2003);

  assertEquals(realAmount, 100);
});

Deno.test("new to old, one year, with currency replacement", () => {
  const nominalAmount = 51.844996753296556;
  const realAmount = inflation.adjust(nominalAmount, 2002, 2001);

  assertEquals(realAmount, 100);
});

Deno.test("new to old, two years, with currency replacement", () => {
  const nominalAmount = 52.36344672082952;
  const realAmount = inflation.adjust(nominalAmount, 2003, 2001);

  assertEquals(realAmount, 100);
});

Deno.test("new to old, oldest", () => {
  const nominalAmount = 104.04928199999999;
  const realAmount = inflation.adjust(nominalAmount, 2001, 1998);

  assertEquals(realAmount, 100.00000000000001);
});

Deno.test("new to old, newest", () => {
  const nominalAmount = 103.2256;
  const realAmount = inflation.adjust(nominalAmount, 2006, 2004);

  assertEquals(realAmount, 100);
});

Deno.test("new to old, too old", () => {
  const nominalAmount = 100;
  const year = minYear - 3;

  assertThrows(
    () => {
      const realAmount = inflation.adjust(nominalAmount, 2003, year);
    },
    Error,
    `To year '${year}' must be greater than or equal to minimum year '1957'.`,
  );
});

Deno.test("new to old, too new", () => {
  const nominalAmount = 100;
  const year = maxYear + 3;

  assertThrows(
    () => {
      const realAmount = inflation.adjust(nominalAmount, year, 2004);
    },
    Error,
    `From year '${year}' must be less than or equal to maximum year '2023'.`,
  );
});
