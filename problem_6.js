var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

var maxLength = 0;
var idx = 0;


for (var i = 0; i < friends.length; i++) 
  {
  if (friends[i].length > maxLength) 
    {
      maxLength = friends[i].length;
      idx = i;

    }
  }


console.log(friends[idx]);
