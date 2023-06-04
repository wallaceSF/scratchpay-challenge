[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=wallaceSF_scratchpay-challenge&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=wallaceSF_scratchpay-challenge)
[![Build Status](https://dev.azure.com/wallacesf0597/Control-media/_apis/build/status%2FScratchpay%20Challenge?branchName=main)](https://dev.azure.com/wallacesf0597/Control-media/_build/latest?definitionId=2&branchName=main)

# ScrayPay Challenge

## Up Project
First of all, have `docker` and `docker-compose` installed on your machine.

After the above process.
Enter the root of the project and start the containers with the `docker-compose up` command.

## Accessing the project
To access, enter the address bar with this url: `http://localhost:4000`, however you must make sure that the port (4000) is not being used.
## Api's públicas
| EndPoints     | Tipo     | Descrição                              |
|---------------|----------|----------------------------------------| 
| `/`           | `get`    | heathcheck route                       |
| `/clinic`     | `get`    | returns a clinic based on the parameters |

## Examples - Curl

## GET

returns all clinics with status equal to: FL:

    curl -X GET \
      http://localhost:4000/clinic?state[]=FL \  
      -H 'cache-Control: no-cache'   

returns all clinics based in any parameters:

    curl -X GET \
      http://localhost:4000/clinic?state[]=FL&state[]=Florida&from=09:00&to=20:00&name=Mayo%20Clinic \  
      -H 'cache-Control: no-cache'

## Questions
Any questions please contact wallace.sf87@gmail.com or feel free to create an issue or a pull request.

Just Do it!
