const tabletojson = require('tabletojson').Tabletojson;
const fs = require('fs');

tabletojson.convertUrl(
  'https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/',
  function(tables) {
    const output = tables.reduce((acc, table) => {
      return [
        ...acc,
        table
      ]
    }, []);
    fs.writeFileSync('table.json', JSON.stringify(output, null, 2));
  }
);