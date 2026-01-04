const API_URL = 'http://localhost:3001/api';

let authToken: string | null = localStorage.getItem('auth_token');

export function setAuthToken(token: string | null) {
  authToken = token;
  if (token) {
    localStorage.setItem('auth_token', token);
  } else {
    localStorage.removeItem('auth_token');
  }
}

export function getAuthToken() {
  return authToken;
}

async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (authToken) {
    headers['Authorization'] = `Bearer ${authToken}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(error.error || 'Request failed');
  }

  return response.json();
}

export const api = {
  auth: {
    login: async (email: string, password: string) => {
      const data = await apiRequest('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      setAuthToken(data.token);
      return data;
    },
    logout: async () => {
      await apiRequest('/auth/logout', { method: 'POST' });
      setAuthToken(null);
    },
    getSession: async () => {
      try {
        return await apiRequest('/auth/session');
      } catch {
        setAuthToken(null);
        return { user: null };
      }
    },
  },
  clients: {
    getAll: () => apiRequest('/clients'),
    getById: (id: string) => apiRequest(`/clients/${id}`),
    getBySlug: (slug: string) => apiRequest(`/clients/slug/${slug}`),
    create: (data: any) => apiRequest('/clients', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
    update: (id: string, data: any) => apiRequest(`/clients/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
    delete: (id: string) => apiRequest(`/clients/${id}`, {
      method: 'DELETE',
    }),
  },
  projects: {
    getAll: (clientId?: string) => {
      const query = clientId ? `?client_id=${clientId}` : '';
      return apiRequest(`/projects${query}`);
    },
    create: (data: any) => apiRequest('/projects', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
    update: (id: string, data: any) => apiRequest(`/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
    delete: (id: string) => apiRequest(`/projects/${id}`, {
      method: 'DELETE',
    }),
  },
  services: {
    getAll: () => apiRequest('/services'),
    create: (data: any) => apiRequest('/services', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
    update: (id: string, data: any) => apiRequest(`/services/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
    delete: (id: string) => apiRequest(`/services/${id}`, {
      method: 'DELETE',
    }),
  },
};

export interface Client {
  id: string;
  name: string;
  slug: string;
  experience: string;
  total_area: string;
  description: string;
  logo_url: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  client_id: string;
  name: string;
  location: string;
  area: string | null;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: string;
  title: string;
  icon_name: string;
  description: string;
  features: string[];
  image_url: string;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  email: string;
}
