export default class ContaBancaria {
    private numeroConta : number = 2
    private agenciaConta : number = 3
    private saldoConta = 0
    private extratoConta : string[] = []

    public depositar(valor: number){
        if(valor > 0){
            this.saldoConta += valor
            this.extratoConta.push(`Valor depositado: ${valor.toFixed(2)}`)  
        }else{
            console.log('Valor inválido')
        }
    }

    public sacar(valorSaque: number){
        if(valorSaque <= this.saldoConta && valorSaque > 0){
            this.saldoConta -= valorSaque
            this.extratoConta.push(`Valor sacado: ${valorSaque.toFixed(2)}`)
        }
        else{
            console.log("Saque inválido")
        }
    }

    public transferencia(valorT: number, contaDestino: ContaBancaria){
        if(valorT <= this.saldoConta){
            this.saldoConta -= valorT
            contaDestino.depositar(valorT)
            this.extratoConta.push(`Valor transferido: ${valorT.toFixed(2)} Agência: ${this.agenciaConta} Número da conta: ${this.numeroConta}`)
        }else {
            console.log("Valor Inválido!")
        }
    } 
    
    public consultarSaldo(){
        console.log(this.saldoConta)
        return this.saldoConta
    }
    
    public exibeExtrato(){
        console.log(`Extrato da Conta: ${this.numeroConta}`)
        this.extratoConta.forEach(transacoes => {console.log(transacoes)})
        console.log(`Saldo atual: ${this.saldoConta.toFixed(2)}`)
    }
}