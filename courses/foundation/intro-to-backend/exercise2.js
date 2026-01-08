import express from "express";
import knex from "knex";

const app = express();
const port = 3000;

// This connects to the database stored in the file mentioned below
const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3",
  },
  useNullAsDefault: true, // Omit warning in console
});

// Here is an example of the first route, /all-users, which returns all users sorted by their ID
app.get("/all-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users ORDER BY id ASC;");
  res.json(rows);
});

// TODO implement more routes here

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
//

// /unconfirmed-users should respond with unconfirmed users
app.get("/unconfirmed-users", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM users u where confirmed_at is NULL;"
  );
  res.json(rows);
});

// /gmail-users should respond with users with an @gmail.com email
app.get("/gmail-users", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM users u where confirmed_at is NULL;"
  );
  res.json(rows);
});

// /2022-users should respond with users created in 2022
app.get("/2022-users", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM users WHERE strftime('%Y', created_at) = '2022';"
  );
  res.json(rows);
});

// /user-count should respond with the number of users
app.get("/user-count", async (req, res) => {
  const count_user = await knexInstance.raw(
    "SELECT COUNT(*) AS count FROM users ;"
  );
  res.json(count_user);
});

// /last-name-count should respond with how many users there are with a given last name, sorted alphabetically
app.get("/last-name-count", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT COUNT(*) AS count FROM users WHERE last_name IS NOT NULL AND last_name != '' GROUP BY last_name ORDER BY last_name ASC ;"
  );
  res.json(rows);
});

// /first-user should respond with the first user. If there are no users in the table, respond with a 404

app.get("/first-user", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM users ORDER BY id ASC LIMIT 1;"
  );
  if (rows.length === 0) {
    return res.status(404).json({ error: "No user found" });
  }
  res.json(rows[0]);
});
//Three Extended routes

//Last-user
app.get("/last-user", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM users ORDER BY id DESC LIMIT 1;"
  );
  if (rows.length === 0) {
    return res.status(404).json({ error: "No user found" });
  }
  res.json(rows[0]);
});

//User without last name
app.get("/users-without-last-name", async (req, res) => {
  const [rows] = await knexInstance.raw(
    "SELECT * FROM users WHERE last_name IS NULL OR last_name = '';"
  );

  res.json(rows);
});

//
app.get("/recent-users", async (req, res) => {
  const [rows] = await knexInstance.raw(
    "SELECT * FROM users ORDER BY created_at DESC LIMIT 5;"
  );

  res.json(rows);
});
app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>User Dashboard</title>
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: #f4f6f8;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      .card {
        background-color: white;
        padding: 40px;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        text-align: center;
        width: 300px;
      }
      .count {
        font-size: 48px;
        font-weight: bold;
        color: #2c3e50;
        margin-bottom: 10px;
      }
      .label {
        font-size: 18px;
        color: #7f8c8d;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="count" id="userCount">Loading...</div>
      <div class="label">Total Users</div>
    </div>

    <script>
      fetch("/user-count")
        .then(res => res.json())
        .then(data => {
          document.getElementById("userCount").textContent = data.count;
        })
        .catch(() => {
          document.getElementById("userCount").textContent = "Error";
        });
    </script>
  </body>
</html>
  `);
});
