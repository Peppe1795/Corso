package it.epicode.be;

import java.util.Arrays;
import java.util.Scanner;
import java.lang.Math;

public class Helloworld {

public static void main (String[] args)
		{
		System.out.println("Primo esercizio in java");
		
		int prodotto = prod(10, 5);
System.out.println("il risulatato del prodotto è " + prodotto);

String concatenazione = concat("peppe", 25);
System.out.println("La tua concatenazione è :" + concatenazione);

String arrStringa[] = {"Giuseppe", "Antonio" , "Luca", "Giovanni", "Artem"};
System.out.println(arr(arrStringa, "Peppe"));

Scanner input = new Scanner(System.in);
System.out.println("Inserisci il tuo nome");
String name = input.nextLine();
System.out.println("Inserisci il tuo cognome");
String surname = input.nextLine();
System.out.println("Inserisci il tuo nick name");
String nickname = input.nextLine();
System.out.println("Il tuo nome: " + name + ", " + " il tuo cognome: " + surname + ", " + " il tuo nickname: " + nickname );
System.out.println("Inserisci volre primo lato");
double lato1 = input.nextDouble();
System.out.println("Inserisci volre secondo lato");
double lato2 = input.nextDouble();
double perim = perimetro(lato1, lato2);
System.out.println("Il perimetro è: " + perim);
System.out.println("Inserisci un numero");
int num = input.nextInt();
int parDisp = modulo(num);
System.out.println(parDisp);
System.out.println("Inserisci valore primo lato");
double primoLato = input.nextDouble();
System.out.println("Inserisci valore secondo lato");
double secondoLato = input.nextDouble();
System.out.println("Inserisci valore terzo lato");
double terzoLato = input.nextDouble();
double area = erone(primoLato, secondoLato, terzoLato);
System.out.println("l'area del triangolo è: " + area);
input.close();

		}
public static int prod(int x, int y) {
	return x * y;
}

public static String concat(String z, int i) {
	return z + i;
}

public static String arr(String[] v, String c) {
	
String nuovoArray[] = new String[6];
nuovoArray[0] = v[0];
nuovoArray[1] = v[1];
nuovoArray[2] = v[2];
nuovoArray[3] = c;
nuovoArray[4] = v[3];
nuovoArray[5] = v[4];

return Arrays.toString(nuovoArray);

}

public static double perimetro(double j, double s) {
	return (j + s)* 2;
}

public static int modulo(int d) {
	
return  (d % 2 == 0) ? 0 : 1;
}

public static double erone(double a, double b, double c) {
	double p = a + b + c;
return Math.sqrt(p * (p-a) * (p-b) * (p-c));
}
}



