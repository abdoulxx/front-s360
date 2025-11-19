// User role
export interface Role {
  id: number;
  name: string;
  permissions?: Permission[];
}

// Permission
export interface Permission {
  id: number;
  name: string;
}

// User model
export interface User {
  id: number;
  name: string;
  email: string;
  is_admin: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  roles?: Role[];
  permissions?: Permission[];
}
