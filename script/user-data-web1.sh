#!/bin/bash

echo "Installing Nginx"
sudo apt update && sudo apt install nginx -y
echo "<h1>Hello From Web1</h1>" > /var/www/html/index.html
sudo systemctl enable --now nginx