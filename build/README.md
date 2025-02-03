# 🏗️ Build System

## Running build system inside the container

Download an image:

```sh
docker pull node
```

Run the downloaded image:

```sh
docker run -it -v $(pwd):/home/node node bash
```

## Configuration

Install required packages:

```sh
npm ci
```

### Run

```sh
cd /home/node/build
node build_readme.js
```
