import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = { loading: true };
  // }

  state = { loading: true, showModal: false };

  async componentDidMount() {
    // get the item detail on first reload
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();

    console.log(json.pets[0]);

    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal } )
  adopt = () => window.location = 'https://bit.ly/pet-adopt';

  render() {
    if (this.state.loading) {
      return (
        <div>
          <p>Loading ... </p>
        </div>
      );
    }


    const { name, animal, breed, city, state, description, images, showModal } =
      this.state;

    // throw new Error("hello there");

    return (
      <div className="details">
        <div>
          <Carousel images={images} />
        </div>
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city} - {state}
          </h2>

          <ThemeContext.Consumer>
            { ([theme]) => {
              return <button onClick={this.toggleModal} style={{backgroundColor: theme}}>Adopt {name}</button>

            }}
          </ThemeContext.Consumer>
          <p>{description}</p>
        </div>
        {
          showModal ?
            ( <Modal>
            <div>
              <h1>Would you like to adopt {name}</h1>
              <div className="buttons">
                <button onClick={this.adopt}>Yes</button>
                <button onClick={this.toggleModal}>No</button>
              </div>
            </div>
          </Modal> ) : null
        }

      </div>
    );
  }
}

//the with router is here to be able to access the params id.
// replace export
// const DetailsWithRouter = withRouter(Details);
//
// export default function DetailsErrorBoundary(props) {
//   return (
//     <ErrorBoundary>
//       <DetailsWithRouter {...props} />
//     </ErrorBoundary>
//   );
// }

export default withRouter(Details);
