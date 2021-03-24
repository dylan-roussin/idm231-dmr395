const sigma = document.getElementById('sigma');
const roadhog = document.getElementById('roadhog');
const tracer = document.getElementById('tracer');
const ball = document.getElementById('ball');
const bastion = document.getElementById('bastion');
const mccree = document.getElementById('mccree');
const lucio = document.getElementById('lucio');
const zen = document.getElementById('zen');
const dva = document.getElementById('dva');
const zarya = document.getElementById('zarya');
const winston = document.getElementById('winston');
const junkrat = document.getElementById('junkrat');
const help = document.getElementById('help');

sigma.addEventListener('click', function (ev) {
  console.log('sigma button clicked: ' + ev.target.id);
  const idName = ev.target.id;
  userPicked(idName);
});

roadhog.addEventListener('click', function (ev) {
  console.log('roadhog button clicked: ' + ev.target.id);
  const idName = ev.target.id;
  userPicked(idName);
});

tracer.addEventListener('click', function (ev) {
  console.log('tracer button clicked: ' + ev.target.id);
  const idName = ev.target.id;
  userPicked(idName);
});

ball.addEventListener('click', function (ev) {
  console.log('ball button clicked: ' + ev.target.id);
  const idName = ev.target.id;
  userPicked(idName);
});

bastion.addEventListener('click', function (ev) {
  console.log('bastion button clicked: ' + ev.target.id);
  const idName = ev.target.id;
  userPicked(idName);
});

mccree.addEventListener('click', function (ev) {
  console.log('mccree button clicked: ' + ev.target.id);
  const idName = ev.target.id;
  userPicked(idName);
});

lucio.addEventListener('click', function (ev) {
  console.log('lucio button clicked: ' + ev.target.id);
  const idName = ev.target.id;
  userPicked(idName);
});

zen.addEventListener('click', function (ev) {
  console.log('zen button clicked: ' + ev.target.id);
  const idName = ev.target.id;
  userPicked(idName);
});

dva.addEventListener('click', function (ev) {
  console.log('dva button clicked: ' + ev.target.id);
  const idName = ev.target.id;
  userPicked(idName);
});

zarya.addEventListener('click', function (ev) {
  console.log('zarya button clicked: ' + ev.target.id);
  const idName = ev.target.id;
  userPicked(idName);
});

winston.addEventListener('click', function (ev) {
  console.log('winston button clicked: ' + ev.target.id);
  const idName = ev.target.id;
  userPicked(idName);
});

junkrat.addEventListener('click', function (ev) {
  console.log('junkrat button clicked: ' + ev.target.id);
  const idName = ev.target.id;
  userPicked(idName);
});

help.addEventListener('click', function (ev) {
  console.log('help button clicked: ' + ev.target.id);
  const idName = ev.target.id;
  userPicked(idName);
});

const sigmaAudio = document.getElementById('sigma-audio');
const roadhogAudio = document.getElementById('roadhog-audio');
const tracerAudio = document.getElementById('tracer-audio');
const ballAudio = document.getElementById('ball-audio');
const bastionAudio = document.getElementById('bastion-audio');
const mccreeAudio = document.getElementById('mccree-audio');
const lucioAudio = document.getElementById('lucio-audio');
const zenAudio = document.getElementById('zen-audio');
const dvaAudio = document.getElementById('dva-audio');
const zaryaAudio = document.getElementById('zarya-audio');
const winstonAudio = document.getElementById('winston-audio');
const junkratAudio = document.getElementById('junkrat-audio');
const helpAudio = document.getElementById('help-audio');

function stopAudio() {
  sigmaAudio.pause();
  sigmaAudio.currentTime = 0;

  roadhogAudio.pause();
  roadhogAudio.currentTime = 0;

  tracerAudio.pause();
  tracerAudio.currentTime = 0;

  ballAudio.pause();
  ballAudio.currentTime = 0;

  bastionAudio.pause();
  bastionAudio.currentTime = 0;

  mccreeAudio.pause();
  mccreeAudio.currentTime = 0;

  lucioAudio.pause();
  lucioAudio.currentTime = 0;

  zenAudio.pause();
  zenAudio.currentTime = 0;

  dvaAudio.pause();
  dvaAudio.currentTime = 0;

  zaryaAudio.pause();
  zaryaAudio.currentTime = 0;

  winstonAudio.pause();
  winstonAudio.currentTime = 0;

  junkratAudio.pause();
  junkratAudio.currentTime = 0;

  helpAudio.pause();
  helpAudio.currentTime = 0;
}


  function userPicked(whichOne) {
    console.log('userPicked called: ' + whichOne);
    switch (whichOne) {
        case 'sigma':
            imageObj.src = 'images/sigma.png';
            titleObj.innerHTML = 'Sigma';
            dateObj.innerHTML = 'Dec 22 - Jan 19';
            discObj.innerHTML = '<p>Sigma is an eccentric astrophysicist and volatile tank who gained the power to control gravity in an orbital experiment gone wrong. Manipulated by Talon and deployed as a living weapon, Sigma’s presence on the battlefield cannot be ignored.<p>';
            modal.hidden = !modal.hidden;
            sigmaAudio.play();
            break;
        case 'roadhog':
            imageObj.src = 'images/roadhog.png';
            titleObj.innerHTML = 'Roadhog';
            dateObj.innerHTML = 'Nov 22 - Dec 21';
            discObj.innerHTML = '<p>Roadhog uses his signature Chain Hook to pull his enemies close before shredding them with blasts from his Scrap Gun. He’s hardy enough to withstand tremendous damage, and can recover his health with a short breather.<p>';
            modal.hidden = !modal.hidden;
            roadhogAudio.play();
            break;
        case 'tracer':
            imageObj.src = 'images/tracer.png';
            titleObj.innerHTML = 'Tracer';
            dateObj.innerHTML = 'Oct 23 - Nov 21';
            discObj.innerHTML = '<p>Toting twin pulse pistols, energy-based time bombs, and rapid-fire banter, Tracer is able to "blink" through space and rewind her personal timeline as she battles to right wrongs the world over.<p>';
            modal.hidden = !modal.hidden;
            tracerAudio.play();
            break;
        case 'ball':
            imageObj.src = 'images/ball.png';
            titleObj.innerHTML = 'Wrecking Ball';
            dateObj.innerHTML = 'Sept 23 - Oct 22';
            discObj.innerHTML = '<p>Wrecking Ball rolls across the battlefield, using his arsenal of weapons and his mech’s powerful body to crush his enemies.<p>';
            modal.hidden = !modal.hidden;
            ballAudio.play();
            break;
         case 'bastion':
            imageObj.src = 'images/bastion.png';
            titleObj.innerHTML = 'Bastion';
            dateObj.innerHTML = 'Aug 23 - Sept 22';
            discObj.innerHTML = '<p>Repair protocols and the ability to transform between stationary Assault, mobile Recon and devastating Tank configurations provide Bastion with a high probability of victory.<p>';
            modal.hidden = !modal.hidden;
            bastionAudio.play();
            break;
         case 'mccree':
            imageObj.src = 'images/mccree.png';
            titleObj.innerHTML = 'McCree';
            dateObj.innerHTML = 'Jul 23 - Aug 22';
            discObj.innerHTML = '<p>Armed with his Peacekeeper revolver, McCree takes out targets with deadeye precision and dives out of danger with eagle-like speed.<p>';
            modal.hidden = !modal.hidden;
            mccreeAudio.play();
            break;
         case 'lucio':
            imageObj.src = 'images/lucio.png';
            titleObj.innerHTML = 'Lúcio';
            dateObj.innerHTML = 'Jun 21 - Jul 22';
            discObj.innerHTML = '<p>On the battlefield, Lúcio’s cutting-edge Sonic Amplifier buffets enemies with projectiles and knocks foes back with blasts of sound. His songs can both heal his team or boost their movement speed, and he can switch between tracks on the fly.<p>';
            modal.hidden = !modal.hidden;
            lucioAudio.play();
            break;
         case 'zen':
            imageObj.src = 'images/zen.png';
            titleObj.innerHTML = 'Zenyatta';
            dateObj.innerHTML = 'May 21 - Jun 20';
            discObj.innerHTML = '<p>Zenyatta calls upon orbs of harmony and discord to heal his teammates and weaken his opponents, all while pursuing a transcendent state of immunity to damage.<p>';
            modal.hidden = !modal.hidden;
            zenAudio.play();
            break;
         case 'dva':
            imageObj.src = 'images/dva.png';
            titleObj.innerHTML = 'D.VA';
            dateObj.innerHTML = 'Apr 20 - May 20';
            discObj.innerHTML = '<p>D.Va’s mech is nimble and powerful—its twin Fusion Cannons blast away with autofire at short range, and she can use its Boosters to barrel over enemies and obstacles, or deflect attacks with her projectile-dismantling Defense Matrix.<p>';
            modal.hidden = !modal.hidden;
            dvaAudio.play();
            break;
        case 'zarya':
            imageObj.src = 'images/zarya.png';
            titleObj.innerHTML = 'Zarya';
            dateObj.innerHTML = 'Mar 21 – Apr 19';
            discObj.innerHTML = '<p>Deploying powerful personal barriers that convert incoming damage into energy for her massive Particle Cannon, Zarya is an invaluable asset on the front lines of any battle.<p>';
            modal.hidden = !modal.hidden;
            zaryaAudio.play();
            break;
        case 'winston':
            imageObj.src = 'images/winston.png';
            titleObj.innerHTML = 'Winston';
            dateObj.innerHTML = 'Feb 19 – Mar 20 ';
            discObj.innerHTML = '<p>Winston wields impressive inventions—a jump pack, electricity-blasting Tesla Cannon, portable shield projector and more—with literal gorilla strength.<p>';
            modal.hidden = !modal.hidden;
            winstonAudio.play();
            break;
        case 'junkrat':
            imageObj.src = 'images/junkrat.png';
            titleObj.innerHTML = 'Junkrat';
            dateObj.innerHTML = 'Jan 20 – Feb 18';
            discObj.innerHTML = '<p>Junkrat’s area-denying armaments include a Frag Launcher that lobs bouncing grenades, Concussion Mines that send enemies flying, and Steel Traps that stop foes dead in their tracks.<p>';
            modal.hidden = !modal.hidden;
            junkratAudio.play();
            break;
        case 'help':
            imageObj.src = 'images/help.png';
            titleObj.innerHTML = 'Help'
            dateObj.innerHTML = '';
            discObj.innerHTML = '<p>Enter your birthdate to see which Overwatch hero you are! You can select any hero to read about them.</p>';
            modal.hidden = !modal.hidden;
            helpAudio.play();
            break;
    }
}

const imageObj = document.getElementById('modal__img');
const titleObj = document.getElementById('modal__title');
const dateObj = document.getElementById('modal__date');
const discObj = document.getElementById('modal__disc');

// x out

const modal = document.getElementById('modal');
const closeModalObj = document.getElementById('modal__exit');
closeModalObj.addEventListener('click', function () {
    modal.hidden = !modal.hidden;
    stopAudio()
});

// Date
function getInput(ev) {
  ev.preventDefault();
  
  const $form = document.getElementById('submit');
  $form.addEventListener('submit', getInput);

  // Get the user date and extract the month of year and day of month
  const userBday = new Date(document.getElementById('bday').value);
  console.log('userBday is: ' + userBday);

  // Figure out the zodiac sign based on month and of year and day of month
  let whichMonth = userBday.getUTCMonth();
  whichMonth++;
  console.log('whichMonth is: ' + whichMonth);

  const whichDayOfMonth = userBday.getUTCDate();
  console.log('whichDayOfMonth is: ' + whichDayOfMonth);

  document.forms[0].reset();


  let AstroSign = "";

  if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "sigma";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "roadhog";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "tracer";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "ball";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "bastion";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "mccree";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "lucio";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "zen";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "dva";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "zarya";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "winston";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "junkrat";
  }

  console.log('AstroSign is: ' + AstroSign);

  userPicked(AstroSign);

};

const $form = document.querySelector('form');
$form.addEventListener('submit', getInput);
