const textArea = document.querySelector('.textarea')
const preview = document.querySelector('.preview')

let pattern = [
    {
        regex: /^# (.*$)/gim,
        replace: '<h1>$1</h1>'
    },
    {
        regex: /^## (.*$)/gim,
        replace: '<h2>$1</h2>'
    },
    {
        regex: /^### (.*$)/gim,
        replace: '<h3>$1</h3>'
    },
    {
        regex: /^\> (.*$)/gim,
        replace: '<blockquote>$1</blockquote>'
    },
    {
        regex: /\*\*(.*)\*\*/gim,
        replace: '<b>$1</b>'
    },
    {
        regex: /\*(.*)\*/gim,
        replace: '<i>$1</i>'
    },
    {
        regex: /!\[(.*?)\]\((.*?)\)/gim,
        replace: "<img alt='$1' src='$2' />"
    },
    {
        regex: /\[(.*?)\]\((.*?)\)/gim,
        replace: "<a href='$2'>$1</a>"
    },
    {
        regex: /\n$/gim,
        replace: '<br />'
    }

]


textArea.addEventListener('keyup', (e) =>{

    let {value} = e.target
    for(let element of pattern) {
        value = value.replace(element.regex, element.replace)
    }
    preview.innerHTML = value
})