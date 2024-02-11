import React, { useState, useEffect } from 'react';

function SalesOrderManagement() {
  const [salesOrders, setSalesOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    // Fetch sales order data from the backend upon component mount
    // Update 'salesOrders' state with fetched data
    // Example data structure: { id, customerName, carMake, carModel, totalPrice }
    const exampleSalesOrderData = [
      { id: 1, customerName: 'John Doe', carMake: 'Toyota', carModel: 'Camry', totalPrice: 25000 },
      { id: 2, customerName: 'Jane Smith', carMake: 'Honda', carModel: 'Civic', totalPrice: 22000 },
      // Add more sales orders here
    ];

    setSalesOrders(exampleSalesOrderData);
  }, []);

  // Function to handle order selection for editing
  const handleEditClick = (order) => {
    setSelectedOrder(order);
  };

  // Function to handle order deletion
  const handleDeleteClick = (order) => {
    // Implement logic to delete the selected order from the backend
    // After successful deletion, update 'salesOrders' state
    const updatedSalesOrders = salesOrders.filter((o) => o.id !== order.id);
    setSalesOrders(updatedSalesOrders);
  };

  // Render the sales order table
  const renderSalesOrderTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Car Make</th>
            <th>Car Model</th>
            <th>Total Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {salesOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.customerName}</td>
              <td>{order.carMake}</td>
              <td>{order.carModel}</td>
              <td>{order.totalPrice}</td>
              <td>
                <button onClick={() => handleEditClick(order)}>Edit</button>
                <button onClick={() => handleDeleteClick(order)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  // Render the selected order for editing, if any
  const renderEditForm = () => {
    if (selectedOrder) {
      return (
        <div>
          <h3>Edit Order</h3>
          <form>
            <input
              type="text"
              name="customerName"
              placeholder="Customer Name"
              value={selectedOrder.customerName}
              // Implement onChange handler to update 'selectedOrder' state
            />
            {/* Add input fields for other order properties */}
            <button type="submit">Save Changes</button>
          </form>
        </div>
      );
    }
  };

  return (
    <div>
      <h2>Sales Order Management</h2>
      {renderSalesOrderTable()}
      {renderEditForm()}
    </div>
  );
}

export default SalesOrderManagement;
