public class Programa {
    	public static void main(String[] agrs){
		
		//Estamos instanciando um Objeto Conta
		Conta Conta = new conta ();
		
		//Atribuindo Valores aos Atributos
		Conta.numero = 3213232;
		Conta.titular = "João";
		Conta.saldo = 900.00;
		
		System.out.println("seu saldo é: "+Conta.saldo);
		Conta.saca(500.25);
		System.out.println("seu saldo é: "+Conta.saldo);
		Conta.saca(200.00);
		System.out.println("seu saldo é: "+Conta.saldo);
		Conta.depositar(1500.00);
		System.out.println("seu saldo é: "+Conta.saldo);
		//Tudo que começa com letra maiúscula é um Objeto e ela possui uma Classe
		//No caso criei as classes com letras minusculas porém era para ser maiúsculas
		
		
	}

}

    

