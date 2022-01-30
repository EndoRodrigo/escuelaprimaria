package com.endorodrigo.primaria.excepciones;

import java.util.Date;

import org.hibernate.annotations.NotFound;
import org.hibernate.exception.JDBCConnectionException;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import com.endorodrigo.primaria.model.ErrorMessage;

@ControllerAdvice
public class GlobalExceptionHandler {
	
	 @ExceptionHandler(NumberFormatException.class)
	  public ResponseEntity<ErrorMessage> numberFormatException(NumberFormatException ex, WebRequest request) {
	        ErrorMessage message = new ErrorMessage(
	        HttpStatus.BAD_REQUEST.value(),
	        new Date(),
	        ex.getMessage(),
	        request.getDescription(false));
	    
	    return new ResponseEntity<ErrorMessage>(message, HttpStatus.BAD_REQUEST);
	  }
	 
	 @ExceptionHandler(JDBCConnectionException.class)
	  public ResponseEntity<ErrorMessage> ConnectException(JDBCConnectionException ex, WebRequest request) {
	        ErrorMessage message = new ErrorMessage(
	        HttpStatus.INTERNAL_SERVER_ERROR.value(),
	        new Date(),
	        ex.getMessage(),
	        request.getDescription(false));
	    
	    return new ResponseEntity<ErrorMessage>(message, HttpStatus.INTERNAL_SERVER_ERROR);
	  }
	 
	 @ExceptionHandler(NotFoundException.class)
	  public ResponseEntity<ErrorMessage> ConnectException(NotFoundException ex, WebRequest request) {
	        ErrorMessage message = new ErrorMessage(
	        HttpStatus.NOT_FOUND.value(),
	        new Date(),
	        ex.getMessage(),
	        request.getDescription(false));
	    
	    return new ResponseEntity<ErrorMessage>(message, HttpStatus.NOT_FOUND);
	  }
	 
	 

}
