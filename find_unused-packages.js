// Assumes you have ag installed, `brew install the_silver_searcher`
// https://gist.github.com/brentvatne/6390909075b02811ef5384d5b7c41ab2
// node find_ununsed-packages
const fs = require('fs');
const packageJson = fs.readFileSync('./package.json');
const dependencies = Object.keys(JSON.parse(packageJson).dependencies);

const { execSync } = require('child_process');
dependencies.forEach(dep => {
    try {
        let result = execSync(`ag '${dep}' --ignore node_modules --ignore package.json --ignore yarn.lock --ignore package-lock.json`);
    } catch(e) {
        console.log(`${dep} is unused`);
    }
});