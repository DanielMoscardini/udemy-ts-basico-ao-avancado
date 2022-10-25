/*
1. Typeof type guard.

function sum(a: number | string, b: number | string) {
  if (typeof a === "string" && typeof b === "string") {
    console.log(parseFloat(a) + parseFloat(b));
  } else if (typeof a === "number" && typeof b === "number") {
    console.log(a + b);
  } else {
    console.log("Impossivel realizar a soma!");
  }
}

sum(1, 4); // 5
sum('1', '4'); // 5
sum(1, '4'); // Impossivel realizar a soma!
*/
