
function addNumbers(a: number, b: number): number {
    return a + b
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`
}

const multiply = (firtsNumber: number, secondNumber?: number, base: number = 2) => {
    return firtsNumber * base;
}



// const result = addNumbers(4, 2);
// const result2 = addNumbersArrow(4, 2);
// const multiplyResult = multiply(5);

// console.log({ result, result2, multiplyResult });


interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;


}

const strider: Character = {
    name: 'Paco',
    hp: 60,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`)
    },

}

healCharacter(strider, 20)

strider.showHp();

export { }