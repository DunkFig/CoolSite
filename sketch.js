const randomList = [
    "apple",
    "mountain",
    "guitar",
    "pencil",
    "ocean",
    "sunflower",
    "notebook",
    "lamp",
    "camera",
    "socks",
    "clock",
    "marble",
    "cup",
    "key",
    "wallet",
    "dragonfly",
    "umbrella",
    "backpack",
    "candle",
    "stone",
    "glasses",
    "puzzle",
    "bicycle",
    "window",
    "painting",
    "blanket",
    "headphones",
    "chessboard",
    "pen",
    "rocket",
    "sneaker",
    "mirror",
    "feather",
    "sand",
    "book",
    "anchor",
    "violin",
    "cloud",
    "hat",
    "leaf"
];


function setup() {
  createCanvas(400, 400);
  textSize(50)
  text(randomList[int(random(0, randomList.length) )], 140, 200)
}

