/*
Problem: Search for a key in a nested object 
Write a function findValue that takes three arguments:

- A nested object data
- A target key to search for within the object
- An optional maxDepth parameter that specifies the maximum depth to search within the object. If maxDepth is not provided, the function should search through all levels.

The function should return an object with two properties:
- isFound: a boolean indicating whether the key was found within the specified depth.
- value: the value associated with the key if found, or null if not found.

Sample usage:

const data = {
  name: "Alice",
  info: {
    age: 30,
    address: {
      city: "Wonderland",
      zip: "12345"
    },
    preferences: {
      color: "blue",
      hobbies: ["reading", "gardening"]
    }
  }
};


// console.log(findValue(data, "city", 2)); 
// // { isFound: false, value: null } (exceeds maxDepth of 2)

// console.log(findValue(data, "city", 3)); 
// // { isFound: true, value: "Wonderland" }

// console.log(findValue(data, "name")); 
// // { isFound: true, value: "Alice" } (default depth search)
// */
const findValue = (data, name, depth = 1) => {
  if (depth <= 0) {
    return { isFound: false, value: null };
  }
  const result = Object.entries(data);
  for (let i = 0; i <= result.length - 1; i++) {
    if (result[i][0] === name) {
      return { isFound: true, value: result[i][1] };
    } else {
      if (typeof result[i][1] === "object") {
        return findValue(result[i][1], name, depth - 1);
      }
    }
  }
  return { isFound: false, value: null };
};


