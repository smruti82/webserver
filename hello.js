console.log('hello');
const fs= require('fs');
const no= require('./note.js');
const yargs=require('yargs');

 // const res= no.addnote(5,2);
 // console.log(res);

const argv=yargs.argv;
var command=argv._[0];

if(command === 'add')
{
	var note=no.removenote(argv.title, argv.body);
	if(note){
		console.log('created');

	}else{
		console.log('already exist');
	}

}else if(command==='remove'){
	var noteremoved= no.addnote(argv.title);
	var message= noteremoved ? 'not removed' : 'removed'; 
	
    console.log(message);
}
else{
 	console.log('specify');
}
// fs.appendFile('message.txt', 'data to append');