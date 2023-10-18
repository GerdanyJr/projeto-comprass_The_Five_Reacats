# Comprass App

This project is a mobile application created as part of the Compass UOL Enterprise scholarship program. Comprass is designed to provide users with a convenient shopping experience. It offers a variety of features, such as product search, viewing products by category, adding products to the cart, a streamlined checkout process, user profiles, and more. This README will provide an overview of the app's features, the technologies used, and instructions for running the project.

## Features

### Splash Screen
- Upon opening the app, users are greeted with a splash screen.

### Home Screen
- After the splash screen, users are redirected to the home page.
- They can search for products and view products categorized by different categories.
- Clicking on a product takes the user to the Product screen.

### Session Persistence with Async Storage
- The app ensures a seamless user experience by utilizing Async Storage to persist user sessions. Users can exit the app and return without needing to log in again.

### Product Screen
- On the Product screen, users can:
  - View product photos, price, and description.
  - See similar products.
  - Use a counter to add the product to the cart.

### Cart Screen
- Users can access their cart from the bottom tab navigator.
- The cart screen displays added products.
- Users can increment or decrement the quantity of products in the cart.
- If the cart is empty, a cart logo with a short message is displayed.

### Checkout Screen
- Users can proceed to the checkout screen from the cart screen.
- Depending on their authentication status:
  - If unauthenticated, they see a login button that redirects to the login page.
  - If authenticated, they can complete a checkout form, including:
    - Adding a shipping address.
    - Providing a valid CEP for auto-completion of user data.
    - Choosing from three payment methods: PIX, invoice, or credit card.
    - If they choose a credit card, they enter card data, and the app displays the card brand.
    - Choosing a delivery method.

### Success Screen
- Users see a success screen after completing the checkout.
- Depending on the payment method:
  - For credit card payments, they see a success screen with a button that redirects to the home.
  - For invoice payments, they can download the invoice.
  - For PIX payments, they see a QR code.

### Profile Screen
- Users can view their data (image, email, name) and change it if they are logged in.
- If unauthenticated, they see a login button and a language change button (email cannot be changed).

### Authentication
- The app supports the following authentication features:
  - Login: Utilizes JWT authentication provided by the e-commerce API.
  - I forgot my password: Users can reset their password by entering their email (symbolic change for demonstration purposes).
  - Registration: Users can sign up by providing their email, name, password, and confirming their password.

## Technologies Used

This app was developed with React Native and utilizes the following libraries and APIs:

- **[React Native](https://reactnative.dev/):** React Native is a popular JavaScript framework for building natively-rendered mobile applications for both iOS and Android platforms. It enables developers to create mobile apps with a native look and feel while using React.
- **[React Navigation](https://reactnavigation.org/):** React Navigation is a highly regarded navigation library for React Native applications. It simplifies navigation and routing, offering features like stack navigation, tab navigation, and drawer navigation.
- **[React Hook Form](https://react-hook-form.com/):** React Hook Form is a library designed for managing forms and form validations in React applications. It streamlines form handling by utilizing React hooks, making form state and validation rules easy to manage.
- [Via cep api](https://viacep.com.br/exemplo/javascript/):** Used to fetch and autocomplete user data based on CEP input.
- **[Fake E-Commerce API](fakeapi.platzi.com):** versatile resource for projects requiring product, user, and category data in JSON format. It offers features like pagination, JWT authentication, file uploads, category-based product filtering, user creation, CRUD operations, and integration with tools like Postman and Insomnia. Ideal for e-commerce prototyping and learning API integration.
- **[Yup](https://github.com/jquense/yup):** For form schema validation.
- **[Async Storage](https://react-native-async-storage.github.io/async-storage):** React Native Async Storage is a local storage solution for storing small amounts of persistent data on a user's mobile device. It allows developers to save and retrieve data, such as user preferences or tokens, between app sessions without the need for a network connection.
- **[i18next](https://www.i18next.com/):** i18next is a widely-used internationalization (i18n) framework for JavaScript applications. It provides a comprehensive solution for managing and implementing multilingual support in your web or mobile applications. 
- **[react i18next](https://react.i18next.com/): react-i18next is a powerful internationalization framework for React / React Native which is based on i18next. Check out the history of i18next and when react-i18next was introduced.
- 
## Installation and Running

To set up and run the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Install project dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. To execute the app on a physical device (Android):
   ```
   npm run android
   ```

## Developers

This app was developed by the The Five Reacats Squad as part of the Compass UOL Enterprise scholarship program:

- [Álvaro Marques Silva](https://github.com/Alvaro-18)
- [Bernardo Tonin Prates](https://github.com/bernardotonin)
- [Gerdany Gonçalves da Conceição Júnior](https://github.com/GerdanyJr)
- [Luiz Virgens Matos](https://github.com/TheDevLG)
- [Janilson Gomes Rocha](https://github.com/janilsonr)

## Acknowledgments

This project was made possible by the Compass UOL Scholarship Program. We would like to express our deep gratitude to the instructors and mentors who played a crucial role in our learning journey:

- Jardel Bordignom
- Thiago Schweder
- Julianne Valiati
- Liliv Hana Vasconcelos
- Rafael Nascimento Colares deserves a special acknowledgment for his outstanding dedication and unwavering support. His exceptional attentiveness in addressing our queries and concerns has been truly invaluable.

Their guidance and expertise have been instrumental in our development, and we are truly thankful for their contributions to our success.

## Credits

The design of the design of this project is credited to Compass UOL as part of the Compass UOL scholarship program.
