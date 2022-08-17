// Write your code in this file!
const currentUser = 'Grace Hopper';
    function user(){
        return currentUser;
    }
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
    function messageforuser(){
        return welcomeMessage;
    }

const excitedWelcomeMessage = welcomeMessage.toUpperCase();
    function excitedmessage(){
        return excitedWelcomeMessage;
    }

const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
    function shortgreet(){
        return shortGreeting;
    }
console.log(shortgreet());

