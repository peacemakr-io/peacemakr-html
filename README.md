# peacemakr.io
peacemakr.io quick test

To run code:

1. Install the dependencies
```
npm i
```

2. Run local build
```
npm run start
```

3. Run production build 

```
npm run build
```

Oh crap. The thing built for prod is broken, but my local build looks fine, what do I do?
```
npm run build
docker run -dit -v ./docs:/usr/local/apache2/htdocs/ -p 1234:80 httpd:2.4
```
