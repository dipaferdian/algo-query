

google-chrome \
  --user-data-dir=/tmp/chrome-burp \
  --proxy-server="127.0.0.1:8080" \
  --proxy-bypass-list="<-loopback>"