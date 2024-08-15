# p5.js Project Template with ESLint

This project provides a template for creating p5.js sketches with proper linting and IntelliSense support in Visual Studio Code.

## Features

- p5.js library included
- ESLint configuration for p5.js
- VS Code IntelliSense support for p5.js
- Organized project structure

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js and npm](https://nodejs.org/)
- You have installed [Visual Studio Code](https://code.visualstudio.com/)

## Installing the Project

To install the project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/orrkislev/p5js-setup.git
   ```
2. Navigate to the project directory:
   ```
   cd p5js-setup
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Setting Up Visual Studio Code

To get the best development experience with this project in VS Code, follow these steps:

1. Open the project folder in VS Code.

2. Install the ESLint extension:
   - Open the Extensions view (Ctrl+Shift+X)
   - Search for "ESLint"
   - Click Install for the ESLint extension by Microsoft

3. Enable ESLint in your VS Code workspace:
   - Open the Command Palette (Ctrl+Shift+P)
   - Type "ESLint: Enable ESLint" and select it

4. VS Code should now show linting errors and warnings in your p5.js sketches.

## Project Structure

```
project-root/
├── src/
│   ├── sketch.js
│   └── style.css
├── library/
│   └── p5.js
├── eslint.config.js
├── index.html
├── jsconfig.json
├── p5.global-mode.d.ts
├── package.json
└── README.md
```

- `src/sketch.js`: This is where you write your p5.js code.
- `src/style.css`: CSS for your project.
- `library/p5.js`: The p5.js library file.
- `eslint.config.js`: ESLint configuration for p5.js.
- `index.html`: The main HTML file that runs your sketch.
- `jsconfig.json`: Configuration for VS Code IntelliSense.
- `p5.global-mode.d.ts`: Type definitions for p5.js global mode.

## Running the Project

To run the project, simply open the `index.html` file in a web browser. You can use a local server for development, which can be set up easily with extensions like "Live Server" in VS Code.

## Contributing

Contributions to this project are welcome. Please feel free to submit a Pull Request.

## License

This project uses the following license: [MIT License](https://opensource.org/licenses/MIT).

## Contact

If you want to contact me, you can reach me at `orrkislev@gmail.com`.