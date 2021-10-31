const HideLink = (props) => {
    const element = props.element
    if(element.postHeading !== '' && element.postDescription !== '' && element.link !== '')
        return(
        <div className="wd-pad">
            <p id="sub-title">{element.postHeading}</p>
            <p>{element.postDescription}</p>
            <a className = "wd-post-link" href = "/#"><i className="fas fa-link"></i>
                {element.link}
            </a>
        </div>
        )
    else
        return(<></>)
};

export default HideLink;