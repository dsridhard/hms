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



API Endpoints
Here are some of the important API endpoints for different stakeholders:

Authentication
POST /api/auth/register – Register a new user
POST /api/auth/login – Login and receive a JWT token
Admin Routes
GET /api/admin/dashboard – Admin dashboard (requires admin role)
Doctor Routes
GET /api/doctor/patients – Get list of patients assigned to a doctor (requires doctor role)
POST /api/doctor/patients/:id/prescribe – Write a prescription for a patient (requires doctor role)
Nurse Routes
GET /api/nurse/tasks – Get task list for nurses (requires nurse role)
Receptionist Routes
GET /api/receptionist/appointments – View and manage appointments (requires receptionist role)
Pharmacist Routes
GET /api/pharmacist/prescriptions – View and manage prescriptions (requires pharmacist role)
Patient Routes
GET /api/patient/records – View medical records (requires patient role)
Usage
Admin: Log in with the admin role to manage the hospital users and settings.
Doctor: Log in to view and manage patients, prescribe medicines, etc.
Nurse: Log in to view task assignments.
Receptionist: Log in to schedule appointments.
Pharmacist: Log in to manage prescriptions and medicine stock.
Patient: View medical records, request appointments, etc.
Future Enhancements
Add support for appointment notifications.
Integrate payment gateways for billing.
Build a real-time chat feature for doctors and patients.
Contributing
If you'd like to contribute to this project, feel free to fork the repository and create a pull request. Please ensure your changes are well-tested.



License
This project is licensed under the MIT License - see the LICENSE file for details.

### Notes:
- Replace `your-username` and any placeholder information with the appropriate content related to your project.
- Ensure that environment variables, especially sensitive information (like `JWT_SECRET`), are correctly configured.


