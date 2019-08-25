import { readFileSync } from 'fs'

let content = readFileSync("./data/stateddapps.tsv", "utf8");

let data = {}

content = content.split(/\n/)
const header = content[0]
const cols = header.split('\t').map(x => x.trim())


for(let line of content.slice(1)) {
    let values = line.split('\t')
    // console.log(values)

}




registry.add(
    name,
    twitter,
    github,
    logo
)