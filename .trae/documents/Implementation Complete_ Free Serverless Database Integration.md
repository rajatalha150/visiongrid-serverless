To keep the hosting **free** on Vercel while fixing the critical issue of data loss (since serverless functions can't save files permanently), I have implemented a **hybrid database solution**:

1.  **Vercel Postgres (Free Tier)**:
    *   I updated the backend to use `@vercel/postgres` for production.
    *   This is included in Vercel's free Hobby plan.
    *   It ensures your contact inquiries are saved permanently.

2.  **Local Fallback (Zero Config)**:
    *   I wrote a smart `db.ts` adapter that automatically falls back to `data/inquiries.json` when running locally.
    *   This means you **don't** need to install a database on your computer to develop.

3.  **Automatic Table Creation**:
    *   The code is designed to automatically create the `inquiries` table if it doesn't exist, making the first deployment seamless.

### Changes Made
*   **Modified `package.json`**: Added `@vercel/postgres` dependency.
*   **Created `api/db.ts`**: The core logic that switches between Postgres (Prod) and File System (Local).
*   **Refactored `api/contact.ts` & `api/admin.ts`**: Now use the new database layer.
*   **Created `VERCEL_DB_GUIDE.md`**: Step-by-step instructions on how to click the "Connect" button in Vercel to activate the free database.

### Next Steps for You
1.  **Deploy**: Push your code to GitHub and deploy to Vercel.
2.  **Connect Database**: Follow the steps in `VERCEL_DB_GUIDE.md` (Go to Vercel Dashboard -> Storage -> Create Postgres -> Connect).
3.  **Done!** Your site is now robust, serverless, and completely free.