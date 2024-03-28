import { Button, Card, Timeline } from "flowbite-react";
import { HiArrowNarrowRight,HiOutlineRefresh, HiOutlineDocumentSearch, HiOutlineDesktopComputer, HiOutlineCollection , HiOutlineDeviceMobile, HiOutlineEmojiHappy , HiOutlineServer, HiCalendar } from "react-icons/hi";
import Image from "next/image";

function Webtimeline() {
  return (

<div className="box-border p-8 border-4 border-gray-400 bg-gray-200">
<div className=" w-[92%] mx-auto gap-[1rem]   items-center  " >
    <Timeline>


      <Timeline.Item>
        <Timeline.Point icon={HiOutlineDocumentSearch} />
        <Timeline.Content>
          <Timeline.Time>Step 1</Timeline.Time>
          <Timeline.Title>Problem Identified</Timeline.Title>
      
            <Timeline.Body>
        

              <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/videos/cleanedfinal.gif"
    >
 
      <p className="font-normal text-gray-700 dark:text-gray-400">
      For training and contextualizing LLMs gathering, cleaning, and chunking text to reach specific token limits is a time consuming and error-prone process. 
              A better solution is needed to reduce the time spent. 

      </p>
    </Card>


            </Timeline.Body>
     
      

        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Point icon={HiOutlineEmojiHappy } />
        <Timeline.Content>
          <Timeline.Time>Step 2</Timeline.Time>
          <Timeline.Title>User Experiences</Timeline.Title>
          <Timeline.Body>


          <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/images/brainstorm.png"
    >
 
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Defined a product goal and user stories for a chrome extension to solve the identified problem.

      </p>
    </Card>


            
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Point icon={HiOutlineDeviceMobile} />
        <Timeline.Content>
          <Timeline.Time>Step 3</Timeline.Time>
          <Timeline.Title>UI/UX Mock-Up </Timeline.Title>
          <Timeline.Body>
           

            <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/images/mockup.png"
    >
 
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Designed a wireframe and mock-up of the chrome extension to visualize the user experience and features.

      </p>
    </Card>

          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>


      <Timeline.Item>
        <Timeline.Point icon={ HiOutlineCollection } />
        <Timeline.Content>
          <Timeline.Time>Step 4</Timeline.Time>
          <Timeline.Title>Tech Stack Definition </Timeline.Title>
          <Timeline.Body>
            Defined tech stack to be used for development:
            JavaScript, HTML, CSS, GoLang, and Python for the chrome extension.





          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>


      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>Step 5</Timeline.Time>
          <Timeline.Title>Github Project Outline</Timeline.Title>
          <Timeline.Body>
            
          
            <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/images/backlog.png"
    >
 
      <p className="font-normal text-gray-700 dark:text-gray-400">
     Translated and prioritized user stories into a backlog on Github projects to track progress, issues, and features in development. 
     Also to support onboarding of collaborators.  
          

      </p>
    </Card>
          
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>


      <Timeline.Item>
        <Timeline.Point icon={HiOutlineDesktopComputer} />
        <Timeline.Content>
          <Timeline.Time>Step 6</Timeline.Time>
          <Timeline.Title>Front-End Development</Timeline.Title>
          <Timeline.Body>
           

           <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/videos/frontend.gif"
    >
 
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Developed front end of the chrome extension using HTML, CSS, and JavaScript with all features. 
      
      Will comment out features not yet developed, and slowly add as functionality is developed. 
          

      </p>
    </Card>



           
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Point icon={HiOutlineRefresh} />
        <Timeline.Content>
          <Timeline.Time>Step 7</Timeline.Time>
          <Timeline.Title>Backend Development</Timeline.Title>
          <Timeline.Body>

          
          <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/videos/webscrapetest.gif"
    >
 
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Prior to developing my own APIs utilized existing API/API keys to test functionality of the chrome extension. 
           Verified json data was being returned. 
          

      </p>
    </Card>

          

          
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>


      <Timeline.Item>
        <Timeline.Point icon={HiOutlineServer} />
        <Timeline.Content>
          <Timeline.Time>Step 8</Timeline.Time>
          <Timeline.Title>GoLang API Development</Timeline.Title>
          <Timeline.Body>


          <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/images/postman.png"
    >
 
      <p className="font-normal text-gray-700 dark:text-gray-400">
 
      Currently in development of GoLang API to handle data processing and cleaning of scraped data from Public APIs.

Developed & tested a REST API to move jsons in Postman.

Once that is complete, will be publishing limited functionality MVPs to gather user feedback for continued development.
          

      </p>
    </Card>


 
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>



    </Timeline>




    </div>
    </div>
  );
}

export default Webtimeline;