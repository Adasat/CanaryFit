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
      
      scales: {
        y: {
          min: user.user.weight - 20, 
          max: user.user.weight + 30, // Acceder a la propiedad weightTarget en user.user
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }
}, [user]);



  return (
    <div className=" bg-white md:w-full rounded-lg shadow-lg">
      {user && user.progress && (
        <Line data={chartData} options={chartOptions} />
      )}
    </div>
  )
}

export default BarProgress
