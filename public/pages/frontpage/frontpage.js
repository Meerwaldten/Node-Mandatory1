function sendSuggestion(){
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    document.getElementById("displaySuggestion").innerText = "Thank you for your suggestion, " + name +". We'll try to make a new site about: " + subject;
}
