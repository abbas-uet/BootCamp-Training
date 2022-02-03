
document.addEventListener('DOMContentLoaded', function () {
  var groceryList = [{ id: 1, name: 'Bacon' }, { id: 2, name: 'Milk' }, { id: 3, name: 'Eggs' }, { id: 4, name: 'Bread' }, { id: 5, name: 'Potato' }, { id: 6, name: 'Tomato' }, { id: 7, name: 'Oil' }, { id: 8, name: 'Chicken' }];
  document.getElementById('addNew').onclick=addNew;
  document.getElementById('search').onclick=search;
  let list = document.querySelector('.list-group');
  render(groceryList);

  document.querySelector('#deleteAll').addEventListener('click', function () {
    list.innerHTML = ``;
    groceryList=[];
  });



  function addNew() {
    let new_id = prompt('Enter Id of New Item ');
    let new_name = prompt('Enter Name of New Item ');
    if(new_id!='' && new_name!=''){
      groceryList.push({id:new_id,name:new_name});
      list.innerHTML = ``;
      render(groceryList);
    }
  }


  function search(event) {
    event.preventDefault();
    let search_text=document.getElementById('search_input').value;
    if(search_text!=''){
      newList= groceryList.filter(e=>e.name == search_text);
      list.innerHTML = ``;
      render(newList);
    }else{
      render(groceryList);
    }
  }

  function edit(event) {
    let id = event.currentTarget.id;
    let new_Name = prompt('Enter New Name');
    if(new_Name!=null){
      for (let index = 0; index < groceryList.length; index++) {
        if(groceryList[index].id==id){
          groceryList[index].name=new_Name;
        }
      }
      list.innerHTML = ``;
      render(groceryList);
    }
    
  };

  function deleteItem(event) {
    let id = event.currentTarget.id;
    groceryList= groceryList.filter(e=>e.id != id);
    list.innerHTML = ``;
    render(groceryList);
  };

  function render(l) {
    l.map((e) => {
      let li = document.createElement('li');
      let li_attributes = document.createAttribute('class');
      li_attributes.value = "list-group-item d-flex justify-content-between align-items-center";
      let textNode = document.createTextNode(e.name);
      li.setAttributeNode(li_attributes);
      li.appendChild(textNode);
      list.appendChild(li);
      let div = document.createElement('div');
      let button = document.createElement('button');
      let i = document.createElement('i');
      let btn_class = document.createAttribute('class');
      i.setAttribute('class', 'bi bi-pencil-square text-success');
      i.setAttribute('id', e.id);
      btn_class.value = 'btn';
      button.setAttributeNode(btn_class);
      button.appendChild(i);
      div.appendChild(button);
      let button1 = document.createElement('button');
      let i1 = document.createElement('i');
      let btn_class1 = document.createAttribute('class');
      btn_class1.value = 'btn';
      i1.setAttribute('class', 'bi bi-trash-fill text-danger');
      button1.setAttributeNode(btn_class1);
      i1.setAttribute('id', e.id);
      button1.appendChild(i1);
      div.appendChild(button1)
      li.appendChild(div);


      i.onclick = edit;
      i1.onclick = deleteItem;
      list.appendChild(li);
    });

  }

});


/*
list.appendChild(groceryList.map(e=>
  `<li class="list-group-item d-flex justify-content-between align-items-center">
${e}
<div>
    <span ><button class="btn" id='editSingle'><i class="bi bi-pencil-square text-success"></i></button></span>
    <span ><button class="btn" id='deleteSingle'><i class="bi bi-trash-fill text-danger"></i></button></span>
</div>
</li>`
));*/