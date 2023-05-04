
docker-build:
	docker build -t aaronmiya3/http-server .

docker-push:
	docker push aaronmiya3/http-server

docker-run:
	docker run --name http-server --rm -p 8080:80 -p 8443:443 aaronmiya3/http-server &

docker-stop:
	docker stop http-server

demo:
	curl http://localhost:8080?msg=hello-http
	curl -k https://localhost:8443?msg=hello-https