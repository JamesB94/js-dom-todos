const getData = () => {

fetch('http://localhost:3000/todos')
.then(response => response.json())
.then(data => {
  const ul = document.getElementById('myList');
  
  data.forEach(item => {
    //console.log('this is a test ' + item.completed)
 if(item.completed === true) {
    const li = document.createElement('li');
    li.setAttribute('style', 'color: gray; text-decoration: line-through;');
    li.textContent = item.title;
    ul.appendChild(li);
 } else {
    const li = document.createElement('li');
    li.textContent = item.title;
    ul.appendChild(li);
 }
  });
}) 
}



let formElement = document.getElementById('myForm');

formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    var inputElement = document.getElementById('myInput');
    var userInput = inputElement.value;
    console.log(userInput);

    fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: userInput,
          completed: false
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      location.reload() 
  });

getData()