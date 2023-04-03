let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

//definisikan function “inputOperator”
const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "";
};

// tambah angka pada tampilan kaltulator
const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (numbers) => {
  calculatorScreen.value = numbers;
};

// konfigurasi operator
const operators = document.querySelectorAll(".operator");

//operasi
const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      return;
  }
  currentNumber = result;
  calculationOperator = "";
};

// konfigurasi angka
const numbers = document.querySelectorAll(".number");

// function “calculate” dan jalanka saat tombol sama-dengan = di klik.
const equalSign = document.querySelector(".equal-sign");

// Jalankan Function Calculate saat tombol sama-dengna = di Klik, dan perbarui layarnya
equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

// konfigurasi angka
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

// konfigurasi operator
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

//input decimal
inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

//“decimal” class dan tambahkan click event ke element tersebut
const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

equalSign.addEventListener("click", () => {
  console.log("please click AC button for new operation");
});

//clear btn angka 0
const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

//clear btn
const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});
