package com.endorodrigo.primaria.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.endorodrigo.primaria.dao.UserDao;
import com.endorodrigo.primaria.model.UserLogin;

@RestController
public class LoginController {
	
	@Autowired
	private UserDao userDao;

	@RequestMapping(value = "api/login",method = RequestMethod.POST)
	public String login(@RequestBody UserLogin usuario) {
		boolean status = userDao.validarCredencialesUsuario(usuario);
		if (!status) {
			return "FAILED";		
		}else {
			return "OK";
		}
	}
	
	@RequestMapping(value = "api/registrar", method = RequestMethod.POST)
	public String registrar(@RequestBody UserLogin usuario) {
		UserLogin newRegister = userDao.registrarEstudiante(usuario);
		if (newRegister != null) {
			return "OK";
		}else {
			return "FAILED";
		}
		
	}
}
