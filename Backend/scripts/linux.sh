hostName=$(cat /proc/sys/kernel/hostname);
lastseen=$(last | head -n 1);
mac=$(cat /sys/class/net/eth0/address)
os=$(cat /etc/os-release | head -n 2 | tail -n 1 | cut -d '=' -f 2) ;
domain=$(hostname -d);
publicIP=$(host myip.opendns.com resolver1.opendns.com | tail -n 1 | cut -d ' ' -f 4);
groups=$(groups);
echo  { "hostName": "$hostName" , "mac":"$mac", "lastSeen":"$lastseen" ,"os":$os  ,"domain": "$domain" ,"publicIP": "$publicIP" , "groups":"$groups"}
