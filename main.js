var db = {};

//Users Database
db.users = {};
db.users.id = "c5f82d22-0551-4566-8a3b-63a64c40c7fa";
db.users.bas = "db";

//Chats Database
db.chat = {};
db.chat.id = "56b4ae6b-0410-4642-8a81-6754ad1b1094";
db.chat.bas = "db";

//define db functions
db.add = function(k, v, bas="ok"){
	var settings = {
  "url": "https://getpantry.cloud/apiv1/pantry/2ffe12f3-0436-4ea7-8e4a-5549d02e603d/basket/" + bas,
  "method": "PUT",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": "{'" + k + "':'" + v + "'}"
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
}


db.data; 


db.get = function(bas="ok"){
	var settings = {
  "url": "https://getpantry.cloud/apiv1/pantry/2ffe12f3-0436-4ea7-8e4a-5549d02e603d/basket/" + bas,
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
};

$.ajax(settings).done(function (response) {
  soloload(response);
});
}


//db.load & db.save
db.load = function(w){
  db.id = db[w].id;
  db.bas = db[w].bas;
  db.get();
}
db.save = function(k, v, w){
  db.id = db[w].id;
  db.bas = db[w].bas;
  db.add(k, v)
}

