-- Create Database
CREATE DATABASE IF NOT EXISTS mamtawat_waterproofing;
USE mamtawat_waterproofing;

-- Create users table for authentication
CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create clients table
CREATE TABLE IF NOT EXISTS clients (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  experience VARCHAR(255) NOT NULL,
  total_area VARCHAR(255) NOT NULL,
  description TEXT DEFAULT '',
  logo_url TEXT NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  client_id VARCHAR(36) NOT NULL,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  area VARCHAR(255) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_projects_client_id ON projects(client_id);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  title VARCHAR(255) NOT NULL,
  icon_name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  features JSON NOT NULL,
  image_url TEXT NOT NULL,
  display_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create index for ordering
CREATE INDEX IF NOT EXISTS idx_services_display_order ON services(display_order);

-- Insert existing clients data (from migration)
INSERT IGNORE INTO clients (slug, name, experience, total_area, description, logo_url, image_url) VALUES
('ekta-world', 'Ekta World', '22 Years', '18,45,000 sq.ft', 'One of our most valued clients, Ekta World has been a trusted partner since the late 1990s. We have successfully completed numerous waterproofing projects for their prestigious developments.', 'https://cdn.zaubacorp.com/logos/Ekta_World-20200703.png', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800'),
('prakash-group', 'Prakash Group', '22 Years', '3,54,000 sq.ft', 'Our longest-standing client relationship, spanning over two decades. Prakash Group has trusted us with their most prestigious projects across Mumbai.', 'https://assets.architecturaldigest.in/photos/60083da68e5a9a4c2e1fb62f/master/w_1600%2Cc_limit/Hyderabad-home-inside-a-grid-1366x768.jpg', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'),
('dimple-realtors', 'Dimple Realtors', '20 Years', '7,80,000 sq.ft', 'A strong partnership built on quality and reliability. Dimple Realtors has been working with us since 1995 on various residential projects.', 'https://media.licdn.com/dms/image/v2/C4D0BAQGNMq_QJ5GZKA/company-logo_200_200/company-logo_200_200/0/1631303617647?e=2147483647&v=beta&t=ZOtQNb5zYGW7MvZJzGQ4mYFxQkQxYvxLxDJYzGlQWzg', 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800'),
('dv-realtors', 'D.V. Realtors', '15 Years', '10,20,000 sq.ft', 'Working with D.V. Realtors across multiple locations including Borivali, Mira Road, and Vasai areas.', 'https://content3.jdmagicbox.com/comp/mumbai/q4/022pxx22.xx22.180315130928.x6q4/catalogue/d-v-realtors-borivali-west-mumbai-estate-agents-for-residential-rental-jhhz5h4xwf.jpg', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'),
('sj-corporation', 'S.J. Corporation', '18 Years', '8,50,000 sq.ft', 'Successfully delivered waterproofing solutions for S.J. Corporation projects in Vasai and Borivali areas.', 'https://content.jdmagicbox.com/comp/def_content/builders/default-builders-6.jpg', 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800'),
('rachna-group', 'Rachna Group', '15 Years', '6,25,000 sq.ft', 'Long-standing relationship with Rachna Group for projects in Bandra and Grant Road areas.', 'https://content.jdmagicbox.com/comp/def_content/builders/default-builders-2.jpg', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800'),
('yamuna-reality', 'Yamuna Reality', '17 Years', '9,50,000 sq.ft', 'Successfully completed waterproofing projects for Yamuna Reality across multiple prime locations in Mumbai.', 'https://content.jdmagicbox.com/comp/def_content/builders/default-builders-4.jpg', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'),
('land-developers', 'Land Developers', '22 Years', '5,75,000 sq.ft', 'Two decades of successful partnership with Land Developers on various waterproofing projects.', 'https://content.jdmagicbox.com/comp/def_content/builders/default-builders-8.jpg', 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800'),
('empire-realtors', 'Empire Realtors', '20 Years', '7,20,000 sq.ft', 'Long-standing partnership with Empire Realtors, delivering quality waterproofing solutions since 1995.', 'https://content.jdmagicbox.com/comp/def_content/builders/default-builders-3.jpg', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'),
('sahakar-group', 'Sahakar Group', '16 Years', '8,80,000 sq.ft', 'Extensive portfolio with Sahakar Group across prime locations in Mumbai suburbs.', 'https://content.jdmagicbox.com/comp/def_content/builders/default-builders-1.jpg', 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800'),
('parsh-groups', 'Parsh Groups and Relators', '14 Years', '4,90,000 sq.ft', 'Trusted partner of Parsh Groups and Relators for premium residential projects across Mumbai.', 'https://content.jdmagicbox.com/comp/def_content/builders/default-builders-5.jpg', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800'),
('bj-enterprises', 'BJ Enterprises', '12 Years', '3,65,000 sq.ft', 'Growing partnership with BJ Enterprises on their residential projects in Vasai area.', 'https://content.jdmagicbox.com/comp/def_content/builders/default-builders-7.jpg', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'),
('romell-group', 'Romell Group', '18 Years', '6,00,000 sq.ft', 'Trusted partner of Romell Group for residential and commercial waterproofing projects in key Mumbai locations including Borivali East and Malad.', 'https://www.romellgroup.com/images/logo.png', 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800');

-- Insert existing services data
INSERT IGNORE INTO services (title, icon_name, description, features, image_url, display_order) VALUES
('Terrace Waterproofing', 'Droplets', 'Comprehensive terrace waterproofing solutions to protect your property from monsoon damage and water seepage.', '["Coating and membrane application", "Crack filling and repair", "Slope correction", "Drainage system installation", "Post-monsoon maintenance"]', 'https://lh4.googleusercontent.com/RZZpIa98EEusLivZmq4Vkm4td-U2yQ3mtUMH2wiPaZvARZc7Wjvl962nK-eSOgst8jvyw8ynJ3e8ev0GlLJYSa8Y4i-xrYZiHwIP5RE8Ktya7PSALzBFtJ94OMZDUv1hn7h9ICau', 1),
('Bathroom & WC Waterproofing', 'Shield', 'Complete bathroom waterproofing services to prevent leakage and dampness in wet areas.', '["Floor and wall waterproofing", "Shower area treatment", "Tile joint sealing", "Anti-fungal coating", "Drainage line waterproofing"]', 'https://www.baumerk.com/storage/app/media/blog/banyo-su-yalitimi/islak-zemin-su-yalitimi.jpg', 2),
('Water Tank Waterproofing', 'Droplets', 'Specialized waterproofing for overhead and underground water tanks to ensure clean water storage.', '["Internal coating application", "Crack repair and sealing", "Leak detection and fixing", "Cleaning and sanitization", "Regular maintenance"]', 'https://dropex.in/wp-content/uploads/2024/08/Potable-Water-Tank-Coatings.jpg', 3),
('China Mosaic Fixing', 'Wrench', 'Expert china mosaic installation with proper waterproofing treatment for long-lasting results.', '["Surface preparation", "Waterproof adhesive application", "Precise mosaic installation", "Joint sealing and grouting", "Final protective coating"]', 'https://i.ytimg.com/vi/rmQ9ethSLuc/maxresdefault.jpg', 4),
('PU Grouting', 'Zap', 'Polyurethane grouting for sealing cracks, cavities, and gaps in concrete structures with high precision.', '["Crack and cavity filling", "Concrete strengthening", "Expansion joint sealing", "Basement waterproofing", "Injected foam expansion"]', 'https://www.fcsc.co.in/_next/image?url=%2FFCSC%20PRODUCT%20WEBP%2Fepgroutpu2k.webp&w=828&q=75', 5),
('PU Coating', 'Layers', 'High-performance polyurethane coating for superior waterproofing protection and durability.', '["Elastomeric coating application", "UV resistance treatment", "Temperature-resistant finish", "Seamless protection layer", "Chemical resistance"]', 'https://images.jdmagicbox.com/quickquotes/images_main/-1wpa31ia.jpg', 6),
('Membrane Work', 'Shield', 'Modern membrane waterproofing technology for maximum protection against water intrusion.', '["Flexible membrane installation", "Torch-applied membranes", "Self-adhesive membranes", "Joint and overlap sealing", "Long-term durability"]', 'https://www.westernadvocate.com.au/images/transform/v1/crop/frm/JbL8dJ5dh2XzNFST9PPkaJ/ac7f42e0-58c3-4295-bb6f-1ab68c48bc5e.jpg/r0_2_1100_733_w1200_h678_fmax.jpg', 7),
('Box Type Waterproofing', 'Droplets', 'Complete waterproofing enclosure for basements, underground structures, and water storage boxes.', '["Foundation waterproofing", "Underground structure protection", "Box casting sealing", "Internal and external coating", "Multi-layer protection"]', 'https://i.ytimg.com/vi/PipsxcFWwvc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBolFq5DUWpNREf3zeCtVAN5yTDmQ', 8),
('Side Wall Waterproofing', 'Shield', 'Specialized waterproofing for exterior and interior side walls to prevent moisture and seepage.', '["Exterior wall protection", "Interior dampness prevention", "Breathable coating application", "Crack monitoring and repair", "Long-lasting protection"]', 'https://5.imimg.com/data5/SELLER/Default/2025/4/506594942/GY/ZL/LQ/244844032/image-2025-04-28t170839-038-500x500.png', 9),
('Bitumen Work', 'Wrench', 'Traditional bitumen-based waterproofing solutions for cost-effective protection and sealing.', '["Bitumen coating application", "Asphalt waterproofing", "Crack sealing with bitumen", "Surface preparation and priming", "Budget-friendly solutions"]', 'https://123oil.co.uk/wp-content/uploads/2025/10/bitumen-work.jpg', 10);
