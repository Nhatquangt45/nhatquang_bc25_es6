const API = "https://625bc0d0398f3bc782ae7de0.mockapi.io/api/todolist";

export default class Services {
  fetchData() {
    return axios({
      url: API,
      method: "GET",
    });
  }

  deleteItem(id) {
    return axios({
      url: API + "/" + id,
      method: "DELETE",
    });
  }

  addItem(data) {
    return axios({
      url: API,
      method: "POST",
      data: data,
    });
  }

  getItemById(id) {
    return axios({
      url: API + "/" + id,
      method: "GET",
    });
  }

  updateToDo(check, data) {
    return axios({
      url: API + "/" + check,
      method: "PUT",
      data: data,
    });
  }
}
