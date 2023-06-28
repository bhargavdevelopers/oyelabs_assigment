const mysql = require("mysql");

const customers = [
  {
    email: "anurag11@yopmail.com",
    name: "anurag",
  },
  {
    email: "sameer11@yopmail.com",
    name: "sameer",
  },
  {
    email: "ravi11@yopmail.com",
    name: "ravi",
  },
  {
    email: "akash11@yopmail.com",
    name: "akash",
  },
  {
    email: "anjali11@yopmail.com",
    name: "anjai",
  },
  {
    email: "santosh11@yopmail.com",
    name: "santosh",
  },
];

const connection = mysql.createConnection({
  host: "localhost",
  user: "your_username",
  password: "your_password",
  database: "your_database",
});

function insertCustomers(customers) {
  customers.forEach((customer) => {
    connection.query(
      "SELECT * FROM customers WHERE email = ?",
      [customer.email],
      (error, results) => {
        if (error) {
          console.error("Error checking email:", error);
        } else {
          if (results.length > 0) {
            // Email already exists, update the name
            connection.query(
              "UPDATE customers SET name = ? WHERE email = ?",
              [customer.name, customer.email],
              (error, results) => {
                if (error) {
                  console.error("Error updating name:", error);
                } else {
                  console.log(`Name updated for email: ${customer.email}`);
                }
              }
            );
          } else {
            // Email doesn't exist, insert a new record
            connection.query(
              "INSERT INTO customers (email, name) VALUES (?, ?)",
              [customer.email, customer.name],
              (error, results) => {
                if (error) {
                  console.error("Error inserting data:", error);
                } else {
                  console.log(`Data inserted for email: ${customer.email}`);
                }
              }
            );
          }
        }
      }
    );
  });
}

// Connect to the database
connection.connect((error) => {
  if (error) {
    console.error("Error connecting to the database:", error);
  } else {
    console.log("Connected to the database.");

    // Call the function to insert customers
    insertCustomers(customers);
  }
});
