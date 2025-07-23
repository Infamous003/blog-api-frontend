# Blog Frontend – React + Vite

This is the **frontend** for my Blog API project, built with **JavaScript** and **ReactJS**.  
I've used **WebTUI** to give it a terminal-ish look.

## Live Demo

Try it out:  
https://majestic-croquembouche-a1c89c.netlify.app/

You can log in with the following test credentials:

- **Username**: `testuser`  
- **Password**: `password123`

Or feel free to register and create your own account.

## About the Project

This blog app allows users to:
- Write and publish blog posts using **Markdown**
- Edit or delete their own posts
- Sign up, log in, and stay authenticated using JWT tokens


The frontend is communicating with a blog API hosted separately.
If you would like to interact with the API directly visit: 
https://blog-api-1i1j.onrender.com/docs

---

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [WebTUI](https://webtui.ironclad.sh/) for UI styling
- RESTful API (built with FastAPI, hosted separately)

---

## Getting Started

If you want to run it locally:

```bash
git clone https://github.com/yourusername/blog-frontend.git
cd blog-frontend
npm install
npm run dev