  # set to ubuntu
  sudo cp ~/Downloads/burp-ca.crt \
    /usr/local/share/ca-certificates/burp-ca.crt
  sudo update-ca-certificates

  # kill port
  sudo kill -9 $(sudo lsof -t -i:3000)

  # view and catch network interface
  sudo tcpdump -ni any -nn 'port 15353 or port 53'