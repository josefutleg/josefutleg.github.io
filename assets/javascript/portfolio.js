var indexes = ["ME", "WORK"];

var profilePic = "assets/images/profilePic.JPG";

var triviaGame = "https://josefutleg.github.io/TriviaGame/";

var wordGuessGame = "https://josefutleg.github.io/word-guess-game/";

var gitIcon = "assets/images/github.jpg";
var linkedIcon = "assets/images/linkedin.png";
var googleIcon = "assets/images/google.jpg";
var phoneIcon = "assets/images/phone.png";

var bio = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce augue odio, venenatis eu gravida id, facilisis ac purus. Donec sed est in diam luctus malesuada. Cras vitae elit ac nulla semper molestie. Aliquam enim nulla, condimentum vel dolor eget, posuere molestie leo. Duis consequat porta bibendum. In vestibulum enim non urna ornare, ullamcorper commodo elit congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi purus sem, fringilla at mollis vitae, efficitur vitae mauris. Donec interdum elit non erat iaculis, quis interdum orci maximus. Phasellus finibus ac nisl at tincidunt. Curabitur vulputate gravida justo, et aliquam arcu vehicula vel.",
  "Curabitur eleifend enim sed purus efficitur, vel suscipit odio sollicitudin. Fusce ultrices, massa a euismod aliquam, augue erat varius risus, sit amet auctor est sapien eget magna. Suspendisse vitae blandit tellus. Cras ligula justo, convallis vel ultricies quis, pellentesque eu sem. Curabitur faucibus nisl tortor, id iaculis metus pulvinar nec. Phasellus vel lectus nec tellus lobortis luctus. Curabitur magna sapien, interdum non interdum ac, faucibus nec augue. Vivamus ullamcorper arcu nec lacus hendrerit, eget lobortis purus rhoncus. Aliquam vehicula dui sed sagittis pulvinar. Proin imperdiet congue convallis. Nullam a diam in sapien finibus porttitor.",
  "Nullam ultricies eu metus et finibus. Vivamus eget rutrum leo. Integer posuere ultricies fermentum. Aliquam at tortor lectus. Maecenas aliquet dui a vestibulum interdum. Sed facilisis mauris ac odio blandit, nec blandit magna eleifend. Morbi hendrerit scelerisque metus at ullamcorper. Vestibulum accumsan erat at enim faucibus condimentum. Sed id efficitur velit. Cras et eleifend lectus. Phasellus ultricies orci eget sapien tempus accumsan. Phasellus imperdiet risus ut tincidunt cursus. Nulla gravida at quam in elementum."
];

var contactInfo = {
  email: "mailto:josefutleg@gmail.com",
  linkedin: "https://www.linkedin.com/in/josef-utleg/",
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
      "Playlist building application using Spotify's API. Users will sign into their Spotify accounts to use search and create functions. Once signed in, users can search for any song they like. If provided by Spotify, users can also play preview snippets of tracks. Once a song is chosen, dig will identify the song's artist and then find related artists and their albums. Dig will then randomly select one or two albums to pull one or two tracks from them to generate a playlist. Once all related artists' albums have been browsed, dig will produce the playlist and append to page for instant listening. Since users are logged into their own Spotify accounts, the newly created playlists can be found in their Spotify applications for later listening. To further explore the depth of Spotify's API, dig also sorts each playlist based on a song's key and tempo. With key as the primary sorting factor, tempo will progressively increase within each key range until the key changes. A database using MongoDB is implemented for archiving all playlists created with the application so a user can browse/preview/add previously created playlists. Your own personal DJ!",
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
    ]
  },
  {
    //liri
    title: "LIRI",
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
    ]
  },
  {
    //scraper
    title: "Scraper",
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
    ]
  },
  {
    //bamazon
    title: "Bamazon",
    tagline: "Node based shopping application",
    link: "https://github.com/josefutleg/hw-8-bamazon",
    description:
      "Node.js based application that allows user to shop for products within Bamazon's inventory. Using MySQL to store inventory and npm package Inquirer, Bamazon will display all inventory, drink type, drink name, and price. Once user selects drink and quantity, Bamazon will check stock to make sure stock meets user's quantity request. If there is sufficient stock, transaction will complete and update database's inventory, otherwise Bamazon will notify user there is insufficient is and restart the inquiries.",
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
    ]
  },
  {
    //memelash
    title: "memelash",
    tagline: "Multiplayer meme-captioning game",
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
    ]
  },
  {
    //memelash
    title: "GIF-Tastic",
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
    ]
  }
];
var nav = $(".navContainer");
var aboutDisp = $(".aboutContainer");
// var contactDisp = $(".contactContainer");
var disp = $(".displayContainer");
var projDisp = $(".projectContainer");
var imgDisp = $(".imageContainer");

$(document).ready(function() {
  var time = new Date().getHours();
  console.log(time);
  //   setTimeout(render, 3000);
  render();

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
    .addClass("link");
  var emailP = $("<div>")
    .addClass("contactP")
    .attr("id", "email");
  var emailImg = $("<img>")
    .attr("src", googleIcon)
    .attr("id", "icon")
    .attr("alt", "google");
  var linkedin = $("<a>")
    .attr("href", contactInfo.linkedin)
    .attr("target", "_blank")
    .addClass("link");
  var linkedP = $("<div>")
    .addClass("contactP")
    .attr("id", "linkedIn");
  var linkedImg = $("<img>")
    .attr("src", linkedIcon)
    .attr("id", "icon")
    .attr("alt", "linkedin");
  var github = $("<a>")
    .attr("href", contactInfo.github)
    .attr("target", "_blank")
    .addClass("link");
  var gitP = $("<div>")
    .addClass("contactP")
    .attr("id", "gitHub");
  var gitImg = $("<img>")
    .attr("src", gitIcon)
    .attr("id", "icon")
    .attr("alt", "git");
  var phone = $("<a>")
    .attr("href", `tel:${contactInfo.phone}`)
    .addClass("link");
  var phoneP = $("<div>")
    .addClass("contactP")
    .attr("id", "phone");
  var phoneImg = $("<img>")
    .attr("src", phoneIcon)
    .attr("id", "icon")
    .attr("alt", "phone");
  email.append(emailImg);
  emailP.append(email);
  linkedin.append(linkedImg);
  linkedP.append(linkedin);
  github.append(gitImg);
  gitP.append(github);
  phone.append(phoneImg);
  phoneP.append(phone);
  contactContainer
    .append(phoneP)
    .append(emailP)
    .append(linkedP)
    .append(gitP);
  nav.append(contactContainer);
  displayProjects();
}

// nav bar
nav.on("click", "button", function() {
  var button = $(this).text();
  console.log($(this));
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
  disp.removeAttr("id", "flyIn").empty();
  aboutDisp.removeAttr("id", "flyIn").empty();
  imgDisp.css("height", "").empty();
  projDisp.removeAttr("id", "info").empty();
  //   disp.attr("id", "flyIn");
  var gameContainer = $("<div>").addClass("gameContainer");
  var gameH = $("<h4>")
    .addClass("pName")
    .text("Game");
  var gameLink1 = $("<a>")
    .attr("href", wordGuessGame)
    .attr("id", "desktopOnly")
    .attr("target", "_blank")
    .text(`Word Guess Game!`);
  gameContainer.append(gameLink1);
  var gameLink2 = $("<a>")
    .attr("href", triviaGame)
    .attr("id", "mobileOnly")
    .attr("target", "_blank")
    .text(`Trivia Game!`);
  gameContainer.append(gameLink2);
  gameContainer.append(gameH);
  gameContainer.attr("id", "flyIn");
  disp.append(gameContainer);
  for (p in projects) {
    var response = projects[p];
    var projectDiv = $("<div>")
      .addClass("project")
      .attr("data-value", p);
    // var pButton = $("<button>")
    //   .addClass("pButton")
    //   .attr("data-value", p)
    //   .text("view");
    var projectName = $("<h4>")
      .addClass("pName")
      .text(response.title);
    var projectTagLine = $("<p>")
      .addClass("pTag")
      .text(response.tagline);
    projectDiv.append(projectTagLine);
    projectDiv.append(projectName);
    // projectDiv.append(pButton)
    projectDiv.attr("id", "flyIn");
    disp.append(projectDiv);
  }
}

function displayAbout() {
  $(window).scrollTop(0);
  aboutDisp.empty();
  disp.removeAttr("id", "flyIn").empty();
  projDisp.removeAttr("id", "info").empty();
  //   contactDisp.removeAttr("id", "flyIn").empty();
  imgDisp.css("height", "").empty();
  aboutDisp.attr("id", "flyIn");
  var bioDiv = $("<div>").attr("id", "bioP");
  var profDisp = $("<img>")
    .attr("src", profilePic)
    .attr("id", "profileImg")
    .attr("alt", "me");
  for (i in bio) {
    var bioDisp = $("<p>").text(bio[i]);
    bioDiv.append(bioDisp);
  }

  aboutDisp.append(profDisp).append(bioDiv);
}

// function displayContact() {
//   $(window).scrollTop(0);
//   contactDisp.empty();
//   disp.removeAttr("id", "flyIn").empty();
//   projDisp.removeAttr("id", "info").empty();
//   aboutDisp.removeAttr("id", "flyIn").empty();
//   imgDisp.css("height", "").empty();
//   contactDisp.attr("id", "flyIn");
//   var email = $("<a>")
//     .attr("href", contactInfo.email)
//     .addClass("link");
//   var emailP = $("<div>")
//     .addClass("contactP")
//     .attr("id", "email");
//   var emailImg = $("<img>")
//     .attr("src", googleIcon)
//     .attr("id", "icon")
//     .attr("alt", "google");
//   var linkedin = $("<a>")
//     .attr("href", contactInfo.linkedin)
//     .attr("target", "_blank")
//     .addClass("link");
//   var linkedP = $("<div>")
//     .addClass("contactP")
//     .attr("id", "linkedIn");
//   var linkedImg = $("<img>")
//     .attr("src", linkedIcon)
//     .attr("id", "icon")
//     .attr("alt", "linkedin");
//   var github = $("<a>")
//     .attr("href", contactInfo.github)
//     .attr("target", "_blank")
//     .addClass("link");
//   var gitP = $("<div>")
//     .addClass("contactP")
//     .attr("id", "gitHub");
//   var gitImg = $("<img>")
//     .attr("src", gitIcon)
//     .attr("id", "icon")
//     .attr("alt", "git");
//   var phone = $("<a>")
//     .attr("href", `tel:${contactInfo.phone}`)
//     .addClass("link")
//   var phoneP = $("<div>")
//     .addClass("contactP")
//     .attr("id", "phone");
//     var phoneImg = $("<img>")
//     .attr("src", phoneIcon)
//     .attr("id", "icon")
//     .attr("alt", "phone");
//   email.append(emailImg);
//   emailP.append(email);
//   linkedin.append(linkedImg);
//   linkedP.append(linkedin);
//   github.append(gitImg);
//   gitP.append(github);
//   phone.append(phoneImg);
//   phoneP.append(phone);
//   contactDisp
//     .append(phoneP)
//     .append(emailP)
//     .append(linkedP)
//     .append(gitP);
// }

//view button function
disp.on("click", ".project", function() {
  $(window).scrollTop(0);
  $(".navButton").removeClass("active");
  disp.removeAttr("id", "flyIn").empty();
  imgDisp.removeAttr("id", "flyIn").empty();
  imgDisp.css("height", "400px");
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
    .text("Tools");
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
