export const colorTypes = [
    {
        normal: "#aa9",
        type: "normal",
        normalNumber: 1
    },
    {
        fighting: "#b54",
        type: "fighting",
        fightingNumber: 2
    },
    {
        flying: "#89f",
        type: "flying",
        flyingNumber: 3
    },
    {
        poison: "#a59",
        type: "poison",
        poisonNumber: 4
    },
    {
        ground: "#db5",
        type: "ground",
        groundNumber: 5
    },
    {
        rock: "#ba6",
        type: "rock",
        rockNumber: 6
    },
    {
        bug: "#ab2",
        type: "bug",
        bugNumber: 7
    },
    {
        ghost: "#66b",
        type: "ghost",
        ghostNumber: 8
    },
    {
        steel: "#aab",
        type: "steel",
        steelNumber: 9
    },
    {
        fire: "#f42",
        type: "fire",
        fireNumber: 10
    },
    {
        water: "#39f",
        type: "water",
        waterNumber: 11
    },
    {
        grass: "#7c5",
        type: "grass",
        grassNumber: 12
    },
    {
        electric: "#fc3",
        type: "electric",
        electricNumber: 13
    },
    {
        psychic: "#f59",
        type: "psychic",
        psychicNumber: 14
    },
    {
        ice: "#6cf",
        type: "ice",
        iceNumber: 15
    },
    {
        dragon: "#76e",
        type: "dragon",
        dragonNumber: 16
    },
    {
        dark: "#754",
        type: "dark",
        darkNumber: 17
    },
    {
        fairy: "#e9e",
        type: "fairy",
        fairyNumber: 18
    }
]

export const getColorByType = (type, colorTypes) => {
    const colorType = colorTypes.find(item => item[type]);
    return colorType[type];
};

export const getNumberOfType = (type, numbers) => {
    const number = numbers.find(item => item[`${type}Number`]);
    return number[`${type}Number`];
};