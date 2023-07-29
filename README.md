# Logo Generator Readme
This project is a logo generator that allows users to create custom SVG logos with text and various shapes. The user can input up to three characters for the logo, choose the text color and shape, and specify the shape color. The generated SVG logo will be saved in a file named logo.svg.
https://watch.screencastify.com/v/qKeKD5yo6aqAzjOi9dJm

## Requirements
To run this logo generator, you will need to have the following installed:

Node.js (v14 or higher)
npm (Node Package Manager)

## Getting Started
Clone or download this repository to your local machine.
Open a terminal or command prompt in the project directory.
Install the required dependencies by running the following command:
Copy code
npm install

## Usage
To create your own custom SVG logo, follow these steps:

Run the logo generator application by executing the following command in the terminal:

Copy code
node app.js
The application will prompt you for the following input:

Enter up to three characters for the logo.
Enter text color (keyword or hexadecimal number).
Choose a shape from circle, triangle, or square.
Enter shape color (keyword or hexadecimal number).
After providing the required input, the application will generate the SVG logo and save it as logo.svg in the project directory.

## Custom Shapes
This logo generator also allows you to use custom shapes. The project provides a Shape class and subclasses for Square, Circle, and Triangle. To use a custom shape, you can create a new instance of the desired shape class, passing the desired color as a parameter, and then call the render() method to get the corresponding SVG code snippet for that shape with the specified color.

## Tests
The project includes automated tests to verify the correctness of the custom shape classes. The tests use the Jest testing framework to ensure that the SVG code snippets are generated correctly for each shape with different colors.

To run the tests, execute the following command in the terminal:

bash
Copy code
npm test

## Dependencies
The project uses the following external dependencies:

express (version 4.18.2): A minimal and flexible web application framework for Node.js.
inquirer (version 9.2.9): A collection of common interactive command-line user interfaces for Node.js.
jest (version 29.6.2): A testing framework for JavaScript projects.
These dependencies are listed in the package.json file and will be installed when you run npm install.

## Contribution
If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request on the project's GitHub repository.
Thank you for using the Logo Generator! Have fun creating custom SVG logos with text and shapes. If you have any questions or need further assistance, don't hesitate to reach out. Happy logo designing! 🚀

## License
This logo generator is open-source and distributed under the MIT License. You can find the license information in the LICENSE file.

