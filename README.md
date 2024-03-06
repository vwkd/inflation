# README

Inflation calculator



## Features

- convert amount across years
- support both directions, old to new or new to old
- support currency replacements
- has built-in data sets



## Usage

```ts
import { Inflation } from "@vwkd/inflation";
import { currencyReplacements, inflationRates } from "@vwkd/inflation/de";

const inflationDe = new Inflation(inflationRates, currencyReplacements);

const nominalAmount = 100;
const fromYear = 1999;
const toYear = 2023;
const realAmount = inflationDe.adjust(nominalAmount, fromYear, toYear);

console.log(realAmount); // 79.96
```
