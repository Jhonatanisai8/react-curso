package com.example.demo_backend.mapper;

import com.example.demo_backend.dto.ClienteResponseDTO;
import com.example.demo_backend.entity.Cliente;

public class MapperCliente {
    public ClienteResponseDTO toResponseDTO(Cliente cliente) {
        return new ClienteResponseDTO(
                cliente.getId(),
                cliente.getNombres(),
                cliente.getApellidos(),
                cliente.getTelefono(),
                cliente.getCiudad(),
                cliente.getPuestoTrabajo(),
                cliente.getSueldo());
    }
}
