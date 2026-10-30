let browserName
let testing = 'smoke'

function launchBrowser(browserName){
    if (browserName==='chrome')
        console.log(`Launching the default browser which is ${browserName} \n`);
    else 
        console.log(`Launching the browser of your choice which is ${browserName} \n`);
}

launchBrowser('IE')

function runTests(testing){
    switch(testing){
        case 'smoke':
            console.log("Smoke Testing\n")
            break
        case 'regression':
            console.log("Regression Testing \n")
            break
        case 'sanity':
            console.log("Sanity Testing \n")
            break
        default:
            console.log("Default Testing - Smoke\n")
    }

}

runTests()
