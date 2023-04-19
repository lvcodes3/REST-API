# RESTful API (backend only)
## Created by: Luis Valencia

Created with: Node.js, Express, PostgreSQL

## Demo Instructions (includes curl commands):

1. Make sure to have empty 'users' table, inside of 'users' PostgreSQL database.


2. Make sure PostgreSQL database is up and running.


3. Using the terminal in the 'REST-API' directory, start up the Restful API by: npm start


4. Open up Postman to be able to send HTTP requests to the Restful API.
   (It is recommended to follow the HTTP requests below in order)


5. GET localhost:3000/users/add

   curl --location 'localhost:3000/users/add'

   This inserts the dummy users JSON data into the 'users' table.


6. GET localhost:3000/users

   curl --location 'localhost:3000/users'

   This returns the entire list of users in the 'users' table, in JSON format.


7. GET localhost:3000/users/id

   curl --location 'localhost:3000/users/1'

   In this case id is an integer that corresponds to the id of a single user in the 'users' table.
   If the id input does not exist in the database, it returns: User of id: ${id} was not found in the db.
   Otherwise it returns the user in the 'users' table whose id is equal to the id provided, in JSON format.


8. POST localhost:3000/users

    curl --location 'localhost:3000/users' \
    --header 'Content-Type: application/json' \
    --data-raw '    {
        "firstname": "Paul",
        "lastname": "Walker",
        "maidenname": "Giddy",
        "age": 72,
        "gender": "male",
        "email": "paulwalker559@gmail.com",
        "phone": "+45 234 324 4342",
        "username": "paulwalker50",
        "password": "dsfa83faf",
        "birthdate": "1950-11-25",
        "image": "https://hips.hearstapps.com/hmg-prod/images/paul-walker-vin-diesel-fast-five-1676448870.jpeg?crop=0.246xw:0.444xh;0.168xw,0.0685xh&resize=1200:*",
        "bloodgroup": "A−",
        "height": 200,
        "weight": 100.2,
        "eyecolor": "Blue",
        "hair": {
            "type": "Straight",
            "color": "Brown"
        }
    }'

   This will take the input data provided inside of the Body as JSON and insert it as a user in the 'users' table.
   Once user is inserted, it will then return the id of the newly added user.
   (After this it is optional to run a GET from step 7 to make sure the newly added user exists (using the returned id))

   EXAMPLE POST BODY DATA TO ADD USER
    {
        "firstname": "Paul",
        "lastname": "Walker",
        "maidenname": "Giddy",
        "age": 72,
        "gender": "male",
        "email": "paulwalker559@gmail.com",
        "phone": "+45 234 324 4342",
        "username": "paulwalker50",
        "password": "dsfa83faf",
        "birthdate": "1950-11-25",
        "image": "https://hips.hearstapps.com/hmg-prod/images/paul-walker-vin-diesel-fast-five-1676448870.jpeg?crop=0.246xw:0.444xh;0.168xw,0.0685xh&resize=1200:*",
        "bloodgroup": "A−",
        "height": 200,
        "weight": 100.2,
        "eyecolor": "Blue",
        "hair": {
            "type": "Straight",
            "color": "Brown"
        }
    }


9. PUT localhost:3000/users/id

    curl --location --request PUT 'localhost:3000/users/31' \
    --header 'Content-Type: application/json' \
    --data-raw '    {
        "firstname": "John",
        "lastname": "Harlow",
        "maidenname": "Drippy",
        "age": 24,
        "gender": "male",
        "email": "jharlow@gmail.com",
        "phone": "+43 435 593 4834",
        "username": "johnhdrippy3",
        "password": "42df24f2",
        "birthdate": "1998-05-11",
        "image": "https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-ipage-v1-0-4%2F574%2F1298574%2FYkvboikV%2F1e9f9f03c90148fe9f51710c6c2729c2&methods=resize%2C1000%2C5000",
        "bloodgroup": "B+",
        "height": 184,
        "weight": 90.3,
        "eyecolor": "Red",
        "hair": {
            "type": "Curly",
            "color": "Blond"
        }
    }'

   In this case id is an integer that corresponds to the id of a single user in the 'users' table.
   This will take the input data provided inside of the Body as JSON and update the user data in the 'users' table,
   who corresponds to the input id.
   If the id input does not exist in the database, it returns: User of id: ${id} was not found in the db.
   Otherwise it returns: {"message": `User of id: ${id} has been updated.`}
   (After this it is optional to run a GET from step 7 to make sure the newly edited user exists (using the same id))

   EXAMPLE PUT BODY DATA TO UPDATE USER
    {
        "firstname": "John",
        "lastname": "Harlow",
        "maidenname": "Drippy",
        "age": 24,
        "gender": "male",
        "email": "jharlow@gmail.com",
        "phone": "+43 435 593 4834",
        "username": "johnhdrippy3",
        "password": "42df24f2",
        "birthdate": "1998-05-11",
        "image": "https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-ipage-v1-0-4%2F574%2F1298574%2FYkvboikV%2F1e9f9f03c90148fe9f51710c6c2729c2&methods=resize%2C1000%2C5000",
        "bloodgroup": "B+",
        "height": 184,
        "weight": 90.3,
        "eyecolor": "Red",
        "hair": {
            "type": "Curly",
            "color": "Blond"
        }
    }


10. DELETE localhost:3000/users/id

    curl --location --request DELETE 'localhost:3000/users/31'

    In this case id is an integer that corresponds to the id of a single user in the database.
    If the id input does not exist in the database: User of id: ${id} was not found in the db.
    Otherwise: User of id: ${id} has been deleted.