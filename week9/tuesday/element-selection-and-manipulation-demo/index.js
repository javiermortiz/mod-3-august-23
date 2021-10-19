window.onload = () => {
    document.getElementById("click-me").addEventListener("click", ev => {
        const ball = document.getElementById("ball");
        console.log(ball);
        // ball.classList.add("red-ball");
        
        // const instructor = document.querySelector(".instructor");
        // console.log(instructor);
        // instructor.style.backgroundColor = "red";

        // const instructors = document.querySelectorAll(".instructor");
        // console.log(instructors);
        // instructors.forEach(instructor => {
        //     instructor.style.color = "red";
        // });

        const myArr = [];
        const h1 = document.createElement('h1');
        myArr.push(h1);
        myArr.map(ele => console.log(ele));

        // const playground = document.getElementById("playground");
        // playground.innerHTML = `
        //     <h2 class='red'>Hope you enjoyed the demo!</h2>
        //     <img 
        //         src='https://p4.wallpaperbetter.com/wallpaper/70/625/78/animal-baby-cute-dog-wallpaper-preview.jpg'
        //     >
        // `;

        // document.body.innerHTML = '';
    });


}