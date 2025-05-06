class CyberTerminal {
    constructor() {
      this.commands = {
        help: this.showHelp,
        bio: this.showBio,
        contact: this.showContact
      };
    }
    
    showHelp() {
      return `
      > COMMANDS AVAILABLE:
      - help       : Show this menu
      - bio        : Display user profile
      - contact    : Show contact methods
      `;
    }
    
    init() {
      console.log('%cCYBER TERMINAL ACTIVATED', 'color: #00ffcc');
      document.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.processCommand();
        }
      });
    }
  }
  
  new CyberTerminal().init();