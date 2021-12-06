const fs = require('fs');

try {
  if (process.argv.length < 3) {
    throw Error('Please provide an input file as argument');
  }

  const stream = fs.createReadStream(process.argv[2], 'utf8');
  stream.on('data', data => {
    const travels = data.split('\n');

    const result = travels.reduce((acc, travel) => {
      const [direction, amount] = travel.split(' ');

      acc[direction] += parseInt(amount, 10);

      return acc;
    }, { forward: 0, up: 0, down: 0 });

    const x = result['forward'];
    const y = result['down'] - result['up'];

    console.log({ result: x * y })
  });
} catch (e) {
  console.error(e);
}
