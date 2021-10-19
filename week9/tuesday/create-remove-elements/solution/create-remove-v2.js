const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();
        console.log(data);
        // URL of new dog image
        // 'https://images.dog.ceo/breeds/waterdog-spanish/20181023_072736.jpg'
        const url = data.message;

        // Get breed (Hint: Parse from URL)
        // ['https:', '', 'imaged.dog.ceo', 'breeds', 'waterdog-spanish', '123123123123.jgp']
        const breed = url.split('/')[4];
        // 'waterdog-spanish'
        
        const li = `
            <li>
                <figure>
                    <img src="${url}"/>
                    <figcaption>"${breed}"</figcaption>
                </figure>
            </li>
        `

        const ul = document.getElementsByTagName("ul")[0];
        ul.innerHTML += li;
    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

// Remove first dog button
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    // Select first dog
    const firstDog = document.querySelector("li");

    // Remove
    if (firstDog) {
        firstDog.remove();
    } else {
        console.log("No dogs left!! :(")
    }
});

// Remove last dog button
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    // Select last dog
    const allDogs = document.querySelectorAll("li");
    let lastDog;
    if (allDogs.length > 0) {
        lastDog = allDogs[allDogs.length - 1];
    }

    // Remove
    if (lastDog) {
        lastDog.remove();
    } else {
        console.log("No dogs left!! :(")
    }
});
