ActiveModelSerializers.config.adapter = :json_api  

#accept the JSON API mime type when receiving data; for when our client POSTs data to the server
api_mime_types = %W(  
  application/vnd.api+json
  text/x-json
  application/json
)
Mime::Type.register 'application/vnd.api+json', :json, api_mime_types  