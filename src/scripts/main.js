console.log("You will understand this.")

adamPet = {
    name: "Hank",
    species: "Dog",
    nicknames: ["Honk", "Henry", "LBD"],
    age: 2,
    bark: function () {
        window.alert("WOOF")
    },
    hunt: function () {
        window.alert("Go get em")
    },
    down: function () {
        window.alert("lay down")
    },
    favoriteToys: [],
    play: function(toy) {
        if (toy = "ball")
        this.favoriteToys.push(toy)
    }
}

/* adamPet.hunt(); */

adamPet.play("ball")

console.log(adamPet.favoriteToys)