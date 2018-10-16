# beacon-example

```sh
$ cd third/ssl
$ openssl req -new -x509 -sha256 -newkey rsa:2048 -days 365 -nodes -out ./pem.pem -keyout ./key.key
```

```sh
$ /Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary --ignore-certificate-errors --unsafely-treat-insecure-origin-as-secure=https://localhost:4433 --allow-insecure-localhost --user-data-dir=~/chrome
```

```sh
$ docker-compose up
$ open http://localhost:8080
```
