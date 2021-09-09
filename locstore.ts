// interface IStorage {
//   getItem(key: string): string | null;
//   setItem(key: string, value: string): void;
//   removeItem(key: string): void;
// }

import { AsyncLocalStorage } from "async_hooks";
import { ReadLine } from "readline";

// export default abstract class Storage<T extends string> {
//   private readonly storage: IStorage;

//   public constructor(getStorage = (): IStorage => window.localStorage) {
//     this.storage = getStorage();
//   }

//   protected get(key: T): string | null {
//     return this.storage.getItem(key);
//   }

//   protected set(key: T, value: string): void {
//     this.storage.setItem(key, value);
//   }

//   protected clearItem(key: T): void {
//     this.storage.removeItem(key);
//   }

//   protected clearItems(keys: T[]): void {
//     keys.forEach((key) => this.clearItem(key));
//   }
// }

// localStorage.setItem("name","Itachi")
// // console.log(loc);
// // console.log(localStorage.getItem("name"))
// console.log(localStorage);
// // localStorage.clear()



var todo = require('readline')

var task = todo.createInterface({
    input : process.stdin,
    output : process.stdout
})

task.question("What do you want to get done today ? :- ", (reply :string):void =>
{
    console.log((`Todo list :${reply}`));
    task.close()
    
})

