import React from "react";
import OrderTr from "./orderTr";

const orders=[
  {
    id: 1,
    date: "2-11-22",
    orderId: 631611226493230,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJkTCKEIKqwmEmRS5VUmySJjRCQSYIGyi1Wfib9Ll&s",
    name: "White short Checkered",
    price: 460,
    quantity: 1,
    status: "Packaging"
  },
  {
    id: 2,
    date: "2-11-22",
    orderId: 631611226493230,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJkTCKEIKqwmEmRS5VUmySJjRCQSYIGyi1Wfib9Ll&s",
    name: "White short Checkered",
    price: 460,
    quantity: 1,
    status: "Packaging"
  },
  // {
  //   id: 3,
  //   date: "2-11-22",
  //   orderId: 631611226493230,
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJkTCKEIKqwmEmRS5VUmySJjRCQSYIGyi1Wfib9Ll&s",
  //   name: "White short Checkered",
  //   price: 460,
  //   quantity: 1,
  //   status: "Packaging"
  // },
  // {
  //   id: 4,
  //   date: "2-11-22",
  //   orderId: 631611226493230,
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJkTCKEIKqwmEmRS5VUmySJjRCQSYIGyi1Wfib9Ll&s",
  //   name: "White short Checkered",
  //   price: 460,
  //   quantity: 1,
  //   status: "Packaging"
  // }
]

export default function Orders() {
  return (
    <div
      className="tab-pane fade"
      id="Orders"
      role="tabpanel"
      aria-labelledby="nav-Orders"
      tabIndex="0"
    >
      <h5>MY ORDERS</h5>

      <div className="OrderList">
        {orders.map((item)=>(
            <OrderTr 
                      key={item.id}
                      img={item.img}
                      date={item.date}
                      name={item.name}
                      orderId={item.orderId}
                      status={item.status}
                      quantity={item.quantity}
                      price={item.price}
            />
        ))}
        
      </div>
    </div>
  );
}
