import Api from '@/services/api';

export default {
  getAllStorms() {
    return Api().get('hurdat');
  },
};

