import { Card, CardBody, CardHeader, Col, Container, Form, Row, FormGroup, Label, Input, Button } from "reactstrap";
import { loadAllCategories,saveCategory } from "../service/category-service";
import { useState, useEffect, useRef } from "react";
import JoditEditor from "jodit-react";
import { getCurrentUserDetail } from "../auth/Auth";


function AddPost() {

    // We want this category to be loaded on the page load. 
    //So the below function will be called on page laod and call the loadAllCategories() and set the all the category in the category state.
    const [categories, setCategories] = useState([]);
    const [currentUser,setCurrentUser]=useState({});
    useEffect(() => {
        setCurrentUser(getCurrentUserDetail()); // Fetch the currnet user detail and put into currentUser useState variable
        loadAllCategories()
            .then(response => {
                console.log(response);
                setCategories(response);
            })
            .catch(error => {
                console.log(error);
            });
    }, []); // here we have not provide any input [] so it will be called only once at the start of the application process and not again.

    // jodit-react rict text editor configuration and state variable for content of the post. 
    const editor = useRef(null);
    const [content, setContent] = useState("");
    const config = {
        placeholder: 'Start typing here...',
    }
    // const config = useMemo(
    // 	{
    // 		readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    // 		placeholder:  'Start typings...'
    // 	},
    // 	[]
    // );
    // Two way binding for form fields. The first one is for title. The second one is for jodit editor. The third one is for categories.
    const [postData, setPostData] = useState({
        title: "",
        content: "",
        categoryId: "",
    })
    function handleFieldChange(event, fieldName) {
        setPostData({ ...postData, [fieldName]: event.target.value });
        event.preventDefault();
        console.log("data::", postData);
    }
    function contentFieldChange(contentField) {
        setPostData({ ...postData, content: contentField });
        console.log("data::", postData);
    }


    // Function for calling api and submit the form. 
    
    function submitForm(event, postData) {
        event.preventDefault();
        console.log("onSubmit data", postData);
        // client side validation
        if (postData.title === "") {
            alert("Title fields are mandatory");
            return;
        }
        if(  postData.content === "")   {
            alert("Content fields are mandatory");
            return;
        }
        if(  postData.categoryId === "")   {
            alert("Select at least one category");
            return;
        }
        // Api Call to server 

        console.log("data::", postData);
        postData['userId']=currentUser.id
        console.log("data with userid::", postData);
        // Call server api for sendign data to server
        saveCategory(postData).then((response) => {
            console.log("response :::::::::", response);
            console.log("status", response.status);
            if (response.status === 201) {
                alert("Post Added Successfully");
                resetData();
            }
        }).catch((error) => {
            console.log("error", error);    
            // if(error.response.status === 401){
            //     alert("Something went wrong==>"+ error.message);
            // }
            
        });
    }
   function resetData() {
        setPostData({
            title: "",
            content: "",
            categoryId: "",
        });
    }

    return (

        <div className="wrapper">
            <Container>
                <Row>
                    {JSON.stringify(postData)}
                    <Col sm={{ size: 8, offset: 2 }}>
                        <Card color="dark" light outline className="mt-3">
                            <CardHeader styele={{ textAlign: "center" }} className="ms-1"><h3>Add Post</h3></CardHeader>
                            <CardBody>
                                <Form onSubmit={((event)=>submitForm(event,postData))}>
                                    <FormGroup style={{ textAlign: "left" }}>
                                        <Label for="title" className="ms-1">Title</Label>
                                        <Input type="text"
                                            name="title"
                                            id="title"
                                            placeholder="Enter Title.."
                                            valid
                                            value={postData.title}
                                            onChange={(event) => handleFieldChange(event, "title")}
                                        />
                                    </FormGroup>
                                    <FormGroup style={{ textAlign: "left" }}>
                                        <Label for="content" className="ms-1">Content</Label>
                                        {/* <Input type="textarea" 
                                                name="content" 
                                                id="content" 
                                                style={{height: "150px"}}
                                                placeholder="Let's write something.." 
                                                valid
                                                onChange={(event)=>handleFieldChange(event,"content")}
                                                value={postData.content}
                                                /> */}

                                        <JoditEditor
                                            type="textarea"
                                            ref={editor}
                                            value={content}
                                            //config={config}
                                            onChange={contentFieldChange}
                                        />
                                    </FormGroup>
                                    <FormGroup style={{ textAlign: "left" }}>
                                        <Label for="image" className="ms-1">Image</Label>
                                        <Input type="file"
                                            name="image"
                                            id="image"
                                            placeholder="Choose Image"
                                            valid />
                                    </FormGroup>
                                    <FormGroup style={{ textAlign: "left" }}>

                                        <Label for="category" className="ms-1">Category</Label>
                                        <Input type="select"
                                            name="categoryId"
                                            id="category"
                                            placeholder="Choose Category"
                                            valid
                                            onChange={(event) => handleFieldChange(event, "categoryId")}
                                            defaultValue={0}
                                        >
                                            <option disabled value={0}>Select Category</option>

                                            {categories.map(category => {
                                                return <option key={category.categoryId} value={category.categoryId}>
                                                    {category.categoryTitle}
                                                </option>
                                            })}

                                            {/* <option>Angular</option>
                                                <option>Vue</option> */}
                                        </Input>
                                    </FormGroup>

                                    <Button color="dark" outline type="submit">Add</Button>
                                    <Button color="dark" outline type="reset" className="ms-1">Cancel</Button>
                                </Form>
                                {content}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
export default AddPost;