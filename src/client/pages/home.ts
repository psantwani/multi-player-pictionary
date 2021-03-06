import { get } from "httpie";
import { makeid } from '../../server/utils/room_generator';

const home = document.getElementById('home');


Array.from(home.querySelectorAll('ul li a')).forEach((joinSessionLink) => {
  joinSessionLink.addEventListener("click", async (e) => {
    e.preventDefault();
    const roomNumber = makeid(8);
    await fetch(`${location.href}game/${roomNumber}`);
    location.hash = roomNumber;
  });
});

export async function showHome() {
  home.classList.remove('hidden');

  /*
  const previousSessionsEl = home.querySelector('.previous-sessions');
  previousSessionsEl.innerHTML = "";

  const drawings = (await get('/drawings')).data;
  drawings.forEach(drawing => {
    const drawingEl = document.createElement('li');
    const drawingAnchorEl = document.createElement('a');
    drawingAnchorEl.href = `#${drawing._id}`;
    drawingAnchorEl.innerText = `${drawing.mode} (${drawing.createdAt})`;

    drawingEl.appendChild(drawingAnchorEl);
    previousSessionsEl.appendChild(drawingEl);

  });
  console.log(drawings);
  */
}

export function hideHome() {
  home.classList.add('hidden');
}