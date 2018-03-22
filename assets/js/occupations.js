var occupations = {
	"": {
		OSP: [],
		skills: [],
		CR: []
	},
	"accountant": {
		OSP: [["EDU", 4]],
		skills: ["Accounting", "Law", "Library Use", "Listen", "Pursuade", "Spot Hidden", "any two other skills as personal or era specialties."],
		CR: [30, 70]
	},
	"acrobat": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Climb", "Dodge", "Jump", "Throw", "Spot Hidden", "Swim", "any two other skills as personal or era specialties."],
		CR: [9, 20]
	},
	"actor": {
		OSP: [["APP", 2]],
		skills: ["Art/Craft (Acting)", "Disguise", "Fighting", "History", "two interpersonal skills (Charm, Fast Talk, Intimidate, or Pursuade", "Psychology", "any one other skill as a personal or era specialty"],
		CR: [9, 40]
	},
	"stage actor": {
		OSP: [["APP", 2]],
		skills: ["Art/Craft (Acting)", "Disguise", "Fighting", "History", "two interpersonal skills (Charm, Fast Talk, Intimidate, or Pursuade", "Psychology", "any one other skill as a personal or era specialty"],
		CR: [9, 40]
	},
	"film star": {
		OSP: [["EDU", 2], ["APP", 2]],
		skills: ["Art/Craft   (Acting)", "Disguise", "Drive Auto", "two interpersonal  skills  (Charm,  Fast  Talk,  Intimidate, or  Persuade)",  "Psychology", "any two other skills as personal or era specialties (e.g. Ride or Fighting]"],
		CR: [20, 90]
	},
	"agency detective": {
		OSP: [["EDU", 2], ["STR", 2]],
		skills: [" One interpersonal skill (Charm, Fast Talk, Intimidate or Persuade)", "Fighting (Brawl)", "Firearms", "Law", "Library Use", "Psychology", "Stealth", "Tracl"],
		CR: [20, 45]
	},
	"alienist": {
		OSP: [["EDU", 4]],
		skills: ["Law", "Listen", "Medicine", "Other Language", "Psycho-analysis", "Psychology", "Science (Biology)", "Science (Chemistry)"],
		CR: [10, 60]
	},
	"animal trainer": {
		OSP: [["EDU", 2], ["APP", 2]],
		skills: ["Jump", "Listen", "Natural World", "Psychology", "Science (Zoology)", "Stealth", "Track", "Any oneother skill as a personal or era specialty."],
		CR: [10, 40]
	},
	"antiquarian": {
		OSP: [["EDU"], 4],
		skills: ["Appraise", "Art/Craft (any)", "History", "Library Use", "Other Language", "one interpersonal skill (Charm, Fast Talk, Intimidate, or Pursuade", "Spot Hidden", "any one other skill as a personal or era specialty"],
		CR: [30, 70]
	},
	"antique dealer": {
		OSP: [["EDU", 4]],
		skills: ["Accounting", "Appraise", "Drive Auto", "two interpersonal skills (Charm, Fast Talk, Intimidate, or Pursuade", "History", "Library Use", "Navigate"],
		CR: [30, 50]
	},
	"archaeologist": {
		OSP: [["EDU", 4]],
		skills: ["Appraise", "Archaeology", "History", "Other Language (any)", "Library Use", "Spot Hidden", "Mechanical Repair", "Navigate", "Science (any)"],
		CR: [10, 40]
	},
	"archeologist": {
		OSP: [["EDU", 4]],
		skills: ["Appraise", "Archaeology", "History", "Other Language (any)", "Library Use", "Spot Hidden", "Mechanical Repair", "Navigate", "Science (any)"],
		CR: [10, 40]
	},
	"architect": {
		OSP: [["EDU", 4]],
		skills: ["Accounting", "Art/Craft (Technical Drawing)", "Law", "Own Language", "Computer Use or Library Use", "Persuade", "Psychology", "Science (Mathematics)"],
		CR: [30, 70]
	},
	"artist": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Art/Craft (any)", "History or Natural World", "one interpersonal skill (Charm, Fast Talk, Intimidate or Pursuade", "Other Language", "Psychology", "Spot Hidden", "any two other skills as personal or era specialties"],
		CR: [9, 50]
	},
	"asylum attendant": {
		OSP: [["EDU", 2], ["STR", 2]],
		skills: ["Dodge", "Fighting (Brawl)", "First Aid", "two interpersonal skills (Charm, Fast Talk, Intimidate, or Pursuade)", "Listen", "Psychology", "Stealth"],
		CR: [8, 20]
	},
	"athlete": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Climb", "Jump", "Fighting (Brawl)", "Ride", "one interpersonal skill (Charm, Fast Talk, Intimidate, or Pursuade)", "Swim", "Thrown", "any one other skill as a personal or era specialty"],
		CR: [9, 70]
	},
	"author": {
		OSP: [["EDU", 4]],
		skills: ["Art (Literature)", "History", "Library Use", "Natural World or Occult", "Other Language", "Own Language", "Psychology", "any one other skill as a personal or era specialty"],
		CR: [9, 30]
	},
	"bartender": {
		OSP: [["EDU", 2], ["APP", 2]],
		skills: ["Accounting", "two interpersonal skills (Charm, Fast Talk, Intimidate or Pursuade)", "Fighting (Brawl)", "Listen", "Psychology", "Spot Hidden", "any one other skill as a personal or era specialty"],
		CR: [8, 25]
	},
	"big game hunter": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Firearms", "Listen or Spot Hidden", "Natural World", "Navigate", "Other Language or Survival (any)", "Science (Biology or Botany)", "Stealth", "Track"],
		CR: [20, 50]
	},
	"book dealer": {
		OSP: [["EDU", 4]],
		skills: ["Accounting", "Appraise", "Drive Auto", "History", "Library Use", "Own Language", "Other Language", "one interpersonal skill (Charm, Fast Talk, Intimidate, or Pursuade)"],
		CR: [20, 40]
	},
	"bounty hunter": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Drive Auto", "Electronic or Electrical Repair", "Fighting or Firearms", "one interpersonal skill (Fast Talk, Charm, Intimidate, or Pursuade)", "Law", "Psychology", "Track", "Stealth"],
		CR: [9, 30]
	},
	"boxer": {
		OSP: [["EDU", 2], ["STR", 2]],
		skills: ["Dodge", "Fighting (Brawl)", "Intimidate", "Jump", "Psychology", "Spot Hidden", "ant two other skills as personal or era specialties"],
		CR: [9, 60]
	},
	"wrestler": {
		OSP: [["EDU", 2], ["STR", 2]],
		skills: ["Dodge", "Fighting (Brawl)", "Intimidate", "Jump", "Psychology", "Spot Hidden", "ant two other skills as personal or era specialties"],
		CR: [9, 60]
	},
	"butler": {
		OSP: [["EDU", 4]],
		skills: ["Accounting or Appraise", "Art/Craft (any)", "First Aid", "Listen", "Other Language", "Psychology", "Spot Hidden", "any two other skills as personal or era specialties"],
		CR: [9, 40]
	},
	"valet": {
		OSP: [["EDU", 4]],
		skills: ["Accounting or Appraise", "Art/Craft (any)", "First Aid", "Listen", "Other Language", "Psychology", "Spot Hidden", "any two other skills as personal or era specialties"],
		CR: [9, 40]
	},
	"maid": {
		OSP: [["EDU", 4]],
		skills: ["Accounting or Appraise", "Art/Craft (any)", "First Aid", "Listen", "Other Language", "Psychology", "Spot Hidden", "any two other skills as personal or era specialties"],
		CR: [9, 40]
	},
	"clergy": {
		OSP: [["EDU", 4]],
		skills: ["Accounting", "History", "Library Use", "Listen", "Other Language", "one interpersonal skill (Charm Fast Talk, Intimidate, or Pursuade)", "Psychology", "any one other skill"],
		CR: [9, 60]
	},
	"clergyman": {
		OSP: [["EDU", 4]],
		skills: ["Accounting", "History", "Library Use", "Listen", "Other Language", "one interpersonal skill (Charm Fast Talk, Intimidate, or Pursuade)", "Psychology", "any one other skill"],
		CR: [9, 60]
	},
	"clergyperson": {
		OSP: [["EDU", 4]],
		skills: ["Accounting", "History", "Library Use", "Listen", "Other Language", "one interpersonal skill (Charm Fast Talk, Intimidate, or Pursuade)", "Psychology", "any one other skill"],
		CR: [9, 60]
	},
	"member of the clergy": {
		OSP: [["EDU", 4]],
		skills: ["Accounting", "History", "Library Use", "Listen", "Other Language", "one interpersonal skill (Charm Fast Talk, Intimidate, or Pursuade)", "Psychology", "any one other skill"],
		CR: [9, 60]
	},
	"cowboy": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Dodge", "Fighting or Firearms", "First Aid or Natural World", "Jump", "Ride", "Survival (any)", "Throw", "Track"],
		CR: [9, 20]
	},
	"cowgirl": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Dodge", "Fighting or Firearms", "First Aid or Natural World", "Jump", "Ride", "Survival (any)", "Throw", "Track"],
		CR: [9, 20]
	},
	"craftsperson": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Accounting", "Art/Craft (any two)", "Mechanical Repair", "Natural World", "Spot Hidden", "any two other skills as personal specialties"],
		CR: [10, 40]
	},
	"assassin": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Disguise", "Electrical Repair", "Fighting", "Firearms", "Locksmith", "Mechanical Repair", "Stealth", "Psychology"],
		CR: [30, 60]
	},
	"bank robber": {
		OSP: [["EDU", 2], ["STR", 2]],
		skills: ["Drive Auto", "Electric or Mechanical Repair", "Fighting", "Intimidate", "Locksmith", "Operate Heavy Machinery", "any one other skill as personal or era specialty"],
		CR: [5, 75]
	},
	"bootlegger": {
		OSP: [["EDU", 2], ["STR", 2]],
		skills: ["Drive Auto", "Fighting", "Firearms", "two interpersonal skills (Charm, Fast Talk, Intimidate, or Persuade)", "Psychology", "Stealth", "Spot Hidden"],
		CR: [5, 30]
	},
	"thug": {
		OSP: [["EDU", 2], ["STR", 2]],
		skills: ["Drive Auto", "Fighting", "Firearms", "two interpersonal skills (Charm, Fast Talk, Intimidate, or Persuade)", "Psychology", "Stealth", "Spot Hidden"],
		CR: [5, 30]
	},
	"burgular": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Appraise", "Climb", "Electrical or Mechanical Repair", "Listen", "Locksmith", "Sleight of Hand", "Stealth", "Spot Hidden"],
		CR: [5, 40]
	},
	"conman": {
		OSP: [["EDU", 2], ["APP", 2]],
		skills: ["Appraise", "Art/Craft (Acting)", "Law or Other Language", "Listen", "two interpersonal skills (Charm, Fast Talk, Intimidate, or Pursuade)", "Psychology", "Sleight of Hand"],
		CR: [10, 65]
	},
	"criminal": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Art/Craft (Acting) or Disguise", "Appraise", "one interpersonal skill (Charm, Fast Talk, or Intimidate", "Fighting or Firearms", "Locksmith or Mechanical Repair", "Stealth", "Psychology", "Spot Hidden"],
		CR: [5, 65]
	},
	"gun moll": {
		OSP: [["EDU", 2], ["APP", 2]],
		skills: ["Art/Craft (any)", "two interpersonal skills (Charm, Fast Talk, Intimidate, or Pursuade)", "Fighting (Brawl) or Firearms (Hadngun)", "Drive Auto", "Listen", "Stealth", "any one other skill as personal or era specialty"],
		CR: [10, 80]
	},
	"fence": {
		OSP: [["EDU", 2], ["APP", 2]],
		skills: ["Accounting", "Appraise", "Art/Craft (Forgery)", "History", "one interpersonal skill (Charm, Fast Talk, Intimidate, Persuade", "Library use", "Spot Hidden", "any one other skill"],
		CR: [20, 40]
	},
	"forger": {
		OSP: [["EDU", 4]],
		skills: ["Accounting", "Appraise", "Art/Craft (Forgery)", "History", "Library Use", "Spot Hidden", "any one other skill"],
		CR: [20, 60]
	},
	"counterfeiter": {
		OSP: [["EDU", 4]],
		skills: ["Accounting", "Appraise", "Art/Craft (Forgery)", "History", "Library Use", "Spot Hidden", "any one other skill"],
		CR: [20, 60]
	},
	"smuggler": {
		OSP: [["EDU", 2], ["APP", 2]],
		skills: ["Firearms", "Listen", "Navigate", "or interpersonal skill (Charm, Fast Talk, Intimidate, or Persuade)", "Drive Auto or Pilot (Aircraft of Boat)", "Psychology", "Sleight of Hand", "Spot Hidden"],
		CR: [20, 60]
	},
	"street punk": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Climb", "one interpersonal skill (Charm, Fast Talk, Intimidate, or Pursuade)", "Fighting", "Firearms", "Jump", "Sleight of Hand", "Thrown"],
		CR: [3, 10]
	},
	"cult leader": {
		OSP: [["EDU", 2], ["APP", 2]],
		skills: ["Accounting", "two interpersonal skills (Charm, Fast Talk, Intimidate, or Persuade", "Occult", "Psychology", "Spot Hidden", "any two other skills as specialties"],
		CR: [30, 60]
	},
	"designer": {
		OSP: [["EDU", 4]],
		skills: ["Accounting", "Art (Photography)", "Art/craft (any)", "Computer Use or Library Use", "Mechanical Repair", "Psychology", "Spot Hidden", "any one other skill as personal specialty"],
		CR: [20, 60]
	},
	"dilettante": {
		OSP: [["EDU", 2], ["APP", 2]],
		skills: ["Art/Craft (Any)", "Firearms", "Other Language", "Ride", "one interpersonal skill (Charm, Fast Talk, Intimidate, or Persuade)", "any three other skills as personal or era specialties"],
		CR: [50, 99]
	},
	"diver": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Diving", "First Aid", "Mechanical Repair", "Pilot (Boat)", "Science (Biology)", "Spot Hidden", "Swim", "any one other skill as personal or era specialty"],
		CR: [9, 30]
	},
	"doctor of medicine": {
		OSP: [["EDU", 4]],
		skills: ["First Aid", "Medicine", "Other Language (Latin)", "Psychology", "Science (Biology and Pharmacy)", "any two other skills as academic or personal specialties"],
		CR: [30, 80]
	},
	"drifter": {
		OSP: [["EDU", 2], ["APP", 2]],
		skills: ["Climb", "Jump", "Listen", "Navigate", "one interpersonal skill (Charm, Fast Talk, Intimidate, or Pursuade)", "Stealth", "any two other skills as personal or era specialties"],
		CR: [0, 5]
	},
	"chaffeur": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Drive Auto", "two interpersonal skills (Charm, Fast Talk, Intimidate, or Persuade)", "Listen", "Mechanical Repair", "Navigate", "Spot Hidden", "any one other skill as a personal or era specialty"],
		CR: [10, 40]
	},
	"driver": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Accounting", "Drive Auto", "Listen", "one interpersonal skill (Charm, Fast Talk, Intimidate, or Persuade)", "Mechanical Repair", "Navigate", "Psychology", "any one other skill as personal or era specialty."],
		CR: [9, 20]
	},
	"taxi driver": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: [],
		CR: [9, 30]
	},
	"editor": {
		OSP: [["EDU", 4]],
		skills: ["Accounting", "History", "Own Language", "two interpersonal skills (Charm, Fast Talk, Intimidate, or Persuade)", "Psychology", "Spot Hidden", "any one other skill as personal or era specialty"],
		CR: [10, 30]
	},
	"elected official": {
		OSP: [["EDU", 2], ["APP", 2]],
		skills: ["Charm", "History", "Intimidate", "Fast Talk", "Listen", "Own Language", "Persuade", "Psychology"],
		CR: [50, 90]
	},
	"engineer": {
		OSP: [["EDU", 4]],
		skills: ["Art/Craft (Technical Drawing)", "Electrical Repair", "Library Use", "Mecahnical Repair", "Operate Heavy Machinery", "Science (Engineering or Physics)", "any one other skill as personal or era specialty"],
		CR: [30, 60]
	},
	"entertainer": {
		OSP: [["EDU", 2], ["APP", 2]],
		skills: ["Art/Craft (Any)", "Disguise", "two interpersonal skills (Charm, Fast Talk, Intimidate, or Persuade)", "Listen", "Psychology", "any two other skills as personal or era specialties"],
		CR: [9, 70]
	},
	"explorer": {
		OSP: [["EDU", 2], ["APP", 2]],
		skills: ["Climb or Swim", "Firearms", "History", "Jump", "Natural World", "Navigate", "Other Language", "Survival"],
		CR: [55, 80]
	},
	"farmer": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Art/Craft (Farming)", "Drive Auto or Drive Wagon", "one interpersonal skill (Charm, Fast Talk, Intimidate, or Pursuade)", "Mechanical Repair", "Natural World", "Operate Heavy Machinery", "Track", "any one other skill as a personal or era specialty"],
		CR: [9, 30]
	},
	"federal agent": {
		OSP: [["EDU", 4]],
		skills: ["Drive Auto", "Fighting (Brawl)", "Firearms", "Law", "Persuade", "Stealth", "Spot Hidden", "any one other skill as a personal or era specialty"],
		CR: [20, 40]
	},
	"firefighter": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Climb", "Dodge", "Drive Auto", "First Aid", "Jump", "Mechanical Repair", "Operate Heavy Machinery", "Throw"],
		CR: [9, 30]
	},
	"foreign correspondent": {
		OSP: [["EDU", 4]],
		skills: ["History", "Other Language", "Own Language", "Listen", "two interpersonal skills (Charm, Fast Talk, Intimidate, Persuade)", "Psychology", "any one other skill as a personal or era specialty"],
		CR: [10, 40]
	},
	"forensic surgeon": {
		OSP: [["EDU", 4]],
		skills: ["Other Language (Latin)", "Library Use", "Medicine", "Persuade", "Science (Biology)", "Science (Forensics)", "Science (Pharmacy)", "Spot Hidden"],
		CR: [40, 60]
	},
	"gambler": {
		OSP: [["EDU", 2], ["APP", 2]],
		skills: ["Acounting", "Art/Craft (Acting)", "two interpersonal skills (Charm, Fast Talk, Intimidate, or Persuade)", "Listen", "Psychology", "Sleight of Hand", "Spot Hidden"],
		CR: [8, 50]
	},
	"gangster boss": {
		OSP: [["EDU", 2], ["APP", 2]],
		skills: ["Fighting", "Firearms", "Law", "Listen", "two interpersonal skills (Charm, Fast Talk, Intimidate, or Persuade)", "Psychology", "Spot Hidden"],
		CR: [60, 95]
	},
	"gangster underling": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Drive Auto", "Fighting", "Firearms", "two interpersonal skills (Charm, Fast Talk, Intimidate, or Persuade)", "Psychology", "any two other skills as personal or era specialties"],
		CR: [9, 20]
	},
	"gangster": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Drive Auto", "Fighting", "Firearms", "two interpersonal skills (Charm, Fast Talk, Intimidate, or Persuade)", "Psychology", "any two other skills as personal or era specialties"],
		CR: [9, 20]
	},
	"gentleman/lady": {
		OSP: [["EDU", 2], ["APP", 2]],
		skills: ["Art/Craft (Any)", "two interpersonal skills (Charm, Fast Talk, Intimidate, or Persuade", "Firearms (Rifle/Shotgun)", "History", "Other Language (Any)", "Navigate", "Ride"],
		CR: [40, 90]
	},
	"gentleman": {
		OSP: [["EDU", 2], ["APP", 2]],
		skills: ["Art/Craft (Any)", "two interpersonal skills (Charm, Fast Talk, Intimidate, or Persuade", "Firearms (Rifle/Shotgun)", "History", "Other Language (Any)", "Navigate", "Ride"],
		CR: [40, 90]
	},
	"lady": {
		OSP: [["EDU", 2], ["APP", 2]],
		skills: ["Art/Craft (Any)", "two interpersonal skills (Charm, Fast Talk, Intimidate, or Persuade", "Firearms (Rifle/Shotgun)", "History", "Other Language (Any)", "Navigate", "Ride"],
		CR: [40, 90]
	},
	"hobo": {
		OSP: [["EDU", 2], ["APP", 2]],
		skills: ["Art/Craft (Any)", "Climb", "Jump", "Listen", "Locksmith or Sleight of Hand", "Navigate", "Stealth", "any one other skill as a personal era specialty"],
		CR: [0, 5]
	},
	"hospital orderly": {
		OSP: [["EDU", 2], ["STR", 2]],
		skills: ["Electrical Repair", "one interpersonal skill (Charm, Fast Talk, Intimidate, or Persuade)", "Fighting (Brawl)", "First Aid", "Listen", "Mechanical Repair", "Psychology", "Steal"],
		CR: [6, 15]
	},
	"investigative journalist": {
		OSP: [["EDU", 4]],
		skills: ["Art/Craft (Art or Photography)", "one interpersonal skill (Charm, Fast Talk, Intimidate, Persuade)", "History", "Library Use", "Own Language", "Psychology", "any two other skills as personal or era specialties"],
		CR: [9, 30]
	},
	"journalist": {
		OSP: [["EDU", 4]],
		skills: ["Art/Craft (Art or Photography)", "one interpersonal skill (Charm, Fast Talk, Intimidate, Persuade)", "History", "Library Use", "Own Language", "Psychology", "any two other skills as personal or era specialties"],
		CR: [9, 30]
	},
	"reporter": {
		OSP: [["EDU", 4]],
		skills: ["Art/Craft (Acting)", "History", "Listen", "Own Language", "one interpersonal skill (Charm, Fast Talk, Intimidate, or Persuade)", "Psychology", "Stealth", "Spot Hidden"],
		CR: [9, 30]
	},
	"judge": {
		OSP: [["EDU", 4]],
		skills: ["History", "Intimidate", "Law", "Library Use", "Listen", "Own Language", "Persuade", "Psychology"],
		CR: [50, 80]
	},
	"laboratory assistant": {
		OSP: [["EDU", 4]],
		skills: ["Computer Use or Library Use", "Electrical Repair", "Other Language", "Science (Chemistry and two others)", "Spot Hidden", "any one skill as a personal specialty"],
		CR: [10, 30]
	},
	"labourer": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Drive Auto", "Electrical Repair", "Fighting", "First Aid", "Operate Heavy Machinery", "Thrown", "any one other skill as a personal or era specialty"],
		CR: [9, 30]
	},
	"labourer, unskilled": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Drive Auto", "Electrical Repair", "Fighting", "First Aid", "Operate Heavy Machinery", "Thrown", "any one other skill as a personal or era specialty"],
		CR: [9, 30]
	},
	"unskilled labourer": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Drive Auto", "Electrical Repair", "Fighting", "First Aid", "Operate Heavy Machinery", "Thrown", "any one other skill as a personal or era specialty"],
		CR: [9, 30]
	},
	"laborer": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Drive Auto", "Electrical Repair", "Fighting", "First Aid", "Operate Heavy Machinery", "Thrown", "any one other skill as a personal or era specialty"],
		CR: [9, 30]
	},
	"laborer, unskilled": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Drive Auto", "Electrical Repair", "Fighting", "First Aid", "Operate Heavy Machinery", "Thrown", "any one other skill as a personal or era specialty"],
		CR: [9, 30]
	},
	"unskilled laborer": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Drive Auto", "Electrical Repair", "Fighting", "First Aid", "Operate Heavy Machinery", "Thrown", "any one other skill as a personal or era specialty"],
		CR: [9, 30]
	},
	"lumberjack": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Climb", "Dodge", "Fighting (Chainsaw)", "First Aid", "Jump", "Mechanical Repair", "Natural World or Science (Biology or Botany)", "Throw"],
		CR: []
	},
	"miner": {
		OSP: [["EDU", 2], ["DEX", 2]],
		skills: ["Climb", "Geology", "Jump", "Mechancial Repair", "Operate Heavy Machinery", "Stealth", "Machinery", "Stealth", "Spot Hidden", "any one other skill as a personal or era specialty"],
		CR: [9, 30]
	},
	"lawyer": {
		OSP: [["EDU", 4]],
		skills: ["Acounting", "Law", "Library Use", "two interpersonal skills (Charm, Fast Talk, Intimidate, or Persuade)", "Psychology", "any two other skills"],
		CR: [30, 80]
	},
	"librarian": {
		OSP: [["EDU", 4]],
		skills: ["Accounting", "Library Use", "Other Language", "Own Language", "any four other skills as personal specialties or specialist reading topics"],
		CR: [9, 35]
	},
	"mechanic": {
		OSP: [["EDU", 4]],
		skills: ["Art/Craft (Carpentry, Welding, &c", "Climb", "Drive Auto", "Electical Repair", "Mechanical Repair", "Operate Heavy Machinery", "any two other skills as personal, era or trade specialties"],
		CR: [9, 40]
	},
	"skilled trade": {
		OSP: [["EDU", 4]],
		skills: ["Art/Craft (Carpentry, Welding, &c", "Climb", "Drive Auto", "Electical Repair", "Mechanical Repair", "Operate Heavy Machinery", "any two other skills as personal, era or trade specialties"],
		CR: [9, 40]
	},
}