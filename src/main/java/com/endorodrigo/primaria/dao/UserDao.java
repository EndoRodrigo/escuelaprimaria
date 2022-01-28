package com.endorodrigo.primaria.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.endorodrigo.primaria.model.UserLogin;

@Repository
@Transactional
public class UserDao {
	
	@PersistenceContext
	EntityManager entityManager;
	
	public boolean validarCredencialesUsuario(UserLogin user) {
		String query = "FROM UserLogin WHERE correo= :email";
		UserLogin identidad = (UserLogin) entityManager.createQuery(query)
				.setParameter("email", user.getCorreo()).getSingleResult();	
		if (identidad.getCorreo().equals(user.getCorreo()) && identidad.getPassword().equals(user.getPassword())) {
			return true;
		}else {
			return false;
		}

	}
	
	
	public UserLogin registrarEstudiante(UserLogin estudiante) {
		return entityManager.merge(estudiante);
	}
}
