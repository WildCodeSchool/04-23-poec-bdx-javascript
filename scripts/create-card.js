export default function generateCard(array) {

    const videoContainerRef = document.querySelector("#video-container");

    for (const video of array) {
        videoContainerRef.innerHTML +=
            `
        <div class="card">
            <img src="${video.thumbnailUrl}">
            <h3>${video.title}</h3>
        </div>
        `;

    }
}