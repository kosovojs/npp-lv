#!/bin/bash
myDate=$(date "+%Y-%m-%d")
mysqldump --defaults-file=~/replica.my.cnf --host=tools-db --skip-lock-tables s53917__npp_p | gzip -c > $home/dumps/npp-$myDate.sql.gz