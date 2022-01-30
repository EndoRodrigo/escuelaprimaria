package com.endorodrigo.primaria.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.endorodrigo.primaria.model.Alumno;

@Repository
public interface AlumnoDao extends CrudRepository<Alumno, Long>{


	Optional<Alumno> findAllById(int id);

}
