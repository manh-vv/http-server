# http-server

Require node version is up to date. Current working node version is **^v20**.

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
```