package com.example.demo_backend.service;

import java.util.List;

import com.example.demo_backend.dto.ClienteRequestDTO;
import com.example.demo_backend.dto.ClienteResponseDTO;

public interface IClienteService {

    List<ClienteResponseDTO> getAll();

    ClienteResponseDTO getById(Long id);

    ClienteResponseDTO create(ClienteRequestDTO request);

    ClienteResponseDTO update(Long id, ClienteRequestDTO request);

    void delete(Long id);
}