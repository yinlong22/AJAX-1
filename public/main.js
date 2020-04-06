console.log('沙雕');

getJS.onclick = () => {//点击监听onload和onerror事件
    const request = new XMLHttpRequest();
    //创建HttpRequest对象
    request.open('GET', '/2.js');
    //get到2.js里的response
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const script = document.createElement('script');
                //创建script标签
                script.innerHTML = request.response;
                //将get到的2.js的response填写到script里面
                document.body.appendChild(script)
                //将script插到body里
            }
        }
    };
    request.send();
};

getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement('style');
                //创建style标签
                style.innerHTML = request.response;
                //填写style内容
                document.head.appendChild(style)
                //插到头里面
            }
        }
    };
    request.send();
};


getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/3.html');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const div = document.createElement('div');
                div.innerHTML = request.response;
                document.body.appendChild(div);
            } else {
                alert('加载失败')
            }
        }
    };
    request.send();
};

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/4.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML;
                const text = dom.getElementsByTagName('warning')[0].textContent;
                console.log(text.trim())
            } else {
                alert('加载失败')
            }
        }
    };
    request.send();
};

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/5.json');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const object = JSON.parse(request.response);
                myName.textContent = object.name
            } else {
                alert('加载失败')
            }
        }
    };
    request.send();
};

let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', `/page${n+1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const array = JSON.parse(request.response);
                array.forEach(item => {
                    const li = document.createElement("li");
                    li.textContent = item.id;
                    xxx.appendChild(li);
                });
                n += 1;
            } else {
                alert('加载失败')
            }
        }
    };
    request.send();
};