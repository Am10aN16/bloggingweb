# Blogger's Tweet

## Overview

This project consists of a frontend and a backend. To streamline development, you can run both concurrently or separately depending on your needs.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (for both frontend and backend)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [React.js](https://reactjs.org/) (comes with React)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Am10aN16/bloggingweb.git
    ```

2. **Install server packages:**

    Navigate to the root directory and run:

    ```bash
    npm install
    ```

3. **Install client-side packages:**

    Navigate to the `client` directory and run:

    ```bash
    cd client
    npm install
    ```

### Running the Project

1. **Run both frontend and backend concurrently:**

    From the root directory, you can start both the frontend and backend with:

    ```bash
    npm run dev
    ```

    Ensure that the `scripts` section of your `package.json` in the root directory includes a `dev` script that uses a tool like [concurrently](https://www.npmjs.com/package/concurrently) to run both frontend and backend.

    Example `package.json` scripts:

    ```json
    "scripts": {
      "dev": "concurrently \"npm run server\" \"npm run client\"",
      "server": "node index.js",
      "client": "cd client && npm start"
    }
    ```

2. **Run the frontend separately:**

    Navigate to the `client` directory and run:

    ```bash
    npm start
    ```

3. **Run the backend separately:**

    In the root directory, run:

    ```bash
    node index.js
    ```

## Configuration

- Ensure any necessary environment variables are set up in a `.env` file in the root directory.
- Adjust configuration files as needed for your specific environment and deployment setup.

## Troubleshooting

- If you encounter issues, ensure that all dependencies are correctly installed and that you are running commands from the correct directories.
- Check logs for errors and address them as needed.

## Contributing

Feel free to open issues or submit pull requests for improvements or bug fixes. 

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions, reach out to [poddaraman1016@gmail.com].

