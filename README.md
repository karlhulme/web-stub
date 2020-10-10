# Web-Stub

A web server that returns the details of the request, useful for debugging.

## Docker

To push a new version:

* Update the package.json version number.
* Run `docker login --username=karlhulme`
* Run `npm run docker-build`
* Run `npm run docker-push`
