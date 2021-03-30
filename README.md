# peacemakr.io
peacemakr.io quick test

To run code:

1. Install the dependencies
```
npm i
```

2. Run local build (the same static code will be deployed in the production as there is a single entrypoint to build for localdev and prod)
```
npm run start
```

3. Run production build
```
npm run build
```
4. Run locally with hot-swapping enabled (will not have anything replaced by gulp though)
```angular2html
npm run localdev
```
Oh crap. The thing built for prod is broken, but my local build looks fine, what do I do?
```
npm run build
docker run -dit -v ./docs:/usr/local/apache2/htdocs/ -p 1234:80 httpd:2.4
```
OR
```
python3 -m http.server -d ./docs
```
