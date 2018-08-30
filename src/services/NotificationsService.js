import {delay} from 'redux-saga';

export default {
  async getNotifications(miliseconds = 0){
    // console.warn("REAL NOTIFICATION SERVICE! REALLY CONTACTING APIS!");
    await delay(miliseconds);
    return {count: 42};
  }
};