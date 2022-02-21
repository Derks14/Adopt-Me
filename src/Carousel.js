import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  handleImageClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  // eslint-disable-next-line
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img alt="animal" src={images[active]} />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              data-index={index}
              onClick={this.handleImageClick}
              className={index === active ? "active" : ""}
              alt="animal-thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
