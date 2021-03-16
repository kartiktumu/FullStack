function* swiggyorder()
{
    console.log("Order Places");
    yield "block1";
    console.log("Pay Bill");
    yield "block2";
    console.log("Order Prepared");
    yield "block3";
    console.log("Delivery guy pick the order");
    yield "block4";
    console.log("Order Delivered");
    yield "block5";
}

var iterator = swiggyorder();

iterator.next();
console.log("Order Placed Successfully");
iterator.next();
console.log("Bill Payed Successfully");
iterator.next();
console.log("Order prepared Successfully");
iterator.next();
console.log("Order picked up Successfully");
iterator.next();
console.log("Order delivered Successfully");