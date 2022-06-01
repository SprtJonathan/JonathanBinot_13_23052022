import axiosBase from "../axiosBase";

class AuthDataService {
  login(data) {
    return axiosBase.post("/login", data);
  }

  getProfile() {
    return axiosBase.post("/profile");
  }

  update(data) {
    return axiosBase.put("/profile", data);
  }
}

export default new AuthDataService();
