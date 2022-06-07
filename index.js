function scuberGreetingForFeet(distance){
  
  if (distance >=2000 && distance < 2500) {
     return 'I will gladly take your thirty bucks.'
  }
  
  else if (distance <= 400){
      return 'This one is on me!'
  }
  else if (distance > 2500){
    return 'No can do.'
  }
  return distance;
}

function ternaryCheckCity(city){
  
 return (city === 'NYC')? "Ok, sounds good." : "No go.";
}
function switchOnCharmFromTip(tips){
  
switch (tips) {
    case 'generous':
        return 'Thank you so much.';
        break;
    case 'not as generous':
        return 'Thank you.';
        break;
    default:
        return 'Bye.';
        break;
}
}