
let userIdJSON = localStorage.getItem('userId')
let parseUserId =JSON.parse(userIdJSON)

fetch(`https://jsonplaceholder.typicode.com/users/${parseUserId}`)
    .then(value => value.json())
    .then(value => {

            let htmlDivElement = document.createElement('div');
        htmlDivElement.setAttribute('class', 'htmlDivElement' )
            document.body.append(htmlDivElement);

                    const idElement = document.createElement('p');
                    idElement.innerHTML = `Id: ${value.id}`;
                    const nameElement = document.createElement('p');
                    nameElement.innerHTML = `Name: ${value.name}`;
                    const username = document.createElement('p');
                    username.innerText = `Username: ${value.username}`;
                    const email = document.createElement('p');
                    email.innerText = `Email: ${value.email}`;
                    const adress = document.createElement('div');
                    adress.innerText = `Adress:`;

                        let addressUlWrap = document.createElement('ul')
                        const street = document.createElement('li');
                        street.innerHTML = `Street: ${value.address.street}`;
                        const suite = document.createElement('li');
                        suite.innerHTML = `Suite: ${value.address.suite}`;
                        const city = document.createElement('li');
                        city.innerHTML = `City: ${value.address.city}`;
                        const zipcode = document.createElement('li');
                        zipcode.innerHTML = `Zipcode: ${value.address.zipcode}`;
                        const geo = document.createElement('div');
                        geo.innerHTML = `Geo:`;
                        addressUlWrap.append(street,suite,city,zipcode, geo );

                            const geoDivWrap = document.createElement('div');
                            let geoUlWrap = document.createElement('ul')
                            const lat = document.createElement('li');
                            lat.innerHTML = `Lat: ${value.address.geo.lat}`;
                            const lng = document.createElement('li');
                            lng.innerHTML = `Lng: ${value.address.geo.lng}`;
                            geoDivWrap.append(geoUlWrap)
                            geoUlWrap.append(lat, lng);
                            geo.append(geoDivWrap)

                            adress.append(addressUlWrap)
                    const phone = document.createElement('p');
                    phone.innerText = `Phone: ${value.phone}`;
                    const website = document.createElement('p');
                    website.innerText = `Website: ${value.website}`;
                    const company = document.createElement('div');
                    company.innerText = `Company:`;


                        let companyUlWrap = document.createElement('ul')

                        const companyName = document.createElement('li');
                        companyName.innerHTML = `Name: ${value.company.name}`;
                        const catchPhrase = document.createElement('li');
                        catchPhrase.innerHTML = `CatchPhrase: ${value.company.catchPhrase}`;
                        const bs = document.createElement('li');
                        bs.innerHTML = `Bs: ${value.company.bs}`;

            companyUlWrap.append(companyName,catchPhrase,bs );
            company.append(companyUlWrap)
            htmlDivElement.append(idElement, nameElement, username, email, adress, phone, website, company);

    })



let userNameJSON = localStorage.getItem('userName')

let parseUserName = JSON.parse(userNameJSON)

 setTimeout( function foo() {
     fetch(`https://jsonplaceholder.typicode.com/users/${parseUserId}/posts`)
         .then(value => value.json())
         .then(value => {
                 let postDivElement = document.createElement('div');
                 postDivElement.setAttribute('class', 'postDivElement' )
                 document.body.append(postDivElement);
             const wrap1 = document.createElement('div');
             wrap1.setAttribute('class', 'wrap1' )
                 const button = document.createElement('button');
                 button.setAttribute('class', 'userDetailsButton' )
             button.innerHTML = `<h2 class = 'h2class'>Posts of ${parseUserName}</h2>`

             wrap1.append(button);

             postDivElement.append(wrap1);


                 button.onclick = function () {
                     const wrap3 = document.createElement('div');
                     wrap3.setAttribute('class', 'wrap3' )
                     for (const post of value) {
                         const wrap2 = document.createElement('div');
                         wrap2.setAttribute('class', 'wrap2' )

                         const titleDiv = document.createElement('div');

                         titleDiv.innerHTML = `<div class="innerText">${post.title}</div>`;
                         titleDiv.setAttribute('class', 'titleDiv' )

                         button.disabled = true;

                         const wrap4 = document.createElement('div');
                         wrap4.setAttribute('class', 'wrap4' )

                         const buttonDiv = document.createElement('div')
                         const buttonPost = document.createElement('button');
                         buttonPost.setAttribute('class', 'buttonPost' )
                         buttonPost.innerHTML = `<a href="../HTML/post-details.html" style="text-decoration: none">Post details</a>`
                         buttonPost.onclick = function () {
                             localStorage.setItem('postId', JSON.stringify(`${post.id}`))
                             buttonPost.disabled = true;
                         }
                         buttonDiv.append(buttonPost)
                         wrap4.append(buttonDiv)
                         wrap2.append(titleDiv,wrap4)
                         wrap3.append(wrap2);

                         postDivElement.append(wrap3);



                     }
                 }

             }
         )

},300
)



