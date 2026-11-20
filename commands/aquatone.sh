# run aquatone for subdomain enumeration
cat subdomain.txt | aquatone -out ./result

# run aquatone for subdomain enumeration with chromium
cat /home/alo-dipaferdian/works/personal/labs/hosts/subdomain.txt | aquatone \
  -chrome-path /snap/bin/chromium \
  -out ./hackycorp

# run aquatone for subdomain enumeration with chromium 
cat /home/alo-dipaferdian/works/personal/labs/hosts/subdomain.txt | aquatone \
  -chrome-path /snap/bin/chromium \
  -out ./hackycorp

# run aquatone for subdomain enumeration with chromium and timeout
cat /home/alo-dipaferdian/works/personal/labs/hosts/subdomain.txt | aquatone \
  -ports 443 \
  -scan-timeout 5000 \
  -http-timeout 10000 \
  -chrome-path /snap/bin/chromium \
  -out ./hackycorp

# run specific domain with aquatone for subdomain enumeration with chromium, port 443, and timeout
echo "www.hackycorp.com" | aquatone \
  -ports 443 \
  -scan-timeout 5000 \
  -http-timeout 10000 \
  -debug \
  -out ./hackycorp

# run aquatone for subdomain enumeration with chromium and timeout
cat /home/alo-dipaferdian/works/personal/labs/hosts/subdomain.txt | aquatone \
  -scan-timeout 5000 \
  -http-timeout 10000 \
  -chrome-path /snap/bin/chromium \
  -out ./hackycorp
