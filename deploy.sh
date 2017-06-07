server=ubuntu@54.93.232.18

# remove the old zip file if present, locally and on server
rm -f tsmean.zip
ssh ${server} "rm -f tsmean.zip"

# zip the required directories
zip -r tsmean.zip backend -x \
backend/node_modules/**\* \
backend/dist/**\* >/dev/null \

zip -r tsmean.zip frontend/dist

echo ""
echo "---------------------------------"
echo "Upload Zip"
echo "---------------------------------"

scp tsmean.zip "${server}:~"

ssh ${server} "rm -rf tsmean"
ssh ${server} "unzip tsmean.zip -d tsmean"
ssh ${server} "cd tsmean/backend && npm install && npm run forever"

echo ""
echo "---------------------------------"
echo "Cleanup"
echo "---------------------------------"
rm tsmean.zip
