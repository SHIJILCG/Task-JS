const getSumofNumbers = (arr) => {
  const result = arr.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });
  return result;
};

////////////////////////////////////////////////////////////////////////////

const getSum = (arr) => {
  return arr
    .filter((value) => typeof value === "number")
    .reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    });
};

////////////////////////////////////////////////////////////////////////////////

const getLargestNumber = (arr) => {
  return arr.sort((a, b) => b - a)[0];
};

////////////////////////////////////////////////////////////////////////////////

const countVowels = (str) => {
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
////////////////////////////////////////////////////////////////////////////////////

const removeDuplicates = (arr) => {
  const result = arr.filter((item, index) => arr.indexOf(item) === index);
  return result;
};
//////////////////////////////////////////////////////////////////////////////////////

const filterByAge = (arr, minAge) => {
  return arr.filter((item) => item.age >= minAge);
};

//////////////////////////////////////////////////////////////////////////////////////////

const sortByName = (arr) => {
  const result = arr;
  result.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });
  return result;
};
/////////////////////////////////////////////////////////////////////
const validateEmail = (email) => {
  const arr = email.split("");
  const value1 = arr.some((item) => item === ".");
  const value2 = arr.some((item) => item === "@");
  return value1 && value2;
};

/////////////////////////////////////////////////////////////////////
const mergeSortedArrays = (arr1, arr2) => {
  const result = [...arr1, ...arr2];
  return result.sort((a, b) => a - b);
};
/////////////////////////////////////////////////////////////////////////////
const calculateProductPrice = (arr) => {
  const result = arr.map((item) => {
    return { Totalprice: item.price * item.quatity };
  });
  return result;
};
//////////////////////////////////////////////////////////////
const groupByProperty = (arr, property) => {
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
//////////////////////////////////////////////////////////////////////

const aggregateOrders = (arr, customerId) => {
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

