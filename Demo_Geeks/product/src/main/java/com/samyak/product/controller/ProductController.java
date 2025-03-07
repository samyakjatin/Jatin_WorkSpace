package com.samyak.product.controller;

import com.samyak.product.domain.MyProduct;
import com.samyak.product.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    /**
     * Create a new product.
     *
     * @param product the product to create
     * @return the ResponseEntity with status 200 (OK) and with body of the new product
     */
    @PostMapping("/product")
    public ResponseEntity<MyProduct> saveProduct(@RequestBody MyProduct product) {
        MyProduct newProduct = productService.saveProduct(product);
        return ResponseEntity.ok(newProduct);
    }

    /**
     * Get all products.
     *
     * @return the ResponseEntity with status 200 (OK) and with body of the list of products
     */
    @GetMapping("/products")
    public List<MyProduct> getAllProducts() {
        return productService.getAllProducts();
    }

    /**
     * Get a product by ID.
     *
     * @param id the ID of the product to get
     * @return the ResponseEntity with status 200 (OK) and with body of the product, or with status 404 (Not Found) if the product does not exist
     */
    @GetMapping("/products/{id}")
    public ResponseEntity<MyProduct> getProductById(@PathVariable Long id) {
        Optional<MyProduct> product = productService.getProductById(id);
        return product.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    /**
     * Update a product by ID.
     *
     * @param id the ID of the product to update
     * @param product the updated product
     * @return the ResponseEntity with status 200 (OK) and with body of the updated product, or with status 404 (Not Found) if the product does not exist
     */
    @PutMapping("/products/{id}")
    public ResponseEntity<MyProduct> updateProduct(@PathVariable Long id, @RequestBody MyProduct product) {
        MyProduct updatedProduct = productService.updateProduct(id, product);
        return ResponseEntity.ok(updatedProduct);
    }

    /**
     * Delete a product by ID.
     *
     * @param id the ID of the product to delete
     * @return the ResponseEntity with status 200 (OK) and with body of the message "Product deleted successfully"
     */
    @DeleteMapping("/products/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.ok("Product deleted successfully");
    }
}
