/*
  # Update Clients Schema and Add Projects Table

  ## Overview
  This migration updates the existing clients table schema and creates a new projects table
  for managing client projects separately.

  ## Changes to Existing Tables

  ### `clients` table updates
  - Add `description` (text) column for client descriptions
  - Rename `projects` column to `total_area` for clarity
  - Rename `logo` column to `logo_url` for consistency
  - Rename `image` column to `image_url` for consistency

  ## New Tables

  ### `projects`
  - `id` (uuid, primary key) - Unique identifier for each project
  - `client_id` (uuid, foreign key) - Reference to client
  - `name` (text, required) - Project name
  - `location` (text, required) - Project location
  - `area` (text, optional) - Project area
  - `created_at` (timestamptz) - Timestamp of creation
  - `updated_at` (timestamptz) - Timestamp of last update

  ## Security
  - Enable RLS on projects table
  - Add policies for public read and authenticated write access

  ## Important Notes
  - Client data is preserved during column renames
  - Foreign key ensures data integrity between clients and projects
*/

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add description column to clients table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'clients' AND column_name = 'description'
  ) THEN
    ALTER TABLE clients ADD COLUMN description text DEFAULT '';
  END IF;
END $$;

-- Rename columns if they exist with old names
DO $$
BEGIN
  -- Rename projects to total_area
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'clients' AND column_name = 'projects'
  ) THEN
    ALTER TABLE clients RENAME COLUMN projects TO total_area;
  END IF;

  -- Rename logo to logo_url
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'clients' AND column_name = 'logo'
  ) THEN
    ALTER TABLE clients RENAME COLUMN logo TO logo_url;
  END IF;

  -- Rename image to image_url
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'clients' AND column_name = 'image'
  ) THEN
    ALTER TABLE clients RENAME COLUMN image TO image_url;
  END IF;
END $$;

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id uuid NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  name text NOT NULL,
  location text NOT NULL,
  area text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_projects_client_id ON projects(client_id);

-- Enable Row Level Security on projects
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- RLS Policies for projects table

-- Public can view all projects
CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  USING (true);

-- Authenticated users can insert projects
CREATE POLICY "Authenticated users can insert projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Authenticated users can update projects
CREATE POLICY "Authenticated users can update projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Authenticated users can delete projects
CREATE POLICY "Authenticated users can delete projects"
  ON projects FOR DELETE
  TO authenticated
  USING (true);

-- Create trigger for projects updated_at
DROP TRIGGER IF EXISTS update_projects_updated_at ON projects;
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Update existing clients with default descriptions
UPDATE clients SET description = 
  CASE slug
    WHEN 'ekta-world' THEN 'One of our most valued clients, Ekta World has been a trusted partner since the late 1990s. We have successfully completed numerous waterproofing projects for their prestigious developments.'
    WHEN 'prakash-group' THEN 'Our longest-standing client relationship, spanning over two decades. Prakash Group has trusted us with their most prestigious projects across Mumbai.'
    WHEN 'dimple-realtors' THEN 'A strong partnership built on quality and reliability. Dimple Realtors has been working with us since 1995 on various residential projects.'
    WHEN 'dv-realtors' THEN 'Working with D.V. Realtors across multiple locations including Borivali, Mira Road, and Vasai areas.'
    WHEN 'sj-corporation' THEN 'Successfully delivered waterproofing solutions for S.J. Corporation projects in Vasai and Borivali areas.'
    WHEN 'rachna-group' THEN 'Long-standing relationship with Rachna Group for projects in Bandra and Grant Road areas.'
    WHEN 'yamuna-reality' THEN 'Successfully completed waterproofing projects for Yamuna Reality across multiple prime locations in Mumbai.'
    WHEN 'land-developers' THEN 'Two decades of successful partnership with Land Developers on various waterproofing projects.'
    WHEN 'empire-realtors' THEN 'Long-standing partnership with Empire Realtors, delivering quality waterproofing solutions since 1995.'
    WHEN 'sahakar-group' THEN 'Extensive portfolio with Sahakar Group across prime locations in Mumbai suburbs.'
    WHEN 'parsh-groups' THEN 'Trusted partner of Parsh Groups and Relators for premium residential projects across Mumbai.'
    WHEN 'bj-enterprises' THEN 'Growing partnership with BJ Enterprises on their residential projects in Vasai area.'
    WHEN 'romell-group' THEN 'Trusted partner of Romell Group for residential and commercial waterproofing projects in key Mumbai locations including Borivali East and Malad.'
    ELSE 'Valued client partner for waterproofing projects.'
  END
WHERE description = '';
