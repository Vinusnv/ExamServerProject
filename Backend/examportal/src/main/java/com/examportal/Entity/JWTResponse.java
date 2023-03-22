package com.examportal.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter
@Setter
public class JWTResponse {

    String token;

	public JWTResponse(String token) {
		super();
		this.token = token;
	}
    
    
    
}
