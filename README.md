# Installation
npm install

# Description
UpSHoCal is a Expo Managed React Native app which displays upcoming shoes relseases. The application uses the API "The Sneaker Database" taken from RapidAPI in order to display shoes data. BECAUSE the API access if only free for the first 200 requets ( any aditionnal costs 0.02$), I copied the whole API response in a data.js file and used it; I then commented the part that was making the call to the API, but you can always decomment it if you want to try it out, just make sure to comment it again  afterwards. The shoes data include:
  - id
  - sku
  - brand
  - gender
  - name
  - release date
  - release year
  - image
  - Other information..

Though the API gives a lot of information, it can only display a maximum of 100 entities, and there are some shoes that do not have data associated to them, like thumbnail picture or releasePrice or description. To deal with that, I used a dummy "Lorem Ipsum" text for the description when it's absent, I generated a random number between 150-250 for the price, and used a random single image when the thumbnail field was empty.

The app is connected to a backend server that I made in NodeJS, MongoDB was used for the database, and I hosted the server on Heroku.

App functionnalities:
  - Authentication: users can register to the app by completing the form, the data is directly sent to the MongoDB Database; they can also log in whith an existing account.
  - Browsing: Once logged in, the users can browse the available shoes on the home screen, they can also click on a specific shoe to have more details about it, which will be displayed on another screen
  - Searching: The users can also make a search by name with the searchBar on the home screen, and the resulsts are displayed in real time.
  - The name of the currently logged in user is displayed on the top-left corner of the Home Screen.

I will eventually continue to provide aditionnal features in the near future..
