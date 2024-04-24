export interface Passenger {
    name: string;
    children?: string[]
}

const passenger1: Passenger = {
    name: "Paco"
}
const passenger2: Passenger = {
    name: "Isabel",
    children: ["Nata", "Pepa"]
}

const returnChildrenNumber = (passenger: Passenger): number => {
    const howManyChildren = passenger.children?.length || 0
    // const howManyChildren = passenger.children!.length
    console.log(passenger.name, howManyChildren)

    return howManyChildren;
}

returnChildrenNumber(passenger2)
returnChildrenNumber(passenger1)
