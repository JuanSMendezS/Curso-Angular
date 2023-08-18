
// function addNumbers(a: number, b: number) {
//     return a + b;
// }

// const addNumberArrow = (a: number, b: number):string => {
//     return `${a + b}`;
// }

// function multiply(firstNumber: number, secondNumber?: number, base: number=2) {
//     return firstNumber * base;
// }

// const results: number = addNumbers(6, 7);
// const resultsArrow: string = addNumberArrow(6, 7);
// const multi: number = multiply(6);
// console.log({ results });
// console.log({ resultsArrow });
// console.log({ multi });

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida: ${this.hp}`);
    }
}

healCharacter(strider, 50);

strider.showHp();

export { };