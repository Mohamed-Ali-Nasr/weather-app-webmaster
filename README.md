# Weather App with React, Tanstack Query, Shadcn UI, Recharts, Tailwind, Typescript

A weather application built using React, TypeScript, and Vite. This app fetches weather data from a weather API and displays it in an intuitive and user-friendly interface.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Display current weather conditions
- Show weather forecasts for the next few days
- Search for weather data by city name
- Toggle between light and dark mode
- Responsive design for various screen sizes

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## Usage

1. Open your browser and go to `http://localhost:5173/`.
2. Enter a city name in the search bar to get the weather data for that city.
3. Toggle between light and dark mode using the mode switcher.
4. View the weather forecasts for the next few days.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Vite**: A fast build tooling for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework.
- **Radix UI**: A collection of unstyled, accessible components.
- **Recharts**: A composable charting library built on React components.
- **React Query**: A powerful data-fetching library for React.
- **Date-fns**: A modern JavaScript date utility library.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Make sure to create a `.env` file with following variables -

```
VITE_OPENWEATHER_API_KEY=
```
