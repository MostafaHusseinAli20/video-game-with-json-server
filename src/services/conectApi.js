const baseUrl = "https://mostafahusseinali20.github.io/db_VideoGame_project/db.json";

// Get All Games
export async function getListGame() {
    const response = await fetch(baseUrl)
    const data = await response.json();

    return data
}

// Get Single Game
export async function getSingleGame(id) {
    const response = await fetch(`${baseUrl}/${id}`)
    const data = await response.json();

    return data
}