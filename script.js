function filterByCity(targetCity, listingCityArray) {
  let count = []; // Array to return index of the city
  for (let i = 0; i <= listingCityArray.length; i++) {
    if (
      targetCity.localeCompare(listingCityArray[i], undefined, {
        sensitivity: "base",
      }) == 0
    ) {
      // Got inspiration from stackoverflow.com "LIFESAVER" :)
      count.push(i);
    }
  }
  return count;
  // return [...listingCityArray.keys()];
}
filterByCityTest();

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  let newPrice = [];
  let tempPrice = 0;
  for (let i = 0; i <= listingPriceArray.length; i++) {
    tempPrice = listingPriceArray[i];
    if (tempPrice >= minPrice && tempPrice <= maxPrice) {
      newPrice.push(i);
    }
  }
  return newPrice;
  //return [...listingPriceArray.keys()];
}
// filterByPriceTest()

function filterByTypes(targetTypes, listingTypeArray) {
  let arrayType = [];
  let target = "";
  let type = "";
  for (let i = 0; i <= listingTypeArray.length; i++) {
    type = listingTypeArray[i];
    for (let j = 0; j < targetTypes.length; j++) {
      target = targetTypes[j];
      if (target == type) {
        arrayType.push(i);
      } else {
        continue;
      }
    }
  }
  return arrayType;
}
filterByTypesTest();
