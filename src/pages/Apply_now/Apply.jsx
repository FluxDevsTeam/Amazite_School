import { ApplicationDetails, ParentInfo, StudentInfo } from './_components';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Apply = () => {
  const [formData, setFormData] = useState({
  first_name_of_student: '',  
  last_name_of_student: '',
  gender_of_student: '',
  phone_number_of_student: '',
  email_of_student: '',
  studentDoB: '',
  studentState: '',
  address_of_student: '',
  language_of_student: '',
  first_name_of_parent: '',
  last_name_of_parent: '',
  occupation_of_parent: '',
  gender_of_parent: '',
  relationship_to_student: '',
  email_of_parent: '',
  phone_number_of_parent: '',
  program: '',
  entry_level: '',
  application_type: '',
  startDate: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false); 

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, 
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://amaziteacademy.pythonanywhere.com/api/apply/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Form submitted successfully', data);
        toast.success('Form submitted successfully!');
      } else {
        console.error('Error submitting form', data); 
        toast.error('Error submitting form: ' + JSON.stringify(data));  
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while submitting the form');
    } finally {
      setIsSubmitting(false);
    }
  };
  
 

  return (
    <section className="w-full px-2 py-2 md:px-5 lg:px-12 md:py-10">
      <form
        className="bg-[#FFFFFF61] rounded-xl px-6 py-8 flex flex-col gap-14"
        style={{ boxShadow: '0px 2.86px 2.86px 0px #00000040' }}
        onSubmit={handleSubmit}
      >
        <StudentInfo formData={formData} handleInputChange={handleInputChange} />
        <ParentInfo formData={formData} handleInputChange={handleInputChange} />
        <ApplicationDetails formData={formData} handleInputChange={handleInputChange} />
        <div className="w-full flex justify-center items-center">
          <button
            type="submit"
            disabled={isSubmitting} 
            className={`bg-[#ECB9BA] w-full max-w-[300px] hover:bg-[#ecb9bab6] duration-500 text-[#363F40] rounded-[10px] roboto text-sm md:text-lg py-2 font-medium px-4 ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`}
            style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Form'} 
          </button>
        </div>
      </form>
      <ToastContainer position="top-center" />
    </section>
  );
};

export default Apply;
