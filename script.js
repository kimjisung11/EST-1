// 신발 데이터 배열
const shoes = [
  { image: "images/001.png", name: "나이키 에어 포스 1 '07", purpose: "여성 신발", price: "149,000" },
  { image: "images/002.png", name: "나이키 에어 포스 1", purpose: "주니어 신발", price: "119,000" },
  { image: "images/003.png", name: "나이키 V5 RNR", purpose: "여성 신발", price: "119,000" },
  { image: "images/004.png", name: "나이키 코르테즈 SE 스웨이드", purpose: "남성 신발", price: "129,000" },
  { image: "images/005.png", name: "나이키 리액트X 리주버네이트", purpose: "남성 신발", price: "89,000" },
  { image: "images/006.png", name: "나이키 덩크 로우", purpose: "여성 신발", price: "159,000" },
  { image: "images/007.png", name: "나이키 샥스 R4", purpose: "남성 신발", price: "179,000" },
  { image: "images/008.png", name: "나이키 덩크 로우 레트로 LTD", purpose: "신발", price: "159,000" },
  { image: "images/009.png", name: "나이키 V2K 런", purpose: "남성 신발", price: "149,000" },
  { image: "images/010.png", name: "에어 조던 1 로우 SE", purpose: "남성 신발", price: "159,000" },
];

const gallery = document.getElementById("gallery");

shoes.forEach((shoe) => {
  const shoeItem = document.createElement("div");
  shoeItem.className = "shoe-item";

  shoeItem.innerHTML = `
    <img src="${shoe.image}" alt="${shoe.name}" class="shoe-image">
    <div class="shoe-name">${shoe.name}</div>
    <div class="shoe-purpose">${shoe.purpose}</div>
    <div class="shoe-price">${shoe.price}</div>
  `;

  gallery.appendChild(shoeItem);
});

// 팝업 기능
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popup-image");
const popupName = document.getElementById("popup-name");
const popupPurpose = document.getElementById("popup-purpose");
const popupPrice = document.getElementById("popup-price");

document.querySelectorAll(".shoe-image").forEach((picture) => {
  picture.addEventListener("click", () => {
    const imageSrc = picture.src;
    const name = picture.parentElement.querySelector(".shoe-name").textContent;
    const purpose = picture.parentElement.querySelector(".shoe-purpose").textContent;
    const price = picture.parentElement.querySelector(".shoe-price").textContent;

    popupImage.src = imageSrc;
    popupName.textContent = name;
    popupPurpose.textContent = purpose;
    popupPrice.textContent = price;
    popup.style.display = "flex";
  });
});

window.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});
