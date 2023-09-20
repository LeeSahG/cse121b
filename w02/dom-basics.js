const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with JavaScript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://images.search.yahoo.com/search/images;_ylt=AwriqUQawwplq3gL5IpXNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=funny+face&fr2=piv-web&type=E210US91105G0&fr=mcafee#id=94&iurl=http%3A%2F%2Fwww.funnyjunksite.com%2Fpictures%2Fwp-content%2Fuploads%2F2015%2F05%2FFunny-Face-Pic-550x304.jpg&action=click");
newImage.setAttribute("alt", "What image is this");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv)

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to JavaScript Language!</p>";
document.body.appendChild(newSection);

