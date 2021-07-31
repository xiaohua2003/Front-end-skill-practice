function createCheckDigit(membershipId) {
    // Write the code that goes here.
    var digits=membershipId.toString().split('');
    var realDigits=digits.map(Number)
    console.log(realDigits)
    }
  console.log(createCheckDigit("55555"));