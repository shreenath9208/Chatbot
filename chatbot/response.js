function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } 
    else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input=="how are you"){
        return " I am fine! How may i help you ";
    }
    else if (input == "tell me about your self"){
        return " I am chatbot developed by Ganesh , Tejas , Atharav , shreenath";
    }

    else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}