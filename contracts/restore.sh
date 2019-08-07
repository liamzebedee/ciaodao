curl -H "Content-Type: application/json" -X POST --data \
    '{"id":1337,"jsonrpc":"2.0","method":"evm_revert","params":["0x1"]}' \
    http://localhost:8545