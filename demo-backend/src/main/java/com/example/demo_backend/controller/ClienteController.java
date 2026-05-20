package com.example.demo_backend.controller;

import com.example.demo_backend.dto.ClienteRequestDTO;
import com.example.demo_backend.dto.ClienteResponseDTO;
import com.example.demo_backend.entity.Cliente;
import com.example.demo_backend.repository.ClienteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clientes")
@RequiredArgsConstructor
public class ClienteController {

    private final ClienteRepository clienteRepository;

    @GetMapping
    public ResponseEntity<List<ClienteResponseDTO>> getAll() {
        List<ClienteResponseDTO> clientes = clienteRepository.findAll().stream()
                .map(this::toResponseDTO)
                .toList();
        return ResponseEntity.ok(clientes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClienteResponseDTO> getById(@PathVariable Long id) {
        return clienteRepository.findById(id)
                .map(cliente -> ResponseEntity.ok(toResponseDTO(cliente)))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ClienteResponseDTO> create(@RequestBody ClienteRequestDTO request) {
        Cliente cliente = new Cliente();
        cliente.setNombres(request.getNombres());
        cliente.setApellidos(request.getApellidos());
        cliente.setTelefono(request.getTelefono());
        cliente.setCiudad(request.getCiudad());
        cliente.setPuestoTrabajo(request.getPuestoTrabajo());
        cliente.setSueldo(request.getSueldo());

        Cliente saved = clienteRepository.save(cliente);
        return ResponseEntity.status(HttpStatus.CREATED).body(toResponseDTO(saved));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ClienteResponseDTO> update(@PathVariable Long id, @RequestBody ClienteRequestDTO request) {
        return clienteRepository.findById(id)
                .map(cliente -> {
                    cliente.setNombres(request.getNombres());
                    cliente.setApellidos(request.getApellidos());
                    cliente.setTelefono(request.getTelefono());
                    cliente.setCiudad(request.getCiudad());
                    cliente.setPuestoTrabajo(request.getPuestoTrabajo());
                    cliente.setSueldo(request.getSueldo());
                    Cliente updated = clienteRepository.save(cliente);
                    return ResponseEntity.ok(toResponseDTO(updated));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!clienteRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        clienteRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

 
}
