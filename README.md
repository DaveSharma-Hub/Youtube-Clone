# Youtube-Clone

## Description
Full Stack Youtube replica **in progress**

## Preview
*Sample Screenshot progress so far*
![image](https://user-images.githubusercontent.com/81478885/209453858-7f02dcd1-4cd4-4946-b587-f02c951697e3.png)

## Usage 
```cd frontend```
```npm start```

```cd server```
```npm start```

*OR with docker*

in bash shell

```cd server```

```./serverSetupRunner.sh```

to run docker compose up

## How it Works

``frontend`` created in React.js utilizes Sass and MUI for styling, while the React.js utilizes the compositional pattern to break pages into components (Pages *use* Components).
``server``(backend) using Node.js is a custom loadbalancer application that uses a GraphQL backend to prevent overfetching and underfetching of data (compared to 
RESTful APIs). The custom loadbalancing application utilizes vertical scaling taking advantage of the number of cores of system server is hosted on.

## Data Flow Diagram

![image](https://user-images.githubusercontent.com/81478885/209745814-2db4710b-6eae-45f1-b40f-4a33f0606548.png)

