package com.examportal.Entity;

import org.springframework.security.core.GrantedAuthority;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
public class Authority implements GrantedAuthority  {

    private String authority;


    public Authority(String authority) {
        this.authority = authority;
    }

    @Override
    public String getAuthority() {

        return this.authority;
       
    }

   

    

}
