
# Todo Microservices

## Installation

1. Clone the repository:

    ```bash
   git clone https://github.com/arulmozhikumar7/todo-microservices.git
   cd todo-microservices
   ```

2. Navigate to each service and install dependencies:

   ```bash
   # For Auth Service
   cd Auth-Service
   npm install

   # For TODO Service
   cd ../Todo-Service
   npm install

   # For API Gateway
   cd ../API-Gateway
   npm install
   ```

3. Create a `.env` file in the root of each service with the following variables:

   For Auth Service:

   ```plaintext
   PORT=4000
   MONGODB_URI=mongodb://localhost:27017/authdb
   JWT_SECRET=your_jwt_secret
   ```

   For TODO Service:

   ```plaintext
   PORT=4001
   MONGODB_URI=mongodb://localhost:27017/tododb
   JWT_SECRET=your_jwt_secret
   ```

## Running

1. Start MongoDB:

   Make sure MongoDB is running on your local machine.

2. Start each service:

   ```bash
   # In Auth-Service directory
   npm start

   # In Todo-Service directory
   npm start

   # In API-Gateway directory
   npm start
   ```

3. Access the API Gateway:

   Open your browser or Postman and send requests to `http://localhost:3000`.
