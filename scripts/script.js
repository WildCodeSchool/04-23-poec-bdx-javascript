const video1 = {
    thumbnailUrl: "../assets/images/thumbnail.webp",
    title: "Aurevoir Youtube",
    author: "Inoxtag",
    viewsCount: "4.1 M",
    publicationDate: "Il y a 3 jours",
    channelLogo: "../assets/images/channel-logo.jpeg",
    channelUrl: "https://www.youtube.com/@inoxtag"
};
const video2 = {
    thumbnailUrl: "../assets/images/thumbnail.webp",
    title: "Bonjour Youtube",
    author: "Inoxtag",
    viewsCount: "4.1 M",
    publicationDate: "Il y a 3 jours",
    channelLogo: "../assets/images/channel-logo.jpeg",
    channelUrl: "https://www.youtube.com/@inoxtag"
};

const videoList = [video1, video2];

const videoContainerRef = document.querySelector("#video-container");

for (const video of videoList) {
    videoContainerRef.innerHTML += 
    `
    <div class="card">
        <img src="${video.thumbnailUrl}">
        <h3>${video.title}</h3>
    </div>
    `;
    
}