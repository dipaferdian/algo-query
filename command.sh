# run static service
python3 -m http.server 7000 --bind 127.0.0.2

# change run folder location recon.sh
alias recon.sh="path/recon.sh"

# proxy listener
curl -v --proxy http://127.0.0.1:8081 \
  http://localhost:3000/


# run chrome without loopback
google-chrome \
  --user-data-dir=/tmp/chrome-burp \
  --proxy-server="127.0.0.1:8080" \
  --proxy-bypass-list="<-loopback>"

# get certificate burp
  openssl x509 \
  -inform DER \
  -in ~/Downloads/cacert.der \
  -out ~/Downloads/burp-ca.crt

# set to ubuntu
sudo cp ~/Downloads/burp-ca.crt \
  /usr/local/share/ca-certificates/burp-ca.crt
sudo update-ca-certificates

# kill port
sudo kill -9 $(sudo lsof -t -i:3000)

# view log
docker logs -f dns-axfr-lab

# view one shoot
docker logs -f dns-axfr-lab

# restart service after change configuration
docker compose restart dns

# change with source ip client
dig -b 127.0.0.2 -p 15353 @127.0.0.1 www.lab.test

# view and catch network interface
sudo tcpdump -ni any -nn 'port 15353 or port 53'

# curl header only response
curl -I -X <http method> <url>

# curl body and header response
curl -i -X  <http method> <url>

# curl with body json request
curl -X <http method> <url> \
  -H "Content-Type: application/json" \
  -H "Authorization: "
  -d '{}'


  curl -X POST http://localhost:8080/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer secret12" \
  -d '{"id": 1, "name": "cara", "price":1000}'


  curl -i -X OPTIONS http://localhost:8080/products