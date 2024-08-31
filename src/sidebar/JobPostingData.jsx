import InputField from "../components/InputField"

const JobPostingData = ({ handleChange }) => {
    const now = new Date();
    const twentyfourHoursAgo = new Date( now - 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date( now - 7 * 24 * 60 * 60 * 1000);
    const thirtyDaysAgo = new Date( now - 30 * 24 * 60 * 60 * 1000);
    //console.log(twentyfourHoursAgo);

    //convert date to string
    const twentyfourHoursAgoDate = twentyfourHoursAgo.toISOString().slice(0, 10);
    const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
    const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);

    //console.log(twentyfourHoursAgoDate);
    
    
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Date of Posting</h4>

      <div>
        <label className="sidebar-label-container">
            <input 
                type="radio" 
                name="test" 
                id="test" 
                value="" onChange={handleChange} 
            />
            <span className="checkmark"></span>All Time
        </label>

        <InputField 
            handleChange={handleChange} 
            value={twentyfourHoursAgoDate}
            title="Last 24 hours" 
            name="test" 
        />
        <InputField 
            handleChange={handleChange} 
            value={sevenDaysAgoDate}
            title="Last 7 days" 
            name="test" 
        />
        <InputField 
            handleChange={handleChange} 
            value={thirtyDaysAgoDate} 
            title="Last Month" 
            name="test" 
        />

      </div>
    </div>
  )
}

export default JobPostingData
