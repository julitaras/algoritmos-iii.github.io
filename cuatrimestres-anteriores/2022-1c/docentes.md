---
layout: page
title: Docentes
---

<style>
.gallery {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  justify-content: center;
}

.card {
  border: 1px solid #dadada;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  margin: 3px;
  width: 32%;
  flex-direction: column;
}

.card h4 {
  padding: 2px;
  font-size: medium;
  margin: 8px 0;
}

.card:hover {
  box-shadow: 8px 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card .card-container {
  padding: 8px 14px;
}

.card .profile {
  width: 100%;
  height: 22vw;
  object-fit: cover;
}

a:link {
  text-decoration: none;
}

@media only screen and (max-width: 700px) {
  .card .profile {
    height: 40vw;
  }
}

@media only screen and (max-width: 500px) {
  .card {
    width: 70%;
  }
  .card .profile {
    height: 60vw;
  }
}

@media only screen and (max-width: 380px) {
  .card {
    width: 78%;
  }
  .card .profile {
    height: 80vw;
  }
}
</style>
<div class="gallery">
{%- for docente in site.data.docentes -%}
  <div class="card">
    <img src="{{docente.profile-image | relative_url }}" alt="image" class="profile"/>
    <div class="card-container">
      <h4>{{ docente.name }}</h4>
      <a href="https://github.com/{{docente.github}}" target="_blank">
        <img alt="github icon" width="22px" src="https://icongr.am/fontawesome/github.svg?size=128&color=7c7c7c" />
      </a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to={{docente.email}}" target="_blank">
        <img alt="email icon" width="22px" src="https://icongr.am/clarity/email.svg?size=128&color=7c7c7c" />
      </a>
    </div>
  </div>
{%- endfor -%}
</div>
