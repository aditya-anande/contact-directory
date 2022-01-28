let form=document.querySelector('#createcontact');
let url='http://localhost/contactdirectory/createcontact.php';
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let name = document.querySelector('#name').value;
    let phone = document.querySelector('#phone').value;
    let email = document.querySelector('#email').value;
    let data={
        "name":name,
        "phone":phone,
        "email":email
    };
    let params=JSON.stringify(data);
    let xhr=new XMLHttpRequest();
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload=()=>{
        if(xhr.status==200||xhr.readyState==4)
        {
            console.log('contact created');
        }
        else
        {
            console.log('error occrured');
        }
    }

    xhr.onload=()=>{
        if(xhr.readyState==4||xhr.status==200)
        {
            alert("Contact Created. To View Contacts click on View Contacts");
           
            //location.reload();
        }
        else
        {
            
            alert("Error");
        
        }
    }



    xhr.send(params);
});