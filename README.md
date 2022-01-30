# Url Shortener API

This is a URL Shortener API built using Express.js and MongoDB (using the Mongoose ODM).

The main application is in the App.js file.  
The schema for Mongoose is defined in /models/url.js.  
Routes for the API are defined in the routes directory.  

Currently deployed at https://secret-atoll-61569.herokuapp.com/

## Use

The API is described below.

### Generate new shortened URL

#### Request

POST /api/shorten
```
curl --location --request POST 'https://secret-atoll-61569.herokuapp.com/api/shorten' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'url=<Desired URL>' \
--data-urlencode 'alias=<Alias>'
```

##### Headers
Content-Type: application/x-www-form-urlencoded

##### Body
url=Desired URL  
alias=Alias  
Note: alias is optional

#### Response

```
{"alias":"0Esj","longUrl":"<Desired Url>","shortUrl":"https://secret-atoll-61569.herokuapp.com/<Alias>"}
```
### Use shortened URL

Simply use the returned shortURL in a browser. This sends a GET request, which redirects the user to the desired longURL.
