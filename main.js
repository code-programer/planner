var db = {}
db.data;
var user = {}
var res = {}
res.data;



function uptade(a, b, binId="63c2bd75dfc68e59d58269b6", callback="console.log"){
	let req = new XMLHttpRequest();
	
	req.onreadystatechange = () => {
  		if (req.readyState == XMLHttpRequest.DONE) {
    			eval(callback + "(" + req.responseText + ")")
		  }
	};
	
	req.open("PUT", "https://api.jsonbin.io/v3/b/" + binId, true);
	req.setRequestHeader("Content-Type", "application/json");
	req.setRequestHeader("X-Master-Key", "$2b$10$GQBXgX0qtSt9SMrLTUYkle8r3ine3QESBb8jK69jddclQRRmMufvS");
	db.data[a] = b;
	req.send(JSON.stringify(db.data));
}

function ruptade(a, b, yac, binId="63c54a8c15ab31599e37f4e6", callback="console.log"){
	let req = new XMLHttpRequest();
	
	req.onreadystatechange = () => {
  		if (req.readyState == XMLHttpRequest.DONE) {
    			eval(callback + "(" + req.responseText + ")")
		  }
	};
	
	req.open("PUT", "https://api.jsonbin.io/v3/b/" + binId, true);
	req.setRequestHeader("Content-Type", "application/json");
	req.setRequestHeader("X-Master-Key", "$2b$10$GQBXgX0qtSt9SMrLTUYkle8r3ine3QESBb8jK69jddclQRRmMufvS");
	res.data[a] = b;
	req.send(JSON.stringify(res.data));
}
user.data;
function uuptade(a, b, binId="63c44219dfc68e59d5834ba0", callback="console.log"){
	let req = new XMLHttpRequest();
	
	req.onreadystatechange = () => {
  		if (req.readyState == XMLHttpRequest.DONE) {
    			eval(callback + "(" + req.responseText + ")")
		  }
	};
	
	req.open("PUT", "https://api.jsonbin.io/v3/b/" + binId, true);
	req.setRequestHeader("Content-Type", "application/json");
	req.setRequestHeader("X-Master-Key", "$2b$10$GQBXgX0qtSt9SMrLTUYkle8r3ine3QESBb8jK69jddclQRRmMufvS");
	user.data[a] = b;
	req.send(JSON.stringify(user.data));
}

function get(binId="63c2bd75dfc68e59d58269b6", callback="console.log"){
	let req = new XMLHttpRequest();

	req.onreadystatechange = () => {
	  if (req.readyState == XMLHttpRequest.DONE) {
	    eval(callback + "(" + req.responseText + ")")
	    db.data = JSON.parse(req.responseText);
	  }
	};

	req.open("GET", "https://api.jsonbin.io/v3/b/" + binId + "?meta=false", true);
	req.setRequestHeader("X-Master-Key", "$2b$10$GQBXgX0qtSt9SMrLTUYkle8r3ine3QESBb8jK69jddclQRRmMufvS");
	req.send();
}

function rget(binId="63c54a8c15ab31599e37f4e6", callback="console.log"){
	let req = new XMLHttpRequest();

	req.onreadystatechange = () => {
	  if (req.readyState == XMLHttpRequest.DONE) {
	    eval(callback + "(" + req.responseText + ")")
	    res.data = JSON.parse(req.responseText);
	  }
	};

	req.open("GET", "https://api.jsonbin.io/v3/b/" + binId + "?meta=false", true);
	req.setRequestHeader("X-Master-Key", "$2b$10$GQBXgX0qtSt9SMrLTUYkle8r3ine3QESBb8jK69jddclQRRmMufvS");
	req.send();
}

function uget(binId="63c44219dfc68e59d5834ba0", callback="console.log"){
	let req = new XMLHttpRequest();

	req.onreadystatechange = () => {
	  if (req.readyState == XMLHttpRequest.DONE) {
	    eval(callback + "(" + req.responseText + ")")
	    user.data = JSON.parse(req.responseText);
	  }
	};

	req.open("GET", "https://api.jsonbin.io/v3/b/" + binId + "?meta=false", true);
	req.setRequestHeader("X-Master-Key", "$2b$10$GQBXgX0qtSt9SMrLTUYkle8r3ine3QESBb8jK69jddclQRRmMufvS");
	req.send();
}
