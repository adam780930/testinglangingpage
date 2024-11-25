import classes from "./ProjectExamples.module.css";
import reservation from "../materials/res.png";
import recipe from "../materials/reci.png";
import flashcard from "../materials/fla.png";
import decoder from "../materials/dec.png";

function projectExamples() {
  const projectLinks = {
    reservation: "https://reservationapp.adamtsaidev.com/",
    flashcard: "https://flashcardapp.adamtsaidev.com/",
    decoder: "https://decoderapp.adamtsaidev.com/",
    recipe: "https://recipeapp.adamtsaidev.com/",
  };

  return (
    <div>
      <div>React Projects</div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 border border-dark">
            <div className={classes.item}>
              <img
                src={reservation}
                alt=""
                class="col-md-auto my-3"
                onClick={() => {
                  window.open(projectLinks.reservation);
                }}
              ></img>
            </div>
          </div>
          <div class="col-lg-6 border border-dark">
            <div className={classes.item}>
              <img
                src={flashcard}
                alt=""
                class="col-md-auto my-3"
                onClick={() => {
                  window.open(projectLinks.flashcard);
                }}
              ></img>
            </div>
          </div>
          <div class="w-100"></div>
          <div class="col-lg-6 border border-dark">
            <div className={classes.item}>
              <img
                src={decoder}
                alt=""
                class="col-md-auto my-3"
                onClick={() => {
                  window.open(projectLinks.decoder);
                }}
              ></img>
            </div>
          </div>
          <div class="col-lg-6 border border-dark">
            <div className={classes.item}>
              <img
                src={recipe}
                alt=""
                class="col-md-auto my-3"
                onClick={() => {
                  window.open(projectLinks.recipe);
                }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default projectExamples;
