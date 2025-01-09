
# Movie Collection Viewer

## Project Overview

The **Movie Collection Viewer** is a web application that displays a curated collection of movies, allowing users to explore random movies, view top-rated movies, and get detailed information about each film. The application also suggests similar movies based on genres, providing users with recommendations for further exploration.

---

## Key Features

- **Random Movies**: Displays 9 random movies on the home page, allowing users to discover new films.
- **Top-Rated Movies**: Displays a list of the top 15 rated movies, ordered by their ratings.
- **Movie Details**: Users can select any movie to view detailed information, such as the plot, cast, and ratings.
- **Similar Movies**: Suggests three similar movies based on the selected movie's genre, encouraging users to explore related films.
- **Upcoming Movies**: A page that lists upcoming movies, ensuring users are aware of films being released soon.

---

## Technology Stack

- **Frontend**: EJS, HTML, CSS
- **Backend**: Node.js, Express
- **Database**: Movie data stored in-memory or can be adapted to a database if desired.
- **Routing**: Dynamic movie routing for detailed pages.
- **Unit Testing**: Jest for testing the core functionality, including movie retrieval, rating sorting, and random movie selection.

---

## Installation

### Prerequisites
- **Node.js** (version 14 or higher)

### Clone the Repository
```bash
git clone https://github.com/yourusername/your-repository-name.git
cd your-repository-name
```

### Install Dependencies
```bash
npm install
```

### Run the Application
```bash
npm start
```
The application will run locally at `http://localhost:3000`.

---

## Features

- **Home Page**: Displays 9 random movies for user discovery.
- **Top Rated Movies Page**: Lists the top 15 movies ordered by rating, giving users insight into popular films.
- **Movie Detail Page**: Allows users to view detailed information about a movie when selected.
- **Upcoming Movies Page**: Lists upcoming movies, allowing users to track future releases.
- **Similar Movies**: Each movie detail page will display 3 similar movies based on the genre of the selected movie.

---

## Running Unit Tests

To run unit tests, use the following command:

```bash
npm test
```

---

## License

This project is provided for **personal use only**. Redistribution, modification, or commercial use in any form is strictly prohibited without prior written permission from the author.

For detailed license terms, refer to the [LICENSE](./LICENSE.md) file.

---

## Credits

This project was collaboratively developed by a dedicated team:

- **[Sara Woodford](https://github.com/sarwoodford)** 
- **[Abdalnasser Ali](https://github.com/Nasser-A-Ali)** 
- **[Stephen Crocker](https://github.com/SearchingSteve)** 
