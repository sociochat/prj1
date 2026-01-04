import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';
import { config } from 'dotenv';

config();

async function createAdmin() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'mamtawat_waterproofing',
    port: parseInt(process.env.DB_PORT || '3306'),
  });

  const email = 'admin@example.com';
  const password = 'admin123';
  const hashedPassword = await bcrypt.hash(password, 10);
  const id = crypto.randomUUID();

  try {
    await connection.execute(
      'INSERT INTO users (id, email, password_hash) VALUES (?, ?, ?)',
      [id, email, hashedPassword]
    );
    console.log('Admin user created successfully!');
    console.log('Email:', email);
    console.log('Password:', password);
  } catch (error: any) {
    if (error.code === 'ER_DUP_ENTRY') {
      console.log('Admin user already exists');
    } else {
      console.error('Error creating admin:', error);
    }
  } finally {
    await connection.end();
  }
}

createAdmin();
