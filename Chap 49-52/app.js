function expand(e) {

    let para = "Hello Bhai! My name is .."
    let contentExpand = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit dolorem necessitatibus possimus quis explicabo harum
dignissimos, quasi cum corrupti iste ipsam commodi assumenda labore? Vero voluptatem repudiandae qui. Aut, doloribus.`
    if (e.innerHTML == "see more") {
        e.innerHTML = "see less"
        e.previousElementSibling.innerHTML = contentExpand;
    }
    else {
        e.innerHTML = "see more"
        e.previousElementSibling.innerHTML = para;
    }
}