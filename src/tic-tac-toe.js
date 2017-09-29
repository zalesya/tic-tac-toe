class TicTacToe {
    constructor() {
		this.count = 0;
		this.nLength = 3;
		this.matrix = [['*', '*', '*'], ['*', '*', '*'], ['*', '*', '*']];
    }

    getCurrentPlayerSymbol() {
		if (this.count % 2 == 0) {
			return 'x';
		} else {
			return 'o';
		}
    }

    nextTurn(rowIndex, columnIndex) {
		//if (!this.isFinished) {
			this.count++;
			if (this.count % 2 == 0) {
				this.matrix[rowIndex][columnIndex] = 'x';
			} else {
				this.matrix[rowIndex][columnIndex] = 'o';
			}
		//}
    }

    isFinished() {
		if (this.isDraw() || this.getWinner() == 'x' || this.getWinner() == 'o') {
			return true;
		} else {
			return false;
		}
    }

    getWinner() {
		for (var i = 0; i < this.nLength; i++) {
			var j = 0;
			var oneX = 'x';
			var twoO = 'o';
			while (this.matrix[i][j] == oneX) {
				j++;
				if (j == this.nLength - 1) {
					return oneX;
				}
			}
			j = 0;
			while (this.matrix[i][j] == twoO) {
				j++;
				if (j == this.nLength - 1) {
					return twoO;
				}
			}
			j = 0;
			while (this.matrix[j][i] == oneX) {
				j++;
				if (j == this.nLength - 1) {
					return oneX;
				}
			}
			j = 0;
			while (this.matrix[j][i] == twoO) {
				j++;
				if (j == this.nLength - 1) {
					return twoO;
				}
			}
			j = 0;
			while (this.matrix[i][i] == oneX) {
				j++;
				if (j == this.nLength - 1) {
					return oneX;
				}
			}
			j = 0;
			while (this.matrix[i][i] == twoO) {
				j++;
				if (j == this.nLength - 1) {
					return twoO;
				}
			}
		}
		return null;
    }

    noMoreTurns() {
		var num = 0;
		for (var i = 0; i < this.nLength; i++) {
			for (var j = 0; j < this.nLength; j++) {
				if (this.matrix[i][j] == '*') {
					return false;
				}
			}
		}
		return true;
    }

    isDraw() {
		if (this.noMoreTurns() && this.getWinner() == null) {
			return true;
		}
		return false;
    }

    getFieldValue(rowIndex, colIndex) {
		if (rowIndex > this.nLength ||colIndex > this.nLength || this.matrix[rowIndex][colIndex] == '*') {
			return null;
		} else {
			return this.matrix[rowIndex][colIndex];
		}
    }
}

module.exports = TicTacToe;
