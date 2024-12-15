import {
  currencyReplacements as currencyReplacementsDe,
  inflationRates as inflationRatesDe,
} from "./data/de.ts";
import {
  type CountryCode,
  type CurrencyReplacements,
  getKeys,
  type InflationRates,
} from "./types.ts";

/**
 * Inflation calculator
 *
 * - automatically handles currency replacements
 */
export class Inflation {
  #minYear: number;
  #maxYear: number;
  #inflationRates: InflationRates;
  #currencyReplacements: CurrencyReplacements;

  /**
   * Create inflation calculator
   *
   * @param countryCode ISO 3166 alpha-2 country code
   */
  constructor(countryCode: CountryCode) {
    if (countryCode === "DE") {
      this.#inflationRates = inflationRatesDe;
      this.#currencyReplacements = currencyReplacementsDe;
    } else {
      throw new Error(`Invalid country code '${countryCode}'`);
    }

    this.#minYear = Math.min(...getKeys(this.#inflationRates)) - 1;
    this.#maxYear = Math.max(...getKeys(this.#inflationRates));
  }

  /**
   * Get minimum year
   *
   * - from inflation rates
   * @returns minimum year
   */
  get minYear(): number {
    return this.#minYear;
  }

  /**
   * Get maximum year
   *
   * - from inflation rates
   * @returns maximum year
   */
  get maxYear(): number {
    return this.#maxYear;
  }

  /**
   * Convert amount across years
   *
   * @param amount amount in from year, in currency of from year
   * @param fromYear from year, greater than or equal to minimum year, less than or equal to maximum year
   * @param toYear to year, greater than or equal to minimum year, less than or equal to maximum year
   * @returns amount in to year adjusted for inflation, in currency of to year
   */
  adjust(
    amount: number,
    fromYear: number,
    toYear: number,
  ): number {
    if (fromYear < this.#minYear) {
      throw new Error(
        `From year '${fromYear}' must be greater than or equal to minimum year '${this.#minYear}'.`,
      );
    }

    if (toYear < this.#minYear) {
      throw new Error(
        `To year '${toYear}' must be greater than or equal to minimum year '${this.#minYear}'.`,
      );
    }

    if (fromYear > this.#maxYear) {
      throw new Error(
        `From year '${fromYear}' must be less than or equal to maximum year '${this.#maxYear}'.`,
      );
    }

    if (toYear > this.#maxYear) {
      throw new Error(
        `To year '${toYear}' must be less than or equal to maximum year '${this.#maxYear}'.`,
      );
    }

    let adjustmentFactor = 1;
    if (fromYear < toYear) {
      for (let year = fromYear + 1; year <= toYear; year += 1) {
        adjustmentFactor *= 1 + this.#inflationRates[year] / 100;

        if (Object.hasOwn(this.#currencyReplacements, year)) {
          adjustmentFactor *= this.#currencyReplacements[year];
        }
      }
    } else if (fromYear > toYear) {
      for (let year = fromYear; year >= toYear + 1; year -= 1) {
        adjustmentFactor /= 1 + this.#inflationRates[year] / 100;

        if (Object.hasOwn(this.#currencyReplacements, year)) {
          adjustmentFactor /= this.#currencyReplacements[year];
        }
      }
    } else {
      // noop
    }

    return amount * adjustmentFactor;
  }
}
