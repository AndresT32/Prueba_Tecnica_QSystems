package ejercicio_10;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

/**
 * Aplicación de consola con menú:
 * - Crear estudiante
 * - Agregar nota
 * - Ver promedio
 * - Eliminar nota
 * - Eliminar estudiante
 */
public class Main {

    static Scanner sc = new Scanner(System.in);
    static Map<String, Student> estudiantes = new HashMap<>();

    public static void main(String[] args) {

        int opcion;

        do {
            System.out.println("\n===== MENÚ PRINCIPAL =====");
            System.out.println("1. Registrar estudiante");
            System.out.println("2. Agregar nota a un estudiante");
            System.out.println("3. Calcular promedio");
            System.out.println("4. Eliminar nota");
            System.out.println("5. Eliminar estudiante");
            System.out.println("6. Listar estudiantes");
            System.out.println("7. Salir");
            System.out.print("Ingresa opción: ");
            opcion = sc.nextInt();

            switch (opcion) {
                case 1 -> registrar();
                case 2 -> agregarNota();
                case 3 -> promedio();
                case 4 -> eliminarNota();
                case 5 -> eliminarEstudiante();
                case 6 -> listar();
                case 7 -> System.out.println("Adiós!");
                default -> System.out.println("Opción inválida");
            }

        } while (opcion != 7);
    }

    // --------- OPCIONES DEL MENÚ ----------

    static void registrar() {
        System.out.print("Nombre: ");
        sc.nextLine(); // limpiar buffer
        String nombre = sc.nextLine();

        System.out.print("ID: ");
        String id = sc.nextLine();

        if (estudiantes.containsKey(id)) {
            System.out.println("!!! Ya existe un estudiante con ese ID");
            return;
        }

        estudiantes.put(id, new Student(nombre, id));
        System.out.println("✔ Estudiante registrado.");
    }

    static void agregarNota() {
        System.out.print("ID estudiante: ");
        sc.nextLine();
        String id = sc.nextLine();

        Student st = estudiantes.get(id);
        if (st == null) {
            System.out.println("!!! Estudiante no encontrado");
            return;
        }

        System.out.print("Nota (0 a 5): ");
        double n = sc.nextDouble();
        st.addNota(n);
    }

    static void promedio() {
        System.out.print("ID estudiante: ");
        sc.nextLine();
        String id = sc.nextLine();

        Student st = estudiantes.get(id);
        if (st == null) {
            System.out.println("!!! No existe");
            return;
        }

        System.out.println("Promedio: " + st.getPromedio());
    }

    static void eliminarNota() {
        System.out.print("ID estudiante: ");
        sc.nextLine();
        String id = sc.nextLine();

        Student st = estudiantes.get(id);
        if (st == null) {
            System.out.println("!!! No existe");
            return;
        }

        System.out.println("Notas actuales:");
        for (int i = 0; i < st.getNotas().size(); i++) {
            System.out.println(i + " -> " + st.getNotas().get(i));
        }

        System.out.print("Índice de nota a eliminar: ");
        int idx = sc.nextInt();
        st.deleteNota(idx);
    }

    static void eliminarEstudiante() {
        System.out.print("ID estudiante: ");
        sc.nextLine();
        String id = sc.nextLine();

        if (estudiantes.remove(id) != null) {
            System.out.println("✔ Estudiante eliminado.");
        } else {
            System.out.println("!!! No existe.");
        }
    }

    static void listar() {
        if (estudiantes.isEmpty()) {
            System.out.println("No hay estudiantes registrados.");
            return;
        }

        estudiantes.values().forEach(s ->
            System.out.println(s.getId() + " - " + s.getNombre() + " (Prom: " + s.getPromedio() + ")")
        );
    }
}

