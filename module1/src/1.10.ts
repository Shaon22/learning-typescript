// unknown type using typeOf

const getSpeedInMeterPerSecond=(value:unknown)=>{
    if (typeof value==="number"){
        const convertedSpeed= (value*1000)/3600
        
    }
    else if (typeof value=== 'string'){
        const [val,unit]=value.split(" ")
       const convertedSpeed= (parseFloat(val))*1000/3600
        console.log(`The converted speed is ${convertedSpeed} ms^-1`)

    }
    else{
        console.log('wrong input bro')
    }
}
getSpeedInMeterPerSecond("1000 ms^-1")

