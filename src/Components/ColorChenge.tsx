import {Component} from "react";
import { updateRandomColors } from "../colorRandom";


type Props = {
    iContainerColor: string;
    squareCount: number;
};

type State = {
    containerColor: string;
    colors: string[];
};

class ColorChenge extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            containerColor: props.iContainerColor || "#ffffff",
            colors: updateRandomColors(props.squareCount || 4),
        };
    }


    handleSquareClick = (color: string) => {
        this.setState({
            containerColor: color,
            colors: this.state.colors.map(() => color),
        });
    };

    handleReset = () => {
        this.setState({
            containerColor: this.props.iContainerColor || "#ffffff",
            colors: updateRandomColors(this.props.squareCount || 4),
        });
    };

    render() {
        return (
            <div className="wrapper">
                <div
                    className="big-square"
                    style={{ backgroundColor: this.state.containerColor }}
                >
                    {this.state.colors.map((col, index) => (
                        <div
                            key={index}
                            className="small-square"
                            style={{ backgroundColor: col }}
                            onClick={() => this.handleSquareClick(col)}
                        />
                    ))}
                    <button onClick={this.handleReset} className="reset-button">
                        Reset
                    </button>
                </div>
            </div>
        );
    }
}

export default ColorChenge;
