const API = "https://625bc0d0398f3bc782ae7de0.mockapi.io/api/todolist";

export default class Services {
  fetchData() {
    return axios({
      url: API,
      method: "GET",
    });
  }

  deleteItemById(id) {
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

  updateItem(id, data) {
    return axios({
      url: API + "/" + id,
      method: "PUT",
      data: data,
    });
  }
}
