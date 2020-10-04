// Default
let id = '621013224610988042';

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
    let language = determineLanguage();

    if (chk1 && chk2 && chk_drop) {
        let element = document.getElementById("btn");
        element.className = "button_base btn_slide_in";
        id = dropdown[0].getAttribute('id');
        wrapLink(element, "permissions.html?lang=" + language + "&bot=" + id);
    } else {
        let element = document.getElementById("btn");
        element.className = "button_base btn_disabled";
        wrapLink(element, "javascript:void(0)");
    }
}

function determineLanguage() {
    const element = document.getElementById("language");
    let alt = element.getAttribute('alt');
    let language = null;
    if (alt === "View in English") language = "ko";
    else language = "en";
    return language;
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
    }
    if (element != null) {
        element.className = "check";
    }
    agree();
}

function getLanguage() {
    let language = navigator.language || navigator.userLanguage;
    if (language === "ko") language = "ko";
    else language = "en";
    setLanguage(language);
}

function setLanguage(currentLanguage) {
    const element = document.getElementById("language");
    if (currentLanguage === "en") {
        element.setAttribute('src', 'img/ko.png');
        element.setAttribute('onclick', "setLanguage('ko');");
        element.setAttribute('alt', "한국어로 보기");
    }
    if (currentLanguage === "ko") {
        element.setAttribute('src', 'img/us.png');
        element.setAttribute('onclick', "setLanguage('en');");
        element.setAttribute('alt', "View in English");
    }
    $('[data-langNum]').each(function() {
        const $this = $(this);
        $this.html($.lang[currentLanguage][$this.data('langnum')]);
    });
}
