import { addboard } from "@/api/board";

export default {
  state: {
    board: {},
  },
  mutations: {
    setBoard(state, board) {
      state.board = board;
    },
  },
  actions: {
    async sendWrite({ commit }, data) {
      console.log("storeBoard = " + data);
      await addboard(data);
      commit("setBoard", data);
    },
  },
};
