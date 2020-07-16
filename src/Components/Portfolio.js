import React, { Component } from 'react';
const movieengine = require("../images/portfolio/movieengine.png");
const taskmanage = require("../images/portfolio/taskmanage.png");
const othello = require("../images/portfolio/othello.png");
const rna = require("../images/portfolio/rna.png");
const yelpcamp = require("../images/portfolio/yelpcamp.png");
const issuetracker = require("../images/portfolio/issuetracker.png");

class Portfolio extends Component {

  render() {
    let obj = { "movieengine":movieengine,"taskmanage":taskmanage,"othello":othello,"rna":rna, "yelpcamp":yelpcamp, "issuetracker": issuetracker};

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={obj[projectImage]} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
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
