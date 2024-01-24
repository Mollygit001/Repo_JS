// // for(let i = 0; i < 5; i++){
// //     console.log(i);
// // }
// // let count = 0;
// // while(count < 5){
// //     console.log(count);
// //     count++;
// // }
// // do{
// //     console.log(count);
// //     count++;
// // }while(count < 10)

// let car = {
//     make: "BMW",
//     model: "3 Series",
//     year: 2019,
//     color: "Black",
//     start: function(){
//         console.log("The car is starting");
//     }
// }
// // console.log("CAR: ");
// // for(let keys in car){
// //     console.log(car[keys]);
// // }
// // function book(title, author, year){
// //     this.title = title;
// //     this.author = author;
// //     this.year = year;
// // }

// // let book1 = new book("When Ashes Fall","Marni mann",2019);
// // let book2 = new book("Harry Potter", "J.K Rowlings", 2001);


// // console.log("Titles: \n"+book1.title + "\n" + book2.title);

// // let Engine = ["Unreal", "Unity", "Blender"];

// // Engine.push("Hazel");
// // console.log(Engine);

// // Engine.unshift("Phaser");

// // let removed = Engine.pop();
// // console.log(`Removed engine ${removed}`);

// // let removedFirst = Engine.shift()
// // console.log(`Removed first engine ${removedFirst}`);
// // console.log(Engine);
// // let count = 0;
// // for(count in Engine){
// //     count++;
// // }
// // console.log(`Number of engines are ${count}`);
// // let removed1 = Engine.splice(1,2,"openGL","SDL");
// // console.log(removed1);
// // Engine = Engine.concat(removed1);
// // console.log(Engine);

// // const product = mul(2,4);
// const mul = function(a,b){
//     //return a*b;
//     console.log(a*b);
// }
// mul(2,4);

// //const product = mul(2,4);
// // console.log("Product: "+ product);

// const sub = (a,b) => a - b;

// const diff = sub(5,2);
// console.log("Arrow Function : ", diff);

// try{
//     throw new Error('An error occurred');
// }catch (error){
//     console.error(error.message);
// }finally{
//     console.log("CleanUP code");
// }


// console.log(varFuncScope);
//         var varFuncScope = "New";

    
//     console.log(varFuncScope);
// //console.log(varFuncScope);

// let newObject = {
//     key1:  "Pair1",
//     key2:  12,
//     key3:  false
// };
// console.log(newObject);
// let newObject1 = [1,"new",true]
// console.log(newObject1);
// console.log(typeof(newObject1));

let new1 = 5 + "5";
console.log(new1);
console.log(typeof(new1));