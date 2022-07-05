// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript

function divisors(integer) {
  let arr = []
  for(i=2; i<=integer-1; i++){
    if(integer % i == 0){
      arr.push(i)
    }
  }
  if(arr == ''){
    console.log(integer)
  } else {
    console.log(`${integer}'s divisors:\n${arr}`)
  }
}
divisors(13)
console.log('=======')
divisors(12)
console.log('=======')
divisors(25)
console.log('=======')
divisors(2000)