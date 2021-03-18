import BarCharts from '../../components/Barcharts'
import PieChart from '../../components/PieChart'
import {Jumbotron} from 'react-bootstrap'


export default function Charts(){

	return(

			<Jumbotron className="text-center">
				<h1>Pie Graph</h1>
				<PieChart />
				<h1>Bar Graph</h1>
				<BarCharts />
			</Jumbotron>
			
		)
}
