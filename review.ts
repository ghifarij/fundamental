const obj: { [x: string]: number } = {
  a: 1,
  b: 2,
  c: 3,
};

obj.a += 1;

const str: string = "a";

console.log(obj[str]);
