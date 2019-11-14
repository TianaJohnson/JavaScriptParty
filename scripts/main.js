console.log("ugh");

let completed = false ;

$(document).ready(function (){
    placeholderValues();   // This was used to test my functions
    getChoreData();   // upon page load, info already stored in database will be appended to the DOM
    $('#Submit-btn').on('click', choreInput);
    $('#chores-table').on('click', '.complete-btn', choreDone );   //click when chore is complete
    $('#chores-table').on('click', '.delete-btn', deleteLine );     // click to remove/delete row

});


// GET  // takes database info and appends upon DOM

function getChoreData() {
    console.log('in getChoreData');
    // ajax call to server to get chores
    $.ajax({
        method: 'GET',
        url: '/to-do'
    }).then(function (response) {
        console.log(response)
        const listOfChores = response;
        let choresTable = $('#chores-table');
        choresTable.empty();
        console.log('chore table');
            for (let chore of listOfChores) {
                if(`${chore.complete}` === 'true'){
                        //append each chore to the table
                        // table reflects complete tasks by showing there status as true and background of green "success"
                             choresTable.append(`<tr class="bg-success">
                                                  <td>${chore.chore}</td>
                                                  <td>${chore.complete}</td>                               
                                                  <td></td>
                                                  <td><button class="delete-btn btn btn-outline-dark""
                                                  data-delete="${chore.id}">Remove</button></td>
                                                  </tr>`);
                }else{                  
        //append each chore to the table
        //append table to reflect incomplete tasks
             choresTable.append(`<tr>
                                  <td >${chore.chore}</td>
                                  <td>${chore.complete}</td>                               
                                  <td><button class="complete-btn btn btn-outline-success"
                                  data-complete="${chore.id}">Complete</button></td>
                                  <td><button class="delete-btn btn btn-outline-dark""
                                  data-delete="${chore.id}">Remove</button></td>
                                  </tr>`);
        
        console.log('update chores');
            }
      
    };
    })
}

//POST   // initial intake of info from inouts on DOM
function choreInput() {
    const choreIn = {
          chore: $('#choresToDo').val(),
          complete: `${completed}`
    };
    console.log('chore added', choreIn);
    $.ajax({
        method: 'POST',
        url: '/todo',
        data: choreIn 
    }).then((res) => {
        console.log(res);
        console.log('chore Data line 57');
        getChoreData()
    }).catch((error) => {
        console.log('server error for ajax POST', error);
    })
    clearInput();
}


//PUT   //begining process of updating the database of changes being made, in this case its "complete" boolean

function choreDone(){
    const choreComp = $(this).data('complete');
    $(this).css("background-color: light green;");
      $.ajax({
        method: 'PUT',
        url: `/update-status/${choreComp}`
      }).then(function(response){
        getChoreData();  //GET function called
      }).catch(function(error){
        alert('Status Update Failed', error);
        console.log(error);
      })
    }




//DELETE    // permanent removal of info (row) from DOM and database 
function deleteLine(){
    console.log('delete Click');
    const thisLine = $(this).data('delete');
    $.ajax({
        method: 'DELETE',
        url: `/${thisLine}`
    }).then(function(response) {
        getChoreData(); // GET function called
    }).catch(function(error) {
        console.log('Error in deleteLine', error );
    });
  };



// time saver
function placeholderValues() {
    $('#choresToDo').val('Laundry');
}
//clears input fields after submition of information
function clearInput() {
    $('#choresToDo').val('');
}

// function confColor(){
//    $("<td></td>").css("background-color","lightGreen")
// }
})

