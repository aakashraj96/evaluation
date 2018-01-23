function frameScoreCalc(scoreArr, shotNumber, frameNumber) {
  let max = 1;
  const result = {
    score: 0,
    shots: 0,
  };
  for (let i = shotNumber; i < shotNumber + max; i += 1) {
    result.score += scoreArr[i];
    if ((result.score === 10) && (i === shotNumber)) {
      max += 2;
      result.shots = 1;
    } else if (i === shotNumber + 1) {
      result.shots = 2;
      if (result.score === 10) {
        max += 1;
      }
    }
  }
  return result;
}


function scoreCalc(scoreArr) {
  let frameNumber = 1;
  let score = 0;
  for (let i = 0; i < scoreArr.length; i += 1) {
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
