class TXO {
    constructor(owner , amount) {
        this.owner = owner; // dirección (string)
        this.amount = amount; // cantidad (number)
        this.spent = false;} // siempre empieza en false
    
    spend() {
        this.spent = true;
    }
}

module.exports = TXO;