const getELE = (id) => document.getElementById(id);
const todo = [];

getELE("addItem").addEventListener("click", () => {
  let themViec = getELE("newTask").value;
  todo.push(themViec);
  console.log(todo);
  rendelHTML(todo);
});

/**
 *rendel ra html
 */
const rendelHTML = (todo) => {
  let content = "";
  for (let i = 0; i < todo.length; i++) {
    let item = todo[i];
    content += `
    <li>${todo.themViec}
    <button class="btn btn-danger>xóa</button>
    </li>
    
      `;
  }
  getELE("todo").innerHTML = content;
};
