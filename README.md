# Eat-Da-Burger

A Simple Full Stack Application with MySQL, Node, Express, Handlebars and ORM. Follows the MVC design pattern; using Node and MySQL to query and route data in the app, and Handlebars to generate HTML.

Project Name - Eat-Da-Burger
Description: Creating a burger logger with MySQL, Node, Express, Handlebars and a ORM (Object Relational Mapper). Following the MVC (Model, View, Controllers) design pattern and using Node + MySQL to query and route data in the app, and Handlebars to generate HTML.

Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.
Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.
The app will store every burger in a database, whether devoured or not.

Application Architecture

M(odel)
V(iew)
C(ontroller)

Model
The central component of the pattern. It is the application's dynamic data structure, independent of the user interface. It directly manages the data, logic and rules of the application.

View
Any representation of information such as a chart, diagram or table. Multiple views of the same information are possible, such as a bar chart for management and a tabular view for accountants.

Controller
Accepts input and converts it to commands for the model or view.
In addition to dividing the application into these components, the model–view–controller design defines the interactions between them.

The model is responsible for managing the data of the application. It receives user input from the controller.
The view means presentation of the model in a particular format.
The controller responds to the user input and performs interactions on the data model objects. The controller receives the input, optionally validates it and then passes the input to the model.

Site is Depolyed to Heroku

Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.
