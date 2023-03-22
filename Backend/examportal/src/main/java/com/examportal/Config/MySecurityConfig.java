package com.examportal.Config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.examportal.ServiceImpl.UserDetailServiceImpl;


@Configuration
@EnableWebSecurity
public class MySecurityConfig {
	
	@Autowired
	private UserDetailServiceImpl userDetailServiceImpl;
	
	@Autowired
	private JWTAuthenticationEntryPoint unauthorizedhandler;
	
	@Autowired
	private  JWTAuthenticationFilter jwtAuthenticationFilter;
	
	@Bean
	public PasswordEncoder passwordEncoder()
	{
		return new BCryptPasswordEncoder();
	}
	
	
	    @Bean
	    public AuthenticationManager authenticationManagerBean(AuthenticationConfiguration authenticationConfiguration) throws Exception
	    {
	        return  authenticationConfiguration.getAuthenticationManager();
	    }
	    
	   // @Bean
	   protected void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
	        auth.userDetailsService(userDetailServiceImpl).passwordEncoder(passwordEncoder());
	    }


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception
    {

    http
    .csrf()
    .disable()
    .cors()
    .disable()
    .authorizeHttpRequests()
    .requestMatchers("/api/examserver/generate-token","/api/examserver/create","/api/examserver/alluser").permitAll()
    .requestMatchers(HttpMethod.OPTIONS).permitAll()
    .anyRequest().authenticated()
    .and().exceptionHandling().authenticationEntryPoint(unauthorizedhandler)
    .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
    .and().httpBasic()
    .and().formLogin();
    
    http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
    
    
  
    
   
    
}
