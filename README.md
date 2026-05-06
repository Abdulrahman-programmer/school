# 🏫 School API

A RESTful API built using **Node.js, Express, and MySQL** to manage school data and find nearby schools based on geographical location.

---

## 🚀 Features

* ➕ Add a new school
* 📍 Fetch all schools
* 📏 Sort schools based on distance from user location
* ✅ Input validation for all fields
* ⚡ Efficient distance calculation using Haversine formula

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MySQL
* mysql2 (promise-based driver)

---

## 📂 Project Structure

```
School_Api/
│── server.js
│── db.js
│── AddSchool.js
│── fetchSchool.js
│── .env
│── .gitignore
│── package.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Abdulrahman-programmer/school.git
cd school
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Configure environment variables

Create a `.env` file in the root:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=school_db
DB_PORT=3306
```

---

### 4️⃣ Start the server

```bash
node server.js
```

Server runs on:

```
http://localhost:3000
```

---

## 🗄️ Database Setup

Run the following SQL:

```sql
CREATE DATABASE school_db;

USE school_db;

CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude DECIMAL(10,6) NOT NULL,
  longitude DECIMAL(10,6) NOT NULL
);
```

---

## 📡 API Endpoints

### ➕ Add School

**POST** `/api/addSchool`

#### Request Body:

```json
{
  "name": "ABC School",
  "address": "Kanpur, UP",
  "latitude": 26.4499,
  "longitude": 80.3319
}
```

---

### 📍 List Schools (Sorted by Distance)

**GET** `/api/listSchools?latitude=26.4631&longitude=80.3479`

---

## 📐 Distance Calculation

The API uses the **Haversine formula** to calculate the distance between user location and schools.

---

## ⚠️ Important Notes

* `.env` file is ignored for security
* Do not expose database credentials
* Use strong passwords

---

## 👨‍💻 Author

**Abdul Rahman**

---

## ⭐ Future Improvements

* Pagination for large datasets
* Authentication & authorization
* Deployment (Render / Railway)
* Unit testing

---

## 📌 License

This project is for educational purposes.
