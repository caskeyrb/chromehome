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