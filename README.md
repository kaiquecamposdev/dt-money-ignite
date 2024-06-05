# DT Money 💰

## 📍 Overview
This project is a web application for personal financial control, built with React. Register your income and expenses, visualize your data in tables to have total control of your budget.

## ✨ Features
- **Income and Expense Registration:** Easily add your income and expenses, categorizing them for better organization.
- **Detailed Visualization:** Access tables with the complete history of your transactions, including date, value, category, and description.
- **User-friendly Interface:** Enjoy an intuitive and easy-to-use interface to manage your finances efficiently.

## 💻 Technologies Used
- **React:** JavaScript library for building user interfaces.
- **TypeScript:** Statically typed language for JavaScript.
- **Vite:** Fast development tool for React.

## 🚀 Installation
**1. Clone the repository:**
```bash
git clone https://github.com/kaiquecamposdev/dt-money-ignite.git
```
or 
```bash
gh repo clone kaiquecamposdev/dt-money-ignite
```
**2. Install the dependencies:**
```bash
cd dt-money-ignite && npm i
```
**3. Start the API:**
```bash
npm run dev:server
```
**5. It will be running at `http://localhost:3333`.**

**6. Start the development server:**
```bash
npm run dev
```
**7. Access the application at `http://localhost:3000`.**

## API 📡
This project uses JSON Server as a mock API. Here's how to access the API:

- **Endpoints:**
    - **GET /transactions:** Retrieves all transactions.
    - **POST /transactions:** Creates a new transaction.
    - **DELETE /transactions/:id:** Deletes a transaction by its ID.

- **Example using curl:**
   -  Get all transactions:
    ```bash
    curl http://localhost:3333/transactions
    ```
   - Create a new transaction:
    ```bash
    curl -X POST http://localhost:3333/transactions -H "Content-Type: application/json" -d '{"description": "New Transaction", "type": "income", "category": "Salary", "price": 1000, "createdAt": "2024-03-10T10:00:00.000Z"}'
    ```
   - Delete a transaction with ID '1':
    ```bash
    curl -X DELETE http://localhost:3333/transactions/1
    ```
- **Example using axios:**
  ```javascript
  import axios from 'axios';

  // Get all transactions
  axios.get('http://localhost:3333/transactions')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });

  // Create a new transaction
  axios.post('http://localhost:3333/transactions', {
      "description": "New Transaction", 
      "type": "income", 
      "category": "Salary", 
      "price": 1000, 
      "createdAt": "2024-03-10T10:00:00.000Z"
  })
  .then(response => {
      console.log(response.data);
  })
  .catch(error => {
      console.error(error);
  });

  // Delete a transaction with ID '1'
  axios.delete('http://localhost:3333/transactions/1')
  .then(response => {
      console.log(response.data);
  })
  .catch(error => {
      console.error(error);
  });
  ```
- **Example using fetch:**
  ```javascript
  // Get all transactions
  fetch('http://localhost:3333/transactions')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });

  // Create a new transaction
  fetch('http://localhost:3333/transactions', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "description": "New Transaction", 
          "type": "income", 
          "category": "Salary", 
          "price": 1000, 
          "createdAt": "2024-03-10T10:00:00.000Z"
      })
  })
  .then(response => response.json())
  .then(data => {
      console.log(data);
  })
  .catch(error => {
      console.error(error);
  });

  // Delete a transaction with ID '1'
  fetch('http://localhost:3333/transactions/1', {
      method: 'DELETE'
  })
  .then(response => response.json())
  .then(data => {
      console.log(data);
  })
  .catch(error => {
      console.error(error);
  });
  ```
## 🤝 Contributions
Contributions to the project are welcome! Feel free to open issues or submit pull requests.

## 📝 License
This project is licensed under the [MIT License](./LICENSE).
