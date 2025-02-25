const svgs = import.meta.glob("./assets/img/footer/*.svg", { eager: true });
const svgLinks = {
  "linkedin.svg": "https://linkedin.com/in/bvndls",
  "telegram.svg": "https://t.me/bvndls0",
  "github.svg": "https://github.com/bvndls",
  "cv.svg": "/cv.pdf",
};

export default function App() {
  return (
    <div id="main" className="min-h-svh p-4 flex flex-col justify-between">
      <div id="header" className="max-h-20 text-6xl flex justify-between">
        <p className="font-omotion">bvndls</p>
        <p className="cursor-pointer blur-xs" title="under construction">🚧</p>
      </div>
      <div id="content">
        <p className="text-3xl md:text-5xl text-center font-alexandria">
          The <span className="animate-color">website</span> will be available<br />as soon as possible
        </p>
      </div>
      <div id="footer" className="flex justify-stretch">
      <p className="text-6xl cursor-pointer blur-xs" title="under construction">🚧</p>
        <div id="icons" className="flex gap-4">
        {Object.keys(svgs).map((fileName, index) => {
            const cleanName = fileName.replace("./assets/img/footer/", "");
            return (
              <a key={index} href={svgLinks[cleanName]} target="_blank" rel="noopener noreferrer">
                <img src={svgs[fileName].default} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}