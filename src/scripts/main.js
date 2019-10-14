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
        if (toy.includes("ball"))
        this.favoriteToys.push(toy)
    }
}

/* adamPet.hunt(); */

adamPet.play("light-up ball")

adamPet.play("tennis ball")

adamPet.play("stick")

adamPet.play("racquet ball")

console.log(adamPet.favoriteToys)