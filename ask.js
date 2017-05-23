var bears = [ "You've tried to stop my brilliant ideas with common sense a thousand times. Has it ever worked?",
               "It's because I'm smarter than the average bear.",
               "We have to deject! Eject is up, deject is down!",
               "You can't fail if you never stop trying.",
               "12 o'clock? It's too soon for noon.",
               "Anytime we want to do something fun, there's a new rule. And I'm plenty tired of it.",
               "Another golden rule is: don't lose your cool.",
               "Picnic baskets may be delicious on the lips but they are a lifetime on the hips.",
               "All great things come in bears.",
               "He's turning this park into a boot camp, with me getting the boot.",
               "Hey, the President knows my name.",
               "I'm so smart that it hurts.",
               "Wha? 12 o'clock? It's too soon for noon!",
               "And because you're such a good kid, here's another nothing, for nothing.",
               "If Santa Claus can do this coming down, we can do it going up"
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
var Game = {};

start();

function start() {
  Game.score = 0;
  Game.question = 1;
  Game.answer = 0;

  progress.style.width = 0;

  // Don't double ask questions.
  Game.availableBerras = berras.slice();
  Game.availableBears = bears.slice();

  gameoff.hidden = true;
  gameon.hidden = false;

  // Display the score of a new game
  score.innerText = Game.score;

  ask();
}

function getRandom(quotes) {
  var index = Math.floor(Math.random() * quotes.length);
  var quote = `“${quotes[index]}”`;
  quotes.splice(index, 1);
  return quote;
}

function ask() {
  Game.answer = Math.floor(Math.random() * 2);
  var output = document.getElementById('question');

  if (Game.answer === 0) {
    output.innerText = getRandom(Game.availableBerras);
  } else {
    output.innerText = getRandom(Game.availableBears);
  }
}

function answer(event) {
  var which = event.target.name === 'berra' ? 0 : 1;
  progress.style.width = (Game.question / 10 * 100) + '%';
  Game.question++;

  if (Game.answer === which) {
    Game.score++;
    box.classList.add('animated');
    box.classList.add('yes');
  } else {
    box.classList.add('animated');
    box.classList.add('no');
  }

  setTimeout(function() {
    box.classList.remove('animated');
    box.classList.remove('no');
    box.classList.remove('yes');
  }, 1500);

  score.innerText = Game.score;
  if (Game.question === 11) {
    gameoff.hidden = false;
    gameon.hidden = true;
  } else {
    ask();
  }


}
