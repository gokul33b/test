import './Graph.css'
import Plot from 'react-plotly.js';

function Graph(props) {
  // const range = (beg, end)=>{
  //   return new Array(end - beg).fill().map((d, i) => i + beg);
  // }
  console.log(props.y)
    var plot1 = {
        x: ['R1_1',	'R1_3',	'R1_3',	'R1_4',	'R3_5',	'R2_6',	'R2_1',	'R2_3',	'R2_3',	'R2_4',	'R4_5',	'R5_6',	'R6_7'],
        y: props.data,
        name: props.name,
        type: "l",
        legend:props.name,
        line: {
          color: 'rgb(55, 128, 191)',
          width: 3
        },
        marker: {
          color: 'rgb(191, 21, 21)',
          size: 8
        },
        plot_bgcolor: '#444',
        paper_bgcolor: '#eee'
    };

    var plot2={
      x: ['R1_1',	'R1_3',	'R1_3',	'R1_4',	'R3_5',	'R2_6',	'R2_1',	'R2_3',	'R2_3',	'R2_4',	'R4_5',	'R5_6',	'R6_7'],
      y: Array(13).fill(props.goal),
      name:"Goal Value",
      type: "l",
      line: {
          color: 'rgb(26, 168, 168)',
          width: 3
      },
      marker: {
          color: 'rgb(128, 0, 128)',
          size: 8
      },
    }

    var data = [plot1,plot2];

      return(
        <div className='main'>
          <Plot className='plot'
            data={data}
            layout={{
              width: 540, 
              height: 280, 
              title: props.name+"-Trend",
              xaxis:{
                title:'R',
                showgrid: true,
                // range: [2015,2023]
              },
              yaxis:{
                title:props.name,
                showgrid: true,
                range: [Math.min(Math.min(...props.data)-10,props.goal-10),Math.max(...props.data)+10]
              }, 
                   
            }}          
              config={{
                displaylogo:false
            }} 
          />
        </div>
        
      )

  
}

export default Graph