const daos = require('../data/aragondaos')

const TOKEN_MANAGER_APP = '0x6b20a3010614eeebf2138ccec99f028a61c811b3b1a3343b6ff635985c75c91f'
for(let dao of daos.daos) {
    let tokenApp = dao.apps.filter(({ id }) => id === TOKEN_MANAGER_APP)
    if(tokenApp.length) {
        console.log(dao.address, ' ', tokenApp[0].address)
    }
    // process.exit(0)
}
