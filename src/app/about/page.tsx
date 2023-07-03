import React from "react";
import "./style.scss";
import Image from "next/image";
type Props = {};

const About = (props: Props) => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <div className="about-content">
          <div className="about-img-wrapper">
            <Image
              src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="about-img"
              fill={true}
            />

            <div className="about-img-overlay">
              <p>Digital Storytellers</p>
              <p>Handcrafting award winning digital experience</p>
            </div>
          </div>
          {/* ABOUT TEXTS */}
          <div className="about-text">
            {/* left text */}

            <div className="about-text-left">
              <h1>Who are We?</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                amet iure quae officia eius voluptates!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio obcaecati sint dolor neque laudantium, tenetur
                officia molestias similique! Veniam eveniet eum illo maxime
                mollitia! Distinctio doloremque voluptatibus et officia
                suscipit!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti distinctio pariatur, voluptates velit tempora itaque
                illum, placeat ad consectetur sapiente, provident deleniti
                exercitationem repellat minima quisquam aut a rerum animi.
              </p>
            </div>
            {/* right text */}
            <div className="about-text-right">
              <h1>What we do??</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestiae delectus architecto commodi. Sit quisquam deserunt
                dolorem, minima vel nemo expedita. Soluta ipsa molestiae earum!
                Nesciunt aliquam architecto expedita rerum. Numquam. Cupiditate,
                eos, commodi similique accusantium necessitatibus consectetur,
                dolor iusto provident nobis aspernatur delectus ex porro
                recusandae explicabo expedita quia. Et aliquam sed fuga maxime,
                cupiditate dolorum itaque deserunt obcaecati quisquam.
              </p>
              <p>-Creative Illustrations</p>
              <p>-Dyanmic Websites</p>
              <p>-Fast and Handy Mobile Apps</p>
              <button>Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
