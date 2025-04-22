# ai-content-extractor-app

A web application that allows users to enter a URL, extract its content, and use AI (powered by Gemini) to generate a concise 3-point summary.

## Technologies Used

* **Frontend:** React (as indicated by the Create React App structure)
* **Backend:** Node.js with Express
* **AI Model:** Google Gemini (specifically `gemini-1.5-flash` as you've confirmed working)
* **HTTP Client:** Axios (for fetching URL content from the backend)
* **Web Scraping:** Cheerio (for parsing HTML content on the backend)
* **Environment Variables:** dotenv (for managing API keys)
* **CORS:** cors (for handling Cross-Origin Resource Sharing)

## Setup Instructions

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd ai-content-extractor-app
    ```
    (Replace `<repository-url>` with the actual URL of your GitHub repository)

2.  **Navigate to the frontend directory and install dependencies:**
    ```bash
    cd frontend
    npm install
    ```

3.  **Navigate to the backend directory and install dependencies:**
    ```bash
    cd backend
    npm install
    ```

4.  **Set up environment variables:**
    * In the `backend` directory, create a `.env` file.
    * Add your Google Gemini API key to the `.env` file:
        ```env
        OPENAI_API_KEY=YOUR_ACTUAL_GEMINI_API_KEY
        ```
        **Important:** Replace `YOUR_ACTUAL_GEMINI_API_KEY` with your actual API key from Google AI Studio or Google Cloud Console.

5.  **Run the frontend development server:**
    ```bash
    cd frontend
    npm start
    ```
    This will start the React application, usually accessible at `http://localhost:3000`.

6.  **Run the backend server:**
    ```bash
    cd backend
    node server.js
    ```
    The backend server will typically run on port `8080` (as configured in your `server.js`).

## Usage

1.  Open your browser and navigate to `http://localhost:3000` (or the port where your frontend is running).
2.  You will see the "AI-powered Content Extractor" interface.
3.  In the "Enter Public URL" input field, paste the URL of the website you want to analyze.
4.  Click the "SUMMARIZE" button.
5.  The backend will fetch the content of the URL, extract the text, and send it to the Gemini AI model (`gemini-1.5-flash`) to generate a 3-point summary.
6.  The summary will then be displayed in the "Key Point" section of the table below the search bar.

## Further Development

You can continue to enhance this application by:

* Implementing the search functionality on the displayed key points.
* Adding error handling for invalid URLs or API issues.
* Allowing users to adjust the number of key points to generate.
* Improving the UI/UX of the application.
* Adding options to analyze different aspects of the content.
* Deploying the frontend and backend to a hosting platform (e.g., Vercel for the frontend, Render or Google Cloud for the backend).

## Learn More (Default Create React App Links)

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Deployment (Default Create React App Link)

[https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)