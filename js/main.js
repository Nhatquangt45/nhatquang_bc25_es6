import Services from "./services.js";
import toDoValue from "./todovalue.js";
const services = new Services();

const getELE = (id) => document.getElementById(id);

const rendelHTML = (data) => {
  let content = "";
  data.forEach((item) => {
    console.log(item);
    content += `<li> ${item.title}
    <div>
    <i style=" cursor: pointer" class="fa-solid fa-trash-can" onclick="deleteItem(${item.id})"></i>
    <i style=" cursor: pointer" class="fa-solid fa-circle-check" onclick="checkItem(${item.id})"></i>
    </div>
    </li>`;
  });
  getELE("todo").innerHTML = content;
};

// lấy item từ data xuống
const getListItem = () => {
  services
    .fetchData()
    .then((res) => {
      rendelHTML(res.data);
    })
    .catch((err) => {
      rendelHTML(err);
    });
};
getListItem();

// xóa item
const deleteItem = (id) => {
  services
    .deleteItem(id)
    .then(() => {
      getListItem();
    })
    .catch((err) => {
      console.log(err);
    });
};

window.deleteItem = deleteItem;
// thêm item
getELE("addItem").addEventListener("click", () => {
  const title = getELE("newTask").value;
  const toDo = new toDoValue("", title);

  services
    .addItem(toDo)
    .then(() => {
      getListItem();
    })
    .catch((err) => {
      console.log(err);
    });
});

// cap nhật item
const renderItem = (data) => {
  const content = data.reduce((contenthtml, item) => {
    return (contenthtml += `<li>${item.title}
      <div>
      <i style=" cursor: pointer" class="fa-solid fa-trash-can" ></i>
      <i style=" cursor: pointer" class="fa-solid fa-circle-check"></i>
      </div>
    </li>`);
  }, "");
  getELE("completed").innerHTML = content;
};

const getListItemDone = (id) => {
  services
    .getItemById(id)
    .then((res) => {
      renderItem(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
const checkItem = (check) => {
  services
    .updateToDo(check)
    .then(() => {
      deleteItem();
      getListItemDone();
    })
    .catch((err) => {
      console.log(err);
    });
};

window.checkItem = checkItem;
