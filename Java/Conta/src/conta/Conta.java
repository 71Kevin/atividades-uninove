package conta;


public class Conta {

   	int numero;
	String titular;
	double saldo;
	
	//Métodos
	void saca (double valor){
		this.saldo = saldo-valor;
	}
	void depositar (double valor){
		this.saldo+=valor;
	}

    public static void main(String[] args) {
       
    }
    
}
