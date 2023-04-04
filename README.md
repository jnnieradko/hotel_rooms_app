# Running the project

1. Clone the repository to your local machine using  `git clone` git@github.com:jnnieradko/hotel_rooms_app.git


2. Navigate to the project root directory and install the required dependencies by running: `npm install`


3. Once the dependencies have been installed, you can run the project by running: `npm start`

This will start the development server, and you should be able to view the project by opening http://localhost:3000 in your web browser.

# Running the tests

1. Ensure that the dependencies have been installed as described above.


2. Navigate to the project root directory and run the following command to run the Cypress tests:

`npm run cy:run`

This will run the tests in headless mode, meaning that you won't see the Cypress test runner interface. 

If you prefer to run the tests with the test runner interface, you can run the following command instead:


`npm run cypress:open`

This will open the Cypress test runner interface, where you can select and run individual tests.
Choose the option E2E Testing and then your Browser.


Then `Start E2E Testing`


Click on a test file to expand it and see the individual test cases.

To run an individual test case, click on it in the test file list. This will open a new window with the Cypress test runner interface and run the selected test case.