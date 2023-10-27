import {log} from './log.js';

fetch('./olympic-games-from-2016-to-2022.json')
.then(response => response.text())
.then(json => {
  const aryOjb = JSON.parse(json);

  const objFromAryOjb = aryOjb.reduce((acc, {City, Country, Year}) => {
    if (!acc[Country]) {
      acc[Country] = [];
    }
    acc[Country] = [
      ...acc[Country],
      {
        City,
        Year
      }
    ];
    return acc;
  }, {});

  const aryEntriesFromObjFromAryOjb = Object.entries(objFromAryOjb);

  const aryObjFromAryEntriesFromObjFromAryOjb = aryEntriesFromObjFromAryOjb.map(([country, cityAndYear]) => {
    return {
      country,
      cityAndYear
    };
  });

  const re_aryEntriesFromObjFromAryOjb = aryObjFromAryEntriesFromObjFromAryOjb.map((item) => Object.values(item))

  const re_objFromAryOjb = Object.fromEntries(re_aryEntriesFromObjFromAryOjb);

  const re_aryOjb = Object.entries(re_objFromAryOjb).map(([Country, [{City, Year}]]) => {
    return {
      City,
      Country,
      Year
    }
  });

  log({
      aryOjb,
      objFromAryOjb,
      aryEntriesFromObjFromAryOjb,
      aryObjFromAryEntriesFromObjFromAryOjb,
      re_aryEntriesFromObjFromAryOjb,
      re_objFromAryOjb,
      re_aryOjb
  });
});