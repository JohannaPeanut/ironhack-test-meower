# Meower


## Pages

Home - displays list of latest meows
Sign Up Page - Create an Account ✅
Sign In Page - Existing users can sign in ✅
Meow creation Page - Dosplay form wich allows user to submit new meow ❌
Single Meow Page - Allows to read single meow. Allows to edit / delete ❌
Edit meow - Allows to edit ❌
Profile Page - Allows user to view single users meows ❌
Profile Edit - Allows profile edit ❌

## Route Handlers

GET - '/' - renders Home Page ✅

GET - '/authentication/sign-up' - renders sign up page ✅
POST - '/authentication/sign-up' - handles account registration ✅
GET - '/authentication/sign-in' - renders sign in page ✅
POST - '/authentication/sign-in' ✅
POST - '/authentication/sign-out' ✅

GET - '/meow/create' ❌
POST - '/meow/create' ❌
GET - '/meow/:id' - loads from database, renders single meow page ❌
GET - '/meow/:id/edit' - loads from database, renders single meow page ❌
POST - '/meow/:id/edit' - handles edit form submission ❌

GET - '/profile/:id' - loads user with id from collection, renders profile page with this id ❌
GET - '/profile/:id/edit' - loads ❌
POST - '/profile/:id/edit' - handles profile edit form sumbission ❌

## Models

User 
- name: String, required ✅
- email: String, required ✅
- passwordHashAndSalt: String, required ✅
- picture: String, optional

Publication
- message: String, required, maxlength 300
- picture: String, optional
- creator: ObjectId of a document in the users collection, required
- updatedAt: Date (timestamp)
- createdAt: Date (timestamp)

## Wishlist
- Formatting the Dates
- Like 'meows'
- Sentiment analysis
- Share button
- Required users to confirm email
