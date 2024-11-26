# PRODUCTS API (practice)

On this API we will place on practice methods like get, post and delete, also explain the diferent routes to get information.
We will use port 3000.


## REMEMBER TO USE POSTMAN

- We create a new tap and we write "localhost:3000/" and we will get a message.

### Products info

- When we use "localhost:3000/products" with method GET we will see products information, also we will be able to update, create and delete products.

### Method get:

**ID**: Use "localhost:3000/products/(ID-number)" to get any product id


### Method post:

To add or create new information we use method POST and over the bar we type "localhost:3000/products" we go to body, and under body we have to choose "raw", and it allows you to type information type JSON, so you con type this as an example:

```json
    {
    "id": 5,
    "name": "MT-07",
    "price": 6000,
    "category": "Nake bike sport",
    "description": "Master of torque in a twin cylinder bike"
    }
```

And send it as post method.


### Method put:

To update information we use method PUT and over the bar we type "localhost:3000/products/(ID-number)" we go to body, and under body we have to choose "raw", and it allows you to type information type JSON, remember to type the number id you want to update, example:

We want to update the previous product that was add:
So me use PUT method and the bar should be like this "localhost:3000/products/5"

```json
    {
    "id": 5,
    "name": "cbr-250",
    "price": 4000,
    "category": "Dirt bike",
    "description": "Create your own obstacles"
    }
```

### Method delete:

To remove information, we have to do it from the ID, so we use delte method and we type "localhost:3000/products/(product-id)", we send the request and the student will be remove or delete.