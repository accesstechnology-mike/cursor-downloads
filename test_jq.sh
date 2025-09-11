#!/bin/bash
cat version-history.json | python3 -c "
import json, sys
data = json.load(sys.stdin)
v = data['versions'][0]
platforms = v.get('platforms', {})
details = v.get('platformDetails', {})

for platform, url in platforms.items():
    size_bytes = details.get(platform, {}).get('sizeBytes')
    sha256 = details.get(platform, {}).get('sha256')
    
    size_str = str(size_bytes) if size_bytes else ''
    sha_str = f'`{sha256}`' if sha256 else '-'
    
    print(f'{platform}\t[Download]({url})\t{size_str}\t{sha_str}')
" | awk -F'\t' '{
    size=$3; unit="";
    if (size=="") { printf "| %s | %s | - | %s |\n", $1,$2,$4; next }
    s=size+0; u[0]="B"; u[1]="KB"; u[2]="MB"; u[3]="GB"; i=0;
    while (s>=1024 && i<3) { s=s/1024; i++ }
    printf "| %s | %s | %.1f %s | %s |\n", $1,$2,s,u[i],$4;
}'
