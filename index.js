function lastFrame(scoreArr, shotNumber) {
  const result = {
    score: 0,
    shots: 0,
  };
  if (scoreArr[shotNumber] === 10) {
    result.score += 10 + scoreArr[shotNumber + 1] + scoreArr[shotNumber + 2];
    result.shots = 1;
  } else if (scoreArr[shotNumber] + scoreArr[shotNumber + 1] === 10) {
    result.score += 10 + scoreArr[shotNumber + 2];
    result.shots = 2;
  } else {
    result.score += scoreArr[shotNumber] + scoreArr[shotNumber + 1];
    result.shots = 2;
  }
  return result;
}


function frameScoreCalc(scoreArr, shotNumber, frameNumber) {
  let max = 2;
  let result = {
    score: 0,
    shots: 0,
  };
  if (frameNumber === 10) {
    result = lastFrame(scoreArr, shotNumber);
  } else {
    for (let i = shotNumber; i < shotNumber + max; i += 1) {
      result.score += scoreArr[i];
      if ((result.score === 10) && (i === shotNumber) && (result.shots === 0)) {
        max += 1;
        result.shots = 1;
      } else if ((i === shotNumber + 1) && (result.shots === 0)) {
        result.shots = 2;
        if (result.score === 10) {
          max += 1;
        }
      }
    }
  }

  // console.log(frameNumber, result.score);
  return result;
}


function scoreCalc(scoreArr) {
  let frameNumber = 1;
  let score = 0;
  for (let i = 0; i < scoreArr.length && frameNumber <= 10; i += 1) {
    const frame = frameScoreCalc(scoreArr, i, frameNumber);
    frameNumber += 1;
    score += frame.score;

    if (frame.shots === 2) {
      i += 1;
    }
  }
  return score;
}


module.exports = scoreCalc;
