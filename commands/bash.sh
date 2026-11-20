
  for i in $(seq 0 150); do
    printf "0x-%02x.a.hackycorp.com\n" "$i"
done > subdomain2.txt


for i in `cat subdomain.txt`; do
    curl $i/logo.png -o $i.png

# check last 10 subdomain result
tail subdomain.txt 

# change run folder location recon.sh
alias recon.sh="path/recon.sh"

