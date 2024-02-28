export {};

// EXAMPLE 1 - Declare and Type a nested Object in TypeScript

interface Person {
  name: string;
  address: {
    country: string;
    city: string;
  };
}

const person: Person = {
  name: 'Bobby Hadz',
  address: {
    country: 'Chile',
    city: 'Santiago',
  },
};
console.log(person);

// ---------------------------------------------------

// // EXAMPLE 2 - Using a type alias to type a nested Object

// type Person = {
//   name: string;
//   address: {
//     country: string;
//     city: string;
//   };
// };

// const person: Person = {
//   name: 'Bobby Hadz',
//   address: {
//     country: 'Chile',
//     city: 'Santiago',
//   },
// };
// console.log(person);

// ---------------------------------------------------

// // EXAMPLE 3 - Typing nested objects inline

// const person: {
//   name: string;
//   address: { country: string; city: string };
// } = {
//   name: 'Bobby Hadz',
//   address: {
//     country: 'Chile',
//     city: 'Santiago',
//   },
// };
// console.log(person);

// // ---------------------------------------------------

// // EXAMPLE 4 - Letting TypeScript infer the type of a nested Object

// /**
//  * const person: {
//     name: string;
//     address: {
//         country: string;
//         city: string;
//     };
//   }
//  */
// const person = {
//   name: 'Bobby Hadz',
//   address: {
//     country: 'Chile',
//     city: 'Santiago',
//   },
// };
// console.log(person);

// ---------------------------------------------------

// // EXAMPLE 5 - Marking some of the properties of the object as optional

// type Person = {
//   name: string;
//   address?: {
//     // 👈️ address is optional
//     country: string;
//     city: string;
//   };
// };

// const person: Person = {
//   name: 'Bobby Hadz',
// };

// person.address = {
//   country: 'Chile',
//   city: 'Santiago',
// };

// console.log(person);

// ---------------------------------------------------

// // EXAMPLE 6 - Typing nested objects with an index signature

// type Person = {
//   name: string;
//   address: {
//     country: string;
//     city: string;
//     [key: string]: any; // 👈️ index signature
//   };
// };

// const person: Person = {
//   name: 'Bobby Hadz',
//   address: {
//     country: 'Chile',
//     city: 'Santiago',
//   },
// };

// person.address.street = 'Example str. 123';
// person.address.postCode = 123;

// console.log(person);
