export class Person {
    // public name: string;
    // private address: string;

    constructor(
        public name: string = "Fernando",
        private address: string = "Not Address") {
    };


}

const iroman = new Person("Iroman");
console.table(iroman)