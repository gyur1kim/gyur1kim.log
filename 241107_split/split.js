console.log("𝄞".split(""));

const surrogatePair = "𝟘𝟙𝟚𝟛";

console.log('split("") 사용\n', surrogatePair.split(""), "\n");
console.log("spread 연산자 사용\n", [...surrogatePair], "\n");
console.log("Array.from 사용\n", Array.from(surrogatePair), "\n");
console.log("정규표현식 사용\n", surrogatePair.split(/(?=[\s\S])/u), "\n");
const arr = [];
for (const s of surrogatePair) {
  arr.push(s);
}
console.log("for...of 사용\n", arr, "\n");

const codePoints = "Á🇬🇧👩🏿";
console.log("spread 연산자 사용\n", [...codePoints], "\n");
