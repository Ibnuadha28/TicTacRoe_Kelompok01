const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Papan {
  constructor() {
    this.papan = [
      [1,2,3,4,5,6],
      [7,8,9,10,11,12],
      [13,14,15,16,17,18],
      [19,20,21,22,23,24],
      [25,26,27,28,29,30],
      [31,32,33,34,35,36]
    ];
    this.simbol = 'O';
    this.placedPieces = 0;
  }

  togglesimbol() {
    this.simbol = this.simbol === 'O' ? 'X' : 'O';
  }

  cekKotak(baris, kolom) {
    return typeof this.papan[baris][kolom] === 'number';
  }

  updatepapan (kotak){

    if (kotak <= 6) {
      if (this.cekKotak(0, kotak - 1)) {
        this.papan[0][kotak - 1] = this.simbol;
        this.placedPieces++;
        return true;
      }
    } else if (kotak > 6 && kotak <= 12) {
      if (this.cekKotak(1, kotak - 7)) {
        this.papan[1][kotak - 7] = this.simbol;
        this.placedPieces++;
        return true;
      }
    } else if (kotak > 12 && kotak <= 18) {
      if (this.cekKotak(2, kotak - 13)) {
        this.papan[2][kotak - 13] = this.simbol;
        this.placedPieces++;
        return true;
      }
    } else if (kotak > 18 && kotak <= 24) {
      if (this.cekKotak(3, kotak - 19)) {
        this.papan[3][kotak - 19] = this.simbol;
        this.placedPieces++;
        return true;
      }
    } else if (kotak > 24 && kotak <= 30) {
      if (this.cekKotak(4, kotak - 25)) {
        this.papan[4][kotak - 25] = this.simbol;
        this.placedPieces++;
        return true;
      }
    } else if (kotak > 30 && kotak <= 36) {
      if (this.cekKotak(5, kotak - 31)) {
        this.papan[5][kotak - 31] = this.simbol;
        this.placedPieces++;
        return true;
      }
    } else {
      return false;
    }
  }

  detectGameEnd () {
    return this.placedPieces === 36;
  }

  checkForWinner() {
    return this.checkDiagonalForWinner(this.simbol) || this.checkForColWinner(this.simbol) || this.checkForRowWinner(this.simbol);
  }

  checkDiagonalForWinner (simbol) {
    if (
        this.papan[0][0] === simbol && this.papan[1][1] === simbol && this.papan[2][2] === simbol && this.papan[3][3] === simbol && this.papan[4][4] === simbol && this.papan[5][5] === simbol ||
        this.papan[0][5] === simbol && this.papan[1][4] === simbol && this.papan[2][3] === simbol && this.papan[3][2] === simbol && this.papan[4][1] === simbol && this.papan[5][0] === simbol) {
      return true;
    }
    return false;
  }

  checkForColWinner(simbol) {
    if (
        this.papan[0][0] === simbol && this.papan[1][0] === simbol && this.papan[2][0] === simbol && this.papan[3][0] === simbol && this.papan[4][0] === simbol && this.papan[5][0] === simbol ||
        this.papan[0][1] === simbol && this.papan[1][1] === simbol && this.papan[2][1] === simbol && this.papan[3][1] === simbol && this.papan[4][1] === simbol && this.papan[5][1] === simbol ||
        this.papan[0][2] === simbol && this.papan[1][2] === simbol && this.papan[2][2] === simbol && this.papan[3][2] === simbol && this.papan[4][2] === simbol && this.papan[5][2] === simbol ||
        this.papan[0][3] === simbol && this.papan[1][3] === simbol && this.papan[2][3] === simbol && this.papan[3][3] === simbol && this.papan[4][3] === simbol && this.papan[5][3] === simbol ||
        this.papan[0][2] === simbol && this.papan[1][4] === simbol && this.papan[2][4] === simbol && this.papan[3][4] === simbol && this.papan[4][4] === simbol && this.papan[5][4] === simbol ||
        this.papan[0][2] === simbol && this.papan[1][5] === simbol && this.papan[2][5] === simbol && this.papan[3][5] === simbol && this.papan[4][5] === simbol && this.papan[5][5] === simbol) {
      return true;
    }
    return false;
  }

  checkForRowWinner(simbol) {
    if (
        this.papan[0][0] === simbol && this.papan[0][1] === simbol && this.papan[0][2] === simbol && this.papan[0][3] === simbol && this.papan[0][4] === simbol && this.papan[0][5] === simbol ||
        this.papan[1][0] === simbol && this.papan[1][1] === simbol && this.papan[1][2] === simbol && this.papan[1][3] === simbol && this.papan[1][4] === simbol && this.papan[1][5] === simbol ||
        this.papan[2][0] === simbol && this.papan[2][1] === simbol && this.papan[2][2] === simbol && this.papan[2][3] === simbol && this.papan[2][4] === simbol && this.papan[2][5] === simbol || 
        this.papan[3][0] === simbol && this.papan[3][1] === simbol && this.papan[3][2] === simbol && this.papan[3][3] === simbol && this.papan[3][4] === simbol && this.papan[3][5] === simbol ||
        this.papan[4][0] === simbol && this.papan[4][1] === simbol && this.papan[4][2] === simbol && this.papan[4][3] === simbol && this.papan[4][4] === simbol && this.papan[4][5] === simbol ||
        this.papan[5][0] === simbol && this.papan[5][1] === simbol && this.papan[5][2] === simbol && this.papan[5][3] === simbol && this.papan[5][4] === simbol && this.papan[5][5] === simbol) {
      return true;
    }
    return false;
  }

  printRow(rowNum) {
    return `|\t${this.papan[rowNum][0]}\t|\t${this.papan[rowNum][1]}\t|\t${this.papan[rowNum][2]}\t|\t${this.papan[rowNum][3]}\t|\t${this.papan[rowNum][4]}\t|\t${this.papan[rowNum][5]}\t|`
  }

  printpapan() {
    const output = `+-+-+-+-+-+-+-+-+-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+\n${this.printRow(0)}\n+-+-+-+-+-+-+-+-+-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+\n${this.printRow(1)}\n+-+-+-+-+-+-+-+-+-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+\n${this.printRow(2)}\n+-+-+-+-+-+-+-+-+-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+\n${this.printRow(3)}\n+-+-+-+-+-+-+-+-+-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+\n${this.printRow(4)}\n+-+-+-+-+-+-+-+-+-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+\n${this.printRow(5)}\n+-+-+-+-+-+-+-+-+-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+\n`;
    process.stdout.write(output);
  }

}


class Game {
  constructor() {
    this.papan = new Papan();

    this.init();
  }

  printMenuGame () {
    process.stdout.write([
      '==================================================\n',
      '\t\t\tSelamat Datang di Games\n',
      '\t\t\t\t  TIC TAC TOE\n',
      '\t\t\t\t     6 X 6\n',
      '==================================================\n'
    ].join(''));
  }

  init() {
    this.printMenuGame();
    this.papan.printpapan();
    this.printMsg('nextTurn');
    this.promptForInput();
  }

  printMsg(msg) {
    const responses = {
      nextTurn: `Giliran Pemain ${this.papan.simbol}`,
      invalidInput: `Salah memasukkan Seleksi, Giliran Pemain ${this.papan.simbol}`,
      menang: `Pemain ${this.papan.simbol} memenangkan permainan!`,
      permainanBerakhir: `Permainan berakhir!`,
    };

    process.stdout.write(responses[msg] + '\n');
  }

  gameWon() {
    this.papan.printpapan();
    this.printMsg('menang');
    rl.close();
  }

  gameOver() {
    this.papan.printpapan();
    this.printMsg('permainanBerakhir');
    rl.close();
  }

  invalidInput() {
    this.papan.printpapan();
    this.printMsg('invalidInput');
    this.promptForInput();
  }

  nextTurn() {
    this.papan.printpapan();
    this.printMsg('nextTurn');
    this.promptForInput();
  }

  promptForInput() {

    rl.question('Masukkan pilihan Seleksi :', (answer) => {

      let selection = Number(answer);
      if (selection && selection <= 36 && selection >= 1) {
        if (this.papan.updatepapan(selection)) {
          if (this.papan.checkForWinner()) return this.gameWon();
          if (this.papan.detectGameEnd()) return this.gameOver();
          this.papan.togglesimbol();
          this.nextTurn();
        } else {
          this.invalidInput();
        }
      } else {
        this.invalidInput();
      }

    });
  }

}

const game = new Game();