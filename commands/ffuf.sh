  # path
  ffuf \
  -w ~/works/personal/labs/wordlists/web-content/common.txt \
  -u https://hackycorp.com/FUZZ \
  -mc 200,403

  # save result to file
  ffuf \
  -w  ~/works/personal/labs/wordlists/web-content/subdomains-top1million-5000.txt \
  -u https://hackycorp.com/FUZZ \
  -o results.json \
  -of json 
  
  # subdomain
  ffuf \
  -w /home/alo-dipaferdian/works/personal/labs/wordlists/web-content/fierce-hostlist.txt \
  -u 51.158.147.132/ \
  -H "Host: FUZZ.hackycorp.com" \
  -ac