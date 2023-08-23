class Cell 
{
    constructor()
    {
        this.mark = 'Z'
    }

    isEmpty()
    {
        return this.mark === 'Z'
    }

    // markCell(symbol)
    // {
    //     this.mark = symbol
    // }

    markCell(symbol) {
        if (this.mark === 'Z') {
          this.mark = symbol;
        }
      }


}

module.exports = Cell