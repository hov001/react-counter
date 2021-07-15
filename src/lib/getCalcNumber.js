export default function getCalcNumber(num) {
    if (num === 0) {
        this.setState({
            count: 0
        })
    } else if (!(this.state.count === 0 && num === -1)) {
        this.setState(prevState => ({
            count: prevState.count + num
        }))
    }
}