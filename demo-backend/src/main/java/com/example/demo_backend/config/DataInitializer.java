package com.example.demo_backend.config;

import com.example.demo_backend.entity.Cliente;
import com.example.demo_backend.repository.ClienteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final ClienteRepository clienteRepository;

    @Override
    public void run(String... args) throws Exception {
        if (clienteRepository.count() == 0) {
            clienteRepository.saveAll(java.util.List.of(
                    new Cliente(null, "Carlos", "Garcia Lopez", "555-1001", "Madrid", "Ingeniero de Software", 4500.00),
                    new Cliente(null, "Maria", "Rodriguez Martinez", "555-1002", "Barcelona", "Diseñadora UX", 3800.00),
                    new Cliente(null, "Juan", "Fernandez Torres", "555-1003", "Valencia", "Analista de Datos", 4200.00),
                    new Cliente(null, "Ana", "Lopez Sanchez", "555-1004", "Sevilla", "Project Manager", 5000.00),
                    new Cliente(null, "Pedro", "Martinez Ruiz", "555-1005", "Bilbao", "DevOps Engineer", 4800.00),
                    new Cliente(null, "Laura", "Gomez Diaz", "555-1006", "Madrid", "QA Tester", 3200.00),
                    new Cliente(null, "Diego", "Hernandez Moreno", "555-1007", "Zaragoza", "Arquitecto de Software",
                            5500.00),
                    new Cliente(null, "Sofia", "Jimenez Alvarez", "555-1008", "Malaga", "Scrum Master", 4300.00),
                    new Cliente(null, "Miguel", "Romero Navarro", "555-1009", "Murcia", "Backend Developer", 4100.00),
                    new Cliente(null, "Elena", "Torres Vega", "555-1010", "Alicante", "Frontend Developer", 3900.00),
                    new Cliente(null, "Javier", "Diaz Castro", "555-1011", "Granada", "Data Scientist", 4700.00),
                    new Cliente(null, "Carmen", "Ortiz Ramos", "555-1012", "Valladolid", "Product Owner", 5200.00),
                    new Cliente(null, "Roberto", "Sanchez Gil", "555-1013", "Palma", "SysAdmin", 3600.00),
                    new Cliente(null, "Isabel", "Morales Leon", "555-1014", "Las Palmas", "UI Designer", 3500.00),
                    new Cliente(null, "Fernando", "Ruiz Herrera", "555-1015", "Cordoba", "Full Stack Developer",
                            4400.00),
                    new Cliente(null, "Patricia", "Martin Serrano", "555-1016", "Santiago", "Business Analyst",
                            4000.00),
                    new Cliente(null, "Alejandro", "Vargas Molina", "555-1017", "Tenerife", "Cloud Engineer", 5100.00),
                    new Cliente(null, "Lucia", "Pascual Blanco", "555-1018", "Salamanca", "Technical Writer", 3100.00),
                    new Cliente(null, "Rafael", "Iglesias Suarez", "555-1019", "Pamplona", "Security Engineer",
                            5300.00),
                    new Cliente(null, "Marta", "Delgado Prieto", "555-1020", "San Sebastian", "Mobile Developer",
                            4250.00)));
        }
    }
}
