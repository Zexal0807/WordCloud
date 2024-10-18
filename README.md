# WordCloud

## How to start - NEED DOCKER

In root folder run 

```
docker-compose up
```

Docker will build up:
- A simple NodeJS server that expose a web socket on port 4000 (CORS on port 3000 are available)
- A simple ReactJS client with two pages, both connected by web socket:
    - http://localhost:3000/    - Main page where student can submit thier word
    - http://localhost:3000/?role=viewer - Page for teacher, it shows the submitted words as a cloud




