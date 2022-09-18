# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

Requirements for the setup:

- [docker](https://docs.docker.com/engine/install/)
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- access to the [repository](https://github.com/ObelusFamily/Anythink-Market-dkc01)

### Clone the repository to your local machine
```bash
git clone git@github.com:ObelusFamily/Anythink-Market-dkc01.git
```
After the cloning is done, move inside the root of the repository.
```bash
cd Anythink-Market-dkc01
```
> If you named the clone differently change the command to the changed name.

### Spin up the docker containers
> if your docker engine is not running make sure it is
First make sure you are in the root of the repository.
Start the docker containers with ```docker-compose up```.

```bash
docker-compose up
```

This should start 3 new services:
- mongodb-node (PORT: 27017)
- anythink-frontend-react (PORT: 3001)
- anythink-backend-node (PORT: 3000)

### Test if the services are running
- [Backend](http://localhost:3000/)
- [Frontend](http://localhost:3001/)

If the websites open and display some text you are good to go.
If not try to stop the containers and check if the ports for services are used by some other application. If so stop those processes and start up the docker containers again.

### Creating a new user on frontend
If everything is working properly, you’ll be able to [create a new user](http://localhost:3001/register).
