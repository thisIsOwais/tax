# Tax Calculator Web Application

This web application allows users to calculate their taxes based on their income, extra income, deductions, and age. Users can input their financial details, and the application will provide them with the calculated tax amount according to the specified tax rules.

## Assumptions

- Users are assumed to be familiar with the concept of gross annual income, extra income, deductions, and their age group.
- The application assumes that users will provide accurate and valid financial information for accurate tax calculation.
- It is assumed that users have access to a modern web browser to run the application.

## Design Modifications

- The design of the web application has been modified to ensure a user-friendly and intuitive interface.
- Error handling and validation messages have been incorporated to guide users in providing correct inputs.
- Tooltips have been added to provide additional information about each input field and error messages.

## How to Run Locally

1. Clone the repository to your local machine:

git clone <repository-url>


2. Navigate to the project directory:

cd tax-calculator-web-app



3. Open the `index.html` file in your preferred web browser.

## Test Cases

- **Test Case 1: Valid Inputs**
- Description: Input valid numeric values for all fields and submit the form.
- Expected Outcome: The tax calculation result should be displayed in a modal window.

- **Test Case 2: Invalid Inputs**
- Description: Input non-numeric values for one or more fields and submit the form.
- Expected Outcome: Error messages should be displayed for the corresponding input fields, indicating that valid numbers are required.

- **Test Case 3: Missing Age Selection**
- Description: Leave the age field blank and submit the form.
- Expected Outcome: An error message should be displayed for the age field, indicating that an age selection is mandatory.

- **Test Case 4: Edge Cases**
- Description: Input extremely large or small values for income, extra income, and deductions.
- Expected Outcome: The application should handle these edge cases gracefully, providing accurate tax calculations without errors.

## Screenshots
![Screenshot (473)](https://github.com/thisIsOwais/tax/assets/139376412/898310ee-3fe0-4326-bb37-1928e10d9e6c)
![Screenshot (474)](https://github.com/thisIsOwais/tax/assets/139376412/7fa54b15-760d-44e5-91a4-0c25c84eaddb)
![Screenshot (475)](https://github.com/thisIsOwais/tax/assets/139376412/0e4164bc-adef-4aa7-bbc7-8548706dc721)
![Screenshot (476)](https://github.com/thisIsOwais/tax/assets/139376412/d4697507-766f-4dc7-996b-d320c9f3b40f)


## Link to Hosted Web App

[Click here to access the Tax Calculator Web App]((https://thisisowais.github.io/tax/))



