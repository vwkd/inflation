/**
 * Yearly inflation rate in Germany in percent
 *
 * - until 1991 using [Privatschule Eberhard - Preisindex für Lebenshaltung seit 1881](https://web.archive.org/web/20160311213037/http://privatschule-eberhard.de/index.php/wissenswertes/8-preissteigerungsraten)
 * - note: i-th value computed from index with $i/(i-1)$, from column "1881 = 100" since more precision than column "2005 = 100"
 * - note: data possibly not very accurate, up to 1% difference to VPI in overlapping region
 * - from 1992 using [Destatis - Tabelle 61111-0001: Verbraucherpreisindex: Deutschland, Jahre](https://www-genesis.destatis.de/genesis//online?operation=table&code=61111-0001&bypass=true&levelindex=0&levelid=1708435341978#abreadcrumb)
 */
export const inflationRates = {
  // Privatschule Eberhard
  1958: 1.9,
  1959: 1.1,
  1960: 1.5,
  1961: 2.2,
  1962: 2.9,
  1963: 3.1,
  1964: 2.4,
  1965: 3.0,
  1966: 3.8,
  1967: 1.6,
  1968: 1.5,
  1969: 2.1,
  1970: 3.2,
  1971: 5.4,
  1972: 5.4,
  1973: 7.1,
  1974: 6.9,
  1975: 5.8,
  1976: 4.4,
  1977: 3.6,
  1978: 2.7,
  1979: 4.0,
  1980: 5.5,
  1981: 6.4,
  1982: 5.2,
  1983: 3.2,
  1984: 2.4,
  1985: 2.2,
  1986: -0.1,
  1987: 0.3,
  1988: 1.1,
  1989: 2.8,
  1990: 2.8,
  1991: 3.6,
  // Verbraucherpreisindex
  1992: 5.0,
  1993: 4.5,
  1994: 2.7,
  1995: 1.9,
  1996: 1.4,
  1997: 1.9,
  1998: 0.8,
  1999: 0.7,
  2000: 1.3,
  2001: 2.0,
  2002: 1.4,
  2003: 1.0,
  2004: 1.6,
  2005: 1.6,
  2006: 1.6,
  2007: 2.3,
  2008: 2.6,
  2009: 0.3,
  2010: 1.0,
  2011: 2.2,
  2012: 1.9,
  2013: 1.5,
  2014: 1.0,
  2015: 0.5,
  2016: 0.5,
  2017: 1.5,
  2018: 1.8,
  2019: 1.4,
  2020: 0.5,
  2021: 3.1,
  2022: 6.9,
  2023: 5.9,
};

/**
 * Yearly currency replacements in Germany
 */
export const currencyReplacements = {
  // Umrechnung von DM in Euro
  // Quelle: https://de.wikipedia.org/wiki/Deutsche_Mark#Die_Deutsche_Mark_nach_der_Einführung_des_Euro
  2002: 1 / 1.95583,
};
