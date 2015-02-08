var socialmedia = document.getElementById("socialmedialabel");
socialmedia.onclick = function() {
	//alert("This would launch the social media links");
	chrome.tabs.create({url: 'http://www.facebook.com'});
	chrome.tabs.create({url: 'http://www.twitter.com'});
	chrome.tabs.create({url: 'http://www.tumblr.com'});
	chrome.tabs.create({url: 'http://www.instagram.com'});
};

var music = document.getElementById("musiclabel");
music.onclick = function() {
	//alert("This would launch the music links");
	chrome.tabs.create({url: 'http://www.pandora.com'});
	chrome.tabs.create({url: 'http://www.beatsmusic.com'});
	chrome.tabs.create({url: 'http://www.soundcloud.com'});
	chrome.tabs.create({url: 'http://www.iheartradio.com'});
};

var productivity = document.getElementById("productivitylabel");
productivity.onclick = function() {
	//alert("This would launch the productivity links");
	chrome.tabs.create({url: 'http://www.linkedin.com'});
	chrome.tabs.create({url: 'http://www.dropbox.com'});
	chrome.tabs.create({url: 'http://www.github.com'});
	chrome.tabs.create({url: 'http://www.google.com/drive/'});
};

var studybreak = document.getElementById("studybreaklabel");
studybreak.onclick = function() {
	chrome.tabs.create({url: 'http://www.stumbleupon.com'});
	chrome.tabs.create({url: 'http://www.reddit.com'});
	chrome.tabs.create({url: 'http://www.youtube.com'});
	chrome.tabs.create({url: 'http://www.pinterest.com'});
};

var food = document.getElementById("foodlabel");
food.onclick = function() {
	chrome.tabs.create({url: 'http://www.papajohns.com'});
	chrome.tabs.create({url: 'http://www.jimmyjohns.com'});
	chrome.tabs.create({url: 'http://www.zbaked.com'});
	chrome.tabs.create({url: 'http://www.sumosabisushi.com'});
};

var school = document.getElementById("schoollabel");
school.onclick = function() {
	chrome.tabs.create({url: 'http://www.my.fsu.edu'});
	chrome.tabs.create({url: 'http://www.quizlet.com'});
	chrome.tabs.create({url: 'http://www.lynda.com'});
	chrome.tabs.create({url: 'http://www.wolframalpha.com'})
}

var sitelist = ['http://www.bbc.co.uk/science/humanbody/sleep/sheep/reaction_version5.swf', 'http://nathanfriend.io/inspirograph', 'http://wechoosethemoon.org', 'http://en.wikipedia.org/w/index.php?title=Family_tree_of_the_Greek_gods&mobileaction=toggle_view_desktop', 'http://features.cgsociety.org/newgallerycrits/g32/352432/352432_1246003810_large.jpg', 'http://talesmaze.com/29-fascinating-photos-youve-probably-never-seen-before', 'http://img.earthshots.org/2011/full/160.jpg', 'http://www.mnh.si.edu/vtp/1-desktop', 'http://www.buzzfeed.com/kellyoakes/space-pictures-that-will-actually-make-you-think', 'http://www.the-line-up.com/9-famous-graves-add-bucket-list', 'http://www.bing.com/az/hprichbg/rb/BernardSpitPolarBear_EN-US13003115552_1366x768.jpg', 'http://www.informationisbeautiful.net', 'http://www.codecademy.com', 'http://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Sphinx_partially_excavated2.jpg/800px-Sphinx_partially_excavated2.jpg', 'http://www.lumosity.com', 'http://www.ted.com', 'http://www.howstuffworks.com', 'https://www.cia.gov/library/publications/the-world-factbook/', 'http://www.onelook.com', 'http://www.shipyourenemiesglitter.com', 'http://www.rubiksolve.com', 'http://www.jacopolo.com/hexclock', 'http://yadayadayadaecon.com', 'https://www.ifixit.com/Guide', 'http://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html', 'http://www.wtf-secrets.com', 'http://asoftmurmur.com', 'http://www.myscriptfont.com', 'http://www.myscriptfont.com', 'http://stars.chromeexperiments.com', 'http://www.jurassicworld.com', 'http://www.seehearparty.com', 'http://simplesciencefitness.com', 'http://myprogressbar.com/win7.html?type=day&start=32400&end=63000', 'http://www.pointerpointer.com', 'http://labs.echonest.com/Uploader/index.html?trid=TRLIDTV143AC580EDB', 'http://haxiomic.github.io/GPU-Fluid-Experiments/html5/?q=Medium', 'http://64px.com/instagram/', 'http://www.printablepaper.net', 'http://japaneseemoticons.net', 'http://quotacle.com/home.php', 'http://pennystocks.la/warren-buffett/', 'https://fakena.me', 'https://archive.org/details/consolelivingroom?123/v2', 'http://www.drawastickman.com/episode1', 'http://www.nytimes.com/newsgraphics/2013/10/27/south-china-sea/', 'http://whathappensontheinternetin60seconds.com', 'http://muyueh.com/greenhoney/', 'https://tosdr.org', 'http://tinysubversions.com/contentForever/', 'http://flatuicolors.com/#', 'http://myfridgefood.com', 'http://tabletopaudio.com', 'http://www.thesixtyone.com', 'http://www.chesscademy.com', 'http://spoilers.netflix.com/spoil-yourself/', 'http://www.lucyphone.com', 'http://www.comicsanscriminal.com', 'http://dongerlist.com', 'https://www.buildwithchrome.com/builder#pos=298295x406457&load=ahFzfmJ1aWxkd2l0aGNocm9tZXIsCxIFQnVpbGQiIXRpbGV4XzI5ODI5NV90aWxleV80MDY0NTdfem9vbV8yMAw', 'http://www.xrite.com/online-color-test-challenge', 'http://www.chasingthefrog.com', 'http://www.nytimes.com/interactive/2013/12/20/sunday-review/dialect-quiz-map.html?_r=0', 'http://geacron.com/home-en/', 'http://www.johnnycashhasbeeneverywhere.com', 'http://iss.astroviewer.net', 'http://everestavalanchetragedy.com/mt-everest-journey.html'];
console.log(sitelist.length);

var surprise = document.getElementById("surprise");
surprise.onclick = function() {
	var i = Math.floor((Math.random() * sitelist.length) + 1);
	chrome.tabs.create({url: sitelist[i]});
}