

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}


interface Details {
    author: string;
    year: number;
}


const audioPLayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const { song: anotherSong, audioVolume, details } = audioPLayer;
const { author, year } = details;

// console.log("Song", anotherSong)
// console.log("Volume", audioVolume)
// console.log("Author", author)

const [, , trunks = "No hay personaje"]: string[] = ["Goku", "Vegeta", "Trunks"];

// const trunk = dbz[3] || 'No hay personaje'

console.log("Personaje 3: ", trunks)

export { }