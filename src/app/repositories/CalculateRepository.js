const _ = require("lodash");

exports.findHiddenNumber = function (str) {
  if (!validateStr(str)) {
    return [];
  }

  const arr = str.replace(/ /g, "").split(",");

  // Find step
  let step;
  for (let n = 0; n < arr.length - 1; n++) {
    const tn = parseInt(arr[n]);
    const tnp1 = parseInt(arr[n + 1]);
    if (isNaN(tn) || isNaN(tnp1) || tn === tnp1) continue;

    step = (tnp1 - tn) / n;
    break;
  }

  if (step === undefined) {
    return [];
  }

  let result = _.sortBy(
    recurrFindingHiddenNumber(arr, step, -1, []),
    (a) => a.name
  );

  return result;
};

exports.findBnC = function (A, result1, result2) {
  return [
    { name: "B", value: result1 - A },
    { name: "C", value: result2 - A },
  ];
};

function recurrFindingHiddenNumber(arr, step, remain_not_number, result) {
  if (remain_not_number === 0) {
    return result;
  }

  let remain = 0;
  for (let n = 0; n < arr.length; n++) {
    // As number.
    if (!isNaN(parseInt(arr[n]))) continue;

    // Tn, Tn-1, Tn+1
    // Get the element, right and left of element
    let tn = arr[n];
    const tnm1 = n === 0 ? undefined : parseInt(arr[n - 1]);
    const tnp1 = n === arr.length - 1 ? undefined : parseInt(arr[n + 1]);

    // Check right
    if (tnp1 !== undefined && !isNaN(tnp1)) {
      tn = tnp1 - step * n;
    } // Check left
    else if (tnm1 !== undefined && !isNaN(tnm1)) {
      tn = tnm1 + step * (n - 1);
    }

    // Not number
    if (isNaN(parseInt(tn))) {
      remain += 1;
    } // As Number
    else {
      result.push({ name: arr[n], value: tn });
    }

    arr[n] = tn;
  }

  return recurrFindingHiddenNumber(arr, step, remain, result);
}

function validateStr(str) {
  const regex = /^[A-Za-z0-9, ]+$/;
  return !!str.match(regex);
}
