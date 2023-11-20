# What is NomNomNavigator?

NomNomNavigator is a restaurant finder app that helps you decide on a restaurant in record time. 

# What does NomNomNavigator do?

When you feel hungry but don’t want to decide where to eat, let NomNomNavigator do the thinking for you. We make it so that you won’t have to decide from a long list of options.
Simply choose from a few categories and filters, such as minimum star rating, distance from your location/zip code, type of food, and voilà - you’ll be presented with an option that fits those criteria as closely as possible. Don’t like it? We’ll give you the next best fit. Like a certain restaurant or shop? We can store that for you so that you can come back to that selection whenever you want, and we’ll be sure to add those details into the future algorithms that we use to generate your next Nom!

# Who worked on NomNomNavigator?

Jeffrey Li  
Valentina Valverde  
Cindy Pan  
Hannah Nguyen  

# How to run this application locally

## Retrieve a Google API Key:
- Go to https://developers.google.com/maps/documentation/javascript/get-api-key.
- Click on “Get Started”.
- Sign in with your Google account if prompted, then select or create a project.
- Follow the prompts to enable the necessary APIs, such as Places API, Geolocation API, and Geocoding API.
- Once enabled, navigate to the Credentials section.
- Click “Create Credentials” and select “API Key” to generate your API key.
- Secure your API key and follow best practices for API key management.
- Note: new users may need to verify account information & payment information


## Instructions for Setting Up the App:
- Clone the repository on your local device using `git clone https://github.com/JeffLi117/NomNomNavigator.git`.
- Install dependencies with `npm i`.
- Create a .env file and add: GOOGLE_MAPS_API_KEY={your Google API key}. (Refer to above instructions on how to retrieve the API key)
- Start the server using `expo start` or `npm start`.
- If you have an Android device, download the Expo app and scan the QR code generated.
- Alternatively, users can download Android Studio and set up a virtual Android device (emulator) to get access to the app.