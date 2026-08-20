let input = document.getElementById('input');
let i = 0;
function ok() {
    while (i = 1) {
        switch (input.value) {
            case 'My/01.html':
                window.open('My/01.html')
                i++
                break;
            case 'ai/1game.html':
                window.open('ai/1game.html')
                i++
                break;
            case 'ai/2game.html':
                window.open('ai/2game.html')
                i++
                break;
            default:
                alert('请输入有效的路径!');
                break;
        }
    }
}