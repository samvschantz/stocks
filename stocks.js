function stocks(priceArray){
  var sellArray = []

  var buyPriceArray = []
  for (i = 0; i < priceArray.length - 1; i++){
    buyPriceArray.push(priceArray[i])
  }

  var sellPriceArray = []
  for (i = 1; i < priceArray.length; i++){
    sellPriceArray.push(priceArray[i])
  }

  for (i = 0; i < buyPriceArray.length; i++){
    for (x = 0; x < buyPriceArray.length; x++){
      sellArray.push(buyPriceArray[i] - sellPriceArray[x])
    }
    sellPriceArray = sellPriceArray.splice(1,sellPriceArray.length)
  }

  profitsArray = []

  for (i = 0; i < sellArray.length; i++){
    if (sellArray[i] < 0){
      profitsArray.push(Math.abs(sellArray[i]))
    }
  }

  var max = profitsArray.reduce(function(a, b) {
    return (Math.max(a, b));
  });

  return max

};

stocks([45, 24, 35, 31, 40, 38, 11]);