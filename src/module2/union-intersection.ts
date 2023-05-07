// union
type NoobDeveloper = {
    name: string,
}

type JuniorDeveloper = {
    name: string,
    expertise: string,
    experience: number,
}

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Raj Das",
    expertise: "React",
    experience: 6
}

// intersection
type JuniorDeveloper1 = NoobDeveloper & {
    expertise: string,
    experience: number,
}

// enum Level{
//     junior = "junior",
//     mid = "mid",
//     senior = "senior"
// }

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience : number,
    level : "junior" | "mid" | "senior"
    // level: Level, // enum types
}

const webDeveloper: NextLevelDeveloper = {
    name: "Raj Das",
    expertise: "React",
    experience: 1,
    leadershipExperience: 6,
    level: "mid"
    // level: Level.mid
}