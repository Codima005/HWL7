do {
  ArraySize = prompt(`Enter arrow size (>=2/<=10)`);
} while (isNaN(ArraySize) || ArraySize < 2 || ArraySize > 10);

NumbersArr = [];

NumbersArr.length = `${ArraySize}`;

NumArrHalf = Math.ceil(ArraySize / 2);

for (i = 0, min = -10, max = 10; i < ArraySize; i++) {
  if (i < NumArrHalf) {
    NumbersArr[i] = Math.floor(Math.random() * (max - min + 1) + min);
  } else {
    NumbersArr[i] = prompt(`Enter value ${i + 1}`);
  }
}

FinalSum = 0;

for (i = 0; i < NumbersArr.length; i++) {
  if (!isNaN(+NumbersArr[i])) {
    FinalSum += +NumbersArr[i];
  }
}

console.log(FinalSum);

console.log(NumbersArr);
