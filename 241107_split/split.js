import GraphemeSplitter from "grapheme-splitter";

console.log("𝄞".split("")); // [ '\ud834', '\udd1e' ]

const surrogatePair = "𝟘𝟙𝟚𝟛";

/**
 * code unit 기준으로 나뉨
 *[
    '\ud835', '\udfd8',
    '\ud835', '\udfd9',
    '\ud835', '\udfda',
    '\ud835', '\udfdb'
  ] 
 */
console.log('split("") 사용\n', surrogatePair.split(""), "\n");

/**
 * code point 기준으로 나뉨
 * [ '𝟘', '𝟙', '𝟚', '𝟛' ]
 */
console.log("spread 연산자 사용\n", [...surrogatePair], "\n");
console.log("Array.from 사용\n", Array.from(surrogatePair), "\n");
console.log("정규표현식 사용\n", surrogatePair.split(/(?=[\s\S])/u), "\n");
const arr = [];
for (const s of surrogatePair) {
  arr.push(s);
}
console.log("for...of 사용\n", arr, "\n");

/**
 * code point가 조합된 문자
 * [ 'A', '́ ', '🇬', '🇧', '👩', '🏿' ]
 */
const codePoints = "Á🇬🇧👩🏿";
console.log("spread 연산자 사용\n", [...codePoints], "\n");

/**
 * code point들이 조합된 문자를 나누는 방법 : grapheme splitter 라이브러리 이용
 * [ 'Á', '🇬🇧', '👩🏿' ]
 */
const splitter = new GraphemeSplitter();
const splitCodePointsResult = splitter.splitGraphemes(codePoints);
console.log(splitCodePointsResult);
