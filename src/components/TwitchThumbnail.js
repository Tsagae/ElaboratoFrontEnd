import * as React from "react";
import "../globalStyle/globalStyle.css";
import { StaticImage } from "gatsby-plugin-image";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default class TwitchThumbinail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      game: this.props.game,
    };
  }

  componentDidMount() {
    /*
    let splittedString = this.props.game.split(' ');
    let finalString = "";
    for (let i = 0; i < splittedString.length; i++) {
      finalString = finalString.concat(splittedString[i]);
      finalString = finalString.concat("%20");
    }
    finalString = finalString.slice(0, -3);*/
    let imgSrc = "https://static-cdn.jtvnw.net/ttv-boxart/" + encodeURIComponent(this.props.game) + "-285x380.jpg";
    console.log(imgSrc);
    this.setState({
      loaded: true,
      game: imgSrc,
    });
  }



  render() {
    if (this.state.loaded == false) {
      return (
        <div>
          <LazyLoadImage
            src={
              "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png"
            }
            alt={"placeholder"}
            width={this.props.width}
            height={this.props.height}
          />
        </div>
      );
    } else {
      return (
        <div>
          <LazyLoadImage
            src={this.state.game}
            alt={this.props.game}
            width={this.props.width}
            height={this.props.height}
          />
        </div>
      );
    }
  }
}