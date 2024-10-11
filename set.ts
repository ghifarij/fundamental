const fruits: string[] = ["banana", "apple", "banana", "melon"];

const newFruits = new Set(fruits);
newFruits.add("watermelon");
newFruits.delete("banana");

newFruits.forEach((item) => {
  console.log(item);
});

console.log(newFruits);
