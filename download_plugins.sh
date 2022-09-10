urls="https://assets.codepen.io/16327/DrawSVGPlugin3.min.js
https://assets.codepen.io/16327/MorphSVGPlugin3.min.js
https://assets.codepen.io/16327/ScrollSmoother.min.js"

for pluginUrl in $urls
do
    curl $pluginUrl | python pirate_plugin.py > $(basename $pluginUrl)
done
