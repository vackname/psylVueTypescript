﻿let catchContainerNameStr=" image: ";var runSys=false;var dockerVersion="2.0.0.0";function sleep(ms){return new Promise(resolve=>{setTimeout(resolve,ms)})}var colors={empty:"[0m",bright:"[1m",grey:"[2m",italic:"[3m",underline:"[4m",reverse:"[7m",hidden:"[8m",black:"[30m",red:"[31m",green:"[32m",yellow:"[33m",blue:"[34m",magenta:"[35m",cyan:"[36m",white:"[37m",blackBG:"[40m",redBG:"[41m",greenBG:"[42m",yellowBG:"[43m",blueBG:"[44m",magentaBG:"[45m",cyanBG:"[46m",whiteBG:"[47m"};var dockerForYml={command:"",debug:"",web:"",web_port:""};function catchYml(){if(dockerForYml.command==""||dockerForYml.command==null||dockerForYml.command==undefined){var fs=require("fs");var containerName="";var containerNameDebug="";var containerNameWeb="";var containerPort="";try{let fileContents=fs.readFileSync("./docker-compose.yml","utf8");containerName=fileContents.split("container_name: ")[1].split("\n")[0].replace(/\r/g,"").replace(/ /g,"");containerNameDebug=fileContents.split(catchContainerNameStr)[2].split("container_name: ")[1].split("\n")[0].replace(/\r/g,"").replace(/ /g,"");containerNameWeb=fileContents.split(catchContainerNameStr)[3].split("container_name: ")[1].split("\n")[0].replace(/\r/g,"").replace(/ /g,"");containerPort=fileContents.split(catchContainerNameStr)[3].split("ports:")[1].split(":80")[0].split("- ")[1]}catch(e){console.log(colors.empty+colors.red+e)}dockerForYml.command=containerName;dockerForYml.debug=containerNameDebug;dockerForYml.web=containerNameWeb;dockerForYml.web_port=containerPort}return dockerForYml}let saveCmmand="";function toCommand(arg){setTimeout(function(){saveCmmand=""},3e3);if(arg.length>2){var anws="";var toOder=[];if(arg[1]=="npm"||arg[1]=="npx"||arg[1]=="node"){anws=arg[1];arg.forEach(function(an,nu){if(nu>0){toOder.push(an)}})}else{anws=arg[2];arg.forEach(function(an,nu){if(nu>1){toOder.push(an)}})}if(anws=="-h"){var helpMes=[" psyl ci-cd:            auto run to git version for refresh(git pull & restart web)"," psyl docker:           install or reset runing for process"," psyl storage [bundle file Name]:","@                         bundle [net core project] location file folder name","@"," psyl node-ev:          node npm install typescript bundle & scss/sass->css bundle"," psyl remove node-ev:   node npm unstall typescript bundle & scss/sass->css bundle"," psyl project [prject name]:","@                         create project","@"," psyl view [prject name]<[view name]:","@                         create view","@"," psyl document [prject name]<[document name]:","@                         create document","@"," psyl tsc [prject name]<[typeScript Model name]:","@                         create typeScript Model","@","psyl -p [port/location path]:","@                         set composer for 'Path String' Or 'localhost websit port' (All)","@","psyl tscdb [password]:","@                         Host DB to TB schema(/src/config/InterfaceJsonHost.json","@                         ex [{'host':'domain.com','port':'9888','Scheme':'https'}]","@","psyl stop -d  :        stop debug model(close=[key.x + control])","psyl -d  :             debug model(close=[key.x + control])","psyl web :             stop run web serve","psyl stop web :        stop stop web serve","psyl -b run   :        composer build project (release)","psyl -rp [project name]:","@                         remove project","@","psyl -rv [prject name]<[view name]:","@                         remove view","@","psyl -rt [project name]<[document path]:","@                         remove typescript model","@","psyl -r [prject name]<[document path]:","@                         remove document","@","psyl -s :              now set detail","psyl -a :              author detail","psyl -v :              version message","psyl core -i [path]:   set for config release path ","psyl -c [path]:        vue.js & [psyl core js] model","psyl -b [project]:     (supported css js html)","psyl -i [set project name] [set release path]:","@                         create build bundler package.json","@","npm [option]:          support node/npm/npx","npx [option]:          support node/npm/npx"];var countRow=1;helpMes.forEach(function(val,nu){if(val.indexOf("@")==-1){console.log(colors.empty+colors.grey+countRow+"."+colors.empty+colors.blue+val);countRow++}else{console.log(colors.empty+colors.blue+val.substring(1))}});console.log("");console.log("");console.log(colors.empty+colors.yellow+"----- create Date: 2019.11.09 "+colors.empty+colors.cyan+`docker v${dockerVersion}`+colors.empty+colors.yellow+"-----");console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white)}else if(anws=="ci-cd"){var cp=require("child_process");cp.exec(`docker update --restart=always ${catchYml().web}`,function(error,stdout,stderr){console.log(colors.empty+colors.yellow+"reset web --restart=always"+colors.empty+colors.white);cp.exec(`docker restart ${catchYml().web}`,function(error,stdout,stderr){console.log(colors.empty+colors.yellow+"start web"+colors.empty+colors.white);console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white)})});async function runCI_CD(){var gitVersion=cp.spawn("git",["pull"]);var restartWebFlag=false;gitVersion.stdout.on("data",data=>{console.log(colors.empty+colors.yellow+"log->"+colors.empty+colors.grey+data);if(data.indexOf("lready up to date")==-1){restartWebFlag=true}});gitVersion.stderr.on("data",data=>{console.log(colors.empty+colors.cyan+"runing->"+colors.empty+colors.grey+data)});gitVersion.on("close",(code,signal)=>{if(restartWebFlag){console.log(colors.empty+colors.yellow+"listen restart web"+colors.empty+colors.white);cp.exec(`docker restart ${catchYml().web}`,function(error,stdout,stderr){console.log(colors.empty+colors.yellow+"start web"+colors.empty+colors.white);console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white)})}});gitVersion.on("error",err=>{console.log(colors.empty+colors.red+"error->"+colors.empty+colors.grey+error);console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white)});function formattedDateTime(date){const y=date.getFullYear();const m=("0"+(date.getMonth()+1)).slice(-2);const d=("0"+date.getDate()).slice(-2);const h=("0"+date.getHours()).slice(-2);const mi=("0"+date.getMinutes()).slice(-2);const s=("0"+date.getSeconds()).slice(-2);const ms=date.getMilliseconds();return y+"-"+m+"-"+d+" "+h+":"+mi+":"+s+"."+ms}const date=new Date;const currentTime=formattedDateTime(date);console.log(colors.empty+colors.grey+currentTime+"...");await sleep(3e3);runCI_CD()}runCI_CD()}else if(anws=="docker"){var cp=require("child_process");var dockerRunPsyl=cp.spawn("docker-compose",["stop"],{stdio:"inherit"});dockerRunPsyl.on("close",(code,signal)=>{console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white);var dockerRunPsyl1=cp.spawn("docker-compose",["rm","-f"],{stdio:"inherit"});dockerRunPsyl1.on("close",(code,signal)=>{console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white);var dockerRunPsyl2=cp.spawn("docker-compose",["--compatibility","up","-d"],{stdio:"inherit"});dockerRunPsyl2.on("close",(code,signal)=>{var counTdown=0;async function runInit(){await sleep(300);process.stdout.clearLine();process.stdout.cursorTo(0);var toChar="";switch(counTdown){case 0:toChar="";break;case 1:toChar=".";break;case 2:toChar=".●";break;case 3:toChar=".◎●";break}process.stdout.write(colors.empty+colors.blue+" ⠿ Init      debug model        await"+colors.empty+colors.green+toChar);if(counTdown>=0){if(counTdown<3){counTdown++}else{counTdown=0}runInit()}else{process.stdout.clearLine();process.stdout.cursorTo(0)}}runInit();cp.exec(`docker stop ${catchYml().debug}`,function(error,stdout,stderr){counTdown=-1;process.stdout.clearLine();process.stdout.cursorTo(0);console.log(colors.empty+colors.blue+" ⠿ Complete  for debug model    Stopped"+colors.empty+colors.white);cp.exec(`docker stop ${catchYml().web}`,function(error,stdout,stderr){process.stdout.clearLine();process.stdout.cursorTo(0);console.log(colors.empty+colors.blue+" ⠿ Complete  for web            Stopped"+colors.empty+colors.white);console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white)})})});dockerRunPsyl2.on("error",err=>{console.log(colors.empty+colors.red+error);console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white)})});dockerRunPsyl1.on("error",err=>{console.log(colors.empty+colors.red+error);console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white)})});dockerRunPsyl.on("error",err=>{console.log(colors.empty+colors.red+error);console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white)})}else if(anws=="web"||anws=="stop"&&(toOder.length>=2?toOder[1]=="web":false)){var toOrder=anws=="stop"&&(toOder.length>=2?toOder[1]=="web":false)?"stop":"start";var cp=require("child_process");cp.exec(`docker ${toOrder} ${catchYml().web}`,function(error,stdout,stderr){console.log(colors.grey+colors.yellow+toOrder+(stdout!=""?colors.empty+colors.green+" OK":colors.empty+colors.red+" Fail")+"->"+colors.empty+colors.grey+stdout);console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white)});if(toOrder=="stop"){console.log(colors.grey+colors.yellow+"close web....")}else{console.log(colors.grey+colors.yellow+`runing web (http://127.0.0.1:${catchYml().web_port})....`)}console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white)}else if(anws=="-d"||anws=="stop"&&(toOder.length>=2?toOder[1]=="-d":false)){var cp=require("child_process");var toOrder=anws=="stop"&&(toOder.length>=2?toOder[1]=="-d":false)?"stop":"start";cp.exec(`docker ${toOrder} ${catchYml().web}`,function(error,stdout,stderr){console.log(colors.grey+colors.yellow+toOrder+(stdout!=""?colors.empty+colors.green+" OK":colors.empty+colors.red+" Fail")+"->"+colors.empty+colors.grey+stdout);if(toOrder=="start"){console.log(colors.empty+colors.cyan+`runing web (http://127.0.0.1:${catchYml().web_port})....`);console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white);var counTdown=0;async function runInit(){process.stdout.clearLine();process.stdout.cursorTo(0);var toChar="";switch(counTdown){case 0:toChar="";break;case 1:toChar=".";break;case 2:toChar=".●";break;case 3:toChar=".◎●";break}process.stdout.write(colors.empty+colors.grey+"init debug model...."+colors.empty+colors.green+toChar);await sleep(300);if(counTdown>=0){if(counTdown<3){counTdown++}else{counTdown=0}runInit()}else{process.stdout.clearLine();process.stdout.cursorTo(0)}}runInit();cp.exec(`docker restart ${catchYml().debug}`,function(error,stdout,stderr){counTdown=-1;process.stdout.clearLine();process.stdout.cursorTo(0);console.log("");var dockerRunPsyl=cp.spawn("docker",["exec","-it",catchYml().debug,"/bin/bash","arg.sh","LWQ="],{stdio:"inherit"});dockerRunPsyl.on("close",(code,signal)=>{console.log(colors.empty+colors.yellow+"stop debug...."+colors.empty+colors.green+"OK"+colors.empty+colors.white);console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white)});dockerRunPsyl.on("error",err=>{console.log(colors.empty+colors.red+error);console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white)})})}else{var counTdown=0;async function runInit(){process.stdout.clearLine();process.stdout.cursorTo(0);var toChar="";switch(counTdown){case 0:toChar="";break;case 1:toChar=".";break;case 2:toChar=".●";break;case 3:toChar=".◎●";break}process.stdout.write(colors.empty+colors.grey+"stop debug ...."+colors.empty+colors.green+toChar);await sleep(300);if(counTdown>=0){if(counTdown<3){counTdown++}else{counTdown=0}runInit()}else{process.stdout.clearLine();process.stdout.cursorTo(0)}}runInit();cp.exec(`docker stop ${catchYml().debug}`,function(error,stdout,stderr){counTdown=-1;console.log("");console.log(colors.empty+colors.yellow+"stop debug...."+colors.empty+colors.green+"OK"+colors.empty+colors.white);console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white)})}});if(toOrder=="stop"){console.log(colors.grey+colors.yellow+"close debug model....")}else{console.log(colors.grey+colors.yellow+"runing debug model....")}}else if(runSys){var cp=require("child_process");if(anws=="-p"){console.log(colors.empty+colors.cyanBG+colors.green+" build "+colors.empty+colors.blueBG+colors.green+" Docker-Container "+colors.empty+colors.grey+"→"+colors.empty+colors.green+catchYml().web+colors.empty+colors.grey+`(http://127.0.0.1:${catchYml().web_port})`);console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white);toOder=["-p","9788"]}let base64data=Buffer.from(toOder.join(" ")).toString("base64");if(toOder.join(" ")=="-b run"){var counTdown=0;async function runInit(){process.stdout.clearLine();process.stdout.cursorTo(0);var toChar="";switch(counTdown){case 0:toChar="";break;case 1:toChar=".";break;case 2:toChar=".●";break;case 3:toChar=".◎●";break}process.stdout.write(colors.empty+colors.yellow+"listen debug model(stop)"+colors.empty+colors.green+toChar);await sleep(300);if(counTdown>=0){if(counTdown<3){counTdown++}else{counTdown=0}runInit()}else{process.stdout.clearLine();process.stdout.cursorTo(0)}}runInit();cp.exec(`docker stop ${catchYml().debug}`,function(error,stdout,stderr){cp.exec(`docker stop ${catchYml().web}`,function(error,stdout,stderr){counTdown=-1;process.stdout.clearLine();process.stdout.cursorTo(0);var dockerRunPsyl=cp.spawn("docker",["exec","-it",catchYml().command,"/bin/bash","arg.sh",base64data],{stdio:"inherit"});dockerRunPsyl.on("close",(code,signal)=>{console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white)});dockerRunPsyl.on("error",err=>{console.log(colors.empty+colors.red+error);console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white)})})})}else{var dockerRunPsyl=cp.spawn("docker",["exec","-it",catchYml().command,"/bin/bash","arg.sh",base64data],{stdio:"inherit"});dockerRunPsyl.on("close",(code,signal)=>{console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white)});dockerRunPsyl.on("error",err=>{console.log(colors.empty+colors.red+error);console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white)})}}else{console.log(colors.empty+colors.yellow+"init for wait....");console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white)}}else if(arg.length!=0){console.log(colors.empty+colors.yellow+"input error....");console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white)}}function runPsylProcess(){console.log("");console.log(colors.grey+"                 ◤◢◤◢");console.log(colors.grey+"             ◤◢◤◢◤◢◤◢◤◢◤");console.log(colors.grey+"            ◤◢◤◢◤ "+colors.empty+colors.red+"◢◢"+colors.empty+colors.green+" ◢◤◢◤"+colors.empty);console.log(colors.grey+"            ◤◢◤◢◤ "+colors.empty+colors.yellow+"◤◢"+colors.empty+colors.cyan+" ◢◤◢"+colors.empty);console.log(colors.grey+"             ◤◢◤◢ ◢ ◢◤◢◢");console.log(colors.grey+"                ◤◢◢◢◤"+colors.empty);console.log(colors.blue+"Copyright © psyltw/gitime And "+colors.empty+colors.greenBG+colors.green+" Author "+colors.empty+colors.whiteBG+colors.green+" CHUNG,CHI-WEN "+colors.empty);console.log("");console.log(colors.empty+colors.grey+"◢◤◢◤"+colors.empty+colors.black+colors.reverse+"◢◤◢◤"+colors.empty+colors.grey+"◢◤◢◤"+colors.empty+colors.black+colors.reverse+"◢◤◢◤"+colors.empty+colors.green+" nodeJs "+colors.empty+colors.grey+"/ "+colors.empty+colors.black+colors.blue+"Typescript "+colors.empty+colors.grey+"/ "+colors.black+colors.magenta+"sass_scss_css "+colors.empty+colors.grey+"/ "+colors.black+colors.yellow+"js-es5");console.log(colors.empty+colors.black+colors.reverse+"◢◤◢◤"+colors.empty+colors.grey+"◢◤◢◤"+colors.empty+colors.empty+colors.black+colors.reverse+"◢◤◢◤"+colors.empty+colors.black+" Puzzle-(CI/DC) version");console.log("");console.log(colors.empty+colors.cyan+" Wellcome use "+colors.empty+colors.yellow+"|^_^| "+colors.empty+colors.red+" PSYL"+colors.empty+colors.green+"Vue "+colors.empty+colors.blackBG+" bundle(Net Core 7) "+colors.empty+colors.blueBG+colors.white+" Docker "+colors.empty);console.log("");console.log(colors.grey+colors.yellow+"----- create Date: 2019.11.09 "+colors.empty+colors.blueBG+colors.green+" Docker "+colors.empty+colors.cyanBG+colors.green+` v${dockerVersion} `+colors.empty+colors.grey+colors.yellow+"-----");console.log(colors.empty+colors.magenta+" help:  psyl -h");console.log("");console.log(colors.empty+colors.magenta+" Last Update:  2023.07.02");console.log("");console.log(" defalut Port: "+catchYml().web_port);console.log("");console.log(colors.empty+"");if(process.argv.length>2){process.argv[0]="node";process.argv[1]="psyl";console.log(colors.empty+colors.yellow+"arg->"+colors.empty+colors.magenta+process.argv.join(" "));console.log("");toCommand(process.argv)}else{let rlSync=require("readline").createInterface(process.stdin,process.stdout);rlSync.prompt();rlSync.on("line",ans=>{if(saveCmmand!=ans){saveCmmand=ans;if(ans.indexOf("psyl ")==0||ans.indexOf("npm ")==0||ans.indexOf("npx ")==0||ans.indexOf("node ")==0){toCommand(`node ${ans}`.split(" "))}else{console.log(colors.empty+colors.yellow+"note:"+colors.empty+colors.red+"command-> 'psyl' [...]"+colors.empty);console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white)}}});rlSync.on("resume",()=>{console.log("Resume Event is invoked.")});rlSync.on("SIGINT",()=>{});rlSync.on("SIGTSTP",()=>{toCommand("node psyl stop -d".split(" "));rlSync.close()})}}if(catchContainerNameStr.indexOf("image:")>0){var imageV="eNrtVMtuwyAQvOcrkO+2SZoqDv+QtrceIwc2LqlhLfCj6dcXg504UqMoh0qtVJ9gPTMLMytaMFaiZiR6SFbRzIJpJQfLZoQ0FmKOSvVrQqTKC2BkT+eP6wWlNK3ssWybAMm1YAL5OxhfDZqexlHXudRgtjpXjl9DZfAAvA5Ej2mxbFTo2X8xSVJrOEsHpN/wnL+BmCCENCx9rkC/wi7tus4g1lOUgKrE46hpwGJj+LkJIaVUsp7s/WmrxjorsoRGF3UFCs2RkWy+XmxOf5yosyuv3V2/11le01nSxXIz+BPcI5FGAcQ0+sU5+OTWycEGcolFIXXByCAljHQOO8bBoo73soSxCVbhLOTUVOUfsZWfzvhoTlV0Ue+Zvh7NhrQF7JriRtwBc3fYnvaf9m9Ku4Pdjax7xN1JO9IYCWhht+5xOQU5PikXhfNoVGjqyWCsV1nGMnptavxM/N1Z+PmgvwAJd5rl";const zlib=require("zlib");var buf=Buffer.from(imageV,"base64");zlib.unzip(buf,function(err,buffer){if(err)throw err;imageV=buffer.toString("utf8");var fs=require("fs");if(fs.existsSync("./docker-compose.yml")){var cp=require("child_process");cp.exec(`docker restart ${catchYml().command}`,function(error,stdout,stderr){cp.exec(`docker start ${catchYml().command}`,function(error,stdout,stderr){runSys=true})});runPsylProcess()}else{let rlSync=require("readline").createInterface({input:process.stdin,output:process.stdout});console.log(colors.empty+colors.red+"");console.log(colors.empty+colors.cyan+" Wellcome use "+colors.empty+colors.yellow+"|^_^| "+colors.empty+colors.red+" PSYL"+colors.empty+colors.green+"Vue "+colors.empty+colors.blackBG+" bundle(Net Core 7) "+colors.empty+colors.blueBG+colors.white+" Docker "+colors.empty);console.log("");console.log("");rlSync.question(colors.empty+colors.red+" ◎ "+colors.empty+colors.yellow+"need reset to web for port?"+colors.empty+"\n"+colors.empty+colors.grey+"(default:9788)"+colors.empty+"\n"+colors.empty+colors.grey+" Anwser "+colors.empty+colors.redBG+"?"+colors.empty+colors.magentaBG+">>"+colors.empty+colors.redBG+">"+colors.empty+" ",function(answer){var toWebPort=9788;try{toWebPort=Number(answer);console.log(answer);if(answer!=""?toWebPort==0||answer*0!=0:true){toWebPort=9788;console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white);console.log(colors.empty+colors.yellow+"default port for 9788")}}catch(e){toWebPort=9788;console.log(colors.empty+colors.grey+"↘"+colors.empty+colors.white);console.log(colors.empty+colors.red+"error set port for 9788"+colors.empty)}const dateTime=Date.now();const timestamp=Math.floor(dateTime/1e3);fs.writeFile("./docker-compose.yml",imageV.replace(/eprojecte/g,timestamp).replace(/dockerpsylversion/g,dockerVersion).replace("9788:80",toWebPort+":80"),function(error){runSys=true});rlSync.close();setTimeout(function(){runPsylProcess();toCommand("node psyl docker".split(" "))},300)})}})}else{runSys=true;runPsylProcess()}
