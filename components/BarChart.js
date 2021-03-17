import {useState, useEffect} from 'react'
import {Bar} from 'react-chartjs-2'
import moment from 'moment'

export default function BarChart({rawData}){
    // console.log(rawData)

    const [months, setMonths] = useState ([])
    const [monthlySales, setMonthlySales] = useState([])

    useEffect(()=>{
        //if rawData is not empty, we will run this is statement.If it is empty, we'll simply do nothing.
        if(rawData.length > 0){

            let tempMonths = [] //placeholder array for the distinct available months with sales.

            rawData.forEach(element => {
                //element.sale_date = "8/12/2020"
                if(!tempMonths.find(month => month === moment(element.sale_date).format('MMM'))){
                    tempMonths.push(moment(element.sale_date).format('MMM'))
                }
            })
            // console.log(tempMonths)
            const monthsRef = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

            tempMonths.sort((a,b)=> {
                //validation to check iff the months being compared are found in the reference array
                if(monthsRef.indexOf(a) !== -1 && monthsRef.indexOf(b) !== -1){
                    return monthsRef.indexOf(a) - monthsRef.indexOf(b)
                }
            })
            setMonths(tempMonths)
        }

    }, [rawData])

    // console.log(months)

    useEffect(()=>{
        setMonthlySales(months.map(month => {
            let sales = 0
            rawData.forEach(element=>{
                
                if(moment(element.sale_date).format("MMM") === month){
                sales += parseInt(element.sales)
                console.log(months,sales)

            }
            })
            return sales
        }))
    },[months])
    
    const data = {
        labels: months,
        datasets: [{

            label: 'Monthly Sales for the Year 2020',
            backgroundColor: 'blue',
            borderColor: 'white',
            borderWidth: 1,
            hoverBackgroundColor: 'lightblue',
            hoverBorderColor: 'black',
            data: monthlySales
        }]
    }

    const options ={
        scales:{
            yAxes:[
                {
                    ticks:{
                        beginAtZero:true,
                       
                    }
                }
            ]
        }
    }

    return (
        <Bar data={data} options={options}/>
    )
}