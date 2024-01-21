package com.example.sprint2backend.controller;

import com.example.sprint2backend.dto.DetailFruit;
import com.example.sprint2backend.dto.DetailResponse;
import com.example.sprint2backend.dto.IFruitsDto;
import com.example.sprint2backend.dto.IImageDto;
import com.example.sprint2backend.model.product.Fruits;
import com.example.sprint2backend.service.*;
import com.example.sprint2backend.service.product.IFruitImageService;
import com.example.sprint2backend.service.product.IFruitService;
import com.example.sprint2backend.service.product.IFruitTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/fruits")
public class FruitsController {
    @Autowired
    private ICartService cartService;

    @Autowired
    private IOrderService orderService;

    @Autowired
    private IOrderDetailService orderDetailService;

    @Autowired
    private IFruitService fruitService;

    @Autowired
    private IFruitImageService fruitImageService;

    @Autowired
    private IFruitTypeService fruitTypeService;

    @GetMapping()
    public ResponseEntity<?> getFruitList(@RequestParam(name = "type", defaultValue = "", required = false) String type,
                                          @RequestParam(name = "origin", defaultValue = "", required = false) String origin) {
        List<Fruits> fruits = fruitService.findFruitsByTypeAndOrigin(type, origin);
        if (!fruits.isEmpty()) {
            return new ResponseEntity<>(fruits, HttpStatus.OK);
        }
        return new ResponseEntity<>("Không tìm thấy dữ liệu", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/homeList")
    public ResponseEntity<?> getFruitListHomePage(@RequestParam(name = "type", defaultValue = "", required = false) String type) {
        List<IFruitsDto> fruits = fruitService.findFruitsByFruitTypeHomePage(type);
        if (!fruits.isEmpty()) {
            return new ResponseEntity<>(fruits, HttpStatus.OK);
        }
        return new ResponseEntity<>("Không tìm thấy dữ liệu", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/productsList")
    public ResponseEntity<?> getFruitListProductsPage(@RequestParam(name = "type", defaultValue = "", required = false) String type,
                                                      @RequestParam(name = "origin", defaultValue = "", required = false) String origin,
                                                      @RequestParam(name = "maxPrice", defaultValue = "1500000", required = false) String maxPrice,
                                                      @RequestParam(name = "page", defaultValue = "0", required = false) int page,
                                                      @RequestParam(name = "name", defaultValue = "", required = false) String name,
                                                      @RequestParam(name = "sortPrice", defaultValue = "", required = false) String sortPrice) {
        Pageable pageable = PageRequest.of(page, 9);
        if (sortPrice.equals("1")) {
            pageable = PageRequest.of(page, 9, Sort.by("fruitsPrice").ascending());
        } else if (sortPrice.equals("2")) {
            pageable = PageRequest.of(page, 9, Sort.by("fruitsPrice").descending());
        } else pageable = PageRequest.of(page, 9);
        Page<IFruitsDto> fruits = fruitService.findFruitsByFruitTypeProductsPage(type, origin, maxPrice, pageable, name);
        if (fruits != null) {
            return new ResponseEntity<>(fruits, HttpStatus.OK);
        }
        return new ResponseEntity<>("Không tìm thấy dữ liệu.", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<?> getFruits(@PathVariable(name = "id") Integer id){
        DetailFruit fruits = fruitService.findDetailFruitsById(id);
        List<IImageDto> images = fruitService.findImageByFruits(id);

        DetailResponse detailResponse = new DetailResponse();
        detailResponse.setFruit(fruits);
        detailResponse.setImages(images);
        if (fruits == null || images.isEmpty()){
            return new ResponseEntity<>("Không tìm thấy sản phẩm",HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(detailResponse,HttpStatus.OK);
    }
}
