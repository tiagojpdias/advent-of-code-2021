const fs = require('fs');

const findIncreases = depths => {
  let increasedCount = 0;

  depths.reduce((prev, curr) => {
    if (curr > prev) {
      increasedCount++;
    }

    return curr;
  }, depths[0]);

  return increasedCount;
}

try {
  if (process.argv.length < 3) {
    throw Error('Please provide an input file as argument');
  }

  const stream = fs.createReadStream(`${process.argv[2]}`, 'utf8');
  stream.on('data', data => {
    const depths = data.split('\n').map(v => parseInt(v, 10));
    console.log(findIncreases(depths));
  });
} catch (e) {
  console.error(e);
}
