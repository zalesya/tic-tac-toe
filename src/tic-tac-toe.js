class TicTacToe {
    constructor() {
		this.count = 0;
		this.player = 'x';
		this.nLength = 3;
		this.matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
		this.winner = null;
		this.draw = false;
		this.finished = false;
		this.noTurns = false;
    }

    getCurrentPlayerSymbol() {
		return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
	if(!this.getFieldValue(rowIndex,columnIndex)){
            this.count++;
            switch (this.getCurrentPlayerSymbol()){
                case 'o':
                    this.matrix[rowIndex][columnIndex] = -1;
                    this.player = 'x';
                    break;
                case 'x':
                    this.matrix[rowIndex][columnIndex] = 1;
                    this.player = 'o';
                    break;
            }

            this.checkWin(rowIndex, columnIndex);
			this.noMoreTurns();
            this.isDraw();
        }
    }
	
    checkWin(rowIndex,columnIndex){
        var sumRow = 0;
        var sumColumn = 0;
        var sumDiagonal1 = 0;
        var sumDiagonal2 = 0;
        for (var i = 0; i < 3; i++) {
            sumRow += this.matrix[rowIndex][i];
            sumColumn += this.matrix[i][columnIndex];
            sumDiagonal1 += this.matrix[i][i];
            sumDiagonal2 += this.matrix[i][this.nLength - i + 1];
        }

        if (sumRow == -3 || sumColumn == -3 || sumDiagonal1 == -3 || sumDiagonal2 == -3){
            this.winner = "o";
            this.finished = true;
        } else if (sumRow == 3 || sumColumn == 3 || sumDiagonal1 == 3 || sumDiagonal2 == 3 ){
            this.winner = 'x';
            this.finished = true;
        }
    }

    isFinished() {
		if (this.noMoreTurns() || this.getWinner() || this.isDraw()) {
			this.finished = true;
		}
		return this.finished;
    }

    getWinner() {
		return this.winner;
    }

    noMoreTurns() {
		if (this.count == 9) {
			this.finished = true;
			this.draw = true;
			return true;
		} else {
			return false;
		}
    }

    isDraw() {
		this.draw;
    }

    getFieldValue(rowIndex, colIndex) {
		return this.matrix[rowIndex][colIndex]==1 ? 'x' 
		: (this.matrix[rowIndex][colIndex]==-1?  'o'
		: null) ;
    }
}

module.exports = TicTacToe;
