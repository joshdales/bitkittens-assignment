document.addEventListener('DOMContentLoaded', function() {
  var summonCats = document.querySelector('.summon-cats');
  var catBoxes = document.getElementsByClassName('cat-box');
  var cat1 = document.getElementById('cat1')
  console.log(summonCats);

  summonCats.addEventListener('click', function(e) {
    console.log("Summoning Cats");
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
    }).done(function(data) {
        var cats = data.cats
        var catPics = cats.map(function(cat) {
          var image = document.createElement('img');
          image.src = cat.photo;
          image.alt = "Photo of " + cat.name;
          return image;
        });

        for(i=0; i<catPics.length; i++ ){
          catBoxes[i].append(catPics[i])
        }
      })
  });

});
