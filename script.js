function getComputerChoice() {
    let p = "paper";
    let r = "rock";
    let s = "scissors";
     function btwOneThree(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
     }
      switch(btwOneThree(1, 3)) {

     case 1:
        return p;
        break;

      case 2: 
       return r;
       break;

     case 3:
        return s;
        break;
     }
    }
