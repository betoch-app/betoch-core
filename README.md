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

## Working with django rest framework

in order to work with django rest framework on your local machine. you have follow the following setups</br>

1. download python and install pip. Then run the following command </br>
   $ pip install virtualenv
2. change to working directory of backend </br>
   $ cd backend
3. create your virtual environment </br>
   $ virtualenv venv
4. install all project dependencies </br>
   $ pip install -r requirements.txt
5. run your application </br>
   $ python manage.py runserver

## Database

this application uses PostgreSQL database with pg admin 4 management tools
you can manage or view your datas use the following link on your browser</br>
http://localhost:5051/

you can find the username and password inside docker-compose.yml pgadmin service
