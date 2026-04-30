// CV
function generateCV() {
  let name = document.getElementById("name").value;
  let skill = document.getElementById("skill").value;

  document.getElementById("cv").innerText =
    "Name: " + name + "\nSkill: " + skill;
}

// Date
function convert() {
  let d = document.getElementById("date").value;
  document.getElementById("result").innerText =
    "Converted (demo): " + d;
}

// Blog (LOCAL STORAGE)
function addPost() {
  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;

  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.push({title, content});
  localStorage.setItem("posts", JSON.stringify(posts));

  showPosts();
}

function showPosts() {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  let html = "";

  posts.forEach(p => {
    html += `<div><h3>${p.title}</h3><p>${p.content}</p></div>`;
  });

  document.getElementById("posts").innerHTML = html;
}

window.onload = showPosts;