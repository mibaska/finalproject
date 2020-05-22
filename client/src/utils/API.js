import axios from "axios";

export default {
  getVillagers: function() {
    return axios.get("/api/villagers");
  },
  getVillager: function(id) {
    return axios.get("/api/books/" + id);
  },
  saveVillager: function(villagerData) {
    return axios.post("/api/villagers", villagerData);
  }
};
