
function RoutineForm({ onFormChange, formData }) {

  return (
    <div className="flex flex-col  text-green-700 bg-gray-50 p-4 rounded-lg shadow-2xl justify-center items-center mt-4 ">
      <h2 className="p-4 text-2xl">Create routine</h2>
      <div className="w-4/5">
        <label htmlFor="title" className="text-center md:text-lg">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="flex self-center text-green-800 rounded-md w-full h-11 bg-transparent border-primary"
          placeholder="Write your title"
          value={formData.title}
          onChange={(e) => onFormChange('title', e.target.value)}
          required
        />
      </div>
      <div className=" flex flex-col w-4/5 mt-2 text-green-800">
        <label htmlFor="target" className="md:text-lg">
          Target
        </label>
        <div
          className="inline-flex rounded-md shadow-sm justify-center"
          role="group"
        >
          <button
            type="button"
            value="Body definition"
            className={`${
              formData.target === 'Body definition'
                ? 'bg-secondary text-white'
                : 'bg-transparent text-gray-900'
            } px-4 py-2 text-md font-medium border border-primary rounded-l-lg hover:bg-terciary hover:text-black focus:z-10 focus:ring-2 focus:ring-secondary focus:bg-primary focus:text-white`}
            onClick={(e) => onFormChange('target', e.target.value)}
          >
            Body definition
          </button>
          <button
            type="button"
            value="Gain weight"
            className={`${
              formData.target === 'Gain weight'
                ? 'bg-secondary text-white'
                : 'bg-transparent text-gray-900'
            } px-4 py-2 text-md font-medium border-t border-r border-b border-primary hover:bg-terciary hover:text-black focus:z-10 focus:ring-2 focus:ring-secondary focus:bg-primary focus:text-white`}
            onClick={(e) => onFormChange('target', e.target.value)}
          >
            Gain weight
          </button>

          <button
            type="button"
            value="Lose weight"
            className={`${
              formData.target === 'Lose weight'
                ? 'bg-secondary text-white'
                : 'bg-transparent text-gray-900'
            } px-4 py-2 text-md font-medium border-t border-r border-b border-primary hover:bg-terciary hover:text-black focus:z-10 focus:ring-2 focus:ring-secondary focus:bg-primary focus:text-white`}
            onClick={(e) => onFormChange('target', e.target.value)}
          >
            Lose weight
          </button>

          <button
            type="button"
            value="Good shape"
            className={`${
              formData.target === 'Good shape'
                ? 'bg-secondary text-white'
                : 'bg-transparent text-gray-900'
            } px-4 py-2 text-md font-medium border-t border-b border-r rounded-r-md border-primary hover:bg-terciary hover:text-black focus:z-10 focus:ring-2 focus:ring-secondary focus:bg-primary focus:text-white`}
            onClick={(e) => onFormChange('target', e.target.value)}
          >
            Good shape
          </button>
        </div>
        <div className="flex flex-row items-center justify-end mt-4 gap-2">
          <label htmlFor="weightTarget" className="text-center md:text-lg">
            What's is your weight objective
          </label>
          <input
            type="text"
            id="Weight Target"
            className="flex self-center rounded-md w-24 h-11 border-primary bg-transparent "
            placeholder="ex: 80"
            value={formData.weightTarget}
            onChange={(e) => onFormChange('weightTarget', e.target.value)}
            required
          />
        </div>
        <label htmlFor="target" className="md:text-lg">
          Training Style 
        </label>
        <div
          className="inline-flex rounded-md shadow-sm justify-center"
          role="group2"
        >
          <button
            type="button"
            value="Pull, Push and Legs"
            className={`${
              formData.trainingStyle === 'Pull, Push and Legs'
                ? 'bg-secondary text-white'
                : 'bg-transparent text-gray-900'
            } px-4 py-2 text-md font-medium border border-primary rounded-l-lg hover:bg-terciary hover:text-black focus:z-10 focus:ring-2 focus:ring-secondary focus:bg-primary focus:text-white`}
            onClick={(e) => onFormChange('trainingStyle', e.target.value)}
          >
            Pull / Push
          </button>
          <button
            type="button"
            value="Upper and Lower Body"
            className={`${
              formData.trainingStyle === 'Upper and Lower Body'
                ? 'bg-secondary text-white'
                : 'bg-transparent text-gray-900'
            } px-4 py-2 text-md font-medium border-t border-r border-b border-primary hover:bg-terciary hover:text-black focus:z-10 focus:ring-2 focus:ring-secondary focus:bg-primary focus:text-white`}
            onClick={(e) => onFormChange('trainingStyle', e.target.value)}
          >
            Upper / Lower Body
          </button>
          <button
            type="button"
            value="By muscles"
            className={`${
              formData.trainingStyle === 'By muscles'
                ? 'bg-secondary text-white'
                : 'bg-transparent text-gray-900'
            } px-4 py-2 text-md font-medium border-t border-r border-b border-primary hover:bg-terciary hover:text-black focus:z-10 focus:ring-2 focus:ring-secondary focus:bg-primary focus:text-white`}
            onClick={(e) => onFormChange('trainingStyle', e.target.value)}
          >
            By Muscles
          </button>

          <button
            type="button"
            value="Full Body"
            className={`${
              formData.trainingStyle === 'Full Body'
                ? 'bg-secondary text-white'
                : 'bg-transparent text-gray-900'
            } px-4 py-2 text-md font-medium border-t border-b border-r rounded-r-md border-primary hover:bg-terciary hover:text-black focus:z-10 focus:ring-2 focus:ring-secondary focus:bg-primary focus:text-white`}
            onClick={(e) => onFormChange('trainingStyle', e.target.value)}
          >
            Full Body
          </button>
        </div>
        <label htmlFor="target" className="mt-4 md:text-lg">
          Days per week 
        </label>
        <div
          className="inline-flex rounded-md shadow-sm justify-center  "
          role="group2"
        >
          <button
            type="button"
            value="2 days or less"
            className={`${
              formData.daysperWeek === '2 days or less'
                ? 'bg-secondary text-white'
                : 'bg-transparent text-gray-900'
            } px-4 py-2 text-md  font-medium border border-primary rounded-l-lg hover:bg-terciary hover:text-black focus:z-10 focus:ring-2 focus:ring-secondary focus:bg-primary focus:text-white`}
            onClick={(e) => onFormChange('daysperWeek', e.target.value)}
          >
            2 days or less
          </button>

          <button
            type="button"
            value="3 to 5 days"
            className={`${
              formData.daysperWeek === '3 to 5 days'
                ? 'bg-secondary text-white'
                : 'bg-transparent text-gray-900'
            } px-4 py-2 text-md font-medium border-t border-r border-b border-primary hover:bg-terciary hover:text-black focus:z-10 focus:ring-2 focus:ring-secondary focus:bg-primary focus:text-white`}
            onClick={(e) => onFormChange('daysperWeek', e.target.value)}
          >
            3 to 5 days
          </button>

          <button
            type="button"
            value="6 days or more"
            className={`${
              formData.daysperWeek === '6 days or more'
                ? 'bg-secondary text-white'
                : 'bg-transparent text-gray-900'
            } px-4 py-2 text-md font-medium border-t border-b border-r rounded-r-md border-primary hover:bg-terciary hover:text-black focus:z-10 focus:ring-2 focus:ring-secondary focus:bg-primary focus:text-white`}
            onClick={(e) => onFormChange('daysperWeek', e.target.value)}
          >
            6 days or more
          </button>
        </div>
        <label htmlFor="target" className="mt-4 md:text-lg">
          Estimate time 
        </label>
        <div
          className="inline-flex rounded-md shadow-sm justify-center  "
          role="group2"
        >
          <button
            type="button"
            value="< 40"
            className={`${
              formData.gymTime === '< 40'
                ? 'bg-secondary text-white'
                : 'bg-transparent text-gray-900'
            } px-4 py-2 text-md w-32 font-medium border border-primary rounded-l-lg hover:bg-terciary hover:text-black focus:z-10 focus:ring-2 focus:ring-secondary focus:bg-primary focus:text-white`}
            onClick={(e) => onFormChange('gymTime', e.target.value)}
          >
            {'<'} 40 minutes
          </button>

          <button
            type="button"
            value="40 to 60"
            className={`${
              formData.gymTime === '40 to 60'
                ? 'bg-secondary text-white'
                : 'bg-transparent text-gray-900'
            } px-4 py-2 text-md font-medium border-t border-r border-b border-primary hover:bg-terciary hover:text-black focus:z-10 focus:ring-2 focus:ring-secondary focus:bg-primary focus:text-white`}
            onClick={(e) => onFormChange('gymTime', e.target.value)}
          >
            40 to 60 minutes
          </button>

          <button
            type="button"
            value="> 60"
            className={`${
              formData.gymTime === '> 60'
                ? 'bg-secondary text-white'
                : 'bg-transparent text-gray-900'
            } px-4 py-2 text-md  font-medium border-t border-b border-r rounded-r-md border-primary hover:bg-terciary hover:text-black focus:z-10 focus:ring-2 focus:ring-secondary focus:bg-primary focus:text-white`}
            onClick={(e) => onFormChange('gymTime', e.target.value)}
          >
            {'>'} 60 minutes
          </button>
        </div>
      </div>
      <div className="flex mt-4 mb-8">
        <label className="relative inline-flex justify-end items-end cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={formData.isPublic}
            onChange={() => onFormChange('isPublic', !formData.isPublic)}
          />
          <div className="w-11 h-6 bg-gray-400 rounded-full peer peer-focus:ring-4 peer-focus:ring-secondary peer-checked:after:translate-x-full peer-checked:after:border-terciary after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-terciary after:border-primary after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          <span className="ml-3 text-sm font-medium text-gray-900">
            Public 
          </span>
        </label>
      </div>{' '}
      
    </div>
  )
}

export default RoutineForm
