const State = require('./State');
class TicTacToe {
    constructor()
    {
        this.state = new State();
        this.mass = [[['null'],['null'],['null']],[['null'],['null'],['null']],[['null'],['null'],['null']]];
        this.matrix = this.mass;
    }

    getCurrentPlayerSymbol()
    {
    return this.state.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex)
    {
        if (this.getFieldValue(rowIndex, columnIndex) == null) {
            this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            if (!this.isFinished()) {
                if (this.state.countCourse>4)
                {
                    for(var i = 0; i<3;i++)
                    {
                        if((this.matrix[i][0]==this.matrix[i][1])&&(this.matrix[i][1]==this.matrix[i][2])&&(this.matrix[i][0]==this.matrix[i][2]))
                        {
                            this.state.winner = this.matrix[i][0];
                            break;
                        }
                    }
                    for(var i = 0; i<3; i++)
                    {
                        if((this.matrix[0][i]==this.matrix[1][i])&&(this.matrix[1][i]==this.matrix[2][i])&&(this.matrix[0][i]==this.matrix[2][i]))
                        {
                            this.state.winner = this.matrix[0][i];
                            break;
                        }
                    }
                    if((this.matrix[0][0]==this.matrix[1][1])&&(this.matrix[1][1]==this.matrix[2][2])&&(this.matrix[0][0]==this.matrix[2][2]))
                    {
                        this.state.winner = this.matrix[1][1];
                    }
                    if((this.matrix[0][2]==this.matrix[1][1])&&(this.matrix[1][1]==this.matrix[2][0])&&(this.matrix[2][0]==this.matrix[0][2]))
                    {
                        this.state.winner = this.matrix[1][1];
                    }
                }
            }
            if (this.state.currentPlayer == "x")
            {
                    this.state.currentPlayer = "o";
            }
             else
                {
                    this.state.currentPlayer = `x`;
                }
            this.state.countCourse++;
        }

    }

    isFinished()
    {
        if(this.isDraw()==false && this.getWinner()==null)
        {
            return false;
        }
        else
        {
            return true;
        }

    }

    getWinner()
    {
        if(this.state.winner == 'null')
        {
            return null;
        }
       return this.state.winner;
    }

    noMoreTurns()
    {
        if(this.state.countCourse == 9)
        {
            return true;
        }
        return false;
    }

    isDraw()
    {
        if(this.noMoreTurns()==true&&this.getWinner()==null)
        {
            return true;
        }
    return false;
    }

    getFieldValue(rowIndex, colIndex)
    {
        if(this.matrix[rowIndex][colIndex]=='null')
        {
         return null;
        }
        else
        {
            return this.matrix[rowIndex][colIndex];
        }
    }
}

module.exports = TicTacToe;
