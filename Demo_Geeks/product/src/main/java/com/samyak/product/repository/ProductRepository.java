package com.samyak.product.repository;

import com.samyak.product.domain.MyProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository interface for Product entity.
 */
@Repository
public interface ProductRepository extends JpaRepository<MyProduct, Long> {
}

