// Write a TypeScript function that adds two numbers and returns the result.
const AddTwo = (n1: number, n2: number): number => {
  return n1 + n2;
};

console.log(AddTwo(2, 3));

//Create an interface for a Person object with properties name (string), age (number), and an optional email (string).

interface Person {
  name: string;
  age: number;
  email: string;
}

const greet = (p: Partial<Person>): void => {
  console.log(`greeting ${p.name}`);
};

greet({ name: "sjnd" });

//Write a function that takes a parameter of union type string | number and returns its length if it's a string, or the number itself if it's a number.

const getLength = (s: string | number): number => {
  if (typeof s === "string") {
    return s.length;
  } else if (typeof s === "number") {
    return s;
  }
  return 0;
};

console.log(getLength("nne"));
console.log(getLength(333));

//Create a function that accepts an array of numbers and returns a new array where each number is multiplied by 2.

const numberMultiplyBy2 = (arr: Array<number>): Array<number> => {
  let resultArr: Array<number> = [];
  resultArr[0] = 0;
  for (let index = 0; index < arr.length; index++) {
    resultArr[index] = arr[index] * 2;
  }
  return resultArr;
};
console.log(numberMultiplyBy2([1, 2, 3, 4]));

//Write a TypeScript class Animal with a constructor that accepts name and age. Add a method speak() that logs the animal's name and age.
class Animal {
  private name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public speak(): void {
    console.log(this.name, this.age);
  }
}

const a = new Animal("hw", 2);
a.speak();

//Create a generic function in TypeScript that accepts an array and returns the first element of that array.

function func<Type>(arr: Array<Type>): Type {
  return arr[0];
}

console.log(func([1, 2, 3, 4]));

//Write an enum in TypeScript for the days of the week (e.g., Monday, Tuesday, etc.). Create a function that takes a day and logs whether it's a weekday or weekend.

enum days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function func2(day: days) {
  switch (day) {
    case 0:
    case 6:
      console.log("it is a weekend ");
      break;

    default:
      console.log("its is weekdays");
      break;
  }
}
func2(days.Sunday);

//Write a TypeScript function that takes an object with an unknown structure and ensures that a specific property (e.g., id) exists and is a number.

function func3(obj: any): boolean {
  console.log(obj);
  if (obj.id) {
    if (typeof obj.id === "number") {
      return true;
    }
  }
  return false;
}

console.log(func3({ id: 3 }));

//Write a function that accepts a tuple of [string, number] and returns a formatted string combining the two values.

function func4(tuple: [string, number]): string {
  return tuple[0] + tuple[1];
}

console.log(func4(["helll", 3]));

//Create a Shape interface that includes a calculateArea() method. Then, create two classes Rectangle and Circle that implement the interface and return the appropriate area calculation for each shape.

interface shape {
  calculateArea: () => number;
}

class Rectangle implements shape {
  private length: number;
  private breadth: number;

  constructor(l: number, b: number) {
    this.length = l;
    this.breadth = b;
  }

  public calculateArea = (): number => {
    console.log(
      `these are the length and breadth ${this.length} and ${this.breadth}`
    );
    return this.length * this.breadth;
  };
}

class Circle implements shape {
  private radius: number;
  constructor(r: number) {
    this.radius = r;
  }
  public calculateArea = (): number => {
    console.log(" the radius is " + this.radius);
    return 3.14 * this.radius * this.radius;
  };
}

const s = new Rectangle(3, 3);
console.log(s.calculateArea());

const c = new Circle(4);
console.log(c.calculateArea());

//  Create a function in TypeScript that takes an object with dynamic keys (e.g., Record<string, number>) and returns the sum of all values.

type obj = Record<string, number>;

const func10 = (arg: obj): number => {
  let result = 0;
  for (const key in arg) {
    result += arg[key];
  }
  return result;
};

console.log(func10({}));

//    Write a TypeScript function that accepts an array of objects with a name property and a value property. Sort the array by the value in ascending order.

interface obj12 {
  name: string;
  value: number;
}

// [3,2,1,5,6]

function func12(arr: Array<obj12>): Array<obj12> {
  for (let index = 0; index < arr.length; index++) {
    const ele1 = arr[index].value;
    for (let j = index; j < arr.length; j++) {
      const ele2 = arr[j].value;
      if (ele1 > ele2) {
        let temp: obj12 = arr[index];
        arr[index] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(
  func12([
    { name: "k", value: 1 },
    { name: "hd", value: 3 },
    { name: "jj", value: 2 },
  ])
);


//Create a function that accepts a Promise<string> and a Promise<number>. Use TypeScript's Promise.all() to wait for both promises to resolve and return their results as a tuple.
  

// const func13=async(promise1:Promise<string>,promise2:Promise<number>):Promise<[string,number]>=>{
//     const result =await Promise.all([promise1,promise2])
//      return result as[string,number];
// }

// const promiseString: Promise<string> = new Promise((resolve) => setTimeout(() => resolve("Hello"), 1000));
// const promiseNumber: Promise<number> = new Promise((resolve) => setTimeout(() => resolve(42), 500));

//  func13(promiseString,promiseNumber).then((result)=>console.log(result))


const func14=(arg:number|string|boolean)=>{
    if(typeof arg==="number"){
        console.log(' it is the number')
    }
}
func14(3);

export {};
