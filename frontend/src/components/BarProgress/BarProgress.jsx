import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Filter,
  Legend,
} from 'chart.js'
import { getOneUserbyId } from '@/services/user.services'
import { formatDate } from '@/validations/validations'

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  PointElement,
  Legend
)

function BarProgress() {
  const [user, setUser] = useState('')

  const getUser = async () => {
    const res = await getOneUserbyId()
    setUser(res)
  }

  useEffect(() => {
    getUser()
  }, [])


  const [chartData, setChartData] = useState({
    datasets: [],
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
  if (user && user.progress) {
    const weightProgress = user.progress.map((entry) => entry.weightProgress);

    const labels = weightProgress.flatMap((entry) => entry.map((item) => formatDate(item.date)));
    const data = weightProgress.flatMap((entry) => entry.map((item) => item.weight));
    const data2 = data.unshift(user.user.weight)
    
    setChartData({
      labels: labels,
      datasets: [
        {
          label: 'Weight',
          data: data,
          borderColor: 'green',
          backgroundColor: 'black',
          pointBorderColor: 'black',
          fill: false,
          tension: 0.4,
        },
      ],
    });

    setChartOptions({
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: `Weight Progress - Target: ${user.user.weightTarget} kg`
        },
      },
      annotation: {
        annotations: {
          minLabel: {
            type: 'line',
            scaleID: 'y',
            value: user.user.weightTarget, 
            borderColor: 'red',
            borderWidth: 1,
            label: {
              content: 'Mínimo',
              position: 'start',
              backgroundColor: 'white',
              font: {
                size: 12,
              },
            },
          },
          maxLabel: {
            type: 'line',
            scaleID: 'y',
            value: user.user.weight + 50, // Acceder a la propiedad weightTarget en user.user
            borderColor: 'green',
            borderWidth: 1,
            label: {
              content: 'Máximo',
              position: 'start',
              backgroundColor: 'white',
              font: {
                size: 12,
              },
            },
          },
        },
      },
      scales: {
        y: {
          min: user.user.weight + 50, // Acceder a la propiedad weight en user.user
          max: user.user.weightTarget , // Acceder a la propiedad weightTarget en user.user
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }
}, [user]);



  return (
    <div className=" bg-white sm:w-full sm:h-full md:w-2/4 md:h-56 rounded-lg shadow-lg mt-6">
      {user && user.progress && (
        <Line data={chartData} options={chartOptions} />
      )}
    </div>
  )
}

export default BarProgress
