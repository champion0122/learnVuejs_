function fizzBuzz(num) {
  if(num%3 == 0 && num%5 == 0){
    console.log('fizzbuzz')
      return "fizzbuzz"
    }
  else if(num%3 == 0){
    console.log('fizz')
      return 'fizz'
    }
  else if(num%5 == 0){
    console.log('buzz')
      return 'buzz'
    }
  else if(num === undefined || typeof num !== 'number'){
    console.log(typeof num)
    console.log('false')
      return false
    }
  else{
    console.log(num)
      return num
    }
}
fizzBuzz('a')