document.addEventListener('DOMContentLoaded', function() {
  var summonCats = document.querySelector('.summon-cats');
  console.log(summonCats);

  summonCats.addEventListener('click', function(e) {
    console.log("Summoning Cats");
  });

});
