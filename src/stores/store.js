import { defineStore } from "pinia";
import config from "@/assets/json/config.json";

export const useStore = defineStore({
  id: "store",
  state: () => ({
    gameConfig: {
      theme: 0,
      players: 0,
      size: 0,
    },
    config: config,
    gameStarted: false,
    restarting: false,
    gameInstance: {},
    timer: null,
    mobileMenu: false,
  }),
  getters: {
    isMultiplayer: (state) => state.gameInstance?.scores?.length > 1,
    getGridSize: (state) =>
      Number(state.config?.size?.options[state.gameConfig.size].split("x")[0]),
    isGameOver: (state) =>
      state.gameInstance.solved.length === state.gameInstance.grid.length,
  },
  actions: {
    startGame() {
      const scores = () => {
        const scores = [];
        for (let i = 0; i <= this.gameConfig.players; i++) {
          scores.push(0);
        }
        return scores;
      };
      const grid = () => {
        let grid = [];
        let numbers = [];
        if (this.gameConfig.size === 0) {
          for (let i = 1; i <= Math.pow(this.getGridSize, 2) / 2; i++) {
            numbers.push(i, i);
          }
        } else {
          for (let i = 1; i <= Math.pow(this.getGridSize, 2) / 4; i++) {
            numbers.push(i, i, i, i);
          }
        }
        numbers.sort(() => 0.5 - Math.random());
        grid = numbers;
        return grid;
      };
      this.setGameInstance({ scores: scores(), grid: grid() });
      this.gameStarted = true;
      this.resumeGame();
    },
    markAsSolved(pair) {
      this.gameInstance.solved.push(...pair);
      if (this.isMultiplayer) {
        this.gameInstance.scores[this.gameInstance.turn] += 1;
      } else {
        this.gameInstance.scores[0] += 1;
        this.nextTurn();
      }
    },
    nextTurn() {
      if (this.isMultiplayer) {
        const isLastPlayer = this.gameInstance.turn === this.gameConfig.players;
        this.gameInstance.turn = isLastPlayer ? 0 : this.gameInstance.turn + 1;
      } else {
        this.gameInstance.turn += 1;
      }
    },
    setGameInstance({
      theme = this.theme,
      scores,
      size = this.size,
      grid = this.grid,
      turn = 0,
      solved = [],
      time = 0,
      selectedPair = [],
    }) {
      this.gameInstance = {
        theme: theme,
        scores: scores,
        size: size,
        grid: grid,
        turn: turn,
        solved: solved,
        time: time,
        selectedPair: selectedPair,
      };
    },
    restartGame() {
      this.pauseGame();
      this.startGame();
      this.restarting = true;
      setTimeout(() => {
        this.restarting = false;
      }, 500);
    },
    newGame() {
      clearTimeout(this.timer);
      this.$reset();
    },
    resumeGame() {
      this.timer = setInterval(() => {
        this.gameInstance.time += 1;
      }, 1000);
    },
    pauseGame() {
      clearTimeout(this.timer);
    },
  },
});
