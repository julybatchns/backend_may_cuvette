// ! Node.js is an open-source, cross-platform runtime environment that allows developers to run JavaScript code on the server side. It was created by Ryan Dahl in 2009 and has since become a popular choice for backend development due to its efficiency and scalability.

// \* JavaScript Everywhere: Node.js allows you to use JavaScript for both frontend and backend development. This means you can maintain a single language across your entire stack, which simplifies development and makes it easier to manage code.

// ? Non-blocking I/O: Node.js is designed around a non-blocking, event-driven architecture, which makes it ideal for handling a large number of concurrent connections without the need for multiple threads. This leads to better performance and scalability for I/O-intensive applications, like web servers and APIs.

// ! Package Management with NPM: Node.js comes with NPM (Node Package Manager), a vast ecosystem of libraries and modules that you can easily integrate into your projects. This allows you to quickly add functionality without reinventing the wheel.

// ! NPM, which stands for Node Package Manager, is the default package manager for Node.js. It allows developers to install, share, and manage dependencies (packages or libraries) in their Node.js projects. NPM is also a vast repository of open-source packages that you can use to speed up your development process.

# npm init -y

# npm i <package-name>

# npm uninstall <package-name>

# The fs module in Node.js is one of the core modules that provides an API for interacting with the file system. It can be used to read, write, delete, and manipulate files and directories on the server.

# In Node.js, a "View Engine" refers to the template engine used to generate HTML dynamically. It allows you to embed server-side logic into HTML, making it easier to display dynamic content to users. Popular template engines include EJS, Pug (formerly Jade), and Handlebars. We’ll use EJS (Embedded JavaScript) as the view engine in this explanation, but the concepts apply to other engines as well.

// MongoDB

# MongoDB is a NoSQL database, which means it stores data in a non-relational format, using a flexible, document-based model instead of the traditional table-based relational database structure. It's highly scalable and ideal for modern applications that need to handle large amounts of unstructured data.

# Document-Oriented: MongoDB stores data in JSON-like documents called BSON (Binary JSON), which can store complex data types.

# Schema-less: Unlike relational databases, MongoDB doesn’t require a predefined schema. Documents in the same collection can have different structures, making it flexible.

# Scalable: It supports horizontal scaling through sharding, which divides data across multiple servers.

# Rich Query Language: MongoDB has a powerful query language that supports CRUD (Create, Read, Update, Delete) operations, filtering, sorting, and aggregation.

# Database: A container for collections, equivalent to a database in a relational system.

# Collection: A group of MongoDB documents, similar to a table in relational databases.

# Document: A record in MongoDB, represented in BSON format.

{
"\_id": "1",
"name": "John Doe",
"email": {}",
"age": 29,
"hobbies": ["reading", "swimming"]
}

# MongoDB Atlas is MongoDB's fully-managed cloud database service. It allows you to deploy, manage, and scale MongoDB databases with ease, without worrying about infrastructure.

# MongoDB is a NoSQL database that stores data in a flexible, JSON-like format called BSON (Binary JSON). Unlike traditional SQL databases, MongoDB does not use tables and rows. Instead, it uses collections and documents.

<!-- Collection: A grouping of MongoDB documents, akin to a table in SQL. -->
<!-- Document: A single record in a collection, similar to a row in SQL, but in BSON format. -->

<!-- Insert: Adds new documents to a collection.
Find: Retrieves documents from a collection.
Update: Modifies existing documents.
Delete: Removes documents from a collection. -->

# MongoDB Atlas is a cloud-based MongoDB service provided by MongoDB Inc. It offers fully managed databases with automated backups, scaling, and performance monitoring.
