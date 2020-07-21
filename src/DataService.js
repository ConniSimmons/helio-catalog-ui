import http from "./config";

class CatalogDataService {
  getAll() {
    return http.get("/catalog");
  }

  get(id) {
    return http.get(`/catalog/${id}`);
  }

  create(data) {
    return http.post("/catalog", data);
  }

  update(id, data) {
    return http.put(`/catalog/${id}`, data);
  }

  delete(id) {
    return http.delete(`/catalog/${id}`);
  }

  deleteAll() {
    return http.delete(`/catalog`);
  }

  findByTitle(title) {
    return http.get(`/catalog?title=${title}`);
  }
}

export default new CatalogDataService();
