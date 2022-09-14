import { useEffect, useState } from "react";
import styled from "styled-components";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { objetives } from "../../data";
import "./Slider.scss";

export default function Slider(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(props.images[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (props.autoPlay || !props.showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, props.images);
      }, 1000);
      return () => clearInterval(interval);
    }
  });

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImage(selectedIndex, props.images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, props.images);
  };
  return (
    <div>
      <div className="card">
        <CarouselImg
          src={require(`../../assets/${selectedImage}`)}
          alt="logos"
          className={loaded ? "loaded image" : "image"}
          onLoad={() => setLoaded(true)}
        />
        <div className="card__details">
          <p className="card__title">{objetives[selectedIndex].text}</p>
          <p className="card__description">
            {objetives[selectedIndex].description}
          </p>
        </div>
      </div>

      {props.showButtons ? (
        <div className="app__goal-btns app__flex">
          <HiChevronLeft onClick={previous} className="btn_prev" />
          <HiChevronRight onClick={next} className="btn_next" />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

const CarouselImg = styled.img`
  max-width: 200px;
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;
