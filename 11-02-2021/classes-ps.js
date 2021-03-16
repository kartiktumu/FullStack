class Customer {
    name;
    address;
    age;
    adharcardnumber;

    createAccount(name,address,age,adharcardnumber)
    {
            this.name=name;
            this.address=address;
            this.adharcardnumber=adharcardnumber;
            this.age=age;
    }
}
var customer1 = new Customer();
customer1.createAccount("Kartik", "Hyderabad","20","12345");
console.log(customer1);

var customer2 = new Customer();
customer2.createAccount("tumu", "delhi","40","9876545");
console.log(customer2);