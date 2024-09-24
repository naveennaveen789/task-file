// import Car from './Car';
import Car from './Car';
import Apple from './Apple';

function Garage(){
    // const brand = 'audi';
    // const color = 'green';
    const carinfo = {brand:"audi", color:"green"}
    const Appleinfo = {type:"fuji", color:"red"}
    return(
        <>
        <h1>who lives in my Garage ?</h1>
        <h2>html</h2>
        <h2>css</h2>
        <h2>iavascript</h2>
        <h2>react</h2>
        {/* <Car  brand={brand} color="green" /> */}
        <Car carinfo={carinfo} />
        <Apple Appleinfo={Appleinfo} />
        </>
    )
}

export default Garage;