package Model_JPA_Entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "`Registration`")
public class Form {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userid", nullable = false, unique = true)
    private long userid;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;
//
//    @Column(name = "confirmpassword")
//    private String confirmpassword;

    public long getuserid() {
    	return userid;
    }
    
  
    // Getter and setter for username
    public void setuserid(long userid) {
        this.userid = userid;
    }

    
    
    public String getusername() {
    	return username;
    }
    
  
    // Getter and setter for username
    public void setusername(String username) {
        this.username = username;
    }

    // Getter and setter for password
    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getPassword() {
    	return password;
    }

//    // Getter and setter for confirmPassword
//    public void setconfirmpassword(String confirmPassword) {
//        this.confirmpassword = confirmPassword;
//    }
//    
//    public String getconfirmpassword() {
//    	return confirmpassword;
//    }
}
