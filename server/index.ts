import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';
import { config } from 'dotenv';

config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'mamtawat_waterproofing',
  port: parseInt(process.env.DB_PORT || '3306'),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const sessions = new Map<string, { userId: string; email: string }>();

function generateSessionToken(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const [rows] = await pool.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    const users = rows as any[];
    if (users.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = users[0];
    const isValid = await bcrypt.compare(password, user.password_hash);

    if (!isValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = generateSessionToken();
    sessions.set(token, { userId: user.id, email: user.email });

    res.json({
      token,
      user: { id: user.id, email: user.email }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/auth/logout', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (token) {
    sessions.delete(token);
  }
  res.json({ success: true });
});

app.get('/api/auth/session', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token || !sessions.has(token)) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  const session = sessions.get(token);
  res.json({ user: session });
});

function requireAuth(req: any, res: any, next: any) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token || !sessions.has(token)) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  req.user = sessions.get(token);
  next();
}

app.get('/api/clients', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM clients ORDER BY name');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching clients:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/clients/:id', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM clients WHERE id = ?', [req.params.id]);
    const clients = rows as any[];
    if (clients.length === 0) {
      return res.status(404).json({ error: 'Client not found' });
    }
    res.json(clients[0]);
  } catch (error) {
    console.error('Error fetching client:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/clients/slug/:slug', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM clients WHERE slug = ?', [req.params.slug]);
    const clients = rows as any[];
    if (clients.length === 0) {
      return res.status(404).json({ error: 'Client not found' });
    }
    res.json(clients[0]);
  } catch (error) {
    console.error('Error fetching client:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/clients', requireAuth, async (req, res) => {
  try {
    const { name, slug, experience, total_area, description, logo_url, image_url } = req.body;
    const id = crypto.randomUUID();

    await pool.execute(
      'INSERT INTO clients (id, name, slug, experience, total_area, description, logo_url, image_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [id, name, slug, experience, total_area, description, logo_url, image_url]
    );

    res.json({ id, name, slug, experience, total_area, description, logo_url, image_url });
  } catch (error) {
    console.error('Error creating client:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/api/clients/:id', requireAuth, async (req, res) => {
  try {
    const { name, slug, experience, total_area, description, logo_url, image_url } = req.body;

    await pool.execute(
      'UPDATE clients SET name = ?, slug = ?, experience = ?, total_area = ?, description = ?, logo_url = ?, image_url = ? WHERE id = ?',
      [name, slug, experience, total_area, description, logo_url, image_url, req.params.id]
    );

    res.json({ success: true });
  } catch (error) {
    console.error('Error updating client:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/api/clients/:id', requireAuth, async (req, res) => {
  try {
    await pool.execute('DELETE FROM clients WHERE id = ?', [req.params.id]);
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting client:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/projects', async (req, res) => {
  try {
    const clientId = req.query.client_id;
    let query = 'SELECT * FROM projects';
    const params: any[] = [];

    if (clientId) {
      query += ' WHERE client_id = ?';
      params.push(clientId);
    }

    query += ' ORDER BY name';

    const [rows] = await pool.execute(query, params);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/projects', requireAuth, async (req, res) => {
  try {
    const { client_id, name, location, area } = req.body;
    const id = crypto.randomUUID();

    await pool.execute(
      'INSERT INTO projects (id, client_id, name, location, area) VALUES (?, ?, ?, ?, ?)',
      [id, client_id, name, location, area || null]
    );

    res.json({ id, client_id, name, location, area });
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/api/projects/:id', requireAuth, async (req, res) => {
  try {
    const { name, location, area } = req.body;

    await pool.execute(
      'UPDATE projects SET name = ?, location = ?, area = ? WHERE id = ?',
      [name, location, area || null, req.params.id]
    );

    res.json({ success: true });
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/api/projects/:id', requireAuth, async (req, res) => {
  try {
    await pool.execute('DELETE FROM projects WHERE id = ?', [req.params.id]);
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/services', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM services ORDER BY display_order');
    const services = (rows as any[]).map(service => ({
      ...service,
      features: JSON.parse(service.features)
    }));
    res.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/services', requireAuth, async (req, res) => {
  try {
    const { title, icon_name, description, features, image_url, display_order } = req.body;
    const id = crypto.randomUUID();

    await pool.execute(
      'INSERT INTO services (id, title, icon_name, description, features, image_url, display_order) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [id, title, icon_name, description, JSON.stringify(features), image_url, display_order]
    );

    res.json({ id, title, icon_name, description, features, image_url, display_order });
  } catch (error) {
    console.error('Error creating service:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/api/services/:id', requireAuth, async (req, res) => {
  try {
    const { title, icon_name, description, features, image_url, display_order } = req.body;

    await pool.execute(
      'UPDATE services SET title = ?, icon_name = ?, description = ?, features = ?, image_url = ?, display_order = ? WHERE id = ?',
      [title, icon_name, description, JSON.stringify(features), image_url, display_order, req.params.id]
    );

    res.json({ success: true });
  } catch (error) {
    console.error('Error updating service:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/api/services/:id', requireAuth, async (req, res) => {
  try {
    await pool.execute('DELETE FROM services WHERE id = ?', [req.params.id]);
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting service:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
