function checkIsNotEmpty(inputText) {
    console.log("::: Running checkIsNotEmpty :::", inputText);
    
    let value = inputText.trim();

    if(value.length >= 0) {
        return true;
    } else return false;
}

export { checkIsNotEmpty }
