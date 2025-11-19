export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    ME: '/auth/me',
    REFRESH: '/auth/refresh',
  },
  USERS: {
    BASE: '/users',
    BY_ID: (id: number) => `/users/${id}`,
  },
  ADMINS: {
    BASE: '/admins',
    BY_ID: (id: number) => `/admins/${id}`,
  },
  ROLES: {
    BASE: '/roles',
    BY_ID: (id: number) => `/roles/${id}`,
  },
  PERMISSIONS: {
    BASE: '/permissions',
    BY_ID: (id: number) => `/permissions/${id}`,
    ROLE: (roleId: number) => `/permissions/roles/${roleId}`,
    USER: (userId: number) => `/permissions/users/${userId}`,
    ASSIGN_ROLE: (roleId: number) => `/permissions/roles/${roleId}/assign`,
    ASSIGN_USER: (userId: number) => `/permissions/users/${userId}/assign`,
  },
  DASHBOARD: {
    BASE: '/dashboard',
    RECENT_ACTIVITIES: '/dashboard/recent-activities',
    USER_GROWTH: '/dashboard/user-growth',
    ACTION_STATS: '/dashboard/action-stats',
    TOP_ACTIVE_USERS: '/dashboard/top-active-users',
  },
  AUDIT_LOGS: {
    BASE: '/audit-logs',
    BY_ID: (id: number) => `/audit-logs/${id}`,
    BY_USER: (userId: number) => `/audit-logs/user/${userId}`,
  },
} as const;
