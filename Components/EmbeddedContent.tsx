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
      

        <div className="overflow-x-auto">

            <div className="text-center text-3xl">
              <br />
        <h1> Embedded Engineering</h1>
        <br />


      

            </div>
        <Tabs aria-label="Full width tabs" style="fullWidth">
          <Tabs.Item active title="Overview" icon={HiOutlineDocumentText }>
                   



<div className=" grid-cols-1 mx-auto grid lg:grid-cols-2">


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



            <div className="w-[80%] width-[650px]  justify-center items-center">
  <div className="flex justify-center items-center">

        
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








            </div>
          </Tabs.Item>
          <Tabs.Item title="IoT & BT" icon={HiOutlineWifi}>
          

          <div className="flex justify-between">
          <div className="overflow-x-auto">

      <Table>
        <Table.Head>
          <Table.HeadCell>Device Name</Table.HeadCell>
          <Table.HeadCell>Utilization</Table.HeadCell>
    
        </Table.Head>
        <Table.Body className="">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
       
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </Table.Cell>
            <Table.Cell>White</Table.Cell>
         
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
            <Table.Cell>Black</Table.Cell>
       
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
    <div className="text-center">
    <p>text</p>


    </div>
    </div>




            
          </Tabs.Item>
          <Tabs.Item title="Mechanical" icon={HiCog}>
            This is <span className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</span>.
            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
            control the content visibility and styling.
          </Tabs.Item>
          <Tabs.Item title="Research" icon={HiOutlineBeaker }>
            This is <span className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</span>.
            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
            control the content visibility and styling.
          </Tabs.Item>

        </Tabs>
      </div>

    );
};

export default EmbeddedContent;


