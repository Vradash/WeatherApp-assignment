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
            dataPoints: dataArr || [{ label: "No Data", y: 0}]
        }]
    }

    return (
        // <div className="container">
            <div className="chart">
                <CanvasJSChart options={options} />
            </div>

        // /* </div> */
    );
}