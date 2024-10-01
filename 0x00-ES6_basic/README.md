Here's a short and precise `README.md` file for your Task 1 project:

---

# Task 1: ES6 Basics

## Project Overview
This project demonstrates the usage of ES6 features, specifically focusing on `const` and `let` for variable declaration. It uses Babel to transpile ES6 code to browser-compatible JavaScript, Jest for testing, and ESLint for code linting.

## Getting Started

### Installation
1. Clone the repository.
2. Run the following command to install dependencies:

   ```bash
   npm install
   ```

### Project Structure
- **`0-constants.js`**: Contains functions demonstrating the use of `const` and `let`.
- **`babel.config.js`**: Babel configuration file for transpiling ES6 code.
- **`.eslintrc.js`**: ESLint configuration file for code linting.
- **`package.json`**: Project metadata and dependencies.

### Scripts

- **Run Tests**: Use Jest to run tests.
  
  ```bash
  npm test
  ```

- **Run Dev**: Run the project using Node.
  
  ```bash
  npm run dev
  ```

### Usage Example
```bash
npm run dev 0-main.js
```
Expected output:
```
I prefer const when I can. But sometimes let is okay
```

## Tools Used
- **Jest**: For unit testing.
- **Babel**: For transpiling ES6+ code.
- **ESLint**: For enforcing coding standards.

---