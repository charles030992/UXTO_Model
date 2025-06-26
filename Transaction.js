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

    

    // Sumar los amounts de los inputUTXOs y los outputUTXOs
    const inputTotal = this.inputUTXOs.reduce((sum, utxo) => sum + utxo.amount, 0);
    const outputTotal = this.outputUTXOs.reduce((sum, utxo) => sum + utxo.amount, 0);

    // Verificar hay suficiente en los inputUTXOs
    if (inputTotal < outputTotal) {
        throw new Error("Insufficient input UTXOs!");
    }
}
}

module.exports = Transaction;