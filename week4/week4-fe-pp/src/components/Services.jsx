import { useState } from 'react';
import { services } from '../data'
import Title from './Title'
import Service from './Service'

const Services = () => {
  const [serviceData, setServicesData] = useState(services);

  const handleDeleteService = (serviceId) => {
    // Filter out the service with the specified ID and update the state
    const updatedServiceData = serviceData.filter((service) => service.id !== serviceId);
    setServicesData(updatedServiceData);
  };

  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {serviceData.map((service) => {
          return <Service {...service} id={service.id} key={service.id} onDelete={handleDeleteService} />
        })}
      </div>
    </section>
  )
}
export default Services