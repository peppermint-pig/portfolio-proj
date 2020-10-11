console.log('Starting up');

function onInit() {
    renderProjs();
}

function renderProjs() {
    var projs = getProjs();
    var strHtmls = projs.map(function (proj) {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a  onclick="onOpenModal('${proj.id}')" class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid protfolio-img" src="img/portfolio/${proj.id}.jpg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.title}</p>
             </div>
        </div>
        `;
    });
    document.querySelector('.portfolio-items').innerHTML = strHtmls.join('');
}


function onOpenModal(projID) {
    var proj = getProjById(projID);
    var elModal = document.querySelector('.modal-body');
    elModal.querySelector('h2').innerText = proj.name;
    elModal.querySelector('.sub-title').innerText = proj.title;
    elModal.querySelector('.modal-img').innerHTML = `<img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}-full.jpg">`;
    elModal.querySelector('.desc').innerText = proj.desc;
    elModal.querySelector('.click-for-more').innerHTML = `<a href="${proj.url}" target="_blank">Click here for more</a>`;
    elModal.querySelector('.published').innerText = `Published At:${proj.publishedAt}`;
}
