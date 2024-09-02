# Next.js Store with Shopify

Welcome to this Next.js academic project! This application is built using Next.js 14 and integrates with Shopify using GraphQL. It also features an AI chatbot and uses Zustand for global state management.

## Project URL

The project is deployed and can be accessed at: [Next.js Store](https://nextjs-store-platzi-terf.vercel.app/)

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Technologies Used

- **Next.js 14**: Framework for building server-rendered React applications.
- **Shopify**: E-commerce platform for online stores.
- **GraphQL**: Query language for your API.
- **Zustand**: A small, fast, and scalable bearbones state-management solution.
- **Vercel**: Deployment platform for frontend frameworks and static sites.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/al-lo-co/nextjs_store_platzi
    cd nextjs-store
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env.local` file in the root of your project and add your Shopify store credentials and other necessary environment variables.

    ```env
    SHOPIFY_HOSTNAME=""
    SHOPIFY_API_TOKEN=""
    CACHE_TOKEN=""
    SHOPIFY_GRAPHQL_ENDPOINT=""
    SHOPIFY_STOREFRONT_TOKEN=""
    OPEN_AI_KEY=""
    ```

4. **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

- **Fetching Data from Shopify**: The application uses GraphQL to fetch data from Shopify. You can find the queries in the `lib/shopify` directory.
- **AI Chatbot**: The chatbot is integrated and can be accessed from the chat icon on the bottom right corner of the screen.
- **Global State Management**: Zustand is used to manage the global state. You can find the state management logic in the `store` directory.
