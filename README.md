# Number Classification API

## Overview
The **Number Classification API** is a RESTful API that classifies numbers based on mathematical properties. It determines whether a number is prime, Armstrong, or even/odd, calculates its digit sum, and retrieves a fun fact using the Numbers API.

## Features
- Determines if a number is **prime**.
- Checks if a number is an **Armstrong number**.
- Identifies if the number is **even** or **odd**.
- Computes the **sum of its digits**.
- Fetches a **fun fact** about the number from the Numbers API.
- Implements **proper error handling**.
- **CORS-enabled** for cross-origin requests.
- Fast response time (< 500ms).

## Technologies Used
- **Node.js** with **Express.js** for the backend.
- **Axios** for making API calls.
- **Vercel** for deployment.

## API Endpoints
### 1. Classify a Number
**Endpoint:**
```
GET /api/classify-number?number={integer}
```

**Example Request:**
```
GET /api/classify-number?number=371
```

**Success Response (200 OK):**
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

**Error Response (400 Bad Request - Invalid Input):**
```json
{
    "number": "abc",
    "error": true,
    "message": "Invalid number format"
}
```

## Installation & Setup
### 1. Clone the Repository
```sh
git clone https://github.com/your-username/number-classification-api.git
cd number-classification-api
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Run the Server Locally
```sh
npm start
```
The server will start on `http://localhost:3000`

## Deployment
### Deploying to Vercel
1. Install Vercel CLI (if not already installed):
   ```sh
   npm install -g vercel
   ```
2. Deploy the project:
   ```sh
   vercel
   ```
3. Follow the on-screen instructions to complete the deployment.

## Folder Structure
```
/number-classification-api
│── /api
│   ├── classifyNumber.js   # Number classification logic
│   ├── funFactService.js   # Fetches fun facts
│   ├── utils.js            # Helper functions
│── /routes
│   ├── classifyRoute.js    # API routes
│── index.js                # Main server file
│── package.json
│── vercel.json             # Deployment config
│── README.md               # Documentation
```

## Contributing
Feel free to contribute by submitting issues or pull requests!

## License
This project is licensed under the MIT License.

---

### Author
["Vevakpor Godsanointed"](https://github.com/your-username)

