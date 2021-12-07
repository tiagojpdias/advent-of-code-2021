const fs = require('fs');

const calculateTravel = ({ travels = []}) => (
  travels.reduce((acc, travel) => {
      const [direction, amount] = travel.split(' ');
      const parsedAmount = parseInt(amount, 10);

      switch (direction) {
        case 'forward': {
          acc.forward += parsedAmount;
          acc.depth += parsedAmount * acc.aim;

          break;
        }
        case 'down': {
          acc.aim += parsedAmount;

          break;
        }
        case 'up': {
          acc.aim -= parsedAmount;

          break;
        }

        default: {
          break;
        }
      }

      return acc;
    }, { forward: 0, aim: 0, depth: 0 })
);

try {
  if (process.argv.length < 3) {
    throw Error('Please provide an input file as argument');
  }

  const stream = fs.createReadStream(process.argv[2], 'utf8');
  stream.on('data', data => {
    const travels = data.split('\n');

    const { forward, aim, depth } = calculateTravel({ travels });

    console.log({ result: forward * aim })
    console.log({ aimedResult: forward * depth })
  });
} catch (e) {
  console.error(e);
}
