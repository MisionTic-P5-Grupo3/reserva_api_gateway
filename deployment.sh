sudo heroku login
sudo heroku create mision-tic-api-gate-way
sudo heroku container:login
sudo heroku container:push web --app mision-tic-api-gate-way
sudo heroku container:release web --app mision-tic-api-gate-way