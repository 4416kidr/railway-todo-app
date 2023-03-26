cd src
mkdir scss
cp *.css scss/
cp pages/*.css scss/
cp components/*.css scss/
cd scss
for fn in *.css; do mv $fn ${fn%.css}.scss; done
cd ../../
yarn sass src/scss:public/css
