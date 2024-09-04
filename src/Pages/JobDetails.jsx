import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Swal from 'sweetalert2'
import PageHeader from "../components/PageHeader";

const JobDetails = () => {
    const {id} = useParams();
    const [job, setJob] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/all-jobs/${id}`)
        .then(res => res.json())
        .then(data => setJob(data))
    }, [])

    const handleApply = async() => {
        const { value: url } = await Swal.fire({
            input: "url",
            inputLabel: "CV or Resume URL Address",
            inputPlaceholder: "Enter the URL"
          });
          if (url) {
            Swal.fire(`Entered URL: ${url}`);
          }
    }

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        <PageHeader title={job.jobTitle} path={"single job details"} />
      <h2 className="py-4">Job ID: {id}</h2>
      <h1 className="text-blue">Job Details</h1>
      <p >It was popularised in the 1960s with the release of Letraset sheets<br/> containing Lorem 
        Ipsum passages, and more recently with desktop.</p>

     <h3 className="font-semibold py-4">Job Type</h3>
     <div className="flex gap-4">
        <button className="bg-[#2f82d588] px-8 py-2 text-white" onClick={handleApply}>{job.employmentType}</button>
        <button className="bg-blue px-8 py-2 text-white" onClick={handleApply}>Apply Now</button>
     </div>

     <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">

        {/* left side */}
    <div className="bg-white p-4 rounded">
        Benefits
    </div>

    <div className="col-span-2 bg-white p-4 rounded-sm">
        Out Line
    </div>
    <div className="bg-white p-4 rounded">
        Future Growth
    </div>

     </div>

    </div>
  )
}

export default JobDetails
