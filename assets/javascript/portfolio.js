var indexes = ["ME", "WORK"];

var profilePic = "assets/images/profilePic.JPG";

var triviaGame = "https://josefutleg.github.io/TriviaGame/";

var wordGuessGame = "https://josefutleg.github.io/word-guess-game/";

var intro = $("<p>")
  .attr("id", "intro")
  .text(
    "Hi! Thank you for stopping by! Please feel free to check out my projects and if you want to kill some time, click on Game to play a word guess game if you are on a desktop or a trivia game if you are viewing this page from your phone!"
  );

// var bio = [
//   "Hi! My name is Josef Utleg and I am a Full-Stack Web Developer constantly exploring new concepts and methods in writing clean and efficient code with an aesthetically pleasing presentation."
// ];
var bio = [
  "Creating is my passion. Whether through coding or architecture, my mission is to build aesthetically pleasing experiences for everyone with a strong sense of effiency and functionality. I am constantly exploring new concepts and methods and always finding inspiration in my environment. As I strive to make an impact on the world through my work, coming a background in architecture I would love to contribute to Architecture, Engineering, and Construction (AEC) industry by incorporating it with the ever-evolving world of technology."
];
var contactInfo = {
  email: "mailto:josefutleg@gmail.com",
  linkedin: "https://www.linkedin.com/in/josefutleg/",
  github: "https://github.com/josefutleg",
  phone: "14153093776"
};

var archProjects = [
  {
    title: "Bailey House",
    tagline: "Pierre Koenig's Case Study House #21",
    thumb: "assets/images/bailey/02-bailey.png",
    images: ["assets/images/bailey/01-bailey.png"]
  },
  {
    title: "Pool House",
    tagline: "Pool House Study",
    thumb: "assets/images/poolhouse/02-poolhouse.png",
    images: ["assets/images/poolhouse/01-poolhouse.png"]
  },
  {
    title: "Greenwich Street",
    tagline: "San Francisco Loft Study",
    thumb: "assets/images/greenwich/02-greenwich.png",
    images: [
      "assets/images/greenwich/01-greenwich.png",
      "assets/images/greenwich/02-greenwich.png",
    ]
  },
  {
    title: "X-Arts Sudio",
    tagline: "Detached USF Arts Studio",
    thumb: "assets/images/xarts/03-xarts.png",
    images: [
      "assets/images/xarts/01-xarts.png",
      "assets/images/xarts/02-xarts.png",
    ]
  },
  {
    title: "Palmito Drive",
    tagline: "Kitchen Remodel",
    thumb: "assets/images/palmito/00-palmito.png",
    images: [
      "assets/images/palmito/01-palmito.png",
      "assets/images/palmito/02-palmito.png",
    ]
  },
];

var projects = [
  {
    //dig
    title: "dig",
    tagline: "Create a curated music playlist with ease!",
    link: "https://github.com/josefutleg/dig-app-new",
    description:
      "A React.js web application that uses Spotify's API. The user will link their Spotify account to use Dig to search for a track or artist they like. User authentication is handled on the server side using Node.js with Express.Once a track or artist is chosen, Dig will use Spotify's API documentation to browse the related artists' albums to pull tracks to add to the new playlist. Tracks are sorted primarily by key and secondarily by tempo. As the key progresses from 1 to 9, the tempo will increase and restart at the lowest as the key changes. This is possible with track audio features provided by Spotify's API.Once complete, the playlist will embed to Dig's page for instant playback as well as to the user's Spotify account for later listens. All of the playlists created with Dig will also save to its MongoDB powered database to store all of the playlists created for other users to browse and add to their own accounts.",
    tools: [
      "Node.js",
      "React",
      "MongoDB",
      "Spotify's API",
      "npm package - body-parser",
      "npm package - cookie-parser",
      "npm package - express",
      "npm package - mongojs",
      "npm package - request"
    ],
    images: [
      "assets/images/dig/dig-01.png",
      "assets/images/dig/dig-02.png",
      "assets/images/dig/dig-03.png",
      "assets/images/dig/dig-04.png",
      "assets/images/dig/dig-05.png",
      "assets/images/dig/dig-06.png",
      "assets/images/dig/dig-07.png"
    ],
    thumb: "assets/images/dig/dig-thumb.png",
    play: "https://u-dig.herokuapp.com/"
  },
  {
    //liri
    title: "liri",
    tagline: "Ask liri to find a song, movie, or send a tweet!",
    link: "https://github.com/josefutleg/liri-node-app",
    description:
      "Node.js-based assistant application using APIs of Spotify, Twitter, & OMDB. Liri will provide four options - Find a Movie, Find a Song, Tweet a Message, and Surprise Me. User can then search for a song, movie, tweet a message or use Surprise Me to have Liri decide what will be done.",
    tools: [
      "Node.js",
      "Spotify's API",
      "Twitter's API",
      "OMDB's API",
      "npm package - inquirer",
      "npm package - node-spotify-api",
      "npm package - request",
      "npm package - dotenv"
    ],
    images: [
      "assets/images/liri/liri-01.png",
      "assets/images/liri/liri-02.png",
      "assets/images/liri/liri-03.png",
      "assets/images/liri/liri-04.png",
      "assets/images/liri/liri-05.png"
    ],
    thumb: "assets/images/liri/liri-thumb.jpg"
  },
  {
    //scraper
    title: "scraper",
    tagline: "Pull news articles from SF Chronicle instantly!",
    link: "https://github.com/josefutleg/mongo-scraper",
    description:
      "Web application that scrapes SF Chronicle's website for articles to read/save. Application uses ejs for the HTML pages, cheerio to scrape SF Chronicle's homepage for recent articles, and MongoDB to store saved articles. User can also comment on saved articles for personal notes/reminders",
    tools: [
      "Bootstrap",
      "Node.js",
      "Express",
      "MongoDB",
      "ejs",
      "npm package - cheerio"
    ],
    images: [
      "assets/images/scraper/scraper-1.png",
      "assets/images/scraper/scraper-2.png",
      "assets/images/scraper/scraper-3.png",
      "assets/images/scraper/scraper-4.png",
      "assets/images/scraper/scraper-5.png",
      "assets/images/scraper/scraper-6.png",
      "assets/images/scraper/scraper-7.png"
    ],
    thumb: "assets/images/scraper/scraper-thumb.jpg"
  },
  {
    //bamazon
    title: "bamazon",
    tagline: "Node-based, MySQL-powered shopping",
    link: "https://github.com/josefutleg/hw-8-bamazon",
    description:
      "Node.js based application that allows user to shop for products within Bamazon's inventory. Using MySQL to store inventory and npm package Inquirer, Bamazon will display all inventory, drink type, drink name, and price. Once user selects drink and quantity, Bamazon will check stock to make sure stock meets user's quantity request. If there is sufficient stock, transaction will complete and update database's inventory, otherwise Bamazon will notify user there is insufficient stock and restart the inquiry cycle.",
    tools: [
      "MySQL",
      "Node.js",
      "npm package - mysql",
      "npm package - inquirer"
    ],
    images: [
      "assets/images/bamazon/01-bamazon_db-Before Purchase.png",
      "assets/images/bamazon/02-bamazon-Select Drink Type.png",
      "assets/images/bamazon/03-bamazon-Node Sample.png",
      "assets/images/bamazon/04-bamazon_db-After Purchase.png",
      "assets/images/bamazon/05-bamazon-Insufficient Quantity.png"
    ],
    thumb: "assets/images/bamazon/bamazon-thumb.jpg"
  },
  {
    //memelash
    title: "memelash",
    tagline: "Multiplayer meme-captioning game (work in progress)",
    link: "https://github.com/josefutleg/memelash-firebase",
    description:
      "Meme-captioning multiplayer game that is played on separate screens using Firebase to handle the real-time aspect. Project is not complete - Kept running into Firebase issues that would de-sync game info/timer across players' screens.",
    tools: ["HTML5", "Bootstrap", "jQuery", "Firebase"],
    images: [
      "assets/images/memelash/memelash-1.png",
      "assets/images/memelash/memelash-2.png",
      "assets/images/memelash/memelash-3.png",
      "assets/images/memelash/memelash-4.png",
      "assets/images/memelash/memelash-5.png",
      "assets/images/memelash/memelash-6.png"
    ],
    thumb: "assets/images/memelash/memelash-thumb.png",
    play: "https://josefutleg.github.io/memelash-firebase/"
  },
  {
    //memelash
    title: "gif-tastic",
    tagline: "Search and save GIFs!",
    link: "https://github.com/josefutleg/GifTastic",
    description:
      "Gif searching app that allows users to find gifs based on search word and rating. Users can save favorite gifs locally during session or save to computer.",
    tools: [
      "HTML5",
      "CSS",
      "Bootstrap",
      "Font Awesome Icons",
      "jQuery",
      "Giphy API"
    ],
    images: [
      "assets/images/gif-tastic/GifTastic_1.png",
      "assets/images/gif-tastic/GifTastic_2.png",
      "assets/images/gif-tastic/GifTastic_3.png",
      "assets/images/gif-tastic/GifTastic_4.png",
      "assets/images/gif-tastic/GifTastic_5.png"
    ],
    thumb: "assets/images/gif-tastic/giftastic-thumb.png",
    play: "https://josefutleg.github.io/GifTastic/"
  }
];

var games = [
  {
    title: "word guess (desktop only)",
    link: "https://github.com/josefutleg/word-guess-game",
    play: "https://josefutleg.github.io/word-guess-game/",
    description:
      "Hangman style word guess game. Guess four of Frank Ocean's songs in a row for a surprise! Click 'play' to test your Frank knowledge! JavaScript-based game focusing on key presses.",
    thumb: "assets/images/games/games-thumb.png",
    tools: ["HTML5", "CSS", "JavaScript"]
  },
  {
    title: "SF trivia",
    link: "https://github.com/josefutleg/TriviaGame",
    play: "https://josefutleg.github.io/TriviaGame/",
    description:
      "Test your knowledge of San Francisco's history with this triva game! jQuery-based trivia game focused on time intervals and radio input forms.",
    tools: ["HTML5", "CSS", "jQuery"]
  }
];
var nav = $(".navContainer");
var aboutDisp = $(".aboutContainer");
var disp = $(".displayContainer");
var projDisp = $(".projectContainer");
var imgDisp = $(".imageContainer");
var greetDisp = $(".greetingContainer");

$(document).ready(function () {
  var time = new Date().getHours();
  if (time >= 0 && time < 12) {
    greetDisp.append("good morning");
  } else if (time >= 12 && time < 17) {
    greetDisp.append("good afternoon");
  } else if (time >= 17 && time < 24) {
    greetDisp.append("good evening");
  }
  setTimeout(render, 3000);
  //   render();
  //   console.log($(".imageContainer").text().length);
  //   console.log($(window).width()===600);
});

function render() {
  greetDisp.empty();
  var contactContainer = $("<div>").addClass("contactContainer");

  for (i in indexes) {
    var iButton = $("<button>")
      .text(indexes[i])
      .addClass("navButton");
    nav.append(iButton);
    nav.attr("id", "flyIn");
  }

  var email = $("<a>")
    .attr("href", contactInfo.email)
    .addClass("fas fa-envelope-square link");
  var emailP = $("<div>")
    .addClass("contactP")
    .attr("id", "email");
  var linkedin = $("<a>")
    .attr("href", contactInfo.linkedin)
    .attr("target", "_blank")
    .addClass("fab fa-linkedin link");
  var linkedP = $("<div>")
    .addClass("contactP")
    .attr("id", "linkedIn");
  var github = $("<a>")
    .attr("href", contactInfo.github)
    .attr("target", "_blank")
    .addClass("fab fa-github-square link");
  var gitP = $("<div>")
    .addClass("contactP")
    .attr("id", "gitHub");
  var phone = $("<a>")
    .attr("href", `tel:${contactInfo.phone}`)
    .addClass("fas fa-phone-square link");
  var phoneP = $("<div>")
    .addClass("contactP")
    .attr("id", "phone");
  emailP.append(email);
  linkedP.append(linkedin);
  gitP.append(github);
  phoneP.append(phone);
  contactContainer
    .append(phoneP)
    .append(emailP)
    .append(linkedP)
    .append(gitP);
  nav.append(contactContainer);
  // displayProjects();
  displayAbout();
  aboutDisp.attr("id", "flyIn");
  // aboutDisp.append(intro);
}

// nav bar
nav.on("click", "button", function () {
  var button = $(this).text();
  if (button == "ME") {
    $(".navButton").removeClass("active");
    $(this).addClass("active");
    displayAbout();
  }
  if (button == "WORK") {
    $(".navButton").removeClass("active");
    $(this).addClass("active");
    displayOptions();
  }
});

nav.on("click", ".logo", function () {
  displayAbout();
  $(".navButton").removeClass("active");
});
var options = [
  {
    name: "code",
    thumb: "assets/images/option-thumbs/code.png",
  },

  {
    name: "architecture",
    thumb: "assets/images/option-thumbs/arch.png",
  }
];


function displayOptions() {
  $(window).scrollTop(0);
  greetDisp.empty();
  disp.removeAttr("id", "flyIn").empty();
  aboutDisp.removeAttr("id", "flyIn").empty();
  imgDisp.css("height", "").empty();
  projDisp.removeAttr("id", "info").empty();
  for (i in options) {
    var name = options[i].name;
    var thumbnail = options[i].thumb;
    var projectDiv = $("<div>").addClass("option");
    var projectName = $("<h4>").addClass("pName").text(name);
    var projectThumb = $("<img>")
      .attr("src", thumbnail)
      .attr("alt", i).attr("data-value", name)
      .addClass("img-fluid");
    projectDiv.prepend(projectThumb);
    projectDiv.append(projectName);
    projectDiv.attr("id", "flyIn");
    disp.append(projectDiv);
  }
}

function displayArchProjects() {
  $(window).scrollTop(0);
  greetDisp.empty();
  disp.removeAttr("id", "flyIn").empty();
  aboutDisp.removeAttr("id", "flyIn").empty();
  imgDisp.css("height", "").empty();
  projDisp.removeAttr("id", "info").empty();

  for (p in archProjects) {
    var title = archProjects[p].title;
    var thumbnail = archProjects[p].thumb;
    var tagline = archProjects[p].tagline
    var projectDiv = $("<div>")
      .addClass("arch-project")
      .attr("data-value", p);
    var projectName = $("<h4>")
      .addClass("pName")
      .text(title);
    var projectTagLine = $("<p>")
      .addClass("pTag")
      .text(tagline);
    var projectThumb = $("<img>")
      .attr("src", thumbnail)
      .attr("alt", p)
      .addClass("img-fluid");
    projectDiv.prepend(projectThumb);
    projectDiv.append(projectName);
    projectDiv.append(projectTagLine);
    projectDiv.attr("id", "flyIn");
    disp.append(projectDiv);

  }
}

function displayProjects() {
  $(window).scrollTop(0);
  greetDisp.empty();
  disp.removeAttr("id", "flyIn").empty();
  aboutDisp.removeAttr("id", "flyIn").empty();
  imgDisp.css("height", "").empty();
  projDisp.removeAttr("id", "info").empty();
  var gamesDiv = $("<div>")
    .addClass("games")
    .attr("data-value", "g");
  var gamesName = $("<h4>")
    .addClass("pName")
    .text("games");
  var gamesTagLine = $("<p>")
    .addClass("pTag")
    .text("Games games games!");
  var gamesThumb = $("<img>")
    .attr("src", games[0].thumb)
    .attr("alt", "games")
    .addClass("img-fluid");
  gamesDiv.prepend(gamesThumb);
  gamesDiv.append(gamesName);
  gamesDiv.append(gamesTagLine);
  gamesDiv.attr("id", "flyIn");
  disp.append(gamesDiv);

  for (p in projects) {
    var response = projects[p];
    var thumbnail = projects[p].thumb;
    var projectDiv = $("<div>")
      .addClass("project")
      .attr("data-value", p);
    var projectName = $("<h4>")
      .addClass("pName")
      .text(response.title);
    var projectTagLine = $("<p>")
      .addClass("pTag")
      .text(response.tagline);
    var projectThumb = $("<img>")
      .attr("src", thumbnail)
      .attr("alt", p)
      .addClass("img-fluid");
    projectDiv.prepend(projectThumb);
    projectDiv.append(projectName);
    projectDiv.append(projectTagLine);
    projectDiv.attr("id", "flyIn");
    disp.append(projectDiv);
  }
}

function displayAbout() {
  $(window).scrollTop(0);
  aboutDisp.empty();
  disp.removeAttr("id", "flyIn").empty();
  projDisp.removeAttr("id", "info").empty();
  imgDisp.css("height", "").empty();
  aboutDisp.attr("id", "flyIn");
  var bioDiv = $("<div>").attr("id", "bioP");
  var profDisp = $("<img>")
    .attr("src", profilePic)
    .attr("id", "profileImg")
    .attr("alt", "me");
  for (i in bio) {
    var bioDisp = $("<p>")
      .attr("style", "font-style:italic;")
      .text(bio[i]);
    bioDiv.append(bioDisp);
  }

  aboutDisp.append(profDisp).append(bioDiv);
}

disp.on("click", ".games", function () {
  disp.empty();
  projDisp.removeAttr("id", "info");
  $(".navButton").removeClass("active");
  aboutDisp.empty();
  projDisp.empty();
  imgDisp.removeAttr("id", "flyIn").empty();
  projDisp.attr("id", "info");
  for (g in games) {
    var title = games[g].title;
    var description = games[g].description;
    var link = games[g].link;
    var play = games[g].play;
    var tools = games[g].tools;
    var titleH = $("<h2>")
      .addClass("title")
      .text(title);
    var linkDom = $("<a>")
      .attr("href", link)
      .attr("id", "link")
      .attr("target", "_blank")
      .text(`GitHub Repository`);
    var descP = $("<p>")
      .addClass("desc")
      .text(description);
    var playDom = $("<a>")
      .attr("href", play)
      .attr("id", "link")
      .attr("target", "_blank")
      .text(`Play Game`);
    var toolsList = $("<ul>").addClass("list");
    var toolsH = $("<h4>")
      .addClass("listH")
      .text("Technologies");
    var backButton = $("<button>").addClass("back").attr("data-value", "code").text("BACK");
    for (t in tools) {
      var toolsItem = $("<li>")
        .attr("id", "item")
        .text(tools[t]);
      toolsList.append(toolsItem);
    }
    projDisp
      .append(titleH)
      .append(backButton)
      .append(descP)
      .append(toolsH)
      .append(toolsList)
      .append(linkDom)
      .append(playDom);
  }
});

disp.on("click", ".option", function () {
  var selection = $(this).text();
  if (selection == "architecture") {
    displayArchProjects();
  } else displayProjects();
})

//view button function
disp.on("click", ".project", function () {
  // $(window).scrollTop(0);
  disp.empty();
  projDisp.removeAttr("id", "info");
  var windowSize = $($(window).width());
  console.log(windowSize[0]);
  if (windowSize[0] <= 650) {
    console.log("true");
    disp.removeAttr("id", "flyIn").empty();
  }
  $(".navButton").removeClass("active");
  aboutDisp.empty();
  projDisp.empty();
  //   disp.removeAttr("id", "flyIn").empty();
  imgDisp.removeAttr("id", "flyIn").empty();
  // imgDisp.css("height", "400px");
  projDisp.attr("id", "info");
  var v = $(this).attr("data-value");
  var title = projects[v].title;
  var description = projects[v].description;
  var link = projects[v].link;
  var tools = projects[v].tools;
  var images = projects[v].images;
  var play = projects[v].play;
  var titleH = $("<h2>")
    .addClass("title")
    .text(title);
  var linkDom = $("<a>")
    .attr("href", link)
    .attr("id", "link")
    .attr("target", "_blank")
    .text(`GitHub Repository`);
  var descP = $("<p>")
    .addClass("desc")
    .text(description);
  var toolsH = $("<h4>")
    .addClass("listH")
    .text("Technologies");
  var toolsList = $("<ul>").addClass("list");
  var backButton = $("<button>").addClass("back").attr("data-value", "code").text("BACK");
  projDisp
    .append(titleH)
    .append(descP)
    .append(toolsH)
    .append(backButton);
  for (t in tools) {
    // console.log(tools[t]);
    var toolsItem = $("<li>")
      .attr("id", "item")
      .text(tools[t]);
    toolsList.append(toolsItem);
    projDisp.append(toolsList);
  }
  projDisp.append(linkDom);
  if (projects[v].play) {
    var playDom = $("<a>")
      .attr("href", play)
      .attr("id", "link")
      .attr("target", "_blank")
      .text(`View App`);
    projDisp.append(playDom);
  }
  for (i in images) {
    // console.log(images[i]);
    var docImg = $("<img>")
      .attr("src", images[i])
      .attr("alt", i)
      .attr("id", "img");
    imgDisp.append(docImg);
  }
  //   console.log(projects[v].title);
});

disp.on("click", ".arch-project", function () {
  // $(window).scrollTop(0);
  disp.empty();
  projDisp.removeAttr("id", "info");
  var windowSize = $($(window).width());
  console.log(windowSize[0]);
  if (windowSize[0] <= 650) {
    console.log("true");
    disp.removeAttr("id", "flyIn").empty();
  }
  $(".navButton").removeClass("active");
  aboutDisp.empty();
  projDisp.empty();
  //   disp.removeAttr("id", "flyIn").empty();
  imgDisp.removeAttr("id", "flyIn").empty();
  // imgDisp.css("height", "400px");
  projDisp.attr("id", "info");
  var v = $(this).attr("data-value");
  var title = archProjects[v].title;
  var images = archProjects[v].images;
  var titleH = $("<h2>")
    .addClass("title")
    .text(title);
  var backButton = $("<button>").addClass("back").attr("data-value", "arch").text("BACK");
  // navDiv.append(backButton).append(titleH);
  projDisp
    .append(titleH).append(backButton);
  for (i in images) {
    // console.log(images[i]);
    var docImg = $("<img>")
      .attr("src", images[i])
      .attr("alt", i)
      .attr("id", "img");
    imgDisp.append(docImg);
  }
  //   console.log(projects[v].title);
});

projDisp.on("click", ".back", function () {
  var d = $(this).data("value")
  console.log(d)
  if (d == "arch") {
    displayArchProjects();
  } else displayProjects();
})

