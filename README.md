# Youtube-Clone

## Description
Full Stack Youtube replica **in progress**

## Preview
*Sample Screenshot progress so far*
![image](https://user-images.githubusercontent.com/81478885/209453858-7f02dcd1-4cd4-4946-b587-f02c951697e3.png)


![image](https://user-images.githubusercontent.com/81478885/212520373-cd74ccfc-e1ae-42e2-8da1-5d1e040e87ad.png)
![image](https://user-images.githubusercontent.com/81478885/212520346-6e4c83e1-a0df-4640-bf43-e3e46be5ca3f.png)

![image](https://user-images.githubusercontent.com/81478885/212520356-b165b571-defa-4020-b5b2-f72b522ac5b8.png)


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

## Tech Stack

![image](https://user-images.githubusercontent.com/81478885/210152087-f523a584-69ea-4067-a72e-2891faaf02c7.png)


## Architecure Diagram

![image](https://user-images.githubusercontent.com/81478885/210151893-374f2eec-5ce1-44fc-b780-a5ac75d27d5b.png)


## Data Flow Diagram

![image](https://user-images.githubusercontent.com/81478885/209745814-2db4710b-6eae-45f1-b40f-4a33f0606548.png)

