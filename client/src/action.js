import TestForm from './Components/TestForm'

function handlePost() {
    fetch('http://jyh:3000', {
        method: 'POST', 
        body: TestForm
    })
}

export default handlePost;