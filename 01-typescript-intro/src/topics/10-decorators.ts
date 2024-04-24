
const classDecorator = <T extends { new(...args: any[]): {} }>(
    constructor: T
) => {
    return class extends constructor {
        newProperty = "New property";
        hello = "override"

    }
}


@classDecorator
export class SuperClass {
    public myProperty: string = "Abc123"

    print() {
        console.log("Hola mundo")
    }
}

const myClass = new SuperClass();
myClass.print()
console.log(SuperClass)
console.log(myClass)