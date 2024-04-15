import Image from "next/image";
import { Tabs } from "flowbite-react";
import { HiGlobeAlt } from "react-icons/hi";
import { HiAdjustments, HiOutlineDocumentText ,HiClipboardList, HiOutlineBeaker ,HiOutlineSearchCircle, HiOutlineWifi, HiCog, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Table } from "flowbite-react";
import React from 'react';
import PropTypes from 'prop-types';
import { Grommet, Box, Diagram, Stack } from "grommet/components";


//https://v2.grommet.io/components

const EmbeddedContent = () => {
    return (
      

        <div className="overflow-x-auto pb-">

            <div className="text-center text-3xl">
              <br />
        <h1> Embedded Engineering</h1>
        <br />


      

            </div>
        <Tabs aria-label="Full width tabs" style="fullWidth">
          <Tabs.Item active title="Overview" icon={HiOutlineDocumentText }>
                   



<div className=" grid-cols-1 mx-auto grid lg:grid-cols-2 text-center items-center">



<div className="flex width-[650px]  justify-center items-center">
  <div className="flex px-10 justify-center items-center ">

        
          <Stack guidingChild={1}>
  <Diagram

  animation={{
    
    type: 'pulse',
    duration: 2000,
    size: 'medium',
  }}

    connections={[
      {
        fromTarget: '1',
        toTarget: '2',
        thickness: 'xsmall',
        color: 'graph-0',
        type: 'curved',
      },
      {
        fromTarget: '2',
        toTarget: '3',
        thickness: 'xsmall',
        color: 'status-ok',
        type: 'rectilinear',
      },
      {
        fromTarget: '3',
        toTarget: '4',
        thickness: 'xsmall',
        color: 'graph-1',
        type: 'curved',
      },
    ]}
  />
  
  <Box>
    <Box direction="row" margin={{ bottom: 'large' }} >
        
      <Box id="1" margin="small" pad="small" background="light-4" >
        Problem Identification (What is the problem trying to be solved?)
        </Box>
      <Box id="2" margin="small" pad="small" background="light-4" >
        Platform Identification (Arduino, Raspberry Pi, ESP, etc.)
        
        </Box>
    </Box>
    
    <Box direction="row"  margin={{ bottom: 'large' }}>
      <Box id="3" margin="small" pad="small" background="light-4" >
     
      Sensor and Device Selection (Servo, Motor, LEDs, Relay)
      </Box>
      <Box id="4" margin="small" pad="small" background="light-4" >
      Prototype Development & Testing
      </Box>
    </Box>
  </Box>
</Stack>
</div>




  </div>




           <div className="text-center items-center px-10 w-80% ">
            
            
            Since 2018 I've completed personal projects and supported students solving problems competitively with great success utilizing the engineering design process primarily with embedded devices. 
            <br />
            <br />
            I've worked with students to identify problems, select platforms, sensors, and devices, and develop prototypes for an extremely wide range of solutions.
            <br />
            <br />
            As a result I have amassed hundreds of sensors and thousands of devices to integrate with 
            the 80+ boards I have in my collection.
            <br />
            <br />

            I am at a point where given any problem I can identify a platform, sensors, and devices to build a functioning protoype. 
            

            </div>








            </div>
          </Tabs.Item>
          <Tabs.Item title="IoT & BT" icon={HiOutlineWifi}>
          

          <div className="grid grid-cols-1 w-[95%] mx-auto gap-[1rem] md:grid-cols-2 items-center">

          <div className="text-center ">
    <p>

    
      <div className="lg:w-[350px] mx-auto md:x-0 mt-[2rem] lg:mt-0 lg:h-[350px] w-[300px] h-[300px] relative">
          <Image
            src="/images/iot.png"
            alt="Joshua Gagnier"
            layout="fill"
            className="relative z-[11] w-[100%] h-[100%] object-cover rounded-xl"
          />
          <div className="absolute w-[105%] h-[102%] z-[10]    rounded-xl"></div>
        </div>
        <br /><br />
        Connectivity drives the world.
      <br /><br />
      Developing and technically supporting, coaching, and guiding the development of dozens of mesh, wifi, bluetooth, phone-app, and voice controlled devices has helped me understand the importance and design flow of connectivity in the modern world.
<br /><br />


    </p>
  

    </div>

          <div className="overflow-x-auto">

      <Table>
        <Table.Head>
          <Table.HeadCell>Device</Table.HeadCell>
          <Table.HeadCell>Utilization</Table.HeadCell>
          <Table.HeadCell>Image</Table.HeadCell>
        </Table.Head>
        <Table.Body className="">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-l">
              {'HC-05'}
            </Table.Cell>
            <Table.Cell>
              
              
              A go-to and still commonly used for mobile BT driven, Master-Slave, or mesh network prototypes. The HC-05 is robust, simple to use, and quick to spin up wireless functionality.</Table.Cell>
            <Table.Cell>
              <div className="w-full h-full flex items-center min-w-[100px] min-h-[100px]"   style={{
    backgroundImage: `url("/images/hc05.jpg")`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }}>
<p> </p>

            </div>

            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-l">
              ESP-32
            </Table.Cell>
            <Table.Cell>For initial Wifi experimentation I utilized these adapters to connect Arduino to internet applications & databases.</Table.Cell>
            <Table.Cell>
              <div className="w-full h-full  flex items-center min-w-[100px] min-h-[100px]"   style={{
    backgroundImage: `url("/images/espa.jpg")`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }}>


</div>
          </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-l">NodeMCU <br /> ESP8266 </Table.Cell>
            <Table.Cell> These wifi integrated boards simplified IoT and Alexa integrated applications due to their common usage for prototyping. </Table.Cell>
            <Table.Cell>
              <div className="w-full h-full  flex items-center min-w-[100px] min-h-[100px]"   style={{
    backgroundImage: `url("/images/espb.jpg")`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }}>

            </div>

          </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-l">Redboard <br /> Artemis </Table.Cell>
            <Table.Cell> Each Artemis is equipped with built in BT, which was used for a easy set-up mesh network. Was used for muscle sensing devices, though I plan on using the other board features in future development.</Table.Cell>
            <Table.Cell>
              <div className="w-full h-full  flex items-center min-w-[100px] min-h-[100px]"   style={{
    backgroundImage: `url("/images/sparkfun.jpg")`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }}>
     
            </div>

          </Table.Cell>
          </Table.Row>

        </Table.Body>
      </Table>
    </div>


   
    </div>




            
          </Tabs.Item>
          <Tabs.Item title="Mechanical" icon={HiCog}>




          <div className="grid grid-cols-1 w-[95%] mx-auto gap-[1rem] md:grid-cols-2 items-center">



          <div className="text-center ">

<div className="lg:w-[350px] mx-auto md:x-0 mt-[2rem] lg:mt-0 lg:h-[350px] w-[300px] h-[300px] relative">
          <Image
            src="/images/mechanical.png"
            alt="Joshua Gagnier"
            layout="fill"
            className="relative z-[11] w-[100%] h-[100%] object-cover rounded-xl"
          />
          <div className="absolute w-[105%] h-[102%] z-[10]    rounded-xl"></div>
        </div>
        <br /><br />

<p>I have supported technically and guided the development of dozens of mesh, wifi, bluetooth, phone-app, and voice controlled devices. 

</p>


</div>

<div className="overflow-x-auto">

<Table>
<Table.Head>
<Table.HeadCell>Device</Table.HeadCell>
<Table.HeadCell>Utilization</Table.HeadCell>
<Table.HeadCell>Image</Table.HeadCell>
</Table.Head>
<Table.Body className="">
<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-l">
    {'Servo Motor'}
  </Table.Cell>
  <Table.Cell>
    
    Robotic arm? Percise movement? Cars? Servos are the go-to for any project requiring movement used in most projects.
    
    
    </Table.Cell>
  <Table.Cell>


    <div className="w-full h-full flex items-center min-w-[100px] min-h-[100px]"   style={{
backgroundImage: `url("/images/servo.jpg")`,
backgroundSize: 'contain',
backgroundRepeat: 'no-repeat',
backgroundPosition: 'center',
}}>
<p> </p>

  </div>

  </Table.Cell>
</Table.Row>
<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-l">
    Stepper Motor
  </Table.Cell>
  <Table.Cell>
    
  Used for projects typically not reliant on high speed but for robust durability and strength. 


    </Table.Cell>
  <Table.Cell>
    <div className="w-full h-full  flex items-center min-w-[100px] min-h-[100px]"   style={{
backgroundImage: `url("/images/stepper_motor.jpg")`,
backgroundSize: 'contain',
backgroundRepeat: 'no-repeat',
backgroundPosition: 'center',
}}>


</div>
</Table.Cell>
</Table.Row>
<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-l">
    
    Relays
  
  
   </Table.Cell>
  <Table.Cell> 
    

    
   Dozens of projects supported utilizing pumps, lights, motors with a large external power source needing to be turned on and off
   utilize relays for control.   

  <br />
  <br />
  Also the go to for repurposing old electronics for new projects with a little soldering and love. 
    
    </Table.Cell>
  <Table.Cell>
    <div className="w-full h-full  flex items-center min-w-[100px] min-h-[100px]"   style={{
backgroundImage: `url("/images/relay.jpg")`,
backgroundSize: 'contain',
backgroundRepeat: 'no-repeat',
backgroundPosition: 'center',
}}>

  </div>

</Table.Cell>
</Table.Row>

<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">


  <Table.Cell className="whitespace-nowrap font-medium te text-gray-900 dark:text-white text-l">
    
    Motor <br /> Controllers
    
    
    </Table.Cell>
  <Table.Cell> 
   
  When a servo won't get the job done by it's limitations (usually power and speed) and a requires a motor to be controlled with precision, and accuracy a motor controller is the go-to.



    </Table.Cell>
  <Table.Cell>
    <div className="w-full h-full  flex items-center min-w-[100px] min-h-[100px]"   style={{
backgroundImage: `url("/images/motor_control.jpg")`,
backgroundSize: 'contain',
backgroundRepeat: 'no-repeat',
backgroundPosition: 'center',
}}>

  </div>

</Table.Cell>
</Table.Row>





</Table.Body>
</Table>
</div>


</div>





          </Tabs.Item>

    
          <Tabs.Item title="Research" icon={HiOutlineBeaker }>




          <div className="grid grid-cols-1 w-[95%] mx-auto gap-[1rem] md:grid-cols-2 items-center">


          <div className="text-center ">


<div className="lg:w-[350px] mx-auto md:x-0 mt-[2rem] lg:mt-0 lg:h-[350px] w-[300px] h-[300px] relative">
          <Image
            src="/images/researchc.png"
            alt="Joshua Gagnier"
            layout="fill"
            className="relative z-[11] w-[100%] h-[100%] object-cover rounded-xl"
          />
          <div className="absolute w-[105%] h-[102%] z-[10]    rounded-xl"></div>
        </div>
        <br /><br />

<p>I have supported technically and guided the development of dozens of mesh, wifi, bluetooth, phone-app, and voice controlled devices. 

</p>


</div>

<div className="overflow-x-auto">

<Table>
<Table.Head>
<Table.HeadCell>Device</Table.HeadCell>
<Table.HeadCell>Utilization</Table.HeadCell>
<Table.HeadCell>Image</Table.HeadCell>
</Table.Head>
<Table.Body className="">
<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-l">
    {'Gas Sensors'}
  </Table.Cell>
  <Table.Cell>
    
    Whether it be for carbon monoxide, methane, dust, or other gasses I have supported development
    of dozens of projects utilizing gas sensors for safety, environmental, and health applications.
    
    </Table.Cell>
  <Table.Cell>
    <div className="w-full h-full flex items-center min-w-[100px] min-h-[100px]"   style={{
backgroundImage: `url("/images/dust_sensor.jpg")`,
backgroundSize: 'contain',
backgroundRepeat: 'no-repeat',
backgroundPosition: 'center',
}}>
<p> </p>

  </div>

  </Table.Cell>
</Table.Row>
<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-l">
    Light Sensors
  </Table.Cell>
  <Table.Cell>
    Detecting light of all kinds, I have supported utilizing light sensors for data collection,
    research, and project development. 
     
     </Table.Cell>
  <Table.Cell>
    <div className="w-full h-full  flex items-center min-w-[100px] min-h-[100px]"   style={{
backgroundImage: `url("/images/rgb_sensor.jpg")`,
backgroundSize: 'contain',
backgroundRepeat: 'no-repeat',
backgroundPosition: 'center',
}}>


</div>
</Table.Cell>
</Table.Row>
<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-l">
  Motion Sensors
   </Table.Cell>
  <Table.Cell>
     Both ultrasonic, and PIR motion sensors have been used in dozens of projects for security, automation, and data collection.
    </Table.Cell>
  <Table.Cell>
    <div className="w-full h-full  flex items-center min-w-[100px] min-h-[100px]"   style={{
backgroundImage: `url("/images/motion_sensor.jpg")`,
backgroundSize: 'contain',
backgroundRepeat: 'no-repeat',
backgroundPosition: 'center',
}}>

  </div>

</Table.Cell>
</Table.Row>
<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-l">
    Chemical Sensors
  
  </Table.Cell>
  <Table.Cell>
     Detecting water level, ph, and other chemical properties I have supported the development of dozens of projects utilizing chemical sensors for environmental, health, and safety applications.
     
     </Table.Cell>
  <Table.Cell>
    <div className="w-full h-full  flex items-center min-w-[100px] min-h-[100px]"   style={{
backgroundImage: `url("/images/ph_sensor.jpg")`,
backgroundSize: 'contain',
backgroundRepeat: 'no-repeat',
backgroundPosition: 'center',
}}>

  </div>

</Table.Cell>
</Table.Row>

</Table.Body>
</Table>
</div>


</div>





          </Tabs.Item>

        </Tabs>
      </div>

    );
};

export default EmbeddedContent;


