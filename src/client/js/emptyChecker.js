function checkIsNotEmpty(inputText) {
    console.log("::: Running checkIsNotEmpty :::", inputText);
    
    const value = inputText.value.trim();

    if(value.length > 0) {
        alert("Valid Input given");
        return true;
    } else return false;
}

export { checkIsNotEmpty }
