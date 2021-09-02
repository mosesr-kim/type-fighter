# Type Fighter

A full stack JavaScript team hackathon project for Mintbean!  Our application [Type Fighter](https://the-type-fighter.herokuapp.com/) allows you to put your typing skills to the test against other players in a real-time, online experience.  Race to complete a phrase before your opponent to deal damage and eventually defeat your opposition.

Check it out [here](https://the-type-fighter.herokuapp.com/)!

![creating-user](https://user-images.githubusercontent.com/82472092/131821068-44aace69-9d0d-4029-a520-5808f7286f53.gif)
![typing-phrase](https://user-images.githubusercontent.com/82472092/131821077-66f762f2-c522-4301-b427-918749ac6462.gif)


## Contributors

Joseph Nguyen [GitHub](https://github.com/josephtnguyen/) | [LinkedIn](https://www.linkedin.com/in/josephtringuyen/)

Moses Kim [GitHub](https://github.com/mosesr-kim/) | [LinkedIn](https://www.linkedin.com/in/mosesr-kim/)

Solomon Jin [GitHub](https://github.com/solomonjin/) | [LinkedIn](https://www.linkedin.com/in/solomon-jin/)

## Get Started

If you would like to develop this game yourself, here are steps you'll need to take to get started.

1. Download Node.js.
2. Clone the type-fighter repository.
3. Open the terminal to the type-fighter repository.
4. Run the command `npm install` to download the necessary npm packages.
5. Run the command `cp .env.example .env` to create a `.env` file for the application.
6. In the `.env` file, change the `TOKEN_SECRET` and `COOKIE_SECRET` to suitable values.
7. In the `.env` file, change the `DATABASE_URL` at `changeMe` to `typeFighter`.
8. Run the command `sudo service postgresql status` to see if postgresql is running.
9. If postgresql is not running, run the command `sudo service postgresql start`.
10. Run the command `createdb typeFighter` to instantiate the database.
11. Run the command `npm run db:import` to import the schema and initial data.
12. Run the command `npm run dev` to start the server and run the client as a live server.
13. View the client in the browser at `localport:3000`.
14. To view the database on pgweb, open another terminal and run the command `pgweb --db=<insert DATABASE_URL's changeMe from .env>`; then, open the browser to `localhost:8081`.
