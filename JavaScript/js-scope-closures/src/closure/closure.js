function gretting(){
    let userName = 'Oscar';
    function displayUserName(){
        return "Hello" + userName;
    }
    return displayUserName;
}


const g = gretting();