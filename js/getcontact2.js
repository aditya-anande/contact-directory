loadcontact=()=>{
    let url='http://localhost/contactdirectory/getcontact1.php';
    let xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onreadystatechange=()=>{
        if(xhr.status==300||xhr.readyState==4)
        {
            console.log(xhr.responseText);
            let table=document.querySelector('#table-data');
            let response=JSON.parse(xhr.responseText);
            let {contact}=response;
            contact.map(cont=>{
                let{id,name,phone,email,button}=cont;
                let tablerow=document.createElement('tr');
                let tableid=document.createElement('td');
                let contid=document.createTextNode(id);
                let tablename=document.createElement('td');
                let contname=document.createTextNode(name);
                let tablephone=document.createElement('td');
                let contphone=document.createTextNode(phone);
                let tableemail=document.createElement('td');
                let contemail=document.createTextNode(email);
                let tablebutton=document.createElement('button');
                let contdelete=document.createTextNode('Delete');
                table.appendChild(tablerow);
                tableid.appendChild(contid);
                tablename.appendChild(contname);
                tablephone.appendChild(contphone);
                tableemail.appendChild(contemail);
                tablebutton.appendChild(contdelete);
                tablerow.appendChild(tableid);
                tablerow.appendChild(tablename);
                tablerow.appendChild(tablephone);
                tablerow.appendChild(tableemail);
                tablerow.appendChild(tablebutton);


                let url2='http://localhost/contactdirectory/deletecontact.php';
                tablebutton.addEventListener('click',(e)=>{
                e.preventDefault();
                let id=cont.id;
                let data={
                    "id":id
                };
                let params=JSON.stringify(data);
                let xhr=new XMLHttpRequest();
                xhr.open('DELETE',url2,true);
                xhr.onload=()=>{
                    if(xhr.status==200||xhr.readyState==4)
                    {
                        console.log('Contact deleted');
                    }
                    else
                    {
                        console.log('Error occured');
                    }
                }


                xhr.onload=()=>{
                    if(xhr.readyState==4||xhr.status==200)
                    {
                        alert("Contact Deleted");
                       
                        //location.reload();
                    }
                    else
                    {
                        
                        alert("Error");
                    
                    }
                }
            

                xhr.send(params);
            });




                
            });
        }
        // else
        // {
        //     console.log('error occured');
        // }

    }


    xhr.send();
}
loadcontact();