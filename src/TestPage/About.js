import { Button } from "reactstrap";


const About=()=>{
    return(
        <div>
            <h1>This is About Page</h1>
           <Button color="danger">Primary</Button>
           <Button color="primary">Secondary</Button>
           <Button color="success">Success</Button>
           <Button color="warning">Warning</Button>
           <Button color="danger">Danger</Button>
           <Button color="info">Info</Button>
           <Button color="light">Light</Button>
           <Button color="dark">Dark</Button>   
           <Button color="link">Link</Button>
           <Button color="link" disabled>Disabled</Button>
        </div>
        
    )
}
export default About;