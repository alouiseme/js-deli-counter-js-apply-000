function takeANumber(people, name) {
  for (var i = 0; i <= people.length; i++){
    people.push(name);
    return 'Welcome, ' + name + '. You are number ' + people.length + ' in line.';
  }
}


function nowServing(people) {
  for (var i = 0; i <= people.length; i++){
    if (people.length > 0){
      var next = people.shift();
      return 'Currently serving ' + next + '.';
    } else {
      return 'There is nobody waiting to be served!'
    }
    }
}

function currentLine(people){
  if (people.length > 0 ){
  return 'The line is currently' + people

  } else {
    return 'The line is currently empty.';
  }
}