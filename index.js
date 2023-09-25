const mainmodal = document.getElementById("maincontainer");
const resultmodal = document.getElementById("results");
const rulemodal = document.getElementById("modalbox");
const closemdoal = document.getElementById("modalbox");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");
const rock = document.getElementById("Rock");
const lizard = document.getElementById("Lizard");
const spock = document.getElementById("Spock");
const scoreEl = document.getElementById("score");
const resultMsg = document.getElementById("winstatus");
const winStatusBx = document.getElementById("gamestatus");
const arngBtn = document.getElementById("arngbtn");
const scoreBoard = document.getElementById("scoreboard");
const backEffect = document.getElementById("cover");
const toggleSwitch = document.getElementById("sound-switch");

/* sound globals*/
const bgSound = document.querySelector("[data-sound=bg-sound]");
const chSound = document.querySelector("[data-sound=user-choice]");
const winSound = document.querySelector("[data-sound=win]");
const drawSound = document.querySelector("[data-sound=draw]");
const looseSound = document.querySelector("[data-sound=loose]");
const playAG = document.querySelector("[data-sound=again]");

function switchSound(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-sound", "bg-sound");
    bgSound.play();
  } else {
    document.documentElement.setAttribute("data-sound", "none");
    bgSound.pause();
  }
}
toggleSwitch.addEventListener("change", switchSound);

function chpick() {
  chSound.play();
}

var userchoice = 0;
var userPick = document.getElementById("userpick");
var housePick = document.getElementById("housepick");
var houseOptions = [1, 2, 3];

/** 1 represents Paper
 *  2 represents Scissors
 *  3 Represents Rock
*/
let effCtDet = 0;
var score = 0;

var houseChoice = Math.floor(Math.random() * houseOptions.length) + 1;

function rules() {
  rulemodal.style.display = "block";
}

function rulesclose() {
  closemdoal.style.display = "none";
}

function resultDisp() {
  mainmodal.style.visibility = "hidden";
  resultmodal.style.display = "block";
}
function bonousGame() {
  houseOptions = [1, 2, 3, 4, 5];

  /** 1 represents Paper
 *  2 represents Scissors
 *  3 Represents Rock
 *  4 Represents Spoke
 *  5 Represents Lizard
*/
}
function House() {
  setTimeout(() => {
    if (houseChoice == 1) {
      housePick.setAttribute("id", "paperchoice");
    } else if (houseChoice == 2) {
      housePick.setAttribute("id", "scissorschoice");
    } else if (houseChoice == 3) {
      housePick.setAttribute("id", "rockchoice");
    } else if (houseChoice == 4) {
      housePick.setAttribute("id", "spockchoice");
    } else {
      housePick.setAttribute("id", "lizardchoice");
    }
  }, 1000);
}
function playAgain() {
  mainmodal.style.visibility = "visible";
  resultmodal.style.display = "none";
  houseChoice = Math.floor(Math.random() * houseOptions.length) + 1;
  housePick.setAttribute("id", "houseclear");
  arngBtn.style.display = "none";
  winStatusBx.style.display = "none";
  playAG.play();
  clrbackEft();
}

function rockCh() {
  resultDisp();
  userPick.setAttribute("id", "rockchoice");
  userchoice = rock;
  House();
  Detwinner();
}

function paperCh() {
  resultDisp();
  userPick.setAttribute("id", "paperchoice");
  userchoice = paper;
  House();
  Detwinner();
}

function scissorsCh() {
  resultDisp();
  userPick.setAttribute("id", "scissorschoice");
  userchoice = scissors;
  House();
  Detwinner();
}

function scoreIcr() {
  score += 1;
  scoreEl.innerHTML = score;
}

function scoreDcr() {
  score -= 1;
  scoreEl.innerHTML = score;
}
//Bonous Game Conditions

function bonousGame() {
  houseOptions = [1, 2, 3, 4, 5];
  houseChoice = Math.floor(Math.random() * houseOptions.length) + 1;

  /** 1 represents Paper
 *  2 represents Scissors
 *  3 Represents Rock
 *  4 Represents Spoke
 *  5 Represents Lizard
*/
}
function SpockCh() {
  resultDisp();
  userPick.setAttribute("id", "spockchoice");
  userchoice = spock;
  House();
  Detwinner();
}
function spockpick() {
  if (userchoice == spock && houseChoice == 4) {
    resultMsg.textContent = "DRAW 😱";
    effCtDet = 1;
  } else if (userchoice == spock && (houseChoice == 1 || houseChoice == 5)) {
    resultMsg.textContent = "YOU LOOSE 😞";
    scoreDcr();
    effCtDet = 2;
  } else if (userchoice == spock && (houseChoice == 2 || houseChoice == 3)) {
    resultMsg.textContent = "YOU WIN 😎";
    scoreIcr();
    effCtDet = 3;
  }
}
function LizardCh() {
  resultDisp();
  userPick.setAttribute("id", "lizardchoice");
  userchoice = lizard;
  House();
  Detwinner();
}
function lizardpick() {
  if (userchoice == lizard && houseChoice == 5) {
    resultMsg.textContent = "DRAW 😱";
    effCtDet = 1;
  } else if (userchoice == lizard && (houseChoice == 2 || houseChoice == 3)) {
    resultMsg.textContent = "YOU LOOSE 😞";
    scoreDcr();
    effCtDet = 2;
  } else if (userchoice == lizard && (houseChoice == 1 || houseChoice == 4)) {
    resultMsg.textContent = "YOU WIN 😎";
    scoreIcr();
    effCtDet = 3;
  }
}
function paperpick() {
  if (userchoice == paper && houseChoice == 1) {
    resultMsg.textContent = "DRAW 😱";
    effCtDet = 1;
  } else if (userchoice == paper && (houseChoice == 2 || houseChoice == 5)) {
    resultMsg.textContent = "YOU LOOSE 😞";
    scoreDcr();
    effCtDet = 2;
  } else if (userchoice == paper && (houseChoice == 3 || houseChoice == 4)) {
    resultMsg.textContent = "YOU WIN 😎";
    scoreIcr();
    effCtDet = 3;
  }
}

function scissorspick() {
  if (userchoice == scissors && houseChoice == 2) {
    resultMsg.textContent = "DRAW 😱";
    effCtDet = 1;
  } else if (userchoice == scissors && (houseChoice == 3 || houseChoice == 4)) {
    resultMsg.textContent = "YOU LOOSE 😞";
    scoreDcr();
    effCtDet = 2;
  } else if (userchoice == scissors && (houseChoice == 1 || houseChoice == 5)) {
    resultMsg.textContent = "YOU WIN 😎";
    scoreIcr();
    effCtDet = 3;
  }
}

function rockpick() {
  if (userchoice == rock && houseChoice == 3) {
    resultMsg.textContent = "DRAW 😱";
    effCtDet = 1;
  } else if (userchoice == rock && (houseChoice == 1 || houseChoice == 4)) {
    resultMsg.textContent = "YOU LOOSE 😞";
    scoreDcr();
    effCtDet = 2;
  } else if (userchoice == rock && (houseChoice == 2 || houseChoice == 5)) {
    resultMsg.textContent = "YOU WIN 😎";
    scoreIcr();
    effCtDet = 3;
  }
}

function Detwinner() {
  /** 1 represents Paper
 *  2 represents Scissors
 *  3 Represents Rock
 *  4 Represents Spoke
 *  5 Represents Lizard
*/
  setTimeout(() => {
    paperpick();
    scissorspick();
    rockpick();
    spockpick();
    lizardpick();

    if (score < 0) {
      scoreBoard.style.backgroundColor = "red";
    } else if (score = 0) {
      scoreBoard.style.backgroundColor = "white";
    } else{
       scoreBoard.style.backgroundColor = "green"; 
     }

    arngBtn.style.display = "block";
    winStatusBx.style.display = "block";
    backEft();
    textAnim();
  }, 2000);
}

function backEft() {
  if (effCtDet == 3) {
    backEffect.setAttribute("id", "coveruserwin");
    backEffect.style.visibility = "visible";
  }
  if (effCtDet == 2) {
    backEffect.setAttribute("id", "coverhousewin");
    backEffect.style.visibility = "visible";
  }
}

function clrbackEft() {
  backEffect.setAttribute("id", "cover");
  backEffect.style.visibility = "hidden";
}

function textAnim() {
  if (effCtDet == 3) {
    resultMsg.setAttribute("id", "you-win-message");
    winSound.play();
  }
  if (effCtDet == 1) {
    resultMsg.setAttribute("id", "draw-message");
    drawSound.play();
  }
  if (effCtDet == 2) {
    resultMsg.setAttribute("id", "loose-message");
    looseSound.play();
  }
}
