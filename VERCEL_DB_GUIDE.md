# Free Vercel Database Setup Guide

To keep your hosting completely free while ensuring your data (inquiries) is saved permanently, we have updated the project to use **Vercel Postgres (Hobby Tier)**.

## Why this change?
Serverless functions (like on Vercel) cannot save files to disk permanently. If you use a file (like `inquiries.json`), it will disappear after a few minutes. A database is required.

## Setup Instructions

### 1. Deploy to Vercel
1. Push this code to your GitHub repository.
2. Go to [Vercel Dashboard](https://vercel.com/dashboard) and import your project.
3. Deploy it.

### 2. Create a Free Database
1. In your Vercel Project Dashboard, click on the **Storage** tab.
2. Click **Connect Store** -> **Create New** -> **Postgres**.
3. Accept the terms (it's free for the Hobby tier).
4. Give it a name (e.g., `visiongrid-db`) and select a region (use the same region as your functions, e.g., Washington D.C. `iad1`).
5. Click **Create & Continue**.
6. **Important**: Click **Connect** to link it to your `visiongrid-serverless` project. This automatically sets the environment variables (`POSTGRES_URL`, etc.).

### 3. Initialize the Table
You don't strictly need to do this manually because the code attempts to create the table automatically if it's missing!

However, for a robust setup, you can run the SQL manually:
1. Go to the **Storage** tab -> Select your database.
2. Click **Query** on the left sidebar.
3. Copy the content of `api/schema.sql` and paste it into the query runner.
4. Click **Run Query**.

## Local Development
Good news! You don't need to set up a database locally.
* The code automatically detects if it's running locally (no database variables).
* It falls back to saving data in `data/inquiries.json`.
* This means you can develop offline without any complex setup.

## Troubleshooting
* **"Table not found" error**: The application attempts to auto-create the table, but if it fails, follow step 3 above.
* **Authentication**: Remember the default admin password is `admin123`. You can change this by adding an Environment Variable named `ADMIN_PASSWORD` in Vercel settings.
