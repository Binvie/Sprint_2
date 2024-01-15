package com.example.demo_configjwt.security.jwt;

import com.example.demo_configjwt.security.userPrinciple.UserPrinciple;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;


@Component
public class JwtProvider {
    private static final Logger LOGGER = LoggerFactory.getLogger(JwtProvider.class);
    private String jwtSecret = "Thien@gmail.com";
    private int jwtExpiration = 86400;

    public String createToken(Authentication authentication){
        UserPrinciple userPrinciple = (UserPrinciple) authentication.getPrincipal();
        return Jwts.builder().setSubject(userPrinciple.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime()+jwtExpiration*1000))
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }
    public boolean validateToken(String token){
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token);
            return true;
        } catch (SignatureException e){
            LOGGER.error("Invalid JWT signature -> Message: {}",e);
        } catch (MalformedJwtException e){
            LOGGER.error("Invalid format Token -> Message: {}",e);
        } catch (ExpiredJwtException e){
            LOGGER.error("Expired JWT token -> Message: {}",e);
        } catch (UnsupportedJwtException e){
            LOGGER.error("Unsupported JWT token -> Message: {}",e);
        } catch (IllegalArgumentException e){
            LOGGER.error("JWT claims string is empty --> Message {}",e);
        }
        return false;
    }
    public String getUerNameFromToken(String token){
        String userName = Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
        return userName;
    }
}
