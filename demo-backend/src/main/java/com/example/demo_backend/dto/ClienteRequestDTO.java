package com.example.demo_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClienteRequestDTO {
    private String nombres;
    private String apellidos;
    private String telefono;
    private String ciudad;
    private String puestoTrabajo;
    private Double sueldo;
}
