# http-server

It requires Nodejs version 20. The current working node version is **^v20**.

## Development

```sh
yarn

# start the server
yarn dev
```

## Docker build

```sh
make docker-build
```

## Docker image

```sh
make docker-run
# Hit Enter to input further commands

# To stop it, hit Enter then
make docker-stop
```

### Test

```sh
curl http://localhost:8080?msg=hello-http
curl -k https://localhost:8443?msg=hello-https

curl -X POST 'http://localhost:5088/send' -H 'Content-Type: application/json' -d '{"msg2": "HELLO msg2"}'
curl -k 'https://localhost:5443/send' -H 'Content-Type: application/json' -d '{"msg2": "HELLO msg2"}'
```

# Run with prebuilt image

- Change 8080 or 8443 to the wishing port.
- I don't use `-d` but `&` to make it print log to the current terminal

```sh
docker run --name mock-server --rm -p 8080:80 -p 8443:443 aaronmiya3/http-server &

# To stop it
# docker rm -f mock-server
```
