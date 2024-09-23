function isPrime(number) {
  if (number < 2) return false;
  if (number < 4) return true;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) return false;
  }

  return true;
}

let num = +prompt("Enter a number:");

if (isPrime(num)) alert("This is a prime number!");
else alert("This is NOT a prime number");
