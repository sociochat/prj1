/*
  # Create Services Management Table

  ## Overview
  This migration creates a table for managing services displayed on the Services page.

  ## New Tables

  ### `services`
  - `id` (uuid, primary key) - Unique identifier for each service
  - `title` (text, required) - Service title
  - `icon_name` (text, required) - Name of the icon to use (Droplets, Shield, Wrench, etc.)
  - `description` (text, required) - Service description
  - `features` (jsonb, required) - Array of features as JSON
  - `image_url` (text, required) - URL to service image
  - `display_order` (integer, required) - Order in which services should be displayed
  - `created_at` (timestamptz) - Timestamp of creation
  - `updated_at` (timestamptz) - Timestamp of last update

  ## Security
  - Enable RLS on services table
  - Public read access for website display
  - Authenticated write access for admin panel

  ## Important Notes
  - Features stored as JSONB array for flexibility
  - Display order allows custom sorting
  - All services visible to public
*/

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  icon_name text NOT NULL,
  description text NOT NULL,
  features jsonb NOT NULL DEFAULT '[]'::jsonb,
  image_url text NOT NULL,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create index for ordering
CREATE INDEX IF NOT EXISTS idx_services_display_order ON services(display_order);

-- Enable Row Level Security
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- RLS Policies for services table

-- Public can view all services
CREATE POLICY "Anyone can view services"
  ON services FOR SELECT
  USING (true);

-- Authenticated users can insert services
CREATE POLICY "Authenticated users can insert services"
  ON services FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Authenticated users can update services
CREATE POLICY "Authenticated users can update services"
  ON services FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Authenticated users can delete services
CREATE POLICY "Authenticated users can delete services"
  ON services FOR DELETE
  TO authenticated
  USING (true);

-- Create trigger for services updated_at
DROP TRIGGER IF EXISTS update_services_updated_at ON services;
CREATE TRIGGER update_services_updated_at
  BEFORE UPDATE ON services
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert existing services data
INSERT INTO services (title, icon_name, description, features, image_url, display_order) VALUES
(
  'Terrace Waterproofing',
  'Droplets',
  'Comprehensive terrace waterproofing solutions to protect your property from monsoon damage and water seepage.',
  '["Coating and membrane application", "Crack filling and repair", "Slope correction", "Drainage system installation", "Post-monsoon maintenance"]'::jsonb,
  'https://lh4.googleusercontent.com/RZZpIa98EEusLivZmq4Vkm4td-U2yQ3mtUMH2wiPaZvARZc7Wjvl962nK-eSOgst8jvyw8ynJ3e8ev0GlLJYSa8Y4i-xrYZiHwIP5RE8Ktya7PSALzBFtJ94OMZDUv1hn7h9ICau',
  1
),
(
  'Bathroom & WC Waterproofing',
  'Shield',
  'Complete bathroom waterproofing services to prevent leakage and dampness in wet areas.',
  '["Floor and wall waterproofing", "Shower area treatment", "Tile joint sealing", "Anti-fungal coating", "Drainage line waterproofing"]'::jsonb,
  'https://www.baumerk.com/storage/app/media/blog/banyo-su-yalitimi/islak-zemin-su-yalitimi.jpg',
  2
),
(
  'Water Tank Waterproofing',
  'Droplets',
  'Specialized waterproofing for overhead and underground water tanks to ensure clean water storage.',
  '["Internal coating application", "Crack repair and sealing", "Leak detection and fixing", "Cleaning and sanitization", "Regular maintenance"]'::jsonb,
  'https://dropex.in/wp-content/uploads/2024/08/Potable-Water-Tank-Coatings.jpg',
  3
),
(
  'China Mosaic Fixing',
  'Wrench',
  'Expert china mosaic installation with proper waterproofing treatment for long-lasting results.',
  '["Surface preparation", "Waterproof adhesive application", "Precise mosaic installation", "Joint sealing and grouting", "Final protective coating"]'::jsonb,
  'https://i.ytimg.com/vi/rmQ9ethSLuc/maxresdefault.jpg',
  4
),
(
  'PU Grouting',
  'Zap',
  'Polyurethane grouting for sealing cracks, cavities, and gaps in concrete structures with high precision.',
  '["Crack and cavity filling", "Concrete strengthening", "Expansion joint sealing", "Basement waterproofing", "Injected foam expansion"]'::jsonb,
  'https://www.fcsc.co.in/_next/image?url=%2FFCSC%20PRODUCT%20WEBP%2Fepgroutpu2k.webp&w=828&q=75',
  5
),
(
  'PU Coating',
  'Layers',
  'High-performance polyurethane coating for superior waterproofing protection and durability.',
  '["Elastomeric coating application", "UV resistance treatment", "Temperature-resistant finish", "Seamless protection layer", "Chemical resistance"]'::jsonb,
  'https://images.jdmagicbox.com/quickquotes/images_main/-1wpa31ia.jpg',
  6
),
(
  'Membrane Work',
  'Shield',
  'Modern membrane waterproofing technology for maximum protection against water intrusion.',
  '["Flexible membrane installation", "Torch-applied membranes", "Self-adhesive membranes", "Joint and overlap sealing", "Long-term durability"]'::jsonb,
  'https://www.westernadvocate.com.au/images/transform/v1/crop/frm/JbL8dJ5dh2XzNFST9PPkaJ/ac7f42e0-58c3-4295-bb6f-1ab68c48bc5e.jpg/r0_2_1100_733_w1200_h678_fmax.jpg',
  7
),
(
  'Box Type Waterproofing',
  'Droplets',
  'Complete waterproofing enclosure for basements, underground structures, and water storage boxes.',
  '["Foundation waterproofing", "Underground structure protection", "Box casting sealing", "Internal and external coating", "Multi-layer protection"]'::jsonb,
  'https://i.ytimg.com/vi/PipsxcFWwvc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBolFq5DUWpNREf3zeCtVAN5yTDmQ',
  8
),
(
  'Side Wall Waterproofing',
  'Shield',
  'Specialized waterproofing for exterior and interior side walls to prevent moisture and seepage.',
  '["Exterior wall protection", "Interior dampness prevention", "Breathable coating application", "Crack monitoring and repair", "Long-lasting protection"]'::jsonb,
  'https://5.imimg.com/data5/SELLER/Default/2025/4/506594942/GY/ZL/LQ/244844032/image-2025-04-28t170839-038-500x500.png',
  9
),
(
  'Bitumen Work',
  'Wrench',
  'Traditional bitumen-based waterproofing solutions for cost-effective protection and sealing.',
  '["Bitumen coating application", "Asphalt waterproofing", "Crack sealing with bitumen", "Surface preparation and priming", "Budget-friendly solutions"]'::jsonb,
  'https://123oil.co.uk/wp-content/uploads/2025/10/bitumen-work.jpg',
  10
);
