// Images and alt attribute
var images = {
  image: [
    {src: 'http://wenwen.nos-eastchina1.126.net/1.jpg', alt: 'Project 1'}
    , {src: 'http://wenwen.nos-eastchina1.126.net/2.jpg', alt: 'Project 2'}
    , {src: 'http://wenwen.nos-eastchina1.126.net/3.jpg', alt: 'Project 3'}
    , {src: 'http://wenwen.nos-eastchina1.126.net/4.jpg', alt: 'Project 4'}
    , {src: 'http://wenwen.nos-eastchina1.126.net/5.jpg', alt: 'Project 5'}
    , {src: 'http://wenwen.nos-eastchina1.126.net/6.jpg', alt: 'Project 6'}
    , {src: 'http://wenwen.nos-eastchina1.126.net/7.jpg', alt: 'Project 7'}
    , {src: 'http://wenwen.nos-eastchina1.126.net/8.jpg', alt: 'Project 8'}
    , {src: 'http://wenwen.nos-eastchina1.126.net/9.jpg', alt: 'Project 9'}
  ]
};

// Show Modal Image 
function onClick(element) {
  document.getElementById("img").src = element.src;
  document.getElementById("modal").style.display = "block";
}
