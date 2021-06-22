import express from "express";

const app = express();

/*
- GET   --> Searching info
- POST  --> Insert info
- PUT  --> Alterate info
- PUT  --> Remove info
- PATCH  --> Alterate specific info
*/
//pass the route
app.get("/test-get", (request, response) => {
    //Request   --> Sending data
    //Response  --> Receiving data
    return response.send("Get method test successfully completed!") 
});

app.post("/test-post", (request, response) => {
    return response.send("Post method test successfully completed!")
});

// creating server to survey .ts modifications
app.listen(3006, () => console.log("Server is running!"));

