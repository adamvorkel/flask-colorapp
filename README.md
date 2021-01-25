# Flask Color App

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <!-- <li><a href="#roadmap">Roadmap</a></li> -->
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is a portfolio project consisting of a basic app for browsing user submitted color palettes. It includes

- submitting color palettes
- browsing and upvoting color palettes
- extracting color palettes from images

### Built With

* React
* Python  
* Flask
* Postgres



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

To run this project you will need to have docker and docker-compose installed.
[Get Docker](https://docs.docker.com/get-docker/)
[Install Docker Compose](https://docs.docker.com/compose/install/)


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/adamvorkel/flask-colorapp.git
   ```
2. Build the containers
   ```sh
   cd flask-colorapp
   docker-compose build
   ```


<!-- USAGE EXAMPLES -->
## Usage

Simply run 
```sh
docker-compose up -d
```
and navigate to localhost:3000 to view the app.

<!-- ROADMAP 
## Roadmap

See the [open issues](https://github.com/github_username/repo_name/issues) for a list of proposed features (and known issues).
-->

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Adam Vorkel - [@AdamVorkel](https://twitter.com/AdamVorkel) - adamvorkel@gmail.com