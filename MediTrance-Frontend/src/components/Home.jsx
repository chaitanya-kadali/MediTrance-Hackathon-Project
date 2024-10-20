import "../styles/Home.css";
import Header from "./sub-components/Header";

function Home() {
  const content = `Meditation is a powerful tool for reducing stress and fostering relaxation, amidst daily life's chaos. It enhances focus, cognitive abilities, and emotional regulation, promoting resilience and tranquility. Meditation aids sleep, relieves anxiety, manages pain, and boosts immune function. It lowers blood pressure, alleviates depression, and empowers a fulfilling life with inner peace.`;

  const pc_content = `Meditation holds profound benefits across various aspects of human life.
                 It serves as a potent tool for reducing stress and fostering relaxation, 
                 offering individuals a sanctuary amidst the hustle and bustle of daily life.
                  Through regular practice, meditation enhances focus and cognitive abilities, 
                  sharpening mental acuity and improving productivity. Moreover, it promotes 
                  emotional regulation, equipping practitioners with the resilience to navigate 
                  through turbulent emotions with grace and composure. By calming the mind,
                   meditation facilitates better sleep patterns, aiding in the restoration of
                    energy and vitality. It also offers relief from anxiety, providing a pathway
                     to tranquility and peace of mind. Additionally, meditation has been linked to 
                     pain management, immune system enhancement, and improved brain function.
                      Cultivating self-awareness and compassion, it fosters deeper connections
                       with oneself and others, enriching interpersonal relationships and social
                        harmony. Furthermore, meditation contributes to physical well-being by 
                        reducing blood pressure and mitigating symptoms of depression. 
                        Ultimately, it empowers individuals to lead fulfilling lives with
                         a greater sense of purpose, resilience, and inner peace.`;

  const toreg = () => {
    window.location.href = "/Registration";
  };
  const toguest = () => {
    window.location.href = "/Guest";
  };
  const handleRedirect = () => {
    window.open("https://youtu.be/gh23glrr6h8?si=sohyNcnXX3LBDFdP", "_blank");
  };

  return (
    <div className="imgcon">
      <div className="Home">
        <Header />
        <div className="home-meditation">
          <p id="home-medit-matter"> {content} </p>
          <center>
            <center>
              <button id="ytlink" onClick={handleRedirect}>
                {" "}
                Click here to watch the demo video
              </button>
            </center>
          </center>
        </div>
      </div>
    </div>
  );
}
export default Home;
