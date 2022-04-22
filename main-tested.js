let theRocket = document.querySelector('.rocket-land')
let body = document.querySelector('body')
// let planets = document.querySelectorAll('.moon')
// let planets = document.querySelector('body')

body.addEventListener('click', getClickPosition, false)

let translate3dValue = "translate3d(" + `calc(50vw - ${theRocket.clientWidth / 2}px)` + " , " + `calc(90vh - ${theRocket.clientHeight / 2}px)` + ", 0) "
theRocket.style.transform = translate3dValue


function getClickPosition(e) {
  let xPosition = e.clientX - (theRocket.clientWidth / 2);
  let yPosition = e.clientY - (theRocket.clientHeight / 2);
  let radian = Math.atan2(e.pageX - xPosition, e.pageY - yPosition)

  function rotationSide(radian) {
    let result;
    if (body.clientWidth/2 > e.clientX) {
      result = (radian * (-180/ Math.PI) );
    } else {
      result = (radian * (180/ Math.PI) );
    }
    return result;
  }

  let translate3dValue = "translate3d(" + xPosition + "px," + yPosition + "px, 0) scale(0) " + `rotate(${rotationSide(radian)}deg)` + " "
  theRocket.style.transform = translate3dValue
  theRocket.style.transition = "transform 1s ease-in"

}
