# p5.js Project Template with VS Code Integration

This project provides a template for creating p5.js sketches with proper linting, suggestions, and IntelliSense support in Visual Studio Code, leveraging TypeScript declaration files.

## Features

- p5.js library included
- VS Code IntelliSense support for p5.js
- Linting and suggestions using VS Code's built-in TypeScript support
- Organized project structure

## Prerequisites

Before you begin, ensure you have installed [Visual Studio Code](https://code.visualstudio.com/).

## Setting Up the Project

1. Clone or download this repository to your local machine.
2. Open the project folder in Visual Studio Code.

## Setting Up Visual Studio Code

To get the best development experience with this project in VS Code, follow these steps:

1. Install the ESLint extension:
   - Open the Extensions view (Ctrl+Shift+X or Cmd+Shift+X on macOS)
   - Search for "ESLint"
   - Click Install for the ESLint extension by Microsoft

2. VS Code should automatically recognize the project setup and provide linting, suggestions, and IntelliSense for your p5.js sketches.

## Project Structure

```
project-root/
├── src/
│   ├── sketch.js
│   └── style.css
├── library/
│   ├── p5.js
│   └── p5.global-mode.d.ts
├── index.html
├── jsconfig.json
└── README.md
```

- `src/sketch.js`: This is where you write your p5.js code.
- `src/style.css`: CSS for your project.
- `library/p5.js`: The p5.js library file.
- `library/p5.global-mode.d.ts`: TypeScript definitions for p5.js global mode.
- `index.html`: The main HTML file that runs your sketch.
- `jsconfig.json`: Configuration for VS Code IntelliSense.

## Running the Project

To run the project, simply open the `index.html` file in a web browser. For a better development experience, you can use a local server:

1. Install the "Live Server" extension in VS Code:
   - Open the Extensions view
   - Search for "Live Server"
   - Install the extension by Ritwick Dey

2. Right-click on `index.html` and select "Open with Live Server".

This will open your project in a browser and automatically reload it when you make changes.

## How It Works

This project uses the `p5.global-mode.d.ts` TypeScript declaration file to provide type information to VS Code. The `jsconfig.json` file is configured to include all JavaScript and TypeScript files, allowing VS Code to use its built-in TypeScript engine to provide intelligent code completion, hover information, and basic error checking for your p5.js code.

## Contributing

Contributions to this project are welcome. Please feel free to submit a Pull Request.

## License

This project uses the following license: [MIT License](https://opensource.org/licenses/MIT).

## Contact

If you want to contact me, you can reach me at `orrkislev@gmail.com`.