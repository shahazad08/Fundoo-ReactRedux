import axios from 'axios';
const baseUrl = "http://34.213.106.173/api/"

export function getNotes(callback) {
axios(baseUrl+'/notes/getNotesList', {
        method: "GET",
        headers: {
            "Authorization": localStorage.getItem("token")
        },
    }).then((data)=>{
        return callback(null,data)

    })
    .catch((err)=>{
        return callback(err,null)
    })
}

export function noteArray(notesData){
    console.log("Notes Data",notesData);
    let notearray=[];
    for(let i=0;i<notesData.length;i++){   
        notearray.push(notesData[i])   
    }
    console.log("My Notess",notearray);
    return notearray    
}




