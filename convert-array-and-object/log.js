export const log = function(obj) {
  console.log(
    '%cOlympic %cG%ca%cm%ce%cs %cfrom 2016 to 2022 🌏🌎🌍🤝🏀⚽️🤾‍♂️⛹️‍♀️',
    `font-size: 1.5rem;`,
    `
      font-size: 1.5rem;
      color: #0081C8;
    `,
    `
      font-size: 1.5rem;
      color: #FCB131;
    `,
    `
      font-size: 1.5rem;
      color: #000000;
    `,
    `
      font-size: 1.5rem;
      color: #00A651;
    `,
    `
      font-size: 1.5rem;
      color: #EE334E;
    `,
    `
      font-size: 1.5rem;
    `,
  );

  function showCompareObjects(item, obj, value) {
    const aryObjectsToCompare = ['re_aryEntriesFromObjFromAryOjb', 're_objFromAryOjb', 're_aryOjb'];
    const targetObjName = aryObjectsToCompare[aryObjectsToCompare.indexOf(item)]?.replace('re_', '')
    targetObjName && console.log(`JSON.stringify(${targetObjName}) === JSON.stringify(${item}) is %c${JSON.stringify(obj[targetObjName]) === JSON.stringify(value)}`, 'font-size: 1.5rem;')
  }
  
  Object.entries(obj).forEach(([item, value]) => {
    console.log(`${item} is`,value);
    showCompareObjects(item, obj, value);
  });
};