// Making buttons interactive

// Add dog button
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
        // Create element to inject 
        /*
        <li>
            <figure>
                <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg"/>
                <figcaption>hound-afghan</figcaption>
            </figure>
        </li>
        */
        const newDog = document.createElement("li");
        // <li> </li>
        const newFigure = document.createElement("figure");
        // <figure></figure>
        const newImg = document.createElement("img");
        // <img>
        newImg.src = url;
        // <img src='https://images.dog.ceo/breeds/waterdog-spanish/20181023_072736.jpg'>
        const newCaption = document.createElement("figcaption");
        // <figcaption></figcaption>
        newCaption.innerText = breed;
        // <figcaption>waterdog-spanish</figcaption>
        newFigure.appendChild(newImg);
        /* 
        <figure>
            <img src='https://images.dog.ceo/breeds/waterdog-spanish/20181023_072736.jpg'>
        </figure>
        */
        newFigure.appendChild(newCaption);
        /*
        <figure>
            <img src='https://images.dog.ceo/breeds/waterdog-spanish/20181023_072736.jpg'>
            <figcaption>waterdog-spanish</figcaption>
        </figure>
        */
        newDog.appendChild(newFigure);
        /*
        <li> 
            <figure>
                <img src='https://images.dog.ceo/breeds/waterdog-spanish/20181023_072736.jpg'>
                <figcaption>waterdog-spanish</figcaption>
            </figure>
        </li>
        */

        // Inject element into correct location
        const ul = document.getElementsByTagName("ul")[0];
        /*
        <ul>
            <li>
                <figure>
                    <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg"/>
                    <figcaption>hound-afghan</figcaption>
                </figure>
            </li>
            <li>
                <figure>
                    <img src='https://images.dog.ceo/breeds/waterdog-spanish/20181023_072736.jpg'>
                    <figcaption>waterdog-spanish</figcaption>
                </figure>
            </li>
        </ul>
        */
        ul.appendChild(newDog);

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
    if(allDogs.length > 0) {
        lastDog = allDogs[allDogs.length - 1];
    }

    // Remove
    if (lastDog) {
        lastDog.remove();
    } else {
        console.log("No dogs left!! :(")
    }
});
