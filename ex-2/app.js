// Start coding here
const likeButton = document.querySelector(".like-button");
const dislikeButton = document.querySelector(".dislike-button");
const likeAdjust = document.querySelector(".post-likes");

likeButton.addEventListener("click", () => {
  let addLike = Number(likeAdjust.textContent);
  likeAdjust.textContent = addLike + 1;
});
dislikeButton.addEventListener("click", () => {
  if (likeAdjust.textContent > 0) {
    let addDislike = Number(likeAdjust.textContent);
    likeAdjust.textContent = addDislike - 1;
  }
});
