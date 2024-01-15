package com.example.sprint2backend.controller;

import com.example.sprint2backend.dto.IFruitsDto;
import com.example.sprint2backend.model.product.FruitImage;
import com.example.sprint2backend.model.product.FruitOrigin;
import com.example.sprint2backend.model.product.Fruits;
import com.example.sprint2backend.service.*;
import com.example.sprint2backend.service.product.IFruitImageService;
import com.example.sprint2backend.service.product.IFruitService;
import com.example.sprint2backend.service.product.IFruitTypeService;
import org.springframework.beans.factory.annotation.Autowired;
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
        if (fruits != null) {
            return new ResponseEntity<>(fruits, HttpStatus.OK);
        }
        return new ResponseEntity<>("Không tìm thấy dữ liệu", HttpStatus.NOT_FOUND);
    }
    @GetMapping("/homeList")
    public ResponseEntity<?> getFruitListHomePage(@RequestParam(name = "type", defaultValue = "", required = false) String type) {
        List<IFruitsDto> fruits = fruitService.findFruitsByFruitTypeHomePage(type);
        if (fruits != null) {
            return new ResponseEntity<>(fruits, HttpStatus.OK);
        }
        return new ResponseEntity<>("Không tìm thấy dữ liệu", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/productsList")
    public ResponseEntity<?> getFruitListProductsPage(@RequestParam(name = "type", defaultValue = "", required = false) String type,
                                                      @RequestParam(name = "origin", defaultValue = "", required = false) String origin,
                                                      @RequestParam(name = "maxPrice", defaultValue = "", required = false) String maxPrice) {
        List<IFruitsDto> fruits = fruitService.findFruitsByFruitTypeProductsPage(type, origin, maxPrice);
        if (fruits != null) {
            return new ResponseEntity<>(fruits, HttpStatus.OK);
        }
        return new ResponseEntity<>("Không tìm thấy dữ liệu.", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<?> getImageList(@PathVariable(name = "id", required = false) String id) {

        List<FruitImage> fruitImages = fruitImageService.findFruitImagesByFruits(id);
        if (fruitImages != null) {
            return new ResponseEntity<>(fruitImages, HttpStatus.OK);
        }
        return new ResponseEntity<>("Không tìm thấy danh sách.", HttpStatus.NOT_FOUND);
    }
}
