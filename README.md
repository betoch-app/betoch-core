Getting started
---------------
These directions assume you want to develop on your local computer, and not from the cloud instance. 

To work on the sample code, you'll need to clone your project's repository to your
local computer. If you haven't, do the next steps.
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

## Database
this application uses PostgreSQL database with pg admin 4 management tools
you can manage or view your datas use the following link on your browser</br>
http://localhost:5051/

you can find the username and password inside docker-compose.yml pgadmin service