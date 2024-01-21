package com.example.sprint2backend.service;

import com.example.sprint2backend.dto.IOrdersDetailDto;
import com.example.sprint2backend.model.Cart;
import com.example.sprint2backend.model.OrderDetail;
import com.example.sprint2backend.model.Orders;
import com.example.sprint2backend.model.account.Account;
import com.example.sprint2backend.model.product.Fruits;
import com.example.sprint2backend.repository.IAccountRepository;
import com.example.sprint2backend.repository.ICartRepository;
import com.example.sprint2backend.repository.IFruitRepository;
import com.example.sprint2backend.repository.IOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private IOrderRepository orderRepository;
    @Autowired
    private IAccountRepository accountRepository;
    @Autowired
    private ICartRepository cartRepository;
    @Autowired
    private IFruitRepository fruitRepository;

    @Override
    public List<Orders> findAll() {
        return null;
    }

    @Override
    public Optional<Orders> findById(Integer id) {
        return Optional.empty();
    }

    @Override
    public void save(Orders orders) {

    }

    @Override
    public void remove(Integer id) {

    }
    @Override
    public void createOrder(int userId) throws Exception {
        Account account = accountRepository.findAccountsById(userId);
        if (account == null){
            throw new Exception("Không tìm thấy account");
        }
        Orders orders = new Orders();
        orders.setOrderDate(String.valueOf(LocalDate.now()));
        orders.setAccount(account);
        orders.setTotalAmount(0);
        orders.setName("a");
        orderRepository.createOrder(orders);
    }

    @Override
    public void createOrderDetail(int userId) throws Exception {
        Orders orders = orderRepository.findOrderById(userId);
        List<Cart> carts = cartRepository.findCartById(userId);
        if (orders == null){
            throw new Exception("Không tìm thấy order order!");
        }
        for (Cart cart : carts){
            OrderDetail orderDetail = new OrderDetail();
            Fruits fruits = fruitRepository.findFruitsById(cart.getFruits().getId());
            if (fruits == null){
                throw new Exception("Không tìm thấy sản phẩm!");
            }
            orderDetail.setOrders(orders);
            orderDetail.setFruits(fruits);
            orderDetail.setPrice(fruits.getPrice());
            orderDetail.setQuantity(cart.getQuantity());

            int isOrderDetailCreated = orderRepository.createOrderDetail(orderDetail);
            if (isOrderDetailCreated > 0){
                Integer quantityAfterPayment = fruits.getInventory() - orderDetail.getQuantity();
                if (quantityAfterPayment <= 0){
                    throw new Exception("Lỗi số lượng không đủ");
                }
                fruitRepository.updateQuantityFruitsAfterPayment(fruits.getId(),quantityAfterPayment);
            }
        }
        cartRepository.deleteCart(userId);
    }

    @Override
    public void updateTotalMoney(int userId) throws Exception {
        Orders orders = orderRepository.findOrderById(userId);
        List<IOrdersDetailDto> orderDetails = orderRepository.findOrderDetailById(orders.getId());
        if (orderDetails.isEmpty()){
            throw new Exception("Không tìm thấy order detail");
        }
        double total = 0;
        for (IOrdersDetailDto orderDetail: orderDetails) {
            total += orderDetail.getPriceFruits() * orderDetail.getQuantityFruits();
        }
        orderRepository.updateTotalMoney(total,orders.getId());
    }
}
