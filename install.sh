#!/bin/bash
if [ $(id -u) != 0 ]; then
    exec sudo -- "$0" "$@"
    exit
fi

echo "Installing dependencies"
npm install

echo "Task runner to minify and optimize files"
gulp

echo "Starting the application"
node server.js

echo "done."