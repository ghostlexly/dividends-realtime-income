rsync --delete -avh /mnt/Git/dividends-realtime-income/ immotreso@35.187.171.205:/opt/dividends-realtime-income/
ssh -t immotreso@35.187.171.205 'cd /opt/dividends-realtime-income/ && docker-compose build && docker-compose up -d'