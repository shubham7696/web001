let data = [
    { id: 1, name: "Shubh", email: "abc@gmail.com" },
    { id: 2, name: "Shubham", email: "abc1@gmail.com" },
]

function readAll() {
    var tbData = document.querySelector(".table_data");
    var elements = "";
    data.map(
        d => (
            elements += `<tr>
            <td>${d.name}</td>
            <td>${d.email}</td>
            <td><button onclick={edit(${d.id})}>Update</button></td>
            <td><button  onclick={delet(${d.id})}>Delete</button></td>
            </tr>`
        )
    )
    tbData.innerHTML = elements;
}

function createForm() {
    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".addBtn").style.display = "none";
}

function add() {

    const name_field = document.getElementById('name');
    const email_field = document.getElementById('email');


    var name = name_field.value;
    var email = email_field.value;
    // Check if name is empty
    if (name.trim() === '') {
        alert('Please enter your name.');
        name_field.focus();
        return false;
    }

    // Check if email is valid format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address.');
        email_field.focus();
        return false;
    }

    var newObj = { id: (data.length + 1), name, email };
    data.push(newObj);

    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".addBtn").style.display = "block";
    readAll();
}

function edit(id) {
    document.querySelector(".update_form").style.display = "block";
    document.querySelector(".addBtn").style.display = "none";

    var updateObj = data.find(f => f.id === id);
    document.querySelector(".update_id").value = updateObj.id
    document.querySelector(".uname").value = updateObj.name;
    document.querySelector(".uemail").value = updateObj.email;
}

function update() {

    var id = parseInt(document.querySelector(".update_id").value);
    var name = document.querySelector(".uname").value;
    var email = document.querySelector(".uemail").value;
    var updateObj = { id, name, email };

    var index = data.findIndex(f => f.id === id);
    data[index] = updateObj;


    document.querySelector(".update_form").style.display = "none";
    document.querySelector(".addBtn").style.display = "block";
    readAll();
}

function delet(id) {
    var newData = data.filter(f => f.id !== id);
    data = newData;
    readAll();
}



function validateForm() {
    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');

    // Check if name is empty
    if (name.value.trim() === '') {
        alert('Please enter your name.');
        name.focus();
        return false;
    }

    // Check if email is valid format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        alert('Please enter a valid email address.');
        email.focus();
        return false;
    }



    // If all validations pass, submit the form
    return true;
}