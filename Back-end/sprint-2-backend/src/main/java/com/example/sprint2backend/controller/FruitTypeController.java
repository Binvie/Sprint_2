package com.example.sprint2backend.controller;

import com.example.sprint2backend.model.product.FruitImage;
import com.example.sprint2backend.model.product.FruitOrigin;
import com.example.sprint2backend.model.product.FruitType;
import com.example.sprint2backend.service.*;
import com.example.sprint2backend.service.product.IFruitImageService;
import com.example.sprint2backend.service.product.IFruitOriginService;
import com.example.sprint2backend.service.product.IFruitService;
import com.example.sprint2backend.service.product.IFruitTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/type")
public class FruitTypeController {

    @Autowired
    private IFruitOriginService fruitOriginService;

    @Autowired
    private IOrderDetailService orderDetailService;

    @Autowired
    private IFruitImageService fruitImageService;
    @Autowired
    private IFruitService fruitService;

    @Autowired
    private IFruitTypeService fruitTypeService;

    @GetMapping()
    public ResponseEntity<?> getTypeList() {
        List<FruitType> fruitTypeList = fruitTypeService.findAll();
        if (fruitTypeList != null) {
            return new ResponseEntity<>(fruitTypeList, HttpStatus.OK);
        }
        return new ResponseEntity<>("Không tìm thấy danh sách", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/origin")
    public ResponseEntity<?> getOriginList() {
        List<FruitOrigin> fruitOriginList = fruitOriginService.findAll();
        if (fruitOriginList != null) {
            return new ResponseEntity<>(fruitOriginList, HttpStatus.OK);
        }
        return new ResponseEntity<>("Không tìm thấy danh sách", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/image/{id}")
    public ResponseEntity<?> getImageList(@PathVariable(name = "id") String id) {
        List<FruitImage> fruitImages = fruitImageService.findFruitImagesByFruits(id);
        if (fruitImages != null) {
            return new ResponseEntity<>(fruitImages, HttpStatus.OK);
        }
        return new ResponseEntity<>("Không tìm thấy danh sách", HttpStatus.NOT_FOUND);
    }

}
