# Zel-Bot
Zel Bot is a bot written by Michael Kovar that leverages the Discordjs library to offer a dynamic Discord bot.

This bot was written primarily to meet the needs of Michael and his friend's private discord server, during their competition to make the best discord bot! Most of the commands that are available through the bot are prefixed with "!", excluding a couple exceptions.

In addition to having functionality that allows for discord users to issue different commands to the bot, Zel Bot also offers a interactive developer environment. Through the use of a command-line interface tool created using Nodejs, developers of Zel Bot can push changes to the system and the commands supported while the bot is running - with little to no interruption to the user. Zel Bot also supports a dynamic whitelist and blacklist system for different users and channels. 

A compliation of the current commands available to discord users of Zel Bot has are: 
  !time                                         -  Displays the local time of Zel Bot's main server, located in Lincoln, Nebraska.
  !timez [timeZone]                             -  Displays the local time of any timezone specified by common webstandards.
  !id                                           -  Displays the user who issues the command's username and userid.
  !quote [(optional)#]                          -  Displays a quote from the quoteList.json file, which currently consists of quote                                                          compiled by Michael and Friends from their personantics.
  !avatarURL                                    -  Displays the current user's avatar link.
  !whoami                                       -  Displays the user's username and userid (I forgot about the !id command :D )

In addition to the commands mentioned above, Zel Bot also has a TicTacToe game that users can play, that is exclusive for each channel:
  !tictac start [player1UserId] [player2UserId] -  Starts a new TicTacToe game between the two users, that will occur in the channel the                                                      command is issued from.
  !tictac place [x coordinate],[y coordinate]   -  Attempts to place the user's avatar on the spot specified by the coordinates, with
                                                   the bottom left corner being 0,0. 
  !tictac reset                                 -  Resets the current TicTacToe game.
  !tictac show                                  -  Displays the current gameboard state and reminds the users whose turn it is.
  
The commands currently available to developers in the command-line interface tool are:
  !eval [code]                                  -  Leverages the eval() function to allow the authorized developer to run code live,                                                          allowing for easier deployment, testing, and more fun stuff :D
  !reload [configurationFileType] [fileName]    -  Reloads a configuration file and uses the data in the specified file as the new data                                                      for that configuration data variable. A few examples are "responses" and "quoteList".
  !sendMsg [channelIdentifier] [message]        -  Allows the developer to send messages as Zel Bot to any specified channel.
  !clear                                        -  Clears the developer console.
  
  
