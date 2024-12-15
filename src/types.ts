/**
 * Map of years to inflation rates
 *
 * - years must be consecutive
 * - rates must be in percent
 */
export type InflationRates = Record<number, number>;

/**
 * Map of years to currency replacement factors
 */
export type CurrencyReplacements = Record<number, number>;

/**
 * Wrapper for `Object.keys` with correct TypeScript types
 */
export const getKeys = <T extends object>(obj: T) =>
  Object.keys(obj) as Array<keyof T>;
