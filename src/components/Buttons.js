function buttons({ linkOpen, downloadResume }) {
  return (
    <div>
      <h2 onClick={linkOpen}>Projects</h2>
      <h2 onClick={downloadResume}>Experiences</h2>
    </div>
  );
}

export default buttons;
