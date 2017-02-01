class State
{
    constructor(currentplayer='x', winner = null, countcourse=0 )
    {
        // хранит знак кто ходит в данный момент
        this.currentPlayer = currentplayer;
    //хранит победителя в игре х или о
    this.winner = winner;
    //подсчет ходов
    this.countCourse = countcourse;

    }

}
module.exports = State;

