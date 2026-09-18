import ProjectItem from "./ProjectItem";

export default function ProjectsSection() {
    return (
        <div className="projects section" id="projects">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <h2>Discover Our <em>Work</em> &amp; <span>Projects</span></h2>
                            <div className="line-dec"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="projects-grid">
                            <ProjectItem 
                                imageUrl="assets/images/projects-01.jpg"
                                title="Digital Agency HTML Templates"/>
                            
                            <ProjectItem 
                                imageUrl="assets/images/projects-02.jpg" 
                                title="Admin Dashboard CSS Templates"/>
                            
                            <ProjectItem 
                                imageUrl="assets/images/projects-03.jpg"
                                title="Best Responsive Website Layouts"/>
                            
                            <ProjectItem 
                                imageUrl="assets/images/projects-04.jpg"
                                title="HTML CSS Layouts for your websites"/>
                            
                            <ProjectItem 
                                imageUrl="assets/images/projects-02.jpg"
                                title="Bootstrap 5 Themes for Free"/>
                            
                            <ProjectItem 
                                imageUrl="assets/images/projects-03.jpg"
                                title="Mobile Friendly Website Layouts"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}