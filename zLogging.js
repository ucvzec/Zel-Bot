const fs = require("fs");
const path = require("path");
const os = require("os");

class Logger{
	constructor(logFileName,dataTransform=(data)=>{return data;},defaultType="Misc"){
		this.logFileName=logFileName;
		this.dataTransform=dataTransform;
		//this.schema=schema;
		//if a type is not specified by the logger, then it will use the default
		this.defaultType=defaultType;
	}
	log(logData,type){
		fs.appendFile(`${path.resolve(__dirname)}/${this.logFileName}`,
			`${type?type:this.defaultType} [${getTimeNow()}]: ${
				this.dataTransform(logData)}${os.EOL}`,
			(error)=>{
				if(error){
					console.error(error);
				}else{
				}
			}
		);
	}
}
//returns in format "10/12/2018 20:59:34"
function getTimeNow(){
	return new Date().toLocaleString("en-US",{hour12:false}).replace(",","");
}
module.exports = {
	Logger:Logger,
	getTimeNow:getTimeNow,
}