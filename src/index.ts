/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true

function plusMinus(arr: number[]): void {
  const longitud = arr.length
  let positives = 0;
  let negative = 0;
  let neutrals = 0;

  for (let i = 0; i < longitud; i++) {
    if( arr[i] > 0){
      positives++
    }if( arr[i] < 0 ){
      negative++
    } else {
      neutrals++
    }
  }
  const propp = positives / longitud;
  const propneg = negative / longitud;
  const propneu = neutrals / longitud;

  console.log((propp).toFixed(6));
  console.log((propneg).toFixed(6));
  console.log((propneu).toFixed(6));
}
function main() {
  console.log('---------- Cool Programing ----------\n');
  const a = [-4, 3, -9, 0, 4, 1]
  const result = plusMinus(a);
  console.log('Result: ', result);
}

main();

