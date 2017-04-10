#!/bin/bash
cp rAsPI.service /etc/systemd/system/rAsPI.service
systemctl daemon-reload
systemctl enable rAsPI.service
echo "service installed. Type 'sudo systemctl start rAsPI' to start the service" 