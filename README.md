# Hospital Management System

## Project Overview

The **Hospital Management System** is a web-based application built using the MERN stack (React, Node.js, Express.js) with MySQL as the database. It facilitates the efficient management of hospital operations, including patient records, appointments, billing, prescriptions, and stakeholder-specific functionalities like doctor management, nurse tasks, and reception appointments.

## Features

- **Authentication and Authorization**
  - Role-based authentication using JWT.
  - Different roles (Admin, Doctor, Nurse, Receptionist, Pharmacist, Billing, Patient) with distinct functionalities.

- **Admin Dashboard**
  - Manage users, appointments, and general hospital settings.

- **Doctor Management**
  - View and manage patients assigned to them.
  - Write and manage prescriptions.
  - View patient medical history.

- **Nurse Tasks**
  - Update patient vitals and assist doctors.

- **Receptionist**
  - Manage appointment bookings and patient check-ins.

- **Pharmacist**
  - Manage drug inventory and dispense medications.
  - Handle prescription orders.

- **Billing Department**
  - Generate invoices for treatments and medications.
  - Manage payments.

- **Patient Portal**
  - View personal medical records and appointment history.
  - Request appointments with doctors.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: Tailwind CSS

## Installation and Setup

### Prerequisites

- **Node.js** (v14+)
- **MySQL** (v8+)
- **npm** or **yarn**

### Steps to Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/hospital-management-system.git
   cd hospital-management-system
