package com.example.sprint2backend.config;

import com.example.sprint2backend.model.auth.MyUserDetail;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.security.Key;
import java.util.Date;


@Component
public class JwtTokenUtil implements Serializable {
    private static final String SECRET_KEY="======================C0623G1===========================";
    private static final long EXPIRE_TIME= 86400000000L;
    public String createToken(MyUserDetail userDetail){
        String jwt=generateTokenFromUsername(userDetail.getUsername());
        return jwt;
    }
    private Key key(){
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(SECRET_KEY));
    }
    public String generateTokenFromUsername(String username){
        String str=Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + EXPIRE_TIME))
                .signWith(key(), SignatureAlgorithm.HS256)
                .compact();
        return str;
    }
    public String getUsernameFromJwtToken(String token){
        return Jwts.parser().setSigningKey(key()).build()
                .parseClaimsJws(token).getBody().getSubject();
    }
    public boolean validateJwtToken(String authToken) throws Exception {
        try {
            Jwts.parser().setSigningKey(key()).build().parse(authToken);
            return true;
        } catch (MalformedJwtException e){
            throw new Exception("Token JWT không hợp lệ: "+e.getMessage());
        } catch (ExpiredJwtException e) {
            throw new Exception("Token JWT đã hết hạn: " + e.getMessage());
        } catch (UnsupportedJwtException e) {
            throw new Exception("Token JWT không được hỗ trợ: " + e.getMessage());
        } catch (IllegalArgumentException e) {
            throw new Exception("Token JWT không hợp lệ: " + e.getMessage());
        }
    }


}
