package com.endorodrigo.primaria.controller;

import java.util.List;
<<<<<<< HEAD
=======
import java.util.Optional;
>>>>>>> d168083 (Finalizacion del Front para CRUD ESTUDIANTES)

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.endorodrigo.primaria.dao.AlumnoDao;
import com.endorodrigo.primaria.model.Alumno;

@RestController
public class EstudianteController {
	
	@Autowired
	private AlumnoDao alumnoDao;
	
	@RequestMapping(value = "api/alumnos", method = RequestMethod.GET)
	public List<Alumno> getListStudents(){
		List<Alumno> lista = (List<Alumno>) alumnoDao.findAll();
		return lista;
	}
	
	@RequestMapping(value = "api/registrarAlumno", method = RequestMethod.POST)
	public Alumno crearEstudiante(@RequestBody Alumno user) {
		Alumno resgitro = alumnoDao.save(user);
		return resgitro;
	}
	
	@RequestMapping(value = "api/actualizarAlumno", method = RequestMethod.PUT)
	public Alumno actualizarEstudiante(@RequestBody Alumno user) {
		Alumno resgitro = alumnoDao.save(user);
		return resgitro;
	}
	
	@RequestMapping(value = "api/eliminarAlumno", method = RequestMethod.DELETE)
	public void eliminarEstudiante(@RequestBody Alumno user) {	
		alumnoDao.delete(user);
	}
<<<<<<< HEAD
=======
	
	@RequestMapping(value = "api/alumno/{id}", method = RequestMethod.GET)
	public Optional<Alumno> consultarEstudiante(@PathVariable int id) {
		Optional<Alumno> consulta = alumnoDao.findAllById(id);
		return consulta;
	}
>>>>>>> d168083 (Finalizacion del Front para CRUD ESTUDIANTES)

}
