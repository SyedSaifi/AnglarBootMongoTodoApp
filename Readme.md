# Spring Boot, MongoDB, Angular Restful API TodoApplication

TodoApplication with Spring Boot & MongoDB in the Backend and Angular in the frontend.

### Install Dependencies
* Get [Java - 1.8.x](http://www.oracle.com/technetwork/java/javase/downloads/java-archive-javase8-2177648.html). I used 1.8.0_121.
* Get [Maven - 3.x.x](http://maven.apache.org/download.cgi).
* Get [MongoDB - 3.x.x]. 

## Steps to run the application

**1. Setup MongoDB**

```bash
Option:
1. Install MongoDB locally
2. You can use one of the free mongodb database-as-a-service providers like MongoLab(https://mlab.com/home).
MongoLab gives you 500 MB worth of data in their free plan. You can create a database with their free plan.

I have already created a account in MongoLab and created a database tododb. If you want to use this then setup below prpoerty in application.properties file in backend resources

spring.data.mongodb.uri=mongodb://todouser:password@ds235169.mlab.com:35169/tododb

3. Setup a MongoDB docker conatiner
Follow below link to setup a MongoDB container, database and user,
https://hub.docker.com/_/mongo/
```

**2. Clone the application**

```bash
git clone https://github.com/SyedSaifi/AnglarBootMongoTodoApp.git
```

**3. Build and run the backend app using maven**

```bash
cd backend
mvn package
java -jar binary/angularBootMongoTodoApp-1.0.0.jar
```

Alternatively, you can run the app without packaging it using -

```bash
mvn spring-boot:run
```

The backend server will start at <http://localhost:8080>.

**4. Run test and generate coverage report for frontend app**

```bash
cd frontend
npm install
ng test --code-coverage
```

**5. Run the frontend app**

```bash
ng serve
```

Frontend server will run on <http://localhost:4200>
