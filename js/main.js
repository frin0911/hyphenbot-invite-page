function agree() {
    const checkbox = document.getElementsByName('agree');
    const dropdown = document.getElementsByClassName('check');
    let chk1 = false;
    let chk2 = false;
    let chk_drop;

    if (checkbox[0].checked){
        chk1 = true;
    }
    if (checkbox[1].checked){
        chk2 = true;
    }
    chk_drop = dropdown.length === 1;

    if (chk1 && chk2 && chk_drop) {
        let element = document.getElementById("btn");
        element.className = "button_base btn_slide_in";
        const id = dropdown[0].getAttribute('id');
        const url = "https://discord.com/oauth2/authorize?client_id=" + id + "&scope=bot&permissions=1342499926&response_type=code&redirect_uri=https://invite.cpbu.xyz/success";
        wrapLink(element, url);
    } else {
        let element = document.getElementById("btn");
        element.className = "button_base btn_disabled";
        wrapLink(element, "javascript:void(0)");
    }
}

function wrapLink(element, content) {
    const link = document.createElement('a');
    link.innerHTML = element.outerHTML;
    link.setAttribute('href', content);
    element.parentNode.insertBefore(link, element);
    element.remove();
}

function select(element) {
    const elements = document.getElementsByClassName("check");
    for (let i = 0; i < elements.length; i++) {
        elements[i].className = "uncheck";
        console.log("unchecked");
    }
    if (element != null) {
        console.log("checked");
        element.className = "check";
    }
    agree();
}

function goto(lang) {
    location.href = "../" + lang;
}
