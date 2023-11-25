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
      <h1>Sample projects</h1>
      <div className={classes.grid}>
        <div className={classes.item} onClick={linkOne}>
          <img src={reservation} className={classes.projectImages} alt=""></img>
        </div>
        <div className={classes.item} onClick={linkTwo}>
          <img src={recipe} className={classes.projectImages} alt=""></img>
        </div>
        <div className={classes.item} onClick={linkThree}>
          <img src={flashcard} className={classes.projectImages} alt=""></img>
        </div>
        <div className={classes.item} onClick={linkFour}>
          <img src={decoder} className={classes.projectImages} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default projectExamples;
