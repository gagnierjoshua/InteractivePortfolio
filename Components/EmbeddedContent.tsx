import Image from "next/image";
import { Tabs } from "flowbite-react";
import { HiGlobeAlt } from "react-icons/hi";
import { HiAdjustments, HiOutlineDocumentText ,HiClipboardList, HiOutlineBeaker ,HiOutlineSearchCircle, HiOutlineWifi, HiCog, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

import React from 'react';
import PropTypes from 'prop-types';
import { Grommet, Box, Diagram, Stack } from "grommet/components";


//https://v2.grommet.io/components

const EmbeddedContent = () => {
    return (
      

        <div className="overflow-x-auto">

            <div>




        <p>hi</p>

            </div>
        <Tabs aria-label="Full width tabs" style="fullWidth">
          <Tabs.Item active title="Overview" icon={HiOutlineDocumentText }>
            
            





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
        box 1 text test qwadjkaksdkahjsdk  ashdjads  asdjnaksdadnsjk
        </Box>
      <Box id="2" margin="small" pad="small" background="light-4" >
        Box 2 text testad asdaasd asdasd asdassdasdasd
        
        </Box>
    </Box>
    
    <Box direction="row"  margin={{ bottom: 'large' }}>
      <Box id="3" margin="small" pad="small" background="light-4" >
     
      box3 test
      </Box>
      <Box id="4" margin="small" pad="small" background="light-4" >
      box4 test
      </Box>
    </Box>
  </Box>
</Stack>











            
            
            
            This is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
            control the content visibility and styling.
          </Tabs.Item>
          <Tabs.Item title="IoT & BT" icon={HiOutlineWifi}>
            This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
            control the content visibility and styling.
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


