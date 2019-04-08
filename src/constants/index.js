 export const questions = [
        {
            question: "What is the average the airspeed velocity of a (European) unladen swallow?",
            answer: "11 meters per second"
        },
        {
            question: "Which of the following countries has agreed to accept the payment of export of oil and petroleum products to India, in rupee terms instead of dollar or any other currency?",
            answer: "Iran"
        },
        {
            question: "Which device is used to reproduce drawings using pens that are attached to movable arms?",
            answer: "Plotter"
        },
        {
            question: " Scitation is the online host service of",
            answer: "American Institute of Physics"
        },
        {
            question: "Which set of rules is applicable for exchange of files over Internet?",
            answer: "HTTP"


        },
        {
            question: "When data changes in multiple lists and all lists are not updated, this causes ",
            answer: "data inconsistency"
        },
        {
            question: "A word in a web page that, when clicked, opens another document is called ___",
            answer: "hyperlink"
        },
        {
            question: "One Terabyte (1 TB) is equal to?",
            answer: "1024 GB"
        },
        {
            question: "Which operating system is developed and used by Apple Inc?",
            answer: "iOS"
        },
        {
            question: "What are the first 10 digits of PI?",
            answer: "3.141592653"
        }
    ];
    
    export const notificationProps =
    {
        message: "Hello World",
        type: "error"
    };
    
    export const confirmationData = 
    {     
        message: 'Should we bake a pie?',
        type: 'message' 
    } 
    
    export const getStatus = (statusType) => {
        let status = 'alert alert-info';
        if (statusType === 'success') {
            status = 'alert alert-success'
        } else if(statusType === 'message') {
            status = 'alert alert-info'
        } else if (statusType === 'caution') {
            status = 'alert alert-warning'
        } else if (statusType === 'error') {
            status = 'alert alert-danger'
        }
        return status;
        
    }
    
    
