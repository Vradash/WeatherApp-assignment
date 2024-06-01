import CanvasJSReact from '@canvasjs/react-charts';

export default function BarChart(props) {

    const dataArr = props.chartData?.map((element, index) => {
        return { label: index, y: element }
    });

    // var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const options = {
        animationEnabled: true,
        // exportEnabled: true,
        theme: "light1",
        title: {text: "Weekly Temperature"},
        // dataPointWidth: 80,
        data: [{
            type: "column",
            // dataPoints: [
            //     { label: "Apple", y: 10 },
            //     { label: "Orange", y: 15 },
            //     { label: "Banana", y: 25 },
            //     { label: "Mango", y: 30 },
            //     { label: "Mango", y: 30 },
            //     { label: "Grape", y: 28 },
            //     { label: "Grape", y: 28 },
            // ]
            dataPoints: dataArr || [{ label: "No Data", y: 0}]
        }]
    }

    // console.log(props.chartData)
    console.log(dataArr);

    return (
        // <div className="container">
            <div className="chart">
                <CanvasJSChart options={options}
                //  onRef = {ref => this.chart = ref} 
                />
            </div>

        // /* </div> */
    );
}