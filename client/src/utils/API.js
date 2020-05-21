import axios from "axios";

export default {
  getVillagers: function() {
    return axios.get("/api/villagers");
  },
  saveVillager: function(villagerData) {
    return axios.post("/api/villagers", villagerData);
  }
};
