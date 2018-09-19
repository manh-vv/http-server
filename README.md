# http-server

## installl

```bash
yarn && yarn test
```

## docker build

```bash
./brun.sh
```

## Docker image

```bash
docker run -d --name http-server --rm -p 80:8080 -p 443:8081 manhvu2507/http-server
docker logs -f http-server &
```
