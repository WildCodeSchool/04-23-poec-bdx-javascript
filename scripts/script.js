import generateCard from "./create-card.js";

async function main() {

    const videoList = await getData();

    generateCard(videoList);
    listenFromSearchThenFilter();

}
main();

// Déclarations de mes fonctions


async function getData() {
    const result = await fetch("../assets/jsons/data.json");
    const data = await result.json();
    return data;
}

function listenFromSearchThenFilter() {
    const videoContainerRef = document.querySelector("#video-container");
    const inputSearchRef = document.querySelector("#input-search");
    
    inputSearchRef.addEventListener("input", (e) => {
        const searchedTerm = e.target.value;
        const videoListFiltered = videoList.filter((video) => video.title.toLowerCase().includes(searchedTerm.toLowerCase()));
        videoContainerRef.innerHTML = "";
        generateCard(videoListFiltered);
    });
}