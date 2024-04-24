export class Person {
    // public name: string;
    // private address: string;

    constructor(
        public firstName: string,
        public lastName: string,
        private address: string = "Not Address") {
    };


}


// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string

//     ) {
//         super(realName, "New York");
//     }
// }
export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,

    ) {
        // this.person = new Person(realName)
    }
}

const tony = new Person("Tony", "Starcks", "New York");
const iroman = new Hero("Iroman", 45, "Tony", tony);
console.table(iroman)