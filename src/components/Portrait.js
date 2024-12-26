import pfp from "../materials/pfp3.jpg";

function Portrait() {
  return (
    <div class="text-center my-5">
      <img
        src={pfp}
        class="rounded-circle border border-dark"
        alt="avatar1"
      ></img>
    </div>
  );
}

export default Portrait;
