Play with a live version of this app here: https://react-frontend-app.herokuapp.com 

To enjoy this demo locally, do this stuff:

- Open terminal
- cd Desktop
- git clone git@github.com:jessenovotny/react-rails-devise-api.git 
- cd react-rails-devise-api 
- bundle install 
- rake db:create db:migrate
- touch Procfile
- add the following lines to Procfile
  web: cd client && npm start
  api: bundle exec rails s -p 3001
- git clone git@github.com:jessenovotny/react-rails-devise-client.git
- cd react-rails-devise-client
- npm install
- cd ..
- rake start
