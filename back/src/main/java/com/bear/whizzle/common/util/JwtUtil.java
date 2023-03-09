package com.bear.whizzle.common.util;

import com.bear.whizzle.auth.service.PrincipalDetails;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.util.Date;
import javax.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

@Slf4j
@Component
public class JwtUtil {

    private static final long SECOND = 1000;
    private static final long MINUTE = 60 * SECOND;
    private static final long HOUR = 60 * MINUTE;
    private static final long DAY = 24 * HOUR;
    private static final long REFRESH_TOKEN_EXPIRATION_TIME = 20 * DAY;
    private static final long ACCESS_TOKEN_EXPIRATION_TIME = 30 * MINUTE;
    private final Key key;

    protected JwtUtil(@Value("${jwt.secret}") String secret) {
        this.key = Keys.hmacShaKeyFor(secret.getBytes());
    }

    public String generateToken(PrincipalDetails user, long expirationTime) {
        return Jwts.builder()
                   .claim("nickname", user.getNickname())
                   .claim("email", user.getEmail())
                   .claim("provider", user.getProvider())
                   .setExpiration(new Date(System.currentTimeMillis() + expirationTime))
                   .signWith(key, SignatureAlgorithm.HS256)
                   .compact();
    }

    public String generateRefreshToken(PrincipalDetails user) {
        return this.generateToken(user, REFRESH_TOKEN_EXPIRATION_TIME);
    }

    public String generateAccessToken(PrincipalDetails user) {
        return this.generateToken(user, ACCESS_TOKEN_EXPIRATION_TIME);
    }

    public String resolveToken(HttpServletRequest request) {
        final String authorization = request.getHeader("Authorization");

        // Bearer -> JWT 또는 OAuth 인증을 사용하는 경우 붙인다
        if (StringUtils.hasText(authorization) && authorization.startsWith("Bearer ")) {
            return authorization.substring("Bearer ".length());
        }

        return null;
    }

    private Claims getClaims(String token) {
        return Jwts.parserBuilder()
                   .setSigningKey(key)
                   .build()
                   .parseClaimsJws(token)
                   .getBody();
    }

    public Authentication getAuthentication(String token) {
        final Claims claims = this.getClaims(token);

        final PrincipalDetails user = PrincipalDetails.builder()
                                                      .provider((String) claims.get("provider"))
                                                      .email((String) claims.get("email"))
                                                      .nickname((String) claims.get("nickname"))
                                                      .build();

        return new UsernamePasswordAuthenticationToken(user, token, null);
    }

    public boolean valid(String token) {
        try {
            this.getClaims(token);
            return true;
        } catch (ExpiredJwtException e) {
            log.info("만료된 토큰");
        } catch (JwtException e) {
            log.info("유효하지 않은 토큰");
        } catch (Exception e) {
            log.info("토큰 유효성 검사중 알 수 없는 예외 발생");
        }

        return false;
    }

}
