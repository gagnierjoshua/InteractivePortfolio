import { Button, Card, Timeline,  Carousel } from "flowbite-react";
import {
  HiArrowNarrowRight,
  HiOutlineRefresh,
  HiMail,
  HiOutlineDocumentSearch,
  HiOutlineDesktopComputer,
  HiOutlineCollection,
  HiOutlineDeviceMobile,
  HiOutlineEmojiHappy,
  HiOutlineServer,
  HiCalendar,
} from "react-icons/hi";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

function Webtimeline() {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1400px)" });

  return (
    <div className="box-border grid grid-cols-1 md:grid-cols-2 p-8 border-4  border-gray-400 bg-gray-200">
      <div className=" w-[95%] mx-auto gap-[4rem] flex flex-col  items-center p-3 ">

    




    <Card className="max-w-sm max-w-lg-[mb-8] max-h-[650px]" >
    <div className="flex items-center justify-center"> 
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Project #1 Title
      </h5>
      </div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-85">
      <Carousel>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       This is the first web app that I am looking to develop and flush out and put in my portfolio.
       I will add more cards like this below for future projects. 
      </p>
      <div className="flex items-center justify-center"> 
      <Button.Group>
      <Button color="gray">View Live</Button>
      <Button color="gray">GitHub</Button>
    </Button.Group>
    </div>
    </Card>


  
      </div>
      <div className=" w-[85%] mx-auto gap-[4rem] md:flex-row sm:flex-row flex-col justify-center items-center p-3 ">
        <div>
          <h1 className="text-[20px] font-bold  md-[1rem]">
            NLP Scrape & Clean Chrome Extension
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-slate-600">
            Process to <span className="text-black">MVP</span>
          </h2>

          <p className="mb-10 text-[15px] text-slate-900  ">
            How a struggle with training and contextualizing LLMs led to the
            development {isLargeScreen && <br />} of a chrome extension to
            scrape and clean text for training data.
          </p>

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
                      For training and contextualizing LLMs gathering, cleaning,
                      and chunking text to reach specific token limits is a time
                      consuming and error-prone process. A better solution is
                      needed to reduce the time spent.
                    </p>
                  </Card>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Point icon={HiOutlineEmojiHappy} />
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
                      Defined a product goal and user stories for a chrome
                      extension to solve the identified problem.
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
                      Designed a wireframe and mock-up of the chrome extension
                      to visualize the user experience and features.
                    </p>
                  </Card>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Point icon={HiOutlineCollection} />
              <Timeline.Content>
                <Timeline.Time>Step 4</Timeline.Time>
                <Timeline.Title>Tech Stack Definition </Timeline.Title>
                <Timeline.Body>
                  Defined tech stack to be used for development: JavaScript,
                  HTML, CSS, GoLang, and Python for the chrome extension.
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
                      Translated and prioritized user stories into a backlog on
                      Github projects to track progress, issues, and features in
                      development. Also to support onboarding of collaborators.
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
                      Developed front end of the chrome extension using HTML,
                      CSS, and JavaScript with all features. Will comment out
                      features not yet developed, and slowly add as
                      functionality is developed.
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
                      Prior to developing my own APIs utilized existing API/API
                      keys to test functionality of the chrome extension.
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
                      Currently in development of GoLang API to handle data
                      processing and cleaning of scraped data from Public APIs.
                      Developed & tested a REST API to move jsons in Postman.
                      Once that is complete, will be publishing limited
                      functionality MVPs to gather user feedback for continued
                      development.
                    </p>
                  </Card>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Point icon={HiMail} />
              <Timeline.Content>
                <Timeline.Time>Step 9</Timeline.Time>
                <Timeline.Title>Simplify & Deviver MVP</Timeline.Title>
                <Timeline.Body>
                  <Card className="max-w-sm">
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Non-functional features commented out, leaving bare bone
                      extension that converts website url to .txt output to be
                      delivered to users for initial testing & feedback.
                    </p>
                  </Card>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </div>
  );
}

export default Webtimeline;
