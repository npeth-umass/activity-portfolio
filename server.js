import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, web!");
});

app.get("/aboutme", (req, res) => {
  res.send(
    "Hello, my name is Neville and I am a Comp Sci major at UMass Amherst!",
  );
});

app.get("/skills", (req, res) => {
  res.send("I have experience in C, C++, etc!");
});

app.get("/contactme", (req, res) => {
  res.send(
    "My email is blahblah@gmail.com and my linkedIn is linkedin.com/dsjhflahsdfkh",
  );
});

app.get("/hello", (req, res) => {
  res.send("This is my hello page");
});

//commit test

app.get("/experience", (req, res) => {
  const tag = req.query.tag || "all";
  const work = [
    { name: "Software Internship", tag: "internship" },
    { name: "Government Position", tag: "gov" },
    { name: "Navy software officer", tag: "gov" },
  ];
  if (tag == "all") {
    return res.json(work);
  }

  const filteredWork = [];
  for (const exp of work) {
    if (exp.tag == tag) {
      filteredWork.push(exp);
    }
  }
  res.json(filteredWork);
});

app.get("/projects", (req, res) => {
  const tag = req.query.tag || "everything";
  const projects = [
    { name: "Weather app", tag: "javascript" },
    { name: "Portfolio site", tag: "express" },
    { name: "Budget tracker", tag: "python" },
  ];
  if (tag == "everything") {
    return res.json(projects);
  }
  const filteredProjects = [];
  for (const obj of projects) {
    if (obj.tag == tag) {
      filteredProjects.push(obj);
    }
  }
  res.json(filteredProjects);
});

app.use((req, res) => {
  res.send("Error");
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
