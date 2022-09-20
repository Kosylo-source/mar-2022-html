let userIdJSON = localStorage.getItem('userId')
let parseUserId =JSON.parse(userIdJSON)
let userNameJSON = localStorage.getItem('userName')
let parseUserName =JSON.parse(userNameJSON)
let userPostJSON = localStorage.getItem('postId')
let parseUserIdPost =JSON.parse(userPostJSON)



setTimeout( function foo() {fetch(`https://jsonplaceholder.typicode.com/posts/${parseUserIdPost}`)
    .then(value => value.json())
    .then(value => {
            let postWrapElement = document.createElement('div');
            document.body.append(postWrapElement);
            const userId = document.createElement('p');
            userId.innerHTML = `UserId: ${value.userId}`;
            const id = document.createElement('p');
            id.innerHTML = `Id: ${value.id}`;
            const title = document.createElement('p');
            title.innerText = `Title: ${value.title}`;
            const body = document.createElement('p');
            body.innerText = `Body: ${value.body}`;
            postWrapElement.append(userId, id, title, body)

    })},300);

fetch(`https://jsonplaceholder.typicode.com/posts/${parseUserIdPost}/comments`)
    .then(value => value.json())
    .then(value => {
        let commentDivElement = document.createElement('div');
        document.body.append(commentDivElement);
        const button = document.createElement('button');
        button.setAttribute('class', 'button' )
        commentDivElement.append(button);
        commentDivElement.setAttribute('class', 'commentDivElement' )

        const Wrap2 = document.createElement('div');
        Wrap2.setAttribute('class', 'Wrap2' )
        button.innerHTML = `<h2>Comments of ${parseUserName}</h2>`
        button.onclick = function () {
            for (const comment of value) {

                const buttonWrap = document.createElement('div');
                buttonWrap.setAttribute('class', 'buttonWrap' )
                const commentPostIdDiv = document.createElement('p');
                commentPostIdDiv.innerHTML = `PostId: ${comment.postId}`;
                const commentIdDiv = document.createElement('p');
                commentIdDiv.innerHTML = `Id: ${comment.id}`;
                const commentNameDiv = document.createElement('p');
                commentNameDiv.innerHTML = `Name: ${comment.name}`;
                const commentEmailDiv = document.createElement('p');
                commentEmailDiv.innerHTML = `Email: ${comment.email}`;
                const commentBodyDiv = document.createElement('p');
                commentBodyDiv.innerHTML = `Body: ${comment.body}`;

                button.disabled = true;

                buttonWrap.append(commentPostIdDiv, commentIdDiv, commentNameDiv,commentEmailDiv, commentBodyDiv)
                Wrap2.append(buttonWrap)
                commentDivElement.append(Wrap2);}}})



