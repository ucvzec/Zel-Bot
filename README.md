# Zel-Bot
Zel Bot is a bot written by Michael Kovar that leverages the Discordjs library to offer a dynamic Discord bot.
<br/><br/>
This bot was written primarily to meet the needs of Michael and his friend's private discord server, during their competition to make the best discord bot! Most of the commands that are available through the bot are prefixed with "!", excluding a couple exceptions.
<br/><br/>
In addition to having functionality that allows for discord users to issue different commands to the bot, Zel Bot also offers a interactive developer environment. Through the use of a command-line interface tool created using Nodejs, developers of Zel Bot can push changes to the system and the commands supported while the bot is running - with little to no interruption to the user. Zel Bot also supports a dynamic whitelist and blacklist system for different users and channels. 
<br/><br/>
A compliation of the current commands available to discord users of Zel Bot has are:<br/>
  !time                                         -  Displays the local time of Zel Bot's main server, located in Lincoln, Nebraska.<br/>
  !timez [timeZone]                             -  Displays the local time of any timezone specified by common webstandards.<br/>
  !id                                           -  Displays the user who issues the command's username and userid.<br/>
  !quote [(optional)#]                          -  Displays a quote from the quoteList.json file, which currently consists of quote<br/>                                                      compiled by Michael and Friends from their personantics.<br/>
  !avatarURL                                    -  Displays the current user's avatar link.<br/>
  !whoami                                       -  Displays the user's username and userid (I forgot about the !id command :D )<br/>

In addition to the commands mentioned above, Zel Bot also has a TicTacToe game that users can play, that is exclusive for each channel:<br/>
  !tictac start [player1UserId] [player2UserId] -  Starts a new TicTacToe game between the two users, that will occur in the channel the <br/>                                                     command is issued from.
  !tictac place [x coordinate],[y coordinate]   -  Attempts to place the user's avatar on the spot specified by the coordinates, with<br/>
                                                   the bottom left corner being 0,0. <br/>
  !tictac reset                                 -  Resets the current TicTacToe game.<br/>
  !tictac show                                  -  Displays the current gameboard state and reminds the users whose turn it is.<br/>
  <br/>
The commands currently available to developers in the command-line interface tool are:<br/>
  !eval [code]                                  -  Leverages the eval() function to allow the authorized developer to run code live,     <br/>                                                     allowing for easier deployment, testing, and more fun stuff :D<br/>
  !reload [configurationFileType] [fileName]    -  Reloads a configuration file and uses the data in the specified file as the new data  <br/>                                                    for that configuration data variable. A few examples are "responses" and <br/>"quoteList".
  !sendMsg [channelIdentifier] [message]        -  Allows the developer to send messages as Zel Bot to any specified channel.<br/>
  !clear                                        -  Clears the developer console.<br/>
  
  
