const fs = require('fs');

const crunchDepths = ({ measures = [], windowSize = 3 } = { measures: [], windowSize: 3 }) => {
  if (!windowSize || windowSize > Number.MAX_SAFE_INTEGER || windowSize < Number.MIN_SAFE_INTEGER) {
    throw RangeError('windowSize value must be a valid integer.');
  }

  if (windowSize < 2) {
    return measures;
  }

  const crunchedMeasures = [];
  for(let i = 0; i < measures.length; i += 1) {
    const windowedMeasure = measures.slice(i, i + windowSize).reduce((acc, v) => acc + v, 0);

    crunchedMeasures.push(windowedMeasure);
  }

  return crunchedMeasures;
}

const findIncreases = (depths = []) => {
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

  const stream = fs.createReadStream(process.argv[2], 'utf8');
  stream.on('data', data => {
    const depths = data.split('\n').map(v => parseInt(v, 10));
    console.log(`Part#1 - ${findIncreases(depths)}`);

    const crunchedDepths = crunchDepths({ measures: depths, windowSize: 3 });
    console.log(`Part#2 - ${findIncreases(crunchedDepths)}`);
  });
} catch (e) {
  console.error(e);
}
