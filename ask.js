var bears = [ "You've tried to stop my brilliant ideas with common sense a thousand times. Has it ever worked?",
              "It's because I'm smarter than the average bear.",
               "We have to deject, Boo-Boo! Eject is up, deject is down!",
               "You can't fail if you never stop trying.",
               "12 o'clock? It's too soon for noon.",
               "Anytime we want to do something fun, there's a new rule. And I'm plenty tired of it.",
               "Another golden rule is: don't lose your cool.",
               "Picnic baskets may be delicious on the lips but they are a lifetime on the hips.",
               "All great things come in bears.",
               "He's turning this park into a boot camp, with me getting the boot.",
               "Hey, the President knows my name."
            ];
var berras = [ "When you come to a fork in the road, take it.",
              "You can observe a lot by just watching.",
              "No one goes there nowadays, it’s too crowded.",
              "A nickel ain’t worth a dime anymore.",
              "Always go to other people’s funerals, otherwise they won’t come to yours.",
              "You better cut the pizza in four pieces because I’m not hungry enough to eat six.",
              "I usually take a two-hour nap from one to four.",
              "Never answer an anonymous letter.",
              "It gets late early out here.",
              "Pair up in threes.",
              "I never said most of the things I said.",
              "It ain’t the heat, it’s the humility.",
              "If you ask me anything I don’t know, I’m not going to answer.",
              "Take it with a grin of salt.",
              "If the world were perfect, it wouldn’t be.",
              "If you don't know where you are going, you might wind up someplace else."
            ];
var numBerras = berras.length;
var numBears = bears.length;
var Game = {score: 0, question: 0, answer: 0};

start();

function start() {
  Game.score = 0;
  Game.question = 0;
  Game.answer = 0;
  ask();
}

function ask() {
  Game.answer = Math.floor(Math.random() * 2);
  var output = document.getElementById('question');
  if (Game.answer === 0) {
    output.innerText = berras[Math.floor(Math.random() * numBerras)];
  } else {
    output.innerText = bears[Math.floor(Math.random() * numBears)];
  }
  berra.checked = bear.checked = false;
  btnAnswer.hidden = false;
  btnNext.hidden = true;
  answerMessage.hidden = true;
}

function answer() {
  Game.question++;
  if (Game.answer === 0 && berra.checked || Game.answer === 1 && bear.checked) {
    answerMessage.innerText = 'Yup! You got it!';
    Game.score++;
  } else {
    answerMessage.innerText = 'Oops! It was Yogi ' + (Game.answer === 0 ? 'Berra' : 'Bear');
  }
  answerMessage.hidden = false;
  btnAnswer.hidden = true;
  btnNext.hidden = false;
}
