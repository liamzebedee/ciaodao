curl -H "Content-Type: application/json" -X POST --data \
    '{"id":1337,"jsonrpc":"2.0","method":"evm_snapshot","params":[]}' \
    http://localhost:8545 | jq -r .result
