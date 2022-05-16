planets = {
    "mercury": 0.38,
    "venus": 0.91,
    "earth": 1.0,
    "mars": 0.38,
    "jupiter": 2.34,
    "saturn": 0.93,
    "uranus": 0.92,
    "neptune": 1.12,
    "pluto": 0.06,
    "moon": 0.17,
    "sun": 27.9,
}

user_weight = int(input("Enter your weight: "))
planet_input = str(input("Choose a planet: ").lower().strip())

if planet_input in planets:
    planet_weight = user_weight * planets[planet_input]
    print(f"Your weight on {planet_input.title()} is {planet_weight:.1f}.")
elif planet_input not in planets:
    print("Please enter a valid planet. Try again.")
