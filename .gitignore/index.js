const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("MoonBot V0.0.1 !help pour les commandes d'helps")
    console.log("Le bot a bien été connecté !")
});

bot.login("NjcxNDI5MDg0MzcwMzA1MDQ0.Xj6n4Q.7jlCQaUq3M2vzCLzLz5O_lweIwU");
