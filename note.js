console.log('world');
const fs=require('fs');


var fetchnote=() =>{
	  try{
	var originalstring=fs.readFileSync('note-data.json');
	return JSON.parse(originalstring);
    }
    catch(e)
    {
      return [];
    }

};
var savenotes=(notes) => {
	fs.writeFileSync('note-data.json',JSON.stringify(notes));
};

var removenote= (title,body) =>{
	var notes= fetchnote();
	var note={
		title,
		body
	};
    
    var duplicate=notes.filter((note)=>{
    	return note.title===title;
    	
    })
    if(duplicate.length===0)
    {
	notes.push(note);
    savenotes(notes);
    return note;
    }
};
var addnote=(title)=>{

	var notes=fetchnote();
	var filtered=notes.filter((note)=> {
		return note.title!==title;
	})
	savenotes(filtered);

	return notes.length!==filtered.length;
	
};
module.exports= {
               removenote,
               addnote


};