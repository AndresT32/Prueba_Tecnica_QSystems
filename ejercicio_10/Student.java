package ejercicio_10;

import java.util.ArrayList;
import java.util.List;

/**
 * Clase Student con encapsulación y métodos de negocio:
 * - agregarNota
 * - calcularPromedio
 */
public class Student {

    private String nombre;
    private String id;
    private List<Double> notas;

    public Student(String nombre, String id) {
        this.nombre = nombre;
        this.id = id;
        this.notas = new ArrayList<>();
    }

    // Getters y setters (encapsulación)
    public String getNombre() {
        return nombre;
    }

    public String getId() {
        return id;
    }

    public List<Double> getNotas() {
        return new ArrayList<>(notas); // copia para proteger los datos
    }

    // Añadir nota
    public void addNota(double nota) {
        if (nota >= 0 && nota <= 5) {
            notas.add(nota);
        } else {
            System.out.println("Nota inválida (0 a 5)");
        }
    }

    // Eliminar nota por índice
    public void deleteNota(int index) {
        if (index >= 0 && index < notas.size()) {
            notas.remove(index);
        } else {
            System.out.println("!!! Índice inválido.");
        }
    }

    // Calcular promedio
    public double getPromedio() {
        if (notas.isEmpty()) return 0;
        double suma = 0;
        for (double n : notas) suma += n;
        return suma / notas.size();
    }
}
