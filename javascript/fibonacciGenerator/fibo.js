function fibonacciGenerator(n) {
  let output = [];
  let plus1 = 1;
  let minus1 = -1;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum = plus1 + minus1;
    output.push(sum);
    minus1 = plus1;
    plus1 = sum;
  }
  document.writeln(output);
}
fibonacciGenerator(11);
