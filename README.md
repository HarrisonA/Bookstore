# EmberRailsBookstore

A bookstore app where users can view a list of books, see the authors bio and purchase a book.

The front end is built with *Ember 2.3*, while *Rails 5* was used to build the backend to serve and persist the data.

### To install:
1. Clone the repo (of course).  

2. cd into "Bookstore-FrontEnd" directory and run "npm install" followed by "bower install".
To start the ember app run "ember s --proxy http://localhost:3000".

3. cd into the "Bookstore-BackEnd" directory and run "bundle exec rake db:create", then "bundle exec rake db:migrate".  
Run "rails s" to start the Rails API server.

Enjoy.

### NOTE:
This app started from the tutorial:
http://emberigniter.com/modern-bridge-ember-and-rails-5-with-json-api/.  I've added the additional feature of adding a new book and author to the bookstore.  I will continue to build additional features over time.

### Note: Styling, advance functionality, etc will be added at a later date. ###
