getcontact=()=>
{
    let url='http://localhost/contactdirectory/getcontact1.php';
    let xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.onload=()=>{
        if(xhr.status==200||xhr.readyState==4)
        {
            let response=JSON.parse(xhr.responseText);
            let {contact}=response;
            let tablesec=document.querySelector('#table-data-section');
            let table=document.createElement('table');
            let tablehead=document.createElement('tr');
            let idth=document.createElement('th');
            let nameth=document.createElement('th');
            let phoneth=document.createElement('th');
            let emailth=document.createElement('th');
            let actionth=document.createElement('th');
            let idcon=document.createTextNode('Id');
            let namecon=document.createTextNode('Name');
            let phonecon=document.createTextNode('Phone');
            let emailcon=document.createTextNode('Email');
            let actioncon=document.createTextNode('Action');
            idth.appendChild(idcon);
            nameth.appendChild(namecon);
            phoneth.appendChild(phonecon);
            emailth.appendChild(emailcon);
            actionth.appendChild(actioncon);
            tablehead.appendChild(idth);
            tablehead.appendChild(nameth);
            tablehead.appendChild(phoneth);
            tablehead.appendChild(emailth);
            tablehead.appendChild(actionth)
            table.appendChild(tablehead);
            tablesec.appendChild(table);
            //console.log(response);
            contact.forEach(cont=>{
              
             let trow=document.createElement('tr');
             let id=document.createElement('td');
             let name=document.createElement('td');
             let phone=document.createElement('td');
             let email=document.createElement('td');
             let idcon=document.createTextNode(cont.id);
             let namecon=document.createTextNode(cont.name);
             let phonecon=document.createTextNode(cont.phone);
             let emailcon=document.createTextNode(cont.email);
             let updatebtn=document.createElement('button');
             let updatebtntxt=document.createTextNode('Edit');
             updatebtn.appendChild(updatebtntxt);
             updatebtn.addEventListener('click',(e)=>{
                e.preventDefault();
                let {id,name,phone,email}=cont;
                let idtxt=document.querySelector('#id');
                let nametxt=document.querySelector('#name');
                let phonetxt=document.querySelector('#phone');
                let emailtxt=document.querySelector('#email');
                console.log(email);
                  idtxt.value=id;
                  nametxt.value=name;
                  phonetxt.value=phone;
                  emailtxt.value=email;
                
            });
             id.appendChild(idcon);
             name.appendChild(namecon);
             phone.appendChild(phonecon);
             email.appendChild(emailcon);
             trow.appendChild(id);
             trow.appendChild(name);
             trow.appendChild(phone);
             trow.appendChild(email);
             trow.appendChild(updatebtn);
             table.appendChild(trow);
            });
        }
        else
        {
            console.log('error occured');
        }
    }
    xhr.send();
}
getcontact();



let upform=document.querySelector('#update-contact-form');
upform.addEventListener('submit',(e)=>{
    e.preventDefault();
    let name=document.querySelector('#name').value;
    let phone=document.querySelector('#phone').value;
    let email=document.querySelector('#email').value;
    let id=document.querySelector('#id').value;
    let data={
        name:name,
        phone:phone,
        email:email,
        id:id
    };
    let params=JSON.stringify(data);
    let xhr=new XMLHttpRequest();
    let url='http://localhost/contactdirectory/updatecontact.php';
    
    xhr.open('PUT',url,true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    
    xhr.onload=()=>{
        if(xhr.readyState==4||xhr.status==200)
        {
            let message=document.querySelector('#message-section');
            let messageh=document.createElement('h2');
            let messagetxt=document.createTextNode('Contact updated');
            alert("Contact Updated. To View Contacts click on View Contacts");
            messageh.appendChild(messagetxt);
            message.appendChild(messageh);
            location.reload();
        }
        else
        {
            let message=document.querySelector('#message-section');
            let messageh=document.createElement('h2');
            let messagetxt=document.createTextNode('Error occured');
            messageh.appendChild(messagetxt);
            message.appendChild(messageh);
        
        }
    }
    xhr.send(params);
});