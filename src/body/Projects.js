import { Link } from "react-router-dom";
import { devList } from "../assets/img/dev/Dev";

function Projects() {
    const linkLabels = ["Visit website", "View repository"];
    const project = (key, title, desc, site = null, repo = null, skills) => {
        const renderLinks = () => {
            if (!site && !repo) throw new Error("Project must have a site or repo link");
            
            if (site && repo) {
                return (
                    <div className="project-links">
                        <a href={site} target="_blank" rel="noreferrer">{linkLabels[0]}</a>
                        <span className="bullet"></span>
                        <a href={repo} target="_blank" rel="noreferrer">{linkLabels[1]}</a>
                    </div>
                )
            }
            
            return (
                <a href={site || repo} target="_blank" rel="noreferrer">{repo ? linkLabels[1] : linkLabels[0] }</a>
            )
        }

        if(Array.isArray(skills)) {
            return (      
                <div className="project" key={key}>
                    <div className="desc">
                        <h3>{title}</h3>
                        {desc}
                        {renderLinks()}
                    </div>
                    <div className="skills">
                        {skills.map((s, i) => <img key={i} src={devList[s].src} alt={devList[s].name} title={devList[s].name} />)}
                    </div>
                </div>
            )
        }
    }

    const projectList = [
        {
            title: "Arkad World",
            desc: (
                <div>
                    <p>Arkad World Ltd is a Kenyan company specialising in conference interpreting, translation and conference management services. I was tasked with overhauling the company's website by removing Wordpress and building a simple, new design.</p>
                </div>
            ),
            site: "https://arkadworld.com/",
            skills: ["greensock", "js", "jekyll", "sass"],
        },
        {
            title: "TEKKEN 254",
            desc: (
                <div>
                    <p>TEKKEN 254 is a venture seeking to grow the Tekken community and establish a competitive Tekken scene in Kenya. Following feedback from users, I took on a project to take the existing website off Wix and rebuild it with Bootstrap and jQuery on the front end to make it more lightweight and responsive. The website is generated using Jekyll, with Netlify CMS integrated as a content management tool.</p>
                    <p>The project is still ongoing as some content is yet to be migrated, and back-end development yet to be completed.</p>
                </div>
            ),
            site: "https://tekken254.co.ke/",
            skills: ["bootstrap", "jquery", "jekyll", "netlifyCMS"],
        },
        {
            title: "Man of Substance",
            desc: (
                <div>
                    <p><em>Man of Substance</em> is my debut studio album as a musician, under my pseudonym DVK. For its website, I created a PERN app that allows users to view information about the album, including its credits as well as a synopsis, lyrics and credits for each track. Crowdfunding contributors are also able to claim their rewards on the app.</p>
                    <p>If you'd like viewing access to the app's repositories, kindly send me an email from the <Link to="/contact">Contact page</Link>.</p>
                </div>
            ),
            site: "https://mos.davykamanzi.com/",
            skills: ["postgres", "express", "react", "node", "sass", "aws"],
        }
    ]

    return (
        <div id="projects">
                <div className="mobile-filler"></div>
                <h2 className="uppercase">Projects</h2>
                {projectList.map((p, i) => project(i, p.title, p.desc, p.site, p.repo, p.skills))}
        </div>
    )
}

export default Projects;