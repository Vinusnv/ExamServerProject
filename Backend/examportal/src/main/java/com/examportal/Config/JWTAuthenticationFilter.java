package com.examportal.Config;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Service;
import org.springframework.web.filter.OncePerRequestFilter;

import com.examportal.ServiceImpl.UserDetailServiceImpl;

import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Service
public class JWTAuthenticationFilter extends OncePerRequestFilter {

	@Autowired
	private UserDetailServiceImpl userDetailServiceImpl;

	@Autowired
	private JWTUtils jwtutil;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		final String requestTokenHeader = request.getHeader("Authorization");

		System.out.println("checking " +requestTokenHeader);
		String username =null;
		String jwtToken =null;

		if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) { 

			jwtToken = requestTokenHeader.substring(7);
			try {
				username = this.jwtutil.extractUsername(jwtToken);

			} catch (ExpiredJwtException e) {

				e.printStackTrace();
				System.out.println("Jwt Token has Expired");

			} catch (Exception e) {
				e.printStackTrace();
				System.out.println("Error..");
			}
		} else {
			System.out.println("Invalid Token Not Strted with Bearer");
		}

		// validated token
		if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {

			final UserDetails userDetails = this.userDetailServiceImpl.loadUserByUsername(username);

			if (this.jwtutil.validateToken(jwtToken, userDetails)) {
				// token is valid

				UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
						userDetails, null, userDetails.getAuthorities());

				usernamePasswordAuthenticationToken
						.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

				SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
			} 
		}
		else {
			System.out.println("Token is not valid");
		}

		filterChain.doFilter(request, response);

	}

}
