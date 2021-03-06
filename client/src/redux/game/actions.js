import {
  SET_TURN,
  SET_OPPONENT,
  SET_BOARD,
  SET_GAME_ID,
  SET_GAME_STATUS,
  SET_SCORE
} from "../constants";

export const setOpponentState = opponent => ({ type: SET_OPPONENT, payload: opponent });
export const setTurnState = turn => ({ type: SET_TURN, payload: turn });
export const setBoardState = board => ({ type: SET_BOARD, payload: board });
export const setGameIDState = id => ({ type: SET_GAME_ID, payload: id });
export const setGameStatusState = status => ({ type: SET_GAME_STATUS, payload: status });
export const setScoreState = score => ({ type: SET_SCORE, payload: score });
