//Queston (1)Long process
// function ajit(val) {
//   if (
//     val === "admin" ||
//     val === "employee" ||
//     val === "hr" ||
//     val === "owner"
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(ajit("hr"));

//(or)Sort process
// function ajit(val) {
//   const allval = ["admin", "employee", "hr", "owner"];
//   return allval.includes(val);
// }
//console.log(ajit("hr"));

//or Test case generating code
// function ajit(val) {
//   const allval = new Set(["admin", "employee", "hr", "owner", "hr"]);
//   // console.log(allval);
//   return allval.has(val);
// }
// console.log(ajit("hr"));

//Question (2) Read digit easy new features Add  _ underscore
// const max = 1_000_000;
// console.log(max);

//Question (3)object clone/copy trick concept
// const cart = {
//   userId: 454555,
//   items: [
//     {
//       productId: 112,
//       productPrice: 100,
//     },
//     {
//       productId: 113,
//       productPrice: 60,
//     },
//   ],
//   totalPrice: 160,
// };
// //const newCart = { ...cart };//cally copy hoti hai. object ke andar nested object hoga to proper copy nahi hoga. usaka only for reference copy hoga
// const newCart = JSON.parse(JSON.stringify(cart)); //ise used karene se sabhi copy hoga or nested object bhi proper copy ho jaye ga
// console.log(newCart);

//(4)Cache in javascript
// async function fetchData(url) {
//   const data = await fetch(url).then((res) => res.json());
//   return data;
// }
// (async function () {
//   await fetchData("https://jsonplaceholder.typicode.com/comments/1");
//   await fetchData("https://jsonplaceholder.typicode.com/comments/1");
//   await fetchData("https://jsonplaceholder.typicode.com/comments/1");
// })();

//(5) Faster http requests runing
// async function fetchNormal() {
//   const categories = await fetch(
//     "https://fakestoreapi.com/products/categories"
//   ).then((res) => res.json());

//   const products = await fetch(
//     "https://fakestoreapi.com/products/categories"
//   ).then((res) => res.json());

//   const users = await fetch(
//     "https://fakestoreapi.com/products/categories"
//   ).then((res) => res.json());

//   return Promise.all([categories, products, users]);
// }
// fetchNormal().then((res) => console.log(res));

//(6)This keyword
// function Ajit() {
//   console.log(this);
// }
// Ajit();//output :- Window object
//new Ajit(); //output :- Ajit name ka object

//(or)
// const user = {
//   Ajit() {
//     console.log(this);
//   },
// };
// //user.Ajit();//output :- khud (user object)
// const userboj = user.Ajit;
// userboj(); ////output :-Window object

//(7) Avoid to many if else same working
//long process
// function getprice(item) {
//   if (item === "Bur") {
//     return 200;
//   } else if (item === "Pi") {
//     return 500;
//   } else if (item === "San") {
//     return 400;
//   } else if (item === "Jui") {
//     return 100;
//   }
// }

//(sort cut process)
// const foodMap = {
//   Burger: 200,
//   Pizza: 500,
//   Sandwich: 400,
//   Juice: 100,
// };
// function getPrice(item) {
//   return foodMap[item];
// }
// console.log(getPrice("Burger"));

//(8)use of DSA in real Application
const userPermission = ["CREAT_POST", "EDIT_POST", "READ_POST", "DELETE_POST"];
const newvalue = new Set(userPermission);
function createPost() {
  if (!newvalue.has("CREAT_POST")) {
    return 404;
  } else {
    return 201;
  }
}
console.log(createPost({}));
