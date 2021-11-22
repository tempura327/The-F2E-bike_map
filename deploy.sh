#!/usr/bin/env sh

set -e

npm run build

LOGSTRING=$(git log)
COMMIT=$(echo $LOGSTRING | awk '{print $2}')

cd dist

git init
git add -A
git commit -m "deploy (commit: $COMMIT)"

git push -f git@github.com:tempura327/The-F2E-bus_map.git master:gh-pages

cd ..

##sh deploy.sh