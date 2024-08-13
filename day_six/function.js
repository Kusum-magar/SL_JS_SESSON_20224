function isPrime(num) {
    if (num >= 2) {
      var count = 0;
      for(var i = 1; i <= num; i++){
        if(num % 1 === 0){
          count++;
        }
      }
      if(count === 2){
        console.log(num+ "is a prime");
      }else{
        console.log(num + "is not prime");
      }
    }else{
      console.log("Please enter a number greater than or equal to " + num);
    }
  }