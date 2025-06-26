class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs;   // Array de UTXOs de entrada
        this.outputUTXOs = outputUTXOs; // Array de UTXOs de salida
    }

    execute() {
        // Verifica que ninguno de los inputUTXOs esté gastado
        for (const utxo of this.inputUTXOs) {
            if (utxo.spent) {
                throw new Error("Input UTXO already spent!");
            }
        }

    }
}

module.exports = Transaction;