const images = [
  "https://images.unsplash.com/photo-1470137430626-983a37b8ea46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
  "https://images.unsplash.com/photo-1489065094455-c2d576ff27a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
  "https://images.unsplash.com/photo-1552761831-7ef8ec07adbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2106&q=80",
  "https://images.unsplash.com/photo-1438786657495-640937046d18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
  "https://images.unsplash.com/photo-1581995763167-1979f42aa95c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2602&q=80",
];

let selectedImageIndex = 0;
const spotlightImage = document.querySelector("#spotlight-image");

spotlightImage.setAttribute("src", images[selectedImageIndex]);
