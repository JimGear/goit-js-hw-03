function getShippingCost(country) {
  shippingCountry = country;
  let fee = 100;
  switch (shippingCountry) {
    case "Australia":
      fee = 170;
      return `Shipping to ${country} will cost ${fee} credits`;
      break;
    case "Germany":
      return `Sorry, there is no delivery to your country`;
      break;
    case "China":
      fee = 100;
      return `Shipping to ${country} will cost ${fee} credits`;
      break;
    case "Chile":
      fee = 250;
      return `Shipping to ${country} will cost ${fee} credits`;
      break;
    case "Jamaica":
      fee = 120;
      return `Shipping to ${country} will cost ${fee} credits`;
      break;
    case "Sweden":
      fee = 120;
      return `Sorry, there is no delivery to your country`;
      break;
  }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
