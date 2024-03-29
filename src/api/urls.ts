import config from '../config/config';

class URL {
  API = `http://${config.API_URL}:${config.API_PORT}/api`;
  
  // users
  private USERS = this.API + '/users';
  GET_ALL_USERS = this.USERS;
  GET_USER = this.USERS+'/me';
  UPDATE_USER = this.USERS+'/update';
  UPDATE_PASSWORD_USER = this.USERS+'/updatePassword';
  DELETE_USER = this.USERS+'/deleteAccount';

  // auth
  private AUTH = this.API+'/auth';
  REGISTER = this.AUTH + '/register';
  LOGIN = this.AUTH + '/login';
  VERIFY_TOKEN = this.AUTH + '/verifyToken';
  UPDATE_TOKEN = this.AUTH + '/updateToken';

  // roadmaps
  private ROADMAPS = this.API+'/roadmaps';
  GET_ROADMAPS = this.ROADMAPS;
  GET_ROADMAP = (roadmapId: string) => this.ROADMAPS+`/${roadmapId}`;
  GET_FULL_ROADMAP = (roadmapId: string) => this.ROADMAPS+`/${roadmapId}/map`;
  CREATE_ROADMAP = this.ROADMAPS;
  CREATE_FULL_ROADMAP = this.ROADMAPS+'/newMap';
  GET_MY_ROADMAPS = this.ROADMAPS+'/myMaps';
  SET_USER_STATE = (roadmapId: string) => this.ROADMAPS+`/${roadmapId}/setState`;
  REMOVE_USER_STATE = (roadmapId: string) => this.ROADMAPS+`/${roadmapId}/removeState`;

  private REVIEWS = this.API+'/reviews';
  CREATE_REVIEW = (roadmapId: string) => this.REVIEWS+`/${roadmapId}`;
  GET_REVIEWS = (roadmapId: string) => this.REVIEWS+`/${roadmapId}`;
}

export const url = new URL();