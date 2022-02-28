export const game = () => {
  const squareBody = document.querySelector(".square-body");
  const btnReset = document.querySelector(".btn-reset");
  let blocks = squareBody.querySelectorAll(".block");

  const getBlockPosition = (blockElement) => {
    let position;
    blocks.forEach((elem, index) => {
      if (elem === blockElement) {
        position = index;
      }
    });
    return position;
  };
  const getNumBlock = (blockElement) => {
    return blockElement.querySelector(".block-number");
  };
  const swapContent = (elementA, elementB) => {
    [getNumBlock(elementA).textContent, getNumBlock(elementB).textContent] = [
      getNumBlock(elementB).textContent,
      getNumBlock(elementA).textContent,
    ];
  };

  squareBody.addEventListener("click", (e) => {
    const blockPosition = getBlockPosition(e.target.closest(".block"));
    switch (true) {
      case !!e.target.closest(".left"):
        if (blockPosition > 0) {
          swapContent(blocks[blockPosition - 1], blocks[blockPosition]);
          //blocks[blockPosition - 1].before(blocks[blockPosition]);
        }
        break;
      case !!e.target.closest(".right"):
        if (blockPosition < 24) {
          blocks[blockPosition + 1].after(blocks[blockPosition]);
        }
        break;
      case !!e.target.closest(".top"):
        if (blockPosition - 5 >= 0) {
          blocks[blockPosition - 5].before(blocks[blockPosition]);
          if (blockPosition < 24) {
            blocks[blockPosition + 1].before(blocks[blockPosition - 5]);
          } else {
            blocks[blockPosition - 1].after(blocks[blockPosition - 5]);
          }
        }
        break;
      case !!e.target.closest(".bottom"):
        if (blockPosition + 5 <= 24) {
          blocks[blockPosition + 5].before(blocks[blockPosition]);
          if (blockPosition > 0) {
            blocks[blockPosition - 1].after(blocks[blockPosition + 5]);
          } else {
            blocks[blockPosition + 1].before(blocks[blockPosition + 5]);
          }
        }
        break;
    }
    blocks = squareBody.querySelectorAll(".block");
  });

  btnReset.addEventListener("click", () => {
    blocks.forEach((elem, index) => {
      elem.querySelector(".block-number").textContent = index + 1 + "";
    });
  });
};
