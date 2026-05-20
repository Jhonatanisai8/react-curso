package com.example.demo_backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo_backend.dto.ClienteRequestDTO;
import com.example.demo_backend.dto.ClienteResponseDTO;
import com.example.demo_backend.entity.Cliente;
import com.example.demo_backend.mapper.MapperCliente;
import com.example.demo_backend.repository.ClienteRepository;
import com.example.demo_backend.service.IClienteService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ClienteServiceIMPL implements IClienteService {

    private final ClienteRepository clienteRepository;

    private final MapperCliente mapperCliente;

    @Override
    public ClienteResponseDTO create(ClienteRequestDTO request) {
        Cliente cliente = new Cliente();
        cliente.setNombres(request.getNombres());
        cliente.setApellidos(request.getApellidos());
        cliente.setTelefono(request.getTelefono());
        cliente.setCiudad(request.getCiudad());
        cliente.setPuestoTrabajo(request.getPuestoTrabajo());
        cliente.setSueldo(request.getSueldo());
        Cliente saved = clienteRepository.save(cliente);
        return mapperCliente.toResponseDTO(saved);
    }

    @Override
    public List<ClienteResponseDTO> getAll() {
        return clienteRepository.findAll().stream()
                .map(mapperCliente::toResponseDTO)
                .toList();

    }

    @Override
    public ClienteResponseDTO getById(Long id) {
        return clienteRepository.findById(id)
                .map(mapperCliente::toResponseDTO)
                .orElse(null);
    }

    @Override
    public ClienteResponseDTO update(Long id, ClienteRequestDTO request) {
        return clienteRepository.findById(id)
                .map(cliente -> {
                    cliente.setNombres(request.getNombres());
                    cliente.setApellidos(request.getApellidos());
                    cliente.setTelefono(request.getTelefono());
                    cliente.setCiudad(request.getCiudad());
                    cliente.setPuestoTrabajo(request.getPuestoTrabajo());
                    cliente.setSueldo(request.getSueldo());
                    Cliente updated = clienteRepository.save(cliente);
                    return mapperCliente.toResponseDTO(updated);
                })
                .orElse(null);
    }

    @Override
    public void delete(Long id) {
        if (clienteRepository.findById(id).isPresent()) {
            clienteRepository.deleteById(id);
        } else {
            throw new RuntimeException("Cliente no encontrado");
        }
    }

}
