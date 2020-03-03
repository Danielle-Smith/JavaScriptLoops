// For loops 

var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
  ];
  
  for (var player in players) { // used more than the var i = 0
    console.log(players[player]);
  }
  
  for (var i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
  
  players.forEach(function(element) { // relatively new to javascript - fits into the javascript language best
    console.log(element);
  });



// Loop through objects

  var student = {
    name: 'Kristine',
    age: 12,
    city: 'Scottsdale'
  };
  
  for (var key in student) {
    console.log(key + " => " + student[key]);
  }

//   While and do/while loops

var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
  ];
  
  var i = 0;
  while (i < players.length) { // while is checked first
    console.log(players[i]);
    i++;
  }
  
  var i = 21;
  do {
    console.log(players[i]);
    i++;
  } while (i < players.length) // while is checked last. It will guarentee it will go through the loop once - useful in making games.
