# HR Management Web Application

This is a HR Management Web Application developed using Django and SQLite. It provides functionalities for managing employees, handling vacation requests, and approval workflows.

## Features

- **Employee Management**: HRs can add, update, and delete employee data, including details such as name, email, address, phone number, gender, marital status, vacation days, salary, and date of birth.
- **Search Functionality**: HRs can search for employees by name and view similar names in a table format for easy access.
- **Vacation Requests**: HRs can submit vacation requests for selected employees, specifying from/to dates, reason, and status.
- **Vacation Review**: HRs can review all submitted vacation requests and manage their approval or rejection.
- **Manager Approval Workflow**: Managers can approve or reject vacation requests, updating vacation status and employee vacation days accordingly.
- **User Authentication**: Users can login as HRs or managers with specific usernames and passwords.

## How to Run

1. Clone the repository: `git clone `
2. Navigate to the project directory: `cd HR-Management-WebApp/mysite`
3. Run the Django app: `python manage.py runserver`
4. Access the app in your web browser at `http://localhost:8000`

## User Authentication

- **Admin Login**: You can login as an admin at `http://localhost:8000/admin` using the following credentials:
  - Username: test
  - Password: test
- **HR Login**: You can login as an HR using the following credentials:
  - Username: Arthur Morgan
  - Password: password
- **Manager Login**: You can login as a manager using the following credentials:
  - Username: Ahmad Reda
  - Password: Hey123

## Additional Admin Creation

To create another admin user, run the following command in the terminal after navigating to the project directory:

```
python manage.py createsuperuser
```

Then follow the prompts to enter a username, email, and password for the new admin user.

Feel free to explore and contribute to the project! If you have any questions or feedback, please don't hesitate to reach out.
