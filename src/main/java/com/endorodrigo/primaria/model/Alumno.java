package com.endorodrigo.primaria.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "alumnos")
public class Alumno extends Persona {
	
	@Column(name = "matricula")
	private boolean matricula;
	
	@Column(name = "grado")
	private String grado;
	
	@Column(name = "colegio")
	private String colegio;
	
	public boolean isMatricula() {
		return matricula;
	}
	public void setMatricula(boolean matricula) {
		this.matricula = matricula;
	}
	public String getGrado() {
		return grado;
	}
	public void setGrado(String grado) {
		this.grado = grado;
	}
	public String getColegio() {
		return colegio;
	}
	public void setColegio(String colegio) {
		this.colegio = colegio;
	}
	
}
