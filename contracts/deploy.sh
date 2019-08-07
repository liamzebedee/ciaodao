#!/bin/bash
set -ex
source ./seth.env

make all

LOG=./deploy/LOG

export SYSTEM=$(seth send --create $(cat ./out/System.bin) --status 2>/dev/null)

export REGISTRY=$(seth send --create $(cat ./out/Registry.bin) "Registry(address)" $SYSTEM --status 2>/dev/null)
echo -n $REGISTRY > ./deploy/Registry

export GUACTOKEN=$(seth send --create $(cat ./out/GUACToken.bin) "GUACToken(address)" $SYSTEM --status 2>/dev/null)
echo -n $GUACTOKEN > ./deploy/GUACToken

export MEMBERNFT=$(seth send --create $(cat ./out/MemberNFT.bin) "MemberNFT(address)" $SYSTEM --status 2>$LOG)
echo -n $MEMBERNFT > ./deploy/MemberNFT


# Now inject addresses
seth send $SYSTEM "injectAll(address,address,address)" $MEMBERNFT $GUACTOKEN $REGISTRY --status 2>$LOG


seth send $GUACTOKEN "setup()" --status 2>$LOG


tee ./deploy/deployments.env.sh << EOF
export SYSTEM=$SYSTEM
export REGISTRY=$REGISTRY
export GUACTOKEN=$GUACTOKEN
export MEMBERNFT=$MEMBERNFT
EOF

echo 'Success'