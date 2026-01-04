/*
  # Create clients table for managing builders and developers

  1. New Tables
    - `clients`
      - `id` (uuid, primary key)
      - `name` (text, required) - Name of the builder/developer
      - `slug` (text, unique) - URL-friendly identifier
      - `experience` (text) - Years of experience (e.g., "22 Years")
      - `projects` (text) - Total projects completed (e.g., "18,45,000 sq.ft")
      - `logo` (text) - Logo image URL
      - `image` (text) - Featured image URL
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `clients` table
    - Add policy to allow authenticated users to manage clients
    - Allow public read access to clients list
*/

CREATE TABLE IF NOT EXISTS clients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  experience text NOT NULL DEFAULT '',
  projects text NOT NULL DEFAULT '',
  logo text NOT NULL DEFAULT '',
  image text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view clients"
  ON clients FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can manage clients"
  ON clients FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update clients"
  ON clients FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete clients"
  ON clients FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX idx_clients_slug ON clients(slug);
