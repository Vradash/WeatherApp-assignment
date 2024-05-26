// import dss from '../images/thermometer.jpg'
export default function Card(props) {

    let sum=0;
    props.array?.forEach(element => {
        sum+=element;
    });
    let avg = sum/6.0;
    console.log(avg);


    return (
        <div className="card">
            <h3>{props?.title}</h3>
            <img src={require('../images/thermometer.jpg')} alt="placeholder" />
            <div>
                {/* <p>{props.array}</p> */}
                <h3>{avg.toFixed(2)}</h3>
                <h2>{props.unit}</h2> 
            </div>
        </div>
    );
}