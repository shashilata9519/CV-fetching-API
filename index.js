console.log("we are making CV Screener");
const data = [
    {
        name: 'seema',
        age: 18,
        city: 'kolkata',
        language: 'python',
        framework: 'Django',
        image: "https://randomuser.me/api/portraits/med/women/76.jpg"
    },
    {
        name: 'Salman',
        age: 19,
        city: 'Mumbai',
        language: 'javaScript',
        framework: 'React',
        image: "https://randomuser.me/api/portraits/med/men/44.jpg"
    },
    {
        name: 'Riya',
        age: 26,
        city: 'kolkata',
        language: 'java',
        framework: 'Spring',
        image: "https://randomuser.me/api/portraits/med/women/66.jpg"
    },
    {
        name: 'Jeny',
        age: 25,
        city: 'Banglore',
        language: 'python',
        framework: 'Flask',
        image: "https://randomuser.me/api/portraits/med/women/71.jpg"
    },
    {
        name: 'Tony',
        age: 30,
        city: 'Jharkhand',
        language: 'JavaScript',
        framework: 'Angular',
        image: "https://randomuser.me/api/portraits/med/men/32.jpg"
    },
    {
        name: 'Roy',
        age: 40,
        city: 'Kanpur',
        language: 'python',
        framework: 'Django',
        image: "https://randomuser.me/api/portraits/med/men/99.jpg"
    }
]

function Iterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
        }
    };
}
const candidate = Iterator(data);
nextCV();
const next = document.getElementById('next');

next.addEventListener('click', nextCV);

function nextCV() {
    const currentCandidate = candidate.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate!=undefined)
    {
        image.innerHTML = `<img src='${currentCandidate.image} 'class="rounded mx-auto d-block">`
        profile.innerHTML = ` <ul class="list-group fs-4 list-group-flush ">
                                <li class="list-group-item ">Name: ${currentCandidate.name}</li>
                                <li class="list-group-item">${currentCandidate.age} year old</li>
                                <li class="list-group-item">Lives in ${currentCandidate.city}</li>
                                <li class="list-group-item">work on ${currentCandidate.language}</li>
                                <li class="list-group-item">uses ${currentCandidate.framework} framework</li>
                                
                                
                            </ul>`

    }
    else{
        alert("End of Candidate Application ");
        window.location.reload();
    }
}
