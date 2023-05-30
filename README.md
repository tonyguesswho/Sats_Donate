# Sats Donate

### Description
A platform that enbales donation using the Bitcoin lightning network


### Setup Instruction
- Clone Repo(https://github.com/tonyguesswho/Sats_Donate.git)
- Setup Server
    - cd into the backend folder
    - Create .env file and add the  LND Node configuration as seen in the .env.example file
    - create a postgres db with name `satsdonatedbdev` (This will be extarcted to the env a later time)
    - Run `yarn install`
    - Run `sequelize db:migrate`
- Setup Client
    - cd into client folder
    - create a .env file and add the api url as shown in the .env.example folder
    - Run `yarn install`


### Features
- Users can create a project
- Users can view list of projects
- Users can donate to a project
- A lightning invoice will be created for the payment

### Technologies used
- Javascript(Typescript)
- React
- Nodejs
- Lnd
- Socker IO
- Polar

### Further Improvements
