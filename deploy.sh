set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/yunlew531/BikeFun-ts.git master:gh-pages

cd -