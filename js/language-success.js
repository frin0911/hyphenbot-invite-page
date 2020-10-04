//
$.lang = {};
$.lang.ko = {
    'title': '초대 완료 | Hyphen-Bot',
    0: "초대해주셔서 감사합니다",
    1: "후원하기"
};
$.lang.en = {
    'title': 'Success | Hyphen-Bot',
    0: "Thanks for Inviting",
    1: "Donate"
};

function changeElement(currentLanguage) {
    $('[data-langNum]').each(function() {
        const $this = $(this);
        $this.html($.lang[currentLanguage][$this.data('langnum')]);
    });
}

function getLanguage() {
    let language = navigator.language || navigator.userLanguage;
    if (language === "ko") language = "ko";
    else language = "en";
    changeElement(language);
}