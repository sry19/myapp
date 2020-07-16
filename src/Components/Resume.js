import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        </div>
      })


      var work = this.props.data.work.map(function(work){
        if (work.description) {
          var lines = work.description.map(function(line) {
            return <li key={line}>{line}</li>
          })
        }
        return <div key={work.title}><h3>{work.title}</h3>
            <p className="info">{work.company}</p>
            <p className="info"><em className="date">{work.years}</em></p>
            <p>{lines}</p>
        </div>
      })


      var proj = this.props.data.projects.map(function(project){
        if (project.details) {
          var lines1 = project.details.map(function(line1) {
            return <li key={line1}>{line1}</li>
          })
        }
        return <div key={project.title}><a href={project.url}><h3>{project.title}</h3></a>
            <p className="info">{project.location}</p>
            <p className="info"><em className="date">{project.time}</em></p>
            <p>{lines1}</p>
        </div>
      })


      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work Experience</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>

      <div className="row work">

      <div className="three columns header-col">
        <h1><span>Projects</span></h1>
      </div>

      <div className="nine columns main-col">
      {proj}
      </div>
      </div>


      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
