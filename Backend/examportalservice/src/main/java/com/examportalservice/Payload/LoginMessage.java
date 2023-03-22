package com.examportalservice.Payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoginMessage {
	
	private String message;
	private boolean status;
	private String username;
	
	
	
	public LoginMessage(String message, boolean status) {
		super();
		this.message = message;
		this.status = status;
	}



	
	
	
	

}
