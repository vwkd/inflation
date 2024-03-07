/**
 * Yearly inflation rate in Germany in percent
 *
 * - from 1958 until 1962 using "Preisindex für die Lebenshaltung aller 2-Personen-Rentner-Haushalte mit geringem Einkommen im früheren Bundesgebiet" from [Destatis - Statistischer Bericht - Verbraucherpreisindex für Deutschland - Lange Reihen ab 1948 - Januar 2024](https://www.destatis.de/DE/Themen/Wirtschaft/Preise/Verbraucherpreisindex/Publikationen/Downloads-Verbraucherpreise/statistischer-bericht-verbraucherpreisindex-lange-reihen-5611103241015.html)
 * - from 1963 until 1991 using "Preisindex für die Lebenshaltung aller privaten Haushalte im früheren Bundesgebiet" from [Destatis - Statistischer Bericht - Verbraucherpreisindex für Deutschland - Lange Reihen ab 1948 - Januar 2024](https://www.destatis.de/DE/Themen/Wirtschaft/Preise/Verbraucherpreisindex/Publikationen/Downloads-Verbraucherpreise/statistischer-bericht-verbraucherpreisindex-lange-reihen-5611103241015.html)
 * - from 1992 using "Verbraucherpreisindex für Deutschland" from [Destatis - Tabelle 61111-0001: Verbraucherpreisindex: Deutschland, Jahre](https://www-genesis.destatis.de/genesis//online?operation=table&code=61111-0001&bypass=true&levelindex=0&levelid=1708435341978#abreadcrumb)
 */
export const inflationRates = {
  // Preisindex für die Lebenshaltung aller 2-Personen-Rentner-Haushalte mit geringem Einkommen im früheren Bundesgebiet
  1958: 2.1,
  1959: 1.0,
  1960: 1.3,
  1961: 2.7,
  1962: 3.2,
  // Preisindex für die Lebenshaltung aller privaten Haushalte im früheren Bundesgebiet
  1963: 3,
  1964: 2.4,
  1965: 3.2,
  1966: 3.3,
  1967: 1.9,
  1968: 1.6,
  1969: 1.8,
  1970: 3.6,
  1971: 5.2,
  1972: 5.4,
  1973: 7.1,
  1974: 6.9,
  1975: 6,
  1976: 4.2,
  1977: 3.7,
  1978: 2.7,
  1979: 4.1,
  1980: 5.4,
  1981: 6.3,
  1982: 5.2,
  1983: 3.2,
  1984: 2.5,
  1985: 2,
  1986: -0.1,
  1987: 0.2,
  1988: 1.2,
  1989: 2.8,
  1990: 2.6,
  1991: 3.7,
  // Verbraucherpreisindex für Deutschland
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
