# Node Express Assessment Scaffold

This project is a small Express scaffold to host converted solutions from the Java assessment PDF.

What I created:
- `index.js` — Express server entry
- `routes/problems.js` — example router for problems
- `controllers/problemsController.js` — placeholder controllers
- `package.json` — project manifest

How to run:

1. Change to the project directory:

```bash
cd /Users/nikhil/Desktop/notes/node-express-assessment
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

Server runs on port 3000 by default. Example endpoints:
- GET / -> welcome text
- GET /api/problems -> list placeholders
- GET /api/problems/p1 -> placeholder
- POST /api/problems/p1 -> placeholder (JSON body)

Next steps I can take for you:
- Convert each Java problem from the PDF into an endpoint or module and implement logic.
- Add unit tests (Jest) and run them.
- Switch to TypeScript or ESM if you prefer.

Please either upload the PDF into the workspace or paste the Java problems you want converted so I can implement them inside this scaffold.
