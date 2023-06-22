let ph = new PixelHotkeys();
ph.setImage('../img/keys.png');
ph.setMap(img2keys);
ph.setIndex(index_keys);

let randomExample = [
    'win $+ space | Switch input language',
    'shift $+ alt $+ F | Auto format',
    'ctrl $+ alt $+ del | Windows security options',
    'msl $x2 | Double click',
    'ctrl $+ ` | Open console',
    'ctrl $+ msr | Force attack',
    'x $+ up right down left | Select magic arts',
    'z $+ x $_ | Holy Burst',
    '$l sft $+ $r sft $+ gca $+ gcpsb $+ gclt $+ gcrb $+ gcls $+ win $+ cmd $+ super $+ $[ mssu $+ mssd $] $x2 | WTF',
    'shift $+ k | Search',
    '$[ ctrl $+ c $] $ $[ ctrl $+ v $] | Program',
    'ctrl $+ a | Select all',
    'ctrl $+ t | Transformation',
    'ctrl $+ s | Save',
];

let menu = [
    'example',
    'mapping',
    'about',
]

let menuSel = 0;

function reset() {
    let r = Math.floor(Math.random() * randomExample.length);
    if (r >= randomExample.length) r = randomExample.length - 1;
    $('#expression').val(randomExample[r]);
    $('#example').html(ph.getKeyDOM(randomExample[r]))

}

function menuSwitch() {
    let name = menu[menuSel];
    $('.tabpage').addClass('hide');
    $('.tabpage.tabpage-' + name).removeClass('hide');
}

function getMapping() {
    let str = '';
    for (const key in index_keys) {
        if (Object.hasOwnProperty.call(index_keys, key)) {
            const e = index_keys[key];
            let s = `<span class="tag">${key}</span>`;
            e.forEach(e2 => {
                s += `<span class="tag">${e2}</span>`
            });
            str += `<tr><td>${ph.getKeyDOM(key)}</td><td>${s}</td></tr>`;
        }
    }

    return `<table class="mapping-table"><tr><th>ICON</th><th>KEYWORD</th></tr>${str}</table>`;
}

$(document).ready(function() {
    reset();

    $('#mapping-box').html(getMapping());

    $('#reset').click(reset);

    $('#execute').click(function() {
        let exp = $('#expression').val();
        $('#example').html(ph.getKeyDOM(exp))
    });

    $('.menu-item').click(function() {
        menuSel = $(this).data('value');
        $('.menu-item').removeClass('selected');
        $('.menu-item').eq(menuSel).addClass('selected');
        $('#menu').removeClass('m-show');
        menuSwitch();
    });

    $('a.menu-box').keydown(function(e) {
        if (e.keyCode == 40 || e.keyCode == 39) {
            e.preventDefault();
            menuSel++;
            if (menuSel >= menu.length) menuSel = 0;
        } else if (e.keyCode == 38 || e.keyCode == 37) {
            e.preventDefault();
            menuSel--;
            if (menuSel < 0) menuSel = menu.length - 1;
        }
        $('.menu-item').removeClass('selected');
        $('.menu-item').eq(menuSel).addClass('selected');
        menuSwitch();
    });

    $('#menu-show').click(function() {
        if ($('#menu').hasClass('m-show')) {
            $('#menu').removeClass('m-show');
        } else {
            $('#menu').addClass('m-show');
        }
    });
});