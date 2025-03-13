# React + Vite

This template provides a minimal setup to get React working with Vite, including Hot Module Replacement (HMR) and some ESLint rules.

## Project Description

This project is a task management application that allows users to organize tasks into different columns based on their status. The application is built using React for the front-end and Vite as the build tool. The main features of the application include:

- **Task Organization**: Tasks are organized into three columns: "Todo", "In Progress", and "Complete".
- **Drag-and-Drop**: Users can drag and drop tasks between columns to update their status.
- **Task Deletion**: Users can delete tasks from the board.

### Key Features

- **Fast Development**: Vite's instant server start and HMR make development lightning-fast.
- **Optimized Builds**: Vite optimizes your code for production, ensuring fast load times and efficient performance.
- **ESLint Integration**: The template includes some ESLint rules to help maintain code quality and consistency.

## Available Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Uses [Babel](https://babel.dev) to transform your React code and enable features like JSX and HMR.
- [@vitejs/plugin-react-refresh](https://github.com/vitejs/vite-plugin-react-refresh): Provides fast refresh for React components during development.

## Getting Started

To get started with this template, follow these steps:

1. **Install dependencies**:
    ```sh
    npm install
    ```

2. **Start the development server**:
    ```sh
    npm run dev
    ```

3. **Build for production**:
    ```sh
    npm run build
    ```

4. **Preview the production build**:
    ```sh
    npm run preview
    ```

## Project Structure

The project structure is as follows:

## Component Overview

### Main Component

The `Main` component is the root component of the application. It sets up the main layout and includes the `Board` component.
