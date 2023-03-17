const sendRequest = (callback) => {
    let url = 'https://opentdb.com/api.php'
    let amountQuestions = document.querySelector('#amountQuestions').value
    let difficulty = document.querySelector("#difficulty").value
    let questionType = document.querySelector("#questionType").value
    let fullUrl = `${url}?amount=${amountQuestions}&category=1&difficulty=${difficulty}&type=${questionType}`
        // console.log(fullUrl)
    return fullUrl
}

async function createTrivia(urlFunction) {
    let url = fetch(urlFunction)
    let response = await url
    return console.log(response)
}


document.addEventListener("click", createTrivia(sendRequest))