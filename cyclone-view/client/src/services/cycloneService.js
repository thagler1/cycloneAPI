import Api from '@/services/api';

export default {
  getAllStorms() {
    return Api().get('hurdata/all');
  },
  getStorm(id) {
    console.log('attempting to get stuff');
    return Api().get('hurdat/'+ id);
  },
};

