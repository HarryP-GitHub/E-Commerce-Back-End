# ORM E-Commerce Back End

## Description
This project was to create an E-Commerce Back End for a manager at an internet retail company. This project will provide the company with a backend for their e-commerce site that will be able to open API GET routes for all categories, products and tags as well as by id. And have POST, PUT and DELETE routes which will allow categories, tags and products to be created, updated and deleted in the database. Which can be demonstrated in Insomnia.

## Installation
The installation process for this project requires a few steps.
Installing Dependencies, sourcing database and seeding the database.

To install the dependencies for this project: 

In the intergrated terminal run the command:

npm install

For the correct versions of the dependencies type in:

npm install express@4.17.1
npm install mysql2@2.1.0
npm install dotenv@8.2.0
npm install sequelize@5.21.7

After all the dependencies are installed. Source the database.

In the command prompt, begin by ensuring you're in the right location.

Right click the db folder and 'Copy Path', then type in the command prompt:

cd and paste in the Path.

The command lind should now read the correct path.

Then type in the command prompt:

mysql -u root -p

And type in your password

Once you're logged into MySQL, enter:

source schema.sql;

Now the database will be sourced.

Finally, seeding the database, go back to the intergrated terminal and type in:

npm run seed

Now you should be ready to run the application.

## Usage
Once all the installations, sourcing the database and seeding the database are done. You will be able to run the application.

To do this type in the intergrated terminal:

npm start

The API routes can be demonstrated using insomnia, using the routes for Categories, Products and Tags:

- localhost:3001/api/categories
- localhost:3001/api/products
- localhost:3001/api/tags

Where applicable, be sure to add the /id in the route to find by id, update and delete.

Example:

- GET localhost:3001/api/categories to get all categories,
- GET localhost:3001/api/categories/1 to get the Category with the id of 1
- POST localhost:3001/api/categories with { "category_name": "categoryName" } in the body to create a new category
- PUT localhost:3001/api/categories/10 with { "category_name": "newCategoryName" } in the body to update a category
- DELETE localhost:3001/api/categories/10 to delete that category

Ensure that the body meets the models criteria and data that is not meant to be null is not null otherwise there will be an error

## Credits
- An abundance of Internet Resources 
- Teachers/Class Material
- Refered to Mini-Project for Syntax

## License
N/A

## GitHub Repository

[GitHub Repository](https://github.com/HarryP-GitHub/E-Commerce-Back-End)

## Video Demo

[Video Demo]()