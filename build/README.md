# 🏗️ Build System

## Running build system inside the container

Download image:

```sh
docker pull node
```

Run downloaded image:

```sh
docker run -it -v $(pwd):/home/node node bash
```

## Configuration

Install required packages:

```sh
npm ci
```

