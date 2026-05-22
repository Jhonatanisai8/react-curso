package com.example.demo_backend.controller;

import com.example.demo_backend.dto.ClienteRequestDTO;
import com.example.demo_backend.dto.ClienteResponseDTO;
import com.example.demo_backend.service.impl.ClienteServiceIMPL;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clientes")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ClienteController {

    private final ClienteServiceIMPL clienteServiceIMPL;

    @GetMapping
    public ResponseEntity<List<ClienteResponseDTO>> getAll() {
        List<ClienteResponseDTO> clientes = clienteServiceIMPL.getAll();
        return ResponseEntity.ok(clientes);

    }

    @GetMapping("/{id}")
    public ResponseEntity<ClienteResponseDTO> getById(@PathVariable Long id) {
        return new ResponseEntity<>(clienteServiceIMPL.getById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ClienteResponseDTO> create(@RequestBody ClienteRequestDTO request) {
        ClienteResponseDTO created = clienteServiceIMPL.create(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ClienteResponseDTO> update(@PathVariable Long id, @RequestBody ClienteRequestDTO request) {
        return new ResponseEntity<>(clienteServiceIMPL.update(id, request), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        clienteServiceIMPL.delete(id);
        return ResponseEntity.noContent().build();
    }

}
