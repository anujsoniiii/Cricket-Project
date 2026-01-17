
const videoData = {
  batting: [
    "https://www.youtube.com/embed/KY8gsVeKn0w?si=1ROHEzqIpk6AVHly",
    "https://www.youtube.com/embed/QF-bm5bOcE8?si=4YxtiNHfxGRg8Cvc"
  ],
  bowling: [
    "https://www.youtube.com/embed/LxG36bHrc2o?si=JrKmrkNGE-eFKMWZ",
    "https://www.youtube.com/embed/4aFtr9E5-DY?si=raGqXfVA-7SnfLGD"
  ],
  fielding: [
    "https://www.youtube.com/embed/zKo2vy4cjdo?si=3pfJH0UQ5l6WPdKX",
    "https://www.youtube.com/embed/pyjZ-9eO5FI?si=vSNrOpYJ9Ij8lQzD"
  ],
  wicketkeeping: [
    "https://www.youtube.com/embed/l7AopPYMkuQ?si=e3R3gGFPrsLskqQ5",
    "https://www.youtube.com/embed/xEiQ_-gJmek?si=uznCuRXUqOF4wxSB"
  ]
};


const storiesData = [
  {
    name: "M.S. Dhoni",
    photo: "photos/msDhoni.webp",
    text: `Mahendra Singh Dhoni was not born into luxury or fame. He grew up in Ranchi, a small town in India, where cricket was just a dream for many kids. As a teenager, Dhoni was known for his hard-hitting shots, but he didn't have any big connections or financial support. To support his family, he took up a job as a Ticket Collector at Kharagpur Railway Station. Many people thought his cricket journey would end there.

But Dhoni never stopped believing in himself. Every day after work, he would still practice cricket, even when he was tired. While others slept, Dhoni dreamed of wearing the Indian jersey. His long hair, fearless attitude, and helicopter shot slowly started catching attention in domestic cricket. After years of struggle and rejection, he got selected for the Indian team in 2004. However, he got out for a duck in his debut match. Many thought he was a one-match player.

But Dhoni didn't give up. With his calm nature, powerful batting, and brilliant captaincy mind, he slowly became one of India's most trusted players. In just a few years, he was made captain of Team India. Then came the historic moment in 2011 — India won the World Cup after 28 years, with Dhoni finishing the match with a legendary six that the world still remembers.

Moral: Success may be delayed, but not denied if you stay calm, work hard, and trust yourself even when no one else does.`
  },
  {
    name: "Virat Kohli",
    photo: "photos/viratKohli.webp",
    text: `Virat Kohli was born in Delhi and started playing cricket at a very young age. Everyone who watched him knew he had talent, but talent alone was not enough. Virat had to go through many struggles to become the player he is today. His family was not very rich, and his father, who supported his cricket dreams, worked hard to provide for him. Virat often said that his father was his biggest inspiration and backbone.

At the age of 18, life hit him with a heartbreaking moment — his father passed away suddenly. At that time, Virat was playing a Ranji Trophy match for Delhi. Most people would have broken down and gone home. But early the next morning, Virat walked onto the field with tears in his heart and scored 90 runs for his team. He played not for himself, but for his father's dream.

This moment became the turning point of his life. Virat transformed himself with intense fitness, discipline, and passion. He became known as one of the most aggressive and determined cricketers in the world. From being a young boy fighting personal battles, he grew into the Captain of the Indian Cricket Team, leading India to numerous victories. He broke countless records and became a symbol of dedication and consistency.

Moral: Pain can break you or make you stronger. Virat chose to turn his pain into power and became one of the greatest cricketers in the world.`
  },
  {
    name: "Sachin Tendulkar",
    photo: "photos/sachinTendulkar.jpg",
    text: `Sachin Tendulkar, often called the "God of Cricket," did not become a legend overnight. Born in Mumbai, he was just an ordinary boy with extraordinary love for cricket. At the age of 11, Sachin began his cricket journey with immense dedication. He practiced day and night under coach Ramakant Achrekar, who saw a spark in him.

While other children played casually, Sachin remained focused on his dream. At just 16 years old, he made his debut for the Indian national team against Pakistan, facing dangerous bowlers like Wasim Akram and Waqar Younis. During one of the matches, Sachin was hit on the face by a bouncer and started bleeding. Everyone thought he would return to the pavilion — but he refused to leave. He wiped the blood and continued playing, showing the world his fearless attitude.

Throughout his career, Sachin faced many ups and downs — criticism, injuries, and pressure from millions of fans. Still, he remained humble, determined, and calm. He carried the hopes of 1.3 billion Indians for 24 long years. Finally, in 2011, when India lifted the World Cup, Sachin's dream came true. His teammates celebrated the victory by carrying him on their shoulders, chanting, "Sachin… Sachin…"

Moral: True greatness is not just about reaching the top, but staying there with humility, dedication, and consistency.`
  },
  {
    name: "Rohit Sharma",
    photo: "photos/rohitSharma.webp",
    text: `Rohit Sharma's journey proves that sometimes success doesn't come early — it comes at the right time. Born in Nagpur and raised in Mumbai, Rohit came from a middle-class family. His parents couldn't afford his school fees, so he stayed with his uncle to pursue cricket. He started as an off-spinner, but his coach noticed his batting talent and moved him to the opening slot in school matches.

Rohit soon got a chance to play in domestic cricket and impressed everyone with his timing and elegance. At just 20 years old, he played for India in the 2007 T20 World Cup and showed promise. But after that, things didn't go as expected. His form became inconsistent, and people started doubting whether he truly belonged in international cricket. Many even said he was a "wasted talent."

But Rohit didn't give up. In 2013, MS Dhoni made a bold decision — he sent Rohit to open the innings permanently. That one move changed Rohit's life. He scored 264 runs in a single ODI match — the highest score ever in ODI cricket. He went on to score three double centuries in ODIs, something no other cricketer has achieved. His effortless six-hitting ability earned him the title "Hitman."

Moral: Even if you don't start strong, you can still finish like a champion if you believe in yourself and never stop improving.`
  },
  {
    name: "Mitchell Starc",
    photo: "photos/starc.webp",
    text: `Mitchell Starc, one of the fastest left-arm bowlers in cricket history, wasn't always a name everyone knew. Born in Australia, Starc had to work incredibly hard to rise through the ranks of competitive cricket. As a teenager, he faced repeated failures and injuries that almost made him give up the sport he loved. Many coaches told him he didn't have the pace or stamina to make it to the top.

But Starc's determination was stronger than the doubts around him. He trained relentlessly, improving his speed, accuracy, and fitness. He spent hours in the nets, bowling hundreds of deliveries, pushing his body to the limits. Even after injuries, he returned stronger and more focused than before. His left-arm pace became a weapon that troubled some of the world's best batsmen.

Starc's breakthrough came when he was selected for Australia's national team. From there, he dominated international cricket with his fiery pace, deadly yorkers, and unerring consistency. He played a key role in Australia's victories in major tournaments, including the 2015 Cricket World Cup, where he finished as the top wicket-taker.

Moral: Challenges and failures are stepping stones. Those who persist and work tirelessly, like Starc, turn struggle into extraordinary success.`
  }
];


const trainingData = [
  {
    title: "Batting Practice",
    text: `Batting is the heart of cricket, and mastering it requires focused daily practice. Spend at least 45 minutes to one hour in the nets every day, concentrating on both defensive and attacking shots. Begin with basic footwork drills to ensure balance and timing. Move on to shadow batting without a ball to refine your technique. Use cones or markers to simulate fielders' positions and practice shot placement accurately. Mix in variations like drives, cuts, pulls, and sweeps. Gradually increase the speed of deliveries to adapt to different bowling styles. Record your practice sessions to analyze posture and shot execution. Mental focus is crucial—visualize the ball trajectory and anticipate deliveries. Integrate net sessions with match simulations to improve decision-making. Track progress in a journal, noting strengths and areas needing improvement. Consistent practice strengthens hand-eye coordination, reflexes, and confidence at the crease. Remember, persistence and patience are keys—batting excellence does not come overnight but through dedication and smart practice strategies.`
  },
  {
    title: "Bowling Drills",
    text: `Bowling requires precision, control, and stamina. Start with basic line and length drills using a target or cones to maintain consistency. Focus on proper grip and release mechanics to avoid injuries and ensure maximum speed and accuracy. Practice variations such as slower balls, yorkers, and bouncers to confuse batsmen during matches. Include warm-up and stretching routines to increase flexibility and prevent muscle strain. Record and analyze each delivery to track improvement in speed, spin, and accuracy. Incorporate core and shoulder strengthening exercises to maintain bowling endurance. Use simulated match situations to practice field awareness, bowling under pressure, and handling different pitch conditions. Rotate between fast and spin bowling if applicable, ensuring that techniques are refined. Mental resilience is key; visualize batsmen's weaknesses and plan each over strategically. Bowling drills not only enhance skill but also develop tactical thinking and consistency. Over time, combining technique, fitness, and game intelligence transforms a regular bowler into a formidable player. Patience, repetitive practice, and focus on small improvements lead to long-term success.`
  },
  {
    title: "Fielding Fitness",
    text: `Fielding can change the outcome of a cricket match and requires agility, speed, and sharp reflexes. Begin with basic catching drills using a partner or rebound net, ensuring safe hand positioning and focus on the ball. Incorporate ground fielding drills to pick up balls quickly and execute accurate throws to the stumps. Practice diving catches, slip catching, and boundary saves to enhance reaction time. Add agility ladder drills, cone sprints, and shuttle runs to improve footwork and quick directional changes. Strengthen arms, core, and legs for faster movements and throwing accuracy. Simulate match scenarios where you chase fast balls and coordinate with teammates for cut-offs and direct hits. Include mental drills like predicting ball trajectory and anticipating batsmen's shots. Use resistance bands and plyometric exercises to improve explosive power. Regular practice boosts stamina, focus, and confidence on the field. A player with excellent fielding skills not only prevents runs but also creates wicket-taking opportunities. Dedication to fielding transforms an average player into a game-changer, highlighting the importance of fitness, reflexes, and strategic thinking. Consistent fielding practice builds both physical and mental strength required for top-level cricket.`
  },
  {
    title: "Strength Training",
    text: `Strength training is essential for modern cricket players to enhance power, endurance, and injury resistance. Focus on compound exercises like squats, lunges, push-ups, pull-ups, and planks to build overall body strength. Incorporate core exercises to stabilize the torso, improving balance during batting, bowling, and fielding. Use resistance bands and light weights initially, gradually increasing intensity for muscle adaptation. Plyometric exercises like box jumps, medicine ball throws, and sprint drills improve explosive power, aiding in quick runs and bowling speed. A proper warm-up and cool-down routine prevents muscle injuries and improves flexibility. Include stretching sessions to maintain joint mobility and reduce stiffness. Nutrition and hydration are vital; consume a balanced diet with adequate protein for muscle repair and growth. Track progress with regular fitness assessments and adjust training intensity accordingly. Mental focus during strength sessions enhances discipline and consistency. Stronger muscles improve reaction time, batting power, and bowling speed while reducing fatigue. A dedicated strength program ensures players maintain peak physical condition, supporting overall performance and resilience during matches. Regular strength training builds the foundation for long-lasting cricket success.`
  },
  {
    title: "Mental Preparation",
    text: `Mental preparation is as important as physical training in cricket. A strong mindset allows players to perform under pressure, stay focused, and recover from failures. Begin with visualization exercises—imagine match scenarios, plan strategies, and rehearse techniques in your mind. Practice mindfulness and meditation to improve concentration and reduce stress. Set short-term and long-term goals to stay motivated and measure progress. Analyze past performances to identify patterns, strengths, and weaknesses. Develop coping strategies for high-pressure situations, like close finishes or challenging opponents. Learn to control emotions and maintain composure on the field, whether batting, bowling, or fielding. Positive self-talk and affirmations build confidence and resilience. Team discussions and feedback sessions enhance mental adaptability and tactical understanding. Maintain a balance between sports, academics, and personal life to avoid burnout. Mental toughness, coupled with physical training, helps players make quick decisions, anticipate plays, and stay consistent. Regular mental preparation strengthens focus, strategic thinking, and emotional stability. A disciplined mental routine ensures players are not just physically fit but mentally ready for every challenge, making them complete cricketers capable of handling pressure and achieving peak performance.`
  }
];


const welcomeScreen = document.getElementById('welcomeScreen');
const dashboardScreen = document.getElementById('dashboardScreen');
const startJourneyBtn = document.getElementById('startJourney');
const userNameInput = document.getElementById('userName');
const favPlayerInput = document.getElementById('favPlayer');
const userGreeting = document.getElementById('userGreeting');
const personalGreeting = document.getElementById('personalGreeting');
const modalOverlay = document.getElementById('modalOverlay');


const tutorialsModal = document.getElementById('tutorialsModal');
const storiesModal = document.getElementById('storiesModal');
const trainingModal = document.getElementById('trainingModal');
const aboutModal = document.getElementById('aboutModal');


let userData = {
  name: '',
  favPlayer: ''
};


function showScreen(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  setTimeout(() => {
    screen.classList.add('active');
  }, 100);
}


startJourneyBtn.addEventListener('click', () => {
  const name = userNameInput.value.trim();
  const favPlayer = favPlayerInput.value.trim();

  if (!name || !favPlayer) {
   
    const inputs = document.querySelectorAll('.input-wrapper input');
    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.animation = 'shake 0.5s';
        setTimeout(() => {
          input.style.animation = '';
        }, 500);
      }
    });
    return;
  }

  userData.name = name;
  userData.favPlayer = favPlayer;


  userGreeting.textContent = userData.name;
  personalGreeting.textContent = `Welcome ${userData.name}! Ready to train like ${userData.favPlayer}?`;

  showScreen(dashboardScreen);
});


const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
  }
`;
document.head.appendChild(style);


function openModal(modal) {
  modalOverlay.classList.add('active');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  modalOverlay.classList.remove('active');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}


document.querySelectorAll('.feature-card').forEach(card => {
  card.addEventListener('click', () => {
    const section = card.dataset.section;
    
    switch(section) {
      case 'tutorials':
        openModal(tutorialsModal);
        loadVideos('batting'); 
        break;
      case 'stories':
        openModal(storiesModal);
        loadStories();
        break;
      case 'training':
        openModal(trainingModal);
        loadTraining();
        break;
      case 'about':
        openModal(aboutModal);
        break;
    }
  });
});


document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalType = btn.dataset.close;
    const modal = document.getElementById(`${modalType}Modal`);
    closeModal(modal);
  });
});


modalOverlay.addEventListener('click', () => {
  document.querySelectorAll('.modal').forEach(modal => {
    closeModal(modal);
  });
});


const videoTabs = document.querySelectorAll('.tab-btn');
const videoGrid = document.getElementById('videoGrid');

videoTabs.forEach(tab => {
  tab.addEventListener('click', () => {

    videoTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  
    const category = tab.dataset.tab;
    loadVideos(category);
  });
});

function loadVideos(category) {
  const videos = videoData[category];
  videoGrid.innerHTML = '';
  
  videos.forEach(url => {
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';
    videoCard.innerHTML = `
      <iframe 
        src="${url}" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `;
    videoGrid.appendChild(videoCard);
  });
}


function loadStories() {
  const container = document.getElementById('storiesContainer');
  container.innerHTML = '';
  
  storiesData.forEach(story => {
    const storyCard = document.createElement('div');
    storyCard.className = 'story-card';
    storyCard.innerHTML = `
      <div class="story-header">
        <img src="${story.photo}" alt="${story.name}" class="story-photo">
        <h3>${story.name}</h3>
      </div>
      <div class="story-content">${story.text}</div>
    `;
    container.appendChild(storyCard);
  });
}

function loadTraining() {
  const container = document.getElementById('trainingGrid');
  container.innerHTML = '';
  
  trainingData.forEach(program => {
    const trainingCard = document.createElement('div');
    trainingCard.className = 'training-card';
    trainingCard.innerHTML = `
      <h3>${program.title}</h3>
      <p>${program.text}</p>
    `;
    container.appendChild(trainingCard);
  });
}

document.addEventListener('keydown', (e) => {
  // Close modal on Escape
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal').forEach(modal => {
      if (modal.classList.contains('active')) {
        closeModal(modal);
      }
    });
  }
  

  if (e.key === 'Enter' && welcomeScreen.classList.contains('active')) {
    startJourneyBtn.click();
  }
});


const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
  input.addEventListener('focus', (e) => {
    e.target.parentElement.style.transform = 'translateY(-2px)';
  });
  
  input.addEventListener('blur', (e) => {
    e.target.parentElement.style.transform = '';
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});


const initializeTabs = () => {
  const firstTab = document.querySelector('.tab-btn');
  if (firstTab) {
    firstTab.classList.add('active');
  }
};


window.addEventListener('load', () => {

  document.body.classList.add('loaded');
  

  initializeTabs();
});


function getTimeBasedGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 18) return 'Good Afternoon';
  return 'Good Evening';
}


const updateWelcomeMessage = () => {
  const mainTitle = document.querySelector('.main-title');
  const greeting = getTimeBasedGreeting();
  

  const subtitle = document.querySelector('.subtitle');
  if (subtitle) {
    subtitle.textContent = `${greeting}! Your Journey to Cricket Excellence Starts Here`;
  }
};


updateWelcomeMessage();

function showLoadingIndicator(container) {
  container.innerHTML = `
    <div style="text-align: center; padding: 3rem; color: rgba(255,255,255,0.6);">
      <div style="font-size: 2rem; margin-bottom: 1rem;">⏳</div>
      <p>Loading videos...</p>
    </div>
  `;
}


const originalLoadVideos = loadVideos;
loadVideos = function(category) {
  showLoadingIndicator(videoGrid);
  setTimeout(() => {
    originalLoadVideos(category);
  }, 300);
};

userNameInput.addEventListener('input', (e) => {

  e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
});


function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add('ripple');

  const ripple = button.getElementsByClassName('ripple')[0];
  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}


const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  .cta-button, .close-btn, .tab-btn {
    position: relative;
    overflow: hidden;
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(rippleStyle);


document.querySelectorAll('.cta-button, .close-btn, .tab-btn').forEach(button => {
  button.addEventListener('click', createRipple);
});

let readingProgress = {};

function trackReadingProgress(storyName, scrollPercentage) {
  readingProgress[storyName] = scrollPercentage;
}


function saveUserData() {
  if (userData.name && userData.favPlayer) {
    localStorage.setItem('cricketAcademyUser', JSON.stringify(userData));
  }
}

function loadUserData() {
  const saved = localStorage.getItem('cricketAcademyUser');
  if (saved) {
    const data = JSON.parse(saved);
    return data;
  }
  return null;
}


window.addEventListener('DOMContentLoaded', () => {
  const savedUser = loadUserData();
  if (savedUser && savedUser.name && savedUser.favPlayer) {
 
    const returnUserPrompt = confirm(`Welcome back, ${savedUser.name}! Continue with your previous profile?`);
    if (returnUserPrompt) {
      userNameInput.value = savedUser.name;
      favPlayerInput.value = savedUser.favPlayer;
    }
  }
});


const originalStartJourney = startJourneyBtn.onclick;
startJourneyBtn.addEventListener('click', () => {
  if (userData.name && userData.favPlayer) {
    saveUserData();
  }
});

function createScrollToTopButton() {
  const scrollBtn = document.createElement('button');
  scrollBtn.innerHTML = '↑';
  scrollBtn.className = 'scroll-to-top';
  scrollBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--accent);
    color: var(--primary-dark);
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1001;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  `;
  
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  document.body.appendChild(scrollBtn);

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollBtn.style.opacity = '1';
      scrollBtn.style.visibility = 'visible';
    } else {
      scrollBtn.style.opacity = '0';
      scrollBtn.style.visibility = 'hidden';
    }
  });
}

createScrollToTopButton();


function createTooltip(element, text) {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = text;
  tooltip.style.cssText = `
    position: absolute;
    background: rgba(0,0,0,0.9);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.85rem;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 10000;
  `;
  
  element.style.position = 'relative';
  
  element.addEventListener('mouseenter', (e) => {
    document.body.appendChild(tooltip);
    const rect = element.getBoundingClientRect();
    tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
    tooltip.style.left = `${rect.left + (rect.width - tooltip.offsetWidth) / 2}px`;
    setTimeout(() => tooltip.style.opacity = '1', 10);
  });
  
  element.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
    setTimeout(() => tooltip.remove(), 300);
  });
}


let stats = {
  videosWatched: 0,
  storiesRead: 0,
  tipsViewed: 0
};

function updateStats(category) {
  if (category === 'videos') stats.videosWatched++;
  if (category === 'stories') stats.storiesRead++;
  if (category === 'tips') stats.tipsViewed++;
  
  localStorage.setItem('cricketAcademyStats', JSON.stringify(stats));
}

function loadStats() {
  const saved = localStorage.getItem('cricketAcademyStats');
  if (saved) {
    stats = JSON.parse(saved);
  }
}

loadStats();

document.querySelector('[data-section="tutorials"]')?.addEventListener('click', () => {
  updateStats('videos');
});

document.querySelector('[data-section="stories"]')?.addEventListener('click', () => {
  updateStats('stories');
});

document.querySelector('[data-section="training"]')?.addEventListener('click', () => {
  updateStats('tips');
});

document.querySelectorAll('.feature-card').forEach((card, index) => {
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `Open ${card.querySelector('h3').textContent}`);
  
  card.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.click();
    }
  });
});


const images = document.querySelectorAll('img[src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.getAttribute('src');
      img.classList.add('loaded');
      observer.unobserve(img);
    }
  });
});

document.addEventListener('error', (e) => {
  if (e.target.tagName === 'IMG') {
    e.target.style.display = 'none';
    console.warn('Image failed to load:', e.target.src);
  }
}, true);


console.log('%c🏏 Welcome to Cricket Academy! 🏏', 'color: #66ff66; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with passion for cricket enthusiasts worldwide', 'color: #0e8f0e; font-size: 12px;');
console.log('%cYour journey to cricket excellence starts here!', 'color: #fff; font-size: 14px;');

document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ Cricket Academy initialized successfully');
  

  setTimeout(() => {
    document.body.classList.add('ready');
  }, 100);
});