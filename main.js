const lett = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ-.·$%&/()=?¿!'.split("");
var cod = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ-.·$%&/()=?¿!'.split("");
cod.reverse()
function encode(q){
  var w = q.split("");
    for(a in w){
      w[a] = cod[lett.indexOf(w[a])];
    }
    return w.toString().replaceAll(",","")
}
var db = {};

//Users Database
db.users = {};
db.users.id = "c5f82d22-0551-4566-8a3b-63a64c40c7fa";
db.users.bas = "db";

//Chats Database
db.chat = {};
db.chat.id = "56b4ae6b-0410-4642-8a81-6754ad1b1094";
db.chat.bas = "db";

//Encode / decode
function decode(q){
  var w = q.split("");
    for(a in w){
      w[a] = lett[cod.indexOf(w[a])];
    }
    return w.toString().replaceAll(",","")
}
 
//define db functions
db.add = function(k, v){
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	var raw = "{'" + k + "':'" + v + "'}"

	var requestOptions = {
  		method: 'PUT',
  		headers: myHeaders,
  		body: raw,
  		redirect: 'follow'
	};

	
	fetch("https://getpantry.cloud/apiv1/pantry/" + db.id + "/basket/" + db.bas + "/", requestOptions)
  		.then(response => response.text())
  		.then(result => console.log(result))
  		.catch(error => console.log('error', error));
}


db.data; 


db.get = function(){
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};
	
	fetch("https://getpantry.cloud/apiv1/pantry/" + db.id + "/basket/" + db.bas + "/", requestOptions)
	  	.then(response => response.text())
	  	.then(result => db.data = result)
	  	.catch(error => console.log('error', error));
}

//db.load & db.save
db.load = function(w){
  db.id = db[w].id;
  db.bas = db[w].bas;
db.get()
}
db.save = function(k, v, w){
  db.id = db[w].id;
  db.bas = db[w].bas;
  db.add(k, v)
}

