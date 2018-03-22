var app = new Vue({
	el: '#chargen',
	data: {
		settings: {
			ageMod: false,
			tooltip: ""
		},
		info: {
			name: "",
			player: "",
			occupation: "",
			age: "",
			sex: "",
			residence: "",
			birthplace: ""
		},
		characteristics: {
			str: "",
			con: "",
			siz: "",
			dex: "",
			app: "",
			edu: "",
			int: "",
			pow: "",
			moverate: "",
			hp: "",
			mp: "",
			luck: "",
			sanity: ""
		}
	},
	methods: {
		genStats: function(stats) {
			if (stats == "characteristics") {
				/* 3d6 * 5 */
				this.characteristics.str = (Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1)) * 5;
				this.characteristics.con = (Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1)) * 5;
				this.characteristics.pow = (Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1)) * 5;
				this.characteristics.dex = (Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1)) * 5;
				this.characteristics.app = (Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1)) * 5;
				this.characteristics.luck = (Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1)) * 5;
				
				/* 2d6+6 * 5 */
				this.characteristics.int = (Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + 6) * 5;
				this.characteristics.siz = (Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + 6) * 5;
				this.characteristics.edu = (Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + 6) * 5;
					
			}

			else if (stats == "nameMale") {
				$.get("../assets/lists/forenames.json", function(data) {
					console.log("Data: " + data);
				})
			} else if (stats == "nameFemale") {
				$.get("../assets/lists/forenames.json", function(data) {
					console.log("Data: " + data);
				})
			}

			this.updateSkills();
		},
		getStats: function(stat) {
			if (stat == "STR") {
				if (this.info.age == "" || this.settings.ageMod == false) {
					return this.characteristics.str;
				}

				if (this.info.age < 15) {
					return "<".concat(this.characteristics.str - 5)
				}
				else if (this.info.age >= 15 && this.info.age <= 19) {
					return this.characteristics.str - Math.floor((Math.random() * 2) + 2);
				}
				else if (this.info.age >= 40 && this.info.age <= 49) {
					return this.characteristics.str - Math.floor((Math.random() * 2) + 1);
				}
				else if (this.info.age >= 50 && this.info.age <= 59) {
					return this.characteristics.str - Math.floor((Math.random() * 2) + 3);
				}
				else if (this.info.age >= 60 && this.info.age <= 69) {
					return this.characteristics.str - Math.floor((Math.random() * 2) + 6);
				}
				else if (this.info.age >= 70 && this.info.age <= 79) {
					return this.characteristics.str - Math.floor((Math.random() * 2) + 13);
				}
				else if (this.info.age >= 80 && this.info.age <= 89) {
					return this.characteristics.str - Math.floor((Math.random() * 2) + 26);
				}
				else {
					return this.characteristics.str;
				}
			}
			else if (stat == "SIZ") {
				if (this.info.age == "" || this.settings.ageMod == false) {
					return this.characteristics.siz;
				}

				if (this.info.age < 15) {
					return "<".concat(this.characteristics.siz - 5)
				}
				else if (this.info.age >= 15 && this.info.age <= 19) {
					return this.characteristics.siz - Math.floor((Math.random() * 2) + 2);
				}
				else {
					return this.characteristics.siz;
				}
			}
			else if (stat == "EDU") {
				if (this.info.age == "" || this.settings.ageMod == false) {
					return this.characteristics.edu;
				}

				if (this.info.age < 15) {
					return "<".concat(this.characteristics.edu - 5)
				}
				else if (this.info.age >= 15 && this.info.age <= 19) {
					return this.characteristics.edu - 5;
				}
				else if (this.info.age >= 20 && this.info.age <= 39) {
					var roll = Math.floor((Math.random() * 100) + 1);
					if (roll > this.characteristics.edu) {
						return Number(this.characteristics.edu) + Math.floor(roll/10);
					}
					return this.characteristics.edu;
				}
				else if (this.info.age >= 40 && this.info.age <= 49) {
					var mod = 0;
					var roll = Math.floor((Math.random() * 100) + 1);
					if (roll > this.characteristics.edu) {
						mod += Math.floor(roll/10);
					}
					var roll = Math.floor((Math.random() * 100) + 1);
					if (roll > this.characteristics.edu) {
						mod += Math.floor(roll/10);
					}
					return Number(this.characteristics.edu) + mod;
				}
				else if (this.info.age >= 50 && this.info.age <= 59) {
					var mod = 0;
					var roll = Math.floor((Math.random() * 100) + 1);
					if (roll > this.characteristics.edu) {
						mod += Math.floor(roll/10);
					}
					var roll = Math.floor((Math.random() * 100) + 1);
					if (roll > this.characteristics.edu) {
						mod += Math.floor(roll/10);
					}
					var roll = Math.floor((Math.random() * 100) + 1);
					if (roll > this.characteristics.edu) {
						mod += Math.floor(roll/10);
					}
					return Number(this.characteristics.edu) + mod;
				}
				else if (this.info.age >= 60) {
					var mod = 0;
					var roll = Math.floor((Math.random() * 100) + 1);
					if (roll > this.characteristics.edu) {
						mod += Math.floor(roll/10);
					}
					var roll = Math.floor((Math.random() * 100) + 1);
					if (roll > this.characteristics.edu) {
						mod += Math.floor(roll/10);
					}
					var roll = Math.floor((Math.random() * 100) + 1);
					if (roll > this.characteristics.edu) {
						mod += Math.floor(roll/10);
					}
					var roll = Math.floor((Math.random() * 100) + 1);
					if (roll > this.characteristics.edu) {
						mod += Math.floor(roll/10);
					}
					return Number(this.characteristics.edu) + mod;
				}
				else {
					return this.characteristics.edu;
				}
			}
			else if (stat == "APP") {
				if (this.info.age == "" || this.settings.ageMod == false) {
					return this.characteristics.app;
				}

				if (this.info.age >= 40 && this.info.age <= 49) {
					return this.characteristics.app - 5;
				}
				else if (this.info.age >= 50 && this.info.age <= 59) {
					return this.characteristics.app - 10;
				}
				else if (this.info.age >= 60 && this.info.age <= 69) {
					return this.characteristics.app - 15;
				}
				else if (this.info.age >= 70 && this.info.age <= 79) {
					return this.characteristics.app - 20;
				}
				else if (this.info.age >= 80 && this.info.age <= 89) {
					return this.characteristics.app - 25;
				}
				else {
					return this.characteristics.app;
				}
			}
			else if (stat == "CON") {
				if (this.info.age == "" || this.settings.ageMod == false) {
					return this.characteristics.con;
				}

				if (this.info.age >= 40 && this.info.age <= 49) {
					return this.characteristics.con - Math.floor((Math.random() * 2) + 1);
				}
				else if (this.info.age >= 50 && this.info.age <= 59) {
					return this.characteristics.con - Math.floor((Math.random() * 2) + 3);
				}
				else if (this.info.age >= 60 && this.info.age <= 69) {
					return this.characteristics.con - Math.floor((Math.random() * 2) + 6);
				}
				else if (this.info.age >= 70 && this.info.age <= 79) {
					return this.characteristics.con - Math.floor((Math.random() * 2) + 13);
				}
				else if (this.info.age >= 80 && this.info.age <= 89) {
					return this.characteristics.con - Math.floor((Math.random() * 2) + 26);
				}
				else {
					return this.characteristics.con;
				}
			}
			else if (stat == "DEX") {
				if (this.info.age == "" || this.settings.ageMod == false) {
					return this.characteristics.dex;
				}

				if (this.info.age >= 40 && this.info.age <= 49) {
					return this.characteristics.dex - Math.floor((Math.random() * 2) + 1);
				}
				else if (this.info.age >= 50 && this.info.age <= 59) {
					return this.characteristics.dex - Math.floor((Math.random() * 2) + 3);
				}
				else if (this.info.age >= 60 && this.info.age <= 69) {
					return this.characteristics.dex - Math.floor((Math.random() * 2) + 6);
				}
				else if (this.info.age >= 70 && this.info.age <= 79) {
					return this.characteristics.dex - Math.floor((Math.random() * 2) + 13);
				}
				else if (this.info.age >= 80 && this.info.age <= 89) {
					return this.characteristics.dex - Math.floor((Math.random() * 2) + 26);
				}
				else {
					return this.characteristics.dex;
				}
			}

			else if (stat == "HP") {
				var hp = Math.floor((Number(this.getStats("CON")) + Number(this.getStats("SIZ")))/10);
				if (hp % 1 != 0) {
					hp = Math.floor(hp);
				}
				return hp;
			}
			else if (stat == "MOV") {
				var move = 0;
				if ((Number(this.getStats("DEX")) > (Number(this.getStats("SIZ")))) && (Number(this.getStats("STR")) > (Number(this.getStats("SIZ"))))) {
					move = 9;
				}
				else if ((Number(this.getStats("DEX")) > (Number(this.getStats("SIZ")))) || (Number(this.getStats("STR")) > (Number(this.getStats("SIZ"))))) {
					move = 8;
				}
				else {
					move = 7;
				}

				if (this.settings.ageMod) {

					if (this.info.age >= 40) {
						move -= 1;
					}
					if (this.info.age >= 50) {
						move -= 1;
					}
					if (this.info.age >= 60) {
						move -= 1;
					}
					if (this.info.age >= 70) {
						move -= 1;
					}
					if (this.info.age >= 80) {
						move -= 1;
					}

				}

				return move;
			}
			else if (stat == "MP") {
				var mp = Number(this.characteristics.pow/5);
				if (mp % 1 != 0) {
					mp = Math.floor(mp);
				}
				return mp;
			}
			else if (stat == "SAN") {
				return this.characteristics.pow;
			}

			else if (stat == "DB") {
				if ((this.getStats("STR") + this.getStats("SIZ")) >= 2 && (this.getStats("STR") + this.getStats("SIZ")) <= 64) {
					return "-2";
				}
				else if ((this.getStats("STR") + this.getStats("SIZ")) >= 65 && (this.getStats("STR") + this.getStats("SIZ")) <= 84) {
					return "-1";
				}
				else if ((this.getStats("STR") + this.getStats("SIZ")) >= 85 && (this.getStats("STR") + this.getStats("SIZ")) <= 123) {
					return "None";
				}
				else if ((this.getStats("STR") + this.getStats("SIZ")) >= 125 && (this.getStats("STR") + this.getStats("SIZ")) <= 164) {
					return "+1D4";
				}
				else if ((this.getStats("STR") + this.getStats("SIZ")) >= 165 && (this.getStats("STR") + this.getStats("SIZ")) <= 204) {
					return "+1D6";
				}
			}
			else if (stat == "build") {
				if ((this.getStats("STR") + this.getStats("SIZ")) >= 2 && (this.getStats("STR") + this.getStats("SIZ")) <= 64) {
					return "-2";
				}
				else if ((this.getStats("STR") + this.getStats("SIZ")) >= 65 && (this.getStats("STR") + this.getStats("SIZ")) <= 84) {
					return "-1";
				}
				else if ((this.getStats("STR") + this.getStats("SIZ")) >= 85 && (this.getStats("STR") + this.getStats("SIZ")) <= 123) {
					return "0";
				}
				else if ((this.getStats("STR") + this.getStats("SIZ")) >= 125 && (this.getStats("STR") + this.getStats("SIZ")) <= 164) {
					return "+1";
				}
				else if ((this.getStats("STR") + this.getStats("SIZ")) >= 165 && (this.getStats("STR") + this.getStats("SIZ")) <= 204) {
					return "+2";
				}
			}
			else if (stat == "dodge") {
				var dodge = Number(this.getStats("DEX"))/2;
				if (dodge % 1 != 0) {
					dodge = Math.floor(dodge);
				}
				return dodge;
			}

			else if (stat == "OSP") {
				occupation = occupations[this.info.occupation.toLowerCase()];

				if (occupation == undefined) {
					return "x";
				}

				OSP = 0;
				for (i = 0; i < occupation.OSP.length; i++) {
					OSP += Number(this.getStats(occupation.OSP[i][0])) * occupation.OSP[i][1];
				}

				return OSP;
			}
			else if (stat == "PSP") {
				var PSP = Number(this.characteristics.int)*2;
				if (PSP % 1 != 0) {
					PSP = Math.floor(PSP);
				}
				return PSP;
			}
		},
		setStats: function(stat) {
			if (stat == "name") {
				this.info.name = prompt("What would you like the character's name to be set to?", this.info.name);
			} 
			else if (stat == "player") {
				this.info.player = prompt("What would you like the player name to be set to?", this.info.player);
			} 
			else if (stat == "occupation") {
				this.info.occupation = prompt("What would you like the character's occupation to be set to?", this.info.occupation);
			} 
			else if (stat == "age") {
				this.info.age = prompt("What would you like the character's age to be set to?", this.info.age);
			} 
			else if (stat == "sex") {
				this.info.sex = prompt("What would you like the character's sex to be set to?", this.info.sex);
			} 
			else if (stat == "residence") {
				this.info.residence = prompt("What would you like the character's residence to be set to?", this.info.residence);
			} 
			else if (stat == "birthplace") {
				this.info.birthplace = prompt("What would you like the character's birthplace to be set to?", this.info.birthplace);
			}

			else if (stat == "str") {
				this.characteristics.str = prompt("What would you like the character's base STR stat to be set to?", this.characteristics.str);
			}
			else if (stat == "dex") {
				this.characteristics.dex = prompt("What would you like the character's base DEX stat to be set to?", this.characteristics.dex);
			}
			else if (stat == "int") {
				this.characteristics.int = prompt("What would you like the character's base INT stat to be set to?", this.characteristics.int);
			}
			else if (stat == "con") {
				this.characteristics.con = prompt("What would you like the character's base CON stat to be set to?", this.characteristics.con);
			}
			else if (stat == "app") {
				this.characteristics.app = prompt("What would you like the character's base APP stat to be set to?", this.characteristics.app);
			}
			else if (stat == "pow") {
				this.characteristics.pow = prompt("What would you like the character's base POW stat to be set to?", this.characteristics.pow);
			}
			else if (stat == "siz") {
				this.characteristics.siz = prompt("What would you like the character's base SIZ stat to be set to?", this.characteristics.siz);
			}
			else if (stat == "edu") {
				this.characteristics.edu = prompt("What would you like the character's base EDU stat to be set to?", this.characteristics.edu);
			}
			/*else if (stat == "moverate") {
				this.characteristics.moverate = prompt("What would you like the character's moverate stat to be set to?", this.characteristics.moverate);
			}

			else if (stat == "hp") {
				this.characteristics.hp = prompt("What would you like the character's max HP to be set to?", this.characteristics.hp);
			}
			else if (stat == "sanity") {
				this.characteristics.sanity = prompt("What would you like the character's sanity to be set to?", this.characteristics.sanity);
			}*/
			else if (stat == "luck") {
				this.characteristics.luck = prompt("What would you like the character's total luck to be set to?", this.characteristics.luck);
			}
			/*else if (stat == "mp") {
				this.characteristics.mp = prompt("What would you like the character's max MP to be set to?", this.characteristics.mp);
			}*/

			this.updateSkills();
		},
		generateName: function(sex) {
			var forename = "";
			if (sex == "male") {
				forename = forenames.male[Math.floor(Math.random()*forenames.male.length)];
			} else {
				forename = forenames.female[Math.floor(Math.random()*forenames.female.length)];
			}

			var surname = surnames[Math.floor(Math.random()*surnames.length)];
			this.info.name = forename.concat(" ").concat(surname);
		},
		tt: function(type) {

			if (type == "clear") {
				this.settings.tooltip = "";
			}
			else if (type == "STR") {
				this.settings.tooltip = "To generate STR, roll 3d6 and times it by 5.";
			} 
			else if (type == "DEX") {
				this.settings.tooltip = "To generate DEX, roll 3d6 and times it by 5.";
			}  
			else if (type == "INT") {
				this.settings.tooltip = "To generate INT, roll 2d6+6 and times it by 5.";
			}  
			else if (type == "CON") {
				this.settings.tooltip = "To generate CON, roll 3d6 and times it by 5.";
			}  
			else if (type == "APP") {
				this.settings.tooltip = "To generate APP, roll 3d6 and times it by 5.";
			}  
			else if (type == "POW") {
				this.settings.tooltip = "To generate POW, roll 3d6 and times it by 5.";
			}  
			else if (type == "SIZ") {
				this.settings.tooltip = "To generate SIZ, roll 2d6+6 and times it by 5.";
			}  
			else if (type == "EDU") {
				this.settings.tooltip = "To generate EDU, roll 2d6+6 and times it by 5.";
			}  
			else if (type == "moverate") {
				this.settings.tooltip = "If both DEX and STR are bigger than SIZ, 9. If only one is, 8. Else 7.";
			}

			else if (type == "HP") {
				this.settings.tooltip = "(CON + SIZ)/10.";
			}
			else if (type == "SAN") {
				this.settings.tooltip = "Starts at POW.";
			}
			else if (type == "luck") {
				this.settings.tooltip = "To generate luck, roll 2d6+6 and times it by 5.";
			}
			else if (type == "MP") {
				this.settings.tooltip = "1/5th of POW.";
			}

			else if (type == "DB") {
				this.settings.tooltip = "\"for each +80 points or fraction thereof, +1D6 DB and +1 Build\". See a book for more info.";
			}
			else if (type == "build") {
				this.settings.tooltip = "\"for each +80 points or fraction thereof, +1D6 DB and +1 Build\". See a book for more info.";
			}
			else if (type == "dodge") {
				this.settings.tooltip = "1/2th of DEX.";
			}

			resize();
		},
		updateSkills: function() {
			occupation = occupations[this.info.occupation.toLowerCase()];
			ret = "<ul>";
			for (i = 0; i < occupation.skills.length; i++) {
				ret = ret.concat("<li><p>").concat(occupation.skills[i]).concat("</p></li>");
			}
			ret = ret.concat("</ul>");
			$("#skilllist").html(ret);
		}
	}
});
