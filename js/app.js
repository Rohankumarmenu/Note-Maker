console.log('welcome to notes app.This is app.js');
 shownotes();
var notesobj;
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    console.log(notesobj);

    shownotes();

})

function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    let html = "";
    notesobj.forEach(function (element, index) {
        html += `  
           
        <div class="note card my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">notes ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}" onclick=deletenote(${index}) class="btn btn-primary">Delete note</button>
                </div>
            </div> `;
    });
    let noteselem = document.getElementById("notes");
    if (notesobj.length != 0) {
        noteselem.innerHTML = html;
    }
    else
    {
          noteselem.innerHTML=`nothing to show use "add a note " section to add above notes`;
    }
}

     

    function deletenote(index)
    {
            
    //   let notes = localStorage.getElementById(index);
    //   console.log('I am deleting');
//   if (notes == null) {
//     notesObj = [];
//   } else {
//     // notesObj = JSON.parse(notes);
//   }
// console.log(notesobj);

  notesobj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesobj));
//   console.log(notesobj);
  shownotes();

    }

  