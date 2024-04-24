export class Person {
    // public name: string;
    // private address: string;

    constructor(
        public name: string,
        private address: string = "Not Address") {
    };


}


export class Hero extends Person {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string

    ) {
        super(realName, "New York");
    }
}


const iroman = new Hero("Iroman", 45, "Tony");
console.table(iroman)