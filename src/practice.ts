// interface Shape {
//   getArea(): number;
// }

// class Circle implements Shape {
//   radius: number;

//   constructor(radius: number) {
//     this.radius = radius;
//   }

//   getArea() {
//     return this.radius * this.radius * Math.PI;
//   }
// }

// class Rectangle implements Shape {
//   width: number;
//   height: number;

//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }

//   getArea() {
//     return this.width * this.height;
//   }
// }

// const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

// shapes.forEach((data) => {
//   console.log(data.getArea());
// });

// type Person = {
//   name: string;
//   age?: number;
// };

// type Develop = Person & {
//   skills: string[];
// };

// const person: Person = {
//   name: "오승묵",
//   age: 24,
// };

// const expert: Develop = {
//   name: "오승묵",
//   age: 24,
//   skills: ["nodejs", "react"],
// };

// const people: Person[] = [person, expert];

// type Color = "red" | "orange" | "yellow";

// const color: Color = "red";
// const colors: Color[] = ["red", "orange"];

// function wrap<T>(param: T){
//     return param;
// }

// const wrapped = wrap(10);

// interface Items<T> {
//   list: T[];
// }

// const items: Items<string> = {
//   list: ["a", "b"],
// };

type Items<t> = {
  list: t[];
};

const items: Items<string> = {
  list: ["a", "b"],
};
