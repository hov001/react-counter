import React from "react";
import Counter from "../Counter/Counter";
import InputSection from "../InputSection/InputSection";
// Get calculate number
import getCalcNumber from "../../lib/getCalcNumber";

class CounterSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }

        this.getCalcNumber = getCalcNumber.bind(this)
    }

    render() {
        return (
            <section className=''>
                <InputSection />
                <Counter count={this.state.count} calcFunc={this.getCalcNumber}/>
            </section>
        )
    }

}

export default CounterSection