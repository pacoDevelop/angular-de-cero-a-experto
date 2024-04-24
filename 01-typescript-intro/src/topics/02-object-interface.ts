
const skills: string[] = ["Bash", "Counter", "Healing"]


interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: Character = {
    name: "Strinder",
    hp: 100,
    skills: ["Bash", "Counter"]
}

strider.hometown = "Test";

console.table(strider)



export { }