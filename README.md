Username: admin
Password: password

# Multiple Choice Question (MCQ) Quiz App

A modern, interactive quiz application built with React and TypeScript that uses the Open Trivia DB API to deliver multiple choice questions across various categories and difficulty levels.

![Quiz App Preview](https://user-images.githubusercontent.com/59245989/217609027-28f799fc-7419-4b18-9946-deb7bcb73b43.png)

![Game Interface](https://user-images.githubusercontent.com/59245989/217609703-e6e13e8b-fec4-46db-93bf-81954ec7f339.png)

## Features

- 🔐 **User Authentication** - Simple login system to access the quiz
- 🎯 **Customizable Quiz Settings**:
  - Choose number of questions (10, 15, or 20)
  - Select difficulty level (Easy, Medium, Hard)
  - Pick from various trivia categories
- ⏱️ **Timer** - 60-second countdown timer for each quiz session
- 📊 **Score Tracking** - Track your answers and see your final score
- 💾 **State Persistence** - Quiz state is persisted using Redux Persist
- 🎨 **Modern UI** - Clean and responsive user interface

## Tech Stack

- **React 17** - UI library
- **TypeScript** - Type safety
- **Redux Toolkit** - State management
- **Redux Persist** - State persistence
- **React Router** - Navigation
- **Open Trivia DB API** - Question source

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v12 or higher)
- npm or pnpm (package manager)

## Preview

![Quiz App Preview](https://user-images.githubusercontent.com/59245989/217609027-28f799fc-7419-4b18-9946-deb7bcb73b43.png)

![Game Interface](https://user-images.githubusercontent.com/59245989/217609703-e6e13e8b-fec4-46db-93bf-81954ec7f339.png)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/prog-ops/multiplecq.git
cd multiplecq-app
```

2. Install dependencies:
```bash
npm install
```
or if you prefer pnpm:
```bash
pnpm install
```

## Usage

### Start Development Server

Run the app in development mode:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Login Credentials

To access the quiz application, use the following credentials:
- **Username:** `admin`
- **Password:** `password`

> ⚠️ **Security Note:** These credentials are currently hardcoded for demonstration purposes. In a production environment, implement proper authentication with backend validation.

### How to Play

1. **Login** - Enter your username and password
2. **Configure Quiz** - Select your preferred:
   - Number of questions (10, 15, or 20)
   - Difficulty level (Easy, Medium, Hard)
   - Category (various trivia categories available)
3. **Start Game** - Click "Start Game" to begin
4. **Answer Questions** - Select your answers within the 60-second timer
5. **View Results** - See your score and review your answers at the end

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run deploy` - Deploys the app to GitHub Pages (requires predeploy build)

## Project Structure

```
multiplecq-app/
├── public/              # Static files
├── src/
│   ├── api/            # API service (OpenTDBService)
│   ├── components/     # Reusable UI components
│   ├── constants/      # Application constants
│   ├── helpers/        # Utility functions (login, quiz helpers)
│   ├── layouts/        # Layout components
│   ├── models/         # TypeScript interfaces and types
│   ├── store/          # Redux store configuration
│   │   └── features/   # Redux slices (game, quiz)
│   └── views/          # Page components (Login, InitialPage, GamePage, ScorePage)
├── package.json
└── README.md
```

## Deployment

The app can be deployed to GitHub Pages using:
```bash
npm run deploy
```

The deployed version is available at: https://prog-ops.github.io/multiplecq

## API

This application uses the [Open Trivia DB API](https://opentdb.com/) which provides:
- Free and open trivia questions
- Multiple categories
- Various difficulty levels
- Multiple choice question formats

## Development Notes

- The login system uses a mock authentication function in `src/helpers/doLogin.ts`
- Quiz settings and game state are managed using Redux Toolkit
- State persistence is handled by Redux Persist
- Timer is set to 60 seconds per quiz session

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private.

## Author

**prog-ops**
