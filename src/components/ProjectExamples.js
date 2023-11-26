import classes from "./ProjectExamples.module.css";
import reservation from "../materials/res.png";
import recipe from "../materials/reci.png";
import flashcard from "../materials/fla.png";
import decoder from "../materials/dec.png";

function projectExamples() {
  function linkOne() {
    window.open("https://reservationapp.adamtsaidev.com/");
  }

  function linkTwo() {
    window.open("https://flashcardapp.adamtsaidev.com/");
  }

  function linkThree() {
    window.open("https://decoderapp.adamtsaidev.com/");
  }

  function linkFour() {
    window.open("https://recipeapp.adamtsaidev.com/");
  }
  return (
    <div>
      <div>Sample projects</div>
      <div class="container">
        <div class="row">
          <div onClick={linkOne} class="col-lg-6 border border-dark">
          <div className={classes.item}>
            <img src={reservation} alt="" class="col-md-auto"></img>
            </div>
          </div>
          <div onClick={linkTwo} class="col-lg-6 border border-dark">
          <div className={classes.item}>
            <img src={flashcard} alt="" class="col-md-auto"></img>
            </div>
          </div>
          <div class="w-100"></div>
          <div onClick={linkThree} class="col-lg-6 border border-dark">
          <div className={classes.item}>
            <img src={decoder} alt="" class="col-md-auto"></img>
            </div>
          </div>
          <div onClick={linkFour} class="col-lg-6 border border-dark">
            <div className={classes.item}>
            <img src={recipe} alt="" class="col-md-auto" ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default projectExamples;
