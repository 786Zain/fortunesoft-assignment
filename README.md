# Fortunesoft Assignment

## Installation Guide
	npm install
	npm start

## Application Gateways

	Swagger-UI = http://localhost:3333/api-docs
	Movies Get API = http://localhost:3333/api/movies/getMovies
	View Template = http://localhost:3333/api/movies/start
	Static site = {http://localhost:3333/

## Postman Script
	Postman = ./helpers/Fortunesoft.postman_collection.json
	curl --location --request GET 'http://localhost:3333/api/movies/getMovies' \
	--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTW9oYW1tYWQgWmFpbiIsImNvbXBhbnkiOiJmb3J0dW5lc29mdCJ9.na7Mk7OeZcKyRyLfXsolQeXVkCYVVDsPqcxStX2VGEI

## Authentication JWT Details
	Bearer Token
	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTW9oYW1tYWQgWmFpbiIsImNvbXBhbnkiOiJmb3J0dW5lc29mdCJ9.na7Mk7OeZcKyRyLfXsolQeXVkCYVVDsPqcxStX2VGEI
	Kindly add Bearer in Swagger for Token

	Payload
	{
	  "name": "Mohammad Zain",
	  "company": "fortunesoft"
	}

	Verified Signature
	HMACSHA256(
	  base64UrlEncode(header) + "." +
	  base64UrlEncode(payload),
	fortunesoft
	)

Mohammad Zainulla<br />
**Tech Lead**<br />