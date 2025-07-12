// API服务文件
// 统一管理所有接口调用

const API_BASE_URL = 'http://localhost:8000/api';

// 通用请求方法
const request = async (url: string, options: RequestInit = {}) => {
  const token = localStorage.getItem('token');
  
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${url}`, defaultOptions);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || '请求失败');
    }
    
    return data;
  } catch (error) {
    console.error('API请求错误:', error);
    throw error;
  }
};

// 用户相关接口
export const userAPI = {
  // 用户登录
  login: (credentials: { userName: string; password: string }) =>
    request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),

  // 用户注册
  register: (userData: {
    userName: string;
    email: string;
    phone: string;
    password: string;
    role: string;
  }) =>
    request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),

  // 获取用户信息
  getProfile: () => request('/user/profile'),

  // 更新用户信息
  updateProfile: (profileData: {
    userName?: string;
    email?: string;
    phone?: string;
    bio?: string;
    school?: string;
    grade?: string;
  }) =>
    request('/user/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    }),
};

// 课程相关接口
export const courseAPI = {
  // 获取课程列表
  getCourses: (params?: {
    page?: number;
    size?: number;
    category?: string;
    status?: string;
  }) => {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }
    return request(`/courses?${searchParams.toString()}`);
  },

  // 获取课程详情
  getCourseDetail: (courseId: string) => request(`/courses/${courseId}`),

  // 获取我的课程
  getMyCourses: () => request('/user/courses'),

  // 报名课程
  enrollCourse: (courseId: string) =>
    request('/courses/enroll', {
      method: 'POST',
      body: JSON.stringify({ courseId }),
    }),
};

// 论坛相关接口
export const forumAPI = {
  // 获取话题列表
  getTopics: (params?: {
    page?: number;
    size?: number;
    category?: string;
    sort?: string;
  }) => {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }
    return request(`/forum/topics?${searchParams.toString()}`);
  },

  // 创建话题
  createTopic: (topicData: {
    title: string;
    content: string;
    category: string;
    tags?: string[];
  }) =>
    request('/forum/topics', {
      method: 'POST',
      body: JSON.stringify(topicData),
    }),

  // 获取话题详情
  getTopicDetail: (topicId: string) => request(`/forum/topics/${topicId}`),

  // 获取回复列表
  getReplies: (topicId: string) => request(`/forum/topics/${topicId}/replies`),

  // 创建回复
  createReply: (topicId: string, replyData: { content: string; parentId?: string }) =>
    request(`/forum/topics/${topicId}/replies`, {
      method: 'POST',
      body: JSON.stringify(replyData),
    }),
};

// 直播相关接口
export const livestreamAPI = {
  // 获取直播列表
  getLivestreams: () => request('/livestreams'),

  // 获取直播详情
  getLivestreamDetail: (streamId: string) => request(`/livestreams/${streamId}`),
};

// 管理后台相关接口
export const adminAPI = {
  // 管理员登录
  login: (credentials: { username: string; password: string }) =>
    request('/admin/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),

  // 获取统计数据
  getStats: () => request('/admin/stats'),

  // 获取用户列表
  getUsers: (params?: { page?: number; size?: number; role?: string }) => {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }
    return request(`/admin/users?${searchParams.toString()}`);
  },

  // 获取课程列表
  getAdminCourses: (params?: { page?: number; size?: number; status?: string }) => {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }
    return request(`/admin/courses?${searchParams.toString()}`);
  },

  // 获取话题列表
  getAdminTopics: (params?: { page?: number; size?: number; status?: string }) => {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }
    return request(`/admin/topics?${searchParams.toString()}`);
  },
};

// 积分相关接口
export const pointsAPI = {
  // 获取积分记录
  getPointsHistory: (params?: { page?: number; size?: number; type?: string }) => {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }
    return request(`/user/points?${searchParams.toString()}`);
  },

  // 获取积分统计
  getPointsStats: () => request('/user/points/stats'),
};

// 收藏相关接口
export const favoriteAPI = {
  // 获取收藏列表
  getFavorites: (targetType?: string) => {
    const params = targetType ? `?targetType=${targetType}` : '';
    return request(`/user/favorites${params}`);
  },

  // 添加收藏
  addFavorite: (targetType: string, targetId: string) =>
    request('/user/favorites', {
      method: 'POST',
      body: JSON.stringify({ targetType, targetId }),
    }),

  // 取消收藏
  removeFavorite: (targetType: string, targetId: string) =>
    request('/user/favorites', {
      method: 'DELETE',
      body: JSON.stringify({ targetType, targetId }),
    }),
};

// 关注相关接口
export const followAPI = {
  // 获取关注列表
  getFollowing: () => request('/user/following'),

  // 关注用户
  followUser: (userId: string) =>
    request('/user/follow', {
      method: 'POST',
      body: JSON.stringify({ userId }),
    }),

  // 取消关注
  unfollowUser: (userId: string) =>
    request('/user/follow', {
      method: 'DELETE',
      body: JSON.stringify({ userId }),
    }),
};

// 会员相关接口
export const membershipAPI = {
  // 获取会员信息
  getMembership: () => request('/user/membership'),

  // 购买会员
  purchaseMembership: (planType: string) =>
    request('/user/membership', {
      method: 'POST',
      body: JSON.stringify({ planType }),
    }),
};

// 导出所有API
export default {
  user: userAPI,
  course: courseAPI,
  forum: forumAPI,
  livestream: livestreamAPI,
  admin: adminAPI,
  points: pointsAPI,
  favorite: favoriteAPI,
  follow: followAPI,
  membership: membershipAPI,
}; 