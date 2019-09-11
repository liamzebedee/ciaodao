const Box = require('3box')




// const { getResolver } = require('muport-did-resolver')



// const myAddress = "0x1cdad033df958291390ba7265be81b84cb6bfcfb"
const myAddress = "0x5bdc20c8d3b00268c1cb0d1ae404956b6feef19a"
const myDid = "did:muport:QmYqSGLGX9aV52MiGx7ofejMvKh3qsJ2ySrWCuw2XikJkA"
const my3id = "did:3:bafyreifn2pva2xawli63gk5tohdcxqfhzjhjty53p5k7fzukwahftdyjou"

// 42 66 2a 48 62 c6 5f d6 95 e7 63 22 1b 1e e8 7d e8 cc bc a8 77 aa c2 76 c9 2a d6 0a ec 36 5e 29 09 90

// const dids = [
//     "did:muport:QmQKuX46stz5zutJ7jTjzShw96efJkHuma9UBnUjsTqvmp",
//     "did:3:bafyreia5cfdobz3z6mry63ytsmvd4g6yy3y3gwpehao6csuxyjwidfwnoi",
// ]
// parse(myDid).then(doc => console.log(doc))


// async function getEthAddress(did) {
//     const doc = await resolve(did)
//     let addrs = doc.publicKey.filter(k => k.ethereumAddress)
//     return addrs[0]
//   }



// console.log(JSON.stringify(dids))

// const {Resolver} = require( 'did-resolver' )
// const ethr = require(  'ethr-did-resolver' )

// const resolver = new Resolver(getResolver())

// resolver.resolve(myDid).then(doc => console.log(doc))

// "did:3:bafyreiapoigqe26oscizw5jxmrszotgf5md4ohck3izi3n7o3kaftdx6fu"

// Box.profileGraphQL(`{
//     profiles(ids: ["${myDid}"]) {
//         name,
//         eth_address
//     }
// }`).then(profile => {
//     console.log(profile)
// })

// async function getEthAddressForDid(did) {
//     Box.getProfile(did).then(profile => {
//         console.log(profile)
//     })

//     return await Box.profileGraphQL(`{
//         profile(id: "${did}") {
//             name,
//             eth_address
//         }
//     }`)
// }

// async function getDidForEthAddress() {
    Box.getProfile(my3id).then(profile => {
        console.log(profile)
        Box.idUtils.verifyClaim(profile.proof_did, { audience: my3id }).then(x => console.log(x.doc))
    })
// }

// Promise.all([
//     getEthAddressForDid(dids[0]),
// ]).then(function() {
//     console.log(arguments)
// })



// getEthAddress(myAddress).then(profile => {
//     console.log(profile)
// })