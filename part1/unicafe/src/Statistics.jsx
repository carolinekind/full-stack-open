
import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
        const clicks = props.value
        let res = clicks.some((val) => val > 0)
        if(res){
            return (
                <div>
                        <table>
                            <tbody>
                                <tr>
                                <StatisticLine text="good" value={props.value[0]}/>
                                <StatisticLine text="neutral" value={props.value[1]}/>
                                <StatisticLine text="bad" value={props.value[2]}/>
                                <StatisticLine text="ALL" value={props.value[3]}/>
                                <StatisticLine text="Positive" value={props.value[4]}/>
                                </tr>
                            </tbody>
                        </table>

                </div>
           )
        }

        return (
            <div>
                <p>No Feedback given</p>
            </div>
        )
  

}

export default Statistics;