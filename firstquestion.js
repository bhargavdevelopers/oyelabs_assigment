const express = require("express");
const app = express();

// Sample customer data
const customers = [
  { id: 1, name: "John Doe", phoneNumber: "1234567890" },
  { id: 2, name: "Jane Smith", phoneNumber: "9876543210" },
];

// Add Customer API
app.post("/customers", (req, res) => {
  try {
    // Retrieve and validate input parameters
    const { id, name, phoneNumber } = req.body;
    if (!id || !name || !phoneNumber) {
      throw new Error("Missing required fields: id, name, phoneNumber");
    }

    // Check for duplicate phone number
    const duplicatePhoneNumber = customers.find(
      (customer) => customer.phoneNumber === phoneNumber
    );

    if (duplicatePhoneNumber) {
      throw new Error("Phone number already exists");
    }

    // Add the new customer
    const newCustomer = { id, name, phoneNumber };
    customers.push(newCustomer);

    // Return success response
    res
      .status(201)
      .json({ success: true, message: "Customer added successfully" });
  } catch (error) {
    // Log and return error response
    console.error("Error adding customer:", error.message);
    res.status(400).json({ success: false, error: error.message });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
