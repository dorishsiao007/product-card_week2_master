// Variable
const apiHost = "https://course-ec-api.hexschool.io/";
const uuid = "7dcf70ef-1a02-406f-883c-e4682a9c0fa8";
const apiPath = `api/${uuid}/ec/products?page=1`;
const apiUrl = `${apiHost}${apiPath}`
const dataShow = document.querySelector("#data-show");

// axios get data
axios.get(apiUrl)
    .then((res) => {
        const dataAry = res.data.data;
        render(dataAry)
  })
    .catch((err) => {
      console.log(err);
  })

// function
function render(dataAry){
    let htmlContent = "";

    dataAry.forEach(item => {
        htmlContent += `
            <div class="card" style="width: 18rem;">
                <img src="${item.imageUrl[0]}" class="card-img-top" alt="${item.title}">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.content}</p>
                    <p class="card-text">NT.${item.price}</p>
                    <a href="#" class="btn btn-outline-primary">直接購買</a>
                    <a href="#" class="btn btn-outline-primary">加入購物車</a>
                </div>
            </div>
        `
    });

    dataShow.innerHTML = htmlContent;
}