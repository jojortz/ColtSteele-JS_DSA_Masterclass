const fibonacci_recursive = (n) => {
  if (n === 2 || n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibonacci_dynamic = (n) => {
  let seen = {
    1: 1,
    2: 1,
  };
  const fibonacci = (n) => {
    if (seen[n] !== undefined) return seen[n];
    seen[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return seen[n];
  }

  return fibonacci(n);
};

const fibonacci_tab = (n) => {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n]
}

console.log(fibonacci_tab(1))
console.log(fibonacci_tab(2))
console.log(fibonacci_tab(81))

module.exports = {
  fibonacci_recursive,
  fibonacci_dynamic,
  fibonacci_tab,
}