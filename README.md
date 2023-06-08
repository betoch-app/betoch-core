## Getting started

These directions assume you want to develop on your local computer, and not from the cloud instance.

To work on the sample code, you'll need to clone your project's repository to your
local computer. If you haven't, do the next steps.

## working with docker container

1. install docker desktop, node and python 3.8 to your machine
2. clone your project </br>
   $ git clone git@github.com:betoch-app/betoch-core.git
3. Run docker compose build </br>
   $ docker-compose build
4. Run docker compose up </br>
   $ docker-compose up
5. some time docker didn't install node_modules for react project so install it by your self </br>
   $ cd betoch-core/frontend </br>
   $ npm install

## Working with local machine

1. ## Database

this application uses PostgreSQL database with pg admin 4 management tools
you can manage or view your data by downloading postgreSQL and installing on your machine </br>

after downloading and installing postgreSQL create betoch-core database inside your postgres server

2. ## Working with django rest framework (backend)

in order to work with django rest framework on your local machine. you have follow the following setups</br>

1. download python and install pip. Then run the following command </br>
   $ pip install virtualenv
2. change to working directory of backend </br>
   $ cd backend
3. create your virtual environment </br>
   $ virtualenv venv
4. activate your virtual environment </br>
   $ venv/scripts/activate.bat
5. install all project dependencies </br>
   $ pip install -r requirements.txt
6. run your application </br>
   $ python manage.py runserver
7. connect with your postgres database with django rest framework</br>
   create .env file inside your backend/backend project and add the following patterns</br>
   DATABASE_NAME=betoch-core</br>
   DATABASE_USER=postgres</br>
   DATABASE_PASSWORD=your_postgres_password</br>
   DATABASE_HOST=localhost</br>
   DATABASE_PORT=5432

8. ## working with frontend
   the frontend part is created using react framework with different library. So in order to work with the front end project you have to follow the following steps</br>
9. move to frontend folder </br>
   $ cd frontend
10. install all of your dependencies </br>
    $ npm install
11. run your project</br>
    $ npm start
