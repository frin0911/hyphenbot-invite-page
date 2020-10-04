// Default
let permission = 314432;

$.lang = {};
$.lang.ko = {
    'title': '권한 | Hyphen-Bot',
    0: '파란색: 봇이 작동하는데 필요한 <b>필수 권한</b>',
    1: '초록색: 봇을 더 편리하게 이용할 수 있는 <b>추천 권한</b>',
    2: '일반 권한',
    3: '관리자',
    4: '감사 로그 보기',
    5: '서버 인사이트 보기',
    6: '서버 관리하기',
    7: '역할 관리하기',
    8: '채널 관리하기',
    9: '멤버 추방하기',
    10: '멤버 차단하기',
    11: '초대 코드 만들기',
    12: '별명 변경하기',
    13: '별명 관리하기',
    14: '이모티콘 관리',
    15: '웹후크 관리하기',
    16: '채팅 채널 읽기 및 음성채널 보기',
    17: '채팅 권한',
    18: '메시지 보내기',
    19: 'TTS 메시지 보내기',
    20: '메시지 관리',
    21: '링크 첨부',
    22: '파일 첨부',
    23: '메시지 기록 보기',
    24: '모든 역할 멘션하기',
    25: '외부 이모티콘 사용하기',
    26: '반응 추가하기',
    27: '음성 권한',
    28: '연결',
    29: '말하기',
    30: '동영상',
    31: '멤버들의 마이크 음소거하기',
    32: '멤버들의 헤드셋 음소거하기',
    33: '멤버 이동',
    34: '음성 감지 사용',
    35: '우선 발언권',
    36: '초대하기'
};
$.lang.en = {
    'title': 'Permissions | Hyphen-Bot',
    0: 'Blue: <b>Mandatory Permissions</b> for bot to operate',
    1: 'Green: <b>Recommended Permissions</b> to use a bot more conveniently',
    2: 'GENERAL PERMISSIONS',
    3: 'Administrator',
    4: 'View Audit Log',
    5: 'View Server Insights',
    6: 'Manage Server',
    7: 'Manage Roles',
    8: 'Manage Channels',
    9: 'Kick Members',
    10: 'Ban Members',
    11: 'Create Instant Invite',
    12: 'Change Nickname',
    13: 'Manage Nicknames',
    14: 'Manage Emojis',
    15: 'Manage Webhooks',
    16: 'View Channels',
    17: 'TEXT PERMISSIONS',
    18: 'Send Messages',
    19: 'Send TTS Messages',
    20: 'Manage Messages',
    21: 'Embed Links',
    22: 'Attach Files',
    23: 'Read Message History',
    24: 'Mention Everyone',
    25: 'Use External Emojis',
    26: 'Add Reactions',
    27: 'VOICE PERMISSIONS',
    28: 'Connect',
    29: 'Speak',
    30: 'Video',
    31: 'Mute Members',
    32: 'Deafen Members',
    33: 'Move Members',
    34: 'Use Voice Activity',
    35: 'Priority Speaker',
    36: 'INVITE'
};

function changeElement(currentLanguage) {
    $('[data-langNum]').each(function() {
        const $this = $(this);
        $this.html($.lang[currentLanguage][$this.data('langnum')]);
    });
}

function inheritLanguage() {
    let params = getUrlParams();
    changeElement(params['lang']);
}

function getUrlParams() {
    const params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function(str, key, value) { params[key] = value; });
    return params;
}

function getURL() {
    let params = getUrlParams();
    location.href = "https://discord.com/oauth2/authorize?client_id=" + params['bot'] + "&scope=bot&permissions=" + permission +
        "&response_type=code&redirect_uri=https://invite.cpbu.xyz/success";
}

function add(element) {
    let number = parseInt(element.id);
    if (element.checked) {
        permission += number;
    }
    else {
        permission -= number;
    }
}
