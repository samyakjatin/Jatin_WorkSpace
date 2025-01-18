package Repository_SpringJPA;



import Model_JPA_Entity.Form;
import org.springframework.data.jpa.repository.JpaRepository;


public interface FormRepository extends JpaRepository<Form,Long>{ //Form class
	
	
}
