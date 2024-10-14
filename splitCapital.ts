/*
    input = "helloWorld"
    output = ["hello", "World"]

    input = "johnDoeMiller"
    output = ["john", "Doe", "Miller"]
*/

function split(str: string) {
  str.split("");
  const res: string[] = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[A-Z]/)) {
      const missing: string = str[i];
      res.push(" ");
      res.push(missing);
    } else {
      res.push(str[i]);
    }
  }
  return res.join("").trim();
}

console.log(split("helloWorld"));
console.log(split("johnDoeMiller"));

function myFunction(str: string) {
  return str
    .split("")
    .map((item) => (item == item.toUpperCase() ? ` ${item}` : item))
    .join("")
    .trim();
}

console.log(myFunction("SelamatDatangDiPurwadhika"));
