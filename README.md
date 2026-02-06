# FBSim Web

> A web-based football simulation user interface built with the FootballSim web components from [fbsim-ui](https://github.com/whatsacomputertho/fbsim-ui)

## Overview

A simple Express web server which serves up a static web UI largely composed of browser-native web components. These components come from the [whatsacomputertho/fbsim-ui](https://github.com/whatsacomputertho/fbsim-ui) repository. They bundle the WASM library built from [whatsacomputertho/fbsim-core](https://github.com/whatsacomputertho/fbsim-core), and alternatively can interact with the FootballSim REST API ([whatsacomputertho/fbsim-api](https://github.com/whatsacomputertho/fbsim-api)) over HTTP.

![A demo of the FootballSim UI](doc/img/fbsim-ui-demo.gif)

## Usage

### Running the server

**Running locally via node**

Clone this repository and run `npm install` followed by `npm run dev`.  Before doing so, you may want to customize your environment variables in a `.env` file.  Accepted environment variables include the following, given with their default values:
```sh
# The IP and port to listen to
FBSIM_UI_DOMAIN=0.0.0.0
FBSIM_UI_PORT=8081

# The FBSim API host, if applicable
#
# NOTE: This is no longer actively used by the UI
#       but eventually will be re-introduced
FBSIM_API_HOST=http://localhost:8080
```

**Running locally in container**

Alternatively, to run the server as a container, one can `podman run` / `docker run` a published version of the image
```
ghcr.io/whatsacomputertho/fbsim-web:v1.0.0-beta.1
```

Or one can build locally by cloning this repository and running the following (here, `podman` can optionally be replaced with `docker`).
```sh
# Build the container image
make build
podman build -f Containerfile . -t fbsim-web:latest

# Run the container
podman run -it -p 8081:8081 fbsim-web:latest
```
