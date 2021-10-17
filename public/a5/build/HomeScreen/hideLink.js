const hideLink = (element) => {
    if(element.postHeading == '' && element.postDescription =='' && element.link=='')
        return '' 
    else
        return(`
        <div class="wd-pad">
            <p id="sub-title">${element.postHeading}</p>
            <p>${element.postDescription}</p>
            <a class = "wd-post-link"><i class="fas fa-link"></i>
                ${element.link}
            </a>
        </div>
        `)
};

export default hideLink;