var indexes = ["ME", "WORK"];

var profilePic = "assets/images/profilePic.JPG";

var triviaGame = "https://josefutleg.github.io/TriviaGame/";

var wordGuessGame = "https://josefutleg.github.io/word-guess-game/";

var intro = $("<p>")
  .attr("id", "intro")
  .text(
    "Hi! Thank you for stopping by! Please feel free to check out my projects and if you want to kill some time, click on Game to play a word guess game if you are on a desktop or a trivia game if you are viewing this page from your phone!"
  );

var bio = [
  "Hi! My name is Josef Utleg and I am a Full-Stack Web Developer constantly striving to write clean and efficient code."
];

var contactInfo = {
  email: "mailto:josefutleg@gmail.com",
  linkedin: "https://www.linkedin.com/in/josefutleg/",
  github: "https://github.com/josefutleg",
  phone: "14153093776"
};

var projects = [
  {
    //dig
    title: "dig",
    tagline: "Spotify playlist generator",
    link: "https://github.com/josefutleg/dig-app-new",
    description:
      "Web application that uses Spotify's API. User signs into their own Spotify account to use Dig to search for a song or artist they like. Once a song or artist is chosen, Dig will use Spotify's API documentation to find the chosen artist's related artists. Dig will then start browsing the related artists album and pull one or two random songs to add to the new playlist. As the songs are being added, they are also being sorted based on the song's key and tempo. As the key progresses from 1 to 9, the tempo will increase and restart at the lowest as the key changes. The playlist will embed to Dig's page for the user to listen to. Every playlist the user creates will save to their Spotify accounts. All of the playlists Dig creates will also save to Dig also uses MongoDB as a database to store all of the playlists created for other users to browse and add to their own accounts. Your own personal DJ!",
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
    thumb: "assets/images/dig/dig-thumb.png"
  },
  {
    //liri
    title: "liri",
    tagline: "Node based assistant",
    link: "https://github.com/josefutleg/liri-node-app",
    description:
      "Node.js based assistant application using APIs of Spotify, Twitter, & OMDB. Liri will provide four options - Find a Movie, Find a Song, Tweet a Message, and Surprise Me. User can then search for a song, movie, tweet a message or use Surprise Me to have Liri decide what will be done.",
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
    thumb: "assets/images/liri/liri-thumb.png"
  },
  {
    //scraper
    title: "scraper",
    tagline: "Webpage scraper",
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
    thumb: "assets/images/scraper/scraper-thumb.png"
  },
  {
    //bamazon
    title: "bamazon",
    tagline: "Node based shopping application",
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
    thumb: "assets/images/bamazon/bamazon-thumb.png"
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
    thumb: "assets/images/memelash/memelash-thumb.png"
  },
  {
    //memelash
    title: "gif-tastic",
    tagline: "GIF search application",
    link: "https://github.com/josefutleg/GifTastic",
    description:
      "Gif searching app that allows users to find gifs based on search word and rating. Users can save favorite gifs locally during session or save to computer.",
    tools: [
      "HTML5",
      "CSS",
      "Bootstrap",
      "Font Awesome Icons",
      "jQuery",
      "Giphy's API"
    ],
    images: [
      "assets/images/gif-tastic/GifTastic_1.png",
      "assets/images/gif-tastic/GifTastic_2.png",
      "assets/images/gif-tastic/GifTastic_3.png",
      "assets/images/gif-tastic/GifTastic_4.png",
      "assets/images/gif-tastic/GifTastic_5.png"
    ],
    thumb: "assets/images/gif-tastic/giftastic-thumb.png"
  }
];

var games = [
  {
    title: "word guess game",
    link: "https://github.com/josefutleg/word-guess-game",
    play: "https://josefutleg.github.io/word-guess-game/",
    description:
      "Hangman style word guess game. Guess four of Frank Ocean's songs in a row for a surprise! Click 'play' to test your Frank knowledge!",
    thumb: "assets/images/games/games-thumb.png"
  },
  {
    title: "trivia game",
    link: "https://github.com/josefutleg/TriviaGame",
    play: "https://josefutleg.github.io/TriviaGame/",
    description:
      "Test your knowledge of San Francisco's history with this triva game!"
  }
];
var nav = $(".navContainer");
var aboutDisp = $(".aboutContainer");
var disp = $(".displayContainer");
var projDisp = $(".projectContainer");
var imgDisp = $(".imageContainer");
var greetDisp = $(".greetingContainer");

$(document).ready(function() {
  var time = new Date().getHours();
  if (time >= 0 && time < 12) {
    greetDisp.append("good morning!");
  } else if (time >= 12 && time < 17) {
    greetDisp.append("good afternoon!");
  } else if (time >= 17 && time < 24) {
    greetDisp.append("good evening!");
  }
  setTimeout(render, 3000);
  //   render();
  //   console.log($(".imageContainer").text().length);
  //   console.log($(window).width()===600);
});

function render() {
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
nav.on("click", "button", function() {
  var button = $(this).text();
  if (button == "ME") {
    $(".navButton").removeClass("active");
    $(this).addClass("active");
    displayAbout();
  }
  if (button == "WORK") {
    $(".navButton").removeClass("active");
    $(this).addClass("active");
    displayProjects();
  }
});

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
    .text("games games games!");
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

disp.on("click", ".games", function() {
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
    projDisp
      .append(titleH)
      .append(descP)
      .append(linkDom)
      .append(playDom);
  }
});

//view button function
disp.on("click", ".project", function() {
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
  projDisp
    .append(titleH)
    .append(descP)
    .append(toolsH);
  for (t in tools) {
    // console.log(tools[t]);
    var toolsItem = $("<li>")
      .attr("id", "item")
      .text(tools[t]);
    toolsList.append(toolsItem);
    projDisp.append(toolsList);
  }
  projDisp.append(linkDom);
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
