#!/bin/bash
any-json openapi.yml swagger-ui/yaml.json
echo "window.spec = " > swagger-ui/openapi.js
cat swagger-ui/yaml.json >> swagger-ui/openapi.js
