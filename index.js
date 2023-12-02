
// Define the currentUser variable
const currentUser = 'YourUserName'; // replace 'YourUserName' with the actual user name

// Define the welcomeMessage variable
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Define the excitedWelcomeMessage variable
const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;

// Define the shortGreeting variable
const firstInitial = currentUser[0];
const shortGreeting = `Welcome, ${firstInitial}!`;

// Export the variables if needed (assuming you are using CommonJS modules)
module.exports = {
  currentUser,
  welcomeMessage,
  excitedWelcomeMessage,
  shortGreeting,
};
