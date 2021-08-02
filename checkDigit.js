function createCheckDigit(membershipId) {
  // Write the code that goes here.
  var sum=0;
  while(membershipId){
    sum+=membershipId%10;
    membershipId=Math.floor(membershipId/10)
  }
  if (sum>9){
    var sum2=0
    while(sum){
      sum2+=sum%10
      sum=Math.floor(sum/10)
    }
    return sum2
  }else{
    return sum
  }
  
}

console.log(createCheckDigit("55555"));