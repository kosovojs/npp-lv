#!/bin/sh
cd $HOME/public_html/api
result=$(php7 import.php 2>&1)
IMPORT_EXIT_STATUS=$?

# mail if failed
if [ $IMPORT_EXIT_STATUS -ne 0 ]; then
	echo "Subject: NPP failed\n\nTask failed\n\n$result" | /usr/sbin/exim -odf -i kosovojs@gmail.com
fi