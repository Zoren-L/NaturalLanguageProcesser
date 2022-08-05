/* Global Variables */
let baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key='; //enter url of MeaningCloud URL
let apiKey = process.env.API_KEY; //My account API ID

function handleSubmit(event) {
    event.preventDefault()

    // check the text
    let formText = document.getElementById('name').value;

    if (Client.checkIsNotEmpty(formText) === false){
        alert('Form is empty, please fill form with text before submitting');
        return false
    }
    else {
        console.log("Submitted Form")
        getCheckedText(baseURL, formText, apiKey)
        .then(function(data){
            console.log(data)
            handleText('/submitData', {confidence: data.confidence, agreement: data.agreement, score_tag: data.score_tag});
        })
        .then(function() {
          updateUI()
        });
    }
}

//Action 3: Check what text was input into the form
const getCheckedText = async (baseURL, formText, key)=> {
    const res = await fetch(`${baseURL}${key}&txt=${formText}&lang=en`);
    try {
      const data = await res.json();
      console.log(data);
      return data;
    }
    catch (error){
      console.log("Your key doesn't open the gateway", error)
    }
}

//Action 4: post data to server
/* Function to POST data */
const handleText = async ( url = '', data = {})=>{
      const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin', 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),     
    });

    try {
      const postData = await response.json();
      console.log(postData);
      return postData;
    }
    catch (error){
      console.log("You opened a portal to an unknown dimension!", error)
    }
}

const updateUI = async () => {
  const request = await fetch('/retrieve');
  try{
    const values = await request.json();
    console.log(values);
    document.getElementById('results').innerHTML = `Agreement: ${values.agreement} 
                                                    <br></br> Confidence: ${values.confidence} 
                                                    <br></br> Score: ${values.score_tag}`;
  } catch(error) {
    console.log("Ui failed to update", error);
  }
}

export { handleSubmit }
