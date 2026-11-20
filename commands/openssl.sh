  openssl x509 \
  -inform DER \
  -in ~/Downloads/cacert.der \
  -out ~/Downloads/burp-ca.crt

    # full certificate information
  openssl s_client -connect hackycorp.com:443 -servername hackycorp.com </dev/null 2>/dev/null | openssl x509 -noout -subject -issuer -dates

  # only show certificate information
  openssl s_client -connect hackycorp.com:443 -servername hackycorp.com

  # take a look san for more details
  echo | openssl s_client -connect hackycorp.com:443 -servername hackycorp.com 2>/dev/null | openssl x509 -noout -text