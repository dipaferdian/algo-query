  # curl header only response
  curl -I -X <http method> <url>

  # curl body and header response
  curl -i -X  <http method> <url>

  # curl with body json request
  curl -X <http method> <url> \
    -H "Content-Type: application/json" \
    -H "Authorization: "
    -d '{}'

  # proxy listener
  curl -v --proxy http://127.0.0.1:8081 \
      http://localhost:3000/
