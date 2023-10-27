import {setting} from './setting.js';

fetch('./list-of-nba-champions.json')
.then(response => response.text())
.then(json => {
  const groupedEChamp = Object.entries(
    JSON.parse(json).reduce((acc, { year, western_champion, western_coach, result, eastern_champion, eastern_coach, finals_mvp }) => {
      if (!acc[eastern_champion]) {
        acc[eastern_champion] = [];
      }
      acc[eastern_champion].push({ year, western_champion, western_coach, result, eastern_coach, finals_mvp });

      return acc;
    }, {})
  )
  .map(([team, list]) => ({ team, list, number_of_wins: list.length }))
  .sort((first, second) => {
    return second.number_of_wins - first.number_of_wins;
  });

  setting.log.method.title.call(setting, 'List of NBA champions🏀');

  console.table('groupedEChamp is as follows');
  console.table(groupedEChamp);

  const ojbEChamp = JSON.parse(json).reduce((acc, { year, western_champion, western_coach, result, eastern_champion, eastern_coach, finals_mvp }) => {
    if (!acc[eastern_champion]) {
      acc[eastern_champion] = [];
    }
    acc[eastern_champion].push({ year, western_champion, western_coach, result, eastern_coach, finals_mvp });

    return acc;
  }, {});

  console.log('ojbEChamp is ', ojbEChamp)
  console.log('Object.entries(ojbEChamp) is ', Object.entries(ojbEChamp))

  const groupedEChampStepByStep = Object.entries(ojbEChamp)
  .map(([team, list]) => {
    return { team, list, number_of_wins: list.length };
  })
  .sort((first, second) => {
    return second.number_of_wins - first.number_of_wins;
  });

  console.log('groupedEChampStepByStep is ', groupedEChampStepByStep);
  console.log(`JSON.stringify(groupedEChamp) === JSON.stringify(groupedEChampStepByStep) is %c${JSON.stringify(groupedEChamp) === JSON.stringify(groupedEChampStepByStep)}`, 'font-size: 1.5rem;')
})
.catch((error) => {
  setting.log.method.postpone.call(setting, error);
});