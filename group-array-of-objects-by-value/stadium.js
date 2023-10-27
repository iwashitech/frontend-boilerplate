import {setting} from './setting.js';

fetch('./list-of-mlb-stadiums.json')
.then(response => response.text())
.then(json => {
  setting.log.method.title.call(setting, 'List of MLB stadiums⚾');

  // オブジェクトの配列をオブジェクトに変換
  const objStadiumByAge = JSON.parse(json).reduce((acc, {name, arena, location, capacity, year}) => {
    const age = `${Math.floor(year / 10) * 10}s`;
    const capacityInThousands = Math.floor(capacity / 1000) * 1000;
    if (!acc[age]) {
      acc[age] = [];
    }

    // acc[age].push({name, arena, location, capacity, capacityInThousands, year});

    acc[age] = [
      ...acc[age],
      {name, arena, location, capacity, capacityInThousands, year}
    ];

    return acc;
  }, {});

  // オブジェクトを配列（[プロパティ名, 値]）の配列に変換
  const aryStadiumByAgeEntries = Object.entries(objStadiumByAge);

  // 配列（[プロパティ名, 値]）の配列をオブジェクトの配列に変換
  const aryStadiumByAge = aryStadiumByAgeEntries.map(([age, list]) => {
    return { age, list, number_of_teams: list.length };
  })

  // 年代順で並び替え
  const aryStadiumByAgeSorted = aryStadiumByAge.sort((first, second) => {
    return first.age > second.age ? 1 : -1;
  });

  console.log('objStadiumByAge is ', objStadiumByAge);
  console.log('aryStadiumByAgeEntries is ', aryStadiumByAgeEntries);
  console.log('aryStadiumByAge is ', aryStadiumByAge);
  console.log('aryStadiumByAgeSorted is ', aryStadiumByAgeSorted);
})
.catch((error) => {
  setting.log.method.postpone.call(setting, error);
});