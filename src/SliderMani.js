export function SliderMani() {
  const slider = [
    {
      imgae: "https://th.bing.com/th/id/OIP.iSu2RcCcdm78xbxNDJMJSgHaEo?pid=ImgDet&rs=1",
      title: "First slide labe",
      content: "Some representative placeholder content for the first slide.",

      imgae1: "https://th.bing.com/th/id/OIP.iSu2RcCcdm78xbxNDJMJSgHaEo?pid=ImgDet&rs=1",
      title1: "First slide labe",
      content1: "Some representative placeholder content for the first slide.",

      imgae2: "https://www.pixelstalk.net/wp-content/uploads/2016/07/Nature-wallpapers-hd-backgroud-1080p.jpg",
      title2: "First slide lab",
      content2: "Some representative placeholder content for the first slide."
    }
  ];
  return (
    <div>
      {slider.map((sl) => <Slider1 slider={sl} />)}
    </div>
  );
}
function Slider1({ slider }) {
  //   const slider={
  //     imgae:"https://th.bing.com/th/id/OIP.iSu2RcCcdm78xbxNDJMJSgHaEo?pid=ImgDet&rs=1",
  //   title:"First slide labe",
  // content:"Some representative placeholder content for the first slide."}
  return (
    <div className='slider-heder'>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={slider.imgae} class="d-block w-100" alt="..." height={"320"} />
            <div class="carousel-caption d-none d-md-block">
              <h5>{slider.title}</h5>
              <p>{slider.content}</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={slider.imgae1} class="d-block w-100" alt="..." height={"320"} />
            <div class="carousel-caption d-none d-md-block">
              <h5>{slider.title1}</h5>
              <p>{slider.content1}</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={slider.imgae2} class="d-block w-100" alt="..." height={"320"} />

            <div class="carousel-caption d-none d-md-block">
              <h5>{slider.title2}</h5>
              <p>{slider.content2}</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </div>);
}
