import React, { Component } from 'react';
import data from '../resumeData.json';
const movieengine = require("../images/portfolio/movieengine.png");
const taskmanage = require("../images/portfolio/taskmanage.png");
const othello = require("../images/portfolio/othello.png");
const rna = require("../images/portfolio/rna.png");
const yelpcamp = require("../images/portfolio/yelpcamp.png");
const issuetracker = require("../images/portfolio/issuetracker.png");
const microservices = require("../images/portfolio/issuetracker.png");


class Portfolio extends Component {

  render() {
    let obj = { "movieengine":movieengine,"taskmanage":taskmanage,"othello":othello,"rna":rna, "yelpcamp":yelpcamp, "issuetracker": issuetracker, "microservices": microservices};
    let web = { "issuetracker": "https://tracker-ui-sry19.herokuapp.com/", "movieengine": "https://github.com/sry19/c5007_hw/tree/master/project", "taskmanage": "https://github.com/sry19/java5004_teamprojects/tree/master/hw9",
  "othello": "https://github.com/sry19/python5001/tree/master/hw12","yelpcamp":"https://frozen-chamber-52515.herokuapp.com/campgrounds","rna":"https://github.com/sry19","microservices":"https://github.com/sry19/PhotoApp"}

    if(data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = projects.image;
        var u = projects.url;
        console.log(projects.url);
        return <div key={projects.title} className="columns portfolio-item">
          
           <div className="item-wrap">
           <a href={web[projectImage]}><img alt={projects.title} src={obj[projectImage]} /></a>
               {/**<img alt={projects.title} src={obj[projectImage]} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><a href={web[projectImage]}><i className="fa fa-link"></i></a></div>
      */}
          </div>
          
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
