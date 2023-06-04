import "./style.scss";

const clickTag = (new URLSearchParams(window.location.search)).get('clickTag') as string;

const video = document.getElementById('video-player') as HTMLVideoElement;
const videoLink = document.getElementById('video-link') as HTMLAnchorElement;
const videoMute = document.getElementById('video-mute') as HTMLAnchorElement;
const videoUnmute = document.getElementById('video-unmute') as HTMLAnchorElement;

videoLink.href = clickTag;

videoUnmute.addEventListener('click', function () {
    video.muted = false;
    videoUnmute.classList.add('video-control-hidden');
    videoMute.classList.remove('video-control-hidden');
});

videoUnmute.addEventListener('click', function () {
    video.muted = true;
    videoMute.classList.add('video-control-hidden');
    videoUnmute.classList.remove('video-control-hidden');
});
