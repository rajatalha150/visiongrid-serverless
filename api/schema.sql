-- Vercel Postgres Schema for VisionGrid

-- 1. Create the inquiries table
CREATE TABLE IF NOT EXISTS inquiries (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  message TEXT NOT NULL,
  service VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(20) CHECK (status IN ('new', 'contacted', 'closed')) DEFAULT 'new'
);

-- 2. Create an index on created_at for faster sorting/pagination
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at DESC);

-- 3. (Optional) Insert some sample data
-- INSERT INTO inquiries (name, email, message, status) VALUES 
-- ('Test User', 'test@example.com', 'This is a test message.', 'new');
