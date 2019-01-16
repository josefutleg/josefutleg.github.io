var indexes = ["About", "Contact", "Projects"];

var projects = [
  {
    //dig
    title: "dig",
    tagline: "Spotify playlist generator",
    link: "https://github.com/josefutleg/dig-app-new",
    description:
      "Playlist building application using Spotify's API. Users will sign into their Spotify accounts to use search and create functions. Once signed in, users can search for any song they like. If provided by Spotify, users can also play preview snippets of tracks. Once a song is chosen, dig will identify the song's artist and then find related artists and their albums. Dig will then randomly select one or two albums to pull one or two tracks from them to generate a playlist. Once all related artists' albums have been browsed, dig will produce the playlist and append to page for instant listening. Since users are logged into their own Spotify accounts, the newly created playlists can be found in their Spotify applications for later listening. To further explore the depth of Spotify's API, dig also sorts each playlist based on a song's key and tempo. With key as the primary sorting factor, tempo will progressively increase within each key range until the key changes. A database using MongoDB is implemented for archiving all playlists created with the application so a user can browse/preview/add previously created playlists.",
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
        "assets/images/dig/dig-07.png",
      ]
  },
  {
    //liri
    title: "LIRI",
    tagline: "Node based assistant",
    link: "https://github.com/josefutleg/liri-node-app",
    description:
      "Node.js based assistant application using APIs of Spotify, Twitter, & OMDB. Used npm package Inquirer as way for user to interact with application without having to rerun the application after each task is complete. Liri will provide four options - Find a Movie, Find a Song, Tweet a Message, and Surprise Me. User can then search for a song, movie, tweet a message or use Surprise Me to have Liri decide what will be done.",
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
      ]
  },
  {
    //scraper
    title: "Mongo-Scraper",
    tagline: "Webpage scraper",
    link: "https://github.com/josefutleg/mongo-scraper",
    description: "placeholder",
    tools: ["a,b,c,d,e"]
  },
  {
    //bamazon
    title: "Bamazon",
    tagline: "Node based shopping application",
    link: "https://github.com/josefutleg/hw-8-bamazon",
    description:
      "Node.js based application that allows user to shop for products within Bamazon's inventory. Using MySQL to store inventory and npm package Inquirer, Bamazon will display all inventory, drink type, drink name, and price. Once user selects drink and quantity, Bamazon will check stock to make sure stock meets user's quantity request. If there is sufficient stock, transaction will complete and update database's inventory, otherwise Bamazon will notify user there is insufficient is and restart the inquiries.",
    tools: ["MySQL", "Node.js", "npm package - mysql", "npm package - inquirer"],
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
      "Meme-captioning multiplayer game that is played on separate screens using Firebase to handle the real-time aspect.",
    tools: ["HTML5", "Bootstrap", "jQuery", "Firebase"]
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
var disp = $(".displayContainer");
var imgDisp = $(".imageContainer");

for (i in indexes) {
  var iButton = $("<button>").text(indexes[i]);
  nav.append(iButton);
}
function displayProjects() {
  disp.empty();
  imgDisp.empty();  
  disp.removeAttr("id", "info");
  for (p in projects) {
    var response = projects[p];
    console.log(response);
    var projectDiv = $("<div>").addClass("project");
    var pButton = $("<button>")
      .addClass("pButton")
      .attr("data-value", p)
      .text("view");
    var projectName = $("<h4>")
      .addClass("pName")
      .text(response.title);
    var projectTagLine = $("<p>")
      .addClass("pTag")
      .text(response.tagline);
    projectDiv.append(projectName);
    projectDiv.append(projectTagLine);
    projectDiv.append(pButton);
    disp.append(projectDiv);
  }
}

function displayAbout() {
  disp.empty();
  imgDisp.empty();
  disp.removeAttr("id", "info");
  var header = $("<h1>").text("About Me");
  disp.append(header);
}

function displayContact() {
  disp.empty();
  imgDisp.empty();
  disp.removeAttr("id", "info");
  var header = $("<h1>").text("Contact Me");
  disp.append(header);
}

nav.on("click", "button", function() {
  var button = $(this).text();
  // alert(button);
  if (button == "Projects") {
    displayProjects();
  }
  if (button == "About") {
    displayAbout();
  }
  if (button == "Contact") {
    displayContact();
  }
});

disp.on("click", ".pButton", function() {
  disp.empty();
  imgDisp.empty();
  disp.attr("id", "info");
  var v = $(this).attr("data-value");
  var title = projects[v].title;
  var description = projects[v].description;
  var link = projects[v].link;
  var tools = projects[v].tools;
  var images = projects[v].images;
  var titleH = $("<h2>")
    .addClass("title")
    .text(title);
  var descP = $("<p>")
    .addClass("desc")
    .text(description);
  var toolsH = $("<h4>")
    .addClass("listH")
    .text("Tools");
  var toolsList = $("<ul>").addClass("list");
  disp
    .append(titleH)
    .append(descP)
    .append(toolsH);
  for (t in tools) {
    console.log(tools[t]);
    var toolsItem = $("<li>")
      .attr("id", "item")
      .text(tools[t]);
    toolsList.append(toolsItem);
    disp.append(toolsList);
  }
  for (i in images) {
    console.log(images[i]);
    var docImg = $("<img>")
      .attr("src", images[i])
      .attr("alt", i)
      .attr("id", "img");
    imgDisp.append(docImg);
  }
  //   console.log(projects[v].title);
});
