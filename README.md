# GadgetHeaven E-commerce Platform
GadgetHeaven is a e-commerce platform that offers a wide range of gadgets and accessories. Users can browse through various product categories, view product details, add items to the shopping cart or wishlist, and make purchases. The platform features a user-friendly interface, offering a seamless shopping experience on supported devices.


## Live Website Link
[Visit GadgetHeaven](https://lighthearted-fairy-d07e4e.netlify.app/)

## Requirement Document Link
[View Requirement Document](https://drive.google.com/file/d/1bj5mt236WT9lXq6q78Fnexym6U9loEXZ/view?usp=sharing)

## React Fundamental Concepts Used in the Project

This project utilizes several fundamental concepts from React to ensure smooth state management and rendering:

- **Components:** Functional components display various parts of the website, such as product cards, banners, categories etc.

- **JSX (JavaScript XML):** HTML-like syntax is used within React components for clear structure.
- **State Management (useState):** React's `useState` is used to manage the local state, including data like product information, cart items, and wishlist items.
- **useEffect Hook:** This hook is used to fetch and set product data and manage side effects such as updating the cart or wishlist.
- **Context API:** The Context API is used to manage the global state for the cart and wishlist across different components.
- **React Router:** React Router is used for navigation between different pages (product details, category pages etc.).
- **Conditional Rendering:** 
In React dynamically displays UI elements based on conditions like user actions or state changes, enhancing interactivity. In the dashboard route, it shows cart and wishlist buttons depending on user actions for a personalized experience.
- **Nested Routing:** The project uses nested routing to manage views and layouts, such as rendering the Categories and ShowCategories components within the AllGadgets page, ensuring better organization of dynamic content like categories and gadgets.
- **Dynamic Rendering:** The `useLoaderData()` hook is used for dynamic data loading to display the correct product categories and details based on user interaction.

## Data Handling and Management

### Context API and LocalStorage
- **Context API:** The cart and wishlist state is managed globally using the Context API. This allows easy access to cart and wishlist data from any part of the application.
- **LocalStorage (Optional):** LocalStorage is used to persist cart and wishlist data between sessions, allowing the user to retain their selections even after refreshing the page or returning to the site.

### Key Functions
- **`addCart()`**: Adds a product to the cart and updates the state.
- **`addWishList()`**: Adds a product to the wishlist and updates the state.
- **`getAllCarts()`**: Retrieves all items currently in the cart.
- **`getAllWishList()`**: Retrieves all items currently in the wishlist.

## Features of GadgetHeaven

- **Product Categories**: Users can browse gadgets by categories, making it easy to navigate and find specific types of products.

- **Dynamic Product Details Page**: Each product has a dedicated page displaying detailed information, with options to add to the cart or wishlist.

- **Wishlist Functionality**: Users can save products to a wishlist, enabling quick access to items they may want to purchase later.

- **Nested Routing for Efficient Navigation**: Nested routes improve navigation, especially when displaying category-specific products and detailed product views.

- **LocalStorage Data Persistence**: The platform stores cart and wishlist data in localStorage, so users can retrieve saved items even after leaving the site.
