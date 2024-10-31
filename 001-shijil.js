// -----------------------------------------------
// Array sum kandu pidikkuka. Oru array of numbers input aai eduth, avayile ella elements'nteyum sum thirike nalkunna oru function ezhuthuka.
export const getSumOfNumbers = (arr) => {
  const result = arr.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });
  return result;
};

// -----------------------------------------------
// Oru array input aai eduth, avayile numbers nte maathram sum kandu pidikkuchu thirike tharunna oru function ezhuthuka.
// Note: array il numbers maathram alla, string, or objects may also be present. Avayil, numbers nte maathram sum aanu kandu pidikkendeth.
export const getSum = (arr) => {
  return arr
    .filter((value) => typeof value === "number")
    .reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    });
};

// -----------------------------------------------
// Largest value kandu pidikkuka. Oru array of numbers input aai eduth, athile largest number kandu pidich thirike tharunna function ezhuthuka.
export const getLargestNumber = (arr) => {
  return arr.sort((a, b) => b - a)[0];
};

// -----------------------------------------------
// Oru string input aai eduth, athile vowels(a, e, i, o, u) nte enanm count cheithu thirike tharunna oru function ezhuthuka.
export const countVowels = (str) => {
  const arr = str.split("");
  const Arr = arr.filter(
    (item) =>
      item === "a" ||
      item === "A" ||
      item === "e" ||
      item === "E" ||
      item === "i" ||
      item === "I" ||
      item === "O" ||
      item === "o" ||
      item === "u" ||
      item === "U"
  );
  return Arr.length;
};

// -----------------------------------------------
// Oru array of numbers input aai eduth, athile duplicate items remove cheithu return cheyyunna oru function ezhuthuka.
// Ex: console.log(removeDuplicates([1,1,2])) should print [1,2]
export const removeDuplicates = (arr) => {
  const result = arr.filter((item, index) => arr.indexOf(item) === index);
  return result;
};

// -----------------------------------------------
// Write a function that takes an array of objects (each object has a property "age") and a minimum age as input. Return a new array containing only objects with an age greater than or equal to the minimum age.
export const filterByAge = (arr, minAge) => {
  return arr.filter((item) => item.age >= minAge);
};

// -----------------------------------------------
// Write a function that takes an array of objects (each object has a property "name") as input. Return a new array containing the objects sorted alphabetically by name.
// (Hint: Use array sorting methods)
export const sortByName = (arr) => {
  const result = arr;
  result.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });
  return result;
};

// -----------------------------------------------
// Write a function that takes a string as input. Validate if the string has a valid email format (contains "@" and "."). Return true if valid, false otherwise.
export const validateEmail = (email) => {
  const arr = email.split("");
  const value1 = arr.some((item) => item === ".");
  const value2 = arr.some((item) => item === "@");
  return value1 && value2;
};

// -----------------------------------------------
// Write a function that takes two sorted arrays of numbers as input and returns a new array containing all elements merged and sorted in ascending order.
export const mergeSortedArrays = (arr1, arr2) => {
  const result = [...arr1, ...arr2];
  return result.sort((a, b) => a - b);
};

// -----------------------------------------------
// Write a function that takes an array of objects (each object represents a product with properties "price" and "quantity") as input. Return the total price of all products (price * quantity).
export const calculateProductPrice = (arr) => {
  const result = arr.map((item) => {
    return { Totalprice: item.price * item.quatity };
  });
  return result;
};

// -----------------------------------------------
// Write a function that takes an array of objects (of any export type) as input. Return a new object where keys are unique values of the "property" and values are arrays of objects belonging to that property.
// Example:
/*
  export const characters = [
    { name: "Daenerys Targaryen", family: "Targaryen" },
    { name: "Jon Snow", family: "Stark" },
    { name: "Tyrion Lannister", family: "Lannister" },
    { name: "Sansa Stark", family: "Stark" },
    { name: "Arya Stark", family: "Stark" },
    { name: "Cersei Lannister", family: "Lannister" },
    { name: "Jaime Lannister", family: "Lannister" },
    { name: "Theon Greyjoy", family: "Greyjoy" },
    { name: "Margaery Tyrell", family: "Tyrell" },
    { name: "Petyr Baelish", family: "Baelish" },
    { name: "Jorah Mormont", family: "Mormont" },
    { name: "Brienne of Tarth", family: "Tarth" },
    { name: "Davos Seaworth", family: "Seaworth" },
    { name: "Varys", family: "unknown" },
    { name: "Melisandre", family: "unknown" },
    { name: "Ramsay Bolton", family: "Bolton" },
    { name: "Littlefinger", family: "Baelish" },
    { name: "Hodor", family: "unknown" },
    { name: "Bran Stark", family: "Stark" },
    { name: "Ygritte", family: "Wildling" },
  ]
  
  export const groupedResult = groupByProperty(characters, 'family') // where 'family' is the name of the "property" using which you like to group the data
  
  Now, if you log groupedResult, it should print the below: (note: the order of keys is not important)
  
  {
    'Targaryen': [{'name': 'Daenerys Targaryen', 'family': 'Targaryen'}],
    'Stark': [{'name': 'Jon Snow', 'family': 'Stark'}, {'name': 'Sansa Stark', 'family': 'Stark'}, {'name': 'Arya Stark', 'family': 'Stark'}, {'name': 'Bran Stark', 'family': 'Stark'}],
    'Lannister': [{'name': 'Tyrion Lannister', 'family': 'Lannister'}, {'name': 'Cersei Lannister', 'family': 'Lannister'}, {'name': 'Jaime Lannister', 'family': 'Lannister'}],
    'Greyjoy': [{'name': 'Theon Greyjoy', 'family': 'Greyjoy'}],
    'Tyrell': [{'name': 'Margaery Tyrell', 'family': 'Tyrell'}],
    'Baelish': [{'name': 'Petyr Baelish', 'family': 'Baelish'}, {'name': 'Littlefinger', 'family': 'Baelish'}],
    'Mormont': [{'name': 'Jorah Mormont', 'family': 'Mormont'}],
    'Tarth': [{'name': 'Brienne of Tarth', 'family': 'Tarth'}],
    'Seaworth': [{'name': 'Davos Seaworth', 'family': 'Seaworth'}],
    'unknown': [{'name': 'Varys', 'family': 'unknown'}, {'name': 'Melisandre', 'family': 'unknown'}, {'name': 'Hodor', 'family': 'unknown'}],
    'Bolton': [{'name': 'Ramsay Bolton', 'family': 'Bolton'}],
    'Wildling': [{'name': 'Ygritte', 'family': 'Wildling'}]
  }
  */

export const groupByProperty = (arr, property) => {
  if (property === "family") {
    const result = {};
    arr.forEach((element) => {
      if (result[element.family]) {
        result[element.family].push(element);
      } else {
        result[element.family] = [];
        result[element.family].push(element);
      }
    });
    return result;
  } else {
    return null;
  }
};

// -----------------------------------------------
// Write a function to aggregate order data for reporting:
// You have a JSON array representing customer orders. Each order object has properties like "customerId" "items" (array of product objects), and "totalPrice."
// Write a function that takes the JSON array and a specific customer ID as input.
// Return a new object containing:
// - The customer ID (field name: customerId)
// - Total number of orders placed by the customer (field name: totalOrders)
// - Total amount spent by the customer (across all orders) (field name: totalAmount)
// - Most frequently purchased product (by quantity) and its total quantity (field name : mostFrequentProduct)
export const aggregateOrders = (arr, customerId) => {
  const result = arr.filter((item) => item.customerId === customerId);
  let totalAmount = 0;
  let FrequentProduct = {};

  result.forEach((item) => (totalAmount = item.totalPrice + totalAmount));
  result.forEach((item) => {
    item.items.forEach((item) => {
      if (FrequentProduct[item.name]) {
        FrequentProduct[item.name]++;
      } else {
        FrequentProduct[item.name] = 1;
      }
    });
  });
  const arrTwo = [...Object.entries(FrequentProduct)].sort(
    (a, b) => b[1] - a[1]
  );
  return {
    customerId: result[0].customerId,
    totalOrders: result.length,
    totalAmount: totalAmount,
    mostFrequentProduct: arrTwo[0],
  };
};
