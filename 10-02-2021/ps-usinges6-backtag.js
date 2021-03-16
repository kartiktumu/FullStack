var ceo = "kartik Tumu";
var clients = [

    {
        name:"Arun Kumar",
        company:"HDFC Bank",
        location: "New Delhi"
    },
    {
        name:"Vijay Bansal",
        company:"ICICI Bank",
        location: "Banglore"
    },
    {
        name:"Preeti Singh",
        company:"Bank of Baroda",
        location: "Gurgoan"
    },
    {
        name:"Naraya krishanan",
        company:"KYC Bank",
        location: "Chennai"
    }
]
for(var i=0;i<clients.length;i++)
    {
        console.log(`
            Hello ${clients[i].name},
            We would like to visit your ${clients[i].company} at ${clients[i].location} to discuss about the project 

        Thanks,
        ${ceo}
        Phone pee
`)
    }


