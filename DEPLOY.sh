
rsync --delete -avzhe ssh immotreso@35.187.171.205:/opt/dividends-realtime-income/ /mnt/Git/dividends-realtime-income/
ssh -t immotreso@35.187.171.205 'cd /opt/dividends-realtime-income/ && docker-compose build && docker-compose up -d'