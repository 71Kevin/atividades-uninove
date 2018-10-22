package z;
import java.util.Scanner;

public class Z {

public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    String alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    char vetorAlfabeto[] = alfabeto.toCharArray();
    System.out.println("Digite o número de linhas da Matriz: ");
    int matrixRow = scan.nextInt();
    System.out.println("Digite o número de colunas da Matriz: ");
    int matrixCol = scan.nextInt();
    int contAlfabeto=0,contMatrizLinha=1,contMatrizColuna=matrixCol-2;

    
    if (matrixRow > 50 && matrixCol > 50) {
        System.out.print(" ERRO ");
    }
    if (matrixRow != matrixCol) {
        System.out.print(" ERRO ");
    }
    if (matrixRow <= 2 && matrixCol <= 2) {
        System.out.print(" ERRO ");
    }

    char[][] matrix = new char[matrixRow][matrixCol];
    for(int i=0;i<matrixRow;i++){
        for(int j=0;j<matrixRow;j++){
            matrix[i][j]=' ';
        }
    }
    for(int i=0;i<matrixCol;i++){
        matrix[0][i]=vetorAlfabeto[contAlfabeto];
        contAlfabeto++;
        if(contAlfabeto==26){
            contAlfabeto=0;
        }
    }
    for(;(contMatrizLinha+1)<matrixRow;contMatrizLinha++,contMatrizColuna--){
        matrix[contMatrizLinha][contMatrizColuna]=vetorAlfabeto[contAlfabeto];
        contAlfabeto++;
        if(contAlfabeto==26){
            contAlfabeto=0;
        }
    }
    contMatrizLinha=matrixRow-1;
    for(int i=0;i<matrixCol;i++){
        matrix[contMatrizLinha][i]=vetorAlfabeto[contAlfabeto];
        contAlfabeto++;
        if(contAlfabeto==26){
            contAlfabeto=0;
        }
    }
    for(int i=0;i<matrixRow;i++){
        for(int j=0;j<matrixCol;j++){
            System.out.print(matrix[i][j]+"   ");
        }
        System.out.println();
    }
}
}