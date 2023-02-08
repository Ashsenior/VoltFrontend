import { get, post } from "../config/axiosClient";
import Endpoints from "../config/endpoints";

export const getDashboardData = async (params) => {
  return new Promise((resolve, reject) => {
    get(`${Endpoints.GET_DASHBOARD_DATA}`, params)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getHomeStartups = async (params) => {
  return new Promise((resolve, reject) => {
    get(`${Endpoints.GET_HOME_STARTUPS}`, params)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getAllStrategy = async (startup_key) => {
  return new Promise((resolve, reject) => {
    get(`${Endpoints.GET_STRATEGIES}?startup_key=${startup_key}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getSingleStrategies = async (slug, startup_key) => {
  return new Promise((resolve, reject) => {
    get(`${Endpoints.GET_STRATEGIES}?slug=${slug}&startup_key=${startup_key}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const createProduct = async (body) => {
  return new Promise((resolve, reject) => {
    post(`${Endpoints.CREATE_PRODUCT}`, body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getProducts = async (params) => {
  return new Promise((resolve, reject) => {
    get(`${Endpoints.GET_PRODUCTS}`, params)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getLeaders = async (params) => {
  return new Promise((resolve, reject) => {
    get(`${Endpoints.GET_LEADERS}`, params)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getProduct = async (product_key) => {
  return new Promise((resolve, reject) => {
    get(`${Endpoints.GET_PRODUCT}?product_key=${product_key}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getFeature = async (feature_key) => {
  return new Promise((resolve, reject) => {
    get(`${Endpoints.GET_FEATURE}?feature_key=${feature_key}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const createFeature = async (body) => {
  return new Promise((resolve, reject) => {
    post(`${Endpoints.CREATE_FEATURE}`, body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const refreshPrandIssues = async (product_key) => {
  return new Promise((resolve, reject) => {
    get(`${Endpoints.REFRESH_PRS}?product_key=${product_key}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getAllMarketing = async (startup_key) => {
  return new Promise((resolve, reject) => {
    get(`${Endpoints.GET_ALL_MARKETING}?startup_key=${startup_key}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const createMarketing = async (body) => {
  return new Promise((resolve, reject) => {
    post(`${Endpoints.CREATE_MARKETING_STRATEGY}`, body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const setSocialGoals = async (body) => {
  return new Promise((resolve, reject) => {
    post(`${Endpoints.SET_SOCIAL_GOALS}`, body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getMarketing = async (key) => {
  return new Promise((resolve, reject) => {
    get(`${Endpoints.GET_MARKETING}?key=${key}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getRecommendation = async (key) => {
  return new Promise((resolve, reject) => {
    get(`${Endpoints.GET_RECOMMENDATION}?key=${key}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getStartups = async (username) => {
  return new Promise((resolve, reject) => {
    get(`${Endpoints.GET_STARTUPS}?username=${username}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getStrategyOptions = async (startup_key) => {
  return new Promise((resolve, reject) => {
    get(`${Endpoints.GET_STRATEGY_OPTIONS}?startup_key=${startup_key}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getInvite = async (invite_key) => {
  return new Promise((resolve, reject) => {
    get(`${Endpoints.GET_INVITE}?invite_key=${invite_key}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const acceptInvite = async (username, invite_key) => {
  return new Promise((resolve, reject) => {
    get(`${Endpoints.GET_INVITE}?username=${username}&invite_key=${invite_key}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getTeamModule = async (startup_key) => {
  return new Promise((resolve, reject) => {
    get(`${Endpoints.GET_TEAM_MODULE}?startup_key=${startup_key}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getPeople = async () => {
  return new Promise((resolve, reject) => {
    get(`${Endpoints.GET_PEOPLE}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const createConnectionRequest = async (body) => {
  return new Promise((resolve, reject) => {
    post(`${Endpoints.CREATE_CONNECTION_REQUEST}`, body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getRequestAction = (action, key) => {
  return new Promise((resolve, reject) => {
    get(`${Endpoints.REQUEST_ACTION}?action=${action}&key=${key}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
