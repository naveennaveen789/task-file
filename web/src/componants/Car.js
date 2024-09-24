function Car(props){  
    // const {brand, color}= props
    const { carinfo } = props;
        const {brand, color}= carinfo



    const text = `hi,iam a ${color} ${brand} car`;
    return(
      <h2>{text}</h2>
    )
  }

  export default Car;