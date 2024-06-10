function MultipleComponentInOnePage(){
    return(
        <div className="App">
            <User1 />
            <User2 />   
        </div>
    );
}

function User1(){
    return(
        <div>
            <h1>User1 from MultipleComponentInOnePage</h1>
        </div>
    )
}

function User2(){
    return(
        <div className="">
            <h1>User2 from MultipleComponentInOnePage</h1>
        </div>
    )
}
export default MultipleComponentInOnePage;
