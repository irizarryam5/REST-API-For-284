function driver(e){
	var fs = require('fs');
	
	var dataRawPicks = fs.readFileSync('pickData.json');
	var dataRawMoney = fs.readFileSync('moneyData.json');
	var pickData =  JSON.parse(dataRawPicks);
	var moneyData =  JSON.parse(dataRawMoney);
	
	var teamRecords = e;
	var d = new Date();
	var currTime = (function(){
		var a = d.getFullYear();
		var b = (function(){
			temp = d.getMonth();
			temp = parseInt(temp)+1;
			if(temp < 10){
				temp = "0" + temp.toString();
			}else{
				temp = temp.toString();
			}
			return temp;
		})();
		var c = (function(){
			var temp = d.getDate();
			temp = temp.toString();
			if(parseInt(temp) < 10){
				temp = "0" +  temp;
			}
			return temp;
		})();
		return a.toString() + b.toString() + c;
	})();

	function checkTime(i){
		if(i<10){
			i = "0"+i;
		}
		return i;
	}

	var sysTime = (function(){
		var hours = d.getHours();
		var minutes = d.getMinutes();
		var day = d.getDate();
		var month = d.getMonth()+1;
		var year = d.getFullYear();
		var tz = " EST";
		checkTime(hours);
		checkTime(minutes);
		
		return month.toString() + "/" + day.toString() + "/" + year.toString() + " " +
			hours.toString() + ":" + minutes.toString() + tz;
	})();
	var bets = [
		{hid: 0, tid: 0, over: 0, money: 20},
		{hid: 0, tid: 1, over: 0, money: 20},
		{hid: 0, tid: 2, over: 1, money: 20},
		{hid: 0, tid: 3, over: 1, money: 20},
		{hid: 0, tid: 4, over: 0, money: 20},
		{hid: 0, tid: 5, over: 1, money: 20},
		{hid: 0, tid: 6, over: 0, money: 20},
		{hid: 0, tid: 7, over: 0, money: 20},
		{hid: 0, tid: 8, over: 0, money: 20},
		{hid: 0, tid: 9, over: 1, money: 20},
		{hid: 0, tid: 10, over: 0, money: 20},
		{hid: 0, tid: 11, over: 0, money: 20},
		{hid: 0, tid: 12, over: 0, money: 20},
		{hid: 0, tid: 13, over: 1, money: 20},
		{hid: 0, tid: 14, over: 1, money: 20},
		{hid: 0, tid: 15, over: 0, money: 20},
		{hid: 0, tid: 16, over: 1, money: 20},
		{hid: 0, tid: 17, over: 1, money: 20},
		{hid: 0, tid: 18, over: 0, money: 20},
		{hid: 0, tid: 19, over: 0, money: 20},
		{hid: 0, tid: 20, over: 1, money: 20},
		{hid: 0, tid: 21, over: 0, money: 20},
		{hid: 0, tid: 22, over: 0, money: 20},
		{hid: 0, tid: 23, over: 1, money: 20},
		{hid: 0, tid: 24, over: 0, money: 20},
		{hid: 0, tid: 25, over: 0, money: 20},
		{hid: 0, tid: 26, over: 1, money: 20},
		{hid: 0, tid: 27, over: 1, money: 20},
		{hid: 0, tid: 28, over: 0, money: 20},
		{hid: 0, tid: 29, over: 1, money: 20},
		{hid: 1, tid: 0, over: 0, money: 10},
		{hid: 1, tid: 1, over: 0, money: 10},
		{hid: 1, tid: 2, over: 1, money: 50},
		{hid: 1, tid: 3, over: 1, money: 30},
		{hid: 1, tid: 4, over: 1, money: 10},
		{hid: 1, tid: 5, over: 0, money: 10},
		{hid: 1, tid: 6, over: 0, money: 20},
		{hid: 1, tid: 7, over: 0, money: 10},
		{hid: 1, tid: 8, over: 1, money: 20},
		{hid: 1, tid: 9, over: 0, money: 10},
		{hid: 1, tid: 10, over: 0, money: 30},
		{hid: 1, tid: 11, over: 1, money: 10},
		{hid: 1, tid: 12, over: 0, money: 50},
		{hid: 1, tid: 13, over: 0, money: 30},
		{hid: 1, tid: 14, over: 1, money: 10},
		{hid: 1, tid: 15, over: 0, money: 10},
		{hid: 1, tid: 16, over: 1, money: 40},
		{hid: 1, tid: 17, over: 1, money: 10},
		{hid: 1, tid: 18, over: 1, money: 30},
		{hid: 1, tid: 19, over: 0, money: 10},
		{hid: 1, tid: 20, over: 0, money: 50},
		{hid: 1, tid: 21, over: 0, money: 10},
		{hid: 1, tid: 22, over: 1, money: 20},
		{hid: 1, tid: 23, over: 0, money: 10},
		{hid: 1, tid: 24, over: 1, money: 10},
		{hid: 1, tid: 25, over: 0, money: 20},
		{hid: 1, tid: 26, over: 0, money: 20},
		{hid: 1, tid: 27, over: 1, money: 30},
		{hid: 1, tid: 28, over: 0, money: 10},
		{hid: 1, tid: 29, over: 1, money: 10},
		{hid: 2, tid: 0, over: 0, money: 10},
		{hid: 2, tid: 1, over: 1, money: 10},
		{hid: 2, tid: 2, over: 0, money: 20},
		{hid: 2, tid: 3, over: 0, money: 10},
		{hid: 2, tid: 4, over: 0, money: 10},
		{hid: 2, tid: 5, over: 0, money: 40},
		{hid: 2, tid: 6, over: 0, money: 10},
		{hid: 2, tid: 7, over: 1, money: 10},
		{hid: 2, tid: 8, over: 1, money: 10},
		{hid: 2, tid: 9, over: 0, money: 10},
		{hid: 2, tid: 10, over: 1, money: 10},
		{hid: 2, tid: 11, over: 0, money: 30},
		{hid: 2, tid: 12, over: 1, money: 40},
		{hid: 2, tid: 13, over: 0, money: 10},
		{hid: 2, tid: 14, over: 1, money: 10},
		{hid: 2, tid: 15, over: 1, money: 10},
		{hid: 2, tid: 16, over: 0, money: 30},
		{hid: 2, tid: 17, over: 0, money: 30},
		{hid: 2, tid: 18, over: 0, money: 10},
		{hid: 2, tid: 19, over: 0, money: 50},
		{hid: 2, tid: 20, over: 1, money: 30},
		{hid: 2, tid: 21, over: 0, money: 10},
		{hid: 2, tid: 22, over: 0, money: 30},
		{hid: 2, tid: 23, over: 0, money: 30},
		{hid: 2, tid: 24, over: 1, money: 10},
		{hid: 2, tid: 25, over: 0, money: 20},
		{hid: 2, tid: 26, over: 1, money: 50},
		{hid: 2, tid: 27, over: 0, money: 10},
		{hid: 2, tid: 28, over: 1, money: 20},
		{hid: 2, tid: 29, over: 1, money: 20},
		{hid: 3, tid: 0, over: 0, money: 10},
		{hid: 3, tid: 1, over: 1, money: 10},
		{hid: 3, tid: 2, over: 1, money: 50},
		{hid: 3, tid: 3, over: 0, money: 10},
		{hid: 3, tid: 4, over: 0, money: 20},
		{hid: 3, tid: 5, over: 1, money: 50},
		{hid: 3, tid: 6, over: 1, money: 10},
		{hid: 3, tid: 7, over: 0, money: 10},
		{hid: 3, tid: 8, over: 0, money: 10},
		{hid: 3, tid: 9, over: 1, money: 50},
		{hid: 3, tid: 10, over: 1, money: 10},
		{hid: 3, tid: 11, over: 0, money: 30},
		{hid: 3, tid: 12, over: 0, money: 20},
		{hid: 3, tid: 13, over: 1, money: 20},
		{hid: 3, tid: 14, over: 1, money: 10},
		{hid: 3, tid: 15, over: 1, money: 10},
		{hid: 3, tid: 16, over: 0, money: 30},
		{hid: 3, tid: 17, over: 0, money: 10},
		{hid: 3, tid: 18, over: 0, money: 10},
		{hid: 3, tid: 19, over: 0, money: 30},
		{hid: 3, tid: 20, over: 1, money: 50},
		{hid: 3, tid: 21, over: 1, money: 10},
		{hid: 3, tid: 22, over: 0, money: 20},
		{hid: 3, tid: 23, over: 0, money: 10},
		{hid: 3, tid: 24, over: 1, money: 10},
		{hid: 3, tid: 25, over: 0, money: 10},
		{hid: 3, tid: 26, over: 1, money: 30},
		{hid: 3, tid: 27, over: 1, money: 10},
		{hid: 3, tid: 28, over: 1, money: 10},
		{hid: 3, tid: 29, over: 1, money: 30},
		{hid: 4, tid: 0, over: 0, money: 10},
		{hid: 4, tid: 1, over: 1, money: 10},
		{hid: 4, tid: 2, over: 1, money: 10},
		{hid: 4, tid: 3, over: 1, money: 10},
		{hid: 4, tid: 4, over: 0, money: 10},
		{hid: 4, tid: 5, over: 1, money: 50},
		{hid: 4, tid: 6, over: 0, money: 10},
		{hid: 4, tid: 7, over: 0, money: 10},
		{hid: 4, tid: 8, over: 0, money: 10},
		{hid: 4, tid: 9, over: 1, money: 50},
		{hid: 4, tid: 10, over: 1, money: 50},
		{hid: 4, tid: 11, over: 0, money: 10},
		{hid: 4, tid: 12, over: 0, money: 10},
		{hid: 4, tid: 13, over: 1, money: 10},
		{hid: 4, tid: 14, over: 0, money: 10},
		{hid: 4, tid: 15, over: 1, money: 50},
		{hid: 4, tid: 16, over: 0, money: 10},
		{hid: 4, tid: 17, over: 0, money: 50},
		{hid: 4, tid: 18, over: 0, money: 40},
		{hid: 4, tid: 19, over: 0, money: 10},
		{hid: 4, tid: 20, over: 1, money: 10},
		{hid: 4, tid: 21, over: 0, money: 10},
		{hid: 4, tid: 22, over: 0, money: 50},
		{hid: 4, tid: 23, over: 0, money: 40},
		{hid: 4, tid: 24, over: 0, money: 10},
		{hid: 4, tid: 25, over: 0, money: 10},
		{hid: 4, tid: 26, over: 0, money: 10},
		{hid: 4, tid: 27, over: 1, money: 10},
		{hid: 4, tid: 28, over: 1, money: 10},
		{hid: 4, tid: 29, over: 1, money: 10},
		{hid: 5, tid: 0, over: 1, money: 10},
		{hid: 5, tid: 1, over: 1, money: 10},
		{hid: 5, tid: 2, over: 1, money: 10},
		{hid: 5, tid: 3, over: 1, money: 10},
		{hid: 5, tid: 4, over: 0, money: 10},
		{hid: 5, tid: 5, over: 1, money: 10},
		{hid: 5, tid: 6, over: 0, money: 10},
		{hid: 5, tid: 7, over: 0, money: 10},
		{hid: 5, tid: 8, over: 1, money: 30},
		{hid: 5, tid: 9, over: 0, money: 10},
		{hid: 5, tid: 10, over: 1, money: 10},
		{hid: 5, tid: 11, over: 1, money: 10},
		{hid: 5, tid: 12, over: 1, money: 10},
		{hid: 5, tid: 13, over: 0, money: 10},
		{hid: 5, tid: 14, over: 1, money: 50},
		{hid: 5, tid: 15, over: 0, money: 10},
		{hid: 5, tid: 16, over: 0, money: 10},
		{hid: 5, tid: 17, over: 1, money: 10},
		{hid: 5, tid: 18, over: 1, money: 50},
		{hid: 5, tid: 19, over: 1, money: 50},
		{hid: 5, tid: 20, over: 1, money: 50},
		{hid: 5, tid: 21, over: 0, money: 10},
		{hid: 5, tid: 22, over: 0, money: 50},
		{hid: 5, tid: 23, over: 1, money: 50},
		{hid: 5, tid: 24, over: 1, money: 10},
		{hid: 5, tid: 25, over: 0, money: 10},
		{hid: 5, tid: 26, over: 1, money: 50},
		{hid: 5, tid: 27, over: 0, money: 10},
		{hid: 5, tid: 28, over: 0, money: 10},
		{hid: 5, tid: 29, over: 1, money: 10}			
	];
			
	var teamInfo = [
		{abv: "ATL", city: "Atlanta", line: 25.5, name:"Hawks", tid: 0},
		{abv: "BKN", city: "Brooklyn", line: 28.5, name: "Nets", tid: 1},
		{abv: "BOS", city: "Boston", line: 56.5, name: "Celtics", tid: 2},
		{abv: "CHA", city: "Charlotte", line: 42.5, name: "Hornets", tid: 3},
		{abv: "CHI", city: "Chicago", line: 21.5, name: "Bulls", tid: 4},
		{abv: "CLE", city: "Cleveland", line: 53.5, name: "Cavaliers", tid: 5},
		{abv: "DAL", city: "Dallas", line: 35.5, name: "Mavericks", tid: 6},
		{abv: "DEN", city: "Denver", line: 45.5, name: "Nuggets", tid: 7},
		{abv: "DET", city: "Detroit", line: 38.5, name: "Pistons", tid: 8},
		{abv: "GSW", city: "Golden State", line: 67.5, name: "Warriors", tid: 9},
		{abv: "HOU", city: "Houston", line: 55.5, name: "Rockets", tid: 10},
		{abv: "IND", city: "Indiana", line: 31.5, name: "Pacers", tid: 11},
		{abv: "LAC", city: "Los Angeles", line: 43.5, name: "Clippers", tid: 12},
		{abv: "LAL", city: "Los Angeles", line: 33.5, name: "Lakers", tid: 13},
		{abv: "MEM", city: "Memphis", line: 37.5, name: "Grizzlies", tid: 14},
		{abv: "MIA", city: "Miami", line: 43.5, name: "Heat", tid: 15},
		{abv: "MIL", city: "Milwaukee", line: 47.5, name: "Bucks", tid: 16},
		{abv: "MIN", city: "Minnesota", line: 48.5, name: "Timberwolves", tid: 17},
		{abv: "NOP", city: "New Orleans", line: 39.5, name: "Pelicans", tid: 18},
		{abv: "NYK", city: "New York", line: 30.5, name: "Knicks", tid: 19},
		{abv: "OKC", city: "Oklahoma City", line: 51.5, name: "Thunder", tid: 20},
		{abv: "ORL", city: "Orlando", line: 33.5, name: "Magic", tid: 21},
		{abv: "PHI", city: "Philadelphia", line: 42.5, name: "76ers", tid: 22},
		{abv: "PHX", city: "Phoenix", line: 28.5, name: "Suns", tid: 23},
		{abv: "POR", city: "Portland", line: 42.5, name: "Trail Blazers", tid: 24},
		{abv: "SAC", city: "Sacramento", line: 28.5, name: "Kings", tid: 25},
		{abv: "SAS", city: "San Antonio", line: 54.5, name: "Spurs", tid: 26},
		{abv: "TOR", city: "Toronto", line: 48.5, name: "Raptors", tid: 27},
		{abv: "UTA", city: "Utah", line: 40.5, name: "Jazz", tid: 28},
		{abv: "WAS", city: "Washington", line: 47.5, name: "Wizards", tid: 29}
	];

	var teamsOver = [];
	var gamesPastLine = [];
	(function(){
		for(var i=0; i<30; i++){
			var wins = teamRecords[i].wins;
			var currLine = teamInfo[i].line; //lololololol
			
			if(currLine < wins){
				var over = 1;
				var gamesPast = ((wins - currLine) + 0.5);
				teamsOver.push(over);
				gamesPastLine.push(gamesPast);
			}else if(currLine > wins){
				var under = 0;
				var gamesPast = ((currLine - wins) + 0.5);
				teamsOver.push(under);
				gamesPastLine.push(gamesPast);
			}
		}
	})();
			
	var oversCorrect = [];
	var purses = [];
		
	(function(){
		for(var i=0; i<6; i++){
			var temp = 0;
			var cash = 0;
			for(var j = 0; j < bets.length; j++){
				if(bets[j].hid == i && bets[j].over == teamsOver[bets[j].tid]){
					temp++;
					cash += bets[j].money;
				}
			}
			oversCorrect.push(temp);
			purses.push(cash);
		}
	})();
			
	//things to be exported
	var pickAppend = {
		"Date": parseInt(currTime),
        "Alex": oversCorrect[0],
        "Amanda": oversCorrect[1],
		"Antonio": oversCorrect[2],
		"Morgan": oversCorrect[3],
		"Nick": oversCorrect[4],
		"Will": oversCorrect[5]
	};
	
	var moneyAppend = {
		"Date": parseInt(currTime),
        "Alex": purses[0],
        "Amanda": purses[1],
		"Antonio": purses[2],
		"Morgan": purses[3],
		"Nick": purses[4],
		"Will": purses[5]
	};
	
	pickData.Picks.push(pickAppend);
	moneyData.Money.push(moneyAppend);
				
	var tickerStats = [];
	var displayJS = [];

	(function(){
		for(i=0; i<30; i++){
			var temp = {team: "", games: 0, over: 0};
			temp.team = teamInfo[i].abv;
			temp.games = gamesPastLine[i];
			temp.over = teamsOver[i];
			
			tickerStats.push(temp);
		}
	})();

	(function(){
		for(i=0; i<6; i++){
			var temp = {picks: 0, money: 0};
			temp.picks = oversCorrect[i];
			temp.money = purses[i];
			
			displayJS.push(temp);
		}
		var tou = {timeOfUpdate: ""};
		displayJS.push(tou);
		displayJS[6].timeOfUpdate = sysTime;
	})();

	var tickerFinal = JSON.stringify(tickerStats, null, 2);
	var displayFinal = JSON.stringify(displayJS, null, 2);
	var picksFinal = JSON.stringify(pickData, null, 2);
	var moneyFinal = JSON.stringify(moneyData, null, 2);
			
	fs.writeFileSync('pickData.json', picksFinal);
	fs.writeFileSync('moneyData.json', moneyFinal);
	fs.writeFileSync('tickerData.json', tickerFinal);
	fs.writeFileSync('displayData.json', displayFinal);
}
function runner(){
	const sqlite3 = require('sqlite3').verbose();
	 
	var db = new sqlite3.Database('nbaBet.db');
	 
	var sql = `SELECT * FROM records`;
	var tids = [];
	var wins = [];
	var loses = [];
	 
	db.all(sql, [], (err, rows) => {
		if (err) {
			throw err;
		}
		rows.forEach((row) => {
			tids.push(row.tid);
			wins.push(row.wins);
			loses.push(row.loses);
		});

		var fuel = (function(){
			var tempArray = [];
			for(i=0; i<30; i++){
				var looper = tids.length - 30;
				if(tids.lenght < 30){
					looper = 0;
				}
				var j = looper + i;
				var temp = {tid: 0, wins: 0, loses: 0};
				temp.tid = tids[j];
				temp.wins = wins[j];
				temp.loses = loses[j];
				
				tempArray.push(temp);
			}
			return tempArray
		})();
		driver(fuel);
	});
	 
	db.close();
}
runner();


