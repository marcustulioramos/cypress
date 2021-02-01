# ec4pTask
Web Developer Assessment Task


# Setup
Considering the application will run on Windows using Homestead

### Clone the project
Clone the project inside the Windows vagrant projects folder
```
https://github.com/marcustulioramos/ec4pTask
```
### Set environment variables.
```
cp .env.example .env
```
### create Application Key.
```
php artisan key:generate
```
### create Application Key on env.cypress.

copy the `app_key` from `.env` to `.env.cypress`

### Install composer dependencies
```
composer install
```
### Migrate database
```
php artisan migrate
```
### Open the Cypress test environment
```
npx cypress open
```

### Rue the tests
Click on the test individualy to run

`authLogin.spec.js`

`authLogout.spec.js`

`authRegister.spec.js`


