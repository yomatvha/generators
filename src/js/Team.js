export default class Team {
  constructor(...characters) {
    this.characters = characters;
  }

  * [Symbol.iterator]() {
    let index = 0;
    while (index < this.characters.length) {
      yield this.characters[index];
      index += 1;
    }
  }
}
