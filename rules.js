const INIT_DOOR_OPEN_TIME = 10000;

const REQUEST_DELAY = 1500;

const RELATION_TIME = 30000;
const APART_DELAY = 1000;
const APART_PENALTY = 3;

const DOOR_OPEN_TIME = 2000;

const GAME_END_DELAY = 2000;

var PlayerStatus = Object.freeze({"registering":1, "playing":2, "won":3, "lost":4, "police":5, "quitted":6});