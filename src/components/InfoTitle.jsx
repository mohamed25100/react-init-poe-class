import { Component } from "react";

export class InfoTitle extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
            <h2 className="text-xl font-bold uppercase">
              {this.props.text}</h2>
            <div className="h-2 w-full bg-white"></div>
            </>

        )
    }
}