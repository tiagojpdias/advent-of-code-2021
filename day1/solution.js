const fs = require('fs');

try {
  const stream = fs.createReadStream(`${__dirname}/input.txt`, 'utf8');

  let increasedCount = 0;

  stream.on('data', data => {
    const depths = data.split('\n').map(v => parseInt(v, 10));

    depths.reduce((prev, curr) => {
      if (curr > prev) {
        increasedCount++;
      }

      return curr;
    }, depths[0]);

    console.log({ increasedCount });
  });
} catch (e) {
  console.error(e, 'input file was not accessible');
}

